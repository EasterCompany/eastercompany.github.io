(()=>{function be(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function he(e=!1){let n=`
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
    `,p=document.createElement("nav");p.innerHTML=n,document.body.prepend(p)}function ye(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function z(e){let t=null,n=e.onClose||null,p=e.onOpen||null;function r(){if(t){t.classList.add("open"),window.addEventListener("resize",o),p&&setTimeout(p,10);return}let s=document.getElementById("windows-container");s||(s=document.createElement("div"),s.id="windows-container",s.className="windows-container",document.body.appendChild(s)),t=document.createElement("div"),t.id=e.id,t.className="window";let d=e.icon||"bx-window",u="",b="",l;e.tabs&&e.tabs.length>0?(u=`<div class="tab-bar">${e.tabs.map((x,h)=>{let $;return x.icon?$=`<i class="bx ${x.icon}"></i>`:x.title&&x.title.length>0?$=`<span class="tab-glyph">${x.title.charAt(0).toUpperCase()}</span>`:$='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${h===0?"active":""}" data-tab-index="${h}">
                        ${$}
                        <span class="tab-title">${x.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${h}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,l=`<div class="window-content">${e.tabs.map((x,h)=>`<div class="tab-content ${h===0?"active":""}" data-tab-content="${h}">${x.content}</div>`).join("")}</div>`):(e.title&&(b=`<div class="window-title">${e.title}</div>`),l=`<div class="window-content">${e.content}</div>`);let a=`
            <div class="window-header">
                <i class="bx ${d}"></i>
                ${u}
                ${b}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=a+l,s.appendChild(t);let i=t.querySelector(".window-close");i&&i.addEventListener("click",f=>{f.stopPropagation(),c()}),window.addEventListener("resize",o),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(g=>{g.addEventListener("click",()=>{let x=g.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(h=>h.classList.remove("active")),g.classList.add("active"),t.querySelectorAll(".tab-content").forEach(h=>h.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${x}"]`).classList.add("active"),v(g,t)})}),setTimeout(()=>{t.classList.add("open"),p&&p()},10)}function o(){if(!t||!t.classList.contains("open"))return;let s=t.querySelector(".tab.active");s&&v(s,t)}function v(s,d){setTimeout(()=>{let u=d.querySelector(".tab-bar");if(u){let b=Array.from(u.querySelectorAll(".tab")),l=b.indexOf(s),a=u.clientWidth,i=b[Math.max(0,l-2)],f=b[Math.min(b.length-1,l+2)],g=i.offsetLeft-u.offsetLeft-25,h=f.offsetLeft+f.offsetWidth-u.offsetLeft+25-g,$;h<=a?$=g-(a-h)/2:$=s.offsetLeft-u.offsetLeft-a/2+s.offsetWidth/2,u.scrollTo({left:$,behavior:"smooth"})}},350)}function c(s=!1){t&&(window.removeEventListener("resize",o),s?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function m(s){if(t){let d=t.querySelector(".window-content");d&&(d.innerHTML=s)}}function y(){return t&&t.classList.contains("open")}return{open:r,close:c,setContent:m,isOpen:y,id:e.id}}var oe="easter_user_email";function we(){return localStorage.getItem(oe)!==null}function Y(){return localStorage.getItem(oe)}function xe(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(oe,e.trim())}var $e="easter_theme",I={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function le(){return localStorage.getItem($e)||I.AUTO}function He(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?I.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,I.DEFAULT)}function Se(e){if(!Object.values(I).includes(e))throw new Error("Invalid theme");localStorage.setItem($e,e),re(e)}function re(e,t=!1){let n=document.body,p=e===I.AUTO?He():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(I).forEach(r=>{n.classList.remove(`theme-${r}`)}),n.classList.add(`theme-${e}`),p===I.ANIMATED){if(!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}}else{let r=document.querySelector(".background");r&&(t?r.remove():(r.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{r.remove()},400)))}}function Le(){let e=le();if(re(e,!0),e===I.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{re(I.AUTO)},300)})}}function P(e,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${r} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${o}
        </div>
    `}function Te(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ce=null;async function de(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=P("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(v){return console.error("Error parsing service_map from localStorage:",v),e.classList.add("placeholder-active"),e.innerHTML=P("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let p=null;if(n&&typeof n.services=="object"){let v=["cs","be","th"];for(let c of v)if(Array.isArray(n.services[c])){let m=n.services[c].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(m){p=m;break}}}if(!p)return e.classList.add("placeholder-active"),e.innerHTML=P("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let o=`http://${p.domain==="0.0.0.0"?"127.0.0.1":p.domain}:${p.port}/logs`;try{let v=await fetch(o);if(!v.ok)return e.classList.add("placeholder-active"),e.innerHTML=P("offline","Event service is offline.","Please ensure the event service is running."),!1;let c=await v.json();if(!c||c.length===0)return e.classList.add("placeholder-active"),e.innerHTML=P("empty","No logs found.","Service logs will appear here when available."),!1;let m=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=c.filter(d=>!m.includes(d.id));y.forEach(d=>{d.logs&&Array.isArray(d.logs)?d.logs.reverse():d.logs=[]}),y.reverse();let s=y.map(d=>{let u=d.logs.join(`
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
            `}).join("");return e.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(d=>{d.addEventListener("click",()=>{let u=unescape(d.dataset.logs);navigator.clipboard.writeText(u).then(()=>{let b=d.querySelector("i");b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3)})})}),ce=Date.now(),!0}catch(v){return console.error("Error fetching logs:",v),e.classList.add("placeholder-active"),e.innerHTML=P("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function w(e,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${t}</p>${o}</div>`}function C(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function E(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let r=(Date.now()-t)/1e3,o;if(r<30)o=`${Math.floor(r)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${o}`}function B(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"]`);if(!n)return;let p=n.querySelector(".notification-badge");p&&(t>0?(p.textContent=t>9?"9+":t,p.style.display="flex"):p.style.display="none")}function K(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length;B(0,t)}var Be={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Ee(e,t){let n=Be[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let p=n.replace(/\{(\w+)\}/g,(r,o)=>t[o]!==void 0&&t[o]!==null?t[o]:r);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(p+=` (Translation: ${t.english_translation})`),p}var _e=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',X=null;async function pe(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let o=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(l=>l.dataset.eventId).filter(l=>l)),v=await fetch(r);if(!v.ok)throw new Error("Service is offline or unreachable.");let m=(await v.json()).events||[];if(m.length===0){e.innerHTML=w("empty","No events found.");return}let y=l=>{let a=l.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let i=a.type,f=i==="engagement.decision"||i==="messaging.bot.sent_message"||i==="messaging.user.sent_message"||i==="moderation.explicit_content.deleted"||i==="analysis.link.completed"||i==="analysis.visual.completed"||i==="system.cli.command",g="event-border-grey";f&&(i==="moderation.explicit_content.deleted"?g="event-border-red":i==="analysis.link.completed"||i==="analysis.visual.completed"?g="event-border-purple":i==="system.cli.command"?g="event-border-orange":g="event-border-blue");let x=f?"cursor-pointer":"",h=o.has(l.id),$=h?"expanded":"",A=h?"display: block;":"display: none;",_=new Date(l.timestamp*1e3),G=_.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),N=_.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),q=Ee(i,a),k="";if(f){let S="";if(i==="engagement.decision")S=`
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
                        `;else if(i==="messaging.bot.sent_message")S=`
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
                        `;else if(i==="moderation.explicit_content.deleted")S=`
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
                                <pre class="detail-pre">${C(a.raw_output)||"None"}</pre>
                            </div>
                        `;else if(i==="analysis.link.completed")S=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${C(a.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${C(a.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${C(a.summary)||"None"}</pre>
                            </div>
                        `;else if(i==="analysis.visual.completed"){let T="";a.base64_preview?T=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(T=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),S=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${a.filename}</span>
                            </div>
                            ${T}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${C(a.description)||"None"}</pre>
                            </div>
                        `}else if(i==="system.cli.command")S=`
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
                                <pre class="detail-pre">${C(a.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(i==="messaging.user.sent_message"){let T="";a.attachments&&a.attachments.length>0&&(T=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${a.attachments.map(L=>{let O=L.content_type&&L.content_type.startsWith("image/"),V=(L.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${O?`<div class="attachment-thumb-container"><img src="${L.url}" alt="${L.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${L.url}" target="_blank" class="attachment-link">${L.filename}</a>
                                            <span class="attachment-meta">${L.content_type} \u2022 ${V}</span>
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
                         `}k=`
                        <div class="event-details" style="${A}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${S}
                        </div>
                    `}let D=document.createElement("div");if(D.className=`event-item ${g} ${x} ${$}`,D.dataset.eventId=l.id,D.onclick=function(S){if(!f)return;this.classList.toggle("expanded");let T=this.querySelector(".event-details");T&&(T.style.display=T.style.display==="none"?"block":"none")},D.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${G}</span>
                        <span class="event-date">${N}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${l.service}</div>
                        <div class="event-message">${q}</div>
                        ${k}
                    </div>
                `,f){let S=D.querySelector(".close-details-btn");S&&S.addEventListener("click",T=>{T.stopPropagation();let M=T.target.closest(".event-item");if(M){M.classList.remove("expanded");let L=M.querySelector(".event-details");L&&(L.style.display="none")}})}return D},s=Array.from(e.children),d=new Map(s.map(l=>[l.dataset.eventId,l])),u=new Set(m.map(l=>l.id));s.forEach(l=>{(!l.dataset.eventId||!u.has(l.dataset.eventId))&&l.remove()});let b=null;m.forEach((l,a)=>{let i=d.get(l.id);!i&&(i=y(l),!i)||(a===0?e.firstElementChild!==i&&e.prepend(i):b&&b.nextElementSibling!==i&&b.after(i),b=i)}),X=Date.now(),E(2,X)}catch(o){console.error("Error fetching events:",o),e.children.length===0&&(e.innerHTML=w("offline","Failed to load events.","The event service may be offline or unreachable."))}}var Ie=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,Z=null,j=new Set,Q=[];async function U(){let e=document.getElementById("notifications-list");if(!e)return;je();let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let o=await fetch(r);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[],m=Date.now(),y=24*60*60*1e3,s=c.filter(i=>{let f=localStorage.getItem(`notification_read_ts_${i.id}`);if(!f)return!0;let g=parseInt(f);return m-g<y});if(Q=s,s.length===0){e.innerHTML=w("empty","No notifications yet."),K();return}let d=i=>{let f=i.event;if(typeof f=="string")try{f=JSON.parse(f)}catch{return null}let g=f.title||"Untitled Notification",x=f.body||"No description provided.",h=f.priority||"low",$=!!f.alert,A=f.category||"system",_=f.related_event_ids||[],N=!!localStorage.getItem(`notification_read_ts_${i.id}`),q=new Date(i.timestamp*1e3),k=q.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),D=q.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=N?"event-border-grey":"event-border-blue";!N&&$&&(S="event-border-red"),N&&(h==="high"||h==="critical")?S="event-border-red":N&&h==="medium"&&(S="event-border-orange");let T=N?"notification-read":"notification-unread",M=j.has(i.id),L=M?"expanded":"",O=M?"display: block;":"display: none;",V="";_.length>0&&(V=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${_.map(F=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${F.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let H=document.createElement("div");H.className=`event-item notification-item ${S} ${T} ${L} cursor-pointer`,H.dataset.notificationId=i.id,H.onclick=function(F){if(this.classList.contains("expanded")){this.classList.remove("expanded"),j.delete(i.id);let R=this.querySelector(".event-details");R&&(R.style.display="none")}else{this.classList.add("expanded"),j.add(i.id);let R=this.querySelector(".event-details");if(R&&(R.style.display="block"),!localStorage.getItem(`notification_read_ts_${i.id}`)){localStorage.setItem(`notification_read_ts_${i.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue"),this.classList.remove("event-border-red");let ae="event-border-grey";h==="high"||h==="critical"?ae="event-border-red":h==="medium"&&(ae="event-border-orange"),this.classList.add(ae),K()}}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${D}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${A.toUpperCase()} ${$?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${g}</div>
                    <div class="event-details" style="${O}">
                        <div class="event-details-header">
                            <h4>${$?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Priority:</span>
                            <span class="detail-value" style="color: ${h==="high"||h==="critical"?"#ff4d4d":h==="medium"?"#ffa500":"#888"}">${h.toUpperCase()}</span>
                        </div>
                        <div class="event-detail-block" style="text-align: left;">
                            <span class="detail-label">Insight:</span>
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${C(x)}</p>
                        </div>
                        ${V}
                    </div>
                </div>
            `;let ge=H.querySelector(".close-details-btn");return ge&&ge.addEventListener("click",F=>{F.stopPropagation(),H.classList.remove("expanded");let ie=H.querySelector(".event-details");ie&&(ie.style.display="none"),j.delete(i.id)}),H},u=Array.from(e.children),b=new Map(u.map(i=>[i.dataset.notificationId,i])),l=new Set(s.map(i=>i.id));u.forEach(i=>{i.dataset.notificationId&&!l.has(i.dataset.notificationId)&&i.remove()});let a=null;s.forEach((i,f)=>{let g=b.get(i.id);!g&&(g=d(i),!g)||(f===0?e.firstElementChild!==g&&e.prepend(g):a&&a.nextElementSibling!==g&&a.after(g),a=g)}),Z=Date.now(),E(0,Z),K()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=w("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function je(){let e=document.getElementById("notif-read-all"),t=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),p=document.getElementById("notif-clear");e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Q.forEach(r=>{localStorage.getItem(`notification_read_ts_${r.id}`)||localStorage.setItem(`notification_read_ts_${r.id}`,Date.now().toString())}),U()},e.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Q.forEach(r=>j.add(r.id)),U()},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{j.clear(),U()},n.dataset.listenerAttached="true"),p&&!p.dataset.listenerAttached&&(p.onclick=()=>{let r=Date.now()-1728e5;Q.forEach(o=>{localStorage.setItem(`notification_read_ts_${o.id}`,r.toString())}),j.clear(),U()},p.dataset.listenerAttached="true")}var ke=()=>'<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>',ee=null;async function me(){let e=document.getElementById("blueprints-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(v=>v.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!n){e.innerHTML=w("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let o=await fetch(r);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[];if(c.length===0){e.innerHTML=w("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),B(1,0);return}let m=l=>{let a=l.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let i=a.title||"Untitled Blueprint",f=a.summary||a.body||"No summary provided.",g=a.content||"",x=a.category||"architecture",h=a.affected_services||[],$=a.implementation_path||[],A=new Date(l.timestamp*1e3),_=A.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),G=A.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),N=y.has(l.id),q=N?"display: block;":"display: none;",k=document.createElement("div");k.className=`event-item notification-item event-border-purple cursor-pointer ${N?"expanded":""}`,k.dataset.blueprintId=l.id,k.onclick=function(M){this.classList.toggle("expanded");let L=this.querySelector(".event-details");if(L){let O=L.style.display==="none";L.style.display=O?"block":"none",O?y.add(l.id):y.delete(l.id)}};let D=h.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${h.join(", ")}</div>`:"",S="";$.length>0&&(S=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${$.map(M=>`<li>${C(M)}</li>`).join("")}
                        </ul>
                    </div>
                `),k.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${_}</span>
                    <span class="event-date">${G}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${x.toUpperCase()}</div>
                    <div class="event-message">${i}</div>
                    <div class="event-details" style="${q}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${C(f)}
                        </div>
                        ${D}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${C(g)}</p>
                        </div>
                        ${S}
                    </div>
                </div>
            `;let T=k.querySelector(".close-details-btn");return T&&T.addEventListener("click",M=>{M.stopPropagation(),k.classList.remove("expanded");let L=k.querySelector(".event-details");L&&(L.style.display="none"),y.delete(l.id)}),k},y=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(l=>l.dataset.blueprintId).filter(l=>l)),s=Array.from(e.children),d=new Map(s.map(l=>[l.dataset.blueprintId,l])),u=new Set(c.map(l=>l.id));s.forEach(l=>{l.dataset.blueprintId&&!u.has(l.dataset.blueprintId)&&l.remove()});let b=null;c.forEach((l,a)=>{let i=d.get(l.id);!i&&(i=m(l),!i)||(a===0?e.firstElementChild!==i&&e.prepend(i):b&&b.nextElementSibling!==i&&b.after(i),b=i)}),ee=Date.now(),E(1,ee),B(1,c.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=w("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}var Me=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),Ce=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),Ae=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),te=null,se=null,ne=null;async function Ne(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(o=>o.id==="dex-event-service");if(!t)return null;let p=`http://${t.domain==="0.0.0.0"?"127.0.0.1":t.domain}:${t.port}/system_monitor`,r=await fetch(p);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function Ue(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(o=>o.id==="dex-event-service");if(!t)return null;let p=`http://${t.domain==="0.0.0.0"?"127.0.0.1":t.domain}:${t.port}/processes`,r=await fetch(p);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function ue(){let e=document.getElementById("services-widgets");if(!e)return;let t=await Ne();if(!t||!t.services){e.innerHTML=w("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}te=Date.now(),E(5,te);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function p(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function r(s){if(!s||s==="N/A"||s==="unknown")return"-";let d=s.match(/^(\d+\.\d+\.\d+)/);return d?d[0]:s.split(".").slice(0,3).join(".")||"-"}function o(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function v(s){if(!s||s==="N/A"||s==="unknown")return"-";let d=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!d)return"-";let u=parseInt(d[1])||0,b=parseInt(d[2])||0,l=parseInt(d[3])||0,a=parseFloat(d[4])||0,i=u*86400+b*3600+l*60+a,f=Math.floor(i/86400);if(f>0)return`${f}d`;let g=Math.floor(i/3600);if(g>0)return`${g}h`;let x=Math.floor(i/60);return x>0?`${x}m`:`${Math.floor(i)}s`}function c(s){let d=s.status==="online",u=d?"service-widget-online":"service-widget-offline",b=d?"bx-check-circle":"bx-x-circle",l=d?"OK":"BAD",a=s.version?r(s.version.str):"-",i=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",f=s.memory&&s.memory!=="N/A"?s.memory:"-",g=i!=="-"?"#00ff00":"#666",x=i!=="-"?"#fff":"#666",h=f!=="-"?"#00ff00":"#666",$=f!=="-"?"#fff":"#666",A=v(s.uptime),_="";return d?_=`
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
                        <i class="bx bxs-microchip" style="color: ${g};"></i>
                        <span style="color: ${x};">${i}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${h};"></i>
                        <span style="color: ${$};">${f}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${u}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${b}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${l}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${o(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let m=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),y=new Set(n.map(s=>s.id));for(let[s,d]of m)y.has(s)||d.remove();n.forEach(s=>{let d=c(s),u=m.get(s.id);u?u.outerHTML!==d&&(u.outerHTML=d):e.insertAdjacentHTML("beforeend",d)})}async function ve(){let e=document.getElementById("models-widgets");if(!e)return;let t=await Ne();if(!t){e.innerHTML=w("offline","Failed to load model status.");return}se=Date.now(),E(4,se);let n=t.models||[],p=t.whisper;Array.from(e.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function r(c){let m=c.status==="Ready";return`
                <div class="service-widget ${m?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${m?"READY":"NOT FOUND"}</span>
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
                </div>`}function o(c){let m=c.status==="Downloaded",y=m?"service-widget-online":"service-widget-offline",s=m?"OK":"MISSING",d=m&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",u=c.name;return c.type==="custom"&&u.endsWith(":latest")&&(u=u.replace(":latest","")),`<div class="service-widget ${y}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${m?"bx-check-circle":"bx-x-circle"}"></i><h3>${u}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${d}</span></div></div></div>`}let v="";if(p&&(v+=r(p)),v+=n.map(o).join(""),!v){e.innerHTML=w("empty","No models found.");return}e.innerHTML!==v&&(e.innerHTML=v)}async function fe(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await Ue();if(t===null){e.innerHTML=w("offline","Failed to load process status.");return}if(ne=Date.now(),E(2,ne),t.length===0){e.innerHTML=w("empty","No active processes."),B(2,0);return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(o){let v=Math.floor(Date.now()/1e3-o.start_time),c=o.retries>0?`<span class="process-retry-badge">Retry ${o.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${o.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${o.channel_id}</h3>
                        ${c}
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
                </div>`}let p=new Map(Array.from(e.querySelectorAll(".process-widget")).map(o=>[o.dataset.channelId,o])),r=new Set(t.map(o=>o.channel_id));for(let[o,v]of p)r.has(o)||v.remove();t.forEach(o=>{let v=n(o),c=p.get(o.channel_id);c?c.outerHTML!==v&&(c.outerHTML=v):e.insertAdjacentHTML("beforeend",v)}),B(2,t.length)}function W(){let e=le(),t=Y()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},p=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(I).map(r=>`
                    <div class="theme-card ${e===r?"active":""}" data-theme="${r}">
                        <div class="theme-preview theme-preview-${r.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${r}</h3>
                            <p>${r===I.AUTO?"Automatic theme selection.":r===I.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${p?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function J(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(c=>{c.addEventListener("click",function(){let m=this.dataset.theme;Se(m),e.setContent(W()),J(e)})});function n(c,m,y,s,d,u,b){let l=document.getElementById(c),a=document.getElementById(m),i=document.getElementById(y),f=document.getElementById(s),g=document.getElementById(d);l&&a&&(l.onclick=()=>a.click(),a.onchange=x=>{let h=x.target.files[0];if(!h)return;if(h.name!==b){f.textContent=`File must be named "${b}"`,f.style.display="block",a.value="";return}let $=new FileReader;$.onload=A=>{try{let _=JSON.parse(A.target.result);localStorage.setItem(u,JSON.stringify(_)),i.textContent=b,f.style.display="none",e.setContent(W()),J(e)}catch{f.textContent="Invalid JSON format",f.style.display="block",a.value=""}},$.onerror=()=>{f.textContent="Failed to read file",f.style.display="block",a.value=""},$.readAsText(h)}),g&&(g.onclick=()=>{localStorage.removeItem(u),e.setContent(W()),J(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let p=document.getElementById("notifications-toggle");if(p){let c="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!c||c.state==="denied")&&(p.disabled=!0),p.onclick=async m=>{if(m.target.checked)try{await Notification.requestPermission()!=="granted"&&(m.target.checked=!1)}catch{m.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),m.target.checked=!0)}}let r=document.getElementById("microphone-toggle");async function o(){let c="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;r&&(r.disabled=!c||c.state==="denied",r.checked=c?.state==="granted");let m=document.querySelector("#microphone-setting-item .settings-item-description");m&&(m.textContent=c?c.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}o(),r&&!r.disabled&&(r.onclick=async c=>{if(c.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),o()}catch{c.target.checked=!1,o()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),c.target.checked=!0)});let v=document.getElementById("analytics-toggle");v&&(v.checked=localStorage.getItem("easter_analytics_enabled")!=="false",v.onclick=c=>{let m=c.target.checked;localStorage.setItem("easter_analytics_enabled",m),window.EASTER_ANALYTICS_ENABLED=m,window.EASTER_DEBUG_MODE=m})}function De(){console.log("Welcome to Easter Company."),Le(),be();let e=we();he(e),ye();let t=document.querySelector("footer"),n=null;function p(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function r(s,d=null){let u=n&&n.id===s.id;n&&n.close(!u),u?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(b=>{let l=b===d;b.classList.toggle("active",l),b.classList.toggle("inactive",!l&&d)}),t?.classList.add("hide")},n?220:0)}async function o(){await Promise.all([ue(),ve(),pe(),fe(),U(),me(),de()]);let s=setInterval(()=>{if(!y.isOpen())return clearInterval(s);E(4,ce),E(3,X),E(5,se),E(6,te),E(2,ne),E(1,ee),E(0,Z)},1e3),d=setInterval(()=>{if(!y.isOpen())return clearInterval(d);pe(),fe(),U(),me(),de()},3e3),u=setInterval(()=>{if(!y.isOpen())return clearInterval(u);ue(),ve()},6e4)}let v=z({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:p}),c=z({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${Y()||"Unknown"}</p>`,icon:"bx-user",onClose:p}),m=z({id:"settings-window",title:"Settings",content:W(),icon:"bx-cog",onClose:p,onOpen:()=>{m.setContent(W()),setTimeout(()=>J(m),50)}}),y=z({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ie(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:ke(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Ae(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:_e(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Te(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:Ce(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Me(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:p,onOpen:()=>setTimeout(o,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>r(c,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>r(y,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>r(m,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{r(v),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{xe(document.getElementById("email-input").value),window.location.reload()}catch(d){let u=document.getElementById("login-error");u&&(u.textContent=d.message,u.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",De):De();})();
//# sourceMappingURL=dex.d71b2d2a.js.map
