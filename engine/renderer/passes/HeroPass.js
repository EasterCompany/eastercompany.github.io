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
        color: [0.8, 0.7, 0.9], 
        duration: 25, 
        path: { x1: -0.8, y1: 0.8, x2: 1.8, y2: 0.7 }
      },
      {
        name: "The Event Pulse",
        size: 0.9,
        color: [0.0, 0.9, 1.0], 
        duration: 12,
        path: { x1: 1.2, y1: 0.2, x2: -0.2, y2: 0.8 }
      },
      {
        name: "The Distant Dawn",
        size: 2.5,
        color: [0.9, 0.8, 0.6], 
        duration: 40,
        path: { x1: 0.5, y1: 1.5, x2: 0.6, y2: -0.5 }
      },
      {
        name: "Neural Drift",
        size: 0.7,
        color: [0.7, 1.0, 0.8], 
        duration: 15,
        path: { x1: -0.3, y1: -0.2, x2: 1.3, y2: 1.2 }
      },
      {
        name: "The Obsidian Sweep",
        size: 1.2,
        color: [0.6, 0.7, 1.0], 
        duration: 20,
        path: { x1: -0.5, y1: 0.3, x2: 1.5, y2: 0.3 }
      },
      {
        name: "Shadow Glimmer",
        size: 0.5,
        color: [1.0, 0.8, 1.0], 
        duration: 8,
        path: { x1: 0.8, y1: 1.2, x2: 0.2, y2: -0.2 }
      }
    ];

    this.busyIntensity = 0;
    this.targetBusyIntensity = 0;
    this.uiIntensity = 0;
    this.targetUIIntensity = 0;
    this.lastHB = 0;
    this.connectionsInitialized = false;
  }

  async init(device, format, registry) {
    this.device = device;

    const shaderCode = `
      struct Shape {
        pos: vec2<f32>,
        opacity: f32,
        size: f32,
        color: vec3<f32>,
        momentum: f32,
        parent_idx: f32,
        p1: f32,
        p2: f32,
        p3: f32,
      };

      struct Uniforms {
        time: f32,
        width: f32,
        height: f32,
        p0: f32, 
        mouse: vec2<f32>,
        busy_intensity: f32,
        heartbeat: f32,
        ui_intensity: f32,
        p1: f32,
        p2: f32,
        p3: f32,
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
        let center = vec2<f32>(0.5, 0.5);
        
        // 1. Fog Layer (Organic Smoke)
        var fog_noise = 0.0;
        fog_noise += noise(uv * 3.0 + t * 0.05) * 0.6;
        fog_noise += noise(uv * 6.0 - t * 0.02) * 0.3;
        
        // 2. Base Darkness and Volumetric Smoke
        var color = vec3<f32>(0.01, 0.01, 0.02);
        let smoke_color = vec3<f32>(0.05, 0.07, 0.1);
        color = mix(color, smoke_color, fog_noise * 0.36);
        
        // 3. Central Blue Light Source
        if (busy > 0.01) {
          let d_center = distance(uv * vec2<f32>(aspect, 1.0), center * vec2<f32>(aspect, 1.0));
          let center_pulse = hb * 0.4 + 0.6;
          let center_glow = exp(-d_center * 15.0) * 0.4 * busy * center_pulse;
          color += vec3<f32>(0.0, 0.6, 1.0) * center_glow;
        }

        // 4. Synaptic Bonds and Wandering Nodes
        for (var i = 0; i < 8; i++) {
          let s = uniforms.shapes[i];
          let aspect_vec = vec2<f32>(aspect, 1.0);
          let d_shape = distance(uv * aspect_vec, s.pos * aspect_vec);
          
          // 4a. Base Node Glow
          let momentum_boost = s.momentum * hb * 0.4;
          let node_glow = exp(-d_shape * (15.0 / s.size)) * 0.1 * s.opacity * (1.0 + momentum_boost);
          color += s.color * node_glow;

          // 4b. Directional Light Cone (In front of motion)
          let dir = vec2<f32>(s.p1, s.p2);
          if (length(dir) > 0.1) {
            let to_frag = (uv - s.pos) * aspect_vec;
            let dist_to_frag = length(to_frag);
            if (dist_to_frag > 0.001) {
              let cos_theta = dot(normalize(to_frag), dir);
              let cone_intensity = smoothstep(0.7, 1.0, cos_theta); 
              let cone_falloff = exp(-dist_to_frag * (8.0 / s.size));
              color += s.color * cone_intensity * cone_falloff * 0.15 * s.opacity;
            }
          }

          // 4c. Neural Bonds (Synapses)
          if (busy > 0.1 && hb > 0.01 && s.opacity > 0.2 && s.parent_idx >= -1.5) {
            var origin: vec2<f32>;
            if (s.parent_idx < -0.5) { // Center connection
              origin = center;
            } else {
              origin = uniforms.shapes[i32(s.parent_idx)].pos;
            }
            
            let pa = uv - origin;
            let ba = s.pos - origin;
            let h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
            
            // Flowy curve displacement
            let p_norm = normalize(vec2<f32>(-ba.y, ba.x)); 
            let curve_freq = 2.0;
            let curve_amp = 0.01 * sin(h * 3.14159);
            let flow_noise = noise(vec2<f32>(h * curve_freq, t * 0.3)) * curve_amp;
            
            let dist_to_bond = distance(uv, origin + ba * h + p_norm * flow_noise);
            
            // Slower, energetic surge
            let surge = sin(t * 4.0 - h * 6.0) * 0.5 + 0.5;
            let bond_core = exp(-dist_to_bond * 1500.0);
            let bond_glow = exp(-dist_to_bond * 200.0) * 0.4;
            
            // Heartbeat fade-in/out for the bond
            let bond_intensity = hb * 0.8 * busy;
            let bond_color = mix(s.color, vec3<f32>(0.0, 0.7, 1.0), 0.6);
            
            color += bond_color * (bond_core * 2.0 + bond_glow * surge) * bond_intensity;
          }
        }
        
        color = mix(color, color * 0.3, fog_noise * 0.9);
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
      size: 432, 
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

    const hb = registry.heartbeatIntensity || 0;
    
    // Re-calculate neural bonds each cycle when heartbeat is low
    if (hb < 0.05 && this.lastHB >= 0.05) {
      this.connectionsInitialized = false;
    }
    this.lastHB = hb;

    if (!this.connectionsInitialized && hb < 0.1) {
      this.calculateBonds(registry);
      this.connectionsInitialized = true;
    }

    // Update Intensities
    this.targetBusyIntensity = registry.systemBusy ? 1.0 : 0.0;
    const lerpSpeed = 0.05;
    this.busyIntensity += (this.targetBusyIntensity - this.busyIntensity) * lerpSpeed;
    
    this.targetUIIntensity = registry.isOverlayActive ? 1.0 : 0.0;
    this.uiIntensity += (this.targetUIIntensity - this.uiIntensity) * lerpSpeed;

    const data = new Float32Array(432 / 4);
    data[0] = registry.time;
    data[1] = registry.screen.width;
    data[2] = registry.screen.height;
    data[3] = 0; // Padding
    data[4] = registry.input.mouse[0];
    data[5] = registry.input.mouse[1];
    data[6] = this.busyIntensity;
    data[7] = hb;
    data[8] = this.uiIntensity;

    for (let i = 0; i < 8; i++) {
      const offset = 12 + (i * 12);
      const s = this.shapes[i] || { x: -5, y: -5, opacity: 0, color: [0,0,0], momentum: 0, parentIdx: -5, size: 0.1 };
      
      // Calculate normalized direction vector
      let dirX = 0, dirY = 0;
      if (s.path) {
        dirX = s.path.x2 - s.path.x1;
        dirY = s.path.y2 - s.path.y1;
        const len = Math.hypot(dirX, dirY);
        if (len > 0) {
          dirX /= len;
          dirY /= len;
        }
      }

      data[offset] = s.x;
      data[offset + 1] = s.y;
      data[offset + 2] = s.opacity || 0;
      data[offset + 3] = s.size || 0.1;
      data[offset + 4] = s.color[0];
      data[offset + 5] = s.color[1];
      data[offset + 6] = s.color[2];
      data[offset + 7] = s.momentum || 0;
      data[offset + 8] = s.parentIdx === undefined ? -5 : s.parentIdx;
      data[offset + 9] = dirX;  // p1
      data[offset + 10] = dirY; // p2
    }

    this.device.queue.writeBuffer(this.uniformBuffer, 0, data);
    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, this.bindGroup);
    passEncoder.draw(4);
  }

  calculateBonds(registry) {
    this.shapes.forEach(s => { s.momentum = 0; s.parentIdx = -5; });
    const center = { x: 0.5, y: 0.5 };

    // Level 1: Center to Shapes
    this.shapes.forEach((s) => {
      const d = Math.hypot(s.x - center.x, s.y - center.y);
      if (d < 0.5 && s.opacity > 0.2) {
        s.momentum = 1.0;
        s.parentIdx = -2; // Special code for center
      }
    });

    // Level 2+: Shape to Shape
    for (let j = 0; j < 3; j++) {
      this.shapes.forEach((s1, i) => {
        if (s1.momentum > 0) return;
        this.shapes.forEach((s2, k) => {
          if (s2.momentum === 0 || i === k) return;
          const d = Math.hypot(s1.x - s2.x, s1.y - s2.y);
          const threshold = 0.25 + (s2.momentum * 0.1);
          if (d < threshold && s1.opacity > 0.2) {
            s1.momentum = s2.momentum + 1.0;
            s1.parentIdx = k;
          }
        });
      });
    }
  }

  execute2D(ctx, registry) {
    // 2D fallback simplified for the new design
    this.updateShapes(registry);
    const { width, height } = registry.screen;
    ctx.fillStyle = "#050507";
    ctx.fillRect(0, 0, width, height);
  }

  updateShapes(registry) {
    const t = registry.time;
    const isBusy = registry.systemBusy;
    const interval = isBusy ? (0.5 + Math.random() * 1.0) : (4.0 + Math.random() * 2.0);

    if (!this.lastTrigger || t - this.lastTrigger > interval) {
      if (this.shapes.length < this.maxShapes) {
        this.lastTrigger = t;
        const script = this.scripts[Math.floor(Math.random() * this.scripts.length)];
        this.shapes.push({
          ...script,
          size: script.size * (0.8 + Math.random() * 1.5),
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
      s.x = s.path.x1 + (s.path.x2 - s.path.x1) * progress;
      s.y = s.path.y1 + (s.path.y2 - s.path.y1) * progress;
      if (progress < 0.2) s.opacity = progress / 0.2;
      else if (progress > 0.8) s.opacity = 1.0 - (progress - 0.8) / 0.2;
      else s.opacity = 1.0;
      if (progress >= 1.0) s.active = false;
    }
  }
}
