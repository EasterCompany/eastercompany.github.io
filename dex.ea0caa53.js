(()=>{function Ue(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function je(t=!1){let e=window.location.pathname,r=e==="/"||e==="/index.html",i=`
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
    `,l=document.createElement("nav");l.innerHTML=i,document.body.prepend(l)}function Fe(t){let e=window.location.pathname,r=e==="/"||e==="/index.html",a=document.getElementById("nav-chevron"),n=document.querySelector(".nav-left");!a||!n||(t||!r?(a.style.display="block",n.style.cursor="pointer",n.classList.add("recording"),n.onmouseenter=()=>{a.style.transform="translateX(-3px)"},n.onmouseleave=()=>{a.style.transform="translateX(0)"}):(a.style.display="none",n.style.cursor="default",n.classList.remove("recording"),n.onmouseenter=null,n.onmouseleave=null))}function Ge(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var We=1e3;function X(t){let e=null,r=t.onClose||null,a=t.onOpen||null;function n(){e&&(e.style.zIndex=++We)}function i(){if(e){e.classList.add("open"),n(),window.addEventListener("resize",l),a&&setTimeout(a,10);return}let f=document.getElementById("windows-container");f||(f=document.createElement("div"),f.id="windows-container",f.className="windows-container",document.body.appendChild(f)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++We,e.addEventListener("mousedown",n);let b=t.icon||"bx-window",s="",u="",A;t.tabs&&t.tabs.length>0?(s=`<div class="tab-bar">${t.tabs.map((v,o)=>{let m=v.icon?`<i class="bx ${v.icon}"></i>`:`<span class="tab-glyph">${v.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${o===0?"active":""}" data-tab-index="${o}">
                        ${m}
                        <span class="tab-title">${v.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${o}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,A=`<div class="window-content">${t.tabs.map((v,o)=>`<div class="tab-content ${o===0?"active":""}" data-tab-content="${o}">${v.content}</div>`).join("")}</div>`):(t.title&&(u=`<div class="window-title">${t.title}</div>`),A=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${s}
                ${u}
                <i class="bx bx-x window-close"></i>
            </div>
            ${A}
        `,f.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",h=>{h.stopPropagation(),d()}),window.addEventListener("resize",l),t.tabs&&e.querySelectorAll(".tab").forEach(h=>{h.addEventListener("click",()=>{let c=h.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(v=>v.classList.remove("active")),h.classList.add("active"),e.querySelectorAll(".tab-content").forEach(v=>v.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${c}"]`).classList.add("active"),p(h,e)})}),setTimeout(()=>{e.classList.add("open"),a&&a()},10)}function l(){if(!e||!e.classList.contains("open"))return;let f=e.querySelector(".tab.active");f&&p(f,e)}function p(f,b){setTimeout(()=>{let s=b.querySelector(".tab-bar");if(!s)return;let u=Array.from(s.querySelectorAll(".tab")),A=u.indexOf(f),h=s.clientWidth,c=u[Math.max(0,A-2)],v=u[Math.min(u.length-1,A+2)],o=c.offsetLeft-s.offsetLeft-25,y=v.offsetLeft+v.offsetWidth-s.offsetLeft+25-o,k=y<=h?o-(h-y)/2:f.offsetLeft-s.offsetLeft-h/2+f.offsetWidth/2;s.scrollTo({left:k,behavior:"smooth"})},350)}function d(f=!1){e&&(window.removeEventListener("resize",l),f?(e.remove(),e=null):(e.classList.remove("open"),r&&r(),setTimeout(()=>{e?.remove(),e=null},400)))}function g(f){let b=e?.querySelector(".window-content");b&&(b.innerHTML=f)}function x(){return e&&e.classList.contains("open")}return{open:i,close:d,setContent:g,isOpen:x,focus:n,id:t.id}}function Je(){return!0}function Ve(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Ke(t){localStorage.setItem("easter_user_email",t.trim())}var Ye="easter_theme",W={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function ge(){return localStorage.getItem(Ye)||W.DARK}function Xe(t){if(!Object.values(W).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ye,t),he(t)}function he(t){let e=document.body;if(Object.values(W).forEach(a=>{e.classList.remove(`theme-${a}`)}),e.classList.add(`theme-${t}`),[W.LIGHT,W.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function Qe(){let t=ge();he(t)}function D(t,e,r=null){let n={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",i=r?`<p class="placeholder-action">${r}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${n} placeholder-icon'></i><p class="placeholder-message">${e}</p>${i}</div>`}function H(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function F(t,e){let r=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!r)return;if(!e){r.textContent="Last updated: never";return}let a=Date.now(),n=Math.floor((a-e)/1e3),i;n<60?i=`${n}s ago`:n<3600?i=`${Math.floor(n/60)}m ago`:i=`${Math.floor(n/3600)}h ago`,r.textContent=`Last updated: ${i}`}var Bt=0;function fe(t,e){let r=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!r)return;let a=r.querySelector(".notification-badge");a&&(e>0?(a.textContent=e>9?"9+":e,a.style.display="flex"):a.style.display="none")}var J=0,V=0;function Ze(t){J=t,re()}function et(t){V=t,re()}function re(){let t=J+V;Bt=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let r=document.getElementById("alerts-menu-item");if(r){let l=r.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="auto",r.appendChild(l)),l.textContent=J>9?"9+":J,l.style.display=J>0?"flex":"none"}let a=document.getElementById("workspace-menu-item");if(a){let l=a.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="auto",a.appendChild(l)),l.textContent=V>9?"9+":V,l.style.display=V>0?"flex":"none"}let n=document.getElementById("switch-alerts");if(n){let l=n.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="8px",n.appendChild(l)),l.textContent=J>9?"9+":J,l.style.display=J>0?"flex":"none"}let i=document.getElementById("switch-workspace");if(i){let l=i.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="8px",i.appendChild(l)),l.textContent=V>9?"9+":V,l.style.display=V>0?"flex":"none"}}function $e(){let t=document.getElementById("alerts-list");if(!t)return;J=t.querySelectorAll(".alert-unread:not(.priority-low)").length,re()}function tt(){let t=document.getElementById("blueprints-list");if(!t)return;V=t.querySelectorAll(".event-item:not(.blueprint-approved)").length,re()}function Be(){return"https://event.easter.company"}function Dt(){return"https://discord.easter.company"}var Ht="http://127.0.0.1:8100",Nt="http://127.0.0.1:8300",zt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function Se(t){let e=H(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(n,i)=>{let l=zt[i];return l?`<span class="${l}">`:""});let r=(e.match(/<span/g)||[]).length,a=(e.match(/<\/span/g)||[]).length;return r>a&&(e+="</span>".repeat(r-a)),e}function be(t){if(!t)return"";let e=H(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(r,a)=>{let n=a.split("|").map(i=>i.trim());return n.every(i=>i.match(/^:?-+:?$/))?"":`<div class="md-table-row">${n.map(i=>`<span class="md-table-cell">${i}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var ae=null,oe=null,we=!1,Ee=!1;async function B(t,e={}){if(ae)try{let n=await fetch(ae+t,e);if(n.ok)return n;ae=null}catch{ae=null}let r=Be(),a=Ht;try{let n=await fetch(r+t,e);if(n.ok)return ae=r,we&&(console.log("\u2728 Production event service restored."),we=!1),n;throw new Error("Primary failed")}catch{we||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${a}`),we=!0);try{let i=await fetch(a+t,e);if(i.ok)return ae=a,i;throw new Error("Fallback failed")}catch(i){throw i}}}async function st(t,e={}){if(oe)try{let n=await fetch(oe+t,e);if(n.ok)return n;oe=null}catch{oe=null}let r=Dt(),a=Nt;try{let n=await fetch(r+t,e);if(n.ok)return oe=r,Ee&&(console.log("\u2728 Production discord service restored."),Ee=!1),n;throw new Error("Primary failed")}catch{Ee||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${a}`),Ee=!0);try{let i=await fetch(a+t,e);if(i.ok)return oe=a,i;throw new Error("Fallback failed")}catch(i){throw i}}}var nt=()=>`
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
`,ke=null,Q=new Set,Ce=[];async function Z(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Pt(),t&&(e.innerHTML="<p>Updating...</p>");let r="/events?ml=1000&format=json&event.type=system.notification.generated";try{let a=await B(r);if(!a.ok)throw new Error("Service is offline or unreachable.");let i=(await a.json()).events||[];ke=Date.now(),F(0,ke);let l=Date.now(),p=24*60*60*1e3,d=i.filter(o=>{let m=localStorage.getItem(`alert_read_ts_${o.id}`);if(!m)return!0;let y=parseInt(m);return l-y<p});d.sort((o,m)=>{let y=L=>{let T=L.event;if(typeof T=="string")try{T=JSON.parse(T)}catch{return"low"}return(T.priority||"low").toLowerCase()},k=L=>L==="critical"?4:L==="high"?3:L==="medium"?2:1,E=k(y(o)),S=k(y(m));return E!==S?S-E:m.timestamp-o.timestamp}),Ce=d;let g=o=>{let m=o.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return"low"}return(m.priority||"low").toLowerCase()},x=[],b=new Set(d.map(o=>g(o))).size>1;if(d.length>0){let o=null;d.forEach(m=>{let y=g(m);b&&y!==o&&(x.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),o=y),x.push(m)})}if(t&&(e.innerHTML=""),d.length===0){e.innerHTML=D("empty","No alerts yet."),$e();return}let s=o=>{let m=o.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let y=(m.title||"Untitled Alert").trim(),k=(m.body||"No description provided.").trim(),E=(m.priority||"low").toLowerCase(),S=!!m.alert,L=(m.category||"system").trim(),T=m.related_event_ids||[],N=m.audit_event_id,M=!!localStorage.getItem(`alert_read_ts_${o.id}`),R=new Date(o.timestamp*1e3),j=R.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),K=R.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),C=M?"event-border-grey":"event-border-blue";!M&&S&&(C="event-border-red"),M&&(E==="high"||E==="critical")?C="event-border-red":M&&E==="medium"&&(C="event-border-orange");let w=M?"alert-read":"alert-unread",$=Q.has(o.id),_=$?"expanded":"",I=$?"display: block;":"display: none;",z="",O="";T.length>0&&(O=`
            <div style="flex: 1; min-width: 150px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
                    ${T.map(Y=>`<a href="#" onclick="window.dexter.viewEvent('${Y}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${Y.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let pe="";N&&(pe=`
            <div style="flex: 1; min-width: 120px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Generated By</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
                    <a href="#" onclick="window.dexter.viewEvent('${N}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3);">${N.substring(0,8)}...</a>
                </div>
            </div>`),z=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="flex: 1; min-width: 100px;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Priority</div>
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; font-weight: bold; color: ${E==="high"||E==="critical"?"#ff4d4d":E==="medium"?"#ffa500":"#888"}">
                            ${E.toUpperCase()}
                        </div>
                    </div>
                    <div style="flex: 1; min-width: 100px;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: capitalize;">${L}</div>
                    </div>
                    ${pe}
                    ${O}
                </div>

                <div class="event-detail-block" style="text-align: left;">
                    <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                    <div class="detail-pre" style="color: #fff;">${be(k)}</div>
                </div>
            `;let P=document.createElement("div");P.className=`event-item notification-item ${C} ${w} ${_} cursor-pointer priority-${E}`,P.dataset.alertId=o.id,P.onclick=function(Y){if(this.classList.contains("expanded")){this.classList.remove("expanded"),Q.delete(o.id);let ue=this.querySelector(".event-details");ue&&(ue.style.display="none")}else{this.classList.add("expanded"),Q.add(o.id);let ue=this.querySelector(".event-details");if(ue&&(ue.style.display="block"),!localStorage.getItem(`alert_read_ts_${o.id}`)){localStorage.setItem(`alert_read_ts_${o.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Me="event-border-grey";E==="high"||E==="critical"?Me="event-border-red":E==="medium"&&(Me="event-border-orange"),this.classList.add(Me),$e()}}};let G=y,me={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[L]||"bx-bell";P.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${j}</span>
                    <span class="event-date">${K}</span>
                </div>
                <div class="event-icon"><i class='bx ${me}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${L}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${L}</span>
                        DEXTER ${S?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}
                    </div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${I}">
                        ${z}
                    </div>
                </div>
            `;let ye=P.querySelector(".event-details");ye&&ye.addEventListener("click",Y=>{Y.stopPropagation()});let Ae=P.querySelector(".close-details-btn");return Ae&&Ae.addEventListener("click",Y=>{Y.stopPropagation(),P.classList.remove("expanded");let _e=P.querySelector(".event-details");_e&&(_e.style.display="none"),Q.delete(o.id)}),P},u=o=>{let m=document.createElement("div");m.className="notification-divider",m.dataset.alertId=o.id;let y="#888888";return o.label==="CRITICAL"?y="#ff4d4d":o.label==="HIGH"?y="#ff8888":o.label==="MEDIUM"&&(y="#ffa500"),m.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,m.innerHTML=`<span style="white-space: nowrap;">${o.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,m},A=Array.from(e.children),h=new Map(A.map(o=>[o.dataset.alertId,o])),c=new Set(x.map(o=>o.id));A.forEach(o=>{let m=o.dataset.alertId;(!m||!c.has(m))&&o.remove()});let v=null;x.forEach((o,m)=>{let y=h.get(o.id);(!y||t)&&(y&&y.remove(),o.type==="divider"?y=u(o):y=s(o),!y)||(m===0?e.firstElementChild!==y&&e.prepend(y):v&&v.nextElementSibling!==y&&v.after(y),v=y)}),ke=Date.now(),F(0,ke),$e()}catch(a){console.error("Error fetching alerts:",a),e.children.length===0&&(e.innerHTML=D("offline","Failed to load alerts.","The event service may be offline."))}}function Pt(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),r=document.getElementById("alerts-close-all"),a=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ce.forEach(n=>{localStorage.getItem(`alert_read_ts_${n.id}`)||localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString())}),Z(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Ce.forEach(n=>{Q.add(n.id),localStorage.getItem(`alert_read_ts_${n.id}`)||localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString())}),Z(!0)},e.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{Q.clear(),Z(!0)},r.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await B("/events?type=system.notification.generated",{method:"DELETE"});let n=Date.now()-48*60*60*1e3;Ce.forEach(i=>{localStorage.setItem(`alert_read_ts_${i.id}`,n.toString())}),Q.clear(),Z(!0)}catch(n){console.error("Failed to clear alerts:",n)}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}async function it(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await B(t);if(!e.ok)return;let a=(await e.json()).events||[],n=0;a.forEach(i=>{let l=i.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}if((l.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${i.id}`)||n++}),Ze(n)}catch{}}var at=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn"><i class='bx bx-plus'></i> New Idea</button>
    <button id="roadmap-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
    <button id="roadmap-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
  </div>
`,ot=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,ee=new Set,rt=[],le=null;async function te(t=!1){let e=document.getElementById("roadmap-list");if(e){Rt();try{let r=await B("/roadmap");if(!r.ok)throw new Error("Offline");let a=await r.json();rt=a;let n=g=>{let x=ee.has(g.id),f=g.state==="published",b=g.state==="consumed",s="event-border-grey";f&&(s="event-border-blue"),b&&(s="event-border-purple");let A=new Date(g.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${s} cursor-pointer ${x?"expanded":""}`,h.dataset.itemId=g.id,h.onclick=o=>{if(o.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",ee.delete(g.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",ee.add(g.id))};let c=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${g.state.toUpperCase()}]</span>`;h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${A.split(",")[1]}</span>
          <span class="event-date">${A.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${c}</div>
          <div class="event-message" style="white-space: pre-wrap;">${H(g.content)}</div>
          <div class="event-details" style="${x?"display: block;":"display: none;"} ">
            <div class="event-details-header" style="margin-bottom: 15px;">
              <h5 style="margin: 0; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Item Controls</h5>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${b?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${f?"bx-pause":"bx-rocket"}'></i> ${f?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${b?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(g.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let v=h.querySelector(".event-details");return v&&v.addEventListener("click",o=>{o.stopPropagation()}),h.querySelector(".edit-btn")?.addEventListener("click",()=>Ot(g)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>qt(g)),h.querySelector(".delete-btn")?.addEventListener("click",()=>Ut(g.id)),h.querySelector(".close-details-btn")?.addEventListener("click",o=>{o.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",ee.delete(g.id)}),h},i=Array.from(e.children),l=new Map(i.map(g=>[g.dataset.itemId,g])),p=new Set(a.map(g=>g.id));if(i.forEach(g=>{let x=g.dataset.itemId;(!x||!p.has(x))&&g.remove()}),a.length===0){e.innerHTML=D("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let d=null;a.forEach((g,x)=>{let f=l.get(g.id);(!f||t)&&(f&&f.remove(),f=n(g),!f)||(x===0?e.firstElementChild!==f&&e.prepend(f):d&&d.nextElementSibling!==f&&d.after(f),d=f)})}catch{e.children.length===0&&(e.innerHTML=D("offline","Failed to load roadmap.","The event service may be offline."))}}}function Rt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),r=document.getElementById("roadmap-cancel"),a=document.getElementById("roadmap-expand-all"),n=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{le=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",le=null},r.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let i=document.getElementById("roadmap-editor-input").value;if(!i.trim())return;let l=le?`/roadmap/${le}`:"/roadmap",p=le?"PATCH":"POST";try{await B(l,{method:p,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:i})}),document.getElementById("roadmap-editor-container").style.display="none",te(!0)}catch(d){console.error(d)}},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{rt.forEach(i=>ee.add(i.id)),te(!0)},a.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{ee.clear(),te(!0)},n.dataset.listenerAttached="true")}function Ot(t){le=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function qt(t){let e=t.state==="published"?"draft":"published";try{await B(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),te(!0)}catch(r){console.error(r)}}async function Ut(t){if(confirm("Delete this roadmap item?"))try{await B(`/roadmap/${t}`,{method:"DELETE"}),ee.delete(t),te(!0)}catch(e){console.error(e)}}var ct=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,dt=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,lt=null,ce=new Set,pt=[];async function de(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;jt();let r="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let a=await B(r);if(!a.ok)throw new Error("Service is offline or unreachable.");let i=(await a.json()).events||[];if(pt=i,lt=Date.now(),F(2,lt),i.length===0){e.innerHTML=D("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),fe(2,0);return}t&&(e.innerHTML="");let l=f=>{let b=f.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return null}let s=(b.title||"Untitled Blueprint").trim(),u=(b.summary||b.body||"No summary provided.").trim(),A=(b.content||"").trim(),h=(b.category||"architecture").trim(),c=(b.affected_services||[]).map(I=>I.trim()),v=(b.implementation_path||[]).map(I=>I.trim()),o=b.source_event_ids||[],m=b.approved===!0,y=new Date(f.timestamp*1e3),k=y.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),E=y.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=ce.has(f.id),L=S?"display: block;":"display: none;",T=document.createElement("div");T.className=`event-item notification-item event-border-purple cursor-pointer ${S?"expanded":""} ${m?"blueprint-approved":""}`,T.dataset.blueprintId=f.id,m&&(T.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",T.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let U=m?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[h]||"bx-paint";T.onclick=function(I){if(this.classList.contains("expanded")){this.classList.remove("expanded"),ce.delete(f.id);let O=this.querySelector(".event-details");O&&(O.style.display="none")}else{this.classList.add("expanded"),ce.add(f.id);let O=this.querySelector(".event-details");O&&(O.style.display="block")}};let M="";v.length>0&&(M=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${v.map(I=>`<li style="margin-bottom: 5px;">${H(I)}</li>`).join("")}</ul></div>
                    </div>
                `);let R="";o.length>0&&(R=`
                    <div class="blueprint-source" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Source Alerts</h5>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${o.map(I=>`
                                <a href="#" onclick="window.dexter.viewEvent('${I}'); return false;" style="color: #03dac6; text-decoration: none; font-size: 0.75em; font-family: 'JetBrains Mono', monospace; padding: 4px 8px; background: rgba(3, 218, 198, 0.05); border: 1px solid rgba(3, 218, 198, 0.1); border-radius: 4px;">
                                    <i class='bx bx-link-external'></i> ${I.substring(0,8)}...
                                </a>
                            `).join("")}
                        </div>
                    </div>
                `);let j=c.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${c.join(", ")}</span></div>`:"<div></div>",K=m?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${j}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${j}
                    <div style="display: flex; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;T.innerHTML=`
                ${m?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${E}</span>
                </div>
                <div class="event-icon" style="${m?"color: #03dac6;":""}"><i class='bx ${U}'></i></div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${s}</div>
                    <div class="event-details" style="${L}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px;">${H(u)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${H(A)}</div>
                        </div>
                        ${M}
                        ${R}
                        ${K}
                    </div>
                </div>
            `;let C=T.querySelector(".blueprint-approve-btn");C&&(C.onclick=async I=>{I.stopPropagation(),C.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await B(`/events/${f.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&de(!0)}catch(z){console.error("Failed to approve blueprint:",z)}});let w=T.querySelector(".blueprint-delete-btn");w&&(w.onclick=async I=>{I.stopPropagation();let z=!m;w.innerHTML=z?"<i class='bx bx-loader-alt spin'></i> Declining...":"<i class='bx bx-loader-alt spin'></i> Deleting...";try{(await B(`/events/${f.id}`,{method:"DELETE"})).ok&&de(!0)}catch(O){console.error("Failed to delete blueprint:",O)}});let $=T.querySelector(".event-details");$&&$.addEventListener("click",I=>{I.stopPropagation()});let _=T.querySelector(".close-details-btn");return _&&_.addEventListener("click",I=>{I.stopPropagation(),T.classList.remove("expanded");let z=T.querySelector(".event-details");z&&(z.style.display="none"),ce.delete(f.id)}),T},p=Array.from(e.children),d=new Map(p.map(f=>[f.dataset.blueprintId,f])),g=new Set(i.map(f=>f.id));p.forEach(f=>{let b=f.dataset.blueprintId;(!b||!g.has(b))&&f.remove()});let x=null;i.forEach((f,b)=>{let s=d.get(f.id);(!s||t)&&(s&&s.remove(),s=l(f),!s)||(b===0?e.firstElementChild!==s&&e.prepend(s):x&&x.nextElementSibling!==s&&x.after(s),x=s)}),fe(2,i.length),tt()}catch(a){console.error("Error fetching blueprints:",a),e.children.length===0&&(e.innerHTML=D("offline","Failed to load blueprints.","The event service may be offline."))}}async function mt(){let t="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let e=await B(t);if(!e.ok)return;let a=(await e.json()).events||[],n=0;a.forEach(i=>{let l=i.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}l.approved!==!0&&n++}),et(n)}catch{}}function jt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{pt.forEach(r=>ce.add(r.id)),de(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ce.clear(),de(!0)},e.dataset.listenerAttached="true")}var ut=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${at()}
            </div>
            ${ot()}
        </div>

        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${ct()}
            </div>
            ${dt()}
        </div>
    </div>
`;async function De(){await Promise.all([te(),de()])}var gt=()=>`
    <div class="system-section-header">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,Ft=null;async function He(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...",await He(),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)},e.dataset.listenerAttached="true");try{let r=await st("/contacts");if(!r.ok)throw new Error("Service unreachable");let n=(await r.json()).members||[];if(Ft=Date.now(),n.length===0){t.innerHTML=D("empty","No contacts found.","Check your Discord connection.");return}let i={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};n.sort((l,p)=>{let d=i[l.level]??10,g=i[p.level]??10;return d!==g?d-g:l.username.localeCompare(p.username)}),t.innerHTML=n.map(l=>{let p=l.color?"#"+l.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",d=l.status==="online"?"#5eff5e":l.status==="idle"?"#ffa500":l.status==="dnd"?"#ff4d4d":"#666",g="#888";l.level==="Me"||l.level==="Master"?g="#bb86fc":l.level==="Admin"?g="#cf6679":l.level==="Moderator"?g="#03dac6":l.level==="Contributor"&&(g="#ffa500");let x=l.level==="Me",f=x?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",b=x?"2px solid #bb86fc":`1px solid ${p}33`;return`
                <div class="user-profile-section" style="background: ${f}; padding: 15px; border-radius: 8px; border: ${b}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${x?"#bb86fc":p}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${l.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${x?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${d}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${l.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${g}; font-weight: 600; text-transform: uppercase;">${x?"DEXTER (ME)":l.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${l.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=D("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Gt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Guardian Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function ft(t,e){let r=Gt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(r="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(r=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(r=`Guardian Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!r)return t;let a=r.replace(/\{(\w+)\}/g,(n,i)=>e[i]!==void 0&&e[i]!==null?e[i]:n);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(a+=` (Translation: ${e.english_translation})`),a}var Ne=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn ${q==="all"?"active":""}" data-filter="all">All</button>
            <button class="notif-action-btn filter-btn ${q==="messaging"?"active":""}" data-filter="messaging">Messaging</button>
            <button class="notif-action-btn filter-btn ${q==="system"?"active":""}" data-filter="system">System</button>
            <button class="notif-action-btn filter-btn ${q==="cognitive"?"active":""}" data-filter="cognitive">Cognitive</button>
            <button class="notif-action-btn filter-btn ${q==="moderation"?"active":""}" data-filter="moderation">Moderation</button>
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
`,Te=null,se=new Set,ve=[],q="all",Wt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision"],moderation:["moderation.explicit_content.deleted"]},Jt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Vt(t){for(let[e,r]of Object.entries(Wt))if(r.includes(t))return e;return"system"}function Kt(t){return Jt[t]||"bx-square-rounded"}async function ne(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Yt();let a=`/events?ml=${q==="all"?100:250}&format=json`;q!=="all"&&(a+=`&category=${q}`);try{let n=await B(a);if(!n.ok)throw new Error("Service unreachable");if(ve=((await n.json()).events||[]).filter(b=>{let s=b.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return!0}let u=s.type;return!(u==="system.blueprint.generated"||u==="system.notification.generated")}),Te=Date.now(),F(1,Te),ve.length===0){e.innerHTML=D("empty","No events found for this filter.");return}t&&(e.innerHTML="");let p=b=>{let s=b.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let u=s.type,A=Vt(u),h=Kt(u),c=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted"||u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="system.cli.command"||u==="system.analysis.audit"||u==="system.test.completed"||u==="error_occurred"||u==="system.cli.status"||u==="system.attention.expired"||u.startsWith("system.roadmap")||u.startsWith("system.process"),v="event-border-grey";c&&(u==="moderation.explicit_content.deleted"||u==="error_occurred"?v="event-border-red":u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="system.analysis.audit"?v="event-border-purple":u==="system.attention.expired"||u==="system.cli.command"||u==="system.cli.status"?v="event-border-orange":u==="system.test.completed"?v=s.test?.status==="OK"&&s.lint?.status==="OK"&&s.format?.status==="OK"?"event-border-blue":"event-border-red":v="event-border-blue");let o=c?"cursor-pointer":"",m=se.has(b.id),y=m?"expanded":"",k=m?"display: block;":"display: none;",E=new Date(b.timestamp*1e3),S=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),T=ft(u,s),N=s.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${s.user_level})</span>`:"",U="";if(c){let C="";if(u==="engagement.decision"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${s.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Input Decision")}
                            <pre class="detail-pre">${s.input_decision||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context History")}
                            <pre class="detail-pre">${s.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Engagement Output")}
                            <pre class="detail-pre">${s.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(u==="system.attention.expired"){let w=I=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${I}</h5>`,$=s.timestamp-s.last_active,_=Math.floor($/60);C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${s.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${_} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context (Last Input)")}
                            <div class="detail-pre">${be(s.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${w("Thought Process (Last Output)")}
                            <div class="detail-pre">${be(s.last_output||"None")}</div>
                        </div>
                    `}else if(u==="messaging.bot.sent_message"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${s.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Input (Prompt)")}
                            <pre class="detail-pre">${s.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Response Output")}
                            <pre class="detail-pre">${s.response_raw||"None"}</pre>
                        </div>
                    `}else if(u==="moderation.explicit_content.deleted"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${s.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Model Output")}
                            <pre class="detail-pre">${H(s.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.link.completed"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${s.url}" target="_blank" class="attachment-link">${s.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${H(s.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Description")}
                            <pre class="detail-pre">${H(s.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Content Summary")}
                            <pre class="detail-pre">${H(s.summary)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.visual.completed"){let w=_=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${_}</h5>`,$="";s.base64_preview?$=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${s.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:s.url&&($=`<div class="event-detail-block"><img src="${s.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),C=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${s.filename}</span>
                        </div>
                        ${$}
                        <div class="event-detail-block">
                            ${w("Visual Description")}
                            <pre class="detail-pre">${H(s.description)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.router.decision"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Decision:</span>
                            <span class="detail-value" style="color: #bb86fc; font-weight: bold;">${s.decision}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${s.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${s.url}" target="_blank" class="attachment-link">${s.url}</a></span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Model Output")}
                            <pre class="detail-pre">${H(s.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Input Context")}
                            <pre class="detail-pre">${H(s.raw_input)||"None"}</pre>
                        </div>
                    `}else if(u==="system.cli.command"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
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
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${s.exit_code!==void 0?s.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Output")}
                            <pre class="detail-pre">${H(s.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(u==="system.analysis.audit"){let w=s.success?"#03dac6":"#ff4d4d",$=s.success?"SUCCESS":"FAILED",_=P=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${P}</h5>`,I="";s.error&&(I=`
                            <div class="event-detail-block">
                                ${_("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${H(s.error)}</pre>
                            </div>
                        `);let z="";if(s.chat_history&&s.chat_history.length>0){let P=s.chat_history.length,G=s.chat_history.map((ie,me)=>{let ye=ie.role==="user"?"#03dac6":ie.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${me}" style="display: ${me===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${ye}; letter-spacing: 1px; font-weight: bold;">${ie.role}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${me+1} of ${P}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${H(ie.content)}</div>
                                </div>
                            `}).join("");z=`
                            <div class="event-detail-block">
                                ${_("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${G}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${P<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let O="";if(s.corrections&&s.corrections.length>0){let P=s.corrections.map((G,ie)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${G.type}] ${G.guidance}</div>
                                ${G.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${H(G.snippet)}</div>`:""}
                            </div>
                        `).join("");O=`
                            <div class="event-detail-block">
                                ${_(`Corrections (${s.corrections.length})`)}
                                ${P}
                            </div>
                        `}let pe="";if(s.parsed_results&&s.parsed_results.length>0){let P=s.parsed_results.map(G=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${H(G.title)}</div>
                                <div style="color: #ddd;">${H(G.summary)}</div>
                            </div>
                        `).join("");pe=`
                            <div class="event-detail-block">
                                ${_("Parsed Results")}
                                ${P}
                            </div>
                        `}C=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">
                            <div style="flex: 1; min-width: 120px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${s.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${w}; font-weight: bold;">${$} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${s.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.model}</div>
                            </div>
                        </div>
                        ${I}
                        ${pe}
                        ${O}
                        ${z}
                    `}else if(u==="system.test.completed"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${s.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${s.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Format")}
                            <pre class="detail-pre">${s.format?.status||"N/A"}: ${s.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Lint")}
                            <pre class="detail-pre">${s.lint?.status||"N/A"}: ${s.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Tests")}
                            <pre class="detail-pre">${s.test?.status||"N/A"}: ${s.test?.details||s.test?.message||"OK"}</pre>
                        </div>
                    `}else if(u==="error_occurred"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${s.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${H(s.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context")}
                            <pre class="detail-pre">${JSON.stringify(s.context||{},null,2)}</pre>
                        </div>
                    `}else if(u==="system.cli.status"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;C=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${s.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Message")}
                            <pre class="detail-pre">${H(s.message)}</pre>
                        </div>
                    `}else if(u==="messaging.user.sent_message"){let w="";s.attachments&&s.attachments.length>0&&(w=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${s.attachments.map(_=>{let I=_.content_type&&_.content_type.startsWith("image/"),z=(_.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${I?`<div class="attachment-thumb-container"><img src="${_.url}" alt="${_.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${_.url}" target="_blank" class="attachment-link">${_.filename}</a>
                                        <span class="attachment-meta">${_.content_type} \u2022 ${z}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),C=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${s.content||"(empty)"}</pre>
                        </div>
                        ${w}
                    `}U=`
                    <div class="event-details" style="${k}">
                        ${C}
                    </div>
                `}let M=document.createElement("div");M.className=`event-item ${v} ${o} ${y}`,M.dataset.eventId=b.id,M.onclick=function(C){if(!c)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),se.delete(b.id);let $=this.querySelector(".event-details");$&&($.style.display="none")}else{this.classList.add("expanded"),se.add(b.id);let $=this.querySelector(".event-details");$&&($.style.display="block")}},M.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${S}</span>
                    <span class="event-date">${L}</span>
                </div>
                <div class="event-icon"><i class='bx ${h}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${A}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${A}</span>
                        ${b.service} ${N}
                    </div>
                    <div class="event-message">${T}</div>
                    ${U}
                </div>
            `;let R=M.querySelector(".event-details");if(R&&R.addEventListener("click",C=>{C.stopPropagation()}),c){let C=M.querySelector(".close-details-btn");C&&C.addEventListener("click",w=>{w.stopPropagation();let $=w.target.closest(".event-item");if($){$.classList.remove("expanded"),se.delete(b.id);let _=$.querySelector(".event-details");_&&(_.style.display="none")}})}let j=M.querySelector(".prev-btn"),K=M.querySelector(".next-btn");if(j&&K){let C=0,w=M.querySelectorAll(".history-slide"),$=w.length,_=()=>{w.forEach((I,z)=>{I.style.display=z===C?"block":"none"}),j.disabled=C===0,K.disabled=C===$-1,j.style.opacity=C===0?"0.5":"1",K.style.opacity=C===$-1?"0.5":"1"};j.addEventListener("click",I=>{I.stopPropagation(),C>0&&(C--,_())}),K.addEventListener("click",I=>{I.stopPropagation(),C<$-1&&(C++,_())}),_()}return M},d=Array.from(e.children),g=new Map(d.map(b=>[b.dataset.eventId,b])),x=new Set(ve.map(b=>b.id));d.forEach(b=>{let s=b.dataset.eventId;(!s||!x.has(s))&&b.remove()});let f=null;ve.forEach((b,s)=>{let u=g.get(b.id);(!u||t)&&(u&&u.remove(),u=p(b),!u)||(s===0?e.firstElementChild!==u&&e.prepend(u):f&&f.nextElementSibling!==u&&f.after(u),f=u)}),Te=Date.now(),F(1,Te)}catch(n){console.error("Error fetching events:",n),e.children.length===0&&(e.innerHTML=D("offline","Failed to load events.","The event service may be offline."))}}function Yt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),r=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ve.forEach(n=>se.add(n.id)),ne(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{se.clear(),ne(!0)},e.dataset.listenerAttached="true"),r&&!r.dataset.listenerAttached&&(r.querySelectorAll(".filter-btn").forEach(n=>{n.onclick=()=>{r.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),n.classList.add("active"),q=n.dataset.filter,ne(!0)}}),r.dataset.listenerAttached="true"),r&&r.querySelectorAll(".filter-btn").forEach(n=>{n.dataset.filter===q?n.classList.add("active"):n.classList.remove("active")});let a=document.getElementById("events-clear");a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{let n=q==="all"?"ALL":q.toUpperCase();if(confirm(`Are you sure you want to delete ${n} events from the backend? This cannot be undone.`)){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let i="/events";if(q!=="all"?i+=`?category=${q}`:i+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await B(i,{method:"DELETE"})).ok)throw new Error("Failed to delete events");se.clear(),ne(!0)}catch(i){console.error("Failed to clear events:",i),alert("Failed to clear events. Check console.")}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}function bt(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Xt=null;async function xe(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await B("/logs");if(!e.ok)throw new Error("Logs offline");let r=await e.json();if(!r||r.length===0)return t.innerHTML=D("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let a=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],n=r.filter(l=>!a.includes(l.id));n.forEach(l=>{l.logs&&Array.isArray(l.logs)?l.logs.reverse():l.logs=[]}),n.reverse();let i=n.map(l=>{let p=l.logs.join(`
`),d=[...l.logs];if(d.length<25){let x=25-d.length;for(let f=0;f<x;f++)d.push("")}else d.length>25&&(d=d.slice(-25));let g=d.map(x=>Se(x)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${l.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(p)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${l.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return t.innerHTML=i,document.querySelectorAll(".copy-logs-btn").forEach(l=>{l.addEventListener("click",()=>{let p=unescape(l.dataset.logs);navigator.clipboard.writeText(p).then(()=>{let d=l.querySelector("i");d.classList.remove("bx-copy"),d.classList.add("bx-check"),setTimeout(()=>{d.classList.remove("bx-check"),d.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(l=>{l.addEventListener("click",async()=>{let p=l.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${p}?`))try{(await B(`/logs?service_id=${p}`,{method:"DELETE"})).ok&&xe()}catch(d){console.error("Error clearing logs:",d)}})}),Xt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=D("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var ht=()=>`
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
        </div>`,wt=()=>`
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
        <div id="processes-history-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,Et=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,$t=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,St=()=>`
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
        </div>`,kt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${bt()}
        </div>`;async function Ct(){await Promise.all([Le(),Pe(),Re()]),await xe()}var vt=null,xt=null;async function Tt(){try{return await(await B("/system_monitor")).json()}catch{return null}}async function yt(){try{return await(await B("/system/hardware")).json()}catch{return null}}async function Qt(){try{return await(await B("/processes")).json()}catch{return null}}async function Zt(){try{return await(await B("/agent/status")).json()}catch{return null}}async function Pe(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),r=document.querySelector("#hw-os .hw-content"),a=document.querySelector("#hw-cpu .hw-content"),n=document.querySelector("#hw-ram .hw-content"),i=document.querySelector("#hw-gpu .hw-content"),l=document.querySelector("#hw-storage .hw-content"),p=c=>{if(c){if(r&&(r.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${c.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${c.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),n){let v=(c.MEMORY_BYTES/1073741824).toFixed(1);n.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${v} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(a&&c.CPU&&c.CPU.length>0){let v=c.CPU[0];a.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${v.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${v.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${v.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}i&&(c.GPU&&c.GPU.length>0?i.innerHTML=c.GPU.map(v=>{let o=(v.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${v.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${o} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):i.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),l&&c.STORAGE&&c.STORAGE.length>0?l.innerHTML=c.STORAGE.map(v=>{let o=(v.USED/1073741824).toFixed(1),m=(v.SIZE/(1024*1024*1024)).toFixed(1),y=v.SIZE>0?(v.USED/v.SIZE*100).toFixed(0):0,k=v.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${v.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${k}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${o} GB Used</span>
                            <span>${m} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${y>90?"#cf6679":"#03dac6"}; width: ${y}%; height: 100%; box-shadow: 0 0 10px ${y>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):l&&(l.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let c=await yt();c?(p(c),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},e.dataset.listenerAttached="true"),a&&!a.hasChildNodes())){let c=await yt();p(c)}if(!t)return;let d=await Tt();if(!d||!d.services){t.children.length===0&&(t.innerHTML=D("offline","Failed to load system metrics.","The event service may be offline."));return}vt=Date.now(),F(0,vt);let g=d.services||[];Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function x(c){return!c||c==="N/A"||c==="unknown"||c.trim()===""?"-":c}function f(c){if(!c||c==="N/A"||c==="unknown")return"-";let v=c.match(/^(\d+\.\d+\.\d+)/);return v?v[0]:c.split(".").slice(0,3).join(".")||"-"}function b(c){return!c||c.length<=28?c:c.substring(0,28)+"..."}function s(c){if(!c||c==="N/A"||c==="unknown")return"-";let v=c.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!v)return"-";let o=parseInt(v[1])||0,m=parseInt(v[2])||0,y=parseInt(v[3])||0,k=parseFloat(v[4])||0,E=o*86400+m*3600+y*60+k,S=Math.floor(E/86400);if(S>0)return`${S}d`;let L=Math.floor(E/3600);if(L>0)return`${L}h`;let T=Math.floor(E/60);return T>0?`${T}m`:`${Math.floor(E)}s`}function u(c){let v=c.status==="online",o=v?"service-widget-online":"service-widget-offline",m=v?"bx-check-circle":"bx-x-circle",y=v?"OK":"BAD",k=c.version?f(c.version.str):"-",E=c.cpu&&c.cpu!=="N/A"?c.cpu:"-",S=c.memory&&c.memory!=="N/A"?c.memory:"-",L=E!=="-"?"#00ff00":"#666",T=E!=="-"?"#fff":"#666",N=S!=="-"?"#00ff00":"#666",U=S!=="-"?"#fff":"#666",M=s(c.uptime),R="";return v?R=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${k}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${M}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${L};"></i>
                        <span style="color: ${T};">${E}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${N};"></i>
                        <span style="color: ${U};">${S}</span>
                    </div>
                </div>`:R='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${o}" data-service-id="${c.id}"><div class="service-widget-header"><i class="bx ${m}"></i><h3>${c.short_name||c.id}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${b(c.domain&&c.port?`${c.domain}:${c.port}`:"")}</span></div>${R}</div></div>`}let A=new Map(Array.from(t.querySelectorAll(".service-widget")).map(c=>[c.dataset.serviceId,c])),h=new Set(g.map(c=>c.id));for(let[c,v]of A)h.has(c)||v.remove();g.forEach(c=>{let v=u(c),o=A.get(c.id);o?o.outerHTML!==v&&(o.outerHTML=v):t.insertAdjacentHTML("beforeend",v)})}async function Re(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Tt();if(!e){t.children.length===0&&(t.innerHTML=D("offline","Failed to load model status.","The event service may be offline."));return}xt=Date.now(),F(2,xt);let r=e.models||[],a=e.whisper;Array.from(t.children).forEach(d=>{d.classList.contains("service-widget")||d.remove()});function n(d){let g=d.status==="Ready";return`
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
                </div>`}function i(d){let g=d.status==="Ready";return`
                <div class="service-widget ${g?"service-widget-online":"service-widget-offline"}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx bx-volume-full"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${g?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${d.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">xtts</span>
                        </div>
                    </div>
                </div>`}function l(d){let g=d.status==="Downloaded",x=g?"service-widget-online":"service-widget-offline",f=g?"OK":"MISSING",b=g&&d.size>0?`${(d.size/1e9).toFixed(2)} GB`:"-",s=d.name;return d.type==="custom"&&s.endsWith(":latest")&&(s=s.replace(":latest","")),`<div class="service-widget ${x}" data-model-name="${d.name}"><div class="service-widget-header"><i class="bx ${g?"bx-check-circle":"bx-x-circle"}"></i><h3>${s}</h3><span class="service-widget-status">${f}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${d.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${b}</span></div></div></div>`}let p="";if(a&&(p+=n(a)),e.xtts&&(p+=i(e.xtts)),p+=r.map(l).join(""),!p){t.innerHTML=D("empty","No models found.");return}t.innerHTML!==p&&(t.innerHTML=p)}async function Le(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("guardian-t1-val"),r=document.getElementById("guardian-t2-val"),a=document.getElementById("guardian-idle-val"),n=document.getElementById("guardian-total-idle"),i=document.getElementById("guardian-total-active"),l=document.getElementById("guardian-total-waste"),p=document.getElementById("guardian-reset-btn");p&&!p.dataset.listenerAttached&&(p.onclick=async()=>{p.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await B("/guardian/reset?protocol=all",{method:"POST"}),setTimeout(()=>{p.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{p.innerHTML="<i class='bx bx-refresh'></i> Reset"},2e3)},500),Le()}catch{p.innerHTML="<i class='bx bx-error'></i> Failed"}},p.dataset.listenerAttached="true");let d=await Zt();if(d){let A=Math.floor(Date.now()/1e3),h=d.active_tier,c=d.protocol_aliases||{t1:"Sentry",t2:"Architect"},v=k=>{k<0&&(k=0);let E=Math.floor(k/3600),S=Math.floor(k%3600/60),L=k%60;return E>0?`${E}h ${S}m`:S>0?`${S}m ${L}s`:`${L}s`},o=(k,E,S,L)=>{let T=c[L]||L.toUpperCase(),N=k.parentElement.querySelector('span[style*="text-transform: uppercase"]');if(N&&(N.textContent=T),h===L)k.textContent="Working",k.style.color="#bb86fc";else if(L==="t1"&&h==="tests")k.textContent="Testing",k.style.color="#03dac6";else if(S){let M=S.next_run-A;if(M<=0)k.textContent="Ready",k.style.color="#5eff5e";else{let R=Math.floor(M/60),j=M%60;k.textContent=`${R}m ${j}s`,k.style.color="#fff"}}E&&S&&(E.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${S.attempts||0}</span>
            <span style="color: ${S.failures>0?"#ffa500":"#666"}">Fails: ${S.failures||0}</span>
            <span style="color: ${S.absolute_failures>0?"#ff4d4d":"#666"}">Aborted: ${S.absolute_failures||0}</span>
          </div>
        `)};e&&o(e,document.getElementById("guardian-t1-stats"),d.t1,"t1"),r&&o(r,document.getElementById("guardian-t2-stats"),d.t2,"t2");let m=document.getElementById("system-state-label"),y=document.getElementById("system-state-val");if(y&&d.system_state){let k=d.system_state,E=v(d.system_state_time||0);m&&(m.textContent=`State: ${k.toUpperCase()}`),y.textContent=E,k==="idle"?y.style.color=d.system_state_time>300?"#5eff5e":"#fff":y.style.color="#bb86fc"}n&&(n.textContent=v(d.total_idle_time||0)),i&&(i.textContent=v(d.total_active_time||0)),l&&(l.textContent=v(d.total_waste_time||0))}else[e,r,a,n,i,l].forEach(h=>{h&&(h.textContent="-",h.style.color="#666")});let g=await Qt(),x=[],f=[],b=[];g&&(Array.isArray(g)?x=g:(x=g.active||[],f=g.queue||[],b=g.history||[],b.sort((A,h)=>(h.end_time||0)-(A.end_time||0)))),x.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=D("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),ze(t,x,!1));let s=document.getElementById("processes-queue-widgets");s&&(f.length===0?!s.querySelector(".tab-placeholder")&&!s.querySelector('div[style*="font-style: italic"]')&&(s.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(s.innerHTML="",ze(s,f,!1)));let u=document.getElementById("processes-history-widgets");u&&(b.length===0?u.querySelector(".tab-placeholder")||(u.innerHTML=D("empty","No recent history.")):(u.querySelector(".tab-placeholder")&&(u.innerHTML=""),ze(u,b,!0))),fe(1,x.length)}function ze(t,e,r){function a(p){let d="";p.end_time?d=`${p.end_time-p.start_time}s`:d=`${Math.floor(Date.now()/1e3-p.start_time)}s`;let g=p.retries>0?`<span class="process-retry-badge">Retry ${p.retries}</span>`:"",x=p.channel_id,f={"system-guardian":"Guardian Worker","system-cli-op":"CLI Operation"};if(f[x]?x=f[x]:/^\d+$/.test(x)&&(x=`Channel ${x}`),r)return`
        <div class="process-history-item" data-channel-id="${p.channel_id}-${p.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${x}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${p.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${p.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${d}</span>
            </div>
        </div>`;let b="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${p.channel_id}-${p.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${b}"></i>
                        <h3 style="color: ${b}">${x}</h3>
                        ${g}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${b}">${p.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${b}">${d}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${b}">${p.pid}</span>
                        </div>
                    </div>
                </div>`}let n=r?".process-history-item":".process-widget",i=new Map(Array.from(t.querySelectorAll(n)).map(p=>[p.dataset.channelId,p])),l=new Set(e.map(p=>`${p.channel_id}-${p.start_time}`));for(let[p,d]of i)l.has(p)||d.remove();e.forEach(p=>{let d=`${p.channel_id}-${p.start_time}`,g=a(p),x=i.get(d);if(x){x.outerHTML!==g&&(x.outerHTML=g);let f=t.querySelector(`[data-channel-id="${d}"]`);f&&t.appendChild(f)}else t.insertAdjacentHTML("beforeend",g)})}function Ie(){let t=ge(),e=Ve()||"master@easter.company",r={enabled:Notification.permission==="granted",supported:"Notification"in window},a=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(W).map(n=>`
                    <div class="theme-card ${t===n?"active":""}" data-theme="${n}">
                        <div class="theme-preview theme-preview-${n.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${n.charAt(0).toUpperCase()+n.slice(1)}</h3>
                            <p>${n===W.DARK?"Simple, clean, dark.":n===W.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
                            <span class="theme-badge">${t===n?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${a?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Oe(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(n=>{n.addEventListener("click",function(){let i=this.dataset.theme;Xe(i),t.setContent(Ie()),Oe(t)})});let r=document.getElementById("notifications-toggle");r&&(r.onclick=async n=>{if(n.target.checked)try{await Notification.requestPermission()!=="granted"&&(n.target.checked=!1)}catch{n.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),n.target.checked=!0)});let a=document.getElementById("analytics-toggle");a&&(a.checked=localStorage.getItem("easter_analytics_enabled")!=="false",a.onclick=n=>{let i=n.target.checked;localStorage.setItem("easter_analytics_enabled",i),window.EASTER_ANALYTICS_ENABLED=i,window.EASTER_DEBUG_MODE=i})}var es="2.8.143",At=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1 & Tier 2).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1|2] [--force]
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
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],ts=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
                <span>Interactive Demos (v${es})</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;for(let[r,a]of Object.entries(t)){let n=At.filter(i=>i.category===r);n.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${a.icon}' style="color: ${a.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${a.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${n.map(i=>`
                        <div class="cli-command-card ${i.dummy?"dummy":""}" data-cmd="${i.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${a.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${i.icon}' style="font-size: 2em; color: ${a.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${i.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${i.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${a.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${i.usage}
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
    </div>`,e},qe=!1;function ss(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Lt(),document.getElementById("terminal-action-btn").onclick=()=>Lt());let r=document.getElementById("cli-terminal-body"),a=document.getElementById("cli-docs-pane");r.innerHTML="";let n=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return a.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${n.overview}</p>
        </div>
        ${n.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${n.details.map(i=>`<li>${i}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${n.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),qe=!0,r}function Lt(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),qe=!1}function It(t,e,r="output"){if(!qe)return;let a=document.createElement("div");a.className=`terminal-line terminal-${r}`,r==="prompt"?a.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:a.innerHTML=Se(e),t.appendChild(a),t.scrollTop=t.scrollHeight}async function ns(t){let e=At.find(n=>n.id===t);if(!e)return;let r=ss(e);It(r,`dex ${t}`,"prompt");let a=e.demo_output||["Executing command...","\u2713 Done."];for(let n of a){await new Promise(l=>setTimeout(l,400+Math.random()*600));let i="output";n.includes("[ERROR]")?i="error":n.includes("[SUCCESS]")||n.includes("\u2713")?i="success":n.includes("!")&&(i="warning"),It(r,n,i)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function _t(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=ts();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let r=e.querySelector("code").textContent;navigator.clipboard.writeText(r).then(()=>{let a=e.querySelector("i");a.className="bx bx-check",a.style.color="#5eff5e",setTimeout(()=>{a.className="bx bx-copy",a.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(r=>{r.addEventListener("mouseenter",()=>{r.style.transform="translateY(-5px)",r.style.borderColor="rgba(255,255,255,0.15)",r.style.backgroundColor="rgba(255,255,255,0.05)"}),r.addEventListener("mouseleave",()=>{r.style.transform="translateY(0)",r.style.borderColor="rgba(255,255,255,0.05)",r.style.backgroundColor="rgba(255,255,255,0.03)"}),r.addEventListener("click",()=>{let a=r.dataset.cmd;ns(a)})})}async function is(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Be()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable.")}}function Mt(){is(),Qe(),Ue();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&_t();let e=Je();je(e),Ge();let r=document.getElementById("nav-left-container");r&&r.addEventListener("click",()=>{if(i.length>0)f();else{let o=window.location.pathname;if(!(o==="/"||o==="/index.html")){let k=(o.endsWith("/")&&o.length>1?o.slice(0,-1):o).split("/");k.pop();let E=k.join("/")||"/";window.location.href=E}}});let a=window.location.pathname==="/"||window.location.pathname==="/index.html",n=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!a&&!n&&document.querySelector("footer")?.classList.add("hide");let i=[],l=document.getElementById("windows-container");l&&l.setAttribute("data-count","0");let p=o=>{localStorage.setItem("dex_last_window",o)};function d(){return 1}function g(){for(;i.length>1;)i.shift().close(!0);let o=document.getElementById("windows-container"),m=document.querySelector("nav"),y=document.querySelector("footer"),k=window.location.pathname==="/"||window.location.pathname==="/index.html",E=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");o&&o.setAttribute("data-count",i.length),i.forEach(N=>{let U=document.getElementById(N.id);U&&U.classList.remove("hide-close")}),he(ge());let S=document.getElementById("dexter-menu-container"),L=document.getElementById("nav-window-switcher"),T=document.getElementById("settings-icon");if(Fe(i.length>0),i.length>0){if(y?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),m?.classList.add("window-open"),o&&(o.style.paddingTop="60px"),S&&(S.style.display="none"),T&&(T.style.display="none"),L){let N=i[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(N)?(L.innerHTML=`
                      <div class="nav-switch-btn ${N==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${N==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${N==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${N==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${N==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{p("alerts-window"),x(b)}),document.getElementById("switch-events").addEventListener("click",()=>{p("events-window"),x(s)}),document.getElementById("switch-monitor").addEventListener("click",()=>{p("monitor-window"),x(A)}),document.getElementById("switch-contacts").addEventListener("click",()=>{p("contacts-window"),x(u)}),document.getElementById("switch-workspace").addEventListener("click",()=>{p("workspace-window"),x(h)})):L.innerHTML=""}}else m?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),o&&(o.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),k||E?y?.classList.remove("hide"):y?.classList.add("hide"),S&&(S.style.display="flex"),T&&(T.style.display="block"),L&&(L.innerHTML="");re()}function x(o){if(o.isOpen()){o.close();return}for(;i.length>0;)i.pop().close(!0);i.push(o),o.open(),g()}function f(){[...i].forEach(m=>m.close()),i=[]}window.addEventListener("resize",g);let b=X({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:nt(),onOpen:()=>Z(),onClose:()=>{let o=i.indexOf(b);o>-1&&i.splice(o,1),g()}}),s=X({id:"events-window",title:"Events",icon:"bx-calendar-event",content:Ne(),onOpen:()=>{s.setContent(Ne()),ne()},onClose:()=>{let o=i.indexOf(s);o>-1&&i.splice(o,1),g()}}),u=X({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:gt(),onOpen:()=>He(),onClose:()=>{let o=i.indexOf(u);o>-1&&i.splice(o,1),g()}}),A=X({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:Et()},{icon:"bxs-component",title:"Processes",content:wt()},{icon:"bxs-brain",title:"Models",content:$t()},{icon:"bxs-hdd",title:"Hardware",content:St()},{icon:"bxs-terminal",title:"Logs",content:kt()},{icon:"bxs-zap",title:"Agents",content:ht()}],onOpen:()=>{Pe(),Le(),Re(),xe()},onClose:()=>{let o=i.indexOf(A);o>-1&&i.splice(o,1),g()}}),h=X({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:ut(),onOpen:()=>De(),onClose:()=>{let o=i.indexOf(h);o>-1&&i.splice(o,1),g()}}),c=X({id:"settings-window",title:"Settings",icon:"bx-cog",content:Ie(),onOpen:()=>{c.setContent(Ie()),Oe(c)},onClose:()=>{let o=i.indexOf(c);o>-1&&i.splice(o,1),g()}}),v=X({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:o=>{s.isOpen()||x(s),setTimeout(()=>{let m=document.querySelector(`.event-item[data-event-id="${o}"]`);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),m.classList.add("flash-highlight"),m.classList.contains("expanded")||m.click(),setTimeout(()=>m.classList.remove("flash-highlight"),2e3))},500)},viewAlert:o=>{b.isOpen()||x(b),setTimeout(()=>{let m=document.querySelector(`.event-item[data-alert-id="${o}"]`);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),m.classList.add("flash-highlight"),m.classList.contains("expanded")||m.click(),setTimeout(()=>m.classList.remove("flash-highlight"),2e3))},500)}},e){let o=document.getElementById("dexter-dropdown");o&&(o.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let m=document.getElementById("dexter-menu-container"),y=document.getElementById("dexter-menu-btn");m&&o&&y&&(m.addEventListener("mouseenter",()=>{o.classList.add("active"),y.classList.add("active")}),m.addEventListener("mouseleave",()=>{o.classList.remove("active"),y.classList.remove("active")}),y.addEventListener("click",k=>{k.stopPropagation();let E=localStorage.getItem("dex_last_window")||"alerts-window",S=null;E==="alerts-window"?S=b:E==="events-window"?S=s:E==="monitor-window"?S=A:E==="contacts-window"?S=u:E==="workspace-window"&&(S=h),S&&x(S)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{p("alerts-window"),x(b)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{p("events-window"),x(s)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{p("monitor-window"),x(A)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{p("contacts-window"),x(u)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{p("workspace-window"),x(h)}),document.getElementById("settings-icon")?.addEventListener("click",()=>x(c)),document.getElementById("close-all-windows")?.addEventListener("click",()=>f()),setInterval(()=>{b.isOpen()?Z():it(),h.isOpen()?De():mt(),s.isOpen()&&ne(),A.isOpen()&&Ct()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{v.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",o=>{o.preventDefault();try{Ke(document.getElementById("email-input").value),window.location.reload()}catch(m){let y=document.getElementById("login-error");y&&(y.textContent=m.message,y.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mt):Mt();})();
