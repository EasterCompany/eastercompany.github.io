(()=>{function Z(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ee(o=!1){let r=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${o?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,y=document.createElement("nav");y.innerHTML=r,document.body.prepend(y)}function te(){let o=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,s=document.createElement("footer");s.innerHTML=o,document.body.appendChild(s)}function O(o){let s=null,r=o.onClose||null;function y(){if(s){s.classList.add("open");return}let v=document.getElementById("windows-container");v||(v=document.createElement("div"),v.id="windows-container",v.className="windows-container",document.body.appendChild(v)),s=document.createElement("div"),s.id=o.id,s.className="window";let M=o.icon||"bx-window",k="",D;o.tabs&&o.tabs.length>0?(k=`<div class="tab-bar">${o.tabs.map((m,E)=>{let h;return m.icon?h=`<i class="bx ${m.icon}"></i>`:m.title&&m.title.length>0?h=`<span class="tab-glyph">${m.title.charAt(0).toUpperCase()}</span>`:h='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${E===0?"active":""}" data-tab-index="${E}">
                        ${h}
                        <span class="tab-title">${m.title}</span>
                    </div>
                `}).join("")}</div>`,D=`<div class="window-content">${o.tabs.map((m,E)=>`
                <div class="tab-content ${E===0?"active":""}" data-tab-content="${E}">${m.content}</div>
            `).join("")}</div>`):D=`<div class="window-content">${o.content}</div>`;let R=`
            <div class="window-header">
                <i class="bx ${M}"></i>
                ${k}
                <i class="bx bx-x window-close"></i>
            </div>
        `;s.innerHTML=R+D,v.appendChild(s);let U=s.querySelector(".window-close");U&&U.addEventListener("click",$=>{$.stopPropagation(),g()}),o.tabs&&o.tabs.length>0&&s.querySelectorAll(".tab").forEach(f=>{f.addEventListener("click",()=>{let m=f.getAttribute("data-tab-index");s.querySelectorAll(".tab").forEach(E=>E.classList.remove("active")),f.classList.add("active"),s.querySelectorAll(".tab-content").forEach(E=>E.classList.remove("active")),s.querySelector(`.tab-content[data-tab-content="${m}"]`).classList.add("active")})}),setTimeout(()=>{s.classList.add("open")},10)}function g(v=!1){s&&(v?(s.classList.add("switching"),s.classList.remove("open"),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},200)):(s.classList.remove("open"),r&&r(),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},400)))}function H(v){if(s){let M=s.querySelector(".window-content");M&&(M.innerHTML=v)}}function W(){return s&&s.classList.contains("open")}return{open:y,close:g,setContent:H,isOpen:W,id:o.id}}var z="easter_user_email";function ne(){return localStorage.getItem(z)!==null}function J(){return localStorage.getItem(z)}function se(o){if(!o||!o.includes("@"))throw new Error("Invalid email address");if(!o.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(z,o.trim())}var ie="easter_theme",d={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function G(){return localStorage.getItem(ie)||d.AUTO}function de(){let o=window.innerWidth,s=window.innerHeight,r=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return o>1920&&s>1080?d.ANIMATED:(o===1920&&s===1080&&r||o<=1920||s<=1080,d.DEFAULT)}function oe(o){if(!Object.values(d).includes(o))throw new Error("Invalid theme");localStorage.setItem(ie,o),Y(o)}function Y(o,s=!1){let r=document.body,y=o===d.AUTO?de():o;if(s||(r.classList.add("theme-transitioning"),setTimeout(()=>{r.classList.remove("theme-transitioning")},300)),Object.values(d).forEach(g=>{r.classList.remove(`theme-${g}`)}),r.classList.add(`theme-${o}`),y===d.ANIMATED){if(!document.querySelector(".background")){let g=document.createElement("div");g.className="background",document.body.prepend(g)}}else{let g=document.querySelector(".background");g&&(s?g.remove():(g.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{g.remove()},400)))}}function ae(){let o=G();if(Y(o,!0),o===d.AUTO){let s;window.addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(()=>{Y(d.AUTO)},300)})}}function re(){console.log("Welcome to Easter Company."),ae(),Z();let o=ne();ee(o),te();let s=document.querySelector("footer"),r=null;function y(){r=null,s?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(t=>{t.classList.remove("active","inactive")})}let g=O({id:"login-window",content:`
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
        `,icon:"bx-log-in",onClose:y}),H=O({id:"user-window",content:`<h1>User Profile</h1><p>Logged in as: ${J()||"Unknown"}</p>`,icon:"bx-user",onClose:y}),W=O({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:"<h1>Notifications</h1><p>This is the notifications tab.</p>"},{icon:"bx-history",title:"Logs",content:"<h1>Logs</h1><p>This is the logs tab.</p>"},{icon:"bx-calendar-event",title:"Events",content:"<h1>Events</h1><p>This is the events tab.</p>"},{icon:"bx-line-chart",title:"System Monitor",content:"<h1>System Monitor</h1><p>This is the system monitor tab.</p>"}],icon:"bxs-message-dots",onClose:y}),v="easter_analytics_enabled",M="easter_debug_mode";function k(){let e=localStorage.getItem(v);return e===null?!0:e==="true"}function D(){return k()}function R(e){localStorage.setItem(v,e.toString()),window.EASTER_ANALYTICS_ENABLED=e,window.EASTER_DEBUG_MODE=e,console.log(e?"[Easter Analytics] Analytics and debug mode enabled":"[Easter Analytics] Analytics and debug mode disabled")}window.EASTER_ANALYTICS_ENABLED=k(),window.EASTER_DEBUG_MODE=D(),window.EASTER_DEBUG_MODE&&(console.log("[Easter Debug] Debug mode is active"),console.log("[Easter Debug] Analytics enabled:",window.EASTER_ANALYTICS_ENABLED));function U(){return"Notification"in window?{enabled:Notification.permission==="granted",supported:!0}:{enabled:!1,supported:!1}}async function $(){if(!navigator.permissions)return{enabled:!1,supported:!1};try{let e=await navigator.permissions.query({name:"microphone"});return{enabled:e.state==="granted",supported:!0,state:e.state}}catch(e){return console.error("Error querying microphone permission:",e),{enabled:!1,supported:!1}}}async function f(){let e=document.getElementById("microphone-toggle");if(!e)return;let t=await $(),i=document.querySelector("#microphone-setting-item .settings-item-description");t.supported?(e.disabled=!1,e.checked=t.enabled,i&&(i.textContent="Allow access to your microphone")):(e.disabled=!0,e.checked=!1,i&&(i.textContent="Not supported in this browser"))}function m(){let e=G(),t=J()||"user@easter.company",i=U(),n=k(),a=localStorage.getItem("service_map"),p=localStorage.getItem("server_map"),u=localStorage.getItem("user_options"),l;return a&&p&&u?l="<p>Loading metrics...</p>":l="<p>Please upload your config files to enable metrics.</p>",`
                <h1 style="text-align: center; margin-bottom: 30px;">Settings</h1>
                <div class="theme-selector">
                    <div class="theme-card ${e===d.AUTO?"active":""}" data-theme="${d.AUTO}">
                        <div class="theme-preview theme-preview-auto"></div>
                                                                                    <div class="theme-info">
                                                                                        <h3>Auto</h3>
                                                                                        <p>Automatic theme selection.</p>
                                                                                        <span class="theme-badge">${e===d.AUTO?"Active":"Select"}</span>
                                                                                    </div>                    </div>
                    <div class="theme-card ${e===d.DEFAULT?"active":""}" data-theme="${d.DEFAULT}">
                        <div class="theme-preview theme-preview-default"></div>
                                                                <div class="theme-info">
                                                                    <h3>Default</h3>
                                                                    <p>Simple, black, default.</p>
                                                                    <span class="theme-badge">${e===d.DEFAULT?"Active":"Select"}</span>
                                                                </div>                    </div>
                    <div class="theme-card ${e===d.ANIMATED?"active":""}" data-theme="${d.ANIMATED}">
                        <div class="theme-preview theme-preview-animated"></div>
                                                                <div class="theme-info">
                                                                    <h3>Legacy</h3>
                                                                    <p>Colourful, not bright.</p>
                                                                    <span class="theme-badge">${e===d.ANIMATED?"Active":"Select"}</span>
                                                                </div>                    </div>
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
                                <span class="settings-item-description">${i.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" id="notifications-toggle" ${i.enabled?"checked":""} ${i.supported?"":"disabled"}>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                        <div class="settings-item" id="microphone-setting-item">
                            <div class="settings-item-info">
                                <span class="settings-item-label">Access Microphone</span>
                                <span class="settings-item-description">Allow access to your microphone</span>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" id="microphone-toggle" disabled>
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
                        ${l}
                    </div>
                </div>
            `}async function E(){let e=localStorage.getItem("service_map");if(!e)return;let t;try{t=JSON.parse(e)}catch(c){console.error("Error parsing service_map from localStorage:",c);return}let i=document.querySelector(".settings-metrics");if(!i)return;let n=[];if(t&&typeof t.services=="object"){let c=["cs","be","th"];for(let S of c)Array.isArray(t.services[S])&&n.push(...t.services[S])}else{let c="Error: service-map.json does not contain a valid 'services' object.";console.error(c,t),i.innerHTML=`<p>${c}</p>`;return}i.innerHTML="<p>Loading metrics...</p>";let a=n.map(c=>{let P=`http://${c.domain==="0.0.0.0"?"localhost":c.domain}:${c.port}/service`;return fetch(P).then(j=>j.ok?j.json().then(Q=>({name:c.id,status:"online",version:Q.version,...Q})):{name:c.id,status:"offline"}).catch(()=>({name:c.id,status:"offline"}))}),p=await Promise.all(a),u=p.length,l=p.filter(c=>c.status==="online").length,b=u-l,w=`
                                            <div class="metric-item">
                                                <span class="metric-label">Total Services</span>
                                                <span class="metric-value">${u}</span>
                                            </div>
                                            <div class="metric-item">
                                                <span class="metric-label">Online Services</span>
                                                <span class="metric-value ${l>0?"metric-value-active":""}">${l}</span>
                                            </div>
                                            <div class="metric-item">
                                                <span class="metric-label">Offline Services</span>
                                                <span class="metric-value ${b>0?"metric-value-error":""}">${b}</span>
                                            </div>
                                        `,F=p.filter(c=>c.status==="online").map(c=>{let S=c.version&&c.version.obj,P=S?`${S.major}.${S.minor}.${S.patch}`:"unknown",j=S?`${S.branch} ${S.commit}`:"";return`
                                                            <div class="metric-item">
                                                                <span class="metric-label">${c.name} Version</span>
                                                                <span class="metric-value">
                                                                    <span class="metric-version-monospace" style="font-size: 1.2em; font-weight: bold; color: white;">${P}</span>
                                                                    ${j?`<span class="metric-version-monospace" style="font-size: 0.8em; color: #aaa; margin-left: 5px;">${j}</span>`:""}
                                                                </span>
                                                            </div>
                                                        `}).join("");i.innerHTML=w+F}function h(){document.querySelectorAll(".theme-card").forEach(t=>{t.addEventListener("click",function(){let n=this.getAttribute("data-theme");oe(n),I.setContent(m()),setTimeout(()=>{h(),L(),T(),x(),N(),B(),f(),A()},10)})})}function L(){let e=document.getElementById("service-map-upload-btn"),t=document.getElementById("service-map-input"),i=document.getElementById("service-map-file-name"),n=document.getElementById("service-map-error"),a=document.getElementById("service-map-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",p=>{let u=p.target.files[0];if(!u)return;if(u.name!=="service-map.json"){n.textContent='File must be named "service-map.json"',n.style.display="block",t.value="";return}let l=new FileReader;l.onload=b=>{try{let w=JSON.parse(b.target.result);localStorage.setItem("service_map",JSON.stringify(w)),i.textContent="service-map.json",n.style.display="none",I.setContent(m()),setTimeout(()=>{h(),L(),T(),x(),N(),B(),f(),A()},10)}catch{n.textContent="Invalid JSON format",n.style.display="block",t.value=""}},l.onerror=()=>{n.textContent="Failed to read file",n.style.display="block",t.value=""},l.readAsText(u)})),a&&a.addEventListener("click",()=>{localStorage.removeItem("service_map"),I.setContent(m()),setTimeout(()=>{h(),L(),T(),x(),N(),B(),f(),A()},10)})}function T(){let e=document.getElementById("server-map-upload-btn"),t=document.getElementById("server-map-input"),i=document.getElementById("server-map-file-name"),n=document.getElementById("server-map-error"),a=document.getElementById("server-map-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",p=>{let u=p.target.files[0];if(!u)return;if(u.name!=="server-map.json"){n.textContent='File must be named "server-map.json"',n.style.display="block",t.value="";return}let l=new FileReader;l.onload=b=>{try{let w=JSON.parse(b.target.result);localStorage.setItem("server_map",JSON.stringify(w)),i.textContent="server-map.json",n.style.display="none",I.setContent(m()),setTimeout(()=>{h(),L(),T(),f(),A()},10)}catch{n.textContent="Invalid JSON format",n.style.display="block",t.value=""}},l.onerror=()=>{n.textContent="Failed to read file",n.style.display="block",t.value=""},l.readAsText(u)})),a&&a.addEventListener("click",()=>{localStorage.removeItem("server_map"),I.setContent(m()),setTimeout(()=>{h(),L(),T(),x(),N(),B(),f(),A()},10)})}function N(){let e=document.getElementById("notifications-toggle");e&&!e.disabled&&e.addEventListener("change",async t=>{if(t.target.checked)try{await Notification.requestPermission()==="granted"?new Notification("Easter Company",{body:"Notifications are now enabled!",icon:"/favicon.ico"}):t.target.checked=!1}catch(i){console.error("Notification permission error:",i),t.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),t.target.checked=!0)})}function A(){let e=document.getElementById("microphone-toggle");e&&!e.disabled&&e.addEventListener("change",async t=>{if(t.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0})}catch(i){console.error("Microphone permission error:",i),t.target.checked=!1}else(await $()).enabled&&(alert("To disable microphone access, please use your browser settings."),t.target.checked=!0)})}function B(){let e=document.getElementById("analytics-toggle");e&&e.addEventListener("change",t=>{let i=t.target.checked;R(i),i?(console.log("[Easter Analytics] Tracking user interactions"),console.log("[Easter Debug] Debug mode activated")):console.log("[Easter Analytics] Analytics disabled")})}function x(){let e=document.getElementById("options-upload-btn"),t=document.getElementById("options-input"),i=document.getElementById("options-file-name"),n=document.getElementById("options-error"),a=document.getElementById("options-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",p=>{let u=p.target.files[0];if(!u)return;if(u.name!=="options.json"){n.textContent='File must be named "options.json"',n.style.display="block",t.value="";return}let l=new FileReader;l.onload=b=>{try{let w=JSON.parse(b.target.result);localStorage.setItem("user_options",JSON.stringify(w)),i.textContent="options.json",n.style.display="none",I.setContent(m()),setTimeout(()=>{h(),L(),T(),x(),f(),A()},10)}catch{n.textContent="Invalid JSON format",n.style.display="block",t.value=""}},l.onerror=()=>{n.textContent="Failed to read file",n.style.display="block",t.value=""},l.readAsText(u)})),a&&a.addEventListener("click",()=>{localStorage.removeItem("user_options"),I.setContent(m()),setTimeout(()=>{h(),L(),T(),x(),N(),B(),f(),A()},10)})}let I=O({id:"settings-window",content:m(),icon:"bx-cog",onClose:y});function q(e,t=null){r&&r.id===e.id?(e.close(),r=null,t&&document.querySelectorAll(".nav-right i").forEach(n=>{n.classList.remove("active","inactive")})):r?(r.close(!0),setTimeout(()=>{e.open(),r=e,t&&document.querySelectorAll(".nav-right i").forEach(n=>{n===t?(n.classList.add("active"),n.classList.remove("inactive")):(n.classList.add("inactive"),n.classList.remove("active"))})},220)):(e.open(),r=e,t&&document.querySelectorAll(".nav-right i").forEach(n=>{n===t?(n.classList.add("active"),n.classList.remove("inactive")):(n.classList.add("inactive"),n.classList.remove("active"))})),r?s?.classList.add("hide"):s?.classList.remove("hide")}let V=document.getElementById("navbar-microphone"),K,C,_;function le(e){let t=e.getContext("2d");C=new(window.AudioContext||window.webkitAudioContext),_=C.createAnalyser();let i=C.createOscillator();i.type="sine",i.frequency.setValueAtTime(440,C.currentTime),i.connect(_),_.connect(C.destination),i.start(),_.fftSize=256;let n=_.frequencyBinCount,a=new Uint8Array(n);function p(){K=requestAnimationFrame(p),_.getByteTimeDomainData(a),t.clearRect(0,0,e.width,e.height),t.lineWidth=2,t.strokeStyle="rgb(0, 255, 255)",t.shadowBlur=10,t.shadowColor="rgb(0, 255, 255)",t.beginPath();let u=e.width*1/n,l=0;for(let b=0;b<n;b++){let F=a[b]/128*e.height/2;b===0?t.moveTo(l,F):t.lineTo(l,F),l+=u}t.lineTo(e.width,e.height/2),t.stroke()}p()}function X(){cancelAnimationFrame(K),C&&C.close()}V&&V.addEventListener("click",()=>{let e=document.querySelector("nav"),t=document.querySelector(".nav-left"),i=r?.isOpen()?r.id:null,n=i?document.querySelector(`#${i} .window-content`):null;if(e.classList.contains("recording")){e.classList.remove("recording"),t.classList.remove("recording"),X();let a=document.getElementById("audio-canvas");a&&a.remove()}else{e.classList.add("recording"),t.classList.add("recording");let a=document.createElement("canvas");a.id="audio-canvas",a.style.position="absolute",a.style.top="0",a.style.left="0",a.style.width="100%",a.style.height="100%",a.style.zIndex="-1",e.prepend(a),le(a),setTimeout(()=>{e.classList.remove("recording"),t.classList.remove("recording"),X();let p=document.getElementById("audio-canvas");p&&p.remove()},3e4)}});function ce(e){e.preventDefault();let t=document.getElementById("email-input"),i=document.getElementById("login-error");try{se(t.value),window.location.reload()}catch(n){i.textContent=n.message,i.style.display="block"}}if(o){let e=document.getElementById("user-icon"),t=document.getElementById("message-icon"),i=document.getElementById("settings-icon");e&&e.addEventListener("click",()=>q(H,e)),t&&t.addEventListener("click",()=>q(W,t)),i&&i.addEventListener("click",()=>{q(I,i),setTimeout(()=>{h(),L(),T(),x(),N(),B(),f(),A();let n=localStorage.getItem("service_map"),a=localStorage.getItem("server_map"),p=localStorage.getItem("user_options");n&&a&&p&&E()},100)})}else{let e=document.getElementById("login-btn");e&&e.addEventListener("click",()=>{q(g),setTimeout(()=>{let t=document.getElementById("login-form");t&&t.addEventListener("submit",ce)},100)})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",re):re();})();
//# sourceMappingURL=dex.70a78959.js.map
