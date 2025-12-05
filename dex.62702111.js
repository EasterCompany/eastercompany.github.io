(()=>{function ne(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ie(t=!1){let d=`
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
    `,v=document.createElement("nav");v.innerHTML=d,document.body.prepend(v)}function ae(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,s=document.createElement("footer");s.innerHTML=t,document.body.appendChild(s)}function Y(t){let s=null,d=t.onClose||null,v=t.onOpen||null;function f(){if(s){s.classList.add("open"),v&&setTimeout(v,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),s=document.createElement("div"),s.id=t.id,s.className="window";let y=t.icon||"bx-window",W="",L="",N;t.tabs&&t.tabs.length>0?(W=`<div class="tab-bar">${t.tabs.map((m,I)=>{let P;return m.icon?P=`<i class="bx ${m.icon}"></i>`:m.title&&m.title.length>0?P=`<span class="tab-glyph">${m.title.charAt(0).toUpperCase()}</span>`:P='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${I===0?"active":""}" data-tab-index="${I}">
                        ${P}
                        <span class="tab-title">${m.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${I}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,N=`<div class="window-content">${t.tabs.map((m,I)=>`<div class="tab-content ${I===0?"active":""}" data-tab-content="${I}">${m.content}</div>`).join("")}</div>`):(t.title&&(L=`<div class="window-title">${t.title}</div>`),N=`<div class="window-content">${t.content}</div>`);let _=`
            <div class="window-header">
                <i class="bx ${y}"></i>
                ${W}
                ${L}
                <i class="bx bx-x window-close"></i>
            </div>
        `;s.innerHTML=_+N,u.appendChild(s);let B=s.querySelector(".window-close");B&&B.addEventListener("click",U=>{U.stopPropagation(),b()}),t.tabs&&t.tabs.length>0&&s.querySelectorAll(".tab").forEach(D=>{D.addEventListener("click",()=>{let m=D.getAttribute("data-tab-index");s.querySelectorAll(".tab").forEach(I=>I.classList.remove("active")),D.classList.add("active"),s.querySelectorAll(".tab-content").forEach(I=>I.classList.remove("active")),s.querySelector(`.tab-content[data-tab-content="${m}"]`).classList.add("active")})}),setTimeout(()=>{s.classList.add("open"),v&&v()},10)}function b(u=!1){s&&(u?(s.classList.add("switching"),s.classList.remove("open"),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},200)):(s.classList.remove("open"),d&&d(),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},400)))}function $(u){if(s){let y=s.querySelector(".window-content");y&&(y.innerHTML=u)}}function S(){return s&&s.classList.contains("open")}return{open:f,close:b,setContent:$,isOpen:S,id:t.id}}var X="easter_user_email";function oe(){return localStorage.getItem(X)!==null}function Q(){return localStorage.getItem(X)}function re(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(X,t.trim())}var le="easter_theme",T={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ee(){return localStorage.getItem(le)||T.AUTO}function me(){let t=window.innerWidth,s=window.innerHeight,d=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&s>1080?T.ANIMATED:(t===1920&&s===1080&&d||t<=1920||s<=1080,T.DEFAULT)}function ce(t){if(!Object.values(T).includes(t))throw new Error("Invalid theme");localStorage.setItem(le,t),Z(t)}function Z(t,s=!1){let d=document.body,v=t===T.AUTO?me():t;if(s||(d.classList.add("theme-transitioning"),setTimeout(()=>{d.classList.remove("theme-transitioning")},300)),Object.values(T).forEach(f=>{d.classList.remove(`theme-${f}`)}),d.classList.add(`theme-${t}`),v===T.ANIMATED){if(!document.querySelector(".background")){let f=document.createElement("div");f.className="background",document.body.prepend(f)}}else{let f=document.querySelector(".background");f&&(s?f.remove():(f.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{f.remove()},400)))}}function de(){let t=ee();if(Z(t,!0),t===T.AUTO){let s;window.addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(()=>{Z(T.AUTO)},300)})}}function z(t,s,d=null){let f={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",b=d?`<p class="placeholder-action">${d}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${f} placeholder-icon'></i>
            <p class="placeholder-message">${s}</p>
            ${b}
        </div>
    `}function pe(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function V(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let s=localStorage.getItem("service_map");if(!s)return t.classList.add("placeholder-active"),t.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let d;try{d=JSON.parse(s)}catch($){return console.error("Error parsing service_map from localStorage:",$),t.classList.add("placeholder-active"),t.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let v=null;if(d&&typeof d.services=="object"){let $=["cs","be","th"];for(let S of $)if(Array.isArray(d.services[S])){let u=d.services[S].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(u){v=u;break}}}if(!v)return t.classList.add("placeholder-active"),t.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let b=`http://${v.domain==="0.0.0.0"?"localhost":v.domain}:${v.port}/logs`;try{let $=await fetch(b);if(!$.ok)return t.classList.add("placeholder-active"),t.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let S=await $.json();if(!S||S.length===0)return t.classList.add("placeholder-active"),t.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let u=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=S.filter(L=>!u.includes(L.id));y.forEach(L=>{L.logs.reverse()}),y.reverse();let W=y.map(L=>{let N=L.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${L.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(N)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${N}</pre>
                </div>
            `}).join("");return t.innerHTML=W,document.querySelectorAll(".copy-logs-btn").forEach(L=>{L.addEventListener("click",()=>{let N=unescape(L.dataset.logs);navigator.clipboard.writeText(N).then(()=>{let _=L.querySelector("i");_.classList.remove("bx-copy"),_.classList.add("bx-check"),setTimeout(()=>{_.classList.remove("bx-check"),_.classList.add("bx-copy")},2e3)})})}),!0}catch($){return console.error("Error fetching logs:",$),t.classList.add("placeholder-active"),t.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function ue(){console.log("Welcome to Easter Company."),de(),ne();let t=oe();ie(t),ae();let s=document.querySelector("footer"),d=null;function v(){d=null,s?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(n=>n.classList.remove("active","inactive"))}function f(n,o=null){let a=d&&d.id===n.id;d&&d.close(!a),a?d=null:setTimeout(()=>{n.open(),d=n,document.querySelectorAll(".nav-right i").forEach(c=>{let p=c===o;c.classList.toggle("active",p),c.classList.toggle("inactive",!p&&o)}),s?.classList.add("hide")},d?220:0)}function b(n,o,a=null){let p={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[n]||"bx-info-circle",g=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${p} placeholder-icon'></i><p class="placeholder-message">${o}</p>${g}</div>`}let $=null,S=null,u=null,y=null,W=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),L=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),N=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>';async function _(){if(!localStorage.getItem("service_map"))return null;try{let o=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(g=>g.id==="dex-event-service");if(!o)return null;let c=`http://${o.domain==="0.0.0.0"?"localhost":o.domain}:${o.port}/system_monitor_metrics`,p=await fetch(c);if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);return await p.json()}catch(n){return console.error("Error fetching system data:",n),null}}async function B(){let n=document.getElementById("services-widgets");if(!n)return;let o=await _();if(!o||!o.services){n.innerHTML=b("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}$=Date.now(),m(4,$);let a=o.services||[];Array.from(n.children).forEach(e=>{e.classList.contains("service-widget")||e.remove()});function c(e){return!e||e==="N/A"||e==="unknown"||e.trim()===""?"-":e}function p(e){if(!e||e==="N/A"||e==="unknown")return"-";let i=e.match(/^(\d+\.\d+\.\d+)/);return i?i[0]:e.split(".").slice(0,3).join(".")||"-"}function g(e){return!e||e.length<=28?e:e.substring(0,28)+"..."}function l(e){if(!e||!e.includes("%"))return"#666";let i=parseFloat(e);return i<30?"#00ff00":i<60?"#88ff00":i<80?"#ffaa00":"#ff0000"}function r(e){if(!e||e==="N/A"||e==="unknown")return"-";let i=e.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!i)return"-";let w=parseInt(i[1])||0,M=parseInt(i[2])||0,F=parseInt(i[3])||0,E=parseFloat(i[4])||0,k=w*86400+M*3600+F*60+E,O=Math.floor(k/86400);if(O>0)return`${O}d`;let C=Math.floor(k/3600);if(C>0)return`${C}h`;let H=Math.floor(k/60);return H>0?`${H}m`:`${Math.floor(k)}s`}function x(e){let i=e.status==="online",w=i?"service-widget-online":"service-widget-offline",M=i?"bx-check-circle":"bx-x-circle",F=i?"OK":"BAD",E=e.version?p(e.version.str):"-",k=c(e.cpu),O=c(e.memory),C=l(k),H=l(O),J=r(e.uptime),A="";return i?A=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${E}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${J}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${C};"></i><span style="color: ${C};">${k}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${H};"></i><span style="color: ${H};">${O}</span></div></div>`:A='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${w}" data-service-id="${e.id}"><div class="service-widget-header"><i class="bx ${M}"></i><h3>${e.short_name||e.id}</h3><span class="service-widget-status">${F}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${g(e.domain&&e.port?`${e.domain}:${e.port}`:"")}</span></div>${A}</div></div>`}let j=new Map(Array.from(n.querySelectorAll(".service-widget")).map(e=>[e.dataset.serviceId,e])),h=new Set(a.map(e=>e.id));for(let[e,i]of j)h.has(e)||i.remove();a.forEach(e=>{let i=x(e),w=j.get(e.id);w?w.outerHTML!==i&&(w.outerHTML=i):n.insertAdjacentHTML("beforeend",i)})}async function U(){let n=document.getElementById("models-widgets");if(!n)return;let o=await _();if(!o){n.innerHTML=b("offline","Failed to load model status.");return}y=Date.now(),m(3,y);let a=o.models||[],c=o.whisper;Array.from(n.children).forEach(r=>{r.classList.contains("service-widget")||r.remove()});function p(r){let x=r.status==="Ready";return`
                <div class="service-widget ${x?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${x?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${r.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function g(r){let x=r.status==="Downloaded",j=x?"service-widget-online":"service-widget-offline",h=x?"OK":"MISSING",e=x&&r.size>0?`${(r.size/1e9).toFixed(2)} GB`:"-",i=r.name;return r.type==="custom"&&i.endsWith(":latest")&&(i=i.replace(":latest","")),`<div class="service-widget ${j}" data-model-name="${r.name}"><div class="service-widget-header"><i class="bx ${x?"bx-check-circle":"bx-x-circle"}"></i><h3>${i}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${r.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${e}</span></div></div></div>`}let l="";if(c&&(l+=p(c)),l+=a.map(g).join(""),!l){n.innerHTML=b("empty","No models found.");return}n.innerHTML!==l&&(n.innerHTML=l)}async function D(){let n=document.getElementById("events-timeline");if(!n)return;let o=localStorage.getItem("service_map");if(!o){n.innerHTML=b("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(o).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{n.innerHTML=b("error","Invalid service map data.");return}if(!a){n.innerHTML=b("error","Event service not found in service map.");return}let p=`http://${a.domain==="0.0.0.0"?"localhost":a.domain}:${a.port}/events?ml=50&format=json`;try{let g=new Set(Array.from(n.querySelectorAll(".event-item.expanded")).map(h=>h.dataset.eventId).filter(h=>h)),l=await fetch(p);if(!l.ok)throw new Error("Service is offline or unreachable.");let x=(await l.json()).events||[];if(x.length===0){n.innerHTML=b("empty","No events found.");return}let j=x.map(h=>{let e=h.event;if(typeof e=="string")try{e=JSON.parse(e)}catch{return""}let i=e.type,w=i==="engagement.decision",M=w?"event-border-blue":"event-border-grey",F=w?"cursor-pointer":"",E=g.has(h.id),k=E?"expanded":"",O=E?"display: block;":"display: none;",C=new Date(h.timestamp*1e3),H=C.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),J=C.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=`${i}`;i==="message_received"||i==="messaging.user.sent_message"?A=`${e.user_name||e.user} in ${e.channel_name||e.channel}: ${e.content||e.message}`:i==="engagement.decision"?A=`Engagement Decision: ${e.decision} (${e.reason})`:i==="bot_response"?A=`Bot Responded: ${e.response}`:(i==="voice_transcribed"||i==="messaging.user.transcribed")&&(A=`${e.user_name||e.user_id} said: ${e.transcription}`);let se="";return w&&(se=`
                        <div class="event-details" style="${O}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${e.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${e.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${e.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${e.engagement_raw||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${e.response_raw||"None"}</pre>
                            </div>
                        </div>
                    `),`
                    <div class="event-item ${M} ${F} ${k}" data-event-id="${h.id}" onclick="this.classList.toggle('expanded'); const details = this.querySelector('.event-details'); if(details) details.style.display = details.style.display === 'none' ? 'block' : 'none';">
                        <div class="event-time">
                            <span class="event-time-main">${H}</span>
                            <span class="event-date">${J}</span>
                        </div>
                        <div class="event-content">
                            <div class="event-service">${h.service}</div>
                            <div class="event-message">${A}</div>
                            ${se}
                        </div>
                    </div>
                `}).join("");n.innerHTML=j,S=Date.now(),m(1,S),document.querySelectorAll(".close-details-btn").forEach(h=>{h.addEventListener("click",e=>{e.stopPropagation();let i=e.target.closest(".event-item");if(i){i.classList.remove("expanded");let w=i.querySelector(".event-details");w&&(w.style.display="none")}})})}catch(g){console.error("Error fetching events:",g),n.innerHTML=b("offline","Failed to load events.","The event service may be offline or unreachable.")}}function m(n,o){let a=document.querySelector(`.tab[data-tab-index="${n}"] .tab-subtitle`);if(!a)return;if(!o){a.textContent="Last updated: never";return}let p=(Date.now()-o)/1e3,g;if(p<30)g=`${Math.floor(p)}s ago`;else{a.textContent="Last updated: never";return}a.textContent=`Last updated: ${g}`}let I=Y({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:v}),P=Y({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${Q()||"Unknown"}</p>`,icon:"bx-user",onClose:v});function R(){let n=ee(),o=Q()||"user@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},c=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(T).map(p=>`
                    <div class="theme-card ${n===p?"active":""}" data-theme="${p}">
                        <div class="theme-preview theme-preview-${p.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${p}</h3>
                            <p>${p===T.AUTO?"Automatic theme selection.":p===T.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${n===p?"Active":"Select"}</span>
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
                            <span class="settings-item-description">${a.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${a.enabled?"checked":""} ${a.supported?"":"disabled"}>
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
            </div>`}function K(){let n=document.querySelector("#settings-window .window-content");if(!n)return;n.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let r=this.dataset.theme;ce(r),G.setContent(R()),K()})});function o(l,r,x,j,h,e,i){let w=document.getElementById(l),M=document.getElementById(r),F=document.getElementById(x),E=document.getElementById(j),k=document.getElementById(h);w&&M&&(w.onclick=()=>M.click(),M.onchange=O=>{let C=O.target.files[0];if(!C)return;if(C.name!==i){E.textContent=`File must be named "${i}"`,E.style.display="block",M.value="";return}let H=new FileReader;H.onload=J=>{try{let A=JSON.parse(J.target.result);localStorage.setItem(e,JSON.stringify(A)),F.textContent=i,E.style.display="none",G.setContent(R()),K()}catch{E.textContent="Invalid JSON format",E.style.display="block",M.value=""}},H.onerror=()=>{E.textContent="Failed to read file",E.style.display="block",M.value=""},H.readAsText(C)}),k&&(k.onclick=()=>{localStorage.removeItem(e),G.setContent(R()),K()})}o("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),o("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),o("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let a=document.getElementById("notifications-toggle");if(a){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(a.disabled=!0),a.onclick=async r=>{if(r.target.checked)try{await Notification.requestPermission()!=="granted"&&(r.target.checked=!1)}catch{r.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),r.target.checked=!0)}}let c=document.getElementById("microphone-toggle");async function p(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;c&&(c.disabled=!l||l.state==="denied",c.checked=l?.state==="granted");let r=document.querySelector("#microphone-setting-item .settings-item-description");r&&(r.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}p(),c&&!c.disabled&&(c.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),p()}catch{l.target.checked=!1,p()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let g=document.getElementById("analytics-toggle");g&&(g.checked=localStorage.getItem("easter_analytics_enabled")!=="false",g.onclick=l=>{let r=l.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}let G=Y({id:"settings-window",title:"Settings",content:R(),icon:"bx-cog",onClose:v,onOpen:()=>{G.setContent(R()),setTimeout(K,50)}}),q=Y({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:b("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:N(),"data-tab-index":1},{icon:"bx-history",title:"Logs",content:pe(),"data-tab-index":2},{icon:"bx-brain",title:"Models",content:L(),"data-tab-index":3},{icon:"bx-line-chart",title:"Services",content:W(),"data-tab-index":4}],icon:"bxs-message-dots",onClose:v,onOpen:()=>setTimeout(te,100)});async function te(){await Promise.all([B(),U(),D(),V().then(c=>{c&&(u=Date.now()),m(2,u)})]);let n=setInterval(()=>{if(!q.isOpen())return clearInterval(n);m(2,u),m(1,S),m(3,y),m(4,$)},1e3),o=setInterval(()=>{if(!q.isOpen())return clearInterval(o);D(),V().then(c=>{c&&(u=Date.now()),m(2,u)})},5e3),a=setInterval(()=>{if(!q.isOpen())return clearInterval(a);B(),U()},3e4)}t?(document.getElementById("user-icon")?.addEventListener("click",n=>f(P,n.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",n=>f(q,n.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",n=>f(G,n.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{f(I),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{re(document.getElementById("email-input").value),window.location.reload()}catch(o){let a=document.getElementById("login-error");a&&(a.textContent=o.message,a.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ue):ue();})();
//# sourceMappingURL=dex.62702111.js.map
