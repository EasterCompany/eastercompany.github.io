export class HeroPass {
  constructor() {
    this.device = null;
    this.pipeline = null;
    this.uniformBuffer = null;
    this.bindGroup = null;
  }

  async init(device, format, registry) {
    this.device = device;

    const shaderCode = `
      struct Uniforms {
        time: f32,
        width: f32,
        height: f32,
        padding: f32,
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

      @fragment
      fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
        let uv = in.uv;
        let t = uniforms.time * 0.2;
        let aspect = uniforms.width / uniforms.height;
        
        // Correct UV for aspect ratio to make perfect grid squares
        var gridUV = uv;
        gridUV.x *= aspect;

        // Neural Grid Logic
        let gridSize = 20.0;
        let grid = fract(gridUV * gridSize);
        let line = step(0.98, grid.x) + step(0.98, grid.y);
        
        // Flowing Pulse
        var color = 0.0;
        color += sin(gridUV.x * 3.0 + t) * 0.5 + 0.5;
        color *= cos(gridUV.y * 3.0 - t * 0.5) * 0.5 + 0.5;
        
        // Easter Neon Blue Palette
        let neonBlue = vec3<f32>(0.0, 0.95, 1.0);
        
        // Composite: Background + Grid Lines + Pulse Glow
        var finalColor = neonBlue * color * 0.15; // Ambient pulse
        finalColor += neonBlue * line * 0.2; // Grid lines (subtle)

        // Vignette
        let dist = distance(uv, vec2<f32>(0.5));
        finalColor *= 1.0 - dist * 1.2;

        return vec4<f32>(finalColor, 1.0);
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
        targets: [{ 
          format: format,
          blend: {
            color: { operation: "add", srcFactor: "src-alpha", dstFactor: "one-minus-src-alpha" },
            alpha: { operation: "add", srcFactor: "one", dstFactor: "one" }
          }
        }],
      },
      primitive: {
        topology: "triangle-strip",
      },
    });

    this.uniformBuffer = device.createBuffer({
      size: 16, // time(4) + width(4) + height(4) + padding(4)
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.bindGroup = device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: this.uniformBuffer } }],
    });
  }

  execute(passEncoder, registry) {
    if (!this.device || !this.pipeline) return;

    // Update Uniforms
    this.device.queue.writeBuffer(
      this.uniformBuffer,
      0,
      new Float32Array([
        registry.time,
        registry.screen.width,
        registry.screen.height,
        0.0 // padding
      ])
    );

    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, this.bindGroup);
    passEncoder.draw(4);
  }
}
