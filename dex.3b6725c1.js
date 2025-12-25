(()=>{function Ee(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Le(t=!1){let a=`
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
    `,o=document.createElement("nav");o.innerHTML=a,document.body.prepend(o)}function Te(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function Z(t){let e=null,a=t.onClose||null,o=t.onOpen||null;function l(){if(e){e.classList.add("open"),window.addEventListener("resize",v),o&&setTimeout(o,10);return}let i=document.getElementById("windows-container");i||(i=document.createElement("div"),i.id="windows-container",i.className="windows-container",document.body.appendChild(i)),e=document.createElement("div"),e.id=t.id,e.className="window";let n=t.icon||"bx-window",m="",r="",c;t.tabs&&t.tabs.length>0?(m=`<div class="tab-bar">${t.tabs.map((y,w)=>{let b;return y.icon?b=`<i class="bx ${y.icon}"></i>`:y.title&&y.title.length>0?b=`<span class="tab-glyph">${y.title.charAt(0).toUpperCase()}</span>`:b='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${w===0?"active":""}" data-tab-index="${w}">
                        ${b}
                        <span class="tab-title">${y.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${w}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,c=`<div class="window-content">${t.tabs.map((y,w)=>`<div class="tab-content ${w===0?"active":""}" data-tab-content="${w}">${y.content}</div>`).join("")}</div>`):(t.title&&(r=`<div class="window-title">${t.title}</div>`),c=`<div class="window-content">${t.content}</div>`);let s=`
            <div class="window-header">
                <i class="bx ${n}"></i>
                ${m}
                ${r}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=s+c,i.appendChild(e);let p=e.querySelector(".window-close");p&&p.addEventListener("click",f=>{f.stopPropagation(),d()}),window.addEventListener("resize",v),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(h=>{h.addEventListener("click",()=>{let y=h.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),h.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${y}"]`).classList.add("active"),u(h,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function v(){if(!e||!e.classList.contains("open"))return;let i=e.querySelector(".tab.active");i&&u(i,e)}function u(i,n){setTimeout(()=>{let m=n.querySelector(".tab-bar");if(m){let r=Array.from(m.querySelectorAll(".tab")),c=r.indexOf(i),s=m.clientWidth,p=r[Math.max(0,c-2)],f=r[Math.min(r.length-1,c+2)],h=p.offsetLeft-m.offsetLeft-25,w=f.offsetLeft+f.offsetWidth-m.offsetLeft+25-h,b;w<=s?b=h-(s-w)/2:b=i.offsetLeft-m.offsetLeft-s/2+i.offsetWidth/2,m.scrollTo({left:b,behavior:"smooth"})}},350)}function d(i=!1){e&&(window.removeEventListener("resize",v),i?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function g(i){if(e){let n=e.querySelector(".window-content");n&&(n.innerHTML=i)}}function x(){return e&&e.classList.contains("open")}return{open:l,close:d,setContent:g,isOpen:x,id:t.id}}var ve="easter_user_email";function _e(){return localStorage.getItem(ve)!==null}function ne(){return localStorage.getItem(ve)}function Ie(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ve,t.trim())}var Me="easter_theme",C={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ge(){return localStorage.getItem(Me)||C.AUTO}function Je(){let t=window.innerWidth,e=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?C.ANIMATED:(t===1920&&e===1080&&a||t<=1920||e<=1080,C.DEFAULT)}function ke(t){if(!Object.values(C).includes(t))throw new Error("Invalid theme");localStorage.setItem(Me,t),fe(t)}function fe(t,e=!1){let a=document.body,o=t===C.AUTO?Je():t;if(e||(a.classList.add("theme-transitioning"),setTimeout(()=>{a.classList.remove("theme-transitioning")},300)),Object.values(C).forEach(l=>{a.classList.remove(`theme-${l}`)}),a.classList.add(`theme-${t}`),o===C.ANIMATED){if(!document.querySelector(".background")){let l=document.createElement("div");l.className="background",document.body.prepend(l)}}else{let l=document.querySelector(".background");l&&(e?l.remove():(l.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{l.remove()},400)))}}function Ae(){let t=ge();if(fe(t,!0),t===C.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{fe(C.AUTO)},300)})}}function W(t,e,a=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",v=a?`<p class="placeholder-action">${a}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${l} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${v}
        </div>
    `}function Ce(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var be=null;async function he(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=W("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let a;try{a=JSON.parse(e)}catch(u){return console.error("Error parsing service_map from localStorage:",u),t.classList.add("placeholder-active"),t.innerHTML=W("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let o=null;if(a&&typeof a.services=="object"){let u=["cs","be","th"];for(let d of u)if(Array.isArray(a.services[d])){let g=a.services[d].find(x=>x.short_name==="event"||x.id==="event"||x.id==="dex-event-service");if(g){o=g;break}}}if(!o)return t.classList.add("placeholder-active"),t.innerHTML=W("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/logs`;try{let u=await fetch(v);if(!u.ok)return t.classList.add("placeholder-active"),t.innerHTML=W("offline","Event service is offline.","Please ensure the event service is running."),!1;let d=await u.json();if(!d||d.length===0)return t.classList.add("placeholder-active"),t.innerHTML=W("empty","No logs found.","Service logs will appear here when available."),!1;let g=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],x=d.filter(n=>!g.includes(n.id));x.forEach(n=>{n.logs&&Array.isArray(n.logs)?n.logs.reverse():n.logs=[]}),x.reverse();let i=x.map(n=>{let m=n.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${n.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(m)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${m}</pre>
                </div>
            `}).join("");return t.innerHTML=i,document.querySelectorAll(".copy-logs-btn").forEach(n=>{n.addEventListener("click",()=>{let m=unescape(n.dataset.logs);navigator.clipboard.writeText(m).then(()=>{let r=n.querySelector("i");r.classList.remove("bx-copy"),r.classList.add("bx-check"),setTimeout(()=>{r.classList.remove("bx-check"),r.classList.add("bx-copy")},2e3)})})}),be=Date.now(),!0}catch(u){return console.error("Error fetching logs:",u),t.classList.add("placeholder-active"),t.innerHTML=W("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $(t,e,a=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",v=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${l} placeholder-icon'></i><p class="placeholder-message">${e}</p>${v}</div>`}function M(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function S(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let o=Date.now(),l=Math.floor((o-e)/1e3),v;l<60?v=`${l}s ago`:l<3600?v=`${Math.floor(l/60)}m ago`:v=`${Math.floor(l/3600)}h ago`,a.textContent=`Last updated: ${v}`}function O(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let o=a.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function ae(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;O(0,e)}var Ge={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Ne(t,e){let a=Ge[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),!a)return t;let o=a.replace(/\{(\w+)\}/g,(l,v)=>e[v]!==void 0&&e[v]!==null?e[v]:l);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var De=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,z=null,R=new Set,Be=[];async function ee(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ve();let a=localStorage.getItem("service_map");if(!a){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!o){e.innerHTML=$("error","Event service not found in service map.");return}let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let u=await fetch(v);if(!u.ok)throw new Error("Service is offline or unreachable.");let g=(await u.json()).events||[];if(Be=g,z=Date.now(),S(3,z),g.length===0){e.innerHTML=$("empty","No events found.");return}t&&(e.innerHTML="");let x=c=>{let s=c.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let p=s.type,f=p==="engagement.decision"||p==="messaging.bot.sent_message"||p==="messaging.user.sent_message"||p==="moderation.explicit_content.deleted"||p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.cli.command"||p==="system.analysis.audit",h="event-border-grey";f&&(p==="moderation.explicit_content.deleted"?h="event-border-red":p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.analysis.audit"?h="event-border-purple":p==="system.cli.command"?h="event-border-orange":h="event-border-blue");let y=f?"cursor-pointer":"",w=R.has(c.id),b=w?"expanded":"",k=w?"display: block;":"display: none;",I=new Date(c.timestamp*1e3),U=I.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),K=I.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=Ne(p,s),A="";if(f){let E="";if(p==="engagement.decision")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${s.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${s.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${s.engagement_raw||"None"}</pre>
                        </div>
                    `;else if(p==="messaging.bot.sent_message")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${s.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${s.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${s.response_raw||"None"}</pre>
                        </div>
                    `;else if(p==="moderation.explicit_content.deleted")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${s.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${M(s.raw_output)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.link.completed")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${s.url}" target="_blank" class="attachment-link">${s.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${M(s.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${M(s.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${M(s.summary)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.visual.completed"){let L="";s.base64_preview?L=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${s.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:s.url&&(L=`<div class="event-detail-block"><img src="${s.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${s.filename}</span>
                        </div>
                        ${L}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${M(s.description)||"None"}</pre>
                        </div>
                    `}else if(p==="system.cli.command")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${s.command||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${s.args||"None"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${s.status||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${s.duration||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${s.exit_code!==void 0?s.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${M(s.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(p==="system.analysis.audit")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${s.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${s.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${M(s.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${M(s.raw_input)}</pre>
                        </div>
                    `;else if(p==="messaging.user.sent_message"){let L="";s.attachments&&s.attachments.length>0&&(L=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${s.attachments.map(_=>{let B=_.content_type&&_.content_type.startsWith("image/"),pe=(_.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${B?`<div class="attachment-thumb-container"><img src="${_.url}" alt="${_.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${_.url}" target="_blank" class="attachment-link">${_.filename}</a>
                                        <span class="attachment-meta">${_.content_type} \u2022 ${pe}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${s.content||"(empty)"}</pre>
                        </div>
                        ${L}
                    `}A=`
                    <div class="event-details" style="${k}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${E}
                    </div>
                `}let N=document.createElement("div");if(N.className=`event-item ${h} ${y} ${b}`,N.dataset.eventId=c.id,N.onclick=function(E){if(!f)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),R.delete(c.id);let T=this.querySelector(".event-details");T&&(T.style.display="none")}else{this.classList.add("expanded"),R.add(c.id);let T=this.querySelector(".event-details");T&&(T.style.display="block")}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${U}</span>
                    <span class="event-date">${K}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${c.service}</div>
                    <div class="event-message">${D}</div>
                    ${A}
                </div>
            `,f){let E=N.querySelector(".close-details-btn");E&&E.addEventListener("click",L=>{L.stopPropagation();let T=L.target.closest(".event-item");if(T){T.classList.remove("expanded"),R.delete(c.id);let _=T.querySelector(".event-details");_&&(_.style.display="none")}})}return N},i=Array.from(e.children),n=new Map(i.map(c=>[c.dataset.eventId,c])),m=new Set(g.map(c=>c.id));i.forEach(c=>{let s=c.dataset.eventId;(!s||!m.has(s))&&c.remove()});let r=null;g.forEach((c,s)=>{let p=n.get(c.id);(!p||t)&&(p&&p.remove(),p=x(c),!p)||(s===0?e.firstElementChild!==p&&e.prepend(p):r&&r.nextElementSibling!==p&&r.after(p),r=p)}),z=Date.now(),S(3,z)}catch(u){console.error("Error fetching events:",u),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Ve(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Be.forEach(a=>R.add(a.id)),ee(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{R.clear(),ee(!0)},e.dataset.listenerAttached="true")}var He=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,J=null,q=new Set,ie=[];async function P(t=!1){let e=document.getElementById("notifications-list");if(!e)return;Ye(),t&&(e.innerHTML="<p>Updating...</p>");let a=localStorage.getItem("service_map");if(!a){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!o){e.innerHTML=$("error","Event service not found in service map.");return}let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let u=await fetch(v);if(!u.ok)throw new Error("Service is offline or unreachable.");let g=(await u.json()).events||[];J=Date.now(),S(0,J);let x=Date.now(),i=24*60*60*1e3,n=g.filter(f=>{let h=localStorage.getItem(`notification_read_ts_${f.id}`);if(!h)return!0;let y=parseInt(h);return x-y<i});if(ie=n,t&&(e.innerHTML=""),n.length===0){e.innerHTML=$("empty","No notifications yet."),ae();return}let m=f=>{let h=f.event;if(typeof h=="string")try{h=JSON.parse(h)}catch{return null}let y=h.title||"Untitled Notification",w=h.body||"No description provided.",b=h.priority||"low",k=!!h.alert,I=h.category||"system",U=h.related_event_ids||[],D=!!localStorage.getItem(`notification_read_ts_${f.id}`),A=new Date(f.timestamp*1e3),N=A.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),E=A.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),L=D?"event-border-grey":"event-border-blue";!D&&k&&(L="event-border-red"),D&&(b==="high"||b==="critical")?L="event-border-red":D&&b==="medium"&&(L="event-border-orange");let T=D?"notification-read":"notification-unread",_=q.has(f.id),B=_?"expanded":"",pe=_?"display: block;":"display: none;",we="",$e="";U.length>0&&($e=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${U.map(X=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${X.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),we=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${b==="high"||b==="critical"?"#ff4d4d":b==="medium"?"#ffa500":"#888"}">${b.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${M(w)}</p>
                </div>
                ${$e}
            `;let H=document.createElement("div");H.className=`event-item notification-item ${L} ${T} ${B} cursor-pointer`,H.dataset.notificationId=f.id,H.onclick=function(X){if(this.classList.contains("expanded")){this.classList.remove("expanded"),q.delete(f.id);let Q=this.querySelector(".event-details");Q&&(Q.style.display="none")}else{this.classList.add("expanded"),q.add(f.id);let Q=this.querySelector(".event-details");if(Q&&(Q.style.display="block"),!localStorage.getItem(`notification_read_ts_${f.id}`)){localStorage.setItem(`notification_read_ts_${f.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ue="event-border-grey";b==="high"||b==="critical"?ue="event-border-red":b==="medium"&&(ue="event-border-orange"),this.classList.add(ue),ae()}}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${N}</span>
                    <span class="event-date">${E}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${I.toUpperCase()} ${k?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${pe}">
                        <div class="event-details-header">
                            <h4>${k?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${we}
                    </div>
                </div>
            `;let Se=H.querySelector(".close-details-btn");return Se&&Se.addEventListener("click",X=>{X.stopPropagation(),H.classList.remove("expanded");let me=H.querySelector(".event-details");me&&(me.style.display="none"),q.delete(f.id)}),H},r=Array.from(e.children),c=new Map(r.map(f=>[f.dataset.notificationId,f])),s=new Set(n.map(f=>f.id));r.forEach(f=>{let h=f.dataset.notificationId;(!h||!s.has(h))&&f.remove()});let p=null;n.forEach((f,h)=>{let y=c.get(f.id);(!y||t)&&(y&&y.remove(),y=m(f),!y)||(h===0?e.firstElementChild!==y&&e.prepend(y):p&&p.nextElementSibling!==y&&p.after(y),p=y)}),J=Date.now(),S(0,J),ae()}catch(u){console.error("Error fetching notifications:",u),e.children.length===0&&(e.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function Ye(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),a=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ie.forEach(l=>{localStorage.getItem(`notification_read_ts_${l.id}`)||localStorage.setItem(`notification_read_ts_${l.id}`,Date.now().toString())}),P(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ie.forEach(l=>{q.add(l.id),localStorage.getItem(`notification_read_ts_${l.id}`)||localStorage.setItem(`notification_read_ts_${l.id}`,Date.now().toString())}),P(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{q.clear(),P(!0)},a.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let l=Date.now()-1728e5;ie.forEach(v=>{localStorage.setItem(`notification_read_ts_${v.id}`,l.toString())}),q.clear(),P(!0)},o.dataset.listenerAttached="true")}var je=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,oe=null,G=new Set,Ue=[];async function te(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Ke();let a=localStorage.getItem("service_map");if(!a){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!o){e.innerHTML=$("error","Event service not found in service map.");return}let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let u=await fetch(v);if(!u.ok)throw new Error("Service is offline or unreachable.");let g=(await u.json()).events||[];if(Ue=g,oe=Date.now(),S(1,oe),g.length===0){e.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),O(1,0);return}t&&(e.innerHTML="");let x=c=>{let s=c.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let p=s.title||"Untitled Blueprint",f=s.summary||s.body||"No summary provided.",h=s.content||"",y=s.category||"architecture",w=s.affected_services||[],b=s.implementation_path||[],k=new Date(c.timestamp*1e3),I=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),U=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),K=G.has(c.id),D=K?"display: block;":"display: none;",A=document.createElement("div");A.className=`event-item notification-item event-border-purple cursor-pointer ${K?"expanded":""}`,A.dataset.blueprintId=c.id,A.onclick=function(T){if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(c.id);let B=this.querySelector(".event-details");B&&(B.style.display="none")}else{this.classList.add("expanded"),G.add(c.id);let B=this.querySelector(".event-details");B&&(B.style.display="block")}};let N=w.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${w.join(", ")}</div>`:"",E="";b.length>0&&(E=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${b.map(T=>`<li>${M(T)}</li>`).join("")}
                        </ul>
                    </div>
                `),A.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${I}</span>
                    <span class="event-date">${U}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${y.toUpperCase()}</div>
                    <div class="event-message">${p}</div>
                    <div class="event-details" style="${D}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${M(f)}
                        </div>
                        ${N}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${M(h)}</p>
                        </div>
                        ${E}
                    </div>
                </div>
            `;let L=A.querySelector(".close-details-btn");return L&&L.addEventListener("click",T=>{T.stopPropagation(),A.classList.remove("expanded");let _=A.querySelector(".event-details");_&&(_.style.display="none"),G.delete(c.id)}),A},i=Array.from(e.children),n=new Map(i.map(c=>[c.dataset.blueprintId,c])),m=new Set(g.map(c=>c.id));i.forEach(c=>{let s=c.dataset.blueprintId;(!s||!m.has(s))&&c.remove()});let r=null;g.forEach((c,s)=>{let p=n.get(c.id);(!p||t)&&(p&&p.remove(),p=x(c),!p)||(s===0?e.firstElementChild!==p&&e.prepend(p):r&&r.nextElementSibling!==p&&r.after(p),r=p)}),O(1,g.length)}catch(u){console.error("Error fetching blueprints:",u),e.children.length===0&&(e.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function Ke(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ue.forEach(a=>G.add(a.id)),te(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{G.clear(),te(!0)},e.dataset.listenerAttached="true")}var Oe=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),qe=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),Pe=()=>localStorage.getItem("service_map")?`
        <div class="analyst-status-section" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; font-size: 1em; color: #fff;">Analyst Status</h3>
                <button id="analyst-reset-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em;"><i class='bx bx-refresh'></i> Reset Analyst</button>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">Next T1 (Guardian)</span>
                    <span id="analyst-t1-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">Next T2 (Architect)</span>
                    <span id="analyst-t2-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">Next T3 (Strategist)</span>
                    <span id="analyst-t3-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">System Idle</span>
                    <span id="analyst-idle-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
            </div>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>
    `:$("config","No service map configured.","Upload service-map.json in Settings."),le=null,re=null,ce=null;async function Fe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,l=await fetch(o);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function Xe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,l=await fetch(o);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function Qe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/analyst/status`,l=await fetch(o);return l.ok?await l.json():null}catch{return null}}async function ye(){let t=document.getElementById("services-widgets");if(!t)return;let e=await Fe();if(!e||!e.services){t.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}le=Date.now(),S(5,le);let a=e.services||[];Array.from(t.children).forEach(i=>{i.classList.contains("service-widget")||i.remove()});function o(i){return!i||i==="N/A"||i==="unknown"||i.trim()===""?"-":i}function l(i){if(!i||i==="N/A"||i==="unknown")return"-";let n=i.match(/^(\d+\.\d+\.\d+)/);return n?n[0]:i.split(".").slice(0,3).join(".")||"-"}function v(i){return!i||i.length<=28?i:i.substring(0,28)+"..."}function u(i){if(!i||i==="N/A"||i==="unknown")return"-";let n=i.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!n)return"-";let m=parseInt(n[1])||0,r=parseInt(n[2])||0,c=parseInt(n[3])||0,s=parseFloat(n[4])||0,p=m*86400+r*3600+c*60+s,f=Math.floor(p/86400);if(f>0)return`${f}d`;let h=Math.floor(p/3600);if(h>0)return`${h}h`;let y=Math.floor(p/60);return y>0?`${y}m`:`${Math.floor(p)}s`}function d(i){let n=i.status==="online",m=n?"service-widget-online":"service-widget-offline",r=n?"bx-check-circle":"bx-x-circle",c=n?"OK":"BAD",s=i.version?l(i.version.str):"-",p=i.cpu&&i.cpu!=="N/A"?i.cpu:"-",f=i.memory&&i.memory!=="N/A"?i.memory:"-",h=p!=="-"?"#00ff00":"#666",y=p!=="-"?"#fff":"#666",w=f!=="-"?"#00ff00":"#666",b=f!=="-"?"#fff":"#666",k=u(i.uptime),I="";return n?I=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${s}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${k}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${h};"></i>
                        <span style="color: ${y};">${p}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${w};"></i>
                        <span style="color: ${b};">${f}</span>
                    </div>
                </div>`:I='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${m}" data-service-id="${i.id}"><div class="service-widget-header"><i class="bx ${r}"></i><h3>${i.short_name||i.id}</h3><span class="service-widget-status">${c}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${v(i.domain&&i.port?`${i.domain}:${i.port}`:"")}</span></div>${I}</div></div>`}let g=new Map(Array.from(t.querySelectorAll(".service-widget")).map(i=>[i.dataset.serviceId,i])),x=new Set(a.map(i=>i.id));for(let[i,n]of g)x.has(i)||n.remove();a.forEach(i=>{let n=d(i),m=g.get(i.id);m?m.outerHTML!==n&&(m.outerHTML=n):t.insertAdjacentHTML("beforeend",n)})}async function xe(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Fe();if(!e){t.innerHTML=$("offline","Failed to load model status.");return}re=Date.now(),S(4,re);let a=e.models||[],o=e.whisper;Array.from(t.children).forEach(d=>{d.classList.contains("service-widget")||d.remove()});function l(d){let g=d.status==="Ready";return`
                <div class="service-widget ${g?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${g?"READY":"NOT FOUND"}</span>
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
                </div>`}function v(d){let g=d.status==="Downloaded",x=g?"service-widget-online":"service-widget-offline",i=g?"OK":"MISSING",n=g&&d.size>0?`${(d.size/1e9).toFixed(2)} GB`:"-",m=d.name;return d.type==="custom"&&m.endsWith(":latest")&&(m=m.replace(":latest","")),`<div class="service-widget ${x}" data-model-name="${d.name}"><div class="service-widget-header"><i class="bx ${g?"bx-check-circle":"bx-x-circle"}"></i><h3>${m}</h3><span class="service-widget-status">${i}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${d.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${n}</span></div></div></div>`}let u="";if(o&&(u+=l(o)),u+=a.map(v).join(""),!u){t.innerHTML=$("empty","No models found.");return}t.innerHTML!==u&&(t.innerHTML=u)}async function de(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),a=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),l=document.getElementById("analyst-idle-val"),v=document.getElementById("analyst-reset-btn");v&&!v.dataset.listenerAttached&&(v.onclick=async()=>{if(!localStorage.getItem("service_map"))return;let m=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(s=>s.id==="dex-event-service");if(!m)return;let c=`http://${m.domain==="0.0.0.0"?"127.0.0.1":m.domain}:${m.port}/analyst/reset?tier=all`;v.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(c,{method:"POST"}),setTimeout(()=>{v.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{v.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),de()}catch{v.innerHTML="<i class='bx bx-error'></i> Failed"}},v.dataset.listenerAttached="true");let u=await Qe();if(u){let n=Math.floor(Date.now()/1e3),m=(r,c)=>{let s=c-n;if(s<=0)r.textContent="Ready",r.style.color="#5eff5e";else{let p=Math.floor(s/60),f=s%60;r.textContent=`${p}m ${f}s`,r.style.color="#fff"}};if(e&&u.guardian&&m(e,u.guardian.next_run),a&&u.architect&&m(a,u.architect.next_run),o&&u.strategist&&m(o,u.strategist.next_run),l&&u.system_idle_time!==void 0){let r=u.system_idle_time,c=Math.floor(r/60),s=r%60;l.textContent=`${c}m ${s}s`,r>300?l.style.color="#5eff5e":r>60?l.style.color="#ffa500":l.style.color="#fff"}}else e&&(e.textContent="Offline"),a&&(a.textContent="Offline"),o&&(o.textContent="Offline"),l&&(l.textContent="Offline");let d=await Xe();if(d===null){t.innerHTML=$("offline","Failed to load process status.");return}if(ce=Date.now(),S(2,ce),d.length===0){t.innerHTML=$("empty","No active processes."),O(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function g(n){let m=Math.floor(Date.now()/1e3-n.start_time),r=n.retries>0?`<span class="process-retry-badge">Retry ${n.retries}</span>`:"",c=n.channel_id,s={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return s[c]?c=s[c]:/^\d+$/.test(c)&&(c=`Channel ${c}`),`
                <div class="service-widget process-widget" data-channel-id="${n.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>${c}</h3>
                        ${r}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${n.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${m}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${n.pid}</span>
                        </div>
                    </div>
                </div>`}let x=new Map(Array.from(t.querySelectorAll(".process-widget")).map(n=>[n.dataset.channelId,n])),i=new Set(d.map(n=>n.channel_id));for(let[n,m]of x)i.has(n)||m.remove();d.forEach(n=>{let m=g(n),r=x.get(n.channel_id);r?r.outerHTML!==m&&(r.outerHTML=m):t.insertAdjacentHTML("beforeend",m)}),O(2,d.length)}function V(){let t=ge(),e=ne()||"user@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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
                            <span class="settings-item-description">${a.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${a.enabled?"checked":""} ${a.supported?"":"disabled"}>
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
            </div>`}function se(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(d=>{d.addEventListener("click",function(){let g=this.dataset.theme;ke(g),t.setContent(V()),se(t)})});function a(d,g,x,i,n,m,r){let c=document.getElementById(d),s=document.getElementById(g),p=document.getElementById(x),f=document.getElementById(i),h=document.getElementById(n);c&&s&&(c.onclick=()=>s.click(),s.onchange=y=>{let w=y.target.files[0];if(!w)return;if(w.name!==r){f.textContent=`File must be named "${r}"`,f.style.display="block",s.value="";return}let b=new FileReader;b.onload=k=>{try{let I=JSON.parse(k.target.result);localStorage.setItem(m,JSON.stringify(I)),p.textContent=r,f.style.display="none",t.setContent(V()),se(t)}catch{f.textContent="Invalid JSON format",f.style.display="block",s.value=""}},b.onerror=()=>{f.textContent="Failed to read file",f.style.display="block",s.value=""},b.readAsText(w)}),h&&(h.onclick=()=>{localStorage.removeItem(m),t.setContent(V()),se(t)})}a("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),a("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),a("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let d="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!d||d.state==="denied")&&(o.disabled=!0),o.onclick=async g=>{if(g.target.checked)try{await Notification.requestPermission()!=="granted"&&(g.target.checked=!1)}catch{g.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),g.target.checked=!0)}}let l=document.getElementById("microphone-toggle");async function v(){let d="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;l&&(l.disabled=!d||d.state==="denied",l.checked=d?.state==="granted");let g=document.querySelector("#microphone-setting-item .settings-item-description");g&&(g.textContent=d?d.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}v(),l&&!l.disabled&&(l.onclick=async d=>{if(d.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),v()}catch{d.target.checked=!1,v()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),d.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=d=>{let g=d.target.checked;localStorage.setItem("easter_analytics_enabled",g),window.EASTER_ANALYTICS_ENABLED=g,window.EASTER_DEBUG_MODE=g})}var We=()=>`
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
`,F=new Set,ze=[],Y=null;async function j(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;Ze();let a=localStorage.getItem("service_map");if(!a)return;let o=null;try{o=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{return}if(!o)return;let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/roadmap`;try{let u=await fetch(v);if(!u.ok)throw new Error("Offline");let d=await u.json();if(ze=d,d.length===0){e.innerHTML=$("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let g=r=>{let c=F.has(r.id),s=r.state==="draft",p=r.state==="published",f=r.state==="consumed",h="event-border-grey";p&&(h="event-border-blue"),f&&(h="event-border-purple");let w=new Date(r.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),b=document.createElement("div");b.className=`event-item notification-item ${h} cursor-pointer ${c?"expanded":""}`,b.dataset.itemId=r.id,b.onclick=I=>{if(I.target.closest("button"))return;b.classList.contains("expanded")?(b.classList.remove("expanded"),b.querySelector(".event-details").style.display="none",F.delete(r.id)):(b.classList.add("expanded"),b.querySelector(".event-details").style.display="block",F.add(r.id))};let k=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${r.state.toUpperCase()}]</span>`;return b.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${w.split(",")[1]}</span>
          <span class="event-date">${w.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${k}</div>
          <div class="event-message" style="white-space: pre-wrap;">${M(r.content)}</div>
          <div class="event-details" style="${c?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${f?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${p?"bx-pause":"bx-rocket"}'></i> ${p?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${f?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(r.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,b.querySelector(".edit-btn")?.addEventListener("click",()=>et(r)),b.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>tt(r)),b.querySelector(".delete-btn")?.addEventListener("click",()=>st(r.id)),b.querySelector(".close-details-btn")?.addEventListener("click",I=>{I.stopPropagation(),b.classList.remove("expanded"),b.querySelector(".event-details").style.display="none",F.delete(r.id)}),b},x=Array.from(e.children),i=new Map(x.map(r=>[r.dataset.itemId,r])),n=new Set(d.map(r=>r.id));x.forEach(r=>{let c=r.dataset.itemId;(!c||!n.has(c))&&r.remove()});let m=null;d.forEach((r,c)=>{let s=i.get(r.id);(!s||t)&&(s&&s.remove(),s=g(r),!s)||(c===0?e.firstElementChild!==s&&e.prepend(s):m&&m.nextElementSibling!==s&&m.after(s),m=s)})}catch{e.innerHTML=$("error","Failed to load roadmap.")}}function Ze(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),l=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Y=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",Y=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let v=document.getElementById("roadmap-editor-input").value;if(!v.trim())return;let d=JSON.parse(localStorage.getItem("service_map")).services.cs.find(n=>n.id==="dex-event-service"),g=d.domain==="0.0.0.0"?"127.0.0.1":d.domain,x=Y?`http://${g}:${d.port}/roadmap/${Y}`:`http://${g}:${d.port}/roadmap`,i=Y?"PATCH":"POST";try{await fetch(x,{method:i,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:v})}),document.getElementById("roadmap-editor-container").style.display="none",j(!0)}catch(n){console.error(n)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{ze.forEach(v=>F.add(v.id)),j(!0)},o.dataset.listenerAttached="true"),l&&!l.dataset.listenerAttached&&(l.onclick=()=>{F.clear(),j(!0)},l.dataset.listenerAttached="true")}function et(t){Y=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function tt(t){let e=t.state==="published"?"draft":"published",o=JSON.parse(localStorage.getItem("service_map")).services.cs.find(v=>v.id==="dex-event-service"),l=o.domain==="0.0.0.0"?"127.0.0.1":o.domain;try{await fetch(`http://${l}:${o.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),j(!0)}catch(v){console.error(v)}}async function st(t){if(!confirm("Delete this roadmap item?"))return;let a=JSON.parse(localStorage.getItem("service_map")).services.cs.find(l=>l.id==="dex-event-service"),o=a.domain==="0.0.0.0"?"127.0.0.1":a.domain;try{await fetch(`http://${o}:${a.port}/roadmap/${t}`,{method:"DELETE"}),F.delete(t),j(!0)}catch(l){console.error(l)}}function Re(){Ae(),Ee();let t=_e();Le(t),Te();let e=document.querySelector("footer"),a=null;function o(){a=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(n=>n.classList.remove("active","inactive"))}function l(n,m=null){let r=a&&a.id===n.id;a&&a.close(!r),r?a=null:setTimeout(()=>{n.open(),a=n,document.querySelectorAll(".nav-right i").forEach(c=>{let s=c===m;c.classList.toggle("active",s),c.classList.toggle("inactive",!s&&m)}),e?.classList.add("hide")},a?220:0)}async function v(){await Promise.all([ye(),xe(),ee(),de(),P(),te(),he()]);let n=setInterval(()=>{if(!i.isOpen())return clearInterval(n);S(4,be),S(3,z),S(5,re),S(6,le),S(2,ce),S(1,oe),S(0,J)},1e3),m=setInterval(()=>{if(!i.isOpen())return clearInterval(m);ee(),de(),P(),te(),he()},3e3),r=setInterval(()=>{if(!i.isOpen())return clearInterval(r);ye(),xe()},6e4)}async function u(){await j();let n=setInterval(()=>{if(!g.isOpen())return clearInterval(n);j()},5e3)}let d=Z({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),g=Z({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${ne()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:We(),"data-tab-index":1}],icon:"bx-user",onClose:o,onOpen:()=>setTimeout(u,100)}),x=Z({id:"settings-window",title:"Settings",content:V(),icon:"bx-cog",onClose:o,onOpen:()=>{x.setContent(V()),setTimeout(()=>se(x),50)}}),i=Z({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:He(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:je(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Pe(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:De(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Ce(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:qe(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Oe(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:o,onOpen:()=>setTimeout(v,100)});t?(document.getElementById("user-icon")?.addEventListener("click",n=>l(g,n.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",n=>l(i,n.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",n=>l(x,n.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{l(d),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{Ie(document.getElementById("email-input").value),window.location.reload()}catch(m){let r=document.getElementById("login-error");r&&(r.textContent=m.message,r.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Re):Re();})();
//# sourceMappingURL=dex.3b6725c1.js.map
