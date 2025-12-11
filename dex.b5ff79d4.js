(()=>{function ue(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ge(s=!1){let g=`
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
    `,h=document.createElement("nav");h.innerHTML=g,document.body.prepend(h)}function ve(){let s=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,n=document.createElement("footer");n.innerHTML=s,document.body.appendChild(n)}function X(s){let n=null,g=s.onClose||null,h=s.onOpen||null;function w(){if(n){n.classList.add("open"),h&&setTimeout(h,10);return}let x=document.getElementById("windows-container");x||(x=document.createElement("div"),x.id="windows-container",x.className="windows-container",document.body.appendChild(x)),n=document.createElement("div"),n.id=s.id,n.className="window";let $=s.icon||"bx-window",B="",y="",A;s.tabs&&s.tabs.length>0?(B=`<div class="tab-bar">${s.tabs.map((k,f)=>{let F;return k.icon?F=`<i class="bx ${k.icon}"></i>`:k.title&&k.title.length>0?F=`<span class="tab-glyph">${k.title.charAt(0).toUpperCase()}</span>`:F='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${f===0?"active":""}" data-tab-index="${f}">
                        ${F}
                        <span class="tab-title">${k.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${f}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,A=`<div class="window-content">${s.tabs.map((k,f)=>`<div class="tab-content ${f===0?"active":""}" data-tab-content="${f}">${k.content}</div>`).join("")}</div>`):(s.title&&(y=`<div class="window-title">${s.title}</div>`),A=`<div class="window-content">${s.content}</div>`);let q=`
            <div class="window-header">
                <i class="bx ${$}"></i>
                ${B}
                ${y}
                <i class="bx bx-x window-close"></i>
            </div>
        `;n.innerHTML=q+A,x.appendChild(n);let Q=n.querySelector(".window-close");Q&&Q.addEventListener("click",G=>{G.stopPropagation(),b()}),s.tabs&&s.tabs.length>0&&n.querySelectorAll(".tab").forEach(P=>{P.addEventListener("click",()=>{let k=P.getAttribute("data-tab-index");n.querySelectorAll(".tab").forEach(f=>f.classList.remove("active")),P.classList.add("active"),n.querySelectorAll(".tab-content").forEach(f=>f.classList.remove("active")),n.querySelector(`.tab-content[data-tab-content="${k}"]`).classList.add("active")})}),setTimeout(()=>{n.classList.add("open"),h&&h()},10)}function b(x=!1){n&&(x?(n.classList.add("switching"),n.classList.remove("open"),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},200)):(n.classList.remove("open"),g&&g(),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},400)))}function S(x){if(n){let $=n.querySelector(".window-content");$&&($.innerHTML=x)}}function M(){return n&&n.classList.contains("open")}return{open:w,close:b,setContent:S,isOpen:M,id:s.id}}var ie="easter_user_email";function fe(){return localStorage.getItem(ie)!==null}function ae(){return localStorage.getItem(ie)}function he(s){if(!s||!s.includes("@"))throw new Error("Invalid email address");if(!s.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ie,s.trim())}var be="easter_theme",T={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function re(){return localStorage.getItem(be)||T.AUTO}function Ce(){let s=window.innerWidth,n=window.innerHeight,g=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return s>1920&&n>1080?T.ANIMATED:(s===1920&&n===1080&&g||s<=1920||n<=1080,T.DEFAULT)}function ye(s){if(!Object.values(T).includes(s))throw new Error("Invalid theme");localStorage.setItem(be,s),oe(s)}function oe(s,n=!1){let g=document.body,h=s===T.AUTO?Ce():s;if(n||(g.classList.add("theme-transitioning"),setTimeout(()=>{g.classList.remove("theme-transitioning")},300)),Object.values(T).forEach(w=>{g.classList.remove(`theme-${w}`)}),g.classList.add(`theme-${s}`),h===T.ANIMATED){if(!document.querySelector(".background")){let w=document.createElement("div");w.className="background",document.body.prepend(w)}}else{let w=document.querySelector(".background");w&&(n?w.remove():(w.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{w.remove()},400)))}}function we(){let s=re();if(oe(s,!0),s===T.AUTO){let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{oe(T.AUTO)},300)})}}function J(s,n,g=null){let w={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",b=g?`<p class="placeholder-action">${g}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${w} placeholder-icon'></i>
            <p class="placeholder-message">${n}</p>
            ${b}
        </div>
    `}function xe(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function ce(){let s=document.getElementById("logs-container");if(!s)return!1;s.classList.remove("placeholder-active");let n=localStorage.getItem("service_map");if(!n)return s.classList.add("placeholder-active"),s.innerHTML=J("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let g;try{g=JSON.parse(n)}catch(S){return console.error("Error parsing service_map from localStorage:",S),s.classList.add("placeholder-active"),s.innerHTML=J("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let h=null;if(g&&typeof g.services=="object"){let S=["cs","be","th"];for(let M of S)if(Array.isArray(g.services[M])){let x=g.services[M].find($=>$.short_name==="event"||$.id==="event"||$.id==="dex-event-service");if(x){h=x;break}}}if(!h)return s.classList.add("placeholder-active"),s.innerHTML=J("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let b=`http://${h.domain==="0.0.0.0"?"localhost":h.domain}:${h.port}/logs`;try{let S=await fetch(b);if(!S.ok)return s.classList.add("placeholder-active"),s.innerHTML=J("offline","Event service is offline.","Please ensure the event service is running."),!1;let M=await S.json();if(!M||M.length===0)return s.classList.add("placeholder-active"),s.innerHTML=J("empty","No logs found.","Service logs will appear here when available."),!1;let x=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],$=M.filter(y=>!x.includes(y.id));$.forEach(y=>{y.logs&&Array.isArray(y.logs)?y.logs.reverse():y.logs=[]}),$.reverse();let B=$.map(y=>{let A=y.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${y.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(A)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${A}</pre>
                </div>
            `}).join("");return s.innerHTML=B,document.querySelectorAll(".copy-logs-btn").forEach(y=>{y.addEventListener("click",()=>{let A=unescape(y.dataset.logs);navigator.clipboard.writeText(A).then(()=>{let q=y.querySelector("i");q.classList.remove("bx-copy"),q.classList.add("bx-check"),setTimeout(()=>{q.classList.remove("bx-check"),q.classList.add("bx-copy")},2e3)})})}),!0}catch(S){return console.error("Error fetching logs:",S),s.classList.add("placeholder-active"),s.innerHTML=J("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $e(){console.log("Welcome to Easter Company."),we(),ue();let s=fe();ge(s),ve();let n=document.querySelector("footer"),g=null;function h(){g=null,n?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(e=>e.classList.remove("active","inactive"))}function w(e,i=null){let o=g&&g.id===e.id;g&&g.close(!o),o?g=null:setTimeout(()=>{e.open(),g=e,document.querySelectorAll(".nav-right i").forEach(d=>{let l=d===i;d.classList.toggle("active",l),d.classList.toggle("inactive",!l&&i)}),n?.classList.add("hide")},g?220:0)}function b(e,i,o=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",a=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${l} placeholder-icon'></i><p class="placeholder-message">${i}</p>${a}</div>`}function S(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}let M=null,x=null,$=null,B=null,y=null,A=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),q=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),Q=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':b("config","No service map configured.","Upload service-map.json in Settings."),G=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',P={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}"};function k(e,i){let o=P[e];if(e==="voice_transcribed"&&!i.user_name&&i.user_id&&(o="User {user_id} said in voice channel {channel_id}: {transcription}"),!o)return e;let d=o.replace(/\{(\w+)\}/g,(l,a)=>i[a]!==void 0&&i[a]!==null?i[a]:l);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&i.detected_language&&i.detected_language!=="en"&&i.english_translation&&(d+=` (Translation: ${i.english_translation})`),d}function f(e,i){let o=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!o)return;if(!i){o.textContent="Last updated: never";return}let l=(Date.now()-i)/1e3,a;if(l<30)a=`${Math.floor(l)}s ago`;else{o.textContent="Last updated: never";return}o.textContent=`Last updated: ${a}`}async function F(){if(!localStorage.getItem("service_map"))return null;try{let i=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!i)return null;let d=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/system_monitor`,l=await fetch(d);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function ne(){let e=document.getElementById("services-widgets");if(!e)return;let i=await F();if(!i||!i.services){e.innerHTML=b("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}M=Date.now(),f(4,M);let o=i.services||[];Array.from(e.children).forEach(t=>{t.classList.contains("service-widget")||t.remove()});function d(t){return!t||t==="N/A"||t==="unknown"||t.trim()===""?"-":t}function l(t){if(!t||t==="N/A"||t==="unknown")return"-";let p=t.match(/^(\d+\.\d+\.\d+)/);return p?p[0]:t.split(".").slice(0,3).join(".")||"-"}function a(t){return!t||t.length<=28?t:t.substring(0,28)+"..."}function c(t){if(!t||t==="N/A"||t==="unknown")return"-";let p=t.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!p)return"-";let L=parseInt(p[1])||0,m=parseInt(p[2])||0,v=parseInt(p[3])||0,u=parseFloat(p[4])||0,_=L*86400+m*3600+v*60+u,I=Math.floor(_/86400);if(I>0)return`${I}d`;let H=Math.floor(_/3600);if(H>0)return`${H}h`;let C=Math.floor(_/60);return C>0?`${C}m`:`${Math.floor(_)}s`}function r(t,p=!0){return typeof t!="number"||isNaN(t)?"#666":p?t<30?"#00ff00":t<60?"#88ff00":t<80?"#ffaa00":"#ff0000":t<256?"#00ff00":t<512?"#88ff00":t<1024?"#ffaa00":"#ff0000"}function E(t){let p=t.status==="online",L=p?"service-widget-online":"service-widget-offline",m=p?"bx-check-circle":"bx-x-circle",v=p?"OK":"BAD",u=t.version?l(t.version.str):"-",_=parseFloat(t.cpu?.avg),I=parseFloat(t.memory?.avg),H=isNaN(_)?"-":`${_.toFixed(1)}%`,C=isNaN(I)?"-":`${I.toFixed(1)} MB`,R=r(_,!0),W=r(I,!1),te=c(t.uptime),K="";return p?K=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${u}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${te}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${R};"></i><span style="color: ${R};">${H}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${W};"></i><span style="color: ${W};">${C}</span></div></div>`:K='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${L}" data-service-id="${t.id}"><div class="service-widget-header"><i class="bx ${m}"></i><h3>${t.short_name||t.id}</h3><span class="service-widget-status">${v}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${a(t.domain&&t.port?`${t.domain}:${t.port}`:"")}</span></div>${K}</div></div>`}let j=new Map(Array.from(e.querySelectorAll(".service-widget")).map(t=>[t.dataset.serviceId,t])),O=new Set(o.map(t=>t.id));for(let[t,p]of j)O.has(t)||p.remove();o.forEach(t=>{let p=E(t),L=j.get(t.id);L?L.outerHTML!==p&&(L.outerHTML=p):e.insertAdjacentHTML("beforeend",p)})}async function le(){let e=document.getElementById("models-widgets");if(!e)return;let i=await F();if(!i){e.innerHTML=b("offline","Failed to load model status.");return}B=Date.now(),f(3,B);let o=i.models||[],d=i.whisper;Array.from(e.children).forEach(r=>{r.classList.contains("service-widget")||r.remove()});function l(r){let E=r.status==="Ready";return`
                <div class="service-widget ${E?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${E?"READY":"NOT FOUND"}</span>
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
                </div>`}function a(r){let E=r.status==="Downloaded",j=E?"service-widget-online":"service-widget-offline",O=E?"OK":"MISSING",t=E&&r.size>0?`${(r.size/1e9).toFixed(2)} GB`:"-",p=r.name;return r.type==="custom"&&p.endsWith(":latest")&&(p=p.replace(":latest","")),`<div class="service-widget ${j}" data-model-name="${r.name}"><div class="service-widget-header"><i class="bx ${E?"bx-check-circle":"bx-x-circle"}"></i><h3>${p}</h3><span class="service-widget-status">${O}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${r.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${t}</span></div></div></div>`}let c="";if(d&&(c+=l(d)),c+=o.map(a).join(""),!c){e.innerHTML=b("empty","No models found.");return}e.innerHTML!==c&&(e.innerHTML=c)}async function Ee(){if(!localStorage.getItem("service_map"))return null;try{let i=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!i)return null;let d=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/processes`,l=await fetch(d);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function de(){let e=document.getElementById("processes-widgets");if(!e)return;let i=await Ee();if(i===null){e.innerHTML=b("offline","Failed to load process status.");return}if(y=Date.now(),f(2,y),i.length===0){e.innerHTML=b("empty","No active processes.");return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function o(a){let c=Math.floor(Date.now()/1e3-a.start_time),r=a.retries>0?`<span class="process-retry-badge">Retry ${a.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${a.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${a.channel_id}</h3>
                        ${r}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${a.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${c}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${a.pid}</span>
                        </div>
                    </div>
                </div>`}let d=new Map(Array.from(e.querySelectorAll(".process-widget")).map(a=>[a.dataset.channelId,a])),l=new Set(i.map(a=>a.channel_id));for(let[a,c]of d)l.has(a)||c.remove();i.forEach(a=>{let c=o(a),r=d.get(a.channel_id);r?r.outerHTML!==c&&(r.outerHTML=c):e.insertAdjacentHTML("beforeend",c)})}async function pe(){let e=document.getElementById("events-timeline");if(!e)return;let i=localStorage.getItem("service_map");if(!i){e.innerHTML=b("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{e.innerHTML=b("error","Invalid service map data.");return}if(!o){e.innerHTML=b("error","Event service not found in service map.");return}let l=`http://${o.domain==="0.0.0.0"?"localhost":o.domain}:${o.port}/events?ml=50&format=json`;try{let a=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(m=>m.dataset.eventId).filter(m=>m)),c=await fetch(l);if(!c.ok)throw new Error("Service is offline or unreachable.");let E=(await c.json()).events||[];if(E.length===0){e.innerHTML=b("empty","No events found.");return}let j=m=>{let v=m.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return null}let u=v.type,_=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted",I="event-border-grey";_&&(I=u==="moderation.explicit_content.deleted"?"event-border-red":"event-border-blue");let H=_?"cursor-pointer":"",C=a.has(m.id),R=C?"expanded":"",W=C?"display: block;":"display: none;",te=new Date(m.timestamp*1e3),K=te.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Se=te.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),Me=k(u,v),me="";if(_){let D="";if(u==="engagement.decision")D=`
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${v.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${v.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${v.engagement_raw||"None"}</pre>
                            </div>
                        `;else if(u==="messaging.bot.sent_message")D=`
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${v.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Input (Prompt):</span>
                                <pre class="detail-pre">${v.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${v.response_raw||"None"}</pre>
                            </div>
                        `;else if(u==="moderation.explicit_content.deleted")D=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${v.message_id||"N/A"}</span>
                            </div>
                             <div class="event-detail-row">
                                <span class="detail-label">Reason:</span>
                                <span class="detail-value">${v.reason||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Model Output:</span>
                                <pre class="detail-pre">${S(v.raw_output)||"None"}</pre>
                            </div>
                        `;else if(u==="messaging.user.sent_message"){let U="";v.attachments&&v.attachments.length>0&&(U=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${v.attachments.map(N=>{let ke=N.content_type&&N.content_type.startsWith("image/"),Ie=(N.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${ke?`<div class="attachment-thumb-container"><img src="${N.url}" alt="${N.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${N.url}" target="_blank" class="attachment-link">${N.filename}</a>
                                            <span class="attachment-meta">${N.content_type} \u2022 ${Ie}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),D=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${v.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${v.content||"(empty)"}</pre>
                            </div>
                            ${U}
                         `}me=`
                        <div class="event-details" style="${W}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${D}
                        </div>
                    `}let z=document.createElement("div");if(z.className=`event-item ${I} ${H} ${R}`,z.dataset.eventId=m.id,z.onclick=function(D){if(!_)return;this.classList.toggle("expanded");let U=this.querySelector(".event-details");U&&(U.style.display=U.style.display==="none"?"block":"none")},z.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${K}</span>
                        <span class="event-date">${Se}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${m.service}</div>
                        <div class="event-message">${Me}</div>
                        ${me}
                    </div>
                `,_){let D=z.querySelector(".close-details-btn");D&&D.addEventListener("click",U=>{U.stopPropagation();let se=U.target.closest(".event-item");if(se){se.classList.remove("expanded");let N=se.querySelector(".event-details");N&&(N.style.display="none")}})}return z},O=Array.from(e.children),t=new Map(O.map(m=>[m.dataset.eventId,m])),p=new Set(E.map(m=>m.id));O.forEach(m=>{(!m.dataset.eventId||!p.has(m.dataset.eventId))&&m.remove()});let L=null;E.forEach((m,v)=>{let u=t.get(m.id);!u&&(u=j(m),!u)||(v===0?e.firstElementChild!==u&&e.prepend(u):L&&L.nextElementSibling!==u&&L.after(u),L=u)}),x=Date.now(),f(1,x)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=b("offline","Failed to load events.","The event service may be offline or unreachable."))}}async function _e(){await Promise.all([ne(),le(),pe(),de(),ce().then(d=>{d&&($=Date.now()),f(3,$)})]);let e=setInterval(()=>{if(!ee.isOpen())return clearInterval(e);f(3,$),f(2,x),f(4,B),f(5,M),f(1,y)},1e3),i=setInterval(()=>{if(!ee.isOpen())return clearInterval(i);pe(),de(),ce().then(d=>{d&&($=Date.now()),f(3,$)})},3e3),o=setInterval(()=>{if(!ee.isOpen())return clearInterval(o);ne(),le()},6e4)}function V(){let e=re(),i=ae()||"user@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},d=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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
            </div>`}function Z(){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(c=>{c.addEventListener("click",function(){let r=this.dataset.theme;ye(r),Y.setContent(V()),Z()})});function i(c,r,E,j,O,t,p){let L=document.getElementById(c),m=document.getElementById(r),v=document.getElementById(E),u=document.getElementById(j),_=document.getElementById(O);L&&m&&(L.onclick=()=>m.click(),m.onchange=I=>{let H=I.target.files[0];if(!H)return;if(H.name!==p){u.textContent=`File must be named "${p}"`,u.style.display="block",m.value="";return}let C=new FileReader;C.onload=R=>{try{let W=JSON.parse(R.target.result);localStorage.setItem(t,JSON.stringify(W)),v.textContent=p,u.style.display="none",Y.setContent(V()),Z()}catch{u.textContent="Invalid JSON format",u.style.display="block",m.value=""}},C.onerror=()=>{u.textContent="Failed to read file",u.style.display="block",m.value=""},C.readAsText(H)}),_&&(_.onclick=()=>{localStorage.removeItem(t),Y.setContent(V()),Z()})}i("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),i("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),i("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let c="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!c||c.state==="denied")&&(o.disabled=!0),o.onclick=async r=>{if(r.target.checked)try{await Notification.requestPermission()!=="granted"&&(r.target.checked=!1)}catch{r.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),r.target.checked=!0)}}let d=document.getElementById("microphone-toggle");async function l(){let c="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;d&&(d.disabled=!c||c.state==="denied",d.checked=c?.state==="granted");let r=document.querySelector("#microphone-setting-item .settings-item-description");r&&(r.textContent=c?c.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}l(),d&&!d.disabled&&(d.onclick=async c=>{if(c.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),l()}catch{c.target.checked=!1,l()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),c.target.checked=!0)});let a=document.getElementById("analytics-toggle");a&&(a.checked=localStorage.getItem("easter_analytics_enabled")!=="false",a.onclick=c=>{let r=c.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}let Le=X({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:h}),Te=X({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${ae()||"Unknown"}</p>`,icon:"bx-user",onClose:h}),Y=X({id:"settings-window",title:"Settings",content:V(),icon:"bx-cog",onClose:h,onOpen:()=>{Y.setContent(V()),setTimeout(Z,50)}}),ee=X({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:b("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-cog",title:"Processes",content:Q(),"data-tab-index":1},{icon:"bx-calendar-event",title:"Events",content:G(),"data-tab-index":2},{icon:"bx-history",title:"Logs",content:xe(),"data-tab-index":3},{icon:"bx-brain",title:"Models",content:q(),"data-tab-index":4},{icon:"bx-line-chart",title:"Services",content:A(),"data-tab-index":5}],icon:"bxs-message-dots",onClose:h,onOpen:()=>setTimeout(_e,100)});s?(document.getElementById("user-icon")?.addEventListener("click",e=>w(Te,e.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",e=>w(ee,e.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",e=>w(Y,e.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{w(Le),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",e=>{e.preventDefault();try{he(document.getElementById("email-input").value),window.location.reload()}catch(i){let o=document.getElementById("login-error");o&&(o.textContent=i.message,o.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$e):$e();})();
//# sourceMappingURL=dex.b5ff79d4.js.map
