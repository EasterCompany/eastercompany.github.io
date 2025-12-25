(()=>{function Ee(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Le(t=!1){let n=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${t?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,a=document.createElement("nav");a.innerHTML=n,document.body.prepend(a)}function Te(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function te(t){let e=null,n=t.onClose||null,a=t.onOpen||null;function l(){if(e){e.classList.add("open"),window.addEventListener("resize",c),a&&setTimeout(a,10);return}let s=document.getElementById("windows-container");s||(s=document.createElement("div"),s.id="windows-container",s.className="windows-container",document.body.appendChild(s)),e=document.createElement("div"),e.id=t.id,e.className="window";let r=t.icon||"bx-window",u="",p="",v;t.tabs&&t.tabs.length>0?(u=`<div class="tab-bar">${t.tabs.map((x,y)=>{let w;return x.icon?w=`<i class="bx ${x.icon}"></i>`:x.title&&x.title.length>0?w=`<span class="tab-glyph">${x.title.charAt(0).toUpperCase()}</span>`:w='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${y===0?"active":""}" data-tab-index="${y}">
                        ${w}
                        <span class="tab-title">${x.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${y}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,v=`<div class="window-content">${t.tabs.map((x,y)=>`<div class="tab-content ${y===0?"active":""}" data-tab-content="${y}">${x.content}</div>`).join("")}</div>`):(t.title&&(p=`<div class="window-title">${t.title}</div>`),v=`<div class="window-content">${t.content}</div>`);let i=`
            <div class="window-header">
                <i class="bx ${r}"></i>
                ${u}
                ${p}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=i+v,s.appendChild(e);let m=e.querySelector(".window-close");m&&m.addEventListener("click",h=>{h.stopPropagation(),o()}),window.addEventListener("resize",c),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(g=>{g.addEventListener("click",()=>{let x=g.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(y=>y.classList.remove("active")),g.classList.add("active"),e.querySelectorAll(".tab-content").forEach(y=>y.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${x}"]`).classList.add("active"),f(g,e)})}),setTimeout(()=>{e.classList.add("open"),a&&a()},10)}function c(){if(!e||!e.classList.contains("open"))return;let s=e.querySelector(".tab.active");s&&f(s,e)}function f(s,r){setTimeout(()=>{let u=r.querySelector(".tab-bar");if(u){let p=Array.from(u.querySelectorAll(".tab")),v=p.indexOf(s),i=u.clientWidth,m=p[Math.max(0,v-2)],h=p[Math.min(p.length-1,v+2)],g=m.offsetLeft-u.offsetLeft-25,y=h.offsetLeft+h.offsetWidth-u.offsetLeft+25-g,w;y<=i?w=g-(i-y)/2:w=s.offsetLeft-u.offsetLeft-i/2+s.offsetWidth/2,u.scrollTo({left:w,behavior:"smooth"})}},350)}function o(s=!1){e&&(window.removeEventListener("resize",c),s?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),n&&n(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function d(s){if(e){let r=e.querySelector(".window-content");r&&(r.innerHTML=s)}}function b(){return e&&e.classList.contains("open")}return{open:l,close:o,setContent:d,isOpen:b,id:t.id}}var ue="easter_user_email";function _e(){return localStorage.getItem(ue)!==null}function ie(){return localStorage.getItem(ue)}function Ie(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ue,t.trim())}var Me="easter_theme",C={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function fe(){return localStorage.getItem(Me)||C.AUTO}function Ge(){let t=window.innerWidth,e=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?C.ANIMATED:(t===1920&&e===1080&&n||t<=1920||e<=1080,C.DEFAULT)}function ke(t){if(!Object.values(C).includes(t))throw new Error("Invalid theme");localStorage.setItem(Me,t),ve(t)}function ve(t,e=!1){let n=document.body,a=t===C.AUTO?Ge():t;if(e||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(C).forEach(l=>{n.classList.remove(`theme-${l}`)}),n.classList.add(`theme-${t}`),a===C.ANIMATED){if(!document.querySelector(".background")){let l=document.createElement("div");l.className="background",document.body.prepend(l)}}else{let l=document.querySelector(".background");l&&(e?l.remove():(l.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{l.remove()},400)))}}function Ae(){let t=fe();if(ve(t,!0),t===C.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{ve(C.AUTO)},300)})}}function W(t,e,n=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${l} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${c}
        </div>
    `}function Ce(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ge=null;async function be(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=W("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(e)}catch(f){return console.error("Error parsing service_map from localStorage:",f),t.classList.add("placeholder-active"),t.innerHTML=W("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let a=null;if(n&&typeof n.services=="object"){let f=["cs","be","th"];for(let o of f)if(Array.isArray(n.services[o])){let d=n.services[o].find(b=>b.short_name==="event"||b.id==="event"||b.id==="dex-event-service");if(d){a=d;break}}}if(!a)return t.classList.add("placeholder-active"),t.innerHTML=W("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let c=`http://${a.domain==="0.0.0.0"?"127.0.0.1":a.domain}:${a.port}/logs`;try{let f=await fetch(c);if(!f.ok)return t.classList.add("placeholder-active"),t.innerHTML=W("offline","Event service is offline.","Please ensure the event service is running."),!1;let o=await f.json();if(!o||o.length===0)return t.classList.add("placeholder-active"),t.innerHTML=W("empty","No logs found.","Service logs will appear here when available."),!1;let d=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],b=o.filter(r=>!d.includes(r.id));b.forEach(r=>{r.logs&&Array.isArray(r.logs)?r.logs.reverse():r.logs=[]}),b.reverse();let s=b.map(r=>{let u=r.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${r.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(u)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${u}</pre>
                </div>
            `}).join("");return t.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(r=>{r.addEventListener("click",()=>{let u=unescape(r.dataset.logs);navigator.clipboard.writeText(u).then(()=>{let p=r.querySelector("i");p.classList.remove("bx-copy"),p.classList.add("bx-check"),setTimeout(()=>{p.classList.remove("bx-check"),p.classList.add("bx-copy")},2e3)})})}),ge=Date.now(),!0}catch(f){return console.error("Error fetching logs:",f),t.classList.add("placeholder-active"),t.innerHTML=W("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $(t,e,n=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${l} placeholder-icon'></i><p class="placeholder-message">${e}</p>${c}</div>`}function k(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function L(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!n)return;if(!e){n.textContent="Last updated: never";return}let a=Date.now(),l=Math.floor((a-e)/1e3),c;l<60?c=`${l}s ago`:l<3600?c=`${Math.floor(l/60)}m ago`:c=`${Math.floor(l/3600)}h ago`,n.textContent=`Last updated: ${c}`}function j(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!n)return;let a=n.querySelector(".notification-badge");a&&(e>0?(a.textContent=e>9?"9+":e,a.style.display="flex"):a.style.display="none")}function ae(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;j(0,e)}var Ye={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Ne(t,e){let n=Ye[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(n=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),!n)return t;let a=n.replace(/\{(\w+)\}/g,(l,c)=>e[c]!==void 0&&e[c]!==null?e[c]:l);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(a+=` (Translation: ${e.english_translation})`),a}var De=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,z=null,J=new Set,Be=[];async function se(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ke();let n=localStorage.getItem("service_map");if(!n){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(n).services?.cs||[]).find(o=>o.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!a){e.innerHTML=$("error","Event service not found in service map.");return}let c=`http://${a.domain==="0.0.0.0"?"127.0.0.1":a.domain}:${a.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let f=await fetch(c);if(!f.ok)throw new Error("Service is offline or unreachable.");let d=(await f.json()).events||[];if(Be=d,z=Date.now(),L(3,z),d.length===0){e.innerHTML=$("empty","No events found.");return}t&&(e.innerHTML="");let b=v=>{let i=v.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let m=i.type,h=m==="engagement.decision"||m==="messaging.bot.sent_message"||m==="messaging.user.sent_message"||m==="moderation.explicit_content.deleted"||m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="system.cli.command"||m==="system.analysis.audit",g="event-border-grey";h&&(m==="moderation.explicit_content.deleted"?g="event-border-red":m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="system.analysis.audit"?g="event-border-purple":m==="system.cli.command"?g="event-border-orange":g="event-border-blue");let x=h?"cursor-pointer":"",y=J.has(v.id),w=y?"expanded":"",S=y?"display: block;":"display: none;",E=new Date(v.timestamp*1e3),F=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),R=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),Q=Ne(m,i),N="";if(h){let I="";if(m==="engagement.decision")I=`
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
                    `;else if(m==="messaging.bot.sent_message")I=`
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
                    `;else if(m==="moderation.explicit_content.deleted")I=`
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
                            <pre class="detail-pre">${k(i.raw_output)||"None"}</pre>
                        </div>
                    `;else if(m==="analysis.link.completed")I=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${k(i.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${k(i.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${k(i.summary)||"None"}</pre>
                        </div>
                    `;else if(m==="analysis.visual.completed"){let A="";i.base64_preview?A=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(A=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),I=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${i.filename}</span>
                        </div>
                        ${A}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${k(i.description)||"None"}</pre>
                        </div>
                    `}else if(m==="system.cli.command")I=`
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
                            <pre class="detail-pre">${k(i.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(m==="system.analysis.audit")I=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${i.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${i.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${k(i.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${k(i.raw_input)}</pre>
                        </div>
                    `;else if(m==="messaging.user.sent_message"){let A="";i.attachments&&i.attachments.length>0&&(A=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${i.attachments.map(T=>{let B=T.content_type&&T.content_type.startsWith("image/"),D=(T.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${B?`<div class="attachment-thumb-container"><img src="${T.url}" alt="${T.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${T.url}" target="_blank" class="attachment-link">${T.filename}</a>
                                        <span class="attachment-meta">${T.content_type} \u2022 ${D}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),I=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${i.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${i.content||"(empty)"}</pre>
                        </div>
                        ${A}
                    `}N=`
                    <div class="event-details" style="${S}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${I}
                    </div>
                `}let _=document.createElement("div");if(_.className=`event-item ${g} ${x} ${w}`,_.dataset.eventId=v.id,_.onclick=function(I){if(!h)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(v.id);let M=this.querySelector(".event-details");M&&(M.style.display="none")}else{this.classList.add("expanded"),J.add(v.id);let M=this.querySelector(".event-details");M&&(M.style.display="block")}},_.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${F}</span>
                    <span class="event-date">${R}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${v.service}</div>
                    <div class="event-message">${Q}</div>
                    ${N}
                </div>
            `,h){let I=_.querySelector(".close-details-btn");I&&I.addEventListener("click",A=>{A.stopPropagation();let M=A.target.closest(".event-item");if(M){M.classList.remove("expanded"),J.delete(v.id);let T=M.querySelector(".event-details");T&&(T.style.display="none")}})}return _},s=Array.from(e.children),r=new Map(s.map(v=>[v.dataset.eventId,v])),u=new Set(d.map(v=>v.id));s.forEach(v=>{let i=v.dataset.eventId;(!i||!u.has(i))&&v.remove()});let p=null;d.forEach((v,i)=>{let m=r.get(v.id);(!m||t)&&(m&&m.remove(),m=b(v),!m)||(i===0?e.firstElementChild!==m&&e.prepend(m):p&&p.nextElementSibling!==m&&p.after(m),p=m)}),z=Date.now(),L(3,z)}catch(f){console.error("Error fetching events:",f),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Ke(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Be.forEach(n=>J.add(n.id)),se(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),se(!0)},e.dataset.listenerAttached="true")}var He=()=>`
    <div class="notifications-actions">
        <div id="guardian-next-run" style="font-size: 0.7em; color: #888; display: flex; align-items: center; margin-right: 10px;">
            Next T1: Loading...
        </div>
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
        <div id="architect-next-run" style="font-size: 0.7em; color: #888; display: flex; align-items: center; margin-left: 10px;">
            Next T2: Loading...
        </div>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,G=null,O=new Set,oe=[];async function q(t=!1){let e=document.getElementById("notifications-list");if(!e)return;Ve(),t&&(e.innerHTML="<p>Updating...</p>");let n=localStorage.getItem("service_map");if(!n){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(n).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!a){e.innerHTML=$("error","Event service not found in service map.");return}let l=a.domain==="0.0.0.0"?"127.0.0.1":a.domain,c=`http://${l}:${a.port}/events?ml=1000&format=json&event.type=system.notification.generated`,f=`http://${l}:${a.port}/analyst/status`;try{let o=await fetch(f);if(o.ok){let d=await o.json(),b=Math.floor(Date.now()/1e3),s=document.getElementById("guardian-next-run");if(s&&d.guardian){let u=d.guardian.next_run-b;if(u<=0)s.textContent="Next T1: Ready",s.style.color="#5eff5e";else{let p=Math.floor(u/60),v=u%60;s.textContent=`Next T1: ${p}m ${v}s`,s.style.color="#888"}}let r=document.getElementById("architect-next-run");if(r&&d.architect){let u=d.architect.next_run-b;if(u<=0)r.textContent="Next T2: Ready",r.style.color="#5eff5e";else{let p=Math.floor(u/60),v=u%60;r.textContent=`Next T2: ${p}m ${v}s`,r.style.color="#888"}}}}catch(o){console.error("Failed to fetch analyst status",o)}try{let o=await fetch(c);if(!o.ok)throw new Error("Service is offline or unreachable.");let b=(await o.json()).events||[];G=Date.now(),L(0,G);let s=Date.now(),r=24*60*60*1e3,u=b.filter(g=>{let x=localStorage.getItem(`notification_read_ts_${g.id}`);if(!x)return!0;let y=parseInt(x);return s-y<r});if(oe=u,t&&(e.innerHTML=""),u.length===0){e.innerHTML=$("empty","No notifications yet."),ae();return}let p=g=>{let x=g.event;if(typeof x=="string")try{x=JSON.parse(x)}catch{return null}let y=x.title||"Untitled Notification",w=x.body||"No description provided.",S=x.priority||"low",E=!!x.alert,F=x.category||"system",R=x.related_event_ids||[],N=!!localStorage.getItem(`notification_read_ts_${g.id}`),_=new Date(g.timestamp*1e3),I=_.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=_.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),M=N?"event-border-grey":"event-border-blue";!N&&E&&(M="event-border-red"),N&&(S==="high"||S==="critical")?M="event-border-red":N&&S==="medium"&&(M="event-border-orange");let T=N?"notification-read":"notification-unread",B=O.has(g.id),D=B?"expanded":"",Je=B?"display: block;":"display: none;",we="",$e="";R.length>0&&($e=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${R.map(Z=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Z.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),we=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${S==="high"||S==="critical"?"#ff4d4d":S==="medium"?"#ffa500":"#888"}">${S.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${k(w)}</p>
                </div>
                ${$e}
            `;let H=document.createElement("div");H.className=`event-item notification-item ${M} ${T} ${D} cursor-pointer`,H.dataset.notificationId=g.id,H.onclick=function(Z){if(this.classList.contains("expanded")){this.classList.remove("expanded"),O.delete(g.id);let ee=this.querySelector(".event-details");ee&&(ee.style.display="none")}else{this.classList.add("expanded"),O.add(g.id);let ee=this.querySelector(".event-details");if(ee&&(ee.style.display="block"),!localStorage.getItem(`notification_read_ts_${g.id}`)){localStorage.setItem(`notification_read_ts_${g.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let me="event-border-grey";S==="high"||S==="critical"?me="event-border-red":S==="medium"&&(me="event-border-orange"),this.classList.add(me),ae()}}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${I}</span>
                    <span class="event-date">${A}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${F.toUpperCase()} ${E?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${Je}">
                        <div class="event-details-header">
                            <h4>${E?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${we}
                    </div>
                </div>
            `;let Se=H.querySelector(".close-details-btn");return Se&&Se.addEventListener("click",Z=>{Z.stopPropagation(),H.classList.remove("expanded");let pe=H.querySelector(".event-details");pe&&(pe.style.display="none"),O.delete(g.id)}),H},v=Array.from(e.children),i=new Map(v.map(g=>[g.dataset.notificationId,g])),m=new Set(u.map(g=>g.id));v.forEach(g=>{let x=g.dataset.notificationId;(!x||!m.has(x))&&g.remove()});let h=null;u.forEach((g,x)=>{let y=i.get(g.id);(!y||t)&&(y&&y.remove(),y=p(g),!y)||(x===0?e.firstElementChild!==y&&e.prepend(y):h&&h.nextElementSibling!==y&&h.after(y),h=y)}),G=Date.now(),L(0,G),ae()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function Ve(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),a=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{oe.forEach(l=>{localStorage.getItem(`notification_read_ts_${l.id}`)||localStorage.setItem(`notification_read_ts_${l.id}`,Date.now().toString())}),q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{oe.forEach(l=>{O.add(l.id),localStorage.getItem(`notification_read_ts_${l.id}`)||localStorage.setItem(`notification_read_ts_${l.id}`,Date.now().toString())}),q(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{O.clear(),q(!0)},n.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{let l=Date.now()-1728e5;oe.forEach(c=>{localStorage.setItem(`notification_read_ts_${c.id}`,l.toString())}),O.clear(),q(!0)},a.dataset.listenerAttached="true")}var Ue=()=>`
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
`,le=null,Y=new Set,je=[];async function K(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Xe();let n=localStorage.getItem("service_map");if(!n){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(n).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!a){e.innerHTML=$("error","Event service not found in service map.");return}let l=a.domain==="0.0.0.0"?"127.0.0.1":a.domain,c=`http://${l}:${a.port}/events?ml=100&format=json&event.type=system.blueprint.generated`,f=`http://${l}:${a.port}/analyst/status`;try{let o=await fetch(f);if(o.ok){let d=await o.json(),b=document.getElementById("strategist-next-run");if(b&&d.strategist){let s=d.strategist.next_run,r=Math.floor(Date.now()/1e3),u=s-r;if(u<=0)b.textContent="Next T3: Ready (IDLE req)",b.style.color="#5eff5e";else{let p=Math.floor(u/60),v=u%60;b.textContent=`Next T3: ${p}m ${v}s`,b.style.color="#888"}}}}catch(o){console.error("Failed to fetch analyst status",o)}try{let o=await fetch(c);if(!o.ok)throw new Error("Service is offline or unreachable.");let b=(await o.json()).events||[];if(je=b,le=Date.now(),L(1,le),b.length===0){e.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),j(1,0);return}t&&(e.innerHTML="");let s=i=>{let m=i.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let h=m.title||"Untitled Blueprint",g=m.summary||m.body||"No summary provided.",x=m.content||"",y=m.category||"architecture",w=m.affected_services||[],S=m.implementation_path||[],E=new Date(i.timestamp*1e3),F=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),R=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),Q=Y.has(i.id),N=Q?"display: block;":"display: none;",_=document.createElement("div");_.className=`event-item notification-item event-border-purple cursor-pointer ${Q?"expanded":""}`,_.dataset.blueprintId=i.id,_.onclick=function(T){if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(i.id);let D=this.querySelector(".event-details");D&&(D.style.display="none")}else{this.classList.add("expanded"),Y.add(i.id);let D=this.querySelector(".event-details");D&&(D.style.display="block")}};let I=w.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${w.join(", ")}</div>`:"",A="";S.length>0&&(A=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${S.map(T=>`<li>${k(T)}</li>`).join("")}
                        </ul>
                    </div>
                `),_.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${F}</span>
                    <span class="event-date">${R}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${y.toUpperCase()}</div>
                    <div class="event-message">${h}</div>
                    <div class="event-details" style="${N}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${k(g)}
                        </div>
                        ${I}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${k(x)}</p>
                        </div>
                        ${A}
                    </div>
                </div>
            `;let M=_.querySelector(".close-details-btn");return M&&M.addEventListener("click",T=>{T.stopPropagation(),_.classList.remove("expanded");let B=_.querySelector(".event-details");B&&(B.style.display="none"),Y.delete(i.id)}),_},r=Array.from(e.children),u=new Map(r.map(i=>[i.dataset.blueprintId,i])),p=new Set(b.map(i=>i.id));r.forEach(i=>{let m=i.dataset.blueprintId;(!m||!p.has(m))&&i.remove()});let v=null;b.forEach((i,m)=>{let h=u.get(i.id);(!h||t)&&(h&&h.remove(),h=s(i),!h)||(m===0?e.firstElementChild!==h&&e.prepend(h):v&&v.nextElementSibling!==h&&v.after(h),v=h)}),j(1,b.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function Xe(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),n=document.getElementById("blueprints-reset-strategist");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{je.forEach(a=>Y.add(a.id)),K(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),K(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let a=localStorage.getItem("service_map");if(!a)return;let c=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!c)return;let o=`http://${c.domain==="0.0.0.0"?"127.0.0.1":c.domain}:${c.port}/analyst/reset?tier=strategist`;n.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(o,{method:"POST"}),setTimeout(()=>{n.innerHTML="<i class='bx bx-check'></i> Reset Done",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Reset Strategist"},2e3)},500),K()}catch(d){console.error("Failed to reset strategist",d),n.innerHTML="<i class='bx bx-error'></i> Failed"}},n.dataset.listenerAttached="true")}var Oe=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),qe=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),Pe=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),re=null,ce=null,de=null;async function Fe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(c=>c.id==="dex-event-service");if(!e)return null;let a=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,l=await fetch(a);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function Qe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(c=>c.id==="dex-event-service");if(!e)return null;let a=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,l=await fetch(a);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function he(){let t=document.getElementById("services-widgets");if(!t)return;let e=await Fe();if(!e||!e.services){t.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}re=Date.now(),L(5,re);let n=e.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function a(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function l(s){if(!s||s==="N/A"||s==="unknown")return"-";let r=s.match(/^(\d+\.\d+\.\d+)/);return r?r[0]:s.split(".").slice(0,3).join(".")||"-"}function c(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function f(s){if(!s||s==="N/A"||s==="unknown")return"-";let r=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!r)return"-";let u=parseInt(r[1])||0,p=parseInt(r[2])||0,v=parseInt(r[3])||0,i=parseFloat(r[4])||0,m=u*86400+p*3600+v*60+i,h=Math.floor(m/86400);if(h>0)return`${h}d`;let g=Math.floor(m/3600);if(g>0)return`${g}h`;let x=Math.floor(m/60);return x>0?`${x}m`:`${Math.floor(m)}s`}function o(s){let r=s.status==="online",u=r?"service-widget-online":"service-widget-offline",p=r?"bx-check-circle":"bx-x-circle",v=r?"OK":"BAD",i=s.version?l(s.version.str):"-",m=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",h=s.memory&&s.memory!=="N/A"?s.memory:"-",g=m!=="-"?"#00ff00":"#666",x=m!=="-"?"#fff":"#666",y=h!=="-"?"#00ff00":"#666",w=h!=="-"?"#fff":"#666",S=f(s.uptime),E="";return r?E=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${i}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${S}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${g};"></i>
                        <span style="color: ${x};">${m}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${y};"></i>
                        <span style="color: ${w};">${h}</span>
                    </div>
                </div>`:E='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${u}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${p}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${v}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${c(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${E}</div></div>`}let d=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),b=new Set(n.map(s=>s.id));for(let[s,r]of d)b.has(s)||r.remove();n.forEach(s=>{let r=o(s),u=d.get(s.id);u?u.outerHTML!==r&&(u.outerHTML=r):t.insertAdjacentHTML("beforeend",r)})}async function ye(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Fe();if(!e){t.innerHTML=$("offline","Failed to load model status.");return}ce=Date.now(),L(4,ce);let n=e.models||[],a=e.whisper;Array.from(t.children).forEach(o=>{o.classList.contains("service-widget")||o.remove()});function l(o){let d=o.status==="Ready";return`
                <div class="service-widget ${d?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${d?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${o.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function c(o){let d=o.status==="Downloaded",b=d?"service-widget-online":"service-widget-offline",s=d?"OK":"MISSING",r=d&&o.size>0?`${(o.size/1e9).toFixed(2)} GB`:"-",u=o.name;return o.type==="custom"&&u.endsWith(":latest")&&(u=u.replace(":latest","")),`<div class="service-widget ${b}" data-model-name="${o.name}"><div class="service-widget-header"><i class="bx ${d?"bx-check-circle":"bx-x-circle"}"></i><h3>${u}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${o.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${r}</span></div></div></div>`}let f="";if(a&&(f+=l(a)),f+=n.map(c).join(""),!f){t.innerHTML=$("empty","No models found.");return}t.innerHTML!==f&&(t.innerHTML=f)}async function xe(){let t=document.getElementById("processes-widgets");if(!t)return;let e=await Qe();if(e===null){t.innerHTML=$("offline","Failed to load process status.");return}if(de=Date.now(),L(2,de),e.length===0){t.innerHTML=$("empty","No active processes."),j(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function n(c){let f=Math.floor(Date.now()/1e3-c.start_time),o=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",d=c.channel_id,b={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return b[d]?d=b[d]:/^\d+$/.test(d)&&(d=`Channel ${d}`),`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>${d}</h3>
                        ${o}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${c.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${f}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${c.pid}</span>
                        </div>
                    </div>
                </div>`}let a=new Map(Array.from(t.querySelectorAll(".process-widget")).map(c=>[c.dataset.channelId,c])),l=new Set(e.map(c=>c.channel_id));for(let[c,f]of a)l.has(c)||f.remove();e.forEach(c=>{let f=n(c),o=a.get(c.channel_id);o?o.outerHTML!==f&&(o.outerHTML=f):t.insertAdjacentHTML("beforeend",f)}),j(2,e.length)}function V(){let t=fe(),e=ie()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},a=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(C).map(l=>`
                    <div class="theme-card ${t===l?"active":""}" data-theme="${l}">
                        <div class="theme-preview theme-preview-${l.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${l}</h3>
                            <p>${l===C.AUTO?"Automatic theme selection.":l===C.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${t===l?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${a?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ne(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(o=>{o.addEventListener("click",function(){let d=this.dataset.theme;ke(d),t.setContent(V()),ne(t)})});function n(o,d,b,s,r,u,p){let v=document.getElementById(o),i=document.getElementById(d),m=document.getElementById(b),h=document.getElementById(s),g=document.getElementById(r);v&&i&&(v.onclick=()=>i.click(),i.onchange=x=>{let y=x.target.files[0];if(!y)return;if(y.name!==p){h.textContent=`File must be named "${p}"`,h.style.display="block",i.value="";return}let w=new FileReader;w.onload=S=>{try{let E=JSON.parse(S.target.result);localStorage.setItem(u,JSON.stringify(E)),m.textContent=p,h.style.display="none",t.setContent(V()),ne(t)}catch{h.textContent="Invalid JSON format",h.style.display="block",i.value=""}},w.onerror=()=>{h.textContent="Failed to read file",h.style.display="block",i.value=""},w.readAsText(y)}),g&&(g.onclick=()=>{localStorage.removeItem(u),t.setContent(V()),ne(t)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let a=document.getElementById("notifications-toggle");if(a){let o="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!o||o.state==="denied")&&(a.disabled=!0),a.onclick=async d=>{if(d.target.checked)try{await Notification.requestPermission()!=="granted"&&(d.target.checked=!1)}catch{d.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),d.target.checked=!0)}}let l=document.getElementById("microphone-toggle");async function c(){let o="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;l&&(l.disabled=!o||o.state==="denied",l.checked=o?.state==="granted");let d=document.querySelector("#microphone-setting-item .settings-item-description");d&&(d.textContent=o?o.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}c(),l&&!l.disabled&&(l.onclick=async o=>{if(o.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),c()}catch{o.target.checked=!1,c()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),o.target.checked=!0)});let f=document.getElementById("analytics-toggle");f&&(f.checked=localStorage.getItem("easter_analytics_enabled")!=="false",f.onclick=o=>{let d=o.target.checked;localStorage.setItem("easter_analytics_enabled",d),window.EASTER_ANALYTICS_ENABLED=d,window.EASTER_DEBUG_MODE=d})}var Re=()=>`
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
`,P=new Set,We=[],X=null;async function U(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;Ze();let n=localStorage.getItem("service_map");if(!n)return;let a=null;try{a=(JSON.parse(n).services?.cs||[]).find(o=>o.id==="dex-event-service")}catch{return}if(!a)return;let c=`http://${a.domain==="0.0.0.0"?"127.0.0.1":a.domain}:${a.port}/roadmap`;try{let f=await fetch(c);if(!f.ok)throw new Error("Offline");let o=await f.json();if(We=o,o.length===0){e.innerHTML=$("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let d=p=>{let v=P.has(p.id),i=p.state==="draft",m=p.state==="published",h=p.state==="consumed",g="event-border-grey";m&&(g="event-border-blue"),h&&(g="event-border-purple");let y=new Date(p.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),w=document.createElement("div");w.className=`event-item notification-item ${g} cursor-pointer ${v?"expanded":""}`,w.dataset.itemId=p.id,w.onclick=E=>{if(E.target.closest("button"))return;w.classList.contains("expanded")?(w.classList.remove("expanded"),w.querySelector(".event-details").style.display="none",P.delete(p.id)):(w.classList.add("expanded"),w.querySelector(".event-details").style.display="block",P.add(p.id))};let S=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${p.state.toUpperCase()}]</span>`;return w.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${y.split(",")[1]}</span>
          <span class="event-date">${y.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${S}</div>
          <div class="event-message" style="white-space: pre-wrap;">${k(p.content)}</div>
          <div class="event-details" style="${v?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${h?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${m?"bx-pause":"bx-rocket"}'></i> ${m?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${h?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(p.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,w.querySelector(".edit-btn")?.addEventListener("click",()=>et(p)),w.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>tt(p)),w.querySelector(".delete-btn")?.addEventListener("click",()=>st(p.id)),w.querySelector(".close-details-btn")?.addEventListener("click",E=>{E.stopPropagation(),w.classList.remove("expanded"),w.querySelector(".event-details").style.display="none",P.delete(p.id)}),w},b=Array.from(e.children),s=new Map(b.map(p=>[p.dataset.itemId,p])),r=new Set(o.map(p=>p.id));b.forEach(p=>{let v=p.dataset.itemId;(!v||!r.has(v))&&p.remove()});let u=null;o.forEach((p,v)=>{let i=s.get(p.id);(!i||t)&&(i&&i.remove(),i=d(p),!i)||(v===0?e.firstElementChild!==i&&e.prepend(i):u&&u.nextElementSibling!==i&&u.after(i),u=i)})}catch{e.innerHTML=$("error","Failed to load roadmap.")}}function Ze(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),n=document.getElementById("roadmap-cancel"),a=document.getElementById("roadmap-expand-all"),l=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{X=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",X=null},n.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let c=document.getElementById("roadmap-editor-input").value;if(!c.trim())return;let o=JSON.parse(localStorage.getItem("service_map")).services.cs.find(r=>r.id==="dex-event-service"),d=o.domain==="0.0.0.0"?"127.0.0.1":o.domain,b=X?`http://${d}:${o.port}/roadmap/${X}`:`http://${d}:${o.port}/roadmap`,s=X?"PATCH":"POST";try{await fetch(b,{method:s,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c})}),document.getElementById("roadmap-editor-container").style.display="none",U(!0)}catch(r){console.error(r)}},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{We.forEach(c=>P.add(c.id)),U(!0)},a.dataset.listenerAttached="true"),l&&!l.dataset.listenerAttached&&(l.onclick=()=>{P.clear(),U(!0)},l.dataset.listenerAttached="true")}function et(t){X=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function tt(t){let e=t.state==="published"?"draft":"published",a=JSON.parse(localStorage.getItem("service_map")).services.cs.find(c=>c.id==="dex-event-service"),l=a.domain==="0.0.0.0"?"127.0.0.1":a.domain;try{await fetch(`http://${l}:${a.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),U(!0)}catch(c){console.error(c)}}async function st(t){if(!confirm("Delete this roadmap item?"))return;let n=JSON.parse(localStorage.getItem("service_map")).services.cs.find(l=>l.id==="dex-event-service"),a=n.domain==="0.0.0.0"?"127.0.0.1":n.domain;try{await fetch(`http://${a}:${n.port}/roadmap/${t}`,{method:"DELETE"}),P.delete(t),U(!0)}catch(l){console.error(l)}}function ze(){Ae(),Ee();let t=_e();Le(t),Te();let e=document.querySelector("footer"),n=null;function a(){n=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(r=>r.classList.remove("active","inactive"))}function l(r,u=null){let p=n&&n.id===r.id;n&&n.close(!p),p?n=null:setTimeout(()=>{r.open(),n=r,document.querySelectorAll(".nav-right i").forEach(v=>{let i=v===u;v.classList.toggle("active",i),v.classList.toggle("inactive",!i&&u)}),e?.classList.add("hide")},n?220:0)}async function c(){await Promise.all([he(),ye(),se(),xe(),q(),K(),be()]);let r=setInterval(()=>{if(!s.isOpen())return clearInterval(r);L(4,ge),L(3,z),L(5,ce),L(6,re),L(2,de),L(1,le),L(0,G)},1e3),u=setInterval(()=>{if(!s.isOpen())return clearInterval(u);se(),xe(),q(),K(),be()},3e3),p=setInterval(()=>{if(!s.isOpen())return clearInterval(p);he(),ye()},6e4)}async function f(){await U();let r=setInterval(()=>{if(!d.isOpen())return clearInterval(r);U()},5e3)}let o=te({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:a}),d=te({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${ie()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:Re(),"data-tab-index":1}],icon:"bx-user",onClose:a,onOpen:()=>setTimeout(f,100)}),b=te({id:"settings-window",title:"Settings",content:V(),icon:"bx-cog",onClose:a,onOpen:()=>{b.setContent(V()),setTimeout(()=>ne(b),50)}}),s=te({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:He(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:Ue(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Pe(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:De(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Ce(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:qe(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Oe(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:a,onOpen:()=>setTimeout(c,100)});t?(document.getElementById("user-icon")?.addEventListener("click",r=>l(d,r.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",r=>l(s,r.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",r=>l(b,r.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{l(o),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",r=>{r.preventDefault();try{Ie(document.getElementById("email-input").value),window.location.reload()}catch(u){let p=document.getElementById("login-error");p&&(p.textContent=u.message,p.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ze):ze();})();
//# sourceMappingURL=dex.7d8a491e.js.map
