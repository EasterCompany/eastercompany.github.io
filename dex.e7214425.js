(()=>{function Ee(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Le(s=!1){let n=`
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
    `,o=document.createElement("nav");o.innerHTML=n,document.body.prepend(o)}function Te(){let s=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=s,document.body.appendChild(t)}function ne(s){let t=null,n=s.onClose||null,o=s.onOpen||null;function r(){if(t){t.classList.add("open"),window.addEventListener("resize",p),o&&setTimeout(o,10);return}let i=document.getElementById("windows-container");i||(i=document.createElement("div"),i.id="windows-container",i.className="windows-container",document.body.appendChild(i)),t=document.createElement("div"),t.id=s.id,t.className="window";let c=s.icon||"bx-window",g="",m="",h;s.tabs&&s.tabs.length>0?(g=`<div class="tab-bar">${s.tabs.map((w,$)=>{let x;return w.icon?x=`<i class="bx ${w.icon}"></i>`:w.title&&w.title.length>0?x=`<span class="tab-glyph">${w.title.charAt(0).toUpperCase()}</span>`:x='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${$===0?"active":""}" data-tab-index="${$}">
                        ${x}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${$}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,h=`<div class="window-content">${s.tabs.map((w,$)=>`<div class="tab-content ${$===0?"active":""}" data-tab-content="${$}">${w.content}</div>`).join("")}</div>`):(s.title&&(m=`<div class="window-title">${s.title}</div>`),h=`<div class="window-content">${s.content}</div>`);let a=`
            <div class="window-header">
                <i class="bx ${c}"></i>
                ${g}
                ${m}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=a+h,i.appendChild(t);let d=t.querySelector(".window-close");d&&d.addEventListener("click",u=>{u.stopPropagation(),l()}),window.addEventListener("resize",p),s.tabs&&s.tabs.length>0&&t.querySelectorAll(".tab").forEach(b=>{b.addEventListener("click",()=>{let w=b.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach($=>$.classList.remove("active")),b.classList.add("active"),t.querySelectorAll(".tab-content").forEach($=>$.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${w}"]`).classList.add("active"),f(b,t)})}),setTimeout(()=>{t.classList.add("open"),o&&o()},10)}function p(){if(!t||!t.classList.contains("open"))return;let i=t.querySelector(".tab.active");i&&f(i,t)}function f(i,c){setTimeout(()=>{let g=c.querySelector(".tab-bar");if(g){let m=Array.from(g.querySelectorAll(".tab")),h=m.indexOf(i),a=g.clientWidth,d=m[Math.max(0,h-2)],u=m[Math.min(m.length-1,h+2)],b=d.offsetLeft-g.offsetLeft-25,$=u.offsetLeft+u.offsetWidth-g.offsetLeft+25-b,x;$<=a?x=b-(a-$)/2:x=i.offsetLeft-g.offsetLeft-a/2+i.offsetWidth/2,g.scrollTo({left:x,behavior:"smooth"})}},350)}function l(i=!1){t&&(window.removeEventListener("resize",p),i?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function v(i){if(t){let c=t.querySelector(".window-content");c&&(c.innerHTML=i)}}function y(){return t&&t.classList.contains("open")}return{open:r,close:l,setContent:v,isOpen:y,id:s.id}}var fe="easter_user_email";function _e(){return localStorage.getItem(fe)!==null}function oe(){return localStorage.getItem(fe)}function Ie(s){if(!s||!s.includes("@"))throw new Error("Invalid email address");if(!s.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(fe,s.trim())}var Me="easter_theme",C={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function be(){return localStorage.getItem(Me)||C.AUTO}function Ye(){let s=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return s>1920&&t>1080?C.ANIMATED:(s===1920&&t===1080&&n||s<=1920||t<=1080,C.DEFAULT)}function ke(s){if(!Object.values(C).includes(s))throw new Error("Invalid theme");localStorage.setItem(Me,s),ge(s)}function ge(s,t=!1){let n=document.body,o=s===C.AUTO?Ye():s;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(C).forEach(r=>{n.classList.remove(`theme-${r}`)}),n.classList.add(`theme-${s}`),o===C.ANIMATED){if(!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}}else{let r=document.querySelector(".background");r&&(t?r.remove():(r.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{r.remove()},400)))}}function Ae(){let s=be();if(ge(s,!0),s===C.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{ge(C.AUTO)},300)})}}function z(s,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",p=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${r} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${p}
        </div>
    `}function Ce(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var he=null;async function ye(){let s=document.getElementById("logs-container");if(!s)return!1;s.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return s.classList.add("placeholder-active"),s.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(f){return console.error("Error parsing service_map from localStorage:",f),s.classList.add("placeholder-active"),s.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let o=null;if(n&&typeof n.services=="object"){let f=["cs","be","th"];for(let l of f)if(Array.isArray(n.services[l])){let v=n.services[l].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(v){o=v;break}}}if(!o)return s.classList.add("placeholder-active"),s.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let p=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/logs`;try{let f=await fetch(p);if(!f.ok)return s.classList.add("placeholder-active"),s.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await f.json();if(!l||l.length===0)return s.classList.add("placeholder-active"),s.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let v=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=l.filter(c=>!v.includes(c.id));y.forEach(c=>{c.logs&&Array.isArray(c.logs)?c.logs.reverse():c.logs=[]}),y.reverse();let i=y.map(c=>{let g=c.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${c.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(g)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return s.innerHTML=i,document.querySelectorAll(".copy-logs-btn").forEach(c=>{c.addEventListener("click",()=>{let g=unescape(c.dataset.logs);navigator.clipboard.writeText(g).then(()=>{let m=c.querySelector("i");m.classList.remove("bx-copy"),m.classList.add("bx-check"),setTimeout(()=>{m.classList.remove("bx-check"),m.classList.add("bx-copy")},2e3)})})}),he=Date.now(),!0}catch(f){return console.error("Error fetching logs:",f),s.classList.add("placeholder-active"),s.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function S(s,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",p=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${t}</p>${p}</div>`}function M(s){return s&&s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _(s,t){let n=document.querySelector(`.tab[data-tab-index="${s}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let r=(Date.now()-t)/1e3,p;if(r<30)p=`${Math.floor(r)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${p}`}function q(s,t){let n=document.querySelector(`.tab[data-tab-index="${s}"]`);if(!n)return;let o=n.querySelector(".notification-badge");o&&(t>0?(o.textContent=t>9?"9+":t,o.style.display="flex"):o.style.display="none")}function le(){let s=document.getElementById("notifications-list");if(!s)return;let t=s.querySelectorAll(".notification-unread").length;q(0,t)}var Ve={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function De(s,t){let n=Ve[s];if(s==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),s==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return s;let o=n.replace(/\{(\w+)\}/g,(r,p)=>t[p]!==void 0&&t[p]!==null?t[p]:r);return(s==="messaging.user.transcribed"||s==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(o+=` (Translation: ${t.english_translation})`),o}var Ne=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,J=null,G=new Set,Be=[];async function ie(s=!1){let t=document.getElementById("events-timeline");if(!t)return;Ke();let n=localStorage.getItem("service_map");if(!n){t.innerHTML=S("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{t.innerHTML=S("error","Invalid service map data.");return}if(!o){t.innerHTML=S("error","Event service not found in service map.");return}let p=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let f=await fetch(p);if(!f.ok)throw new Error("Service is offline or unreachable.");let v=(await f.json()).events||[];if(Be=v,J=Date.now(),_(3,J),v.length===0){t.innerHTML=S("empty","No events found.");return}s&&(t.innerHTML="");let y=h=>{let a=h.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let d=a.type,u=d==="engagement.decision"||d==="messaging.bot.sent_message"||d==="messaging.user.sent_message"||d==="moderation.explicit_content.deleted"||d==="analysis.link.completed"||d==="analysis.visual.completed"||d==="system.cli.command",b="event-border-grey";u&&(d==="moderation.explicit_content.deleted"?b="event-border-red":d==="analysis.link.completed"||d==="analysis.visual.completed"?b="event-border-purple":d==="system.cli.command"?b="event-border-orange":b="event-border-blue");let w=u?"cursor-pointer":"",$=G.has(h.id),x=$?"expanded":"",D=$?"display: block;":"display: none;",E=new Date(h.timestamp*1e3),B=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Z=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),j=De(d,a),ee="";if(u){let I="";if(d==="engagement.decision")I=`
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
                        `;else if(d==="messaging.bot.sent_message")I=`
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
                        `;else if(d==="moderation.explicit_content.deleted")I=`
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
                                <pre class="detail-pre">${M(a.raw_output)||"None"}</pre>
                            </div>
                        `;else if(d==="analysis.link.completed")I=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${M(a.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${M(a.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${M(a.summary)||"None"}</pre>
                            </div>
                        `;else if(d==="analysis.visual.completed"){let k="";a.base64_preview?k=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(k=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),I=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${a.filename}</span>
                            </div>
                            ${k}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${M(a.description)||"None"}</pre>
                            </div>
                        `}else if(d==="system.cli.command")I=`
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
                                <pre class="detail-pre">${M(a.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(d==="messaging.user.sent_message"){let k="";a.attachments&&a.attachments.length>0&&(k=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${a.attachments.map(L=>{let O=L.content_type&&L.content_type.startsWith("image/"),N=(L.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${O?`<div class="attachment-thumb-container"><img src="${L.url}" alt="${L.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${L.url}" target="_blank" class="attachment-link">${L.filename}</a>
                                            <span class="attachment-meta">${L.content_type} \u2022 ${N}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),I=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${a.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${a.content||"(empty)"}</pre>
                            </div>
                            ${k}
                         `}ee=`
                        <div class="event-details" style="${D}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${I}
                        </div>
                    `}let T=document.createElement("div");if(T.className=`event-item ${b} ${w} ${x}`,T.dataset.eventId=h.id,T.onclick=function(I){if(!u)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(h.id);let A=this.querySelector(".event-details");A&&(A.style.display="none")}else{this.classList.add("expanded"),G.add(h.id);let A=this.querySelector(".event-details");A&&(A.style.display="block")}},T.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${B}</span>
                        <span class="event-date">${Z}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${h.service}</div>
                        <div class="event-message">${j}</div>
                        ${ee}
                    </div>
                `,u){let I=T.querySelector(".close-details-btn");I&&I.addEventListener("click",k=>{k.stopPropagation();let A=k.target.closest(".event-item");if(A){A.classList.remove("expanded"),G.delete(h.id);let L=A.querySelector(".event-details");L&&(L.style.display="none")}})}return T},i=Array.from(t.children),c=new Map(i.map(h=>[h.dataset.eventId,h])),g=new Set(v.map(h=>h.id));i.forEach(h=>{let a=h.dataset.eventId;(!a||!g.has(a))&&h.remove()});let m=null;v.forEach((h,a)=>{let d=c.get(h.id);(!d||s)&&(d&&d.remove(),d=y(h),!d)||(a===0?t.firstElementChild!==d&&t.prepend(d):m&&m.nextElementSibling!==d&&m.after(d),m=d)}),J=Date.now(),_(3,J)}catch(f){console.error("Error fetching events:",f),t.children.length===0&&(t.innerHTML=S("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Ke(){let s=document.getElementById("events-expand-all"),t=document.getElementById("events-close-all");s&&!s.dataset.listenerAttached&&(s.onclick=()=>{Be.forEach(n=>G.add(n.id)),ie(!0)},s.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{G.clear(),ie(!0)},t.dataset.listenerAttached="true")}var He=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,Y=null,P=new Set,re=[];async function F(s=!1){let t=document.getElementById("notifications-list");if(!t)return;Xe(),s&&(t.innerHTML="<p>Updating...</p>");let n=localStorage.getItem("service_map");if(!n){t.innerHTML=S("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{t.innerHTML=S("error","Invalid service map data.");return}if(!o){t.innerHTML=S("error","Event service not found in service map.");return}let p=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.notification.generated,system.analysis.audit`;try{let f=await fetch(p);if(!f.ok)throw new Error("Service is offline or unreachable.");let v=(await f.json()).events||[];Y=Date.now(),_(0,Y);let y=Date.now(),i=24*60*60*1e3,c=v.filter(u=>{let b=localStorage.getItem(`notification_read_ts_${u.id}`);if(!b)return!0;let w=parseInt(b);return y-w<i});if(re=c,s&&(t.innerHTML=""),c.length===0){t.innerHTML=S("empty","No notifications yet."),le();return}let g=u=>{let b=u.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return null}let $=b.type==="system.analysis.audit",x=$?`Analysis Audit: ${b.tier?.toUpperCase()}`:b.title||"Untitled Notification",D=$?"Raw analyst input and output logs.":b.body||"No description provided.",E=$?"low":b.priority||"low",B=!$&&!!b.alert,Z=$?"audit":b.category||"system",j=b.related_event_ids||[],T=!!localStorage.getItem(`notification_read_ts_${u.id}`),I=new Date(u.timestamp*1e3),k=I.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=I.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),L=T?"event-border-grey":"event-border-blue";$&&(L=T?"event-border-grey":"event-border-purple"),!T&&B&&(L="event-border-red"),T&&(E==="high"||E==="critical")?L="event-border-red":T&&E==="medium"&&(L="event-border-orange");let O=T?"notification-read":"notification-unread",N=P.has(u.id),Je=N?"expanded":"",Ge=N?"display: block;":"display: none;",ue="";if($)ue=`
                    <div class="event-detail-row">
                        <span class="detail-label">Tier:</span>
                        <span class="detail-value">${b.tier}</span>
                    </div>
                    <div class="event-detail-row">
                        <span class="detail-label">Model:</span>
                        <span class="detail-value">${b.model}</span>
                    </div>
                    <div class="event-detail-block">
                        <span class="detail-label">Raw Output:</span>
                        <pre class="detail-pre">${M(b.raw_output)}</pre>
                    </div>
                    <div class="event-detail-block">
                        <span class="detail-label">Raw Input (Prompt):</span>
                        <pre class="detail-pre">${M(b.raw_input)}</pre>
                    </div>
                `;else{let W="";j.length>0&&(W=`
                        <div class="event-detail-row">
                            <span class="detail-label">Related Events:</span>
                            <span class="detail-value">${j.map(te=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${te.substring(0,8)}...</span>`).join(", ")}</span>
                        </div>`),ue=`
                    <div class="event-detail-row">
                        <span class="detail-label">Priority:</span>
                        <span class="detail-value" style="color: ${E==="high"||E==="critical"?"#ff4d4d":E==="medium"?"#ffa500":"#888"}">${E.toUpperCase()}</span>
                    </div>
                    <div class="event-detail-block" style="text-align: left;">
                        <span class="detail-label">Insight:</span>
                        <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${M(D)}</p>
                    </div>
                    ${W}
                `}let H=document.createElement("div");H.className=`event-item notification-item ${L} ${O} ${Je} cursor-pointer`,H.dataset.notificationId=u.id,H.onclick=function(W){if(this.classList.contains("expanded")){this.classList.remove("expanded"),P.delete(u.id);let se=this.querySelector(".event-details");se&&(se.style.display="none")}else{this.classList.add("expanded"),P.add(u.id);let se=this.querySelector(".event-details");if(se&&(se.style.display="block"),!localStorage.getItem(`notification_read_ts_${u.id}`)){localStorage.setItem(`notification_read_ts_${u.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ve="event-border-grey";E==="high"||E==="critical"?ve="event-border-red":E==="medium"&&(ve="event-border-orange"),this.classList.add(ve),le()}}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${A}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${Z.toUpperCase()} ${B?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${x}</div>
                    <div class="event-details" style="${Ge}">
                        <div class="event-details-header">
                            <h4>${$?"Audit":B?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${ue}
                    </div>
                </div>
            `;let Se=H.querySelector(".close-details-btn");return Se&&Se.addEventListener("click",W=>{W.stopPropagation(),H.classList.remove("expanded");let te=H.querySelector(".event-details");te&&(te.style.display="none"),P.delete(u.id)}),H},m=Array.from(t.children),h=new Map(m.map(u=>[u.dataset.notificationId,u])),a=new Set(c.map(u=>u.id));m.forEach(u=>{let b=u.dataset.notificationId;(!b||!a.has(b))&&u.remove()});let d=null;c.forEach((u,b)=>{let w=h.get(u.id);(!w||s)&&(w&&w.remove(),w=g(u),!w)||(b===0?t.firstElementChild!==w&&t.prepend(w):d&&d.nextElementSibling!==w&&d.after(w),d=w)}),Y=Date.now(),_(0,Y),le()}catch(f){console.error("Error fetching notifications:",f),t.children.length===0&&(t.innerHTML=S("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function Xe(){let s=document.getElementById("notif-read-all"),t=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");s&&!s.dataset.listenerAttached&&(s.onclick=()=>{re.forEach(r=>{localStorage.getItem(`notification_read_ts_${r.id}`)||localStorage.setItem(`notification_read_ts_${r.id}`,Date.now().toString())}),F(!0)},s.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{re.forEach(r=>{P.add(r.id),localStorage.getItem(`notification_read_ts_${r.id}`)||localStorage.setItem(`notification_read_ts_${r.id}`,Date.now().toString())}),F(!0)},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{P.clear(),F(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let r=Date.now()-1728e5;re.forEach(p=>{localStorage.setItem(`notification_read_ts_${p.id}`,r.toString())}),P.clear(),F(!0)},o.dataset.listenerAttached="true")}var Ue=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="blueprints-reset-strategist" class="notif-action-btn"><i class='bx bx-refresh'></i> Reset Strategist</button>
        <div id="strategist-next-run" style="font-size: 0.7em; color: #888; display: flex; align-items: center; margin-left: 10px;">
            Next T3: Loading...
        </div>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,ce=null,V=new Set,je=[];async function K(s=!1){let t=document.getElementById("blueprints-list");if(!t)return;Qe();let n=localStorage.getItem("service_map");if(!n){t.innerHTML=S("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{t.innerHTML=S("error","Invalid service map data.");return}if(!o){t.innerHTML=S("error","Event service not found in service map.");return}let r=o.domain==="0.0.0.0"?"127.0.0.1":o.domain,p=`http://${r}:${o.port}/events?ml=100&format=json&event.type=system.blueprint.generated`,f=`http://${r}:${o.port}/analyst/status`;try{let l=await fetch(f);if(l.ok){let v=await l.json(),y=document.getElementById("strategist-next-run");if(y&&v.strategist){let i=v.strategist.next_run,c=Math.floor(Date.now()/1e3),g=i-c;if(g<=0)y.textContent="Next T3: Ready (IDLE req)",y.style.color="#5eff5e";else{let m=Math.floor(g/60),h=g%60;y.textContent=`Next T3: ${m}m ${h}s`,y.style.color="#888"}}}}catch(l){console.error("Failed to fetch analyst status",l)}try{let l=await fetch(p);if(!l.ok)throw new Error("Service is offline or unreachable.");let y=(await l.json()).events||[];if(je=y,ce=Date.now(),_(1,ce),y.length===0){t.innerHTML=S("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),q(1,0);return}s&&(t.innerHTML="");let i=a=>{let d=a.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return null}let u=d.title||"Untitled Blueprint",b=d.summary||d.body||"No summary provided.",w=d.content||"",$=d.category||"architecture",x=d.affected_services||[],D=d.implementation_path||[],E=new Date(a.timestamp*1e3),B=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Z=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),j=V.has(a.id),ee=j?"display: block;":"display: none;",T=document.createElement("div");T.className=`event-item notification-item event-border-purple cursor-pointer ${j?"expanded":""}`,T.dataset.blueprintId=a.id,T.onclick=function(L){if(this.classList.contains("expanded")){this.classList.remove("expanded"),V.delete(a.id);let N=this.querySelector(".event-details");N&&(N.style.display="none")}else{this.classList.add("expanded"),V.add(a.id);let N=this.querySelector(".event-details");N&&(N.style.display="block")}};let I=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",k="";D.length>0&&(k=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${D.map(L=>`<li>${M(L)}</li>`).join("")}
                        </ul>
                    </div>
                `),T.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${B}</span>
                    <span class="event-date">${Z}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${$.toUpperCase()}</div>
                    <div class="event-message">${u}</div>
                    <div class="event-details" style="${ee}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${M(b)}
                        </div>
                        ${I}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${M(w)}</p>
                        </div>
                        ${k}
                    </div>
                </div>
            `;let A=T.querySelector(".close-details-btn");return A&&A.addEventListener("click",L=>{L.stopPropagation(),T.classList.remove("expanded");let O=T.querySelector(".event-details");O&&(O.style.display="none"),V.delete(a.id)}),T},c=Array.from(t.children),g=new Map(c.map(a=>[a.dataset.blueprintId,a])),m=new Set(y.map(a=>a.id));c.forEach(a=>{let d=a.dataset.blueprintId;(!d||!m.has(d))&&a.remove()});let h=null;y.forEach((a,d)=>{let u=g.get(a.id);(!u||s)&&(u&&u.remove(),u=i(a),!u)||(d===0?t.firstElementChild!==u&&t.prepend(u):h&&h.nextElementSibling!==u&&h.after(u),h=u)}),q(1,y.length)}catch(l){console.error("Error fetching blueprints:",l),t.children.length===0&&(t.innerHTML=S("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function Qe(){let s=document.getElementById("blueprints-expand-all"),t=document.getElementById("blueprints-close-all"),n=document.getElementById("blueprints-reset-strategist");s&&!s.dataset.listenerAttached&&(s.onclick=()=>{je.forEach(o=>V.add(e.id)),K(!0)},s.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{V.clear(),K(!0)},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let o=localStorage.getItem("service_map");if(!o)return;let p=(JSON.parse(o).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!p)return;let l=`http://${p.domain==="0.0.0.0"?"127.0.0.1":p.domain}:${p.port}/analyst/reset?tier=strategist`;n.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(l,{method:"POST"}),setTimeout(()=>{n.innerHTML="<i class='bx bx-check'></i> Reset Done",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Reset Strategist"},2e3)},500),K()}catch(v){console.error("Failed to reset strategist",v),n.innerHTML="<i class='bx bx-error'></i> Failed"}},n.dataset.listenerAttached="true")}var Oe=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':S("config","No service map configured.","Upload service-map.json in Settings."),qe=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':S("config","No service map configured.","Upload service-map.json in Settings."),Pe=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':S("config","No service map configured.","Upload service-map.json in Settings."),de=null,pe=null,me=null;async function Fe(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(p=>p.id==="dex-event-service");if(!t)return null;let o=`http://${t.domain==="0.0.0.0"?"127.0.0.1":t.domain}:${t.port}/system_monitor`,r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(s){return console.error("Error fetching system data:",s),null}}async function Ze(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(p=>p.id==="dex-event-service");if(!t)return null;let o=`http://${t.domain==="0.0.0.0"?"127.0.0.1":t.domain}:${t.port}/processes`,r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(s){return console.error("Error fetching process data:",s),null}}async function xe(){let s=document.getElementById("services-widgets");if(!s)return;let t=await Fe();if(!t||!t.services){s.innerHTML=S("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}de=Date.now(),_(5,de);let n=t.services||[];Array.from(s.children).forEach(i=>{i.classList.contains("service-widget")||i.remove()});function o(i){return!i||i==="N/A"||i==="unknown"||i.trim()===""?"-":i}function r(i){if(!i||i==="N/A"||i==="unknown")return"-";let c=i.match(/^(\d+\.\d+\.\d+)/);return c?c[0]:i.split(".").slice(0,3).join(".")||"-"}function p(i){return!i||i.length<=28?i:i.substring(0,28)+"..."}function f(i){if(!i||i==="N/A"||i==="unknown")return"-";let c=i.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!c)return"-";let g=parseInt(c[1])||0,m=parseInt(c[2])||0,h=parseInt(c[3])||0,a=parseFloat(c[4])||0,d=g*86400+m*3600+h*60+a,u=Math.floor(d/86400);if(u>0)return`${u}d`;let b=Math.floor(d/3600);if(b>0)return`${b}h`;let w=Math.floor(d/60);return w>0?`${w}m`:`${Math.floor(d)}s`}function l(i){let c=i.status==="online",g=c?"service-widget-online":"service-widget-offline",m=c?"bx-check-circle":"bx-x-circle",h=c?"OK":"BAD",a=i.version?r(i.version.str):"-",d=i.cpu&&i.cpu!=="N/A"?i.cpu:"-",u=i.memory&&i.memory!=="N/A"?i.memory:"-",b=d!=="-"?"#00ff00":"#666",w=d!=="-"?"#fff":"#666",$=u!=="-"?"#00ff00":"#666",x=u!=="-"?"#fff":"#666",D=f(i.uptime),E="";return c?E=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${a}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${D}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${b};"></i>
                        <span style="color: ${w};">${d}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${$};"></i>
                        <span style="color: ${x};">${u}</span>
                    </div>
                </div>`:E='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${g}" data-service-id="${i.id}"><div class="service-widget-header"><i class="bx ${m}"></i><h3>${i.short_name||i.id}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${p(i.domain&&i.port?`${i.domain}:${i.port}`:"")}</span></div>${E}</div></div>`}let v=new Map(Array.from(s.querySelectorAll(".service-widget")).map(i=>[i.dataset.serviceId,i])),y=new Set(n.map(i=>i.id));for(let[i,c]of v)y.has(i)||c.remove();n.forEach(i=>{let c=l(i),g=v.get(i.id);g?g.outerHTML!==c&&(g.outerHTML=c):s.insertAdjacentHTML("beforeend",c)})}async function we(){let s=document.getElementById("models-widgets");if(!s)return;let t=await Fe();if(!t){s.innerHTML=S("offline","Failed to load model status.");return}pe=Date.now(),_(4,pe);let n=t.models||[],o=t.whisper;Array.from(s.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function r(l){let v=l.status==="Ready";return`
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
                </div>`}function p(l){let v=l.status==="Downloaded",y=v?"service-widget-online":"service-widget-offline",i=v?"OK":"MISSING",c=v&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",g=l.name;return l.type==="custom"&&g.endsWith(":latest")&&(g=g.replace(":latest","")),`<div class="service-widget ${y}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${v?"bx-check-circle":"bx-x-circle"}"></i><h3>${g}</h3><span class="service-widget-status">${i}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${c}</span></div></div></div>`}let f="";if(o&&(f+=r(o)),f+=n.map(p).join(""),!f){s.innerHTML=S("empty","No models found.");return}s.innerHTML!==f&&(s.innerHTML=f)}async function $e(){let s=document.getElementById("processes-widgets");if(!s)return;let t=await Ze();if(t===null){s.innerHTML=S("offline","Failed to load process status.");return}if(me=Date.now(),_(2,me),t.length===0){s.innerHTML=S("empty","No active processes."),q(2,0);return}(s.querySelector(".tab-placeholder")||s.querySelector("p"))&&(s.innerHTML="");function n(p){let f=Math.floor(Date.now()/1e3-p.start_time),l=p.retries>0?`<span class="process-retry-badge">Retry ${p.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${p.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${p.channel_id}</h3>
                        ${l}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${p.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${f}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${p.pid}</span>
                        </div>
                    </div>
                </div>`}let o=new Map(Array.from(s.querySelectorAll(".process-widget")).map(p=>[p.dataset.channelId,p])),r=new Set(t.map(p=>p.channel_id));for(let[p,f]of o)r.has(p)||f.remove();t.forEach(p=>{let f=n(p),l=o.get(p.channel_id);l?l.outerHTML!==f&&(l.outerHTML=f):s.insertAdjacentHTML("beforeend",f)}),q(2,t.length)}function X(){let s=be(),t=oe()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(C).map(r=>`
                    <div class="theme-card ${s===r?"active":""}" data-theme="${r}">
                        <div class="theme-preview theme-preview-${r.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${r}</h3>
                            <p>${r===C.AUTO?"Automatic theme selection.":r===C.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${s===r?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${o?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ae(s){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let v=this.dataset.theme;ke(v),s.setContent(X()),ae(s)})});function n(l,v,y,i,c,g,m){let h=document.getElementById(l),a=document.getElementById(v),d=document.getElementById(y),u=document.getElementById(i),b=document.getElementById(c);h&&a&&(h.onclick=()=>a.click(),a.onchange=w=>{let $=w.target.files[0];if(!$)return;if($.name!==m){u.textContent=`File must be named "${m}"`,u.style.display="block",a.value="";return}let x=new FileReader;x.onload=D=>{try{let E=JSON.parse(D.target.result);localStorage.setItem(g,JSON.stringify(E)),d.textContent=m,u.style.display="none",s.setContent(X()),ae(s)}catch{u.textContent="Invalid JSON format",u.style.display="block",a.value=""}},x.onerror=()=>{u.textContent="Failed to read file",u.style.display="block",a.value=""},x.readAsText($)}),b&&(b.onclick=()=>{localStorage.removeItem(g),s.setContent(X()),ae(s)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(o.disabled=!0),o.onclick=async v=>{if(v.target.checked)try{await Notification.requestPermission()!=="granted"&&(v.target.checked=!1)}catch{v.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),v.target.checked=!0)}}let r=document.getElementById("microphone-toggle");async function p(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;r&&(r.disabled=!l||l.state==="denied",r.checked=l?.state==="granted");let v=document.querySelector("#microphone-setting-item .settings-item-description");v&&(v.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}p(),r&&!r.disabled&&(r.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),p()}catch{l.target.checked=!1,p()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let f=document.getElementById("analytics-toggle");f&&(f.checked=localStorage.getItem("easter_analytics_enabled")!=="false",f.onclick=l=>{let v=l.target.checked;localStorage.setItem("easter_analytics_enabled",v),window.EASTER_ANALYTICS_ENABLED=v,window.EASTER_DEBUG_MODE=v})}var Re=()=>`
    <div class="notifications-actions">
        <button id="roadmap-new" class="notif-action-btn"><i class='bx bx-plus'></i> New Idea</button>
        <button id="roadmap-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="roadmap-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
        <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
        <div style="display: flex; gap: 10px; justify-content: center;">
            <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
            <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
        </div>
    </div>
    <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading roadmap...</p>
    </div>
`,R=new Set,We=[],Q=null;async function U(s=!1){let t=document.getElementById("roadmap-list");if(!t)return;et();let n=localStorage.getItem("service_map");if(!n)return;let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{return}if(!o)return;let p=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/roadmap`;try{let f=await fetch(p);if(!f.ok)throw new Error("Offline");let l=await f.json();if(We=l,l.length===0){t.innerHTML=S("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}s&&(t.innerHTML="");let v=m=>{let h=R.has(m.id),a=m.state==="draft",d=m.state==="published",u=m.state==="consumed",b="event-border-grey";d&&(b="event-border-blue"),u&&(b="event-border-purple");let $=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),x=document.createElement("div");x.className=`event-item notification-item ${b} cursor-pointer ${h?"expanded":""}`,x.dataset.itemId=m.id,x.onclick=E=>{if(E.target.closest("button"))return;x.classList.contains("expanded")?(x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",R.delete(m.id)):(x.classList.add("expanded"),x.querySelector(".event-details").style.display="block",R.add(m.id))};let D=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;return x.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${$.split(",")[1]}</span>
                    <span class="event-date">${$.split(",")[0]}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">ROADMAP ${D}</div>
                    <div class="event-message" style="white-space: pre-wrap;">${M(m.content)}</div>
                    <div class="event-details" style="${h?"display: block;":"display: none;"} ">
                        <div class="event-details-header">
                            <h4>Item Controls</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${u?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
                            <button class="notif-action-btn ${d?"":"publish-btn"}">
                                <i class='bx ${d?"bx-pause":"bx-rocket"}'></i> ${d?"Un-publish":"Publish"}
                            </button>
                            <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
                        </div>
                        ${u?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(m.consumed_at*1e3).toLocaleString()}</div>`:""}
                    </div>
                </div>
            `,x.querySelector(".edit-btn")?.addEventListener("click",()=>tt(m)),x.querySelector(d?".notif-action-btn":".publish-btn")?.addEventListener("click",()=>st(m)),x.querySelector(".delete-btn")?.addEventListener("click",()=>nt(m.id)),x.querySelector(".close-details-btn")?.addEventListener("click",E=>{E.stopPropagation(),x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",R.delete(m.id)}),x},y=Array.from(t.children),i=new Map(y.map(m=>[m.dataset.itemId,m])),c=new Set(l.map(m=>m.id));y.forEach(m=>{m.dataset.itemId&&!c.has(m.dataset.itemId)&&m.remove()});let g=null;l.forEach((m,h)=>{let a=i.get(m.id);(!a||s)&&(a&&a.remove(),a=v(m),!a)||(h===0?t.firstElementChild!==a&&t.prepend(a):g&&g.nextElementSibling!==a&&g.after(a),g=a)})}catch{t.innerHTML=S("error","Failed to load roadmap.")}}function et(){let s=document.getElementById("roadmap-new"),t=document.getElementById("roadmap-save"),n=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),r=document.getElementById("roadmap-close-all");s&&!s.dataset.listenerAttached&&(s.onclick=()=>{Q=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},s.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",Q=null},n.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=async()=>{let p=document.getElementById("roadmap-editor-input").value;if(!p.trim())return;let l=JSON.parse(localStorage.getItem("service_map")).services.cs.find(c=>c.id==="dex-event-service"),v=l.domain==="0.0.0.0"?"127.0.0.1":l.domain,y=Q?`http://${v}:${l.port}/roadmap/${Q}`:`http://${v}:${l.port}/roadmap`,i=Q?"PATCH":"POST";try{await fetch(y,{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:p})}),document.getElementById("roadmap-editor-container").style.display="none",U(!0)}catch(c){console.error(c)}},t.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{We.forEach(p=>R.add(p.id)),U(!0)},o.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{R.clear(),U(!0)},r.dataset.listenerAttached="true")}function tt(s){Q=s.id,document.getElementById("roadmap-editor-input").value=s.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function st(s){let t=s.state==="published"?"draft":"published",o=JSON.parse(localStorage.getItem("service_map")).services.cs.find(p=>p.id==="dex-event-service"),r=o.domain==="0.0.0.0"?"127.0.0.1":o.domain;try{await fetch(`http://${r}:${o.port}/roadmap/${s.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:t})}),U(!0)}catch(p){console.error(p)}}async function nt(s){if(!confirm("Delete this roadmap item?"))return;let n=JSON.parse(localStorage.getItem("service_map")).services.cs.find(r=>r.id==="dex-event-service"),o=n.domain==="0.0.0.0"?"127.0.0.1":n.domain;try{await fetch(`http://${o}:${n.port}/roadmap/${s}`,{method:"DELETE"}),R.delete(s),U(!0)}catch(r){console.error(r)}}function ze(){Ae(),Ee();let s=_e();Le(s),Te();let t=document.querySelector("footer"),n=null;function o(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(c=>c.classList.remove("active","inactive"))}function r(c,g=null){let m=n&&n.id===c.id;n&&n.close(!m),m?n=null:setTimeout(()=>{c.open(),n=c,document.querySelectorAll(".nav-right i").forEach(h=>{let a=h===g;h.classList.toggle("active",a),h.classList.toggle("inactive",!a&&g)}),t?.classList.add("hide")},n?220:0)}async function p(){await Promise.all([xe(),we(),ie(),$e(),F(),K(),ye()]);let c=setInterval(()=>{if(!i.isOpen())return clearInterval(c);_(4,he),_(3,J),_(5,pe),_(6,de),_(2,me),_(1,ce),_(0,Y)},1e3),g=setInterval(()=>{if(!i.isOpen())return clearInterval(g);ie(),$e(),F(),K(),ye()},3e3),m=setInterval(()=>{if(!i.isOpen())return clearInterval(m);xe(),we()},6e4)}async function f(){await U();let c=setInterval(()=>{if(!v.isOpen())return clearInterval(c);U()},5e3)}let l=ne({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),v=ne({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${oe()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:Re(),"data-tab-index":1}],icon:"bx-user",onClose:o,onOpen:()=>setTimeout(f,100)}),y=ne({id:"settings-window",title:"Settings",content:X(),icon:"bx-cog",onClose:o,onOpen:()=>{y.setContent(X()),setTimeout(()=>ae(y),50)}}),i=ne({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:He(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:Ue(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Pe(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Ne(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Ce(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:qe(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Oe(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:o,onOpen:()=>setTimeout(p,100)});s?(document.getElementById("user-icon")?.addEventListener("click",c=>r(v,c.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",c=>r(i,c.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",c=>r(y,c.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{r(l),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",c=>{c.preventDefault();try{Ie(document.getElementById("email-input").value),window.location.reload()}catch(g){let m=document.getElementById("login-error");m&&(m.textContent=g.message,m.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ze):ze();})();
//# sourceMappingURL=dex.e7214425.js.map
