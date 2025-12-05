(()=>{function le(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function de(t=!1){let u=`
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
    `,g=document.createElement("nav");g.innerHTML=u,document.body.prepend(g)}function pe(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,s=document.createElement("footer");s.innerHTML=t,document.body.appendChild(s)}function V(t){let s=null,u=t.onClose||null,g=t.onOpen||null;function b(){if(s){s.classList.add("open"),g&&setTimeout(g,10);return}let f=document.getElementById("windows-container");f||(f=document.createElement("div"),f.id="windows-container",f.className="windows-container",document.body.appendChild(f)),s=document.createElement("div"),s.id=t.id,s.className="window";let x=t.icon||"bx-window",F="",L="",N;t.tabs&&t.tabs.length>0?(F=`<div class="tab-bar">${t.tabs.map((k,I)=>{let q;return k.icon?q=`<i class="bx ${k.icon}"></i>`:k.title&&k.title.length>0?q=`<span class="tab-glyph">${k.title.charAt(0).toUpperCase()}</span>`:q='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${I===0?"active":""}" data-tab-index="${I}">
                        ${q}
                        <span class="tab-title">${k.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${I}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,N=`<div class="window-content">${t.tabs.map((k,I)=>`<div class="tab-content ${I===0?"active":""}" data-tab-content="${I}">${k.content}</div>`).join("")}</div>`):(t.title&&(L=`<div class="window-title">${t.title}</div>`),N=`<div class="window-content">${t.content}</div>`);let O=`
            <div class="window-header">
                <i class="bx ${x}"></i>
                ${F}
                ${L}
                <i class="bx bx-x window-close"></i>
            </div>
        `;s.innerHTML=O+N,f.appendChild(s);let Y=s.querySelector(".window-close");Y&&Y.addEventListener("click",_=>{_.stopPropagation(),h()}),t.tabs&&t.tabs.length>0&&s.querySelectorAll(".tab").forEach(B=>{B.addEventListener("click",()=>{let k=B.getAttribute("data-tab-index");s.querySelectorAll(".tab").forEach(I=>I.classList.remove("active")),B.classList.add("active"),s.querySelectorAll(".tab-content").forEach(I=>I.classList.remove("active")),s.querySelector(`.tab-content[data-tab-content="${k}"]`).classList.add("active")})}),setTimeout(()=>{s.classList.add("open"),g&&g()},10)}function h(f=!1){s&&(f?(s.classList.add("switching"),s.classList.remove("open"),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},200)):(s.classList.remove("open"),u&&u(),setTimeout(()=>{s&&s.parentNode&&s.parentNode.removeChild(s),s=null},400)))}function $(f){if(s){let x=s.querySelector(".window-content");x&&(x.innerHTML=f)}}function M(){return s&&s.classList.contains("open")}return{open:b,close:h,setContent:$,isOpen:M,id:t.id}}var ee="easter_user_email";function ue(){return localStorage.getItem(ee)!==null}function te(){return localStorage.getItem(ee)}function me(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ee,t.trim())}var ve="easter_theme",S={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function se(){return localStorage.getItem(ve)||S.AUTO}function Te(){let t=window.innerWidth,s=window.innerHeight,u=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&s>1080?S.ANIMATED:(t===1920&&s===1080&&u||t<=1920||s<=1080,S.DEFAULT)}function ge(t){if(!Object.values(S).includes(t))throw new Error("Invalid theme");localStorage.setItem(ve,t),ne(t)}function ne(t,s=!1){let u=document.body,g=t===S.AUTO?Te():t;if(s||(u.classList.add("theme-transitioning"),setTimeout(()=>{u.classList.remove("theme-transitioning")},300)),Object.values(S).forEach(b=>{u.classList.remove(`theme-${b}`)}),u.classList.add(`theme-${t}`),g===S.ANIMATED){if(!document.querySelector(".background")){let b=document.createElement("div");b.className="background",document.body.prepend(b)}}else{let b=document.querySelector(".background");b&&(s?b.remove():(b.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{b.remove()},400)))}}function fe(){let t=se();if(ne(t,!0),t===S.AUTO){let s;window.addEventListener("resize",()=>{clearTimeout(s),s=setTimeout(()=>{ne(S.AUTO)},300)})}}function R(t,s,u=null){let b={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",h=u?`<p class="placeholder-action">${u}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${b} placeholder-icon'></i>
            <p class="placeholder-message">${s}</p>
            ${h}
        </div>
    `}function be(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function ie(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let s=localStorage.getItem("service_map");if(!s)return t.classList.add("placeholder-active"),t.innerHTML=R("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let u;try{u=JSON.parse(s)}catch($){return console.error("Error parsing service_map from localStorage:",$),t.classList.add("placeholder-active"),t.innerHTML=R("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let g=null;if(u&&typeof u.services=="object"){let $=["cs","be","th"];for(let M of $)if(Array.isArray(u.services[M])){let f=u.services[M].find(x=>x.short_name==="event"||x.id==="event"||x.id==="dex-event-service");if(f){g=f;break}}}if(!g)return t.classList.add("placeholder-active"),t.innerHTML=R("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let h=`http://${g.domain==="0.0.0.0"?"localhost":g.domain}:${g.port}/logs`;try{let $=await fetch(h);if(!$.ok)return t.classList.add("placeholder-active"),t.innerHTML=R("offline","Event service is offline.","Please ensure the event service is running."),!1;let M=await $.json();if(!M||M.length===0)return t.classList.add("placeholder-active"),t.innerHTML=R("empty","No logs found.","Service logs will appear here when available."),!1;let f=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],x=M.filter(L=>!f.includes(L.id));x.forEach(L=>{L.logs.reverse()}),x.reverse();let F=x.map(L=>{let N=L.logs.join(`
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
            `}).join("");return t.innerHTML=F,document.querySelectorAll(".copy-logs-btn").forEach(L=>{L.addEventListener("click",()=>{let N=unescape(L.dataset.logs);navigator.clipboard.writeText(N).then(()=>{let O=L.querySelector("i");O.classList.remove("bx-copy"),O.classList.add("bx-check"),setTimeout(()=>{O.classList.remove("bx-check"),O.classList.add("bx-copy")},2e3)})})}),!0}catch($){return console.error("Error fetching logs:",$),t.classList.add("placeholder-active"),t.innerHTML=R("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function he(){console.log("Welcome to Easter Company."),fe(),le();let t=ue();de(t),pe();let s=document.querySelector("footer"),u=null;function g(){u=null,s?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(n=>n.classList.remove("active","inactive"))}function b(n,i=null){let a=u&&u.id===n.id;u&&u.close(!a),a?u=null:setTimeout(()=>{n.open(),u=n,document.querySelectorAll(".nav-right i").forEach(p=>{let d=p===i;p.classList.toggle("active",d),p.classList.toggle("inactive",!d&&i)}),s?.classList.add("hide")},u?220:0)}function h(n,i,a=null){let d={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[n]||"bx-info-circle",m=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${d} placeholder-icon'></i><p class="placeholder-message">${i}</p>${m}</div>`}let $=null,M=null,f=null,x=null,F=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),L=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),N=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',O={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.status_update":"Bot status changed to {status}: {details}","messaging.user.speaking_started":"{user_name} started speaking","messaging.user.speaking_stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}"};function Y(n,i){let a=O[n];if(n==="voice_transcribed"&&!i.user_name&&i.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),!a)return n;let p=a.replace(/\{(\w+)\}/g,(d,m)=>i[m]!==void 0&&i[m]!==null?i[m]:d);return(n==="messaging.user.transcribed"||n==="voice_transcribed")&&i.detected_language&&i.detected_language!=="en"&&i.english_translation&&(p+=` (Translation: ${i.english_translation})`),p}function _(n,i){let a=document.querySelector(`.tab[data-tab-index="${n}"] .tab-subtitle`);if(!a)return;if(!i){a.textContent="Last updated: never";return}let d=(Date.now()-i)/1e3,m;if(d<30)m=`${Math.floor(d)}s ago`;else{a.textContent="Last updated: never";return}a.textContent=`Last updated: ${m}`}async function B(){if(!localStorage.getItem("service_map"))return null;try{let i=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!i)return null;let p=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/system_monitor_metrics`,d=await fetch(p);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);return await d.json()}catch(n){return console.error("Error fetching system data:",n),null}}async function k(){let n=document.getElementById("services-widgets");if(!n)return;let i=await B();if(!i||!i.services){n.innerHTML=h("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}$=Date.now(),_(4,$);let a=i.services||[];Array.from(n.children).forEach(e=>{e.classList.contains("service-widget")||e.remove()});function p(e){return!e||e==="N/A"||e==="unknown"||e.trim()===""?"-":e}function d(e){if(!e||e==="N/A"||e==="unknown")return"-";let r=e.match(/^(\d+\.\d+\.\d+)/);return r?r[0]:e.split(".").slice(0,3).join(".")||"-"}function m(e){return!e||e.length<=28?e:e.substring(0,28)+"..."}function c(e){if(!e||!e.includes("%"))return"#666";let r=parseFloat(e);return r<30?"#00ff00":r<60?"#88ff00":r<80?"#ffaa00":"#ff0000"}function o(e){if(!e||e==="N/A"||e==="unknown")return"-";let r=e.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!r)return"-";let T=parseInt(r[1])||0,l=parseInt(r[2])||0,y=parseInt(r[3])||0,v=parseFloat(r[4])||0,E=T*86400+l*3600+y*60+v,j=Math.floor(E/86400);if(j>0)return`${j}d`;let A=Math.floor(E/3600);if(A>0)return`${A}h`;let C=Math.floor(E/60);return C>0?`${C}m`:`${Math.floor(E)}s`}function w(e){let r=e.status==="online",T=r?"service-widget-online":"service-widget-offline",l=r?"bx-check-circle":"bx-x-circle",y=r?"OK":"BAD",v=e.version?d(e.version.str):"-",E=p(e.cpu),j=p(e.memory),A=c(E),C=c(j),J=o(e.uptime),U="";return r?U=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${v}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${J}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${A};"></i><span style="color: ${A};">${E}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${C};"></i><span style="color: ${C};">${j}</span></div></div>`:U='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${T}" data-service-id="${e.id}"><div class="service-widget-header"><i class="bx ${l}"></i><h3>${e.short_name||e.id}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${m(e.domain&&e.port?`${e.domain}:${e.port}`:"")}</span></div>${U}</div></div>`}let H=new Map(Array.from(n.querySelectorAll(".service-widget")).map(e=>[e.dataset.serviceId,e])),D=new Set(a.map(e=>e.id));for(let[e,r]of H)D.has(e)||r.remove();a.forEach(e=>{let r=w(e),T=H.get(e.id);T?T.outerHTML!==r&&(T.outerHTML=r):n.insertAdjacentHTML("beforeend",r)})}async function I(){let n=document.getElementById("models-widgets");if(!n)return;let i=await B();if(!i){n.innerHTML=h("offline","Failed to load model status.");return}x=Date.now(),_(3,x);let a=i.models||[],p=i.whisper;Array.from(n.children).forEach(o=>{o.classList.contains("service-widget")||o.remove()});function d(o){let w=o.status==="Ready";return`
                <div class="service-widget ${w?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${w?"READY":"NOT FOUND"}</span>
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
                </div>`}function m(o){let w=o.status==="Downloaded",H=w?"service-widget-online":"service-widget-offline",D=w?"OK":"MISSING",e=w&&o.size>0?`${(o.size/1e9).toFixed(2)} GB`:"-",r=o.name;return o.type==="custom"&&r.endsWith(":latest")&&(r=r.replace(":latest","")),`<div class="service-widget ${H}" data-model-name="${o.name}"><div class="service-widget-header"><i class="bx ${w?"bx-check-circle":"bx-x-circle"}"></i><h3>${r}</h3><span class="service-widget-status">${D}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${o.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${e}</span></div></div></div>`}let c="";if(p&&(c+=d(p)),c+=a.map(m).join(""),!c){n.innerHTML=h("empty","No models found.");return}n.innerHTML!==c&&(n.innerHTML=c)}async function q(){let n=document.getElementById("events-timeline");if(!n)return;let i=localStorage.getItem("service_map");if(!i){n.innerHTML=h("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(i).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{n.innerHTML=h("error","Invalid service map data.");return}if(!a){n.innerHTML=h("error","Event service not found in service map.");return}let d=`http://${a.domain==="0.0.0.0"?"localhost":a.domain}:${a.port}/events?ml=50&format=json`;try{let m=new Set(Array.from(n.querySelectorAll(".event-item.expanded")).map(l=>l.dataset.eventId).filter(l=>l)),c=await fetch(d);if(!c.ok)throw new Error("Service is offline or unreachable.");let w=(await c.json()).events||[];if(w.length===0){n.innerHTML=h("empty","No events found.");return}let H=l=>{let y=l.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return null}let v=y.type,E=v==="engagement.decision",j=E?"event-border-blue":"event-border-grey",A=E?"cursor-pointer":"",C=m.has(l.id),J=C?"expanded":"",U=C?"display: block;":"display: none;",oe=new Date(l.timestamp*1e3),xe=oe.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Ee=oe.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),Le=Y(v,y),re="";E&&(re=`
                        <div class="event-details" style="${U}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${y.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${y.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${y.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${y.engagement_raw||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${y.response_raw||"None"}</pre>
                            </div>
                        </div>
                    `);let W=document.createElement("div");if(W.className=`event-item ${j} ${A} ${J}`,W.dataset.eventId=l.id,W.onclick=function(Q){if(!E)return;this.classList.toggle("expanded");let P=this.querySelector(".event-details");P&&(P.style.display=P.style.display==="none"?"block":"none")},W.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${xe}</span>
                        <span class="event-date">${Ee}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${l.service}</div>
                        <div class="event-message">${Le}</div>
                        ${re}
                    </div>
                `,E){let Q=W.querySelector(".close-details-btn");Q&&Q.addEventListener("click",P=>{P.stopPropagation();let Z=P.target.closest(".event-item");if(Z){Z.classList.remove("expanded");let ce=Z.querySelector(".event-details");ce&&(ce.style.display="none")}})}return W},D=Array.from(n.children),e=new Map(D.map(l=>[l.dataset.eventId,l])),r=new Set(w.map(l=>l.id));D.forEach(l=>{l.dataset.eventId&&!r.has(l.dataset.eventId)&&l.remove()});let T=null;w.forEach((l,y)=>{let v=e.get(l.id);!v&&(v=H(l),!v)||(y===0?n.firstElementChild!==v&&n.prepend(v):T&&T.nextElementSibling!==v&&T.after(v),T=v)}),M=Date.now(),_(1,M)}catch(m){console.error("Error fetching events:",m),n.children.length===0&&(n.innerHTML=h("offline","Failed to load events.","The event service may be offline or unreachable."))}}async function ae(){await Promise.all([k(),I(),q(),ie().then(p=>{p&&(f=Date.now()),_(2,f)})]);let n=setInterval(()=>{if(!X.isOpen())return clearInterval(n);_(2,f),_(1,M),_(3,x),_(4,$)},1e3),i=setInterval(()=>{if(!X.isOpen())return clearInterval(i);q(),ie().then(p=>{p&&(f=Date.now()),_(2,f)})},5e3),a=setInterval(()=>{if(!X.isOpen())return clearInterval(a);k(),I()},3e4)}function z(){let n=se(),i=te()||"user@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},p=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(S).map(d=>`
                    <div class="theme-card ${n===d?"active":""}" data-theme="${d}">
                        <div class="theme-preview theme-preview-${d.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${d}</h3>
                            <p>${d===S.AUTO?"Automatic theme selection.":d===S.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${n===d?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${p?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function K(){let n=document.querySelector("#settings-window .window-content");if(!n)return;n.querySelectorAll(".theme-card").forEach(c=>{c.addEventListener("click",function(){let o=this.dataset.theme;ge(o),G.setContent(z()),K()})});function i(c,o,w,H,D,e,r){let T=document.getElementById(c),l=document.getElementById(o),y=document.getElementById(w),v=document.getElementById(H),E=document.getElementById(D);T&&l&&(T.onclick=()=>l.click(),l.onchange=j=>{let A=j.target.files[0];if(!A)return;if(A.name!==r){v.textContent=`File must be named "${r}"`,v.style.display="block",l.value="";return}let C=new FileReader;C.onload=J=>{try{let U=JSON.parse(J.target.result);localStorage.setItem(e,JSON.stringify(U)),y.textContent=r,v.style.display="none",G.setContent(z()),K()}catch{v.textContent="Invalid JSON format",v.style.display="block",l.value=""}},C.onerror=()=>{v.textContent="Failed to read file",v.style.display="block",l.value=""},C.readAsText(A)}),E&&(E.onclick=()=>{localStorage.removeItem(e),G.setContent(z()),K()})}i("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),i("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),i("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let a=document.getElementById("notifications-toggle");if(a){let c="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!c||c.state==="denied")&&(a.disabled=!0),a.onclick=async o=>{if(o.target.checked)try{await Notification.requestPermission()!=="granted"&&(o.target.checked=!1)}catch{o.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),o.target.checked=!0)}}let p=document.getElementById("microphone-toggle");async function d(){let c="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;p&&(p.disabled=!c||c.state==="denied",p.checked=c?.state==="granted");let o=document.querySelector("#microphone-setting-item .settings-item-description");o&&(o.textContent=c?c.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}d(),p&&!p.disabled&&(p.onclick=async c=>{if(c.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),d()}catch{c.target.checked=!1,d()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),c.target.checked=!0)});let m=document.getElementById("analytics-toggle");m&&(m.checked=localStorage.getItem("easter_analytics_enabled")!=="false",m.onclick=c=>{let o=c.target.checked;localStorage.setItem("easter_analytics_enabled",o),window.EASTER_ANALYTICS_ENABLED=o,window.EASTER_DEBUG_MODE=o})}let ye=V({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:g}),we=V({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${te()||"Unknown"}</p>`,icon:"bx-user",onClose:g}),G=V({id:"settings-window",title:"Settings",content:z(),icon:"bx-cog",onClose:g,onOpen:()=>{G.setContent(z()),setTimeout(K,50)}}),X=V({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:h("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:N(),"data-tab-index":1},{icon:"bx-history",title:"Logs",content:be(),"data-tab-index":2},{icon:"bx-brain",title:"Models",content:L(),"data-tab-index":3},{icon:"bx-line-chart",title:"Services",content:F(),"data-tab-index":4}],icon:"bxs-message-dots",onClose:g,onOpen:()=>setTimeout(ae,100)});t?(document.getElementById("user-icon")?.addEventListener("click",n=>b(we,n.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",n=>b(X,n.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",n=>b(G,n.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{b(ye),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{me(document.getElementById("email-input").value),window.location.reload()}catch(i){let a=document.getElementById("login-error");a&&(a.textContent=i.message,a.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",he):he();})();
//# sourceMappingURL=dex.a4e7ff81.js.map
