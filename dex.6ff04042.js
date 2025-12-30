(()=>{function ze(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Re(t=!1){let e=window.location.pathname,r=e==="/"||e==="/index.html",a=`
        <div class="nav-left" id="nav-left-wrapper" style="gap: 0;">
            ${`
        <div id="nav-left-container" style="display: flex; align-items: center; transition: transform 0.2s ease; gap: 5px; cursor: ${r?"default":"pointer"};">
            <i class='bx bx-chevron-left' id="nav-chevron" style="font-size: 28px; color: #fff; display: ${r?"none":"block"};"></i>
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon" style="opacity: 1 !important; height: 24px; width: 24px;">
        </div>
    `}
        </div>
        <div class="nav-center" id="nav-window-switcher">
            <!-- Window buttons injected here by main.js -->
        </div>
        ${t?`
        <div class="nav-right">
            <div id="dexter-menu-container" style="position: relative;">
                <i class='bx bx-bot' id="dexter-menu-btn" title="Dexter Menu"></i>
                <div id="dexter-nav-badge" class="notification-badge" style="position: absolute; top: 0; right: -2px; width: 8px; height: 8px; padding: 0; min-width: 0; display: none; box-shadow: 0 0 5px #ff4444;"></div>
                <div id="dexter-dropdown" class="dexter-dropdown">
                    <div class="dropdown-item" id="feed-menu-item"><i class='bx bx-news'></i> Feed</div>
                    <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
                    <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
                </div>
            </div>
            <i class='bx bx-cog' id="settings-icon" title="Settings"></i>
            <i class='bx bx-x-circle' id="close-all-windows" title="Close Window" style="color: #ff4444; margin-left: 10px; opacity: 0.6; display: none;"></i>
        </div>
        `:`
            <div class="nav-right">
                <button id="login-btn" class="login-btn">LOGIN</button>
            </div>
        `}
    `,u=document.createElement("nav");u.innerHTML=a,document.body.prepend(u)}function Pe(t){let e=window.location.pathname,r=e==="/"||e==="/index.html",o=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!o||!s||(t||!r?(o.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{o.style.transform="translateX(-3px)"},s.onmouseleave=()=>{o.style.transform="translateX(0)"}):(o.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function Oe(){if(document.querySelector("footer"))return;let t=`
        <a href="/dexter" class="footer-brand-left">DEXTER M.XIV</a>
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-facebook'></i></a>
            <a href="https://linkedin.com/company/72223947" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin'></i></a>
            <a href="https://instagram.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
            <a href="https://twitter.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter'></i></a>
            <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
            <a href="https://youtube.com/@eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-youtube'></i></a>
        </div>
        <a href="/dexter/contribute" class="footer-brand-right">CONTRIBUTE</a>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Ue=1e3;function W(t){let e=null,r=t.onClose||null,o=t.onOpen||null;function s(){e&&(e.style.zIndex=++Ue)}function a(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",u),o&&setTimeout(o,10);return}let p=document.getElementById("windows-container");p||(p=document.createElement("div"),p.id="windows-container",p.className="windows-container",document.body.appendChild(p)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++Ue,e.addEventListener("mousedown",s);let b=t.icon||"bx-window",n="",g="",L;t.tabs&&t.tabs.length>0?(n=`<div class="tab-bar">${t.tabs.map((v,i)=>{let f=v.icon?`<i class="bx ${v.icon}"></i>`:`<span class="tab-glyph">${v.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${i===0?"active":""}" data-tab-index="${i}">
                        ${f}
                        <span class="tab-title">${v.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${i}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,L=`<div class="window-content">${t.tabs.map((v,i)=>`<div class="tab-content ${i===0?"active":""}" data-tab-content="${i}">${v.content}</div>`).join("")}</div>`):(t.title&&(g=`<div class="window-title">${t.title}</div>`),L=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${n}
                ${g}
                <i class="bx bx-x window-close"></i>
            </div>
            ${L}
        `,p.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",h=>{h.stopPropagation(),c()}),window.addEventListener("resize",u),t.tabs&&e.querySelectorAll(".tab").forEach(h=>{h.addEventListener("click",()=>{let l=h.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(v=>v.classList.remove("active")),h.classList.add("active"),e.querySelectorAll(".tab-content").forEach(v=>v.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${l}"]`).classList.add("active"),d(h,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function u(){if(!e||!e.classList.contains("open"))return;let p=e.querySelector(".tab.active");p&&d(p,e)}function d(p,b){setTimeout(()=>{let n=b.querySelector(".tab-bar");if(!n)return;let g=Array.from(n.querySelectorAll(".tab")),L=g.indexOf(p),h=n.clientWidth,l=g[Math.max(0,L-2)],v=g[Math.min(g.length-1,L+2)],i=l.offsetLeft-n.offsetLeft-25,y=v.offsetLeft+v.offsetWidth-n.offsetLeft+25-i,$=y<=h?i-(h-y)/2:p.offsetLeft-n.offsetLeft-h/2+p.offsetWidth/2;n.scrollTo({left:$,behavior:"smooth"})},350)}function c(p=!1){e&&(window.removeEventListener("resize",u),p?(e.remove(),e=null):(e.classList.remove("open"),r&&r(),setTimeout(()=>{e?.remove(),e=null},400)))}function m(p){let b=e?.querySelector(".window-content");b&&(b.innerHTML=p)}function x(){return e&&e.classList.contains("open")}return{open:a,close:c,setContent:m,isOpen:x,focus:s,id:t.id}}function qe(){return!0}function Fe(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function je(t){localStorage.setItem("easter_user_email",t.trim())}var Ge="easter_theme",j={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function ae(){return localStorage.getItem(Ge)||j.DARK}function We(t){if(!Object.values(j).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ge,t),me(t)}function me(t){let e=document.body;if(Object.values(j).forEach(o=>{e.classList.remove(`theme-${o}`)}),e.classList.add(`theme-${t}`),[j.LIGHT,j.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function Ve(){let t=ae();me(t)}function M(t,e,r=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",a=r?`<p class="placeholder-action">${r}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${a}</div>`}function N(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function U(t,e){let r=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!r)return;if(!e){r.textContent="Last updated: never";return}let o=Date.now(),s=Math.floor((o-e)/1e3),a;s<60?a=`${s}s ago`:s<3600?a=`${Math.floor(s/60)}m ago`:a=`${Math.floor(s/3600)}h ago`,r.textContent=`Last updated: ${a}`}var Je=0;function Ke(){return Je}function oe(t,e){let r=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!r)return;let o=r.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function re(t){Je=t;let e=document.getElementById("dexter-nav-badge");e&&(t>0?e.style.display="flex":e.style.display="none");let r=document.getElementById("alerts-menu-item");if(r){let s=r.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="auto",r.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}let o=document.getElementById("switch-alerts");if(o){let s=o.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="8px",o.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}}function ge(){let t=document.getElementById("alerts-list");if(!t)return;let e=t.querySelectorAll(".alert-unread:not(.priority-low)").length;re(e)}function $e(){return"https://event.easter.company"}function Lt(){return"https://discord.easter.company"}var kt="http://127.0.0.1:8100",It="http://127.0.0.1:8300",At={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function fe(t){let e=N(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,a)=>{let u=At[a];return u?`<span class="${u}">`:""});let r=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return r>o&&(e+="</span>".repeat(r-o)),e}function le(t){if(!t)return"";let e=N(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(r,o)=>{let s=o.split("|").map(a=>a.trim());return s.every(a=>a.match(/^:?-+:?$/))?"":`<div class="md-table-row">${s.map(a=>`<span class="md-table-cell">${a}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var Z=null,ee=null,pe=!1,ue=!1;async function A(t,e={}){if(Z)try{let s=await fetch(Z+t,e);if(s.ok)return s;Z=null}catch{Z=null}let r=$e(),o=kt;try{let s=await fetch(r+t,e);if(s.ok)return Z=r,pe&&(console.log("\u2728 Production event service restored."),pe=!1),s;throw new Error("Primary failed")}catch{pe||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${o}`),pe=!0);try{let a=await fetch(o+t,e);if(a.ok)return Z=o,a;throw new Error("Fallback failed")}catch(a){throw a}}}async function Ye(t,e={}){if(ee)try{let s=await fetch(ee+t,e);if(s.ok)return s;ee=null}catch{ee=null}let r=Lt(),o=It;try{let s=await fetch(r+t,e);if(s.ok)return ee=r,ue&&(console.log("\u2728 Production discord service restored."),ue=!1),s;throw new Error("Primary failed")}catch{ue||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${o}`),ue=!0);try{let a=await fetch(o+t,e);if(a.ok)return ee=o,a;throw new Error("Fallback failed")}catch(a){throw a}}}var Xe=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-bell' style="color: #bb86fc;"></i>
        <h2>Alerts</h2>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="alerts-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
            <button id="alerts-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
            <button id="alerts-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
            <button id="alerts-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
        </div>
    </div>
    <div id="alerts-list" class="alerts-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading alerts...</p>
        </div>
    </div>
`,be=null,V=new Set,ve=[];async function J(t=!1){let e=document.getElementById("alerts-list");if(!e)return;_t(),t&&(e.innerHTML="<p>Updating...</p>");let r="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await A(r);if(!o.ok)throw new Error("Service is offline or unreachable.");let a=(await o.json()).events||[];be=Date.now(),U(0,be);let u=Date.now(),d=24*60*60*1e3,c=a.filter(i=>{let f=localStorage.getItem(`alert_read_ts_${i.id}`);if(!f)return!0;let y=parseInt(f);return u-y<d});c.sort((i,f)=>{let y=E=>{let H=E.event;if(typeof H=="string")try{H=JSON.parse(H)}catch{return"low"}return(H.priority||"low").toLowerCase()},$=E=>E==="critical"?4:E==="high"?3:E==="medium"?2:1,w=$(y(i)),S=$(y(f));return w!==S?S-w:f.timestamp-i.timestamp}),ve=c;let m=i=>{let f=i.event;if(typeof f=="string")try{f=JSON.parse(f)}catch{return"low"}return(f.priority||"low").toLowerCase()},x=[],b=new Set(c.map(i=>m(i))).size>1;if(c.length>0){let i=null;c.forEach(f=>{let y=m(f);b&&y!==i&&(x.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),i=y),x.push(f)})}if(t&&(e.innerHTML=""),c.length===0){e.innerHTML=M("empty","No alerts yet."),ge();return}let n=i=>{let f=i.event;if(typeof f=="string")try{f=JSON.parse(f)}catch{return null}let y=(f.title||"Untitled Alert").trim(),$=(f.body||"No description provided.").trim(),w=(f.priority||"low").toLowerCase(),S=!!f.alert,E=(f.category||"system").trim(),H=f.related_event_ids||[],B=f.audit_event_id,D=!!localStorage.getItem(`alert_read_ts_${i.id}`),O=new Date(i.timestamp*1e3),k=O.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=O.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),C=D?"event-border-grey":"event-border-blue";!D&&S&&(C="event-border-red"),D&&(w==="high"||w==="critical")?C="event-border-red":D&&w==="medium"&&(C="event-border-orange");let _=D?"alert-read":"alert-unread",I=V.has(i.id),z=I?"expanded":"",q=I?"display: block;":"display: none;",Me="",Be="";H.length>0&&(Be=`
            <div style="flex: 1; min-width: 150px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
                    ${H.map(G=>`<a href="#" onclick="window.dexter.viewEvent('${G}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${G.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let De="";B&&(De=`
            <div style="flex: 1; min-width: 120px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Generated By</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
                    <a href="#" onclick="window.dexter.viewEvent('${B}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3);">${B.substring(0,8)}...</a>
                </div>
            </div>`),Me=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="flex: 1; min-width: 100px;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Priority</div>
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; font-weight: bold; color: ${w==="high"||w==="critical"?"#ff4d4d":w==="medium"?"#ffa500":"#888"}">
                            ${w.toUpperCase()}
                        </div>
                    </div>
                    <div style="flex: 1; min-width: 100px;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: capitalize;">${E}</div>
                    </div>
                    ${De}
                    ${Be}
                </div>

                <div class="event-detail-block" style="text-align: left;">
                    <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                    <div class="detail-pre" style="color: #fff;">${le($)}</div>
                </div>
            `;let F=document.createElement("div");F.className=`event-item notification-item ${C} ${_} ${z} cursor-pointer priority-${w}`,F.dataset.alertId=i.id,F.onclick=function(G){if(this.classList.contains("expanded")){this.classList.remove("expanded"),V.delete(i.id);let ie=this.querySelector(".event-details");ie&&(ie.style.display="none")}else{this.classList.add("expanded"),V.add(i.id);let ie=this.querySelector(".event-details");if(ie&&(ie.style.display="block"),!localStorage.getItem(`alert_read_ts_${i.id}`)){localStorage.setItem(`alert_read_ts_${i.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ee="event-border-grey";w==="high"||w==="critical"?Ee="event-border-red":w==="medium"&&(Ee="event-border-orange"),this.classList.add(Ee),ge()}}};let Qt=y,Ct={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[E]||"bx-bell";F.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-icon"><i class='bx ${Ct}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${E}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${E}</span>
                        DEXTER ${S?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}
                    </div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${q}">
                        ${Me}
                    </div>
                </div>
            `;let He=F.querySelector(".event-details");He&&He.addEventListener("click",G=>{G.stopPropagation()});let Ne=F.querySelector(".close-details-btn");return Ne&&Ne.addEventListener("click",G=>{G.stopPropagation(),F.classList.remove("expanded");let we=F.querySelector(".event-details");we&&(we.style.display="none"),V.delete(i.id)}),F},g=i=>{let f=document.createElement("div");f.className="notification-divider",f.dataset.alertId=i.id;let y="#888888";return i.label==="CRITICAL"?y="#ff4d4d":i.label==="HIGH"?y="#ff8888":i.label==="MEDIUM"&&(y="#ffa500"),f.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,f.innerHTML=`<span style="white-space: nowrap;">${i.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,f},L=Array.from(e.children),h=new Map(L.map(i=>[i.dataset.alertId,i])),l=new Set(x.map(i=>i.id));L.forEach(i=>{let f=i.dataset.alertId;(!f||!l.has(f))&&i.remove()});let v=null;x.forEach((i,f)=>{let y=h.get(i.id);(!y||t)&&(y&&y.remove(),i.type==="divider"?y=g(i):y=n(i),!y)||(f===0?e.firstElementChild!==y&&e.prepend(y):v&&v.nextElementSibling!==y&&v.after(y),v=y)}),be=Date.now(),U(0,be),ge()}catch(o){console.error("Error fetching alerts:",o),e.children.length===0&&(e.innerHTML=M("offline","Failed to load alerts.","The event service may be offline."))}}function _t(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),r=document.getElementById("alerts-close-all"),o=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ve.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),J(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ve.forEach(s=>{V.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),J(!0)},e.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{V.clear(),J(!0)},r.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){o.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await A("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;ve.forEach(a=>{localStorage.setItem(`alert_read_ts_${a.id}`,s.toString())}),V.clear(),J(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{o.innerHTML="<i class='bx bx-trash'></i> Clear"}}},o.dataset.listenerAttached="true")}async function Qe(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await A(t);if(!e.ok)return;let o=(await e.json()).events||[],s=0;o.forEach(a=>{let u=a.event;if(typeof u=="string")try{u=JSON.parse(u)}catch{u={}}if((u.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${a.id}`)||s++}),re(s)}catch{}}var Ze=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn"><i class='bx bx-plus'></i> New Idea</button>
    <button id="roadmap-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
    <button id="roadmap-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
  </div>
`,et=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,K=new Set,tt=[],te=null;async function Y(t=!1){let e=document.getElementById("roadmap-list");if(e){Mt();try{let r=await A("/roadmap");if(!r.ok)throw new Error("Offline");let o=await r.json();tt=o;let s=m=>{let x=K.has(m.id),p=m.state==="published",b=m.state==="consumed",n="event-border-grey";p&&(n="event-border-blue"),b&&(n="event-border-purple");let L=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${n} cursor-pointer ${x?"expanded":""}`,h.dataset.itemId=m.id,h.onclick=i=>{if(i.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",K.delete(m.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",K.add(m.id))};let l=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${L.split(",")[1]}</span>
          <span class="event-date">${L.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${l}</div>
          <div class="event-message" style="white-space: pre-wrap;">${N(m.content)}</div>
          <div class="event-details" style="${x?"display: block;":"display: none;"} ">
            <div class="event-details-header" style="margin-bottom: 15px;">
              <h5 style="margin: 0; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Item Controls</h5>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${b?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${p?"bx-pause":"bx-rocket"}'></i> ${p?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${b?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(m.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let v=h.querySelector(".event-details");return v&&v.addEventListener("click",i=>{i.stopPropagation()}),h.querySelector(".edit-btn")?.addEventListener("click",()=>Bt(m)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Dt(m)),h.querySelector(".delete-btn")?.addEventListener("click",()=>Ht(m.id)),h.querySelector(".close-details-btn")?.addEventListener("click",i=>{i.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",K.delete(m.id)}),h},a=Array.from(e.children),u=new Map(a.map(m=>[m.dataset.itemId,m])),d=new Set(o.map(m=>m.id));if(a.forEach(m=>{let x=m.dataset.itemId;(!x||!d.has(x))&&m.remove()}),o.length===0){e.innerHTML=M("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let c=null;o.forEach((m,x)=>{let p=u.get(m.id);(!p||t)&&(p&&p.remove(),p=s(m),!p)||(x===0?e.firstElementChild!==p&&e.prepend(p):c&&c.nextElementSibling!==p&&c.after(p),c=p)})}catch{e.children.length===0&&(e.innerHTML=M("offline","Failed to load roadmap.","The event service may be offline."))}}}function Mt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),r=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{te=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",te=null},r.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let a=document.getElementById("roadmap-editor-input").value;if(!a.trim())return;let u=te?`/roadmap/${te}`:"/roadmap",d=te?"PATCH":"POST";try{await A(u,{method:d,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:a})}),document.getElementById("roadmap-editor-container").style.display="none",Y(!0)}catch(c){console.error(c)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{tt.forEach(a=>K.add(a.id)),Y(!0)},o.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{K.clear(),Y(!0)},s.dataset.listenerAttached="true")}function Bt(t){te=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Dt(t){let e=t.state==="published"?"draft":"published";try{await A(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),Y(!0)}catch(r){console.error(r)}}async function Ht(t){if(confirm("Delete this roadmap item?"))try{await A(`/roadmap/${t}`,{method:"DELETE"}),K.delete(t),Y(!0)}catch(e){console.error(e)}}var nt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,it=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,st=null,se=new Set,at=[];async function ne(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Nt();let r="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await A(r);if(!o.ok)throw new Error("Service is offline or unreachable.");let a=(await o.json()).events||[];if(at=a,st=Date.now(),U(2,st),a.length===0){e.innerHTML=M("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),oe(2,0);return}t&&(e.innerHTML="");let u=p=>{let b=p.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return null}let n=(b.title||"Untitled Blueprint").trim(),g=(b.summary||b.body||"No summary provided.").trim(),L=(b.content||"").trim(),h=(b.category||"architecture").trim(),l=(b.affected_services||[]).map(I=>I.trim()),v=(b.implementation_path||[]).map(I=>I.trim()),i=b.approved===!0,f=new Date(p.timestamp*1e3),y=f.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=f.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),w=se.has(p.id),S=w?"display: block;":"display: none;",E=document.createElement("div");E.className=`event-item notification-item event-border-purple cursor-pointer ${w?"expanded":""} ${i?"blueprint-approved":""}`,E.dataset.blueprintId=p.id,i&&(E.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",E.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let B=i?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[h]||"bx-paint";E.onclick=function(I){if(this.classList.contains("expanded")){this.classList.remove("expanded"),se.delete(p.id);let q=this.querySelector(".event-details");q&&(q.style.display="none")}else{this.classList.add("expanded"),se.add(p.id);let q=this.querySelector(".event-details");q&&(q.style.display="block")}};let P="";v.length>0&&(P=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${v.map(I=>`<li style="margin-bottom: 5px;">${N(I)}</li>`).join("")}</ul></div>
                    </div>
                `);let D=l.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${l.join(", ")}</span></div>`:"<div></div>",O=i?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${D}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${D}
                    <div style="display: flex; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;E.innerHTML=`
                ${i?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${y}</span>
                    <span class="event-date">${$}</span>
                </div>
                <div class="event-icon" style="${i?"color: #03dac6;":""}"><i class='bx ${B}'></i></div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${n}</div>
                    <div class="event-details" style="${S}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px; color: #fff;">${N(g)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${N(L)}</div>
                        </div>
                        ${P}
                        ${O}
                    </div>
                </div>
            `;let k=E.querySelector(".blueprint-approve-btn");k&&(k.onclick=async I=>{I.stopPropagation(),k.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await A(`/events/${p.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&ne(!0)}catch(z){console.error("Failed to approve blueprint:",z)}});let T=E.querySelector(".blueprint-delete-btn");T&&(T.onclick=async I=>{I.stopPropagation();let z=!i;T.innerHTML=z?"<i class='bx bx-loader-alt spin'></i> Declining...":"<i class='bx bx-loader-alt spin'></i> Deleting...";try{(await A(`/events/${p.id}`,{method:"DELETE"})).ok&&ne(!0)}catch(q){console.error("Failed to delete blueprint:",q)}});let C=E.querySelector(".event-details");C&&C.addEventListener("click",I=>{I.stopPropagation()});let _=E.querySelector(".close-details-btn");return _&&_.addEventListener("click",I=>{I.stopPropagation(),E.classList.remove("expanded");let z=E.querySelector(".event-details");z&&(z.style.display="none"),se.delete(p.id)}),E},d=Array.from(e.children),c=new Map(d.map(p=>[p.dataset.blueprintId,p])),m=new Set(a.map(p=>p.id));d.forEach(p=>{let b=p.dataset.blueprintId;(!b||!m.has(b))&&p.remove()});let x=null;a.forEach((p,b)=>{let n=c.get(p.id);(!n||t)&&(n&&n.remove(),n=u(p),!n)||(b===0?e.firstElementChild!==n&&e.prepend(n):x&&x.nextElementSibling!==n&&x.after(n),x=n)}),oe(2,a.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=M("offline","Failed to load blueprints.","The event service may be offline."))}}function Nt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{at.forEach(r=>se.add(r.id)),ne(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{se.clear(),ne(!0)},e.dataset.listenerAttached="true")}var ot=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${Ze()}
            </div>
            ${et()}
        </div>

        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${nt()}
            </div>
            ${it()}
        </div>
    </div>
`;async function Se(){await Promise.all([Y(),ne()])}var rt=()=>`
    <div class="system-section-header">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,zt=null;async function Te(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...",await Te(),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)},e.dataset.listenerAttached="true");try{let r=await Ye("/contacts");if(!r.ok)throw new Error("Service unreachable");let s=(await r.json()).members||[];if(zt=Date.now(),s.length===0){t.innerHTML=M("empty","No contacts found.","Check your Discord connection.");return}let a={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((u,d)=>{let c=a[u.level]??10,m=a[d.level]??10;return c!==m?c-m:u.username.localeCompare(d.username)}),t.innerHTML=s.map(u=>{let d=u.color?"#"+u.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",c=u.status==="online"?"#5eff5e":u.status==="idle"?"#ffa500":u.status==="dnd"?"#ff4d4d":"#666",m="#888";u.level==="Me"||u.level==="Master"?m="#bb86fc":u.level==="Admin"?m="#cf6679":u.level==="Moderator"?m="#03dac6":u.level==="Contributor"&&(m="#ffa500");let x=u.level==="Me",p=x?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",b=x?"2px solid #bb86fc":`1px solid ${d}33`;return`
                <div class="user-profile-section" style="background: ${p}; padding: 15px; border-radius: 8px; border: ${b}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${x?"#bb86fc":d}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${u.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${x?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${c}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${u.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${m}; font-weight: 600; text-transform: uppercase;">${x?"DEXTER (ME)":u.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${u.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=M("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Rt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Guardian Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function lt(t,e){let r=Rt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(r="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(r=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(r=`Guardian Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!r)return t;let o=r.replace(/\{(\w+)\}/g,(s,a)=>e[a]!==void 0&&e[a]!==null?e[a]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var Ce=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn ${R==="all"?"active":""}" data-filter="all">All</button>
            <button class="notif-action-btn filter-btn ${R==="messaging"?"active":""}" data-filter="messaging">Messaging</button>
            <button class="notif-action-btn filter-btn ${R==="system"?"active":""}" data-filter="system">System</button>
            <button class="notif-action-btn filter-btn ${R==="cognitive"?"active":""}" data-filter="cognitive">Cognitive</button>
            <button class="notif-action-btn filter-btn ${R==="moderation"?"active":""}" data-filter="moderation">Moderation</button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
            <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
            <button id="events-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
        </div>
    </div>
    
    <div id="timeline-view-container">
        <div id="events-timeline" class="events-timeline">
            <div class="tab-placeholder">
                <i class='bx bx-calendar-event placeholder-icon'></i>
                <p class="placeholder-message">Loading events...</p>
            </div>
        </div>
    </div>
`,xe=null,X=new Set,ce=[],R="all",Pt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},Ot={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ut(t){for(let[e,r]of Object.entries(Pt))if(r.includes(t))return e;return"system"}function qt(t){return Ot[t]||"bx-square-rounded"}async function Q(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ft();let o=`/events?ml=${R==="all"?100:250}&format=json`;R!=="all"&&(o+=`&category=${R}`);try{let s=await A(o);if(!s.ok)throw new Error("Service unreachable");if(ce=((await s.json()).events||[]).filter(b=>{let n=b.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!0}let g=n.type;return!(g==="system.blueprint.generated"||g==="system.notification.generated")}),xe=Date.now(),U(1,xe),ce.length===0){e.innerHTML=M("empty","No events found for this filter.");return}t&&(e.innerHTML="");let d=b=>{let n=b.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let g=n.type,L=Ut(g),h=qt(g),l=g==="engagement.decision"||g==="messaging.bot.sent_message"||g==="messaging.user.sent_message"||g==="moderation.explicit_content.deleted"||g==="analysis.link.completed"||g==="analysis.visual.completed"||g==="system.cli.command"||g==="system.analysis.audit"||g==="system.test.completed"||g==="error_occurred"||g==="system.cli.status"||g==="system.attention.expired"||g.startsWith("system.roadmap")||g.startsWith("system.process"),v="event-border-grey";l&&(g==="moderation.explicit_content.deleted"||g==="error_occurred"?v="event-border-red":g==="analysis.link.completed"||g==="analysis.visual.completed"||g==="system.analysis.audit"?v="event-border-purple":g==="system.attention.expired"||g==="system.cli.command"||g==="system.cli.status"?v="event-border-orange":g==="system.test.completed"?v=n.test?.status==="OK"&&n.lint?.status==="OK"&&n.format?.status==="OK"?"event-border-blue":"event-border-red":v="event-border-blue");let i=l?"cursor-pointer":"",f=X.has(b.id),y=f?"expanded":"",$=f?"display: block;":"display: none;",w=new Date(b.timestamp*1e3),S=w.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),E=w.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),H=lt(g,n),B=n.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${n.user_level})</span>`:"",P="";if(l){let k="";if(g==="engagement.decision"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${n.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Input Decision")}
                            <pre class="detail-pre">${n.input_decision||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Context History")}
                            <pre class="detail-pre">${n.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Raw Engagement Output")}
                            <pre class="detail-pre">${n.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(g==="system.attention.expired"){let T=I=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${I}</h5>`,C=n.timestamp-n.last_active,_=Math.floor(C/60);k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${n.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${_} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Context (Last Input)")}
                            <div class="detail-pre">${le(n.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${T("Thought Process (Last Output)")}
                            <div class="detail-pre">${le(n.last_output||"None")}</div>
                        </div>
                    `}else if(g==="messaging.bot.sent_message"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${n.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Raw Input (Prompt)")}
                            <pre class="detail-pre">${n.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Raw Response Output")}
                            <pre class="detail-pre">${n.response_raw||"None"}</pre>
                        </div>
                    `}else if(g==="moderation.explicit_content.deleted"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${n.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Raw Model Output")}
                            <pre class="detail-pre">${N(n.raw_output)||"None"}</pre>
                        </div>
                    `}else if(g==="analysis.link.completed"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${N(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Description")}
                            <pre class="detail-pre">${N(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Content Summary")}
                            <pre class="detail-pre">${N(n.summary)||"None"}</pre>
                        </div>
                    `}else if(g==="analysis.visual.completed"){let T=_=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${_}</h5>`,C="";n.base64_preview?C=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(C=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${C}
                        <div class="event-detail-block">
                            ${T("Visual Description")}
                            <pre class="detail-pre">${N(n.description)||"None"}</pre>
                        </div>
                    `}else if(g==="system.cli.command"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;k=`
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
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${n.exit_code!==void 0?n.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Output")}
                            <pre class="detail-pre">${N(n.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(g==="system.analysis.audit"){let T=n.success?"#03dac6":"#ff4d4d",C=n.success?"SUCCESS":"FAILED",_=z=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${z}</h5>`,I="";n.error&&(I=`
                            <div class="event-detail-block">
                                ${_("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${N(n.error)}</pre>
                            </div>
                        `),k=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">
                            <div style="flex: 1; min-width: 120px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${n.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${T}; font-weight: bold;">${C} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${n.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.model}</div>
                            </div>
                        </div>
                        ${I}
                        <div class="event-detail-block">
                            ${_("Input Context")}
                            <pre class="detail-pre" style="max-height: 200px; overflow-y: auto; color: #fff;">${N(n.input_context)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${_("Raw Output")}
                            <pre class="detail-pre" style="max-height: 300px; overflow-y: auto; color: #fff;">${N(n.raw_output||"(empty)")}</pre>
                        </div>
                    `}else if(g==="system.test.completed"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${n.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${n.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Format")}
                            <pre class="detail-pre">${n.format?.status||"N/A"}: ${n.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Lint")}
                            <pre class="detail-pre">${n.lint?.status||"N/A"}: ${n.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Tests")}
                            <pre class="detail-pre">${n.test?.status||"N/A"}: ${n.test?.details||n.test?.message||"OK"}</pre>
                        </div>
                    `}else if(g==="error_occurred"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${n.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${N(n.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Context")}
                            <pre class="detail-pre">${JSON.stringify(n.context||{},null,2)}</pre>
                        </div>
                    `}else if(g==="system.cli.status"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Message")}
                            <pre class="detail-pre">${N(n.message)}</pre>
                        </div>
                    `}else if(g==="messaging.user.sent_message"){let T="";n.attachments&&n.attachments.length>0&&(T=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${n.attachments.map(_=>{let I=_.content_type&&_.content_type.startsWith("image/"),z=(_.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${I?`<div class="attachment-thumb-container"><img src="${_.url}" alt="${_.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${_.url}" target="_blank" class="attachment-link">${_.filename}</a>
                                        <span class="attachment-meta">${_.content_type} \u2022 ${z}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${n.content||"(empty)"}</pre>
                        </div>
                        ${T}
                    `}P=`
                    <div class="event-details" style="${$}">
                        ${k}
                    </div>
                `}let D=document.createElement("div");D.className=`event-item ${v} ${i} ${y}`,D.dataset.eventId=b.id,D.onclick=function(k){if(!l)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),X.delete(b.id);let C=this.querySelector(".event-details");C&&(C.style.display="none")}else{this.classList.add("expanded"),X.add(b.id);let C=this.querySelector(".event-details");C&&(C.style.display="block")}},D.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${S}</span>
                    <span class="event-date">${E}</span>
                </div>
                <div class="event-icon"><i class='bx ${h}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${L}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${L}</span>
                        ${b.service} ${B}
                    </div>
                    <div class="event-message">${H}</div>
                    ${P}
                </div>
            `;let O=D.querySelector(".event-details");if(O&&O.addEventListener("click",k=>{k.stopPropagation()}),l){let k=D.querySelector(".close-details-btn");k&&k.addEventListener("click",T=>{T.stopPropagation();let C=T.target.closest(".event-item");if(C){C.classList.remove("expanded"),X.delete(b.id);let _=C.querySelector(".event-details");_&&(_.style.display="none")}})}return D},c=Array.from(e.children),m=new Map(c.map(b=>[b.dataset.eventId,b])),x=new Set(ce.map(b=>b.id));c.forEach(b=>{let n=b.dataset.eventId;(!n||!x.has(n))&&b.remove()});let p=null;ce.forEach((b,n)=>{let g=m.get(b.id);(!g||t)&&(g&&g.remove(),g=d(b),!g)||(n===0?e.firstElementChild!==g&&e.prepend(g):p&&p.nextElementSibling!==g&&p.after(g),p=g)}),xe=Date.now(),U(1,xe)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=M("offline","Failed to load events.","The event service may be offline."))}}function Ft(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),r=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ce.forEach(s=>X.add(s.id)),Q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.clear(),Q(!0)},e.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{r.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),s.classList.add("active"),R=s.dataset.filter,Q(!0)}}),r.dataset.listenerAttached="true"),r&&r.querySelectorAll(".filter-btn").forEach(s=>{s.dataset.filter===R?s.classList.add("active"):s.classList.remove("active")});let o=document.getElementById("events-clear");o&&!o.dataset.listenerAttached&&(o.onclick=async()=>{let s=R==="all"?"ALL":R.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){o.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let a="/events";if(R!=="all"?a+=`?category=${R}`:a+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await A(a,{method:"DELETE"})).ok)throw new Error("Failed to delete events");X.clear(),Q(!0)}catch(a){console.error("Failed to clear events:",a),alert("Failed to clear events. Check console.")}finally{o.innerHTML="<i class='bx bx-trash'></i> Clear"}}},o.dataset.listenerAttached="true")}function ct(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var jt=null;async function de(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await A("/logs");if(!e.ok)throw new Error("Logs offline");let r=await e.json();if(!r||r.length===0)return t.innerHTML=M("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let o=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=r.filter(u=>!o.includes(u.id));s.forEach(u=>{u.logs&&Array.isArray(u.logs)?u.logs.reverse():u.logs=[]}),s.reverse();let a=s.map(u=>{let d=u.logs.join(`
`),c=[...u.logs];if(c.length<25){let x=25-c.length;for(let p=0;p<x;p++)c.push("")}else c.length>25&&(c=c.slice(-25));let m=c.map(x=>fe(x)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${u.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(d)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${u.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${m}</pre>
                </div>
            `}).join("");return t.innerHTML=a,document.querySelectorAll(".copy-logs-btn").forEach(u=>{u.addEventListener("click",()=>{let d=unescape(u.dataset.logs);navigator.clipboard.writeText(d).then(()=>{let c=u.querySelector("i");c.classList.remove("bx-copy"),c.classList.add("bx-check"),setTimeout(()=>{c.classList.remove("bx-check"),c.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(u=>{u.addEventListener("click",async()=>{let d=u.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${d}?`))try{(await A(`/logs?service_id=${d}`,{method:"DELETE"})).ok&&de()}catch(c){console.error("Error clearing logs:",c)}})}),jt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=M("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var ut=()=>`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span id="system-state-label" style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">System State</span>
                <span id="system-state-val" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Idle</span>
                <span id="guardian-total-idle" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Active</span>
                <span id="guardian-total-active" style="color: #03dac6; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Waste</span>
                <span id="guardian-total-waste" style="color: #cf6679; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
        </div>

        <div class="system-section-header">
            <i class='bx bxs-zap' style="color: #bb86fc;"></i>
            <h2>Guardian</h2>
            <button id="guardian-reset-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Reset</button>
        </div>
        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Sentry Protocol (T1)</span>
                    <span id="guardian-t1-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-t1-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Architect Protocol (T2)</span>
                    <span id="guardian-t2-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-t2-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>`,gt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-zap' style="color: #03dac6;"></i>
            <h2>Active Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>

        <div class="system-section-header">
            <i class='bx bx-list-ul' style="color: #ff9800;"></i>
            <h2>Process Queue</h2>
        </div>
        <div id="processes-queue-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;">
            <div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">
                No processes in queue
            </div>
        </div>
        
        <div class="system-section-header">
            <i class='bx bx-history' style="color: #888;"></i>
            <h2>Process History</h2>
        </div>
        <div id="processes-history-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,ft=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,bt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,vt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2>Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
        </div>
        <div id="hardware-metrics" class="hardware-grid" style="display: flex; flex-direction: column; gap: 25px; margin-bottom: 30px;">
            <div class="hardware-section" id="hw-os">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-laptop'></i> Operating System</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-cpu">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-chip'></i> CPU</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-ram">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-memory-card'></i> RAM</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-gpu">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bxs-card'></i> GPU</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section full-width" id="hw-storage">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bxs-hdd'></i> Storage</h3>
                <div class="hw-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;"></div>
            </div>
        </div>`,xt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${ct()}
        </div>`;async function yt(){await Promise.all([ye(),ke(),Ie()]),await de()}var dt=null,mt=null;async function ht(){try{return await(await A("/system_monitor")).json()}catch{return null}}async function pt(){try{return await(await A("/system/hardware")).json()}catch{return null}}async function Gt(){try{return await(await A("/processes")).json()}catch{return null}}async function Wt(){try{return await(await A("/agent/status")).json()}catch{return null}}async function ke(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),r=document.querySelector("#hw-os .hw-content"),o=document.querySelector("#hw-cpu .hw-content"),s=document.querySelector("#hw-ram .hw-content"),a=document.querySelector("#hw-gpu .hw-content"),u=document.querySelector("#hw-storage .hw-content"),d=l=>{if(l){if(r&&(r.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${l.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${l.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),s){let v=(l.MEMORY_BYTES/1073741824).toFixed(1);s.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${v} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(o&&l.CPU&&l.CPU.length>0){let v=l.CPU[0];o.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${v.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${v.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${v.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}a&&(l.GPU&&l.GPU.length>0?a.innerHTML=l.GPU.map(v=>{let i=(v.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${v.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${i} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):a.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),u&&l.STORAGE&&l.STORAGE.length>0?u.innerHTML=l.STORAGE.map(v=>{let i=(v.USED/1073741824).toFixed(1),f=(v.SIZE/(1024*1024*1024)).toFixed(1),y=v.SIZE>0?(v.USED/v.SIZE*100).toFixed(0):0,$=v.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${v.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${$}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${i} GB Used</span>
                            <span>${f} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${y>90?"#cf6679":"#03dac6"}; width: ${y}%; height: 100%; box-shadow: 0 0 10px ${y>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):u&&(u.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let l=await pt();l?(d(l),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},e.dataset.listenerAttached="true"),o&&!o.hasChildNodes())){let l=await pt();d(l)}if(!t)return;let c=await ht();if(!c||!c.services){t.children.length===0&&(t.innerHTML=M("offline","Failed to load system metrics.","The event service may be offline."));return}dt=Date.now(),U(0,dt);let m=c.services||[];Array.from(t.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function x(l){return!l||l==="N/A"||l==="unknown"||l.trim()===""?"-":l}function p(l){if(!l||l==="N/A"||l==="unknown")return"-";let v=l.match(/^(\d+\.\d+\.\d+)/);return v?v[0]:l.split(".").slice(0,3).join(".")||"-"}function b(l){return!l||l.length<=28?l:l.substring(0,28)+"..."}function n(l){if(!l||l==="N/A"||l==="unknown")return"-";let v=l.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!v)return"-";let i=parseInt(v[1])||0,f=parseInt(v[2])||0,y=parseInt(v[3])||0,$=parseFloat(v[4])||0,w=i*86400+f*3600+y*60+$,S=Math.floor(w/86400);if(S>0)return`${S}d`;let E=Math.floor(w/3600);if(E>0)return`${E}h`;let H=Math.floor(w/60);return H>0?`${H}m`:`${Math.floor(w)}s`}function g(l){let v=l.status==="online",i=v?"service-widget-online":"service-widget-offline",f=v?"bx-check-circle":"bx-x-circle",y=v?"OK":"BAD",$=l.version?p(l.version.str):"-",w=l.cpu&&l.cpu!=="N/A"?l.cpu:"-",S=l.memory&&l.memory!=="N/A"?l.memory:"-",E=w!=="-"?"#00ff00":"#666",H=w!=="-"?"#fff":"#666",B=S!=="-"?"#00ff00":"#666",P=S!=="-"?"#fff":"#666",D=n(l.uptime),O="";return v?O=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${$}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${D}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${E};"></i>
                        <span style="color: ${H};">${w}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${B};"></i>
                        <span style="color: ${P};">${S}</span>
                    </div>
                </div>`:O='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${i}" data-service-id="${l.id}"><div class="service-widget-header"><i class="bx ${f}"></i><h3>${l.short_name||l.id}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${b(l.domain&&l.port?`${l.domain}:${l.port}`:"")}</span></div>${O}</div></div>`}let L=new Map(Array.from(t.querySelectorAll(".service-widget")).map(l=>[l.dataset.serviceId,l])),h=new Set(m.map(l=>l.id));for(let[l,v]of L)h.has(l)||v.remove();m.forEach(l=>{let v=g(l),i=L.get(l.id);i?i.outerHTML!==v&&(i.outerHTML=v):t.insertAdjacentHTML("beforeend",v)})}async function Ie(){let t=document.getElementById("models-widgets");if(!t)return;let e=await ht();if(!e){t.children.length===0&&(t.innerHTML=M("offline","Failed to load model status.","The event service may be offline."));return}mt=Date.now(),U(2,mt);let r=e.models||[],o=e.whisper;Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function s(c){let m=c.status==="Ready";return`
                <div class="service-widget ${m?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${m?"READY":"NOT FOUND"}</span>
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
                </div>`}function a(c){let m=c.status==="Ready";return`
                <div class="service-widget ${m?"service-widget-online":"service-widget-offline"}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx bx-volume-full"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${m?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${c.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">xtts</span>
                        </div>
                    </div>
                </div>`}function u(c){let m=c.status==="Downloaded",x=m?"service-widget-online":"service-widget-offline",p=m?"OK":"MISSING",b=m&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",n=c.name;return c.type==="custom"&&n.endsWith(":latest")&&(n=n.replace(":latest","")),`<div class="service-widget ${x}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${m?"bx-check-circle":"bx-x-circle"}"></i><h3>${n}</h3><span class="service-widget-status">${p}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${b}</span></div></div></div>`}let d="";if(o&&(d+=s(o)),e.xtts&&(d+=a(e.xtts)),d+=r.map(u).join(""),!d){t.innerHTML=M("empty","No models found.");return}t.innerHTML!==d&&(t.innerHTML=d)}async function ye(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("guardian-t1-val"),r=document.getElementById("guardian-t2-val"),o=document.getElementById("guardian-idle-val"),s=document.getElementById("guardian-total-idle"),a=document.getElementById("guardian-total-active"),u=document.getElementById("guardian-total-waste"),d=document.getElementById("guardian-reset-btn");d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{d.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await A("/guardian/reset?protocol=all",{method:"POST"}),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{d.innerHTML="<i class='bx bx-refresh'></i> Reset"},2e3)},500),ye()}catch{d.innerHTML="<i class='bx bx-error'></i> Failed"}},d.dataset.listenerAttached="true");let c=await Wt();if(c){let L=Math.floor(Date.now()/1e3),h=c.active_tier,l=c.protocol_aliases||{t1:"Sentry",t2:"Architect"},v=$=>{$<0&&($=0);let w=Math.floor($/3600),S=Math.floor($%3600/60),E=$%60;return w>0?`${w}h ${S}m`:S>0?`${S}m ${E}s`:`${E}s`},i=($,w,S,E)=>{let H=l[E]||E.toUpperCase(),B=$.parentElement.querySelector('span[style*="text-transform: uppercase"]');if(B&&(B.textContent=H),h===E)$.textContent="Working",$.style.color="#bb86fc";else if(E==="t1"&&h==="tests")$.textContent="Testing",$.style.color="#03dac6";else if(S){let D=S.next_run-L;if(D<=0)$.textContent="Ready",$.style.color="#5eff5e";else{let O=Math.floor(D/60),k=D%60;$.textContent=`${O}m ${k}s`,$.style.color="#fff"}}w&&S&&(w.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${S.attempts||0}</span>
            <span style="color: ${S.failures>0?"#ffa500":"#666"}">Fails: ${S.failures||0}</span>
            <span style="color: ${S.absolute_failures>0?"#ff4d4d":"#666"}">Aborted: ${S.absolute_failures||0}</span>
          </div>
        `)};e&&i(e,document.getElementById("guardian-t1-stats"),c.t1,"t1"),r&&i(r,document.getElementById("guardian-t2-stats"),c.t2,"t2");let f=document.getElementById("system-state-label"),y=document.getElementById("system-state-val");if(y&&c.system_state){let $=c.system_state,w=v(c.system_state_time||0);f&&(f.textContent=`State: ${$.toUpperCase()}`),y.textContent=w,$==="idle"?y.style.color=c.system_state_time>300?"#5eff5e":"#fff":y.style.color="#bb86fc"}s&&(s.textContent=v(c.total_idle_time||0)),a&&(a.textContent=v(c.total_active_time||0)),u&&(u.textContent=v(c.total_waste_time||0))}else[e,r,o,s,a,u].forEach(h=>{h&&(h.textContent="-",h.style.color="#666")});let m=await Gt(),x=[],p=[],b=[];m&&(Array.isArray(m)?x=m:(x=m.active||[],p=m.queue||[],b=m.history||[],b.sort((L,h)=>(h.end_time||0)-(L.end_time||0)))),x.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=M("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),Le(t,x,!1));let n=document.getElementById("processes-queue-widgets");n&&(p.length===0?!n.querySelector(".tab-placeholder")&&!n.querySelector('div[style*="font-style: italic"]')&&(n.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(n.innerHTML="",Le(n,p,!1)));let g=document.getElementById("processes-history-widgets");g&&(b.length===0?g.querySelector(".tab-placeholder")||(g.innerHTML=M("empty","No recent history.")):(g.querySelector(".tab-placeholder")&&(g.innerHTML=""),Le(g,b,!0))),oe(1,x.length)}function Le(t,e,r){function o(d){let c="";d.end_time?c=`${d.end_time-d.start_time}s`:c=`${Math.floor(Date.now()/1e3-d.start_time)}s`;let m=d.retries>0?`<span class="process-retry-badge">Retry ${d.retries}</span>`:"",x=d.channel_id,p={"system-guardian":"Guardian Worker","system-cli-op":"CLI Operation"};if(p[x]?x=p[x]:/^\d+$/.test(x)&&(x=`Channel ${x}`),r)return`
        <div class="process-history-item" data-channel-id="${d.channel_id}-${d.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${x}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${d.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${d.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${c}</span>
            </div>
        </div>`;let b="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${d.channel_id}-${d.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${b}"></i>
                        <h3 style="color: ${b}">${x}</h3>
                        ${m}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${b}">${d.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${b}">${c}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${b}">${d.pid}</span>
                        </div>
                    </div>
                </div>`}let s=r?".process-history-item":".process-widget",a=new Map(Array.from(t.querySelectorAll(s)).map(d=>[d.dataset.channelId,d])),u=new Set(e.map(d=>`${d.channel_id}-${d.start_time}`));for(let[d,c]of a)u.has(d)||c.remove();e.forEach(d=>{let c=`${d.channel_id}-${d.start_time}`,m=o(d),x=a.get(c);if(x){x.outerHTML!==m&&(x.outerHTML=m);let p=t.querySelector(`[data-channel-id="${c}"]`);p&&t.appendChild(p)}else t.insertAdjacentHTML("beforeend",m)})}function he(){let t=ae(),e=Fe()||"master@easter.company",r={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(j).map(s=>`
                    <div class="theme-card ${t===s?"active":""}" data-theme="${s}">
                        <div class="theme-preview theme-preview-${s.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${s.charAt(0).toUpperCase()+s.slice(1)}</h3>
                            <p>${s===j.DARK?"Simple, clean, dark.":s===j.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
                            <span class="theme-badge">${t===s?"Active":"Select"}</span>
                        </div>
                    </div>
                `).join("")}
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Preferences</h2>
                <div class="settings-list">
                    <div class="settings-item">
                        <div class="settings-item-info">
                            <span class="settings-item-label">Notifications</span>
                            <span class="settings-item-description">${r.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${r.enabled?"checked":""} ${r.supported?"":"disabled"}>
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
            </div>`}function Ae(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let a=this.dataset.theme;We(a),t.setContent(he()),Ae(t)})});let r=document.getElementById("notifications-toggle");r&&(r.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=s=>{let a=s.target.checked;localStorage.setItem("easter_analytics_enabled",a),window.EASTER_ANALYTICS_ENABLED=a,window.EASTER_DEBUG_MODE=a})}var Vt="2.8.143",$t=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1 & Tier 2).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1|2] [--force]
0 = Full Analysis (Default)
1 = Tier 1 Only (Reports)
2 = Tier 2 Only (Blueprints)`},demo_output:["\u2588 \x1B[1mGUARDIAN TECHNICAL SENTRY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m[INFO] Verifying system state...\x1B[0m"," \x1B[32m\u2713\x1B[0m No ongoing processes detected."," \x1B[32m\u2713\x1B[0m System idle time requirement met (312s).","","\x1B[1mInitializing Full Analysis (T1 + T2)...\x1B[0m","\x1B[94m\u2192 Executing Tier 1: Technical Sentry...\x1B[0m"," \x1B[90m\u2699\uFE0F  Auditing 50 system events...\x1B[0m"," \x1B[90m\u2699\uFE0F  Analyzing recent service logs...\x1B[0m"," \x1B[90m\u2699\uFE0F  Executing pre-analysis test suite...\x1B[0m","","# [SYSTEM] Service Connectivity Alert","**Priority**: high","**Body**: dex-tts-service reported 3 consecutive timeouts.","","\x1B[95m\u2192 Executing Tier 2: Architect Analysis...\x1B[0m"," \x1B[90m\u2699\uFE0F  Synthesizing Tier 1 reports...\x1B[0m","","# [BLUEPRINT] Automated Service Recovery","**Category**: architecture","**Summary**: Implement exponential backoff for TTS connection retries.","","\x1B[32m\u2713 Guardian run completed successfully.\x1B[0m","\x1B[90m  Duration: 14.2s | Waste: 0s | Reliability: 100%\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
dex stop
dex restart`},demo_output:["\u2192 Restarting dex-event-service...","\x1B[32m\u2713\x1B[0m Service stopped (PID 19420)","\x1B[32m\u2713\x1B[0m Service started (PID 20155)","\u2192 Verifying health check (http://127.0.0.1:8100/status)...","\x1B[32m\u2713\x1B[0m Response received in 12ms.","","\x1B[1mService uptime: 4 seconds\x1B[0m"]},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the status of CLI and services.",usage:"dex status [service]",category:"system",docs:{overview:"The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.",details:["Reports status (online/offline/degraded).","Displays version strings and build hashes.","Shows network addresses and ports.","Validates internal service-to-service communication."],extended_usage:"dex status [service_id|all]"},demo_output:["\u2588 \x1B[1mSERVICE STATUS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE  ADDRESS          VERSION  BRANCH   COMMIT   STATUS   UPTIME           CPU      MEM","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500          \u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500      \u2500\u2500\u2500","cli      local            2.8.143  main     240fc38  \x1B[32mOK\x1B[0m       \x1B[90m--\x1B[0m               \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m","event    127.0.0.1:8100   2.8.198  main     a8f2b1c  \x1B[32mOK\x1B[0m       14h22m           0.2%     12.4 MB","discord  127.0.0.1:8300   2.8.68   main     6e2d1a4  \x1B[32mOK\x1B[0m       14h22m           0.1%     24.8 MB","tts      127.0.0.1:8200   0.0.25   main     f2e1d0c  \x1B[32mOK\x1B[0m       14h22m           0.0%     1.2 GB","web      127.0.0.1:8400   0.0.5    main     b1c2d3e  \x1B[32mOK\x1B[0m       14h22m           0.0%     42.1 MB","ollama   127.0.0.1:11434  0.5.4    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       4d12h            0.5%     8.4 GB","cache    127.0.0.1:6379   7.4.1    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       32d              0.1%     4.2 MB"]},{id:"logs",title:"Logs",icon:"bx-terminal",description:"View or tail service logs.",usage:"dex logs <service> [-f]",category:"system",docs:{overview:"Logs provides real-time observability into the background processes of the Dexter services.",details:["Tail live output from systemd services.","Support for following (-f) and history limiting.","ANSI color support for terminal readability.","Aggregated view for multi-instance deployments."],extended_usage:"dex logs <service_id> [-f]"},demo_output:["\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:05\x1B[0m [INFO] Joined voice channel: 1437617331...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:08\x1B[0m [DEBUG] VAD triggered by user oweneaster","\x1B[35m[EVENT]\x1B[0m   \x1B[90m14:30:09\x1B[0m [INFO] Emitted: messaging.user.speaking.started","\x1B[32m[TTS]\x1B[0m     \x1B[90m14:30:12\x1B[0m [INFO] Generating audio for 12 words...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:15\x1B[0m [SUCCESS] Audio playback completed.","\x1B[90m[Watching for new logs...]\x1B[0m"]},{id:"event",title:"Event",icon:"bx-broadcast",description:"Interact with the Event Service.",usage:"dex event [log|service|analyst|delete]",category:"system",docs:{overview:"The event bus interface for manual debugging and data extraction.",details:["Query the history of the system event log.","Manually reset analyst tier timers.","Filter events by type, service, or count.","Delete historical events matching patterns."],extended_usage:`dex event log [-n count] [-t type]
dex event analyst [status|reset]
dex event delete <pattern>`},demo_output:["\u2588 \x1B[1mLAST 20 EVENTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m14:42:01\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[38;5;208mCMD: dex guardian [] (success)\x1B[0m","\x1B[90m14:42:02\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[35m[INFO] Analysis complete: No significant insights found.\x1B[0m","\x1B[90m14:45:10\x1B[0m \x1B[90mdiscord        \x1B[0m | \x1B[34moweneaster: Dexter, run a system scan.\x1B[0m","\x1B[90m14:45:12\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[32mPROC+: system-cli-op (started)\x1B[0m","\x1B[90m14:45:15\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[31m[ERROR] Connection timeout to Redis.\x1B[0m"]},{id:"discord",title:"Discord",icon:"bx-bot",description:"Interact with the Discord Service.",usage:"dex discord [contacts|channels|service|quiet]",category:"system",docs:{overview:"Direct control over the Discord bot integration and audio engine.",details:["List all guild members and their permission levels.","Inspect channel structures and user presence.",'Toggle "Quiet Mode" for public interactions.',"Check raw service state and gateway health."],extended_usage:`dex discord contacts
dex discord quiet [on|off]`},demo_output:["\u2588 \x1B[1mDISCORD CONTACTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Fetching guild members...","","\u2588 Server: Easter Company (12 members) \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","LEVEL           USERNAME        STATUS   DISCORD ID","\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[35mDEXTER (ME)\x1B[0m     Dexter          \x1B[32monline\x1B[0m   \x1B[90m1313...0432\x1B[0m","\x1B[35mMASTER\x1B[0m          oweneaster      \x1B[32monline\x1B[0m   \x1B[90m3130...7920\x1B[0m","\x1B[31mADMIN\x1B[0m           Developer       \x1B[33midle\x1B[0m     \x1B[90m4242...8181\x1B[0m","\x1B[37mUSER\x1B[0m            GuestUser       \x1B[90moffline\x1B[0m  \x1B[90m9999...9999\x1B[0m"]},{id:"ollama",title:"Ollama",icon:"bx-brain",description:"Run the system 'ollama' executable or sync models.",usage:"dex ollama [pull|sync|list]",category:"system",docs:{overview:"Proxy command for managing local LLMs and neural vision models.",details:["Wraps the system ollama binary.","Added 'pull' subcommand to sync all Dexter-required models.","Synchronizes custom model templates automatically.","Validates model weight checksums."],extended_usage:`dex ollama pull
dex ollama run gemma3:12b`},demo_output:["\x1B[34m[OLLAMA]\x1B[0m Synchronizing custom Dexter models...","Pulling base models...","Pulling gemma3:12b... \x1B[32m[100%]\x1B[0m","\x1B[32m\u2713 Successfully pulled model: gemma3:12b\x1B[0m","Creating custom Dexter models...","  Rebuilding dex-analyst-guardian from gpt-oss:20b...","\x1B[32m\u2713   Created dex-analyst-guardian\x1B[0m","\x1B[32m\u2713 Ollama models are up-to-date.\x1B[0m"]},{id:"system",title:"System Info",icon:"bx-info-square",description:"Show system info and manage packages.",usage:"dex system [info|scan|validate|install]",category:"system",docs:{overview:"Performance observability tool focused on AI resource availability.",details:["Scans and reports CPU, GPU, RAM, and Storage vitals.","Validates presence of required system packages.","Handles automatic installation of missing dependencies.","Exports telemetry data in JSON format."],extended_usage:`dex system scan
dex system validate
dex system install <package>`},demo_output:["\u2588 \x1B[1mSYSTEM CONFIGURATION\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Category        Value","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500","CPU (Generic)   Cores: 16, Threads: 32","                Avg Clock: 4.20 GHz","GPU 0           NVIDIA GeForce RTX 4090, VRAM: 24.0 GB, CUDA: 1204","Memory          64.0 GB","Storage         2.0 TB (1 devices)","                /dev/nvme0n1p3: 450.2 GB / 1862.4 GB (/)","Packages        ","                \x1B[32m\u2713 12 checks passed\x1B[0m"]},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Show service config or a specific field.",usage:"dex config <service> [field...]",category:"system",docs:{overview:"Manages the central registry that defines service interaction.",details:["View service definitions (domains, ports, IDs).","Modify environment-specific parameters.","Update authentication secrets and API endpoints.","Supports JSON path traversal for deep fields."],extended_usage:`dex config <service> [field]
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Jt=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>

            <div class="cli-install-section">
                <div class="cli-install-header">
                    <i class='bx bxs-download'></i>
                    <h2>One-Step Installation</h2>
                </div>
                <div class="cli-install-command" id="install-command-copy">
                    <code>curl -sSL https://easter.company/scripts/install_dex-cli.sh | bash</code>
                    <i class='bx bx-copy'></i>
                </div>
                <p class="cli-install-note">Installs the latest pre-built binary for Arch/Debian Linux.</p>
            </div>

            <div class="cli-divider">
                <i class='bx bx-chevron-down'></i>
                <span>Interactive Demos (v${Vt})</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;for(let[r,o]of Object.entries(t)){let s=$t.filter(a=>a.category===r);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${o.icon}' style="color: ${o.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${o.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(a=>`
                        <div class="cli-command-card ${a.dummy?"dummy":""}" data-cmd="${a.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${o.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${a.icon}' style="font-size: 2em; color: ${o.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${a.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${a.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${o.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${a.usage}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)}return e+=`
        <div class="cli-divider">
            <i class='bx bx-chevron-down'></i>
            <span>Join the Evolution</span>
            <i class='bx bx-chevron-down'></i>
        </div>

        <div class="cli-contribute-section">
            <div class="cli-contribute-card">
                <i class='bx bxl-github'></i>
                <h3>For Developers</h3>
                <p>Dexter is open-source and built for the community. Help us refine the neural architecture or add new command modules.</p>
                <a href="/dexter/contribute" target="_blank" class="notif-action-btn active">Contribute on GitHub</a>
            </div>
            <div class="cli-contribute-card">
                <i class='bx bxl-discord-alt'></i>
                <h3>For Users</h3>
                <p>Join our Discord to stay updated, suggest new features, and interact with the community using the Dexter engine.</p>
                <a href="https://discord.gg/eastercompany" target="_blank" class="notif-action-btn active">Join Discord</a>
            </div>
        </div>
    </div>`,e},_e=!1;function Kt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
            <div class="cli-terminal-window">
                <div class="cli-terminal-header">
                    <div class="terminal-title">
                        <i class='bx bx-terminal'></i>
                        <span id="terminal-cmd-name">dex command</span>
                        <span id="terminal-status-badge" class="terminal-status status-running">Running</span>
                    </div>
                    <i class='bx bx-x' id="close-terminal-btn" style="cursor: pointer; font-size: 1.5em; color: #666; transition: color 0.2s;"></i>
                </div>
                <div class="cli-terminal-split">
                    <div class="cli-terminal-pane">
                        <div id="cli-terminal-body" class="cli-terminal-body"></div>
                    </div>
                    <div class="cli-terminal-pane">
                        <div id="cli-docs-pane" class="cli-docs-pane"></div>
                    </div>
                </div>
                <div class="cli-terminal-footer">
                    <button id="terminal-action-btn" class="notif-action-btn" style="display: none;">Done</button>
                </div>
            </div>
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>wt(),document.getElementById("terminal-action-btn").onclick=()=>wt());let r=document.getElementById("cli-terminal-body"),o=document.getElementById("cli-docs-pane");r.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return o.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${s.overview}</p>
        </div>
        ${s.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${s.details.map(a=>`<li>${a}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${s.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),_e=!0,r}function wt(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),_e=!1}function Et(t,e,r="output"){if(!_e)return;let o=document.createElement("div");o.className=`terminal-line terminal-${r}`,r==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=fe(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function Yt(t){let e=$t.find(s=>s.id===t);if(!e)return;let r=Kt(e);Et(r,`dex ${t}`,"prompt");let o=e.demo_output||["Executing command...","\u2713 Done."];for(let s of o){await new Promise(u=>setTimeout(u,400+Math.random()*600));let a="output";s.includes("[ERROR]")?a="error":s.includes("[SUCCESS]")||s.includes("\u2713")?a="success":s.includes("!")&&(a="warning"),Et(r,s,a)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function St(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Jt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let r=e.querySelector("code").textContent;navigator.clipboard.writeText(r).then(()=>{let o=e.querySelector("i");o.className="bx bx-check",o.style.color="#5eff5e",setTimeout(()=>{o.className="bx bx-copy",o.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(r=>{r.addEventListener("mouseenter",()=>{r.style.transform="translateY(-5px)",r.style.borderColor="rgba(255,255,255,0.15)",r.style.backgroundColor="rgba(255,255,255,0.05)"}),r.addEventListener("mouseleave",()=>{r.style.transform="translateY(0)",r.style.borderColor="rgba(255,255,255,0.05)",r.style.backgroundColor="rgba(255,255,255,0.03)"}),r.addEventListener("click",()=>{let o=r.dataset.cmd;Yt(o)})})}async function Xt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${$e()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable.")}}function Tt(){Xt(),Ve(),ze();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&St();let e=qe();Re(e),Oe();let r=document.getElementById("nav-left-container");r&&r.addEventListener("click",()=>{if(a.length>0)p();else{let i=window.location.pathname;if(!(i==="/"||i==="/index.html")){let $=(i.endsWith("/")&&i.length>1?i.slice(0,-1):i).split("/");$.pop();let w=$.join("/")||"/";window.location.href=w}}});let o=window.location.pathname==="/"||window.location.pathname==="/index.html",s=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!o&&!s&&document.querySelector("footer")?.classList.add("hide");let a=[],u=document.getElementById("windows-container");u&&u.setAttribute("data-count","0");let d=i=>{localStorage.setItem("dex_last_window",i)};function c(){return 1}function m(){for(;a.length>1;)a.shift().close(!0);let i=document.getElementById("windows-container"),f=document.querySelector("nav"),y=document.querySelector("footer"),$=window.location.pathname==="/"||window.location.pathname==="/index.html",w=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");i&&i.setAttribute("data-count",a.length),a.forEach(B=>{let P=document.getElementById(B.id);P&&P.classList.remove("hide-close")}),me(ae());let S=document.getElementById("dexter-menu-container"),E=document.getElementById("nav-window-switcher"),H=document.getElementById("settings-icon");if(Pe(a.length>0),a.length>0){if(y?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),f?.classList.add("window-open"),i&&(i.style.paddingTop="60px"),S&&(S.style.display="none"),H&&(H.style.display="none"),E){let B=a[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(B)?(E.innerHTML=`
                      <div class="nav-switch-btn ${B==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${B==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${B==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${B==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${B==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{d("alerts-window"),x(b)}),document.getElementById("switch-events").addEventListener("click",()=>{d("events-window"),x(n)}),document.getElementById("switch-monitor").addEventListener("click",()=>{d("monitor-window"),x(L)}),document.getElementById("switch-contacts").addEventListener("click",()=>{d("contacts-window"),x(g)}),document.getElementById("switch-workspace").addEventListener("click",()=>{d("workspace-window"),x(h)})):E.innerHTML=""}}else f?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),i&&(i.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),$||w?y?.classList.remove("hide"):y?.classList.add("hide"),S&&(S.style.display="flex"),H&&(H.style.display="block"),E&&(E.innerHTML="");re(Ke())}function x(i){if(i.isOpen()){i.close();return}for(;a.length>0;)a.pop().close(!0);a.push(i),i.open(),m()}function p(){[...a].forEach(f=>f.close()),a=[]}window.addEventListener("resize",m);let b=W({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Xe(),onOpen:()=>J(),onClose:()=>{let i=a.indexOf(b);i>-1&&a.splice(i,1),m()}}),n=W({id:"events-window",title:"Events",icon:"bx-calendar-event",content:Ce(),onOpen:()=>{n.setContent(Ce()),Q()},onClose:()=>{let i=a.indexOf(n);i>-1&&a.splice(i,1),m()}}),g=W({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:rt(),onOpen:()=>Te(),onClose:()=>{let i=a.indexOf(g);i>-1&&a.splice(i,1),m()}}),L=W({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:ft()},{icon:"bxs-component",title:"Processes",content:gt()},{icon:"bxs-brain",title:"Models",content:bt()},{icon:"bxs-hdd",title:"Hardware",content:vt()},{icon:"bxs-terminal",title:"Logs",content:xt()},{icon:"bxs-zap",title:"Agents",content:ut()}],onOpen:()=>{ke(),ye(),Ie(),de()},onClose:()=>{let i=a.indexOf(L);i>-1&&a.splice(i,1),m()}}),h=W({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:ot(),onOpen:()=>Se(),onClose:()=>{let i=a.indexOf(h);i>-1&&a.splice(i,1),m()}}),l=W({id:"settings-window",title:"Settings",icon:"bx-cog",content:he(),onOpen:()=>{l.setContent(he()),Ae(l)},onClose:()=>{let i=a.indexOf(l);i>-1&&a.splice(i,1),m()}}),v=W({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:i=>{n.isOpen()||x(n),setTimeout(()=>{let f=document.querySelector(`.event-item[data-event-id="${i}"]`);f&&(f.scrollIntoView({behavior:"smooth",block:"center"}),f.classList.add("flash-highlight"),f.classList.contains("expanded")||f.click(),setTimeout(()=>f.classList.remove("flash-highlight"),2e3))},500)},viewAlert:i=>{b.isOpen()||x(b),setTimeout(()=>{let f=document.querySelector(`.event-item[data-alert-id="${i}"]`);f&&(f.scrollIntoView({behavior:"smooth",block:"center"}),f.classList.add("flash-highlight"),f.classList.contains("expanded")||f.click(),setTimeout(()=>f.classList.remove("flash-highlight"),2e3))},500)}},e){let i=document.getElementById("dexter-dropdown");i&&(i.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let f=document.getElementById("dexter-menu-container"),y=document.getElementById("dexter-menu-btn");f&&i&&y&&(f.addEventListener("mouseenter",()=>{i.classList.add("active"),y.classList.add("active")}),f.addEventListener("mouseleave",()=>{i.classList.remove("active"),y.classList.remove("active")}),y.addEventListener("click",$=>{$.stopPropagation();let w=localStorage.getItem("dex_last_window")||"alerts-window",S=null;w==="alerts-window"?S=b:w==="events-window"?S=n:w==="monitor-window"?S=L:w==="contacts-window"?S=g:w==="workspace-window"&&(S=h),S&&x(S)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{d("alerts-window"),x(b)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{d("events-window"),x(n)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{d("monitor-window"),x(L)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{d("contacts-window"),x(g)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{d("workspace-window"),x(h)}),document.getElementById("settings-icon")?.addEventListener("click",()=>x(l)),document.getElementById("close-all-windows")?.addEventListener("click",()=>p()),setInterval(()=>{b.isOpen()?J():Qe(),n.isOpen()&&Q(),L.isOpen()&&yt(),h.isOpen()&&Se()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{v.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",i=>{i.preventDefault();try{je(document.getElementById("email-input").value),window.location.reload()}catch(f){let y=document.getElementById("login-error");y&&(y.textContent=f.message,y.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt):Tt();})();
