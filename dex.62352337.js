(()=>{function ne(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function se(t=!1){let d=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${t?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,v=document.createElement("nav");v.innerHTML=d,document.body.prepend(v)}function ie(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,n=document.createElement("footer");n.innerHTML=t,document.body.appendChild(n)}function J(t){let n=null,d=t.onClose||null,v=t.onOpen||null;function f(){if(n){n.classList.add("open"),v&&setTimeout(v,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),n=document.createElement("div"),n.id=t.id,n.className="window";let h=t.icon||"bx-window",q="",w="",M;t.tabs&&t.tabs.length>0?(q=`<div class="tab-bar">${t.tabs.map((m,E)=>{let F;return m.icon?F=`<i class="bx ${m.icon}"></i>`:m.title&&m.title.length>0?F=`<span class="tab-glyph">${m.title.charAt(0).toUpperCase()}</span>`:F='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${E===0?"active":""}" data-tab-index="${E}">
                        ${F}
                        <span class="tab-title">${m.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${E}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,M=`<div class="window-content">${t.tabs.map((m,E)=>`<div class="tab-content ${E===0?"active":""}" data-tab-content="${E}">${m.content}</div>`).join("")}</div>`):(t.title&&(w=`<div class="window-title">${t.title}</div>`),M=`<div class="window-content">${t.content}</div>`);let A=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${q}
                ${w}
                <i class="bx bx-x window-close"></i>
            </div>
        `;n.innerHTML=A+M,u.appendChild(n);let O=n.querySelector(".window-close");O&&O.addEventListener("click",_=>{_.stopPropagation(),b()}),t.tabs&&t.tabs.length>0&&n.querySelectorAll(".tab").forEach(H=>{H.addEventListener("click",()=>{let m=H.getAttribute("data-tab-index");n.querySelectorAll(".tab").forEach(E=>E.classList.remove("active")),H.classList.add("active"),n.querySelectorAll(".tab-content").forEach(E=>E.classList.remove("active")),n.querySelector(`.tab-content[data-tab-content="${m}"]`).classList.add("active")})}),setTimeout(()=>{n.classList.add("open"),v&&v()},10)}function b(u=!1){n&&(u?(n.classList.add("switching"),n.classList.remove("open"),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},200)):(n.classList.remove("open"),d&&d(),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},400)))}function y(u){if(n){let h=n.querySelector(".window-content");h&&(h.innerHTML=u)}}function T(){return n&&n.classList.contains("open")}return{open:f,close:b,setContent:y,isOpen:T,id:t.id}}var X="easter_user_email";function oe(){return localStorage.getItem(X)!==null}function Z(){return localStorage.getItem(X)}function ae(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(X,t.trim())}var re="easter_theme",L={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ee(){return localStorage.getItem(re)||L.AUTO}function ue(){let t=window.innerWidth,n=window.innerHeight,d=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&n>1080?L.ANIMATED:(t===1920&&n===1080&&d||t<=1920||n<=1080,L.DEFAULT)}function ce(t){if(!Object.values(L).includes(t))throw new Error("Invalid theme");localStorage.setItem(re,t),Q(t)}function Q(t,n=!1){let d=document.body,v=t===L.AUTO?ue():t;if(n||(d.classList.add("theme-transitioning"),setTimeout(()=>{d.classList.remove("theme-transitioning")},300)),Object.values(L).forEach(f=>{d.classList.remove(`theme-${f}`)}),d.classList.add(`theme-${t}`),v===L.ANIMATED){if(!document.querySelector(".background")){let f=document.createElement("div");f.className="background",document.body.prepend(f)}}else{let f=document.querySelector(".background");f&&(n?f.remove():(f.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{f.remove()},400)))}}function le(){let t=ee();if(Q(t,!0),t===L.AUTO){let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{Q(L.AUTO)},300)})}}function z(t,n,d=null){let f={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",b=d?`<p class="placeholder-action">${d}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${f} placeholder-icon'></i>
            <p class="placeholder-message">${n}</p>
            ${b}
        </div>
    `}function de(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function Y(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let n=localStorage.getItem("service_map");if(!n)return t.classList.add("placeholder-active"),t.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let d;try{d=JSON.parse(n)}catch(y){return console.error("Error parsing service_map from localStorage:",y),t.classList.add("placeholder-active"),t.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let v=null;if(d&&typeof d.services=="object"){let y=["cs","be","th"];for(let T of y)if(Array.isArray(d.services[T])){let u=d.services[T].find(h=>h.short_name==="event"||h.id==="event"||h.id==="dex-event-service");if(u){v=u;break}}}if(!v)return t.classList.add("placeholder-active"),t.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let b=`http://${v.domain==="0.0.0.0"?"localhost":v.domain}:${v.port}/logs`;try{let y=await fetch(b);if(!y.ok)return t.classList.add("placeholder-active"),t.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let T=await y.json();if(!T||T.length===0)return t.classList.add("placeholder-active"),t.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let u=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],h=T.filter(w=>!u.includes(w.id));h.forEach(w=>{w.logs.reverse()}),h.reverse();let q=h.map(w=>{let M=w.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${w.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(M)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${M}</pre>
                </div>
            `}).join("");return t.innerHTML=q,document.querySelectorAll(".copy-logs-btn").forEach(w=>{w.addEventListener("click",()=>{let M=unescape(w.dataset.logs);navigator.clipboard.writeText(M).then(()=>{let A=w.querySelector("i");A.classList.remove("bx-copy"),A.classList.add("bx-check"),setTimeout(()=>{A.classList.remove("bx-check"),A.classList.add("bx-copy")},2e3)})})}),!0}catch(y){return console.error("Error fetching logs:",y),t.classList.add("placeholder-active"),t.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function pe(){console.log("Welcome to Easter Company."),le(),ne();let t=oe();se(t),ie();let n=document.querySelector("footer"),d=null;function v(){d=null,n?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function f(s,o=null){let i=d&&d.id===s.id;d&&d.close(!i),i?d=null:setTimeout(()=>{s.open(),d=s,document.querySelectorAll(".nav-right i").forEach(l=>{let p=l===o;l.classList.toggle("active",p),l.classList.toggle("inactive",!p&&o)}),n?.classList.add("hide")},d?220:0)}function b(s,o,i=null){let p={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",g=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${p} placeholder-icon'></i><p class="placeholder-message">${o}</p>${g}</div>`}let y=null,T=null,u=null,h=null,q=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),w=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),M=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>';async function A(){if(!localStorage.getItem("service_map"))return null;try{let o=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(g=>g.id==="dex-event-service");if(!o)return null;let l=`http://${o.domain==="0.0.0.0"?"localhost":o.domain}:${o.port}/system_monitor_metrics`,p=await fetch(l);if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);return await p.json()}catch(s){return console.error("Error fetching system data:",s),null}}async function O(){let s=document.getElementById("services-widgets");if(!s)return;let o=await A();if(!o||!o.services){s.innerHTML=b("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}y=Date.now(),m(4,y);let i=o.services||[];Array.from(s.children).forEach(e=>{e.classList.contains("service-widget")||e.remove()});function l(e){return!e||e==="N/A"||e==="unknown"||e.trim()===""?"-":e}function p(e){if(!e||e==="N/A"||e==="unknown")return"-";let r=e.match(/^(\d+\.\d+\.\d+)/);return r?r[0]:e.split(".").slice(0,3).join(".")||"-"}function g(e){return!e||e.length<=28?e:e.substring(0,28)+"..."}function c(e){if(!e||!e.includes("%"))return"#666";let r=parseFloat(e);return r<30?"#00ff00":r<60?"#88ff00":r<80?"#ffaa00":"#ff0000"}function a(e){if(!e||e==="N/A"||e==="unknown")return"-";let r=e.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!r)return"-";let $=parseInt(r[1])||0,k=parseInt(r[2])||0,G=parseInt(r[3])||0,I=parseFloat(r[4])||0,C=$*86400+k*3600+G*60+I,B=Math.floor(C/86400);if(B>0)return`${B}d`;let D=Math.floor(C/3600);if(D>0)return`${D}h`;let j=Math.floor(C/60);return j>0?`${j}m`:`${Math.floor(C)}s`}function x(e){let r=e.status==="online",$=r?"service-widget-online":"service-widget-offline",k=r?"bx-check-circle":"bx-x-circle",G=r?"OK":"BAD",I=e.version?p(e.version.str):"-",C=l(e.cpu),B=l(e.memory),D=c(C),j=c(B),K=a(e.uptime),P="";return r?P=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${I}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${K}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${D};"></i><span style="color: ${D};">${C}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${j};"></i><span style="color: ${j};">${B}</span></div></div>`:P='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${$}" data-service-id="${e.id}"><div class="service-widget-header"><i class="bx ${k}"></i><h3>${e.short_name||e.id}</h3><span class="service-widget-status">${G}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${g(e.domain&&e.port?`${e.domain}:${e.port}`:"")}</span></div>${P}</div></div>`}let N=new Map(Array.from(s.querySelectorAll(".service-widget")).map(e=>[e.dataset.serviceId,e])),S=new Set(i.map(e=>e.id));for(let[e,r]of N)S.has(e)||r.remove();i.forEach(e=>{let r=x(e),$=N.get(e.id);$?$.outerHTML!==r&&($.outerHTML=r):s.insertAdjacentHTML("beforeend",r)})}async function _(){let s=document.getElementById("models-widgets");if(!s)return;let o=await A();if(!o){s.innerHTML=b("offline","Failed to load model status.");return}h=Date.now(),m(3,h);let i=o.models||[],l=o.whisper;Array.from(s.children).forEach(a=>{a.classList.contains("service-widget")||a.remove()});function p(a){let x=a.status==="Ready";return`
                <div class="service-widget ${x?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${x?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${a.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function g(a){let x=a.status==="Downloaded",N=x?"service-widget-online":"service-widget-offline",S=x?"OK":"MISSING",e=x&&a.size>0?`${(a.size/1e9).toFixed(2)} GB`:"-",r=a.name;return a.type==="custom"&&r.endsWith(":latest")&&(r=r.replace(":latest","")),`<div class="service-widget ${N}" data-model-name="${a.name}"><div class="service-widget-header"><i class="bx ${x?"bx-check-circle":"bx-x-circle"}"></i><h3>${r}</h3><span class="service-widget-status">${S}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${a.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${e}</span></div></div></div>`}let c="";if(l&&(c+=p(l)),c+=i.map(g).join(""),!c){s.innerHTML=b("empty","No models found.");return}s.innerHTML!==c&&(s.innerHTML=c)}async function H(){let s=document.getElementById("events-timeline");if(!s)return;let o=localStorage.getItem("service_map");if(!o){s.innerHTML=b("config","No service map configured.","Upload service-map.json in Settings.");return}let i=null;try{i=(JSON.parse(o).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{s.innerHTML=b("error","Invalid service map data.");return}if(!i){s.innerHTML=b("error","Event service not found in service map.");return}let p=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/events?ml=50&format=text`;try{let g=await fetch(p);if(!g.ok)throw new Error("Service is offline or unreachable.");let c=await g.text();if(!c||c.trim()===""){s.innerHTML=b("empty","No events found.");return}let x=c.trim().split(`
