(()=>{function Me(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ae(t=!1){let n=`
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
    `,o=document.createElement("nav");o.innerHTML=n,document.body.prepend(o)}function Ce(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function ne(t){let e=null,n=t.onClose||null,o=t.onOpen||null;function a(){if(e){e.classList.add("open"),window.addEventListener("resize",v),o&&setTimeout(o,10);return}let x=document.getElementById("windows-container");x||(x=document.createElement("div"),x.id="windows-container",x.className="windows-container",document.body.appendChild(x)),e=document.createElement("div"),e.id=t.id,e.className="window";let u=t.icon||"bx-window",p="",s="",r;t.tabs&&t.tabs.length>0?(p=`<div class="tab-bar">${t.tabs.map((S,w)=>{let h;return S.icon?h=`<i class="bx ${S.icon}"></i>`:S.title&&S.title.length>0?h=`<span class="tab-glyph">${S.title.charAt(0).toUpperCase()}</span>`:h='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${w===0?"active":""}" data-tab-index="${w}">
                        ${h}
                        <span class="tab-title">${S.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${w}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,r=`<div class="window-content">${t.tabs.map((S,w)=>`<div class="tab-content ${w===0?"active":""}" data-tab-content="${w}">${S.content}</div>`).join("")}</div>`):(t.title&&(s=`<div class="window-title">${t.title}</div>`),r=`<div class="window-content">${t.content}</div>`);let l=`
            <div class="window-header">
                <i class="bx ${u}"></i>
                ${p}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=l+r,x.appendChild(e);let m=e.querySelector(".window-close");m&&m.addEventListener("click",i=>{i.stopPropagation(),d()}),window.addEventListener("resize",v),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(c=>{c.addEventListener("click",()=>{let S=c.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),c.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${S}"]`).classList.add("active"),b(c,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function v(){if(!e||!e.classList.contains("open"))return;let x=e.querySelector(".tab.active");x&&b(x,e)}function b(x,u){setTimeout(()=>{let p=u.querySelector(".tab-bar");if(p){let s=Array.from(p.querySelectorAll(".tab")),r=s.indexOf(x),l=p.clientWidth,m=s[Math.max(0,r-2)],i=s[Math.min(s.length-1,r+2)],c=m.offsetLeft-p.offsetLeft-25,w=i.offsetLeft+i.offsetWidth-p.offsetLeft+25-c,h;w<=l?h=c-(l-w)/2:h=x.offsetLeft-p.offsetLeft-l/2+x.offsetWidth/2,p.scrollTo({left:h,behavior:"smooth"})}},350)}function d(x=!1){e&&(window.removeEventListener("resize",v),x?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),n&&n(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function g(x){if(e){let u=e.querySelector(".window-content");u&&(u.innerHTML=x)}}function E(){return e&&e.classList.contains("open")}return{open:a,close:d,setContent:g,isOpen:E,id:t.id}}var we="easter_user_email";function De(){return localStorage.getItem(we)!==null}function le(){return localStorage.getItem(we)}function Ne(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(we,t.trim())}var Be="easter_theme",D={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function Ee(){return localStorage.getItem(Be)||D.AUTO}function et(){let t=window.innerWidth,e=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?D.ANIMATED:(t===1920&&e===1080&&n||t<=1920||e<=1080,D.DEFAULT)}function He(t){if(!Object.values(D).includes(t))throw new Error("Invalid theme");localStorage.setItem(Be,t),$e(t)}function $e(t,e=!1){let n=document.body,o=t===D.AUTO?et():t;if(e||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(D).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${t}`),o===D.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(e?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function Oe(){let t=Ee();if($e(t,!0),t===D.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{$e(D.AUTO)},300)})}}function G(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",v=n?`<p class="placeholder-action">${n}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${a} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${v}
        </div>
    `}function Ue(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var Se=null;async function ce(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=G("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let n;try{n=JSON.parse(e)}catch(b){return console.error("Error parsing service_map from localStorage:",b),t.classList.add("placeholder-active"),t.innerHTML=G("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let o=null;if(n&&typeof n.services=="object"){let b=["cs","be","th"];for(let d of b)if(Array.isArray(n.services[d])){let g=n.services[d].find(E=>E.short_name==="event"||E.id==="event"||E.id==="dex-event-service");if(g){o=g;break}}}if(!o)return t.classList.add("placeholder-active"),t.innerHTML=G("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let a=o.domain==="0.0.0.0"?"127.0.0.1":o.domain,v=`http://${a}:${o.port}/logs`;try{let b=await fetch(v);if(!b.ok)return t.classList.add("placeholder-active"),t.innerHTML=G("offline","Event service is offline.","Please ensure the event service is running."),!1;let d=await b.json();if(!d||d.length===0)return t.classList.add("placeholder-active"),t.innerHTML=G("empty","No logs found.","Service logs will appear here when available."),!1;let g=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],E=d.filter(u=>!g.includes(u.id));E.forEach(u=>{u.logs&&Array.isArray(u.logs)?u.logs.reverse():u.logs=[]}),E.reverse();let x=E.map(u=>{let p=u.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${u.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(p)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${u.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${p}</pre>
                </div>
            `}).join("");return t.innerHTML=x,document.querySelectorAll(".copy-logs-btn").forEach(u=>{u.addEventListener("click",()=>{let p=unescape(u.dataset.logs);navigator.clipboard.writeText(p).then(()=>{let s=u.querySelector("i");s.classList.remove("bx-copy"),s.classList.add("bx-check"),setTimeout(()=>{s.classList.remove("bx-check"),s.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(u=>{u.addEventListener("click",async()=>{let p=u.dataset.serviceId;if(!confirm(`Are you sure you want to clear logs for ${p}?`))return;let s=`http://${a}:${o.port}/logs?service_id=${p}`;try{(await fetch(s,{method:"DELETE"})).ok?ce():console.error("Failed to clear logs")}catch(r){console.error("Error clearing logs:",r)}})}),Se=Date.now(),!0}catch(b){return console.error("Error fetching logs:",b),t.classList.add("placeholder-active"),t.innerHTML=G("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}function L(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",v=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${v}</div>`}function k(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function I(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!n)return;if(!e){n.textContent="Last updated: never";return}let o=Date.now(),a=Math.floor((o-e)/1e3),v;a<60?v=`${a}s ago`:a<3600?v=`${Math.floor(a/60)}m ago`:v=`${Math.floor(a/3600)}h ago`,n.textContent=`Last updated: ${v}`}function z(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!n)return;let o=n.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function de(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;z(0,e)}var tt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function je(t,e){let n=tt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(n=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!n)return t;let o=n.replace(/\{(\w+)\}/g,(a,v)=>e[v]!==void 0&&e[v]!==null?e[v]:a);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var qe=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="event-filters" class="event-filters">
        <button class="notif-action-btn filter-btn active" data-filter="all">All</button>
        <button class="notif-action-btn filter-btn" data-filter="messaging">Messaging</button>
        <button class="notif-action-btn filter-btn" data-filter="system">System</button>
        <button class="notif-action-btn filter-btn" data-filter="cognitive">Cognitive</button>
        <button class="notif-action-btn filter-btn" data-filter="moderation">Moderation</button>
    </div>
    <div id="events-timeline" class="events-timeline">
        <p>Loading events...</p>
    </div>
`,K=null,V=new Set,ie=[],pe="all",st={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},nt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Pe(t){for(let[e,n]of Object.entries(st))if(n.includes(t))return e;return"system"}function it(t){return nt[t]||"bx-square-rounded"}async function Y(t=!1){let e=document.getElementById("events-timeline");if(!e)return;at();let n=localStorage.getItem("service_map");if(!n){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(g=>g.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!o){e.innerHTML=L("error","Event service not found in service map.");return}let a=o.domain==="0.0.0.0"?"127.0.0.1":o.domain,v=pe==="all"?100:250,b=`http://${a}:${o.port}/events?ml=${v}&format=json&exclude_types=system.notification.generated`;try{let d=await fetch(b);if(!d.ok)throw new Error("Service is offline or unreachable.");let E=(await d.json()).events||[],x=E;if(pe!=="all"&&(x=E.filter(m=>{let i=m.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return!1}return Pe(i.type)===pe})),ie=x.slice(0,50),K=Date.now(),I(3,K),ie.length===0){e.innerHTML=L("empty","No events found for this filter.");return}t&&(e.innerHTML="");let u=m=>{let i=m.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.type,S=Pe(c),w=it(c),h=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command"||c==="system.analysis.audit"||c==="system.test.completed"||c==="error_occurred"||c==="system.cli.status"||c.startsWith("system.roadmap")||c.startsWith("system.process"),f="event-border-grey";h&&(c==="moderation.explicit_content.deleted"||c==="error_occurred"?f="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.analysis.audit"?f="event-border-purple":c==="system.cli.command"||c==="system.cli.status"?f="event-border-orange":c==="system.test.completed"?f=i.test?.status==="OK"&&i.lint?.status==="OK"&&i.format?.status==="OK"?"event-border-blue":"event-border-red":f="event-border-blue");let y=h?"cursor-pointer":"",$=V.has(m.id),U=$?"expanded":"",_=$?"display: block;":"display: none;",M=new Date(m.timestamp*1e3),j=M.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),H=M.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),J=je(c,i),C="";if(h){let T="";if(c==="engagement.decision")T=`
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
                    `;else if(c==="messaging.bot.sent_message")T=`
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
                    `;else if(c==="moderation.explicit_content.deleted")T=`
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
                    `;else if(c==="analysis.link.completed")T=`
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
                    `;else if(c==="analysis.visual.completed"){let O="";i.base64_preview?O=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(O=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${i.filename}</span>
                        </div>
                        ${O}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${k(i.description)||"None"}</pre>
                        </div>
                    `}else if(c==="system.cli.command")T=`
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
                    `;else if(c==="system.analysis.audit")T=`
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
                    `;else if(c==="system.test.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${i.service_name}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${i.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Format:</span>
                            <pre class="detail-pre">${i.format?.status||"N/A"}: ${i.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Lint:</span>
                            <pre class="detail-pre">${i.lint?.status||"N/A"}: ${i.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Tests:</span>
                            <pre class="detail-pre">${i.test?.status||"N/A"}: ${i.test?.details||i.test?.message||"OK"}</pre>
                        </div>
                    `;else if(c==="error_occurred")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${i.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${k(i.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(i.context||{},null,2)}</pre>
                        </div>
                    `;else if(c==="system.cli.status")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${i.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${k(i.message)}</pre>
                        </div>
                    `;else if(c==="messaging.user.sent_message"){let O="";i.attachments&&i.attachments.length>0&&(O=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${i.attachments.map(B=>{let re=B.content_type&&B.content_type.startsWith("image/"),he=(B.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${re?`<div class="attachment-thumb-container"><img src="${B.url}" alt="${B.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${B.url}" target="_blank" class="attachment-link">${B.filename}</a>
                                        <span class="attachment-meta">${B.content_type} \u2022 ${he}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${i.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${i.content||"(empty)"}</pre>
                        </div>
                        ${O}
                    `}C=`
                    <div class="event-details" style="${_}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${T}
                    </div>
                `}let N=document.createElement("div");if(N.className=`event-item ${f} ${y} ${U}`,N.dataset.eventId=m.id,N.onclick=function(T){if(!h)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),V.delete(m.id);let A=this.querySelector(".event-details");A&&(A.style.display="none")}else{this.classList.add("expanded"),V.add(m.id);let A=this.querySelector(".event-details");A&&(A.style.display="block")}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${j}</span>
                    <span class="event-date">${H}</span>
                </div>
                <div class="event-icon"><i class='bx ${w}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${S}">${S}</span>
                        ${m.service}
                    </div>
                    <div class="event-message">${J}</div>
                    ${C}
                </div>
            `,h){let T=N.querySelector(".close-details-btn");T&&T.addEventListener("click",O=>{O.stopPropagation();let A=O.target.closest(".event-item");if(A){A.classList.remove("expanded"),V.delete(m.id);let B=A.querySelector(".event-details");B&&(B.style.display="none")}})}return N},p=Array.from(e.children),s=new Map(p.map(m=>[m.dataset.eventId,m])),r=new Set(ie.map(m=>m.id));p.forEach(m=>{let i=m.dataset.eventId;(!i||!r.has(i))&&m.remove()});let l=null;ie.forEach((m,i)=>{let c=s.get(m.id);(!c||t)&&(c&&c.remove(),c=u(m),!c)||(i===0?e.firstElementChild!==c&&e.prepend(c):l&&l.nextElementSibling!==c&&l.after(c),l=c)}),K=Date.now(),I(3,K)}catch(d){console.error("Error fetching events:",d),e.children.length===0&&(e.innerHTML=L("offline","Failed to load events.","The event service may be offline or unreachable."))}}function at(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),n=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ie.forEach(o=>V.add(o.id)),Y(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{V.clear(),Y(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.querySelectorAll(".filter-btn").forEach(o=>{o.onclick=()=>{n.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),o.classList.add("active"),pe=o.dataset.filter,Y(!0)}}),n.dataset.listenerAttached="true")}var ze=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,X=null,R=new Set,me=[];async function F(t=!1){let e=document.getElementById("notifications-list");if(!e)return;ot(),t&&(e.innerHTML="<p>Updating...</p>");let n=localStorage.getItem("service_map");if(!n){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!o){e.innerHTML=L("error","Event service not found in service map.");return}let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let b=await fetch(v);if(!b.ok)throw new Error("Service is offline or unreachable.");let g=(await b.json()).events||[];X=Date.now(),I(0,X);let E=Date.now(),x=24*60*60*1e3,u=g.filter(f=>{let y=localStorage.getItem(`notification_read_ts_${f.id}`);if(!y)return!0;let $=parseInt(y);return E-$<x});u.sort((f,y)=>{let $=j=>{let H=j.event;if(typeof H=="string")try{H=JSON.parse(H)}catch{return"low"}return(H.priority||"low").toLowerCase()},U=j=>j==="critical"?4:j==="high"?3:j==="medium"?2:1,_=U($(f)),M=U($(y));return _!==M?M-_:y.timestamp-f.timestamp}),me=u;let p=f=>{let y=f.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return"low"}return(y.priority||"low").toLowerCase()},s=[],l=new Set(u.map(f=>p(f))).size>1;if(u.length>0){let f=null;u.forEach(y=>{let $=p(y);l&&$!==f&&(s.push({id:`divider-${$}`,type:"divider",label:$.toUpperCase()}),f=$),s.push(y)})}if(t&&(e.innerHTML=""),u.length===0){e.innerHTML=L("empty","No notifications yet."),de();return}let m=f=>{let y=f.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return null}let $=y.title||"Untitled Notification",U=y.body||"No description provided.",_=y.priority||"low",M=!!y.alert,j=y.category||"system",H=y.related_event_ids||[],C=!!localStorage.getItem(`notification_read_ts_${f.id}`),N=new Date(f.timestamp*1e3),T=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),O=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=C?"event-border-grey":"event-border-blue";!C&&M&&(A="event-border-red"),C&&(_==="high"||_==="critical")?A="event-border-red":C&&_==="medium"&&(A="event-border-orange");let B=C?"notification-read":"notification-unread",re=R.has(f.id),he=re?"expanded":"",Qe=re?"display: block;":"display: none;",_e="",Ie="";H.length>0&&(Ie=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${H.map(te=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${te.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),_e=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${_==="high"||_==="critical"?"#ff4d4d":_==="medium"?"#ffa500":"#888"}">${_.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${k(U)}</p>
                </div>
                ${Ie}
            `;let P=document.createElement("div");P.className=`event-item notification-item ${A} ${B} ${he} cursor-pointer`,P.dataset.notificationId=f.id,P.onclick=function(te){if(this.classList.contains("expanded")){this.classList.remove("expanded"),R.delete(f.id);let se=this.querySelector(".event-details");se&&(se.style.display="none")}else{this.classList.add("expanded"),R.add(f.id);let se=this.querySelector(".event-details");if(se&&(se.style.display="block"),!localStorage.getItem(`notification_read_ts_${f.id}`)){localStorage.setItem(`notification_read_ts_${f.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let xe="event-border-grey";_==="high"||_==="critical"?xe="event-border-red":_==="medium"&&(xe="event-border-orange"),this.classList.add(xe),de()}}},P.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${T}</span>
                    <span class="event-date">${O}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${j.toUpperCase()} ${M?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${$}</div>
                    <div class="event-details" style="${Qe}">
                        <div class="event-details-header">
                            <h4>${M?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${_e}
                    </div>
                </div>
            `;let ke=P.querySelector(".close-details-btn");return ke&&ke.addEventListener("click",te=>{te.stopPropagation(),P.classList.remove("expanded");let ye=P.querySelector(".event-details");ye&&(ye.style.display="none"),R.delete(f.id)}),P},i=f=>{let y=document.createElement("div");y.className="notification-divider",y.dataset.notificationId=f.id;let $="#888888";return f.label==="CRITICAL"?$="#ff4d4d":f.label==="HIGH"?$="#ff8888":f.label==="MEDIUM"&&($="#ffa500"),y.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${$}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,y.innerHTML=`<span style="white-space: nowrap;">${f.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${$}44, transparent); flex-grow: 1;"></div>`,y},c=Array.from(e.children),S=new Map(c.map(f=>[f.dataset.notificationId,f])),w=new Set(s.map(f=>f.id));c.forEach(f=>{let y=f.dataset.notificationId;(!y||!w.has(y))&&f.remove()});let h=null;s.forEach((f,y)=>{let $=S.get(f.id);(!$||t)&&($&&$.remove(),f.type==="divider"?$=i(f):$=m(f),!$)||(y===0?e.firstElementChild!==$&&e.prepend($):h&&h.nextElementSibling!==$&&h.after($),h=$)}),X=Date.now(),I(0,X),de()}catch(b){console.error("Error fetching notifications:",b),e.children.length===0&&(e.innerHTML=L("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function ot(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{me.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),F(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{me.forEach(a=>{R.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),F(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{R.clear(),F(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let a=Date.now()-1728e5;me.forEach(v=>{localStorage.setItem(`notification_read_ts_${v.id}`,a.toString())}),R.clear(),F(!0)},o.dataset.listenerAttached="true")}var Re=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,ue=null,Z=new Set,Fe=[];async function ae(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;rt();let n=localStorage.getItem("service_map");if(!n){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!o){e.innerHTML=L("error","Event service not found in service map.");return}let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/events?ml=1000&format=json&event.type=system.blueprint.generated`;try{let b=await fetch(v);if(!b.ok)throw new Error("Service is offline or unreachable.");let g=(await b.json()).events||[];if(Fe=g,ue=Date.now(),I(1,ue),g.length===0){e.innerHTML=L("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),z(1,0);return}t&&(e.innerHTML="");let E=r=>{let l=r.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{return null}let m=l.title||"Untitled Blueprint",i=l.summary||l.body||"No summary provided.",c=l.content||"",S=l.category||"architecture",w=l.affected_services||[],h=l.implementation_path||[],f=new Date(r.timestamp*1e3),y=f.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=f.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),U=Z.has(r.id),_=U?"display: block;":"display: none;",M=document.createElement("div");M.className=`event-item notification-item event-border-purple cursor-pointer ${U?"expanded":""}`,M.dataset.blueprintId=r.id,M.onclick=function(C){if(this.classList.contains("expanded")){this.classList.remove("expanded"),Z.delete(r.id);let T=this.querySelector(".event-details");T&&(T.style.display="none")}else{this.classList.add("expanded"),Z.add(r.id);let T=this.querySelector(".event-details");T&&(T.style.display="block")}};let j=w.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${w.join(", ")}</div>`:"",H="";h.length>0&&(H=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${h.map(C=>`<li>${k(C)}</li>`).join("")}
                        </ul>
                    </div>
                `),M.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${y}</span>
                    <span class="event-date">${$}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${S.toUpperCase()}</div>
                    <div class="event-message">${m}</div>
                    <div class="event-details" style="${_}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${k(i)}
                        </div>
                        ${j}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${k(c)}</p>
                        </div>
                        ${H}
                    </div>
                </div>
            `;let J=M.querySelector(".close-details-btn");return J&&J.addEventListener("click",C=>{C.stopPropagation(),M.classList.remove("expanded");let N=M.querySelector(".event-details");N&&(N.style.display="none"),Z.delete(r.id)}),M},x=Array.from(e.children),u=new Map(x.map(r=>[r.dataset.blueprintId,r])),p=new Set(g.map(r=>r.id));x.forEach(r=>{let l=r.dataset.blueprintId;(!l||!p.has(l))&&r.remove()});let s=null;g.forEach((r,l)=>{let m=u.get(r.id);(!m||t)&&(m&&m.remove(),m=E(r),!m)||(l===0?e.firstElementChild!==m&&e.prepend(m):s&&s.nextElementSibling!==m&&s.after(m),s=m)}),z(1,g.length)}catch(b){console.error("Error fetching blueprints:",b),e.children.length===0&&(e.innerHTML=L("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function rt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Fe.forEach(n=>Z.add(n.id)),ae(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Z.clear(),ae(!0)},e.dataset.listenerAttached="true")}var Je=()=>localStorage.getItem("service_map")?`
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
    `:L("config","No service map configured.","Upload service-map.json in Settings."),Ge=()=>localStorage.getItem("service_map")?'<div id="models-widgets" class="system-monitor-widgets"><p>Loading models...</p></div>':L("config","No service map configured.","Upload service-map.json in Settings."),Ke=()=>localStorage.getItem("service_map")?`
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
    `:L("config","No service map configured.","Upload service-map.json in Settings."),ve=null,fe=null,ge=null;async function Ve(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function We(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system/hardware`,a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(t){return console.error("Error fetching hardware data:",t),null}}async function lt(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,a=await fetch(o);if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function ct(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!e)return null;let o=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/analyst/status`,a=await fetch(o);return a.ok?await a.json():null}catch{return null}}async function Le(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),n=document.getElementById("hardware-refresh-btn"),o=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let r="",l=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(r+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${l} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let m=s.CPU[0];r+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${m.LABEL}">${m.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${m.COUNT} Cores / ${m.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((m,i)=>{let c=(m.VRAM/1073741824).toFixed(1);r+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${i}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${m.LABEL}">${m.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${c} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let m=0,i=0;s.STORAGE.forEach(h=>{m+=h.USED,i+=h.SIZE});let c=(m/(1024*1024*1024)).toFixed(1),S=(i/(1024*1024*1024)).toFixed(1),w=i>0?(m/i*100).toFixed(0):0;r+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${c} / ${S} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${w>90?"#ff4d4d":"#00ff00"}; width: ${w}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=r};if(e&&n){n.dataset.listenerAttached||(n.onclick=async()=>{n.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let r=await We();r?(o(r),n.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',n.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},n.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let r=await We();o(r)}}if(!t)return;let a=await Ve();if(!a||!a.services){t.innerHTML=L("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}ve=Date.now(),I(5,ve);let v=a.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function b(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function d(s){if(!s||s==="N/A"||s==="unknown")return"-";let r=s.match(/^(\d+\.\d+\.\d+)/);return r?r[0]:s.split(".").slice(0,3).join(".")||"-"}function g(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function E(s){if(!s||s==="N/A"||s==="unknown")return"-";let r=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!r)return"-";let l=parseInt(r[1])||0,m=parseInt(r[2])||0,i=parseInt(r[3])||0,c=parseFloat(r[4])||0,S=l*86400+m*3600+i*60+c,w=Math.floor(S/86400);if(w>0)return`${w}d`;let h=Math.floor(S/3600);if(h>0)return`${h}h`;let f=Math.floor(S/60);return f>0?`${f}m`:`${Math.floor(S)}s`}function x(s){let r=s.status==="online",l=r?"service-widget-online":"service-widget-offline",m=r?"bx-check-circle":"bx-x-circle",i=r?"OK":"BAD",c=s.version?d(s.version.str):"-",S=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",w=s.memory&&s.memory!=="N/A"?s.memory:"-",h=S!=="-"?"#00ff00":"#666",f=S!=="-"?"#fff":"#666",y=w!=="-"?"#00ff00":"#666",$=w!=="-"?"#fff":"#666",U=E(s.uptime),_="";return r?_=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${c}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${U}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${h};"></i>
                        <span style="color: ${f};">${S}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${y};"></i>
                        <span style="color: ${$};">${w}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${l}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${m}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${i}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${g(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let u=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),p=new Set(v.map(s=>s.id));for(let[s,r]of u)p.has(s)||r.remove();v.forEach(s=>{let r=x(s),l=u.get(s.id);l?l.outerHTML!==r&&(l.outerHTML=r):t.insertAdjacentHTML("beforeend",r)})}async function Te(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Ve();if(!e){t.innerHTML=L("offline","Failed to load model status.");return}fe=Date.now(),I(4,fe);let n=e.models||[],o=e.whisper;Array.from(t.children).forEach(d=>{d.classList.contains("service-widget")||d.remove()});function a(d){let g=d.status==="Ready";return`
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
                </div>`}function v(d){let g=d.status==="Downloaded",E=g?"service-widget-online":"service-widget-offline",x=g?"OK":"MISSING",u=g&&d.size>0?`${(d.size/1e9).toFixed(2)} GB`:"-",p=d.name;return d.type==="custom"&&p.endsWith(":latest")&&(p=p.replace(":latest","")),`<div class="service-widget ${E}" data-model-name="${d.name}"><div class="service-widget-header"><i class="bx ${g?"bx-check-circle":"bx-x-circle"}"></i><h3>${p}</h3><span class="service-widget-status">${x}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${d.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${u}</span></div></div></div>`}let b="";if(o&&(b+=a(o)),b+=n.map(v).join(""),!b){t.innerHTML=L("empty","No models found.");return}t.innerHTML!==b&&(t.innerHTML=b)}async function be(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),n=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),a=document.getElementById("analyst-idle-val"),v=document.getElementById("analyst-reset-btn");v&&!v.dataset.listenerAttached&&(v.onclick=async()=>{if(!localStorage.getItem("service_map"))return;let s=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(m=>m.id==="dex-event-service");if(!s)return;let l=`http://${s.domain==="0.0.0.0"?"127.0.0.1":s.domain}:${s.port}/analyst/reset?tier=all`;v.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(l,{method:"POST"}),setTimeout(()=>{v.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{v.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),be()}catch{v.innerHTML="<i class='bx bx-error'></i> Failed"}},v.dataset.listenerAttached="true");let b=await ct();if(b){let p=Math.floor(Date.now()/1e3),s=b.active_tier,r=(l,m,i)=>{if(s===i||i==="guardian"&&s==="tests"){l.textContent="Working",l.style.color="#bb86fc";return}let c=m-p;if(c<=0)l.textContent="Ready",l.style.color="#5eff5e";else{let S=Math.floor(c/60),w=c%60;l.textContent=`${S}m ${w}s`,l.style.color="#fff"}};if(e&&b.guardian&&r(e,b.guardian.next_run,"guardian"),n&&b.architect&&r(n,b.architect.next_run,"architect"),o&&b.strategist&&r(o,b.strategist.next_run,"strategist"),a&&b.system_idle_time!==void 0){let l=b.system_idle_time,m=Math.floor(l/60),i=l%60;a.textContent=`${m}m ${i}s`,l>300?a.style.color="#5eff5e":l>60?a.style.color="#ffa500":a.style.color="#fff"}}else[e,n,o,a].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let d=await lt(),g=document.getElementById("vitals-processes-val");if(g)if(d){let p=d.length;g.textContent=p>0?`${p} Active`:"Idle",g.style.color=p>0?"#bb86fc":"#fff"}else g.textContent="-",g.style.color="#888";if(d===null){t.innerHTML=L("offline","Failed to load process status.");return}if(ge=Date.now(),I(2,ge),d.length===0){t.innerHTML=L("empty","No active processes."),z(2,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function E(p){let s=Math.floor(Date.now()/1e3-p.start_time),r=p.retries>0?`<span class="process-retry-badge">Retry ${p.retries}</span>`:"",l=p.channel_id,m={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return m[l]?l=m[l]:/^\d+$/.test(l)&&(l=`Channel ${l}`),`
                <div class="service-widget process-widget" data-channel-id="${p.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${l}</h3>
                        ${r}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${p.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${s}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${p.pid}</span>
                        </div>
                    </div>
                </div>`}let x=new Map(Array.from(t.querySelectorAll(".process-widget")).map(p=>[p.dataset.channelId,p])),u=new Set(d.map(p=>p.channel_id));for(let[p,s]of x)u.has(p)||s.remove();d.forEach(p=>{let s=E(p),r=x.get(p.channel_id);r?r.outerHTML!==s&&(r.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),z(2,d.length)}function Q(){let t=Ee(),e=le()||"user@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(D).map(a=>`
                    <div class="theme-card ${t===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===D.AUTO?"Automatic theme selection.":a===D.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
            </div>`}function oe(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(d=>{d.addEventListener("click",function(){let g=this.dataset.theme;He(g),t.setContent(Q()),oe(t)})});function n(d,g,E,x,u,p,s){let r=document.getElementById(d),l=document.getElementById(g),m=document.getElementById(E),i=document.getElementById(x),c=document.getElementById(u);r&&l&&(r.onclick=()=>l.click(),l.onchange=S=>{let w=S.target.files[0];if(!w)return;if(w.name!==s){i.textContent=`File must be named "${s}"`,i.style.display="block",l.value="";return}let h=new FileReader;h.onload=f=>{try{let y=JSON.parse(f.target.result);localStorage.setItem(p,JSON.stringify(y)),m.textContent=s,i.style.display="none",t.setContent(Q()),oe(t)}catch{i.textContent="Invalid JSON format",i.style.display="block",l.value=""}},h.onerror=()=>{i.textContent="Failed to read file",i.style.display="block",l.value=""},h.readAsText(w)}),c&&(c.onclick=()=>{localStorage.removeItem(p),t.setContent(Q()),oe(t)})}n("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),n("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),n("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let o=document.getElementById("notifications-toggle");if(o){let d="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!d||d.state==="denied")&&(o.disabled=!0),o.onclick=async g=>{if(g.target.checked)try{await Notification.requestPermission()!=="granted"&&(g.target.checked=!1)}catch{g.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),g.target.checked=!0)}}let a=document.getElementById("microphone-toggle");async function v(){let d="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;a&&(a.disabled=!d||d.state==="denied",a.checked=d?.state==="granted");let g=document.querySelector("#microphone-setting-item .settings-item-description");g&&(g.textContent=d?d.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}v(),a&&!a.disabled&&(a.onclick=async d=>{if(d.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),v()}catch{d.target.checked=!1,v()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),d.target.checked=!0)});let b=document.getElementById("analytics-toggle");b&&(b.checked=localStorage.getItem("easter_analytics_enabled")!=="false",b.onclick=d=>{let g=d.target.checked;localStorage.setItem("easter_analytics_enabled",g),window.EASTER_ANALYTICS_ENABLED=g,window.EASTER_DEBUG_MODE=g})}var Ye=()=>`
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
`,W=new Set,Xe=[],ee=null;async function q(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;dt();let n=localStorage.getItem("service_map");if(!n)return;let o=null;try{o=(JSON.parse(n).services?.cs||[]).find(d=>d.id==="dex-event-service")}catch{return}if(!o)return;let v=`http://${o.domain==="0.0.0.0"?"127.0.0.1":o.domain}:${o.port}/roadmap`;try{let b=await fetch(v);if(!b.ok)throw new Error("Offline");let d=await b.json();if(Xe=d,d.length===0){e.innerHTML=L("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let g=s=>{let r=W.has(s.id),l=s.state==="draft",m=s.state==="published",i=s.state==="consumed",c="event-border-grey";m&&(c="event-border-blue"),i&&(c="event-border-purple");let w=new Date(s.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${c} cursor-pointer ${r?"expanded":""}`,h.dataset.itemId=s.id,h.onclick=y=>{if(y.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",W.delete(s.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",W.add(s.id))};let f=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${s.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${w.split(",")[1]}</span>
          <span class="event-date">${w.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${f}</div>
          <div class="event-message" style="white-space: pre-wrap;">${k(s.content)}</div>
          <div class="event-details" style="${r?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${i?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${m?"bx-pause":"bx-rocket"}'></i> ${m?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${i?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(s.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>pt(s)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>mt(s)),h.querySelector(".delete-btn")?.addEventListener("click",()=>ut(s.id)),h.querySelector(".close-details-btn")?.addEventListener("click",y=>{y.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",W.delete(s.id)}),h},E=Array.from(e.children),x=new Map(E.map(s=>[s.dataset.itemId,s])),u=new Set(d.map(s=>s.id));E.forEach(s=>{let r=s.dataset.itemId;(!r||!u.has(r))&&s.remove()});let p=null;d.forEach((s,r)=>{let l=x.get(s.id);(!l||t)&&(l&&l.remove(),l=g(s),!l)||(r===0?e.firstElementChild!==l&&e.prepend(l):p&&p.nextElementSibling!==l&&p.after(l),p=l)})}catch{e.innerHTML=L("error","Failed to load roadmap.")}}function dt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),n=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),a=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ee=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",ee=null},n.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let v=document.getElementById("roadmap-editor-input").value;if(!v.trim())return;let d=JSON.parse(localStorage.getItem("service_map")).services.cs.find(u=>u.id==="dex-event-service"),g=d.domain==="0.0.0.0"?"127.0.0.1":d.domain,E=ee?`http://${g}:${d.port}/roadmap/${ee}`:`http://${g}:${d.port}/roadmap`,x=ee?"PATCH":"POST";try{await fetch(E,{method:x,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:v})}),document.getElementById("roadmap-editor-container").style.display="none",q(!0)}catch(u){console.error(u)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{Xe.forEach(v=>W.add(v.id)),q(!0)},o.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{W.clear(),q(!0)},a.dataset.listenerAttached="true")}function pt(t){ee=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function mt(t){let e=t.state==="published"?"draft":"published",o=JSON.parse(localStorage.getItem("service_map")).services.cs.find(v=>v.id==="dex-event-service"),a=o.domain==="0.0.0.0"?"127.0.0.1":o.domain;try{await fetch(`http://${a}:${o.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),q(!0)}catch(v){console.error(v)}}async function ut(t){if(!confirm("Delete this roadmap item?"))return;let n=JSON.parse(localStorage.getItem("service_map")).services.cs.find(a=>a.id==="dex-event-service"),o=n.domain==="0.0.0.0"?"127.0.0.1":n.domain;try{await fetch(`http://${o}:${n.port}/roadmap/${t}`,{method:"DELETE"}),W.delete(t),q(!0)}catch(a){console.error(a)}}function Ze(){Oe(),Me();let t=De();Ae(t),Ce();let e=document.querySelector("footer"),n=null;function o(){n=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(u=>u.classList.remove("active","inactive"))}function a(u,p=null){let s=n&&n.id===u.id;n&&n.close(!s),s?n=null:setTimeout(()=>{u.open(),n=u,document.querySelectorAll(".nav-right i").forEach(r=>{let l=r===p;r.classList.toggle("active",l),r.classList.toggle("inactive",!l&&p)}),e?.classList.add("hide")},n?220:0)}async function v(){await Promise.all([Le(),Te(),Y(),be(),F(),ae(),ce()]);let u=setInterval(()=>{if(!x.isOpen())return clearInterval(u);I(4,Se),I(3,K),I(5,fe),I(6,ve),I(2,ge),I(1,ue),I(0,X)},1e3),p=setInterval(()=>{if(!x.isOpen())return clearInterval(p);Y(),be(),F(),ae(),ce()},3e3),s=setInterval(()=>{if(!x.isOpen())return clearInterval(s);Le(),Te()},6e4)}async function b(){await q();let u=setInterval(()=>{if(!g.isOpen())return clearInterval(u);q()},5e3)}let d=ne({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),g=ne({id:"user-window",tabs:[{icon:"bx-user",title:"Profile",content:`<p style="padding: 20px;">Logged in as: ${le()||"Unknown"}<br><br><span style="font-family: monospace; font-size: 0.8em; opacity: 0.6;">UUID: 313071000877137920</span></p>`,"data-tab-index":0},{icon:"bx-map-alt",title:"Roadmap",content:Ye(),"data-tab-index":1}],icon:"bx-user",onClose:o,onOpen:()=>setTimeout(b,100)}),E=ne({id:"settings-window",title:"Settings",content:Q(),icon:"bx-cog",onClose:o,onOpen:()=>{E.setContent(Q()),setTimeout(()=>oe(E),50)}}),x=ne({id:"message-window",tabs:[{icon:"bx-bell",title:"Notifications",content:ze(),"data-tab-index":0},{icon:"bx-paint",title:"Blueprints",content:Re(),"data-tab-index":1},{icon:"bx-cog",title:"Processes",content:Ke(),"data-tab-index":2},{icon:"bx-calendar-event",title:"Events",content:qe(),"data-tab-index":3},{icon:"bx-history",title:"Logs",content:Ue(),"data-tab-index":4},{icon:"bx-brain",title:"Models",content:Ge(),"data-tab-index":5},{icon:"bx-line-chart",title:"Services",content:Je(),"data-tab-index":6}],icon:"bxs-message-dots",onClose:o,onOpen:()=>setTimeout(v,100)});t?(document.getElementById("user-icon")?.addEventListener("click",u=>a(g,u.currentTarget)),document.getElementById("message-icon")?.addEventListener("click",u=>a(x,u.currentTarget)),document.getElementById("settings-icon")?.addEventListener("click",u=>a(E,u.currentTarget))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(d),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",u=>{u.preventDefault();try{Ne(document.getElementById("email-input").value),window.location.reload()}catch(p){let s=document.getElementById("login-error");s&&(s.textContent=p.message,s.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ze):Ze();})();
//# sourceMappingURL=dex.74fa73e5.js.map
