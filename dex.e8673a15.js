(()=>{function ue(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ve(s=!1){let g=`
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
    `,b=document.createElement("nav");b.innerHTML=g,document.body.prepend(b)}function ge(){let s=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,n=document.createElement("footer");n.innerHTML=s,document.body.appendChild(n)}function X(s){let n=null,g=s.onClose||null,b=s.onOpen||null;function w(){if(n){n.classList.add("open"),b&&setTimeout(b,10);return}let x=document.getElementById("windows-container");x||(x=document.createElement("div"),x.id="windows-container",x.className="windows-container",document.body.appendChild(x)),n=document.createElement("div"),n.id=s.id,n.className="window";let $=s.icon||"bx-window",B="",y="",D;s.tabs&&s.tabs.length>0?(B=`<div class="tab-bar">${s.tabs.map((C,f)=>{let F;return C.icon?F=`<i class="bx ${C.icon}"></i>`:C.title&&C.title.length>0?F=`<span class="tab-glyph">${C.title.charAt(0).toUpperCase()}</span>`:F='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${f===0?"active":""}" data-tab-index="${f}">
                        ${F}
                        <span class="tab-title">${C.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${f}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,D=`<div class="window-content">${s.tabs.map((C,f)=>`<div class="tab-content ${f===0?"active":""}" data-tab-content="${f}">${C.content}</div>`).join("")}</div>`):(s.title&&(y=`<div class="window-title">${s.title}</div>`),D=`<div class="window-content">${s.content}</div>`);let q=`
            <div class="window-header">
                <i class="bx ${$}"></i>
                ${B}
                ${y}
                <i class="bx bx-x window-close"></i>
            </div>
        `;n.innerHTML=q+D,x.appendChild(n);let Q=n.querySelector(".window-close");Q&&Q.addEventListener("click",V=>{V.stopPropagation(),h()}),s.tabs&&s.tabs.length>0&&n.querySelectorAll(".tab").forEach(P=>{P.addEventListener("click",()=>{let C=P.getAttribute("data-tab-index");n.querySelectorAll(".tab").forEach(f=>f.classList.remove("active")),P.classList.add("active"),n.querySelectorAll(".tab-content").forEach(f=>f.classList.remove("active")),n.querySelector(`.tab-content[data-tab-content="${C}"]`).classList.add("active")})}),setTimeout(()=>{n.classList.add("open"),b&&b()},10)}function h(x=!1){n&&(x?(n.classList.add("switching"),n.classList.remove("open"),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},200)):(n.classList.remove("open"),g&&g(),setTimeout(()=>{n&&n.parentNode&&n.parentNode.removeChild(n),n=null},400)))}function L(x){if(n){let $=n.querySelector(".window-content");$&&($.innerHTML=x)}}function M(){return n&&n.classList.contains("open")}return{open:w,close:h,setContent:L,isOpen:M,id:s.id}}var ie="easter_user_email";function fe(){return localStorage.getItem(ie)!==null}function ae(){return localStorage.getItem(ie)}function be(s){if(!s||!s.includes("@"))throw new Error("Invalid email address");if(!s.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ie,s.trim())}var he="easter_theme",T={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function re(){return localStorage.getItem(he)||T.AUTO}function Ce(){let s=window.innerWidth,n=window.innerHeight,g=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return s>1920&&n>1080?T.ANIMATED:(s===1920&&n===1080&&g||s<=1920||n<=1080,T.DEFAULT)}function ye(s){if(!Object.values(T).includes(s))throw new Error("Invalid theme");localStorage.setItem(he,s),oe(s)}function oe(s,n=!1){let g=document.body,b=s===T.AUTO?Ce():s;if(n||(g.classList.add("theme-transitioning"),setTimeout(()=>{g.classList.remove("theme-transitioning")},300)),Object.values(T).forEach(w=>{g.classList.remove(`theme-${w}`)}),g.classList.add(`theme-${s}`),b===T.ANIMATED){if(!document.querySelector(".background")){let w=document.createElement("div");w.className="background",document.body.prepend(w)}}else{let w=document.querySelector(".background");w&&(n?w.remove():(w.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{w.remove()},400)))}}function we(){let s=re();if(oe(s,!0),s===T.AUTO){let n;window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{oe(T.AUTO)},300)})}}function J(s,n,g=null){let w={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",h=g?`<p class="placeholder-action">${g}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${w} placeholder-icon'></i>
            <p class="placeholder-message">${n}</p>
            ${h}
        </div>
    `}function xe(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}async function le(){let s=document.getElementById("logs-container");if(!s)return!1;s.classList.remove("placeholder-active");let n=localStorage.getItem("service_map");if(!n)return s.classList.add("placeholder-active"),s.innerHTML=J("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let g;try{g=JSON.parse(n)}catch(L){return console.error("Error parsing service_map from localStorage:",L),s.classList.add("placeholder-active"),s.innerHTML=J("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let b=null;if(g&&typeof g.services=="object"){let L=["cs","be","th"];for(let M of L)if(Array.isArray(g.services[M])){let x=g.services[M].find($=>$.short_name==="event"||$.id==="event"||$.id==="dex-event-service");if(x){b=x;break}}}if(!b)return s.classList.add("placeholder-active"),s.innerHTML=J("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let h=`http://${b.domain==="0.0.0.0"?"localhost":b.domain}:${b.port}/logs`;try{let L=await fetch(h);if(!L.ok)return s.classList.add("placeholder-active"),s.innerHTML=J("offline","Event service is offline.","Please ensure the event service is running."),!1;let M=await L.json();if(!M||M.length===0)return s.classList.add("placeholder-active"),s.innerHTML=J("empty","No logs found.","Service logs will appear here when available."),!1;let x=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],$=M.filter(y=>!x.includes(y.id));$.forEach(y=>{y.logs&&Array.isArray(y.logs)?y.logs.reverse():y.logs=[]}),$.reverse();let B=$.map(y=>{let D=y.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${y.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(D)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${D}</pre>
                </div>
            `}).join("");return s.innerHTML=B,document.querySelectorAll(".copy-logs-btn").forEach(y=>{y.addEventListener("click",()=>{let D=unescape(y.dataset.logs);navigator.clipboard.writeText(D).then(()=>{let q=y.querySelector("i");q.classList.remove("bx-copy"),q.classList.add("bx-check"),setTimeout(()=>{q.classList.remove("bx-check"),q.classList.add("bx-copy")},2e3)})})}),!0}catch(L){return console.error("Error fetching logs:",L),s.classList.add("placeholder-active"),s.innerHTML=J("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $e(){console.log("Welcome to Easter Company."),we(),ue();let s=fe();ve(s),ge();let n=document.querySelector("footer"),g=null;function b(){g=null,n?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(e=>e.classList.remove("active","inactive"))}function w(e,i=null){let o=g&&g.id===e.id;g&&g.close(!o),o?g=null:setTimeout(()=>{e.open(),g=e,document.querySelectorAll(".nav-right i").forEach(m=>{let d=m===i;m.classList.toggle("active",d),m.classList.toggle("inactive",!d&&i)}),n?.classList.add("hide")},g?220:0)}function h(e,i,o=null){let d={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",a=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${d} placeholder-icon'></i><p class="placeholder-message">${i}</p>${a}</div>`}function L(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}let M=null,x=null,$=null,B=null,y=null,D=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),q=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),Q=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':h("config","No service map configured.","Upload service-map.json in Settings."),V=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',P={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}"};function C(e,i){let o=P[e];if(e==="voice_transcribed"&&!i.user_name&&i.user_id&&(o="User {user_id} said in voice channel {channel_id}: {transcription}"),!o)return e;let m=o.replace(/\{(\w+)\}/g,(d,a)=>i[a]!==void 0&&i[a]!==null?i[a]:d);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&i.detected_language&&i.detected_language!=="en"&&i.english_translation&&(m+=` (Translation: ${i.english_translation})`),m}function f(e,i){let o=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!o)return;if(!i){o.textContent="Last updated: never";return}let d=(Date.now()-i)/1e3,a;if(d<30)a=`${Math.floor(d)}s ago`;else{o.textContent="Last updated: never";return}o.textContent=`Last updated: ${a}`}async function F(){if(!localStorage.getItem("service_map"))return null;try{let i=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!i)return null;let m=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/system_monitor`,d=await fetch(m);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);return await d.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function ne(){let e=document.getElementById("services-widgets");if(!e)return;let i=await F();if(!i||!i.services){e.innerHTML=h("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}M=Date.now(),f(4,M);let o=i.services||[];Array.from(e.children).forEach(t=>{t.classList.contains("service-widget")||t.remove()});function m(t){return!t||t==="N/A"||t==="unknown"||t.trim()===""?"-":t}function d(t){if(!t||t==="N/A"||t==="unknown")return"-";let u=t.match(/^(\d+\.\d+\.\d+)/);return u?u[0]:t.split(".").slice(0,3).join(".")||"-"}function a(t){return!t||t.length<=28?t:t.substring(0,28)+"..."}function l(t){if(!t||t==="N/A"||t==="unknown")return"-";let u=t.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!u)return"-";let S=parseInt(u[1])||0,v=parseInt(u[2])||0,c=parseInt(u[3])||0,p=parseFloat(u[4])||0,E=S*86400+v*3600+c*60+p,k=Math.floor(E/86400);if(k>0)return`${k}d`;let j=Math.floor(E/3600);if(j>0)return`${j}h`;let A=Math.floor(E/60);return A>0?`${A}m`:`${Math.floor(E)}s`}function r(t,u=!0){return typeof t!="number"||isNaN(t)?"#666":u?t<30?"#00ff00":t<60?"#88ff00":t<80?"#ffaa00":"#ff0000":t<256?"#00ff00":t<512?"#88ff00":t<1024?"#ffaa00":"#ff0000"}function _(t){let u=t.status==="online",S=u?"service-widget-online":"service-widget-offline",v=u?"bx-check-circle":"bx-x-circle",c=u?"OK":"BAD",p=t.version?d(t.version.str):"-",E=parseFloat(t.cpu?.avg),k=parseFloat(t.memory?.avg),j=isNaN(E)?"-":`${E.toFixed(1)}%`,A=isNaN(k)?"-":`${k.toFixed(1)} MB`,R=r(E,!0),W=r(k,!1),te=l(t.uptime),K="";return u?K=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${p}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${te}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${R};"></i><span style="color: ${R};">${j}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${W};"></i><span style="color: ${W};">${A}</span></div></div>`:K='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${S}" data-service-id="${t.id}"><div class="service-widget-header"><i class="bx ${v}"></i><h3>${t.short_name||t.id}</h3><span class="service-widget-status">${c}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${a(t.domain&&t.port?`${t.domain}:${t.port}`:"")}</span></div>${K}</div></div>`}let U=new Map(Array.from(e.querySelectorAll(".service-widget")).map(t=>[t.dataset.serviceId,t])),O=new Set(o.map(t=>t.id));for(let[t,u]of U)O.has(t)||u.remove();o.forEach(t=>{let u=_(t),S=U.get(t.id);S?S.outerHTML!==u&&(S.outerHTML=u):e.insertAdjacentHTML("beforeend",u)})}async function ce(){let e=document.getElementById("models-widgets");if(!e)return;let i=await F();if(!i){e.innerHTML=h("offline","Failed to load model status.");return}B=Date.now(),f(3,B);let o=i.models||[],m=i.whisper;Array.from(e.children).forEach(r=>{r.classList.contains("service-widget")||r.remove()});function d(r){let _=r.status==="Ready";return`
                <div class="service-widget ${_?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${_?"READY":"NOT FOUND"}</span>
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
                </div>`}function a(r){let _=r.status==="Downloaded",U=_?"service-widget-online":"service-widget-offline",O=_?"OK":"MISSING",t=_&&r.size>0?`${(r.size/1e9).toFixed(2)} GB`:"-",u=r.name;return r.type==="custom"&&u.endsWith(":latest")&&(u=u.replace(":latest","")),`<div class="service-widget ${U}" data-model-name="${r.name}"><div class="service-widget-header"><i class="bx ${_?"bx-check-circle":"bx-x-circle"}"></i><h3>${u}</h3><span class="service-widget-status">${O}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${r.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${t}</span></div></div></div>`}let l="";if(m&&(l+=d(m)),l+=o.map(a).join(""),!l){e.innerHTML=h("empty","No models found.");return}e.innerHTML!==l&&(e.innerHTML=l)}async function _e(){if(!localStorage.getItem("service_map"))return null;try{let i=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!i)return null;let m=`http://${i.domain==="0.0.0.0"?"localhost":i.domain}:${i.port}/processes`,d=await fetch(m);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);return await d.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function de(){let e=document.getElementById("processes-widgets");if(!e)return;let i=await _e();if(i===null){e.innerHTML=h("offline","Failed to load process status.");return}if(y=Date.now(),f(2,y),i.length===0){e.innerHTML=h("empty","No active processes.");return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function o(a){let l=Math.floor(Date.now()/1e3-a.start_time),r=a.retries>0?`<span class="process-retry-badge">Retry ${a.retries}</span>`:"";return`
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
                            <span class="info-value">${l}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${a.pid}</span>
                        </div>
                    </div>
                </div>`}let m=new Map(Array.from(e.querySelectorAll(".process-widget")).map(a=>[a.dataset.channelId,a])),d=new Set(i.map(a=>a.channel_id));for(let[a,l]of m)d.has(a)||l.remove();i.forEach(a=>{let l=o(a),r=m.get(a.channel_id);r?r.outerHTML!==l&&(r.outerHTML=l):e.insertAdjacentHTML("beforeend",l)})}async function pe(){let e=document.getElementById("events-timeline");if(!e)return;let i=localStorage.getItem("service_map");if(!i){e.innerHTML=h("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=h("error","Invalid service map data.");return}if(!o){e.innerHTML=h("error","Event service not found in service map.");return}let d=`http://${o.domain==="0.0.0.0"?"localhost":o.domain}:${o.port}/events?ml=50&format=json`;try{let a=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(v=>v.dataset.eventId).filter(v=>v)),l=await fetch(d);if(!l.ok)throw new Error("Service is offline or unreachable.");let _=(await l.json()).events||[];if(_.length===0){e.innerHTML=h("empty","No events found.");return}let U=v=>{let c=v.event;if(typeof c=="string")try{c=JSON.parse(c)}catch{return null}let p=c.type,E=p==="engagement.decision"||p==="messaging.bot.sent_message"||p==="messaging.user.sent_message"||p==="moderation.explicit_content.deleted"||p==="analysis.link.completed"||p==="analysis.visual.completed",k="event-border-grey";E&&(p==="moderation.explicit_content.deleted"?k="event-border-red":p==="analysis.link.completed"||p==="analysis.visual.completed"?k="event-border-purple":k="event-border-blue");let j=E?"cursor-pointer":"",A=a.has(v.id),R=A?"expanded":"",W=A?"display: block;":"display: none;",te=new Date(v.timestamp*1e3),K=te.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Te=te.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),ke=C(p,c),me="";if(E){let N="";if(p==="engagement.decision")N=`
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${c.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${c.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${c.engagement_raw||"None"}</pre>
                            </div>
                        `;else if(p==="messaging.bot.sent_message")N=`
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${c.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Input (Prompt):</span>
                                <pre class="detail-pre">${c.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${c.response_raw||"None"}</pre>
                            </div>
                        `;else if(p==="moderation.explicit_content.deleted")N=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${c.message_id||"N/A"}</span>
                            </div>
                             <div class="event-detail-row">
                                <span class="detail-label">Reason:</span>
                                <span class="detail-value">${c.reason||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Model Output:</span>
                                <pre class="detail-pre">${L(c.raw_output)||"None"}</pre>
                            </div>
                        `;else if(p==="analysis.link.completed")N=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${c.url}" target="_blank" class="attachment-link">${c.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${L(c.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${L(c.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${L(c.summary)||"None"}</pre>
                            </div>
                        `;else if(p==="analysis.visual.completed"){let I="";c.base64_preview?I=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${c.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:c.url&&(I=`<div class="event-detail-block"><img src="${c.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),N=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${c.filename}</span>
                            </div>
                            ${I}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${L(c.description)||"None"}</pre>
                            </div>
                        `}else if(p==="messaging.user.sent_message"){let I="";c.attachments&&c.attachments.length>0&&(I=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${c.attachments.map(H=>{let Ie=H.content_type&&H.content_type.startsWith("image/"),Me=(H.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${Ie?`<div class="attachment-thumb-container"><img src="${H.url}" alt="${H.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${H.url}" target="_blank" class="attachment-link">${H.filename}</a>
                                            <span class="attachment-meta">${H.content_type} \u2022 ${Me}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),N=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${c.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${c.content||"(empty)"}</pre>
                            </div>
                            ${I}
                         `}me=`
                        <div class="event-details" style="${W}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${N}
                        </div>
                    `}let z=document.createElement("div");if(z.className=`event-item ${k} ${j} ${R}`,z.dataset.eventId=v.id,z.onclick=function(N){if(!E)return;this.classList.toggle("expanded");let I=this.querySelector(".event-details");I&&(I.style.display=I.style.display==="none"?"block":"none")},z.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${K}</span>
                        <span class="event-date">${Te}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${v.service}</div>
                        <div class="event-message">${ke}</div>
                        ${me}
                    </div>
                `,E){let N=z.querySelector(".close-details-btn");N&&N.addEventListener("click",I=>{I.stopPropagation();let se=I.target.closest(".event-item");if(se){se.classList.remove("expanded");let H=se.querySelector(".event-details");H&&(H.style.display="none")}})}return z},O=Array.from(e.children),t=new Map(O.map(v=>[v.dataset.eventId,v])),u=new Set(_.map(v=>v.id));O.forEach(v=>{(!v.dataset.eventId||!u.has(v.dataset.eventId))&&v.remove()});let S=null;_.forEach((v,c)=>{let p=t.get(v.id);!p&&(p=U(v),!p)||(c===0?e.firstElementChild!==p&&e.prepend(p):S&&S.nextElementSibling!==p&&S.after(p),S=p)}),x=Date.now(),f(1,x)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=h("offline","Failed to load events.","The event service may be offline or unreachable."))}}async function Ee(){await Promise.all([ne(),ce(),pe(),de(),le().then(m=>{m&&($=Date.now()),f(3,$)})]);let e=setInterval(()=>{if(!ee.isOpen())return clearInterval(e);f(3,$),f(2,x),f(4,B),f(5,M),f(1,y)},1e3),i=setInterval(()=>{if(!ee.isOpen())return clearInterval(i);pe(),de(),le().then(m=>{m&&($=Date.now()),f(3,$)})},3e3),o=setInterval(()=>{if(!ee.isOpen())return clearInterval(o);ne(),ce()},6e4)}function G(){let e=re(),i=ae()||"user@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},m=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(T).map(d=>`
                    <div class="theme-card ${e===d?"active":""}" data-theme="${d}">
                        <div class="theme-preview theme-preview-${d.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${d}</h3>
                            <p>${d===T.AUTO?"Automatic theme selection.":d===T.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${e===d?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${m?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Z(){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let r=this.dataset.theme;ye(r),Y.setContent(G()),Z()})});function i(l,r,_,U,O,t,u){let S=document.getElementById(l),v=document.getElementById(r),c=document.getElementById(_),p=document.getElementById(U),E=document.getElementById(O);S&&v&&(S.onclick=()=>v.click(),v.onchange=k=>{let j=k.target.files[0];if(!j)return;if(j.name!==u){p.textContent=`File must be named "${u}"`,p.style.display="block",v.value="";return}let A=new FileReader;A.onload=R=>{try{let W=JSON.parse(R.target.result);localStorage.setItem(t,JSON.stringify(W)),c.textContent=u,p.style.display="none",Y.setContent(G()),Z()}catch{p.textContent="Invalid JSON format",p.style.display="block",v.value=""}},A.onerror=()=>{p.textContent="Failed to read file",p.style.display="block",v.value=""},A.readAsText(j)}),E&&(E.onclick=()=>{localStorage.removeItem(t),Y.setContent(G()),Z()})}i("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),i("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),i("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(o.disabled=!0),o.onclick=async r=>{if(r.target.checked)try{await Notification.requestPermission()!=="granted"&&(r.target.checked=!1)}catch{r.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),r.target.checked=!0)}}let m=document.getElementById("microphone-toggle");async function d(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;m&&(m.disabled=!l||l.state==="denied",m.checked=l?.state==="granted");let r=document.querySelector("#microphone-setting-item .settings-item-description");r&&(r.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}d(),m&&!m.disabled&&(m.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),d()}catch{l.target.checked=!1,d()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let a=document.getElementById("analytics-toggle");a&&(a.checked=localStorage.getItem("easter_analytics_enabled")!=="false",a.onclick=l=>{let r=l.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}let Le=X({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:b}),Se=X({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${ae()||"Unknown"}</p>`,icon:"bx-user",onClose:b}),Y=X({id:"settings-window",title:"Settings",content:G(),icon:"bx-cog",onClose:b,onOpen:()=>{Y.setContent(G()),setTimeout(Z,50)}}),ee=X({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:h("empty","No notifications yet."),"data-tab-index":0},{icon:"bx-cog",title:"Processes",content:Q(),"data-tab-index":1},{icon:"bx-calendar-event",title:"Events",content:V(),"data-tab-index":2},{icon:"bx-history",title:"Logs",content:xe(),"data-tab-index":3},{icon:"bx-brain",title:"Models",content:q(),"data-tab-index":4},{icon:"bx-line-chart",title:"Services",content:D(),"data-tab-index":5}],icon:"bxs-message-dots",onClose:b,onOpen:()=>setTimeout(Ee,100)});s?(document.getElementById("user-icon")?.addEventListener("click",e=>w(Se,e.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",e=>w(ee,e.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",e=>w(Y,e.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{w(Le),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",e=>{e.preventDefault();try{be(document.getElementById("email-input").value),window.location.reload()}catch(i){let o=document.getElementById("login-error");o&&(o.textContent=i.message,o.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$e):$e();})();
//# sourceMappingURL=dex.e8673a15.js.map
