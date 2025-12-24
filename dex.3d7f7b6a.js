(()=>{function ye(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function we(t=!1){let n=`
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
    `,o=document.createElement("nav");o.innerHTML=n,document.body.prepend(o)}function xe(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function V(t){let e=null,n=t.onClose||null,o=t.onOpen||null;function a(){if(e){e.classList.add("open"),window.addEventListener("resize",d),o&&setTimeout(o,10);return}let s=document.getElementById("windows-container");s||(s=document.createElement("div"),s.id="windows-container",s.className="windows-container",document.body.appendChild(s)),e=document.createElement("div"),e.id=t.id,e.className="window";let p=t.icon||"bx-window",g="",b="",r;t.tabs&&t.tabs.length>0?(g=`<div class="tab-bar">${t.tabs.map((h,y)=>{let L;return h.icon?L=`<i class="bx ${h.icon}"></i>`:h.title&&h.title.length>0?L=`<span class="tab-glyph">${h.title.charAt(0).toUpperCase()}</span>`:L='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${y===0?"active":""}" data-tab-index="${y}">
                        ${L}
                        <span class="tab-title">${h.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${y}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,r=`<div class="window-content">${t.tabs.map((h,y)=>`<div class="tab-content ${y===0?"active":""}" data-tab-content="${y}">${h.content}</div>`).join("")}</div>`):(t.title&&(b=`<div class="window-title">${t.title}</div>`),r=`<div class="window-content">${t.content}</div>`);let i=`
            <div class="window-header">
                <i class="bx ${p}"></i>
                ${g}
                ${b}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=i+r,s.appendChild(e);let c=e.querySelector(".window-close");c&&c.addEventListener("click",m=>{m.stopPropagation(),l()}),window.addEventListener("resize",d),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(f=>{f.addEventListener("click",()=>{let h=f.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(y=>y.classList.remove("active")),f.classList.add("active"),e.querySelectorAll(".tab-content").forEach(y=>y.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${h}"]`).classList.add("active"),u(f,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function d(){if(!e||!e.classList.contains("open"))return;let s=e.querySelector(".tab.active");s&&u(s,e)}function u(s,p){setTimeout(()=>{let g=p.querySelector(".tab-bar");if(g){let b=Array.from(g.querySelectorAll(".tab")),r=b.indexOf(s),i=g.clientWidth,c=b[Math.max(0,r-2)],m=b[Math.min(b.length-1,r+2)],f=c.offsetLeft-g.offsetLeft-25,y=m.offsetLeft+m.offsetWidth-g.offsetLeft+25-f,L;y<=i?L=f-(i-y)/2:L=s.offsetLeft-g.offsetLeft-i/2+s.offsetWidth/2,g.scrollTo({left:L,behavior:"smooth"})}},350)}function l(s=!1){e&&(window.removeEventListener("resize",d),s?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),n&&n(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function v(s){if(e){let p=e.querySelector(".window-content");p&&(p.innerHTML=s)}}function w(){return e&&e.classList.contains("open")}return{open:a,close:l,setContent:v,isOpen:w,id:t.id}}var ce="easter_user_email";function $e(){return localStorage.getItem(ce)!==null}function Q(){return localStorage.getItem(ce)}function Se(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(ce,t.trim())}var Le="easter_theme",C={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function pe(){return localStorage.getItem(Le)||C.AUTO}function Oe(){let t=window.innerWidth,e=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?C.ANIMATED:(t===1920&&e===1080&&n||t<=1920||e<=1080,C.DEFAULT)}function Ee(t){if(!Object.values(C).includes(t))throw new Error("Invalid theme");localStorage.setItem(Le,t),de(t)}function de(t,e=!1){let n=document.body,o=t===C.AUTO?Oe():t;if(e||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(C).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${t}`),o===C.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(e?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function Te(){let t=pe();if(de(t,!0),t===C.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{de(C.AUTO)},300)})}}function W(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",d=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${a} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${d}
        </div>
    `}function _e(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var me=null;async function ue(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=W("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(e)}catch(u){return console.error("Error parsing service_map from localStorage:",u),t.classList.add("placeholder-active"),t.innerHTML=W("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let o=null;if(n&&typeof n.services=="object"){let u=["cs","be","th"];for(let l of u)if(Array.isArray(n.services[l])){let v=n.services[l].find(w=>w.short_name==="event"||w.id==="event"||w.id==="dex-event-service");if(v){o=v;break}}}if(!o)return t.classList.add("placeholder-active"),t.innerHTML=W("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let d=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/logs`;try{let u=await fetch(d);if(!u.ok)return t.classList.add("placeholder-active"),t.innerHTML=W("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await u.json();if(!l||l.length===0)return t.classList.add("placeholder-active"),t.innerHTML=W("empty","No logs found.","Service logs will appear here when available."),!1;let v=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],w=l.filter(p=>!v.includes(p.id));w.forEach(p=>{p.logs&&Array.isArray(p.logs)?p.logs.reverse():p.logs=[]}),w.reverse();let s=w.map(p=>{let g=p.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${p.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(g)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return t.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(p=>{p.addEventListener("click",()=>{let g=unescape(p.dataset.logs);navigator.clipboard.writeText(g).then(()=>{let b=p.querySelector("i");b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3)})})}),me=Date.now(),!0}catch(u){return console.error("Error fetching logs:",u),t.classList.add("placeholder-active"),t.innerHTML=W("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function x(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",d=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${d}</div>`}function I(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!n)return;if(!e){n.textContent="Last updated: never";return}let a=(Date.now()-e)/1e3,d;if(a<30)d=`${Math.floor(a)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${d}`}function B(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!n)return;let o=n.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function Z(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;B(0,e)}var Pe={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function ke(t,e){let n=Pe[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),!n)return t;let o=n.replace(/\{(\w+)\}/g,(a,d)=>e[d]!==void 0&&e[d]!==null?e[d]:a);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var Me=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,ee=null,R=new Set,Ie=[];async function Y(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Fe();let n=localStorage.getItem("service_map");if(!n){e.innerHTML=x("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=x("error","Invalid service map data.");return}if(!o){e.innerHTML=x("error","Event service not found in service map.");return}let d=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let u=await fetch(d);if(!u.ok)throw new Error("Service is offline or unreachable.");let v=(await u.json()).events||[];if(Ie=v,v.length===0){e.innerHTML=x("empty","No events found.");return}t&&(e.innerHTML="");let w=r=>{let i=r.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.type,m=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command",f="event-border-grey";m&&(c==="moderation.explicit_content.deleted"?f="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"?f="event-border-purple":c==="system.cli.command"?f="event-border-orange":f="event-border-blue");let h=m?"cursor-pointer":"",y=R.has(r.id),L=y?"expanded":"",N=y?"display: block;":"display: none;",S=new Date(r.timestamp*1e3),H=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),q=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),O=ke(c,i),A="";if(m){let E="";if(c==="engagement.decision")E=`
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
                        `;else if(c==="messaging.bot.sent_message")E=`
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
                        `;else if(c==="moderation.explicit_content.deleted")E=`
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
                                <pre class="detail-pre">${I(i.raw_output)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.link.completed")E=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${I(i.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${I(i.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${I(i.summary)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.visual.completed"){let M="";i.base64_preview?M=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(M=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),E=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${i.filename}</span>
                            </div>
                            ${M}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${I(i.description)||"None"}</pre>
                            </div>
                        `}else if(c==="system.cli.command")E=`
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
                                <pre class="detail-pre">${I(i.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(c==="messaging.user.sent_message"){let M="";i.attachments&&i.attachments.length>0&&(M=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${i.attachments.map($=>{let P=$.content_type&&$.content_type.startsWith("image/"),X=($.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${P?`<div class="attachment-thumb-container"><img src="${$.url}" alt="${$.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${$.url}" target="_blank" class="attachment-link">${$.filename}</a>
                                            <span class="attachment-meta">${$.content_type} \u2022 ${X}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),E=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${i.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${i.content||"(empty)"}</pre>
                            </div>
                            ${M}
                         `}A=`
                        <div class="event-details" style="${N}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${E}
                        </div>
                    `}let k=document.createElement("div");if(k.className=`event-item ${f} ${h} ${L}`,k.dataset.eventId=r.id,k.onclick=function(E){if(!m)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),R.delete(r.id);let T=this.querySelector(".event-details");T&&(T.style.display="none")}else{this.classList.add("expanded"),R.add(r.id);let T=this.querySelector(".event-details");T&&(T.style.display="block")}},k.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${H}</span>
                        <span class="event-date">${q}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${r.service}</div>
                        <div class="event-message">${O}</div>
                        ${A}
                    </div>
                `,m){let E=k.querySelector(".close-details-btn");E&&E.addEventListener("click",M=>{M.stopPropagation();let T=M.target.closest(".event-item");if(T){T.classList.remove("expanded"),R.delete(r.id);let $=T.querySelector(".event-details");$&&($.style.display="none")}})}return k},s=Array.from(e.children),p=new Map(s.map(r=>[r.dataset.eventId,r])),g=new Set(v.map(r=>r.id));s.forEach(r=>{let i=r.dataset.eventId;(!i||!g.has(i))&&r.remove()});let b=null;v.forEach((r,i)=>{let c=p.get(r.id);(!c||t)&&(c&&c.remove(),c=w(r),!c)||(i===0?e.firstElementChild!==c&&e.prepend(c):b&&b.nextElementSibling!==c&&b.after(c),b=c)}),ee=Date.now(),_(3,ee)}catch(u){console.error("Error fetching events:",u),e.children.length===0&&(e.innerHTML=x("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Fe(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ie.forEach(n=>R.add(n.id)),Y(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{R.clear(),Y(!0)},e.dataset.listenerAttached="true")}var Ce=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,se=null,j=new Set,te=[];async function U(t=!1){let e=document.getElementById("notifications-list");if(!e)return;We(),t&&(e.innerHTML="<p>Updating...</p>");let n=localStorage.getItem("service_map");if(!n){e.innerHTML=x("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=x("error","Invalid service map data.");return}if(!o){e.innerHTML=x("error","Event service not found in service map.");return}let d=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.notification.generated,system.analysis.audit`;try{let u=await fetch(d);if(!u.ok)throw new Error("Service is offline or unreachable.");let v=(await u.json()).events||[],w=Date.now(),s=24*60*60*1e3,p=v.filter(m=>{let f=localStorage.getItem(`notification_read_ts_${m.id}`);if(!f)return!0;let h=parseInt(f);return w-h<s});if(te=p,t&&(e.innerHTML=""),p.length===0){e.innerHTML=x("empty","No notifications yet."),Z();return}let g=m=>{let f=m.event;if(typeof f=="string")try{f=JSON.parse(f)}catch{return null}let y=f.type==="system.analysis.audit",L=y?`Analysis Audit: ${f.tier?.toUpperCase()}`:f.title||"Untitled Notification",N=y?"Raw analyst input and output logs.":f.body||"No description provided.",S=y?"low":f.priority||"low",H=!y&&!!f.alert,q=y?"audit":f.category||"system",O=f.related_event_ids||[],k=!!localStorage.getItem(`notification_read_ts_${m.id}`),E=new Date(m.timestamp*1e3),M=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),$=k?"event-border-grey":"event-border-blue";y&&($=k?"event-border-grey":"event-border-purple"),!k&&H&&($="event-border-red"),k&&(S==="high"||S==="critical")?$="event-border-red":k&&S==="medium"&&($="event-border-orange");let P=k?"notification-read":"notification-unread",X=j.has(m.id),Ue=X?"expanded":"",qe=X?"display: block;":"display: none;",le="";if(y)le=`
                    <div class="event-detail-row">
                        <span class="detail-label">Tier:</span>
                        <span class="detail-value">${f.tier}</span>
                    </div>
                    <div class="event-detail-row">
                        <span class="detail-label">Model:</span>
                        <span class="detail-value">${f.model}</span>
                    </div>
                    <div class="event-detail-block">
                        <span class="detail-label">Raw Output:</span>
                        <pre class="detail-pre">${I(f.raw_output)}</pre>
                    </div>
                    <div class="event-detail-block">
                        <span class="detail-label">Raw Input (Prompt):</span>
                        <pre class="detail-pre">${I(f.raw_input)}</pre>
                    </div>
                `;else{let F="";O.length>0&&(F=`
                        <div class="event-detail-row">
                            <span class="detail-label">Related Events:</span>
                            <span class="detail-value">${O.map(J=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${J.substring(0,8)}...</span>`).join(", ")}</span>
                        </div>`),le=`
                    <div class="event-detail-row">
                        <span class="detail-label">Priority:</span>
                        <span class="detail-value" style="color: ${S==="high"||S==="critical"?"#ff4d4d":S==="medium"?"#ffa500":"#888"}">${S.toUpperCase()}</span>
                    </div>
                    <div class="event-detail-block" style="text-align: left;">
                        <span class="detail-label">Insight:</span>
                        <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${I(N)}</p>
                    </div>
                    ${F}
                `}let D=document.createElement("div");D.className=`event-item notification-item ${$} ${P} ${Ue} cursor-pointer`,D.dataset.notificationId=m.id,D.onclick=function(F){if(this.classList.contains("expanded")){this.classList.remove("expanded"),j.delete(m.id);let G=this.querySelector(".event-details");G&&(G.style.display="none")}else{this.classList.add("expanded"),j.add(m.id);let G=this.querySelector(".event-details");if(G&&(G.style.display="block"),!localStorage.getItem(`notification_read_ts_${m.id}`)){localStorage.setItem(`notification_read_ts_${m.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let re="event-border-grey";S==="high"||S==="critical"?re="event-border-red":S==="medium"&&(re="event-border-orange"),this.classList.add(re),Z()}}},D.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${M}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${q.toUpperCase()} ${H?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${L}</div>
                    <div class="event-details" style="${qe}">
                        <div class="event-details-header">
                            <h4>${y?"Audit":H?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${le}
                    </div>
                </div>
            `;let he=D.querySelector(".close-details-btn");return he&&he.addEventListener("click",F=>{F.stopPropagation(),D.classList.remove("expanded");let J=D.querySelector(".event-details");J&&(J.style.display="none"),j.delete(m.id)}),D},b=Array.from(e.children),r=new Map(b.map(m=>[m.dataset.notificationId,m])),i=new Set(p.map(m=>m.id));b.forEach(m=>{let f=m.dataset.notificationId;(!f||!i.has(f))&&m.remove()});let c=null;p.forEach((m,f)=>{let h=r.get(m.id);(!h||t)&&(h&&h.remove(),h=g(m),!h)||(f===0?e.firstElementChild!==h&&e.prepend(h):c&&c.nextElementSibling!==h&&c.after(h),c=h)}),se=Date.now(),_(0,se),Z()}catch(u){console.error("Error fetching notifications:",u),e.children.length===0&&(e.innerHTML=x("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function We(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{te.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),U(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{te.forEach(a=>{j.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),U(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{j.clear(),U(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let a=Date.now()-1728e5;te.forEach(d=>{localStorage.setItem(`notification_read_ts_${d.id}`,a.toString())}),j.clear(),U(!0)},o.dataset.listenerAttached="true")}var Ae=()=>'<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>',ne=null;async function ve(){let t=document.getElementById("blueprints-list");if(!t)return;let e=localStorage.getItem("service_map");if(!e){t.innerHTML=x("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(e).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{t.innerHTML=x("error","Invalid service map data.");return}if(!n){t.innerHTML=x("error","Event service not found in service map.");return}let a=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let d=await fetch(a);if(!d.ok)throw new Error("Service is offline or unreachable.");let l=(await d.json()).events||[];if(l.length===0){t.innerHTML=x("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),B(1,0);return}let v=r=>{let i=r.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.title||"Untitled Blueprint",m=i.summary||i.body||"No summary provided.",f=i.content||"",h=i.category||"architecture",y=i.affected_services||[],L=i.implementation_path||[],N=new Date(r.timestamp*1e3),S=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),H=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),q=w.has(r.id),O=q?"display: block;":"display: none;",A=document.createElement("div");A.className=`event-item notification-item event-border-purple cursor-pointer ${q?"expanded":""}`,A.dataset.blueprintId=r.id,A.onclick=function(T){this.classList.toggle("expanded");let $=this.querySelector(".event-details");if($){let P=$.style.display==="none";$.style.display=P?"block":"none",P?w.add(r.id):w.delete(r.id)}};let k=y.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${y.join(", ")}</div>`:"",E="";L.length>0&&(E=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${L.map(T=>`<li>${I(T)}</li>`).join("")}
                        </ul>
                    </div>
                `),A.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${S}</span>
                    <span class="event-date">${H}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${c}</div>
                    <div class="event-details" style="${O}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${I(m)}
                        </div>
                        ${k}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${I(f)}</p>
                        </div>
                        ${E}
                    </div>
                </div>
            `;let M=A.querySelector(".close-details-btn");return M&&M.addEventListener("click",T=>{T.stopPropagation(),A.classList.remove("expanded");let $=A.querySelector(".event-details");$&&($.style.display="none"),w.delete(r.id)}),A},w=new Set(Array.from(t.querySelectorAll(".event-item.expanded")).map(r=>r.dataset.blueprintId).filter(r=>r)),s=Array.from(t.children),p=new Map(s.map(r=>[r.dataset.blueprintId,r])),g=new Set(l.map(r=>r.id));s.forEach(r=>{r.dataset.blueprintId&&!g.has(r.dataset.blueprintId)&&r.remove()});let b=null;l.forEach((r,i)=>{let c=p.get(r.id);!c&&(c=v(r),!c)||(i===0?t.firstElementChild!==c&&t.prepend(c):b&&b.nextElementSibling!==c&&b.after(c),b=c)}),ne=Date.now(),_(1,ne),B(1,l.length)}catch(d){console.error("Error fetching blueprints:",d),t.children.length===0&&(t.innerHTML=x("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}var Ne=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':x("config","No service map configured.","Upload service-map.json in Settings."),De=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':x("config","No service map configured.","Upload service-map.json in Settings."),He=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':x("config","No service map configured.","Upload service-map.json in Settings."),ie=null,ae=null,oe=null;async function Be(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function Re(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function fe(){let t=document.getElementById("services-widgets");if(!t)return;let e=await Be();if(!e||!e.services){t.innerHTML=x("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}ie=Date.now(),_(5,ie);let n=e.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function o(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function a(s){if(!s||s==="N/A"||s==="unknown")return"-";let p=s.match(/^(\d+\.\d+\.\d+)/);return p?p[0]:s.split(".").slice(0,3).join(".")||"-"}function d(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function u(s){if(!s||s==="N/A"||s==="unknown")return"-";let p=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!p)return"-";let g=parseInt(p[1])||0,b=parseInt(p[2])||0,r=parseInt(p[3])||0,i=parseFloat(p[4])||0,c=g*86400+b*3600+r*60+i,m=Math.floor(c/86400);if(m>0)return`${m}d`;let f=Math.floor(c/3600);if(f>0)return`${f}h`;let h=Math.floor(c/60);return h>0?`${h}m`:`${Math.floor(c)}s`}function l(s){let p=s.status==="online",g=p?"service-widget-online":"service-widget-offline",b=p?"bx-check-circle":"bx-x-circle",r=p?"OK":"BAD",i=s.version?a(s.version.str):"-",c=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",m=s.memory&&s.memory!=="N/A"?s.memory:"-",f=c!=="-"?"#00ff00":"#666",h=c!=="-"?"#fff":"#666",y=m!=="-"?"#00ff00":"#666",L=m!=="-"?"#fff":"#666",N=u(s.uptime),S="";return p?S=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${i}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${N}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${f};"></i>
                        <span style="color: ${h};">${c}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${y};"></i>
                        <span style="color: ${L};">${m}</span>
                    </div>
                </div>`:S='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${g}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${b}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${r}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${d(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${S}</div></div>`}let v=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),w=new Set(n.map(s=>s.id));for(let[s,p]of v)w.has(s)||p.remove();n.forEach(s=>{let p=l(s),g=v.get(s.id);g?g.outerHTML!==p&&(g.outerHTML=p):t.insertAdjacentHTML("beforeend",p)})}async function ge(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Be();if(!e){t.innerHTML=x("offline","Failed to load model status.");return}ae=Date.now(),_(4,ae);let n=e.models||[],o=e.whisper;Array.from(t.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function a(l){let v=l.status==="Ready";return`
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
                </div>`}function d(l){let v=l.status==="Downloaded",w=v?"service-widget-online":"service-widget-offline",s=v?"OK":"MISSING",p=v&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",g=l.name;return l.type==="custom"&&g.endsWith(":latest")&&(g=g.replace(":latest","")),`<div class="service-widget ${w}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${v?"bx-check-circle":"bx-x-circle"}"></i><h3>${g}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${p}</span></div></div></div>`}let u="";if(o&&(u+=a(o)),u+=n.map(d).join(""),!u){t.innerHTML=x("empty","No models found.");return}t.innerHTML!==u&&(t.innerHTML=u)}async function be(){let t=document.getElementById("processes-widgets");if(!t)return;let e=await Re();if(e===null){t.innerHTML=x("offline","Failed to load process status.");return}if(oe=Date.now(),_(2,oe),e.length===0){t.innerHTML=x("empty","No active processes."),B(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function n(d){let u=Math.floor(Date.now()/1e3-d.start_time),l=d.retries>0?`<span class="process-retry-badge">Retry ${d.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${d.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${d.channel_id}</h3>
                        ${l}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${d.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${u}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${d.pid}</span>
                        </div>
                    </div>
                </div>`}let o=new Map(Array.from(t.querySelectorAll(".process-widget")).map(d=>[d.dataset.channelId,d])),a=new Set(e.map(d=>d.channel_id));for(let[d,u]of o)a.has(d)||u.remove();e.forEach(d=>{let u=n(d),l=o.get(d.channel_id);l?l.outerHTML!==u&&(l.outerHTML=u):t.insertAdjacentHTML("beforeend",u)}),B(2,e.length)}function z(){let t=pe(),e=Q()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(C).map(a=>`
                    <div class="theme-card ${t===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===C.AUTO?"Automatic theme selection.":a===C.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${t===a?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${o?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function K(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let v=this.dataset.theme;Ee(v),t.setContent(z()),K(t)})});function n(l,v,w,s,p,g,b){let r=document.getElementById(l),i=document.getElementById(v),c=document.getElementById(w),m=document.getElementById(s),f=document.getElementById(p);r&&i&&(r.onclick=()=>i.click(),i.onchange=h=>{let y=h.target.files[0];if(!y)return;if(y.name!==b){m.textContent=`File must be named "${b}"`,m.style.display="block",i.value="";return}let L=new FileReader;L.onload=N=>{try{let S=JSON.parse(N.target.result);localStorage.setItem(g,JSON.stringify(S)),c.textContent=b,m.style.display="none",t.setContent(z()),K(t)}catch{m.textContent="Invalid JSON format",m.style.display="block",i.value=""}},L.onerror=()=>{m.textContent="Failed to read file",m.style.display="block",i.value=""},L.readAsText(y)}),f&&(f.onclick=()=>{localStorage.removeItem(g),t.setContent(z()),K(t)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(o.disabled=!0),o.onclick=async v=>{if(v.target.checked)try{await Notification.requestPermission()!=="granted"&&(v.target.checked=!1)}catch{v.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),v.target.checked=!0)}}let a=document.getElementById("microphone-toggle");async function d(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;a&&(a.disabled=!l||l.state==="denied",a.checked=l?.state==="granted");let v=document.querySelector("#microphone-setting-item .settings-item-description");v&&(v.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}d(),a&&!a.disabled&&(a.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),d()}catch{l.target.checked=!1,d()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=l=>{let v=l.target.checked;localStorage.setItem("easter_analytics_enabled",v),window.EASTER_ANALYTICS_ENABLED=v,window.EASTER_DEBUG_MODE=v})}function je(){console.log("Welcome to Easter Company."),Te(),ye();let t=$e();we(t),xe();let e=document.querySelector("footer"),n=null;function o(){n=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function a(s,p=null){let g=n&&n.id===s.id;n&&n.close(!g),g?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(b=>{let r=b===p;b.classList.toggle("active",r),b.classList.toggle("inactive",!r&&p)}),e?.classList.add("hide")},n?220:0)}async function d(){await Promise.all([fe(),ge(),Y(),be(),U(),ve(),ue()]);let s=setInterval(()=>{if(!w.isOpen())return clearInterval(s);_(4,me),_(3,ee),_(5,ae),_(6,ie),_(2,oe),_(1,ne),_(0,se)},1e3),p=setInterval(()=>{if(!w.isOpen())return clearInterval(p);Y(),be(),U(),ve(),ue()},3e3),g=setInterval(()=>{if(!w.isOpen())return clearInterval(g);fe(),ge()},6e4)}let u=V({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),l=V({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${Q()||"Unknown"}</p>`,icon:"bx-user",onClose:o}),v=V({id:"settings-window",title:"Settings",content:z(),icon:"bx-cog",onClose:o,onOpen:()=>{v.setContent(z()),setTimeout(()=>K(v),50)}}),w=V({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ce(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:Ae(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:He(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Me(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:_e(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:De(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Ne(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:o,onOpen:()=>setTimeout(d,100)});t?(document.getElementById("user-icon")?.addEventListener("click",s=>a(l,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>a(w,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>a(v,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(u),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{Se(document.getElementById("email-input").value),window.location.reload()}catch(p){let g=document.getElementById("login-error");g&&(g.textContent=p.message,g.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",je):je();})();
//# sourceMappingURL=dex.3d7f7b6a.js.map
