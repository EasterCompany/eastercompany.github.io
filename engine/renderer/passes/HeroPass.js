export class HeroPass {
  constructor() {
    this.device = null;
    this.pipeline = null;
    this.uniformBuffer = null;
    this.bindGroup = null;
    
    this.shapes = [
      { x: 0.2, y: 0.2, vx: 0.05, vy: 0.05, size: 0.4, color: [0.8, 0.7, 0.9], opacity: 1.0, active: true },
      { x: 0.8, y: 0.8, vx: -0.05, vy: -0.05, size: 0.3, color: [0.7, 0.9, 0.8], opacity: 1.0, active: true },
      { x: 0.5, y: 0.5, vx: 0.02, vy: -0.08, size: 0.5, color: [0.9, 0.8, 0.7], opacity: 1.0, active: true },
      { x: 0.1, y: 0.9, vx: 0.08, vy: -0.02, size: 0.2, color: [0.7, 0.8, 0.9], opacity: 1.0, active: true }
    ];
  }

  async init(device, format, registry) {
    this.device = device;

    const shaderCode = `
      struct Shape {
        pos: vec2<f32>,
        opacity: f32,
        pad: f32,
        color: vec3<f32>,
        size: f32,
      };

      struct Uniforms {
        time: f32,
        width: f32,
        height: f32,
        shape_count: f32,
        mouse: vec2<f32>,
        padding: vec2<f32>,
        shapes: array<Shape, 4>,
      };
      
      @group(0) @binding(0) var<uniform> uniforms: Uniforms;

      struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) uv: vec2<f32>,
      };

      @vertex
      fn vs_main(@builtin(vertex_index) in_vertex_index: u32) -> VertexOutput {
        var pos = array<vec2<f32>, 4>(
          vec2<f32>(-1.0, -1.0),
          vec2<f32>(1.0, -1.0),
          vec2<f32>(-1.0, 1.0),
          vec2<f32>(1.0, 1.0)
        );
        var output: VertexOutput;
        output.position = vec4<f32>(pos[in_vertex_index], 0.0, 1.0);
        output.uv = pos[in_vertex_index] * 0.5 + 0.5;
        return output;
      }

      fn hash(p: vec2<f32>) -> f32 {
        return fract(sin(dot(p, vec2<f32>(127.1, 311.7))) * 43758.5453123);
      }

      fn noise(p: vec2<f32>) -> f32 {
        let i = floor(p);
        let f = fract(p);
        let u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2<f32>(0.0, 0.0)), hash(i + vec2<f32>(1.0, 0.0)), u.x),
                   mix(hash(i + vec2<f32>(0.0, 1.0)), hash(i + vec2<f32>(1.0, 1.0)), u.x), u.y);
      }

      @fragment
      fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
        let uv = in.uv;
        let t = uniforms.time;
        let aspect = uniforms.width / uniforms.height;
        let mouse = uniforms.mouse;
        
        // 1. Fog Layer
        var fog = 0.0;
        fog += noise(uv * 3.0 + t * 0.05) * 0.6;
        fog += noise(uv * 6.0 - t * 0.02) * 0.3;
        
        // 2. Base Darkness
        var color = vec3<f32>(0.01, 0.01, 0.02);
        
        // 3. Gliding Pastel Shapes
        for (var i = 0; i < 4; i++) {
          let s = uniforms.shapes[i];
          let d = distance(uv * vec2<f32>(aspect, 1.0), s.pos * vec2<f32>(aspect, 1.0));
          
          // EVEN LARGER AND DIMMER
          let glow = exp(-d * (4.0 / s.size)) * 0.2 * s.opacity;
          color += s.color * glow;
        }
        
        // 4. Apply Fog
        color = mix(color, color * 0.3, fog);
        
        // 5. Vignette
        let edge_dist = distance(uv, vec2<f32>(0.5));
        color *= (1.0 - edge_dist * 0.7);

        return vec4<f32>(color, 1.0);
      }
    `;

    const shaderModule = this.device.createShaderModule({ code: shaderCode });
    this.pipeline = this.device.createRenderPipeline({
      layout: "auto",
      vertex: { module: shaderModule, entryPoint: "vs_main" },
      fragment: {
        module: shaderModule,
        entryPoint: "fs_main",
        targets: [{ format: format }],
      },
      primitive: { topology: "triangle-strip" },
    });

    this.uniformBuffer = this.device.createBuffer({
      size: 160, 
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.bindGroup = this.device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: this.uniformBuffer } }],
    });
  }

  init2D(ctx, registry) {
    console.log("HeroPass: 2D Path Initialized");
  }

  execute(passEncoder, registry) {
    if (!this.device || !this.pipeline) return;
    this.updateShapes(registry);

    const data = new Float32Array(160 / 4);
    data[0] = registry.time;
    data[1] = registry.screen.width;
    data[2] = registry.screen.height;
    data[3] = 4.0;
    data[4] = registry.input.mouse[0];
    data[5] = registry.input.mouse[1];

    for (let i = 0; i < 4; i++) {
      const offset = 8 + (i * 8); // Start after first 8 floats
      const s = this.shapes[i];
      data[offset] = s.x;
      data[offset + 1] = s.y;
      data[offset + 2] = s.opacity || 0; // Use first padding slot for opacity
      // data[offset + 3] = unused padding
      data[offset + 4] = s.color[0];
      data[offset + 5] = s.color[1];
      data[offset + 6] = s.color[2];
      data[offset + 7] = s.size;
    }

    this.device.queue.writeBuffer(this.uniformBuffer, 0, data);
    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, this.bindGroup);
    passEncoder.draw(4);
  }

  execute2D(ctx, registry) {
    this.updateShapes(registry);
    const { width, height } = registry.screen;
    const mouse = [registry.input.mouse[0] * width, (1.0 - registry.input.mouse[1]) * height];

    // Background
    ctx.fillStyle = "#050507";
    ctx.fillRect(0, 0, width, height);

    // Vignette
    const grad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width);
    grad.addColorStop(0, "rgba(0,0,0,0)");
    grad.addColorStop(1, "rgba(0,0,0,0.8)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Shapes
    ctx.globalCompositeOperation = "screen";
    for (let s of this.shapes) {
      if (!s.active) continue;
      const x = s.x * width;
      const y = (1.0 - s.y) * height;
      const size = s.size * 1200; // EVEN BIGGER
      
      const sGrad = ctx.createRadialGradient(x, y, 0, x, y, size);
      const c = s.color;
      const alpha = 0.1 * (s.opacity || 0); // DIMMER FOR SIZE
      sGrad.addColorStop(0, `rgba(${c[0]*255}, ${c[1]*255}, ${c[2]*255}, ${alpha})`); 
      sGrad.addColorStop(1, "rgba(0,0,0,0)");
      
      ctx.fillStyle = sGrad;
      ctx.fillRect(x - size, y - size, size * 2, size * 2);
    }
    
    ctx.globalCompositeOperation = "source-over";
  }

  updateShapes(registry) {
    const t = registry.time;
    const mouse = registry.input.mouse;
    
    if (!this.lastTrigger || t - this.lastTrigger > 3.0) {
      this.lastTrigger = t;
      const index = Math.floor(Math.random() * 4);
      const side = Math.floor(Math.random() * 4);
      let startX, startY, vx, vy;
      const pastelColors = [[0.8, 0.7, 0.9], [0.7, 0.9, 0.8], [0.9, 0.8, 0.7], [0.7, 0.8, 0.9]];

      if (side === 0) { startX = Math.random(); startY = -0.5; vx = (Math.random() - 0.5) * 0.15; vy = 0.2; }
      else if (side === 1) { startX = 1.5; startY = Math.random(); vx = -0.2; vy = (Math.random() - 0.5) * 0.15; }
      else if (side === 2) { startX = Math.random(); startY = 1.5; vx = (Math.random() - 0.5) * 0.15; vy = -0.2; }
      else { startX = -0.5; startY = Math.random(); vx = 0.2; vy = (Math.random() - 0.5) * 0.15; }

      this.shapes[index] = {
        x: startX, y: startY, vx: vx * 0.5, vy: vy * 0.5, // SLOWER
        color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
        size: 0.8 + Math.random() * 1.2, // MUCH BIGGER
        opacity: 0,
        active: true
      };
    }

    for (let i = 0; i < this.shapes.length; i++) {
      const s = this.shapes[i];
      if (!s || !s.active) continue;

      if (s.opacity === undefined) s.opacity = 1.0;

      // 1. Gravity Logic (Pull smaller to larger)
      for (let j = 0; j < this.shapes.length; j++) {
        if (i === j) continue;
        const other = this.shapes[j];
        if (!other || !other.active) continue;

        const dx = other.x - s.x;
        const dy = other.y - s.y;
        const distSq = dx * dx + dy * dy + 0.1; // Avoid singularity
        const force = (other.size / s.size) * 0.02 / distSq;

        s.vx += dx * force * registry.dt;
        s.vy += dy * force * registry.dt;
      }

      // 2. Mouse Drift (Subtle)
      const mdx = mouse[0] - s.x;
      const mdy = mouse[1] - s.y;
      s.vx += mdx * 0.01 * registry.dt;
      s.vy += mdy * 0.01 * registry.dt;

      // 3. Friction/Damping (Prevent infinite acceleration)
      s.vx *= 0.98;
      s.vy *= 0.98;

      s.x += s.vx * registry.dt;
      s.y += s.vy * registry.dt;
      
      const buffer = s.size * 2.0;
      if (s.x > -buffer && s.x < 1.0 + buffer && s.y > -buffer && s.y < 1.0 + buffer) {
        s.opacity = Math.min(1.0, s.opacity + registry.dt * 0.5);
      } else {
        s.opacity = Math.max(0.0, s.opacity - registry.dt * 0.5);
      }

      if (s.opacity <= 0 && (s.x < -2 || s.x > 3 || s.y < -2 || s.y > 3)) {
        s.active = false;
      }
    }
  }
}
