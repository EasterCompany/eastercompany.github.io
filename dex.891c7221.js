(()=>{function he(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ye(e=!1){let n=`
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
    `,l=document.createElement("nav");l.innerHTML=n,document.body.prepend(l)}function we(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function J(e){let t=null,n=e.onClose||null,l=e.onOpen||null;function a(){if(t){t.classList.add("open"),window.addEventListener("resize",o),l&&setTimeout(l,10);return}let s=document.getElementById("windows-container");s||(s=document.createElement("div"),s.id="windows-container",s.className="windows-container",document.body.appendChild(s)),t=document.createElement("div"),t.id=e.id,t.className="window";let d=e.icon||"bx-window",f="",b="",r;e.tabs&&e.tabs.length>0?(f=`<div class="tab-bar">${e.tabs.map((h,x)=>{let w;return h.icon?w=`<i class="bx ${h.icon}"></i>`:h.title&&h.title.length>0?w=`<span class="tab-glyph">${h.title.charAt(0).toUpperCase()}</span>`:w='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${x===0?"active":""}" data-tab-index="${x}">
                        ${w}
                        <span class="tab-title">${h.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${x}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,r=`<div class="window-content">${e.tabs.map((h,x)=>`<div class="tab-content ${x===0?"active":""}" data-tab-content="${x}">${h.content}</div>`).join("")}</div>`):(e.title&&(b=`<div class="window-title">${e.title}</div>`),r=`<div class="window-content">${e.content}</div>`);let i=`
            <div class="window-header">
                <i class="bx ${d}"></i>
                ${f}
                ${b}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=i+r,s.appendChild(t);let p=t.querySelector(".window-close");p&&p.addEventListener("click",m=>{m.stopPropagation(),c()}),window.addEventListener("resize",o),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(g=>{g.addEventListener("click",()=>{let h=g.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),g.classList.add("active"),t.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${h}"]`).classList.add("active"),u(g,t)})}),setTimeout(()=>{t.classList.add("open"),l&&l()},10)}function o(){if(!t||!t.classList.contains("open"))return;let s=t.querySelector(".tab.active");s&&u(s,t)}function u(s,d){setTimeout(()=>{let f=d.querySelector(".tab-bar");if(f){let b=Array.from(f.querySelectorAll(".tab")),r=b.indexOf(s),i=f.clientWidth,p=b[Math.max(0,r-2)],m=b[Math.min(b.length-1,r+2)],g=p.offsetLeft-f.offsetLeft-25,x=m.offsetLeft+m.offsetWidth-f.offsetLeft+25-g,w;x<=i?w=g-(i-x)/2:w=s.offsetLeft-f.offsetLeft-i/2+s.offsetWidth/2,f.scrollTo({left:w,behavior:"smooth"})}},350)}function c(s=!1){t&&(window.removeEventListener("resize",o),s?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function v(s){if(t){let d=t.querySelector(".window-content");d&&(d.innerHTML=s)}}function y(){return t&&t.classList.contains("open")}return{open:a,close:c,setContent:v,isOpen:y,id:e.id}}var oe="easter_user_email";function xe(){return localStorage.getItem(oe)!==null}function V(){return localStorage.getItem(oe)}function $e(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(oe,e.trim())}var Se="easter_theme",I={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function le(){return localStorage.getItem(Se)||I.AUTO}function Be(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?I.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,I.DEFAULT)}function Le(e){if(!Object.values(I).includes(e))throw new Error("Invalid theme");localStorage.setItem(Se,e),re(e)}function re(e,t=!1){let n=document.body,l=e===I.AUTO?Be():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(I).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${e}`),l===I.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(t?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function Te(){let e=le();if(re(e,!0),e===I.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{re(I.AUTO)},300)})}}function P(e,t,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${a} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${o}
        </div>
    `}function Ee(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ce=null;async function de(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=P("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(u){return console.error("Error parsing service_map from localStorage:",u),e.classList.add("placeholder-active"),e.innerHTML=P("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let l=null;if(n&&typeof n.services=="object"){let u=["cs","be","th"];for(let c of u)if(Array.isArray(n.services[c])){let v=n.services[c].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(v){l=v;break}}}if(!l)return e.classList.add("placeholder-active"),e.innerHTML=P("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let o=`http://${l.domain==="0.0.0.0"?"127.0.0.1":l.domain}:${l.port}/logs`;try{let u=await fetch(o);if(!u.ok)return e.classList.add("placeholder-active"),e.innerHTML=P("offline","Event service is offline.","Please ensure the event service is running."),!1;let c=await u.json();if(!c||c.length===0)return e.classList.add("placeholder-active"),e.innerHTML=P("empty","No logs found.","Service logs will appear here when available."),!1;let v=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=c.filter(d=>!v.includes(d.id));y.forEach(d=>{d.logs&&Array.isArray(d.logs)?d.logs.reverse():d.logs=[]}),y.reverse();let s=y.map(d=>{let f=d.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${d.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(f)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${f}</pre>
                </div>
            `}).join("");return e.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(d=>{d.addEventListener("click",()=>{let f=unescape(d.dataset.logs);navigator.clipboard.writeText(f).then(()=>{let b=d.querySelector("i");b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3)})})}),ce=Date.now(),!0}catch(u){return console.error("Error fetching logs:",u),e.classList.add("placeholder-active"),e.innerHTML=P("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $(e,t,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${t}</p>${o}</div>`}function C(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function E(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let a=(Date.now()-t)/1e3,o;if(a<30)o=`${Math.floor(a)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${o}`}function B(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"]`);if(!n)return;let l=n.querySelector(".notification-badge");l&&(t>0?(l.textContent=t>9?"9+":t,l.style.display="flex"):l.style.display="none")}function Y(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length;B(0,t)}var je={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function _e(e,t){let n=je[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let l=n.replace(/\{(\w+)\}/g,(a,o)=>t[o]!==void 0&&t[o]!==null?t[o]:a);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(l+=` (Translation: ${t.english_translation})`),l}var Ie=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',K=null;async function pe(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!n){e.innerHTML=$("error","Event service not found in service map.");return}let a=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let o=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(r=>r.dataset.eventId).filter(r=>r)),u=await fetch(a);if(!u.ok)throw new Error("Service is offline or unreachable.");let v=(await u.json()).events||[];if(v.length===0){e.innerHTML=$("empty","No events found.");return}let y=r=>{let i=r.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let p=i.type,m=p==="engagement.decision"||p==="messaging.bot.sent_message"||p==="messaging.user.sent_message"||p==="moderation.explicit_content.deleted"||p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.cli.command",g="event-border-grey";m&&(p==="moderation.explicit_content.deleted"?g="event-border-red":p==="analysis.link.completed"||p==="analysis.visual.completed"?g="event-border-purple":p==="system.cli.command"?g="event-border-orange":g="event-border-blue");let h=m?"cursor-pointer":"",x=o.has(r.id),w=x?"expanded":"",M=x?"display: block;":"display: none;",k=new Date(r.timestamp*1e3),q=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),F=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=_e(p,i),_="";if(m){let T="";if(p==="engagement.decision")T=`
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
                        `;else if(p==="messaging.bot.sent_message")T=`
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
                        `;else if(p==="moderation.explicit_content.deleted")T=`
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
                        `;else if(p==="analysis.link.completed")T=`
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
                        `;else if(p==="analysis.visual.completed"){let S="";i.base64_preview?S=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(S=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${i.filename}</span>
                            </div>
                            ${S}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${C(i.description)||"None"}</pre>
                            </div>
                        `}else if(p==="system.cli.command")T=`
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
                        `;else if(p==="messaging.user.sent_message"){let S="";i.attachments&&i.attachments.length>0&&(S=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${i.attachments.map(L=>{let O=L.content_type&&L.content_type.startsWith("image/"),ne=(L.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${O?`<div class="attachment-thumb-container"><img src="${L.url}" alt="${L.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${L.url}" target="_blank" class="attachment-link">${L.filename}</a>
                                            <span class="attachment-meta">${L.content_type} \u2022 ${ne}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),T=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${i.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${i.content||"(empty)"}</pre>
                            </div>
                            ${S}
                         `}_=`
                        <div class="event-details" style="${M}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${T}
                        </div>
                    `}let N=document.createElement("div");if(N.className=`event-item ${g} ${h} ${w}`,N.dataset.eventId=r.id,N.onclick=function(T){if(!m)return;this.classList.toggle("expanded");let S=this.querySelector(".event-details");S&&(S.style.display=S.style.display==="none"?"block":"none")},N.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${q}</span>
                        <span class="event-date">${F}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${r.service}</div>
                        <div class="event-message">${D}</div>
                        ${_}
                    </div>
                `,m){let T=N.querySelector(".close-details-btn");T&&T.addEventListener("click",S=>{S.stopPropagation();let A=S.target.closest(".event-item");if(A){A.classList.remove("expanded");let L=A.querySelector(".event-details");L&&(L.style.display="none")}})}return N},s=Array.from(e.children),d=new Map(s.map(r=>[r.dataset.eventId,r])),f=new Set(v.map(r=>r.id));s.forEach(r=>{(!r.dataset.eventId||!f.has(r.dataset.eventId))&&r.remove()});let b=null;v.forEach((r,i)=>{let p=d.get(r.id);!p&&(p=y(r),!p)||(i===0?e.firstElementChild!==p&&e.prepend(p):b&&b.nextElementSibling!==p&&b.after(p),b=p)}),K=Date.now(),E(2,K)}catch(o){console.error("Error fetching events:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}var Me=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,Q=null,j=new Set,X=[];async function U(e=!1){let t=document.getElementById("notifications-list");if(!t)return;Ue(),e&&(t.innerHTML="<p>Updating...</p>");let n=localStorage.getItem("service_map");if(!n){t.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let l=null;try{l=(JSON.parse(n).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{t.innerHTML=$("error","Invalid service map data.");return}if(!l){t.innerHTML=$("error","Event service not found in service map.");return}let o=`http://${l.domain==="0.0.0.0"?"127.0.0.1":l.domain}:${l.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let u=await fetch(o);if(!u.ok)throw new Error("Service is offline or unreachable.");let v=(await u.json()).events||[],y=Date.now(),s=24*60*60*1e3,d=v.filter(m=>{let g=localStorage.getItem(`notification_read_ts_${m.id}`);if(!g)return!0;let h=parseInt(g);return y-h<s});if(X=d,d.length===0){t.innerHTML=$("empty","No notifications yet."),Y();return}let f=m=>{let g=m.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let h=g.title||"Untitled Notification",x=g.body||"No description provided.",w=g.priority||"low",M=!!g.alert,k=g.category||"system",q=g.related_event_ids||[],D=!!localStorage.getItem(`notification_read_ts_${m.id}`),_=new Date(m.timestamp*1e3),N=_.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=_.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=D?"event-border-grey":"event-border-blue";!D&&M&&(S="event-border-red"),D&&(w==="high"||w==="critical")?S="event-border-red":D&&w==="medium"&&(S="event-border-orange");let A=D?"notification-read":"notification-unread",L=j.has(m.id),O=L?"expanded":"",ne=L?"display: block;":"display: none;",ge="";q.length>0&&(ge=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${q.map(R=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${R.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let H=document.createElement("div");H.className=`event-item notification-item ${S} ${A} ${O} cursor-pointer`,H.dataset.notificationId=m.id,H.onclick=function(R){if(this.classList.contains("expanded")){this.classList.remove("expanded"),j.delete(m.id);let z=this.querySelector(".event-details");z&&(z.style.display="none")}else{this.classList.add("expanded"),j.add(m.id);let z=this.querySelector(".event-details");if(z&&(z.style.display="block"),!localStorage.getItem(`notification_read_ts_${m.id}`)){localStorage.setItem(`notification_read_ts_${m.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue"),this.classList.remove("event-border-red");let ae="event-border-grey";w==="high"||w==="critical"?ae="event-border-red":w==="medium"&&(ae="event-border-orange"),this.classList.add(ae),Y()}}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${N}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${k.toUpperCase()} ${M?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${h}</div>
                    <div class="event-details" style="${ne}">
                        <div class="event-details-header">
                            <h4>${M?"Alert":"Notification"} Details</h4>
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
                        ${ge}
                    </div>
                </div>
            `;let be=H.querySelector(".close-details-btn");return be&&be.addEventListener("click",R=>{R.stopPropagation(),H.classList.remove("expanded");let ie=H.querySelector(".event-details");ie&&(ie.style.display="none"),j.delete(m.id)}),H},b=Array.from(t.children),r=new Map(b.map(m=>[m.dataset.notificationId,m])),i=new Set(d.map(m=>m.id));b.forEach(m=>{m.dataset.notificationId&&!i.has(m.dataset.notificationId)&&m.remove()});let p=null;d.forEach((m,g)=>{let h=r.get(m.id);(!h||e)&&(h&&h.remove(),h=f(m),!h)||(g===0?t.firstElementChild!==h&&t.prepend(h):p&&p.nextElementSibling!==h&&p.after(h),p=h)}),Q=Date.now(),E(0,Q),Y()}catch(u){console.error("Error fetching notifications:",u),t.children.length===0&&(t.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function Ue(){let e=document.getElementById("notif-read-all"),t=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),l=document.getElementById("notif-clear");e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),U(!0)},e.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{X.forEach(a=>{j.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),U(!0)},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{j.clear(),U(!0)},n.dataset.listenerAttached="true"),l&&!l.dataset.listenerAttached&&(l.onclick=()=>{let a=Date.now()-1728e5;X.forEach(o=>{localStorage.setItem(`notification_read_ts_${o.id}`,a.toString())}),j.clear(),U(!0)},l.dataset.listenerAttached="true")}var ke=()=>'<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>',Z=null;async function me(){let e=document.getElementById("blueprints-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!n){e.innerHTML=$("error","Event service not found in service map.");return}let a=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let o=await fetch(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[];if(c.length===0){e.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),B(1,0);return}let v=r=>{let i=r.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let p=i.title||"Untitled Blueprint",m=i.summary||i.body||"No summary provided.",g=i.content||"",h=i.category||"architecture",x=i.affected_services||[],w=i.implementation_path||[],M=new Date(r.timestamp*1e3),k=M.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),q=M.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),F=y.has(r.id),D=F?"display: block;":"display: none;",_=document.createElement("div");_.className=`event-item notification-item event-border-purple cursor-pointer ${F?"expanded":""}`,_.dataset.blueprintId=r.id,_.onclick=function(A){this.classList.toggle("expanded");let L=this.querySelector(".event-details");if(L){let O=L.style.display==="none";L.style.display=O?"block":"none",O?y.add(r.id):y.delete(r.id)}};let N=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",T="";w.length>0&&(T=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(A=>`<li>${C(A)}</li>`).join("")}
                        </ul>
                    </div>
                `),_.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${q}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${p}</div>
                    <div class="event-details" style="${D}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${C(m)}
                        </div>
                        ${N}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${C(g)}</p>
                        </div>
                        ${T}
                    </div>
                </div>
            `;let S=_.querySelector(".close-details-btn");return S&&S.addEventListener("click",A=>{A.stopPropagation(),_.classList.remove("expanded");let L=_.querySelector(".event-details");L&&(L.style.display="none"),y.delete(r.id)}),_},y=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(r=>r.dataset.blueprintId).filter(r=>r)),s=Array.from(e.children),d=new Map(s.map(r=>[r.dataset.blueprintId,r])),f=new Set(c.map(r=>r.id));s.forEach(r=>{r.dataset.blueprintId&&!f.has(r.dataset.blueprintId)&&r.remove()});let b=null;c.forEach((r,i)=>{let p=d.get(r.id);!p&&(p=v(r),!p)||(i===0?e.firstElementChild!==p&&e.prepend(p):b&&b.nextElementSibling!==p&&b.after(p),b=p)}),Z=Date.now(),E(1,Z),B(1,c.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}var Ce=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),Ae=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),Ne=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),ee=null,te=null,se=null;async function De(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(o=>o.id==="dex-event-service");if(!t)return null;let l=`http://${t.domain==="0.0.0.0"?"127.0.0.1":t.domain}:${t.port}/system_monitor`,a=await fetch(l);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function qe(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(o=>o.id==="dex-event-service");if(!t)return null;let l=`http://${t.domain==="0.0.0.0"?"127.0.0.1":t.domain}:${t.port}/processes`,a=await fetch(l);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function ue(){let e=document.getElementById("services-widgets");if(!e)return;let t=await De();if(!t||!t.services){e.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}ee=Date.now(),E(5,ee);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function l(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function a(s){if(!s||s==="N/A"||s==="unknown")return"-";let d=s.match(/^(\d+\.\d+\.\d+)/);return d?d[0]:s.split(".").slice(0,3).join(".")||"-"}function o(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function u(s){if(!s||s==="N/A"||s==="unknown")return"-";let d=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!d)return"-";let f=parseInt(d[1])||0,b=parseInt(d[2])||0,r=parseInt(d[3])||0,i=parseFloat(d[4])||0,p=f*86400+b*3600+r*60+i,m=Math.floor(p/86400);if(m>0)return`${m}d`;let g=Math.floor(p/3600);if(g>0)return`${g}h`;let h=Math.floor(p/60);return h>0?`${h}m`:`${Math.floor(p)}s`}function c(s){let d=s.status==="online",f=d?"service-widget-online":"service-widget-offline",b=d?"bx-check-circle":"bx-x-circle",r=d?"OK":"BAD",i=s.version?a(s.version.str):"-",p=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",m=s.memory&&s.memory!=="N/A"?s.memory:"-",g=p!=="-"?"#00ff00":"#666",h=p!=="-"?"#fff":"#666",x=m!=="-"?"#00ff00":"#666",w=m!=="-"?"#fff":"#666",M=u(s.uptime),k="";return d?k=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${i}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${M}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${g};"></i>
                        <span style="color: ${h};">${p}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${x};"></i>
                        <span style="color: ${w};">${m}</span>
                    </div>
                </div>`:k='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${f}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${b}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${r}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${o(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${k}</div></div>`}let v=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),y=new Set(n.map(s=>s.id));for(let[s,d]of v)y.has(s)||d.remove();n.forEach(s=>{let d=c(s),f=v.get(s.id);f?f.outerHTML!==d&&(f.outerHTML=d):e.insertAdjacentHTML("beforeend",d)})}async function ve(){let e=document.getElementById("models-widgets");if(!e)return;let t=await De();if(!t){e.innerHTML=$("offline","Failed to load model status.");return}te=Date.now(),E(4,te);let n=t.models||[],l=t.whisper;Array.from(e.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function a(c){let v=c.status==="Ready";return`
                <div class="service-widget ${v?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${v?"READY":"NOT FOUND"}</span>
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
                </div>`}function o(c){let v=c.status==="Downloaded",y=v?"service-widget-online":"service-widget-offline",s=v?"OK":"MISSING",d=v&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",f=c.name;return c.type==="custom"&&f.endsWith(":latest")&&(f=f.replace(":latest","")),`<div class="service-widget ${y}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${v?"bx-check-circle":"bx-x-circle"}"></i><h3>${f}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${d}</span></div></div></div>`}let u="";if(l&&(u+=a(l)),u+=n.map(o).join(""),!u){e.innerHTML=$("empty","No models found.");return}e.innerHTML!==u&&(e.innerHTML=u)}async function fe(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await qe();if(t===null){e.innerHTML=$("offline","Failed to load process status.");return}if(se=Date.now(),E(2,se),t.length===0){e.innerHTML=$("empty","No active processes."),B(2,0);return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(o){let u=Math.floor(Date.now()/1e3-o.start_time),c=o.retries>0?`<span class="process-retry-badge">Retry ${o.retries}</span>`:"";return`
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
                            <span class="info-value">${u}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${o.pid}</span>
                        </div>
                    </div>
                </div>`}let l=new Map(Array.from(e.querySelectorAll(".process-widget")).map(o=>[o.dataset.channelId,o])),a=new Set(t.map(o=>o.channel_id));for(let[o,u]of l)a.has(o)||u.remove();t.forEach(o=>{let u=n(o),c=l.get(o.channel_id);c?c.outerHTML!==u&&(c.outerHTML=u):e.insertAdjacentHTML("beforeend",u)}),B(2,t.length)}function W(){let e=le(),t=V()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},l=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(I).map(a=>`
                    <div class="theme-card ${e===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===I.AUTO?"Automatic theme selection.":a===I.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
            </div>`}function G(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(c=>{c.addEventListener("click",function(){let v=this.dataset.theme;Le(v),e.setContent(W()),G(e)})});function n(c,v,y,s,d,f,b){let r=document.getElementById(c),i=document.getElementById(v),p=document.getElementById(y),m=document.getElementById(s),g=document.getElementById(d);r&&i&&(r.onclick=()=>i.click(),i.onchange=h=>{let x=h.target.files[0];if(!x)return;if(x.name!==b){m.textContent=`File must be named "${b}"`,m.style.display="block",i.value="";return}let w=new FileReader;w.onload=M=>{try{let k=JSON.parse(M.target.result);localStorage.setItem(f,JSON.stringify(k)),p.textContent=b,m.style.display="none",e.setContent(W()),G(e)}catch{m.textContent="Invalid JSON format",m.style.display="block",i.value=""}},w.onerror=()=>{m.textContent="Failed to read file",m.style.display="block",i.value=""},w.readAsText(x)}),g&&(g.onclick=()=>{localStorage.removeItem(f),e.setContent(W()),G(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let l=document.getElementById("notifications-toggle");if(l){let c="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!c||c.state==="denied")&&(l.disabled=!0),l.onclick=async v=>{if(v.target.checked)try{await Notification.requestPermission()!=="granted"&&(v.target.checked=!1)}catch{v.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),v.target.checked=!0)}}let a=document.getElementById("microphone-toggle");async function o(){let c="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;a&&(a.disabled=!c||c.state==="denied",a.checked=c?.state==="granted");let v=document.querySelector("#microphone-setting-item .settings-item-description");v&&(v.textContent=c?c.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}o(),a&&!a.disabled&&(a.onclick=async c=>{if(c.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),o()}catch{c.target.checked=!1,o()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),c.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=c=>{let v=c.target.checked;localStorage.setItem("easter_analytics_enabled",v),window.EASTER_ANALYTICS_ENABLED=v,window.EASTER_DEBUG_MODE=v})}function He(){console.log("Welcome to Easter Company."),Te(),he();let e=xe();ye(e),we();let t=document.querySelector("footer"),n=null;function l(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function a(s,d=null){let f=n&&n.id===s.id;n&&n.close(!f),f?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(b=>{let r=b===d;b.classList.toggle("active",r),b.classList.toggle("inactive",!r&&d)}),t?.classList.add("hide")},n?220:0)}async function o(){await Promise.all([ue(),ve(),pe(),fe(),U(),me(),de()]);let s=setInterval(()=>{if(!y.isOpen())return clearInterval(s);E(4,ce),E(3,K),E(5,te),E(6,ee),E(2,se),E(1,Z),E(0,Q)},1e3),d=setInterval(()=>{if(!y.isOpen())return clearInterval(d);pe(),fe(),U(),me(),de()},3e3),f=setInterval(()=>{if(!y.isOpen())return clearInterval(f);ue(),ve()},6e4)}let u=J({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:l}),c=J({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${V()||"Unknown"}</p>`,icon:"bx-user",onClose:l}),v=J({id:"settings-window",title:"Settings",content:W(),icon:"bx-cog",onClose:l,onOpen:()=>{v.setContent(W()),setTimeout(()=>G(v),50)}}),y=J({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Me(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:ke(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Ne(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Ie(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Ee(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:Ae(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Ce(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:l,onOpen:()=>setTimeout(o,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>a(c,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>a(y,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>a(v,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(u),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{$e(document.getElementById("email-input").value),window.location.reload()}catch(d){let f=document.getElementById("login-error");f&&(f.textContent=d.message,f.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",He):He();})();
//# sourceMappingURL=dex.891c7221.js.map
