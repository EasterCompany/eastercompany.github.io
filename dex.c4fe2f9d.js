(()=>{function le(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function re(e=!1){let n=`
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
    `,d=document.createElement("nav");d.innerHTML=n,document.body.prepend(d)}function ce(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function q(e){let t=null,n=e.onClose||null,d=e.onOpen||null;function a(){if(t){t.classList.add("open"),d&&setTimeout(d,10);return}let p=document.getElementById("windows-container");p||(p=document.createElement("div"),p.id="windows-container",p.className="windows-container",document.body.appendChild(p)),t=document.createElement("div"),t.id=e.id,t.className="window";let g=e.icon||"bx-window",s="",m="",v;e.tabs&&e.tabs.length>0?(s=`<div class="tab-bar">${e.tabs.map((f,b)=>{let x;return f.icon?x=`<i class="bx ${f.icon}"></i>`:f.title&&f.title.length>0?x=`<span class="tab-glyph">${f.title.charAt(0).toUpperCase()}</span>`:x='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${b===0?"active":""}" data-tab-index="${b}">
                        ${x}
                        <span class="tab-title">${f.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${b}">Last updated: never</span>
                    </div>
                `}).join("")}</div>`,v=`<div class="window-content">${e.tabs.map((f,b)=>`<div class="tab-content ${b===0?"active":""}" data-tab-content="${b}">${f.content}</div>`).join("")}</div>`):(e.title&&(m=`<div class="window-title">${e.title}</div>`),v=`<div class="window-content">${e.content}</div>`);let h=`
            <div class="window-header">
                <i class="bx ${g}"></i>
                ${s}
                ${m}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=h+v,p.appendChild(t);let l=t.querySelector(".window-close");l&&l.addEventListener("click",i=>{i.stopPropagation(),o()}),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(c=>{c.addEventListener("click",()=>{let f=c.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(b=>b.classList.remove("active")),c.classList.add("active"),t.querySelectorAll(".tab-content").forEach(b=>b.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${f}"]`).classList.add("active")})}),setTimeout(()=>{t.classList.add("open"),d&&d()},10)}function o(p=!1){t&&(p?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function u(p){if(t){let g=t.querySelector(".window-content");g&&(g.innerHTML=p)}}function r(){return t&&t.classList.contains("open")}return{open:a,close:o,setContent:u,isOpen:r,id:e.id}}var Y="easter_user_email";function de(){return localStorage.getItem(Y)!==null}function P(){return localStorage.getItem(Y)}function pe(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(Y,e.trim())}var me="easter_theme",L={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function X(){return localStorage.getItem(me)||L.AUTO}function Te(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?L.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,L.DEFAULT)}function ue(e){if(!Object.values(L).includes(e))throw new Error("Invalid theme");localStorage.setItem(me,e),K(e)}function K(e,t=!1){let n=document.body,d=e===L.AUTO?Te():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(L).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${e}`),d===L.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(t?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function ve(){let e=X();if(K(e,!0),e===L.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{K(L.AUTO)},300)})}}function D(e,t,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${a} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${o}
        </div>
    `}function ge(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var Q=null;async function Z(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=D("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(u){return console.error("Error parsing service_map from localStorage:",u),e.classList.add("placeholder-active"),e.innerHTML=D("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let d=null;if(n&&typeof n.services=="object"){let u=["cs","be","th"];for(let r of u)if(Array.isArray(n.services[r])){let p=n.services[r].find(g=>g.short_name==="event"||g.id==="event"||g.id==="dex-event-service");if(p){d=p;break}}}if(!d)return e.classList.add("placeholder-active"),e.innerHTML=D("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let o=`http://${d.domain==="0.0.0.0"?"localhost":d.domain}:${d.port}/logs`;try{let u=await fetch(o);if(!u.ok)return e.classList.add("placeholder-active"),e.innerHTML=D("offline","Event service is offline.","Please ensure the event service is running."),!1;let r=await u.json();if(!r||r.length===0)return e.classList.add("placeholder-active"),e.innerHTML=D("empty","No logs found.","Service logs will appear here when available."),!1;let p=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],g=r.filter(m=>!p.includes(m.id));g.forEach(m=>{m.logs&&Array.isArray(m.logs)?m.logs.reverse():m.logs=[]}),g.reverse();let s=g.map(m=>{let v=m.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${m.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(v)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${v}</pre>
                </div>
            `}).join("");return e.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(m=>{m.addEventListener("click",()=>{let v=unescape(m.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let h=m.querySelector("i");h.classList.remove("bx-copy"),h.classList.add("bx-check"),setTimeout(()=>{h.classList.remove("bx-check"),h.classList.add("bx-copy")},2e3)})})}),Q=Date.now(),!0}catch(u){return console.error("Error fetching logs:",u),e.classList.add("placeholder-active"),e.innerHTML=D("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function y(e,t,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${t}</p>${o}</div>`}function H(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function S(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let a=(Date.now()-t)/1e3,o;if(a<30)o=`${Math.floor(a)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${o}`}function ee(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length,n=document.querySelector('.tab[data-tab-index="0"]');if(n){let d=n.querySelector(".notification-badge");t>0?(d||(d=document.createElement("span"),d.className="notification-badge",n.appendChild(d)),d.textContent=t>9?"9+":t,d.style.display="flex"):d&&(d.style.display="none")}}var Le={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function fe(e,t){let n=Le[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let d=n.replace(/\{(\w+)\}/g,(a,o)=>t[o]!==void 0&&t[o]!==null?t[o]:a);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(d+=` (Translation: ${t.english_translation})`),d}var be=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',F=null;async function te(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=y("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{e.innerHTML=y("error","Invalid service map data.");return}if(!n){e.innerHTML=y("error","Event service not found in service map.");return}let a=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let o=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(l=>l.dataset.eventId).filter(l=>l)),u=await fetch(a);if(!u.ok)throw new Error("Service is offline or unreachable.");let p=(await u.json()).events||[];if(p.length===0){e.innerHTML=y("empty","No events found.");return}let g=l=>{let i=l.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.type,f=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command",b="event-border-grey";f&&(c==="moderation.explicit_content.deleted"?b="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"?b="event-border-purple":c==="system.cli.command"?b="event-border-orange":b="event-border-blue");let x=f?"cursor-pointer":"",_=o.has(l.id),M=_?"expanded":"",C=_?"display: block;":"display: none;",k=new Date(l.timestamp*1e3),G=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),U=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),V=fe(c,i),O="";if(f){let $="";if(c==="engagement.decision")$=`
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
                        `;else if(c==="messaging.bot.sent_message")$=`
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
                        `;else if(c==="moderation.explicit_content.deleted")$=`
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
                                <pre class="detail-pre">${H(i.raw_output)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.link.completed")$=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${H(i.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${H(i.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${H(i.summary)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.visual.completed"){let w="";i.base64_preview?w=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(w=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),$=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${i.filename}</span>
                            </div>
                            ${w}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${H(i.description)||"None"}</pre>
                            </div>
                        `}else if(c==="system.cli.command")$=`
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
                                <pre class="detail-pre">${H(i.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(c==="messaging.user.sent_message"){let w="";i.attachments&&i.attachments.length>0&&(w=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${i.attachments.map(T=>{let A=T.content_type&&T.content_type.startsWith("image/"),N=(T.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${A?`<div class="attachment-thumb-container"><img src="${T.url}" alt="${T.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${T.url}" target="_blank" class="attachment-link">${T.filename}</a>
                                            <span class="attachment-meta">${T.content_type} \u2022 ${N}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),$=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${i.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${i.content||"(empty)"}</pre>
                            </div>
                            ${w}
                         `}O=`
                        <div class="event-details" style="${C}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${$}
                        </div>
                    `}let I=document.createElement("div");if(I.className=`event-item ${b} ${x} ${M}`,I.dataset.eventId=l.id,I.onclick=function($){if(!f)return;this.classList.toggle("expanded");let w=this.querySelector(".event-details");w&&(w.style.display=w.style.display==="none"?"block":"none")},I.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${G}</span>
                        <span class="event-date">${U}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${l.service}</div>
                        <div class="event-message">${V}</div>
                        ${O}
                    </div>
                `,f){let $=I.querySelector(".close-details-btn");$&&$.addEventListener("click",w=>{w.stopPropagation();let E=w.target.closest(".event-item");if(E){E.classList.remove("expanded");let T=E.querySelector(".event-details");T&&(T.style.display="none")}})}return I},s=Array.from(e.children),m=new Map(s.map(l=>[l.dataset.eventId,l])),v=new Set(p.map(l=>l.id));s.forEach(l=>{(!l.dataset.eventId||!v.has(l.dataset.eventId))&&l.remove()});let h=null;p.forEach((l,i)=>{let c=m.get(l.id);!c&&(c=g(l),!c)||(i===0?e.firstElementChild!==c&&e.prepend(c):h&&h.nextElementSibling!==c&&h.after(c),h=c)}),F=Date.now(),S(2,F)}catch(o){console.error("Error fetching events:",o),e.children.length===0&&(e.innerHTML=y("offline","Failed to load events.","The event service may be offline or unreachable."))}}var he=()=>'<div id="notifications-list" class="notifications-list"><p>Loading notifications...</p></div>',W=null;async function se(){let e=document.getElementById("notifications-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=y("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{e.innerHTML=y("error","Invalid service map data.");return}if(!n){e.innerHTML=y("error","Event service not found in service map.");return}let a=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.notification.generated`;try{let o=await fetch(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let r=(await o.json()).events||[];if(r.length===0){e.innerHTML=y("empty","No notifications yet.");return}let p=l=>{let i=l.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.title||"Untitled Notification",f=i.body||"No description provided.",b=i.priority||"low",x=i.category||"system",_=i.related_event_ids||[],M=localStorage.getItem(`notification_read_${l.id}`)==="true",C=new Date(l.timestamp*1e3),k=C.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),G=C.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),U="event-border-grey";b==="high"||b==="critical"?U="event-border-red":b==="medium"&&(U="event-border-orange");let V=M?"notification-read":"notification-unread",O=g.has(l.id),I=O?"expanded":"",$=O?"display: block;":"display: none;",w="";_.length>0&&(w=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${_.map(A=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${A.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let E=document.createElement("div");E.className=`event-item notification-item ${U} ${V} ${I} cursor-pointer`,E.dataset.notificationId=l.id,E.onclick=function(A){M||(localStorage.setItem(`notification_read_${l.id}`,"true"),this.classList.add("notification-read"),this.classList.remove("notification-unread"),ee()),this.classList.toggle("expanded");let N=this.querySelector(".event-details");if(N){let oe=N.style.display==="none";N.style.display=oe?"block":"none",oe?g.add(l.id):g.delete(l.id)}},E.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${G}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${x.toUpperCase()}</div>
                    <div class="event-message">${c}</div>
                    <div class="event-details" style="${$}">
                        <div class="event-details-header">
                            <h4>Notification Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Insight:</span>
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px;">${escapeHtml(f)}</p>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Priority:</span>
                            <span class="detail-value" style="color: ${b==="high"||b==="critical"?"#ff4d4d":b==="medium"?"#ffa500":"#888"}">${b.toUpperCase()}</span>
                        </div>
                        ${w}
                    </div>
                </div>
            `;let T=E.querySelector(".close-details-btn");return T&&T.addEventListener("click",A=>{A.stopPropagation(),E.classList.remove("expanded");let N=E.querySelector(".event-details");N&&(N.style.display="none"),g.delete(l.id)}),E},g=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(l=>l.dataset.notificationId).filter(l=>l)),s=Array.from(e.children),m=new Map(s.map(l=>[l.dataset.notificationId,l])),v=new Set(r.map(l=>l.id));s.forEach(l=>{(!l.dataset.notificationId||!v.has(l.dataset.notificationId))&&l.remove()});let h=null;r.forEach((l,i)=>{let c=m.get(l.id);!c&&(c=p(l),!c)||(i===0?e.firstElementChild!==c&&e.prepend(c):h&&h.nextElementSibling!==c&&h.after(c),h=c)}),W=Date.now(),S(0,W),ee()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=y("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}var ye=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),we=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),xe=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':y("config","No service map configured.","Upload service-map.json in Settings."),R=null,z=null,J=null;async function $e(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(o=>o.id==="dex-event-service");if(!t)return null;let d=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/system_monitor`,a=await fetch(d);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function Ee(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(o=>o.id==="dex-event-service");if(!t)return null;let d=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/processes`,a=await fetch(d);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function ne(){let e=document.getElementById("services-widgets");if(!e)return;let t=await $e();if(!t||!t.services){e.innerHTML=y("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}R=Date.now(),S(5,R);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function d(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function a(s){if(!s||s==="N/A"||s==="unknown")return"-";let m=s.match(/^(\d+\.\d+\.\d+)/);return m?m[0]:s.split(".").slice(0,3).join(".")||"-"}function o(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function u(s){if(!s||s==="N/A"||s==="unknown")return"-";let m=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!m)return"-";let v=parseInt(m[1])||0,h=parseInt(m[2])||0,l=parseInt(m[3])||0,i=parseFloat(m[4])||0,c=v*86400+h*3600+l*60+i,f=Math.floor(c/86400);if(f>0)return`${f}d`;let b=Math.floor(c/3600);if(b>0)return`${b}h`;let x=Math.floor(c/60);return x>0?`${x}m`:`${Math.floor(c)}s`}function r(s){let m=s.status==="online",v=m?"service-widget-online":"service-widget-offline",h=m?"bx-check-circle":"bx-x-circle",l=m?"OK":"BAD",i=s.version?a(s.version.str):"-",c=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",f=s.memory&&s.memory!=="N/A"?s.memory:"-",b=c!=="-"?"#00ff00":"#666",x=c!=="-"?"#fff":"#666",_=f!=="-"?"#00ff00":"#666",M=f!=="-"?"#fff":"#666",C=u(s.uptime),k="";return m?k=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${i}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${C}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${b};"></i>
                        <span style="color: ${x};">${c}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${_};"></i>
                        <span style="color: ${M};">${f}</span>
                    </div>
                </div>`:k='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${v}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${h}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${l}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${o(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${k}</div></div>`}let p=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),g=new Set(n.map(s=>s.id));for(let[s,m]of p)g.has(s)||m.remove();n.forEach(s=>{let m=r(s),v=p.get(s.id);v?v.outerHTML!==m&&(v.outerHTML=m):e.insertAdjacentHTML("beforeend",m)})}async function ie(){let e=document.getElementById("models-widgets");if(!e)return;let t=await $e();if(!t){e.innerHTML=y("offline","Failed to load model status.");return}z=Date.now(),S(4,z);let n=t.models||[],d=t.whisper;Array.from(e.children).forEach(r=>{r.classList.contains("service-widget")||r.remove()});function a(r){let p=r.status==="Ready";return`
                <div class="service-widget ${p?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${p?"READY":"NOT FOUND"}</span>
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
                </div>`}function o(r){let p=r.status==="Downloaded",g=p?"service-widget-online":"service-widget-offline",s=p?"OK":"MISSING",m=p&&r.size>0?`${(r.size/1e9).toFixed(2)} GB`:"-",v=r.name;return r.type==="custom"&&v.endsWith(":latest")&&(v=v.replace(":latest","")),`<div class="service-widget ${g}" data-model-name="${r.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${v}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${r.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${m}</span></div></div></div>`}let u="";if(d&&(u+=a(d)),u+=n.map(o).join(""),!u){e.innerHTML=y("empty","No models found.");return}e.innerHTML!==u&&(e.innerHTML=u)}async function ae(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await Ee();if(t===null){e.innerHTML=y("offline","Failed to load process status.");return}if(J=Date.now(),S(1,J),t.length===0){e.innerHTML=y("empty","No active processes.");return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(o){let u=Math.floor(Date.now()/1e3-o.start_time),r=o.retries>0?`<span class="process-retry-badge">Retry ${o.retries}</span>`:"";return`
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
                            <span class="info-value">${u}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${o.pid}</span>
                        </div>
                    </div>
                </div>`}let d=new Map(Array.from(e.querySelectorAll(".process-widget")).map(o=>[o.dataset.channelId,o])),a=new Set(t.map(o=>o.channel_id));for(let[o,u]of d)a.has(o)||u.remove();t.forEach(o=>{let u=n(o),r=d.get(o.channel_id);r?r.outerHTML!==u&&(r.outerHTML=u):e.insertAdjacentHTML("beforeend",u)})}function j(){let e=X(),t=P()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},d=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(L).map(a=>`
                    <div class="theme-card ${e===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===L.AUTO?"Automatic theme selection.":a===L.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${d?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function B(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(r=>{r.addEventListener("click",function(){let p=this.dataset.theme;ue(p),e.setContent(j()),B(e)})});function n(r,p,g,s,m,v,h){let l=document.getElementById(r),i=document.getElementById(p),c=document.getElementById(g),f=document.getElementById(s),b=document.getElementById(m);l&&i&&(l.onclick=()=>i.click(),i.onchange=x=>{let _=x.target.files[0];if(!_)return;if(_.name!==h){f.textContent=`File must be named "${h}"`,f.style.display="block",i.value="";return}let M=new FileReader;M.onload=C=>{try{let k=JSON.parse(C.target.result);localStorage.setItem(v,JSON.stringify(k)),c.textContent=h,f.style.display="none",e.setContent(j()),B(e)}catch{f.textContent="Invalid JSON format",f.style.display="block",i.value=""}},M.onerror=()=>{f.textContent="Failed to read file",f.style.display="block",i.value=""},M.readAsText(_)}),b&&(b.onclick=()=>{localStorage.removeItem(v),e.setContent(j()),B(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let d=document.getElementById("notifications-toggle");if(d){let r="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!r||r.state==="denied")&&(d.disabled=!0),d.onclick=async p=>{if(p.target.checked)try{await Notification.requestPermission()!=="granted"&&(p.target.checked=!1)}catch{p.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),p.target.checked=!0)}}let a=document.getElementById("microphone-toggle");async function o(){let r="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;a&&(a.disabled=!r||r.state==="denied",a.checked=r?.state==="granted");let p=document.querySelector("#microphone-setting-item .settings-item-description");p&&(p.textContent=r?r.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}o(),a&&!a.disabled&&(a.onclick=async r=>{if(r.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),o()}catch{r.target.checked=!1,o()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),r.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=r=>{let p=r.target.checked;localStorage.setItem("easter_analytics_enabled",p),window.EASTER_ANALYTICS_ENABLED=p,window.EASTER_DEBUG_MODE=p})}function Se(){console.log("Welcome to Easter Company."),ve(),le();let e=de();re(e),ce();let t=document.querySelector("footer"),n=null;function d(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function a(s,m=null){let v=n&&n.id===s.id;n&&n.close(!v),v?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(h=>{let l=h===m;h.classList.toggle("active",l),h.classList.toggle("inactive",!l&&m)}),t?.classList.add("hide")},n?220:0)}async function o(){await Promise.all([ne(),ie(),te(),ae(),se(),Z()]);let s=setInterval(()=>{if(!g.isOpen())return clearInterval(s);S(3,Q),S(2,F),S(4,z),S(5,R),S(1,J),S(0,W)},1e3),m=setInterval(()=>{if(!g.isOpen())return clearInterval(m);te(),ae(),se(),Z()},3e3),v=setInterval(()=>{if(!g.isOpen())return clearInterval(v);ne(),ie()},6e4)}let u=q({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:d}),r=q({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${P()||"Unknown"}</p>`,icon:"bx-user",onClose:d}),p=q({id:"settings-window",title:"Settings",content:j(),icon:"bx-cog",onClose:d,onOpen:()=>{p.setContent(j()),setTimeout(()=>B(p),50)}}),g=q({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:he(),"data-tab-index":0},{icon:"bx-cog",title:"Processes",content:xe(),"data-tab-index":1},{icon:"bx-calendar-event",title:"Events",content:be(),"data-tab-index":2},{icon:"bx-history",title:"Logs",content:ge(),"data-tab-index":3},{icon:"bx-brain",title:"Models",content:we(),"data-tab-index":4},{icon:"bx-line-chart",title:"Services",content:ye(),"data-tab-index":5}],icon:"bxs-message-dots",onClose:d,onOpen:()=>setTimeout(o,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>a(r,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>a(g,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>a(p,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(u),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{pe(document.getElementById("email-input").value),window.location.reload()}catch(m){let v=document.getElementById("login-error");v&&(v.textContent=m.message,v.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Se):Se();})();
//# sourceMappingURL=dex.c4fe2f9d.js.map
