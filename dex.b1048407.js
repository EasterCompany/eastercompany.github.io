(()=>{function se(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ne(t=!1){let d=`
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
    `,g=document.createElement("nav");g.innerHTML=d,document.body.prepend(g)}function ie(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,s=document.createElement("footer");s.innerHTML=t,document.body.appendChild(s)}function J(t){let s=null,d=t.onClose||null,g=t.onOpen||null;function b(){if(s){s.classList.add("open"),g&&setTimeout(g,10);return}let m=document.getElementById("windows-container");m||(m=document.createElement("div"),m.id="windows-container",m.className="windows-container",document.body.appendChild(m)),s=document.createElement("div"),s.id=t.id,s.className="window";let y=t.icon||"bx-window",F="",x="",N;t.tabs&&t.tabs.length>0?(F=`<div class="tab-bar">${t.tabs.map((v,M)=>{let W;return v.icon?W=`<i class="bx ${v.icon}"></i>`:v.title&&v.title.length>0?W=`<span class="tab-glyph">${v.title.charAt(0).toUpperCase()}</span>`:W='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${M===0?"active":""}" data-tab-index="${M}">
                        ${W}
                        <span class="tab-title">${v.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${M}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,N=`<div class="window-content">${t.tabs.map((v,M)=>`<div class="tab-content ${M===0?"active":""}" data-tab-content="${M}">${v.content}</div>`).join("")}</div>`):(t.title&&(x=`<div class="window-title">${t.title}</div>`),N=`<div class="window-content">${t.content}</div>`);let D=`
            <div class="window-header">
                <i class="bx ${y}"></i>
                ${F}
                ${x}
                <i class="bx bx-x window-close"></i>
            </div>
        `;s.innerHTML=D+N,m.appendChild(s);let B=s.querySelector(".window-close");B&&B.addEventListener("click",O=>{O.stopPropagation(),h()}),t.tabs&&t.tabs.length>0&&s.querySelectorAll(".tab").forEach(j=>{j.addEventListener("click",()=>{let v=j.getAttribute("data-tab-index");s.querySelectorAll(".tab").forEach(M=>M.classList.remove("active")),j.classList.add("active"),s.querySelectorAll(".tab-content").forEach(M=>M.classList.remove("active")),s.querySelector(`.tab-content[data-tab-content="${v}"]`).classList.add("active")})}),setTimeout(()=>{s.classList.add("open"),g&&g()},10)}function h(m=!1){s&&(m?(s.classList.add("switching"),s.classList.remove("open"),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},200)):(s.classList.remove("open"),d&&d(),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},400)))}function w(m){if(s){let y=s.querySelector(".window-content");y&&(y.innerHTML=m)}}function E(){return s&&s.classList.contains("open")}return{open:b,close:h,setContent:w,isOpen:E,id:t.id}}var X="easter_user_email";function ae(){return localStorage.getItem(X)!==null}function Q(){return localStorage.getItem(X)}function oe(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(X,t.trim())}var re="easter_theme",L={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ee(){return localStorage.getItem(re)||L.AUTO}function ue(){let t=window.innerWidth,s=window.innerHeight,d=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&s>1080?L.ANIMATED:(t===1920&&s===1080&&d||t<=1920||s<=1080,L.DEFAULT)}function le(t){if(!Object.values(L).includes(t))throw new Error("Invalid theme");localStorage.setItem(re,t),Z(t)}function Z(t,s=!1){let d=document.body,g=t===L.AUTO?ue():t;if(s||(d.classList.add("theme-transitioning"),setTimeout(()=>{d.classList.remove("theme-transitioning")},300)),Object.values(L).forEach(b=>{d.classList.remove(`theme-${b}`)}),d.classList.add(`theme-${t}`),g===L.ANIMATED){if(!document.querySelector(".background")){let b=document.createElement("div");b.className="background",document.body.prepend(b)}}else{let b=document.querySelector(".background");b&&(s?b.remove():(b.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{b.remove()},400)))}}function ce(){let t=ee();if(Z(t,!0),t===L.AUTO){let s;window.addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(()=>{Z(L.AUTO)},300)})}}function z(t,s,d=null){let b={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",h=d?`<p class="placeholder-action">${d}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${b} placeholder-icon'></i>
            <p class="placeholder-message">${s}</p>
            ${h}
        </div>
    `}function de(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function Y(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let s=localStorage.getItem("service_map");if(!s)return t.classList.add("placeholder-active"),t.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let d;try{d=JSON.parse(s)}catch(w){return console.error("Error parsing service_map from localStorage:",w),t.classList.add("placeholder-active"),t.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let g=null;if(d&&typeof d.services=="object"){let w=["cs","be","th"];for(let E of w)if(Array.isArray(d.services[E])){let m=d.services[E].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(m){g=m;break}}}if(!g)return t.classList.add("placeholder-active"),t.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let h=`http://${g.domain==="0.0.0.0"?"localhost":g.domain}:${g.port}/logs`;try{let w=await fetch(h);if(!w.ok)return t.classList.add("placeholder-active"),t.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let E=await w.json();if(!E||E.length===0)return t.classList.add("placeholder-active"),t.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let m=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=E.filter(x=>!m.includes(x.id));y.forEach(x=>{x.logs.reverse()}),y.reverse();let F=y.map(x=>{let N=x.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${x.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(N)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${N}</pre>
                </div>
            `}).join("");return t.innerHTML=F,document.querySelectorAll(".copy-logs-btn").forEach(x=>{x.addEventListener("click",()=>{let N=unescape(x.dataset.logs);navigator.clipboard.writeText(N).then(()=>{let D=x.querySelector("i");D.classList.remove("bx-copy"),D.classList.add("bx-check"),setTimeout(()=>{D.classList.remove("bx-check"),D.classList.add("bx-copy")},2e3)})})}),!0}catch(w){return console.error("Error fetching logs:",w),t.classList.add("placeholder-active"),t.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function pe(){console.log("Welcome to Easter Company."),ce(),se();let t=ae();ne(t),ie();let s=document.querySelector("footer"),d=null;function g(){d=null,s?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(n=>n.classList.remove("active","inactive"))}function b(n,r=null){let a=d&&d.id===n.id;d&&d.close(!a),a?d=null:setTimeout(()=>{n.open(),d=n,document.querySelectorAll(".nav-right i").forEach(l=>{let p=l===r;l.classList.toggle("active",p),l.classList.toggle("inactive",!p&&r)}),s?.classList.add("hide")},d?220:0)}function h(n,r,a=null){let p={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[n]||"bx-info-circle",f=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${p} placeholder-icon'></i><p class="placeholder-message">${r}</p>${f}</div>`}let w=null,E=null,m=null,y=null,F=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),x=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),N=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>';async function D(){if(!localStorage.getItem("service_map"))return null;try{let r=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(f=>f.id==="dex-event-service");if(!r)return null;let l=`http://${r.domain==="0.0.0.0"?"localhost":r.domain}:${r.port}/system_monitor_metrics`,p=await fetch(l);if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);return await p.json()}catch(n){return console.error("Error fetching system data:",n),null}}async function B(){let n=document.getElementById("services-widgets");if(!n)return;let r=await D();if(!r||!r.services){n.innerHTML=h("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}w=Date.now(),v(4,w);let a=r.services||[];Array.from(n.children).forEach(e=>{e.classList.contains("service-widget")||e.remove()});function l(e){return!e||e==="N/A"||e==="unknown"||e.trim()===""?"-":e}function p(e){if(!e||e==="N/A"||e==="unknown")return"-";let i=e.match(/^(\d+\.\d+\.\d+)/);return i?i[0]:e.split(".").slice(0,3).join(".")||"-"}function f(e){return!e||e.length<=28?e:e.substring(0,28)+"..."}function c(e){if(!e||!e.includes("%"))return"#666";let i=parseFloat(e);return i<30?"#00ff00":i<60?"#88ff00":i<80?"#ffaa00":"#ff0000"}function o(e){if(!e||e==="N/A"||e==="unknown")return"-";let i=e.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!i)return"-";let k=parseInt(i[1])||0,C=parseInt(i[2])||0,U=parseInt(i[3])||0,S=parseFloat(i[4])||0,A=k*86400+C*3600+U*60+S,I=Math.floor(A/86400);if(I>0)return`${I}d`;let H=Math.floor(A/3600);if(H>0)return`${H}h`;let _=Math.floor(A/60);return _>0?`${_}m`:`${Math.floor(A)}s`}function $(e){let i=e.status==="online",k=i?"service-widget-online":"service-widget-offline",C=i?"bx-check-circle":"bx-x-circle",U=i?"OK":"BAD",S=e.version?p(e.version.str):"-",A=l(e.cpu),I=l(e.memory),H=c(A),_=c(I),K=o(e.uptime),R="";return i?R=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${S}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${K}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${H};"></i><span style="color: ${H};">${A}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${_};"></i><span style="color: ${_};">${I}</span></div></div>`:R='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${k}" data-service-id="${e.id}"><div class="service-widget-header"><i class="bx ${C}"></i><h3>${e.short_name||e.id}</h3><span class="service-widget-status">${U}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${f(e.domain&&e.port?`${e.domain}:${e.port}`:"")}</span></div>${R}</div></div>`}let T=new Map(Array.from(n.querySelectorAll(".service-widget")).map(e=>[e.dataset.serviceId,e])),u=new Set(a.map(e=>e.id));for(let[e,i]of T)u.has(e)||i.remove();a.forEach(e=>{let i=$(e),k=T.get(e.id);k?k.outerHTML!==i&&(k.outerHTML=i):n.insertAdjacentHTML("beforeend",i)})}async function O(){let n=document.getElementById("models-widgets");if(!n)return;let r=await D();if(!r){n.innerHTML=h("offline","Failed to load model status.");return}y=Date.now(),v(3,y);let a=r.models||[],l=r.whisper;Array.from(n.children).forEach(o=>{o.classList.contains("service-widget")||o.remove()});function p(o){let $=o.status==="Ready";return`
                <div class="service-widget ${$?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${$?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${o.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function f(o){let $=o.status==="Downloaded",T=$?"service-widget-online":"service-widget-offline",u=$?"OK":"MISSING",e=$&&o.size>0?`${(o.size/1e9).toFixed(2)} GB`:"-",i=o.name;return o.type==="custom"&&i.endsWith(":latest")&&(i=i.replace(":latest","")),`<div class="service-widget ${T}" data-model-name="${o.name}"><div class="service-widget-header"><i class="bx ${$?"bx-check-circle":"bx-x-circle"}"></i><h3>${i}</h3><span class="service-widget-status">${u}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${o.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${e}</span></div></div></div>`}let c="";if(l&&(c+=p(l)),c+=a.map(f).join(""),!c){n.innerHTML=h("empty","No models found.");return}n.innerHTML!==c&&(n.innerHTML=c)}async function j(){let n=document.getElementById("events-timeline");if(!n)return;let r=localStorage.getItem("service_map");if(!r){n.innerHTML=h("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(r).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{n.innerHTML=h("error","Invalid service map data.");return}if(!a){n.innerHTML=h("error","Event service not found in service map.");return}let p=`http://${a.domain==="0.0.0.0"?"localhost":a.domain}:${a.port}/events?ml=50&format=json`;try{let f=await fetch(p);if(!f.ok)throw new Error("Service is offline or unreachable.");let o=(await f.json()).events||[];if(o.length===0){n.innerHTML=h("empty","No events found.");return}let $=o.map(T=>{let u={};try{u=JSON.parse(T.event)}catch{return""}let e=u.type,i=e==="engagement.decision",k=i?"event-border-blue":"event-border-grey",C=i?"cursor-pointer":"",U=new Date(T.timestamp*1e3),S=U.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=U.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),I=`${e}`;e==="message_received"||e==="messaging.user.sent_message"?I=`${u.user_name||u.user} in ${u.channel_name||u.channel}: ${u.content||u.message}`:e==="engagement.decision"?I=`Engagement Decision: ${u.decision} (${u.reason})`:e==="bot_response"?I=`Bot Responded: ${u.response}`:(e==="voice_transcribed"||e==="messaging.user.transcribed")&&(I=`${u.user_name||u.user_id} said: ${u.transcription}`);let H="";return i&&(H=`
                        <div class="event-details" style="display: none;">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${u.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${u.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${u.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${u.engagement_raw||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${u.response_raw||"None"}</pre>
                            </div>
                        </div>
                    `),`
                    <div class="event-item ${k} ${C}" onclick="this.classList.toggle('expanded'); const details = this.querySelector('.event-details'); if(details) details.style.display = details.style.display === 'none' ? 'block' : 'none';">
                        <div class="event-time">
                            <span class="event-time-main">${S}</span>
                            <span class="event-date">${A}</span>
                        </div>
                        <div class="event-content">
                            <div class="event-service">${T.service}</div>
                            <div class="event-message">${I}</div>
                            ${H}
                        </div>
                    </div>
                `}).join("");n.innerHTML=$,E=Date.now(),v(1,E),document.querySelectorAll(".close-details-btn").forEach(T=>{T.addEventListener("click",u=>{u.stopPropagation();let e=u.target.closest(".event-item");if(e){e.classList.remove("expanded");let i=e.querySelector(".event-details");i&&(i.style.display="none")}})})}catch(f){console.error("Error fetching events:",f),n.innerHTML=h("offline","Failed to load events.","The event service may be offline or unreachable.")}}function v(n,r){let a=document.querySelector(`.tab[data-tab-index="${n}"] .tab-subtitle`);if(!a)return;if(!r){a.textContent="Last updated: never";return}let p=(Date.now()-r)/1e3,f;if(p<30)f=`${Math.floor(p)}s ago`;else{a.textContent="Last updated: never";return}a.textContent=`Last updated: ${f}`}let M=J({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:g}),W=J({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${Q()||"Unknown"}</p>`,icon:"bx-user",onClose:g});function P(){let n=ee(),r=Q()||"user@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},l=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(L).map(p=>`
                    <div class="theme-card ${n===p?"active":""}" data-theme="${p}">
                        <div class="theme-preview theme-preview-${p.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${p}</h3>
                            <p>${p===L.AUTO?"Automatic theme selection.":p===L.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${l?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function V(){let n=document.querySelector("#settings-window .window-content");if(!n)return;n.querySelectorAll(".theme-card").forEach(c=>{c.addEventListener("click",function(){let o=this.dataset.theme;le(o),G.setContent(P()),V()})});function r(c,o,$,T,u,e,i){let k=document.getElementById(c),C=document.getElementById(o),U=document.getElementById($),S=document.getElementById(T),A=document.getElementById(u);k&&C&&(k.onclick=()=>C.click(),C.onchange=I=>{let H=I.target.files[0];if(!H)return;if(H.name!==i){S.textContent=`File must be named "${i}"`,S.style.display="block",C.value="";return}let _=new FileReader;_.onload=K=>{try{let R=JSON.parse(K.target.result);localStorage.setItem(e,JSON.stringify(R)),U.textContent=i,S.style.display="none",G.setContent(P()),V()}catch{S.textContent="Invalid JSON format",S.style.display="block",C.value=""}},_.onerror=()=>{S.textContent="Failed to read file",S.style.display="block",C.value=""},_.readAsText(H)}),A&&(A.onclick=()=>{localStorage.removeItem(e),G.setContent(P()),V()})}r("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),r("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),r("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let a=document.getElementById("notifications-toggle");if(a){let c="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!c||c.state==="denied")&&(a.disabled=!0),a.onclick=async o=>{if(o.target.checked)try{await Notification.requestPermission()!=="granted"&&(o.target.checked=!1)}catch{o.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),o.target.checked=!0)}}let l=document.getElementById("microphone-toggle");async function p(){let c="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;l&&(l.disabled=!c||c.state==="denied",l.checked=c?.state==="granted");let o=document.querySelector("#microphone-setting-item .settings-item-description");o&&(o.textContent=c?c.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}p(),l&&!l.disabled&&(l.onclick=async c=>{if(c.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),p()}catch{c.target.checked=!1,p()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),c.target.checked=!0)});let f=document.getElementById("analytics-toggle");f&&(f.checked=localStorage.getItem("easter_analytics_enabled")!=="false",f.onclick=c=>{let o=c.target.checked;localStorage.setItem("easter_analytics_enabled",o),window.EASTER_ANALYTICS_ENABLED=o,window.EASTER_DEBUG_MODE=o})}let G=J({id:"settings-window",title:"Settings",content:P(),icon:"bx-cog",onClose:g,onOpen:()=>{G.setContent(P()),setTimeout(V,50)}}),q=J({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:h("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:N(),"data-tab-index":1},{icon:"bx-history",title:"Logs",content:de(),"data-tab-index":2},{icon:"bx-brain",title:"Models",content:x(),"data-tab-index":3},{icon:"bx-line-chart",title:"Services",content:F(),"data-tab-index":4}],icon:"bxs-message-dots",onClose:g,onOpen:()=>setTimeout(te,100)});async function te(){await Promise.all([B(),O(),j(),Y().then(l=>{l&&(m=Date.now()),v(2,m)})]);let n=setInterval(()=>{if(!q.isOpen())return clearInterval(n);v(2,m),v(1,E),v(3,y),v(4,w)},1e3),r=setInterval(()=>{if(!q.isOpen())return clearInterval(r);j(),Y().then(l=>{l&&(m=Date.now()),v(2,m)})},5e3),a=setInterval(()=>{if(!q.isOpen())return clearInterval(a);B(),O()},3e4)}t?(document.getElementById("user-icon")?.addEventListener("click",n=>b(W,n.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",n=>b(q,n.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",n=>b(G,n.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{b(M),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{oe(document.getElementById("email-input").value),window.location.reload()}catch(r){let a=document.getElementById("login-error");a&&(a.textContent=r.message,a.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",pe):pe();})();
//# sourceMappingURL=dex.b1048407.js.map
