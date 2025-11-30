(()=>{function Se(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function xe(a=!1){let d=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${a?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,b=document.createElement("nav");b.innerHTML=d,document.body.prepend(b)}function Ae(){let a=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,o=document.createElement("footer");o.innerHTML=a,document.body.appendChild(o)}function ie(a){let o=null,d=a.onClose||null;function b(){if(o){o.classList.add("open");return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),o=document.createElement("div"),o.id=a.id,o.className="window";let x=a.icon||"bx-window",E="",N="",y;a.tabs&&a.tabs.length>0?(E=`<div class="tab-bar">${a.tabs.map((A,L)=>{let G;return A.icon?G=`<i class="bx ${A.icon}"></i>`:A.title&&A.title.length>0?G=`<span class="tab-glyph">${A.title.charAt(0).toUpperCase()}</span>`:G='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${L===0?"active":""}" data-tab-index="${L}">
                        ${G}
                        <span class="tab-title">${A.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${L}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,y=`<div class="window-content">${a.tabs.map((A,L)=>`<div class="tab-content ${L===0?"active":""}" data-tab-content="${L}">${A.content}</div>`).join("")}</div>`):(a.title&&(N=`<div class="window-title">${a.title}</div>`),y=`<div class="window-content">${a.content}</div>`);let S=`
            <div class="window-header">
                <i class="bx ${x}"></i>
                ${E}
                ${N}
                <i class="bx bx-x window-close"></i>
            </div>
        `;o.innerHTML=S+y,u.appendChild(o);let $=o.querySelector(".window-close");$&&$.addEventListener("click",D=>{D.stopPropagation(),w()}),a.tabs&&a.tabs.length>0&&o.querySelectorAll(".tab").forEach(W=>{W.addEventListener("click",()=>{let A=W.getAttribute("data-tab-index");o.querySelectorAll(".tab").forEach(L=>L.classList.remove("active")),W.classList.add("active"),o.querySelectorAll(".tab-content").forEach(L=>L.classList.remove("active")),o.querySelector(`.tab-content[data-tab-content="${A}"]`).classList.add("active")})}),setTimeout(()=>{o.classList.add("open")},10)}function w(u=!1){o&&(u?(o.classList.add("switching"),o.classList.remove("open"),setTimeout(()=>{o&&o.parentNode&&o.parentNode.removeChild(o),o=null},200)):(o.classList.remove("open"),d&&d(),setTimeout(()=>{o&&o.parentNode&&o.parentNode.removeChild(o),o=null},400)))}function q(u){if(o){let x=o.querySelector(".window-content");x&&(x.innerHTML=u)}}function T(){return o&&o.classList.contains("open")}return{open:b,close:w,setContent:q,isOpen:T,id:a.id}}var me="easter_user_email";function Ie(){return localStorage.getItem(me)!==null}function pe(){return localStorage.getItem(me)}function $e(a){if(!a||!a.includes("@"))throw new Error("Invalid email address");if(!a.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(me,a.trim())}var Ce="easter_theme",v={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ge(){return localStorage.getItem(Ce)||v.AUTO}function He(){let a=window.innerWidth,o=window.innerHeight,d=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return a>1920&&o>1080?v.ANIMATED:(a===1920&&o===1080&&d||a<=1920||o<=1080,v.DEFAULT)}function Me(a){if(!Object.values(v).includes(a))throw new Error("Invalid theme");localStorage.setItem(Ce,a),ue(a)}function ue(a,o=!1){let d=document.body,b=a===v.AUTO?He():a;if(o||(d.classList.add("theme-transitioning"),setTimeout(()=>{d.classList.remove("theme-transitioning")},300)),Object.values(v).forEach(w=>{d.classList.remove(`theme-${w}`)}),d.classList.add(`theme-${a}`),b===v.ANIMATED){if(!document.querySelector(".background")){let w=document.createElement("div");w.className="background",document.body.prepend(w)}}else{let w=document.querySelector(".background");w&&(o?w.remove():(w.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{w.remove()},400)))}}function ke(){let a=ge();if(ue(a,!0),a===v.AUTO){let o;window.addEventListener("resize",()=>{clearTimeout(o),o=setTimeout(()=>{ue(v.AUTO)},300)})}}function Ne(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function ve(){let a=document.getElementById("logs-container");if(!a)return;let o=localStorage.getItem("service_map");if(!o){a.innerHTML='<p class="logs-placeholder">No service map configured. Please upload your service-map.json in Settings.</p>';return}let d;try{d=JSON.parse(o)}catch(T){console.error("Error parsing service_map from localStorage:",T),a.innerHTML='<p class="logs-placeholder">Error: Invalid service map data.</p>';return}let b=null;if(d&&typeof d.services=="object"){let T=["cs","be","th"];for(let u of T)if(Array.isArray(d.services[u])){let x=d.services[u].find(E=>E.short_name==="event"||E.id==="event"||E.id==="dex-event-service");if(x){b=x;break}}}if(!b){a.innerHTML='<p class="logs-placeholder">Event service not found in service map.</p>';return}let q=`http://${b.domain==="0.0.0.0"?"localhost":b.domain}:${b.port}/logs`;try{let T=await fetch(q);if(!T.ok){a.innerHTML='<p class="logs-placeholder">Event service is offline.</p>';return}let u=await T.json();if(!u||u.length===0){a.innerHTML='<p class="logs-placeholder">No logs found.</p>';return}let x=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],E=u.filter(y=>!x.includes(y.id));E.forEach(y=>{y.logs.reverse()}),E.reverse();let N=E.map(y=>{let S=y.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${y.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(S)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${S}</pre>
                </div>
            `}).join("");a.innerHTML=N,document.querySelectorAll(".copy-logs-btn").forEach(y=>{y.addEventListener("click",()=>{let S=unescape(y.dataset.logs);navigator.clipboard.writeText(S).then(()=>{let $=y.querySelector("i");$.classList.remove("bx-copy"),$.classList.add("bx-check"),setTimeout(()=>{$.classList.remove("bx-check"),$.classList.add("bx-copy")},2e3)})})})}catch(T){console.error("Error fetching logs:",T),a.innerHTML='<p class="logs-placeholder">Failed to load logs.</p>'}}function De(){console.log("Welcome to Easter Company."),ke(),Se();let a=Ie();xe(a),Ae();let o=document.querySelector("footer"),d=null;function b(){d=null,o?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(t=>{t.classList.remove("active","inactive")})}let w=ie({id:"login-window",title:"Welcome",content:`
            <div class="login-split-container">
                <div class="login-top-section">
                    <div class="login-form">
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
        `,icon:"bx-log-in",onClose:b}),q=null;function T(){return localStorage.getItem("service_map")?`
            <div id="system-monitor-widgets" class="system-monitor-widgets">
                <p>Loading services...</p>
            </div>
        `:`
                <div class="system-monitor-placeholder">
                    <p>No service map configured.</p>
                    <p>Please upload your service-map.json in Settings to enable live monitoring.</p>
                </div>
            `}async function u(){let e=document.getElementById("system-monitor-widgets");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML="<p>No service map configured. Please upload your service-map.json in Settings to enable live monitoring.</p>";return}let i;try{i=JSON.parse(t)}catch(n){console.error("Error parsing service_map from localStorage:",n),e.innerHTML="<p>Error: Invalid service map data.</p>";return}let s=null;if(i&&typeof i.services=="object"){let n=["cs","be","th"];for(let m of n)if(Array.isArray(i.services[m])){let g=i.services[m].find(I=>I.id==="dex-event-service");if(g){s=g;break}}}if(!s){e.innerHTML="<p>Error: dex-event-service not found in service map. Cannot fetch system metrics.</p>";return}let h=`http://${s.domain==="0.0.0.0"?"localhost":s.domain}:${s.port}/system_monitor_metrics`,c=[];try{let n=await fetch(h);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);c=await n.json()}catch(n){console.error("Error fetching system monitor metrics:",n),e.innerHTML=`<p>Failed to load system metrics: ${n.message}.</p>`;return}q=Date.now(),S(3,q);function r(n){return!n||n==="N/A"||n==="unknown"||n.trim()===""?"-":n}function f(n){if(!n||n==="N/A"||n==="unknown"||n.trim()==="")return"-";let m=n.match(/^(\d+)\.(\d+)\.(\d+)/);if(m)return`${m[1]}.${m[2]}.${m[3]}`;let g=n.match(/^(\d+)\.(\d+)/);return g?`${g[1]}.${g[2]}.0`:n.split(".").slice(0,3).join(".")||"-"}function p(n){return!n||n==="-"?n:n.length>28?n.substring(0,28)+"...":n}function C(n){if(!n||n==="-"||n==="N/A")return"#666";let m=n.match(/([\d.]+)%/);if(!m)return"#666";let g=parseFloat(m[1]);return g<30?"#00ff00":g<60?"#88ff00":g<80?"#ffaa00":"#ff0000"}function X(n){if(!n||n==="N/A"||n==="unknown")return"-";let m=n.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!m)return"-";let g=parseInt(m[1])||0,I=parseInt(m[2])||0,M=parseInt(m[3])||0,te=parseFloat(m[4])||0,k=g*86400+I*3600+M*60+te,ne=Math.floor(k/60),se=Math.floor(k/3600),J=Math.floor(k/86400),z=Math.floor(J/30),Z=Math.floor(J/365);return Z>=1?Z===1?"1 year":`${Z} years`:z>=1?z===1?"1 month":`${z} months`:J>=1?J===1?"1 day":`${J} days`:se>=1?se===1?"1 hour":`${se} hours`:ne>=1?ne===1?"1 minute":`${ne} minutes`:Math.floor(k)===1?"1 second":`${Math.floor(k)} seconds`}function ae(n){let m=n.status==="online",g=m?"service-widget-online":"service-widget-offline",I=m?"bx-check-circle":"bx-x-circle",M=m?"OK":"BAD",te="",k="";if(m){let z="-";if(n.version&&n.version.str&&n.version.str.trim()!=="")z=f(n.version.str);else if(n.version&&n.version.obj){let ee=n.version.obj;if(ee.major||ee.minor||ee.patch){let ce=r(ee.major),le=r(ee.minor),de=r(ee.patch);(ce!=="-"||le!=="-"||de!=="-")&&(z=`${ce!=="-"?ce:"0"}.${le!=="-"?le:"0"}.${de!=="-"?de:"0"}`)}}te=`
                    <div class="service-widget-info">
                        <span class="info-label">Version:</span>
                        <span class="info-value">
                            <span class="metric-version-monospace" style="font-size: 1.2em; font-weight: bold; color: white;">${z}</span>
                        </span>
                    </div>
                `;let Z=r(n.cpu),Ee=r(n.memory),Le=C(Z),Te=C(Ee);k=`
                    <div class="service-widget-footer">
                        <div class="service-widget-item">
                            <i class="bx bx-time-five" style="color: #00bfff;"></i>
                            <span>${X(n.uptime)}</span>
                        </div>
                        <div class="service-widget-item">
                            <i class="bx bxs-microchip" style="color: ${Le};"></i>
                            <span style="color: ${Le};">${Z}</span>
                        </div>
                        <div class="service-widget-item">
                            <i class="bx bxs-chip" style="color: ${Te};"></i>
                            <span style="color: ${Te};">${Ee}</span>
                        </div>
                    </div>
                `}else te="",k=`
                    <div class="service-widget-footer offline">
                        <span>OFFLINE</span>
                    </div>
                `;let ne=n.short_name||n.id,se=n.domain&&n.port?`${n.domain}:${n.port}`:n.domain||n.port||"",J=p(r(se));return`
                <div class="service-widget ${g}" data-service-id="${n.id}">
                    <div class="service-widget-header">
                        <i class="bx ${I}"></i>
                        <h3>${ne}</h3>
                        <span class="service-widget-status">${M}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Address:</span>
                            <span class="info-value">${J}</span>
                        </div>
                        ${te}
                    </div>
                    ${k}
                </div>
            `}let re=e.querySelectorAll(".service-widget"),Q=new Map;Array.from(e.children).forEach(n=>{n.classList.contains("service-widget")||n.remove()}),re.forEach(n=>{let m=n.getAttribute("data-service-id");m&&Q.set(m,n)}),c.forEach((n,m)=>{let g=Q.get(n.id);if(g){let I=document.createElement("div");I.innerHTML=ae(n);let M=I.firstElementChild;g.className=M.className,g.innerHTML=M.innerHTML,Q.delete(n.id)}else{let I=document.createElement("div");I.innerHTML=ae(n);let M=I.firstElementChild;m<e.children.length?e.insertBefore(M,e.children[m]):e.appendChild(M)}}),Q.forEach(n=>{n.remove()})}let x=ie({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${pe()||"Unknown"}</p>`,icon:"bx-user",onClose:b}),E=null,N=null;function y(){return`
            <div id="events-timeline" class="events-timeline">
                <p>Loading events...</p>
            </div>
        `}function S(e,t){let i=document.querySelector(`[data-tab-subtitle="${e}"]`);if(!i||!t)return;let l=Date.now()-t,h=l,c=l/1e3,r=Math.floor(c/60),f=Math.floor(r/60),p;c<10?p=`${c.toFixed(2)}s ago`:c<100?p=`${c.toFixed(2)}s ago`:r<60?p=r===1?"1 minute ago":`${r} minutes ago`:p=f===1?"1 hour ago":`${f} hours ago`,i.textContent=`Last updated: ${p}`}async function $(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML='<p class="events-placeholder">No service map configured. Please upload your service-map.json in Settings.</p>';return}let i;try{i=JSON.parse(t)}catch(c){console.error("Error parsing service_map from localStorage:",c),e.innerHTML='<p class="events-placeholder">Error: Invalid service map data.</p>';return}let s=null;if(i&&typeof i.services=="object"){let c=["cs","be","th"];for(let r of c)if(Array.isArray(i.services[r])){let f=i.services[r].find(p=>p.short_name==="event"||p.id==="event"||p.id==="dex-event-service");if(f){s=f;break}}}if(!s){e.innerHTML='<p class="events-placeholder">Event service not found in service map.</p>';return}let h=`http://${s.domain==="0.0.0.0"?"localhost":s.domain}:${s.port}/events?ml=50&format=text`;try{let c=await fetch(h);if(!c.ok){e.innerHTML='<p class="events-placeholder">Event service is offline.</p>';return}let r=await c.text();if(!r||r.trim()===""){e.innerHTML='<p class="events-placeholder">No events found.</p>';return}let p=r.trim().split(`
`).map(C=>{let X=C.split(" | ");if(X.length<3)return"";let ae=X[0].trim(),re=X[1].trim(),Q=X[2].trim(),n=new Date(ae.replace(" UTC","")+" UTC"),m=n.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),g=n.toLocaleDateString(navigator.language,{month:"short",day:"numeric",year:"numeric"});return`
                    <div class="event-item">
                        <div class="event-time">
                            <span class="event-time-main">${m}</span>
                            <span class="event-date">${g}</span>
                        </div>
                        <div class="event-content">
                            <div class="event-service">${re}</div>
                            <div class="event-message">${Q}</div>
                        </div>
                    </div>
                `}).join("");e.innerHTML=p,E=Date.now(),S(2,E)}catch(c){console.error("Error fetching events:",c),e.innerHTML='<p class="events-placeholder">Failed to load events.</p>'}}let D=ie({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:"<h1>Notifications</h1><p>This is the notifications tab.</p>"},{icon:"bx-history",title:"Logs",content:Ne()},{icon:"bx-calendar-event",title:"Events",content:y()},{icon:"bx-line-chart",title:"System Monitor",content:T()}],icon:"bxs-message-dots",onClose:b}),W="easter_analytics_enabled",A="easter_debug_mode";function L(){let e=localStorage.getItem(W);return e===null?!0:e==="true"}function G(){return L()}function fe(e){localStorage.setItem(W,e.toString()),window.EASTER_ANALYTICS_ENABLED=e,window.EASTER_DEBUG_MODE=e,console.log(e?"[Easter Analytics] Analytics and debug mode enabled":"[Easter Analytics] Analytics and debug mode disabled")}window.EASTER_ANALYTICS_ENABLED=L(),window.EASTER_DEBUG_MODE=G(),window.EASTER_DEBUG_MODE&&(console.log("[Easter Debug] Debug mode is active"),console.log("[Easter Debug] Analytics enabled:",window.EASTER_ANALYTICS_ENABLED));function Be(){return"Notification"in window?{enabled:Notification.permission==="granted",supported:!0}:{enabled:!1,supported:!1}}async function he(){if(!navigator.permissions)return{enabled:!1,supported:!1};try{let e=await navigator.permissions.query({name:"microphone"});return{enabled:e.state==="granted",supported:!0,state:e.state}}catch(e){return console.error("Error querying microphone permission:",e),{enabled:!1,supported:!1}}}async function B(){let e=document.getElementById("microphone-toggle");if(!e)return;let t=await he(),i=document.querySelector("#microphone-setting-item .settings-item-description");t.supported?(e.disabled=!1,e.checked=t.enabled,i&&(i.textContent="Allow access to your microphone")):(e.disabled=!0,e.checked=!1,i&&(i.textContent="Not supported in this browser"))}function _(){let e=ge(),t=pe()||"user@easter.company",i=Be(),s=L();return`
                        <div class="theme-selector">                    <div class="theme-card ${e===v.AUTO?"active":""}" data-theme="${v.AUTO}">
                        <div class="theme-preview theme-preview-auto"></div>
                                                                                    <div class="theme-info">
                                                                                        <h3>Auto</h3>
                                                                                        <p>Automatic theme selection.</p>
                                                                                        <span class="theme-badge">${e===v.AUTO?"Active":"Select"}</span>
                                                                                    </div>                    </div>
                    <div class="theme-card ${e===v.DEFAULT?"active":""}" data-theme="${v.DEFAULT}">
                        <div class="theme-preview theme-preview-default"></div>
                                                                <div class="theme-info">
                                                                    <h3>Default</h3>
                                                                    <p>Simple, black, default.</p>
                                                                    <span class="theme-badge">${e===v.DEFAULT?"Active":"Select"}</span>
                                                                </div>                    </div>
                    <div class="theme-card ${e===v.ANIMATED?"active":""}" data-theme="${v.ANIMATED}">
                        <div class="theme-preview theme-preview-animated"></div>
                                                                <div class="theme-info">
                                                                    <h3>Legacy</h3>
                                                                    <p>Colourful, not bright.</p>
                                                                    <span class="theme-badge">${e===v.ANIMATED?"Active":"Select"}</span>
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
                                <input type="checkbox" id="analytics-toggle" ${s?"checked":""}>
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            `}function j(){document.querySelectorAll(".theme-card").forEach(t=>{t.addEventListener("click",function(){let s=this.getAttribute("data-theme");Me(s),F.setContent(_()),setTimeout(()=>{j(),H(),O(),P(),Y(),V(),B(),U()},10)})})}function H(){let e=document.getElementById("service-map-upload-btn"),t=document.getElementById("service-map-input"),i=document.getElementById("service-map-file-name"),s=document.getElementById("service-map-error"),l=document.getElementById("service-map-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",h=>{let c=h.target.files[0];if(!c)return;if(c.name!=="service-map.json"){s.textContent='File must be named "service-map.json"',s.style.display="block",t.value="";return}let r=new FileReader;r.onload=f=>{try{let p=JSON.parse(f.target.result);localStorage.setItem("service_map",JSON.stringify(p)),i.textContent="service-map.json",s.style.display="none",F.setContent(_()),setTimeout(()=>{j(),H(),O(),P(),Y(),V(),B(),U()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",t.value=""}},r.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",t.value=""},r.readAsText(c)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("service_map"),F.setContent(_()),setTimeout(()=>{j(),H(),O(),P(),Y(),V(),B(),U()},10)})}function O(){let e=document.getElementById("server-map-upload-btn"),t=document.getElementById("server-map-input"),i=document.getElementById("server-map-file-name"),s=document.getElementById("server-map-error"),l=document.getElementById("server-map-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",h=>{let c=h.target.files[0];if(!c)return;if(c.name!=="server-map.json"){s.textContent='File must be named "server-map.json"',s.style.display="block",t.value="";return}let r=new FileReader;r.onload=f=>{try{let p=JSON.parse(f.target.result);localStorage.setItem("server_map",JSON.stringify(p)),i.textContent="server-map.json",s.style.display="none",F.setContent(_()),setTimeout(()=>{j(),H(),O(),B(),U()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",t.value=""}},r.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",t.value=""},r.readAsText(c)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("server_map"),F.setContent(_()),setTimeout(()=>{j(),H(),O(),P(),Y(),V(),B(),U()},10)})}function Y(){let e=document.getElementById("notifications-toggle");e&&!e.disabled&&e.addEventListener("change",async t=>{if(t.target.checked)try{await Notification.requestPermission()==="granted"?new Notification("Easter Company",{body:"Notifications are now enabled!",icon:"/favicon.ico"}):t.target.checked=!1}catch(i){console.error("Notification permission error:",i),t.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),t.target.checked=!0)})}function U(){let e=document.getElementById("microphone-toggle");e&&!e.disabled&&e.addEventListener("change",async t=>{if(t.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0})}catch(i){console.error("Microphone permission error:",i),t.target.checked=!1}else(await he()).enabled&&(alert("To disable microphone access, please use your browser settings."),t.target.checked=!0)})}function V(){let e=document.getElementById("analytics-toggle");e&&e.addEventListener("change",t=>{let i=t.target.checked;fe(i),i?(console.log("[Easter Analytics] Tracking user interactions"),console.log("[Easter Debug] Debug mode activated")):console.log("[Easter Analytics] Analytics disabled")})}function P(){let e=document.getElementById("options-upload-btn"),t=document.getElementById("options-input"),i=document.getElementById("options-file-name"),s=document.getElementById("options-error"),l=document.getElementById("options-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",h=>{let c=h.target.files[0];if(!c)return;if(c.name!=="options.json"){s.textContent='File must be named "options.json"',s.style.display="block",t.value="";return}let r=new FileReader;r.onload=f=>{try{let p=JSON.parse(f.target.result);localStorage.setItem("user_options",JSON.stringify(p)),i.textContent="options.json",s.style.display="none",F.setContent(_()),setTimeout(()=>{j(),H(),O(),P(),B(),U()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",t.value=""}},r.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",t.value=""},r.readAsText(c)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("user_options"),F.setContent(_()),setTimeout(()=>{j(),H(),O(),P(),Y(),V(),B(),U()},10)})}let F=ie({id:"settings-window",title:"Settings",content:_(),icon:"bx-cog",onClose:b});function oe(e,t=null){d&&d.id===e.id?(e.close(),d=null,t&&document.querySelectorAll(".nav-right i").forEach(s=>{s.classList.remove("active","inactive")})):d?(d.close(!0),setTimeout(()=>{e.open(),d=e,t&&document.querySelectorAll(".nav-right i").forEach(s=>{s===t?(s.classList.add("active"),s.classList.remove("inactive")):(s.classList.add("inactive"),s.classList.remove("active"))})},220)):(e.open(),d=e,t&&document.querySelectorAll(".nav-right i").forEach(s=>{s===t?(s.classList.add("active"),s.classList.remove("inactive")):(s.classList.add("inactive"),s.classList.remove("active"))})),d?o?.classList.add("hide"):o?.classList.remove("hide")}let be=document.getElementById("navbar-microphone"),ye,R,K;function _e(e){let t=e.getContext("2d");R=new(window.AudioContext||window.webkitAudioContext),K=R.createAnalyser();let i=R.createOscillator();i.type="sine",i.frequency.setValueAtTime(440,R.currentTime),i.connect(K),K.connect(R.destination),i.start(),K.fftSize=256;let s=K.frequencyBinCount,l=new Uint8Array(s);function h(){ye=requestAnimationFrame(h),K.getByteTimeDomainData(l),t.clearRect(0,0,e.width,e.height),t.lineWidth=2,t.strokeStyle="rgb(0, 255, 255)",t.shadowBlur=10,t.shadowColor="rgb(0, 255, 255)",t.beginPath();let c=e.width*1/s,r=0;for(let f=0;f<s;f++){let C=l[f]/128*e.height/2;f===0?t.moveTo(r,C):t.lineTo(r,C),r+=c}t.lineTo(e.width,e.height/2),t.stroke()}h()}function we(){cancelAnimationFrame(ye),R&&R.close()}be&&be.addEventListener("click",()=>{let e=document.querySelector("nav"),t=document.querySelector(".nav-left"),i=d?.isOpen()?d.id:null,s=i?document.querySelector(`#${i} .window-content`):null;if(e.classList.contains("recording")){e.classList.remove("recording"),t.classList.remove("recording"),we();let l=document.getElementById("audio-canvas");l&&l.remove()}else{e.classList.add("recording"),t.classList.add("recording");let l=document.createElement("canvas");l.id="audio-canvas",l.style.position="absolute",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100%",l.style.zIndex="-1",e.prepend(l),_e(l),setTimeout(()=>{e.classList.remove("recording"),t.classList.remove("recording"),we();let h=document.getElementById("audio-canvas");h&&h.remove()},3e4)}});function je(e){e.preventDefault();let t=document.getElementById("email-input"),i=document.getElementById("login-error");try{$e(t.value),window.location.reload()}catch(s){i.textContent=s.message,i.style.display="block"}}if(a){let e=document.getElementById("user-icon"),t=document.getElementById("message-icon"),i=document.getElementById("settings-icon");e&&e.addEventListener("click",()=>oe(x,e)),t&&t.addEventListener("click",async()=>{oe(D,t),setTimeout(async()=>{if(localStorage.getItem("service_map")){await u(),await $(),await ve(),N=Date.now();let l=setInterval(()=>{D.isOpen()?(S(1,N),S(2,E),S(3,q)):clearInterval(l)},100),h=setInterval(async()=>{D.isOpen()?(await $(),await ve(),N=Date.now()):clearInterval(h)},5e3),c=setInterval(async()=>{D.isOpen()?await u():clearInterval(c)},3e4)}},100)}),i&&i.addEventListener("click",()=>{oe(F,i),setTimeout(()=>{j(),H(),O(),P(),Y(),V(),B(),U()},100)})}else{let e=document.getElementById("login-btn");e&&e.addEventListener("click",()=>{oe(w),setTimeout(()=>{let t=document.getElementById("login-form");t&&t.addEventListener("submit",je)},100)})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",De):De();})();
//# sourceMappingURL=dex.e748e208.js.map
