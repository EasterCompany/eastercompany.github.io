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
    `,m=document.createElement("nav");m.innerHTML=n,document.body.prepend(m)}function be(){let e=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=e,document.body.appendChild(t)}function F(e){let t=null,n=e.onClose||null,m=e.onOpen||null;function r(){if(t){t.classList.add("open"),window.addEventListener("resize",i),m&&setTimeout(m,10);return}let s=document.getElementById("windows-container");s||(s=document.createElement("div"),s.id="windows-container",s.className="windows-container",document.body.appendChild(s)),t=document.createElement("div"),t.id=e.id,t.className="window";let d=e.icon||"bx-window",u="",b="",o;e.tabs&&e.tabs.length>0?(u=`<div class="tab-bar">${e.tabs.map((h,$)=>{let w;return h.icon?w=`<i class="bx ${h.icon}"></i>`:h.title&&h.title.length>0?w=`<span class="tab-glyph">${h.title.charAt(0).toUpperCase()}</span>`:w='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${$===0?"active":""}" data-tab-index="${$}">
                        ${w}
                        <span class="tab-title">${h.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${$}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,o=`<div class="window-content">${e.tabs.map((h,$)=>`<div class="tab-content ${$===0?"active":""}" data-tab-content="${$}">${h.content}</div>`).join("")}</div>`):(e.title&&(b=`<div class="window-title">${e.title}</div>`),o=`<div class="window-content">${e.content}</div>`);let a=`
            <div class="window-header">
                <i class="bx ${d}"></i>
                ${u}
                ${b}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=a+o,s.appendChild(t);let c=t.querySelector(".window-close");c&&c.addEventListener("click",p=>{p.stopPropagation(),l()}),window.addEventListener("resize",i),e.tabs&&e.tabs.length>0&&t.querySelectorAll(".tab").forEach(f=>{f.addEventListener("click",()=>{let h=f.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach($=>$.classList.remove("active")),f.classList.add("active"),t.querySelectorAll(".tab-content").forEach($=>$.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${h}"]`).classList.add("active"),g(f,t)})}),setTimeout(()=>{t.classList.add("open"),m&&m()},10)}function i(){if(!t||!t.classList.contains("open"))return;let s=t.querySelector(".tab.active");s&&g(s,t)}function g(s,d){setTimeout(()=>{let u=d.querySelector(".tab-bar");if(u){let b=Array.from(u.querySelectorAll(".tab")),o=b.indexOf(s),a=u.clientWidth,c=b[Math.max(0,o-2)],p=b[Math.min(b.length-1,o+2)],f=c.offsetLeft-u.offsetLeft-25,$=p.offsetLeft+p.offsetWidth-u.offsetLeft+25-f,w;$<=a?w=f-(a-$)/2:w=s.offsetLeft-u.offsetLeft-a/2+s.offsetWidth/2,u.scrollTo({left:w,behavior:"smooth"})}},350)}function l(s=!1){t&&(window.removeEventListener("resize",i),s?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),n&&n(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function v(s){if(t){let d=t.querySelector(".window-content");d&&(d.innerHTML=s)}}function y(){return t&&t.classList.contains("open")}return{open:r,close:l,setContent:v,isOpen:y,id:e.id}}var se="easter_user_email";function he(){return localStorage.getItem(se)!==null}function J(){return localStorage.getItem(se)}function ye(e){if(!e||!e.includes("@"))throw new Error("Invalid email address");if(!e.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(se,e.trim())}var we="easter_theme",_={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ie(){return localStorage.getItem(we)||_.AUTO}function Ae(){let e=window.innerWidth,t=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return e>1920&&t>1080?_.ANIMATED:(e===1920&&t===1080&&n||e<=1920||t<=1080,_.DEFAULT)}function xe(e){if(!Object.values(_).includes(e))throw new Error("Invalid theme");localStorage.setItem(we,e),ne(e)}function ne(e,t=!1){let n=document.body,m=e===_.AUTO?Ae():e;if(t||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(_).forEach(r=>{n.classList.remove(`theme-${r}`)}),n.classList.add(`theme-${e}`),m===_.ANIMATED){if(!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}}else{let r=document.querySelector(".background");r&&(t?r.remove():(r.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{r.remove()},400)))}}function $e(){let e=ie();if(ne(e,!0),e===_.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{ne(_.AUTO)},300)})}}function O(e,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",i=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${r} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${i}
        </div>
    `}function Se(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ae=null;async function oe(){let e=document.getElementById("logs-container");if(!e)return!1;e.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return e.classList.add("placeholder-active"),e.innerHTML=O("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(t)}catch(g){return console.error("Error parsing service_map from localStorage:",g),e.classList.add("placeholder-active"),e.innerHTML=O("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let m=null;if(n&&typeof n.services=="object"){let g=["cs","be","th"];for(let l of g)if(Array.isArray(n.services[l])){let v=n.services[l].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(v){m=v;break}}}if(!m)return e.classList.add("placeholder-active"),e.innerHTML=O("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let i=`http://${m.domain==="0.0.0.0"?"localhost":m.domain}:${m.port}/logs`;try{let g=await fetch(i);if(!g.ok)return e.classList.add("placeholder-active"),e.innerHTML=O("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await g.json();if(!l||l.length===0)return e.classList.add("placeholder-active"),e.innerHTML=O("empty","No logs found.","Service logs will appear here when available."),!1;let v=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=l.filter(d=>!v.includes(d.id));y.forEach(d=>{d.logs&&Array.isArray(d.logs)?d.logs.reverse():d.logs=[]}),y.reverse();let s=y.map(d=>{let u=d.logs.join(`
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
            `}).join("");return e.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(d=>{d.addEventListener("click",()=>{let u=unescape(d.dataset.logs);navigator.clipboard.writeText(u).then(()=>{let b=d.querySelector("i");b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3)})})}),ae=Date.now(),!0}catch(g){return console.error("Error fetching logs:",g),e.classList.add("placeholder-active"),e.innerHTML=O("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function x(e,t,n=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[e]||"bx-info-circle",i=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${t}</p>${i}</div>`}function A(e){return e&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function S(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"] .tab-subtitle`);if(!n)return;if(!t){n.textContent="Last updated: never";return}let r=(Date.now()-t)/1e3,i;if(r<30)i=`${Math.floor(r)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${i}`}function B(e,t){let n=document.querySelector(`.tab[data-tab-index="${e}"]`);if(!n)return;let m=n.querySelector(".notification-badge");m&&(t>0?(m.textContent=t>9?"9+":t,m.style.display="flex"):m.style.display="none")}function G(){let e=document.getElementById("notifications-list");if(!e)return;let t=e.querySelectorAll(".notification-unread").length;B(0,t)}var De={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Te(e,t){let n=De[e];if(e==="voice_transcribed"&&!t.user_name&&t.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),e==="system.notification.generated"&&(n=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!n)return e;let m=n.replace(/\{(\w+)\}/g,(r,i)=>t[i]!==void 0&&t[i]!==null?t[i]:r);return(e==="messaging.user.transcribed"||e==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(m+=` (Translation: ${t.english_translation})`),m}var Le=()=>'<div id="events-timeline" class="events-timeline"><p>Loading events...</p></div>',V=null;async function re(){let e=document.getElementById("events-timeline");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=x("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(g=>g.id==="dex-event-service")}catch{e.innerHTML=x("error","Invalid service map data.");return}if(!n){e.innerHTML=x("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let i=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(o=>o.dataset.eventId).filter(o=>o)),g=await fetch(r);if(!g.ok)throw new Error("Service is offline or unreachable.");let v=(await g.json()).events||[];if(v.length===0){e.innerHTML=x("empty","No events found.");return}let y=o=>{let a=o.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let c=a.type,p=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command",f="event-border-grey";p&&(c==="moderation.explicit_content.deleted"?f="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"?f="event-border-purple":c==="system.cli.command"?f="event-border-orange":f="event-border-blue");let h=p?"cursor-pointer":"",$=i.has(o.id),w=$?"expanded":"",k=$?"display: block;":"display: none;",E=new Date(o.timestamp*1e3),I=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),D=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),H=Te(c,a),C="";if(p){let T="";if(c==="engagement.decision")T=`
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
                        `;else if(c==="messaging.bot.sent_message")T=`
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
                        `;else if(c==="moderation.explicit_content.deleted")T=`
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
                                <pre class="detail-pre">${A(a.raw_output)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.link.completed")T=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${A(a.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${A(a.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${A(a.summary)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.visual.completed"){let L="";a.base64_preview?L=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(L=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${a.filename}</span>
                            </div>
                            ${L}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${A(a.description)||"None"}</pre>
                            </div>
                        `}else if(c==="system.cli.command")T=`
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
                                <pre class="detail-pre">${A(a.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(c==="messaging.user.sent_message"){let L="";a.attachments&&a.attachments.length>0&&(L=`
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
                                </div>`),T=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${a.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${a.content||"(empty)"}</pre>
                            </div>
                            ${L}
                         `}C=`
                        <div class="event-details" style="${k}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${T}
                        </div>
                    `}let N=document.createElement("div");if(N.className=`event-item ${f} ${h} ${w}`,N.dataset.eventId=o.id,N.onclick=function(T){if(!p)return;this.classList.toggle("expanded");let L=this.querySelector(".event-details");L&&(L.style.display=L.style.display==="none"?"block":"none")},N.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${I}</span>
                        <span class="event-date">${D}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${o.service}</div>
                        <div class="event-message">${H}</div>
                        ${C}
                    </div>
                `,p){let T=N.querySelector(".close-details-btn");T&&T.addEventListener("click",L=>{L.stopPropagation();let U=L.target.closest(".event-item");if(U){U.classList.remove("expanded");let M=U.querySelector(".event-details");M&&(M.style.display="none")}})}return N},s=Array.from(e.children),d=new Map(s.map(o=>[o.dataset.eventId,o])),u=new Set(v.map(o=>o.id));s.forEach(o=>{(!o.dataset.eventId||!u.has(o.dataset.eventId))&&o.remove()});let b=null;v.forEach((o,a)=>{let c=d.get(o.id);!c&&(c=y(o),!c)||(a===0?e.firstElementChild!==c&&e.prepend(c):b&&b.nextElementSibling!==c&&b.after(c),b=c)}),V=Date.now(),S(2,V)}catch(i){console.error("Error fetching events:",i),e.children.length===0&&(e.innerHTML=x("offline","Failed to load events.","The event service may be offline or unreachable."))}}var Ee=()=>'<div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading notifications...</p></div>',Y=null;async function le(){let e=document.getElementById("notifications-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=x("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(g=>g.id==="dex-event-service")}catch{e.innerHTML=x("error","Invalid service map data.");return}if(!n){e.innerHTML=x("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let i=await fetch(r);if(!i.ok)throw new Error("Service is offline or unreachable.");let l=(await i.json()).events||[],v=Date.now(),y=24*60*60*1e3,s=l.filter(p=>{let f=localStorage.getItem(`notification_read_ts_${p.id}`);if(!f)return!0;let h=parseInt(f);return v-h<y});if(s.length===0){e.innerHTML=x("empty","No notifications yet."),G();return}let d=p=>{let f=p.event;if(typeof f=="string")try{f=JSON.parse(f)}catch{return null}let h=f.title||"Untitled Notification",$=f.body||"No description provided.",w=f.priority||"low",k=f.category||"system",E=f.related_event_ids||[],D=!!localStorage.getItem(`notification_read_ts_${p.id}`),H=new Date(p.timestamp*1e3),C=H.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),N=H.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),T=D?"event-border-grey":"event-border-blue";D&&(w==="high"||w==="critical")?T="event-border-red":D&&w==="medium"&&(T="event-border-orange");let L=D?"notification-read":"notification-unread",U=u.has(p.id),M=U?"expanded":"",ee=U?"display: block;":"display: none;",z="";E.length>0&&(z=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${E.map(W=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${W.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let j=document.createElement("div");j.className=`event-item notification-item ${T} ${L} ${M} cursor-pointer`,j.dataset.notificationId=p.id,j.onclick=function(W){this.classList.toggle("expanded");let q=this.querySelector(".event-details");if(q){let ve=q.style.display==="none";if(q.style.display=ve?"block":"none",ve){if(u.add(p.id),!localStorage.getItem(`notification_read_ts_${p.id}`)){localStorage.setItem(`notification_read_ts_${p.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue");let te="event-border-grey";w==="high"||w==="critical"?te="event-border-red":w==="medium"&&(te="event-border-orange"),this.classList.add(te),G()}}else u.delete(p.id)}},j.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${C}</span>
                    <span class="event-date">${N}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${k.toUpperCase()}</div>
                    <div class="event-message">${h}</div>
                    <div class="event-details" style="${ee}">
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
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${A($)}</p>
                        </div>
                        ${z}
                    </div>
                </div>
            `;let ue=j.querySelector(".close-details-btn");return ue&&ue.addEventListener("click",W=>{W.stopPropagation(),j.classList.remove("expanded");let q=j.querySelector(".event-details");q&&(q.style.display="none"),u.delete(p.id)}),j},u=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(p=>p.dataset.notificationId).filter(p=>p)),b=Array.from(e.children),o=new Map(b.map(p=>[p.dataset.notificationId,p])),a=new Set(s.map(p=>p.id));b.forEach(p=>{(!p.dataset.notificationId||!a.has(p.dataset.notificationId))&&p.remove()});let c=null;s.forEach((p,f)=>{let h=o.get(p.id);!h&&(h=d(p),!h)||(f===0?e.firstElementChild!==h&&e.prepend(h):c&&c.nextElementSibling!==h&&c.after(h),c=h)}),Y=Date.now(),S(0,Y),G()}catch(i){console.error("Error fetching notifications:",i),e.children.length===0&&(e.innerHTML=x("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}var _e=()=>'<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>',K=null;async function ce(){let e=document.getElementById("blueprints-list");if(!e)return;let t=localStorage.getItem("service_map");if(!t){e.innerHTML=x("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(t).services?.cs||[]).find(g=>g.id==="dex-event-service")}catch{e.innerHTML=x("error","Invalid service map data.");return}if(!n){e.innerHTML=x("error","Event service not found in service map.");return}let r=`http://${n.domain==="0.0.0.0"?"localhost":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let i=await fetch(r);if(!i.ok)throw new Error("Service is offline or unreachable.");let l=(await i.json()).events||[];if(l.length===0){e.innerHTML=x("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),B(1,0);return}let v=o=>{let a=o.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let c=a.title||"Untitled Blueprint",p=a.body||"No details provided.",f=a.category||"architecture",h=new Date(o.timestamp*1e3),$=h.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),w=h.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),k=y.has(o.id),E=k?"display: block;":"display: none;",I=document.createElement("div");I.className=`event-item notification-item event-border-purple cursor-pointer ${k?"expanded":""}`,I.dataset.blueprintId=o.id,I.onclick=function(H){this.classList.toggle("expanded");let C=this.querySelector(".event-details");if(C){let N=C.style.display==="none";C.style.display=N?"block":"none",N?y.add(o.id):y.delete(o.id)}},I.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${$}</span>
                    <span class="event-date">${w}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${f.toUpperCase()}</div>
                    <div class="event-message">${c}</div>
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-block" style="text-align: left;">
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left;">${A(p)}</p>
                        </div>
                    </div>
                </div>
            `;let D=I.querySelector(".close-details-btn");return D&&D.addEventListener("click",H=>{H.stopPropagation(),I.classList.remove("expanded");let C=I.querySelector(".event-details");C&&(C.style.display="none"),y.delete(o.id)}),I},y=new Set(Array.from(e.querySelectorAll(".event-item.expanded")).map(o=>o.dataset.blueprintId).filter(o=>o)),s=Array.from(e.children),d=new Map(s.map(o=>[o.dataset.blueprintId,o])),u=new Set(l.map(o=>o.id));s.forEach(o=>{o.dataset.blueprintId&&!u.has(o.dataset.blueprintId)&&o.remove()});let b=null;l.forEach((o,a)=>{let c=d.get(o.id);!c&&(c=v(o),!c)||(a===0?e.firstElementChild!==c&&e.prepend(c):b&&b.nextElementSibling!==c&&b.after(c),b=c)}),K=Date.now(),S(1,K),B(1,l.length)}catch(i){console.error("Error fetching blueprints:",i),e.children.length===0&&(e.innerHTML=x("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}var Me=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':x("config","No service map configured.","Upload service-map.json in Settings."),ke=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':x("config","No service map configured.","Upload service-map.json in Settings."),Ie=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':x("config","No service map configured.","Upload service-map.json in Settings."),X=null,Q=null,Z=null;async function Ce(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(i=>i.id==="dex-event-service");if(!t)return null;let m=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/system_monitor`,r=await fetch(m);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(e){return console.error("Error fetching system data:",e),null}}async function He(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(i=>i.id==="dex-event-service");if(!t)return null;let m=`http://${t.domain==="0.0.0.0"?"localhost":t.domain}:${t.port}/processes`,r=await fetch(m);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(e){return console.error("Error fetching process data:",e),null}}async function de(){let e=document.getElementById("services-widgets");if(!e)return;let t=await Ce();if(!t||!t.services){e.innerHTML=x("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}X=Date.now(),S(5,X);let n=t.services||[];Array.from(e.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function m(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function r(s){if(!s||s==="N/A"||s==="unknown")return"-";let d=s.match(/^(\d+\.\d+\.\d+)/);return d?d[0]:s.split(".").slice(0,3).join(".")||"-"}function i(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function g(s){if(!s||s==="N/A"||s==="unknown")return"-";let d=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!d)return"-";let u=parseInt(d[1])||0,b=parseInt(d[2])||0,o=parseInt(d[3])||0,a=parseFloat(d[4])||0,c=u*86400+b*3600+o*60+a,p=Math.floor(c/86400);if(p>0)return`${p}d`;let f=Math.floor(c/3600);if(f>0)return`${f}h`;let h=Math.floor(c/60);return h>0?`${h}m`:`${Math.floor(c)}s`}function l(s){let d=s.status==="online",u=d?"service-widget-online":"service-widget-offline",b=d?"bx-check-circle":"bx-x-circle",o=d?"OK":"BAD",a=s.version?r(s.version.str):"-",c=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",p=s.memory&&s.memory!=="N/A"?s.memory:"-",f=c!=="-"?"#00ff00":"#666",h=c!=="-"?"#fff":"#666",$=p!=="-"?"#00ff00":"#666",w=p!=="-"?"#fff":"#666",k=g(s.uptime),E="";return d?E=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${a}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${k}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${f};"></i>
                        <span style="color: ${h};">${c}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${$};"></i>
                        <span style="color: ${w};">${p}</span>
                    </div>
                </div>`:E='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${u}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${b}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${o}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${i(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${E}</div></div>`}let v=new Map(Array.from(e.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),y=new Set(n.map(s=>s.id));for(let[s,d]of v)y.has(s)||d.remove();n.forEach(s=>{let d=l(s),u=v.get(s.id);u?u.outerHTML!==d&&(u.outerHTML=d):e.insertAdjacentHTML("beforeend",d)})}async function pe(){let e=document.getElementById("models-widgets");if(!e)return;let t=await Ce();if(!t){e.innerHTML=x("offline","Failed to load model status.");return}Q=Date.now(),S(4,Q);let n=t.models||[],m=t.whisper;Array.from(e.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function r(l){let v=l.status==="Ready";return`
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
                </div>`}function i(l){let v=l.status==="Downloaded",y=v?"service-widget-online":"service-widget-offline",s=v?"OK":"MISSING",d=v&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",u=l.name;return l.type==="custom"&&u.endsWith(":latest")&&(u=u.replace(":latest","")),`<div class="service-widget ${y}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${v?"bx-check-circle":"bx-x-circle"}"></i><h3>${u}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${d}</span></div></div></div>`}let g="";if(m&&(g+=r(m)),g+=n.map(i).join(""),!g){e.innerHTML=x("empty","No models found.");return}e.innerHTML!==g&&(e.innerHTML=g)}async function me(){let e=document.getElementById("processes-widgets");if(!e)return;let t=await He();if(t===null){e.innerHTML=x("offline","Failed to load process status.");return}if(Z=Date.now(),S(2,Z),t.length===0){e.innerHTML=x("empty","No active processes."),B(2,0);return}(e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML="");function n(i){let g=Math.floor(Date.now()/1e3-i.start_time),l=i.retries>0?`<span class="process-retry-badge">Retry ${i.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${i.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${i.channel_id}</h3>
                        ${l}
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
                </div>`}let m=new Map(Array.from(e.querySelectorAll(".process-widget")).map(i=>[i.dataset.channelId,i])),r=new Set(t.map(i=>i.channel_id));for(let[i,g]of m)r.has(i)||g.remove();t.forEach(i=>{let g=n(i),l=m.get(i.channel_id);l?l.outerHTML!==g&&(l.outerHTML=g):e.insertAdjacentHTML("beforeend",g)}),B(2,t.length)}function P(){let e=ie(),t=J()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},m=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(_).map(r=>`
                    <div class="theme-card ${e===r?"active":""}" data-theme="${r}">
                        <div class="theme-preview theme-preview-${r.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${r}</h3>
                            <p>${r===_.AUTO?"Automatic theme selection.":r===_.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
            </div>`}function R(e){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let v=this.dataset.theme;xe(v),e.setContent(P()),R(e)})});function n(l,v,y,s,d,u,b){let o=document.getElementById(l),a=document.getElementById(v),c=document.getElementById(y),p=document.getElementById(s),f=document.getElementById(d);o&&a&&(o.onclick=()=>a.click(),a.onchange=h=>{let $=h.target.files[0];if(!$)return;if($.name!==b){p.textContent=`File must be named "${b}"`,p.style.display="block",a.value="";return}let w=new FileReader;w.onload=k=>{try{let E=JSON.parse(k.target.result);localStorage.setItem(u,JSON.stringify(E)),c.textContent=b,p.style.display="none",e.setContent(P()),R(e)}catch{p.textContent="Invalid JSON format",p.style.display="block",a.value=""}},w.onerror=()=>{p.textContent="Failed to read file",p.style.display="block",a.value=""},w.readAsText($)}),f&&(f.onclick=()=>{localStorage.removeItem(u),e.setContent(P()),R(e)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let m=document.getElementById("notifications-toggle");if(m){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(m.disabled=!0),m.onclick=async v=>{if(v.target.checked)try{await Notification.requestPermission()!=="granted"&&(v.target.checked=!1)}catch{v.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),v.target.checked=!0)}}let r=document.getElementById("microphone-toggle");async function i(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;r&&(r.disabled=!l||l.state==="denied",r.checked=l?.state==="granted");let v=document.querySelector("#microphone-setting-item .settings-item-description");v&&(v.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}i(),r&&!r.disabled&&(r.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),i()}catch{l.target.checked=!1,i()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let g=document.getElementById("analytics-toggle");g&&(g.checked=localStorage.getItem("easter_analytics_enabled")!=="false",g.onclick=l=>{let v=l.target.checked;localStorage.setItem("easter_analytics_enabled",v),window.EASTER_ANALYTICS_ENABLED=v,window.EASTER_DEBUG_MODE=v})}function Ne(){console.log("Welcome to Easter Company."),$e(),ge();let e=he();fe(e),be();let t=document.querySelector("footer"),n=null;function m(){n=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function r(s,d=null){let u=n&&n.id===s.id;n&&n.close(!u),u?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(b=>{let o=b===d;b.classList.toggle("active",o),b.classList.toggle("inactive",!o&&d)}),t?.classList.add("hide")},n?220:0)}async function i(){await Promise.all([de(),pe(),re(),me(),le(),ce(),oe()]);let s=setInterval(()=>{if(!y.isOpen())return clearInterval(s);S(4,ae),S(3,V),S(5,Q),S(6,X),S(2,Z),S(1,K),S(0,Y)},1e3),d=setInterval(()=>{if(!y.isOpen())return clearInterval(d);re(),me(),le(),ce(),oe()},3e3),u=setInterval(()=>{if(!y.isOpen())return clearInterval(u);de(),pe()},6e4)}let g=F({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:m}),l=F({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${J()||"Unknown"}</p>`,icon:"bx-user",onClose:m}),v=F({id:"settings-window",title:"Settings",content:P(),icon:"bx-cog",onClose:m,onOpen:()=>{v.setContent(P()),setTimeout(()=>R(v),50)}}),y=F({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ee(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:_e(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Ie(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Le(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Se(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:ke(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Me(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:m,onOpen:()=>setTimeout(i,100)});e?(document.getElementById("user-icon")?.addEventListener("click",s=>r(l,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>r(y,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>r(v,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{r(g),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{ye(document.getElementById("email-input").value),window.location.reload()}catch(d){let u=document.getElementById("login-error");u&&(u.textContent=d.message,u.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ne):Ne();})();
//# sourceMappingURL=dex.0d742ddb.js.map
