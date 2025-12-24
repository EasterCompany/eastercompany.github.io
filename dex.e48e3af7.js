(()=>{function xe(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function $e(s=!1){let i=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${s?`
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i id="user-icon" class='bx bx-user'></i>
            <i id="settings-icon" class='bx bx-cog'></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,o=document.createElement("nav");o.innerHTML=i,document.body.prepend(o)}function Se(){let s=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,t=document.createElement("footer");t.innerHTML=s,document.body.appendChild(t)}function ee(s){let t=null,i=s.onClose||null,o=s.onOpen||null;function r(){if(t){t.classList.add("open"),window.addEventListener("resize",m),o&&setTimeout(o,10);return}let n=document.getElementById("windows-container");n||(n=document.createElement("div"),n.id="windows-container",n.className="windows-container",document.body.appendChild(n)),t=document.createElement("div"),t.id=s.id,t.className="window";let d=s.icon||"bx-window",f="",y="",b;s.tabs&&s.tabs.length>0?(f=`<div class="tab-bar">${s.tabs.map((w,x)=>{let E;return w.icon?E=`<i class="bx ${w.icon}"></i>`:w.title&&w.title.length>0?E=`<span class="tab-glyph">${w.title.charAt(0).toUpperCase()}</span>`:E='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${x===0?"active":""}" data-tab-index="${x}">
                        ${E}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${x}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,b=`<div class="window-content">${s.tabs.map((w,x)=>`<div class="tab-content ${x===0?"active":""}" data-tab-content="${x}">${w.content}</div>`).join("")}</div>`):(s.title&&(y=`<div class="window-title">${s.title}</div>`),b=`<div class="window-content">${s.content}</div>`);let a=`
            <div class="window-header">
                <i class="bx ${d}"></i>
                ${f}
                ${y}
                <i class="bx bx-x window-close"></i>
            </div>
        `;t.innerHTML=a+b,n.appendChild(t);let c=t.querySelector(".window-close");c&&c.addEventListener("click",p=>{p.stopPropagation(),l()}),window.addEventListener("resize",m),s.tabs&&s.tabs.length>0&&t.querySelectorAll(".tab").forEach(g=>{g.addEventListener("click",()=>{let w=g.getAttribute("data-tab-index");t.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),g.classList.add("active"),t.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active")),t.querySelector(`.tab-content[data-tab-content="${w}"]`).classList.add("active"),v(g,t)})}),setTimeout(()=>{t.classList.add("open"),o&&o()},10)}function m(){if(!t||!t.classList.contains("open"))return;let n=t.querySelector(".tab.active");n&&v(n,t)}function v(n,d){setTimeout(()=>{let f=d.querySelector(".tab-bar");if(f){let y=Array.from(f.querySelectorAll(".tab")),b=y.indexOf(n),a=f.clientWidth,c=y[Math.max(0,b-2)],p=y[Math.min(y.length-1,b+2)],g=c.offsetLeft-f.offsetLeft-25,x=p.offsetLeft+p.offsetWidth-f.offsetLeft+25-g,E;x<=a?E=g-(a-x)/2:E=n.offsetLeft-f.offsetLeft-a/2+n.offsetWidth/2,f.scrollTo({left:E,behavior:"smooth"})}},350)}function l(n=!1){t&&(window.removeEventListener("resize",m),n?(t.classList.add("switching"),t.classList.remove("open"),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},200)):(t.classList.remove("open"),i&&i(),setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),t=null},400)))}function u(n){if(t){let d=t.querySelector(".window-content");d&&(d.innerHTML=n)}}function h(){return t&&t.classList.contains("open")}return{open:r,close:l,setContent:u,isOpen:h,id:s.id}}var me="easter_user_email";function Le(){return localStorage.getItem(me)!==null}function ne(){return localStorage.getItem(me)}function Te(s){if(!s||!s.includes("@"))throw new Error("Invalid email address");if(!s.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(me,s.trim())}var Ee="easter_theme",C={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ve(){return localStorage.getItem(Ee)||C.AUTO}function We(){let s=window.innerWidth,t=window.innerHeight,i=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return s>1920&&t>1080?C.ANIMATED:(s===1920&&t===1080&&i||s<=1920||t<=1080,C.DEFAULT)}function _e(s){if(!Object.values(C).includes(s))throw new Error("Invalid theme");localStorage.setItem(Ee,s),ue(s)}function ue(s,t=!1){let i=document.body,o=s===C.AUTO?We():s;if(t||(i.classList.add("theme-transitioning"),setTimeout(()=>{i.classList.remove("theme-transitioning")},300)),Object.values(C).forEach(r=>{i.classList.remove(`theme-${r}`)}),i.classList.add(`theme-${s}`),o===C.ANIMATED){if(!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}}else{let r=document.querySelector(".background");r&&(t?r.remove():(r.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{r.remove()},400)))}}function Me(){let s=ve();if(ue(s,!0),s===C.AUTO){let t;window.addEventListener("resize",()=>{clearTimeout(t),t=setTimeout(()=>{ue(C.AUTO)},300)})}}function W(s,t,i=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",m=i?`<p class="placeholder-action">${i}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${r} placeholder-icon'></i>
            <p class="placeholder-message">${t}</p>
            ${m}
        </div>
    `}function ke(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var fe=null;async function ge(){let s=document.getElementById("logs-container");if(!s)return!1;s.classList.remove("placeholder-active");let t=localStorage.getItem("service_map");if(!t)return s.classList.add("placeholder-active"),s.innerHTML=W("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let i;try{i=JSON.parse(t)}catch(v){return console.error("Error parsing service_map from localStorage:",v),s.classList.add("placeholder-active"),s.innerHTML=W("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let o=null;if(i&&typeof i.services=="object"){let v=["cs","be","th"];for(let l of v)if(Array.isArray(i.services[l])){let u=i.services[l].find(h=>h.short_name==="event"||h.id==="event"||h.id==="dex-event-service");if(u){o=u;break}}}if(!o)return s.classList.add("placeholder-active"),s.innerHTML=W("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let m=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/logs`;try{let v=await fetch(m);if(!v.ok)return s.classList.add("placeholder-active"),s.innerHTML=W("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await v.json();if(!l||l.length===0)return s.classList.add("placeholder-active"),s.innerHTML=W("empty","No logs found.","Service logs will appear here when available."),!1;let u=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],h=l.filter(d=>!u.includes(d.id));h.forEach(d=>{d.logs&&Array.isArray(d.logs)?d.logs.reverse():d.logs=[]}),h.reverse();let n=h.map(d=>{let f=d.logs.join(`
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
            `}).join("");return s.innerHTML=n,document.querySelectorAll(".copy-logs-btn").forEach(d=>{d.addEventListener("click",()=>{let f=unescape(d.dataset.logs);navigator.clipboard.writeText(f).then(()=>{let y=d.querySelector("i");y.classList.remove("bx-copy"),y.classList.add("bx-check"),setTimeout(()=>{y.classList.remove("bx-check"),y.classList.add("bx-copy")},2e3)})})}),fe=Date.now(),!0}catch(v){return console.error("Error fetching logs:",v),s.classList.add("placeholder-active"),s.innerHTML=W("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $(s,t,i=null){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[s]||"bx-info-circle",m=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${t}</p>${m}</div>`}function A(s){return s&&s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _(s,t){let i=document.querySelector(`.tab[data-tab-index="${s}"] .tab-subtitle`);if(!i)return;if(!t){i.textContent="Last updated: never";return}let r=(Date.now()-t)/1e3,m;if(r<30)m=`${Math.floor(r)}s ago`;else{i.textContent="Last updated: never";return}i.textContent=`Last updated: ${m}`}function q(s,t){let i=document.querySelector(`.tab[data-tab-index="${s}"]`);if(!i)return;let o=i.querySelector(".notification-badge");o&&(t>0?(o.textContent=t>9?"9+":t,o.style.display="flex"):o.style.display="none")}function ie(){let s=document.getElementById("notifications-list");if(!s)return;let t=s.querySelectorAll(".notification-unread").length;q(0,t)}var Re={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Ie(s,t){let i=Re[s];if(s==="voice_transcribed"&&!t.user_name&&t.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),s==="system.notification.generated"&&(i=`Notification (${t.priority?t.priority.charAt(0).toUpperCase()+t.priority.slice(1):"Low"}): ${t.title}`),!i)return s;let o=i.replace(/\{(\w+)\}/g,(r,m)=>t[m]!==void 0&&t[m]!==null?t[m]:r);return(s==="messaging.user.transcribed"||s==="voice_transcribed")&&t.detected_language&&t.detected_language!=="en"&&t.english_translation&&(o+=` (Translation: ${t.english_translation})`),o}var Ae=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,R=null,z=new Set,Ce=[];async function te(s=!1){let t=document.getElementById("events-timeline");if(!t)return;ze();let i=localStorage.getItem("service_map");if(!i){t.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{t.innerHTML=$("error","Invalid service map data.");return}if(!o){t.innerHTML=$("error","Event service not found in service map.");return}let m=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let v=await fetch(m);if(!v.ok)throw new Error("Service is offline or unreachable.");let u=(await v.json()).events||[];if(Ce=u,R=Date.now(),_(3,R),u.length===0){t.innerHTML=$("empty","No events found.");return}s&&(t.innerHTML="");let h=b=>{let a=b.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let c=a.type,p=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command",g="event-border-grey";p&&(c==="moderation.explicit_content.deleted"?g="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"?g="event-border-purple":c==="system.cli.command"?g="event-border-orange":g="event-border-blue");let w=p?"cursor-pointer":"",x=z.has(b.id),E=x?"expanded":"",N=x?"display: block;":"display: none;",S=new Date(b.timestamp*1e3),B=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),V=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),U=Ie(c,a),X="";if(p){let M="";if(c==="engagement.decision")M=`
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
                        `;else if(c==="messaging.bot.sent_message")M=`
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
                        `;else if(c==="moderation.explicit_content.deleted")M=`
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
                        `;else if(c==="analysis.link.completed")M=`
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
                        `;else if(c==="analysis.visual.completed"){let k="";a.base64_preview?k=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(k=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),M=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${a.filename}</span>
                            </div>
                            ${k}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${A(a.description)||"None"}</pre>
                            </div>
                        `}else if(c==="system.cli.command")M=`
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
                        `;else if(c==="messaging.user.sent_message"){let k="";a.attachments&&a.attachments.length>0&&(k=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${a.attachments.map(L=>{let j=L.content_type&&L.content_type.startsWith("image/"),D=(L.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${j?`<div class="attachment-thumb-container"><img src="${L.url}" alt="${L.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${L.url}" target="_blank" class="attachment-link">${L.filename}</a>
                                            <span class="attachment-meta">${L.content_type} \u2022 ${D}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),M=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${a.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${a.content||"(empty)"}</pre>
                            </div>
                            ${k}
                         `}X=`
                        <div class="event-details" style="${N}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${M}
                        </div>
                    `}let T=document.createElement("div");if(T.className=`event-item ${g} ${w} ${E}`,T.dataset.eventId=b.id,T.onclick=function(M){if(!p)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),z.delete(b.id);let I=this.querySelector(".event-details");I&&(I.style.display="none")}else{this.classList.add("expanded"),z.add(b.id);let I=this.querySelector(".event-details");I&&(I.style.display="block")}},T.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${B}</span>
                        <span class="event-date">${V}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${b.service}</div>
                        <div class="event-message">${U}</div>
                        ${X}
                    </div>
                `,p){let M=T.querySelector(".close-details-btn");M&&M.addEventListener("click",k=>{k.stopPropagation();let I=k.target.closest(".event-item");if(I){I.classList.remove("expanded"),z.delete(b.id);let L=I.querySelector(".event-details");L&&(L.style.display="none")}})}return T},n=Array.from(t.children),d=new Map(n.map(b=>[b.dataset.eventId,b])),f=new Set(u.map(b=>b.id));n.forEach(b=>{let a=b.dataset.eventId;(!a||!f.has(a))&&b.remove()});let y=null;u.forEach((b,a)=>{let c=d.get(b.id);(!c||s)&&(c&&c.remove(),c=h(b),!c)||(a===0?t.firstElementChild!==c&&t.prepend(c):y&&y.nextElementSibling!==c&&y.after(c),y=c)}),R=Date.now(),_(3,R)}catch(v){console.error("Error fetching events:",v),t.children.length===0&&(t.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}function ze(){let s=document.getElementById("events-expand-all"),t=document.getElementById("events-close-all");s&&!s.dataset.listenerAttached&&(s.onclick=()=>{Ce.forEach(i=>z.add(i.id)),te(!0)},s.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{z.clear(),te(!0)},t.dataset.listenerAttached="true")}var Ne=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,J=null,O=new Set,ae=[];async function P(s=!1){let t=document.getElementById("notifications-list");if(!t)return;Je(),s&&(t.innerHTML="<p>Updating...</p>");let i=localStorage.getItem("service_map");if(!i){t.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{t.innerHTML=$("error","Invalid service map data.");return}if(!o){t.innerHTML=$("error","Event service not found in service map.");return}let m=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.notification.generated,system.analysis.audit`;try{let v=await fetch(m);if(!v.ok)throw new Error("Service is offline or unreachable.");let u=(await v.json()).events||[];J=Date.now(),_(0,J);let h=Date.now(),n=24*60*60*1e3,d=u.filter(p=>{let g=localStorage.getItem(`notification_read_ts_${p.id}`);if(!g)return!0;let w=parseInt(g);return h-w<n});if(ae=d,s&&(t.innerHTML=""),d.length===0){t.innerHTML=$("empty","No notifications yet."),ie();return}let f=p=>{let g=p.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let x=g.type==="system.analysis.audit",E=x?`Analysis Audit: ${g.tier?.toUpperCase()}`:g.title||"Untitled Notification",N=x?"Raw analyst input and output logs.":g.body||"No description provided.",S=x?"low":g.priority||"low",B=!x&&!!g.alert,V=x?"audit":g.category||"system",U=g.related_event_ids||[],T=!!localStorage.getItem(`notification_read_ts_${p.id}`),M=new Date(p.timestamp*1e3),k=M.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),I=M.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),L=T?"event-border-grey":"event-border-blue";x&&(L=T?"event-border-grey":"event-border-purple"),!T&&B&&(L="event-border-red"),T&&(S==="high"||S==="critical")?L="event-border-red":T&&S==="medium"&&(L="event-border-orange");let j=T?"notification-read":"notification-unread",D=O.has(p.id),Pe=D?"expanded":"",Fe=D?"display: block;":"display: none;",de="";if(x)de=`
                    <div class="event-detail-row">
                        <span class="detail-label">Tier:</span>
                        <span class="detail-value">${g.tier}</span>
                    </div>
                    <div class="event-detail-row">
                        <span class="detail-label">Model:</span>
                        <span class="detail-value">${g.model}</span>
                    </div>
                    <div class="event-detail-block">
                        <span class="detail-label">Raw Output:</span>
                        <pre class="detail-pre">${A(g.raw_output)}</pre>
                    </div>
                    <div class="event-detail-block">
                        <span class="detail-label">Raw Input (Prompt):</span>
                        <pre class="detail-pre">${A(g.raw_input)}</pre>
                    </div>
                `;else{let F="";U.length>0&&(F=`
                        <div class="event-detail-row">
                            <span class="detail-label">Related Events:</span>
                            <span class="detail-value">${U.map(Q=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Q.substring(0,8)}...</span>`).join(", ")}</span>
                        </div>`),de=`
                    <div class="event-detail-row">
                        <span class="detail-label">Priority:</span>
                        <span class="detail-value" style="color: ${S==="high"||S==="critical"?"#ff4d4d":S==="medium"?"#ffa500":"#888"}">${S.toUpperCase()}</span>
                    </div>
                    <div class="event-detail-block" style="text-align: left;">
                        <span class="detail-label">Insight:</span>
                        <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${A(N)}</p>
                    </div>
                    ${F}
                `}let H=document.createElement("div");H.className=`event-item notification-item ${L} ${j} ${Pe} cursor-pointer`,H.dataset.notificationId=p.id,H.onclick=function(F){if(this.classList.contains("expanded")){this.classList.remove("expanded"),O.delete(p.id);let Z=this.querySelector(".event-details");Z&&(Z.style.display="none")}else{this.classList.add("expanded"),O.add(p.id);let Z=this.querySelector(".event-details");if(Z&&(Z.style.display="block"),!localStorage.getItem(`notification_read_ts_${p.id}`)){localStorage.setItem(`notification_read_ts_${p.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let pe="event-border-grey";S==="high"||S==="critical"?pe="event-border-red":S==="medium"&&(pe="event-border-orange"),this.classList.add(pe),ie()}}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${I}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${V.toUpperCase()} ${B?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${E}</div>
                    <div class="event-details" style="${Fe}">
                        <div class="event-details-header">
                            <h4>${x?"Audit":B?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${de}
                    </div>
                </div>
            `;let we=H.querySelector(".close-details-btn");return we&&we.addEventListener("click",F=>{F.stopPropagation(),H.classList.remove("expanded");let Q=H.querySelector(".event-details");Q&&(Q.style.display="none"),O.delete(p.id)}),H},y=Array.from(t.children),b=new Map(y.map(p=>[p.dataset.notificationId,p])),a=new Set(d.map(p=>p.id));y.forEach(p=>{let g=p.dataset.notificationId;(!g||!a.has(g))&&p.remove()});let c=null;d.forEach((p,g)=>{let w=b.get(p.id);(!w||s)&&(w&&w.remove(),w=f(p),!w)||(g===0?t.firstElementChild!==w&&t.prepend(w):c&&c.nextElementSibling!==w&&c.after(w),c=w)}),J=Date.now(),_(0,J),ie()}catch(v){console.error("Error fetching notifications:",v),t.children.length===0&&(t.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function Je(){let s=document.getElementById("notif-read-all"),t=document.getElementById("notif-expand-all"),i=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");s&&!s.dataset.listenerAttached&&(s.onclick=()=>{ae.forEach(r=>{localStorage.getItem(`notification_read_ts_${r.id}`)||localStorage.setItem(`notification_read_ts_${r.id}`,Date.now().toString())}),P(!0)},s.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ae.forEach(r=>{O.add(r.id),localStorage.getItem(`notification_read_ts_${r.id}`)||localStorage.setItem(`notification_read_ts_${r.id}`,Date.now().toString())}),P(!0)},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{O.clear(),P(!0)},i.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let r=Date.now()-1728e5;ae.forEach(m=>{localStorage.setItem(`notification_read_ts_${m.id}`,r.toString())}),O.clear(),P(!0)},o.dataset.listenerAttached="true")}var De=()=>`
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
`,oe=null,G=new Set,He=[];async function Y(s=!1){let t=document.getElementById("blueprints-list");if(!t)return;Ge();let i=localStorage.getItem("service_map");if(!i){t.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(i).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{t.innerHTML=$("error","Invalid service map data.");return}if(!o){t.innerHTML=$("error","Event service not found in service map.");return}let r=o.domain==="0.0.0.0"?"127.0.0.1":o.domain,m=`http://${r}:${o.port}/events?ml=100&format=json&event.type=system.blueprint.generated`,v=`http://${r}:${o.port}/analyst/status`;try{let l=await fetch(v);if(l.ok){let u=await l.json(),h=document.getElementById("strategist-next-run");if(h&&u.strategist){let n=u.strategist.next_run,d=Math.floor(Date.now()/1e3),f=n-d;if(f<=0)h.textContent="Next T3: Ready (IDLE req)",h.style.color="#5eff5e";else{let y=Math.floor(f/60),b=f%60;h.textContent=`Next T3: ${y}m ${b}s`,h.style.color="#888"}}}}catch(l){console.error("Failed to fetch analyst status",l)}try{let l=await fetch(m);if(!l.ok)throw new Error("Service is offline or unreachable.");let h=(await l.json()).events||[];if(He=h,oe=Date.now(),_(1,oe),h.length===0){t.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),q(1,0);return}s&&(t.innerHTML="");let n=a=>{let c=a.event;if(typeof c=="string")try{c=JSON.parse(c)}catch{return null}let p=c.title||"Untitled Blueprint",g=c.summary||c.body||"No summary provided.",w=c.content||"",x=c.category||"architecture",E=c.affected_services||[],N=c.implementation_path||[],S=new Date(a.timestamp*1e3),B=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),V=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),U=G.has(a.id),X=U?"display: block;":"display: none;",T=document.createElement("div");T.className=`event-item notification-item event-border-purple cursor-pointer ${U?"expanded":""}`,T.dataset.blueprintId=a.id,T.onclick=function(L){if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(a.id);let D=this.querySelector(".event-details");D&&(D.style.display="none")}else{this.classList.add("expanded"),G.add(a.id);let D=this.querySelector(".event-details");D&&(D.style.display="block")}};let M=E.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${E.join(", ")}</div>`:"",k="";N.length>0&&(k=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${N.map(L=>`<li>${A(L)}</li>`).join("")}
                        </ul>
                    </div>
                `),T.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${B}</span>
                    <span class="event-date">${V}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${x.toUpperCase()}</div>
                    <div class="event-message">${p}</div>
                    <div class="event-details" style="${X}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${A(g)}
                        </div>
                        ${M}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${A(w)}</p>
                        </div>
                        ${k}
                    </div>
                </div>
            `;let I=T.querySelector(".close-details-btn");return I&&I.addEventListener("click",L=>{L.stopPropagation(),T.classList.remove("expanded");let j=T.querySelector(".event-details");j&&(j.style.display="none"),G.delete(a.id)}),T},d=Array.from(t.children),f=new Map(d.map(a=>[a.dataset.blueprintId,a])),y=new Set(h.map(a=>a.id));d.forEach(a=>{let c=a.dataset.blueprintId;(!c||!y.has(c))&&a.remove()});let b=null;h.forEach((a,c)=>{let p=f.get(a.id);(!p||s)&&(p&&p.remove(),p=n(a),!p)||(c===0?t.firstElementChild!==p&&t.prepend(p):b&&b.nextElementSibling!==p&&b.after(p),b=p)}),q(1,h.length)}catch(l){console.error("Error fetching blueprints:",l),t.children.length===0&&(t.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function Ge(){let s=document.getElementById("blueprints-expand-all"),t=document.getElementById("blueprints-close-all"),i=document.getElementById("blueprints-reset-strategist");s&&!s.dataset.listenerAttached&&(s.onclick=()=>{He.forEach(o=>G.add(e.id)),Y(!0)},s.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{G.clear(),Y(!0)},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{let o=localStorage.getItem("service_map");if(!o)return;let m=(JSON.parse(o).services?.cs||[]).find(u=>u.id==="dex-event-service");if(!m)return;let l=`http://${m.domain==="0.0.0.0"?"127.0.0.1":m.domain}:${m.port}/analyst/reset?tier=strategist`;i.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(l,{method:"POST"}),setTimeout(()=>{i.innerHTML="<i class='bx bx-check'></i> Reset Done",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Reset Strategist"},2e3)},500),Y()}catch(u){console.error("Failed to reset strategist",u),i.innerHTML="<i class='bx bx-error'></i> Failed"}},i.dataset.listenerAttached="true")}var Be=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),Ue=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),je=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),le=null,re=null,ce=null;async function qe(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!t)return null;let o=`http://${t.domain==="0.0.0.0"?"127.0.0.1":t.domain}:${t.port}/system_monitor`,r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(s){return console.error("Error fetching system data:",s),null}}async function Ye(){if(!localStorage.getItem("service_map"))return null;try{let t=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!t)return null;let o=`http://${t.domain==="0.0.0.0"?"127.0.0.1":t.domain}:${t.port}/processes`,r=await fetch(o);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return await r.json()}catch(s){return console.error("Error fetching process data:",s),null}}async function be(){let s=document.getElementById("services-widgets");if(!s)return;let t=await qe();if(!t||!t.services){s.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}le=Date.now(),_(5,le);let i=t.services||[];Array.from(s.children).forEach(n=>{n.classList.contains("service-widget")||n.remove()});function o(n){return!n||n==="N/A"||n==="unknown"||n.trim()===""?"-":n}function r(n){if(!n||n==="N/A"||n==="unknown")return"-";let d=n.match(/^(\d+\.\d+\.\d+)/);return d?d[0]:n.split(".").slice(0,3).join(".")||"-"}function m(n){return!n||n.length<=28?n:n.substring(0,28)+"..."}function v(n){if(!n||n==="N/A"||n==="unknown")return"-";let d=n.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!d)return"-";let f=parseInt(d[1])||0,y=parseInt(d[2])||0,b=parseInt(d[3])||0,a=parseFloat(d[4])||0,c=f*86400+y*3600+b*60+a,p=Math.floor(c/86400);if(p>0)return`${p}d`;let g=Math.floor(c/3600);if(g>0)return`${g}h`;let w=Math.floor(c/60);return w>0?`${w}m`:`${Math.floor(c)}s`}function l(n){let d=n.status==="online",f=d?"service-widget-online":"service-widget-offline",y=d?"bx-check-circle":"bx-x-circle",b=d?"OK":"BAD",a=n.version?r(n.version.str):"-",c=n.cpu&&n.cpu!=="N/A"?n.cpu:"-",p=n.memory&&n.memory!=="N/A"?n.memory:"-",g=c!=="-"?"#00ff00":"#666",w=c!=="-"?"#fff":"#666",x=p!=="-"?"#00ff00":"#666",E=p!=="-"?"#fff":"#666",N=v(n.uptime),S="";return d?S=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${a}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${N}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${g};"></i>
                        <span style="color: ${w};">${c}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${x};"></i>
                        <span style="color: ${E};">${p}</span>
                    </div>
                </div>`:S='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${f}" data-service-id="${n.id}"><div class="service-widget-header"><i class="bx ${y}"></i><h3>${n.short_name||n.id}</h3><span class="service-widget-status">${b}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${m(n.domain&&n.port?`${n.domain}:${n.port}`:"")}</span></div>${S}</div></div>`}let u=new Map(Array.from(s.querySelectorAll(".service-widget")).map(n=>[n.dataset.serviceId,n])),h=new Set(i.map(n=>n.id));for(let[n,d]of u)h.has(n)||d.remove();i.forEach(n=>{let d=l(n),f=u.get(n.id);f?f.outerHTML!==d&&(f.outerHTML=d):s.insertAdjacentHTML("beforeend",d)})}async function he(){let s=document.getElementById("models-widgets");if(!s)return;let t=await qe();if(!t){s.innerHTML=$("offline","Failed to load model status.");return}re=Date.now(),_(4,re);let i=t.models||[],o=t.whisper;Array.from(s.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function r(l){let u=l.status==="Ready";return`
                <div class="service-widget ${u?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${u?"READY":"NOT FOUND"}</span>
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
                </div>`}function m(l){let u=l.status==="Downloaded",h=u?"service-widget-online":"service-widget-offline",n=u?"OK":"MISSING",d=u&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",f=l.name;return l.type==="custom"&&f.endsWith(":latest")&&(f=f.replace(":latest","")),`<div class="service-widget ${h}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${u?"bx-check-circle":"bx-x-circle"}"></i><h3>${f}</h3><span class="service-widget-status">${n}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${d}</span></div></div></div>`}let v="";if(o&&(v+=r(o)),v+=i.map(m).join(""),!v){s.innerHTML=$("empty","No models found.");return}s.innerHTML!==v&&(s.innerHTML=v)}async function ye(){let s=document.getElementById("processes-widgets");if(!s)return;let t=await Ye();if(t===null){s.innerHTML=$("offline","Failed to load process status.");return}if(ce=Date.now(),_(2,ce),t.length===0){s.innerHTML=$("empty","No active processes."),q(2,0);return}(s.querySelector(".tab-placeholder")||s.querySelector("p"))&&(s.innerHTML="");function i(m){let v=Math.floor(Date.now()/1e3-m.start_time),l=m.retries>0?`<span class="process-retry-badge">Retry ${m.retries}</span>`:"";return`
                <div class="service-widget process-widget" data-channel-id="${m.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-loader-alt bx-spin"></i>
                        <h3>Channel ${m.channel_id}</h3>
                        ${l}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${m.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${v}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${m.pid}</span>
                        </div>
                    </div>
                </div>`}let o=new Map(Array.from(s.querySelectorAll(".process-widget")).map(m=>[m.dataset.channelId,m])),r=new Set(t.map(m=>m.channel_id));for(let[m,v]of o)r.has(m)||v.remove();t.forEach(m=>{let v=i(m),l=o.get(m.channel_id);l?l.outerHTML!==v&&(l.outerHTML=v):s.insertAdjacentHTML("beforeend",v)}),q(2,t.length)}function K(){let s=ve(),t=ne()||"user@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(C).map(r=>`
                    <div class="theme-card ${s===r?"active":""}" data-theme="${r}">
                        <div class="theme-preview theme-preview-${r.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${r}</h3>
                            <p>${r===C.AUTO?"Automatic theme selection.":r===C.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${s===r?"Active":"Select"}</span>
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
            </div>`}function se(s){let t=document.querySelector("#settings-window .window-content");if(!t)return;t.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let u=this.dataset.theme;_e(u),s.setContent(K()),se(s)})});function i(l,u,h,n,d,f,y){let b=document.getElementById(l),a=document.getElementById(u),c=document.getElementById(h),p=document.getElementById(n),g=document.getElementById(d);b&&a&&(b.onclick=()=>a.click(),a.onchange=w=>{let x=w.target.files[0];if(!x)return;if(x.name!==y){p.textContent=`File must be named "${y}"`,p.style.display="block",a.value="";return}let E=new FileReader;E.onload=N=>{try{let S=JSON.parse(N.target.result);localStorage.setItem(f,JSON.stringify(S)),c.textContent=y,p.style.display="none",s.setContent(K()),se(s)}catch{p.textContent="Invalid JSON format",p.style.display="block",a.value=""}},E.onerror=()=>{p.textContent="Failed to read file",p.style.display="block",a.value=""},E.readAsText(x)}),g&&(g.onclick=()=>{localStorage.removeItem(f),s.setContent(K()),se(s)})}i("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),i("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),i("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(o.disabled=!0),o.onclick=async u=>{if(u.target.checked)try{await Notification.requestPermission()!=="granted"&&(u.target.checked=!1)}catch{u.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),u.target.checked=!0)}}let r=document.getElementById("microphone-toggle");async function m(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;r&&(r.disabled=!l||l.state==="denied",r.checked=l?.state==="granted");let u=document.querySelector("#microphone-setting-item .settings-item-description");u&&(u.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}m(),r&&!r.disabled&&(r.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),m()}catch{l.target.checked=!1,m()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let v=document.getElementById("analytics-toggle");v&&(v.checked=localStorage.getItem("easter_analytics_enabled")!=="false",v.onclick=l=>{let u=l.target.checked;localStorage.setItem("easter_analytics_enabled",u),window.EASTER_ANALYTICS_ENABLED=u,window.EASTER_DEBUG_MODE=u})}function Oe(){console.log("Welcome to Easter Company."),Me(),xe();let s=Le();$e(s),Se();let t=document.querySelector("footer"),i=null;function o(){i=null,t?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(n=>n.classList.remove("active","inactive"))}function r(n,d=null){let f=i&&i.id===n.id;i&&i.close(!f),f?i=null:setTimeout(()=>{n.open(),i=n,document.querySelectorAll(".nav-right i").forEach(y=>{let b=y===d;y.classList.toggle("active",b),y.classList.toggle("inactive",!b&&d)}),t?.classList.add("hide")},i?220:0)}async function m(){await Promise.all([be(),he(),te(),ye(),P(),Y(),ge()]);let n=setInterval(()=>{if(!h.isOpen())return clearInterval(n);_(4,fe),_(3,R),_(5,re),_(6,le),_(2,ce),_(1,oe),_(0,J)},1e3),d=setInterval(()=>{if(!h.isOpen())return clearInterval(d);te(),ye(),P(),Y(),ge()},3e3),f=setInterval(()=>{if(!h.isOpen())return clearInterval(f);be(),he()},6e4)}let v=ee({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),l=ee({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${ne()||"Unknown"}</p>`,icon:"bx-user",onClose:o}),u=ee({id:"settings-window",title:"Settings",content:K(),icon:"bx-cog",onClose:o,onOpen:()=>{u.setContent(K()),setTimeout(()=>se(u),50)}}),h=ee({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ne(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:De(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:je(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:Ae(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:ke(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:Ue(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Be(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:o,onOpen:()=>setTimeout(m,100)});s?(document.getElementById("user-icon")?.addEventListener("click",n=>r(l,n.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",n=>r(h,n.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",n=>r(u,n.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{r(v),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{Te(document.getElementById("email-input").value),window.location.reload()}catch(d){let f=document.getElementById("login-error");f&&(f.textContent=d.message,f.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Oe):Oe();})();
//# sourceMappingURL=dex.e48e3af7.js.map
