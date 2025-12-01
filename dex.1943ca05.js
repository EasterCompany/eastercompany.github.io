(()=>{function ne(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function se(e=!1){let r=`
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
    `,n=document.createElement("footer");n.innerHTML=e,document.body.appendChild(n)}function R(e){let n=null,r=e.onClose||null,p=e.onOpen||null;function h(){if(n){n.classList.add("open"),p&&setTimeout(p,10);return}let m=document.getElementById("windows-container");m||(m=document.createElement("div"),m.id="windows-container",m.className="windows-container",document.body.appendChild(m)),n=document.createElement("div"),n.id=e.id,n.className="window";let y=e.icon||"bx-window",U="",w="",M;e.tabs&&e.tabs.length>0?(U=`<div class="tab-bar">${e.tabs.map((v,L)=>{let B;return v.icon?B=`<i class="bx ${v.icon}"></i>`:v.title&&v.title.length>0?B=`<span class="tab-glyph">${v.title.charAt(0).toUpperCase()}</span>`:B='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${L===0?"active":""}" data-tab-index="${L}">
                        ${B}
                        <span class="tab-title">${v.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${L}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,M=`<div class="window-content">${e.tabs.map((v,L)=>`<div class="tab-content ${L===0?"active":""}" data-tab-content="${L}">${v.content}</div>`).join("")}</div>`):(e.title&&(w=`<div class="window-title">${e.title}</div>`),M=`<div class="window-content">${e.content}</div>`);let C=`
            <div class="window-header">
                <i class="bx ${y}"></i>
                ${U}
                ${w}
                <i class="bx bx-x window-close"></i>
            </div>
        `;n.innerHTML=C+M,m.appendChild(n);let W=n.querySelector(".window-close");W&&W.addEventListener("click",O=>{O.stopPropagation(),b()}),e.tabs&&e.tabs.length>0&&n.querySelectorAll(".tab").forEach(_=>{_.addEventListener("click",()=>{let v=_.getAttribute("data-tab-index");n.querySelectorAll(".tab").forEach(L=>L.classList.remove("active")),_.classList.add("active"),n.querySelectorAll(".tab-content").forEach(L=>L.classList.remove("active")),n.querySelector(`.tab-content[data-tab-content="${v}"]`).classList.add("active")})}),setTimeout(()=>{n.classList.add("open"),p&&p()},10)}function b(m=!1){n&&(m?(n.classList.add("switching"),n.classList.remove("open"),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},200)):(n.classList.remove("open"),r&&r(),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},400)))}function x(m){if(n){let y=n.querySelector(".window-content");y&&(y.innerHTML=m)}}function T(){return n&&n.classList.contains("open")}return{open:h,close:b,setContent:x,isOpen:T,id:e.id}}var K="easter_user_email";function oe(){return localStorage.getItem(K)!==null}function X(){return localStorage.getItem(K)}function ae(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(K,e.trim())}var re="easter_theme",f={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function Q(){return localStorage.getItem(re)||f.AUTO}function me(){let e=window.innerWidth,n=window.innerHeight,r=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&n>1080?f.ANIMATED:(e===1920&&n===1080&&r||e<=1920||n<=1080,f.DEFAULT)}function ce(e){if(!Object.values(f).includes(e))throw new Error("Invalid theme");localStorage.setItem(re,e),Z(e)}function Z(e,n=!1){let r=document.body,p=e===f.AUTO?me():e;if(n||(r.classList.add("theme-transitioning"),setTimeout(()=>{r.classList.remove("theme-transitioning")},300)),Object.values(f).forEach(h=>{r.classList.remove(`theme-${h}`)}),r.classList.add(`theme-${e}`),p===f.ANIMATED){if(!document.querySelector(".background")){let h=document.createElement("div");h.className="background",document.body.prepend(h)}}else{let h=document.querySelector(".background");h&&(n?h.remove():(h.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{h.remove()},400)))}}function le(){let e=Q();if(Z(e,!0),e===f.AUTO){let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{Z(f.AUTO)},300)})}}function q(e,n,r=null){let h={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",b=r?`<p class="placeholder-action">${r}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${h} placeholder-icon'></i>
            <p class="placeholder-message">${n}</p>
            ${b}
        </div>
    `}function de(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function ee(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let n=localStorage.getItem("service_map");if(!n)return e.classList.add("placeholder-active"),e.innerHTML=q("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let r;try{r=JSON.parse(n)}catch(x){return console.error("Error parsing service_map from localStorage:",x),e.classList.add("placeholder-active"),e.innerHTML=q("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let p=null;if(r&&typeof r.services=="object"){let x=["cs","be","th"];for(let T of x)if(Array.isArray(r.services[T])){let m=r.services[T].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(m){p=m;break}}}if(!p)return e.classList.add("placeholder-active"),e.innerHTML=q("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let b=`http://${p.domain==="0.0.0.0"?"localhost":p.domain}:${p.port}/logs`;try{let x=await fetch(b);if(!x.ok)return e.classList.add("placeholder-active"),e.innerHTML=q("offline","Event service is offline.","Please ensure the event service is running."),!1;let T=await x.json();if(!T||T.length===0)return e.classList.add("placeholder-active"),e.innerHTML=q("empty","No logs found.","Service logs will appear here when available."),!1;let m=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=T.filter(w=>!m.includes(w.id));y.forEach(w=>{w.logs.reverse()}),y.reverse();let U=y.map(w=>{let M=w.logs.join(`
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
            `}).join("");return e.innerHTML=U,document.querySelectorAll(".copy-logs-btn").forEach(w=>{w.addEventListener("click",()=>{let M=unescape(w.dataset.logs);navigator.clipboard.writeText(M).then(()=>{let C=w.querySelector("i");C.classList.remove("bx-copy"),C.classList.add("bx-check"),setTimeout(()=>{C.classList.remove("bx-check"),C.classList.add("bx-copy")},2e3)})})}),!0}catch(x){return console.error("Error fetching logs:",x),e.classList.add("placeholder-active"),e.innerHTML=q("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function pe(){console.log("Welcome to Easter Company."),le(),ne();let e=oe();se(e),ie();let n=document.querySelector("footer"),r=null;function p(){r=null,n?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function h(s,a=null){let o=r&&r.id===s.id;r&&r.close(!o),o?r=null:setTimeout(()=>{s.open(),r=s,document.querySelectorAll(".nav-right i").forEach(l=>{let g=l===a;l.classList.toggle("active",g),l.classList.toggle("inactive",!g&&a)}),n?.classList.add("hide")},r?220:0)}function b(s,a,o=null){let g={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",u=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${g} placeholder-icon'></i><p class="placeholder-message">${a}</p>${u}</div>`}let x=null,T=null,m=null,y=null,U=()=>localStorage.getItem("service_map")?'<div id="system-monitor-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),w=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),M=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>';async function C(){if(!localStorage.getItem("service_map"))return null;try{let a=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(u=>u.id==="dex-event-service");if(!a)return null;let l=`http://${a.domain==="0.0.0.0"?"localhost":a.domain}:${a.port}/system_monitor_metrics`,g=await fetch(l);if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);return await g.json()}catch(s){return console.error("Error fetching system data:",s),null}}async function W(){let s=document.getElementById("system-monitor-widgets");if(!s)return;let a=await C();if(!a||!a.services){s.innerHTML=b("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}x=Date.now(),v(4,x);let o=a.services||[];Array.from(s.children).forEach(t=>{t.classList.contains("service-widget")||t.remove()});function l(t){return!t||t==="N/A"||t==="unknown"||t.trim()===""?"-":t}function g(t){if(!t||t==="N/A"||t==="unknown")return"-";let c=t.match(/^(\d+\.\d+\.\d+)/);return c?c[0]:t.split(".").slice(0,3).join(".")||"-"}function u(t){return!t||t.length<=28?t:t.substring(0,28)+"..."}function i(t){if(!t||!t.includes("%"))return"#666";let c=parseFloat(t);return c<30?"#00ff00":c<60?"#88ff00":c<80?"#ffaa00":"#ff0000"}function d(t){if(!t||t==="N/A"||t==="unknown")return"-";let c=t.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!c)return"-";let E=parseInt(c[1])||0,A=parseInt(c[2])||0,G=parseInt(c[3])||0,S=parseFloat(c[4])||0,k=E*86400+A*3600+G*60+S,j=Math.floor(k/86400);if(j>0)return`${j}d`;let H=Math.floor(k/3600);if(H>0)return`${H}h`;let N=Math.floor(k/60);return N>0?`${N}m`:`${Math.floor(k)}s`}function $(t){let c=t.status==="online",E=c?"service-widget-online":"service-widget-offline",A=c?"bx-check-circle":"bx-x-circle",G=c?"OK":"BAD",S=t.version?g(t.version.str):"-",k=l(t.cpu),j=l(t.memory),H=i(k),N=i(j),Y=d(t.uptime),F="";return c?F=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${S}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${Y}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${H};"></i><span style="color: ${H};">${k}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${N};"></i><span style="color: ${N};">${j}</span></div></div>`:F='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${E}" data-service-id="${t.id}"><div class="service-widget-header"><i class="bx ${A}"></i><h3>${t.short_name||t.id}</h3><span class="service-widget-status">${G}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${u(t.domain&&t.port?`${t.domain}:${t.port}`:"")}</span></div>${F}</div></div>`}let D=new Map(Array.from(s.querySelectorAll(".service-widget")).map(t=>[t.dataset.serviceId,t])),I=new Set(o.map(t=>t.id));for(let[t,c]of D)I.has(t)||c.remove();o.forEach(t=>{let c=$(t),E=D.get(t.id);E?E.outerHTML!==c&&(E.outerHTML=c):s.insertAdjacentHTML("beforeend",c)})}async function O(){let s=document.getElementById("models-widgets");if(!s)return;let a=await C();if(!a||!a.models){s.innerHTML=b("offline","Failed to load model status.");return}y=Date.now(),v(2,y);let o=a.models||[];if(o.length===0){s.innerHTML=b("empty","No models found.");return}Array.from(s.children).forEach(i=>{i.classList.contains("service-widget")||i.remove()});function l(i){let d=i.status==="Downloaded",$=d?"service-widget-online":"service-widget-offline",D=d?"OK":"MISSING",I=d&&i.size>0?`${(i.size/1e9).toFixed(2)} GB`:"-";return`<div class="service-widget ${$}" data-model-name="${i.name}"><div class="service-widget-header"><i class="bx ${d?"bx-check-circle":"bx-x-circle"}"></i><h3>${i.name}</h3><span class="service-widget-status">${D}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${i.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${I}</span></div></div></div>`}let g=new Map(Array.from(s.querySelectorAll(".service-widget")).map(i=>[i.dataset.modelName,i])),u=new Set(o.map(i=>i.name));for(let[i,d]of g)u.has(i)||d.remove();o.forEach(i=>{let d=l(i),$=g.get(i.name);$?$.outerHTML!==d&&($.outerHTML=d):s.insertAdjacentHTML("beforeend",d)})}async function _(){let s=document.getElementById("events-timeline");if(!s)return;let a=localStorage.getItem("service_map");if(!a){s.innerHTML=b("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(a).services?.cs||[]).find(i=>i.id==="dex-event-service")}catch{s.innerHTML=b("error","Invalid service map data.");return}if(!o){s.innerHTML=b("error","Event service not found in service map.");return}let g=`http://${o.domain==="0.0.0.0"?"localhost":o.domain}:${o.port}/events?ml=50&format=text`;try{let u=await fetch(g);if(!u.ok)throw new Error("Service is offline or unreachable.");let i=await u.text();if(!i||i.trim()===""){s.innerHTML=b("empty","No events found.");return}let $=i.trim().split(`
`).map(D=>{let I=D.split(" | ");if(I.length<3)return"";let t=new Date(I[0].trim().replace(" UTC","Z")),c=t.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),E=t.toLocaleDateString(navigator.language,{month:"short",day:"numeric"});return`<div class="event-item"><div class="event-time"><span class="event-time-main">${c}</span><span class="event-date">${E}</span></div><div class="event-content"><div class="event-service">${I[1].trim()}</div><div class="event-message">${I[2].trim()}</div></div></div>`}).join("");s.innerHTML=$,T=Date.now(),v(3,T)}catch(u){console.error("Error fetching events:",u),s.innerHTML=b("offline","Failed to load events.","The event service may be offline or unreachable.")}}function v(s,a){let o=document.querySelector(`.tab[data-tab-index="${s}"] .tab-subtitle`);if(!o)return;if(!a){o.textContent="never";return}let g=(Date.now()-a)/1e3,u;if(g<30)u=`${Math.floor(g)}s ago`;else{o.textContent="Last updated: never";return}o.textContent=`Last updated: ${u}`}async function L(){await Promise.all([W(),O(),_(),ee().then(l=>{l&&(m=Date.now(),v(1,m))})]);let s=setInterval(()=>{if(!V.isOpen())return clearInterval(s);v(1,m),v(2,y),v(3,T),v(4,x)},1e3),a=setInterval(()=>{if(!V.isOpen())return clearInterval(a);_(),ee().then(l=>{l&&(m=Date.now(),v(1,m))})},5e3),o=setInterval(()=>{if(!V.isOpen())return clearInterval(o);W(),O()},3e4)}let B=R({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:p}),te=R({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${X()||"Unknown"}</p>`,icon:"bx-user",onClose:p});function P(){let s=Q(),a=X()||"user@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},l=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                <div class="theme-card ${s===f.AUTO?"active":""}" data-theme="${f.AUTO}">
                    <div class="theme-preview theme-preview-auto"></div>
                    <div class="theme-info">
                        <h3>Auto</h3>
                        <p>Automatic theme selection.</p>
                        <span class="theme-badge">${s===f.AUTO?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${s===f.DEFAULT?"active":""}" data-theme="${f.DEFAULT}">
                    <div class="theme-preview theme-preview-default"></div>
                    <div class="theme-info">
                        <h3>Default</h3>
                        <p>Simple, black, default.</p>
                        <span class="theme-badge">${s===f.DEFAULT?"Active":"Select"}</span>
                    </div>
                </div>
                <div class="theme-card ${s===f.ANIMATED?"active":""}" data-theme="${f.ANIMATED}">
                    <div class="theme-preview theme-preview-animated"></div>
                    <div class="theme-info">
                        <h3>Legacy</h3>
                        <p>Colourful, not bright.</p>
                        <span class="theme-badge">${s===f.ANIMATED?"Active":"Select"}</span>
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
            </div>`}function J(){let s=document.querySelector("#settings-window .window-content");if(!s)return;s.querySelectorAll(".theme-card").forEach(i=>{i.addEventListener("click",function(){let d=this.dataset.theme;ce(d),z.setContent(P()),J()})});function a(i,d,$,D,I,t,c){let E=document.getElementById(i),A=document.getElementById(d),G=document.getElementById($),S=document.getElementById(D),k=document.getElementById(I);E&&A&&(E.onclick=()=>A.click(),A.onchange=j=>{let H=j.target.files[0];if(!H)return;if(H.name!==c){S.textContent=`File must be named "${c}"`,S.style.display="block",A.value="";return}let N=new FileReader;N.onload=Y=>{try{let F=JSON.parse(Y.target.result);localStorage.setItem(t,JSON.stringify(F)),G.textContent=c,S.style.display="none",z.setContent(P()),J()}catch{S.textContent="Invalid JSON format",S.style.display="block",A.value=""}},N.onerror=()=>{S.textContent="Failed to read file",S.style.display="block",A.value=""},N.readAsText(H)}),k&&(k.onclick=()=>{localStorage.removeItem(t),z.setContent(P()),J()})}a("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),a("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),a("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");o&&!o.disabled&&(o.onclick=async i=>{if(i.target.checked)try{await Notification.requestPermission()!=="granted"&&(i.target.checked=!1)}catch{i.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),i.target.checked=!0)});let l=document.getElementById("microphone-toggle");async function g(){let i="permissions"in navigator&&await navigator.permissions.query({name:"microphone"});l&&(l.disabled=!i,l.checked=i?.state==="granted")}g(),l&&!l.disabled&&(l.onclick=async i=>{if(i.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0})}catch{i.target.checked=!1}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),i.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=i=>{let d=i.target.checked;localStorage.setItem("easter_analytics_enabled",d),window.EASTER_ANALYTICS_ENABLED=d,window.EASTER_DEBUG_MODE=d})}let z=R({id:"settings-window",title:"Settings",content:P(),icon:"bx-cog",onClose:p,onOpen:()=>{z.setContent(P()),setTimeout(J,50)}}),V=R({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:b("empty","No notifications yet.")},{icon:"bx-history",title:"Logs",content:de()},{icon:"bx-brain",title:"Models",content:w()},{icon:"bx-calendar-event",title:"Events",content:M()},{icon:"bx-line-chart",title:"System Monitor",content:U()}],icon:"bxs-message-dots",onClose:p,onOpen:()=>setTimeout(L,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>h(te,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>h(V,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>h(z,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{h(B),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{ae(document.getElementById("email-input").value),window.location.reload()}catch(a){let o=document.getElementById("login-error");o&&(o.textContent=a.message,o.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pe):pe();})();
//# sourceMappingURL=dex.1943ca05.js.map
