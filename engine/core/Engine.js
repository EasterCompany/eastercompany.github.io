export class Engine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.systems = [];
    this.isRunning = false;
    this.lastTime = 0;
    
    // Core Registry (The "Memory")
    // We will expand this to SharedArrayBuffer later for Wasm support
    this.registry = {
      dt: 0,
      time: 0,
      screen: { width: 0, height: 0, dpr: 1 },
      input: { mouse: [0, 0], click: false }
    };

    this._resize();
    window.addEventListener('resize', () => this._resize());
    
    // Input listeners
    const updateInput = (x, y) => {
      this.registry.input.mouse = [
        (x * this.registry.screen.dpr) / this.canvas.width,
        1.0 - (y * this.registry.screen.dpr) / this.canvas.height
      ];
    };

    window.addEventListener('mousemove', (e) => updateInput(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) updateInput(e.touches[0].clientX, e.touches[0].clientY);
    });
  }

  async init() {
    console.log("Easter Engine: Initializing...");
    
    // Initialize all registered systems
    for (const sys of this.systems) {
      if (sys.init) await sys.init(this.registry, this.canvas);
    }
    
    this.isRunning = true;
    requestAnimationFrame((t) => this._loop(t));
  }

  addSystem(system) {
    this.systems.push(system);
    return this;
  }

  _resize() {
    this.registry.screen.dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * this.registry.screen.dpr;
    this.canvas.height = window.innerHeight * this.registry.screen.dpr;
    this.registry.screen.width = this.canvas.width;
    this.registry.screen.height = this.canvas.height;
    
    // Notify systems
    for (const sys of this.systems) {
      if (sys.resize) sys.resize(this.registry);
    }
  }

  _loop(time) {
    if (!this.isRunning) return;

    const dt = (time - this.lastTime) / 1000;
    this.lastTime = time;
    this.registry.dt = dt;
    this.registry.time = time / 1000;

    for (const sys of this.systems) {
      sys.update(this.registry);
    }

    requestAnimationFrame((t) => this._loop(t));
  }
}
