(()=>{function F(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function M(i=!1){let a=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
        </div>
        <div class="nav-right">
            ${i?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i class='bx bx-microphone'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,p=document.createElement("nav");p.innerHTML=a,document.body.prepend(p)}function H(){let i=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=i,document.body.appendChild(e)}function x(i){let e=null,a=i.onClose||null;function p(){if(e){e.classList.add("open");return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),e=document.createElement("div"),e.id=i.id,e.className="window";let S=i.icon||"bx-window",E,D=`
            <div class="window-header">
                <i class="bx ${S}"></i>
                <i class="bx bx-x window-close"></i>
            </div>
        `;if(i.tabs&&i.tabs.length>0){let L=i.tabs.map((m,c)=>`
                <div class="tab ${c===0?"active":""}" data-tab-index="${c}">${m.title}</div>
            `).join(""),d=i.tabs.map((m,c)=>`
                <div class="tab-content ${c===0?"active":""}" data-tab-content="${c}">${m.content}</div>
            `).join("");E=`
                <div class="tab-bar">${L}</div>
                <div class="window-content">${d}</div>
            `}else E=`<div class="window-content">${i.content}</div>`;e.innerHTML=D+E,u.appendChild(e);let k=e.querySelector(".window-close");k&&k.addEventListener("click",L=>{L.stopPropagation(),r()}),i.tabs&&i.tabs.length>0&&e.querySelectorAll(".tab").forEach(d=>{d.addEventListener("click",()=>{let m=d.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(c=>c.classList.remove("active")),d.classList.add("active"),e.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${m}"]`).classList.add("active")})}),setTimeout(()=>{e.classList.add("open")},10)}function r(u=!1){e&&(u?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function B(u){if(e){let S=e.querySelector(".window-content");S&&(S.innerHTML=u)}}function _(){return e&&e.classList.contains("open")}return{open:p,close:r,setContent:B,isOpen:_,id:i.id}}var $="easter_user_email";function q(){return localStorage.getItem($)!==null}function j(){return localStorage.getItem($)}function W(i){if(!i||!i.includes("@"))throw new Error("Invalid email address");if(!i.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem($,i.trim())}var R="easter_theme",l={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function O(){return localStorage.getItem(R)||l.AUTO}function z(){let i=window.innerWidth,e=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return i>1920&&e>1080?l.ANIMATED:(i===1920&&e===1080&&a||i<=1920||e<=1080,l.DEFAULT)}function G(i){if(!Object.values(l).includes(i))throw new Error("Invalid theme");localStorage.setItem(R,i),U(i)}function U(i,e=!1){let a=document.body,p=i===l.AUTO?z():i;if(e||(a.classList.add("theme-transitioning"),setTimeout(()=>{a.classList.remove("theme-transitioning")},300)),Object.values(l).forEach(r=>{a.classList.remove(`theme-${r}`)}),a.classList.add(`theme-${i}`),p===l.ANIMATED){if(!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}}else{let r=document.querySelector(".background");r&&(e?r.remove():(r.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{r.remove()},400)))}}function J(){let i=O();if(U(i,!0),i===l.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{U(l.AUTO)},300)})}}function Y(){console.log("Welcome to Easter Company."),J(),F();let i=q();M(i),H();let e=document.querySelector("footer"),a=null;function p(){a=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(n=>{n.classList.remove("active","inactive")})}let r=x({id:"login-window",content:`
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
        `,icon:"bx-log-in",onClose:p}),B=x({id:"user-window",content:`<h1>User Profile</h1><p>Logged in as: ${j()||"Unknown"}</p>`,icon:"bx-user",onClose:p}),_=x({id:"message-window",tabs:[{title:"Logs",content:"<h1>Logs</h1><p>This is the logs tab.</p>"},{title:"Notifications",content:"<h1>Notifications</h1><p>This is the notifications tab.</p>"},{title:"Conversations",content:"<h1>Conversations</h1><p>This is the conversations tab.</p>"}],icon:"bxs-message-dots",onClose:p}),u="easter_analytics_enabled",S="easter_debug_mode";function E(){let t=localStorage.getItem(u);return t===null?!0:t==="true"}function D(){return E()}function k(t){localStorage.setItem(u,t.toString()),window.EASTER_ANALYTICS_ENABLED=t,window.EASTER_DEBUG_MODE=t,console.log(t?"[Easter Analytics] Analytics and debug mode enabled":"[Easter Analytics] Analytics and debug mode disabled")}window.EASTER_ANALYTICS_ENABLED=E(),window.EASTER_DEBUG_MODE=D(),window.EASTER_DEBUG_MODE&&(console.log("[Easter Debug] Debug mode is active"),console.log("[Easter Debug] Analytics enabled:",window.EASTER_ANALYTICS_ENABLED));function L(){return"Notification"in window?{enabled:Notification.permission==="granted",supported:!0}:{enabled:!1,supported:!1}}function d(){let t=O(),n=j()||"user@easter.company",o=L(),s=E();return`
            <h1 style="text-align: center; margin-bottom: 30px;">Settings</h1>
            <div class="theme-selector">
                <div class="theme-card ${t===l.AUTO?"active":""}" data-theme="${l.AUTO}">
                    <div class="theme-preview theme-preview-auto"></div>
                    <div class="theme-info">
                        <h3>Auto</h3>
                        <p>Automatically switches between Default and Legacy based on screen size and display settings.</p>
                        <span class="theme-badge">${t===l.AUTO?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${t===l.DEFAULT?"active":""}" data-theme="${l.DEFAULT}">
                    <div class="theme-preview theme-preview-default"></div>
                    <div class="theme-info">
                        <h3>Default</h3>
                        <p>Clean, minimalist dark theme with solid black background.</p>
                        <span class="theme-badge">${t===l.DEFAULT?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${t===l.ANIMATED?"active":""}" data-theme="${l.ANIMATED}">
                    <div class="theme-preview theme-preview-animated"></div>
                    <div class="theme-info">
                        <h3>Legacy</h3>
                        <p>Beautiful GPU-accelerated rainbow gradient background animation.</p>
                        <span class="theme-badge">${t===l.ANIMATED?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${s?"checked":""}>
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
        `}function m(){document.querySelectorAll(".theme-card").forEach(n=>{n.addEventListener("click",function(){let s=this.getAttribute("data-theme");G(s),b.setContent(d()),setTimeout(()=>{m(),c(),f(),w(),T(),A()},10)})})}function c(){let t=document.getElementById("service-map-upload-btn"),n=document.getElementById("service-map-input"),o=document.getElementById("service-map-file-name"),s=document.getElementById("service-map-error"),h=document.getElementById("service-map-delete-btn");t&&n&&(t.addEventListener("click",()=>{n.click()}),n.addEventListener("change",I=>{let v=I.target.files[0];if(!v)return;if(v.name!=="service-map.json"){s.textContent='File must be named "service-map.json"',s.style.display="block",n.value="";return}let g=new FileReader;g.onload=C=>{try{let y=JSON.parse(C.target.result);localStorage.setItem("service_map",JSON.stringify(y)),o.textContent="service-map.json",s.style.display="none",b.setContent(d()),setTimeout(()=>{m(),c(),f(),w(),T(),A()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",n.value=""}},g.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",n.value=""},g.readAsText(v)})),h&&h.addEventListener("click",()=>{localStorage.removeItem("service_map"),b.setContent(d()),setTimeout(()=>{m(),c(),f(),w(),T(),A()},10)})}function f(){let t=document.getElementById("server-map-upload-btn"),n=document.getElementById("server-map-input"),o=document.getElementById("server-map-file-name"),s=document.getElementById("server-map-error"),h=document.getElementById("server-map-delete-btn");t&&n&&(t.addEventListener("click",()=>{n.click()}),n.addEventListener("change",I=>{let v=I.target.files[0];if(!v)return;if(v.name!=="server-map.json"){s.textContent='File must be named "server-map.json"',s.style.display="block",n.value="";return}let g=new FileReader;g.onload=C=>{try{let y=JSON.parse(C.target.result);localStorage.setItem("server_map",JSON.stringify(y)),o.textContent="server-map.json",s.style.display="none",b.setContent(d()),setTimeout(()=>{m(),c(),f()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",n.value=""}},g.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",n.value=""},g.readAsText(v)})),h&&h.addEventListener("click",()=>{localStorage.removeItem("server_map"),b.setContent(d()),setTimeout(()=>{m(),c(),f(),w(),T(),A()},10)})}function T(){let t=document.getElementById("notifications-toggle");t&&!t.disabled&&t.addEventListener("change",async n=>{if(n.target.checked)try{await Notification.requestPermission()==="granted"?new Notification("Easter Company",{body:"Notifications are now enabled!",icon:"/favicon.ico"}):n.target.checked=!1}catch(o){console.error("Notification permission error:",o),n.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),n.target.checked=!0)})}function A(){let t=document.getElementById("analytics-toggle");t&&t.addEventListener("change",n=>{let o=n.target.checked;k(o),o?(console.log("[Easter Analytics] Tracking user interactions"),console.log("[Easter Debug] Debug mode activated")):console.log("[Easter Analytics] Analytics disabled")})}function w(){let t=document.getElementById("options-upload-btn"),n=document.getElementById("options-input"),o=document.getElementById("options-file-name"),s=document.getElementById("options-error"),h=document.getElementById("options-delete-btn");t&&n&&(t.addEventListener("click",()=>{n.click()}),n.addEventListener("change",I=>{let v=I.target.files[0];if(!v)return;if(v.name!=="options.json"){s.textContent='File must be named "options.json"',s.style.display="block",n.value="";return}let g=new FileReader;g.onload=C=>{try{let y=JSON.parse(C.target.result);localStorage.setItem("user_options",JSON.stringify(y)),o.textContent="options.json",s.style.display="none",b.setContent(d()),setTimeout(()=>{m(),c(),f(),w()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",n.value=""}},g.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",n.value=""},g.readAsText(v)})),h&&h.addEventListener("click",()=>{localStorage.removeItem("user_options"),b.setContent(d()),setTimeout(()=>{m(),c(),f(),w(),T(),A()},10)})}let b=x({id:"settings-window",content:d(),icon:"bx-cog",onClose:p});function N(t,n=null){a&&a.id===t.id?(t.close(),a=null,n&&document.querySelectorAll(".nav-right i").forEach(s=>{s.classList.remove("active","inactive")})):a?(a.close(!0),setTimeout(()=>{t.open(),a=t,n&&document.querySelectorAll(".nav-right i").forEach(s=>{s===n?(s.classList.add("active"),s.classList.remove("inactive")):(s.classList.add("inactive"),s.classList.remove("active"))})},220)):(t.open(),a=t,n&&document.querySelectorAll(".nav-right i").forEach(s=>{s===n?(s.classList.add("active"),s.classList.remove("inactive")):(s.classList.add("inactive"),s.classList.remove("active"))})),a?e?.classList.add("hide"):e?.classList.remove("hide")}function P(t){t.preventDefault();let n=document.getElementById("email-input"),o=document.getElementById("login-error");try{W(n.value),window.location.reload()}catch(s){o.textContent=s.message,o.style.display="block"}}if(i){let t=document.getElementById("user-icon"),n=document.getElementById("message-icon"),o=document.getElementById("settings-icon");t&&t.addEventListener("click",()=>N(B,t)),n&&n.addEventListener("click",()=>N(_,n)),o&&o.addEventListener("click",()=>{N(b,o),setTimeout(()=>{m(),c(),f(),w(),T(),A()},100)})}else{let t=document.getElementById("login-btn");t&&t.addEventListener("click",()=>{N(r),setTimeout(()=>{let n=document.getElementById("login-form");n&&n.addEventListener("submit",P)},100)})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y();})();
//# sourceMappingURL=dex.dec2f5e3.js.map
