export class Renderer {
  constructor() {
    this.adapter = null;
    this.device = null;
    this.context = null;
    this.format = null;
    this.passes = []; // Render passes (layers)
  }

  async init(registry, canvas) {
    if (!navigator.gpu) throw new Error("WebGPU not supported");

    this.adapter = await navigator.gpu.requestAdapter();
    this.device = await this.adapter.requestDevice();
    this.context = canvas.getContext("webgpu");
    this.format = navigator.gpu.getPreferredCanvasFormat();

    this.context.configure({
      device: this.device,
      format: this.format,
      alphaMode: "premultiplied",
    });

    console.log("Easter Engine: GPU Online");

    // Initialize all render passes
    for (const pass of this.passes) {
      if (pass.init) await pass.init(this.device, this.format, registry);
    }
  }

  addPass(pass) {
    this.passes.push(pass);
    return this;
  }

  resize(registry) {
    // Some pipelines might need to rebuild textures on resize
    for (const pass of this.passes) {
      if (pass.resize) pass.resize(registry);
    }
  }

  update(registry) {
    if (!this.device) return;

    const commandEncoder = this.device.createCommandEncoder();
    const textureView = this.context.getCurrentTexture().createView();

    // We chain the passes. The first pass clears the screen.
    // Subsequent passes load the previous frame.
    
    let loadOp = "clear";

    for (const pass of this.passes) {
      const renderPassDescriptor = {
        colorAttachments: [{
          view: textureView,
          clearValue: { r: 0, g: 0, b: 0, a: 0 },
          loadOp: loadOp,
          storeOp: "store",
        }],
      };

      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
      pass.execute(passEncoder, registry);
      passEncoder.end();

      // Subsequent passes should NOT clear the screen
      loadOp = "load";
    }

    this.device.queue.submit([commandEncoder.finish()]);
  }
}
