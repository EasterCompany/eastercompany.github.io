(()=>{function pe(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function me(e=!1){let n=`
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
    `,r=document.createElement("nav");r.innerHTML=n,document.body.prepend(r)}function ue(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function O(e){let t=null,n=e.onClose||null,r=e.onOpen||null;function i(){if(t){t.classList.add("open"),r&&setTimeout(r,10);return}let d=document.getElementById("windows-container");d||(d=document.createElement("div"),d.id="windows-container",d.className="windows-container",document.body.appendChild(d)),t=document.createElement("div"),t.id=e.id,t.className="window";let b=e.icon||"bx-window",s="",p="",v;e.tabs&&e.tabs.length>0?(s=`<div class="tab-bar">${e.tabs.map((o,g)=>{let y;return o.icon?y=`<i class="bx ${o.icon}"></i>`:o.title&&o.title.length>0?y=`<span class="tab-glyph">${o.title.charAt(0).toUpperCase()}</span>`:y='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${g===0?"active":""}" data-tab-index="${g}">
                        ${y}
                        <span class="tab-title">${o.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${g}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,v=`<div class="window-content">${e.tabs.map((o,g)=>`<div class="tab-content ${g===0?"active":""}" data-tab-content="${g}">${o.content}</div>`).join("")}</div>`):(e.title&&(p=`<div class="window-title">${e.title}</div>`),v=`<div class="window-content">${e.content}</div>`);let h=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${s}
                ${p}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=h+v,d.appendChild(t);let f=t.querySelector(".window-close");f&&f.addEventListener("click",l=>{l.stopPropagation(),a()}),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(m=>{m.addEventListener("click",()=>{let o=m.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(g=>g.classList.remove("active")),m.classList.add("active"),t.querySelectorAll(".tab-content").forEach(g=>g.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${o}"]`).classList.add("active")})}),setTimeout(()=>{t.classList.add("open"),r&&r()},10)}function a(d=!1){t&&(d?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function u(d){if(t){let b=t.querySelector(".window-content");b&&(b.innerHTML=d)}}function c(){return t&&t.classList.contains("open")}return{open:i,close:a,setContent:u,isOpen:c,id:e.id}}var Q="easter_user_email";function ve(){return localStorage.getItem(Q)!==null}function W(){return localStorage.getItem(Q)}function ge(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(Q,e.trim())}var fe="easter_theme",_={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ee(){return localStorage.getItem(fe)||_.AUTO}function ke(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?_.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,_.DEFAULT)}function be(e){if(!Object.values(_).includes(e))throw new Error("Invalid theme");localStorage.setItem(fe,e),Z(e)}function Z(e,t=!1){let n=document.body,r=e===_.AUTO?ke():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(_).forEach(i=>{n.classList.remove(`theme-${i}`)}),n.classList.add(`theme-${e}`),r===_.ANIMATED){if(!document.querySelector(".background")){let i=document.createElement("div");i.className="background",document.body.prepend(i)}}else{let i=document.querySelector(".background");i&&(t?i.remove():(i.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{i.remove()},400)))}}function he(){let e=ee();if(Z(e,!0),e===_.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{Z(_.AUTO)},300)})}}function H(e,t,n=null){let i={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",a=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${i} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${a}
        </div>
    `}function ye(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var te=null;async function se(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=H("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(u){return console.error("Error parsing service_map from localStorage:",u),e.classList.add("placeholder-active"),e.innerHTML=H("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let r=null;if(n&&typeof n.services=="object"){let u=["cs","be","th"];for(let c of u)if(Array.isArray(n.services[c])){let d=n.services[c].find(b=>b.short_name==="event"||b.id==="event"||b.id==="dex-event-service");if(d){r=d;break}}}if(!r)return e.classList.add("placeholder-active"),e.innerHTML=H("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let a=`http://${r.domain==="0.0.0.0"?"localhost":r.domain}:${r.port}/logs`;try{let u=await fetch(a);if(!u.ok)return e.classList.add("placeholder-active"),e.innerHTML=H("offline","Event service is offline.","Please ensure the event service is running."),!1;let c=await u.json();if(!c||c.length===0)return e.classList.add("placeholder-active"),e.innerHTML=H("empty","No logs found.","Service logs will appear here when available."),!1;let d=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],b=c.filter(p=>!d.includes(p.id));b.forEach(p=>{p.logs&&Array.isArray(p.logs)?p.logs.reverse():p.logs=[]}),b.reverse();let s=b.map(p=>{let v=p.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${p.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(v)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${v}</pre>
                </div>
            `}).join("");return e.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(p=>{p.addEventListener("click",()=>{let v=unescape(p.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let h=p.querySelector("i");h.classList.remove("bx-copy"),h.classList.add("bx-check"),setTimeout(()=>{h.classList.remove("bx-check"),h.classList.add("bx-copy")},2e3)})})}),te=Date.now(),!0}catch(u){return console.error("Error fetching logs:",u),e.classList.add("placeholder-active"),e.innerHTML=H("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function w(e,t,n=null){let i={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",a=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${i} placeholder-icon'></i><p class="placeholder-message">${t}</p>${a}</div>`}function M(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function T(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let i=(Date.now()-t)/1e3,a;if(i<30)a=`${Math.floor(i)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${a}`}function R(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length,n=document.querySelector('.tab[data-tab-index="0"]');if(n){let r=n.querySelector(".notification-badge");t>0?(r||(r=document.createElement("span"),r.className="notification-badge",n.appendChild(r)),r.textContent=t>9?"9+":t,r.style.display="flex"):r&&(r.style.display="none")}}var Me={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function we(e,t){let n=Me[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let r=n.replace(/\{(\w+)\}/g,(i,a)=>t[a]!==void 0&&t[a]!==null?t[a]:i);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(r+=` (Translation: ${t.english_translation})`),r}var xe=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',z=null;async function ne(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let i=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let a=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(f=>f.dataset.eventId).filter(f=>f)),u=await fetch(i);if(!u.ok)throw new Error("Service is offline or unreachable.");let d=(await u.json()).events||[];if(d.length===0){e.innerHTML=w("empty","No events found.");return}let b=f=>{let l=f.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{return null}let m=l.type,o=m==="engagement.decision"||m==="messaging.bot.sent_message"||m==="messaging.user.sent_message"||m==="moderation.explicit_content.deleted"||m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="system.cli.command",g="event-border-grey";o&&(m==="moderation.explicit_content.deleted"?g="event-border-red":m==="analysis.link.completed"||m==="analysis.visual.completed"?g="event-border-purple":m==="system.cli.command"?g="event-border-orange":g="event-border-blue");let y=o?"cursor-pointer":"",k=a.has(f.id),$=k?"expanded":"",N=k?"display: block;":"display: none;",E=new Date(f.timestamp*1e3),re=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),K=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),B=we(m,l),P="";if(o){let x="";if(m==="engagement.decision")x=`
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${l.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${l.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${l.engagement_raw||"None"}</pre>
                            </div>
                        `;else if(m==="messaging.bot.sent_message")x=`
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${l.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Input (Prompt):</span>
                                <pre class="detail-pre">${l.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${l.response_raw||"None"}</pre>
                            </div>
                        `;else if(m==="moderation.explicit_content.deleted")x=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${l.message_id||"N/A"}</span>
                            </div>
                             <div class="event-detail-row">
                                <span class="detail-label">Reason:</span>
                                <span class="detail-value">${l.reason||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Model Output:</span>
                                <pre class="detail-pre">${M(l.raw_output)||"None"}</pre>
                            </div>
                        `;else if(m==="analysis.link.completed")x=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${l.url}" target="_blank" class="attachment-link">${l.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${M(l.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${M(l.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${M(l.summary)||"None"}</pre>
                            </div>
                        `;else if(m==="analysis.visual.completed"){let S="";l.base64_preview?S=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${l.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:l.url&&(S=`<div class="event-detail-block"><img src="${l.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),x=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${l.filename}</span>
                            </div>
                            ${S}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${M(l.description)||"None"}</pre>
                            </div>
                        `}else if(m==="system.cli.command")x=`
                            <div class="event-detail-row">
                                <span class="detail-label">Command:</span>
                                <span class="detail-value">dex ${l.command||"unknown"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Arguments:</span>
                                <span class="detail-value">${l.args||"None"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Status:</span>
                                <span class="detail-value">${l.status||"unknown"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Duration:</span>
                                <span class="detail-value">${l.duration||"N/A"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Exit Code:</span>
                                <span class="detail-value">${l.exit_code!==void 0?l.exit_code:"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Output:</span>
                                <pre class="detail-pre">${M(l.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(m==="messaging.user.sent_message"){let S="";l.attachments&&l.attachments.length>0&&(S=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${l.attachments.map(L=>{let X=L.content_type&&L.content_type.startsWith("image/"),F=(L.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${X?`<div class="attachment-thumb-container"><img src="${L.url}" alt="${L.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${L.url}" target="_blank" class="attachment-link">${L.filename}</a>
                                            <span class="attachment-meta">${L.content_type} \u2022 ${F}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),x=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${l.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${l.content||"(empty)"}</pre>
                            </div>
                            ${S}
                         `}P=`
                        <div class="event-details" style="${N}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${x}
                        </div>
                    `}let I=document.createElement("div");if(I.className=`event-item ${g} ${y} ${$}`,I.dataset.eventId=f.id,I.onclick=function(x){if(!o)return;this.classList.toggle("expanded");let S=this.querySelector(".event-details");S&&(S.style.display=S.style.display==="none"?"block":"none")},I.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${re}</span>
                        <span class="event-date">${K}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${f.service}</div>
                        <div class="event-message">${B}</div>
                        ${P}
                    </div>
                `,o){let x=I.querySelector(".close-details-btn");x&&x.addEventListener("click",S=>{S.stopPropagation();let A=S.target.closest(".event-item");if(A){A.classList.remove("expanded");let L=A.querySelector(".event-details");L&&(L.style.display="none")}})}return I},s=Array.from(e.children),p=new Map(s.map(f=>[f.dataset.eventId,f])),v=new Set(d.map(f=>f.id));s.forEach(f=>{(!f.dataset.eventId||!v.has(f.dataset.eventId))&&f.remove()});let h=null;d.forEach((f,l)=>{let m=p.get(f.id);!m&&(m=b(f),!m)||(l===0?e.firstElementChild!==m&&e.prepend(m):h&&h.nextElementSibling!==m&&h.after(m),h=m)}),z=Date.now(),T(2,z)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=w("offline","Failed to load events.","The event service may be offline or unreachable."))}}var $e=()=>'<div id="notifications-list" class="notifications-list"><p>Loading notifications...</p></div>',J=null;async function ie(){let e=document.getElementById("notifications-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let i=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let a=await fetch(i);if(!a.ok)throw new Error("Service is offline or unreachable.");let c=(await a.json()).events||[],d=Date.now(),b=24*60*60*1e3,s=c.filter(o=>{let g=localStorage.getItem(`notification_read_ts_${o.id}`);if(!g)return!0;let y=parseInt(g);return d-y<b});if(s.length===0){e.innerHTML=w("empty","No notifications yet."),R();return}let p=o=>{let g=o.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let y=g.title||"Untitled Notification",k=g.body||"No description provided.",$=g.priority||"low",N=g.category||"system",E=g.related_event_ids||[],K=!!localStorage.getItem(`notification_read_ts_${o.id}`),B=new Date(o.timestamp*1e3),P=B.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),I=B.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),x="event-border-grey";$==="high"||$==="critical"?x="event-border-red":$==="medium"&&(x="event-border-orange");let S=K?"notification-read":"notification-unread",A=v.has(o.id),L=A?"expanded":"",X=A?"display: block;":"display: none;",F="";E.length>0&&(F=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${E.map(U=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${U.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let C=document.createElement("div");C.className=`event-item notification-item ${x} ${S} ${L} cursor-pointer`,C.dataset.notificationId=o.id,C.onclick=function(U){localStorage.getItem(`notification_read_ts_${o.id}`)||(localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),R()),this.classList.toggle("expanded");let D=this.querySelector(".event-details");if(D){let de=D.style.display==="none";D.style.display=de?"block":"none",de?v.add(o.id):v.delete(o.id)}},C.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${P}</span>
                    <span class="event-date">${I}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${N.toUpperCase()}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${X}">
                        <div class="event-details-header">
                            <h4>Notification Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Priority:</span>
                            <span class="detail-value" style="color: ${$==="high"||$==="critical"?"#ff4d4d":$==="medium"?"#ffa500":"#888"}">${$.toUpperCase()}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Insight:</span>
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px;">${M(k)}</p>
                        </div>
                        ${F}
                    </div>
                </div>
            `;let ce=C.querySelector(".close-details-btn");return ce&&ce.addEventListener("click",U=>{U.stopPropagation(),C.classList.remove("expanded");let D=C.querySelector(".event-details");D&&(D.style.display="none"),v.delete(o.id)}),C},v=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(o=>o.dataset.notificationId).filter(o=>o)),h=Array.from(e.children),f=new Map(h.map(o=>[o.dataset.notificationId,o])),l=new Set(s.map(o=>o.id));h.forEach(o=>{(!o.dataset.notificationId||!l.has(o.dataset.notificationId))&&o.remove()});let m=null;s.forEach((o,g)=>{let y=f.get(o.id);!y&&(y=p(o),!y)||(g===0?e.firstElementChild!==y&&e.prepend(y):m&&m.nextElementSibling!==y&&m.after(y),m=y)}),J=Date.now(),T(0,J),R()}catch(a){console.error("Error fetching notifications:",a),e.children.length===0&&(e.innerHTML=w("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}var Se=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),Te=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),_e=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),G=null,V=null,Y=null;async function Le(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!t)return null;let r=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/system_monitor`,i=await fetch(r);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return await i.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function Ie(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(a=>a.id==="dex-event-service");if(!t)return null;let r=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/processes`,i=await fetch(r);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return await i.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function ae(){let e=document.getElementById("services-widgets");if(!e)return;let t=await Le();if(!t||!t.services){e.innerHTML=w("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}G=Date.now(),T(5,G);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function r(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function i(s){if(!s||s==="N/A"||s==="unknown")return"-";let p=s.match(/^(\d+\.\d+\.\d+)/);return p?p[0]:s.split(".").slice(0,3).join(".")||"-"}function a(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function u(s){if(!s||s==="N/A"||s==="unknown")return"-";let p=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!p)return"-";let v=parseInt(p[1])||0,h=parseInt(p[2])||0,f=parseInt(p[3])||0,l=parseFloat(p[4])||0,m=v*86400+h*3600+f*60+l,o=Math.floor(m/86400);if(o>0)return`${o}d`;let g=Math.floor(m/3600);if(g>0)return`${g}h`;let y=Math.floor(m/60);return y>0?`${y}m`:`${Math.floor(m)}s`}function c(s){let p=s.status==="online",v=p?"service-widget-online":"service-widget-offline",h=p?"bx-check-circle":"bx-x-circle",f=p?"OK":"BAD",l=s.version?i(s.version.str):"-",m=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",o=s.memory&&s.memory!=="N/A"?s.memory:"-",g=m!=="-"?"#00ff00":"#666",y=m!=="-"?"#fff":"#666",k=o!=="-"?"#00ff00":"#666",$=o!=="-"?"#fff":"#666",N=u(s.uptime),E="";return p?E=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${l}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${N}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${g};"></i>
                        <span style="color: ${y};">${m}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${k};"></i>
                        <span style="color: ${$};">${o}</span>
                    </div>
                </div>`:E='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${v}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${h}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${f}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${a(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${E}</div></div>`}let d=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),b=new Set(n.map(s=>s.id));for(let[s,p]of d)b.has(s)||p.remove();n.forEach(s=>{let p=c(s),v=d.get(s.id);v?v.outerHTML!==p&&(v.outerHTML=p):e.insertAdjacentHTML("beforeend",p)})}async function oe(){let e=document.getElementById("models-widgets");if(!e)return;let t=await Le();if(!t){e.innerHTML=w("offline","Failed to load model status.");return}V=Date.now(),T(4,V);let n=t.models||[],r=t.whisper;Array.from(e.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function i(c){let d=c.status==="Ready";return`
                <div class="service-widget ${d?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${d?"READY":"NOT FOUND"}</span>
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
                </div>`}function a(c){let d=c.status==="Downloaded",b=d?"service-widget-online":"service-widget-offline",s=d?"OK":"MISSING",p=d&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",v=c.name;return c.type==="custom"&&v.endsWith(":latest")&&(v=v.replace(":latest","")),`<div class="service-widget ${b}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${d?"bx-check-circle":"bx-x-circle"}"></i><h3>${v}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${p}</span></div></div></div>`}let u="";if(r&&(u+=i(r)),u+=n.map(a).join(""),!u){e.innerHTML=w("empty","No models found.");return}e.innerHTML!==u&&(e.innerHTML=u)}async function le(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await Ie();if(t===null){e.innerHTML=w("offline","Failed to load process status.");return}if(Y=Date.now(),T(1,Y),t.length===0){e.innerHTML=w("empty","No active processes.");return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(a){let u=Math.floor(Date.now()/1e3-a.start_time),c=a.retries>0?`<span class="process-retry-badge">Retry ${a.retries}</span>`:"";return`
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
                            <span class="info-value">${u}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${a.pid}</span>
                        </div>
                    </div>
                </div>`}let r=new Map(Array.from(e.querySelectorAll(".process-widget")).map(a=>[a.dataset.channelId,a])),i=new Set(t.map(a=>a.channel_id));for(let[a,u]of r)i.has(a)||u.remove();t.forEach(a=>{let u=n(a),c=r.get(a.channel_id);c?c.outerHTML!==u&&(c.outerHTML=u):e.insertAdjacentHTML("beforeend",u)})}function j(){let e=ee(),t=W()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},r=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(_).map(i=>`
                    <div class="theme-card ${e===i?"active":""}" data-theme="${i}">
                        <div class="theme-preview theme-preview-${i.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${i}</h3>
                            <p>${i===_.AUTO?"Automatic theme selection.":i===_.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${e===i?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${r?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function q(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(c=>{c.addEventListener("click",function(){let d=this.dataset.theme;be(d),e.setContent(j()),q(e)})});function n(c,d,b,s,p,v,h){let f=document.getElementById(c),l=document.getElementById(d),m=document.getElementById(b),o=document.getElementById(s),g=document.getElementById(p);f&&l&&(f.onclick=()=>l.click(),l.onchange=y=>{let k=y.target.files[0];if(!k)return;if(k.name!==h){o.textContent=`File must be named "${h}"`,o.style.display="block",l.value="";return}let $=new FileReader;$.onload=N=>{try{let E=JSON.parse(N.target.result);localStorage.setItem(v,JSON.stringify(E)),m.textContent=h,o.style.display="none",e.setContent(j()),q(e)}catch{o.textContent="Invalid JSON format",o.style.display="block",l.value=""}},$.onerror=()=>{o.textContent="Failed to read file",o.style.display="block",l.value=""},$.readAsText(k)}),g&&(g.onclick=()=>{localStorage.removeItem(v),e.setContent(j()),q(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let r=document.getElementById("notifications-toggle");if(r){let c="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!c||c.state==="denied")&&(r.disabled=!0),r.onclick=async d=>{if(d.target.checked)try{await Notification.requestPermission()!=="granted"&&(d.target.checked=!1)}catch{d.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),d.target.checked=!0)}}let i=document.getElementById("microphone-toggle");async function a(){let c="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;i&&(i.disabled=!c||c.state==="denied",i.checked=c?.state==="granted");let d=document.querySelector("#microphone-setting-item .settings-item-description");d&&(d.textContent=c?c.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}a(),i&&!i.disabled&&(i.onclick=async c=>{if(c.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),a()}catch{c.target.checked=!1,a()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),c.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=c=>{let d=c.target.checked;localStorage.setItem("easter_analytics_enabled",d),window.EASTER_ANALYTICS_ENABLED=d,window.EASTER_DEBUG_MODE=d})}function Ee(){console.log("Welcome to Easter Company."),he(),pe();let e=ve();me(e),ue();let t=document.querySelector("footer"),n=null;function r(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function i(s,p=null){let v=n&&n.id===s.id;n&&n.close(!v),v?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(h=>{let f=h===p;h.classList.toggle("active",f),h.classList.toggle("inactive",!f&&p)}),t?.classList.add("hide")},n?220:0)}async function a(){await Promise.all([ae(),oe(),ne(),le(),ie(),se()]);let s=setInterval(()=>{if(!b.isOpen())return clearInterval(s);T(3,te),T(2,z),T(4,V),T(5,G),T(1,Y),T(0,J)},1e3),p=setInterval(()=>{if(!b.isOpen())return clearInterval(p);ne(),le(),ie(),se()},3e3),v=setInterval(()=>{if(!b.isOpen())return clearInterval(v);ae(),oe()},6e4)}let u=O({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:r}),c=O({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${W()||"Unknown"}</p>`,icon:"bx-user",onClose:r}),d=O({id:"settings-window",title:"Settings",content:j(),icon:"bx-cog",onClose:r,onOpen:()=>{d.setContent(j()),setTimeout(()=>q(d),50)}}),b=O({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:$e(),"data-tab-index":0},{icon:"bx-cog",title:"Processes",content:_e(),"data-tab-index":1},{icon:"bx-calendar-event",title:"Events",content:xe(),"data-tab-index":2},{icon:"bx-history",title:"Logs",content:ye(),"data-tab-index":3},{icon:"bx-brain",title:"Models",content:Te(),"data-tab-index":4},{icon:"bx-line-chart",title:"Services",content:Se(),"data-tab-index":5}],icon:"bxs-message-dots",onClose:r,onOpen:()=>setTimeout(a,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>i(c,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>i(b,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>i(d,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{i(u),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{ge(document.getElementById("email-input").value),window.location.reload()}catch(p){let v=document.getElementById("login-error");v&&(v.textContent=p.message,v.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ee):Ee();})();
//# sourceMappingURL=dex.3f930a66.js.map
