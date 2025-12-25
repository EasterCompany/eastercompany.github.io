(()=>{function Ee(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Le(t=!1){let s=`
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
    `,i=document.createElement("nav");i.innerHTML=s,document.body.prepend(i)}function Te(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function ee(t){let e=null,s=t.onClose||null,i=t.onOpen||null;function o(){if(e){e.classList.add("open"),window.addEventListener("resize",c),i&&setTimeout(i,10);return}let a=document.getElementById("windows-container");a||(a=document.createElement("div"),a.id="windows-container",a.className="windows-container",document.body.appendChild(a)),e=document.createElement("div"),e.id=t.id,e.className="window";let r=t.icon||"bx-window",g="",m="",f;t.tabs&&t.tabs.length>0?(g=`<div class="tab-bar">${t.tabs.map((x,$)=>{let b;return x.icon?b=`<i class="bx ${x.icon}"></i>`:x.title&&x.title.length>0?b=`<span class="tab-glyph">${x.title.charAt(0).toUpperCase()}</span>`:b='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${$===0?"active":""}" data-tab-index="${$}">
                        ${b}
                        <span class="tab-title">${x.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${$}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,f=`<div class="window-content">${t.tabs.map((x,$)=>`<div class="tab-content ${$===0?"active":""}" data-tab-content="${$}">${x.content}</div>`).join("")}</div>`):(t.title&&(m=`<div class="window-title">${t.title}</div>`),f=`<div class="window-content">${t.content}</div>`);let n=`
            <div class="window-header">
                <i class="bx ${r}"></i>
                ${g}
                ${m}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=n+f,a.appendChild(e);let d=e.querySelector(".window-close");d&&d.addEventListener("click",u=>{u.stopPropagation(),l()}),window.addEventListener("resize",c),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(y=>{y.addEventListener("click",()=>{let x=y.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach($=>$.classList.remove("active")),y.classList.add("active"),e.querySelectorAll(".tab-content").forEach($=>$.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${x}"]`).classList.add("active"),v(y,e)})}),setTimeout(()=>{e.classList.add("open"),i&&i()},10)}function c(){if(!e||!e.classList.contains("open"))return;let a=e.querySelector(".tab.active");a&&v(a,e)}function v(a,r){setTimeout(()=>{let g=r.querySelector(".tab-bar");if(g){let m=Array.from(g.querySelectorAll(".tab")),f=m.indexOf(a),n=g.clientWidth,d=m[Math.max(0,f-2)],u=m[Math.min(m.length-1,f+2)],y=d.offsetLeft-g.offsetLeft-25,$=u.offsetLeft+u.offsetWidth-g.offsetLeft+25-y,b;$<=n?b=y-(n-$)/2:b=a.offsetLeft-g.offsetLeft-n/2+a.offsetWidth/2,g.scrollTo({left:b,behavior:"smooth"})}},350)}function l(a=!1){e&&(window.removeEventListener("resize",c),a?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),s&&s(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function p(a){if(e){let r=e.querySelector(".window-content");r&&(r.innerHTML=a)}}function h(){return e&&e.classList.contains("open")}return{open:o,close:l,setContent:p,isOpen:h,id:t.id}}var ue="easter_user_email";function _e(){return localStorage.getItem(ue)!==null}function ie(){return localStorage.getItem(ue)}function Ie(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ue,t.trim())}var Me="easter_theme",C={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function fe(){return localStorage.getItem(Me)||C.AUTO}function Je(){let t=window.innerWidth,e=window.innerHeight,s=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?C.ANIMATED:(t===1920&&e===1080&&s||t<=1920||e<=1080,C.DEFAULT)}function ke(t){if(!Object.values(C).includes(t))throw new Error("Invalid theme");localStorage.setItem(Me,t),ve(t)}function ve(t,e=!1){let s=document.body,i=t===C.AUTO?Je():t;if(e||(s.classList.add("theme-transitioning"),setTimeout(()=>{s.classList.remove("theme-transitioning")},300)),Object.values(C).forEach(o=>{s.classList.remove(`theme-${o}`)}),s.classList.add(`theme-${t}`),i===C.ANIMATED){if(!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else{let o=document.querySelector(".background");o&&(e?o.remove():(o.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{o.remove()},400)))}}function Ae(){let t=fe();if(ve(t,!0),t===C.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{ve(C.AUTO)},300)})}}function W(t,e,s=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=s?`<p class="placeholder-action">${s}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${o} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${c}
        </div>
    `}function Ce(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ge=null;async function be(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=W("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let s;try{s=JSON.parse(e)}catch(v){return console.error("Error parsing service_map from localStorage:",v),t.classList.add("placeholder-active"),t.innerHTML=W("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let i=null;if(s&&typeof s.services=="object"){let v=["cs","be","th"];for(let l of v)if(Array.isArray(s.services[l])){let p=s.services[l].find(h=>h.short_name==="event"||h.id==="event"||h.id==="dex-event-service");if(p){i=p;break}}}if(!i)return t.classList.add("placeholder-active"),t.innerHTML=W("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let c=`http://${i.domain==="0.0.0.0"?"127.0.0.1":i.domain}:${i.port}/logs`;try{let v=await fetch(c);if(!v.ok)return t.classList.add("placeholder-active"),t.innerHTML=W("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await v.json();if(!l||l.length===0)return t.classList.add("placeholder-active"),t.innerHTML=W("empty","No logs found.","Service logs will appear here when available."),!1;let p=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],h=l.filter(r=>!p.includes(r.id));h.forEach(r=>{r.logs&&Array.isArray(r.logs)?r.logs.reverse():r.logs=[]}),h.reverse();let a=h.map(r=>{let g=r.logs.join(`
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
            `}).join("");return t.innerHTML=a,document.querySelectorAll(".copy-logs-btn").forEach(r=>{r.addEventListener("click",()=>{let g=unescape(r.dataset.logs);navigator.clipboard.writeText(g).then(()=>{let m=r.querySelector("i");m.classList.remove("bx-copy"),m.classList.add("bx-check"),setTimeout(()=>{m.classList.remove("bx-check"),m.classList.add("bx-copy")},2e3)})})}),ge=Date.now(),!0}catch(v){return console.error("Error fetching logs:",v),t.classList.add("placeholder-active"),t.innerHTML=W("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function w(t,e,s=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=s?`<p class="placeholder-action">${s}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${o} placeholder-icon'></i><p class="placeholder-message">${e}</p>${c}</div>`}function M(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function E(t,e){let s=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!s)return;if(!e){s.textContent="Last updated: never";return}let i=Date.now(),o=Math.floor((i-e)/1e3),c;o<60?c=`${o}s ago`:o<3600?c=`${Math.floor(o/60)}m ago`:c=`${Math.floor(o/3600)}h ago`,s.textContent=`Last updated: ${c}`}function q(t,e){let s=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!s)return;let i=s.querySelector(".notification-badge");i&&(e>0?(i.textContent=e>9?"9+":e,i.style.display="flex"):i.style.display="none")}function ae(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;q(0,e)}var Ge={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function De(t,e){let s=Ge[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(s="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(s=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),!s)return t;let i=s.replace(/\{(\w+)\}/g,(o,c)=>e[c]!==void 0&&e[c]!==null?e[c]:o);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(i+=` (Translation: ${e.english_translation})`),i}var Ne=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,z=null,J=new Set,Be=[];async function te(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ye();let s=localStorage.getItem("service_map");if(!s){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let i=null;try{i=(JSON.parse(s).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!i){e.innerHTML=w("error","Event service not found in service map.");return}let c=`http://${i.domain==="0.0.0.0"?"127.0.0.1":i.domain}:${i.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let v=await fetch(c);if(!v.ok)throw new Error("Service is offline or unreachable.");let p=(await v.json()).events||[];if(Be=p,z=Date.now(),E(3,z),p.length===0){e.innerHTML=w("empty","No events found.");return}t&&(e.innerHTML="");let h=f=>{let n=f.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let d=n.type,u=d==="engagement.decision"||d==="messaging.bot.sent_message"||d==="messaging.user.sent_message"||d==="moderation.explicit_content.deleted"||d==="analysis.link.completed"||d==="analysis.visual.completed"||d==="system.cli.command"||d==="system.analysis.audit",y="event-border-grey";u&&(d==="moderation.explicit_content.deleted"?y="event-border-red":d==="analysis.link.completed"||d==="analysis.visual.completed"||d==="system.analysis.audit"?y="event-border-purple":d==="system.cli.command"?y="event-border-orange":y="event-border-blue");let x=u?"cursor-pointer":"",$=J.has(f.id),b=$?"expanded":"",k=$?"display: block;":"display: none;",L=new Date(f.timestamp*1e3),j=L.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),ne=L.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=De(d,n),U="";if(u){let T="";if(d==="engagement.decision")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${n.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${n.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${n.engagement_raw||"None"}</pre>
                        </div>
                    `;else if(d==="messaging.bot.sent_message")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${n.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${n.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${n.response_raw||"None"}</pre>
                        </div>
                    `;else if(d==="moderation.explicit_content.deleted")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${n.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${M(n.raw_output)||"None"}</pre>
                        </div>
                    `;else if(d==="analysis.link.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${M(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${M(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${M(n.summary)||"None"}</pre>
                        </div>
                    `;else if(d==="analysis.visual.completed"){let _="";n.base64_preview?_=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(_=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${_}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${M(n.description)||"None"}</pre>
                        </div>
                    `}else if(d==="system.cli.command")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${n.command||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${n.args||"None"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${n.duration||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${n.exit_code!==void 0?n.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${M(n.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(d==="system.analysis.audit")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${n.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${n.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${M(n.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${M(n.raw_input)}</pre>
                        </div>
                    `;else if(d==="messaging.user.sent_message"){let _="";n.attachments&&n.attachments.length>0&&(_=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${n.attachments.map(S=>{let O=S.content_type&&S.content_type.startsWith("image/"),N=(S.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${O?`<div class="attachment-thumb-container"><img src="${S.url}" alt="${S.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${S.url}" target="_blank" class="attachment-link">${S.filename}</a>
                                        <span class="attachment-meta">${S.content_type} \u2022 ${N}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${n.content||"(empty)"}</pre>
                        </div>
                        ${_}
                    `}U=`
                    <div class="event-details" style="${k}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${T}
                    </div>
                `}let I=document.createElement("div");if(I.className=`event-item ${y} ${x} ${b}`,I.dataset.eventId=f.id,I.onclick=function(T){if(!u)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(f.id);let A=this.querySelector(".event-details");A&&(A.style.display="none")}else{this.classList.add("expanded"),J.add(f.id);let A=this.querySelector(".event-details");A&&(A.style.display="block")}},I.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${j}</span>
                    <span class="event-date">${ne}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${f.service}</div>
                    <div class="event-message">${D}</div>
                    ${U}
                </div>
            `,u){let T=I.querySelector(".close-details-btn");T&&T.addEventListener("click",_=>{_.stopPropagation();let A=_.target.closest(".event-item");if(A){A.classList.remove("expanded"),J.delete(f.id);let S=A.querySelector(".event-details");S&&(S.style.display="none")}})}return I},a=Array.from(e.children),r=new Map(a.map(f=>[f.dataset.eventId,f])),g=new Set(p.map(f=>f.id));a.forEach(f=>{let n=f.dataset.eventId;(!n||!g.has(n))&&f.remove()});let m=null;p.forEach((f,n)=>{let d=r.get(f.id);(!d||t)&&(d&&d.remove(),d=h(f),!d)||(n===0?e.firstElementChild!==d&&e.prepend(d):m&&m.nextElementSibling!==d&&m.after(d),m=d)}),z=Date.now(),E(3,z)}catch(v){console.error("Error fetching events:",v),e.children.length===0&&(e.innerHTML=w("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Ye(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Be.forEach(s=>J.add(s.id)),te(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),te(!0)},e.dataset.listenerAttached="true")}var He=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,G=null,P=new Set,oe=[];async function F(t=!1){let e=document.getElementById("notifications-list");if(!e)return;Ve(),t&&(e.innerHTML="<p>Updating...</p>");let s=localStorage.getItem("service_map");if(!s){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let i=null;try{i=(JSON.parse(s).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!i){e.innerHTML=w("error","Event service not found in service map.");return}let c=`http://${i.domain==="0.0.0.0"?"127.0.0.1":i.domain}:${i.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let v=await fetch(c);if(!v.ok)throw new Error("Service is offline or unreachable.");let p=(await v.json()).events||[];G=Date.now(),E(0,G);let h=Date.now(),a=24*60*60*1e3,r=p.filter(u=>{let y=localStorage.getItem(`notification_read_ts_${u.id}`);if(!y)return!0;let x=parseInt(y);return h-x<a});if(oe=r,t&&(e.innerHTML=""),r.length===0){e.innerHTML=w("empty","No notifications yet."),ae();return}let g=u=>{let y=u.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return null}let x=y.title||"Untitled Notification",$=y.body||"No description provided.",b=y.priority||"low",k=!!y.alert,L=y.category||"system",j=y.related_event_ids||[],D=!!localStorage.getItem(`notification_read_ts_${u.id}`),U=new Date(u.timestamp*1e3),I=U.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=U.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),_=D?"event-border-grey":"event-border-blue";!D&&k&&(_="event-border-red"),D&&(b==="high"||b==="critical")?_="event-border-red":D&&b==="medium"&&(_="event-border-orange");let A=D?"notification-read":"notification-unread",S=P.has(u.id),O=S?"expanded":"",N=S?"display: block;":"display: none;",we="",$e="";j.length>0&&($e=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${j.map(Q=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Q.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),we=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${b==="high"||b==="critical"?"#ff4d4d":b==="medium"?"#ffa500":"#888"}">${b.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${M($)}</p>
                </div>
                ${$e}
            `;let B=document.createElement("div");B.className=`event-item notification-item ${_} ${A} ${O} cursor-pointer`,B.dataset.notificationId=u.id,B.onclick=function(Q){if(this.classList.contains("expanded")){this.classList.remove("expanded"),P.delete(u.id);let Z=this.querySelector(".event-details");Z&&(Z.style.display="none")}else{this.classList.add("expanded"),P.add(u.id);let Z=this.querySelector(".event-details");if(Z&&(Z.style.display="block"),!localStorage.getItem(`notification_read_ts_${u.id}`)){localStorage.setItem(`notification_read_ts_${u.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let me="event-border-grey";b==="high"||b==="critical"?me="event-border-red":b==="medium"&&(me="event-border-orange"),this.classList.add(me),ae()}}},B.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${I}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${L.toUpperCase()} ${k?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${x}</div>
                    <div class="event-details" style="${N}">
                        <div class="event-details-header">
                            <h4>${k?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${we}
                    </div>
                </div>
            `;let Se=B.querySelector(".close-details-btn");return Se&&Se.addEventListener("click",Q=>{Q.stopPropagation(),B.classList.remove("expanded");let pe=B.querySelector(".event-details");pe&&(pe.style.display="none"),P.delete(u.id)}),B},m=Array.from(e.children),f=new Map(m.map(u=>[u.dataset.notificationId,u])),n=new Set(r.map(u=>u.id));m.forEach(u=>{let y=u.dataset.notificationId;(!y||!n.has(y))&&u.remove()});let d=null;r.forEach((u,y)=>{let x=f.get(u.id);(!x||t)&&(x&&x.remove(),x=g(u),!x)||(y===0?e.firstElementChild!==x&&e.prepend(x):d&&d.nextElementSibling!==x&&d.after(x),d=x)}),G=Date.now(),E(0,G),ae()}catch(v){console.error("Error fetching notifications:",v),e.children.length===0&&(e.innerHTML=w("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function Ve(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),s=document.getElementById("notif-close-all"),i=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{oe.forEach(o=>{localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),F(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{oe.forEach(o=>{P.add(o.id),localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),F(!0)},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{P.clear(),F(!0)},s.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{let o=Date.now()-1728e5;oe.forEach(c=>{localStorage.setItem(`notification_read_ts_${c.id}`,o.toString())}),P.clear(),F(!0)},i.dataset.listenerAttached="true")}var je=()=>`
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
`,le=null,Y=new Set,Ue=[];async function V(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Ke();let s=localStorage.getItem("service_map");if(!s){e.innerHTML=w("config","No service map configured.","Upload service-map.json in Settings.");return}let i=null;try{i=(JSON.parse(s).services?.cs||[]).find(p=>p.id==="dex-event-service")}catch{e.innerHTML=w("error","Invalid service map data.");return}if(!i){e.innerHTML=w("error","Event service not found in service map.");return}let o=i.domain==="0.0.0.0"?"127.0.0.1":i.domain,c=`http://${o}:${i.port}/events?ml=100&format=json&event.type=system.blueprint.generated`,v=`http://${o}:${i.port}/analyst/status`;try{let l=await fetch(v);if(l.ok){let p=await l.json(),h=document.getElementById("strategist-next-run");if(h&&p.strategist){let a=p.strategist.next_run,r=Math.floor(Date.now()/1e3),g=a-r;if(g<=0)h.textContent="Next T3: Ready (IDLE req)",h.style.color="#5eff5e";else{let m=Math.floor(g/60),f=g%60;h.textContent=`Next T3: ${m}m ${f}s`,h.style.color="#888"}}}}catch(l){console.error("Failed to fetch analyst status",l)}try{let l=await fetch(c);if(!l.ok)throw new Error("Service is offline or unreachable.");let h=(await l.json()).events||[];if(Ue=h,le=Date.now(),E(1,le),h.length===0){e.innerHTML=w("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),q(1,0);return}t&&(e.innerHTML="");let a=n=>{let d=n.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return null}let u=d.title||"Untitled Blueprint",y=d.summary||d.body||"No summary provided.",x=d.content||"",$=d.category||"architecture",b=d.affected_services||[],k=d.implementation_path||[],L=new Date(n.timestamp*1e3),j=L.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),ne=L.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=Y.has(n.id),U=D?"display: block;":"display: none;",I=document.createElement("div");I.className=`event-item notification-item event-border-purple cursor-pointer ${D?"expanded":""}`,I.dataset.blueprintId=n.id,I.onclick=function(S){if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(n.id);let N=this.querySelector(".event-details");N&&(N.style.display="none")}else{this.classList.add("expanded"),Y.add(n.id);let N=this.querySelector(".event-details");N&&(N.style.display="block")}};let T=b.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${b.join(", ")}</div>`:"",_="";k.length>0&&(_=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${k.map(S=>`<li>${M(S)}</li>`).join("")}
                        </ul>
                    </div>
                `),I.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${j}</span>
                    <span class="event-date">${ne}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${$.toUpperCase()}</div>
                    <div class="event-message">${u}</div>
                    <div class="event-details" style="${U}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${M(y)}
                        </div>
                        ${T}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${M(x)}</p>
                        </div>
                        ${_}
                    </div>
                </div>
            `;let A=I.querySelector(".close-details-btn");return A&&A.addEventListener("click",S=>{S.stopPropagation(),I.classList.remove("expanded");let O=I.querySelector(".event-details");O&&(O.style.display="none"),Y.delete(n.id)}),I},r=Array.from(e.children),g=new Map(r.map(n=>[n.dataset.blueprintId,n])),m=new Set(h.map(n=>n.id));r.forEach(n=>{let d=n.dataset.blueprintId;(!d||!m.has(d))&&n.remove()});let f=null;h.forEach((n,d)=>{let u=g.get(n.id);(!u||t)&&(u&&u.remove(),u=a(n),!u)||(d===0?e.firstElementChild!==u&&e.prepend(u):f&&f.nextElementSibling!==u&&f.after(u),f=u)}),q(1,h.length)}catch(l){console.error("Error fetching blueprints:",l),e.children.length===0&&(e.innerHTML=w("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function Ke(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),s=document.getElementById("blueprints-reset-strategist");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ue.forEach(i=>Y.add(i.id)),V(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),V(!0)},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=async()=>{let i=localStorage.getItem("service_map");if(!i)return;let c=(JSON.parse(i).services?.cs||[]).find(p=>p.id==="dex-event-service");if(!c)return;let l=`http://${c.domain==="0.0.0.0"?"127.0.0.1":c.domain}:${c.port}/analyst/reset?tier=strategist`;s.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(l,{method:"POST"}),setTimeout(()=>{s.innerHTML="<i class='bx bx-check'></i> Reset Done",setTimeout(()=>{s.innerHTML="<i class='bx bx-refresh'></i> Reset Strategist"},2e3)},500),V()}catch(p){console.error("Failed to reset strategist",p),s.innerHTML="<i class='bx bx-error'></i> Failed"}},s.dataset.listenerAttached="true")}var Oe=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),qe=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),Pe=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':w("config","No service map configured.","Upload service-map.json in Settings."),re=null,ce=null,de=null;async function Fe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(c=>c.id==="dex-event-service");if(!e)return null;let i=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,o=await fetch(i);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function Xe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(c=>c.id==="dex-event-service");if(!e)return null;let i=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,o=await fetch(i);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function he(){let t=document.getElementById("services-widgets");if(!t)return;let e=await Fe();if(!e||!e.services){t.innerHTML=w("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}re=Date.now(),E(5,re);let s=e.services||[];Array.from(t.children).forEach(a=>{a.classList.contains("service-widget")||a.remove()});function i(a){return!a||a==="N/A"||a==="unknown"||a.trim()===""?"-":a}function o(a){if(!a||a==="N/A"||a==="unknown")return"-";let r=a.match(/^(\d+\.\d+\.\d+)/);return r?r[0]:a.split(".").slice(0,3).join(".")||"-"}function c(a){return!a||a.length<=28?a:a.substring(0,28)+"..."}function v(a){if(!a||a==="N/A"||a==="unknown")return"-";let r=a.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!r)return"-";let g=parseInt(r[1])||0,m=parseInt(r[2])||0,f=parseInt(r[3])||0,n=parseFloat(r[4])||0,d=g*86400+m*3600+f*60+n,u=Math.floor(d/86400);if(u>0)return`${u}d`;let y=Math.floor(d/3600);if(y>0)return`${y}h`;let x=Math.floor(d/60);return x>0?`${x}m`:`${Math.floor(d)}s`}function l(a){let r=a.status==="online",g=r?"service-widget-online":"service-widget-offline",m=r?"bx-check-circle":"bx-x-circle",f=r?"OK":"BAD",n=a.version?o(a.version.str):"-",d=a.cpu&&a.cpu!=="N/A"?a.cpu:"-",u=a.memory&&a.memory!=="N/A"?a.memory:"-",y=d!=="-"?"#00ff00":"#666",x=d!=="-"?"#fff":"#666",$=u!=="-"?"#00ff00":"#666",b=u!=="-"?"#fff":"#666",k=v(a.uptime),L="";return r?L=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${n}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${k}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${y};"></i>
                        <span style="color: ${x};">${d}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${$};"></i>
                        <span style="color: ${b};">${u}</span>
                    </div>
                </div>`:L='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${g}" data-service-id="${a.id}"><div class="service-widget-header"><i class="bx ${m}"></i><h3>${a.short_name||a.id}</h3><span class="service-widget-status">${f}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${c(a.domain&&a.port?`${a.domain}:${a.port}`:"")}</span></div>${L}</div></div>`}let p=new Map(Array.from(t.querySelectorAll(".service-widget")).map(a=>[a.dataset.serviceId,a])),h=new Set(s.map(a=>a.id));for(let[a,r]of p)h.has(a)||r.remove();s.forEach(a=>{let r=l(a),g=p.get(a.id);g?g.outerHTML!==r&&(g.outerHTML=r):t.insertAdjacentHTML("beforeend",r)})}async function ye(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Fe();if(!e){t.innerHTML=w("offline","Failed to load model status.");return}ce=Date.now(),E(4,ce);let s=e.models||[],i=e.whisper;Array.from(t.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function o(l){let p=l.status==="Ready";return`
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
                </div>`}function c(l){let p=l.status==="Downloaded",h=p?"service-widget-online":"service-widget-offline",a=p?"OK":"MISSING",r=p&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",g=l.name;return l.type==="custom"&&g.endsWith(":latest")&&(g=g.replace(":latest","")),`<div class="service-widget ${h}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${g}</h3><span class="service-widget-status">${a}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${r}</span></div></div></div>`}let v="";if(i&&(v+=o(i)),v+=s.map(c).join(""),!v){t.innerHTML=w("empty","No models found.");return}t.innerHTML!==v&&(t.innerHTML=v)}async function xe(){let t=document.getElementById("processes-widgets");if(!t)return;let e=await Xe();if(e===null){t.innerHTML=w("offline","Failed to load process status.");return}if(de=Date.now(),E(2,de),e.length===0){t.innerHTML=w("empty","No active processes."),q(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function s(c){let v=Math.floor(Date.now()/1e3-c.start_time),l=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",p=c.channel_id,h={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return h[p]?p=h[p]:/^\d+$/.test(p)&&(p=`Channel ${p}`),`
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
                </div>`}let i=new Map(Array.from(t.querySelectorAll(".process-widget")).map(c=>[c.dataset.channelId,c])),o=new Set(e.map(c=>c.channel_id));for(let[c,v]of i)o.has(c)||v.remove();e.forEach(c=>{let v=s(c),l=i.get(c.channel_id);l?l.outerHTML!==v&&(l.outerHTML=v):t.insertAdjacentHTML("beforeend",v)}),q(2,e.length)}function K(){let t=fe(),e=ie()||"user@easter.company",s={enabled:Notification.permission==="granted",supported:"Notification"in window},i=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(C).map(o=>`
                    <div class="theme-card ${t===o?"active":""}" data-theme="${o}">
                        <div class="theme-preview theme-preview-${o.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${o}</h3>
                            <p>${o===C.AUTO?"Automatic theme selection.":o===C.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${i?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function se(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let p=this.dataset.theme;ke(p),t.setContent(K()),se(t)})});function s(l,p,h,a,r,g,m){let f=document.getElementById(l),n=document.getElementById(p),d=document.getElementById(h),u=document.getElementById(a),y=document.getElementById(r);f&&n&&(f.onclick=()=>n.click(),n.onchange=x=>{let $=x.target.files[0];if(!$)return;if($.name!==m){u.textContent=`File must be named "${m}"`,u.style.display="block",n.value="";return}let b=new FileReader;b.onload=k=>{try{let L=JSON.parse(k.target.result);localStorage.setItem(g,JSON.stringify(L)),d.textContent=m,u.style.display="none",t.setContent(K()),se(t)}catch{u.textContent="Invalid JSON format",u.style.display="block",n.value=""}},b.onerror=()=>{u.textContent="Failed to read file",u.style.display="block",n.value=""},b.readAsText($)}),y&&(y.onclick=()=>{localStorage.removeItem(g),t.setContent(K()),se(t)})}s("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),s("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),s("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let i=document.getElementById("notifications-toggle");if(i){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(i.disabled=!0),i.onclick=async p=>{if(p.target.checked)try{await Notification.requestPermission()!=="granted"&&(p.target.checked=!1)}catch{p.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),p.target.checked=!0)}}let o=document.getElementById("microphone-toggle");async function c(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;o&&(o.disabled=!l||l.state==="denied",o.checked=l?.state==="granted");let p=document.querySelector("#microphone-setting-item .settings-item-description");p&&(p.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}c(),o&&!o.disabled&&(o.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),c()}catch{l.target.checked=!1,c()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let v=document.getElementById("analytics-toggle");v&&(v.checked=localStorage.getItem("easter_analytics_enabled")!=="false",v.onclick=l=>{let p=l.target.checked;localStorage.setItem("easter_analytics_enabled",p),window.EASTER_ANALYTICS_ENABLED=p,window.EASTER_DEBUG_MODE=p})}var Re=()=>`
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
`,R=new Set,We=[],X=null;async function H(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;Qe();let s=localStorage.getItem("service_map");if(!s)return;let i=null;try{i=(JSON.parse(s).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{return}if(!i)return;let c=`http://${i.domain==="0.0.0.0"?"127.0.0.1":i.domain}:${i.port}/roadmap`;try{let v=await fetch(c);if(!v.ok)throw new Error("Offline");let l=await v.json();if(We=l,l.length===0){e.innerHTML=w("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let p=m=>{let f=R.has(m.id),n=m.state==="draft",d=m.state==="published",u=m.state==="consumed",y="event-border-grey";d&&(y="event-border-blue"),u&&(y="event-border-purple");let $=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),b=document.createElement("div");b.className=`event-item notification-item ${y} cursor-pointer ${f?"expanded":""}`,b.dataset.itemId=m.id,b.onclick=L=>{if(L.target.closest("button"))return;b.classList.contains("expanded")?(b.classList.remove("expanded"),b.querySelector(".event-details").style.display="none",R.delete(m.id)):(b.classList.add("expanded"),b.querySelector(".event-details").style.display="block",R.add(m.id))};let k=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;return b.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${$.split(",")[1]}</span>
          <span class="event-date">${$.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${k}</div>
          <div class="event-message" style="white-space: pre-wrap;">${M(m.content)}</div>
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
      `,b.querySelector(".edit-btn")?.addEventListener("click",()=>Ze(m)),b.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>et(m)),b.querySelector(".delete-btn")?.addEventListener("click",()=>tt(m.id)),b.querySelector(".close-details-btn")?.addEventListener("click",L=>{L.stopPropagation(),b.classList.remove("expanded"),b.querySelector(".event-details").style.display="none",R.delete(m.id)}),b},h=Array.from(e.children),a=new Map(h.map(m=>[m.dataset.itemId,m])),r=new Set(l.map(m=>m.id));h.forEach(m=>{let f=m.dataset.itemId;(!f||!r.has(f))&&m.remove()});let g=null;l.forEach((m,f)=>{let n=a.get(m.id);(!n||t)&&(n&&n.remove(),n=p(m),!n)||(f===0?e.firstElementChild!==n&&e.prepend(n):g&&g.nextElementSibling!==n&&g.after(n),g=n)})}catch{e.innerHTML=w("error","Failed to load roadmap.")}}function Qe(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),s=document.getElementById("roadmap-cancel"),i=document.getElementById("roadmap-expand-all"),o=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{X=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",X=null},s.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let c=document.getElementById("roadmap-editor-input").value;if(!c.trim())return;let l=JSON.parse(localStorage.getItem("service_map")).services.cs.find(r=>r.id==="dex-event-service"),p=l.domain==="0.0.0.0"?"127.0.0.1":l.domain,h=X?`http://${p}:${l.port}/roadmap/${X}`:`http://${p}:${l.port}/roadmap`,a=X?"PATCH":"POST";try{await fetch(h,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c})}),document.getElementById("roadmap-editor-container").style.display="none",H(!0)}catch(r){console.error(r)}},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{We.forEach(c=>R.add(c.id)),H(!0)},i.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{R.clear(),H(!0)},o.dataset.listenerAttached="true")}function Ze(t){X=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function et(t){let e=t.state==="published"?"draft":"published",i=JSON.parse(localStorage.getItem("service_map")).services.cs.find(c=>c.id==="dex-event-service"),o=i.domain==="0.0.0.0"?"127.0.0.1":i.domain;try{await fetch(`http://${o}:${i.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),H(!0)}catch(c){console.error(c)}}async function tt(t){if(!confirm("Delete this roadmap item?"))return;let s=JSON.parse(localStorage.getItem("service_map")).services.cs.find(o=>o.id==="dex-event-service"),i=s.domain==="0.0.0.0"?"127.0.0.1":s.domain;try{await fetch(`http://${i}:${s.port}/roadmap/${t}`,{method:"DELETE"}),R.delete(t),H(!0)}catch(o){console.error(o)}}function ze(){Ae(),Ee();let t=_e();Le(t),Te();let e=document.querySelector("footer"),s=null;function i(){s=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(r=>r.classList.remove("active","inactive"))}function o(r,g=null){let m=s&&s.id===r.id;s&&s.close(!m),m?s=null:setTimeout(()=>{r.open(),s=r,document.querySelectorAll(".nav-right i").forEach(f=>{let n=f===g;f.classList.toggle("active",n),f.classList.toggle("inactive",!n&&g)}),e?.classList.add("hide")},s?220:0)}async function c(){await Promise.all([he(),ye(),te(),xe(),F(),V(),be()]);let r=setInterval(()=>{if(!a.isOpen())return clearInterval(r);E(4,ge),E(3,z),E(5,ce),E(6,re),E(2,de),E(1,le),E(0,G)},1e3),g=setInterval(()=>{if(!a.isOpen())return clearInterval(g);te(),xe(),F(),V(),be()},3e3),m=setInterval(()=>{if(!a.isOpen())return clearInterval(m);he(),ye()},6e4)}async function v(){await H();let r=setInterval(()=>{if(!p.isOpen())return clearInterval(r);H()},5e3)}let l=ee({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:i}),p=ee({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${ie()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:Re(),"data-tab-index":1}],icon:"bx-user",onClose:i,onOpen:()=>setTimeout(v,100)}),h=ee({id:"settings-window",title:"Settings",content:K(),icon:"bx-cog",onClose:i,onOpen:()=>{h.setContent(K()),setTimeout(()=>se(h),50)}}),a=ee({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:He(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:je(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Pe(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Ne(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Ce(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:qe(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Oe(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:i,onOpen:()=>setTimeout(c,100)});t?(document.getElementById("user-icon")?.addEventListener("click",r=>o(p,r.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",r=>o(a,r.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",r=>o(h,r.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{o(l),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",r=>{r.preventDefault();try{Ie(document.getElementById("email-input").value),window.location.reload()}catch(g){let m=document.getElementById("login-error");m&&(m.textContent=g.message,m.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ze):ze();})();
//# sourceMappingURL=dex.f23b73e4.js.map
