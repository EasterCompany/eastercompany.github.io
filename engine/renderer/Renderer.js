export class Renderer {
  constructor() {
    this.device = null;
    this.context = null;
    this.ctx2d = null;
    this.format = null;
    this.use2D = false;
    this.passes = [];
  }

  async init(registry, canvas) {
    if (!navigator.gpu) {
      console.warn("WebGPU not supported, falling back to Canvas2D");
      this.use2D = true;
    } else {
      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) throw new Error("No adapter");
        this.device = await adapter.requestDevice();
        this.context = canvas.getContext("webgpu");
        this.format = navigator.gpu.getPreferredCanvasFormat();

        this.context.configure({
          device: this.device,
          format: this.format,
          alphaMode: "premultiplied",
        });
        console.log("Easter Engine: WebGPU Online");
      } catch (e) {
        console.warn("WebGPU init failed:", e);
        this.use2D = true;
      }
    }

    if (this.use2D) {
      this.ctx2d = canvas.getContext("2d");
      console.log("Easter Engine: Canvas2D Online");
    }

    for (const pass of this.passes) {
      if (!this.use2D && pass.init) {
        await pass.init(this.device, this.format, registry);
      } else if (this.use2D && pass.init2D) {
        await pass.init2D(this.ctx2d, registry);
      }
    }
  }

  addPass(pass) {
    this.passes.push(pass);
    return this;
  }

  resize(registry) {
    for (const pass of this.passes) {
      if (pass.resize) pass.resize(registry);
    }
  }

  update(registry) {
    if (this.use2D) {
      this._render2D(registry);
    } else {
      this._renderGPU(registry);
    }
  }

  _renderGPU(registry) {
    if (!this.device) return;
    const commandEncoder = this.device.createCommandEncoder();

    // 1. Compute Phase
    const computePass = commandEncoder.beginComputePass();
    for (const pass of this.passes) {
      if (pass.compute) pass.compute(computePass, registry);
    }
    computePass.end();

    // 2. Render Phase
    const textureView = this.context.getCurrentTexture().createView();
    let loadOp = "clear";

    for (const pass of this.passes) {
      if (pass.execute) {
        const renderPassDescriptor = {
          colorAttachments: [{
            view: textureView,
            clearValue: { r: 0, g: 0, b: 0, a: 1 },
            loadOp: loadOp,
            storeOp: "store",
          }],
        };
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        pass.execute(passEncoder, registry);
        passEncoder.end();
        loadOp = "load";
      }
    }
    this.device.queue.submit([commandEncoder.finish()]);
  }

  _render2D(registry) {
    if (!this.ctx2d) return;
    this.ctx2d.fillStyle = "#050507";
    this.ctx2d.fillRect(0, 0, this.ctx2d.canvas.width, this.ctx2d.canvas.height);

    for (const pass of this.passes) {
      if (pass.execute2D) pass.execute2D(this.ctx2d, registry);
    }
  }
}
