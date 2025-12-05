(()=>{function ce(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function de(t=!1){let d=`
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
    `,g=document.createElement("nav");g.innerHTML=d,document.body.prepend(g)}function pe(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,s=document.createElement("footer");s.innerHTML=t,document.body.appendChild(s)}function K(t){let s=null,d=t.onClose||null,g=t.onOpen||null;function h(){if(s){s.classList.add("open"),g&&setTimeout(g,10);return}let f=document.getElementById("windows-container");f||(f=document.createElement("div"),f.id="windows-container",f.className="windows-container",document.body.appendChild(f)),s=document.createElement("div"),s.id=t.id,s.className="window";let x=t.icon||"bx-window",B="",L="",N;t.tabs&&t.tabs.length>0?(B=`<div class="tab-bar">${t.tabs.map((M,C)=>{let F;return M.icon?F=`<i class="bx ${M.icon}"></i>`:M.title&&M.title.length>0?F=`<span class="tab-glyph">${M.title.charAt(0).toUpperCase()}</span>`:F='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${C===0?"active":""}" data-tab-index="${C}">
                        ${F}
                        <span class="tab-title">${M.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${C}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,N=`<div class="window-content">${t.tabs.map((M,C)=>`<div class="tab-content ${C===0?"active":""}" data-tab-content="${C}">${M.content}</div>`).join("")}</div>`):(t.title&&(L=`<div class="window-title">${t.title}</div>`),N=`<div class="window-content">${t.content}</div>`);let $=`
            <div class="window-header">
                <i class="bx ${x}"></i>
                ${B}
                ${L}
                <i class="bx bx-x window-close"></i>
            </div>
        `;s.innerHTML=$+N,f.appendChild(s);let G=s.querySelector(".window-close");G&&G.addEventListener("click",q=>{q.stopPropagation(),y()}),t.tabs&&t.tabs.length>0&&s.querySelectorAll(".tab").forEach(U=>{U.addEventListener("click",()=>{let M=U.getAttribute("data-tab-index");s.querySelectorAll(".tab").forEach(C=>C.classList.remove("active")),U.classList.add("active"),s.querySelectorAll(".tab-content").forEach(C=>C.classList.remove("active")),s.querySelector(`.tab-content[data-tab-content="${M}"]`).classList.add("active")})}),setTimeout(()=>{s.classList.add("open"),g&&g()},10)}function y(f=!1){s&&(f?(s.classList.add("switching"),s.classList.remove("open"),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},200)):(s.classList.remove("open"),d&&d(),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},400)))}function S(f){if(s){let x=s.querySelector(".window-content");x&&(x.innerHTML=f)}}function k(){return s&&s.classList.contains("open")}return{open:h,close:y,setContent:S,isOpen:k,id:t.id}}var te="easter_user_email";function ue(){return localStorage.getItem(te)!==null}function ne(){return localStorage.getItem(te)}function me(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(te,t.trim())}var ve="easter_theme",I={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ie(){return localStorage.getItem(ve)||I.AUTO}function $e(){let t=window.innerWidth,s=window.innerHeight,d=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&s>1080?I.ANIMATED:(t===1920&&s===1080&&d||t<=1920||s<=1080,I.DEFAULT)}function ge(t){if(!Object.values(I).includes(t))throw new Error("Invalid theme");localStorage.setItem(ve,t),se(t)}function se(t,s=!1){let d=document.body,g=t===I.AUTO?$e():t;if(s||(d.classList.add("theme-transitioning"),setTimeout(()=>{d.classList.remove("theme-transitioning")},300)),Object.values(I).forEach(h=>{d.classList.remove(`theme-${h}`)}),d.classList.add(`theme-${t}`),g===I.ANIMATED){if(!document.querySelector(".background")){let h=document.createElement("div");h.className="background",document.body.prepend(h)}}else{let h=document.querySelector(".background");h&&(s?h.remove():(h.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{h.remove()},400)))}}function fe(){let t=ie();if(se(t,!0),t===I.AUTO){let s;window.addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(()=>{se(I.AUTO)},300)})}}function z(t,s,d=null){let h={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",y=d?`<p class="placeholder-action">${d}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${h} placeholder-icon'></i>
            <p class="placeholder-message">${s}</p>
            ${y}
        </div>
    `}function be(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function ae(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let s=localStorage.getItem("service_map");if(!s)return t.classList.add("placeholder-active"),t.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let d;try{d=JSON.parse(s)}catch(S){return console.error("Error parsing service_map from localStorage:",S),t.classList.add("placeholder-active"),t.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let g=null;if(d&&typeof d.services=="object"){let S=["cs","be","th"];for(let k of S)if(Array.isArray(d.services[k])){let f=d.services[k].find(x=>x.short_name==="event"||x.id==="event"||x.id==="dex-event-service");if(f){g=f;break}}}if(!g)return t.classList.add("placeholder-active"),t.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let y=`http://${g.domain==="0.0.0.0"?"localhost":g.domain}:${g.port}/logs`;try{let S=await fetch(y);if(!S.ok)return t.classList.add("placeholder-active"),t.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let k=await S.json();if(!k||k.length===0)return t.classList.add("placeholder-active"),t.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let f=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],x=k.filter(L=>!f.includes(L.id));x.forEach(L=>{L.logs.reverse()}),x.reverse();let B=x.map(L=>{let N=L.logs.join(`
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
            `}).join("");return t.innerHTML=B,document.querySelectorAll(".copy-logs-btn").forEach(L=>{L.addEventListener("click",()=>{let N=unescape(L.dataset.logs);navigator.clipboard.writeText(N).then(()=>{let $=L.querySelector("i");$.classList.remove("bx-copy"),$.classList.add("bx-check"),setTimeout(()=>{$.classList.remove("bx-check"),$.classList.add("bx-copy")},2e3)})})}),!0}catch(S){return console.error("Error fetching logs:",S),t.classList.add("placeholder-active"),t.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function he(){console.log("Welcome to Easter Company."),fe(),ce();let t=ue();de(t),pe();let s=document.querySelector("footer"),d=null;function g(){d=null,s?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(n=>n.classList.remove("active","inactive"))}function h(n,r=null){let i=d&&d.id===n.id;d&&d.close(!i),i?d=null:setTimeout(()=>{n.open(),d=n,document.querySelectorAll(".nav-right i").forEach(v=>{let p=v===r;v.classList.toggle("active",p),v.classList.toggle("inactive",!p&&r)}),s?.classList.add("hide")},d?220:0)}function y(n,r,i=null){let p={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[n]||"bx-info-circle",b=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${p} placeholder-icon'></i><p class="placeholder-message">${r}</p>${b}</div>`}let S=null,k=null,f=null,x=null,B=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),L=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),N=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>';function $(n,r){let i=document.querySelector(`.tab[data-tab-index="${n}"] .tab-subtitle`);if(!i)return;if(!r){i.textContent="Last updated: never";return}let p=(Date.now()-r)/1e3,b;if(p<30)b=`${Math.floor(p)}s ago`;else{i.textContent="Last updated: never";return}i.textContent=`Last updated: ${b}`}async function G(){if(!localStorage.getItem("service_map"))return null;try{let r=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(b=>b.id==="dex-event-service");if(!r)return null;let v=`http://${r.domain==="0.0.0.0"?"localhost":r.domain}:${r.port}/system_monitor_metrics`,p=await fetch(v);if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);return await p.json()}catch(n){return console.error("Error fetching system data:",n),null}}async function q(){let n=document.getElementById("services-widgets");if(!n)return;let r=await G();if(!r||!r.services){n.innerHTML=y("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}S=Date.now(),$(4,S);let i=r.services||[];Array.from(n.children).forEach(e=>{e.classList.contains("service-widget")||e.remove()});function v(e){return!e||e==="N/A"||e==="unknown"||e.trim()===""?"-":e}function p(e){if(!e||e==="N/A"||e==="unknown")return"-";let o=e.match(/^(\d+\.\d+\.\d+)/);return o?o[0]:e.split(".").slice(0,3).join(".")||"-"}function b(e){return!e||e.length<=28?e:e.substring(0,28)+"..."}function l(e){if(!e||!e.includes("%"))return"#666";let o=parseFloat(e);return o<30?"#00ff00":o<60?"#88ff00":o<80?"#ffaa00":"#ff0000"}function a(e){if(!e||e==="N/A"||e==="unknown")return"-";let o=e.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!o)return"-";let T=parseInt(o[1])||0,c=parseInt(o[2])||0,u=parseInt(o[3])||0,m=parseFloat(o[4])||0,E=T*86400+c*3600+u*60+m,j=Math.floor(E/86400);if(j>0)return`${j}d`;let H=Math.floor(E/3600);if(H>0)return`${H}h`;let A=Math.floor(E/60);return A>0?`${A}m`:`${Math.floor(E)}s`}function w(e){let o=e.status==="online",T=o?"service-widget-online":"service-widget-offline",c=o?"bx-check-circle":"bx-x-circle",u=o?"OK":"BAD",m=e.version?p(e.version.str):"-",E=v(e.cpu),j=v(e.memory),H=l(E),A=l(j),Y=a(e.uptime),O="";return o?O=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${m}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${Y}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${H};"></i><span style="color: ${H};">${E}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${A};"></i><span style="color: ${A};">${j}</span></div></div>`:O='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${T}" data-service-id="${e.id}"><div class="service-widget-header"><i class="bx ${c}"></i><h3>${e.short_name||e.id}</h3><span class="service-widget-status">${u}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${b(e.domain&&e.port?`${e.domain}:${e.port}`:"")}</span></div>${O}</div></div>`}let _=new Map(Array.from(n.querySelectorAll(".service-widget")).map(e=>[e.dataset.serviceId,e])),D=new Set(i.map(e=>e.id));for(let[e,o]of _)D.has(e)||o.remove();i.forEach(e=>{let o=w(e),T=_.get(e.id);T?T.outerHTML!==o&&(T.outerHTML=o):n.insertAdjacentHTML("beforeend",o)})}async function U(){let n=document.getElementById("models-widgets");if(!n)return;let r=await G();if(!r){n.innerHTML=y("offline","Failed to load model status.");return}x=Date.now(),$(3,x);let i=r.models||[],v=r.whisper;Array.from(n.children).forEach(a=>{a.classList.contains("service-widget")||a.remove()});function p(a){let w=a.status==="Ready";return`
                <div class="service-widget ${w?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${w?"READY":"NOT FOUND"}</span>
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
                </div>`}function b(a){let w=a.status==="Downloaded",_=w?"service-widget-online":"service-widget-offline",D=w?"OK":"MISSING",e=w&&a.size>0?`${(a.size/1e9).toFixed(2)} GB`:"-",o=a.name;return a.type==="custom"&&o.endsWith(":latest")&&(o=o.replace(":latest","")),`<div class="service-widget ${_}" data-model-name="${a.name}"><div class="service-widget-header"><i class="bx ${w?"bx-check-circle":"bx-x-circle"}"></i><h3>${o}</h3><span class="service-widget-status">${D}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${a.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${e}</span></div></div></div>`}let l="";if(v&&(l+=p(v)),l+=i.map(b).join(""),!l){n.innerHTML=y("empty","No models found.");return}n.innerHTML!==l&&(n.innerHTML=l)}async function M(){let n=document.getElementById("events-timeline");if(!n)return;let r=localStorage.getItem("service_map");if(!r){n.innerHTML=y("config","No service map configured.","Upload service-map.json in Settings.");return}let i=null;try{i=(JSON.parse(r).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{n.innerHTML=y("error","Invalid service map data.");return}if(!i){n.innerHTML=y("error","Event service not found in service map.");return}let p=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/events?ml=50&format=json`;try{let b=new Set(Array.from(n.querySelectorAll(".event-item.expanded")).map(c=>c.dataset.eventId).filter(c=>c)),l=await fetch(p);if(!l.ok)throw new Error("Service is offline or unreachable.");let w=(await l.json()).events||[];if(n.querySelector(".tab-placeholder")&&(n.innerHTML=""),w.length===0&&n.children.length===0){n.innerHTML=y("empty","No events found.");return}let _=c=>{let u=c.event;if(typeof u=="string")try{u=JSON.parse(u)}catch{return null}let m=u.type,E=m==="engagement.decision",j=E?"event-border-blue":"event-border-grey",H=E?"cursor-pointer":"",A=b.has(c.id),Y=A?"expanded":"",O=A?"display: block;":"display: none;",oe=new Date(c.timestamp*1e3),we=oe.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),xe=oe.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),V=`${m}`;m==="message_received"||m==="messaging.user.sent_message"?V=`${u.user_name||u.user} in ${u.channel_name||u.channel}: ${u.content||u.message}`:m==="engagement.decision"?V=`Engagement Decision: ${u.decision} (${u.reason})`:m==="bot_response"?V=`Bot Responded: ${u.response}`:(m==="voice_transcribed"||m==="messaging.user.transcribed")&&(V=`${u.user_name||u.user_id} said: ${u.transcription}`);let re="";E&&(re=`
                        <div class="event-details" style="${O}">
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
                    `);let P=document.createElement("div");if(P.className=`event-item ${j} ${H} ${Y}`,P.dataset.eventId=c.id,P.onclick=function(Z){if(!E)return;this.classList.toggle("expanded");let R=this.querySelector(".event-details");R&&(R.style.display=R.style.display==="none"?"block":"none")},P.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${we}</span>
                        <span class="event-date">${xe}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${c.service}</div>
                        <div class="event-message">${V}</div>
                        ${re}
                    </div>
                `,E){let Z=P.querySelector(".close-details-btn");Z&&Z.addEventListener("click",R=>{R.stopPropagation();let ee=R.target.closest(".event-item");if(ee){ee.classList.remove("expanded");let le=ee.querySelector(".event-details");le&&(le.style.display="none")}})}return P},D=Array.from(n.children),e=new Map(D.map(c=>[c.dataset.eventId,c])),o=new Set(w.map(c=>c.id));D.forEach(c=>{c.dataset.eventId&&!o.has(c.dataset.eventId)&&c.remove()});let T=null;w.forEach((c,u)=>{let m=e.get(c.id);!m&&(m=_(c),!m)||(u===0?n.firstElementChild!==m&&n.prepend(m):T&&T.nextElementSibling!==m&&T.after(m),T=m)}),k=Date.now(),$(1,k)}catch(b){console.error("Error fetching events:",b),n.children.length===0&&(n.innerHTML=y("offline","Failed to load events.","The event service may be offline or unreachable."))}}let C=K({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:g}),F=K({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${ne()||"Unknown"}</p>`,icon:"bx-user",onClose:g});function W(){let n=ie(),r=ne()||"user@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},v=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(I).map(p=>`
                    <div class="theme-card ${n===p?"active":""}" data-theme="${p}">
                        <div class="theme-preview theme-preview-${p.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${p}</h3>
                            <p>${p===I.AUTO?"Automatic theme selection.":p===I.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${v?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function X(){let n=document.querySelector("#settings-window .window-content");if(!n)return;n.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let a=this.dataset.theme;ge(a),J.setContent(W()),X()})});function r(l,a,w,_,D,e,o){let T=document.getElementById(l),c=document.getElementById(a),u=document.getElementById(w),m=document.getElementById(_),E=document.getElementById(D);T&&c&&(T.onclick=()=>c.click(),c.onchange=j=>{let H=j.target.files[0];if(!H)return;if(H.name!==o){m.textContent=`File must be named "${o}"`,m.style.display="block",c.value="";return}let A=new FileReader;A.onload=Y=>{try{let O=JSON.parse(Y.target.result);localStorage.setItem(e,JSON.stringify(O)),u.textContent=o,m.style.display="none",J.setContent(W()),X()}catch{m.textContent="Invalid JSON format",m.style.display="block",c.value=""}},A.onerror=()=>{m.textContent="Failed to read file",m.style.display="block",c.value=""},A.readAsText(H)}),E&&(E.onclick=()=>{localStorage.removeItem(e),J.setContent(W()),X()})}r("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),r("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),r("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let i=document.getElementById("notifications-toggle");if(i){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(i.disabled=!0),i.onclick=async a=>{if(a.target.checked)try{await Notification.requestPermission()!=="granted"&&(a.target.checked=!1)}catch{a.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.target.checked=!0)}}let v=document.getElementById("microphone-toggle");async function p(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;v&&(v.disabled=!l||l.state==="denied",v.checked=l?.state==="granted");let a=document.querySelector("#microphone-setting-item .settings-item-description");a&&(a.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}p(),v&&!v.disabled&&(v.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),p()}catch{l.target.checked=!1,p()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let b=document.getElementById("analytics-toggle");b&&(b.checked=localStorage.getItem("easter_analytics_enabled")!=="false",b.onclick=l=>{let a=l.target.checked;localStorage.setItem("easter_analytics_enabled",a),window.EASTER_ANALYTICS_ENABLED=a,window.EASTER_DEBUG_MODE=a})}let J=K({id:"settings-window",title:"Settings",content:W(),icon:"bx-cog",onClose:g,onOpen:()=>{J.setContent(W()),setTimeout(X,50)}}),Q=K({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:y("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:N(),"data-tab-index":1},{icon:"bx-history",title:"Logs",content:be(),"data-tab-index":2},{icon:"bx-brain",title:"Models",content:L(),"data-tab-index":3},{icon:"bx-line-chart",title:"Services",content:B(),"data-tab-index":4}],icon:"bxs-message-dots",onClose:g,onOpen:()=>setTimeout(ye,100)});async function ye(){await Promise.all([q(),U(),M(),ae().then(v=>{v&&(f=Date.now()),$(2,f)})]);let n=setInterval(()=>{if(!Q.isOpen())return clearInterval(n);$(2,f),$(1,k),$(3,x),$(4,S)},1e3),r=setInterval(()=>{if(!Q.isOpen())return clearInterval(r);M(),ae().then(v=>{v&&(f=Date.now()),$(2,f)})},5e3),i=setInterval(()=>{if(!Q.isOpen())return clearInterval(i);q(),U()},3e4)}t?(document.getElementById("user-icon")?.addEventListener("click",n=>h(F,n.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",n=>h(Q,n.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",n=>h(J,n.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{h(C),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{me(document.getElementById("email-input").value),window.location.reload()}catch(r){let i=document.getElementById("login-error");i&&(i.textContent=r.message,i.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",he):he();})();
//# sourceMappingURL=dex.be04889b.js.map
