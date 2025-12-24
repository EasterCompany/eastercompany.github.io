(()=>{function fe(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ge(e=!1){let n=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${e?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,m=document.createElement("nav");m.innerHTML=n,document.body.prepend(m)}function be(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function F(e){let t=null,n=e.onClose||null,m=e.onOpen||null;function r(){if(t){t.classList.add("open"),window.addEventListener("resize",a),m&&setTimeout(m,10);return}let s=document.getElementById("windows-container");s||(s=document.createElement("div"),s.id="windows-container",s.className="windows-container",document.body.appendChild(s)),t=document.createElement("div"),t.id=e.id,t.className="window";let d=e.icon||"bx-window",u="",b="",o;e.tabs&&e.tabs.length>0?(u=`<div class="tab-bar">${e.tabs.map((h,x)=>{let w;return h.icon?w=`<i class="bx ${h.icon}"></i>`:h.title&&h.title.length>0?w=`<span class="tab-glyph">${h.title.charAt(0).toUpperCase()}</span>`:w='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${x===0?"active":""}" data-tab-index="${x}">
                        ${w}
                        <span class="tab-title">${h.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${x}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,o=`<div class="window-content">${e.tabs.map((h,x)=>`<div class="tab-content ${x===0?"active":""}" data-tab-content="${x}">${h.content}</div>`).join("")}</div>`):(e.title&&(b=`<div class="window-title">${e.title}</div>`),o=`<div class="window-content">${e.content}</div>`);let i=`
            <div class="window-header">
                <i class="bx ${d}"></i>
                ${u}
                ${b}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=i+o,s.appendChild(t);let c=t.querySelector(".window-close");c&&c.addEventListener("click",p=>{p.stopPropagation(),l()}),window.addEventListener("resize",a),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(g=>{g.addEventListener("click",()=>{let h=g.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),g.classList.add("active"),t.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${h}"]`).classList.add("active"),f(g,t)})}),setTimeout(()=>{t.classList.add("open"),m&&m()},10)}function a(){if(!t||!t.classList.contains("open"))return;let s=t.querySelector(".tab.active");s&&f(s,t)}function f(s,d){setTimeout(()=>{let u=d.querySelector(".tab-bar");if(u){let b=Array.from(u.querySelectorAll(".tab")),o=b.indexOf(s),i=u.clientWidth,c=b[Math.max(0,o-2)],p=b[Math.min(b.length-1,o+2)],g=c.offsetLeft-u.offsetLeft-25,x=p.offsetLeft+p.offsetWidth-u.offsetLeft+25-g,w;x<=i?w=g-(i-x)/2:w=s.offsetLeft-u.offsetLeft-i/2+s.offsetWidth/2,u.scrollTo({left:w,behavior:"smooth"})}},350)}function l(s=!1){t&&(window.removeEventListener("resize",a),s?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function v(s){if(t){let d=t.querySelector(".window-content");d&&(d.innerHTML=s)}}function y(){return t&&t.classList.contains("open")}return{open:r,close:l,setContent:v,isOpen:y,id:e.id}}var se="easter_user_email";function he(){return localStorage.getItem(se)!==null}function G(){return localStorage.getItem(se)}function ye(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(se,e.trim())}var we="easter_theme",M={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ie(){return localStorage.getItem(we)||M.AUTO}function Ae(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?M.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,M.DEFAULT)}function xe(e){if(!Object.values(M).includes(e))throw new Error("Invalid theme");localStorage.setItem(we,e),ne(e)}function ne(e,t=!1){let n=document.body,m=e===M.AUTO?Ae():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(M).forEach(r=>{n.classList.remove(`theme-${r}`)}),n.classList.add(`theme-${e}`),m===M.ANIMATED){if(!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}}else{let r=document.querySelector(".background");r&&(t?r.remove():(r.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{r.remove()},400)))}}function $e(){let e=ie();if(ne(e,!0),e===M.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{ne(M.AUTO)},300)})}}function O(e,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",a=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${r} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${a}
        </div>
    `}function Se(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ae=null;async function oe(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=O("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(f){return console.error("Error parsing service_map from localStorage:",f),e.classList.add("placeholder-active"),e.innerHTML=O("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let m=null;if(n&&typeof n.services=="object"){let f=["cs","be","th"];for(let l of f)if(Array.isArray(n.services[l])){let v=n.services[l].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(v){m=v;break}}}if(!m)return e.classList.add("placeholder-active"),e.innerHTML=O("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let a=`http://${m.domain==="0.0.0.0"?"localhost":m.domain}:${m.port}/logs`;try{let f=await fetch(a);if(!f.ok)return e.classList.add("placeholder-active"),e.innerHTML=O("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await f.json();if(!l||l.length===0)return e.classList.add("placeholder-active"),e.innerHTML=O("empty","No logs found.","Service logs will appear here when available."),!1;let v=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=l.filter(d=>!v.includes(d.id));y.forEach(d=>{d.logs&&Array.isArray(d.logs)?d.logs.reverse():d.logs=[]}),y.reverse();let s=y.map(d=>{let u=d.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${d.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(u)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${u}</pre>
                </div>
            `}).join("");return e.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(d=>{d.addEventListener("click",()=>{let u=unescape(d.dataset.logs);navigator.clipboard.writeText(u).then(()=>{let b=d.querySelector("i");b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3)})})}),ae=Date.now(),!0}catch(f){return console.error("Error fetching logs:",f),e.classList.add("placeholder-active"),e.innerHTML=O("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $(e,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",a=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${t}</p>${a}</div>`}function C(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function E(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let r=(Date.now()-t)/1e3,a;if(r<30)a=`${Math.floor(r)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${a}`}function j(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"]`);if(!n)return;let m=n.querySelector(".notification-badge");m&&(t>0?(m.textContent=t>9?"9+":t,m.style.display="flex"):m.style.display="none")}function V(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length;j(0,t)}var De={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Te(e,t){let n=De[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let m=n.replace(/\{(\w+)\}/g,(r,a)=>t[a]!==void 0&&t[a]!==null?t[a]:r);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(m+=` (Translation: ${t.english_translation})`),m}var Le=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',Y=null;async function re(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(f=>f.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!n){e.innerHTML=$("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let a=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(o=>o.dataset.eventId).filter(o=>o)),f=await fetch(r);if(!f.ok)throw new Error("Service is offline or unreachable.");let v=(await f.json()).events||[];if(v.length===0){e.innerHTML=$("empty","No events found.");return}let y=o=>{let i=o.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.type,p=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command",g="event-border-grey";p&&(c==="moderation.explicit_content.deleted"?g="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"?g="event-border-purple":c==="system.cli.command"?g="event-border-orange":g="event-border-blue");let h=p?"cursor-pointer":"",x=a.has(o.id),w=x?"expanded":"",N=x?"display: block;":"display: none;",_=new Date(o.timestamp*1e3),z=_.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),D=_.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),U=Te(c,i),k="";if(p){let S="";if(c==="engagement.decision")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${i.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${i.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${i.engagement_raw||"None"}</pre>
                            </div>
                        `;else if(c==="messaging.bot.sent_message")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${i.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Input (Prompt):</span>
                                <pre class="detail-pre">${i.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${i.response_raw||"None"}</pre>
                            </div>
                        `;else if(c==="moderation.explicit_content.deleted")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${i.message_id||"N/A"}</span>
                            </div>
                             <div class="event-detail-row">
                                <span class="detail-label">Reason:</span>
                                <span class="detail-value">${i.reason||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Model Output:</span>
                                <pre class="detail-pre">${C(i.raw_output)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.link.completed")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${C(i.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${C(i.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${C(i.summary)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.visual.completed"){let L="";i.base64_preview?L=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(L=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${i.filename}</span>
                            </div>
                            ${L}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${C(i.description)||"None"}</pre>
                            </div>
                        `}else if(c==="system.cli.command")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Command:</span>
                                <span class="detail-value">dex ${i.command||"unknown"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Arguments:</span>
                                <span class="detail-value">${i.args||"None"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Status:</span>
                                <span class="detail-value">${i.status||"unknown"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Duration:</span>
                                <span class="detail-value">${i.duration||"N/A"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Exit Code:</span>
                                <span class="detail-value">${i.exit_code!==void 0?i.exit_code:"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Output:</span>
                                <pre class="detail-pre">${C(i.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(c==="messaging.user.sent_message"){let L="";i.attachments&&i.attachments.length>0&&(L=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${i.attachments.map(T=>{let B=T.content_type&&T.content_type.startsWith("image/"),J=(T.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${B?`<div class="attachment-thumb-container"><img src="${T.url}" alt="${T.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${T.url}" target="_blank" class="attachment-link">${T.filename}</a>
                                            <span class="attachment-meta">${T.content_type} \u2022 ${J}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${i.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${i.content||"(empty)"}</pre>
                            </div>
                            ${L}
                         `}k=`
                        <div class="event-details" style="${N}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${S}
                        </div>
                    `}let A=document.createElement("div");if(A.className=`event-item ${g} ${h} ${w}`,A.dataset.eventId=o.id,A.onclick=function(S){if(!p)return;this.classList.toggle("expanded");let L=this.querySelector(".event-details");L&&(L.style.display=L.style.display==="none"?"block":"none")},A.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${z}</span>
                        <span class="event-date">${D}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${o.service}</div>
                        <div class="event-message">${U}</div>
                        ${k}
                    </div>
                `,p){let S=A.querySelector(".close-details-btn");S&&S.addEventListener("click",L=>{L.stopPropagation();let I=L.target.closest(".event-item");if(I){I.classList.remove("expanded");let T=I.querySelector(".event-details");T&&(T.style.display="none")}})}return A},s=Array.from(e.children),d=new Map(s.map(o=>[o.dataset.eventId,o])),u=new Set(v.map(o=>o.id));s.forEach(o=>{(!o.dataset.eventId||!u.has(o.dataset.eventId))&&o.remove()});let b=null;v.forEach((o,i)=>{let c=d.get(o.id);!c&&(c=y(o),!c)||(i===0?e.firstElementChild!==c&&e.prepend(c):b&&b.nextElementSibling!==c&&b.after(c),b=c)}),Y=Date.now(),E(2,Y)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}var Ee=()=>'<div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading notifications...</p></div>',K=null;async function le(){let e=document.getElementById("notifications-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(f=>f.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!n){e.innerHTML=$("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=1000&format=json&event.type=system.notification.generated,system.notification.alert`;try{let a=await fetch(r);if(!a.ok)throw new Error("Service is offline or unreachable.");let l=(await a.json()).events||[],v=Date.now(),y=24*60*60*1e3,s=l.filter(p=>{let g=localStorage.getItem(`notification_read_ts_${p.id}`);if(!g)return!0;let h=parseInt(g);return v-h<y});if(s.length===0){e.innerHTML=$("empty","No notifications yet."),V();return}let d=p=>{let g=p.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let h=g.title||"Untitled Notification",x=g.body||"No description provided.",w=g.priority||"low",N=g.category||"system",_=g.related_event_ids||[],D=!!localStorage.getItem(`notification_read_ts_${p.id}`),U=new Date(p.timestamp*1e3),k=U.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=U.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=D?"event-border-grey":"event-border-blue";D&&(w==="high"||w==="critical")?S="event-border-red":D&&w==="medium"&&(S="event-border-orange");let L=D?"notification-read":"notification-unread",I=u.has(p.id),T=I?"expanded":"",B=I?"display: block;":"display: none;",J="";_.length>0&&(J=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${_.map(W=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${W.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let H=document.createElement("div");H.className=`event-item notification-item ${S} ${L} ${T} cursor-pointer`,H.dataset.notificationId=p.id,H.onclick=function(W){this.classList.toggle("expanded");let q=this.querySelector(".event-details");if(q){let ve=q.style.display==="none";if(q.style.display=ve?"block":"none",ve){if(u.add(p.id),!localStorage.getItem(`notification_read_ts_${p.id}`)){localStorage.setItem(`notification_read_ts_${p.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue");let te="event-border-grey";w==="high"||w==="critical"?te="event-border-red":w==="medium"&&(te="event-border-orange"),this.classList.add(te),V()}}else u.delete(p.id)}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${A}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${N.toUpperCase()}</div>
                    <div class="event-message">${h}</div>
                    <div class="event-details" style="${B}">
                        <div class="event-details-header">
                            <h4>Notification Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Priority:</span>
                            <span class="detail-value" style="color: ${w==="high"||w==="critical"?"#ff4d4d":w==="medium"?"#ffa500":"#888"}">${w.toUpperCase()}</span>
                        </div>
                        <div class="event-detail-block" style="text-align: left;">
                            <span class="detail-label">Insight:</span>
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${C(x)}</p>
                        </div>
                        ${J}
                    </div>
                </div>
            `;let ue=H.querySelector(".close-details-btn");return ue&&ue.addEventListener("click",W=>{W.stopPropagation(),H.classList.remove("expanded");let q=H.querySelector(".event-details");q&&(q.style.display="none"),u.delete(p.id)}),H},u=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(p=>p.dataset.notificationId).filter(p=>p)),b=Array.from(e.children),o=new Map(b.map(p=>[p.dataset.notificationId,p])),i=new Set(s.map(p=>p.id));b.forEach(p=>{(!p.dataset.notificationId||!i.has(p.dataset.notificationId))&&p.remove()});let c=null;s.forEach((p,g)=>{let h=o.get(p.id);!h&&(h=d(p),!h)||(g===0?e.firstElementChild!==h&&e.prepend(h):c&&c.nextElementSibling!==h&&c.after(h),c=h)}),K=Date.now(),E(0,K),V()}catch(a){console.error("Error fetching notifications:",a),e.children.length===0&&(e.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}var _e=()=>'<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>',X=null;async function ce(){let e=document.getElementById("blueprints-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(f=>f.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!n){e.innerHTML=$("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let a=await fetch(r);if(!a.ok)throw new Error("Service is offline or unreachable.");let l=(await a.json()).events||[];if(l.length===0){e.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),j(1,0);return}let v=o=>{let i=o.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.title||"Untitled Blueprint",p=i.summary||i.body||"No summary provided.",g=i.content||"",h=i.category||"architecture",x=i.affected_services||[],w=i.implementation_path||[],N=new Date(o.timestamp*1e3),_=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),z=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=y.has(o.id),U=D?"display: block;":"display: none;",k=document.createElement("div");k.className=`event-item notification-item event-border-purple cursor-pointer ${D?"expanded":""}`,k.dataset.blueprintId=o.id,k.onclick=function(I){this.classList.toggle("expanded");let T=this.querySelector(".event-details");if(T){let B=T.style.display==="none";T.style.display=B?"block":"none",B?y.add(o.id):y.delete(o.id)}};let A=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",S="";w.length>0&&(S=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(I=>`<li>${C(I)}</li>`).join("")}
                        </ul>
                    </div>
                `),k.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${_}</span>
                    <span class="event-date">${z}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${c}</div>
                    <div class="event-details" style="${U}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${C(p)}
                        </div>
                        ${A}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${C(g)}</p>
                        </div>
                        ${S}
                    </div>
                </div>
            `;let L=k.querySelector(".close-details-btn");return L&&L.addEventListener("click",I=>{I.stopPropagation(),k.classList.remove("expanded");let T=k.querySelector(".event-details");T&&(T.style.display="none"),y.delete(o.id)}),k},y=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(o=>o.dataset.blueprintId).filter(o=>o)),s=Array.from(e.children),d=new Map(s.map(o=>[o.dataset.blueprintId,o])),u=new Set(l.map(o=>o.id));s.forEach(o=>{o.dataset.blueprintId&&!u.has(o.dataset.blueprintId)&&o.remove()});let b=null;l.forEach((o,i)=>{let c=d.get(o.id);!c&&(c=v(o),!c)||(i===0?e.firstElementChild!==c&&e.prepend(c):b&&b.nextElementSibling!==c&&b.after(c),b=c)}),X=Date.now(),E(1,X),j(1,l.length)}catch(a){console.error("Error fetching blueprints:",a),e.children.length===0&&(e.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}var Me=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),ke=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),Ie=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),Q=null,Z=null,ee=null;async function Ce(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!t)return null;let m=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/system_monitor`,r=await fetch(m);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function He(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!t)return null;let m=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/processes`,r=await fetch(m);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function de(){let e=document.getElementById("services-widgets");if(!e)return;let t=await Ce();if(!t||!t.services){e.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}Q=Date.now(),E(5,Q);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function m(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function r(s){if(!s||s==="N/A"||s==="unknown")return"-";let d=s.match(/^(\d+\.\d+\.\d+)/);return d?d[0]:s.split(".").slice(0,3).join(".")||"-"}function a(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function f(s){if(!s||s==="N/A"||s==="unknown")return"-";let d=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!d)return"-";let u=parseInt(d[1])||0,b=parseInt(d[2])||0,o=parseInt(d[3])||0,i=parseFloat(d[4])||0,c=u*86400+b*3600+o*60+i,p=Math.floor(c/86400);if(p>0)return`${p}d`;let g=Math.floor(c/3600);if(g>0)return`${g}h`;let h=Math.floor(c/60);return h>0?`${h}m`:`${Math.floor(c)}s`}function l(s){let d=s.status==="online",u=d?"service-widget-online":"service-widget-offline",b=d?"bx-check-circle":"bx-x-circle",o=d?"OK":"BAD",i=s.version?r(s.version.str):"-",c=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",p=s.memory&&s.memory!=="N/A"?s.memory:"-",g=c!=="-"?"#00ff00":"#666",h=c!=="-"?"#fff":"#666",x=p!=="-"?"#00ff00":"#666",w=p!=="-"?"#fff":"#666",N=f(s.uptime),_="";return d?_=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${i}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${N}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${g};"></i>
                        <span style="color: ${h};">${c}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${x};"></i>
                        <span style="color: ${w};">${p}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${u}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${b}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${o}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${a(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let v=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),y=new Set(n.map(s=>s.id));for(let[s,d]of v)y.has(s)||d.remove();n.forEach(s=>{let d=l(s),u=v.get(s.id);u?u.outerHTML!==d&&(u.outerHTML=d):e.insertAdjacentHTML("beforeend",d)})}async function pe(){let e=document.getElementById("models-widgets");if(!e)return;let t=await Ce();if(!t){e.innerHTML=$("offline","Failed to load model status.");return}Z=Date.now(),E(4,Z);let n=t.models||[],m=t.whisper;Array.from(e.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function r(l){let v=l.status==="Ready";return`
                <div class="service-widget ${v?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${v?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${l.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function a(l){let v=l.status==="Downloaded",y=v?"service-widget-online":"service-widget-offline",s=v?"OK":"MISSING",d=v&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",u=l.name;return l.type==="custom"&&u.endsWith(":latest")&&(u=u.replace(":latest","")),`<div class="service-widget ${y}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${v?"bx-check-circle":"bx-x-circle"}"></i><h3>${u}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${d}</span></div></div></div>`}let f="";if(m&&(f+=r(m)),f+=n.map(a).join(""),!f){e.innerHTML=$("empty","No models found.");return}e.innerHTML!==f&&(e.innerHTML=f)}async function me(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await He();if(t===null){e.innerHTML=$("offline","Failed to load process status.");return}if(ee=Date.now(),E(2,ee),t.length===0){e.innerHTML=$("empty","No active processes."),j(2,0);return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(a){let f=Math.floor(Date.now()/1e3-a.start_time),l=a.retries>0?`<span class="process-retry-badge">Retry ${a.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${a.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${a.channel_id}</h3>
                        ${l}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${a.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${f}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${a.pid}</span>
                        </div>
                    </div>
                </div>`}let m=new Map(Array.from(e.querySelectorAll(".process-widget")).map(a=>[a.dataset.channelId,a])),r=new Set(t.map(a=>a.channel_id));for(let[a,f]of m)r.has(a)||f.remove();t.forEach(a=>{let f=n(a),l=m.get(a.channel_id);l?l.outerHTML!==f&&(l.outerHTML=f):e.insertAdjacentHTML("beforeend",f)}),j(2,t.length)}function P(){let e=ie(),t=G()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},m=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(M).map(r=>`
                    <div class="theme-card ${e===r?"active":""}" data-theme="${r}">
                        <div class="theme-preview theme-preview-${r.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${r}</h3>
                            <p>${r===M.AUTO?"Automatic theme selection.":r===M.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${e===r?"Active":"Select"}</span>
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
                            <span class="settings-item-description">${n.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${n.enabled?"checked":""} ${n.supported?"":"disabled"}>
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
            </div>`}function R(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let v=this.dataset.theme;xe(v),e.setContent(P()),R(e)})});function n(l,v,y,s,d,u,b){let o=document.getElementById(l),i=document.getElementById(v),c=document.getElementById(y),p=document.getElementById(s),g=document.getElementById(d);o&&i&&(o.onclick=()=>i.click(),i.onchange=h=>{let x=h.target.files[0];if(!x)return;if(x.name!==b){p.textContent=`File must be named "${b}"`,p.style.display="block",i.value="";return}let w=new FileReader;w.onload=N=>{try{let _=JSON.parse(N.target.result);localStorage.setItem(u,JSON.stringify(_)),c.textContent=b,p.style.display="none",e.setContent(P()),R(e)}catch{p.textContent="Invalid JSON format",p.style.display="block",i.value=""}},w.onerror=()=>{p.textContent="Failed to read file",p.style.display="block",i.value=""},w.readAsText(x)}),g&&(g.onclick=()=>{localStorage.removeItem(u),e.setContent(P()),R(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let m=document.getElementById("notifications-toggle");if(m){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(m.disabled=!0),m.onclick=async v=>{if(v.target.checked)try{await Notification.requestPermission()!=="granted"&&(v.target.checked=!1)}catch{v.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),v.target.checked=!0)}}let r=document.getElementById("microphone-toggle");async function a(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;r&&(r.disabled=!l||l.state==="denied",r.checked=l?.state==="granted");let v=document.querySelector("#microphone-setting-item .settings-item-description");v&&(v.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}a(),r&&!r.disabled&&(r.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),a()}catch{l.target.checked=!1,a()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let f=document.getElementById("analytics-toggle");f&&(f.checked=localStorage.getItem("easter_analytics_enabled")!=="false",f.onclick=l=>{let v=l.target.checked;localStorage.setItem("easter_analytics_enabled",v),window.EASTER_ANALYTICS_ENABLED=v,window.EASTER_DEBUG_MODE=v})}function Ne(){console.log("Welcome to Easter Company."),$e(),fe();let e=he();ge(e),be();let t=document.querySelector("footer"),n=null;function m(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function r(s,d=null){let u=n&&n.id===s.id;n&&n.close(!u),u?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(b=>{let o=b===d;b.classList.toggle("active",o),b.classList.toggle("inactive",!o&&d)}),t?.classList.add("hide")},n?220:0)}async function a(){await Promise.all([de(),pe(),re(),me(),le(),ce(),oe()]);let s=setInterval(()=>{if(!y.isOpen())return clearInterval(s);E(4,ae),E(3,Y),E(5,Z),E(6,Q),E(2,ee),E(1,X),E(0,K)},1e3),d=setInterval(()=>{if(!y.isOpen())return clearInterval(d);re(),me(),le(),ce(),oe()},3e3),u=setInterval(()=>{if(!y.isOpen())return clearInterval(u);de(),pe()},6e4)}let f=F({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:m}),l=F({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${G()||"Unknown"}</p>`,icon:"bx-user",onClose:m}),v=F({id:"settings-window",title:"Settings",content:P(),icon:"bx-cog",onClose:m,onOpen:()=>{v.setContent(P()),setTimeout(()=>R(v),50)}}),y=F({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ee(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:_e(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Ie(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Le(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Se(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:ke(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Me(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:m,onOpen:()=>setTimeout(a,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>r(l,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>r(y,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>r(v,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{r(f),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{ye(document.getElementById("email-input").value),window.location.reload()}catch(d){let u=document.getElementById("login-error");u&&(u.textContent=d.message,u.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ne):Ne();})();
//# sourceMappingURL=dex.0a6ffc6e.js.map
