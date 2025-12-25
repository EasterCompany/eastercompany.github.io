(()=>{function Te(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ie(t=!1){let i=`
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
    `,o=document.createElement("nav");o.innerHTML=i,document.body.prepend(o)}function _e(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function Z(t){let e=null,i=t.onClose||null,o=t.onOpen||null;function l(){if(e){e.classList.add("open"),window.addEventListener("resize",v),o&&setTimeout(o,10);return}let a=document.getElementById("windows-container");a||(a=document.createElement("div"),a.id="windows-container",a.className="windows-container",document.body.appendChild(a)),e=document.createElement("div"),e.id=t.id,e.className="window";let n=t.icon||"bx-window",m="",c="",r;t.tabs&&t.tabs.length>0?(m=`<div class="tab-bar">${t.tabs.map((L,S)=>{let h;return L.icon?h=`<i class="bx ${L.icon}"></i>`:L.title&&L.title.length>0?h=`<span class="tab-glyph">${L.title.charAt(0).toUpperCase()}</span>`:h='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${S===0?"active":""}" data-tab-index="${S}">
                        ${h}
                        <span class="tab-title">${L.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${S}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,r=`<div class="window-content">${t.tabs.map((L,S)=>`<div class="tab-content ${S===0?"active":""}" data-tab-content="${S}">${L.content}</div>`).join("")}</div>`):(t.title&&(c=`<div class="window-title">${t.title}</div>`),r=`<div class="window-content">${t.content}</div>`);let s=`
            <div class="window-header">
                <i class="bx ${n}"></i>
                ${m}
                ${c}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=s+r,a.appendChild(e);let p=e.querySelector(".window-close");p&&p.addEventListener("click",y=>{y.stopPropagation(),d()}),window.addEventListener("resize",v),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach($=>{$.addEventListener("click",()=>{let L=$.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(S=>S.classList.remove("active")),$.classList.add("active"),e.querySelectorAll(".tab-content").forEach(S=>S.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${L}"]`).classList.add("active"),u($,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function v(){if(!e||!e.classList.contains("open"))return;let a=e.querySelector(".tab.active");a&&u(a,e)}function u(a,n){setTimeout(()=>{let m=n.querySelector(".tab-bar");if(m){let c=Array.from(m.querySelectorAll(".tab")),r=c.indexOf(a),s=m.clientWidth,p=c[Math.max(0,r-2)],y=c[Math.min(c.length-1,r+2)],$=p.offsetLeft-m.offsetLeft-25,S=y.offsetLeft+y.offsetWidth-m.offsetLeft+25-$,h;S<=s?h=$-(s-S)/2:h=a.offsetLeft-m.offsetLeft-s/2+a.offsetWidth/2,m.scrollTo({left:h,behavior:"smooth"})}},350)}function d(a=!1){e&&(window.removeEventListener("resize",v),a?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function f(a){if(e){let n=e.querySelector(".window-content");n&&(n.innerHTML=a)}}function x(){return e&&e.classList.contains("open")}return{open:l,close:d,setContent:f,isOpen:x,id:t.id}}var fe="easter_user_email";function Me(){return localStorage.getItem(fe)!==null}function ie(){return localStorage.getItem(fe)}function ke(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(fe,t.trim())}var Ae="easter_theme",B={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function be(){return localStorage.getItem(Ae)||B.AUTO}function Xe(){let t=window.innerWidth,e=window.innerHeight,i=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?B.ANIMATED:(t===1920&&e===1080&&i||t<=1920||e<=1080,B.DEFAULT)}function Ce(t){if(!Object.values(B).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ae,t),ge(t)}function ge(t,e=!1){let i=document.body,o=t===B.AUTO?Xe():t;if(e||(i.classList.add("theme-transitioning"),setTimeout(()=>{i.classList.remove("theme-transitioning")},300)),Object.values(B).forEach(l=>{i.classList.remove(`theme-${l}`)}),i.classList.add(`theme-${t}`),o===B.ANIMATED){if(!document.querySelector(".background")){let l=document.createElement("div");l.className="background",document.body.prepend(l)}}else{let l=document.querySelector(".background");l&&(e?l.remove():(l.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{l.remove()},400)))}}function Ne(){let t=be();if(ge(t,!0),t===B.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{ge(B.AUTO)},300)})}}function z(t,e,i=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",v=i?`<p class="placeholder-action">${i}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${l} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${v}
        </div>
    `}function De(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var he=null;async function ye(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=z("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let i;try{i=JSON.parse(e)}catch(u){return console.error("Error parsing service_map from localStorage:",u),t.classList.add("placeholder-active"),t.innerHTML=z("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let o=null;if(i&&typeof i.services=="object"){let u=["cs","be","th"];for(let d of u)if(Array.isArray(i.services[d])){let f=i.services[d].find(x=>x.short_name==="event"||x.id==="event"||x.id==="dex-event-service");if(f){o=f;break}}}if(!o)return t.classList.add("placeholder-active"),t.innerHTML=z("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/logs`;try{let u=await fetch(v);if(!u.ok)return t.classList.add("placeholder-active"),t.innerHTML=z("offline","Event service is offline.","Please ensure the event service is running."),!1;let d=await u.json();if(!d||d.length===0)return t.classList.add("placeholder-active"),t.innerHTML=z("empty","No logs found.","Service logs will appear here when available."),!1;let f=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],x=d.filter(n=>!f.includes(n.id));x.forEach(n=>{n.logs&&Array.isArray(n.logs)?n.logs.reverse():n.logs=[]}),x.reverse();let a=x.map(n=>{let m=n.logs.join(`
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
            `}).join("");return t.innerHTML=a,document.querySelectorAll(".copy-logs-btn").forEach(n=>{n.addEventListener("click",()=>{let m=unescape(n.dataset.logs);navigator.clipboard.writeText(m).then(()=>{let c=n.querySelector("i");c.classList.remove("bx-copy"),c.classList.add("bx-check"),setTimeout(()=>{c.classList.remove("bx-check"),c.classList.add("bx-copy")},2e3)})})}),he=Date.now(),!0}catch(u){return console.error("Error fetching logs:",u),t.classList.add("placeholder-active"),t.innerHTML=z("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function E(t,e,i=null){let l={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",v=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${l} placeholder-icon'></i><p class="placeholder-message">${e}</p>${v}</div>`}function C(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let o=Date.now(),l=Math.floor((o-e)/1e3),v;l<60?v=`${l}s ago`:l<3600?v=`${Math.floor(l/60)}m ago`:v=`${Math.floor(l/3600)}h ago`,i.textContent=`Last updated: ${v}`}function P(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let o=i.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function ae(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;P(0,e)}var Qe={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Be(t,e){let i=Qe[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(i=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),!i)return t;let o=i.replace(/\{(\w+)\}/g,(l,v)=>e[v]!==void 0&&e[v]!==null?e[v]:l);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var He=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,R=null,J=new Set,Ue=[];async function ee(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ze();let i=localStorage.getItem("service_map");if(!i){e.innerHTML=E("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=E("error","Invalid service map data.");return}if(!o){e.innerHTML=E("error","Event service not found in service map.");return}let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let u=await fetch(v);if(!u.ok)throw new Error("Service is offline or unreachable.");let f=(await u.json()).events||[];if(Ue=f,R=Date.now(),_(3,R),f.length===0){e.innerHTML=E("empty","No events found.");return}t&&(e.innerHTML="");let x=r=>{let s=r.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let p=s.type,y=p==="engagement.decision"||p==="messaging.bot.sent_message"||p==="messaging.user.sent_message"||p==="moderation.explicit_content.deleted"||p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.cli.command"||p==="system.analysis.audit",$="event-border-grey";y&&(p==="moderation.explicit_content.deleted"?$="event-border-red":p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.analysis.audit"?$="event-border-purple":p==="system.cli.command"?$="event-border-orange":$="event-border-blue");let L=y?"cursor-pointer":"",S=J.has(r.id),h=S?"expanded":"",g=S?"display: block;":"display: none;",b=new Date(r.timestamp*1e3),w=b.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),H=b.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=Be(p,s),M="";if(y){let T="";if(p==="engagement.decision")T=`
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
                    `;else if(p==="messaging.bot.sent_message")T=`
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
                    `;else if(p==="moderation.explicit_content.deleted")T=`
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
                            <pre class="detail-pre">${C(s.raw_output)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.link.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${s.url}" target="_blank" class="attachment-link">${s.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${C(s.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${C(s.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${C(s.summary)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.visual.completed"){let D="";s.base64_preview?D=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${s.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:s.url&&(D=`<div class="event-detail-block"><img src="${s.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${s.filename}</span>
                        </div>
                        ${D}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${C(s.description)||"None"}</pre>
                        </div>
                    `}else if(p==="system.cli.command")T=`
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
                            <pre class="detail-pre">${C(s.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(p==="system.analysis.audit")T=`
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
                            <pre class="detail-pre">${C(s.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${C(s.raw_input)}</pre>
                        </div>
                    `;else if(p==="messaging.user.sent_message"){let D="";s.attachments&&s.attachments.length>0&&(D=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${s.attachments.map(k=>{let U=k.content_type&&k.content_type.startsWith("image/"),me=(k.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${U?`<div class="attachment-thumb-container"><img src="${k.url}" alt="${k.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${k.url}" target="_blank" class="attachment-link">${k.filename}</a>
                                        <span class="attachment-meta">${k.content_type} \u2022 ${me}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${s.content||"(empty)"}</pre>
                        </div>
                        ${D}
                    `}M=`
                    <div class="event-details" style="${g}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${T}
                    </div>
                `}let N=document.createElement("div");if(N.className=`event-item ${$} ${L} ${h}`,N.dataset.eventId=r.id,N.onclick=function(T){if(!y)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(r.id);let I=this.querySelector(".event-details");I&&(I.style.display="none")}else{this.classList.add("expanded"),J.add(r.id);let I=this.querySelector(".event-details");I&&(I.style.display="block")}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${w}</span>
                    <span class="event-date">${H}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${r.service}</div>
                    <div class="event-message">${A}</div>
                    ${M}
                </div>
            `,y){let T=N.querySelector(".close-details-btn");T&&T.addEventListener("click",D=>{D.stopPropagation();let I=D.target.closest(".event-item");if(I){I.classList.remove("expanded"),J.delete(r.id);let k=I.querySelector(".event-details");k&&(k.style.display="none")}})}return N},a=Array.from(e.children),n=new Map(a.map(r=>[r.dataset.eventId,r])),m=new Set(f.map(r=>r.id));a.forEach(r=>{let s=r.dataset.eventId;(!s||!m.has(s))&&r.remove()});let c=null;f.forEach((r,s)=>{let p=n.get(r.id);(!p||t)&&(p&&p.remove(),p=x(r),!p)||(s===0?e.firstElementChild!==p&&e.prepend(p):c&&c.nextElementSibling!==p&&c.after(p),c=p)}),R=Date.now(),_(3,R)}catch(u){console.error("Error fetching events:",u),e.children.length===0&&(e.innerHTML=E("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Ze(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ue.forEach(i=>J.add(i.id)),ee(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),ee(!0)},e.dataset.listenerAttached="true")}var je=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,G=null,q=new Set,oe=[];async function F(t=!1){let e=document.getElementById("notifications-list");if(!e)return;et(),t&&(e.innerHTML="<p>Updating...</p>");let i=localStorage.getItem("service_map");if(!i){e.innerHTML=E("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=E("error","Invalid service map data.");return}if(!o){e.innerHTML=E("error","Event service not found in service map.");return}let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let u=await fetch(v);if(!u.ok)throw new Error("Service is offline or unreachable.");let f=(await u.json()).events||[];G=Date.now(),_(0,G);let x=Date.now(),a=24*60*60*1e3,n=f.filter(g=>{let b=localStorage.getItem(`notification_read_ts_${g.id}`);if(!b)return!0;let w=parseInt(b);return x-w<a});n.sort((g,b)=>{let w=N=>{let T=N.event;if(typeof T=="string")try{T=JSON.parse(T)}catch{return"low"}return(T.priority||"low").toLowerCase()},H=N=>N==="critical"?4:N==="high"?3:N==="medium"?2:1,A=H(w(g)),M=H(w(b));return A!==M?M-A:b.timestamp-g.timestamp}),oe=n;let m=g=>{let b=g.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return"low"}return(b.priority||"low").toLowerCase()},c=[],s=new Set(n.map(g=>m(g))).size>1;if(n.length>0){let g=null;n.forEach(b=>{let w=m(b);s&&w!==g&&(c.push({id:`divider-${w}`,type:"divider",label:w.toUpperCase()}),g=w),c.push(b)})}if(t&&(e.innerHTML=""),n.length===0){e.innerHTML=E("empty","No notifications yet."),ae();return}let p=g=>{let b=g.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return null}let w=b.title||"Untitled Notification",H=b.body||"No description provided.",A=b.priority||"low",M=!!b.alert,N=b.category||"system",T=b.related_event_ids||[],I=!!localStorage.getItem(`notification_read_ts_${g.id}`),k=new Date(g.timestamp*1e3),U=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),me=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),ne=I?"event-border-grey":"event-border-blue";!I&&M&&(ne="event-border-red"),I&&(A==="high"||A==="critical")?ne="event-border-red":I&&A==="medium"&&(ne="event-border-orange");let Ve=I?"notification-read":"notification-unread",$e=q.has(g.id),Ye=$e?"expanded":"",Ke=$e?"display: block;":"display: none;",Se="",Ee="";T.length>0&&(Ee=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${T.map(X=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${X.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),Se=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${A==="high"||A==="critical"?"#ff4d4d":A==="medium"?"#ffa500":"#888"}">${A.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${C(H)}</p>
                </div>
                ${Ee}
            `;let j=document.createElement("div");j.className=`event-item notification-item ${ne} ${Ve} ${Ye} cursor-pointer`,j.dataset.notificationId=g.id,j.onclick=function(X){if(this.classList.contains("expanded")){this.classList.remove("expanded"),q.delete(g.id);let Q=this.querySelector(".event-details");Q&&(Q.style.display="none")}else{this.classList.add("expanded"),q.add(g.id);let Q=this.querySelector(".event-details");if(Q&&(Q.style.display="block"),!localStorage.getItem(`notification_read_ts_${g.id}`)){localStorage.setItem(`notification_read_ts_${g.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ve="event-border-grey";A==="high"||A==="critical"?ve="event-border-red":A==="medium"&&(ve="event-border-orange"),this.classList.add(ve),ae()}}},j.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${U}</span>
                    <span class="event-date">${me}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${N.toUpperCase()} ${M?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${w}</div>
                    <div class="event-details" style="${Ke}">
                        <div class="event-details-header">
                            <h4>${M?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${Se}
                    </div>
                </div>
            `;let Le=j.querySelector(".close-details-btn");return Le&&Le.addEventListener("click",X=>{X.stopPropagation(),j.classList.remove("expanded");let ue=j.querySelector(".event-details");ue&&(ue.style.display="none"),q.delete(g.id)}),j},y=g=>{let b=document.createElement("div");b.className="notification-divider",b.dataset.notificationId=g.id;let w="#888888";return g.label==="CRITICAL"?w="#ff4d4d":g.label==="HIGH"?w="#ff8888":g.label==="MEDIUM"&&(w="#ffa500"),b.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${w}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,b.innerHTML=`<span style="white-space: nowrap;">${g.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${w}44, transparent); flex-grow: 1;"></div>`,b},$=Array.from(e.children),L=new Map($.map(g=>[g.dataset.notificationId,g])),S=new Set(c.map(g=>g.id));$.forEach(g=>{let b=g.dataset.notificationId;(!b||!S.has(b))&&g.remove()});let h=null;c.forEach((g,b)=>{let w=L.get(g.id);(!w||t)&&(w&&w.remove(),g.type==="divider"?w=y(g):w=p(g),!w)||(b===0?e.firstElementChild!==w&&e.prepend(w):h&&h.nextElementSibling!==w&&h.after(w),h=w)}),G=Date.now(),_(0,G),ae()}catch(u){console.error("Error fetching notifications:",u),e.children.length===0&&(e.innerHTML=E("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function et(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),i=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{oe.forEach(l=>{localStorage.getItem(`notification_read_ts_${l.id}`)||localStorage.setItem(`notification_read_ts_${l.id}`,Date.now().toString())}),F(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{oe.forEach(l=>{q.add(l.id),localStorage.getItem(`notification_read_ts_${l.id}`)||localStorage.setItem(`notification_read_ts_${l.id}`,Date.now().toString())}),F(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{q.clear(),F(!0)},i.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let l=Date.now()-1728e5;oe.forEach(v=>{localStorage.setItem(`notification_read_ts_${v.id}`,l.toString())}),q.clear(),F(!0)},o.dataset.listenerAttached="true")}var Oe=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,le=null,V=new Set,Pe=[];async function te(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;tt();let i=localStorage.getItem("service_map");if(!i){e.innerHTML=E("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=E("error","Invalid service map data.");return}if(!o){e.innerHTML=E("error","Event service not found in service map.");return}let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.blueprint.generated`;try{let u=await fetch(v);if(!u.ok)throw new Error("Service is offline or unreachable.");let f=(await u.json()).events||[];if(Pe=f,le=Date.now(),_(1,le),f.length===0){e.innerHTML=E("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),P(1,0);return}t&&(e.innerHTML="");let x=r=>{let s=r.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let p=s.title||"Untitled Blueprint",y=s.summary||s.body||"No summary provided.",$=s.content||"",L=s.category||"architecture",S=s.affected_services||[],h=s.implementation_path||[],g=new Date(r.timestamp*1e3),b=g.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),w=g.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),H=V.has(r.id),A=H?"display: block;":"display: none;",M=document.createElement("div");M.className=`event-item notification-item event-border-purple cursor-pointer ${H?"expanded":""}`,M.dataset.blueprintId=r.id,M.onclick=function(I){if(this.classList.contains("expanded")){this.classList.remove("expanded"),V.delete(r.id);let U=this.querySelector(".event-details");U&&(U.style.display="none")}else{this.classList.add("expanded"),V.add(r.id);let U=this.querySelector(".event-details");U&&(U.style.display="block")}};let N=S.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${S.join(", ")}</div>`:"",T="";h.length>0&&(T=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${h.map(I=>`<li>${C(I)}</li>`).join("")}
                        </ul>
                    </div>
                `),M.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${b}</span>
                    <span class="event-date">${w}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${L.toUpperCase()}</div>
                    <div class="event-message">${p}</div>
                    <div class="event-details" style="${A}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${C(y)}
                        </div>
                        ${N}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${C($)}</p>
                        </div>
                        ${T}
                    </div>
                </div>
            `;let D=M.querySelector(".close-details-btn");return D&&D.addEventListener("click",I=>{I.stopPropagation(),M.classList.remove("expanded");let k=M.querySelector(".event-details");k&&(k.style.display="none"),V.delete(r.id)}),M},a=Array.from(e.children),n=new Map(a.map(r=>[r.dataset.blueprintId,r])),m=new Set(f.map(r=>r.id));a.forEach(r=>{let s=r.dataset.blueprintId;(!s||!m.has(s))&&r.remove()});let c=null;f.forEach((r,s)=>{let p=n.get(r.id);(!p||t)&&(p&&p.remove(),p=x(r),!p)||(s===0?e.firstElementChild!==p&&e.prepend(p):c&&c.nextElementSibling!==p&&c.after(p),c=p)}),P(1,f.length)}catch(u){console.error("Error fetching blueprints:",u),e.children.length===0&&(e.innerHTML=E("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function tt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Pe.forEach(i=>V.add(i.id)),te(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{V.clear(),te(!0)},e.dataset.listenerAttached="true")}var qe=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':E("config","No service map configured.","Upload service-map.json in Settings."),Fe=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':E("config","No service map configured.","Upload service-map.json in Settings."),We=()=>localStorage.getItem("service_map")?`
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
    `:E("config","No service map configured.","Upload service-map.json in Settings."),re=null,ce=null,de=null;async function ze(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,l=await fetch(o);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function st(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,l=await fetch(o);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return await l.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function nt(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/analyst/status`,l=await fetch(o);return l.ok?await l.json():null}catch{return null}}async function xe(){let t=document.getElementById("services-widgets");if(!t)return;let e=await ze();if(!e||!e.services){t.innerHTML=E("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}re=Date.now(),_(5,re);let i=e.services||[];Array.from(t.children).forEach(a=>{a.classList.contains("service-widget")||a.remove()});function o(a){return!a||a==="N/A"||a==="unknown"||a.trim()===""?"-":a}function l(a){if(!a||a==="N/A"||a==="unknown")return"-";let n=a.match(/^(\d+\.\d+\.\d+)/);return n?n[0]:a.split(".").slice(0,3).join(".")||"-"}function v(a){return!a||a.length<=28?a:a.substring(0,28)+"..."}function u(a){if(!a||a==="N/A"||a==="unknown")return"-";let n=a.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!n)return"-";let m=parseInt(n[1])||0,c=parseInt(n[2])||0,r=parseInt(n[3])||0,s=parseFloat(n[4])||0,p=m*86400+c*3600+r*60+s,y=Math.floor(p/86400);if(y>0)return`${y}d`;let $=Math.floor(p/3600);if($>0)return`${$}h`;let L=Math.floor(p/60);return L>0?`${L}m`:`${Math.floor(p)}s`}function d(a){let n=a.status==="online",m=n?"service-widget-online":"service-widget-offline",c=n?"bx-check-circle":"bx-x-circle",r=n?"OK":"BAD",s=a.version?l(a.version.str):"-",p=a.cpu&&a.cpu!=="N/A"?a.cpu:"-",y=a.memory&&a.memory!=="N/A"?a.memory:"-",$=p!=="-"?"#00ff00":"#666",L=p!=="-"?"#fff":"#666",S=y!=="-"?"#00ff00":"#666",h=y!=="-"?"#fff":"#666",g=u(a.uptime),b="";return n?b=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${s}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${g}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${$};"></i>
                        <span style="color: ${L};">${p}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${S};"></i>
                        <span style="color: ${h};">${y}</span>
                    </div>
                </div>`:b='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${m}" data-service-id="${a.id}"><div class="service-widget-header"><i class="bx ${c}"></i><h3>${a.short_name||a.id}</h3><span class="service-widget-status">${r}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${v(a.domain&&a.port?`${a.domain}:${a.port}`:"")}</span></div>${b}</div></div>`}let f=new Map(Array.from(t.querySelectorAll(".service-widget")).map(a=>[a.dataset.serviceId,a])),x=new Set(i.map(a=>a.id));for(let[a,n]of f)x.has(a)||n.remove();i.forEach(a=>{let n=d(a),m=f.get(a.id);m?m.outerHTML!==n&&(m.outerHTML=n):t.insertAdjacentHTML("beforeend",n)})}async function we(){let t=document.getElementById("models-widgets");if(!t)return;let e=await ze();if(!e){t.innerHTML=E("offline","Failed to load model status.");return}ce=Date.now(),_(4,ce);let i=e.models||[],o=e.whisper;Array.from(t.children).forEach(d=>{d.classList.contains("service-widget")||d.remove()});function l(d){let f=d.status==="Ready";return`
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
                </div>`}function v(d){let f=d.status==="Downloaded",x=f?"service-widget-online":"service-widget-offline",a=f?"OK":"MISSING",n=f&&d.size>0?`${(d.size/1e9).toFixed(2)} GB`:"-",m=d.name;return d.type==="custom"&&m.endsWith(":latest")&&(m=m.replace(":latest","")),`<div class="service-widget ${x}" data-model-name="${d.name}"><div class="service-widget-header"><i class="bx ${f?"bx-check-circle":"bx-x-circle"}"></i><h3>${m}</h3><span class="service-widget-status">${a}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${d.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${n}</span></div></div></div>`}let u="";if(o&&(u+=l(o)),u+=i.map(v).join(""),!u){t.innerHTML=E("empty","No models found.");return}t.innerHTML!==u&&(t.innerHTML=u)}async function pe(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),i=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),l=document.getElementById("analyst-idle-val"),v=document.getElementById("analyst-reset-btn");v&&!v.dataset.listenerAttached&&(v.onclick=async()=>{if(!localStorage.getItem("service_map"))return;let m=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(s=>s.id==="dex-event-service");if(!m)return;let r=`http://${m.domain==="0.0.0.0"?"127.0.0.1":m.domain}:${m.port}/analyst/reset?tier=all`;v.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(r,{method:"POST"}),setTimeout(()=>{v.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{v.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),pe()}catch{v.innerHTML="<i class='bx bx-error'></i> Failed"}},v.dataset.listenerAttached="true");let u=await nt();if(u){let n=Math.floor(Date.now()/1e3),m=u.active_tier,c=(r,s,p)=>{if(m===p||p==="guardian"&&m==="tests"){r.textContent="Working",r.style.color="#bb86fc";return}let y=s-n;if(y<=0)r.textContent="Ready",r.style.color="#5eff5e";else{let $=Math.floor(y/60),L=y%60;r.textContent=`${$}m ${L}s`,r.style.color="#fff"}};if(e&&u.guardian&&c(e,u.guardian.next_run,"guardian"),i&&u.architect&&c(i,u.architect.next_run,"architect"),o&&u.strategist&&c(o,u.strategist.next_run,"strategist"),l&&u.system_idle_time!==void 0){let r=u.system_idle_time,s=Math.floor(r/60),p=r%60;l.textContent=`${s}m ${p}s`,r>300?l.style.color="#5eff5e":r>60?l.style.color="#ffa500":l.style.color="#fff"}}else[e,i,o,l].forEach(m=>{m&&(m.textContent="Offline",m.style.color="#ff4d4d")});let d=await st();if(d===null){t.innerHTML=E("offline","Failed to load process status.");return}if(de=Date.now(),_(2,de),d.length===0){t.innerHTML=E("empty","No active processes."),P(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function f(n){let m=Math.floor(Date.now()/1e3-n.start_time),c=n.retries>0?`<span class="process-retry-badge">Retry ${n.retries}</span>`:"",r=n.channel_id,s={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return s[r]?r=s[r]:/^\d+$/.test(r)&&(r=`Channel ${r}`),`
                <div class="service-widget process-widget" data-channel-id="${n.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>${r}</h3>
                        ${c}
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
                </div>`}let x=new Map(Array.from(t.querySelectorAll(".process-widget")).map(n=>[n.dataset.channelId,n])),a=new Set(d.map(n=>n.channel_id));for(let[n,m]of x)a.has(n)||m.remove();d.forEach(n=>{let m=f(n),c=x.get(n.channel_id);c?c.outerHTML!==m&&(c.outerHTML=m):t.insertAdjacentHTML("beforeend",m)}),P(2,d.length)}function Y(){let t=be(),e=ie()||"user@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(B).map(l=>`
                    <div class="theme-card ${t===l?"active":""}" data-theme="${l}">
                        <div class="theme-preview theme-preview-${l.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${l}</h3>
                            <p>${l===B.AUTO?"Automatic theme selection.":l===B.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <span class="settings-item-description">${i.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${i.enabled?"checked":""} ${i.supported?"":"disabled"}>
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
            </div>`}function se(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(d=>{d.addEventListener("click",function(){let f=this.dataset.theme;Ce(f),t.setContent(Y()),se(t)})});function i(d,f,x,a,n,m,c){let r=document.getElementById(d),s=document.getElementById(f),p=document.getElementById(x),y=document.getElementById(a),$=document.getElementById(n);r&&s&&(r.onclick=()=>s.click(),s.onchange=L=>{let S=L.target.files[0];if(!S)return;if(S.name!==c){y.textContent=`File must be named "${c}"`,y.style.display="block",s.value="";return}let h=new FileReader;h.onload=g=>{try{let b=JSON.parse(g.target.result);localStorage.setItem(m,JSON.stringify(b)),p.textContent=c,y.style.display="none",t.setContent(Y()),se(t)}catch{y.textContent="Invalid JSON format",y.style.display="block",s.value=""}},h.onerror=()=>{y.textContent="Failed to read file",y.style.display="block",s.value=""},h.readAsText(S)}),$&&($.onclick=()=>{localStorage.removeItem(m),t.setContent(Y()),se(t)})}i("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),i("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),i("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let d="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!d||d.state==="denied")&&(o.disabled=!0),o.onclick=async f=>{if(f.target.checked)try{await Notification.requestPermission()!=="granted"&&(f.target.checked=!1)}catch{f.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),f.target.checked=!0)}}let l=document.getElementById("microphone-toggle");async function v(){let d="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;l&&(l.disabled=!d||d.state==="denied",l.checked=d?.state==="granted");let f=document.querySelector("#microphone-setting-item .settings-item-description");f&&(f.textContent=d?d.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}v(),l&&!l.disabled&&(l.onclick=async d=>{if(d.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),v()}catch{d.target.checked=!1,v()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),d.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=d=>{let f=d.target.checked;localStorage.setItem("easter_analytics_enabled",f),window.EASTER_ANALYTICS_ENABLED=f,window.EASTER_DEBUG_MODE=f})}var Re=()=>`
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
`,W=new Set,Je=[],K=null;async function O(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;it();let i=localStorage.getItem("service_map");if(!i)return;let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{return}if(!o)return;let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/roadmap`;try{let u=await fetch(v);if(!u.ok)throw new Error("Offline");let d=await u.json();if(Je=d,d.length===0){e.innerHTML=E("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let f=c=>{let r=W.has(c.id),s=c.state==="draft",p=c.state==="published",y=c.state==="consumed",$="event-border-grey";p&&($="event-border-blue"),y&&($="event-border-purple");let S=new Date(c.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${$} cursor-pointer ${r?"expanded":""}`,h.dataset.itemId=c.id,h.onclick=b=>{if(b.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",W.delete(c.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",W.add(c.id))};let g=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${c.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${S.split(",")[1]}</span>
          <span class="event-date">${S.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${g}</div>
          <div class="event-message" style="white-space: pre-wrap;">${C(c.content)}</div>
          <div class="event-details" style="${r?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${y?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${p?"bx-pause":"bx-rocket"}'></i> ${p?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${y?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(c.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>at(c)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>ot(c)),h.querySelector(".delete-btn")?.addEventListener("click",()=>lt(c.id)),h.querySelector(".close-details-btn")?.addEventListener("click",b=>{b.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",W.delete(c.id)}),h},x=Array.from(e.children),a=new Map(x.map(c=>[c.dataset.itemId,c])),n=new Set(d.map(c=>c.id));x.forEach(c=>{let r=c.dataset.itemId;(!r||!n.has(r))&&c.remove()});let m=null;d.forEach((c,r)=>{let s=a.get(c.id);(!s||t)&&(s&&s.remove(),s=f(c),!s)||(r===0?e.firstElementChild!==s&&e.prepend(s):m&&m.nextElementSibling!==s&&m.after(s),m=s)})}catch{e.innerHTML=E("error","Failed to load roadmap.")}}function it(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),l=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{K=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",K=null},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let v=document.getElementById("roadmap-editor-input").value;if(!v.trim())return;let d=JSON.parse(localStorage.getItem("service_map")).services.cs.find(n=>n.id==="dex-event-service"),f=d.domain==="0.0.0.0"?"127.0.0.1":d.domain,x=K?`http://${f}:${d.port}/roadmap/${K}`:`http://${f}:${d.port}/roadmap`,a=K?"PATCH":"POST";try{await fetch(x,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:v})}),document.getElementById("roadmap-editor-container").style.display="none",O(!0)}catch(n){console.error(n)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{Je.forEach(v=>W.add(v.id)),O(!0)},o.dataset.listenerAttached="true"),l&&!l.dataset.listenerAttached&&(l.onclick=()=>{W.clear(),O(!0)},l.dataset.listenerAttached="true")}function at(t){K=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function ot(t){let e=t.state==="published"?"draft":"published",o=JSON.parse(localStorage.getItem("service_map")).services.cs.find(v=>v.id==="dex-event-service"),l=o.domain==="0.0.0.0"?"127.0.0.1":o.domain;try{await fetch(`http://${l}:${o.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),O(!0)}catch(v){console.error(v)}}async function lt(t){if(!confirm("Delete this roadmap item?"))return;let i=JSON.parse(localStorage.getItem("service_map")).services.cs.find(l=>l.id==="dex-event-service"),o=i.domain==="0.0.0.0"?"127.0.0.1":i.domain;try{await fetch(`http://${o}:${i.port}/roadmap/${t}`,{method:"DELETE"}),W.delete(t),O(!0)}catch(l){console.error(l)}}function Ge(){Ne(),Te();let t=Me();Ie(t),_e();let e=document.querySelector("footer"),i=null;function o(){i=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(n=>n.classList.remove("active","inactive"))}function l(n,m=null){let c=i&&i.id===n.id;i&&i.close(!c),c?i=null:setTimeout(()=>{n.open(),i=n,document.querySelectorAll(".nav-right i").forEach(r=>{let s=r===m;r.classList.toggle("active",s),r.classList.toggle("inactive",!s&&m)}),e?.classList.add("hide")},i?220:0)}async function v(){await Promise.all([xe(),we(),ee(),pe(),F(),te(),ye()]);let n=setInterval(()=>{if(!a.isOpen())return clearInterval(n);_(4,he),_(3,R),_(5,ce),_(6,re),_(2,de),_(1,le),_(0,G)},1e3),m=setInterval(()=>{if(!a.isOpen())return clearInterval(m);ee(),pe(),F(),te(),ye()},3e3),c=setInterval(()=>{if(!a.isOpen())return clearInterval(c);xe(),we()},6e4)}async function u(){await O();let n=setInterval(()=>{if(!f.isOpen())return clearInterval(n);O()},5e3)}let d=Z({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),f=Z({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${ie()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:Re(),"data-tab-index":1}],icon:"bx-user",onClose:o,onOpen:()=>setTimeout(u,100)}),x=Z({id:"settings-window",title:"Settings",content:Y(),icon:"bx-cog",onClose:o,onOpen:()=>{x.setContent(Y()),setTimeout(()=>se(x),50)}}),a=Z({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:je(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:Oe(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:We(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:He(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:De(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:Fe(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:qe(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:o,onOpen:()=>setTimeout(v,100)});t?(document.getElementById("user-icon")?.addEventListener("click",n=>l(f,n.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",n=>l(a,n.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",n=>l(x,n.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{l(d),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{ke(document.getElementById("email-input").value),window.location.reload()}catch(m){let c=document.getElementById("login-error");c&&(c.textContent=m.message,c.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ge):Ge();})();
//# sourceMappingURL=dex.472ed1ac.js.map
