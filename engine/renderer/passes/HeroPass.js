export class HeroPass {
  constructor() {
    this.device = null;
    this.pipeline = null;
    this.uniformBuffer = null;
    this.bindGroup = null;
    
    this.shapes = [
      { x: -0.5, y: 0.5, size: 0.4, color: [0.8, 0.7, 0.9], active: 0 },
      { x: 1.5, y: 0.2, size: 0.3, color: [0.7, 0.9, 0.8], active: 0 },
      { x: 0.5, y: 1.5, size: 0.5, color: [0.9, 0.8, 0.7], active: 0 },
      { x: 0.5, y: -0.5, size: 0.2, color: [0.7, 0.8, 0.9], active: 0 }
    ];
  }

  async init(device, format, registry) {
    this.device = device;

    const shaderCode = `
      struct Shape {
        pos: vec2<f32>,
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
        
        // 1. Mouse Disturbance (Clarity in the fog)
        let mouse_dist = distance(uv * vec2<f32>(aspect, 1.0), mouse * vec2<f32>(aspect, 1.0));
        let clarity = exp(-mouse_dist * 4.0); // Focus area around mouse
        
        // 2. Fog Layer
        var fog = 0.0;
        fog += noise(uv * 4.0 + t * 0.05) * 0.6;
        fog += noise(uv * 8.0 - t * 0.02) * 0.3;
        
        // Wiping effect: Reduce fog where mouse is
        fog *= (1.0 - clarity * 0.8);
        
        // 3. Base Darkness
        var color = vec3<f32>(0.005, 0.005, 0.01);
        
        // 4. Gliding Pastel Shapes
        for (var i = 0; i < 4; i++) {
          let s = uniforms.shapes[i];
          let d = distance(uv * vec2<f32>(aspect, 1.0), s.pos * vec2<f32>(aspect, 1.0));
          
          // Light scattering: brighter near mouse or in clarity
          let glow_strength = 12.0 / s.size;
          let glow = exp(-d * glow_strength) * 0.7;
          color += s.color * glow;
        }
        
        // 5. Neural Glow at Mouse
        let mouse_glow = exp(-mouse_dist * 10.0) * vec3<f32>(0.0, 0.5, 0.6);
        color += mouse_glow;
        
        // Apply Fog Influence
        color = mix(color, color * 0.4, fog);
        
        // Vignette
        let edge_dist = distance(uv, vec2<f32>(0.5));
        color *= (1.0 - edge_dist * 0.9);

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

    // Uniform Buffer Size: 16 (time,w,h,count) + 16 (mouse, pad) + 4 * 32 (shapes) = 160
    this.uniformBuffer = this.device.createBuffer({
      size: 160, 
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.bindGroup = this.device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: this.uniformBuffer } }],
    });
  }

  execute(passEncoder, registry) {
    if (!this.device || !this.pipeline) return;

    this.updateShapes(registry);

    const data = new Float32Array(160 / 4);
    data[0] = registry.time;
    data[1] = registry.screen.width;
    data[2] = registry.screen.height;
    data[3] = 4.0;
    
    // Mouse
    data[4] = registry.input.mouse[0];
    data[5] = registry.input.mouse[1];
    // 6, 7 are padding

    for (let i = 0; i < 4; i++) {
      const offset = 8 + (i * 8);
      const s = this.shapes[i];
      data[offset] = s.x;
      data[offset + 1] = s.y;
      data[offset + 2] = s.color[0];
      data[offset + 3] = s.color[1];
      data[offset + 4] = s.color[2];
      data[offset + 5] = s.size;
    }

    this.device.queue.writeBuffer(this.uniformBuffer, 0, data);
    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, this.bindGroup);
    passEncoder.draw(4);
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

      if (side === 0) { startX = Math.random(); startY = -0.2; vx = (Math.random() - 0.5) * 0.2; vy = 0.3; }
      else if (side === 1) { startX = 1.2; startY = Math.random(); vx = -0.3; vy = (Math.random() - 0.5) * 0.2; }
      else if (side === 2) { startX = Math.random(); startY = 1.2; vx = (Math.random() - 0.5) * 0.2; vy = -0.3; }
      else { startX = -0.2; startY = Math.random(); vx = 0.3; vy = (Math.random() - 0.5) * 0.2; }

      this.shapes[index] = {
        x: startX, y: startY, vx: vx, vy: vy,
        color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
        size: 0.2 + Math.random() * 0.4,
        active: true
      };
    }

    for (let s of this.shapes) {
      if (s && s.active) {
        // Subtle attraction to mouse
        const dx = mouse[0] - s.x;
        const dy = mouse[1] - s.y;
        s.vx += dx * 0.05 * registry.dt;
        s.vy += dy * 0.05 * registry.dt;

        s.x += s.vx * registry.dt;
        s.y += s.vy * registry.dt;
        
        if (s.x < -1 || s.x > 2 || s.y < -1 || s.y > 2) s.active = false;
      }
    }
  }
}
