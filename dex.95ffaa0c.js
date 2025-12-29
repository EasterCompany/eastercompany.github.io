(()=>{function He(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ne(t=!1){let e=window.location.pathname,o=e==="/"||e==="/index.html",i=`
        <div class="nav-left" id="nav-left-wrapper" style="gap: 0;">
            ${`
        <div id="nav-left-container" style="display: flex; align-items: center; transition: transform 0.2s ease; gap: 5px; cursor: ${o?"default":"pointer"};">
            <i class='bx bx-chevron-left' id="nav-chevron" style="font-size: 28px; color: #fff; display: ${o?"none":"block"};"></i>
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
    `,l=document.createElement("nav");l.innerHTML=i,document.body.prepend(l)}function Re(t){let e=window.location.pathname,o=e==="/"||e==="/index.html",n=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!n||!s||(t||!o?(n.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{n.style.transform="translateX(-3px)"},s.onmouseleave=()=>{n.style.transform="translateX(0)"}):(n.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function Pe(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Oe=1e3;function F(t){let e=null,o=t.onClose||null,n=t.onOpen||null;function s(){e&&(e.style.zIndex=++Oe)}function i(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",l),n&&setTimeout(n,10);return}let g=document.getElementById("windows-container");g||(g=document.createElement("div"),g.id="windows-container",g.className="windows-container",document.body.appendChild(g)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++Oe,e.addEventListener("mousedown",s);let w=t.icon||"bx-window",b="",r="",p;t.tabs&&t.tabs.length>0?(b=`<div class="tab-bar">${t.tabs.map((h,a)=>{let d=h.icon?`<i class="bx ${h.icon}"></i>`:`<span class="tab-glyph">${h.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${a===0?"active":""}" data-tab-index="${a}">
                        ${d}
                        <span class="tab-title">${h.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${a}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,p=`<div class="window-content">${t.tabs.map((h,a)=>`<div class="tab-content ${a===0?"active":""}" data-tab-content="${a}">${h.content}</div>`).join("")}</div>`):(t.title&&(r=`<div class="window-title">${t.title}</div>`),p=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${w}"></i>
                ${b}
                ${r}
                <i class="bx bx-x window-close"></i>
            </div>
            ${p}
        `,g.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",c=>{c.stopPropagation(),v()}),window.addEventListener("resize",l),t.tabs&&e.querySelectorAll(".tab").forEach(c=>{c.addEventListener("click",()=>{let f=c.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(h=>h.classList.remove("active")),c.classList.add("active"),e.querySelectorAll(".tab-content").forEach(h=>h.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${f}"]`).classList.add("active"),u(c,e)})}),setTimeout(()=>{e.classList.add("open"),n&&n()},10)}function l(){if(!e||!e.classList.contains("open"))return;let g=e.querySelector(".tab.active");g&&u(g,e)}function u(g,w){setTimeout(()=>{let b=w.querySelector(".tab-bar");if(!b)return;let r=Array.from(b.querySelectorAll(".tab")),p=r.indexOf(g),c=b.clientWidth,f=r[Math.max(0,p-2)],h=r[Math.min(r.length-1,p+2)],a=f.offsetLeft-b.offsetLeft-25,x=h.offsetLeft+h.offsetWidth-b.offsetLeft+25-a,$=x<=c?a-(c-x)/2:g.offsetLeft-b.offsetLeft-c/2+g.offsetWidth/2;b.scrollTo({left:$,behavior:"smooth"})},350)}function v(g=!1){e&&(window.removeEventListener("resize",l),g?(e.remove(),e=null):(e.classList.remove("open"),o&&o(),setTimeout(()=>{e?.remove(),e=null},400)))}function m(g){let w=e?.querySelector(".window-content");w&&(w.innerHTML=g)}function y(){return e&&e.classList.contains("open")}return{open:i,close:v,setContent:m,isOpen:y,focus:s,id:t.id}}function Ue(){return!0}function ze(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function qe(t){localStorage.setItem("easter_user_email",t.trim())}var Fe="easter_theme",z={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function se(){return localStorage.getItem(Fe)||z.DARK}function je(t){if(!Object.values(z).includes(t))throw new Error("Invalid theme");localStorage.setItem(Fe,t),re(t)}function re(t){let e=document.body;if(Object.values(z).forEach(n=>{e.classList.remove(`theme-${n}`)}),e.classList.add(`theme-${t}`),[z.LIGHT,z.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let n=document.createElement("div");n.className="background",document.body.prepend(n)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function Ge(){let t=se();re(t)}function L(t,e,o=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",i=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${i}</div>`}function _(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function P(t,e){let o=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!o)return;if(!e){o.textContent="Last updated: never";return}let n=Date.now(),s=Math.floor((n-e)/1e3),i;s<60?i=`${s}s ago`:s<3600?i=`${Math.floor(s/60)}m ago`:i=`${Math.floor(s/3600)}h ago`,o.textContent=`Last updated: ${i}`}var We=0;function Ve(){return We}function ne(t,e){let o=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!o)return;let n=o.querySelector(".notification-badge");n&&(e>0?(n.textContent=e>9?"9+":e,n.style.display="flex"):n.style.display="none")}function ie(t){We=t;let e=document.getElementById("dexter-nav-badge");e&&(t>0?e.style.display="flex":e.style.display="none");let o=document.getElementById("alerts-menu-item");if(o){let s=o.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="auto",o.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}let n=document.getElementById("switch-alerts");if(n){let s=n.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="8px",n.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}}function me(){let t=document.getElementById("alerts-list");if(!t)return;let e=t.querySelectorAll(".alert-unread:not(.priority-low)").length;ie(e)}function Se(){return"https://event.easter.company"}function It(){return"https://discord.easter.company"}var At="http://127.0.0.1:8100",_t="http://127.0.0.1:8300",Mt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function pe(t){let e=_(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,i)=>{let l=Mt[i];return l?`<span class="${l}">`:""});let o=(e.match(/<span/g)||[]).length,n=(e.match(/<\/span/g)||[]).length;return o>n&&(e+="</span>".repeat(o-n)),e}function ae(t){if(!t)return"";let e=_(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(o,n)=>{let s=n.split("|").map(i=>i.trim());return s.every(i=>i.match(/^:?-+:?$/))?"":`<div class="md-table-row">${s.map(i=>`<span class="md-table-cell">${i}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var X=null,Z=null,ce=!1,de=!1;async function I(t,e={}){if(X)try{let s=await fetch(X+t,e);if(s.ok)return s;X=null}catch{X=null}let o=Se(),n=At;try{let s=await fetch(o+t,e);if(s.ok)return X=o,ce&&(console.log("\u2728 Production event service restored."),ce=!1),s;throw new Error("Primary failed")}catch{ce||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${n}`),ce=!0);try{let i=await fetch(n+t,e);if(i.ok)return X=n,i;throw new Error("Fallback failed")}catch(i){throw i}}}async function Ke(t,e={}){if(Z)try{let s=await fetch(Z+t,e);if(s.ok)return s;Z=null}catch{Z=null}let o=It(),n=_t;try{let s=await fetch(o+t,e);if(s.ok)return Z=o,de&&(console.log("\u2728 Production discord service restored."),de=!1),s;throw new Error("Primary failed")}catch{de||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${n}`),de=!0);try{let i=await fetch(n+t,e);if(i.ok)return Z=n,i;throw new Error("Fallback failed")}catch(i){throw i}}}var Je=()=>`
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
`,ue=null,G=new Set,ge=[];async function W(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Bt(),t&&(e.innerHTML="<p>Updating...</p>");let o="/events?ml=1000&format=json&event.type=system.notification.generated";try{let n=await I(o);if(!n.ok)throw new Error("Service is offline or unreachable.");let i=(await n.json()).events||[];ue=Date.now(),P(0,ue);let l=Date.now(),u=24*60*60*1e3,v=i.filter(a=>{let d=localStorage.getItem(`alert_read_ts_${a.id}`);if(!d)return!0;let x=parseInt(d);return l-x<u});v.sort((a,d)=>{let x=T=>{let M=T.event;if(typeof M=="string")try{M=JSON.parse(M)}catch{return"low"}return(M.priority||"low").toLowerCase()},$=T=>T==="critical"?4:T==="high"?3:T==="medium"?2:1,E=$(x(a)),S=$(x(d));return E!==S?S-E:d.timestamp-a.timestamp}),ge=v;let m=a=>{let d=a.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return"low"}return(d.priority||"low").toLowerCase()},y=[],w=new Set(v.map(a=>m(a))).size>1;if(v.length>0){let a=null;v.forEach(d=>{let x=m(d);w&&x!==a&&(y.push({id:`divider-${x}`,type:"divider",label:x.toUpperCase()}),a=x),y.push(d)})}if(t&&(e.innerHTML=""),v.length===0){e.innerHTML=L("empty","No alerts yet."),me();return}let b=a=>{let d=a.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return null}let x=d.title||"Untitled Alert",$=d.body||"No description provided.",E=d.priority||"low",S=!!d.alert,T=d.category||"system",M=d.related_event_ids||[],A=d.audit_event_id,B=!!localStorage.getItem(`alert_read_ts_${a.id}`),N=new Date(a.timestamp*1e3),R=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),C=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),k=B?"event-border-grey":"event-border-blue";!B&&S&&(k="event-border-red"),B&&(E==="high"||E==="critical")?k="event-border-red":B&&E==="medium"&&(k="event-border-orange");let D=B?"alert-read":"alert-unread",H=G.has(a.id),ye=H?"expanded":"",he=H?"display: block;":"display: none;",Ae="",_e="";M.length>0&&(_e=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${M.map(q=>`<a href="#" onclick="window.dexter.viewEvent('${q}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px; font-family: monospace; width: fit-content;">${q.substring(0,8)}...</a>`).join(", ")}</span>
                    </div>`);let Me="";A&&(Me=`
              <div class="event-detail-row">
                  <span class="detail-label">Generated By:</span>
                  <span class="detail-value"><a href="#" onclick="window.dexter.viewEvent('${A}'); return false;" style="color: #bb86fc; text-decoration: none; font-family: monospace; border-bottom: 1px dashed #bb86fc; width: fit-content;">${A.substring(0,8)}...</a></span>
              </div>`),Ae=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${E==="high"||E==="critical"?"#ff4d4d":E==="medium"?"#ffa500":"#888"}">${E.toUpperCase()}</span>
                </div>
                ${Me}
                ${_e}
                <div class="event-detail-block" style="text-align: left;">
                    <div class="detail-pre">${ae(`### Insight

`+$)}</div>
                </div>
            `;let U=document.createElement("div");U.className=`event-item notification-item ${k} ${D} ${ye} cursor-pointer priority-${E}`,U.dataset.alertId=a.id,U.onclick=function(q){if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(a.id);let te=this.querySelector(".event-details");te&&(te.style.display="none")}else{this.classList.add("expanded"),G.add(a.id);let te=this.querySelector(".event-details");if(te&&(te.style.display="block"),!localStorage.getItem(`alert_read_ts_${a.id}`)){localStorage.setItem(`alert_read_ts_${a.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ee="event-border-grey";E==="high"||E==="critical"?Ee="event-border-red":E==="medium"&&(Ee="event-border-orange"),this.classList.add(Ee),me()}}};let Qt=x,kt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[T]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${R}</span>
                    <span class="event-date">${C}</span>
                </div>
                <div class="event-icon"><i class='bx ${kt}'></i></div>
                <div class="event-content">
                    <div class="event-service">${T.toUpperCase()} ${S?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${x}</div>
                    <div class="event-details" style="${he}">
                        ${Ae}
                    </div>
                </div>
            `;let Be=U.querySelector(".event-details");Be&&Be.addEventListener("click",q=>{q.stopPropagation()});let De=U.querySelector(".close-details-btn");return De&&De.addEventListener("click",q=>{q.stopPropagation(),U.classList.remove("expanded");let we=U.querySelector(".event-details");we&&(we.style.display="none"),G.delete(a.id)}),U},r=a=>{let d=document.createElement("div");d.className="notification-divider",d.dataset.alertId=a.id;let x="#888888";return a.label==="CRITICAL"?x="#ff4d4d":a.label==="HIGH"?x="#ff8888":a.label==="MEDIUM"&&(x="#ffa500"),d.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${x}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,d.innerHTML=`<span style="white-space: nowrap;">${a.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${x}44, transparent); flex-grow: 1;"></div>`,d},p=Array.from(e.children),c=new Map(p.map(a=>[a.dataset.alertId,a])),f=new Set(y.map(a=>a.id));p.forEach(a=>{let d=a.dataset.alertId;(!d||!f.has(d))&&a.remove()});let h=null;y.forEach((a,d)=>{let x=c.get(a.id);(!x||t)&&(x&&x.remove(),a.type==="divider"?x=r(a):x=b(a),!x)||(d===0?e.firstElementChild!==x&&e.prepend(x):h&&h.nextElementSibling!==x&&h.after(x),h=x)}),ue=Date.now(),P(0,ue),me()}catch(n){console.error("Error fetching alerts:",n),e.children.length===0&&(e.innerHTML=L("offline","Failed to load alerts.","The event service may be offline."))}}function Bt(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),o=document.getElementById("alerts-close-all"),n=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ge.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),W(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ge.forEach(s=>{G.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),W(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{G.clear(),W(!0)},o.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await I("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;ge.forEach(i=>{localStorage.setItem(`alert_read_ts_${i.id}`,s.toString())}),G.clear(),W(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}async function Ye(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await I(t);if(!e.ok)return;let n=(await e.json()).events||[],s=0;n.forEach(i=>{let l=i.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}if((l.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${i.id}`)||s++}),ie(s)}catch{}}var Xe=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn"><i class='bx bx-plus'></i> New Idea</button>
    <button id="roadmap-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
    <button id="roadmap-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
  </div>
`,Ze=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,V=new Set,Qe=[],Q=null;async function K(t=!1){let e=document.getElementById("roadmap-list");if(e){Dt();try{let o=await I("/roadmap");if(!o.ok)throw new Error("Offline");let n=await o.json();if(Qe=n,n.length===0){e.innerHTML=L("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let s=m=>{let y=V.has(m.id),g=m.state==="draft",w=m.state==="published",b=m.state==="consumed",r="event-border-grey";w&&(r="event-border-blue"),b&&(r="event-border-purple");let c=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),f=document.createElement("div");f.className=`event-item notification-item ${r} cursor-pointer ${y?"expanded":""}`,f.dataset.itemId=m.id,f.onclick=d=>{if(d.target.closest("button"))return;f.classList.contains("expanded")?(f.classList.remove("expanded"),f.querySelector(".event-details").style.display="none",V.delete(m.id)):(f.classList.add("expanded"),f.querySelector(".event-details").style.display="block",V.add(m.id))};let h=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;f.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${c.split(",")[1]}</span>
          <span class="event-date">${c.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${h}</div>
          <div class="event-message" style="white-space: pre-wrap;">${_(m.content)}</div>
          <div class="event-details" style="${y?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${b?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${w?"bx-pause":"bx-rocket"}'></i> ${w?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${b?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(m.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let a=f.querySelector(".event-details");return a&&a.addEventListener("click",d=>{d.stopPropagation()}),f.querySelector(".edit-btn")?.addEventListener("click",()=>Ht(m)),f.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Nt(m)),f.querySelector(".delete-btn")?.addEventListener("click",()=>Rt(m.id)),f.querySelector(".close-details-btn")?.addEventListener("click",d=>{d.stopPropagation(),f.classList.remove("expanded"),f.querySelector(".event-details").style.display="none",V.delete(m.id)}),f},i=Array.from(e.children),l=new Map(i.map(m=>[m.dataset.itemId,m])),u=new Set(n.map(m=>m.id));i.forEach(m=>{let y=m.dataset.itemId;(!y||!u.has(y))&&m.remove()});let v=null;n.forEach((m,y)=>{let g=l.get(m.id);(!g||t)&&(g&&g.remove(),g=s(m),!g)||(y===0?e.firstElementChild!==g&&e.prepend(g):v&&v.nextElementSibling!==g&&v.after(g),v=g)})}catch{e.children.length===0&&(e.innerHTML=L("offline","Failed to load roadmap.","The event service may be offline."))}}}function Dt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),o=document.getElementById("roadmap-cancel"),n=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Q=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",Q=null},o.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let i=document.getElementById("roadmap-editor-input").value;if(!i.trim())return;let l=Q?`/roadmap/${Q}`:"/roadmap",u=Q?"PATCH":"POST";try{await I(l,{method:u,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:i})}),document.getElementById("roadmap-editor-container").style.display="none",K(!0)}catch(v){console.error(v)}},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{Qe.forEach(i=>V.add(i.id)),K(!0)},n.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{V.clear(),K(!0)},s.dataset.listenerAttached="true")}function Ht(t){Q=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Nt(t){let e=t.state==="published"?"draft":"published";try{await I(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),K(!0)}catch(o){console.error(o)}}async function Rt(t){if(confirm("Delete this roadmap item?"))try{await I(`/roadmap/${t}`,{method:"DELETE"}),V.delete(t),K(!0)}catch(e){console.error(e)}}var tt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,st=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,et=null,ee=new Set,nt=[];async function fe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Pt();let o="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let n=await I(o);if(!n.ok)throw new Error("Service is offline or unreachable.");let i=(await n.json()).events||[];if(nt=i,et=Date.now(),P(2,et),blueprints.length===0){e.innerHTML=L("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),ne(1,0);return}t&&(e.innerHTML="");let l=g=>{let w=g.event;if(typeof w=="string")try{w=JSON.parse(w)}catch{return null}let b=w.title||"Untitled Blueprint",r=w.summary||w.body||"No summary provided.",p=w.content||"",c=w.category||"architecture",f=w.affected_services||[],h=w.implementation_path||[],a=new Date(g.timestamp*1e3),d=a.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),x=a.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),$=ee.has(g.id),E=$?"display: block;":"display: none;",S=document.createElement("div");S.className=`event-item notification-item event-border-purple cursor-pointer ${$?"expanded":""}`,S.dataset.blueprintId=g.id;let M={architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[c]||"bx-paint";S.onclick=function(R){if(this.classList.contains("expanded")){this.classList.remove("expanded"),ee.delete(g.id);let k=this.querySelector(".event-details");k&&(k.style.display="none")}else{this.classList.add("expanded"),ee.add(g.id);let k=this.querySelector(".event-details");k&&(k.style.display="block")}};let A=f.length>0?`<div class="event-detail-row"><span class="detail-label">Related Services:</span> <span class="detail-value">${f.join(", ")}</span></div>`:"",O="";h.length>0&&(O=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${h.map(R=>`<li>${_(R)}</li>`).join("")}
                        </ul>
                    </div>
                `),S.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${d}</span>
                    <span class="event-date">${x}</span>
                </div>
                <div class="event-icon"><i class='bx ${M}'></i></div>
                <div class="event-content">
                    <div class="event-service">${c.toUpperCase()}</div>
                    <div class="event-message">${b}</div>
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; color: #fff;">
                            ${_(r)}
                        </div>
                        ${A}
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${_(p)}</div>
                        </div>
                        ${O}
                    </div>
                </div>
            `;let B=S.querySelector(".event-details");B&&B.addEventListener("click",R=>{R.stopPropagation()});let N=S.querySelector(".close-details-btn");return N&&N.addEventListener("click",R=>{R.stopPropagation(),S.classList.remove("expanded");let C=S.querySelector(".event-details");C&&(C.style.display="none"),ee.delete(g.id)}),S},u=Array.from(e.children),v=new Map(u.map(g=>[g.dataset.blueprintId,g])),m=new Set(i.map(g=>g.id));u.forEach(g=>{let w=g.dataset.blueprintId;(!w||!m.has(w))&&g.remove()});let y=null;i.forEach((g,w)=>{let b=v.get(g.id);(!b||t)&&(b&&b.remove(),b=l(g),!b)||(w===0?e.firstElementChild!==b&&e.prepend(b):y&&y.nextElementSibling!==b&&y.after(b),y=b)}),ne(2,i.length)}catch(n){console.error("Error fetching blueprints:",n),e.children.length===0&&(e.innerHTML=L("offline","Failed to load blueprints.","The event service may be offline."))}}function Pt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{nt.forEach(o=>ee.add(o.id)),fe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ee.clear(),fe(!0)},e.dataset.listenerAttached="true")}var it=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${Xe()}
            </div>
            ${Ze()}
        </div>

        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${tt()}
            </div>
            ${st()}
        </div>
    </div>
`;async function $e(){await Promise.all([K(),fe()])}var at=()=>`
    <div class="system-section-header">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,Ot=null;async function Ce(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>Ce(),e.dataset.listenerAttached="true");try{let o=await Ke("/contacts");if(!o.ok)throw new Error("Service unreachable");let s=(await o.json()).members||[];if(Ot=Date.now(),s.length===0){t.innerHTML=L("empty","No contacts found.","Check your Discord connection.");return}let i={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((l,u)=>{let v=i[l.level]??10,m=i[u.level]??10;return v!==m?v-m:l.username.localeCompare(u.username)}),t.innerHTML=s.map(l=>{let u=l.color?"#"+l.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",v=l.status==="online"?"#5eff5e":l.status==="idle"?"#ffa500":l.status==="dnd"?"#ff4d4d":"#666",m="#888";l.level==="Me"||l.level==="Master"?m="#bb86fc":l.level==="Admin"?m="#cf6679":l.level==="Moderator"?m="#03dac6":l.level==="Contributor"&&(m="#ffa500");let y=l.level==="Me",g=y?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",w=y?"2px solid #bb86fc":`1px solid ${u}33`;return`
                <div class="user-profile-section" style="background: ${g}; padding: 15px; border-radius: 8px; border: ${w}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${y?"#bb86fc":u}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${l.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${y?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${v}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${l.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${m}; font-weight: 600; text-transform: uppercase;">${y?"DEXTER (ME)":l.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${l.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=L("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Ut={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function ot(t,e){let o=Ut[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(o="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(o=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(o=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!o)return t;let n=o.replace(/\{(\w+)\}/g,(s,i)=>e[i]!==void 0&&e[i]!==null?e[i]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(n+=` (Translation: ${e.english_translation})`),n}var rt=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn active" data-filter="all">All</button>
            <button class="notif-action-btn filter-btn" data-filter="messaging">Messaging</button>
            <button class="notif-action-btn filter-btn" data-filter="system">System</button>
            <button class="notif-action-btn filter-btn" data-filter="cognitive">Cognitive</button>
            <button class="notif-action-btn filter-btn" data-filter="moderation">Moderation</button>
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
`,ve=null,J=new Set,oe=[],j="all",zt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},qt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function lt(t){for(let[e,o]of Object.entries(zt))if(o.includes(t))return e;return"system"}function Ft(t){return qt[t]||"bx-square-rounded"}async function Y(t=!1){let e=document.getElementById("events-timeline");if(!e)return;jt();let n=`/events?ml=${j==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let s=await I(n);if(!s.ok)throw new Error("Service is offline or unreachable.");let l=(await s.json()).events||[],u=l;if(j!=="all"&&(u=l.filter(b=>{let r=b.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return!1}return lt(r.type)===j})),oe=u.slice(0,50),ve=Date.now(),P(1,ve),oe.length===0){e.innerHTML=L("empty","No events found for this filter.");return}t&&(e.innerHTML="");let v=b=>{let r=b.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return null}let p=r.type,c=lt(p),f=Ft(p),h=p==="engagement.decision"||p==="messaging.bot.sent_message"||p==="messaging.user.sent_message"||p==="moderation.explicit_content.deleted"||p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.cli.command"||p==="system.analysis.audit"||p==="system.test.completed"||p==="error_occurred"||p==="system.cli.status"||p==="system.attention.expired"||p.startsWith("system.roadmap")||p.startsWith("system.process"),a="event-border-grey";h&&(p==="moderation.explicit_content.deleted"||p==="error_occurred"?a="event-border-red":p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.analysis.audit"?a="event-border-purple":p==="system.attention.expired"||p==="system.cli.command"||p==="system.cli.status"?a="event-border-orange":p==="system.test.completed"?a=r.test?.status==="OK"&&r.lint?.status==="OK"&&r.format?.status==="OK"?"event-border-blue":"event-border-red":a="event-border-blue");let d=h?"cursor-pointer":"",x=J.has(b.id),$=x?"expanded":"",E=x?"display: block;":"display: none;",S=new Date(b.timestamp*1e3),T=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),M=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=ot(p,r),O=r.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${r.user_level})</span>`:"",B="";if(h){let C="";if(p==="engagement.decision")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${r.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${r.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${r.engagement_raw||"None"}</pre>
                        </div>
                    `;else if(p==="system.attention.expired"){let k=r.timestamp-r.last_active,D=Math.floor(k/60);C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value" style="color: #bb86fc;">${r.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${D} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context (Last Input):</span>
                            <div class="detail-pre">${ae(r.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Thought Process (Last Output):</span>
                            <div class="detail-pre">${ae(r.last_output||"None")}</div>
                        </div>
                    `}else if(p==="messaging.bot.sent_message")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${r.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${r.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${r.response_raw||"None"}</pre>
                        </div>
                    `;else if(p==="moderation.explicit_content.deleted")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${r.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${r.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${_(r.raw_output)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.link.completed")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${r.url}" target="_blank" class="attachment-link">${r.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${_(r.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${_(r.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${_(r.summary)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.visual.completed"){let k="";r.base64_preview?k=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${r.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:r.url&&(k=`<div class="event-detail-block"><img src="${r.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${r.filename}</span>
                        </div>
                        ${k}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${_(r.description)||"None"}</pre>
                        </div>
                    `}else if(p==="system.cli.command")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${r.command||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${r.args||"None"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${r.status||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${r.duration||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${r.exit_code!==void 0?r.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${_(r.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(p==="system.analysis.audit")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${r.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${r.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${_(r.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${_(r.raw_input)}</pre>
                        </div>
                    `;else if(p==="system.test.completed")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${r.service_name}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${r.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Format:</span>
                            <pre class="detail-pre">${r.format?.status||"N/A"}: ${r.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Lint:</span>
                            <pre class="detail-pre">${r.lint?.status||"N/A"}: ${r.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Tests:</span>
                            <pre class="detail-pre">${r.test?.status||"N/A"}: ${r.test?.details||r.test?.message||"OK"}</pre>
                        </div>
                    `;else if(p==="error_occurred")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${r.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${_(r.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(r.context||{},null,2)}</pre>
                        </div>
                    `;else if(p==="system.cli.status")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${r.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${_(r.message)}</pre>
                        </div>
                    `;else if(p==="messaging.user.sent_message"){let k="";r.attachments&&r.attachments.length>0&&(k=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${r.attachments.map(H=>{let ye=H.content_type&&H.content_type.startsWith("image/"),he=(H.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${ye?`<div class="attachment-thumb-container"><img src="${H.url}" alt="${H.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${H.url}" target="_blank" class="attachment-link">${H.filename}</a>
                                        <span class="attachment-meta">${H.content_type} \u2022 ${he}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${r.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${r.content||"(empty)"}</pre>
                        </div>
                        ${k}
                    `}B=`
                    <div class="event-details" style="${E}">
                        ${C}
                    </div>
                `}let N=document.createElement("div");N.className=`event-item ${a} ${d} ${$}`,N.dataset.eventId=b.id,N.onclick=function(C){if(!h)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(b.id);let D=this.querySelector(".event-details");D&&(D.style.display="none")}else{this.classList.add("expanded"),J.add(b.id);let D=this.querySelector(".event-details");D&&(D.style.display="block")}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${T}</span>
                    <span class="event-date">${M}</span>
                </div>
                <div class="event-icon"><i class='bx ${f}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${c}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${c}</span>
                        ${b.service} ${O}
                    </div>
                    <div class="event-message">${A}</div>
                    ${B}
                </div>
            `;let R=N.querySelector(".event-details");if(R&&R.addEventListener("click",C=>{C.stopPropagation()}),h){let C=N.querySelector(".close-details-btn");C&&C.addEventListener("click",k=>{k.stopPropagation();let D=k.target.closest(".event-item");if(D){D.classList.remove("expanded"),J.delete(b.id);let H=D.querySelector(".event-details");H&&(H.style.display="none")}})}return N},m=Array.from(e.children),y=new Map(m.map(b=>[b.dataset.eventId,b])),g=new Set(oe.map(b=>b.id));m.forEach(b=>{let r=b.dataset.eventId;(!r||!g.has(r))&&b.remove()});let w=null;oe.forEach((b,r)=>{let p=y.get(b.id);(!p||t)&&(p&&p.remove(),p=v(b),!p)||(r===0?e.firstElementChild!==p&&e.prepend(p):w&&w.nextElementSibling!==p&&w.after(p),w=p)}),ve=Date.now(),P(1,ve)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=L("offline","Failed to load events.","The event service may be offline."))}}function jt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),o=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{oe.forEach(s=>J.add(s.id)),Y(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),Y(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{o.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),s.classList.add("active"),j=s.dataset.filter,Y(!0)}}),o.dataset.listenerAttached="true");let n=document.getElementById("events-clear");n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let s=j==="all"?"ALL":j.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let i="/events";if(j!=="all"&&(i+=`?category=${j}`),!(await I(i,{method:"DELETE"})).ok)throw new Error("Failed to delete events");J.clear(),Y(!0)}catch(i){console.error("Failed to clear events:",i),alert("Failed to clear events. Check console.")}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}function ct(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Gt=null;async function le(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await I("/logs");if(!e.ok)throw new Error("Logs offline");let o=await e.json();if(!o||o.length===0)return t.innerHTML=L("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let n=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=o.filter(l=>!n.includes(l.id));s.forEach(l=>{l.logs&&Array.isArray(l.logs)?l.logs.reverse():l.logs=[]}),s.reverse();let i=s.map(l=>{let u=l.logs.join(`
`),v=[...l.logs];if(v.length<25){let y=25-v.length;for(let g=0;g<y;g++)v.push("")}else v.length>25&&(v=v.slice(-25));let m=v.map(y=>pe(y)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${l.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(u)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${l.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${m}</pre>
                </div>
            `}).join("");return t.innerHTML=i,document.querySelectorAll(".copy-logs-btn").forEach(l=>{l.addEventListener("click",()=>{let u=unescape(l.dataset.logs);navigator.clipboard.writeText(u).then(()=>{let v=l.querySelector("i");v.classList.remove("bx-copy"),v.classList.add("bx-check"),setTimeout(()=>{v.classList.remove("bx-check"),v.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(l=>{l.addEventListener("click",async()=>{let u=l.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${u}?`))try{(await I(`/logs?service_id=${u}`,{method:"DELETE"})).ok&&le()}catch(v){console.error("Error clearing logs:",v)}})}),Gt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=L("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var ft=()=>`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Current Idle</span>
                <span id="guardian-idle-val" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
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
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Tier 1 (Sentry)</span>
                    <span id="guardian-t1-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-t1-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Tier 2 (Architect)</span>
                    <span id="guardian-t2-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-t2-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>`,vt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-component' style="color: #03dac6;"></i>
            <h2>Live Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>
        
        <div class="system-section-header">
            <i class='bx bx-history' style="color: #888;"></i>
            <h2>Process History</h2>
        </div>
        <div id="processes-history-widgets" class="system-monitor-widgets" style="margin-bottom: 30px; opacity: 0.7; flex-direction: row-reverse;"></div>`,bt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,xt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,yt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2>Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
        </div>
        <div id="hardware-metrics" class="hardware-grid" style="display: flex; flex-direction: column; gap: 25px; margin-bottom: 30px;">
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
        </div>`,ht=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${ct()}
        </div>`;async function wt(){await Promise.all([be(),Le(),Te()]),await le()}var dt=null,mt=null,pt=null;async function Et(){try{return await(await I("/system_monitor")).json()}catch{return null}}async function ut(){try{return await(await I("/system/hardware")).json()}catch{return null}}async function Wt(){try{return await(await I("/processes")).json()}catch{return null}}async function Vt(){try{return await(await I("/guardian/status")).json()}catch{return null}}async function Le(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),o=document.querySelector("#hw-cpu .hw-content"),n=document.querySelector("#hw-ram .hw-content"),s=document.querySelector("#hw-gpu .hw-content"),i=document.querySelector("#hw-storage .hw-content"),l=c=>{if(c){if(n){let f=(c.MEMORY_BYTES/1073741824).toFixed(1);n.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${f} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(o&&c.CPU&&c.CPU.length>0){let f=c.CPU[0];o.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${f.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${f.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${f.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}s&&(c.GPU&&c.GPU.length>0?s.innerHTML=c.GPU.map(f=>{let h=(f.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${f.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${h} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):s.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),i&&c.STORAGE&&c.STORAGE.length>0?i.innerHTML=c.STORAGE.map(f=>{let h=(f.USED/1073741824).toFixed(1),a=(f.SIZE/(1024*1024*1024)).toFixed(1),d=f.SIZE>0?(f.USED/f.SIZE*100).toFixed(0):0,x=f.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${f.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${x}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${h} GB Used</span>
                            <span>${a} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${d>90?"#cf6679":"#03dac6"}; width: ${d}%; height: 100%; box-shadow: 0 0 10px ${d>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):i&&(i.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let c=await ut();c?(l(c),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},e.dataset.listenerAttached="true"),o&&!o.hasChildNodes())){let c=await ut();l(c)}if(!t)return;let u=await Et();if(!u||!u.services){t.children.length===0&&(t.innerHTML=L("offline","Failed to load system metrics.","The event service may be offline."));return}dt=Date.now(),P(0,dt);let v=u.services||[];Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function m(c){return!c||c==="N/A"||c==="unknown"||c.trim()===""?"-":c}function y(c){if(!c||c==="N/A"||c==="unknown")return"-";let f=c.match(/^(\d+\.\d+\.\d+)/);return f?f[0]:c.split(".").slice(0,3).join(".")||"-"}function g(c){return!c||c.length<=28?c:c.substring(0,28)+"..."}function w(c){if(!c||c==="N/A"||c==="unknown")return"-";let f=c.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!f)return"-";let h=parseInt(f[1])||0,a=parseInt(f[2])||0,d=parseInt(f[3])||0,x=parseFloat(f[4])||0,$=h*86400+a*3600+d*60+x,E=Math.floor($/86400);if(E>0)return`${E}d`;let S=Math.floor($/3600);if(S>0)return`${S}h`;let T=Math.floor($/60);return T>0?`${T}m`:`${Math.floor($)}s`}function b(c){let f=c.status==="online",h=f?"service-widget-online":"service-widget-offline",a=f?"bx-check-circle":"bx-x-circle",d=f?"OK":"BAD",x=c.version?y(c.version.str):"-",$=c.cpu&&c.cpu!=="N/A"?c.cpu:"-",E=c.memory&&c.memory!=="N/A"?c.memory:"-",S=$!=="-"?"#00ff00":"#666",T=$!=="-"?"#fff":"#666",M=E!=="-"?"#00ff00":"#666",A=E!=="-"?"#fff":"#666",O=w(c.uptime),B="";return f?B=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${x}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${O}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${S};"></i>
                        <span style="color: ${T};">${$}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${M};"></i>
                        <span style="color: ${A};">${E}</span>
                    </div>
                </div>`:B='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${h}" data-service-id="${c.id}"><div class="service-widget-header"><i class="bx ${a}"></i><h3>${c.short_name||c.id}</h3><span class="service-widget-status">${d}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${g(c.domain&&c.port?`${c.domain}:${c.port}`:"")}</span></div>${B}</div></div>`}let r=new Map(Array.from(t.querySelectorAll(".service-widget")).map(c=>[c.dataset.serviceId,c])),p=new Set(v.map(c=>c.id));for(let[c,f]of r)p.has(c)||f.remove();v.forEach(c=>{let f=b(c),h=r.get(c.id);h?h.outerHTML!==f&&(h.outerHTML=f):t.insertAdjacentHTML("beforeend",f)})}async function Te(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Et();if(!e){t.children.length===0&&(t.innerHTML=L("offline","Failed to load model status.","The event service may be offline."));return}mt=Date.now(),P(2,mt);let o=e.models||[],n=e.whisper;Array.from(t.children).forEach(u=>{u.classList.contains("service-widget")||u.remove()});function s(u){let v=u.status==="Ready";return`
                <div class="service-widget ${v?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${v?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${u.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function i(u){let v=u.status==="Downloaded",m=v?"service-widget-online":"service-widget-offline",y=v?"OK":"MISSING",g=v&&u.size>0?`${(u.size/1e9).toFixed(2)} GB`:"-",w=u.name;return u.type==="custom"&&w.endsWith(":latest")&&(w=w.replace(":latest","")),`<div class="service-widget ${m}" data-model-name="${u.name}"><div class="service-widget-header"><i class="bx ${v?"bx-check-circle":"bx-x-circle"}"></i><h3>${w}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${u.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${g}</span></div></div></div>`}let l="";if(n&&(l+=s(n)),l+=o.map(i).join(""),!l){t.innerHTML=L("empty","No models found.");return}t.innerHTML!==l&&(t.innerHTML=l)}async function be(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("guardian-t1-val"),o=document.getElementById("guardian-t2-val"),n=document.getElementById("guardian-idle-val"),s=document.getElementById("guardian-total-idle"),i=document.getElementById("guardian-total-active"),l=document.getElementById("guardian-total-waste"),u=document.getElementById("guardian-reset-btn");u&&!u.dataset.listenerAttached&&(u.onclick=async()=>{u.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await I("/guardian/reset?tier=all",{method:"POST"}),setTimeout(()=>{u.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{u.innerHTML="<i class='bx bx-refresh'></i> Reset"},2e3)},500),be()}catch{u.innerHTML="<i class='bx bx-error'></i> Failed"}},u.dataset.listenerAttached="true");let v=await Vt();if(v){let r=Math.floor(Date.now()/1e3),p=v.active_tier,c=h=>{h<0&&(h=0);let a=Math.floor(h/3600),d=Math.floor(h%3600/60),x=h%60;return a>0?`${a}h ${d}m`:d>0?`${d}m ${x}s`:`${x}s`},f=(h,a,d,x)=>{if(p===x||x==="t1"&&p==="tests")h.textContent="Working",h.style.color="#bb86fc";else if(d){let E=d.next_run-r;if(E<=0)h.textContent="Ready",h.style.color="#5eff5e";else{let S=Math.floor(E/60),T=E%60;h.textContent=`${S}m ${T}s`,h.style.color="#fff"}}a&&d&&(a.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${d.attempts||0}</span>
            <span style="color: ${d.failures>0?"#ffa500":"#666"}">Fails: ${d.failures||0}</span>
            <span style="color: ${d.absolute_failures>0?"#ff4d4d":"#666"}">Aborted: ${d.absolute_failures||0}</span>
          </div>
        `)};if(e&&f(e,document.getElementById("guardian-t1-stats"),v.t1,"t1"),o&&f(o,document.getElementById("guardian-t2-stats"),v.t2,"t2"),n&&v.system_idle_time!==void 0){let h=v.system_idle_time;n.textContent=c(h),h>300?n.style.color="#5eff5e":h>60?n.style.color="#ffa500":n.style.color="#fff"}s&&(s.textContent=c(v.total_idle_time||0)),i&&(i.textContent=c(v.total_active_time||0)),l&&(l.textContent=c(v.total_waste_time||0))}else[e,o,n,s,i,l].forEach(p=>{p&&(p.textContent="-",p.style.color="#666")});let m=await Wt(),y=[],g=[];m&&(Array.isArray(m)?y=m:(y=m.active||[],g=m.history||[]));let w=document.getElementById("vitals-processes-val");if(w)if(m){let r=y.length;w.textContent=r>0?`${r} Active`:"Idle",w.style.color=r>0?"#bb86fc":"#fff"}else w.textContent="-",w.style.color="#888";if(m===null){t.children.length===0&&(t.innerHTML=L("offline","Failed to load process status.","The event service may be offline."));return}pt=Date.now(),P(1,pt),y.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=L("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),gt(t,y,!1));let b=document.getElementById("processes-history-widgets");b&&(g.length===0?b.querySelector(".tab-placeholder")||(b.innerHTML=L("empty","No recent history.")):(b.querySelector(".tab-placeholder")&&(b.innerHTML=""),gt(b,g,!0))),ne(1,y.length)}function gt(t,e,o){function n(l){let u="";l.end_time?u=`${l.end_time-l.start_time}s`:u=`${Math.floor(Date.now()/1e3-l.start_time)}s`;let v=l.retries>0?`<span class="process-retry-badge">Retry ${l.retries}</span>`:"",m=l.channel_id,y={"system-discord":"Discord Engine","system-guardian":"Guardian Worker","system-cli-op":"CLI Operation"};y[m]?m=y[m]:/^\d+$/.test(m)&&(m=`Channel ${m}`);let g=o?"#888":"#fff",w=o?"border-left: 3px solid #666;":"";return`
                <div class="service-widget process-widget" data-channel-id="${l.channel_id}-${l.start_time}" style="${w}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${g}"></i>
                        <h3 style="color: ${g}">${m}</h3>
                        ${v}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${g}">${l.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${g}">${u}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${g}">${l.pid}</span>
                        </div>
                    </div>
                </div>`}let s=new Map(Array.from(t.querySelectorAll(".process-widget")).map(l=>[l.dataset.channelId,l])),i=new Set(e.map(l=>`${l.channel_id}-${l.start_time}`));for(let[l,u]of s)i.has(l)||u.remove();e.forEach(l=>{let u=`${l.channel_id}-${l.start_time}`,v=n(l),m=s.get(u);m?m.outerHTML!==v&&(m.outerHTML=v):t.insertAdjacentHTML("beforeend",v)})}function xe(){let t=se(),e=ze()||"master@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},n=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(z).map(s=>`
                    <div class="theme-card ${t===s?"active":""}" data-theme="${s}">
                        <div class="theme-preview theme-preview-${s.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${s.charAt(0).toUpperCase()+s.slice(1)}</h3>
                            <p>${s===z.DARK?"Simple, clean, dark.":s===z.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
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
                            <span class="settings-item-description">${o.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${o.enabled?"checked":""} ${o.supported?"":"disabled"}>
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
                            <input type="checkbox" id="analytics-toggle" ${n?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ke(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let i=this.dataset.theme;je(i),t.setContent(xe()),ke(t)})});let o=document.getElementById("notifications-toggle");o&&(o.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let n=document.getElementById("analytics-toggle");n&&(n.checked=localStorage.getItem("easter_analytics_enabled")!=="false",n.onclick=s=>{let i=s.target.checked;localStorage.setItem("easter_analytics_enabled",i),window.EASTER_ANALYTICS_ENABLED=i,window.EASTER_DEBUG_MODE=i})}var Kt="2.8.143",Ct=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1 & Tier 2).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1|2] [--force]
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
                <span>Interactive Demos (v${Kt})</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;for(let[o,n]of Object.entries(t)){let s=Ct.filter(i=>i.category===o);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${n.icon}' style="color: ${n.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${n.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(i=>`
                        <div class="cli-command-card ${i.dummy?"dummy":""}" data-cmd="${i.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${n.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${i.icon}' style="font-size: 2em; color: ${n.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${i.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${i.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${n.color}; position: relative; z-index: 1;">
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
    </div>`,e},Ie=!1;function Yt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>St(),document.getElementById("terminal-action-btn").onclick=()=>St());let o=document.getElementById("cli-terminal-body"),n=document.getElementById("cli-docs-pane");o.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return n.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${s.overview}</p>
        </div>
        ${s.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${s.details.map(i=>`<li>${i}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${s.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ie=!0,o}function St(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ie=!1}function $t(t,e,o="output"){if(!Ie)return;let n=document.createElement("div");n.className=`terminal-line terminal-${o}`,o==="prompt"?n.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:n.innerHTML=pe(e),t.appendChild(n),t.scrollTop=t.scrollHeight}async function Xt(t){let e=Ct.find(s=>s.id===t);if(!e)return;let o=Yt(e);$t(o,`dex ${t}`,"prompt");let n=e.demo_output||["Executing command...","\u2713 Done."];for(let s of n){await new Promise(l=>setTimeout(l,400+Math.random()*600));let i="output";s.includes("[ERROR]")?i="error":s.includes("[SUCCESS]")||s.includes("\u2713")?i="success":s.includes("!")&&(i="warning"),$t(o,s,i)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function Lt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Jt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let o=e.querySelector("code").textContent;navigator.clipboard.writeText(o).then(()=>{let n=e.querySelector("i");n.className="bx bx-check",n.style.color="#5eff5e",setTimeout(()=>{n.className="bx bx-copy",n.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(o=>{o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-5px)",o.style.borderColor="rgba(255,255,255,0.15)",o.style.backgroundColor="rgba(255,255,255,0.05)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)",o.style.borderColor="rgba(255,255,255,0.05)",o.style.backgroundColor="rgba(255,255,255,0.03)"}),o.addEventListener("click",()=>{let n=o.dataset.cmd;Xt(n)})})}async function Zt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Se()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable.")}}function Tt(){Zt(),Ge(),He();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&Lt();let e=Ue();Ne(e),Pe();let o=document.getElementById("nav-left-container");o&&o.addEventListener("click",()=>{if(i.length>0)g();else{let a=window.location.pathname;if(!(a==="/"||a==="/index.html")){let $=(a.endsWith("/")&&a.length>1?a.slice(0,-1):a).split("/");$.pop();let E=$.join("/")||"/";window.location.href=E}}});let n=window.location.pathname==="/"||window.location.pathname==="/index.html",s=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!n&&!s&&document.querySelector("footer")?.classList.add("hide");let i=[],l=document.getElementById("windows-container");l&&l.setAttribute("data-count","0");let u=a=>{localStorage.setItem("dex_last_window",a)};function v(){return 1}function m(){for(;i.length>1;)i.shift().close(!0);let a=document.getElementById("windows-container"),d=document.querySelector("nav"),x=document.querySelector("footer"),$=window.location.pathname==="/"||window.location.pathname==="/index.html",E=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");a&&a.setAttribute("data-count",i.length),i.forEach(A=>{let O=document.getElementById(A.id);O&&O.classList.remove("hide-close")}),re(se());let S=document.getElementById("dexter-menu-container"),T=document.getElementById("nav-window-switcher"),M=document.getElementById("settings-icon");if(Re(i.length>0),i.length>0){if(x?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),d?.classList.add("window-open"),a&&(a.style.paddingTop="60px"),S&&(S.style.display="none"),M&&(M.style.display="none"),T){let A=i[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(A)?(T.innerHTML=`
                      <div class="nav-switch-btn ${A==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${A==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${A==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${A==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${A==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{u("alerts-window"),y(w)}),document.getElementById("switch-events").addEventListener("click",()=>{u("events-window"),y(b)}),document.getElementById("switch-monitor").addEventListener("click",()=>{u("monitor-window"),y(p)}),document.getElementById("switch-contacts").addEventListener("click",()=>{u("contacts-window"),y(r)}),document.getElementById("switch-workspace").addEventListener("click",()=>{u("workspace-window"),y(c)})):T.innerHTML=""}}else d?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),a&&(a.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),$||E?x?.classList.remove("hide"):x?.classList.add("hide"),S&&(S.style.display="flex"),M&&(M.style.display="block"),T&&(T.innerHTML="");ie(Ve())}function y(a){if(a.isOpen()){a.close();return}for(;i.length>0;)i.pop().close(!0);i.push(a),a.open(),m()}function g(){[...i].forEach(d=>d.close()),i=[]}window.addEventListener("resize",m);let w=F({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Je(),onOpen:()=>W(),onClose:()=>{let a=i.indexOf(w);a>-1&&i.splice(a,1),m()}}),b=F({id:"events-window",title:"Events",icon:"bx-calendar-event",content:rt(),onOpen:()=>Y(),onClose:()=>{let a=i.indexOf(b);a>-1&&i.splice(a,1),m()}}),r=F({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:at(),onOpen:()=>Ce(),onClose:()=>{let a=i.indexOf(r);a>-1&&i.splice(a,1),m()}}),p=F({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:bt()},{icon:"bxs-component",title:"Processes",content:vt()},{icon:"bxs-brain",title:"Models",content:xt()},{icon:"bxs-hdd",title:"Hardware",content:yt()},{icon:"bxs-terminal",title:"Logs",content:ht()},{icon:"bxs-zap",title:"Agents",content:ft()}],onOpen:()=>{Le(),be(),Te(),le()},onClose:()=>{let a=i.indexOf(p);a>-1&&i.splice(a,1),m()}}),c=F({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:it(),onOpen:()=>$e(),onClose:()=>{let a=i.indexOf(c);a>-1&&i.splice(a,1),m()}}),f=F({id:"settings-window",title:"Settings",icon:"bx-cog",content:xe(),onOpen:()=>{f.setContent(xe()),ke(f)},onClose:()=>{let a=i.indexOf(f);a>-1&&i.splice(a,1),m()}}),h=F({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:a=>{b.isOpen()||y(b),setTimeout(()=>{let d=document.querySelector(`.event-item[data-event-id="${a}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)},viewAlert:a=>{w.isOpen()||y(w),setTimeout(()=>{let d=document.querySelector(`.event-item[data-alert-id="${a}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)}},e){let a=document.getElementById("dexter-dropdown");a&&(a.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let d=document.getElementById("dexter-menu-container"),x=document.getElementById("dexter-menu-btn");d&&a&&x&&(d.addEventListener("mouseenter",()=>{a.classList.add("active"),x.classList.add("active")}),d.addEventListener("mouseleave",()=>{a.classList.remove("active"),x.classList.remove("active")}),x.addEventListener("click",$=>{$.stopPropagation();let E=localStorage.getItem("dex_last_window")||"alerts-window",S=null;E==="alerts-window"?S=w:E==="events-window"?S=b:E==="monitor-window"?S=p:E==="contacts-window"?S=r:E==="workspace-window"&&(S=c),S&&y(S)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{u("alerts-window"),y(w)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{u("events-window"),y(b)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{u("monitor-window"),y(p)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{u("contacts-window"),y(r)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{u("workspace-window"),y(c)}),document.getElementById("settings-icon")?.addEventListener("click",()=>y(f)),document.getElementById("close-all-windows")?.addEventListener("click",()=>g()),setInterval(()=>{w.isOpen()?W():Ye(),b.isOpen()&&Y(),p.isOpen()&&wt(),c.isOpen()&&$e()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{h.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",a=>{a.preventDefault();try{qe(document.getElementById("email-input").value),window.location.reload()}catch(d){let x=document.getElementById("login-error");x&&(x.textContent=d.message,x.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt):Tt();})();
