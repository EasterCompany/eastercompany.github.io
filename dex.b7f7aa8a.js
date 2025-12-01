(()=>{function te(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ne(e=!1){let r=`
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
    `,p=document.createElement("nav");p.innerHTML=r,document.body.prepend(p)}function ie(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,n=document.createElement("footer");n.innerHTML=e,document.body.appendChild(n)}function R(e){let n=null,r=e.onClose||null,p=e.onOpen||null;function g(){if(n){n.classList.add("open"),p&&setTimeout(p,10);return}let f=document.getElementById("windows-container");f||(f=document.createElement("div"),f.id="windows-container",f.className="windows-container",document.body.appendChild(f)),n=document.createElement("div"),n.id=e.id,n.className="window";let y=e.icon||"bx-window",U="",b="",$;e.tabs&&e.tabs.length>0?(U=`<div class="tab-bar">${e.tabs.map((x,T)=>{let B;return x.icon?B=`<i class="bx ${x.icon}"></i>`:x.title&&x.title.length>0?B=`<span class="tab-glyph">${x.title.charAt(0).toUpperCase()}</span>`:B='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${T===0?"active":""}" data-tab-index="${T}">
                        ${B}
                        <span class="tab-title">${x.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${T}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,$=`<div class="window-content">${e.tabs.map((x,T)=>`<div class="tab-content ${T===0?"active":""}" data-tab-content="${T}">${x.content}</div>`).join("")}</div>`):(e.title&&(b=`<div class="window-title">${e.title}</div>`),$=`<div class="window-content">${e.content}</div>`);let C=`
            <div class="window-header">
                <i class="bx ${y}"></i>
                ${U}
                ${b}
                <i class="bx bx-x window-close"></i>
            </div>
        `;n.innerHTML=C+$,f.appendChild(n);let P=n.querySelector(".window-close");P&&P.addEventListener("click",O=>{O.stopPropagation(),h()}),e.tabs&&e.tabs.length>0&&n.querySelectorAll(".tab").forEach(D=>{D.addEventListener("click",()=>{let x=D.getAttribute("data-tab-index");n.querySelectorAll(".tab").forEach(T=>T.classList.remove("active")),D.classList.add("active"),n.querySelectorAll(".tab-content").forEach(T=>T.classList.remove("active")),n.querySelector(`.tab-content[data-tab-content="${x}"]`).classList.add("active")})}),setTimeout(()=>{n.classList.add("open"),p&&p()},10)}function h(f=!1){n&&(f?(n.classList.add("switching"),n.classList.remove("open"),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},200)):(n.classList.remove("open"),r&&r(),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},400)))}function w(f){if(n){let y=n.querySelector(".window-content");y&&(y.innerHTML=f)}}function E(){return n&&n.classList.contains("open")}return{open:g,close:h,setContent:w,isOpen:E,id:e.id}}var K="easter_user_email";function se(){return localStorage.getItem(K)!==null}function X(){return localStorage.getItem(K)}function oe(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(K,e.trim())}var ae="easter_theme",v={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function Q(){return localStorage.getItem(ae)||v.AUTO}function pe(){let e=window.innerWidth,n=window.innerHeight,r=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&n>1080?v.ANIMATED:(e===1920&&n===1080&&r||e<=1920||n<=1080,v.DEFAULT)}function re(e){if(!Object.values(v).includes(e))throw new Error("Invalid theme");localStorage.setItem(ae,e),Z(e)}function Z(e,n=!1){let r=document.body,p=e===v.AUTO?pe():e;if(n||(r.classList.add("theme-transitioning"),setTimeout(()=>{r.classList.remove("theme-transitioning")},300)),Object.values(v).forEach(g=>{r.classList.remove(`theme-${g}`)}),r.classList.add(`theme-${e}`),p===v.ANIMATED){if(!document.querySelector(".background")){let g=document.createElement("div");g.className="background",document.body.prepend(g)}}else{let g=document.querySelector(".background");g&&(n?g.remove():(g.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{g.remove()},400)))}}function ce(){let e=Q();if(Z(e,!0),e===v.AUTO){let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{Z(v.AUTO)},300)})}}function W(e,n,r=null){let g={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",h=r?`<p class="placeholder-action">${r}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${g} placeholder-icon'></i>
            <p class="placeholder-message">${n}</p>
            ${h}
        </div>
    `}function le(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function ee(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let n=localStorage.getItem("service_map");if(!n)return e.classList.add("placeholder-active"),e.innerHTML=W("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let r;try{r=JSON.parse(n)}catch(w){return console.error("Error parsing service_map from localStorage:",w),e.classList.add("placeholder-active"),e.innerHTML=W("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let p=null;if(r&&typeof r.services=="object"){let w=["cs","be","th"];for(let E of w)if(Array.isArray(r.services[E])){let f=r.services[E].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(f){p=f;break}}}if(!p)return e.classList.add("placeholder-active"),e.innerHTML=W("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let h=`http://${p.domain==="0.0.0.0"?"localhost":p.domain}:${p.port}/logs`;try{let w=await fetch(h);if(!w.ok)return e.classList.add("placeholder-active"),e.innerHTML=W("offline","Event service is offline.","Please ensure the event service is running."),!1;let E=await w.json();if(!E||E.length===0)return e.classList.add("placeholder-active"),e.innerHTML=W("empty","No logs found.","Service logs will appear here when available."),!1;let f=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=E.filter(b=>!f.includes(b.id));y.forEach(b=>{b.logs.reverse()}),y.reverse();let U=y.map(b=>{let $=b.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${b.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape($)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${$}</pre>
                </div>
            `}).join("");return e.innerHTML=U,document.querySelectorAll(".copy-logs-btn").forEach(b=>{b.addEventListener("click",()=>{let $=unescape(b.dataset.logs);navigator.clipboard.writeText($).then(()=>{let C=b.querySelector("i");C.classList.remove("bx-copy"),C.classList.add("bx-check"),setTimeout(()=>{C.classList.remove("bx-check"),C.classList.add("bx-copy")},2e3)})})}),!0}catch(w){return console.error("Error fetching logs:",w),e.classList.add("placeholder-active"),e.innerHTML=W("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function de(){console.log("Welcome to Easter Company."),ce(),te();let e=se();ne(e),ie();let n=document.querySelector("footer"),r=null;function p(){r=null,n?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(i=>i.classList.remove("active","inactive"))}function g(i,a=null){let o=r&&r.id===i.id;r&&r.close(!o),o?r=null:setTimeout(()=>{i.open(),r=i,document.querySelectorAll(".nav-right i").forEach(l=>{let u=l===a;l.classList.toggle("active",u),l.classList.toggle("inactive",!u&&a)}),n?.classList.add("hide")},r?220:0)}function h(i,a,o=null){let u={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[i]||"bx-info-circle",m=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${u} placeholder-icon'></i><p class="placeholder-message">${a}</p>${m}</div>`}let w=null,E=null,f=null,y=()=>localStorage.getItem("service_map")?'<div id="system-monitor-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),U=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),b=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>';async function $(){if(!localStorage.getItem("service_map"))return null;try{let a=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!a)return null;let l=`http://${a.domain==="0.0.0.0"?"localhost":a.domain}:${a.port}/system_monitor_metrics`,u=await fetch(l);if(!u.ok)throw new Error(`HTTP error! status: ${u.status}`);return await u.json()}catch(i){return console.error("Error fetching system data:",i),null}}async function C(){let i=document.getElementById("system-monitor-widgets");if(!i)return;let a=await $();if(!a||!a.services){i.innerHTML=h("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}w=Date.now();let o=a.services||[];Array.from(i.children).forEach(t=>{t.classList.contains("service-widget")||t.remove()});function l(t){return!t||t==="N/A"||t==="unknown"||t.trim()===""?"-":t}function u(t){if(!t||t==="N/A"||t==="unknown")return"-";let c=t.match(/^(\d+\.\d+\.\d+)/);return c?c[0]:t.split(".").slice(0,3).join(".")||"-"}function m(t){return!t||t.length<=28?t:t.substring(0,28)+"..."}function s(t){if(!t||!t.includes("%"))return"#666";let c=parseFloat(t);return c<30?"#00ff00":c<60?"#88ff00":c<80?"#ffaa00":"#ff0000"}function d(t){if(!t||t==="N/A"||t==="unknown")return"-";let c=t.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!c)return"-";let L=parseInt(c[1])||0,A=parseInt(c[2])||0,G=parseInt(c[3])||0,M=parseFloat(c[4])||0,k=L*86400+A*3600+G*60+M,j=Math.floor(k/86400);if(j>0)return`${j}d`;let H=Math.floor(k/3600);if(H>0)return`${H}h`;let N=Math.floor(k/60);return N>0?`${N}m`:`${Math.floor(k)}s`}function S(t){let c=t.status==="online",L=c?"service-widget-online":"service-widget-offline",A=c?"bx-check-circle":"bx-x-circle",G=c?"OK":"BAD",M=t.version?u(t.version.str):"-",k=l(t.cpu),j=l(t.memory),H=s(k),N=s(j),Y=d(t.uptime),q="";return c?q=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${M}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${Y}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${H};"></i><span style="color: ${H};">${k}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${N};"></i><span style="color: ${N};">${j}</span></div></div>`:q='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${L}" data-service-id="${t.id}"><div class="service-widget-header"><i class="bx ${A}"></i><h3>${t.short_name||t.id}</h3><span class="service-widget-status">${G}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${m(t.domain&&t.port?`${t.domain}:${t.port}`:"")}</span></div>${q}</div></div>`}let _=new Map(Array.from(i.querySelectorAll(".service-widget")).map(t=>[t.dataset.serviceId,t])),I=new Set(o.map(t=>t.id));for(let[t,c]of _)I.has(t)||c.remove();o.forEach(t=>{let c=S(t),L=_.get(t.id);L?L.outerHTML!==c&&(L.outerHTML=c):i.insertAdjacentHTML("beforeend",c)})}async function P(){let i=document.getElementById("models-widgets");if(!i)return;let a=await $();if(!a||!a.models){i.innerHTML=h("offline","Failed to load model status.");return}let o=a.models||[];if(o.length===0){i.innerHTML=h("empty","No models found.");return}Array.from(i.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function l(s){let d=s.status==="Downloaded",S=d?"service-widget-online":"service-widget-offline",_=d?"OK":"MISSING",I=d&&s.size>0?`${(s.size/1e9).toFixed(2)} GB`:"-";return`<div class="service-widget ${S}" data-model-name="${s.name}"><div class="service-widget-header"><i class="bx ${d?"bx-check-circle":"bx-x-circle"}"></i><h3>${s.name}</h3><span class="service-widget-status">${_}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${s.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${I}</span></div></div></div>`}let u=new Map(Array.from(i.querySelectorAll(".service-widget")).map(s=>[s.dataset.modelName,s])),m=new Set(o.map(s=>s.name));for(let[s,d]of u)m.has(s)||d.remove();o.forEach(s=>{let d=l(s),S=u.get(s.name);S?S.outerHTML!==d&&(S.outerHTML=d):i.insertAdjacentHTML("beforeend",d)})}async function O(){let i=document.getElementById("events-timeline");if(!i)return;let a=localStorage.getItem("service_map");if(!a){i.innerHTML=h("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(a).services?.cs||[]).find(s=>s.id==="dex-event-service")}catch{i.innerHTML=h("error","Invalid service map data.");return}if(!o){i.innerHTML=h("error","Event service not found in service map.");return}let u=`http://${o.domain==="0.0.0.0"?"localhost":o.domain}:${o.port}/events?ml=50&format=text`;try{let m=await fetch(u);if(!m.ok)throw new Error("Service is offline or unreachable.");let s=await m.text();if(!s||s.trim()===""){i.innerHTML=h("empty","No events found.");return}let S=s.trim().split(`
`).map(_=>{let I=_.split(" | ");if(I.length<3)return"";let t=new Date(I[0].trim().replace(" UTC","Z")),c=t.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=t.toLocaleDateString(navigator.language,{month:"short",day:"numeric"});return`<div class="event-item"><div class="event-time"><span class="event-time-main">${c}</span><span class="event-date">${L}</span></div><div class="event-content"><div class="event-service">${I[1].trim()}</div><div class="event-message">${I[2].trim()}</div></div></div>`}).join("");i.innerHTML=S,E=Date.now()}catch(m){console.error("Error fetching events:",m),i.innerHTML=h("offline","Failed to load events.","The event service may be offline or unreachable.")}}function D(i,a){let o=document.querySelector(`.tab[data-tab-index="${i}"] .tab-subtitle`);if(!o)return;if(!a){o.textContent="never";return}let u=(Date.now()-a)/1e3,m;if(u<30)m=`${Math.floor(u)}s ago`;else{o.textContent="Last updated: never";return}o.textContent=`Last updated: ${m}`}async function x(){await Promise.all([C(),P(),O(),ee().then(l=>{l&&(f=Date.now())})]);let i=setInterval(()=>{if(!V.isOpen())return clearInterval(i);D(1,f),D(3,E),D(4,w)},1e3),a=setInterval(()=>{if(!V.isOpen())return clearInterval(a);O(),ee().then(l=>{l&&(f=Date.now())})},5e3),o=setInterval(()=>{if(!V.isOpen())return clearInterval(o);C(),P()},3e4)}let T=R({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:p}),B=R({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${X()||"Unknown"}</p>`,icon:"bx-user",onClose:p});function F(){let i=Q(),a=X()||"user@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},l=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                <div class="theme-card ${i===v.AUTO?"active":""}" data-theme="${v.AUTO}">
                    <div class="theme-preview theme-preview-auto"></div>
                    <div class="theme-info">
                        <h3>Auto</h3>
                        <p>Automatic theme selection.</p>
                        <span class="theme-badge">${i===v.AUTO?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${i===v.DEFAULT?"active":""}" data-theme="${v.DEFAULT}">
                    <div class="theme-preview theme-preview-default"></div>
                    <div class="theme-info">
                        <h3>Default</h3>
                        <p>Simple, black, default.</p>
                        <span class="theme-badge">${i===v.DEFAULT?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${i===v.ANIMATED?"active":""}" data-theme="${v.ANIMATED}">
                    <div class="theme-preview theme-preview-animated"></div>
                    <div class="theme-info">
                        <h3>Legacy</h3>
                        <p>Colourful, not bright.</p>
                        <span class="theme-badge">${i===v.ANIMATED?"Active":"Select"}</span>
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
            </div>`}function J(){let i=document.querySelector("#settings-window .window-content");if(!i)return;i.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let d=this.dataset.theme;re(d),z.setContent(F()),J()})});function a(s,d,S,_,I,t,c){let L=document.getElementById(s),A=document.getElementById(d),G=document.getElementById(S),M=document.getElementById(_),k=document.getElementById(I);L&&A&&(L.onclick=()=>A.click(),A.onchange=j=>{let H=j.target.files[0];if(!H)return;if(H.name!==c){M.textContent=`File must be named "${c}"`,M.style.display="block",A.value="";return}let N=new FileReader;N.onload=Y=>{try{let q=JSON.parse(Y.target.result);localStorage.setItem(t,JSON.stringify(q)),G.textContent=c,M.style.display="none",z.setContent(F()),J()}catch{M.textContent="Invalid JSON format",M.style.display="block",A.value=""}},N.onerror=()=>{M.textContent="Failed to read file",M.style.display="block",A.value=""},N.readAsText(H)}),k&&(k.onclick=()=>{localStorage.removeItem(t),z.setContent(F()),J()})}a("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),a("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),a("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");o&&!o.disabled&&(o.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let l=document.getElementById("microphone-toggle");async function u(){let s="permissions"in navigator&&await navigator.permissions.query({name:"microphone"});l&&(l.disabled=!s,l.checked=s?.state==="granted")}u(),l&&!l.disabled&&(l.onclick=async s=>{if(s.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0})}catch{s.target.checked=!1}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),s.target.checked=!0)});let m=document.getElementById("analytics-toggle");m&&(m.checked=localStorage.getItem("easter_analytics_enabled")!=="false",m.onclick=s=>{let d=s.target.checked;localStorage.setItem("easter_analytics_enabled",d),window.EASTER_ANALYTICS_ENABLED=d,window.EASTER_DEBUG_MODE=d})}let z=R({id:"settings-window",title:"Settings",content:F(),icon:"bx-cog",onClose:p,onOpen:()=>{z.setContent(F()),setTimeout(J,50)}}),V=R({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:h("empty","No notifications yet.")},{icon:"bx-history",title:"Logs",content:le()},{icon:"bx-brain",title:"Models",content:U()},{icon:"bx-calendar-event",title:"Events",content:b()},{icon:"bx-line-chart",title:"System Monitor",content:y()}],icon:"bxs-message-dots",onClose:p,onOpen:()=>setTimeout(x,100)});e?(document.getElementById("user-icon")?.addEventListener("click",i=>g(B,i.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",i=>g(V,i.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",i=>g(z,i.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{g(T),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",i=>{i.preventDefault();try{oe(document.getElementById("email-input").value),window.location.reload()}catch(a){let o=document.getElementById("login-error");o&&(o.textContent=a.message,o.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",de):de();})();
//# sourceMappingURL=dex.b7f7aa8a.js.map
