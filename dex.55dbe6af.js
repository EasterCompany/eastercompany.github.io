(()=>{function Ae(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ie(o=!1){let c=`
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
    `,p=document.createElement("nav");p.innerHTML=c,document.body.prepend(p)}function $e(){let o=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,a=document.createElement("footer");a.innerHTML=o,document.body.appendChild(a)}function ae(o){let a=null,c=o.onClose||null,p=o.onOpen||null;function E(){if(a){a.classList.add("open"),p&&setTimeout(p,10);return}let b=document.getElementById("windows-container");b||(b=document.createElement("div"),b.id="windows-container",b.className="windows-container",document.body.appendChild(b)),a=document.createElement("div"),a.id=o.id,a.className="window";let T=o.icon||"bx-window",_="",w="",C;o.tabs&&o.tabs.length>0?(_=`<div class="tab-bar">${o.tabs.map((S,A)=>{let H;return S.icon?H=`<i class="bx ${S.icon}"></i>`:S.title&&S.title.length>0?H=`<span class="tab-glyph">${S.title.charAt(0).toUpperCase()}</span>`:H='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${A===0?"active":""}" data-tab-index="${A}">
                        ${H}
                        <span class="tab-title">${S.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${A}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,C=`<div class="window-content">${o.tabs.map((S,A)=>`<div class="tab-content ${A===0?"active":""}" data-tab-content="${A}">${S.content}</div>`).join("")}</div>`):(o.title&&(w=`<div class="window-title">${o.title}</div>`),C=`<div class="window-content">${o.content}</div>`);let x=`
            <div class="window-header">
                <i class="bx ${T}"></i>
                ${_}
                ${w}
                <i class="bx bx-x window-close"></i>
            </div>
        `;a.innerHTML=x+C,b.appendChild(a);let te=a.querySelector(".window-close");te&&te.addEventListener("click",ne=>{ne.stopPropagation(),g()}),o.tabs&&o.tabs.length>0&&a.querySelectorAll(".tab").forEach(M=>{M.addEventListener("click",()=>{let S=M.getAttribute("data-tab-index");a.querySelectorAll(".tab").forEach(A=>A.classList.remove("active")),M.classList.add("active"),a.querySelectorAll(".tab-content").forEach(A=>A.classList.remove("active")),a.querySelector(`.tab-content[data-tab-content="${S}"]`).classList.add("active")})}),setTimeout(()=>{a.classList.add("open"),p&&p()},10)}function g(b=!1){a&&(b?(a.classList.add("switching"),a.classList.remove("open"),setTimeout(()=>{a&&a.parentNode&&a.parentNode.removeChild(a),a=null},200)):(a.classList.remove("open"),c&&c(),setTimeout(()=>{a&&a.parentNode&&a.parentNode.removeChild(a),a=null},400)))}function L(b){if(a){let T=a.querySelector(".window-content");T&&(T.innerHTML=b)}}function $(){return a&&a.classList.contains("open")}return{open:E,close:g,setContent:L,isOpen:$,id:o.id}}var pe="easter_user_email";function Ce(){return localStorage.getItem(pe)!==null}function fe(){return localStorage.getItem(pe)}function Me(o){if(!o||!o.includes("@"))throw new Error("Invalid email address");if(!o.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(pe,o.trim())}var ke="easter_theme",v={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ge(){return localStorage.getItem(ke)||v.AUTO}function qe(){let o=window.innerWidth,a=window.innerHeight,c=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return o>1920&&a>1080?v.ANIMATED:(o===1920&&a===1080&&c||o<=1920||a<=1080,v.DEFAULT)}function Ne(o){if(!Object.values(v).includes(o))throw new Error("Invalid theme");localStorage.setItem(ke,o),ve(o)}function ve(o,a=!1){let c=document.body,p=o===v.AUTO?qe():o;if(a||(c.classList.add("theme-transitioning"),setTimeout(()=>{c.classList.remove("theme-transitioning")},300)),Object.values(v).forEach(E=>{c.classList.remove(`theme-${E}`)}),c.classList.add(`theme-${o}`),p===v.ANIMATED){if(!document.querySelector(".background")){let E=document.createElement("div");E.className="background",document.body.prepend(E)}}else{let E=document.querySelector(".background");E&&(a?E.remove():(E.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{E.remove()},400)))}}function De(){let o=ge();if(ve(o,!0),o===v.AUTO){let a;window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>{ve(v.AUTO)},300)})}}function ee(o,a,c=null){let E={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[o]||"bx-info-circle",g=c?`<p class="placeholder-action">${c}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${E} placeholder-icon'></i>
            <p class="placeholder-message">${a}</p>
            ${g}
        </div>
    `}function je(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function he(){let o=document.getElementById("logs-container");if(!o)return;o.classList.remove("placeholder-active");let a=localStorage.getItem("service_map");if(!a){o.classList.add("placeholder-active"),o.innerHTML=ee("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring.");return}let c;try{c=JSON.parse(a)}catch(L){console.error("Error parsing service_map from localStorage:",L),o.classList.add("placeholder-active"),o.innerHTML=ee("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings.");return}let p=null;if(c&&typeof c.services=="object"){let L=["cs","be","th"];for(let $ of L)if(Array.isArray(c.services[$])){let b=c.services[$].find(T=>T.short_name==="event"||T.id==="event"||T.id==="dex-event-service");if(b){p=b;break}}}if(!p){o.classList.add("placeholder-active"),o.innerHTML=ee("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json.");return}let g=`http://${p.domain==="0.0.0.0"?"localhost":p.domain}:${p.port}/logs`;try{let L=await fetch(g);if(!L.ok){o.classList.add("placeholder-active"),o.innerHTML=ee("offline","Event service is offline.","Please ensure the event service is running.");return}let $=await L.json();if(!$||$.length===0){o.classList.add("placeholder-active"),o.innerHTML=ee("empty","No logs found.","Service logs will appear here when available.");return}let b=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],T=$.filter(w=>!b.includes(w.id));T.forEach(w=>{w.logs.reverse()}),T.reverse();let _=T.map(w=>{let C=w.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${w.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(C)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${C}</pre>
                </div>
            `}).join("");o.innerHTML=_,document.querySelectorAll(".copy-logs-btn").forEach(w=>{w.addEventListener("click",()=>{let C=unescape(w.dataset.logs);navigator.clipboard.writeText(C).then(()=>{let x=w.querySelector("i");x.classList.remove("bx-copy"),x.classList.add("bx-check"),setTimeout(()=>{x.classList.remove("bx-check"),x.classList.add("bx-copy")},2e3)})})})}catch(L){console.error("Error fetching logs:",L),o.classList.add("placeholder-active"),o.innerHTML=ee("offline","Failed to load logs.","The event service may be offline or unreachable.")}}function Be(){console.log("Welcome to Easter Company."),De(),Ae();let o=Ce();Ie(o),$e();let a=document.querySelector("footer"),c=null;function p(){c=null,a?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(t=>{t.classList.remove("active","inactive")})}let E=ae({id:"login-window",title:"Welcome",content:`
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
        `,icon:"bx-log-in",onClose:p});function g(e,t,i=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",y=i?`<p class="placeholder-action">${i}</p>`:"";return`
            <div class="tab-placeholder">
                <i class='bx ${l} placeholder-icon'></i>
                <p class="placeholder-message">${t}</p>
                ${y}
            </div>
        `}let L=null;function $(){return localStorage.getItem("service_map")?`
            <div id="system-monitor-widgets" class="system-monitor-widgets">
                <p>Loading services...</p>
            </div>
        `:g("config","No service map configured.","Please upload your service-map.json in Settings to enable live monitoring.")}async function b(){let e=document.getElementById("system-monitor-widgets");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=g("config","No service map configured.","Please upload your service-map.json in Settings to enable live monitoring.");return}let i;try{i=JSON.parse(t)}catch(n){console.error("Error parsing service_map from localStorage:",n),e.innerHTML=g("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings.");return}let s=null;if(i&&typeof i.services=="object"){let n=["cs","be","th"];for(let m of n)if(Array.isArray(i.services[m])){let f=i.services[m].find(I=>I.id==="dex-event-service");if(f){s=f;break}}}if(!s){e.innerHTML=g("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json.");return}let y=`http://${s.domain==="0.0.0.0"?"localhost":s.domain}:${s.port}/system_monitor_metrics`,d=[];try{let n=await fetch(y);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);d=await n.json()}catch(n){console.error("Error fetching system monitor metrics:",n),e.innerHTML=g("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}L=Date.now(),x(3,L);function r(n){return!n||n==="N/A"||n==="unknown"||n.trim()===""?"-":n}function h(n){if(!n||n==="N/A"||n==="unknown"||n.trim()==="")return"-";let m=n.match(/^(\d+)\.(\d+)\.(\d+)/);if(m)return`${m[1]}.${m[2]}.${m[3]}`;let f=n.match(/^(\d+)\.(\d+)/);return f?`${f[1]}.${f[2]}.0`:n.split(".").slice(0,3).join(".")||"-"}function u(n){return!n||n==="-"?n:n.length>28?n.substring(0,28)+"...":n}function D(n){if(!n||n==="-"||n==="N/A")return"#666";let m=n.match(/([\d.]+)%/);if(!m)return"#666";let f=parseFloat(m[1]);return f<30?"#00ff00":f<60?"#88ff00":f<80?"#ffaa00":"#ff0000"}function K(n){if(!n||n==="N/A"||n==="unknown")return"-";let m=n.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!m)return"-";let f=parseInt(m[1])||0,I=parseInt(m[2])||0,j=parseInt(m[3])||0,se=parseFloat(m[4])||0,B=f*86400+I*3600+j*60+se,ie=Math.floor(B/60),oe=Math.floor(B/3600),J=Math.floor(B/86400),z=Math.floor(J/30),Q=Math.floor(J/365);return Q>=1?Q===1?"1 year":`${Q} years`:z>=1?z===1?"1 month":`${z} months`:J>=1?J===1?"1 day":`${J} days`:oe>=1?oe===1?"1 hour":`${oe} hours`:ie>=1?ie===1?"1 minute":`${ie} minutes`:Math.floor(B)===1?"1 second":`${Math.floor(B)} seconds`}function ce(n){let m=n.status==="online",f=m?"service-widget-online":"service-widget-offline",I=m?"bx-check-circle":"bx-x-circle",j=m?"OK":"BAD",se="",B="";if(m){let z="-";if(n.version&&n.version.str&&n.version.str.trim()!=="")z=h(n.version.str);else if(n.version&&n.version.obj){let Z=n.version.obj;if(Z.major||Z.minor||Z.patch){let de=r(Z.major),me=r(Z.minor),ue=r(Z.patch);(de!=="-"||me!=="-"||ue!=="-")&&(z=`${de!=="-"?de:"0"}.${me!=="-"?me:"0"}.${ue!=="-"?ue:"0"}`)}}se=`
                    <div class="service-widget-info">
                        <span class="info-label">Version:</span>
                        <span class="info-value">
                            <span class="metric-version-monospace" style="font-size: 1.2em; font-weight: bold; color: white;">${z}</span>
                        </span>
                    </div>
                `;let Q=r(n.cpu),Te=r(n.memory),Se=D(Q),xe=D(Te);B=`
                    <div class="service-widget-footer">
                        <div class="service-widget-item">
                            <i class="bx bx-time-five" style="color: #00bfff;"></i>
                            <span>${K(n.uptime)}</span>
                        </div>
                        <div class="service-widget-item">
                            <i class="bx bxs-microchip" style="color: ${Se};"></i>
                            <span style="color: ${Se};">${Q}</span>
                        </div>
                        <div class="service-widget-item">
                            <i class="bx bxs-chip" style="color: ${xe};"></i>
                            <span style="color: ${xe};">${Te}</span>
                        </div>
                    </div>
                `}else se="",B=`
                    <div class="service-widget-footer offline">
                        <span>OFFLINE</span>
                    </div>
                `;let ie=n.short_name||n.id,oe=n.domain&&n.port?`${n.domain}:${n.port}`:n.domain||n.port||"",J=u(r(oe));return`
                <div class="service-widget ${f}" data-service-id="${n.id}">
                    <div class="service-widget-header">
                        <i class="bx ${I}"></i>
                        <h3>${ie}</h3>
                        <span class="service-widget-status">${j}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Address:</span>
                            <span class="info-value">${J}</span>
                        </div>
                        ${se}
                    </div>
                    ${B}
                </div>
            `}let le=e.querySelectorAll(".service-widget"),X=new Map;Array.from(e.children).forEach(n=>{n.classList.contains("service-widget")||n.remove()}),le.forEach(n=>{let m=n.getAttribute("data-service-id");m&&X.set(m,n)}),d.forEach((n,m)=>{let f=X.get(n.id);if(f){let I=document.createElement("div");I.innerHTML=ce(n);let j=I.firstElementChild;f.className=j.className,f.innerHTML=j.innerHTML,X.delete(n.id)}else{let I=document.createElement("div");I.innerHTML=ce(n);let j=I.firstElementChild;m<e.children.length?e.insertBefore(j,e.children[m]):e.appendChild(j)}}),X.forEach(n=>{n.remove()})}let T=ae({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${fe()||"Unknown"}</p>`,icon:"bx-user",onClose:p}),_=null,w=null;function C(){return`
            <div id="events-timeline" class="events-timeline">
                <p>Loading events...</p>
            </div>
        `}function x(e,t){let i=document.querySelector(`[data-tab-subtitle="${e}"]`);if(!i||!t)return;let l=Date.now()-t,y=l,d=l/1e3,r=Math.floor(d/60),h=Math.floor(r/60),u;d<10?u=`${d.toFixed(2)}s ago`:d<100?u=`${d.toFixed(2)}s ago`:r<60?u=r===1?"1 minute ago":`${r} minutes ago`:u=h===1?"1 hour ago":`${h} hours ago`,i.textContent=`Last updated: ${u}`}async function te(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=g("config","No service map configured.","Please upload your service-map.json in Settings to enable event monitoring.");return}let i;try{i=JSON.parse(t)}catch(d){console.error("Error parsing service_map from localStorage:",d),e.innerHTML=g("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings.");return}let s=null;if(i&&typeof i.services=="object"){let d=["cs","be","th"];for(let r of d)if(Array.isArray(i.services[r])){let h=i.services[r].find(u=>u.short_name==="event"||u.id==="event"||u.id==="dex-event-service");if(h){s=h;break}}}if(!s){e.innerHTML=g("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json.");return}let y=`http://${s.domain==="0.0.0.0"?"localhost":s.domain}:${s.port}/events?ml=50&format=text`;try{let d=await fetch(y);if(!d.ok){e.innerHTML=g("offline","Event service is offline.","Please ensure the event service is running.");return}let r=await d.text();if(!r||r.trim()===""){e.innerHTML=g("empty","No events found.","Events will appear here as they occur.");return}let u=r.trim().split(`
`).map(D=>{let K=D.split(" | ");if(K.length<3)return"";let ce=K[0].trim(),le=K[1].trim(),X=K[2].trim(),n=new Date(ce.replace(" UTC","")+" UTC"),m=n.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),f=n.toLocaleDateString(navigator.language,{month:"short",day:"numeric",year:"numeric"});return`
                    <div class="event-item">
                        <div class="event-time">
                            <span class="event-time-main">${m}</span>
                            <span class="event-date">${f}</span>
                        </div>
                        <div class="event-content">
                            <div class="event-service">${le}</div>
                            <div class="event-message">${X}</div>
                        </div>
                    </div>
                `}).join("");e.innerHTML=u,_=Date.now(),x(2,_)}catch(d){console.error("Error fetching events:",d),e.innerHTML=g("offline","Failed to load events.","The event service may be offline or unreachable.")}}async function ne(){if(localStorage.getItem("service_map")){await b(),await te(),await he(),w=Date.now();let t=setInterval(()=>{M.isOpen()?(x(1,w),x(2,_),x(3,L)):clearInterval(t)},100),i=setInterval(async()=>{M.isOpen()?(await te(),await he(),w=Date.now()):clearInterval(i)},5e3),s=setInterval(async()=>{M.isOpen()?await b():clearInterval(s)},3e4)}}let M=ae({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:g("empty","No notifications yet.","Notifications will appear here when available.")},{icon:"bx-history",title:"Logs",content:je()},{icon:"bx-calendar-event",title:"Events",content:C()},{icon:"bx-line-chart",title:"System Monitor",content:$()}],icon:"bxs-message-dots",onClose:p,onOpen:()=>{setTimeout(ne,100)}}),S="easter_analytics_enabled",A="easter_debug_mode";function H(){let e=localStorage.getItem(S);return e===null?!0:e==="true"}function be(){return H()}function _e(e){localStorage.setItem(S,e.toString()),window.EASTER_ANALYTICS_ENABLED=e,window.EASTER_DEBUG_MODE=e,console.log(e?"[Easter Analytics] Analytics and debug mode enabled":"[Easter Analytics] Analytics and debug mode disabled")}window.EASTER_ANALYTICS_ENABLED=H(),window.EASTER_DEBUG_MODE=be(),window.EASTER_DEBUG_MODE&&(console.log("[Easter Debug] Debug mode is active"),console.log("[Easter Debug] Analytics enabled:",window.EASTER_ANALYTICS_ENABLED));function He(){return"Notification"in window?{enabled:Notification.permission==="granted",supported:!0}:{enabled:!1,supported:!1}}async function ye(){if(!navigator.permissions)return{enabled:!1,supported:!1};try{let e=await navigator.permissions.query({name:"microphone"});return{enabled:e.state==="granted",supported:!0,state:e.state}}catch(e){return console.error("Error querying microphone permission:",e),{enabled:!1,supported:!1}}}async function O(){let e=document.getElementById("microphone-toggle");if(!e)return;let t=await ye(),i=document.querySelector("#microphone-setting-item .settings-item-description");t.supported?(e.disabled=!1,e.checked=t.enabled,i&&(i.textContent="Allow access to your microphone")):(e.disabled=!0,e.checked=!1,i&&(i.textContent="Not supported in this browser"))}function k(){let e=ge(),t=fe()||"user@easter.company",i=He(),s=H();return`
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
            `}function U(){document.querySelectorAll(".theme-card").forEach(t=>{t.addEventListener("click",function(){let s=this.getAttribute("data-theme");Ne(s),N.setContent(k()),setTimeout(()=>{U(),F(),q(),P(),G(),Y(),O(),W()},10)})})}function F(){let e=document.getElementById("service-map-upload-btn"),t=document.getElementById("service-map-input"),i=document.getElementById("service-map-file-name"),s=document.getElementById("service-map-error"),l=document.getElementById("service-map-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",y=>{let d=y.target.files[0];if(!d)return;if(d.name!=="service-map.json"){s.textContent='File must be named "service-map.json"',s.style.display="block",t.value="";return}let r=new FileReader;r.onload=h=>{try{let u=JSON.parse(h.target.result);localStorage.setItem("service_map",JSON.stringify(u)),i.textContent="service-map.json",s.style.display="none",N.setContent(k()),setTimeout(()=>{U(),F(),q(),P(),G(),Y(),O(),W()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",t.value=""}},r.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",t.value=""},r.readAsText(d)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("service_map"),N.setContent(k()),setTimeout(()=>{U(),F(),q(),P(),G(),Y(),O(),W()},10)})}function q(){let e=document.getElementById("server-map-upload-btn"),t=document.getElementById("server-map-input"),i=document.getElementById("server-map-file-name"),s=document.getElementById("server-map-error"),l=document.getElementById("server-map-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",y=>{let d=y.target.files[0];if(!d)return;if(d.name!=="server-map.json"){s.textContent='File must be named "server-map.json"',s.style.display="block",t.value="";return}let r=new FileReader;r.onload=h=>{try{let u=JSON.parse(h.target.result);localStorage.setItem("server_map",JSON.stringify(u)),i.textContent="server-map.json",s.style.display="none",N.setContent(k()),setTimeout(()=>{U(),F(),q(),O(),W()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",t.value=""}},r.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",t.value=""},r.readAsText(d)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("server_map"),N.setContent(k()),setTimeout(()=>{U(),F(),q(),P(),G(),Y(),O(),W()},10)})}function G(){let e=document.getElementById("notifications-toggle");e&&!e.disabled&&e.addEventListener("change",async t=>{if(t.target.checked)try{await Notification.requestPermission()==="granted"?new Notification("Easter Company",{body:"Notifications are now enabled!",icon:"/favicon.ico"}):t.target.checked=!1}catch(i){console.error("Notification permission error:",i),t.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),t.target.checked=!0)})}function W(){let e=document.getElementById("microphone-toggle");e&&!e.disabled&&e.addEventListener("change",async t=>{if(t.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0})}catch(i){console.error("Microphone permission error:",i),t.target.checked=!1}else(await ye()).enabled&&(alert("To disable microphone access, please use your browser settings."),t.target.checked=!0)})}function Y(){let e=document.getElementById("analytics-toggle");e&&e.addEventListener("change",t=>{let i=t.target.checked;_e(i),i?(console.log("[Easter Analytics] Tracking user interactions"),console.log("[Easter Debug] Debug mode activated")):console.log("[Easter Analytics] Analytics disabled")})}function P(){let e=document.getElementById("options-upload-btn"),t=document.getElementById("options-input"),i=document.getElementById("options-file-name"),s=document.getElementById("options-error"),l=document.getElementById("options-delete-btn");e&&t&&(e.addEventListener("click",()=>{t.click()}),t.addEventListener("change",y=>{let d=y.target.files[0];if(!d)return;if(d.name!=="options.json"){s.textContent='File must be named "options.json"',s.style.display="block",t.value="";return}let r=new FileReader;r.onload=h=>{try{let u=JSON.parse(h.target.result);localStorage.setItem("user_options",JSON.stringify(u)),i.textContent="options.json",s.style.display="none",N.setContent(k()),setTimeout(()=>{U(),F(),q(),P(),O(),W()},10)}catch{s.textContent="Invalid JSON format",s.style.display="block",t.value=""}},r.onerror=()=>{s.textContent="Failed to read file",s.style.display="block",t.value=""},r.readAsText(d)})),l&&l.addEventListener("click",()=>{localStorage.removeItem("user_options"),N.setContent(k()),setTimeout(()=>{U(),F(),q(),P(),G(),Y(),O(),W()},10)})}function Oe(){U(),F(),q(),P(),G(),Y(),O(),W()}let N=ae({id:"settings-window",title:"Settings",content:k(),icon:"bx-cog",onClose:p,onOpen:()=>{N.setContent(k()),setTimeout(Oe,50)}});function re(e,t=null){c&&c.id===e.id?(e.close(),c=null,t&&document.querySelectorAll(".nav-right i").forEach(s=>{s.classList.remove("active","inactive")})):c?(c.close(!0),setTimeout(()=>{e.open(),c=e,t&&document.querySelectorAll(".nav-right i").forEach(s=>{s===t?(s.classList.add("active"),s.classList.remove("inactive")):(s.classList.add("inactive"),s.classList.remove("active"))})},220)):(e.open(),c=e,t&&document.querySelectorAll(".nav-right i").forEach(s=>{s===t?(s.classList.add("active"),s.classList.remove("inactive")):(s.classList.add("inactive"),s.classList.remove("active"))})),c?a?.classList.add("hide"):a?.classList.remove("hide")}let we=document.getElementById("navbar-microphone"),Ee,R,V;function Ue(e){let t=e.getContext("2d");R=new(window.AudioContext||window.webkitAudioContext),V=R.createAnalyser();let i=R.createOscillator();i.type="sine",i.frequency.setValueAtTime(440,R.currentTime),i.connect(V),V.connect(R.destination),i.start(),V.fftSize=256;let s=V.frequencyBinCount,l=new Uint8Array(s);function y(){Ee=requestAnimationFrame(y),V.getByteTimeDomainData(l),t.clearRect(0,0,e.width,e.height),t.lineWidth=2,t.strokeStyle="rgb(0, 255, 255)",t.shadowBlur=10,t.shadowColor="rgb(0, 255, 255)",t.beginPath();let d=e.width*1/s,r=0;for(let h=0;h<s;h++){let D=l[h]/128*e.height/2;h===0?t.moveTo(r,D):t.lineTo(r,D),r+=d}t.lineTo(e.width,e.height/2),t.stroke()}y()}function Le(){cancelAnimationFrame(Ee),R&&R.close()}we&&we.addEventListener("click",()=>{let e=document.querySelector("nav"),t=document.querySelector(".nav-left"),i=c?.isOpen()?c.id:null,s=i?document.querySelector(`#${i} .window-content`):null;if(e.classList.contains("recording")){e.classList.remove("recording"),t.classList.remove("recording"),Le();let l=document.getElementById("audio-canvas");l&&l.remove()}else{e.classList.add("recording"),t.classList.add("recording");let l=document.createElement("canvas");l.id="audio-canvas",l.style.position="absolute",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100%",l.style.zIndex="-1",e.prepend(l),Ue(l),setTimeout(()=>{e.classList.remove("recording"),t.classList.remove("recording"),Le();let y=document.getElementById("audio-canvas");y&&y.remove()},3e4)}});function Fe(e){e.preventDefault();let t=document.getElementById("email-input"),i=document.getElementById("login-error");try{Me(t.value),window.location.reload()}catch(s){i.textContent=s.message,i.style.display="block"}}if(o){let e=document.getElementById("user-icon"),t=document.getElementById("message-icon"),i=document.getElementById("settings-icon");e&&e.addEventListener("click",()=>re(T,e)),t&&t.addEventListener("click",()=>{re(M,t)}),i&&i.addEventListener("click",()=>{re(N,i)})}else{let e=document.getElementById("login-btn");e&&e.addEventListener("click",()=>{re(E),setTimeout(()=>{let t=document.getElementById("login-form");t&&t.addEventListener("submit",Fe)},100)})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Be):Be();})();
//# sourceMappingURL=dex.55dbe6af.js.map
