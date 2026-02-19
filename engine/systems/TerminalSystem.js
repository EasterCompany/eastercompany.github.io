export class TerminalSystem {
  constructor() {
    this.cwd = "/";
    this.history = [];
    this.inputBuffer = "";
    
    // Virtual File System
    this.vfs = {
      "/": {
        type: "dir",
        children: {
          "bin2txt": {
            type: "file",
            executable: true,
            content: ["Usage: /bin2txt [ABSOLUTE_PATH]", "Converts binary-encoded stream files into plain text.", "", "Example: /bin2txt /path/to/binary"]
          },
          "about_dexter.sh": {
            type: "file",
            executable: true,
            content: [
              "> [SUCCESS] Dexter is the world's first self-evolving, decentralized, distributed AI compute network. This means intelligence is no longer locked in a central silo; it lives across a global mesh of nodes, learning and adapting recursively based on real-time environmental interactions.",
              "",
              "# E++ Subscription Protocol",
              "As a subscriber to E++, you receive Easter Company hosted, encrypted, and completely unrestricted access to your own dedicated servers. These servers host a self-evolving AI that is unique to you—it grows, dreams, and learns specifically from your data and workflows without caps or filters.",
              "",
              "# Freedom & Responsibility",
              "The total freedom this provides means you have full control, even if it results in system-level instability. However, you are never alone—you have 24/7 access to Easter Company support channels, where real humans are available via text or voice to help you stabilize or scale your unique intelligence.",
              "",
              "# Personal Deployment License",
              "By purchasing a one-time license for $195, you legally obtain the right to self-host and run Easter Company AI models and source code on your own virtual and physical hardware for personal use. This license grants you exclusive access to the Insiders Market, where you can download alternative AI models and preview prototype or beta features for FREE before they reach the main product line."
            ]
          },
          "dex": {
            type: "dir",
            children: {
              "info": {
                type: "file",
                content: ["01010111 01100101 00100000 01101100 01101001 01101011 01100101 00100000 01110000 01100101 01101111 01110000 01101100 01100101 00100000 01101100 01101001 01101011 01100101 00100000 01111001 01101111 01110101 00101100 00100000 01101001 01100110 00100000 01111001 01101111 01110101 00100111 01110010 01100101 00100000 01101100 01101111 01101111 01101011 01101001 01101110 01100111 00100000 01100110 01101111 01110010 00100000 01110111 01101111 01110010 01101011 00100000 01110100 01101000 01100101 01101110 00100000 01111001 01101111 01110101 00100000 01110011 01101000 01101111 01110101 01101100 01100100 00100000 01100101 01101101 01100001 01101001 01101100 00100000 01110101 01110011 00111010 00100000 01100011 01101111 01101110 01110100 01100001 01100011 01110100 01000000 01100101 01100001 01110011 01110100 01100101 01110010 00101110 01100011 01101111 01101110 01110100 01100001 01100011 01110100"]
              }
            }
          }
        }
      }
    };
  }

  async init(registry) {
    this.container = document.getElementById('terminal-output');
    this.promptEl = document.getElementById('terminal-prompt-path');
    this.inputLine = document.getElementById('terminal-input-line');
    
    window.addEventListener('keydown', (e) => this.handleKey(e));
    this.updatePrompt();
    console.log("Easter Engine: Terminal System Online");
  }

  updatePrompt() {
    if (this.promptEl) this.promptEl.textContent = `root@easter:${this.cwd}$`;
  }

  handleKey(e) {
    const isOverlay = document.getElementById('game-overlay').classList.contains('active');
    if (isOverlay) return;

    // Auto-focus scroll to terminal on typing
    if (e.key.length === 1 || e.key === "Backspace" || e.key === "Enter") {
      const terminal = document.querySelector('.terminal-window');
      if (terminal) terminal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (e.key === "Enter") {
      this.execute(this.inputBuffer);
      this.inputBuffer = "";
    } else if (e.key === "Backspace") {
      this.inputBuffer = this.inputBuffer.slice(0, -1);
    } else if (e.key.length === 1) {
      this.inputBuffer += e.key;
    }
    
    if (this.inputLine) this.inputLine.textContent = this.inputBuffer;
    
    // Snap internal terminal scroll to bottom
    const body = this.container ? this.container.closest('.terminal-body') : null;
    if (body) body.scrollTop = body.scrollHeight;
  }

  execute(cmdStr) {
    const args = cmdStr.trim().split(/\s+/);
    const cmd = args[0];
    const target = args[1];

    this.writeLine(`<span class="cmd">root@easter:${this.cwd}$</span> ${cmdStr}`);

    switch (cmd) {
      case "ls":
        this.ls();
        break;
      case "cd":
        this.cd(target);
        break;
      case "cat":
        this.cat(target);
        break;
      case "stat":
        this.stat(target);
        break;
      case "rm":
        this.rm(target, cmdStr.includes("-rf"));
        break;
      case "clear":
        if (this.container) this.container.innerHTML = "";
        break;
      case "bin2txt":
      case "/bin2txt":
      case "./bin2txt":
        this.runBin2Txt(args);
        break;
      case "about_dexter.sh":
      case "/about_dexter.sh":
      case "./about_dexter.sh":
        this.cat("about_dexter.sh");
        break;
      case "":
        break;
      default:
        this.writeLine(`bash: command not found: ${cmd}`);
    }
    this.updatePrompt();
  }

  resolvePath(path) {
    if (!path) return this.getCurrentDir();
    if (path === "/") return this.vfs["/"];
    
    // Absolute path resolution
    if (path.startsWith("/")) {
      const parts = path.split("/").filter(p => p.length > 0);
      let current = this.vfs["/"];
      for (const part of parts) {
        if (current.children && current.children[part]) {
          current = current.children[part];
        } else {
          return null;
        }
      }
      return current;
    }

    // Relative path resolution
    if (path === "..") {
      return this.cwd === "/dex" ? this.vfs["/"] : this.vfs["/"];
    }

    const current = this.getCurrentDir();
    if (current.children && current.children[path]) return current.children[path];
    
    return null;
  }

  getCurrentDir() {
    if (this.cwd === "/") return this.vfs["/"];
    if (this.cwd === "/dex") return this.vfs["/"].children["dex"];
    return null;
  }

  ls() {
    const dir = this.getCurrentDir();
    const names = Object.keys(dir.children).map(name => {
      const item = dir.children[name];
      return item.type === "dir" ? `<span style="color: var(--neon-blue)">${name}/</span>` : name;
    });
    this.writeLine(names.join("  "));
  }

  cd(path) {
    if (!path || path === "/" || path === "~") {
      this.cwd = "/";
    } else if (path === "dex" && this.cwd === "/") {
      this.cwd = "/dex";
    } else if ((path === ".." || path === "/") && this.cwd === "/dex") {
      this.cwd = "/";
    } else {
      this.writeLine(`bash: cd: ${path}: No such directory`);
    }
  }

  cat(path) {
    const item = this.resolvePath(path);
    if (item && item.type === "file") {
      item.content.forEach(line => this.writeLine(line));
    } else if (item && item.type === "dir") {
      this.writeLine(`cat: ${path}: Is a directory`);
    } else {
      this.writeLine(`cat: ${path}: No such file or directory`);
    }
  }

  stat(path) {
    const item = this.resolvePath(path || ".");
    if (item) {
      this.writeLine(`File: ${path || "."}`);
      this.writeLine(`Type: ${item.type}`);
      this.writeLine(`Size: ${JSON.stringify(item).length} bytes`);
      this.writeLine(`Access: (0755/-rwxr-xr-x)`);
    } else {
      this.writeLine(`stat: cannot stat '${path}': No such file or directory`);
    }
  }

  rm(path, recursive) {
    if (!path) {
      this.writeLine("rm: missing operand");
      return;
    }
    
    const parts = path.split("/");
    const fileName = parts.pop();
    const dirPath = parts.join("/") || this.cwd;
    const dir = this.resolvePath(dirPath);

    if (dir && dir.children && dir.children[fileName]) {
      const item = dir.children[fileName];
      if (item.type === "dir" && !recursive) {
        this.writeLine(`rm: cannot remove '${path}': Is a directory`);
      } else {
        delete dir.children[fileName];
        this.writeLine(`Removed '${path}'`);
      }
    } else {
      this.writeLine(`rm: cannot remove '${path}': No such file or directory`);
    }
  }

  writeLine(text) {
    if (!this.container) return;
    const p = document.createElement('p');
    p.innerHTML = text;
    this.container.appendChild(p);
    const body = this.container.closest('.terminal-body');
    if (body) body.scrollTop = body.scrollHeight;
  }

  runBin2Txt(args) {
    const target = args[1];
    const isHelp = !target || target === "help" || target === "-help" || target === "--help";
    
    if (isHelp) {
      this.cat("bin2txt");
      return;
    }

    const item = this.resolvePath(target);
    if (item && item.type === "file") {
      try {
        const binary = item.content.join(" ");
        const text = binary.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
        this.writeLine(`<span style="color: var(--neon-blue)">[DECODED]:</span> ${text}`);
      } catch (e) {
        this.writeLine("bin2txt: error: file content is not valid binary stream");
      }
    } else {
      this.writeLine(`bin2txt: error: cannot access '${target}': No such file`);
    }
  }

  update(registry) {}
}
