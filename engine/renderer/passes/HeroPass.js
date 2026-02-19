export class HeroPass {
  constructor() {
    this.device = null;
    this.pipeline = null;
    this.uniformBuffer = null;
    this.bindGroup = null;
    
    // Shape state
    this.shapes = [
      { x: -0.5, y: 0.5, size: 0.4, color: [0.8, 0.7, 0.9], active: 0 },
      { x: 1.5, y: 0.2, size: 0.3, color: [0.7, 0.9, 0.8], active: 0 }
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

      // Hash function for randomness
      fn hash(p: vec2<f32>) -> f32 {
        return fract(sin(dot(p, vec2<f32>(127.1, 311.7))) * 43758.5453123);
      }

      // 2D Noise
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
        
        // 1. Foggy/Mist Layer (Fractal Noise)
        var fog = 0.0;
        let fog_uv = uv * 3.0;
        fog += noise(fog_uv + t * 0.1) * 0.5;
        fog += noise(fog_uv * 2.0 - t * 0.05) * 0.25;
        
        // 2. Wet Glass Distortion (Vertical Streaks)
        var distort_uv = uv;
        let streak = sin(uv.x * 50.0 + noise(vec2<f32>(uv.x * 10.0, t * 0.2)) * 2.0);
        if (streak > 0.98) {
           distort_uv.y += t * 0.2; // Move drops down
        }
        
        // 3. Darkness Base
        var color = vec3<f32>(0.01, 0.01, 0.02); // Absolute darkness
        
        // 4. Gliding Pastel Shapes
        for (var i = 0; i < 4; i++) {
          let s = uniforms.shapes[i];
          let dist = distance(uv * vec2<f32>(aspect, 1.0), s.pos * vec2<f32>(aspect, 1.0));
          let glow = exp(-dist * (15.0 / s.size)) * 0.6;
          color += s.color * glow;
        }
        
        // 5. Apply Fog and Glass Tint
        color = mix(color, color * 1.2, fog * 0.3); // Light scattering in fog
        
        // Dark vignette
        let d = distance(uv, vec2<f32>(0.5));
        color *= (1.0 - d * 0.8);

        return vec4<f32>(color, 1.0);
      }
    `;

    const shaderModule = device.createShaderModule({ code: shaderCode });

    this.pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module: shaderModule,
        entryPoint: "vs_main",
      },
      fragment: {
        module: shaderModule,
        entryPoint: "fs_main",
        targets: [{ format: format }],
      },
      primitive: {
        topology: "triangle-strip",
      },
    });

    // Uniform Buffer Size: time(4) + w(4) + h(4) + count(4) + 4 * (pos(8)+color(12)+size(4)+padding(8)) = 16 + 4 * 32 = 144
    this.uniformBuffer = device.createBuffer({
      size: 144, 
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.bindGroup = device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: this.uniformBuffer } }],
    });
  }

  execute(passEncoder, registry) {
    if (!this.device || !this.pipeline) return;

    // Update Glide Shapes
    this.updateShapes(registry);

    // Prepare Uniform Data
    const data = new Float32Array(144 / 4);
    data[0] = registry.time;
    data[1] = registry.screen.width;
    data[2] = registry.screen.height;
    data[3] = 4.0; // Shape count

    for (let i = 0; i < 4; i++) {
      const offset = 4 + (i * 8); // 8 floats per shape (2 pos, 3 color, 1 size, 2 padding)
      const s = this.shapes[i] || { x: -2, y: -2, color: [0,0,0], size: 0 };
      
      data[offset] = s.x;
      data[offset + 1] = s.y;
      data[offset + 2] = s.color[0];
      data[offset + 3] = s.color[1];
      data[offset + 4] = s.color[2];
      data[offset + 5] = s.size || 0.1;
      // padding data[offset + 6] and data[offset + 7]
    }

    this.device.queue.writeBuffer(this.uniformBuffer, 0, data);

    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, this.bindGroup);
    passEncoder.draw(4);
  }

  updateShapes(registry) {
    const t = registry.time;
    
    // Initialize or Reset shapes periodically
    if (!this.lastTrigger || t - this.lastTrigger > 4.0) {
      this.lastTrigger = t;
      const index = Math.floor(Math.random() * 4);
      
      // Random edge start
      const side = Math.floor(Math.random() * 4); // 0:top, 1:right, 2:bottom, 3:left
      let startX, startY, vx, vy;
      
      const pastelColors = [
        [0.8, 0.7, 0.9], // Purple
        [0.7, 0.9, 0.8], // Green
        [0.9, 0.8, 0.7], // Orange
        [0.7, 0.8, 0.9]  // Blue
      ];

      if (side === 0) { startX = Math.random(); startY = -0.2; vx = (Math.random() - 0.5) * 0.2; vy = 0.3; }
      else if (side === 1) { startX = 1.2; startY = Math.random(); vx = -0.3; vy = (Math.random() - 0.5) * 0.2; }
      else if (side === 2) { startX = Math.random(); startY = 1.2; vx = (Math.random() - 0.5) * 0.2; vy = -0.3; }
      else { startX = -0.2; startY = Math.random(); vx = 0.3; vy = (Math.random() - 0.5) * 0.2; }

      this.shapes[index] = {
        x: startX,
        y: startY,
        vx: vx,
        vy: vy,
        color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
        size: 0.2 + Math.random() * 0.3,
        active: true
      };
    }

    // Move active shapes
    for (let s of this.shapes) {
      if (s && s.active) {
        s.x += s.vx * registry.dt;
        s.y += s.vy * registry.dt;
        
        // Deactivate if far off screen
        if (s.x < -1 || s.x > 2 || s.y < -1 || s.y > 2) {
          s.active = false;
        }
      }
    }
  }
}
