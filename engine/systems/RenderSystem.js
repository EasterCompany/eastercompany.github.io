import { Renderer } from '../renderer/Renderer.js';
import { HeroPass } from '../renderer/passes/HeroPass.js';

export class RenderSystem {
  constructor() {
    this.renderer = new Renderer();
    
    // Default configuration: Add the Hero Pass
    this.renderer.addPass(new HeroPass());
  }

  async init(registry, canvas) {
    await this.renderer.init(registry, canvas);
  }

  resize(registry) {
    this.renderer.resize(registry);
  }

  update(registry) {
    this.renderer.update(registry);
  }
}
