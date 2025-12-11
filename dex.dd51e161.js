(()=>{function me(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ue(s=!1){let v=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${s?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,h=document.createElement("nav");h.innerHTML=v,document.body.prepend(h)}function ve(){let s=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,n=document.createElement("footer");n.innerHTML=s,document.body.appendChild(n)}function K(s){let n=null,v=s.onClose||null,h=s.onOpen||null;function w(){if(n){n.classList.add("open"),h&&setTimeout(h,10);return}let x=document.getElementById("windows-container");x||(x=document.createElement("div"),x.id="windows-container",x.className="windows-container",document.body.appendChild(x)),n=document.createElement("div"),n.id=s.id,n.className="window";let $=s.icon||"bx-window",B="",y="",H;s.tabs&&s.tabs.length>0?(B=`<div class="tab-bar">${s.tabs.map((I,f)=>{let P;return I.icon?P=`<i class="bx ${I.icon}"></i>`:I.title&&I.title.length>0?P=`<span class="tab-glyph">${I.title.charAt(0).toUpperCase()}</span>`:P='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${f===0?"active":""}" data-tab-index="${f}">
                        ${P}
                        <span class="tab-title">${I.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${f}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,H=`<div class="window-content">${s.tabs.map((I,f)=>`<div class="tab-content ${f===0?"active":""}" data-tab-content="${f}">${I.content}</div>`).join("")}</div>`):(s.title&&(y=`<div class="window-title">${s.title}</div>`),H=`<div class="window-content">${s.content}</div>`);let q=`
            <div class="window-header">
                <i class="bx ${$}"></i>
                ${B}
                ${y}
                <i class="bx bx-x window-close"></i>
            </div>
        `;n.innerHTML=q+H,x.appendChild(n);let X=n.querySelector(".window-close");X&&X.addEventListener("click",J=>{J.stopPropagation(),b()}),s.tabs&&s.tabs.length>0&&n.querySelectorAll(".tab").forEach(F=>{F.addEventListener("click",()=>{let I=F.getAttribute("data-tab-index");n.querySelectorAll(".tab").forEach(f=>f.classList.remove("active")),F.classList.add("active"),n.querySelectorAll(".tab-content").forEach(f=>f.classList.remove("active")),n.querySelector(`.tab-content[data-tab-content="${I}"]`).classList.add("active")})}),setTimeout(()=>{n.classList.add("open"),h&&h()},10)}function b(x=!1){n&&(x?(n.classList.add("switching"),n.classList.remove("open"),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},200)):(n.classList.remove("open"),v&&v(),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},400)))}function S(x){if(n){let $=n.querySelector(".window-content");$&&($.innerHTML=x)}}function k(){return n&&n.classList.contains("open")}return{open:w,close:b,setContent:S,isOpen:k,id:s.id}}var se="easter_user_email";function ge(){return localStorage.getItem(se)!==null}function ne(){return localStorage.getItem(se)}function fe(s){if(!s||!s.includes("@"))throw new Error("Invalid email address");if(!s.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(se,s.trim())}var he="easter_theme",T={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ae(){return localStorage.getItem(he)||T.AUTO}function Ce(){let s=window.innerWidth,n=window.innerHeight,v=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return s>1920&&n>1080?T.ANIMATED:(s===1920&&n===1080&&v||s<=1920||n<=1080,T.DEFAULT)}function be(s){if(!Object.values(T).includes(s))throw new Error("Invalid theme");localStorage.setItem(he,s),ie(s)}function ie(s,n=!1){let v=document.body,h=s===T.AUTO?Ce():s;if(n||(v.classList.add("theme-transitioning"),setTimeout(()=>{v.classList.remove("theme-transitioning")},300)),Object.values(T).forEach(w=>{v.classList.remove(`theme-${w}`)}),v.classList.add(`theme-${s}`),h===T.ANIMATED){if(!document.querySelector(".background")){let w=document.createElement("div");w.className="background",document.body.prepend(w)}}else{let w=document.querySelector(".background");w&&(n?w.remove():(w.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{w.remove()},400)))}}function ye(){let s=ae();if(ie(s,!0),s===T.AUTO){let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{ie(T.AUTO)},300)})}}function z(s,n,v=null){let w={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",b=v?`<p class="placeholder-action">${v}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${w} placeholder-icon'></i>
            <p class="placeholder-message">${n}</p>
            ${b}
        </div>
    `}function we(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function oe(){let s=document.getElementById("logs-container");if(!s)return!1;s.classList.remove("placeholder-active");let n=localStorage.getItem("service_map");if(!n)return s.classList.add("placeholder-active"),s.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let v;try{v=JSON.parse(n)}catch(S){return console.error("Error parsing service_map from localStorage:",S),s.classList.add("placeholder-active"),s.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let h=null;if(v&&typeof v.services=="object"){let S=["cs","be","th"];for(let k of S)if(Array.isArray(v.services[k])){let x=v.services[k].find($=>$.short_name==="event"||$.id==="event"||$.id==="dex-event-service");if(x){h=x;break}}}if(!h)return s.classList.add("placeholder-active"),s.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let b=`http://${h.domain==="0.0.0.0"?"localhost":h.domain}:${h.port}/logs`;try{let S=await fetch(b);if(!S.ok)return s.classList.add("placeholder-active"),s.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let k=await S.json();if(!k||k.length===0)return s.classList.add("placeholder-active"),s.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let x=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],$=k.filter(y=>!x.includes(y.id));$.forEach(y=>{y.logs&&Array.isArray(y.logs)?y.logs.reverse():y.logs=[]}),$.reverse();let B=$.map(y=>{let H=y.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${y.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(H)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${H}</pre>
                </div>
            `}).join("");return s.innerHTML=B,document.querySelectorAll(".copy-logs-btn").forEach(y=>{y.addEventListener("click",()=>{let H=unescape(y.dataset.logs);navigator.clipboard.writeText(H).then(()=>{let q=y.querySelector("i");q.classList.remove("bx-copy"),q.classList.add("bx-check"),setTimeout(()=>{q.classList.remove("bx-check"),q.classList.add("bx-copy")},2e3)})})}),!0}catch(S){return console.error("Error fetching logs:",S),s.classList.add("placeholder-active"),s.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function xe(){console.log("Welcome to Easter Company."),ye(),me();let s=ge();ue(s),ve();let n=document.querySelector("footer"),v=null;function h(){v=null,n?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(e=>e.classList.remove("active","inactive"))}function w(e,i=null){let o=v&&v.id===e.id;v&&v.close(!o),o?v=null:setTimeout(()=>{e.open(),v=e,document.querySelectorAll(".nav-right i").forEach(d=>{let l=d===i;d.classList.toggle("active",l),d.classList.toggle("inactive",!l&&i)}),n?.classList.add("hide")},v?220:0)}function b(e,i,o=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",a=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${l} placeholder-icon'></i><p class="placeholder-message">${i}</p>${a}</div>`}function S(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}let k=null,x=null,$=null,B=null,y=null,H=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),q=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),X=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),J=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',F={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}"};function I(e,i){let o=F[e];if(e==="voice_transcribed"&&!i.user_name&&i.user_id&&(o="User {user_id} said in voice channel {channel_id}: {transcription}"),!o)return e;let d=o.replace(/\{(\w+)\}/g,(l,a)=>i[a]!==void 0&&i[a]!==null?i[a]:l);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&i.detected_language&&i.detected_language!=="en"&&i.english_translation&&(d+=` (Translation: ${i.english_translation})`),d}function f(e,i){let o=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!o)return;if(!i){o.textContent="Last updated: never";return}let l=(Date.now()-i)/1e3,a;if(l<30)a=`${Math.floor(l)}s ago`;else{o.textContent="Last updated: never";return}o.textContent=`Last updated: ${a}`}async function P(){if(!localStorage.getItem("service_map"))return null;try{let i=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!i)return null;let d=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/system_monitor`,l=await fetch(d);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function te(){let e=document.getElementById("services-widgets");if(!e)return;let i=await P();if(!i||!i.services){e.innerHTML=b("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}k=Date.now(),f(4,k);let o=i.services||[];Array.from(e.children).forEach(t=>{t.classList.contains("service-widget")||t.remove()});function d(t){return!t||t==="N/A"||t==="unknown"||t.trim()===""?"-":t}function l(t){if(!t||t==="N/A"||t==="unknown")return"-";let p=t.match(/^(\d+\.\d+\.\d+)/);return p?p[0]:t.split(".").slice(0,3).join(".")||"-"}function a(t){return!t||t.length<=28?t:t.substring(0,28)+"..."}function r(t){if(!t||!t.includes("%"))return"#666";let p=parseFloat(t);return p<30?"#00ff00":p<60?"#88ff00":p<80?"#ffaa00":"#ff0000"}function c(t){if(!t||t==="N/A"||t==="unknown")return"-";let p=t.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!p)return"-";let L=parseInt(p[1])||0,m=parseInt(p[2])||0,g=parseInt(p[3])||0,u=parseFloat(p[4])||0,_=L*86400+m*3600+g*60+u,N=Math.floor(_/86400);if(N>0)return`${N}d`;let C=Math.floor(_/3600);if(C>0)return`${C}h`;let M=Math.floor(_/60);return M>0?`${M}m`:`${Math.floor(_)}s`}function E(t){let p=t.status==="online",L=p?"service-widget-online":"service-widget-offline",m=p?"bx-check-circle":"bx-x-circle",g=p?"OK":"BAD",u=t.version?l(t.version.str):"-",_=d(t.cpu),N=d(t.memory),C=r(_),M=r(N),Y=c(t.uptime),W="";return p?W=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${u}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${Y}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${C};"></i><span style="color: ${C};">${_}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${M};"></i><span style="color: ${M};">${N}</span></div></div>`:W='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${L}" data-service-id="${t.id}"><div class="service-widget-header"><i class="bx ${m}"></i><h3>${t.short_name||t.id}</h3><span class="service-widget-status">${g}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${a(t.domain&&t.port?`${t.domain}:${t.port}`:"")}</span></div>${W}</div></div>`}let j=new Map(Array.from(e.querySelectorAll(".service-widget")).map(t=>[t.dataset.serviceId,t])),O=new Set(o.map(t=>t.id));for(let[t,p]of j)O.has(t)||p.remove();o.forEach(t=>{let p=E(t),L=j.get(t.id);L?L.outerHTML!==p&&(L.outerHTML=p):e.insertAdjacentHTML("beforeend",p)})}async function re(){let e=document.getElementById("models-widgets");if(!e)return;let i=await P();if(!i){e.innerHTML=b("offline","Failed to load model status.");return}B=Date.now(),f(3,B);let o=i.models||[],d=i.whisper;Array.from(e.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function l(c){let E=c.status==="Ready";return`
                <div class="service-widget ${E?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${E?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${c.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function a(c){let E=c.status==="Downloaded",j=E?"service-widget-online":"service-widget-offline",O=E?"OK":"MISSING",t=E&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",p=c.name;return c.type==="custom"&&p.endsWith(":latest")&&(p=p.replace(":latest","")),`<div class="service-widget ${j}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${E?"bx-check-circle":"bx-x-circle"}"></i><h3>${p}</h3><span class="service-widget-status">${O}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${t}</span></div></div></div>`}let r="";if(d&&(r+=l(d)),r+=o.map(a).join(""),!r){e.innerHTML=b("empty","No models found.");return}e.innerHTML!==r&&(e.innerHTML=r)}async function $e(){if(!localStorage.getItem("service_map"))return null;try{let i=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!i)return null;let d=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/processes`,l=await fetch(d);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function ce(){let e=document.getElementById("processes-widgets");if(!e)return;let i=await $e();if(i===null){e.innerHTML=b("offline","Failed to load process status.");return}if(y=Date.now(),f(2,y),i.length===0){e.innerHTML=b("empty","No active processes.");return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function o(a){let r=Math.floor(Date.now()/1e3-a.start_time),c=a.retries>0?`<span class="process-retry-badge">Retry ${a.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${a.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${a.channel_id}</h3>
                        ${c}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${a.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${r}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${a.pid}</span>
                        </div>
                    </div>
                </div>`}let d=new Map(Array.from(e.querySelectorAll(".process-widget")).map(a=>[a.dataset.channelId,a])),l=new Set(i.map(a=>a.channel_id));for(let[a,r]of d)l.has(a)||r.remove();i.forEach(a=>{let r=o(a),c=d.get(a.channel_id);c?c.outerHTML!==r&&(c.outerHTML=r):e.insertAdjacentHTML("beforeend",r)})}async function le(){let e=document.getElementById("events-timeline");if(!e)return;let i=localStorage.getItem("service_map");if(!i){e.innerHTML=b("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(r=>r.id==="dex-event-service")}catch{e.innerHTML=b("error","Invalid service map data.");return}if(!o){e.innerHTML=b("error","Event service not found in service map.");return}let l=`http://${o.domain==="0.0.0.0"?"localhost":o.domain}:${o.port}/events?ml=50&format=json`;try{let a=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(m=>m.dataset.eventId).filter(m=>m)),r=await fetch(l);if(!r.ok)throw new Error("Service is offline or unreachable.");let E=(await r.json()).events||[];if(E.length===0){e.innerHTML=b("empty","No events found.");return}let j=m=>{let g=m.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let u=g.type,_=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted",N="event-border-grey";_&&(N=u==="moderation.explicit_content.deleted"?"event-border-red":"event-border-blue");let C=_?"cursor-pointer":"",M=a.has(m.id),Y=M?"expanded":"",W=M?"display: block;":"display: none;",de=new Date(m.timestamp*1e3),Te=de.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Se=de.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),ke=I(u,g),pe="";if(_){let D="";if(u==="engagement.decision")D=`
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
                        `;else if(u==="messaging.bot.sent_message")D=`
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
                        `;else if(u==="moderation.explicit_content.deleted")D=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${g.message_id||"N/A"}</span>
                            </div>
                             <div class="event-detail-row">
                                <span class="detail-label">Reason:</span>
                                <span class="detail-value">${g.reason||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Model Output:</span>
                                <pre class="detail-pre">${S(g.raw_output)||"None"}</pre>
                            </div>
                        `;else if(u==="messaging.user.sent_message"){let U="";g.attachments&&g.attachments.length>0&&(U=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${g.attachments.map(A=>{let Ie=A.content_type&&A.content_type.startsWith("image/"),Me=(A.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${Ie?`<div class="attachment-thumb-container"><img src="${A.url}" alt="${A.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${A.url}" target="_blank" class="attachment-link">${A.filename}</a>
                                            <span class="attachment-meta">${A.content_type} \u2022 ${Me}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),D=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${g.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${g.content||"(empty)"}</pre>
                            </div>
                            ${U}
                         `}pe=`
                        <div class="event-details" style="${W}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${D}
                        </div>
                    `}let R=document.createElement("div");if(R.className=`event-item ${N} ${C} ${Y}`,R.dataset.eventId=m.id,R.onclick=function(D){if(!_)return;this.classList.toggle("expanded");let U=this.querySelector(".event-details");U&&(U.style.display=U.style.display==="none"?"block":"none")},R.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${Te}</span>
                        <span class="event-date">${Se}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${m.service}</div>
                        <div class="event-message">${ke}</div>
                        ${pe}
                    </div>
                `,_){let D=R.querySelector(".close-details-btn");D&&D.addEventListener("click",U=>{U.stopPropagation();let ee=U.target.closest(".event-item");if(ee){ee.classList.remove("expanded");let A=ee.querySelector(".event-details");A&&(A.style.display="none")}})}return R},O=Array.from(e.children),t=new Map(O.map(m=>[m.dataset.eventId,m])),p=new Set(E.map(m=>m.id));O.forEach(m=>{(!m.dataset.eventId||!p.has(m.dataset.eventId))&&m.remove()});let L=null;E.forEach((m,g)=>{let u=t.get(m.id);!u&&(u=j(m),!u)||(g===0?e.firstElementChild!==u&&e.prepend(u):L&&L.nextElementSibling!==u&&L.after(u),L=u)}),x=Date.now(),f(1,x)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=b("offline","Failed to load events.","The event service may be offline or unreachable."))}}async function Ee(){await Promise.all([te(),re(),le(),ce(),oe().then(d=>{d&&($=Date.now()),f(3,$)})]);let e=setInterval(()=>{if(!Z.isOpen())return clearInterval(e);f(3,$),f(2,x),f(4,B),f(5,k),f(1,y)},1e3),i=setInterval(()=>{if(!Z.isOpen())return clearInterval(i);le(),ce(),oe().then(d=>{d&&($=Date.now()),f(3,$)})},3e3),o=setInterval(()=>{if(!Z.isOpen())return clearInterval(o);te(),re()},6e4)}function G(){let e=ae(),i=ne()||"user@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},d=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(T).map(l=>`
                    <div class="theme-card ${e===l?"active":""}" data-theme="${l}">
                        <div class="theme-preview theme-preview-${l.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${l}</h3>
                            <p>${l===T.AUTO?"Automatic theme selection.":l===T.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${e===l?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${d?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Q(){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(r=>{r.addEventListener("click",function(){let c=this.dataset.theme;be(c),V.setContent(G()),Q()})});function i(r,c,E,j,O,t,p){let L=document.getElementById(r),m=document.getElementById(c),g=document.getElementById(E),u=document.getElementById(j),_=document.getElementById(O);L&&m&&(L.onclick=()=>m.click(),m.onchange=N=>{let C=N.target.files[0];if(!C)return;if(C.name!==p){u.textContent=`File must be named "${p}"`,u.style.display="block",m.value="";return}let M=new FileReader;M.onload=Y=>{try{let W=JSON.parse(Y.target.result);localStorage.setItem(t,JSON.stringify(W)),g.textContent=p,u.style.display="none",V.setContent(G()),Q()}catch{u.textContent="Invalid JSON format",u.style.display="block",m.value=""}},M.onerror=()=>{u.textContent="Failed to read file",u.style.display="block",m.value=""},M.readAsText(C)}),_&&(_.onclick=()=>{localStorage.removeItem(t),V.setContent(G()),Q()})}i("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),i("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),i("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let r="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!r||r.state==="denied")&&(o.disabled=!0),o.onclick=async c=>{if(c.target.checked)try{await Notification.requestPermission()!=="granted"&&(c.target.checked=!1)}catch{c.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),c.target.checked=!0)}}let d=document.getElementById("microphone-toggle");async function l(){let r="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;d&&(d.disabled=!r||r.state==="denied",d.checked=r?.state==="granted");let c=document.querySelector("#microphone-setting-item .settings-item-description");c&&(c.textContent=r?r.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}l(),d&&!d.disabled&&(d.onclick=async r=>{if(r.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),l()}catch{r.target.checked=!1,l()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),r.target.checked=!0)});let a=document.getElementById("analytics-toggle");a&&(a.checked=localStorage.getItem("easter_analytics_enabled")!=="false",a.onclick=r=>{let c=r.target.checked;localStorage.setItem("easter_analytics_enabled",c),window.EASTER_ANALYTICS_ENABLED=c,window.EASTER_DEBUG_MODE=c})}let _e=K({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:h}),Le=K({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${ne()||"Unknown"}</p>`,icon:"bx-user",onClose:h}),V=K({id:"settings-window",title:"Settings",content:G(),icon:"bx-cog",onClose:h,onOpen:()=>{V.setContent(G()),setTimeout(Q,50)}}),Z=K({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:b("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-cog",title:"Processes",content:X(),"data-tab-index":1},{icon:"bx-calendar-event",title:"Events",content:J(),"data-tab-index":2},{icon:"bx-history",title:"Logs",content:we(),"data-tab-index":3},{icon:"bx-brain",title:"Models",content:q(),"data-tab-index":4},{icon:"bx-line-chart",title:"Services",content:H(),"data-tab-index":5}],icon:"bxs-message-dots",onClose:h,onOpen:()=>setTimeout(Ee,100)});s?(document.getElementById("user-icon")?.addEventListener("click",e=>w(Le,e.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",e=>w(Z,e.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",e=>w(V,e.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{w(_e),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",e=>{e.preventDefault();try{fe(document.getElementById("email-input").value),window.location.reload()}catch(i){let o=document.getElementById("login-error");o&&(o.textContent=i.message,o.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",xe):xe();})();
//# sourceMappingURL=dex.dd51e161.js.map
