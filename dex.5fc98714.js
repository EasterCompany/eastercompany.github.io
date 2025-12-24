(()=>{function ge(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function fe(e=!1){let n=`
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
    `,u=document.createElement("nav");u.innerHTML=n,document.body.prepend(u)}function be(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function W(e){let t=null,n=e.onClose||null,u=e.onOpen||null;function o(){if(t){t.classList.add("open"),u&&setTimeout(u,10);return}let p=document.getElementById("windows-container");p||(p=document.createElement("div"),p.id="windows-container",p.className="windows-container",document.body.appendChild(p)),t=document.createElement("div"),t.id=e.id,t.className="window";let b=e.icon||"bx-window",s="",m="",g;e.tabs&&e.tabs.length>0?(s=`<div class="tab-bar">${e.tabs.map((r,f)=>{let y;return r.icon?y=`<i class="bx ${r.icon}"></i>`:r.title&&r.title.length>0?y=`<span class="tab-glyph">${r.title.charAt(0).toUpperCase()}</span>`:y='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${f===0?"active":""}" data-tab-index="${f}">
                        ${y}
                        <span class="tab-title">${r.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${f}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,g=`<div class="window-content">${e.tabs.map((r,f)=>`<div class="tab-content ${f===0?"active":""}" data-tab-content="${f}">${r.content}</div>`).join("")}</div>`):(e.title&&(m=`<div class="window-title">${e.title}</div>`),g=`<div class="window-content">${e.content}</div>`);let h=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${s}
                ${m}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=h+g,p.appendChild(t);let c=t.querySelector(".window-close");c&&c.addEventListener("click",a=>{a.stopPropagation(),i()}),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(l=>{l.addEventListener("click",()=>{let r=l.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(f=>f.classList.remove("active")),l.classList.add("active"),t.querySelectorAll(".tab-content").forEach(f=>f.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${r}"]`).classList.add("active"),l.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})})}),setTimeout(()=>{t.classList.add("open"),u&&u()},10)}function i(p=!1){t&&(p?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function v(p){if(t){let b=t.querySelector(".window-content");b&&(b.innerHTML=p)}}function d(){return t&&t.classList.contains("open")}return{open:o,close:i,setContent:v,isOpen:d,id:e.id}}var se="easter_user_email";function he(){return localStorage.getItem(se)!==null}function J(){return localStorage.getItem(se)}function ye(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(se,e.trim())}var we="easter_theme",E={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ie(){return localStorage.getItem(we)||E.AUTO}function Ae(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?E.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,E.DEFAULT)}function xe(e){if(!Object.values(E).includes(e))throw new Error("Invalid theme");localStorage.setItem(we,e),ne(e)}function ne(e,t=!1){let n=document.body,u=e===E.AUTO?Ae():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(E).forEach(o=>{n.classList.remove(`theme-${o}`)}),n.classList.add(`theme-${e}`),u===E.ANIMATED){if(!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else{let o=document.querySelector(".background");o&&(t?o.remove():(o.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{o.remove()},400)))}}function $e(){let e=ie();if(ne(e,!0),e===E.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{ne(E.AUTO)},300)})}}function O(e,t,n=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",i=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${o} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${i}
        </div>
    `}function Se(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ae=null;async function oe(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=O("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(v){return console.error("Error parsing service_map from localStorage:",v),e.classList.add("placeholder-active"),e.innerHTML=O("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let u=null;if(n&&typeof n.services=="object"){let v=["cs","be","th"];for(let d of v)if(Array.isArray(n.services[d])){let p=n.services[d].find(b=>b.short_name==="event"||b.id==="event"||b.id==="dex-event-service");if(p){u=p;break}}}if(!u)return e.classList.add("placeholder-active"),e.innerHTML=O("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let i=`http://${u.domain==="0.0.0.0"?"localhost":u.domain}:${u.port}/logs`;try{let v=await fetch(i);if(!v.ok)return e.classList.add("placeholder-active"),e.innerHTML=O("offline","Event service is offline.","Please ensure the event service is running."),!1;let d=await v.json();if(!d||d.length===0)return e.classList.add("placeholder-active"),e.innerHTML=O("empty","No logs found.","Service logs will appear here when available."),!1;let p=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],b=d.filter(m=>!p.includes(m.id));b.forEach(m=>{m.logs&&Array.isArray(m.logs)?m.logs.reverse():m.logs=[]}),b.reverse();let s=b.map(m=>{let g=m.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${m.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(g)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return e.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(m=>{m.addEventListener("click",()=>{let g=unescape(m.dataset.logs);navigator.clipboard.writeText(g).then(()=>{let h=m.querySelector("i");h.classList.remove("bx-copy"),h.classList.add("bx-check"),setTimeout(()=>{h.classList.remove("bx-check"),h.classList.add("bx-copy")},2e3)})})}),ae=Date.now(),!0}catch(v){return console.error("Error fetching logs:",v),e.classList.add("placeholder-active"),e.innerHTML=O("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function w(e,t,n=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",i=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${o} placeholder-icon'></i><p class="placeholder-message">${t}</p>${i}</div>`}function N(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function $(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let o=(Date.now()-t)/1e3,i;if(o<30)i=`${Math.floor(o)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${i}`}function B(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"]`);if(!n)return;let u=n.querySelector(".notification-badge");u&&(t>0?(u.textContent=t>9?"9+":t,u.style.display="flex"):u.style.display="none")}function G(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length;B(0,t)}var De={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Te(e,t){let n=De[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let u=n.replace(/\{(\w+)\}/g,(o,i)=>t[i]!==void 0&&t[i]!==null?t[i]:o);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(u+=` (Translation: ${t.english_translation})`),u}var Le=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',V=null;async function re(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let o=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let i=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(c=>c.dataset.eventId).filter(c=>c)),v=await fetch(o);if(!v.ok)throw new Error("Service is offline or unreachable.");let p=(await v.json()).events||[];if(p.length===0){e.innerHTML=w("empty","No events found.");return}let b=c=>{let a=c.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let l=a.type,r=l==="engagement.decision"||l==="messaging.bot.sent_message"||l==="messaging.user.sent_message"||l==="moderation.explicit_content.deleted"||l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.cli.command",f="event-border-grey";r&&(l==="moderation.explicit_content.deleted"?f="event-border-red":l==="analysis.link.completed"||l==="analysis.visual.completed"?f="event-border-purple":l==="system.cli.command"?f="event-border-orange":f="event-border-blue");let y=r?"cursor-pointer":"",_=i.has(c.id),x=_?"expanded":"",A=_?"display: block;":"display: none;",L=new Date(c.timestamp*1e3),k=L.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),D=L.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),H=Te(l,a),I="";if(r){let S="";if(l==="engagement.decision")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Engagement Model:</span>
                                <span class="detail-value">${a.engagement_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Context History:</span>
                                <pre class="detail-pre">${a.context_history||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Engagement Output:</span>
                                <pre class="detail-pre">${a.engagement_raw||"None"}</pre>
                            </div>
                        `;else if(l==="messaging.bot.sent_message")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Response Model:</span>
                                <span class="detail-value">${a.response_model||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Input (Prompt):</span>
                                <pre class="detail-pre">${a.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Response Output:</span>
                                <pre class="detail-pre">${a.response_raw||"None"}</pre>
                            </div>
                        `;else if(l==="moderation.explicit_content.deleted")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${a.message_id||"N/A"}</span>
                            </div>
                             <div class="event-detail-row">
                                <span class="detail-label">Reason:</span>
                                <span class="detail-value">${a.reason||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Model Output:</span>
                                <pre class="detail-pre">${N(a.raw_output)||"None"}</pre>
                            </div>
                        `;else if(l==="analysis.link.completed")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${N(a.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${N(a.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${N(a.summary)||"None"}</pre>
                            </div>
                        `;else if(l==="analysis.visual.completed"){let T="";a.base64_preview?T=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(T=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${a.filename}</span>
                            </div>
                            ${T}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${N(a.description)||"None"}</pre>
                            </div>
                        `}else if(l==="system.cli.command")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Command:</span>
                                <span class="detail-value">dex ${a.command||"unknown"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Arguments:</span>
                                <span class="detail-value">${a.args||"None"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Status:</span>
                                <span class="detail-value">${a.status||"unknown"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Duration:</span>
                                <span class="detail-value">${a.duration||"N/A"}</span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Exit Code:</span>
                                <span class="detail-value">${a.exit_code!==void 0?a.exit_code:"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Output:</span>
                                <pre class="detail-pre">${N(a.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(l==="messaging.user.sent_message"){let T="";a.attachments&&a.attachments.length>0&&(T=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${a.attachments.map(M=>{let ee=M.content_type&&M.content_type.startsWith("image/"),z=(M.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${ee?`<div class="attachment-thumb-container"><img src="${M.url}" alt="${M.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${M.url}" target="_blank" class="attachment-link">${M.filename}</a>
                                            <span class="attachment-meta">${M.content_type} \u2022 ${z}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${a.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${a.content||"(empty)"}</pre>
                            </div>
                            ${T}
                         `}I=`
                        <div class="event-details" style="${A}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${S}
                        </div>
                    `}let C=document.createElement("div");if(C.className=`event-item ${f} ${y} ${x}`,C.dataset.eventId=c.id,C.onclick=function(S){if(!r)return;this.classList.toggle("expanded");let T=this.querySelector(".event-details");T&&(T.style.display=T.style.display==="none"?"block":"none")},C.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${k}</span>
                        <span class="event-date">${D}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${c.service}</div>
                        <div class="event-message">${H}</div>
                        ${I}
                    </div>
                `,r){let S=C.querySelector(".close-details-btn");S&&S.addEventListener("click",T=>{T.stopPropagation();let U=T.target.closest(".event-item");if(U){U.classList.remove("expanded");let M=U.querySelector(".event-details");M&&(M.style.display="none")}})}return C},s=Array.from(e.children),m=new Map(s.map(c=>[c.dataset.eventId,c])),g=new Set(p.map(c=>c.id));s.forEach(c=>{(!c.dataset.eventId||!g.has(c.dataset.eventId))&&c.remove()});let h=null;p.forEach((c,a)=>{let l=m.get(c.id);!l&&(l=b(c),!l)||(a===0?e.firstElementChild!==l&&e.prepend(l):h&&h.nextElementSibling!==l&&h.after(l),h=l)}),V=Date.now(),$(2,V)}catch(i){console.error("Error fetching events:",i),e.children.length===0&&(e.innerHTML=w("offline","Failed to load events.","The event service may be offline or unreachable."))}}var Ee=()=>'<div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading notifications...</p></div>',Y=null;async function le(){let e=document.getElementById("notifications-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let o=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let i=await fetch(o);if(!i.ok)throw new Error("Service is offline or unreachable.");let d=(await i.json()).events||[],p=Date.now(),b=24*60*60*1e3,s=d.filter(r=>{let f=localStorage.getItem(`notification_read_ts_${r.id}`);if(!f)return!0;let y=parseInt(f);return p-y<b});if(s.length===0){e.innerHTML=w("empty","No notifications yet."),G();return}let m=r=>{let f=r.event;if(typeof f=="string")try{f=JSON.parse(f)}catch{return null}let y=f.title||"Untitled Notification",_=f.body||"No description provided.",x=f.priority||"low",A=f.category||"system",L=f.related_event_ids||[],D=!!localStorage.getItem(`notification_read_ts_${r.id}`),H=new Date(r.timestamp*1e3),I=H.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),C=H.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=D?"event-border-grey":"event-border-blue";D&&(x==="high"||x==="critical")?S="event-border-red":D&&x==="medium"&&(S="event-border-orange");let T=D?"notification-read":"notification-unread",U=g.has(r.id),M=U?"expanded":"",ee=U?"display: block;":"display: none;",z="";L.length>0&&(z=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${L.map(F=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${F.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let j=document.createElement("div");j.className=`event-item notification-item ${S} ${T} ${M} cursor-pointer`,j.dataset.notificationId=r.id,j.onclick=function(F){this.classList.toggle("expanded");let q=this.querySelector(".event-details");if(q){let ve=q.style.display==="none";if(q.style.display=ve?"block":"none",ve){if(g.add(r.id),!localStorage.getItem(`notification_read_ts_${r.id}`)){localStorage.setItem(`notification_read_ts_${r.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue");let te="event-border-grey";x==="high"||x==="critical"?te="event-border-red":x==="medium"&&(te="event-border-orange"),this.classList.add(te),G()}}else g.delete(r.id)}},j.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${I}</span>
                    <span class="event-date">${C}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${A.toUpperCase()}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${ee}">
                        <div class="event-details-header">
                            <h4>Notification Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Priority:</span>
                            <span class="detail-value" style="color: ${x==="high"||x==="critical"?"#ff4d4d":x==="medium"?"#ffa500":"#888"}">${x.toUpperCase()}</span>
                        </div>
                        <div class="event-detail-block" style="text-align: left;">
                            <span class="detail-label">Insight:</span>
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${N(_)}</p>
                        </div>
                        ${z}
                    </div>
                </div>
            `;let ue=j.querySelector(".close-details-btn");return ue&&ue.addEventListener("click",F=>{F.stopPropagation(),j.classList.remove("expanded");let q=j.querySelector(".event-details");q&&(q.style.display="none"),g.delete(r.id)}),j},g=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(r=>r.dataset.notificationId).filter(r=>r)),h=Array.from(e.children),c=new Map(h.map(r=>[r.dataset.notificationId,r])),a=new Set(s.map(r=>r.id));h.forEach(r=>{(!r.dataset.notificationId||!a.has(r.dataset.notificationId))&&r.remove()});let l=null;s.forEach((r,f)=>{let y=c.get(r.id);!y&&(y=m(r),!y)||(f===0?e.firstElementChild!==y&&e.prepend(y):l&&l.nextElementSibling!==y&&l.after(y),l=y)}),Y=Date.now(),$(0,Y),G()}catch(i){console.error("Error fetching notifications:",i),e.children.length===0&&(e.innerHTML=w("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}var _e=()=>'<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>',K=null;async function ce(){let e=document.getElementById("blueprints-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let o=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let i=await fetch(o);if(!i.ok)throw new Error("Service is offline or unreachable.");let d=(await i.json()).events||[];if(d.length===0){e.innerHTML=w("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),B(1,0);return}let p=c=>{let a=c.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let l=a.title||"Untitled Blueprint",r=a.body||"No details provided.",f=a.category||"architecture",y=new Date(c.timestamp*1e3),_=y.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),x=y.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=b.has(c.id),L=A?"display: block;":"display: none;",k=document.createElement("div");k.className=`event-item notification-item event-border-purple cursor-pointer ${A?"expanded":""}`,k.dataset.blueprintId=c.id,k.onclick=function(H){this.classList.toggle("expanded");let I=this.querySelector(".event-details");if(I){let C=I.style.display==="none";I.style.display=C?"block":"none",C?b.add(c.id):b.delete(c.id)}},k.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${_}</span>
                    <span class="event-date">${x}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${f.toUpperCase()}</div>
                    <div class="event-message">${l}</div>
                    <div class="event-details" style="${L}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-block" style="text-align: left;">
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left;">${N(r)}</p>
                        </div>
                    </div>
                </div>
            `;let D=k.querySelector(".close-details-btn");return D&&D.addEventListener("click",H=>{H.stopPropagation(),k.classList.remove("expanded");let I=k.querySelector(".event-details");I&&(I.style.display="none"),b.delete(c.id)}),k},b=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(c=>c.dataset.blueprintId).filter(c=>c)),s=Array.from(e.children),m=new Map(s.map(c=>[c.dataset.blueprintId,c])),g=new Set(d.map(c=>c.id));s.forEach(c=>{c.dataset.blueprintId&&!g.has(c.dataset.blueprintId)&&c.remove()});let h=null;d.forEach((c,a)=>{let l=m.get(c.id);!l&&(l=p(c),!l)||(a===0?e.firstElementChild!==l&&e.prepend(l):h&&h.nextElementSibling!==l&&h.after(l),h=l)}),K=Date.now(),$(1,K),B(1,d.length)}catch(i){console.error("Error fetching blueprints:",i),e.children.length===0&&(e.innerHTML=w("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}var Me=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),ke=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),Ie=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),X=null,Q=null,Z=null;async function Ce(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(i=>i.id==="dex-event-service");if(!t)return null;let u=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/system_monitor`,o=await fetch(u);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function He(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(i=>i.id==="dex-event-service");if(!t)return null;let u=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/processes`,o=await fetch(u);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function de(){let e=document.getElementById("services-widgets");if(!e)return;let t=await Ce();if(!t||!t.services){e.innerHTML=w("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}X=Date.now(),$(5,X);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function u(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function o(s){if(!s||s==="N/A"||s==="unknown")return"-";let m=s.match(/^(\d+\.\d+\.\d+)/);return m?m[0]:s.split(".").slice(0,3).join(".")||"-"}function i(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function v(s){if(!s||s==="N/A"||s==="unknown")return"-";let m=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!m)return"-";let g=parseInt(m[1])||0,h=parseInt(m[2])||0,c=parseInt(m[3])||0,a=parseFloat(m[4])||0,l=g*86400+h*3600+c*60+a,r=Math.floor(l/86400);if(r>0)return`${r}d`;let f=Math.floor(l/3600);if(f>0)return`${f}h`;let y=Math.floor(l/60);return y>0?`${y}m`:`${Math.floor(l)}s`}function d(s){let m=s.status==="online",g=m?"service-widget-online":"service-widget-offline",h=m?"bx-check-circle":"bx-x-circle",c=m?"OK":"BAD",a=s.version?o(s.version.str):"-",l=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",r=s.memory&&s.memory!=="N/A"?s.memory:"-",f=l!=="-"?"#00ff00":"#666",y=l!=="-"?"#fff":"#666",_=r!=="-"?"#00ff00":"#666",x=r!=="-"?"#fff":"#666",A=v(s.uptime),L="";return m?L=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${a}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${A}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${f};"></i>
                        <span style="color: ${y};">${l}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${_};"></i>
                        <span style="color: ${x};">${r}</span>
                    </div>
                </div>`:L='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${g}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${h}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${c}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${i(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${L}</div></div>`}let p=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),b=new Set(n.map(s=>s.id));for(let[s,m]of p)b.has(s)||m.remove();n.forEach(s=>{let m=d(s),g=p.get(s.id);g?g.outerHTML!==m&&(g.outerHTML=m):e.insertAdjacentHTML("beforeend",m)})}async function pe(){let e=document.getElementById("models-widgets");if(!e)return;let t=await Ce();if(!t){e.innerHTML=w("offline","Failed to load model status.");return}Q=Date.now(),$(4,Q);let n=t.models||[],u=t.whisper;Array.from(e.children).forEach(d=>{d.classList.contains("service-widget")||d.remove()});function o(d){let p=d.status==="Ready";return`
                <div class="service-widget ${p?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${p?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${d.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function i(d){let p=d.status==="Downloaded",b=p?"service-widget-online":"service-widget-offline",s=p?"OK":"MISSING",m=p&&d.size>0?`${(d.size/1e9).toFixed(2)} GB`:"-",g=d.name;return d.type==="custom"&&g.endsWith(":latest")&&(g=g.replace(":latest","")),`<div class="service-widget ${b}" data-model-name="${d.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${g}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${d.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${m}</span></div></div></div>`}let v="";if(u&&(v+=o(u)),v+=n.map(i).join(""),!v){e.innerHTML=w("empty","No models found.");return}e.innerHTML!==v&&(e.innerHTML=v)}async function me(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await He();if(t===null){e.innerHTML=w("offline","Failed to load process status.");return}if(Z=Date.now(),$(2,Z),t.length===0){e.innerHTML=w("empty","No active processes."),B(2,0);return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(i){let v=Math.floor(Date.now()/1e3-i.start_time),d=i.retries>0?`<span class="process-retry-badge">Retry ${i.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${i.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${i.channel_id}</h3>
                        ${d}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${i.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${v}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${i.pid}</span>
                        </div>
                    </div>
                </div>`}let u=new Map(Array.from(e.querySelectorAll(".process-widget")).map(i=>[i.dataset.channelId,i])),o=new Set(t.map(i=>i.channel_id));for(let[i,v]of u)o.has(i)||v.remove();t.forEach(i=>{let v=n(i),d=u.get(i.channel_id);d?d.outerHTML!==v&&(d.outerHTML=v):e.insertAdjacentHTML("beforeend",v)}),B(2,t.length)}function P(){let e=ie(),t=J()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},u=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(E).map(o=>`
                    <div class="theme-card ${e===o?"active":""}" data-theme="${o}">
                        <div class="theme-preview theme-preview-${o.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${o}</h3>
                            <p>${o===E.AUTO?"Automatic theme selection.":o===E.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${e===o?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${u?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function R(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(d=>{d.addEventListener("click",function(){let p=this.dataset.theme;xe(p),e.setContent(P()),R(e)})});function n(d,p,b,s,m,g,h){let c=document.getElementById(d),a=document.getElementById(p),l=document.getElementById(b),r=document.getElementById(s),f=document.getElementById(m);c&&a&&(c.onclick=()=>a.click(),a.onchange=y=>{let _=y.target.files[0];if(!_)return;if(_.name!==h){r.textContent=`File must be named "${h}"`,r.style.display="block",a.value="";return}let x=new FileReader;x.onload=A=>{try{let L=JSON.parse(A.target.result);localStorage.setItem(g,JSON.stringify(L)),l.textContent=h,r.style.display="none",e.setContent(P()),R(e)}catch{r.textContent="Invalid JSON format",r.style.display="block",a.value=""}},x.onerror=()=>{r.textContent="Failed to read file",r.style.display="block",a.value=""},x.readAsText(_)}),f&&(f.onclick=()=>{localStorage.removeItem(g),e.setContent(P()),R(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let u=document.getElementById("notifications-toggle");if(u){let d="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!d||d.state==="denied")&&(u.disabled=!0),u.onclick=async p=>{if(p.target.checked)try{await Notification.requestPermission()!=="granted"&&(p.target.checked=!1)}catch{p.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),p.target.checked=!0)}}let o=document.getElementById("microphone-toggle");async function i(){let d="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;o&&(o.disabled=!d||d.state==="denied",o.checked=d?.state==="granted");let p=document.querySelector("#microphone-setting-item .settings-item-description");p&&(p.textContent=d?d.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}i(),o&&!o.disabled&&(o.onclick=async d=>{if(d.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),i()}catch{d.target.checked=!1,i()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),d.target.checked=!0)});let v=document.getElementById("analytics-toggle");v&&(v.checked=localStorage.getItem("easter_analytics_enabled")!=="false",v.onclick=d=>{let p=d.target.checked;localStorage.setItem("easter_analytics_enabled",p),window.EASTER_ANALYTICS_ENABLED=p,window.EASTER_DEBUG_MODE=p})}function Ne(){console.log("Welcome to Easter Company."),$e(),ge();let e=he();fe(e),be();let t=document.querySelector("footer"),n=null;function u(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function o(s,m=null){let g=n&&n.id===s.id;n&&n.close(!g),g?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(h=>{let c=h===m;h.classList.toggle("active",c),h.classList.toggle("inactive",!c&&m)}),t?.classList.add("hide")},n?220:0)}async function i(){await Promise.all([de(),pe(),re(),me(),le(),ce(),oe()]);let s=setInterval(()=>{if(!b.isOpen())return clearInterval(s);$(4,ae),$(3,V),$(5,Q),$(6,X),$(2,Z),$(1,K),$(0,Y)},1e3),m=setInterval(()=>{if(!b.isOpen())return clearInterval(m);re(),me(),le(),ce(),oe()},3e3),g=setInterval(()=>{if(!b.isOpen())return clearInterval(g);de(),pe()},6e4)}let v=W({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:u}),d=W({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${J()||"Unknown"}</p>`,icon:"bx-user",onClose:u}),p=W({id:"settings-window",title:"Settings",content:P(),icon:"bx-cog",onClose:u,onOpen:()=>{p.setContent(P()),setTimeout(()=>R(p),50)}}),b=W({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ee(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:_e(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Ie(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Le(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Se(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:ke(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Me(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:u,onOpen:()=>setTimeout(i,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>o(d,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>o(b,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>o(p,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{o(v),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{ye(document.getElementById("email-input").value),window.location.reload()}catch(m){let g=document.getElementById("login-error");g&&(g.textContent=m.message,g.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ne):Ne();})();
//# sourceMappingURL=dex.5fc98714.js.map
