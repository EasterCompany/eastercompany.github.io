(()=>{function ce(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function de(t=!1){let m=`
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
    `,f=document.createElement("nav");f.innerHTML=m,document.body.prepend(f)}function pe(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,n=document.createElement("footer");n.innerHTML=t,document.body.appendChild(n)}function K(t){let n=null,m=t.onClose||null,f=t.onOpen||null;function h(){if(n){n.classList.add("open"),f&&setTimeout(f,10);return}let b=document.getElementById("windows-container");b||(b=document.createElement("div"),b.id="windows-container",b.className="windows-container",document.body.appendChild(b)),n=document.createElement("div"),n.id=t.id,n.className="window";let x=t.icon||"bx-window",P="",E="",H;t.tabs&&t.tabs.length>0?(P=`<div class="tab-bar">${t.tabs.map((k,I)=>{let R;return k.icon?R=`<i class="bx ${k.icon}"></i>`:k.title&&k.title.length>0?R=`<span class="tab-glyph">${k.title.charAt(0).toUpperCase()}</span>`:R='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${I===0?"active":""}" data-tab-index="${I}">
                        ${R}
                        <span class="tab-title">${k.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${I}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,H=`<div class="window-content">${t.tabs.map((k,I)=>`<div class="tab-content ${I===0?"active":""}" data-tab-content="${I}">${k.content}</div>`).join("")}</div>`):(t.title&&(E=`<div class="window-title">${t.title}</div>`),H=`<div class="window-content">${t.content}</div>`);let q=`
            <div class="window-header">
                <i class="bx ${x}"></i>
                ${P}
                ${E}
                <i class="bx bx-x window-close"></i>
            </div>
        `;n.innerHTML=q+H,b.appendChild(n);let X=n.querySelector(".window-close");X&&X.addEventListener("click",_=>{_.stopPropagation(),y()}),t.tabs&&t.tabs.length>0&&n.querySelectorAll(".tab").forEach(W=>{W.addEventListener("click",()=>{let k=W.getAttribute("data-tab-index");n.querySelectorAll(".tab").forEach(I=>I.classList.remove("active")),W.classList.add("active"),n.querySelectorAll(".tab-content").forEach(I=>I.classList.remove("active")),n.querySelector(`.tab-content[data-tab-content="${k}"]`).classList.add("active")})}),setTimeout(()=>{n.classList.add("open"),f&&f()},10)}function y(b=!1){n&&(b?(n.classList.add("switching"),n.classList.remove("open"),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},200)):(n.classList.remove("open"),m&&m(),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},400)))}function T(b){if(n){let x=n.querySelector(".window-content");x&&(x.innerHTML=b)}}function M(){return n&&n.classList.contains("open")}return{open:h,close:y,setContent:T,isOpen:M,id:t.id}}var te="easter_user_email";function me(){return localStorage.getItem(te)!==null}function se(){return localStorage.getItem(te)}function ue(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(te,t.trim())}var ve="easter_theme",S={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ie(){return localStorage.getItem(ve)||S.AUTO}function Se(){let t=window.innerWidth,n=window.innerHeight,m=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&n>1080?S.ANIMATED:(t===1920&&n===1080&&m||t<=1920||n<=1080,S.DEFAULT)}function ge(t){if(!Object.values(S).includes(t))throw new Error("Invalid theme");localStorage.setItem(ve,t),ne(t)}function ne(t,n=!1){let m=document.body,f=t===S.AUTO?Se():t;if(n||(m.classList.add("theme-transitioning"),setTimeout(()=>{m.classList.remove("theme-transitioning")},300)),Object.values(S).forEach(h=>{m.classList.remove(`theme-${h}`)}),m.classList.add(`theme-${t}`),f===S.ANIMATED){if(!document.querySelector(".background")){let h=document.createElement("div");h.className="background",document.body.prepend(h)}}else{let h=document.querySelector(".background");h&&(n?h.remove():(h.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{h.remove()},400)))}}function fe(){let t=ie();if(ne(t,!0),t===S.AUTO){let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{ne(S.AUTO)},300)})}}function G(t,n,m=null){let h={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",y=m?`<p class="placeholder-action">${m}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${h} placeholder-icon'></i>
            <p class="placeholder-message">${n}</p>
            ${y}
        </div>
    `}function be(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function ae(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let n=localStorage.getItem("service_map");if(!n)return t.classList.add("placeholder-active"),t.innerHTML=G("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let m;try{m=JSON.parse(n)}catch(T){return console.error("Error parsing service_map from localStorage:",T),t.classList.add("placeholder-active"),t.innerHTML=G("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let f=null;if(m&&typeof m.services=="object"){let T=["cs","be","th"];for(let M of T)if(Array.isArray(m.services[M])){let b=m.services[M].find(x=>x.short_name==="event"||x.id==="event"||x.id==="dex-event-service");if(b){f=b;break}}}if(!f)return t.classList.add("placeholder-active"),t.innerHTML=G("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let y=`http://${f.domain==="0.0.0.0"?"localhost":f.domain}:${f.port}/logs`;try{let T=await fetch(y);if(!T.ok)return t.classList.add("placeholder-active"),t.innerHTML=G("offline","Event service is offline.","Please ensure the event service is running."),!1;let M=await T.json();if(!M||M.length===0)return t.classList.add("placeholder-active"),t.innerHTML=G("empty","No logs found.","Service logs will appear here when available."),!1;let b=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],x=M.filter(E=>!b.includes(E.id));x.forEach(E=>{E.logs.reverse()}),x.reverse();let P=x.map(E=>{let H=E.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${E.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(H)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${H}</pre>
                </div>
            `}).join("");return t.innerHTML=P,document.querySelectorAll(".copy-logs-btn").forEach(E=>{E.addEventListener("click",()=>{let H=unescape(E.dataset.logs);navigator.clipboard.writeText(H).then(()=>{let q=E.querySelector("i");q.classList.remove("bx-copy"),q.classList.add("bx-check"),setTimeout(()=>{q.classList.remove("bx-check"),q.classList.add("bx-copy")},2e3)})})}),!0}catch(T){return console.error("Error fetching logs:",T),t.classList.add("placeholder-active"),t.innerHTML=G("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function he(){console.log("Welcome to Easter Company."),fe(),ce();let t=me();de(t),pe();let n=document.querySelector("footer"),m=null;function f(){m=null,n?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function h(s,i=null){let a=m&&m.id===s.id;m&&m.close(!a),a?m=null:setTimeout(()=>{s.open(),m=s,document.querySelectorAll(".nav-right i").forEach(p=>{let d=p===i;p.classList.toggle("active",d),p.classList.toggle("inactive",!d&&i)}),n?.classList.add("hide")},m?220:0)}function y(s,i,a=null){let d={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",v=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${d} placeholder-icon'></i><p class="placeholder-message">${i}</p>${v}</div>`}let T=null,M=null,b=null,x=null,P=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),E=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),H=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',q={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Bot sent in {channel_name}: {content}","messaging.bot.status_update":"Bot status changed to {status}: {details}","messaging.user.speaking_started":"{user_name} started speaking","messaging.user.speaking_stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}"};function X(s,i){let a=q[s];if(s==="voice_transcribed"&&!i.user_name&&i.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),!a)return s;let p=a.replace(/\{(\w+)\}/g,(d,v)=>i[v]!==void 0&&i[v]!==null?i[v]:d);return(s==="messaging.user.transcribed"||s==="voice_transcribed")&&i.detected_language&&i.detected_language!=="en"&&i.english_translation&&(p+=` (Translation: ${i.english_translation})`),p}function _(s,i){let a=document.querySelector(`.tab[data-tab-index="${s}"] .tab-subtitle`);if(!a)return;if(!i){a.textContent="Last updated: never";return}let d=(Date.now()-i)/1e3,v;if(d<30)v=`${Math.floor(d)}s ago`;else{a.textContent="Last updated: never";return}a.textContent=`Last updated: ${v}`}async function W(){if(!localStorage.getItem("service_map"))return null;try{let i=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!i)return null;let p=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/system_monitor_metrics`,d=await fetch(p);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);return await d.json()}catch(s){return console.error("Error fetching system data:",s),null}}async function k(){let s=document.getElementById("services-widgets");if(!s)return;let i=await W();if(!i||!i.services){s.innerHTML=y("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}T=Date.now(),_(4,T);let a=i.services||[];Array.from(s.children).forEach(e=>{e.classList.contains("service-widget")||e.remove()});function p(e){return!e||e==="N/A"||e==="unknown"||e.trim()===""?"-":e}function d(e){if(!e||e==="N/A"||e==="unknown")return"-";let r=e.match(/^(\d+\.\d+\.\d+)/);return r?r[0]:e.split(".").slice(0,3).join(".")||"-"}function v(e){return!e||e.length<=28?e:e.substring(0,28)+"..."}function l(e){if(!e||!e.includes("%"))return"#666";let r=parseFloat(e);return r<30?"#00ff00":r<60?"#88ff00":r<80?"#ffaa00":"#ff0000"}function o(e){if(!e||e==="N/A"||e==="unknown")return"-";let r=e.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!r)return"-";let L=parseInt(r[1])||0,c=parseInt(r[2])||0,g=parseInt(r[3])||0,u=parseFloat(r[4])||0,$=L*86400+c*3600+g*60+u,O=Math.floor($/86400);if(O>0)return`${O}d`;let A=Math.floor($/3600);if(A>0)return`${A}h`;let C=Math.floor($/60);return C>0?`${C}m`:`${Math.floor($)}s`}function w(e){let r=e.status==="online",L=r?"service-widget-online":"service-widget-offline",c=r?"bx-check-circle":"bx-x-circle",g=r?"OK":"BAD",u=e.version?d(e.version.str):"-",$=p(e.cpu),O=p(e.memory),A=l($),C=l(O),Y=o(e.uptime),F="";return r?F=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${u}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${Y}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${A};"></i><span style="color: ${A};">${$}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${C};"></i><span style="color: ${C};">${O}</span></div></div>`:F='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${L}" data-service-id="${e.id}"><div class="service-widget-header"><i class="bx ${c}"></i><h3>${e.short_name||e.id}</h3><span class="service-widget-status">${g}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${v(e.domain&&e.port?`${e.domain}:${e.port}`:"")}</span></div>${F}</div></div>`}let D=new Map(Array.from(s.querySelectorAll(".service-widget")).map(e=>[e.dataset.serviceId,e])),j=new Set(a.map(e=>e.id));for(let[e,r]of D)j.has(e)||r.remove();a.forEach(e=>{let r=w(e),L=D.get(e.id);L?L.outerHTML!==r&&(L.outerHTML=r):s.insertAdjacentHTML("beforeend",r)})}async function I(){let s=document.getElementById("models-widgets");if(!s)return;let i=await W();if(!i){s.innerHTML=y("offline","Failed to load model status.");return}x=Date.now(),_(3,x);let a=i.models||[],p=i.whisper;Array.from(s.children).forEach(o=>{o.classList.contains("service-widget")||o.remove()});function d(o){let w=o.status==="Ready";return`
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
                </div>`}function v(o){let w=o.status==="Downloaded",D=w?"service-widget-online":"service-widget-offline",j=w?"OK":"MISSING",e=w&&o.size>0?`${(o.size/1e9).toFixed(2)} GB`:"-",r=o.name;return o.type==="custom"&&r.endsWith(":latest")&&(r=r.replace(":latest","")),`<div class="service-widget ${D}" data-model-name="${o.name}"><div class="service-widget-header"><i class="bx ${w?"bx-check-circle":"bx-x-circle"}"></i><h3>${r}</h3><span class="service-widget-status">${j}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${o.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${e}</span></div></div></div>`}let l="";if(p&&(l+=d(p)),l+=a.map(v).join(""),!l){s.innerHTML=y("empty","No models found.");return}s.innerHTML!==l&&(s.innerHTML=l)}async function R(){let s=document.getElementById("events-timeline");if(!s)return;let i=localStorage.getItem("service_map");if(!i){s.innerHTML=y("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(i).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{s.innerHTML=y("error","Invalid service map data.");return}if(!a){s.innerHTML=y("error","Event service not found in service map.");return}let d=`http://${a.domain==="0.0.0.0"?"localhost":a.domain}:${a.port}/events?ml=50&format=json`;try{let v=new Set(Array.from(s.querySelectorAll(".event-item.expanded")).map(c=>c.dataset.eventId).filter(c=>c)),l=await fetch(d);if(!l.ok)throw new Error("Service is offline or unreachable.");let w=(await l.json()).events||[];if(w.length===0){s.innerHTML=y("empty","No events found.");return}let D=c=>{let g=c.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let u=g.type,$=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.user.sent_message",O=$?"event-border-blue":"event-border-grey",A=$?"cursor-pointer":"",C=v.has(c.id),Y=C?"expanded":"",F=C?"display: block;":"display: none;",re=new Date(c.timestamp*1e3),xe=re.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$e=re.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),Ee=X(u,g),le="";if($){let U="";if(u==="engagement.decision")U=`
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${g.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${g.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${g.engagement_raw||"None"}</pre>
                            </div>
                        `;else if(u==="messaging.bot.sent_message")U=`
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${g.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Input (Prompt):</span>
                                <pre class="detail-pre">${g.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${g.response_raw||"None"}</pre>
                            </div>
                        `;else if(u==="messaging.user.sent_message"){let B="";g.attachments&&g.attachments.length>0&&(B=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${g.attachments.map(N=>{let Le=N.content_type&&N.content_type.startsWith("image/"),Te=(N.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${Le?`<div class="attachment-thumb-container"><img src="${N.url}" alt="${N.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${N.url}" target="_blank" class="attachment-link">${N.filename}</a>
                                            <span class="attachment-meta">${N.content_type} \u2022 ${Te}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),U=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${g.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${g.content||"(empty)"}</pre>
                            </div>
                            ${B}
                         `}le=`
                        <div class="event-details" style="${F}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${U}
                        </div>
                    `}let z=document.createElement("div");if(z.className=`event-item ${O} ${A} ${Y}`,z.dataset.eventId=c.id,z.onclick=function(U){if(!$)return;this.classList.toggle("expanded");let B=this.querySelector(".event-details");B&&(B.style.display=B.style.display==="none"?"block":"none")},z.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${xe}</span>
                        <span class="event-date">${$e}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${c.service}</div>
                        <div class="event-message">${Ee}</div>
                        ${le}
                    </div>
                `,$){let U=z.querySelector(".close-details-btn");U&&U.addEventListener("click",B=>{B.stopPropagation();let ee=B.target.closest(".event-item");if(ee){ee.classList.remove("expanded");let N=ee.querySelector(".event-details");N&&(N.style.display="none")}})}return z},j=Array.from(s.children),e=new Map(j.map(c=>[c.dataset.eventId,c])),r=new Set(w.map(c=>c.id));j.forEach(c=>{(!c.dataset.eventId||!r.has(c.dataset.eventId))&&c.remove()});let L=null;w.forEach((c,g)=>{let u=e.get(c.id);!u&&(u=D(c),!u)||(g===0?s.firstElementChild!==u&&s.prepend(u):L&&L.nextElementSibling!==u&&L.after(u),L=u)}),M=Date.now(),_(1,M)}catch(v){console.error("Error fetching events:",v),s.children.length===0&&(s.innerHTML=y("offline","Failed to load events.","The event service may be offline or unreachable."))}}async function oe(){await Promise.all([k(),I(),R(),ae().then(p=>{p&&(b=Date.now()),_(2,b)})]);let s=setInterval(()=>{if(!Z.isOpen())return clearInterval(s);_(2,b),_(1,M),_(3,x),_(4,T)},1e3),i=setInterval(()=>{if(!Z.isOpen())return clearInterval(i);R(),ae().then(p=>{p&&(b=Date.now()),_(2,b)})},3e3),a=setInterval(()=>{if(!Z.isOpen())return clearInterval(a);k(),I()},6e4)}function J(){let s=ie(),i=se()||"user@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},p=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(S).map(d=>`
                    <div class="theme-card ${s===d?"active":""}" data-theme="${d}">
                        <div class="theme-preview theme-preview-${d.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${d}</h3>
                            <p>${d===S.AUTO?"Automatic theme selection.":d===S.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${s===d?"Active":"Select"}</span>
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
            </div>`}function Q(){let s=document.querySelector("#settings-window .window-content");if(!s)return;s.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let o=this.dataset.theme;ge(o),V.setContent(J()),Q()})});function i(l,o,w,D,j,e,r){let L=document.getElementById(l),c=document.getElementById(o),g=document.getElementById(w),u=document.getElementById(D),$=document.getElementById(j);L&&c&&(L.onclick=()=>c.click(),c.onchange=O=>{let A=O.target.files[0];if(!A)return;if(A.name!==r){u.textContent=`File must be named "${r}"`,u.style.display="block",c.value="";return}let C=new FileReader;C.onload=Y=>{try{let F=JSON.parse(Y.target.result);localStorage.setItem(e,JSON.stringify(F)),g.textContent=r,u.style.display="none",V.setContent(J()),Q()}catch{u.textContent="Invalid JSON format",u.style.display="block",c.value=""}},C.onerror=()=>{u.textContent="Failed to read file",u.style.display="block",c.value=""},C.readAsText(A)}),$&&($.onclick=()=>{localStorage.removeItem(e),V.setContent(J()),Q()})}i("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),i("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),i("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let a=document.getElementById("notifications-toggle");if(a){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(a.disabled=!0),a.onclick=async o=>{if(o.target.checked)try{await Notification.requestPermission()!=="granted"&&(o.target.checked=!1)}catch{o.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),o.target.checked=!0)}}let p=document.getElementById("microphone-toggle");async function d(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;p&&(p.disabled=!l||l.state==="denied",p.checked=l?.state==="granted");let o=document.querySelector("#microphone-setting-item .settings-item-description");o&&(o.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}d(),p&&!p.disabled&&(p.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),d()}catch{l.target.checked=!1,d()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let v=document.getElementById("analytics-toggle");v&&(v.checked=localStorage.getItem("easter_analytics_enabled")!=="false",v.onclick=l=>{let o=l.target.checked;localStorage.setItem("easter_analytics_enabled",o),window.EASTER_ANALYTICS_ENABLED=o,window.EASTER_DEBUG_MODE=o})}let ye=K({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:f}),we=K({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${se()||"Unknown"}</p>`,icon:"bx-user",onClose:f}),V=K({id:"settings-window",title:"Settings",content:J(),icon:"bx-cog",onClose:f,onOpen:()=>{V.setContent(J()),setTimeout(Q,50)}}),Z=K({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:y("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:H(),"data-tab-index":1},{icon:"bx-history",title:"Logs",content:be(),"data-tab-index":2},{icon:"bx-brain",title:"Models",content:E(),"data-tab-index":3},{icon:"bx-line-chart",title:"Services",content:P(),"data-tab-index":4}],icon:"bxs-message-dots",onClose:f,onOpen:()=>setTimeout(oe,100)});t?(document.getElementById("user-icon")?.addEventListener("click",s=>h(we,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>h(Z,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>h(V,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{h(ye),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{ue(document.getElementById("email-input").value),window.location.reload()}catch(i){let a=document.getElementById("login-error");a&&(a.textContent=i.message,a.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",he):he();})();
//# sourceMappingURL=dex.3bd5d2e2.js.map
