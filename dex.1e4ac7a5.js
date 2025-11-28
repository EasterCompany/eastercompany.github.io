(()=>{function G(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function J(s=!1){let a=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${s?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,f=document.createElement("nav");f.innerHTML=a,document.body.prepend(f)}function P(){let s=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,i=document.createElement("footer");i.innerHTML=s,document.body.appendChild(i)}function N(s){let i=null,a=s.onClose||null;function f(){if(i){i.classList.add("open");return}let v=document.getElementById("windows-container");v||(v=document.createElement("div"),v.id="windows-container",v.className="windows-container",document.body.appendChild(v)),i=document.createElement("div"),i.id=s.id,i.className="window";let k=s.icon||"bx-window",L,j=`
            <div class="window-header">
                <i class="bx ${k}"></i>
                <i class="bx bx-x window-close"></i>
            </div>
        `;if(s.tabs&&s.tabs.length>0){let S=s.tabs.map((p,r)=>`
                <div class="tab ${r===0?"active":""}" data-tab-index="${r}">${p.title}</div>
            `).join(""),u=s.tabs.map((p,r)=>`
                <div class="tab-content ${r===0?"active":""}" data-tab-content="${r}">${p.content}</div>
            `).join("");L=`
                <div class="tab-bar">${S}</div>
                <div class="window-content">${u}</div>
            `}else L=`<div class="window-content">${s.content}</div>`;i.innerHTML=j+L,v.appendChild(i);let B=i.querySelector(".window-close");B&&B.addEventListener("click",S=>{S.stopPropagation(),m()}),s.tabs&&s.tabs.length>0&&i.querySelectorAll(".tab").forEach(u=>{u.addEventListener("click",()=>{let p=u.getAttribute("data-tab-index");i.querySelectorAll(".tab").forEach(r=>r.classList.remove("active")),u.classList.add("active"),i.querySelectorAll(".tab-content").forEach(r=>r.classList.remove("active")),i.querySelector(`.tab-content[data-tab-content="${p}"]`).classList.add("active")})}),setTimeout(()=>{i.classList.add("open")},10)}function m(v=!1){i&&(v?(i.classList.add("switching"),i.classList.remove("open"),setTimeout(()=>{i&&i.parentNode&&i.parentNode.removeChild(i),i=null},200)):(i.classList.remove("open"),a&&a(),setTimeout(()=>{i&&i.parentNode&&i.parentNode.removeChild(i),i=null},400)))}function _(v){if(i){let k=i.querySelector(".window-content");k&&(k.innerHTML=v)}}function $(){return i&&i.classList.contains("open")}return{open:f,close:m,setContent:_,isOpen:$,id:s.id}}var U="easter_user_email";function Y(){return localStorage.getItem(U)!==null}function O(){return localStorage.getItem(U)}function z(s){if(!s||!s.includes("@"))throw new Error("Invalid email address");if(!s.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(U,s.trim())}var K="easter_theme",c={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function M(){return localStorage.getItem(K)||c.AUTO}function te(){let s=window.innerWidth,i=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return s>1920&&i>1080?c.ANIMATED:(s===1920&&i===1080&&a||s<=1920||i<=1080,c.DEFAULT)}function V(s){if(!Object.values(c).includes(s))throw new Error("Invalid theme");localStorage.setItem(K,s),F(s)}function F(s,i=!1){let a=document.body,f=s===c.AUTO?te():s;if(i||(a.classList.add("theme-transitioning"),setTimeout(()=>{a.classList.remove("theme-transitioning")},300)),Object.values(c).forEach(m=>{a.classList.remove(`theme-${m}`)}),a.classList.add(`theme-${s}`),f===c.ANIMATED){if(!document.querySelector(".background")){let m=document.createElement("div");m.className="background",document.body.prepend(m)}}else{let m=document.querySelector(".background");m&&(i?m.remove():(m.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{m.remove()},400)))}}function X(){let s=M();if(F(s,!0),s===c.AUTO){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=setTimeout(()=>{F(c.AUTO)},300)})}}function Q(){console.log("Welcome to Easter Company."),X(),G();let s=Y();J(s),P();let i=document.querySelector("footer"),a=null;function f(){a=null,i?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(t=>{t.classList.remove("active","inactive")})}let m=N({id:"login-window",content:`
            <div class="login-split-container">
                <div class="login-top-section">
                    <div class="login-form">
                        <h1>Welcome</h1>
                        <p>Enter your email to continue</p>
                        <form id="login-form">
                            <input
                                type="email"
                                id="email-input"
                                placeholder="you@easter.company"
                                required
                                autocomplete="email"
                            />
                            <button type="submit">Continue</button>
                            <div id="login-error" class="error" style="display: none;"></div>
                        </form>
                    </div>
                </div>
                <div class="login-bottom-section">
                    <div class="login-disclaimer">
                        <h2>Early Access</h2>
                        <p>We're not ready to take on new users yet.</p>
                        <p>Want early access? Contribute to our open source projects on the <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">Easter Company GitHub</a> community to unlock early access privileges.</p>
                    </div>
                </div>
            </div>
        `,icon:"bx-log-in",onClose:f}),_=N({id:"user-window",content:`<h1>User Profile</h1><p>Logged in as: ${O()||"Unknown"}</p>`,icon:"bx-user",onClose:f}),$=N({id:"message-window",tabs:[{title:"Logs",content:"<h1>Logs</h1><p>This is the logs tab.</p>"},{title:"Notifications",content:"<h1>Notifications</h1><p>This is the notifications tab.</p>"},{title:"Conversations",content:"<h1>Conversations</h1><p>This is the conversations tab.</p>"}],icon:"bxs-message-dots",onClose:f}),v="easter_analytics_enabled",k="easter_debug_mode";function L(){let e=localStorage.getItem(v);return e===null?!0:e==="true"}function j(){return L()}function B(e){localStorage.setItem(v,e.toString()),window.EASTER_ANALYTICS_ENABLED=e,window.EASTER_DEBUG_MODE=e,console.log(e?"[Easter Analytics] Analytics and debug mode enabled":"[Easter Analytics] Analytics and debug mode disabled")}window.EASTER_ANALYTICS_ENABLED=L(),window.EASTER_DEBUG_MODE=j(),window.EASTER_DEBUG_MODE&&(console.log("[Easter Debug] Debug mode is active"),console.log("[Easter Debug] Analytics enabled:",window.EASTER_ANALYTICS_ENABLED));function S(){return"Notification"in window?{enabled:Notification.permission==="granted",supported:!0}:{enabled:!1,supported:!1}}function u(){let e=M(),t=O()||"user@easter.company",o=S(),n=L();return`
            <h1 style="text-align: center; margin-bottom: 30px;">Settings</h1>
            <div class="theme-selector">
                <div class="theme-card ${e===c.AUTO?"active":""}" data-theme="${c.AUTO}">
                    <div class="theme-preview theme-preview-auto"></div>
                    <div class="theme-info">
                        <h3>Auto</h3>
                        <p>Automatically switches between Default and Legacy based on screen size and display settings.</p>
                        <span class="theme-badge">${e===c.AUTO?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${e===c.DEFAULT?"active":""}" data-theme="${c.DEFAULT}">
                    <div class="theme-preview theme-preview-default"></div>
                    <div class="theme-info">
                        <h3>Default</h3>
                        <p>Clean, minimalist dark theme with solid black background.</p>
                        <span class="theme-badge">${e===c.DEFAULT?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${e===c.ANIMATED?"active":""}" data-theme="${c.ANIMATED}">
                    <div class="theme-preview theme-preview-animated"></div>
                    <div class="theme-info">
                        <h3>Legacy</h3>
                        <p>Beautiful GPU-accelerated rainbow gradient background animation.</p>
                        <span class="theme-badge">${e===c.ANIMATED?"Active":"Select"}</span>
                    </div>
                </div>
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Configuration</h2>
                <div class="settings-list">
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">Services</label>
                            <span class="settings-item-description">Upload your service-map.json to connect this client to your services.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="service-map-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="service-map-file-name">${localStorage.getItem("service_map")?"service-map.json":"No file selected"}</span>
                            <input type="file" class="file-upload-input" id="service-map-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem("service_map")?'<button class="file-delete-btn" id="service-map-delete-btn" title="Delete service map">\xD7</button>':""}
                        </div>
                        <div class="file-upload-error" id="service-map-error" style="display: none;"></div>
                    </div>
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">Servers</label>
                            <span class="settings-item-description">Upload your server-map.json to connect this client to your servers.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="server-map-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="server-map-file-name">${localStorage.getItem("server_map")?"server-map.json":"No file selected"}</span>
                            <input type="file" class="file-upload-input" id="server-map-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem("server_map")?'<button class="file-delete-btn" id="server-map-delete-btn" title="Delete server map">\xD7</button>':""}
                        </div>
                        <div class="file-upload-error" id="server-map-error" style="display: none;"></div>
                    </div>
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">User Settings</label>
                            <span class="settings-item-description">Upload your options.json to configure user preferences.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="options-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="options-file-name">${localStorage.getItem("user_options")?"options.json":"No file selected"}</span>
                            <input type="file" class="file-upload-input" id="options-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem("user_options")?'<button class="file-delete-btn" id="options-delete-btn" title="Delete user settings">\xD7</button>':""}
                        </div>
                        <div class="file-upload-error" id="options-error" style="display: none;"></div>
                    </div>
                </div>
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Preferences</h2>
                <div class="settings-list">
                    <div class="settings-item">
                        <div class="settings-item-info">
                            <span class="settings-item-label">Notifications</span>
                            <span class="settings-item-description">${o.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${o.enabled?"checked":""} ${o.supported?"":"disabled"}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div class="settings-item">
                        <div class="settings-item-info">
                            <span class="settings-item-label">Analytics</span>
                            <span class="settings-item-description">Help improve the platform (enables debug mode)</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="analytics-toggle" ${n?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Metrics</h2>
                <div class="settings-metrics">
                    <div class="metric-item">
                        <span class="metric-label">Storage Used</span>
                        <span class="metric-value">2.4 GB / 10 GB</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-label">Active Sessions</span>
                        <span class="metric-value">1 device</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-label">Account Status</span>
                        <span class="metric-value metric-value-active">Active</span>
                    </div>
                </div>
            </div>
        `}function p(){document.querySelectorAll(".theme-card").forEach(t=>{t.addEventListener("click",function(){let n=this.getAttribute("data-theme");V(n),E.setContent(u()),setTimeout(()=>{p(),r(),y(),T(),I(),C()},10)})})}function r(){let e=document.getElementById("service-map-upload-btn"),t=document.getElementById("service-map-input"),o=document.getElementById("service-map-file-name"),n=document.getElementById("service-map-error"),l=document.getElementById("service-map-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",w=>{let g=w.target.files[0];if(!g)return;if(g.name!=="service-map.json"){n.textContent='File must be named "service-map.json"',n.style.display="block",t.value="";return}let d=new FileReader;d.onload=b=>{try{let h=JSON.parse(b.target.result);localStorage.setItem("service_map",JSON.stringify(h)),o.textContent="service-map.json",n.style.display="none",E.setContent(u()),setTimeout(()=>{p(),r(),y(),T(),I(),C()},10)}catch{n.textContent="Invalid JSON format",n.style.display="block",t.value=""}},d.onerror=()=>{n.textContent="Failed to read file",n.style.display="block",t.value=""},d.readAsText(g)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("service_map"),E.setContent(u()),setTimeout(()=>{p(),r(),y(),T(),I(),C()},10)})}function y(){let e=document.getElementById("server-map-upload-btn"),t=document.getElementById("server-map-input"),o=document.getElementById("server-map-file-name"),n=document.getElementById("server-map-error"),l=document.getElementById("server-map-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",w=>{let g=w.target.files[0];if(!g)return;if(g.name!=="server-map.json"){n.textContent='File must be named "server-map.json"',n.style.display="block",t.value="";return}let d=new FileReader;d.onload=b=>{try{let h=JSON.parse(b.target.result);localStorage.setItem("server_map",JSON.stringify(h)),o.textContent="server-map.json",n.style.display="none",E.setContent(u()),setTimeout(()=>{p(),r(),y()},10)}catch{n.textContent="Invalid JSON format",n.style.display="block",t.value=""}},d.onerror=()=>{n.textContent="Failed to read file",n.style.display="block",t.value=""},d.readAsText(g)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("server_map"),E.setContent(u()),setTimeout(()=>{p(),r(),y(),T(),I(),C()},10)})}function I(){let e=document.getElementById("notifications-toggle");e&&!e.disabled&&e.addEventListener("change",async t=>{if(t.target.checked)try{await Notification.requestPermission()==="granted"?new Notification("Easter Company",{body:"Notifications are now enabled!",icon:"/favicon.ico"}):t.target.checked=!1}catch(o){console.error("Notification permission error:",o),t.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),t.target.checked=!0)})}function C(){let e=document.getElementById("analytics-toggle");e&&e.addEventListener("change",t=>{let o=t.target.checked;B(o),o?(console.log("[Easter Analytics] Tracking user interactions"),console.log("[Easter Debug] Debug mode activated")):console.log("[Easter Analytics] Analytics disabled")})}function T(){let e=document.getElementById("options-upload-btn"),t=document.getElementById("options-input"),o=document.getElementById("options-file-name"),n=document.getElementById("options-error"),l=document.getElementById("options-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",w=>{let g=w.target.files[0];if(!g)return;if(g.name!=="options.json"){n.textContent='File must be named "options.json"',n.style.display="block",t.value="";return}let d=new FileReader;d.onload=b=>{try{let h=JSON.parse(b.target.result);localStorage.setItem("user_options",JSON.stringify(h)),o.textContent="options.json",n.style.display="none",E.setContent(u()),setTimeout(()=>{p(),r(),y(),T()},10)}catch{n.textContent="Invalid JSON format",n.style.display="block",t.value=""}},d.onerror=()=>{n.textContent="Failed to read file",n.style.display="block",t.value=""},d.readAsText(g)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("user_options"),E.setContent(u()),setTimeout(()=>{p(),r(),y(),T(),I(),C()},10)})}let E=N({id:"settings-window",content:u(),icon:"bx-cog",onClose:f});function D(e,t=null){a&&a.id===e.id?(e.close(),a=null,t&&document.querySelectorAll(".nav-right i").forEach(n=>{n.classList.remove("active","inactive")})):a?(a.close(!0),setTimeout(()=>{e.open(),a=e,t&&document.querySelectorAll(".nav-right i").forEach(n=>{n===t?(n.classList.add("active"),n.classList.remove("inactive")):(n.classList.add("inactive"),n.classList.remove("active"))})},220)):(e.open(),a=e,t&&document.querySelectorAll(".nav-right i").forEach(n=>{n===t?(n.classList.add("active"),n.classList.remove("inactive")):(n.classList.add("inactive"),n.classList.remove("active"))})),a?i?.classList.add("hide"):i?.classList.remove("hide")}let q=document.getElementById("navbar-microphone"),W,A,x;function Z(e){let t=e.getContext("2d");A=new(window.AudioContext||window.webkitAudioContext),x=A.createAnalyser();let o=A.createOscillator();o.type="sine",o.frequency.setValueAtTime(440,A.currentTime),o.connect(x),x.connect(A.destination),o.start(),x.fftSize=256;let n=x.frequencyBinCount,l=new Uint8Array(n);function w(){W=requestAnimationFrame(w),x.getByteTimeDomainData(l),t.fillStyle="rgb(0, 0, 0)",t.fillRect(0,0,e.width,e.height),t.lineWidth=2,t.strokeStyle="rgb(0, 255, 255)",t.beginPath();let g=e.width*1/n,d=0;for(let b=0;b<n;b++){let R=l[b]/128*e.height/2;b===0?t.moveTo(d,R):t.lineTo(d,R),d+=g}t.lineTo(e.width,e.height/2),t.stroke()}w()}function H(){cancelAnimationFrame(W),A&&A.close()}q&&q.addEventListener("click",()=>{let e=document.querySelector("nav"),t=document.querySelector(".nav-left"),o=a?.isOpen()?a.id:null,n=o?document.querySelector(`#${o} .window-content`):null;if(e.classList.contains("recording")){e.classList.remove("recording"),t.classList.remove("recording"),H();let l=document.getElementById("audio-canvas");l&&l.remove()}else{if(e.classList.add("recording"),t.classList.add("recording"),n){let l=document.createElement("canvas");l.id="audio-canvas",n.prepend(l),Z(l)}setTimeout(()=>{e.classList.remove("recording"),t.classList.remove("recording"),H();let l=document.getElementById("audio-canvas");l&&l.remove()},3e4)}});function ee(e){e.preventDefault();let t=document.getElementById("email-input"),o=document.getElementById("login-error");try{z(t.value),window.location.reload()}catch(n){o.textContent=n.message,o.style.display="block"}}if(s){let e=document.getElementById("user-icon"),t=document.getElementById("message-icon"),o=document.getElementById("settings-icon");e&&e.addEventListener("click",()=>D(_,e)),t&&t.addEventListener("click",()=>D($,t)),o&&o.addEventListener("click",()=>{D(E,o),setTimeout(()=>{p(),r(),y(),T(),I(),C()},100)})}else{let e=document.getElementById("login-btn");e&&e.addEventListener("click",()=>{D(m),setTimeout(()=>{let t=document.getElementById("login-form");t&&t.addEventListener("submit",ee)},100)})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Q):Q();})();
//# sourceMappingURL=dex.1e4ac7a5.js.map
