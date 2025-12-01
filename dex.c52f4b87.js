(()=>{function ne(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ie(e=!1){let d=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${e?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,v=document.createElement("nav");v.innerHTML=d,document.body.prepend(v)}function se(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,n=document.createElement("footer");n.innerHTML=e,document.body.appendChild(n)}function J(e){let n=null,d=e.onClose||null,v=e.onOpen||null;function f(){if(n){n.classList.add("open"),v&&setTimeout(v,10);return}let m=document.getElementById("windows-container");m||(m=document.createElement("div"),m.id="windows-container",m.className="windows-container",document.body.appendChild(m)),n=document.createElement("div"),n.id=e.id,n.className="window";let h=e.icon||"bx-window",q="",w="",I;e.tabs&&e.tabs.length>0?(q=`<div class="tab-bar">${e.tabs.map((u,E)=>{let F;return u.icon?F=`<i class="bx ${u.icon}"></i>`:u.title&&u.title.length>0?F=`<span class="tab-glyph">${u.title.charAt(0).toUpperCase()}</span>`:F='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${E===0?"active":""}" data-tab-index="${E}">
                        ${F}
                        <span class="tab-title">${u.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${E}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,I=`<div class="window-content">${e.tabs.map((u,E)=>`<div class="tab-content ${E===0?"active":""}" data-tab-content="${E}">${u.content}</div>`).join("")}</div>`):(e.title&&(w=`<div class="window-title">${e.title}</div>`),I=`<div class="window-content">${e.content}</div>`);let A=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${q}
                ${w}
                <i class="bx bx-x window-close"></i>
            </div>
        `;n.innerHTML=A+I,m.appendChild(n);let O=n.querySelector(".window-close");O&&O.addEventListener("click",j=>{j.stopPropagation(),b()}),e.tabs&&e.tabs.length>0&&n.querySelectorAll(".tab").forEach(H=>{H.addEventListener("click",()=>{let u=H.getAttribute("data-tab-index");n.querySelectorAll(".tab").forEach(E=>E.classList.remove("active")),H.classList.add("active"),n.querySelectorAll(".tab-content").forEach(E=>E.classList.remove("active")),n.querySelector(`.tab-content[data-tab-content="${u}"]`).classList.add("active")})}),setTimeout(()=>{n.classList.add("open"),v&&v()},10)}function b(m=!1){n&&(m?(n.classList.add("switching"),n.classList.remove("open"),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},200)):(n.classList.remove("open"),d&&d(),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},400)))}function y(m){if(n){let h=n.querySelector(".window-content");h&&(h.innerHTML=m)}}function L(){return n&&n.classList.contains("open")}return{open:f,close:b,setContent:y,isOpen:L,id:e.id}}var X="easter_user_email";function oe(){return localStorage.getItem(X)!==null}function Z(){return localStorage.getItem(X)}function ae(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(X,e.trim())}var re="easter_theme",x={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ee(){return localStorage.getItem(re)||x.AUTO}function me(){let e=window.innerWidth,n=window.innerHeight,d=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&n>1080?x.ANIMATED:(e===1920&&n===1080&&d||e<=1920||n<=1080,x.DEFAULT)}function ce(e){if(!Object.values(x).includes(e))throw new Error("Invalid theme");localStorage.setItem(re,e),Q(e)}function Q(e,n=!1){let d=document.body,v=e===x.AUTO?me():e;if(n||(d.classList.add("theme-transitioning"),setTimeout(()=>{d.classList.remove("theme-transitioning")},300)),Object.values(x).forEach(f=>{d.classList.remove(`theme-${f}`)}),d.classList.add(`theme-${e}`),v===x.ANIMATED){if(!document.querySelector(".background")){let f=document.createElement("div");f.className="background",document.body.prepend(f)}}else{let f=document.querySelector(".background");f&&(n?f.remove():(f.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{f.remove()},400)))}}function le(){let e=ee();if(Q(e,!0),e===x.AUTO){let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{Q(x.AUTO)},300)})}}function z(e,n,d=null){let f={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",b=d?`<p class="placeholder-action">${d}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${f} placeholder-icon'></i>
            <p class="placeholder-message">${n}</p>
            ${b}
        </div>
    `}function de(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function V(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let n=localStorage.getItem("service_map");if(!n)return e.classList.add("placeholder-active"),e.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let d;try{d=JSON.parse(n)}catch(y){return console.error("Error parsing service_map from localStorage:",y),e.classList.add("placeholder-active"),e.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let v=null;if(d&&typeof d.services=="object"){let y=["cs","be","th"];for(let L of y)if(Array.isArray(d.services[L])){let m=d.services[L].find(h=>h.short_name==="event"||h.id==="event"||h.id==="dex-event-service");if(m){v=m;break}}}if(!v)return e.classList.add("placeholder-active"),e.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let b=`http://${v.domain==="0.0.0.0"?"localhost":v.domain}:${v.port}/logs`;try{let y=await fetch(b);if(!y.ok)return e.classList.add("placeholder-active"),e.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let L=await y.json();if(!L||L.length===0)return e.classList.add("placeholder-active"),e.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let m=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],h=L.filter(w=>!m.includes(w.id));h.forEach(w=>{w.logs.reverse()}),h.reverse();let q=h.map(w=>{let I=w.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${w.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(I)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${I}</pre>
                </div>
            `}).join("");return e.innerHTML=q,document.querySelectorAll(".copy-logs-btn").forEach(w=>{w.addEventListener("click",()=>{let I=unescape(w.dataset.logs);navigator.clipboard.writeText(I).then(()=>{let A=w.querySelector("i");A.classList.remove("bx-copy"),A.classList.add("bx-check"),setTimeout(()=>{A.classList.remove("bx-check"),A.classList.add("bx-copy")},2e3)})})}),!0}catch(y){return console.error("Error fetching logs:",y),e.classList.add("placeholder-active"),e.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function pe(){console.log("Welcome to Easter Company."),le(),ne();let e=oe();ie(e),se();let n=document.querySelector("footer"),d=null;function v(){d=null,n?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(i=>i.classList.remove("active","inactive"))}function f(i,a=null){let o=d&&d.id===i.id;d&&d.close(!o),o?d=null:setTimeout(()=>{i.open(),d=i,document.querySelectorAll(".nav-right i").forEach(c=>{let l=c===a;c.classList.toggle("active",l),c.classList.toggle("inactive",!l&&a)}),n?.classList.add("hide")},d?220:0)}function b(i,a,o=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[i]||"bx-info-circle",g=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${l} placeholder-icon'></i><p class="placeholder-message">${a}</p>${g}</div>`}let y=null,L=null,m=null,h=null,q=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),w=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),I=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>';async function A(){if(!localStorage.getItem("service_map"))return null;try{let a=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(g=>g.id==="dex-event-service");if(!a)return null;let c=`http://${a.domain==="0.0.0.0"?"localhost":a.domain}:${a.port}/system_monitor_metrics`,l=await fetch(c);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(i){return console.error("Error fetching system data:",i),null}}async function O(){let i=document.getElementById("services-widgets");if(!i)return;let a=await A();if(!a||!a.services){i.innerHTML=b("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}y=Date.now(),u(4,y);let o=a.services||[];Array.from(i.children).forEach(t=>{t.classList.contains("service-widget")||t.remove()});function c(t){return!t||t==="N/A"||t==="unknown"||t.trim()===""?"-":t}function l(t){if(!t||t==="N/A"||t==="unknown")return"-";let p=t.match(/^(\d+\.\d+\.\d+)/);return p?p[0]:t.split(".").slice(0,3).join(".")||"-"}function g(t){return!t||t.length<=28?t:t.substring(0,28)+"..."}function s(t){if(!t||!t.includes("%"))return"#666";let p=parseFloat(t);return p<30?"#00ff00":p<60?"#88ff00":p<80?"#ffaa00":"#ff0000"}function r(t){if(!t||t==="N/A"||t==="unknown")return"-";let p=t.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!p)return"-";let S=parseInt(p[1])||0,k=parseInt(p[2])||0,G=parseInt(p[3])||0,$=parseFloat(p[4])||0,C=S*86400+k*3600+G*60+$,B=Math.floor(C/86400);if(B>0)return`${B}d`;let N=Math.floor(C/3600);if(N>0)return`${N}h`;let D=Math.floor(C/60);return D>0?`${D}m`:`${Math.floor(C)}s`}function T(t){let p=t.status==="online",S=p?"service-widget-online":"service-widget-offline",k=p?"bx-check-circle":"bx-x-circle",G=p?"OK":"BAD",$=t.version?l(t.version.str):"-",C=c(t.cpu),B=c(t.memory),N=s(C),D=s(B),K=r(t.uptime),P="";return p?P=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${$}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${K}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${N};"></i><span style="color: ${N};">${C}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${D};"></i><span style="color: ${D};">${B}</span></div></div>`:P='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${S}" data-service-id="${t.id}"><div class="service-widget-header"><i class="bx ${k}"></i><h3>${t.short_name||t.id}</h3><span class="service-widget-status">${G}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${g(t.domain&&t.port?`${t.domain}:${t.port}`:"")}</span></div>${P}</div></div>`}let _=new Map(Array.from(i.querySelectorAll(".service-widget")).map(t=>[t.dataset.serviceId,t])),M=new Set(o.map(t=>t.id));for(let[t,p]of _)M.has(t)||p.remove();o.forEach(t=>{let p=T(t),S=_.get(t.id);S?S.outerHTML!==p&&(S.outerHTML=p):i.insertAdjacentHTML("beforeend",p)})}async function j(){let i=document.getElementById("models-widgets");if(!i)return;let a=await A();if(!a||!a.models){i.innerHTML=b("offline","Failed to load model status.");return}h=Date.now(),u(3,h);let o=a.models||[];if(o.length===0){i.innerHTML=b("empty","No models found.");return}Array.from(i.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function c(s){let r=s.status==="Downloaded",T=r?"service-widget-online":"service-widget-offline",_=r?"OK":"MISSING",M=r&&s.size>0?`${(s.size/1e9).toFixed(2)} GB`:"-";return`<div class="service-widget ${T}" data-model-name="${s.name}"><div class="service-widget-header"><i class="bx ${r?"bx-check-circle":"bx-x-circle"}"></i><h3>${s.name}</h3><span class="service-widget-status">${_}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${s.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${M}</span></div></div></div>`}let l=new Map(Array.from(i.querySelectorAll(".service-widget")).map(s=>[s.dataset.modelName,s])),g=new Set(o.map(s=>s.name));for(let[s,r]of l)g.has(s)||r.remove();o.forEach(s=>{let r=c(s),T=l.get(s.name);T?T.outerHTML!==r&&(T.outerHTML=r):i.insertAdjacentHTML("beforeend",r)})}async function H(){let i=document.getElementById("events-timeline");if(!i)return;let a=localStorage.getItem("service_map");if(!a){i.innerHTML=b("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(a).services?.cs||[]).find(s=>s.id==="dex-event-service")}catch{i.innerHTML=b("error","Invalid service map data.");return}if(!o){i.innerHTML=b("error","Event service not found in service map.");return}let l=`http://${o.domain==="0.0.0.0"?"localhost":o.domain}:${o.port}/events?ml=50&format=text`;try{let g=await fetch(l);if(!g.ok)throw new Error("Service is offline or unreachable.");let s=await g.text();if(!s||s.trim()===""){i.innerHTML=b("empty","No events found.");return}let T=s.trim().split(`
`).map(_=>{let M=_.split(" | ");if(M.length<3)return"";let t=new Date(M[0].trim().replace(" UTC","Z")),p=t.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=t.toLocaleDateString(navigator.language,{month:"short",day:"numeric"});return`<div class="event-item"><div class="event-time"><span class="event-time-main">${p}</span><span class="event-date">${S}</span></div><div class="event-content"><div class="event-service">${M[1].trim()}</div><div class="event-message">${M[2].trim()}</div></div></div>`}).join("");i.innerHTML=T,L=Date.now(),u(1,L)}catch(g){console.error("Error fetching events:",g),i.innerHTML=b("offline","Failed to load events.","The event service may be offline or unreachable.")}}function u(i,a){let o=document.querySelector(`.tab[data-tab-index="${i}"] .tab-subtitle`);if(!o)return;if(!a){o.textContent="never";return}let l=(Date.now()-a)/1e3,g;if(l<30)g=`${Math.floor(l)}s ago`;else{o.textContent="never";return}o.textContent=`Last updated: ${g}`}let E=J({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:v}),F=J({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${Z()||"Unknown"}</p>`,icon:"bx-user",onClose:v});function W(){let i=ee(),a=Z()||"user@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},c=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(x).map(l=>`
                    <div class="theme-card ${i===l?"active":""}" data-theme="${l}">
                        <div class="theme-preview theme-preview-${l.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${l}</h3>
                            <p>${l===x.AUTO?"Automatic theme selection.":l===x.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${i===l?"Active":"Select"}</span>
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
                            <span class="settings-item-description">${o.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${o.enabled?"checked":""} ${o.supported?"":"disabled"}>
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
                            <input type="checkbox" id="analytics-toggle" ${c?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Y(){let i=document.querySelector("#settings-window .window-content");if(!i)return;i.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let r=this.dataset.theme;ce(r),R.setContent(W()),Y()})});function a(s,r,T,_,M,t,p){let S=document.getElementById(s),k=document.getElementById(r),G=document.getElementById(T),$=document.getElementById(_),C=document.getElementById(M);S&&k&&(S.onclick=()=>k.click(),k.onchange=B=>{let N=B.target.files[0];if(!N)return;if(N.name!==p){$.textContent=`File must be named "${p}"`,$.style.display="block",k.value="";return}let D=new FileReader;D.onload=K=>{try{let P=JSON.parse(K.target.result);localStorage.setItem(t,JSON.stringify(P)),G.textContent=p,$.style.display="none",R.setContent(W()),Y()}catch{$.textContent="Invalid JSON format",$.style.display="block",k.value=""}},D.onerror=()=>{$.textContent="Failed to read file",$.style.display="block",k.value=""},D.readAsText(N)}),C&&(C.onclick=()=>{localStorage.removeItem(t),R.setContent(W()),Y()})}a("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),a("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),a("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let s="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!s||s.state==="denied")&&(o.disabled=!0),o.onclick=async r=>{if(r.target.checked)try{await Notification.requestPermission()!=="granted"&&(r.target.checked=!1)}catch{r.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),r.target.checked=!0)}}let c=document.getElementById("microphone-toggle");async function l(){let s="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;c&&(c.disabled=!s||s.state==="denied",c.checked=s?.state==="granted");let r=document.querySelector("#microphone-setting-item .settings-item-description");r&&(r.textContent=s?s.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}l(),c&&!c.disabled&&(c.onclick=async s=>{if(s.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),l()}catch{s.target.checked=!1,l()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),s.target.checked=!0)});let g=document.getElementById("analytics-toggle");g&&(g.checked=localStorage.getItem("easter_analytics_enabled")!=="false",g.onclick=s=>{let r=s.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}let R=J({id:"settings-window",title:"Settings",content:W(),icon:"bx-cog",onClose:v,onOpen:()=>{R.setContent(W()),setTimeout(Y,50)}}),U=J({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:b("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:I(),"data-tab-index":1},{icon:"bx-history",title:"Logs",content:de(),"data-tab-index":2},{icon:"bx-brain",title:"Models",content:w(),"data-tab-index":3},{icon:"bx-line-chart",title:"Services",content:q(),"data-tab-index":4}],icon:"bxs-message-dots",onClose:v,onOpen:()=>setTimeout(te,100)});async function te(){await Promise.all([O(),j(),H(),V().then(c=>{c&&(m=Date.now()),u(2,m)})]);let i=setInterval(()=>{if(!U.isOpen())return clearInterval(i);u(2,m),u(1,L),u(3,h),u(4,y)},1e3),a=setInterval(()=>{if(!U.isOpen())return clearInterval(a);H(),V().then(c=>{c&&(m=Date.now()),u(2,m)})},5e3),o=setInterval(()=>{if(!U.isOpen())return clearInterval(o);O(),j()},3e4)}e?(document.getElementById("user-icon")?.addEventListener("click",i=>f(F,i.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",i=>f(U,i.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",i=>f(R,i.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{f(E),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",i=>{i.preventDefault();try{ae(document.getElementById("email-input").value),window.location.reload()}catch(a){let o=document.getElementById("login-error");o&&(o.textContent=a.message,o.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pe):pe();})();
//# sourceMappingURL=dex.c52f4b87.js.map
