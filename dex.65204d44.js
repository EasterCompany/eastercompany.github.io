(()=>{function M(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function z(){let t=window.location.hostname;t.includes(":")&&(t=t.split(":")[0]);let e=t.split("."),a=["com","org","net","info","biz","co","io","company","xyz","app"];if(t==="localhost"||t.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/))return t;let u=t;for(let m=e.length-1;m>=0;m--){let r=e[m];if(a.includes(r))u=e.slice(0,m).join(".");else{let p=u.split(".");return p.length>1&&p[p.length-1]!=="www"?p[0]:p.length===1&&p[0]==="www"&&m>0&&!a.includes(e[m-1])?e[m-1]:p[p.length-1]}}let l=[],A=!1;for(let m=e.length-1;m>=0;m--){let r=e[m];a.includes(r)&&!A||(A=!0,l.unshift(r))}return l.length===0?t:l[0]==="www"&&l.length>1?l[1]:(l.length>1,l[0])}function F(t=!1){let e=t?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i class='bx bx-microphone'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `,a=`
        <div class="nav-left">
            <h1>${z()}</h1>
        </div>
        <div class="nav-right">
            ${e}
        </div>
    `,u=document.createElement("nav");u.innerHTML=a,document.body.prepend(u)}function H(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function N(t){let e=null,a=t.onClose||null;function u(){if(e){e.classList.add("open");return}let r=document.getElementById("windows-container");r||(r=document.createElement("div"),r.id="windows-container",r.className="windows-container",document.body.appendChild(r)),e=document.createElement("div"),e.id=t.id,e.className="window";let p=t.icon||"bx-window",L,D=`
            <div class="window-header">
                <i class="bx ${p}"></i>
                <i class="bx bx-x window-close"></i>
            </div>
        `;if(t.tabs&&t.tabs.length>0){let S=t.tabs.map((g,d)=>`
                <div class="tab ${d===0?"active":""}" data-tab-index="${d}">${g.title}</div>
            `).join(""),v=t.tabs.map((g,d)=>`
                <div class="tab-content ${d===0?"active":""}" data-tab-content="${d}">${g.content}</div>
            `).join("");L=`
                <div class="tab-bar">${S}</div>
                <div class="window-content">${v}</div>
            `}else L=`<div class="window-content">${t.content}</div>`;e.innerHTML=D+L,r.appendChild(e);let B=e.querySelector(".window-close");B&&B.addEventListener("click",S=>{S.stopPropagation(),l()}),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(v=>{v.addEventListener("click",()=>{let g=v.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(d=>d.classList.remove("active")),v.classList.add("active"),e.querySelectorAll(".tab-content").forEach(d=>d.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${g}"]`).classList.add("active")})}),setTimeout(()=>{e.classList.add("open")},10)}function l(r=!1){e&&(r?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function A(r){if(e){let p=e.querySelector(".window-content");p&&(p.innerHTML=r)}}function m(){return e&&e.classList.contains("open")}return{open:u,close:l,setContent:A,isOpen:m,id:t.id}}var $="easter_user_email";function q(){return localStorage.getItem($)!==null}function j(){return localStorage.getItem($)}function W(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem($,t.trim())}var R="easter_theme",c={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function O(){return localStorage.getItem(R)||c.AUTO}function K(){let t=window.innerWidth,e=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?c.ANIMATED:(t===1920&&e===1080&&a||t<=1920||e<=1080,c.DEFAULT)}function G(t){if(!Object.values(c).includes(t))throw new Error("Invalid theme");localStorage.setItem(R,t),U(t)}function U(t,e=!1){let a=document.body,u=t===c.AUTO?K():t;if(e||(a.classList.add("theme-transitioning"),setTimeout(()=>{a.classList.remove("theme-transitioning")},300)),Object.values(c).forEach(l=>{a.classList.remove(`theme-${l}`)}),a.classList.add(`theme-${t}`),u===c.ANIMATED){if(!document.querySelector(".background")){let l=document.createElement("div");l.className="background",document.body.prepend(l)}}else{let l=document.querySelector(".background");l&&(e?l.remove():(l.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{l.remove()},400)))}}function J(){let t=O();if(U(t,!0),t===c.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{U(c.AUTO)},300)})}}function Y(){console.log("Welcome to Easter Company."),J(),M();let t=q();F(t),H();let e=document.querySelector("footer"),a=null;function u(){a=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>{s.classList.remove("active","inactive")})}let l=N({id:"login-window",content:`
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
        `,icon:"bx-log-in",onClose:u}),A=N({id:"user-window",content:`<h1>User Profile</h1><p>Logged in as: ${j()||"Unknown"}</p>`,icon:"bx-user",onClose:u}),m=N({id:"message-window",tabs:[{title:"Logs",content:"<h1>Logs</h1><p>This is the logs tab.</p>"},{title:"Notifications",content:"<h1>Notifications</h1><p>This is the notifications tab.</p>"},{title:"Conversations",content:"<h1>Conversations</h1><p>This is the conversations tab.</p>"}],icon:"bxs-message-dots",onClose:u}),r="easter_analytics_enabled",p="easter_debug_mode";function L(){let n=localStorage.getItem(r);return n===null?!0:n==="true"}function D(){return L()}function B(n){localStorage.setItem(r,n.toString()),window.EASTER_ANALYTICS_ENABLED=n,window.EASTER_DEBUG_MODE=n,console.log(n?"[Easter Analytics] Analytics and debug mode enabled":"[Easter Analytics] Analytics and debug mode disabled")}window.EASTER_ANALYTICS_ENABLED=L(),window.EASTER_DEBUG_MODE=D(),window.EASTER_DEBUG_MODE&&(console.log("[Easter Debug] Debug mode is active"),console.log("[Easter Debug] Analytics enabled:",window.EASTER_ANALYTICS_ENABLED));function S(){return"Notification"in window?{enabled:Notification.permission==="granted",supported:!0}:{enabled:!1,supported:!1}}function v(){let n=O(),s=j()||"user@easter.company",o=S(),i=L();return`
            <h1 style="text-align: center; margin-bottom: 30px;">Settings</h1>
            <div class="theme-selector">
                <div class="theme-card ${n===c.AUTO?"active":""}" data-theme="${c.AUTO}">
                    <div class="theme-preview theme-preview-auto"></div>
                    <div class="theme-info">
                        <h3>Auto</h3>
                        <p>Automatically switches between Default and Legacy based on screen size and display settings.</p>
                        <span class="theme-badge">${n===c.AUTO?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${n===c.DEFAULT?"active":""}" data-theme="${c.DEFAULT}">
                    <div class="theme-preview theme-preview-default"></div>
                    <div class="theme-info">
                        <h3>Default</h3>
                        <p>Clean, minimalist dark theme with solid black background.</p>
                        <span class="theme-badge">${n===c.DEFAULT?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${n===c.ANIMATED?"active":""}" data-theme="${c.ANIMATED}">
                    <div class="theme-preview theme-preview-animated"></div>
                    <div class="theme-info">
                        <h3>Legacy</h3>
                        <p>Beautiful GPU-accelerated rainbow gradient background animation.</p>
                        <span class="theme-badge">${n===c.ANIMATED?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${i?"checked":""}>
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
        `}function g(){document.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let i=this.getAttribute("data-theme");G(i),y.setContent(v()),setTimeout(()=>{g(),d(),h(),T(),I(),x()},10)})})}function d(){let n=document.getElementById("service-map-upload-btn"),s=document.getElementById("service-map-input"),o=document.getElementById("service-map-file-name"),i=document.getElementById("service-map-error"),E=document.getElementById("service-map-delete-btn");n&&s&&(n.addEventListener("click",()=>{s.click()}),s.addEventListener("change",C=>{let f=C.target.files[0];if(!f)return;if(f.name!=="service-map.json"){i.textContent='File must be named "service-map.json"',i.style.display="block",s.value="";return}let b=new FileReader;b.onload=k=>{try{let w=JSON.parse(k.target.result);localStorage.setItem("service_map",JSON.stringify(w)),o.textContent="service-map.json",i.style.display="none",y.setContent(v()),setTimeout(()=>{g(),d(),h(),T(),I(),x()},10)}catch{i.textContent="Invalid JSON format",i.style.display="block",s.value=""}},b.onerror=()=>{i.textContent="Failed to read file",i.style.display="block",s.value=""},b.readAsText(f)})),E&&E.addEventListener("click",()=>{localStorage.removeItem("service_map"),y.setContent(v()),setTimeout(()=>{g(),d(),h(),T(),I(),x()},10)})}function h(){let n=document.getElementById("server-map-upload-btn"),s=document.getElementById("server-map-input"),o=document.getElementById("server-map-file-name"),i=document.getElementById("server-map-error"),E=document.getElementById("server-map-delete-btn");n&&s&&(n.addEventListener("click",()=>{s.click()}),s.addEventListener("change",C=>{let f=C.target.files[0];if(!f)return;if(f.name!=="server-map.json"){i.textContent='File must be named "server-map.json"',i.style.display="block",s.value="";return}let b=new FileReader;b.onload=k=>{try{let w=JSON.parse(k.target.result);localStorage.setItem("server_map",JSON.stringify(w)),o.textContent="server-map.json",i.style.display="none",y.setContent(v()),setTimeout(()=>{g(),d(),h()},10)}catch{i.textContent="Invalid JSON format",i.style.display="block",s.value=""}},b.onerror=()=>{i.textContent="Failed to read file",i.style.display="block",s.value=""},b.readAsText(f)})),E&&E.addEventListener("click",()=>{localStorage.removeItem("server_map"),y.setContent(v()),setTimeout(()=>{g(),d(),h(),T(),I(),x()},10)})}function I(){let n=document.getElementById("notifications-toggle");n&&!n.disabled&&n.addEventListener("change",async s=>{if(s.target.checked)try{await Notification.requestPermission()==="granted"?new Notification("Easter Company",{body:"Notifications are now enabled!",icon:"/favicon.ico"}):s.target.checked=!1}catch(o){console.error("Notification permission error:",o),s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)})}function x(){let n=document.getElementById("analytics-toggle");n&&n.addEventListener("change",s=>{let o=s.target.checked;B(o),o?(console.log("[Easter Analytics] Tracking user interactions"),console.log("[Easter Debug] Debug mode activated")):console.log("[Easter Analytics] Analytics disabled")})}function T(){let n=document.getElementById("options-upload-btn"),s=document.getElementById("options-input"),o=document.getElementById("options-file-name"),i=document.getElementById("options-error"),E=document.getElementById("options-delete-btn");n&&s&&(n.addEventListener("click",()=>{s.click()}),s.addEventListener("change",C=>{let f=C.target.files[0];if(!f)return;if(f.name!=="options.json"){i.textContent='File must be named "options.json"',i.style.display="block",s.value="";return}let b=new FileReader;b.onload=k=>{try{let w=JSON.parse(k.target.result);localStorage.setItem("user_options",JSON.stringify(w)),o.textContent="options.json",i.style.display="none",y.setContent(v()),setTimeout(()=>{g(),d(),h(),T()},10)}catch{i.textContent="Invalid JSON format",i.style.display="block",s.value=""}},b.onerror=()=>{i.textContent="Failed to read file",i.style.display="block",s.value=""},b.readAsText(f)})),E&&E.addEventListener("click",()=>{localStorage.removeItem("user_options"),y.setContent(v()),setTimeout(()=>{g(),d(),h(),T(),I(),x()},10)})}let y=N({id:"settings-window",content:v(),icon:"bx-cog",onClose:u});function _(n,s=null){a&&a.id===n.id?(n.close(),a=null,s&&document.querySelectorAll(".nav-right i").forEach(i=>{i.classList.remove("active","inactive")})):a?(a.close(!0),setTimeout(()=>{n.open(),a=n,s&&document.querySelectorAll(".nav-right i").forEach(i=>{i===s?(i.classList.add("active"),i.classList.remove("inactive")):(i.classList.add("inactive"),i.classList.remove("active"))})},220)):(n.open(),a=n,s&&document.querySelectorAll(".nav-right i").forEach(i=>{i===s?(i.classList.add("active"),i.classList.remove("inactive")):(i.classList.add("inactive"),i.classList.remove("active"))})),a?e?.classList.add("hide"):e?.classList.remove("hide")}function P(n){n.preventDefault();let s=document.getElementById("email-input"),o=document.getElementById("login-error");try{W(s.value),window.location.reload()}catch(i){o.textContent=i.message,o.style.display="block"}}if(t){let n=document.getElementById("user-icon"),s=document.getElementById("message-icon"),o=document.getElementById("settings-icon");n&&n.addEventListener("click",()=>_(A,n)),s&&s.addEventListener("click",()=>_(m,s)),o&&o.addEventListener("click",()=>{_(y,o),setTimeout(()=>{g(),d(),h(),T(),I(),x()},100)})}else{let n=document.getElementById("login-btn");n&&n.addEventListener("click",()=>{_(l),setTimeout(()=>{let s=document.getElementById("login-form");s&&s.addEventListener("submit",P)},100)})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y();})();
//# sourceMappingURL=dex.65204d44.js.map
