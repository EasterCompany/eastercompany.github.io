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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function G(t){let e=null,n=t.onClose||null,o=t.onOpen||null;function a(){if(e){e.classList.add("open"),window.addEventListener("resize",d),o&&setTimeout(o,10);return}let s=document.getElementById("windows-container");s||(s=document.createElement("div"),s.id="windows-container",s.className="windows-container",document.body.appendChild(s)),e=document.createElement("div"),e.id=t.id,e.className="window";let p=t.icon||"bx-window",f="",b="",r;t.tabs&&t.tabs.length>0?(f=`<div class="tab-bar">${t.tabs.map((h,x)=>{let w;return h.icon?w=`<i class="bx ${h.icon}"></i>`:h.title&&h.title.length>0?w=`<span class="tab-glyph">${h.title.charAt(0).toUpperCase()}</span>`:w='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${x===0?"active":""}" data-tab-index="${x}">
                        ${w}
                        <span class="tab-title">${h.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${x}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,r=`<div class="window-content">${t.tabs.map((h,x)=>`<div class="tab-content ${x===0?"active":""}" data-tab-content="${x}">${h.content}</div>`).join("")}</div>`):(t.title&&(b=`<div class="window-title">${t.title}</div>`),r=`<div class="window-content">${t.content}</div>`);let i=`
            <div class="window-header">
                <i class="bx ${p}"></i>
                ${f}
                ${b}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=i+r,s.appendChild(e);let c=e.querySelector(".window-close");c&&c.addEventListener("click",m=>{m.stopPropagation(),l()}),window.addEventListener("resize",d),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(g=>{g.addEventListener("click",()=>{let h=g.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),g.classList.add("active"),e.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${h}"]`).classList.add("active"),u(g,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function d(){if(!e||!e.classList.contains("open"))return;let s=e.querySelector(".tab.active");s&&u(s,e)}function u(s,p){setTimeout(()=>{let f=p.querySelector(".tab-bar");if(f){let b=Array.from(f.querySelectorAll(".tab")),r=b.indexOf(s),i=f.clientWidth,c=b[Math.max(0,r-2)],m=b[Math.min(b.length-1,r+2)],g=c.offsetLeft-f.offsetLeft-25,x=m.offsetLeft+m.offsetWidth-f.offsetLeft+25-g,w;x<=i?w=g-(i-x)/2:w=s.offsetLeft-f.offsetLeft-i/2+s.offsetWidth/2,f.scrollTo({left:w,behavior:"smooth"})}},350)}function l(s=!1){e&&(window.removeEventListener("resize",d),s?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),n&&n(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function v(s){if(e){let p=e.querySelector(".window-content");p&&(p.innerHTML=s)}}function y(){return e&&e.classList.contains("open")}return{open:a,close:l,setContent:v,isOpen:y,id:t.id}}var re="easter_user_email";function $e(){return localStorage.getItem(re)!==null}function K(){return localStorage.getItem(re)}function Se(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(re,t.trim())}var Le="easter_theme",k={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function de(){return localStorage.getItem(Le)||k.AUTO}function Ue(){let t=window.innerWidth,e=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?k.ANIMATED:(t===1920&&e===1080&&n||t<=1920||e<=1080,k.DEFAULT)}function Ee(t){if(!Object.values(k).includes(t))throw new Error("Invalid theme");localStorage.setItem(Le,t),ce(t)}function ce(t,e=!1){let n=document.body,o=t===k.AUTO?Ue():t;if(e||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(k).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${t}`),o===k.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(e?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function Te(){let t=de();if(ce(t,!0),t===k.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{ce(k.AUTO)},300)})}}function P(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",d=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${a} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${d}
        </div>
    `}function _e(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var pe=null;async function me(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=P("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(e)}catch(u){return console.error("Error parsing service_map from localStorage:",u),t.classList.add("placeholder-active"),t.innerHTML=P("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let o=null;if(n&&typeof n.services=="object"){let u=["cs","be","th"];for(let l of u)if(Array.isArray(n.services[l])){let v=n.services[l].find(y=>y.short_name==="event"||y.id==="event"||y.id==="dex-event-service");if(v){o=v;break}}}if(!o)return t.classList.add("placeholder-active"),t.innerHTML=P("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let d=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/logs`;try{let u=await fetch(d);if(!u.ok)return t.classList.add("placeholder-active"),t.innerHTML=P("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await u.json();if(!l||l.length===0)return t.classList.add("placeholder-active"),t.innerHTML=P("empty","No logs found.","Service logs will appear here when available."),!1;let v=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],y=l.filter(p=>!v.includes(p.id));y.forEach(p=>{p.logs&&Array.isArray(p.logs)?p.logs.reverse():p.logs=[]}),y.reverse();let s=y.map(p=>{let f=p.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${p.id}</h3>
                        <button class="copy-logs-btn" data-logs="${escape(f)}">
                            <i class="bx bx-copy"></i>
                        </button>
                    </div>
                    <pre class="log-content">${f}</pre>
                </div>
            `}).join("");return t.innerHTML=s,document.querySelectorAll(".copy-logs-btn").forEach(p=>{p.addEventListener("click",()=>{let f=unescape(p.dataset.logs);navigator.clipboard.writeText(f).then(()=>{let b=p.querySelector("i");b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3)})})}),pe=Date.now(),!0}catch(u){return console.error("Error fetching logs:",u),t.classList.add("placeholder-active"),t.innerHTML=P("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function $(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",d=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${d}</div>`}function A(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!n)return;if(!e){n.textContent="Last updated: never";return}let a=(Date.now()-e)/1e3,d;if(a<30)d=`${Math.floor(a)}s ago`;else{n.textContent="Last updated: never";return}n.textContent=`Last updated: ${d}`}function B(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!n)return;let o=n.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function X(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;B(0,e)}var qe={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}"};function Me(t,e){let n=qe[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),!n)return t;let o=n.replace(/\{(\w+)\}/g,(a,d)=>e[d]!==void 0&&e[d]!==null?e[d]:a);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var ke=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,Q=null,F=new Set,Ie=[];async function V(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Oe();let n=localStorage.getItem("service_map");if(!n){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!o){e.innerHTML=$("error","Event service not found in service map.");return}let d=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=50&format=json&exclude_types=system.notification.generated`;try{let u=await fetch(d);if(!u.ok)throw new Error("Service is offline or unreachable.");let v=(await u.json()).events||[];if(Ie=v,v.length===0){e.innerHTML=$("empty","No events found.");return}t&&(e.innerHTML="");let y=r=>{let i=r.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.type,m=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command",g="event-border-grey";m&&(c==="moderation.explicit_content.deleted"?g="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"?g="event-border-purple":c==="system.cli.command"?g="event-border-orange":g="event-border-blue");let h=m?"cursor-pointer":"",x=F.has(r.id),w=x?"expanded":"",I=x?"display: block;":"display: none;",C=new Date(r.timestamp*1e3),q=C.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),z=C.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=Me(c,i),M="";if(m){let L="";if(c==="engagement.decision")L=`
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
                        `;else if(c==="messaging.bot.sent_message")L=`
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
                        `;else if(c==="moderation.explicit_content.deleted")L=`
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
                                <pre class="detail-pre">${A(i.raw_output)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.link.completed")L=`
                            <div class="event-detail-row">
                                <span class="detail-label">URL:</span>
                                <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                            </div>
                            <div class="event-detail-row">
                                <span class="detail-label">Title:</span>
                                <span class="detail-value">${A(i.title)||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Description:</span>
                                <pre class="detail-pre">${A(i.description)||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Content Summary:</span>
                                <pre class="detail-pre">${A(i.summary)||"None"}</pre>
                            </div>
                        `;else if(c==="analysis.visual.completed"){let E="";i.base64_preview?E=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(E=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),L=`
                            <div class="event-detail-row">
                                <span class="detail-label">Filename:</span>
                                <span class="detail-value">${i.filename}</span>
                            </div>
                            ${E}
                            <div class="event-detail-block">
                                <span class="detail-label">Visual Description:</span>
                                <pre class="detail-pre">${A(i.description)||"None"}</pre>
                            </div>
                        `}else if(c==="system.cli.command")L=`
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
                                <pre class="detail-pre">${A(i.output)||"No output recorded."}</pre>
                            </div>
                        `;else if(c==="messaging.user.sent_message"){let E="";i.attachments&&i.attachments.length>0&&(E=`
                                <div class="event-detail-block">
                                    <span class="detail-label">Attachments:</span>
                                    <div class="attachments-grid">${i.attachments.map(S=>{let O=S.content_type&&S.content_type.startsWith("image/"),ae=(S.size/1024).toFixed(1)+" KB";return`
                                    <div class="attachment-item">
                                        ${O?`<div class="attachment-thumb-container"><img src="${S.url}" alt="${S.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                        <div class="attachment-info">
                                            <a href="${S.url}" target="_blank" class="attachment-link">${S.filename}</a>
                                            <span class="attachment-meta">${S.content_type} \u2022 ${ae}</span>
                                        </div>
                                    </div>`}).join("")}</div>
                                </div>`),L=`
                            <div class="event-detail-row">
                                <span class="detail-label">Message ID:</span>
                                <span class="detail-value">${i.message_id||"N/A"}</span>
                            </div>
                            <div class="event-detail-block">
                                <span class="detail-label">Raw Content:</span>
                                <pre class="detail-pre">${i.content||"(empty)"}</pre>
                            </div>
                            ${E}
                         `}M=`
                        <div class="event-details" style="${I}">
                            <div class="event-details-header">
                                <h4>Event Details</h4>
                                <i class="bx bx-x close-details-btn"></i>
                            </div>
                            ${L}
                        </div>
                    `}let N=document.createElement("div");if(N.className=`event-item ${g} ${h} ${w}`,N.dataset.eventId=r.id,N.onclick=function(L){if(!m)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),F.delete(r.id);let T=this.querySelector(".event-details");T&&(T.style.display="none")}else{this.classList.add("expanded"),F.add(r.id);let T=this.querySelector(".event-details");T&&(T.style.display="block")}},N.innerHTML=`
                    <div class="event-time">
                        <span class="event-time-main">${q}</span>
                        <span class="event-date">${z}</span>
                    </div>
                    <div class="event-content">
                        <div class="event-service">${r.service}</div>
                        <div class="event-message">${D}</div>
                        ${M}
                    </div>
                `,m){let L=N.querySelector(".close-details-btn");L&&L.addEventListener("click",E=>{E.stopPropagation();let T=E.target.closest(".event-item");if(T){T.classList.remove("expanded"),F.delete(r.id);let S=T.querySelector(".event-details");S&&(S.style.display="none")}})}return N},s=Array.from(e.children),p=new Map(s.map(r=>[r.dataset.eventId,r])),f=new Set(v.map(r=>r.id));s.forEach(r=>{let i=r.dataset.eventId;(!i||!f.has(i))&&r.remove()});let b=null;v.forEach((r,i)=>{let c=p.get(r.id);(!c||t)&&(c&&c.remove(),c=y(r),!c)||(i===0?e.firstElementChild!==c&&e.prepend(c):b&&b.nextElementSibling!==c&&b.after(c),b=c)}),Q=Date.now(),_(3,Q)}catch(u){console.error("Error fetching events:",u),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Oe(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ie.forEach(n=>F.add(n.id)),V(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{F.clear(),V(!0)},e.dataset.listenerAttached="true")}var Ce=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,ee=null,j=new Set,Z=[];async function U(t=!1){let e=document.getElementById("notifications-list");if(!e)return;Pe(),t&&(e.innerHTML="<p>Updating...</p>");let n=localStorage.getItem("service_map");if(!n){e.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=$("error","Invalid service map data.");return}if(!o){e.innerHTML=$("error","Event service not found in service map.");return}let d=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let u=await fetch(d);if(!u.ok)throw new Error("Service is offline or unreachable.");let v=(await u.json()).events||[],y=Date.now(),s=24*60*60*1e3,p=v.filter(m=>{let g=localStorage.getItem(`notification_read_ts_${m.id}`);if(!g)return!0;let h=parseInt(g);return y-h<s});if(Z=p,t&&(e.innerHTML=""),p.length===0){e.innerHTML=$("empty","No notifications yet."),X();return}let f=m=>{let g=m.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let h=g.title||"Untitled Notification",x=g.body||"No description provided.",w=g.priority||"low",I=!!g.alert,C=g.category||"system",q=g.related_event_ids||[],D=!!localStorage.getItem(`notification_read_ts_${m.id}`),M=new Date(m.timestamp*1e3),N=M.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=M.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),E=D?"event-border-grey":"event-border-blue";!D&&I&&(E="event-border-red"),D&&(w==="high"||w==="critical")?E="event-border-red":D&&w==="medium"&&(E="event-border-orange");let T=D?"notification-read":"notification-unread",S=j.has(m.id),O=S?"expanded":"",ae=S?"display: block;":"display: none;",be="";q.length>0&&(be=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${q.map(R=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${R.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`);let H=document.createElement("div");H.className=`event-item notification-item ${E} ${T} ${O} cursor-pointer`,H.dataset.notificationId=m.id,H.onclick=function(R){if(this.classList.contains("expanded")){this.classList.remove("expanded"),j.delete(m.id);let J=this.querySelector(".event-details");J&&(J.style.display="none")}else{this.classList.add("expanded"),j.add(m.id);let J=this.querySelector(".event-details");if(J&&(J.style.display="block"),!localStorage.getItem(`notification_read_ts_${m.id}`)){localStorage.setItem(`notification_read_ts_${m.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue"),this.classList.remove("event-border-red");let le="event-border-grey";w==="high"||w==="critical"?le="event-border-red":w==="medium"&&(le="event-border-orange"),this.classList.add(le),X()}}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${N}</span>
                    <span class="event-date">${L}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${C.toUpperCase()} ${I?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${h}</div>
                    <div class="event-details" style="${ae}">
                        <div class="event-details-header">
                            <h4>${I?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Priority:</span>
                            <span class="detail-value" style="color: ${w==="high"||w==="critical"?"#ff4d4d":w==="medium"?"#ffa500":"#888"}">${w.toUpperCase()}</span>
                        </div>
                        <div class="event-detail-block" style="text-align: left;">
                            <span class="detail-label">Insight:</span>
                            <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${A(x)}</p>
                        </div>
                        ${be}
                    </div>
                </div>
            `;let he=H.querySelector(".close-details-btn");return he&&he.addEventListener("click",R=>{R.stopPropagation(),H.classList.remove("expanded");let oe=H.querySelector(".event-details");oe&&(oe.style.display="none"),j.delete(m.id)}),H},b=Array.from(e.children),r=new Map(b.map(m=>[m.dataset.notificationId,m])),i=new Set(p.map(m=>m.id));b.forEach(m=>{let g=m.dataset.notificationId;(!g||!i.has(g))&&m.remove()});let c=null;p.forEach((m,g)=>{let h=r.get(m.id);(!h||t)&&(h&&h.remove(),h=f(m),!h)||(g===0?e.firstElementChild!==h&&e.prepend(h):c&&c.nextElementSibling!==h&&c.after(h),c=h)}),ee=Date.now(),_(0,ee),X()}catch(u){console.error("Error fetching notifications:",u),e.children.length===0&&(e.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function Pe(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Z.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),U(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Z.forEach(a=>{j.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),U(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{j.clear(),U(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let a=Date.now()-1728e5;Z.forEach(d=>{localStorage.setItem(`notification_read_ts_${d.id}`,a.toString())}),j.clear(),U(!0)},o.dataset.listenerAttached="true")}var Ae=()=>'<div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;"><p>Loading blueprints...</p></div>',te=null;async function ue(){let t=document.getElementById("blueprints-list");if(!t)return;let e=localStorage.getItem("service_map");if(!e){t.innerHTML=$("config","No service map configured.","Upload service-map.json in Settings.");return}let n=null;try{n=(JSON.parse(e).services?.cs||[]).find(u=>u.id==="dex-event-service")}catch{t.innerHTML=$("error","Invalid service map data.");return}if(!n){t.innerHTML=$("error","Event service not found in service map.");return}let a=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/events?ml=100&format=json&event.type=system.blueprint.generated`;try{let d=await fetch(a);if(!d.ok)throw new Error("Service is offline or unreachable.");let l=(await d.json()).events||[];if(l.length===0){t.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),B(1,0);return}let v=r=>{let i=r.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.title||"Untitled Blueprint",m=i.summary||i.body||"No summary provided.",g=i.content||"",h=i.category||"architecture",x=i.affected_services||[],w=i.implementation_path||[],I=new Date(r.timestamp*1e3),C=I.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),q=I.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),z=y.has(r.id),D=z?"display: block;":"display: none;",M=document.createElement("div");M.className=`event-item notification-item event-border-purple cursor-pointer ${z?"expanded":""}`,M.dataset.blueprintId=r.id,M.onclick=function(T){this.classList.toggle("expanded");let S=this.querySelector(".event-details");if(S){let O=S.style.display==="none";S.style.display=O?"block":"none",O?y.add(r.id):y.delete(r.id)}};let N=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",L="";w.length>0&&(L=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(T=>`<li>${A(T)}</li>`).join("")}
                        </ul>
                    </div>
                `),M.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${C}</span>
                    <span class="event-date">${q}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${c}</div>
                    <div class="event-details" style="${D}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${A(m)}
                        </div>
                        ${N}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${A(g)}</p>
                        </div>
                        ${L}
                    </div>
                </div>
            `;let E=M.querySelector(".close-details-btn");return E&&E.addEventListener("click",T=>{T.stopPropagation(),M.classList.remove("expanded");let S=M.querySelector(".event-details");S&&(S.style.display="none"),y.delete(r.id)}),M},y=new Set(Array.from(t.querySelectorAll(".event-item.expanded")).map(r=>r.dataset.blueprintId).filter(r=>r)),s=Array.from(t.children),p=new Map(s.map(r=>[r.dataset.blueprintId,r])),f=new Set(l.map(r=>r.id));s.forEach(r=>{r.dataset.blueprintId&&!f.has(r.dataset.blueprintId)&&r.remove()});let b=null;l.forEach((r,i)=>{let c=p.get(r.id);!c&&(c=v(r),!c)||(i===0?t.firstElementChild!==c&&t.prepend(c):b&&b.nextElementSibling!==c&&b.after(c),b=c)}),te=Date.now(),_(1,te),B(1,l.length)}catch(d){console.error("Error fetching blueprints:",d),t.children.length===0&&(t.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}var Ne=()=>localStorage.getItem("service_map")?'<div id="services-widgets" class="system-monitor-widgets"><p>Loading services...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),De=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),He=()=>localStorage.getItem("service_map")?'<div id="processes-widgets" class="system-monitor-widgets"><p>Loading processes...</p></div>':$("config","No service map configured.","Upload service-map.json in Settings."),se=null,ne=null,ie=null;async function Be(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function Fe(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function ve(){let t=document.getElementById("services-widgets");if(!t)return;let e=await Be();if(!e||!e.services){t.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}se=Date.now(),_(5,se);let n=e.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function o(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function a(s){if(!s||s==="N/A"||s==="unknown")return"-";let p=s.match(/^(\d+\.\d+\.\d+)/);return p?p[0]:s.split(".").slice(0,3).join(".")||"-"}function d(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function u(s){if(!s||s==="N/A"||s==="unknown")return"-";let p=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!p)return"-";let f=parseInt(p[1])||0,b=parseInt(p[2])||0,r=parseInt(p[3])||0,i=parseFloat(p[4])||0,c=f*86400+b*3600+r*60+i,m=Math.floor(c/86400);if(m>0)return`${m}d`;let g=Math.floor(c/3600);if(g>0)return`${g}h`;let h=Math.floor(c/60);return h>0?`${h}m`:`${Math.floor(c)}s`}function l(s){let p=s.status==="online",f=p?"service-widget-online":"service-widget-offline",b=p?"bx-check-circle":"bx-x-circle",r=p?"OK":"BAD",i=s.version?a(s.version.str):"-",c=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",m=s.memory&&s.memory!=="N/A"?s.memory:"-",g=c!=="-"?"#00ff00":"#666",h=c!=="-"?"#fff":"#666",x=m!=="-"?"#00ff00":"#666",w=m!=="-"?"#fff":"#666",I=u(s.uptime),C="";return p?C=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${i}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${I}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${g};"></i>
                        <span style="color: ${h};">${c}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${x};"></i>
                        <span style="color: ${w};">${m}</span>
                    </div>
                </div>`:C='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${f}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${b}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${r}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${d(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${C}</div></div>`}let v=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),y=new Set(n.map(s=>s.id));for(let[s,p]of v)y.has(s)||p.remove();n.forEach(s=>{let p=l(s),f=v.get(s.id);f?f.outerHTML!==p&&(f.outerHTML=p):t.insertAdjacentHTML("beforeend",p)})}async function fe(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Be();if(!e){t.innerHTML=$("offline","Failed to load model status.");return}ne=Date.now(),_(4,ne);let n=e.models||[],o=e.whisper;Array.from(t.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function a(l){let v=l.status==="Ready";return`
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
                </div>`}function d(l){let v=l.status==="Downloaded",y=v?"service-widget-online":"service-widget-offline",s=v?"OK":"MISSING",p=v&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",f=l.name;return l.type==="custom"&&f.endsWith(":latest")&&(f=f.replace(":latest","")),`<div class="service-widget ${y}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${v?"bx-check-circle":"bx-x-circle"}"></i><h3>${f}</h3><span class="service-widget-status">${s}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${p}</span></div></div></div>`}let u="";if(o&&(u+=a(o)),u+=n.map(d).join(""),!u){t.innerHTML=$("empty","No models found.");return}t.innerHTML!==u&&(t.innerHTML=u)}async function ge(){let t=document.getElementById("processes-widgets");if(!t)return;let e=await Fe();if(e===null){t.innerHTML=$("offline","Failed to load process status.");return}if(ie=Date.now(),_(2,ie),e.length===0){t.innerHTML=$("empty","No active processes."),B(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function n(d){let u=Math.floor(Date.now()/1e3-d.start_time),l=d.retries>0?`<span class="process-retry-badge">Retry ${d.retries}</span>`:"";return`
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
                </div>`}let o=new Map(Array.from(t.querySelectorAll(".process-widget")).map(d=>[d.dataset.channelId,d])),a=new Set(e.map(d=>d.channel_id));for(let[d,u]of o)a.has(d)||u.remove();e.forEach(d=>{let u=n(d),l=o.get(d.channel_id);l?l.outerHTML!==u&&(l.outerHTML=u):t.insertAdjacentHTML("beforeend",u)}),B(2,e.length)}function W(){let t=de(),e=K()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(k).map(a=>`
                    <div class="theme-card ${t===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===k.AUTO?"Automatic theme selection.":a===k.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
            </div>`}function Y(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let v=this.dataset.theme;Ee(v),t.setContent(W()),Y(t)})});function n(l,v,y,s,p,f,b){let r=document.getElementById(l),i=document.getElementById(v),c=document.getElementById(y),m=document.getElementById(s),g=document.getElementById(p);r&&i&&(r.onclick=()=>i.click(),i.onchange=h=>{let x=h.target.files[0];if(!x)return;if(x.name!==b){m.textContent=`File must be named "${b}"`,m.style.display="block",i.value="";return}let w=new FileReader;w.onload=I=>{try{let C=JSON.parse(I.target.result);localStorage.setItem(f,JSON.stringify(C)),c.textContent=b,m.style.display="none",t.setContent(W()),Y(t)}catch{m.textContent="Invalid JSON format",m.style.display="block",i.value=""}},w.onerror=()=>{m.textContent="Failed to read file",m.style.display="block",i.value=""},w.readAsText(x)}),g&&(g.onclick=()=>{localStorage.removeItem(f),t.setContent(W()),Y(t)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(o.disabled=!0),o.onclick=async v=>{if(v.target.checked)try{await Notification.requestPermission()!=="granted"&&(v.target.checked=!1)}catch{v.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),v.target.checked=!0)}}let a=document.getElementById("microphone-toggle");async function d(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;a&&(a.disabled=!l||l.state==="denied",a.checked=l?.state==="granted");let v=document.querySelector("#microphone-setting-item .settings-item-description");v&&(v.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}d(),a&&!a.disabled&&(a.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),d()}catch{l.target.checked=!1,d()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let u=document.getElementById("analytics-toggle");u&&(u.checked=localStorage.getItem("easter_analytics_enabled")!=="false",u.onclick=l=>{let v=l.target.checked;localStorage.setItem("easter_analytics_enabled",v),window.EASTER_ANALYTICS_ENABLED=v,window.EASTER_DEBUG_MODE=v})}function je(){console.log("Welcome to Easter Company."),Te(),ye();let t=$e();we(t),xe();let e=document.querySelector("footer"),n=null;function o(){n=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(s=>s.classList.remove("active","inactive"))}function a(s,p=null){let f=n&&n.id===s.id;n&&n.close(!f),f?n=null:setTimeout(()=>{s.open(),n=s,document.querySelectorAll(".nav-right i").forEach(b=>{let r=b===p;b.classList.toggle("active",r),b.classList.toggle("inactive",!r&&p)}),e?.classList.add("hide")},n?220:0)}async function d(){await Promise.all([ve(),fe(),V(),ge(),U(),ue(),me()]);let s=setInterval(()=>{if(!y.isOpen())return clearInterval(s);_(4,pe),_(3,Q),_(5,ne),_(6,se),_(2,ie),_(1,te),_(0,ee)},1e3),p=setInterval(()=>{if(!y.isOpen())return clearInterval(p);V(),ge(),U(),ue(),me()},3e3),f=setInterval(()=>{if(!y.isOpen())return clearInterval(f);ve(),fe()},6e4)}let u=G({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),l=G({id:"user-window",title:"User Profile",content:`<p>Logged in as: ${K()||"Unknown"}</p>`,icon:"bx-user",onClose:o}),v=G({id:"settings-window",title:"Settings",content:W(),icon:"bx-cog",onClose:o,onOpen:()=>{v.setContent(W()),setTimeout(()=>Y(v),50)}}),y=G({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ce(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:Ae(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:He(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:ke(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:_e(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:De(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Ne(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:o,onOpen:()=>setTimeout(d,100)});t?(document.getElementById("user-icon")?.addEventListener("click",s=>a(l,s.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",s=>a(y,s.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",s=>a(v,s.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(u),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{Se(document.getElementById("email-input").value),window.location.reload()}catch(p){let f=document.getElementById("login-error");f&&(f.textContent=p.message,f.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",je):je();})();
//# sourceMappingURL=dex.1ffec0f8.js.map
