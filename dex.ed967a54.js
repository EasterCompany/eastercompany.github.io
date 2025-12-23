(()=>{function ie(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ae(e=!1){let n=`
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
    `,l=document.createElement("nav");l.innerHTML=n,document.body.prepend(l)}function oe(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function j(e){let t=null,n=e.onClose||null,l=e.onOpen||null;function a(){if(t){t.classList.add("open"),l&&setTimeout(l,10);return}let d=document.getElementById("windows-container");d||(d=document.createElement("div"),d.id="windows-container",d.className="windows-container",document.body.appendChild(d)),t=document.createElement("div"),t.id=e.id,t.className="window";let f=e.icon||"bx-window",b="",s="",c;e.tabs&&e.tabs.length>0?(b=`<div class="tab-bar">${e.tabs.map((g,h)=>{let w;return g.icon?w=`<i class="bx ${g.icon}"></i>`:g.title&&g.title.length>0?w=`<span class="tab-glyph">${g.title.charAt(0).toUpperCase()}</span>`:w='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${h===0?"active":""}" data-tab-index="${h}">
                        ${w}
                        <span class="tab-title">${g.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${h}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,c=`<div class="window-content">${e.tabs.map((g,h)=>`<div class="tab-content ${h===0?"active":""}" data-tab-content="${h}">${g.content}</div>`).join("")}</div>`):(e.title&&(s=`<div class="window-title">${e.title}</div>`),c=`<div class="window-content">${e.content}</div>`);let p=`
            <div class="window-header">
                <i class="bx ${f}"></i>
                ${b}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=p+c,d.appendChild(t);let m=t.querySelector(".window-close");m&&m.addEventListener("click",i=>{i.stopPropagation(),o()}),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(u=>{u.addEventListener("click",()=>{let g=u.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(h=>h.classList.remove("active")),u.classList.add("active"),t.querySelectorAll(".tab-content").forEach(h=>h.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${g}"]`).classList.add("active")})}),setTimeout(()=>{t.classList.add("open"),l&&l()},10)}function o(d=!1){t&&(d?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function v(d){if(t){let f=t.querySelector(".window-content");f&&(f.innerHTML=d)}}function r(){return t&&t.classList.contains("open")}return{open:a,close:o,setContent:v,isOpen:r,id:e.id}}var V="easter_user_email";function re(){return localStorage.getItem(V)!==null}function q(){return localStorage.getItem(V)}function le(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(V,e.trim())}var ce="easter_theme",S={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function Y(){return localStorage.getItem(ce)||S.AUTO}function Se(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?S.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,S.DEFAULT)}function de(e){if(!Object.values(S).includes(e))throw new Error("Invalid theme");localStorage.setItem(ce,e),G(e)}function G(e,t=!1){let n=document.body,l=e===S.AUTO?Se():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(S).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${e}`),l===S.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(t?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function pe(){let e=Y();if(G(e,!0),e===S.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{G(S.AUTO)},300)})}}function H(e,t,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${a} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${o}
        </div>
    `}function me(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var K=null;async function X(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=H("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(v){return console.error("Error parsing service_map from localStorage:",v),e.classList.add("placeholder-active"),e.innerHTML=H("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let l=null;if(n&&typeof n.services=="object"){let v=["cs","be","th"];for(let r of v)if(Array.isArray(n.services[r])){let d=n.services[r].find(f=>f.short_name==="event"||f.id==="event"||f.id==="dex-event-service");if(d){l=d;break}}}if(!l)return e.classList.add("placeholder-active"),e.innerHTML=H("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let o=`http://${l.domain==="0.0.0.0"?"localhost":l.domain}:${l.port}/logs`;try{let v=await fetch(o);if(!v.ok)return e.classList.add("placeholder-active"),e.innerHTML=H("offline","Event service is offline.","Please ensure the event service is running."),!1;let r=await v.json();if(!r||r.length===0)return e.classList.add("placeholder-active"),e.innerHTML=H("empty","No logs found.","Service logs will appear here when available."),!1;let d=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],f=r.filter(s=>!d.includes(s.id));f.forEach(s=>{s.logs&&Array.isArray(s.logs)?s.logs.reverse():s.logs=[]}),f.reverse();let b=f.map(s=>{let c=s.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${s.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(c)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${c}</pre>
                </div>
            `}).join("");return e.innerHTML=b,document.querySelectorAll(".copy-logs-btn").forEach(s=>{s.addEventListener("click",()=>{let c=unescape(s.dataset.logs);navigator.clipboard.writeText(c).then(()=>{let p=s.querySelector("i");p.classList.remove("bx-copy"),p.classList.add("bx-check"),setTimeout(()=>{p.classList.remove("bx-check"),p.classList.add("bx-copy")},2e3)})})}),K=Date.now(),!0}catch(v){return console.error("Error fetching logs:",v),e.classList.add("placeholder-active"),e.innerHTML=H("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function y(e,t,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${t}</p>${o}</div>`}function A(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function x(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let a=(Date.now()-t)/1e3,o;if(a<30)o=`${Math.floor(a)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${o}`}function Q(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length,n=document.querySelector('.tab[data-tab-index="0"]');if(n){let l=n.querySelector(".notification-badge");t>0?(l||(l=document.createElement("span"),l.className="notification-badge",n.appendChild(l)),l.textContent=t>9?"9+":t,l.style.display="flex"):l&&(l.style.display="none")}}var Ee={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function ue(e,t){let n=Ee[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let l=n.replace(/\{(\w+)\}/g,(a,o)=>t[o]!==void 0&&t[o]!==null?t[o]:a);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(l+=` (Translation: ${t.english_translation})`),l}var ve=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',P=null;async function Z(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=y("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{e.innerHTML=y("error","Invalid service map data.");return}if(!n){e.innerHTML=y("error","Event service not found in service map.");return}let a=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let o=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(m=>m.dataset.eventId).filter(m=>m)),v=await fetch(a);if(!v.ok)throw new Error("Service is offline or unreachable.");let d=(await v.json()).events||[];if(d.length===0){e.innerHTML=y("empty","No events found.");return}let f=m=>{let i=m.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let u=i.type,g=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted"||u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="system.cli.command",h="event-border-grey";g&&(u==="moderation.explicit_content.deleted"?h="event-border-red":u==="analysis.link.completed"||u==="analysis.visual.completed"?h="event-border-purple":u==="system.cli.command"?h="event-border-orange":h="event-border-blue");let w=g?"cursor-pointer":"",$=o.has(m.id),L=$?"expanded":"",N=$?"display: block;":"display: none;",k=new Date(m.timestamp*1e3),C=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),J=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),O=ue(u,i),M="";if(g){let E="";if(u==="engagement.decision")E=`
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
                        `;else if(u==="messaging.bot.sent_message")E=`
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
                        `;else if(u==="moderation.explicit_content.deleted")E=`
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
                                <pre class="detail-pre">${A(i.raw_output)||"None"}</pre>
                            </div>
                        `;else if(u==="analysis.link.completed")E=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${A(i.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${A(i.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${A(i.summary)||"None"}</pre>
                            </div>
                        `;else if(u==="analysis.visual.completed"){let T="";i.base64_preview?T=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(T=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),E=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${i.filename}</span>
                            </div>
                            ${T}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${A(i.description)||"None"}</pre>
                            </div>
                        `}else if(u==="system.cli.command")E=`
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
                                <pre class="detail-pre">${A(i.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(u==="messaging.user.sent_message"){let T="";i.attachments&&i.attachments.length>0&&(T=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${i.attachments.map(_=>{let xe=_.content_type&&_.content_type.startsWith("image/"),$e=(_.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${xe?`<div class="attachment-thumb-container"><img src="${_.url}" alt="${_.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${_.url}" target="_blank" class="attachment-link">${_.filename}</a>
                                            <span class="attachment-meta">${_.content_type} \u2022 ${$e}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),E=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${i.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${i.content||"(empty)"}</pre>
                            </div>
                            ${T}
                         `}M=`
                        <div class="event-details" style="${N}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${E}
                        </div>
                    `}let I=document.createElement("div");if(I.className=`event-item ${h} ${w} ${L}`,I.dataset.eventId=m.id,I.onclick=function(E){if(!g)return;this.classList.toggle("expanded");let T=this.querySelector(".event-details");T&&(T.style.display=T.style.display==="none"?"block":"none")},I.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${C}</span>
                        <span class="event-date">${J}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${m.service}</div>
                        <div class="event-message">${O}</div>
                        ${M}
                    </div>
                `,g){let E=I.querySelector(".close-details-btn");E&&E.addEventListener("click",T=>{T.stopPropagation();let B=T.target.closest(".event-item");if(B){B.classList.remove("expanded");let _=B.querySelector(".event-details");_&&(_.style.display="none")}})}return I},b=Array.from(e.children),s=new Map(b.map(m=>[m.dataset.eventId,m])),c=new Set(d.map(m=>m.id));b.forEach(m=>{(!m.dataset.eventId||!c.has(m.dataset.eventId))&&m.remove()});let p=null;d.forEach((m,i)=>{let u=s.get(m.id);!u&&(u=f(m),!u)||(i===0?e.firstElementChild!==u&&e.prepend(u):p&&p.nextElementSibling!==u&&p.after(u),p=u)}),P=Date.now(),x(2,P)}catch(o){console.error("Error fetching events:",o),e.children.length===0&&(e.innerHTML=y("offline","Failed to load events.","The event service may be offline or unreachable."))}}var ge=()=>'<div id="notifications-list" class="notifications-list"><p>Loading notifications...</p></div>',F=null;async function ee(){let e=document.getElementById("notifications-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=y("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{e.innerHTML=y("error","Invalid service map data.");return}if(!n){e.innerHTML=y("error","Event service not found in service map.");return}let a=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.notification.generated`;try{let o=await fetch(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let r=(await o.json()).events||[];if(r.length===0){e.innerHTML=y("empty","No notifications yet.");return}let d=p=>{let m=p.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let i=m.title||"Untitled Notification",u=m.body||"No description provided.",g=m.priority||"low",h=m.category||"system",w=m.related_event_ids||[],$=localStorage.getItem(`notification_read_${p.id}`)==="true",L=new Date(p.timestamp*1e3),N=L.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),k=L.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),C="";g==="high"||g==="critical"?C="notification-priority-high":g==="medium"&&(C="notification-priority-medium");let J=$?"notification-read":"notification-unread",O="";w.length>0&&(O=`<div class="notification-details-related">Related Events: ${w.map(I=>`<span class="related-event-id">${I.substring(0,8)}...</span>`).join(", ")}</div>`);let M=document.createElement("div");return M.className=`notification-item ${C} ${J}`,M.dataset.notificationId=p.id,M.onclick=()=>{localStorage.setItem(`notification_read_${p.id}`,"true"),M.classList.add("notification-read"),M.classList.remove("notification-unread"),Q()},M.innerHTML=`
                <div class="notification-header">
                    <span class="notification-priority">${g.toUpperCase()}</span>
                    <span class="notification-title">${i}</span>
                </div>
                <div class="notification-body">
                    <p>${u}</p>
                    ${O}
                </div>
                <div class="notification-footer">
                    <span class="notification-category">${h}</span>
                    <span class="notification-timestamp">${k} ${N}</span>
                </div>
            `,M},f=Array.from(e.children),b=new Map(f.map(p=>[p.dataset.notificationId,p])),s=new Set(r.map(p=>p.id));f.forEach(p=>{(!p.dataset.notificationId||!s.has(p.dataset.notificationId))&&p.remove()});let c=null;r.forEach((p,m)=>{let i=b.get(p.id);!i&&(i=d(p),!i)||(m===0?e.firstElementChild!==i&&e.prepend(i):c&&c.nextElementSibling!==i&&c.after(i),c=i)}),F=Date.now(),x(0,F),Q()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=y("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}var fe=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),be=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),he=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),W=null,R=null,z=null;async function ye(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(o=>o.id==="dex-event-service");if(!t)return null;let l=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/system_monitor`,a=await fetch(l);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function Te(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(o=>o.id==="dex-event-service");if(!t)return null;let l=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/processes`,a=await fetch(l);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function te(){let e=document.getElementById("services-widgets");if(!e)return;let t=await ye();if(!t||!t.services){e.innerHTML=y("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}W=Date.now(),x(5,W);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function l(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function a(s){if(!s||s==="N/A"||s==="unknown")return"-";let c=s.match(/^(\d+\.\d+\.\d+)/);return c?c[0]:s.split(".").slice(0,3).join(".")||"-"}function o(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function v(s){if(!s||s==="N/A"||s==="unknown")return"-";let c=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!c)return"-";let p=parseInt(c[1])||0,m=parseInt(c[2])||0,i=parseInt(c[3])||0,u=parseFloat(c[4])||0,g=p*86400+m*3600+i*60+u,h=Math.floor(g/86400);if(h>0)return`${h}d`;let w=Math.floor(g/3600);if(w>0)return`${w}h`;let $=Math.floor(g/60);return $>0?`${$}m`:`${Math.floor(g)}s`}function r(s,c=!0){return typeof s!="number"||isNaN(s)?"#666":c?s<30?"#00ff00":s<60?"#88ff00":s<80?"#ffaa00":"#ff0000":s<256?"#00ff00":s<512?"#88ff00":s<1024?"#ffaa00":"#ff0000"}function d(s){let c=s.status==="online",p=c?"service-widget-online":"service-widget-offline",m=c?"bx-check-circle":"bx-x-circle",i=c?"OK":"BAD",u=s.version?a(s.version.str):"-",g=parseFloat(s.cpu?.avg),h=parseFloat(s.memory?.avg),w=isNaN(g)?"-":`${g.toFixed(1)}%`,$=isNaN(h)?"-":`${h.toFixed(1)} MB`,L=r(g,!0),N=r(h,!1),k=v(s.uptime),C="";return c?C=`<div class="service-widget-info"><span class="info-label">Version:</span><span class="info-value metric-version-monospace">${u}</span></div><div class="service-widget-footer"><div class="service-widget-item"><i class="bx bx-time-five"></i><span>${k}</span></div><div class="service-widget-item"><i class="bx bxs-microchip" style="color: ${L};"></i><span style="color: ${L};">${w}</span></div><div class="service-widget-item"><i class="bx bxs-chip" style="color: ${N};"></i><span style="color: ${N};">${$}</span></div></div>`:C='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${p}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${m}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${i}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${o(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${C}</div></div>`}let f=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),b=new Set(n.map(s=>s.id));for(let[s,c]of f)b.has(s)||c.remove();n.forEach(s=>{let c=d(s),p=f.get(s.id);p?p.outerHTML!==c&&(p.outerHTML=c):e.insertAdjacentHTML("beforeend",c)})}async function se(){let e=document.getElementById("models-widgets");if(!e)return;let t=await ye();if(!t){e.innerHTML=y("offline","Failed to load model status.");return}R=Date.now(),x(4,R);let n=t.models||[],l=t.whisper;Array.from(e.children).forEach(r=>{r.classList.contains("service-widget")||r.remove()});function a(r){let d=r.status==="Ready";return`
                <div class="service-widget ${d?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${d?"READY":"NOT FOUND"}</span>
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
                </div>`}function o(r){let d=r.status==="Downloaded",f=d?"service-widget-online":"service-widget-offline",b=d?"OK":"MISSING",s=d&&r.size>0?`${(r.size/1e9).toFixed(2)} GB`:"-",c=r.name;return r.type==="custom"&&c.endsWith(":latest")&&(c=c.replace(":latest","")),`<div class="service-widget ${f}" data-model-name="${r.name}"><div class="service-widget-header"><i class="bx ${d?"bx-check-circle":"bx-x-circle"}"></i><h3>${c}</h3><span class="service-widget-status">${b}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${r.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${s}</span></div></div></div>`}let v="";if(l&&(v+=a(l)),v+=n.map(o).join(""),!v){e.innerHTML=y("empty","No models found.");return}e.innerHTML!==v&&(e.innerHTML=v)}async function ne(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await Te();if(t===null){e.innerHTML=y("offline","Failed to load process status.");return}if(z=Date.now(),x(1,z),t.length===0){e.innerHTML=y("empty","No active processes.");return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(o){let v=Math.floor(Date.now()/1e3-o.start_time),r=o.retries>0?`<span class="process-retry-badge">Retry ${o.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${o.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${o.channel_id}</h3>
                        ${r}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${o.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${v}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${o.pid}</span>
                        </div>
                    </div>
                </div>`}let l=new Map(Array.from(e.querySelectorAll(".process-widget")).map(o=>[o.dataset.channelId,o])),a=new Set(t.map(o=>o.channel_id));for(let[o,v]of l)a.has(o)||v.remove();t.forEach(o=>{let v=n(o),r=l.get(o.channel_id);r?r.outerHTML!==v&&(r.outerHTML=v):e.insertAdjacentHTML("beforeend",v)})}function D(){let e=Y(),t=q()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},l=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(S).map(a=>`
                    <div class="theme-card ${e===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===S.AUTO?"Automatic theme selection.":a===S.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${e===a?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${l?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function U(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(r=>{r.addEventListener("click",function(){let d=this.dataset.theme;de(d),e.setContent(D()),U(e)})});function n(r,d,f,b,s,c,p){let m=document.getElementById(r),i=document.getElementById(d),u=document.getElementById(f),g=document.getElementById(b),h=document.getElementById(s);m&&i&&(m.onclick=()=>i.click(),i.onchange=w=>{let $=w.target.files[0];if(!$)return;if($.name!==p){g.textContent=`File must be named "${p}"`,g.style.display="block",i.value="";return}let L=new FileReader;L.onload=N=>{try{let k=JSON.parse(N.target.result);localStorage.setItem(c,JSON.stringify(k)),u.textContent=p,g.style.display="none",e.setContent(D()),U(e)}catch{g.textContent="Invalid JSON format",g.style.display="block",i.value=""}},L.onerror=()=>{g.textContent="Failed to read file",g.style.display="block",i.value=""},L.readAsText($)}),h&&(h.onclick=()=>{localStorage.removeItem(c),e.setContent(D()),U(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let l=document.getElementById("notifications-toggle");if(l){let r="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!r||r.state==="denied")&&(l.disabled=!0),l.onclick=async d=>{if(d.target.checked)try{await Notification.requestPermission()!=="granted"&&(d.target.checked=!1)}catch{d.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),d.target.checked=!0)}}let a=document.getElementById("microphone-toggle");async function o(){let r="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;a&&(a.disabled=!r||r.state==="denied",a.checked=r?.state==="granted");let d=document.querySelector("#microphone-setting-item .settings-item-description");d&&(d.textContent=r?r.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}o(),a&&!a.disabled&&(a.onclick=async r=>{if(r.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),o()}catch{r.target.checked=!1,o()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),r.target.checked=!0)});let v=document.getElementById("analytics-toggle");v&&(v.checked=localStorage.getItem("easter_analytics_enabled")!=="false",v.onclick=r=>{let d=r.target.checked;localStorage.setItem("easter_analytics_enabled",d),window.EASTER_ANALYTICS_ENABLED=d,window.EASTER_DEBUG_MODE=d})}function we(){console.log("Welcome to Easter Company."),pe(),ie();let e=re();ae(e),oe();let t=document.querySelector("footer"),n=null;function l(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(b=>b.classList.remove("active","inactive"))}function a(b,s=null){let c=n&&n.id===b.id;n&&n.close(!c),c?n=null:setTimeout(()=>{b.open(),n=b,document.querySelectorAll(".nav-right i").forEach(p=>{let m=p===s;p.classList.toggle("active",m),p.classList.toggle("inactive",!m&&s)}),t?.classList.add("hide")},n?220:0)}async function o(){await Promise.all([te(),se(),Z(),ne(),ee(),X()]);let b=setInterval(()=>{if(!f.isOpen())return clearInterval(b);x(3,K),x(2,P),x(4,R),x(5,W),x(1,z),x(0,F)},1e3),s=setInterval(()=>{if(!f.isOpen())return clearInterval(s);Z(),ne(),ee(),X()},3e3),c=setInterval(()=>{if(!f.isOpen())return clearInterval(c);te(),se()},6e4)}let v=j({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:l}),r=j({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${q()||"Unknown"}</p>`,icon:"bx-user",onClose:l}),d=j({id:"settings-window",title:"Settings",content:D(),icon:"bx-cog",onClose:l,onOpen:()=>{d.setContent(D()),setTimeout(()=>U(d),50)}}),f=j({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:ge(),"data-tab-index":0},{icon:"bx-cog",title:"Processes",content:he(),"data-tab-index":1},{icon:"bx-calendar-event",title:"Events",content:ve(),"data-tab-index":2},{icon:"bx-history",title:"Logs",content:me(),"data-tab-index":3},{icon:"bx-brain",title:"Models",content:be(),"data-tab-index":4},{icon:"bx-line-chart",title:"Services",content:fe(),"data-tab-index":5}],icon:"bxs-message-dots",onClose:l,onOpen:()=>setTimeout(o,100)});e?(document.getElementById("user-icon")?.addEventListener("click",b=>a(r,b.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",b=>a(f,b.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",b=>a(d,b.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(v),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",b=>{b.preventDefault();try{le(document.getElementById("email-input").value),window.location.reload()}catch(s){let c=document.getElementById("login-error");c&&(c.textContent=s.message,c.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",we):we();})();
//# sourceMappingURL=dex.ed967a54.js.map
