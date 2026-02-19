export class HeroPass {
  constructor() {
    this.device = null;
    this.computePipeline = null;
    this.renderPipeline = null;
    this.particleBuffer = null;
    this.uniformBuffer = null;
    this.computeBindGroup = null;
    this.renderBindGroup = null;
    this.numParticles = 64;
    
    // 2D Fallback state
    this.shapes = []; 
  }

  async init(device, format, registry) {
    this.device = device;

    // --- Data Init ---
    const initialData = new Float32Array(this.numParticles * 16);
    for (let i = 0; i < this.numParticles; i++) {
      const offset = i * 16;
      initialData[offset + 0] = (Math.random() - 0.5) * 20.0;
      initialData[offset + 1] = (Math.random() - 0.5) * 20.0;
      initialData[offset + 2] = 5.0 + Math.random() * 15.0; // Z depth
      initialData[offset + 3] = 1.0;

      initialData[offset + 4] = (Math.random() - 0.5) * 0.1;
      initialData[offset + 5] = (Math.random() - 0.5) * 0.1;
      initialData[offset + 6] = 0.0; 
      initialData[offset + 7] = 0.0; 

      const colors = [[0.8, 0.7, 0.9], [0.7, 0.9, 0.8], [0.9, 0.8, 0.7], [0.7, 0.8, 0.9]];
      const c = colors[Math.floor(Math.random() * colors.length)];
      initialData[offset + 8] = c[0];
      initialData[offset + 9] = c[1];
      initialData[offset + 10] = c[2];
      initialData[offset + 11] = 1.0;

      const isTitan = Math.random() > 0.9;
      initialData[offset + 12] = isTitan ? 10.0 + Math.random() * 10.0 : 0.5 + Math.random() * 2.0; 
      initialData[offset + 13] = isTitan ? 500.0 : 1.0; 
      initialData[offset + 14] = 1.0; 
      initialData[offset + 15] = 0.0; 
    }

    this.particleBuffer = device.createBuffer({
      size: initialData.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true,
    });
    new Float32Array(this.particleBuffer.getMappedRange()).set(initialData);
    this.particleBuffer.unmap();

    this.uniformBuffer = device.createBuffer({
      size: 32,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    // --- Compute Shader ---
    const computeShader = `
      struct Particle {
        pos: vec4<f32>,
        vel: vec4<f32>,
        color: vec4<f32>,
        props: vec4<f32>,
      };
      struct Particles { p: array<Particle>, };
      struct Uniforms {
        time: f32, dt: f32, width: f32, height: f32, mouseX: f32, mouseY: f32, pad1: f32, pad2: f32,
      };
      @group(0) @binding(0) var<storage, read_write> data: Particles;
      @group(0) @binding(1) var<uniform> u: Uniforms;

      @compute @workgroup_size(64)
      fn main(@builtin(global_invocation_id) id: vec3<u32>) {
        let i = id.x;
        if (i >= arrayLength(&data.p)) { return; }
        
        var p = data.p[i];
        var force = vec3<f32>(0.0);
        
        // Gravity
        for (var j = 0u; j < arrayLength(&data.p); j++) {
          if (i == j) { continue; }
          let other = data.p[j];
          let delta = other.pos.xyz - p.pos.xyz;
          let distSq = dot(delta, delta) + 5.0; 
          let dist = inverseSqrt(distSq);
          let f = (other.props.y * p.props.y) * dist * dist * dist * 0.005;
          force += delta * f;
        }

        // Mouse Attraction (Weak)
        let aspect = u.width / u.height;
        let mousePos = vec3<f32>((u.mouseX * 2.0 - 1.0) * aspect * 10.0, (1.0 - u.mouseY * 2.0) * 10.0, 5.0);
        force += (mousePos - p.pos.xyz) * 0.05;

        p.vel = vec4<f32>((p.vel.xyz + force * u.dt) * 0.99, 0.0);
        p.pos = vec4<f32>(p.pos.xyz + p.vel.xyz * u.dt, 1.0);
        
        // Bounds wrap
        if (p.pos.z < 1.0) { p.pos.z = 25.0; }
        if (p.pos.z > 30.0) { p.pos.z = 2.0; }

        data.p[i] = p;
      }
    `;

    this.computePipeline = device.createComputePipeline({
      layout: "auto",
      compute: { module: device.createShaderModule({ code: computeShader }), entryPoint: "main" },
    });

    this.computeBindGroup = device.createBindGroup({
      layout: this.computePipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.particleBuffer } },
        { binding: 1, resource: { buffer: this.uniformBuffer } },
      ],
    });

    // --- Render Shader ---
    const renderShader = `
      struct Uniforms {
        time: f32, dt: f32, width: f32, height: f32,
      };
      @group(0) @binding(0) var<uniform> u: Uniforms;

      struct VertexInput {
        @location(0) pos: vec4<f32>,
        @location(1) vel: vec4<f32>,
        @location(2) color: vec4<f32>,
        @location(3) props: vec4<f32>,
      };
      struct VertexOutput {
        @builtin(position) position: vec4<f32>,
        @location(0) color: vec4<f32>,
        @location(1) uv: vec2<f32>,
      };

      @vertex
      fn vs_main(in: VertexInput, @builtin(vertex_index) vIdx: u32) -> VertexOutput {
        var offsets = array<vec2<f32>, 4>(
          vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0),
          vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0)
        );
        let offset = offsets[vIdx];
        
        let z = in.pos.z;
        let scale = 1.0 / max(z, 0.1);
        let aspect = u.height / u.width;
        
        let size = in.props.x * scale * 2.0;
        let screenPos = vec2<f32>(in.pos.x * scale * aspect, in.pos.y * scale);
        
        var out: VertexOutput;
        out.position = vec4<f32>(screenPos + offset * size, 0.0, 1.0);
        out.uv = offset;
        out.color = vec4<f32>(in.color.rgb, in.color.a * smoothstep(30.0, 10.0, z)); // Fade distant
        return out;
      }

      @fragment
      fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
        let r = dot(in.uv, in.uv);
        if (r > 1.0) { discard; }
        let glow = exp(-r * 2.5);
        return vec4<f32>(in.color.rgb * glow, in.color.a * glow);
      }
    `;

    this.renderPipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module: device.createShaderModule({ code: renderShader }),
        entryPoint: "vs_main",
        buffers: [{
          arrayStride: 64,
          stepMode: "instance",
          attributes: [
            { shaderLocation: 0, offset: 0, format: "float32x4" },
            { shaderLocation: 1, offset: 16, format: "float32x4" },
            { shaderLocation: 2, offset: 32, format: "float32x4" },
            { shaderLocation: 3, offset: 48, format: "float32x4" },
          ]
        }]
      },
      fragment: {
        module: device.createShaderModule({ code: renderShader }),
        entryPoint: "fs_main",
        targets: [{ 
          format: format,
          blend: {
            color: { operation: "add", srcFactor: "src-alpha", dstFactor: "one" },
            alpha: { operation: "add", srcFactor: "one", dstFactor: "one" }
          }
        }],
      },
      primitive: { topology: "triangle-strip" },
    });

    this.renderBindGroup = device.createBindGroup({
      layout: this.renderPipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: this.uniformBuffer } }],
    });
  }

  compute(passEncoder, registry) {
    if (!this.device) return;
    
    // Update Uniforms
    this.device.queue.writeBuffer(this.uniformBuffer, 0, new Float32Array([
      registry.time,
      registry.dt,
      registry.screen.width,
      registry.screen.height,
      registry.input.mouse[0],
      registry.input.mouse[1],
      0.0, 0.0
    ]));

    passEncoder.setPipeline(this.computePipeline);
    passEncoder.setBindGroup(0, this.computeBindGroup);
    passEncoder.dispatchWorkgroups(Math.ceil(this.numParticles / 64));
  }

  execute(passEncoder, registry) {
    if (!this.device) return;
    passEncoder.setPipeline(this.renderPipeline);
    passEncoder.setBindGroup(0, this.renderBindGroup);
    passEncoder.setVertexBuffer(0, this.particleBuffer);
    passEncoder.draw(4, this.numParticles);
  }

  init2D(ctx, registry) {
    // Basic 2D fallback init
    this.shapes = [];
    for(let i=0; i<5; i++) {
        this.shapes.push({
            x: Math.random(), y: Math.random(), 
            vx: (Math.random()-0.5)*0.01, vy: (Math.random()-0.5)*0.01,
            size: 0.5 + Math.random(),
            color: [0.8, 0.7, 0.9]
        });
    }
  }

  execute2D(ctx, registry) {
    // Simple 2D render loop for fallback
    const { width, height } = registry.screen;
    
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(5, 5, 7, 0.3)"; // Fade trail
    ctx.fillRect(0, 0, width, height);
    
    ctx.globalCompositeOperation = "screen";
    for(let s of this.shapes) {
        s.x += s.vx; s.y += s.vy;
        if(s.x<0||s.x>1) s.vx*=-1;
        if(s.y<0||s.y>1) s.vy*=-1;
        
        const x = s.x * width;
        const y = s.y * height;
        const r = s.size * 200;
        
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, "rgba(200, 180, 220, 0.2)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(x-r, y-r, r*2, r*2);
    }
  }
}