`).map(N=>{let S=N.split(" | ");if(S.length<3)return"";let e=new Date(S[0].trim().replace(" UTC","Z")),r=e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=e.toLocaleDateString(navigator.language,{month:"short",day:"numeric"});return`<div class="event-item"><div class="event-time"><span class="event-time-main">${r}</span><span class="event-date">${$}</span></div><div class="event-content"><div class="event-service">${S[1].trim()}</div><div class="event-message">${S[2].trim()}</div></div></div>`}).join("");s.innerHTML=x,T=Date.now(),m(1,T)}catch(g){console.error("Error fetching events:",g),s.innerHTML=b("offline","Failed to load events.","The event service may be offline or unreachable.")}}function m(s,o){let i=document.querySelector(`.tab[data-tab-index="${s}"] .tab-subtitle`);if(!i)return;if(!o){i.textContent="Last updated: never";return}let p=(Date.now()-o)/1e3,g;if(p<30)g=`${Math.floor(p)}s ago`;else{i.textContent="Last updated: never";return}i.textContent=`Last updated: ${g}`}let E=J({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:v}),F=J({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${Z()||"Unknown"}</p>`,icon:"bx-user",onClose:v});function W(){let s=ee(),o=Z()||"user@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},l=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(L).map(p=>`
                    <div class="theme-card ${s===p?"active":""}" data-theme="${p}">
                        <div class="theme-preview theme-preview-${p.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${p}</h3>
                            <p>${p===L.AUTO?"Automatic theme selection.":p===L.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${s===p?"Active":"Select"}</span>
                        </div>
                    </div>
                `).join("")}
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
                            <input type="checkbox" id="analytics-toggle" ${l?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function V(){let s=document.querySelector("#settings-window .window-content");if(!s)return;s.querySelectorAll(".theme-card").forEach(c=>{c.addEventListener("click",function(){let a=this.dataset.theme;ce(a),R.setContent(W()),V()})});function o(c,a,x,N,S,e,r){let $=document.getElementById(c),k=document.getElementById(a),G=document.getElementById(x),I=document.getElementById(N),C=document.getElementById(S);$&&k&&($.onclick=()=>k.click(),k.onchange=B=>{let D=B.target.files[0];if(!D)return;if(D.name!==r){I.textContent=`File must be named "${r}"`,I.style.display="block",k.value="";return}let j=new FileReader;j.onload=K=>{try{let P=JSON.parse(K.target.result);localStorage.setItem(e,JSON.stringify(P)),G.textContent=r,I.style.display="none",R.setContent(W()),V()}catch{I.textContent="Invalid JSON format",I.style.display="block",k.value=""}},j.onerror=()=>{I.textContent="Failed to read file",I.style.display="block",k.value=""},j.readAsText(D)}),C&&(C.onclick=()=>{localStorage.removeItem(e),R.setContent(W()),V()})}o("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),o("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),o("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let i=document.getElementById("notifications-toggle");if(i){let c="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!c||c.state==="denied")&&(i.disabled=!0),i.onclick=async a=>{if(a.target.checked)try{await Notification.requestPermission()!=="granted"&&(a.target.checked=!1)}catch{a.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.target.checked=!0)}}let l=document.getElementById("microphone-toggle");async function p(){let c="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;l&&(l.disabled=!c||c.state==="denied",l.checked=c?.state==="granted");let a=document.querySelector("#microphone-setting-item .settings-item-description");a&&(a.textContent=c?c.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}p(),l&&!l.disabled&&(l.onclick=async c=>{if(c.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),p()}catch{c.target.checked=!1,p()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),c.target.checked=!0)});let g=document.getElementById("analytics-toggle");g&&(g.checked=localStorage.getItem("easter_analytics_enabled")!=="false",g.onclick=c=>{let a=c.target.checked;localStorage.setItem("easter_analytics_enabled",a),window.EASTER_ANALYTICS_ENABLED=a,window.EASTER_DEBUG_MODE=a})}let R=J({id:"settings-window",title:"Settings",content:W(),icon:"bx-cog",onClose:v,onOpen:()=>{R.setContent(W()),setTimeout(V,50)}}),U=J({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:b("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:M(),"data-tab-index":1},{icon:"bx-history",title:"Logs",content:de(),"data-tab-index":2},{icon:"bx-brain",title:"Models",content:w(),"data-tab-index":3},{icon:"bx-line-chart",title:"Services",content:q(),"data-tab-index":4}],icon:"bxs-message-dots",onClose:v,onOpen:()=>setTimeout(te,100)});async function te(){await Promise.all([O(),_(),H(),Y().then(l=>{l&&(u=Date.now()),m(2,u)})]);let s=setInterval(()=>{if(!U.isOpen())return clearInterval(s);m(2,u),m(1,T),m(3,h),m(4,y)},1e3),o=setInterval(()=>{if(!U.isOpen())return clearInterval(o);H(),Y().then(l=>{l&&(u=Date.now()),m(2,u)})},5e3),i=setInterval(()=>{if(!U.isOpen())return clearInterval(i);O(),_()},3e4)}t?(document.getElementById("user-icon")?.addEventListener("click",s=>f(F,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>f(U,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>f(R,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{f(E),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{ae(document.getElementById("email-input").value),window.location.reload()}catch(o){let i=document.getElementById("login-error");i&&(i.textContent=o.message,i.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pe):pe();})();
//# sourceMappingURL=dex.62352337.js.map
