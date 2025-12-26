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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function Q(t){let e=null,a=t.onClose||null,r=t.onOpen||null;function o(){if(e){e.classList.add("open"),window.addEventListener("resize",m),r&&setTimeout(r,10);return}let h=document.getElementById("windows-container");h||(h=document.createElement("div"),h.id="windows-container",h.className="windows-container",document.body.appendChild(h)),e=document.createElement("div"),e.id=t.id,e.className="window";let p=t.icon||"bx-window",d="",s="",i;t.tabs&&t.tabs.length>0?(d=`<div class="tab-bar">${t.tabs.map((S,x)=>{let b;return S.icon?b=`<i class="bx ${S.icon}"></i>`:S.title&&S.title.length>0?b=`<span class="tab-glyph">${S.title.charAt(0).toUpperCase()}</span>`:b='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${x===0?"active":""}" data-tab-index="${x}">
                        ${b}
                        <span class="tab-title">${S.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${x}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,i=`<div class="window-content">${t.tabs.map((S,x)=>`<div class="tab-content ${x===0?"active":""}" data-tab-content="${x}">${S.content}</div>`).join("")}</div>`):(t.title&&(s=`<div class="window-title">${t.title}</div>`),i=`<div class="window-content">${t.content}</div>`);let n=`
            <div class="window-header">
                <i class="bx ${p}"></i>
                ${d}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=n+i,h.appendChild(e);let l=e.querySelector(".window-close");l&&l.addEventListener("click",y=>{y.stopPropagation(),c()}),window.addEventListener("resize",m),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(w=>{w.addEventListener("click",()=>{let S=w.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),w.classList.add("active"),e.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${S}"]`).classList.add("active"),u(w,e)})}),setTimeout(()=>{e.classList.add("open"),r&&r()},10)}function m(){if(!e||!e.classList.contains("open"))return;let h=e.querySelector(".tab.active");h&&u(h,e)}function u(h,p){setTimeout(()=>{let d=p.querySelector(".tab-bar");if(d){let s=Array.from(d.querySelectorAll(".tab")),i=s.indexOf(h),n=d.clientWidth,l=s[Math.max(0,i-2)],y=s[Math.min(s.length-1,i+2)],w=l.offsetLeft-d.offsetLeft-25,x=y.offsetLeft+y.offsetWidth-d.offsetLeft+25-w,b;x<=n?b=w-(n-x)/2:b=h.offsetLeft-d.offsetLeft-n/2+h.offsetWidth/2,d.scrollTo({left:b,behavior:"smooth"})}},350)}function c(h=!1){e&&(window.removeEventListener("resize",m),h?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function f(h){if(e){let p=e.querySelector(".window-content");p&&(p.innerHTML=h)}}function E(){return e&&e.classList.contains("open")}return{open:o,close:c,setContent:f,isOpen:E,id:t.id}}var ge="easter_user_email";function Me(){return localStorage.getItem(ge)!==null}function ie(){return localStorage.getItem(ge)}function ke(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ge,t.trim())}var Ae="easter_theme",B={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function he(){return localStorage.getItem(Ae)||B.AUTO}function Ze(){let t=window.innerWidth,e=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?B.ANIMATED:(t===1920&&e===1080&&a||t<=1920||e<=1080,B.DEFAULT)}function Ce(t){if(!Object.values(B).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ae,t),be(t)}function be(t,e=!1){let a=document.body,r=t===B.AUTO?Ze():t;if(e||(a.classList.add("theme-transitioning"),setTimeout(()=>{a.classList.remove("theme-transitioning")},300)),Object.values(B).forEach(o=>{a.classList.remove(`theme-${o}`)}),a.classList.add(`theme-${t}`),r===B.ANIMATED){if(!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else{let o=document.querySelector(".background");o&&(e?o.remove():(o.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{o.remove()},400)))}}function De(){let t=he();if(be(t,!0),t===B.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{be(B.AUTO)},300)})}}function F(t,e,a=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",m=a?`<p class="placeholder-action">${a}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${o} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${m}
        </div>
    `}function Ne(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ye=null;async function ae(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=F("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let a;try{a=JSON.parse(e)}catch(u){return console.error("Error parsing service_map from localStorage:",u),t.classList.add("placeholder-active"),t.innerHTML=F("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let r=null;if(a&&typeof a.services=="object"){let u=["cs","be","th"];for(let c of u)if(Array.isArray(a.services[c])){let f=a.services[c].find(E=>E.short_name==="event"||E.id==="event"||E.id==="dex-event-service");if(f){r=f;break}}}if(!r)return t.classList.add("placeholder-active"),t.innerHTML=F("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let o=r.domain==="0.0.0.0"?"127.0.0.1":r.domain,m=`http://${o}:${r.port}/logs`;try{let u=await fetch(m);if(!u.ok)return t.classList.add("placeholder-active"),t.innerHTML=F("offline","Event service is offline.","Please ensure the event service is running."),!1;let c=await u.json();if(!c||c.length===0)return t.classList.add("placeholder-active"),t.innerHTML=F("empty","No logs found.","Service logs will appear here when available."),!1;let f=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],E=c.filter(p=>!f.includes(p.id));E.forEach(p=>{p.logs&&Array.isArray(p.logs)?p.logs.reverse():p.logs=[]}),E.reverse();let h=E.map(p=>{let d=p.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${p.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(d)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${p.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${d}</pre>
                </div>
            `}).join("");return t.innerHTML=h,document.querySelectorAll(".copy-logs-btn").forEach(p=>{p.addEventListener("click",()=>{let d=unescape(p.dataset.logs);navigator.clipboard.writeText(d).then(()=>{let s=p.querySelector("i");s.classList.remove("bx-copy"),s.classList.add("bx-check"),setTimeout(()=>{s.classList.remove("bx-check"),s.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(p=>{p.addEventListener("click",async()=>{let d=p.dataset.serviceId;if(!confirm(`Are you sure you want to clear logs for ${d}?`))return;let s=`http://${o}:${r.port}/logs?service_id=${d}`;try{(await fetch(s,{method:"DELETE"})).ok?ae():console.error("Failed to clear logs")}catch(i){console.error("Error clearing logs:",i)}})}),ye=Date.now(),!0}catch(u){return console.error("Error fetching logs:",u),t.classList.add("placeholder-active"),t.innerHTML=F("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function L(t,e,a=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",m=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${o} placeholder-icon'></i><p class="placeholder-message">${e}</p>${m}</div>`}function C(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function M(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let r=Date.now(),o=Math.floor((r-e)/1e3),m;o<60?m=`${o}s ago`:o<3600?m=`${Math.floor(o/60)}m ago`:m=`${Math.floor(o/3600)}h ago`,a.textContent=`Last updated: ${m}`}function P(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let r=a.querySelector(".notification-badge");r&&(e>0?(r.textContent=e>9?"9+":e,r.style.display="flex"):r.style.display="none")}function oe(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;P(0,e)}var Qe={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Be(t,e){let a=Qe[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),!a)return t;let r=a.replace(/\{(\w+)\}/g,(o,m)=>e[m]!==void 0&&e[m]!==null?e[m]:o);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(r+=` (Translation: ${e.english_translation})`),r}var He=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,W=null,G=new Set,Ue=[];async function ee(t=!1){let e=document.getElementById("events-timeline");if(!e)return;et();let a=localStorage.getItem("service_map");if(!a){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let r=null;try{r=(JSON.parse(a).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!r){e.innerHTML=L("error","Event service not found in service map.");return}let m=`http://${r.domain==="0.0.0.0"?"127.0.0.1":r.domain}:${r.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let u=await fetch(m);if(!u.ok)throw new Error("Service is offline or unreachable.");let f=(await u.json()).events||[];if(Ue=f,W=Date.now(),M(3,W),f.length===0){e.innerHTML=L("empty","No events found.");return}t&&(e.innerHTML="");let E=i=>{let n=i.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let l=n.type,y=l==="engagement.decision"||l==="messaging.bot.sent_message"||l==="messaging.user.sent_message"||l==="moderation.explicit_content.deleted"||l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.cli.command"||l==="system.analysis.audit",w="event-border-grey";y&&(l==="moderation.explicit_content.deleted"?w="event-border-red":l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.analysis.audit"?w="event-border-purple":l==="system.cli.command"?w="event-border-orange":w="event-border-blue");let S=y?"cursor-pointer":"",x=G.has(i.id),b=x?"expanded":"",v=x?"display: block;":"display: none;",g=new Date(i.timestamp*1e3),$=g.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),H=g.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),_=Be(l,n),k="";if(y){let T="";if(l==="engagement.decision")T=`
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
                    `;else if(l==="messaging.bot.sent_message")T=`
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
                    `;else if(l==="moderation.explicit_content.deleted")T=`
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
                            <pre class="detail-pre">${C(n.raw_output)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.link.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${C(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${C(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${C(n.summary)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.visual.completed"){let N="";n.base64_preview?N=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(N=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${N}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${C(n.description)||"None"}</pre>
                        </div>
                    `}else if(l==="system.cli.command")T=`
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
                            <pre class="detail-pre">${C(n.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(l==="system.analysis.audit")T=`
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
                            <pre class="detail-pre">${C(n.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${C(n.raw_input)}</pre>
                        </div>
                    `;else if(l==="messaging.user.sent_message"){let N="";n.attachments&&n.attachments.length>0&&(N=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${n.attachments.map(A=>{let U=A.content_type&&A.content_type.startsWith("image/"),ue=(A.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${U?`<div class="attachment-thumb-container"><img src="${A.url}" alt="${A.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${A.url}" target="_blank" class="attachment-link">${A.filename}</a>
                                        <span class="attachment-meta">${A.content_type} \u2022 ${ue}</span>
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
                        ${N}
                    `}k=`
                    <div class="event-details" style="${v}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${T}
                    </div>
                `}let D=document.createElement("div");if(D.className=`event-item ${w} ${S} ${b}`,D.dataset.eventId=i.id,D.onclick=function(T){if(!y)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(i.id);let I=this.querySelector(".event-details");I&&(I.style.display="none")}else{this.classList.add("expanded"),G.add(i.id);let I=this.querySelector(".event-details");I&&(I.style.display="block")}},D.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${$}</span>
                    <span class="event-date">${H}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${i.service}</div>
                    <div class="event-message">${_}</div>
                    ${k}
                </div>
            `,y){let T=D.querySelector(".close-details-btn");T&&T.addEventListener("click",N=>{N.stopPropagation();let I=N.target.closest(".event-item");if(I){I.classList.remove("expanded"),G.delete(i.id);let A=I.querySelector(".event-details");A&&(A.style.display="none")}})}return D},h=Array.from(e.children),p=new Map(h.map(i=>[i.dataset.eventId,i])),d=new Set(f.map(i=>i.id));h.forEach(i=>{let n=i.dataset.eventId;(!n||!d.has(n))&&i.remove()});let s=null;f.forEach((i,n)=>{let l=p.get(i.id);(!l||t)&&(l&&l.remove(),l=E(i),!l)||(n===0?e.firstElementChild!==l&&e.prepend(l):s&&s.nextElementSibling!==l&&s.after(l),s=l)}),W=Date.now(),M(3,W)}catch(u){console.error("Error fetching events:",u),e.children.length===0&&(e.innerHTML=L("offline","Failed to load events.","The event service may be offline or unreachable."))}}function et(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ue.forEach(a=>G.add(a.id)),ee(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{G.clear(),ee(!0)},e.dataset.listenerAttached="true")}var je=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,J=null,q=new Set,re=[];async function z(t=!1){let e=document.getElementById("notifications-list");if(!e)return;tt(),t&&(e.innerHTML="<p>Updating...</p>");let a=localStorage.getItem("service_map");if(!a){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let r=null;try{r=(JSON.parse(a).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!r){e.innerHTML=L("error","Event service not found in service map.");return}let m=`http://${r.domain==="0.0.0.0"?"127.0.0.1":r.domain}:${r.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let u=await fetch(m);if(!u.ok)throw new Error("Service is offline or unreachable.");let f=(await u.json()).events||[];J=Date.now(),M(0,J);let E=Date.now(),h=24*60*60*1e3,p=f.filter(v=>{let g=localStorage.getItem(`notification_read_ts_${v.id}`);if(!g)return!0;let $=parseInt(g);return E-$<h});p.sort((v,g)=>{let $=D=>{let T=D.event;if(typeof T=="string")try{T=JSON.parse(T)}catch{return"low"}return(T.priority||"low").toLowerCase()},H=D=>D==="critical"?4:D==="high"?3:D==="medium"?2:1,_=H($(v)),k=H($(g));return _!==k?k-_:g.timestamp-v.timestamp}),re=p;let d=v=>{let g=v.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return"low"}return(g.priority||"low").toLowerCase()},s=[],n=new Set(p.map(v=>d(v))).size>1;if(p.length>0){let v=null;p.forEach(g=>{let $=d(g);n&&$!==v&&(s.push({id:`divider-${$}`,type:"divider",label:$.toUpperCase()}),v=$),s.push(g)})}if(t&&(e.innerHTML=""),p.length===0){e.innerHTML=L("empty","No notifications yet."),oe();return}let l=v=>{let g=v.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let $=g.title||"Untitled Notification",H=g.body||"No description provided.",_=g.priority||"low",k=!!g.alert,D=g.category||"system",T=g.related_event_ids||[],I=!!localStorage.getItem(`notification_read_ts_${v.id}`),A=new Date(v.timestamp*1e3),U=A.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),ue=A.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),ne=I?"event-border-grey":"event-border-blue";!I&&k&&(ne="event-border-red"),I&&(_==="high"||_==="critical")?ne="event-border-red":I&&_==="medium"&&(ne="event-border-orange");let Ye=I?"notification-read":"notification-unread",$e=q.has(v.id),Ke=$e?"expanded":"",Xe=$e?"display: block;":"display: none;",Ee="",Se="";T.length>0&&(Se=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${T.map(X=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${X.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),Ee=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${_==="high"||_==="critical"?"#ff4d4d":_==="medium"?"#ffa500":"#888"}">${_.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${C(H)}</p>
                </div>
                ${Se}
            `;let j=document.createElement("div");j.className=`event-item notification-item ${ne} ${Ye} ${Ke} cursor-pointer`,j.dataset.notificationId=v.id,j.onclick=function(X){if(this.classList.contains("expanded")){this.classList.remove("expanded"),q.delete(v.id);let Z=this.querySelector(".event-details");Z&&(Z.style.display="none")}else{this.classList.add("expanded"),q.add(v.id);let Z=this.querySelector(".event-details");if(Z&&(Z.style.display="block"),!localStorage.getItem(`notification_read_ts_${v.id}`)){localStorage.setItem(`notification_read_ts_${v.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ve="event-border-grey";_==="high"||_==="critical"?ve="event-border-red":_==="medium"&&(ve="event-border-orange"),this.classList.add(ve),oe()}}},j.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${U}</span>
                    <span class="event-date">${ue}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${D.toUpperCase()} ${k?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${$}</div>
                    <div class="event-details" style="${Xe}">
                        <div class="event-details-header">
                            <h4>${k?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${Ee}
                    </div>
                </div>
            `;let Le=j.querySelector(".close-details-btn");return Le&&Le.addEventListener("click",X=>{X.stopPropagation(),j.classList.remove("expanded");let fe=j.querySelector(".event-details");fe&&(fe.style.display="none"),q.delete(v.id)}),j},y=v=>{let g=document.createElement("div");g.className="notification-divider",g.dataset.notificationId=v.id;let $="#888888";return v.label==="CRITICAL"?$="#ff4d4d":v.label==="HIGH"?$="#ff8888":v.label==="MEDIUM"&&($="#ffa500"),g.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${$}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,g.innerHTML=`<span style="white-space: nowrap;">${v.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${$}44, transparent); flex-grow: 1;"></div>`,g},w=Array.from(e.children),S=new Map(w.map(v=>[v.dataset.notificationId,v])),x=new Set(s.map(v=>v.id));w.forEach(v=>{let g=v.dataset.notificationId;(!g||!x.has(g))&&v.remove()});let b=null;s.forEach((v,g)=>{let $=S.get(v.id);(!$||t)&&($&&$.remove(),v.type==="divider"?$=y(v):$=l(v),!$)||(g===0?e.firstElementChild!==$&&e.prepend($):b&&b.nextElementSibling!==$&&b.after($),b=$)}),J=Date.now(),M(0,J),oe()}catch(u){console.error("Error fetching notifications:",u),e.children.length===0&&(e.innerHTML=L("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function tt(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),a=document.getElementById("notif-close-all"),r=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{re.forEach(o=>{localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),z(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{re.forEach(o=>{q.add(o.id),localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),z(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{q.clear(),z(!0)},a.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{let o=Date.now()-1728e5;re.forEach(m=>{localStorage.setItem(`notification_read_ts_${m.id}`,o.toString())}),q.clear(),z(!0)},r.dataset.listenerAttached="true")}var Oe=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,le=null,V=new Set,Pe=[];async function te(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;st();let a=localStorage.getItem("service_map");if(!a){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let r=null;try{r=(JSON.parse(a).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!r){e.innerHTML=L("error","Event service not found in service map.");return}let m=`http://${r.domain==="0.0.0.0"?"127.0.0.1":r.domain}:${r.port}/events?ml=1000&format=json&event.type=system.blueprint.generated`;try{let u=await fetch(m);if(!u.ok)throw new Error("Service is offline or unreachable.");let f=(await u.json()).events||[];if(Pe=f,le=Date.now(),M(1,le),f.length===0){e.innerHTML=L("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),P(1,0);return}t&&(e.innerHTML="");let E=i=>{let n=i.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let l=n.title||"Untitled Blueprint",y=n.summary||n.body||"No summary provided.",w=n.content||"",S=n.category||"architecture",x=n.affected_services||[],b=n.implementation_path||[],v=new Date(i.timestamp*1e3),g=v.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=v.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),H=V.has(i.id),_=H?"display: block;":"display: none;",k=document.createElement("div");k.className=`event-item notification-item event-border-purple cursor-pointer ${H?"expanded":""}`,k.dataset.blueprintId=i.id,k.onclick=function(I){if(this.classList.contains("expanded")){this.classList.remove("expanded"),V.delete(i.id);let U=this.querySelector(".event-details");U&&(U.style.display="none")}else{this.classList.add("expanded"),V.add(i.id);let U=this.querySelector(".event-details");U&&(U.style.display="block")}};let D=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",T="";b.length>0&&(T=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${b.map(I=>`<li>${C(I)}</li>`).join("")}
                        </ul>
                    </div>
                `),k.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${g}</span>
                    <span class="event-date">${$}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${S.toUpperCase()}</div>
                    <div class="event-message">${l}</div>
                    <div class="event-details" style="${_}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${C(y)}
                        </div>
                        ${D}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${C(w)}</p>
                        </div>
                        ${T}
                    </div>
                </div>
            `;let N=k.querySelector(".close-details-btn");return N&&N.addEventListener("click",I=>{I.stopPropagation(),k.classList.remove("expanded");let A=k.querySelector(".event-details");A&&(A.style.display="none"),V.delete(i.id)}),k},h=Array.from(e.children),p=new Map(h.map(i=>[i.dataset.blueprintId,i])),d=new Set(f.map(i=>i.id));h.forEach(i=>{let n=i.dataset.blueprintId;(!n||!d.has(n))&&i.remove()});let s=null;f.forEach((i,n)=>{let l=p.get(i.id);(!l||t)&&(l&&l.remove(),l=E(i),!l)||(n===0?e.firstElementChild!==l&&e.prepend(l):s&&s.nextElementSibling!==l&&s.after(l),s=l)}),P(1,f.length)}catch(u){console.error("Error fetching blueprints:",u),e.children.length===0&&(e.innerHTML=L("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function st(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Pe.forEach(a=>V.add(a.id)),te(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{V.clear(),te(!0)},e.dataset.listenerAttached="true")}var ze=()=>localStorage.getItem("service_map")?`
        <div class="hardware-status-section" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; font-size: 1em; color: #fff;">System Hardware</h3>
                <button id="hardware-refresh-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em;"><i class='bx bx-refresh'></i> Refresh</button>
            </div>
            <div id="hardware-info-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                <p style="color: #ccc; font-size: 0.9em; margin: 0;">Loading hardware info...</p>
            </div>
        </div>
        <div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>
    `:L("config","No service map configured.","Upload service-map.json in Settings."),Re=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':L("config","No service map configured.","Upload service-map.json in Settings."),Fe=()=>localStorage.getItem("service_map")?`
        <div class="analyst-status-section" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; font-size: 1em; color: #fff;">Analyst Status</h3>
                <button id="analyst-reset-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em;"><i class='bx bx-refresh'></i> Reset Analyst</button>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">Guardian</span>
                    <span id="analyst-t1-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">Architect</span>
                    <span id="analyst-t2-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">Strategist</span>
                    <span id="analyst-t3-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
            </div>
        </div>

        <div style="height: 1px; background: rgba(255,255,255,0.1); margin: 20px 0;"></div>

        <div class="system-vitals-section" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; font-size: 1em; color: #fff;">System Vitals</h3>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                 <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">Cognitive Idle Time</span>
                    <span id="analyst-idle-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
                 <div class="analyst-indicator">
                    <span style="color: #888; font-size: 0.8em;">Active Processes</span>
                    <span id="vitals-processes-val" style="color: #fff; font-family: monospace; display: block;">Loading...</span>
                </div>
            </div>
        </div>

        <div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>
    `:L("config","No service map configured.","Upload service-map.json in Settings."),ce=null,de=null,pe=null;async function We(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!e)return null;let r=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,o=await fetch(r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function qe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!e)return null;let r=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system/hardware`,o=await fetch(r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching hardware data:",t),null}}async function nt(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!e)return null;let r=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,o=await fetch(r);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function it(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!e)return null;let r=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/analyst/status`,o=await fetch(r);return o.ok?await o.json():null}catch{return null}}async function xe(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),a=document.getElementById("hardware-refresh-btn"),r=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let i="",n=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(i+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${n} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let l=s.CPU[0];i+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${l.LABEL}">${l.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${l.COUNT} Cores / ${l.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((l,y)=>{let w=(l.VRAM/1073741824).toFixed(1);i+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${y}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${l.LABEL}">${l.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${w} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let l=0,y=0;s.STORAGE.forEach(b=>{l+=b.USED,y+=b.SIZE});let w=(l/(1024*1024*1024)).toFixed(1),S=(y/(1024*1024*1024)).toFixed(1),x=y>0?(l/y*100).toFixed(0):0;i+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} / ${S} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${x>90?"#ff4d4d":"#00ff00"}; width: ${x}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=i};if(e&&a){a.dataset.listenerAttached||(a.onclick=async()=>{a.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let i=await qe();i?(r(i),a.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',a.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},a.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let i=await qe();r(i)}}if(!t)return;let o=await We();if(!o||!o.services){t.innerHTML=L("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}ce=Date.now(),M(5,ce);let m=o.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function u(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function c(s){if(!s||s==="N/A"||s==="unknown")return"-";let i=s.match(/^(\d+\.\d+\.\d+)/);return i?i[0]:s.split(".").slice(0,3).join(".")||"-"}function f(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function E(s){if(!s||s==="N/A"||s==="unknown")return"-";let i=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!i)return"-";let n=parseInt(i[1])||0,l=parseInt(i[2])||0,y=parseInt(i[3])||0,w=parseFloat(i[4])||0,S=n*86400+l*3600+y*60+w,x=Math.floor(S/86400);if(x>0)return`${x}d`;let b=Math.floor(S/3600);if(b>0)return`${b}h`;let v=Math.floor(S/60);return v>0?`${v}m`:`${Math.floor(S)}s`}function h(s){let i=s.status==="online",n=i?"service-widget-online":"service-widget-offline",l=i?"bx-check-circle":"bx-x-circle",y=i?"OK":"BAD",w=s.version?c(s.version.str):"-",S=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",x=s.memory&&s.memory!=="N/A"?s.memory:"-",b=S!=="-"?"#00ff00":"#666",v=S!=="-"?"#fff":"#666",g=x!=="-"?"#00ff00":"#666",$=x!=="-"?"#fff":"#666",H=E(s.uptime),_="";return i?_=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${w}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${H}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${b};"></i>
                        <span style="color: ${v};">${S}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${g};"></i>
                        <span style="color: ${$};">${x}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${n}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${l}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${f(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let p=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),d=new Set(m.map(s=>s.id));for(let[s,i]of p)d.has(s)||i.remove();m.forEach(s=>{let i=h(s),n=p.get(s.id);n?n.outerHTML!==i&&(n.outerHTML=i):t.insertAdjacentHTML("beforeend",i)})}async function we(){let t=document.getElementById("models-widgets");if(!t)return;let e=await We();if(!e){t.innerHTML=L("offline","Failed to load model status.");return}de=Date.now(),M(4,de);let a=e.models||[],r=e.whisper;Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function o(c){let f=c.status==="Ready";return`
                <div class="service-widget ${f?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${f?"READY":"NOT FOUND"}</span>
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
                </div>`}function m(c){let f=c.status==="Downloaded",E=f?"service-widget-online":"service-widget-offline",h=f?"OK":"MISSING",p=f&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",d=c.name;return c.type==="custom"&&d.endsWith(":latest")&&(d=d.replace(":latest","")),`<div class="service-widget ${E}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${f?"bx-check-circle":"bx-x-circle"}"></i><h3>${d}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${p}</span></div></div></div>`}let u="";if(r&&(u+=o(r)),u+=a.map(m).join(""),!u){t.innerHTML=L("empty","No models found.");return}t.innerHTML!==u&&(t.innerHTML=u)}async function me(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),a=document.getElementById("analyst-t2-val"),r=document.getElementById("analyst-t3-val"),o=document.getElementById("analyst-idle-val"),m=document.getElementById("analyst-reset-btn");m&&!m.dataset.listenerAttached&&(m.onclick=async()=>{if(!localStorage.getItem("service_map"))return;let s=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(l=>l.id==="dex-event-service");if(!s)return;let n=`http://${s.domain==="0.0.0.0"?"127.0.0.1":s.domain}:${s.port}/analyst/reset?tier=all`;m.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(n,{method:"POST"}),setTimeout(()=>{m.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{m.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),me()}catch{m.innerHTML="<i class='bx bx-error'></i> Failed"}},m.dataset.listenerAttached="true");let u=await it();if(u){let d=Math.floor(Date.now()/1e3),s=u.active_tier,i=(n,l,y)=>{if(s===y||y==="guardian"&&s==="tests"){n.textContent="Working",n.style.color="#bb86fc";return}let w=l-d;if(w<=0)n.textContent="Ready",n.style.color="#5eff5e";else{let S=Math.floor(w/60),x=w%60;n.textContent=`${S}m ${x}s`,n.style.color="#fff"}};if(e&&u.guardian&&i(e,u.guardian.next_run,"guardian"),a&&u.architect&&i(a,u.architect.next_run,"architect"),r&&u.strategist&&i(r,u.strategist.next_run,"strategist"),o&&u.system_idle_time!==void 0){let n=u.system_idle_time,l=Math.floor(n/60),y=n%60;o.textContent=`${l}m ${y}s`,n>300?o.style.color="#5eff5e":n>60?o.style.color="#ffa500":o.style.color="#fff"}}else[e,a,r,o].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let c=await nt(),f=document.getElementById("vitals-processes-val");if(f)if(c){let d=c.length;f.textContent=d>0?`${d} Active`:"Idle",f.style.color=d>0?"#bb86fc":"#fff"}else f.textContent="-",f.style.color="#888";if(c===null){t.innerHTML=L("offline","Failed to load process status.");return}if(pe=Date.now(),M(2,pe),c.length===0){t.innerHTML=L("empty","No active processes."),P(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function E(d){let s=Math.floor(Date.now()/1e3-d.start_time),i=d.retries>0?`<span class="process-retry-badge">Retry ${d.retries}</span>`:"",n=d.channel_id,l={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return l[n]?n=l[n]:/^\d+$/.test(n)&&(n=`Channel ${n}`),`
                <div class="service-widget process-widget" data-channel-id="${d.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${n}</h3>
                        ${i}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${d.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${s}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${d.pid}</span>
                        </div>
                    </div>
                </div>`}let h=new Map(Array.from(t.querySelectorAll(".process-widget")).map(d=>[d.dataset.channelId,d])),p=new Set(c.map(d=>d.channel_id));for(let[d,s]of h)p.has(d)||s.remove();c.forEach(d=>{let s=E(d),i=h.get(d.channel_id);i?i.outerHTML!==s&&(i.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),P(2,c.length)}function Y(){let t=he(),e=ie()||"user@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},r=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(B).map(o=>`
                    <div class="theme-card ${t===o?"active":""}" data-theme="${o}">
                        <div class="theme-preview theme-preview-${o.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${o}</h3>
                            <p>${o===B.AUTO?"Automatic theme selection.":o===B.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
            </div>`}function se(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(c=>{c.addEventListener("click",function(){let f=this.dataset.theme;Ce(f),t.setContent(Y()),se(t)})});function a(c,f,E,h,p,d,s){let i=document.getElementById(c),n=document.getElementById(f),l=document.getElementById(E),y=document.getElementById(h),w=document.getElementById(p);i&&n&&(i.onclick=()=>n.click(),n.onchange=S=>{let x=S.target.files[0];if(!x)return;if(x.name!==s){y.textContent=`File must be named "${s}"`,y.style.display="block",n.value="";return}let b=new FileReader;b.onload=v=>{try{let g=JSON.parse(v.target.result);localStorage.setItem(d,JSON.stringify(g)),l.textContent=s,y.style.display="none",t.setContent(Y()),se(t)}catch{y.textContent="Invalid JSON format",y.style.display="block",n.value=""}},b.onerror=()=>{y.textContent="Failed to read file",y.style.display="block",n.value=""},b.readAsText(x)}),w&&(w.onclick=()=>{localStorage.removeItem(d),t.setContent(Y()),se(t)})}a("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),a("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),a("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let r=document.getElementById("notifications-toggle");if(r){let c="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!c||c.state==="denied")&&(r.disabled=!0),r.onclick=async f=>{if(f.target.checked)try{await Notification.requestPermission()!=="granted"&&(f.target.checked=!1)}catch{f.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),f.target.checked=!0)}}let o=document.getElementById("microphone-toggle");async function m(){let c="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;o&&(o.disabled=!c||c.state==="denied",o.checked=c?.state==="granted");let f=document.querySelector("#microphone-setting-item .settings-item-description");f&&(f.textContent=c?c.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}m(),o&&!o.disabled&&(o.onclick=async c=>{if(c.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),m()}catch{c.target.checked=!1,m()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),c.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=c=>{let f=c.target.checked;localStorage.setItem("easter_analytics_enabled",f),window.EASTER_ANALYTICS_ENABLED=f,window.EASTER_DEBUG_MODE=f})}var Ge=()=>`
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
`,R=new Set,Je=[],K=null;async function O(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;at();let a=localStorage.getItem("service_map");if(!a)return;let r=null;try{r=(JSON.parse(a).services?.cs||[]).find(c=>c.id==="dex-event-service")}catch{return}if(!r)return;let m=`http://${r.domain==="0.0.0.0"?"127.0.0.1":r.domain}:${r.port}/roadmap`;try{let u=await fetch(m);if(!u.ok)throw new Error("Offline");let c=await u.json();if(Je=c,c.length===0){e.innerHTML=L("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let f=s=>{let i=R.has(s.id),n=s.state==="draft",l=s.state==="published",y=s.state==="consumed",w="event-border-grey";l&&(w="event-border-blue"),y&&(w="event-border-purple");let x=new Date(s.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),b=document.createElement("div");b.className=`event-item notification-item ${w} cursor-pointer ${i?"expanded":""}`,b.dataset.itemId=s.id,b.onclick=g=>{if(g.target.closest("button"))return;b.classList.contains("expanded")?(b.classList.remove("expanded"),b.querySelector(".event-details").style.display="none",R.delete(s.id)):(b.classList.add("expanded"),b.querySelector(".event-details").style.display="block",R.add(s.id))};let v=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${s.state.toUpperCase()}]</span>`;return b.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${x.split(",")[1]}</span>
          <span class="event-date">${x.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${v}</div>
          <div class="event-message" style="white-space: pre-wrap;">${C(s.content)}</div>
          <div class="event-details" style="${i?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${y?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${l?"bx-pause":"bx-rocket"}'></i> ${l?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${y?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(s.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,b.querySelector(".edit-btn")?.addEventListener("click",()=>ot(s)),b.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>rt(s)),b.querySelector(".delete-btn")?.addEventListener("click",()=>lt(s.id)),b.querySelector(".close-details-btn")?.addEventListener("click",g=>{g.stopPropagation(),b.classList.remove("expanded"),b.querySelector(".event-details").style.display="none",R.delete(s.id)}),b},E=Array.from(e.children),h=new Map(E.map(s=>[s.dataset.itemId,s])),p=new Set(c.map(s=>s.id));E.forEach(s=>{let i=s.dataset.itemId;(!i||!p.has(i))&&s.remove()});let d=null;c.forEach((s,i)=>{let n=h.get(s.id);(!n||t)&&(n&&n.remove(),n=f(s),!n)||(i===0?e.firstElementChild!==n&&e.prepend(n):d&&d.nextElementSibling!==n&&d.after(n),d=n)})}catch{e.innerHTML=L("error","Failed to load roadmap.")}}function at(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),r=document.getElementById("roadmap-expand-all"),o=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{K=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",K=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let m=document.getElementById("roadmap-editor-input").value;if(!m.trim())return;let c=JSON.parse(localStorage.getItem("service_map")).services.cs.find(p=>p.id==="dex-event-service"),f=c.domain==="0.0.0.0"?"127.0.0.1":c.domain,E=K?`http://${f}:${c.port}/roadmap/${K}`:`http://${f}:${c.port}/roadmap`,h=K?"PATCH":"POST";try{await fetch(E,{method:h,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:m})}),document.getElementById("roadmap-editor-container").style.display="none",O(!0)}catch(p){console.error(p)}},e.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{Je.forEach(m=>R.add(m.id)),O(!0)},r.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{R.clear(),O(!0)},o.dataset.listenerAttached="true")}function ot(t){K=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function rt(t){let e=t.state==="published"?"draft":"published",r=JSON.parse(localStorage.getItem("service_map")).services.cs.find(m=>m.id==="dex-event-service"),o=r.domain==="0.0.0.0"?"127.0.0.1":r.domain;try{await fetch(`http://${o}:${r.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),O(!0)}catch(m){console.error(m)}}async function lt(t){if(!confirm("Delete this roadmap item?"))return;let a=JSON.parse(localStorage.getItem("service_map")).services.cs.find(o=>o.id==="dex-event-service"),r=a.domain==="0.0.0.0"?"127.0.0.1":a.domain;try{await fetch(`http://${r}:${a.port}/roadmap/${t}`,{method:"DELETE"}),R.delete(t),O(!0)}catch(o){console.error(o)}}function Ve(){De(),Te();let t=Me();Ie(t),_e();let e=document.querySelector("footer"),a=null;function r(){a=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(p=>p.classList.remove("active","inactive"))}function o(p,d=null){let s=a&&a.id===p.id;a&&a.close(!s),s?a=null:setTimeout(()=>{p.open(),a=p,document.querySelectorAll(".nav-right i").forEach(i=>{let n=i===d;i.classList.toggle("active",n),i.classList.toggle("inactive",!n&&d)}),e?.classList.add("hide")},a?220:0)}async function m(){await Promise.all([xe(),we(),ee(),me(),z(),te(),ae()]);let p=setInterval(()=>{if(!h.isOpen())return clearInterval(p);M(4,ye),M(3,W),M(5,de),M(6,ce),M(2,pe),M(1,le),M(0,J)},1e3),d=setInterval(()=>{if(!h.isOpen())return clearInterval(d);ee(),me(),z(),te(),ae()},3e3),s=setInterval(()=>{if(!h.isOpen())return clearInterval(s);xe(),we()},6e4)}async function u(){await O();let p=setInterval(()=>{if(!f.isOpen())return clearInterval(p);O()},5e3)}let c=Q({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:r}),f=Q({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${ie()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:Ge(),"data-tab-index":1}],icon:"bx-user",onClose:r,onOpen:()=>setTimeout(u,100)}),E=Q({id:"settings-window",title:"Settings",content:Y(),icon:"bx-cog",onClose:r,onOpen:()=>{E.setContent(Y()),setTimeout(()=>se(E),50)}}),h=Q({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:je(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:Oe(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Fe(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:He(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Ne(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:Re(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:ze(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:r,onOpen:()=>setTimeout(m,100)});t?(document.getElementById("user-icon")?.addEventListener("click",p=>o(f,p.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",p=>o(h,p.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",p=>o(E,p.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{o(c),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",p=>{p.preventDefault();try{ke(document.getElementById("email-input").value),window.location.reload()}catch(d){let s=document.getElementById("login-error");s&&(s.textContent=d.message,s.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ve):Ve();})();
//# sourceMappingURL=dex.89d0a826.js.map
