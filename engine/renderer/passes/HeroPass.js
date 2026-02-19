export class HeroPass {
  constructor() {
    this.device = null;
    this.pipeline = null;
    this.uniformBuffer = null;
    this.bindGroup = null;
    
    this.shapes = [];
    this.maxShapes = 8;

    // --- Curated "Highland" Scripts ---
    this.scripts = [
      {
        name: "The Great Highland",
        size: 1.8,
        color: [0.8, 0.7, 0.9], // Purple
        duration: 25, // Very slow
        path: { x1: -0.8, y1: 0.8, x2: 1.8, y2: 0.7 }
      },
      {
        name: "The Event Pulse",
        size: 0.9,
        color: [0.0, 0.9, 1.0], // Neon Blue
        duration: 12,
        path: { x1: 1.2, y1: 0.2, x2: -0.2, y2: 0.8 }
      },
      {
        name: "The Distant Dawn",
        size: 2.5,
        color: [0.9, 0.8, 0.6], // Orange/Amber
        duration: 40,
        path: { x1: 0.5, y1: 1.5, x2: 0.6, y2: -0.5 }
      },
      {
        name: "Neural Drift",
        size: 0.7,
        color: [0.7, 1.0, 0.8], // Green
        duration: 15,
        path: { x1: -0.3, y1: -0.2, x2: 1.3, y2: 1.2 }
      },
      {
        name: "The Obsidian Sweep",
        size: 1.2,
        color: [0.6, 0.7, 1.0], // Steel Blue
        duration: 20,
        path: { x1: -0.5, y1: 0.3, x2: 1.5, y2: 0.3 }
      },
      {
        name: "Shadow Glimmer",
        size: 0.5,
        color: [1.0, 0.8, 1.0], // Soft Pink
        duration: 8,
        path: { x1: 0.8, y1: 1.2, x2: 0.2, y2: -0.2 }
      }
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
        shapes: array<Shape, 8>,
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
        
        // 1. Fog Layer
        var fog = 0.0;
        fog += noise(uv * 3.0 + t * 0.05) * 0.6;
        fog += noise(uv * 6.0 - t * 0.02) * 0.3;
        
        // 2. Base Darkness
        var color = vec3<f32>(0.01, 0.01, 0.02);
        
        // 3. Gliding Scripted Shapes
        for (var i = 0; i < 8; i++) {
          let s = uniforms.shapes[i];
          let d = distance(uv * vec2<f32>(aspect, 1.0), s.pos * vec2<f32>(aspect, 1.0));
          
          // Very soft light scattering
          let glow = exp(-d * (4.5 / s.size)) * 0.25 * s.opacity;
          color += s.color * glow;
        }
        
        color = mix(color, color * 0.3, fog);
        
        // Final Vignette
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
      size: 288, 
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

    const data = new Float32Array(288 / 4);
    data[0] = registry.time;
    data[1] = registry.screen.width;
    data[2] = registry.screen.height;
    data[3] = 8.0;
    data[4] = registry.input.mouse[0];
    data[5] = registry.input.mouse[1];

    for (let i = 0; i < 8; i++) {
      const offset = 8 + (i * 8);
      const s = this.shapes[i] || { x: -5, y: -5, opacity: 0, color: [0,0,0], size: 0.1 };
      data[offset] = s.x;
      data[offset + 1] = s.y;
      data[offset + 2] = s.opacity || 0;
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

    ctx.fillStyle = "#050507";
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "screen";
    for (let s of this.shapes) {
      const x = s.x * width;
      const y = (1.0 - s.y) * height;
      const size = s.size * 1000;
      
      const sGrad = ctx.createRadialGradient(x, y, 0, x, y, size);
      const c = s.color;
      const alpha = 0.12 * (s.opacity || 0);
      sGrad.addColorStop(0, `rgba(${c[0]*255}, ${c[1]*255}, ${c[2]*255}, ${alpha})`); 
      sGrad.addColorStop(1, "rgba(0,0,0,0)");
      
      ctx.fillStyle = sGrad;
      ctx.fillRect(x - size, y - size, size * 2, size * 2);
    }
    
    ctx.globalCompositeOperation = "source-over";
  }

  updateShapes(registry) {
    const t = registry.time;
    
    // Spawn every 4-6 seconds
    if (!this.lastTrigger || t - this.lastTrigger > (4.0 + Math.random() * 2.0)) {
      if (this.shapes.length < this.maxShapes) {
        this.lastTrigger = t;
        
        // Select random script
        const script = this.scripts[Math.floor(Math.random() * this.scripts.length)];
        
        this.shapes.push({
          ...script,
          startTime: t,
          opacity: 0,
          active: true,
          x: script.path.x1,
          y: script.path.y1
        });
      }
    }

    this.shapes = this.shapes.filter(s => s.active);

    for (let s of this.shapes) {
      const progress = (t - s.startTime) / s.duration;
      
      // Interpolate Position
      s.x = s.path.x1 + (s.path.x2 - s.path.x1) * progress;
      s.y = s.path.y1 + (s.path.y2 - s.path.y1) * progress;
      
      // Fine-tuned Opacity Curve: Fade in first 20%, stay full, fade out last 20%
      if (progress < 0.2) {
        s.opacity = progress / 0.2;
      } else if (progress > 0.8) {
        s.opacity = 1.0 - (progress - 0.8) / 0.2;
      } else {
        s.opacity = 1.0;
      }

      if (progress >= 1.0) {
        s.active = false;
      }
    }
  }
}
