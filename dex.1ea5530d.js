(()=>{function Te(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ie(t=!1){let a=`
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
    `,r=document.createElement("nav");r.innerHTML=a,document.body.prepend(r)}function _e(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function Z(t){let e=null,a=t.onClose||null,r=t.onOpen||null;function o(){if(e){e.classList.add("open"),window.addEventListener("resize",u),r&&setTimeout(r,10);return}let b=document.getElementById("windows-container");b||(b=document.createElement("div"),b.id="windows-container",b.className="windows-container",document.body.appendChild(b)),e=document.createElement("div"),e.id=t.id,e.className="window";let c=t.icon||"bx-window",s="",i="",l;t.tabs&&t.tabs.length>0?(s=`<div class="tab-bar">${t.tabs.map((L,S)=>{let h;return L.icon?h=`<i class="bx ${L.icon}"></i>`:L.title&&L.title.length>0?h=`<span class="tab-glyph">${L.title.charAt(0).toUpperCase()}</span>`:h='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${S===0?"active":""}" data-tab-index="${S}">
                        ${h}
                        <span class="tab-title">${L.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${S}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,l=`<div class="window-content">${t.tabs.map((L,S)=>`<div class="tab-content ${S===0?"active":""}" data-tab-content="${S}">${L.content}</div>`).join("")}</div>`):(t.title&&(i=`<div class="window-title">${t.title}</div>`),l=`<div class="window-content">${t.content}</div>`);let n=`
            <div class="window-header">
                <i class="bx ${c}"></i>
                ${s}
                ${i}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=n+l,b.appendChild(e);let p=e.querySelector(".window-close");p&&p.addEventListener("click",$=>{$.stopPropagation(),d()}),window.addEventListener("resize",u),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(y=>{y.addEventListener("click",()=>{let L=y.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(S=>S.classList.remove("active")),y.classList.add("active"),e.querySelectorAll(".tab-content").forEach(S=>S.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${L}"]`).classList.add("active"),m(y,e)})}),setTimeout(()=>{e.classList.add("open"),r&&r()},10)}function u(){if(!e||!e.classList.contains("open"))return;let b=e.querySelector(".tab.active");b&&m(b,e)}function m(b,c){setTimeout(()=>{let s=c.querySelector(".tab-bar");if(s){let i=Array.from(s.querySelectorAll(".tab")),l=i.indexOf(b),n=s.clientWidth,p=i[Math.max(0,l-2)],$=i[Math.min(i.length-1,l+2)],y=p.offsetLeft-s.offsetLeft-25,S=$.offsetLeft+$.offsetWidth-s.offsetLeft+25-y,h;S<=n?h=y-(n-S)/2:h=b.offsetLeft-s.offsetLeft-n/2+b.offsetWidth/2,s.scrollTo({left:h,behavior:"smooth"})}},350)}function d(b=!1){e&&(window.removeEventListener("resize",u),b?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function f(b){if(e){let c=e.querySelector(".window-content");c&&(c.innerHTML=b)}}function w(){return e&&e.classList.contains("open")}return{open:o,close:d,setContent:f,isOpen:w,id:t.id}}var ge="easter_user_email";function Me(){return localStorage.getItem(ge)!==null}function ae(){return localStorage.getItem(ge)}function ke(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ge,t.trim())}var Ce="easter_theme",H={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function he(){return localStorage.getItem(Ce)||H.AUTO}function Qe(){let t=window.innerWidth,e=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?H.ANIMATED:(t===1920&&e===1080&&a||t<=1920||e<=1080,H.DEFAULT)}function Ae(t){if(!Object.values(H).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ce,t),be(t)}function be(t,e=!1){let a=document.body,r=t===H.AUTO?Qe():t;if(e||(a.classList.add("theme-transitioning"),setTimeout(()=>{a.classList.remove("theme-transitioning")},300)),Object.values(H).forEach(o=>{a.classList.remove(`theme-${o}`)}),a.classList.add(`theme-${t}`),r===H.ANIMATED){if(!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else{let o=document.querySelector(".background");o&&(e?o.remove():(o.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{o.remove()},400)))}}function Ne(){let t=he();if(be(t,!0),t===H.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{be(H.AUTO)},300)})}}function z(t,e,a=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",u=a?`<p class="placeholder-action">${a}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${o} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${u}
        </div>
    `}function De(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ye=null;async function ie(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let a;try{a=JSON.parse(e)}catch(m){return console.error("Error parsing service_map from localStorage:",m),t.classList.add("placeholder-active"),t.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let r=null;if(a&&typeof a.services=="object"){let m=["cs","be","th"];for(let d of m)if(Array.isArray(a.services[d])){let f=a.services[d].find(w=>w.short_name==="event"||w.id==="event"||w.id==="dex-event-service");if(f){r=f;break}}}if(!r)return t.classList.add("placeholder-active"),t.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let o=r.domain==="0.0.0.0"?"127.0.0.1":r.domain,u=`http://${o}:${r.port}/logs`;try{let m=await fetch(u);if(!m.ok)return t.classList.add("placeholder-active"),t.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let d=await m.json();if(!d||d.length===0)return t.classList.add("placeholder-active"),t.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let f=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],w=d.filter(c=>!f.includes(c.id));w.forEach(c=>{c.logs&&Array.isArray(c.logs)?c.logs.reverse():c.logs=[]}),w.reverse();let b=w.map(c=>{let s=c.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${c.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(s)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${c.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${s}</pre>
                </div>
            `}).join("");return t.innerHTML=b,document.querySelectorAll(".copy-logs-btn").forEach(c=>{c.addEventListener("click",()=>{let s=unescape(c.dataset.logs);navigator.clipboard.writeText(s).then(()=>{let i=c.querySelector("i");i.classList.remove("bx-copy"),i.classList.add("bx-check"),setTimeout(()=>{i.classList.remove("bx-check"),i.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(c=>{c.addEventListener("click",async()=>{let s=c.dataset.serviceId;if(!confirm(`Are you sure you want to clear logs for ${s}?`))return;let i=`http://${o}:${r.port}/logs?service_id=${s}`;try{(await fetch(i,{method:"DELETE"})).ok?ie():console.error("Failed to clear logs")}catch(l){console.error("Error clearing logs:",l)}})}),ye=Date.now(),!0}catch(m){return console.error("Error fetching logs:",m),t.classList.add("placeholder-active"),t.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function E(t,e,a=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",u=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${o} placeholder-icon'></i><p class="placeholder-message">${e}</p>${u}</div>`}function A(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let r=Date.now(),o=Math.floor((r-e)/1e3),u;o<60?u=`${o}s ago`:o<3600?u=`${Math.floor(o/60)}m ago`:u=`${Math.floor(o/3600)}h ago`,a.textContent=`Last updated: ${u}`}function P(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let r=a.querySelector(".notification-badge");r&&(e>0?(r.textContent=e>9?"9+":e,r.style.display="flex"):r.style.display="none")}function oe(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;P(0,e)}var Ze={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function He(t,e){let a=Ze[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),!a)return t;let r=a.replace(/\{(\w+)\}/g,(o,u)=>e[u]!==void 0&&e[u]!==null?e[u]:o);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(r+=` (Translation: ${e.english_translation})`),r}var Be=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,W=null,J=new Set,je=[];async function ee(t=!1){let e=document.getElementById("events-timeline");if(!e)return;et();let a=localStorage.getItem("service_map");if(!a){e.innerHTML=E("config","No service map configured.","Upload service-map.json in Settings.");return}let r=null;try{r=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=E("error","Invalid service map data.");return}if(!r){e.innerHTML=E("error","Event service not found in service map.");return}let u=`http://${r.domain==="0.0.0.0"?"127.0.0.1":r.domain}:${r.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let m=await fetch(u);if(!m.ok)throw new Error("Service is offline or unreachable.");let f=(await m.json()).events||[];if(je=f,W=Date.now(),_(3,W),f.length===0){e.innerHTML=E("empty","No events found.");return}t&&(e.innerHTML="");let w=l=>{let n=l.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let p=n.type,$=p==="engagement.decision"||p==="messaging.bot.sent_message"||p==="messaging.user.sent_message"||p==="moderation.explicit_content.deleted"||p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.cli.command"||p==="system.analysis.audit",y="event-border-grey";$&&(p==="moderation.explicit_content.deleted"?y="event-border-red":p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.analysis.audit"?y="event-border-purple":p==="system.cli.command"?y="event-border-orange":y="event-border-blue");let L=$?"cursor-pointer":"",S=J.has(l.id),h=S?"expanded":"",v=S?"display: block;":"display: none;",g=new Date(l.timestamp*1e3),x=g.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),B=g.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),C=He(p,n),M="";if($){let T="";if(p==="engagement.decision")T=`
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
                    `;else if(p==="messaging.bot.sent_message")T=`
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
                    `;else if(p==="moderation.explicit_content.deleted")T=`
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
                            <pre class="detail-pre">${A(n.raw_output)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.link.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${A(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${A(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${A(n.summary)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.visual.completed"){let D="";n.base64_preview?D=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(D=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${D}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${A(n.description)||"None"}</pre>
                        </div>
                    `}else if(p==="system.cli.command")T=`
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
                            <pre class="detail-pre">${A(n.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(p==="system.analysis.audit")T=`
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
                            <pre class="detail-pre">${A(n.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${A(n.raw_input)}</pre>
                        </div>
                    `;else if(p==="messaging.user.sent_message"){let D="";n.attachments&&n.attachments.length>0&&(D=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${n.attachments.map(k=>{let j=k.content_type&&k.content_type.startsWith("image/"),ue=(k.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${j?`<div class="attachment-thumb-container"><img src="${k.url}" alt="${k.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${k.url}" target="_blank" class="attachment-link">${k.filename}</a>
                                        <span class="attachment-meta">${k.content_type} \u2022 ${ue}</span>
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
                        ${D}
                    `}M=`
                    <div class="event-details" style="${v}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${T}
                    </div>
                `}let N=document.createElement("div");if(N.className=`event-item ${y} ${L} ${h}`,N.dataset.eventId=l.id,N.onclick=function(T){if(!$)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(l.id);let I=this.querySelector(".event-details");I&&(I.style.display="none")}else{this.classList.add("expanded"),J.add(l.id);let I=this.querySelector(".event-details");I&&(I.style.display="block")}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${x}</span>
                    <span class="event-date">${B}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${l.service}</div>
                    <div class="event-message">${C}</div>
                    ${M}
                </div>
            `,$){let T=N.querySelector(".close-details-btn");T&&T.addEventListener("click",D=>{D.stopPropagation();let I=D.target.closest(".event-item");if(I){I.classList.remove("expanded"),J.delete(l.id);let k=I.querySelector(".event-details");k&&(k.style.display="none")}})}return N},b=Array.from(e.children),c=new Map(b.map(l=>[l.dataset.eventId,l])),s=new Set(f.map(l=>l.id));b.forEach(l=>{let n=l.dataset.eventId;(!n||!s.has(n))&&l.remove()});let i=null;f.forEach((l,n)=>{let p=c.get(l.id);(!p||t)&&(p&&p.remove(),p=w(l),!p)||(n===0?e.firstElementChild!==p&&e.prepend(p):i&&i.nextElementSibling!==p&&i.after(p),i=p)}),W=Date.now(),_(3,W)}catch(m){console.error("Error fetching events:",m),e.children.length===0&&(e.innerHTML=E("offline","Failed to load events.","The event service may be offline or unreachable."))}}function et(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{je.forEach(a=>J.add(a.id)),ee(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),ee(!0)},e.dataset.listenerAttached="true")}var Ue=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,G=null,q=new Set,re=[];async function F(t=!1){let e=document.getElementById("notifications-list");if(!e)return;tt(),t&&(e.innerHTML="<p>Updating...</p>");let a=localStorage.getItem("service_map");if(!a){e.innerHTML=E("config","No service map configured.","Upload service-map.json in Settings.");return}let r=null;try{r=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=E("error","Invalid service map data.");return}if(!r){e.innerHTML=E("error","Event service not found in service map.");return}let u=`http://${r.domain==="0.0.0.0"?"127.0.0.1":r.domain}:${r.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let m=await fetch(u);if(!m.ok)throw new Error("Service is offline or unreachable.");let f=(await m.json()).events||[];G=Date.now(),_(0,G);let w=Date.now(),b=24*60*60*1e3,c=f.filter(v=>{let g=localStorage.getItem(`notification_read_ts_${v.id}`);if(!g)return!0;let x=parseInt(g);return w-x<b});c.sort((v,g)=>{let x=N=>{let T=N.event;if(typeof T=="string")try{T=JSON.parse(T)}catch{return"low"}return(T.priority||"low").toLowerCase()},B=N=>N==="critical"?4:N==="high"?3:N==="medium"?2:1,C=B(x(v)),M=B(x(g));return C!==M?M-C:g.timestamp-v.timestamp}),re=c;let s=v=>{let g=v.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return"low"}return(g.priority||"low").toLowerCase()},i=[],n=new Set(c.map(v=>s(v))).size>1;if(c.length>0){let v=null;c.forEach(g=>{let x=s(g);n&&x!==v&&(i.push({id:`divider-${x}`,type:"divider",label:x.toUpperCase()}),v=x),i.push(g)})}if(t&&(e.innerHTML=""),c.length===0){e.innerHTML=E("empty","No notifications yet."),oe();return}let p=v=>{let g=v.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let x=g.title||"Untitled Notification",B=g.body||"No description provided.",C=g.priority||"low",M=!!g.alert,N=g.category||"system",T=g.related_event_ids||[],I=!!localStorage.getItem(`notification_read_ts_${v.id}`),k=new Date(v.timestamp*1e3),j=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),ue=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),ne=I?"event-border-grey":"event-border-blue";!I&&M&&(ne="event-border-red"),I&&(C==="high"||C==="critical")?ne="event-border-red":I&&C==="medium"&&(ne="event-border-orange");let Ye=I?"notification-read":"notification-unread",$e=q.has(v.id),Ke=$e?"expanded":"",Xe=$e?"display: block;":"display: none;",Se="",Ee="";T.length>0&&(Ee=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${T.map(X=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${X.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),Se=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${C==="high"||C==="critical"?"#ff4d4d":C==="medium"?"#ffa500":"#888"}">${C.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${A(B)}</p>
                </div>
                ${Ee}
            `;let U=document.createElement("div");U.className=`event-item notification-item ${ne} ${Ye} ${Ke} cursor-pointer`,U.dataset.notificationId=v.id,U.onclick=function(X){if(this.classList.contains("expanded")){this.classList.remove("expanded"),q.delete(v.id);let Q=this.querySelector(".event-details");Q&&(Q.style.display="none")}else{this.classList.add("expanded"),q.add(v.id);let Q=this.querySelector(".event-details");if(Q&&(Q.style.display="block"),!localStorage.getItem(`notification_read_ts_${v.id}`)){localStorage.setItem(`notification_read_ts_${v.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ve="event-border-grey";C==="high"||C==="critical"?ve="event-border-red":C==="medium"&&(ve="event-border-orange"),this.classList.add(ve),oe()}}},U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${j}</span>
                    <span class="event-date">${ue}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${N.toUpperCase()} ${M?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${x}</div>
                    <div class="event-details" style="${Xe}">
                        <div class="event-details-header">
                            <h4>${M?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${Se}
                    </div>
                </div>
            `;let Le=U.querySelector(".close-details-btn");return Le&&Le.addEventListener("click",X=>{X.stopPropagation(),U.classList.remove("expanded");let fe=U.querySelector(".event-details");fe&&(fe.style.display="none"),q.delete(v.id)}),U},$=v=>{let g=document.createElement("div");g.className="notification-divider",g.dataset.notificationId=v.id;let x="#888888";return v.label==="CRITICAL"?x="#ff4d4d":v.label==="HIGH"?x="#ff8888":v.label==="MEDIUM"&&(x="#ffa500"),g.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${x}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,g.innerHTML=`<span style="white-space: nowrap;">${v.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${x}44, transparent); flex-grow: 1;"></div>`,g},y=Array.from(e.children),L=new Map(y.map(v=>[v.dataset.notificationId,v])),S=new Set(i.map(v=>v.id));y.forEach(v=>{let g=v.dataset.notificationId;(!g||!S.has(g))&&v.remove()});let h=null;i.forEach((v,g)=>{let x=L.get(v.id);(!x||t)&&(x&&x.remove(),v.type==="divider"?x=$(v):x=p(v),!x)||(g===0?e.firstElementChild!==x&&e.prepend(x):h&&h.nextElementSibling!==x&&h.after(x),h=x)}),G=Date.now(),_(0,G),oe()}catch(m){console.error("Error fetching notifications:",m),e.children.length===0&&(e.innerHTML=E("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function tt(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),a=document.getElementById("notif-close-all"),r=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{re.forEach(o=>{localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),F(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{re.forEach(o=>{q.add(o.id),localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),F(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{q.clear(),F(!0)},a.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{let o=Date.now()-1728e5;re.forEach(u=>{localStorage.setItem(`notification_read_ts_${u.id}`,o.toString())}),q.clear(),F(!0)},r.dataset.listenerAttached="true")}var Oe=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,le=null,V=new Set,Pe=[];async function te(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;st();let a=localStorage.getItem("service_map");if(!a){e.innerHTML=E("config","No service map configured.","Upload service-map.json in Settings.");return}let r=null;try{r=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=E("error","Invalid service map data.");return}if(!r){e.innerHTML=E("error","Event service not found in service map.");return}let u=`http://${r.domain==="0.0.0.0"?"127.0.0.1":r.domain}:${r.port}/events?ml=1000&format=json&event.type=system.blueprint.generated`;try{let m=await fetch(u);if(!m.ok)throw new Error("Service is offline or unreachable.");let f=(await m.json()).events||[];if(Pe=f,le=Date.now(),_(1,le),f.length===0){e.innerHTML=E("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),P(1,0);return}t&&(e.innerHTML="");let w=l=>{let n=l.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let p=n.title||"Untitled Blueprint",$=n.summary||n.body||"No summary provided.",y=n.content||"",L=n.category||"architecture",S=n.affected_services||[],h=n.implementation_path||[],v=new Date(l.timestamp*1e3),g=v.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),x=v.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),B=V.has(l.id),C=B?"display: block;":"display: none;",M=document.createElement("div");M.className=`event-item notification-item event-border-purple cursor-pointer ${B?"expanded":""}`,M.dataset.blueprintId=l.id,M.onclick=function(I){if(this.classList.contains("expanded")){this.classList.remove("expanded"),V.delete(l.id);let j=this.querySelector(".event-details");j&&(j.style.display="none")}else{this.classList.add("expanded"),V.add(l.id);let j=this.querySelector(".event-details");j&&(j.style.display="block")}};let N=S.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${S.join(", ")}</div>`:"",T="";h.length>0&&(T=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${h.map(I=>`<li>${A(I)}</li>`).join("")}
                        </ul>
                    </div>
                `),M.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${g}</span>
                    <span class="event-date">${x}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${L.toUpperCase()}</div>
                    <div class="event-message">${p}</div>
                    <div class="event-details" style="${C}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${A($)}
                        </div>
                        ${N}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${A(y)}</p>
                        </div>
                        ${T}
                    </div>
                </div>
            `;let D=M.querySelector(".close-details-btn");return D&&D.addEventListener("click",I=>{I.stopPropagation(),M.classList.remove("expanded");let k=M.querySelector(".event-details");k&&(k.style.display="none"),V.delete(l.id)}),M},b=Array.from(e.children),c=new Map(b.map(l=>[l.dataset.blueprintId,l])),s=new Set(f.map(l=>l.id));b.forEach(l=>{let n=l.dataset.blueprintId;(!n||!s.has(n))&&l.remove()});let i=null;f.forEach((l,n)=>{let p=c.get(l.id);(!p||t)&&(p&&p.remove(),p=w(l),!p)||(n===0?e.firstElementChild!==p&&e.prepend(p):i&&i.nextElementSibling!==p&&i.after(p),i=p)}),P(1,f.length)}catch(m){console.error("Error fetching blueprints:",m),e.children.length===0&&(e.innerHTML=E("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function st(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Pe.forEach(a=>V.add(a.id)),te(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{V.clear(),te(!0)},e.dataset.listenerAttached="true")}var Fe=()=>localStorage.getItem("service_map")?`
        <div class="hardware-status-section" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; font-size: 1em; color: #fff;">System Hardware</h3>
                <button id="hardware-refresh-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em;"><i class='bx bx-refresh'></i> Refresh</button>
            </div>
            <pre id="hardware-info-content" style="color: #ccc; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; white-space: pre-wrap; margin: 0; max-height: 200px; overflow-y: auto;">Loading hardware info...</pre>
        </div>
        <div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>
    `:E("config","No service map configured.","Upload service-map.json in Settings."),Re=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':E("config","No service map configured.","Upload service-map.json in Settings."),ze=()=>localStorage.getItem("service_map")?`
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
    `:E("config","No service map configured.","Upload service-map.json in Settings."),ce=null,de=null,pe=null;async function We(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(u=>u.id==="dex-event-service");if(!e)return null;let r=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,o=await fetch(r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function qe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(u=>u.id==="dex-event-service");if(!e)return null;let r=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system/hardware`,o=await fetch(r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching hardware data:",t),null}}async function nt(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(u=>u.id==="dex-event-service");if(!e)return null;let r=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,o=await fetch(r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function at(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(u=>u.id==="dex-event-service");if(!e)return null;let r=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/analyst/status`,o=await fetch(r);return o.ok?await o.json():null}catch{return null}}async function xe(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),a=document.getElementById("hardware-refresh-btn");if(e&&a&&(a.dataset.listenerAttached||(a.onclick=async()=>{a.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let s=await qe();s&&s.output?(e.textContent=s.output,a.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.textContent="Failed to load hardware info.",a.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},a.dataset.listenerAttached="true"),e.textContent==="Loading hardware info...")){let s=await qe();s&&s.output?e.textContent=s.output:e.textContent="Failed to load hardware info."}if(!t)return;let r=await We();if(!r||!r.services){t.innerHTML=E("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}ce=Date.now(),_(5,ce);let o=r.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function u(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function m(s){if(!s||s==="N/A"||s==="unknown")return"-";let i=s.match(/^(\d+\.\d+\.\d+)/);return i?i[0]:s.split(".").slice(0,3).join(".")||"-"}function d(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function f(s){if(!s||s==="N/A"||s==="unknown")return"-";let i=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!i)return"-";let l=parseInt(i[1])||0,n=parseInt(i[2])||0,p=parseInt(i[3])||0,$=parseFloat(i[4])||0,y=l*86400+n*3600+p*60+$,L=Math.floor(y/86400);if(L>0)return`${L}d`;let S=Math.floor(y/3600);if(S>0)return`${S}h`;let h=Math.floor(y/60);return h>0?`${h}m`:`${Math.floor(y)}s`}function w(s){let i=s.status==="online",l=i?"service-widget-online":"service-widget-offline",n=i?"bx-check-circle":"bx-x-circle",p=i?"OK":"BAD",$=s.version?m(s.version.str):"-",y=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",L=s.memory&&s.memory!=="N/A"?s.memory:"-",S=y!=="-"?"#00ff00":"#666",h=y!=="-"?"#fff":"#666",v=L!=="-"?"#00ff00":"#666",g=L!=="-"?"#fff":"#666",x=f(s.uptime),B="";return i?B=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${$}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${x}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${S};"></i>
                        <span style="color: ${h};">${y}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${v};"></i>
                        <span style="color: ${g};">${L}</span>
                    </div>
                </div>`:B='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${l}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${n}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${p}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${d(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${B}</div></div>`}let b=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),c=new Set(o.map(s=>s.id));for(let[s,i]of b)c.has(s)||i.remove();o.forEach(s=>{let i=w(s),l=b.get(s.id);l?l.outerHTML!==i&&(l.outerHTML=i):t.insertAdjacentHTML("beforeend",i)})}async function we(){let t=document.getElementById("models-widgets");if(!t)return;let e=await We();if(!e){t.innerHTML=E("offline","Failed to load model status.");return}de=Date.now(),_(4,de);let a=e.models||[],r=e.whisper;Array.from(t.children).forEach(d=>{d.classList.contains("service-widget")||d.remove()});function o(d){let f=d.status==="Ready";return`
                <div class="service-widget ${f?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${f?"READY":"NOT FOUND"}</span>
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
                </div>`}function u(d){let f=d.status==="Downloaded",w=f?"service-widget-online":"service-widget-offline",b=f?"OK":"MISSING",c=f&&d.size>0?`${(d.size/1e9).toFixed(2)} GB`:"-",s=d.name;return d.type==="custom"&&s.endsWith(":latest")&&(s=s.replace(":latest","")),`<div class="service-widget ${w}" data-model-name="${d.name}"><div class="service-widget-header"><i class="bx ${f?"bx-check-circle":"bx-x-circle"}"></i><h3>${s}</h3><span class="service-widget-status">${b}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${d.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${c}</span></div></div></div>`}let m="";if(r&&(m+=o(r)),m+=a.map(u).join(""),!m){t.innerHTML=E("empty","No models found.");return}t.innerHTML!==m&&(t.innerHTML=m)}async function me(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),a=document.getElementById("analyst-t2-val"),r=document.getElementById("analyst-t3-val"),o=document.getElementById("analyst-idle-val"),u=document.getElementById("analyst-reset-btn");u&&!u.dataset.listenerAttached&&(u.onclick=async()=>{if(!localStorage.getItem("service_map"))return;let s=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(n=>n.id==="dex-event-service");if(!s)return;let l=`http://${s.domain==="0.0.0.0"?"127.0.0.1":s.domain}:${s.port}/analyst/reset?tier=all`;u.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(l,{method:"POST"}),setTimeout(()=>{u.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{u.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),me()}catch{u.innerHTML="<i class='bx bx-error'></i> Failed"}},u.dataset.listenerAttached="true");let m=await at();if(m){let c=Math.floor(Date.now()/1e3),s=m.active_tier,i=(l,n,p)=>{if(s===p||p==="guardian"&&s==="tests"){l.textContent="Working",l.style.color="#bb86fc";return}let $=n-c;if($<=0)l.textContent="Ready",l.style.color="#5eff5e";else{let y=Math.floor($/60),L=$%60;l.textContent=`${y}m ${L}s`,l.style.color="#fff"}};if(e&&m.guardian&&i(e,m.guardian.next_run,"guardian"),a&&m.architect&&i(a,m.architect.next_run,"architect"),r&&m.strategist&&i(r,m.strategist.next_run,"strategist"),o&&m.system_idle_time!==void 0){let l=m.system_idle_time,n=Math.floor(l/60),p=l%60;o.textContent=`${n}m ${p}s`,l>300?o.style.color="#5eff5e":l>60?o.style.color="#ffa500":o.style.color="#fff"}}else[e,a,r,o].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let d=await nt();if(d===null){t.innerHTML=E("offline","Failed to load process status.");return}if(pe=Date.now(),_(2,pe),d.length===0){t.innerHTML=E("empty","No active processes."),P(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function f(c){let s=Math.floor(Date.now()/1e3-c.start_time),i=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",l=c.channel_id,n={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return n[l]?l=n[l]:/^\d+$/.test(l)&&(l=`Channel ${l}`),`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>${l}</h3>
                        ${i}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${c.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${s}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${c.pid}</span>
                        </div>
                    </div>
                </div>`}let w=new Map(Array.from(t.querySelectorAll(".process-widget")).map(c=>[c.dataset.channelId,c])),b=new Set(d.map(c=>c.channel_id));for(let[c,s]of w)b.has(c)||s.remove();d.forEach(c=>{let s=f(c),i=w.get(c.channel_id);i?i.outerHTML!==s&&(i.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),P(2,d.length)}function Y(){let t=he(),e=ae()||"user@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},r=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(H).map(o=>`
                    <div class="theme-card ${t===o?"active":""}" data-theme="${o}">
                        <div class="theme-preview theme-preview-${o.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${o}</h3>
                            <p>${o===H.AUTO?"Automatic theme selection.":o===H.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${r?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function se(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(d=>{d.addEventListener("click",function(){let f=this.dataset.theme;Ae(f),t.setContent(Y()),se(t)})});function a(d,f,w,b,c,s,i){let l=document.getElementById(d),n=document.getElementById(f),p=document.getElementById(w),$=document.getElementById(b),y=document.getElementById(c);l&&n&&(l.onclick=()=>n.click(),n.onchange=L=>{let S=L.target.files[0];if(!S)return;if(S.name!==i){$.textContent=`File must be named "${i}"`,$.style.display="block",n.value="";return}let h=new FileReader;h.onload=v=>{try{let g=JSON.parse(v.target.result);localStorage.setItem(s,JSON.stringify(g)),p.textContent=i,$.style.display="none",t.setContent(Y()),se(t)}catch{$.textContent="Invalid JSON format",$.style.display="block",n.value=""}},h.onerror=()=>{$.textContent="Failed to read file",$.style.display="block",n.value=""},h.readAsText(S)}),y&&(y.onclick=()=>{localStorage.removeItem(s),t.setContent(Y()),se(t)})}a("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),a("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),a("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let r=document.getElementById("notifications-toggle");if(r){let d="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!d||d.state==="denied")&&(r.disabled=!0),r.onclick=async f=>{if(f.target.checked)try{await Notification.requestPermission()!=="granted"&&(f.target.checked=!1)}catch{f.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),f.target.checked=!0)}}let o=document.getElementById("microphone-toggle");async function u(){let d="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;o&&(o.disabled=!d||d.state==="denied",o.checked=d?.state==="granted");let f=document.querySelector("#microphone-setting-item .settings-item-description");f&&(f.textContent=d?d.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}u(),o&&!o.disabled&&(o.onclick=async d=>{if(d.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),u()}catch{d.target.checked=!1,u()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),d.target.checked=!0)});let m=document.getElementById("analytics-toggle");m&&(m.checked=localStorage.getItem("easter_analytics_enabled")!=="false",m.onclick=d=>{let f=d.target.checked;localStorage.setItem("easter_analytics_enabled",f),window.EASTER_ANALYTICS_ENABLED=f,window.EASTER_DEBUG_MODE=f})}var Je=()=>`
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
`,R=new Set,Ge=[],K=null;async function O(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;it();let a=localStorage.getItem("service_map");if(!a)return;let r=null;try{r=(JSON.parse(a).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{return}if(!r)return;let u=`http://${r.domain==="0.0.0.0"?"127.0.0.1":r.domain}:${r.port}/roadmap`;try{let m=await fetch(u);if(!m.ok)throw new Error("Offline");let d=await m.json();if(Ge=d,d.length===0){e.innerHTML=E("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let f=i=>{let l=R.has(i.id),n=i.state==="draft",p=i.state==="published",$=i.state==="consumed",y="event-border-grey";p&&(y="event-border-blue"),$&&(y="event-border-purple");let S=new Date(i.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${y} cursor-pointer ${l?"expanded":""}`,h.dataset.itemId=i.id,h.onclick=g=>{if(g.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",R.delete(i.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",R.add(i.id))};let v=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${i.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${S.split(",")[1]}</span>
          <span class="event-date">${S.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${v}</div>
          <div class="event-message" style="white-space: pre-wrap;">${A(i.content)}</div>
          <div class="event-details" style="${l?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${$?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${p?"bx-pause":"bx-rocket"}'></i> ${p?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${$?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(i.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>ot(i)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>rt(i)),h.querySelector(".delete-btn")?.addEventListener("click",()=>lt(i.id)),h.querySelector(".close-details-btn")?.addEventListener("click",g=>{g.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",R.delete(i.id)}),h},w=Array.from(e.children),b=new Map(w.map(i=>[i.dataset.itemId,i])),c=new Set(d.map(i=>i.id));w.forEach(i=>{let l=i.dataset.itemId;(!l||!c.has(l))&&i.remove()});let s=null;d.forEach((i,l)=>{let n=b.get(i.id);(!n||t)&&(n&&n.remove(),n=f(i),!n)||(l===0?e.firstElementChild!==n&&e.prepend(n):s&&s.nextElementSibling!==n&&s.after(n),s=n)})}catch{e.innerHTML=E("error","Failed to load roadmap.")}}function it(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),r=document.getElementById("roadmap-expand-all"),o=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{K=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",K=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let u=document.getElementById("roadmap-editor-input").value;if(!u.trim())return;let d=JSON.parse(localStorage.getItem("service_map")).services.cs.find(c=>c.id==="dex-event-service"),f=d.domain==="0.0.0.0"?"127.0.0.1":d.domain,w=K?`http://${f}:${d.port}/roadmap/${K}`:`http://${f}:${d.port}/roadmap`,b=K?"PATCH":"POST";try{await fetch(w,{method:b,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u})}),document.getElementById("roadmap-editor-container").style.display="none",O(!0)}catch(c){console.error(c)}},e.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{Ge.forEach(u=>R.add(u.id)),O(!0)},r.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{R.clear(),O(!0)},o.dataset.listenerAttached="true")}function ot(t){K=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function rt(t){let e=t.state==="published"?"draft":"published",r=JSON.parse(localStorage.getItem("service_map")).services.cs.find(u=>u.id==="dex-event-service"),o=r.domain==="0.0.0.0"?"127.0.0.1":r.domain;try{await fetch(`http://${o}:${r.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),O(!0)}catch(u){console.error(u)}}async function lt(t){if(!confirm("Delete this roadmap item?"))return;let a=JSON.parse(localStorage.getItem("service_map")).services.cs.find(o=>o.id==="dex-event-service"),r=a.domain==="0.0.0.0"?"127.0.0.1":a.domain;try{await fetch(`http://${r}:${a.port}/roadmap/${t}`,{method:"DELETE"}),R.delete(t),O(!0)}catch(o){console.error(o)}}function Ve(){Ne(),Te();let t=Me();Ie(t),_e();let e=document.querySelector("footer"),a=null;function r(){a=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(c=>c.classList.remove("active","inactive"))}function o(c,s=null){let i=a&&a.id===c.id;a&&a.close(!i),i?a=null:setTimeout(()=>{c.open(),a=c,document.querySelectorAll(".nav-right i").forEach(l=>{let n=l===s;l.classList.toggle("active",n),l.classList.toggle("inactive",!n&&s)}),e?.classList.add("hide")},a?220:0)}async function u(){await Promise.all([xe(),we(),ee(),me(),F(),te(),ie()]);let c=setInterval(()=>{if(!b.isOpen())return clearInterval(c);_(4,ye),_(3,W),_(5,de),_(6,ce),_(2,pe),_(1,le),_(0,G)},1e3),s=setInterval(()=>{if(!b.isOpen())return clearInterval(s);ee(),me(),F(),te(),ie()},3e3),i=setInterval(()=>{if(!b.isOpen())return clearInterval(i);xe(),we()},6e4)}async function m(){await O();let c=setInterval(()=>{if(!f.isOpen())return clearInterval(c);O()},5e3)}let d=Z({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:r}),f=Z({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${ae()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:Je(),"data-tab-index":1}],icon:"bx-user",onClose:r,onOpen:()=>setTimeout(m,100)}),w=Z({id:"settings-window",title:"Settings",content:Y(),icon:"bx-cog",onClose:r,onOpen:()=>{w.setContent(Y()),setTimeout(()=>se(w),50)}}),b=Z({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ue(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:Oe(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:ze(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Be(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:De(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:Re(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Fe(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:r,onOpen:()=>setTimeout(u,100)});t?(document.getElementById("user-icon")?.addEventListener("click",c=>o(f,c.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",c=>o(b,c.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",c=>o(w,c.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{o(d),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",c=>{c.preventDefault();try{ke(document.getElementById("email-input").value),window.location.reload()}catch(s){let i=document.getElementById("login-error");i&&(i.textContent=s.message,i.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ve):Ve();})();
//# sourceMappingURL=dex.1ea5530d.js.map
