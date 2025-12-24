(()=>{function Se(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ee(t=!1){let s=`
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
    `,n=document.createElement("nav");n.innerHTML=s,document.body.prepend(n)}function Le(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function se(t){let e=null,s=t.onClose||null,n=t.onOpen||null;function o(){if(e){e.classList.add("open"),window.addEventListener("resize",c),n&&setTimeout(n,10);return}let i=document.getElementById("windows-container");i||(i=document.createElement("div"),i.id="windows-container",i.className="windows-container",document.body.appendChild(i)),e=document.createElement("div"),e.id=t.id,e.className="window";let r=t.icon||"bx-window",g="",m="",f;t.tabs&&t.tabs.length>0?(g=`<div class="tab-bar">${t.tabs.map((x,w)=>{let y;return x.icon?y=`<i class="bx ${x.icon}"></i>`:x.title&&x.title.length>0?y=`<span class="tab-glyph">${x.title.charAt(0).toUpperCase()}</span>`:y='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${w===0?"active":""}" data-tab-index="${w}">
                        ${y}
                        <span class="tab-title">${x.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${w}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,f=`<div class="window-content">${t.tabs.map((x,w)=>`<div class="tab-content ${w===0?"active":""}" data-tab-content="${w}">${x.content}</div>`).join("")}</div>`):(t.title&&(m=`<div class="window-title">${t.title}</div>`),f=`<div class="window-content">${t.content}</div>`);let a=`
            <div class="window-header">
                <i class="bx ${r}"></i>
                ${g}
                ${m}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=a+f,i.appendChild(e);let d=e.querySelector(".window-close");d&&d.addEventListener("click",u=>{u.stopPropagation(),l()}),window.addEventListener("resize",c),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(b=>{b.addEventListener("click",()=>{let x=b.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),b.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${x}"]`).classList.add("active"),v(b,e)})}),setTimeout(()=>{e.classList.add("open"),n&&n()},10)}function c(){if(!e||!e.classList.contains("open"))return;let i=e.querySelector(".tab.active");i&&v(i,e)}function v(i,r){setTimeout(()=>{let g=r.querySelector(".tab-bar");if(g){let m=Array.from(g.querySelectorAll(".tab")),f=m.indexOf(i),a=g.clientWidth,d=m[Math.max(0,f-2)],u=m[Math.min(m.length-1,f+2)],b=d.offsetLeft-g.offsetLeft-25,w=u.offsetLeft+u.offsetWidth-g.offsetLeft+25-b,y;w<=a?y=b-(a-w)/2:y=i.offsetLeft-g.offsetLeft-a/2+i.offsetWidth/2,g.scrollTo({left:y,behavior:"smooth"})}},350)}function l(i=!1){e&&(window.removeEventListener("resize",c),i?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),s&&s(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function p(i){if(e){let r=e.querySelector(".window-content");r&&(r.innerHTML=i)}}function h(){return e&&e.classList.contains("open")}return{open:o,close:l,setContent:p,isOpen:h,id:t.id}}var ve="easter_user_email";function Te(){return localStorage.getItem(ve)!==null}function ae(){return localStorage.getItem(ve)}function _e(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ve,t.trim())}var Ie="easter_theme",A={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ge(){return localStorage.getItem(Ie)||A.AUTO}function Ge(){let t=window.innerWidth,e=window.innerHeight,s=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?A.ANIMATED:(t===1920&&e===1080&&s||t<=1920||e<=1080,A.DEFAULT)}function Me(t){if(!Object.values(A).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ie,t),fe(t)}function fe(t,e=!1){let s=document.body,n=t===A.AUTO?Ge():t;if(e||(s.classList.add("theme-transitioning"),setTimeout(()=>{s.classList.remove("theme-transitioning")},300)),Object.values(A).forEach(o=>{s.classList.remove(`theme-${o}`)}),s.classList.add(`theme-${t}`),n===A.ANIMATED){if(!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else{let o=document.querySelector(".background");o&&(e?o.remove():(o.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{o.remove()},400)))}}function ke(){let t=ge();if(fe(t,!0),t===A.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{fe(A.AUTO)},300)})}}function W(t,e,s=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=s?`<p class="placeholder-action">${s}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${o} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${c}
        </div>
    `}function Ae(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var be=null;async function he(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=W("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let s;try{s=JSON.parse(e)}catch(v){return console.error("Error parsing service_map from localStorage:",v),t.classList.add("placeholder-active"),t.innerHTML=W("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let n=null;if(s&&typeof s.services=="object"){let v=["cs","be","th"];for(let l of v)if(Array.isArray(s.services[l])){let p=s.services[l].find(h=>h.short_name==="event"||h.id==="event"||h.id==="dex-event-service");if(p){n=p;break}}}if(!n)return t.classList.add("placeholder-active"),t.innerHTML=W("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let c=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/logs`;try{let v=await fetch(c);if(!v.ok)return t.classList.add("placeholder-active"),t.innerHTML=W("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await v.json();if(!l||l.length===0)return t.classList.add("placeholder-active"),t.innerHTML=W("empty","No logs found.","Service logs will appear here when available."),!1;let p=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],h=l.filter(r=>!p.includes(r.id));h.forEach(r=>{r.logs&&Array.isArray(r.logs)?r.logs.reverse():r.logs=[]}),h.reverse();let i=h.map(r=>{let g=r.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${r.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(g)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return t.innerHTML=i,document.querySelectorAll(".copy-logs-btn").forEach(r=>{r.addEventListener("click",()=>{let g=unescape(r.dataset.logs);navigator.clipboard.writeText(g).then(()=>{let m=r.querySelector("i");m.classList.remove("bx-copy"),m.classList.add("bx-check"),setTimeout(()=>{m.classList.remove("bx-check"),m.classList.add("bx-copy")},2e3)})})}),be=Date.now(),!0}catch(v){return console.error("Error fetching logs:",v),t.classList.add("placeholder-active"),t.innerHTML=W("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $(t,e,s=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=s?`<p class="placeholder-action">${s}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${o} placeholder-icon'></i><p class="placeholder-message">${e}</p>${c}</div>`}function I(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function T(t,e){let s=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!s)return;if(!e){s.textContent="Last updated: never";return}let n=Date.now(),o=Math.floor((n-e)/1e3),c;o<60?c=`${o}s ago`:o<3600?c=`${Math.floor(o/60)}m ago`:c=`${Math.floor(o/3600)}h ago`,s.textContent=`Last updated: ${c}`}function O(t,e){let s=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!s)return;let n=s.querySelector(".notification-badge");n&&(e>0?(n.textContent=e>9?"9+":e,n.style.display="flex"):n.style.display="none")}function oe(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;O(0,e)}var Ye={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Ce(t,e){let s=Ye[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(s="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(s=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),!s)return t;let n=s.replace(/\{(\w+)\}/g,(o,c)=>e[c]!==void 0&&e[c]!==null?e[c]:o);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(n+=` (Translation: ${e.english_translation})`),n}var De=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,z=null,J=new Set,Ne=[];async function ne(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ve();let s=localStorage.getItem("service_map");if(!s){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(s).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!n){e.innerHTML=$("error","Event service not found in service map.");return}let c=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let v=await fetch(c);if(!v.ok)throw new Error("Service is offline or unreachable.");let p=(await v.json()).events||[];if(Ne=p,z=Date.now(),T(3,z),p.length===0){e.innerHTML=$("empty","No events found.");return}t&&(e.innerHTML="");let h=f=>{let a=f.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let d=a.type,u=d==="engagement.decision"||d==="messaging.bot.sent_message"||d==="messaging.user.sent_message"||d==="moderation.explicit_content.deleted"||d==="analysis.link.completed"||d==="analysis.visual.completed"||d==="system.cli.command",b="event-border-grey";u&&(d==="moderation.explicit_content.deleted"?b="event-border-red":d==="analysis.link.completed"||d==="analysis.visual.completed"?b="event-border-purple":d==="system.cli.command"?b="event-border-orange":b="event-border-blue");let x=u?"cursor-pointer":"",w=J.has(f.id),y=w?"expanded":"",C=w?"display: block;":"display: none;",S=new Date(f.timestamp*1e3),N=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Q=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),U=Ce(d,a),Z="";if(u){let _="";if(d==="engagement.decision")_=`
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
                    `;else if(d==="messaging.bot.sent_message")_=`
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
                    `;else if(d==="moderation.explicit_content.deleted")_=`
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
                            <pre class="detail-pre">${I(a.raw_output)||"None"}</pre>
                        </div>
                    `;else if(d==="analysis.link.completed")_=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${I(a.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${I(a.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${I(a.summary)||"None"}</pre>
                        </div>
                    `;else if(d==="analysis.visual.completed"){let M="";a.base64_preview?M=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(M=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${a.filename}</span>
                        </div>
                        ${M}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${I(a.description)||"None"}</pre>
                        </div>
                    `}else if(d==="system.cli.command")_=`
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
                            <pre class="detail-pre">${I(a.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(d==="messaging.user.sent_message"){let M="";a.attachments&&a.attachments.length>0&&(M=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${a.attachments.map(E=>{let j=E.content_type&&E.content_type.startsWith("image/"),D=(E.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${j?`<div class="attachment-thumb-container"><img src="${E.url}" alt="${E.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${E.url}" target="_blank" class="attachment-link">${E.filename}</a>
                                        <span class="attachment-meta">${E.content_type} \u2022 ${D}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${a.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${a.content||"(empty)"}</pre>
                        </div>
                        ${M}
                    `}Z=`
                    <div class="event-details" style="${C}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${_}
                    </div>
                `}let L=document.createElement("div");if(L.className=`event-item ${b} ${x} ${y}`,L.dataset.eventId=f.id,L.onclick=function(_){if(!u)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(f.id);let k=this.querySelector(".event-details");k&&(k.style.display="none")}else{this.classList.add("expanded"),J.add(f.id);let k=this.querySelector(".event-details");k&&(k.style.display="block")}},L.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${N}</span>
                    <span class="event-date">${Q}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${f.service}</div>
                    <div class="event-message">${U}</div>
                    ${Z}
                </div>
            `,u){let _=L.querySelector(".close-details-btn");_&&_.addEventListener("click",M=>{M.stopPropagation();let k=M.target.closest(".event-item");if(k){k.classList.remove("expanded"),J.delete(f.id);let E=k.querySelector(".event-details");E&&(E.style.display="none")}})}return L},i=Array.from(e.children),r=new Map(i.map(f=>[f.dataset.eventId,f])),g=new Set(p.map(f=>f.id));i.forEach(f=>{let a=f.dataset.eventId;(!a||!g.has(a))&&f.remove()});let m=null;p.forEach((f,a)=>{let d=r.get(f.id);(!d||t)&&(d&&d.remove(),d=h(f),!d)||(a===0?e.firstElementChild!==d&&e.prepend(d):m&&m.nextElementSibling!==d&&m.after(d),m=d)}),z=Date.now(),T(3,z)}catch(v){console.error("Error fetching events:",v),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Ve(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ne.forEach(s=>J.add(s.id)),ne(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),ne(!0)},e.dataset.listenerAttached="true")}var Be=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,G=null,q=new Set,le=[];async function P(t=!1){let e=document.getElementById("notifications-list");if(!e)return;Ke(),t&&(e.innerHTML="<p>Updating...</p>");let s=localStorage.getItem("service_map");if(!s){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(s).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!n){e.innerHTML=$("error","Event service not found in service map.");return}let c=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=1000&format=json&event.type=system.notification.generated,system.analysis.audit`;try{let v=await fetch(c);if(!v.ok)throw new Error("Service is offline or unreachable.");let p=(await v.json()).events||[];G=Date.now(),T(0,G);let h=Date.now(),i=24*60*60*1e3,r=p.filter(u=>{let b=localStorage.getItem(`notification_read_ts_${u.id}`);if(!b)return!0;let x=parseInt(b);return h-x<i});if(le=r,t&&(e.innerHTML=""),r.length===0){e.innerHTML=$("empty","No notifications yet."),oe();return}let g=u=>{let b=u.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return null}let w=b.type==="system.analysis.audit",y=w?`Analysis Audit: ${b.tier?.toUpperCase()}`:b.title||"Untitled Notification",C=w?"Raw analyst input and output logs.":b.body||"No description provided.",S=w?"low":b.priority||"low",N=!w&&!!b.alert,Q=w?"audit":b.category||"system",U=b.related_event_ids||[],L=!!localStorage.getItem(`notification_read_ts_${u.id}`),_=new Date(u.timestamp*1e3),M=_.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),k=_.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),E=L?"event-border-grey":"event-border-blue";w&&(E=L?"event-border-grey":"event-border-purple"),!L&&N&&(E="event-border-red"),L&&(S==="high"||S==="critical")?E="event-border-red":L&&S==="medium"&&(E="event-border-orange");let j=L?"notification-read":"notification-unread",D=q.has(u.id),ze=D?"expanded":"",Je=D?"display: block;":"display: none;",me="";if(w)me=`
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
                        <pre class="detail-pre">${I(b.raw_output)}</pre>
                    </div>
                    <div class="event-detail-block">
                        <span class="detail-label">Raw Input (Prompt):</span>
                        <pre class="detail-pre">${I(b.raw_input)}</pre>
                    </div>
                `;else{let R="";U.length>0&&(R=`
                        <div class="event-detail-row">
                            <span class="detail-label">Related Events:</span>
                            <span class="detail-value">${U.map(ee=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${ee.substring(0,8)}...</span>`).join(", ")}</span>
                        </div>`),me=`
                    <div class="event-detail-row">
                        <span class="detail-label">Priority:</span>
                        <span class="detail-value" style="color: ${S==="high"||S==="critical"?"#ff4d4d":S==="medium"?"#ffa500":"#888"}">${S.toUpperCase()}</span>
                    </div>
                    <div class="event-detail-block" style="text-align: left;">
                        <span class="detail-label">Insight:</span>
                        <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${I(C)}</p>
                    </div>
                    ${R}
                `}let B=document.createElement("div");B.className=`event-item notification-item ${E} ${j} ${ze} cursor-pointer`,B.dataset.notificationId=u.id,B.onclick=function(R){if(this.classList.contains("expanded")){this.classList.remove("expanded"),q.delete(u.id);let te=this.querySelector(".event-details");te&&(te.style.display="none")}else{this.classList.add("expanded"),q.add(u.id);let te=this.querySelector(".event-details");if(te&&(te.style.display="block"),!localStorage.getItem(`notification_read_ts_${u.id}`)){localStorage.setItem(`notification_read_ts_${u.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ue="event-border-grey";S==="high"||S==="critical"?ue="event-border-red":S==="medium"&&(ue="event-border-orange"),this.classList.add(ue),oe()}}},B.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${M}</span>
                    <span class="event-date">${k}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${Q.toUpperCase()} ${N?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${Je}">
                        <div class="event-details-header">
                            <h4>${w?"Audit":N?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${me}
                    </div>
                </div>
            `;let $e=B.querySelector(".close-details-btn");return $e&&$e.addEventListener("click",R=>{R.stopPropagation(),B.classList.remove("expanded");let ee=B.querySelector(".event-details");ee&&(ee.style.display="none"),q.delete(u.id)}),B},m=Array.from(e.children),f=new Map(m.map(u=>[u.dataset.notificationId,u])),a=new Set(r.map(u=>u.id));m.forEach(u=>{let b=u.dataset.notificationId;(!b||!a.has(b))&&u.remove()});let d=null;r.forEach((u,b)=>{let x=f.get(u.id);(!x||t)&&(x&&x.remove(),x=g(u),!x)||(b===0?e.firstElementChild!==x&&e.prepend(x):d&&d.nextElementSibling!==x&&d.after(x),d=x)}),G=Date.now(),T(0,G),oe()}catch(v){console.error("Error fetching notifications:",v),e.children.length===0&&(e.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function Ke(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),s=document.getElementById("notif-close-all"),n=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{le.forEach(o=>{localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),P(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{le.forEach(o=>{q.add(o.id),localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),P(!0)},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{q.clear(),P(!0)},s.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{let o=Date.now()-1728e5;le.forEach(c=>{localStorage.setItem(`notification_read_ts_${c.id}`,o.toString())}),q.clear(),P(!0)},n.dataset.listenerAttached="true")}var He=()=>`
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
`,re=null,Y=new Set,Ue=[];async function V(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Xe();let s=localStorage.getItem("service_map");if(!s){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(s).services?.cs||[]).find(p=>p.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!n){e.innerHTML=$("error","Event service not found in service map.");return}let o=n.domain==="0.0.0.0"?"127.0.0.1":n.domain,c=`http://${o}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`,v=`http://${o}:${n.port}/analyst/status`;try{let l=await fetch(v);if(l.ok){let p=await l.json(),h=document.getElementById("strategist-next-run");if(h&&p.strategist){let i=p.strategist.next_run,r=Math.floor(Date.now()/1e3),g=i-r;if(g<=0)h.textContent="Next T3: Ready (IDLE req)",h.style.color="#5eff5e";else{let m=Math.floor(g/60),f=g%60;h.textContent=`Next T3: ${m}m ${f}s`,h.style.color="#888"}}}}catch(l){console.error("Failed to fetch analyst status",l)}try{let l=await fetch(c);if(!l.ok)throw new Error("Service is offline or unreachable.");let h=(await l.json()).events||[];if(Ue=h,re=Date.now(),T(1,re),h.length===0){e.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),O(1,0);return}t&&(e.innerHTML="");let i=a=>{let d=a.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return null}let u=d.title||"Untitled Blueprint",b=d.summary||d.body||"No summary provided.",x=d.content||"",w=d.category||"architecture",y=d.affected_services||[],C=d.implementation_path||[],S=new Date(a.timestamp*1e3),N=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Q=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),U=Y.has(a.id),Z=U?"display: block;":"display: none;",L=document.createElement("div");L.className=`event-item notification-item event-border-purple cursor-pointer ${U?"expanded":""}`,L.dataset.blueprintId=a.id,L.onclick=function(E){if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(a.id);let D=this.querySelector(".event-details");D&&(D.style.display="none")}else{this.classList.add("expanded"),Y.add(a.id);let D=this.querySelector(".event-details");D&&(D.style.display="block")}};let _=y.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${y.join(", ")}</div>`:"",M="";C.length>0&&(M=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${C.map(E=>`<li>${I(E)}</li>`).join("")}
                        </ul>
                    </div>
                `),L.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${N}</span>
                    <span class="event-date">${Q}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${w.toUpperCase()}</div>
                    <div class="event-message">${u}</div>
                    <div class="event-details" style="${Z}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${I(b)}
                        </div>
                        ${_}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${I(x)}</p>
                        </div>
                        ${M}
                    </div>
                </div>
            `;let k=L.querySelector(".close-details-btn");return k&&k.addEventListener("click",E=>{E.stopPropagation(),L.classList.remove("expanded");let j=L.querySelector(".event-details");j&&(j.style.display="none"),Y.delete(a.id)}),L},r=Array.from(e.children),g=new Map(r.map(a=>[a.dataset.blueprintId,a])),m=new Set(h.map(a=>a.id));r.forEach(a=>{let d=a.dataset.blueprintId;(!d||!m.has(d))&&a.remove()});let f=null;h.forEach((a,d)=>{let u=g.get(a.id);(!u||t)&&(u&&u.remove(),u=i(a),!u)||(d===0?e.firstElementChild!==u&&e.prepend(u):f&&f.nextElementSibling!==u&&f.after(u),f=u)}),O(1,h.length)}catch(l){console.error("Error fetching blueprints:",l),e.children.length===0&&(e.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function Xe(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),s=document.getElementById("blueprints-reset-strategist");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ue.forEach(n=>Y.add(n.id)),V(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),V(!0)},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=async()=>{let n=localStorage.getItem("service_map");if(!n)return;let c=(JSON.parse(n).services?.cs||[]).find(p=>p.id==="dex-event-service");if(!c)return;let l=`http://${c.domain==="0.0.0.0"?"127.0.0.1":c.domain}:${c.port}/analyst/reset?tier=strategist`;s.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(l,{method:"POST"}),setTimeout(()=>{s.innerHTML="<i class='bx bx-check'></i> Reset Done",setTimeout(()=>{s.innerHTML="<i class='bx bx-refresh'></i> Reset Strategist"},2e3)},500),V()}catch(p){console.error("Failed to reset strategist",p),s.innerHTML="<i class='bx bx-error'></i> Failed"}},s.dataset.listenerAttached="true")}var je=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),Oe=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),qe=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),ce=null,de=null,pe=null;async function Pe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(c=>c.id==="dex-event-service");if(!e)return null;let n=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,o=await fetch(n);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function Qe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(c=>c.id==="dex-event-service");if(!e)return null;let n=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,o=await fetch(n);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function ye(){let t=document.getElementById("services-widgets");if(!t)return;let e=await Pe();if(!e||!e.services){t.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}ce=Date.now(),T(5,ce);let s=e.services||[];Array.from(t.children).forEach(i=>{i.classList.contains("service-widget")||i.remove()});function n(i){return!i||i==="N/A"||i==="unknown"||i.trim()===""?"-":i}function o(i){if(!i||i==="N/A"||i==="unknown")return"-";let r=i.match(/^(\d+\.\d+\.\d+)/);return r?r[0]:i.split(".").slice(0,3).join(".")||"-"}function c(i){return!i||i.length<=28?i:i.substring(0,28)+"..."}function v(i){if(!i||i==="N/A"||i==="unknown")return"-";let r=i.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!r)return"-";let g=parseInt(r[1])||0,m=parseInt(r[2])||0,f=parseInt(r[3])||0,a=parseFloat(r[4])||0,d=g*86400+m*3600+f*60+a,u=Math.floor(d/86400);if(u>0)return`${u}d`;let b=Math.floor(d/3600);if(b>0)return`${b}h`;let x=Math.floor(d/60);return x>0?`${x}m`:`${Math.floor(d)}s`}function l(i){let r=i.status==="online",g=r?"service-widget-online":"service-widget-offline",m=r?"bx-check-circle":"bx-x-circle",f=r?"OK":"BAD",a=i.version?o(i.version.str):"-",d=i.cpu&&i.cpu!=="N/A"?i.cpu:"-",u=i.memory&&i.memory!=="N/A"?i.memory:"-",b=d!=="-"?"#00ff00":"#666",x=d!=="-"?"#fff":"#666",w=u!=="-"?"#00ff00":"#666",y=u!=="-"?"#fff":"#666",C=v(i.uptime),S="";return r?S=`
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
                        <i class="bx bxs-microchip" style="color: ${b};"></i>
                        <span style="color: ${x};">${d}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${w};"></i>
                        <span style="color: ${y};">${u}</span>
                    </div>
                </div>`:S='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${g}" data-service-id="${i.id}"><div class="service-widget-header"><i class="bx ${m}"></i><h3>${i.short_name||i.id}</h3><span class="service-widget-status">${f}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${c(i.domain&&i.port?`${i.domain}:${i.port}`:"")}</span></div>${S}</div></div>`}let p=new Map(Array.from(t.querySelectorAll(".service-widget")).map(i=>[i.dataset.serviceId,i])),h=new Set(s.map(i=>i.id));for(let[i,r]of p)h.has(i)||r.remove();s.forEach(i=>{let r=l(i),g=p.get(i.id);g?g.outerHTML!==r&&(g.outerHTML=r):t.insertAdjacentHTML("beforeend",r)})}async function xe(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Pe();if(!e){t.innerHTML=$("offline","Failed to load model status.");return}de=Date.now(),T(4,de);let s=e.models||[],n=e.whisper;Array.from(t.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function o(l){let p=l.status==="Ready";return`
                <div class="service-widget ${p?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${p?"READY":"NOT FOUND"}</span>
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
                </div>`}function c(l){let p=l.status==="Downloaded",h=p?"service-widget-online":"service-widget-offline",i=p?"OK":"MISSING",r=p&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",g=l.name;return l.type==="custom"&&g.endsWith(":latest")&&(g=g.replace(":latest","")),`<div class="service-widget ${h}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${g}</h3><span class="service-widget-status">${i}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${r}</span></div></div></div>`}let v="";if(n&&(v+=o(n)),v+=s.map(c).join(""),!v){t.innerHTML=$("empty","No models found.");return}t.innerHTML!==v&&(t.innerHTML=v)}async function we(){let t=document.getElementById("processes-widgets");if(!t)return;let e=await Qe();if(e===null){t.innerHTML=$("offline","Failed to load process status.");return}if(pe=Date.now(),T(2,pe),e.length===0){t.innerHTML=$("empty","No active processes."),O(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function s(c){let v=Math.floor(Date.now()/1e3-c.start_time),l=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",p=c.channel_id,h={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return h[p]?p=h[p]:/^\d+$/.test(p)&&(p=`Channel ${p}`),`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>${p}</h3>
                        ${l}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${c.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${v}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${c.pid}</span>
                        </div>
                    </div>
                </div>`}let n=new Map(Array.from(t.querySelectorAll(".process-widget")).map(c=>[c.dataset.channelId,c])),o=new Set(e.map(c=>c.channel_id));for(let[c,v]of n)o.has(c)||v.remove();e.forEach(c=>{let v=s(c),l=n.get(c.channel_id);l?l.outerHTML!==v&&(l.outerHTML=v):t.insertAdjacentHTML("beforeend",v)}),O(2,e.length)}function K(){let t=ge(),e=ae()||"user@easter.company",s={enabled:Notification.permission==="granted",supported:"Notification"in window},n=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(A).map(o=>`
                    <div class="theme-card ${t===o?"active":""}" data-theme="${o}">
                        <div class="theme-preview theme-preview-${o.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${o}</h3>
                            <p>${o===A.AUTO?"Automatic theme selection.":o===A.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${t===o?"Active":"Select"}</span>
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
                            <span class="settings-item-description">${s.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${s.enabled?"checked":""} ${s.supported?"":"disabled"}>
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
                            <input type="checkbox" id="analytics-toggle" ${n?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ie(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let p=this.dataset.theme;Me(p),t.setContent(K()),ie(t)})});function s(l,p,h,i,r,g,m){let f=document.getElementById(l),a=document.getElementById(p),d=document.getElementById(h),u=document.getElementById(i),b=document.getElementById(r);f&&a&&(f.onclick=()=>a.click(),a.onchange=x=>{let w=x.target.files[0];if(!w)return;if(w.name!==m){u.textContent=`File must be named "${m}"`,u.style.display="block",a.value="";return}let y=new FileReader;y.onload=C=>{try{let S=JSON.parse(C.target.result);localStorage.setItem(g,JSON.stringify(S)),d.textContent=m,u.style.display="none",t.setContent(K()),ie(t)}catch{u.textContent="Invalid JSON format",u.style.display="block",a.value=""}},y.onerror=()=>{u.textContent="Failed to read file",u.style.display="block",a.value=""},y.readAsText(w)}),b&&(b.onclick=()=>{localStorage.removeItem(g),t.setContent(K()),ie(t)})}s("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),s("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),s("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let n=document.getElementById("notifications-toggle");if(n){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(n.disabled=!0),n.onclick=async p=>{if(p.target.checked)try{await Notification.requestPermission()!=="granted"&&(p.target.checked=!1)}catch{p.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),p.target.checked=!0)}}let o=document.getElementById("microphone-toggle");async function c(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;o&&(o.disabled=!l||l.state==="denied",o.checked=l?.state==="granted");let p=document.querySelector("#microphone-setting-item .settings-item-description");p&&(p.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}c(),o&&!o.disabled&&(o.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),c()}catch{l.target.checked=!1,c()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let v=document.getElementById("analytics-toggle");v&&(v.checked=localStorage.getItem("easter_analytics_enabled")!=="false",v.onclick=l=>{let p=l.target.checked;localStorage.setItem("easter_analytics_enabled",p),window.EASTER_ANALYTICS_ENABLED=p,window.EASTER_DEBUG_MODE=p})}var Fe=()=>`
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
`,F=new Set,Re=[],X=null;async function H(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;Ze();let s=localStorage.getItem("service_map");if(!s)return;let n=null;try{n=(JSON.parse(s).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{return}if(!n)return;let c=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/roadmap`;try{let v=await fetch(c);if(!v.ok)throw new Error("Offline");let l=await v.json();if(Re=l,l.length===0){e.innerHTML=$("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let p=m=>{let f=F.has(m.id),a=m.state==="draft",d=m.state==="published",u=m.state==="consumed",b="event-border-grey";d&&(b="event-border-blue"),u&&(b="event-border-purple");let w=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=document.createElement("div");y.className=`event-item notification-item ${b} cursor-pointer ${f?"expanded":""}`,y.dataset.itemId=m.id,y.onclick=S=>{if(S.target.closest("button"))return;y.classList.contains("expanded")?(y.classList.remove("expanded"),y.querySelector(".event-details").style.display="none",F.delete(m.id)):(y.classList.add("expanded"),y.querySelector(".event-details").style.display="block",F.add(m.id))};let C=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;return y.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${w.split(",")[1]}</span>
          <span class="event-date">${w.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${C}</div>
          <div class="event-message" style="white-space: pre-wrap;">${I(m.content)}</div>
          <div class="event-details" style="${f?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${u?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${d?"bx-pause":"bx-rocket"}'></i> ${d?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${u?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(m.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,y.querySelector(".edit-btn")?.addEventListener("click",()=>et(m)),y.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>tt(m)),y.querySelector(".delete-btn")?.addEventListener("click",()=>st(m.id)),y.querySelector(".close-details-btn")?.addEventListener("click",S=>{S.stopPropagation(),y.classList.remove("expanded"),y.querySelector(".event-details").style.display="none",F.delete(m.id)}),y},h=Array.from(e.children),i=new Map(h.map(m=>[m.dataset.itemId,m])),r=new Set(l.map(m=>m.id));h.forEach(m=>{let f=m.dataset.itemId;(!f||!r.has(f))&&m.remove()});let g=null;l.forEach((m,f)=>{let a=i.get(m.id);(!a||t)&&(a&&a.remove(),a=p(m),!a)||(f===0?e.firstElementChild!==a&&e.prepend(a):g&&g.nextElementSibling!==a&&g.after(a),g=a)})}catch{e.innerHTML=$("error","Failed to load roadmap.")}}function Ze(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),s=document.getElementById("roadmap-cancel"),n=document.getElementById("roadmap-expand-all"),o=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{X=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",X=null},s.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let c=document.getElementById("roadmap-editor-input").value;if(!c.trim())return;let l=JSON.parse(localStorage.getItem("service_map")).services.cs.find(r=>r.id==="dex-event-service"),p=l.domain==="0.0.0.0"?"127.0.0.1":l.domain,h=X?`http://${p}:${l.port}/roadmap/${X}`:`http://${p}:${l.port}/roadmap`,i=X?"PATCH":"POST";try{await fetch(h,{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c})}),document.getElementById("roadmap-editor-container").style.display="none",H(!0)}catch(r){console.error(r)}},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{Re.forEach(c=>F.add(c.id)),H(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{F.clear(),H(!0)},o.dataset.listenerAttached="true")}function et(t){X=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function tt(t){let e=t.state==="published"?"draft":"published",n=JSON.parse(localStorage.getItem("service_map")).services.cs.find(c=>c.id==="dex-event-service"),o=n.domain==="0.0.0.0"?"127.0.0.1":n.domain;try{await fetch(`http://${o}:${n.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),H(!0)}catch(c){console.error(c)}}async function st(t){if(!confirm("Delete this roadmap item?"))return;let s=JSON.parse(localStorage.getItem("service_map")).services.cs.find(o=>o.id==="dex-event-service"),n=s.domain==="0.0.0.0"?"127.0.0.1":s.domain;try{await fetch(`http://${n}:${s.port}/roadmap/${t}`,{method:"DELETE"}),F.delete(t),H(!0)}catch(o){console.error(o)}}function We(){ke(),Se();let t=Te();Ee(t),Le();let e=document.querySelector("footer"),s=null;function n(){s=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(r=>r.classList.remove("active","inactive"))}function o(r,g=null){let m=s&&s.id===r.id;s&&s.close(!m),m?s=null:setTimeout(()=>{r.open(),s=r,document.querySelectorAll(".nav-right i").forEach(f=>{let a=f===g;f.classList.toggle("active",a),f.classList.toggle("inactive",!a&&g)}),e?.classList.add("hide")},s?220:0)}async function c(){await Promise.all([ye(),xe(),ne(),we(),P(),V(),he()]);let r=setInterval(()=>{if(!i.isOpen())return clearInterval(r);T(4,be),T(3,z),T(5,de),T(6,ce),T(2,pe),T(1,re),T(0,G)},1e3),g=setInterval(()=>{if(!i.isOpen())return clearInterval(g);ne(),we(),P(),V(),he()},3e3),m=setInterval(()=>{if(!i.isOpen())return clearInterval(m);ye(),xe()},6e4)}async function v(){await H();let r=setInterval(()=>{if(!p.isOpen())return clearInterval(r);H()},5e3)}let l=se({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:n}),p=se({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${ae()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:Fe(),"data-tab-index":1}],icon:"bx-user",onClose:n,onOpen:()=>setTimeout(v,100)}),h=se({id:"settings-window",title:"Settings",content:K(),icon:"bx-cog",onClose:n,onOpen:()=>{h.setContent(K()),setTimeout(()=>ie(h),50)}}),i=se({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Be(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:He(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:qe(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:De(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Ae(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:Oe(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:je(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:n,onOpen:()=>setTimeout(c,100)});t?(document.getElementById("user-icon")?.addEventListener("click",r=>o(p,r.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",r=>o(i,r.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",r=>o(h,r.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{o(l),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",r=>{r.preventDefault();try{_e(document.getElementById("email-input").value),window.location.reload()}catch(g){let m=document.getElementById("login-error");m&&(m.textContent=g.message,m.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",We):We();})();
//# sourceMappingURL=dex.7829852b.js.map
