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

    this.busyIntensity = 0;
    this.targetBusyIntensity = 0;
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
        busy_intensity: f32,
        heartbeat: f32,
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
        let busy = uniforms.busy_intensity;
        let hb = uniforms.heartbeat;
        
        // 1. Fog Layer
        var fog = 0.0;
        fog += noise(uv * 3.0 + t * 0.05) * 0.6;
        fog += noise(uv * 6.0 - t * 0.02) * 0.3;
        
        // 2. Base Darkness
        var color = vec3<f32>(0.01, 0.01, 0.02);
        
        // 3. Thinking Lights (Cluster)
        if (busy > 0.0) {
          let center = vec2<f32>(0.5, 0.5);
          let cluster_radius = 0.16 * busy;
          
          for (var j = 0; j < 6; j++) {
            let fj = f32(j);
            let angle = fj * 1.047 + t * 0.5; // 60 degrees apart
            let offset = vec2<f32>(cos(angle), sin(angle)) * cluster_radius;
            let light_pos = center + offset;
            
            let d = distance(uv * vec2<f32>(aspect, 1.0), light_pos * vec2<f32>(aspect, 1.0));
            
            // Flicker pattern synchronized with heartbeat
            var flicker = hb * 0.8 + 0.2;
            
            let light_color = vec3<f32>(
              abs(sin(fj * 1.2)),
              abs(cos(fj * 0.8)),
              abs(sin(fj * 2.5))
            );
            
            let glow = exp(-d * 40.0) * 0.4 * flicker * busy;
            color += light_color * glow;
          }
        }

        // 4. Gliding Scripted Shapes and Zaps
        let center = vec2<f32>(0.5, 0.5);
        for (var i = 0; i < 8; i++) {
          let s = uniforms.shapes[i];
          let d_shape = distance(uv * vec2<f32>(aspect, 1.0), s.pos * vec2<f32>(aspect, 1.0));
          
          // Very soft light scattering
          let shape_glow = exp(-d_shape * (4.5 / s.size)) * 0.25 * s.opacity;
          color += s.color * shape_glow;

          // Zappy connection logic
          if (busy > 0.1 && hb > 0.6 && s.opacity > 0.5) {
            // Check distance from center to shape
            let dist_to_center = distance(s.pos, center);
            if (dist_to_center < 0.4) {
              // Draw a jagged line from a thinking light position to the shape
              // Pick one of the 6 lights based on shape index
              let light_idx = f32(i % 6);
              let angle = light_idx * 1.047 + t * 0.5;
              let light_origin = center + vec2<f32>(cos(angle), sin(angle)) * 0.16;
              
              // Segment distance logic
              let pa = uv - light_origin;
              let ba = s.pos - light_origin;
              let h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
              let dist_to_line = distance(uv, light_origin + ba * h);
              
              // Add "Zap" distortion using noise
              let zap_noise = noise(uv * 20.0 + t * 50.0) * 0.01;
              let zap_fade = exp(-(dist_to_line + zap_noise) * 400.0);
              
              color += s.color * zap_fade * (hb - 0.6) * 2.0 * busy;
            }
          }
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

    // Update Busy Intensity
    this.targetBusyIntensity = registry.systemBusy ? 1.0 : 0.0;
    const lerpSpeed = 0.05;
    this.busyIntensity += (this.targetBusyIntensity - this.busyIntensity) * lerpSpeed;

    const data = new Float32Array(288 / 4);
    data[0] = registry.time;
    data[1] = registry.screen.width;
    data[2] = registry.screen.height;
    data[3] = 8.0;
    data[4] = registry.input.mouse[0];
    data[5] = registry.input.mouse[1];
    data[6] = this.busyIntensity;
    data[7] = registry.heartbeatIntensity || 0;

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

    // Update Busy Intensity
    this.targetBusyIntensity = registry.systemBusy ? 1.0 : 0.0;
    const lerpSpeed = 0.05;
    this.busyIntensity += (this.targetBusyIntensity - this.busyIntensity) * lerpSpeed;

    ctx.fillStyle = "#050507";
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "screen";

    // Thinking Lights (2D Fallback)
    if (this.busyIntensity > 0.01) {
      const t = registry.time;
      const hb = registry.heartbeatIntensity || 0;
      const center = { x: width * 0.5, y: height * 0.5 };
      const clusterRadius = 100 * this.busyIntensity;

      for (let j = 0; j < 6; j++) {
        const angle = j * 1.047 + t * 0.5;
        const lx = center.x + Math.cos(angle) * clusterRadius;
        const ly = center.y + Math.sin(angle) * clusterRadius;
        
        let flicker = hb * 0.8 + 0.2;

        const size = 100 * this.busyIntensity * flicker;
        const grad = ctx.createRadialGradient(lx, ly, 0, lx, ly, size);
        const r = Math.round(Math.abs(Math.sin(j * 1.2)) * 255);
        const g = Math.round(Math.abs(Math.cos(j * 0.8)) * 255);
        const b = Math.round(Math.abs(Math.sin(j * 2.5)) * 255);
        
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.3 * this.busyIntensity})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        
        ctx.fillStyle = grad;
        ctx.fillRect(lx - size, ly - size, size * 2, size * 2);

        // Zaps to shapes
        if (hb > 0.6) {
          this.shapes.forEach((s, i) => {
            if (i % 6 !== j) return; // Each light zaps specific shapes
            const sx = s.x * width;
            const sy = (1.0 - s.y) * height;
            const dist = Math.hypot(sx - center.x, sy - center.y);
            
            if (dist < 300 && s.opacity > 0.5) {
              ctx.beginPath();
              ctx.moveTo(lx, ly);
              
              // Draw jagged line
              const segments = 5;
              for(let k = 1; k <= segments; k++) {
                const px = lx + (sx - lx) * (k/segments) + (Math.random() - 0.5) * 20;
                const py = ly + (sy - ly) * (k/segments) + (Math.random() - 0.5) * 20;
                ctx.lineTo(px, py);
              }
              
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(hb - 0.6) * this.busyIntensity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });
        }
      }
    }

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
