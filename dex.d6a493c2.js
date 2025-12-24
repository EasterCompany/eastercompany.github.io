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
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function F(e){let t=null,n=e.onClose||null,u=e.onOpen||null;function r(){if(t){t.classList.add("open"),u&&setTimeout(u,10);return}let p=document.getElementById("windows-container");p||(p=document.createElement("div"),p.id="windows-container",p.className="windows-container",document.body.appendChild(p)),t=document.createElement("div"),t.id=e.id,t.className="window";let b=e.icon||"bx-window",s="",m="",f;e.tabs&&e.tabs.length>0?(s=`<div class="tab-bar">${e.tabs.map((l,v)=>{let h;return l.icon?h=`<i class="bx ${l.icon}"></i>`:l.title&&l.title.length>0?h=`<span class="tab-glyph">${l.title.charAt(0).toUpperCase()}</span>`:h='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${v===0?"active":""}" data-tab-index="${v}">
                        ${h}
                        <span class="tab-title">${l.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${v}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,f=`<div class="window-content">${e.tabs.map((l,v)=>`<div class="tab-content ${v===0?"active":""}" data-tab-content="${v}">${l.content}</div>`).join("")}</div>`):(e.title&&(m=`<div class="window-title">${e.title}</div>`),f=`<div class="window-content">${e.content}</div>`);let y=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${s}
                ${m}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=y+f,p.appendChild(t);let c=t.querySelector(".window-close");c&&c.addEventListener("click",a=>{a.stopPropagation(),i()}),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(o=>{o.addEventListener("click",()=>{let l=o.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(v=>v.classList.remove("active")),o.classList.add("active"),t.querySelectorAll(".tab-content").forEach(v=>v.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${l}"]`).classList.add("active"),setTimeout(()=>{let v=t.querySelector(".tab-bar");if(v){let h=Array.from(v.querySelectorAll(".tab")),L=h.indexOf(o),x=v.clientWidth,C=h[Math.max(0,L-2)],S=h[Math.min(h.length-1,L+2)],M=C.offsetLeft-v.offsetLeft,N=S.offsetLeft+S.offsetWidth-v.offsetLeft-M,E;N<=x?E=M-(x-N)/2:E=o.offsetLeft-v.offsetLeft-x/2+o.offsetWidth/2,v.scrollTo({left:E,behavior:"smooth"})}},50)})}),setTimeout(()=>{t.classList.add("open"),u&&u()},10)}function i(p=!1){t&&(p?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function g(p){if(t){let b=t.querySelector(".window-content");b&&(b.innerHTML=p)}}function d(){return t&&t.classList.contains("open")}return{open:r,close:i,setContent:g,isOpen:d,id:e.id}}var se="easter_user_email";function he(){return localStorage.getItem(se)!==null}function J(){return localStorage.getItem(se)}function ye(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(se,e.trim())}var we="easter_theme",k={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ie(){return localStorage.getItem(we)||k.AUTO}function Ae(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?k.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,k.DEFAULT)}function xe(e){if(!Object.values(k).includes(e))throw new Error("Invalid theme");localStorage.setItem(we,e),ne(e)}function ne(e,t=!1){let n=document.body,u=e===k.AUTO?Ae():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(k).forEach(r=>{n.classList.remove(`theme-${r}`)}),n.classList.add(`theme-${e}`),u===k.ANIMATED){if(!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}}else{let r=document.querySelector(".background");r&&(t?r.remove():(r.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{r.remove()},400)))}}function $e(){let e=ie();if(ne(e,!0),e===k.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{ne(k.AUTO)},300)})}}function O(e,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",i=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${r} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${i}
        </div>
    `}function Se(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ae=null;async function oe(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=O("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(g){return console.error("Error parsing service_map from localStorage:",g),e.classList.add("placeholder-active"),e.innerHTML=O("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let u=null;if(n&&typeof n.services=="object"){let g=["cs","be","th"];for(let d of g)if(Array.isArray(n.services[d])){let p=n.services[d].find(b=>b.short_name==="event"||b.id==="event"||b.id==="dex-event-service");if(p){u=p;break}}}if(!u)return e.classList.add("placeholder-active"),e.innerHTML=O("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let i=`http://${u.domain==="0.0.0.0"?"localhost":u.domain}:${u.port}/logs`;try{let g=await fetch(i);if(!g.ok)return e.classList.add("placeholder-active"),e.innerHTML=O("offline","Event service is offline.","Please ensure the event service is running."),!1;let d=await g.json();if(!d||d.length===0)return e.classList.add("placeholder-active"),e.innerHTML=O("empty","No logs found.","Service logs will appear here when available."),!1;let p=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],b=d.filter(m=>!p.includes(m.id));b.forEach(m=>{m.logs&&Array.isArray(m.logs)?m.logs.reverse():m.logs=[]}),b.reverse();let s=b.map(m=>{let f=m.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${m.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(f)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${f}</pre>
                </div>
            `}).join("");return e.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(m=>{m.addEventListener("click",()=>{let f=unescape(m.dataset.logs);navigator.clipboard.writeText(f).then(()=>{let y=m.querySelector("i");y.classList.remove("bx-copy"),y.classList.add("bx-check"),setTimeout(()=>{y.classList.remove("bx-check"),y.classList.add("bx-copy")},2e3)})})}),ae=Date.now(),!0}catch(g){return console.error("Error fetching logs:",g),e.classList.add("placeholder-active"),e.innerHTML=O("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function w(e,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",i=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${t}</p>${i}</div>`}function D(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function $(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let r=(Date.now()-t)/1e3,i;if(r<30)i=`${Math.floor(r)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${i}`}function B(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"]`);if(!n)return;let u=n.querySelector(".notification-badge");u&&(t>0?(u.textContent=t>9?"9+":t,u.style.display="flex"):u.style.display="none")}function G(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length;B(0,t)}var De={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Te(e,t){let n=De[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let u=n.replace(/\{(\w+)\}/g,(r,i)=>t[i]!==void 0&&t[i]!==null?t[i]:r);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(u+=` (Translation: ${t.english_translation})`),u}var Le=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',V=null;async function re(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(g=>g.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let i=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(c=>c.dataset.eventId).filter(c=>c)),g=await fetch(r);if(!g.ok)throw new Error("Service is offline or unreachable.");let p=(await g.json()).events||[];if(p.length===0){e.innerHTML=w("empty","No events found.");return}let b=c=>{let a=c.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let o=a.type,l=o==="engagement.decision"||o==="messaging.bot.sent_message"||o==="messaging.user.sent_message"||o==="moderation.explicit_content.deleted"||o==="analysis.link.completed"||o==="analysis.visual.completed"||o==="system.cli.command",v="event-border-grey";l&&(o==="moderation.explicit_content.deleted"?v="event-border-red":o==="analysis.link.completed"||o==="analysis.visual.completed"?v="event-border-purple":o==="system.cli.command"?v="event-border-orange":v="event-border-blue");let h=l?"cursor-pointer":"",L=i.has(c.id),x=L?"expanded":"",C=L?"display: block;":"display: none;",S=new Date(c.timestamp*1e3),M=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),H=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),N=Te(o,a),E="";if(l){let T="";if(o==="engagement.decision")T=`
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
                        `;else if(o==="messaging.bot.sent_message")T=`
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
                        `;else if(o==="moderation.explicit_content.deleted")T=`
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
                                <pre class="detail-pre">${D(a.raw_output)||"None"}</pre>
                            </div>
                        `;else if(o==="analysis.link.completed")T=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${D(a.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${D(a.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${D(a.summary)||"None"}</pre>
                            </div>
                        `;else if(o==="analysis.visual.completed"){let _="";a.base64_preview?_=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(_=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${a.filename}</span>
                            </div>
                            ${_}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${D(a.description)||"None"}</pre>
                            </div>
                        `}else if(o==="system.cli.command")T=`
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
                                <pre class="detail-pre">${D(a.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(o==="messaging.user.sent_message"){let _="";a.attachments&&a.attachments.length>0&&(_=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${a.attachments.map(I=>{let ee=I.content_type&&I.content_type.startsWith("image/"),z=(I.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${ee?`<div class="attachment-thumb-container"><img src="${I.url}" alt="${I.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${I.url}" target="_blank" class="attachment-link">${I.filename}</a>
                                            <span class="attachment-meta">${I.content_type} \u2022 ${z}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),T=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${a.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${a.content||"(empty)"}</pre>
                            </div>
                            ${_}
                         `}E=`
                        <div class="event-details" style="${C}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${T}
                        </div>
                    `}let A=document.createElement("div");if(A.className=`event-item ${v} ${h} ${x}`,A.dataset.eventId=c.id,A.onclick=function(T){if(!l)return;this.classList.toggle("expanded");let _=this.querySelector(".event-details");_&&(_.style.display=_.style.display==="none"?"block":"none")},A.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${M}</span>
                        <span class="event-date">${H}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${c.service}</div>
                        <div class="event-message">${N}</div>
                        ${E}
                    </div>
                `,l){let T=A.querySelector(".close-details-btn");T&&T.addEventListener("click",_=>{_.stopPropagation();let U=_.target.closest(".event-item");if(U){U.classList.remove("expanded");let I=U.querySelector(".event-details");I&&(I.style.display="none")}})}return A},s=Array.from(e.children),m=new Map(s.map(c=>[c.dataset.eventId,c])),f=new Set(p.map(c=>c.id));s.forEach(c=>{(!c.dataset.eventId||!f.has(c.dataset.eventId))&&c.remove()});let y=null;p.forEach((c,a)=>{let o=m.get(c.id);!o&&(o=b(c),!o)||(a===0?e.firstElementChild!==o&&e.prepend(o):y&&y.nextElementSibling!==o&&y.after(o),y=o)}),V=Date.now(),$(2,V)}catch(i){console.error("Error fetching events:",i),e.children.length===0&&(e.innerHTML=w("offline","Failed to load events.","The event service may be offline or unreachable."))}}var Ee=()=>'<div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading notifications...</p></div>',Y=null;async function le(){let e=document.getElementById("notifications-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(g=>g.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let i=await fetch(r);if(!i.ok)throw new Error("Service is offline or unreachable.");let d=(await i.json()).events||[],p=Date.now(),b=24*60*60*1e3,s=d.filter(l=>{let v=localStorage.getItem(`notification_read_ts_${l.id}`);if(!v)return!0;let h=parseInt(v);return p-h<b});if(s.length===0){e.innerHTML=w("empty","No notifications yet."),G();return}let m=l=>{let v=l.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return null}let h=v.title||"Untitled Notification",L=v.body||"No description provided.",x=v.priority||"low",C=v.category||"system",S=v.related_event_ids||[],H=!!localStorage.getItem(`notification_read_ts_${l.id}`),N=new Date(l.timestamp*1e3),E=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),T=H?"event-border-grey":"event-border-blue";H&&(x==="high"||x==="critical")?T="event-border-red":H&&x==="medium"&&(T="event-border-orange");let _=H?"notification-read":"notification-unread",U=f.has(l.id),I=U?"expanded":"",ee=U?"display: block;":"display: none;",z="";S.length>0&&(z=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${S.map(W=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${W.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let j=document.createElement("div");j.className=`event-item notification-item ${T} ${_} ${I} cursor-pointer`,j.dataset.notificationId=l.id,j.onclick=function(W){this.classList.toggle("expanded");let q=this.querySelector(".event-details");if(q){let ve=q.style.display==="none";if(q.style.display=ve?"block":"none",ve){if(f.add(l.id),!localStorage.getItem(`notification_read_ts_${l.id}`)){localStorage.setItem(`notification_read_ts_${l.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue");let te="event-border-grey";x==="high"||x==="critical"?te="event-border-red":x==="medium"&&(te="event-border-orange"),this.classList.add(te),G()}}else f.delete(l.id)}},j.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${A}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${C.toUpperCase()}</div>
                    <div class="event-message">${h}</div>
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
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${D(L)}</p>
                        </div>
                        ${z}
                    </div>
                </div>
            `;let ue=j.querySelector(".close-details-btn");return ue&&ue.addEventListener("click",W=>{W.stopPropagation(),j.classList.remove("expanded");let q=j.querySelector(".event-details");q&&(q.style.display="none"),f.delete(l.id)}),j},f=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(l=>l.dataset.notificationId).filter(l=>l)),y=Array.from(e.children),c=new Map(y.map(l=>[l.dataset.notificationId,l])),a=new Set(s.map(l=>l.id));y.forEach(l=>{(!l.dataset.notificationId||!a.has(l.dataset.notificationId))&&l.remove()});let o=null;s.forEach((l,v)=>{let h=c.get(l.id);!h&&(h=m(l),!h)||(v===0?e.firstElementChild!==h&&e.prepend(h):o&&o.nextElementSibling!==h&&o.after(h),o=h)}),Y=Date.now(),$(0,Y),G()}catch(i){console.error("Error fetching notifications:",i),e.children.length===0&&(e.innerHTML=w("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}var _e=()=>'<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>',K=null;async function ce(){let e=document.getElementById("blueprints-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(g=>g.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let i=await fetch(r);if(!i.ok)throw new Error("Service is offline or unreachable.");let d=(await i.json()).events||[];if(d.length===0){e.innerHTML=w("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),B(1,0);return}let p=c=>{let a=c.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let o=a.title||"Untitled Blueprint",l=a.body||"No details provided.",v=a.category||"architecture",h=new Date(c.timestamp*1e3),L=h.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),x=h.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),C=b.has(c.id),S=C?"display: block;":"display: none;",M=document.createElement("div");M.className=`event-item notification-item event-border-purple cursor-pointer ${C?"expanded":""}`,M.dataset.blueprintId=c.id,M.onclick=function(N){this.classList.toggle("expanded");let E=this.querySelector(".event-details");if(E){let A=E.style.display==="none";E.style.display=A?"block":"none",A?b.add(c.id):b.delete(c.id)}},M.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${L}</span>
                    <span class="event-date">${x}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${v.toUpperCase()}</div>
                    <div class="event-message">${o}</div>
                    <div class="event-details" style="${S}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-block" style="text-align: left;">
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left;">${D(l)}</p>
                        </div>
                    </div>
                </div>
            `;let H=M.querySelector(".close-details-btn");return H&&H.addEventListener("click",N=>{N.stopPropagation(),M.classList.remove("expanded");let E=M.querySelector(".event-details");E&&(E.style.display="none"),b.delete(c.id)}),M},b=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(c=>c.dataset.blueprintId).filter(c=>c)),s=Array.from(e.children),m=new Map(s.map(c=>[c.dataset.blueprintId,c])),f=new Set(d.map(c=>c.id));s.forEach(c=>{c.dataset.blueprintId&&!f.has(c.dataset.blueprintId)&&c.remove()});let y=null;d.forEach((c,a)=>{let o=m.get(c.id);!o&&(o=p(c),!o)||(a===0?e.firstElementChild!==o&&e.prepend(o):y&&y.nextElementSibling!==o&&y.after(o),y=o)}),K=Date.now(),$(1,K),B(1,d.length)}catch(i){console.error("Error fetching blueprints:",i),e.children.length===0&&(e.innerHTML=w("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}var Me=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),ke=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),Ie=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),X=null,Q=null,Z=null;async function Ce(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(i=>i.id==="dex-event-service");if(!t)return null;let u=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/system_monitor`,r=await fetch(u);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function He(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(i=>i.id==="dex-event-service");if(!t)return null;let u=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/processes`,r=await fetch(u);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function de(){let e=document.getElementById("services-widgets");if(!e)return;let t=await Ce();if(!t||!t.services){e.innerHTML=w("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}X=Date.now(),$(5,X);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function u(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function r(s){if(!s||s==="N/A"||s==="unknown")return"-";let m=s.match(/^(\d+\.\d+\.\d+)/);return m?m[0]:s.split(".").slice(0,3).join(".")||"-"}function i(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function g(s){if(!s||s==="N/A"||s==="unknown")return"-";let m=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!m)return"-";let f=parseInt(m[1])||0,y=parseInt(m[2])||0,c=parseInt(m[3])||0,a=parseFloat(m[4])||0,o=f*86400+y*3600+c*60+a,l=Math.floor(o/86400);if(l>0)return`${l}d`;let v=Math.floor(o/3600);if(v>0)return`${v}h`;let h=Math.floor(o/60);return h>0?`${h}m`:`${Math.floor(o)}s`}function d(s){let m=s.status==="online",f=m?"service-widget-online":"service-widget-offline",y=m?"bx-check-circle":"bx-x-circle",c=m?"OK":"BAD",a=s.version?r(s.version.str):"-",o=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",l=s.memory&&s.memory!=="N/A"?s.memory:"-",v=o!=="-"?"#00ff00":"#666",h=o!=="-"?"#fff":"#666",L=l!=="-"?"#00ff00":"#666",x=l!=="-"?"#fff":"#666",C=g(s.uptime),S="";return m?S=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${a}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${C}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${v};"></i>
                        <span style="color: ${h};">${o}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${L};"></i>
                        <span style="color: ${x};">${l}</span>
                    </div>
                </div>`:S='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${f}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${y}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${c}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${i(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${S}</div></div>`}let p=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),b=new Set(n.map(s=>s.id));for(let[s,m]of p)b.has(s)||m.remove();n.forEach(s=>{let m=d(s),f=p.get(s.id);f?f.outerHTML!==m&&(f.outerHTML=m):e.insertAdjacentHTML("beforeend",m)})}async function pe(){let e=document.getElementById("models-widgets");if(!e)return;let t=await Ce();if(!t){e.innerHTML=w("offline","Failed to load model status.");return}Q=Date.now(),$(4,Q);let n=t.models||[],u=t.whisper;Array.from(e.children).forEach(d=>{d.classList.contains("service-widget")||d.remove()});function r(d){let p=d.status==="Ready";return`
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
                </div>`}function i(d){let p=d.status==="Downloaded",b=p?"service-widget-online":"service-widget-offline",s=p?"OK":"MISSING",m=p&&d.size>0?`${(d.size/1e9).toFixed(2)} GB`:"-",f=d.name;return d.type==="custom"&&f.endsWith(":latest")&&(f=f.replace(":latest","")),`<div class="service-widget ${b}" data-model-name="${d.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${f}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${d.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${m}</span></div></div></div>`}let g="";if(u&&(g+=r(u)),g+=n.map(i).join(""),!g){e.innerHTML=w("empty","No models found.");return}e.innerHTML!==g&&(e.innerHTML=g)}async function me(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await He();if(t===null){e.innerHTML=w("offline","Failed to load process status.");return}if(Z=Date.now(),$(2,Z),t.length===0){e.innerHTML=w("empty","No active processes."),B(2,0);return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(i){let g=Math.floor(Date.now()/1e3-i.start_time),d=i.retries>0?`<span class="process-retry-badge">Retry ${i.retries}</span>`:"";return`
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
                            <span class="info-value">${g}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${i.pid}</span>
                        </div>
                    </div>
                </div>`}let u=new Map(Array.from(e.querySelectorAll(".process-widget")).map(i=>[i.dataset.channelId,i])),r=new Set(t.map(i=>i.channel_id));for(let[i,g]of u)r.has(i)||g.remove();t.forEach(i=>{let g=n(i),d=u.get(i.channel_id);d?d.outerHTML!==g&&(d.outerHTML=g):e.insertAdjacentHTML("beforeend",g)}),B(2,t.length)}function P(){let e=ie(),t=J()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},u=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(k).map(r=>`
                    <div class="theme-card ${e===r?"active":""}" data-theme="${r}">
                        <div class="theme-preview theme-preview-${r.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${r}</h3>
                            <p>${r===k.AUTO?"Automatic theme selection.":r===k.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${u?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function R(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(d=>{d.addEventListener("click",function(){let p=this.dataset.theme;xe(p),e.setContent(P()),R(e)})});function n(d,p,b,s,m,f,y){let c=document.getElementById(d),a=document.getElementById(p),o=document.getElementById(b),l=document.getElementById(s),v=document.getElementById(m);c&&a&&(c.onclick=()=>a.click(),a.onchange=h=>{let L=h.target.files[0];if(!L)return;if(L.name!==y){l.textContent=`File must be named "${y}"`,l.style.display="block",a.value="";return}let x=new FileReader;x.onload=C=>{try{let S=JSON.parse(C.target.result);localStorage.setItem(f,JSON.stringify(S)),o.textContent=y,l.style.display="none",e.setContent(P()),R(e)}catch{l.textContent="Invalid JSON format",l.style.display="block",a.value=""}},x.onerror=()=>{l.textContent="Failed to read file",l.style.display="block",a.value=""},x.readAsText(L)}),v&&(v.onclick=()=>{localStorage.removeItem(f),e.setContent(P()),R(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let u=document.getElementById("notifications-toggle");if(u){let d="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!d||d.state==="denied")&&(u.disabled=!0),u.onclick=async p=>{if(p.target.checked)try{await Notification.requestPermission()!=="granted"&&(p.target.checked=!1)}catch{p.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),p.target.checked=!0)}}let r=document.getElementById("microphone-toggle");async function i(){let d="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;r&&(r.disabled=!d||d.state==="denied",r.checked=d?.state==="granted");let p=document.querySelector("#microphone-setting-item .settings-item-description");p&&(p.textContent=d?d.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}i(),r&&!r.disabled&&(r.onclick=async d=>{if(d.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),i()}catch{d.target.checked=!1,i()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),d.target.checked=!0)});let g=document.getElementById("analytics-toggle");g&&(g.checked=localStorage.getItem("easter_analytics_enabled")!=="false",g.onclick=d=>{let p=d.target.checked;localStorage.setItem("easter_analytics_enabled",p),window.EASTER_ANALYTICS_ENABLED=p,window.EASTER_DEBUG_MODE=p})}function Ne(){console.log("Welcome to Easter Company."),$e(),ge();let e=he();fe(e),be();let t=document.querySelector("footer"),n=null;function u(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function r(s,m=null){let f=n&&n.id===s.id;n&&n.close(!f),f?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(y=>{let c=y===m;y.classList.toggle("active",c),y.classList.toggle("inactive",!c&&m)}),t?.classList.add("hide")},n?220:0)}async function i(){await Promise.all([de(),pe(),re(),me(),le(),ce(),oe()]);let s=setInterval(()=>{if(!b.isOpen())return clearInterval(s);$(4,ae),$(3,V),$(5,Q),$(6,X),$(2,Z),$(1,K),$(0,Y)},1e3),m=setInterval(()=>{if(!b.isOpen())return clearInterval(m);re(),me(),le(),ce(),oe()},3e3),f=setInterval(()=>{if(!b.isOpen())return clearInterval(f);de(),pe()},6e4)}let g=F({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:u}),d=F({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${J()||"Unknown"}</p>`,icon:"bx-user",onClose:u}),p=F({id:"settings-window",title:"Settings",content:P(),icon:"bx-cog",onClose:u,onOpen:()=>{p.setContent(P()),setTimeout(()=>R(p),50)}}),b=F({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ee(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:_e(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Ie(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Le(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Se(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:ke(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Me(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:u,onOpen:()=>setTimeout(i,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>r(d,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>r(b,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>r(p,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{r(g),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{ye(document.getElementById("email-input").value),window.location.reload()}catch(m){let f=document.getElementById("login-error");f&&(f.textContent=m.message,f.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ne):Ne();})();
//# sourceMappingURL=dex.d6a493c2.js.map
