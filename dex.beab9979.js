(()=>{function He(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ne(t=!1){let e=window.location.pathname,a=e==="/"||e==="/index.html",n=`
        <div class="nav-left" id="nav-left-wrapper" style="gap: 0;">
            ${`
        <div id="nav-left-container" style="display: flex; align-items: center; transition: transform 0.2s ease; gap: 5px; cursor: ${a?"default":"pointer"};">
            <i class='bx bx-chevron-left' id="nav-chevron" style="font-size: 28px; color: #fff; display: ${a?"none":"block"};"></i>
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
    `,r=document.createElement("nav");r.innerHTML=n,document.body.prepend(r)}function Re(t){let e=window.location.pathname,a=e==="/"||e==="/index.html",o=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!o||!s||(t||!a?(o.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{o.style.transform="translateX(-3px)"},s.onmouseleave=()=>{o.style.transform="translateX(0)"}):(o.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function Oe(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Pe=1e3;function F(t){let e=null,a=t.onClose||null,o=t.onOpen||null;function s(){e&&(e.style.zIndex=++Pe)}function n(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",r),o&&setTimeout(o,10);return}let g=document.getElementById("windows-container");g||(g=document.createElement("div"),g.id="windows-container",g.className="windows-container",document.body.appendChild(g)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++Pe,e.addEventListener("mousedown",s);let h=t.icon||"bx-window",f="",l="",u;t.tabs&&t.tabs.length>0?(f=`<div class="tab-bar">${t.tabs.map((w,i)=>{let d=w.icon?`<i class="bx ${w.icon}"></i>`:`<span class="tab-glyph">${w.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${i===0?"active":""}" data-tab-index="${i}">
                        ${d}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${i}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,u=`<div class="window-content">${t.tabs.map((w,i)=>`<div class="tab-content ${i===0?"active":""}" data-tab-content="${i}">${w.content}</div>`).join("")}</div>`):(t.title&&(l=`<div class="window-title">${t.title}</div>`),u=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${f}
                ${l}
                <i class="bx bx-x window-close"></i>
            </div>
            ${u}
        `,g.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",c=>{c.stopPropagation(),p()}),window.addEventListener("resize",r),t.tabs&&e.querySelectorAll(".tab").forEach(c=>{c.addEventListener("click",()=>{let v=c.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),c.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${v}"]`).classList.add("active"),b(c,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function r(){if(!e||!e.classList.contains("open"))return;let g=e.querySelector(".tab.active");g&&b(g,e)}function b(g,h){setTimeout(()=>{let f=h.querySelector(".tab-bar");if(!f)return;let l=Array.from(f.querySelectorAll(".tab")),u=l.indexOf(g),c=f.clientWidth,v=l[Math.max(0,u-2)],w=l[Math.min(l.length-1,u+2)],i=v.offsetLeft-f.offsetLeft-25,y=w.offsetLeft+w.offsetWidth-f.offsetLeft+25-i,S=y<=c?i-(c-y)/2:g.offsetLeft-f.offsetLeft-c/2+g.offsetWidth/2;f.scrollTo({left:S,behavior:"smooth"})},350)}function p(g=!1){e&&(window.removeEventListener("resize",r),g?(e.remove(),e=null):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e?.remove(),e=null},400)))}function m(g){let h=e?.querySelector(".window-content");h&&(h.innerHTML=g)}function x(){return e&&e.classList.contains("open")}return{open:n,close:p,setContent:m,isOpen:x,focus:s,id:t.id}}function Ue(){return!0}function ze(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function qe(t){localStorage.setItem("easter_user_email",t.trim())}var Fe="easter_theme",z={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function se(){return localStorage.getItem(Fe)||z.DARK}function je(t){if(!Object.values(z).includes(t))throw new Error("Invalid theme");localStorage.setItem(Fe,t),re(t)}function re(t){let e=document.body;if(Object.values(z).forEach(o=>{e.classList.remove(`theme-${o}`)}),e.classList.add(`theme-${t}`),[z.LIGHT,z.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function Ge(){let t=se();re(t)}function k(t,e,a=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",n=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${n}</div>`}function _(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function O(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let o=Date.now(),s=Math.floor((o-e)/1e3),n;s<60?n=`${s}s ago`:s<3600?n=`${Math.floor(s/60)}m ago`:n=`${Math.floor(s/3600)}h ago`,a.textContent=`Last updated: ${n}`}var We=0;function Ve(){return We}function ne(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let o=a.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function ie(t){We=t;let e=document.getElementById("dexter-nav-badge");e&&(t>0?e.style.display="flex":e.style.display="none");let a=document.getElementById("alerts-menu-item");if(a){let s=a.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="auto",a.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}let o=document.getElementById("switch-alerts");if(o){let s=o.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="8px",o.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}}function me(){let t=document.getElementById("alerts-list");if(!t)return;let e=t.querySelectorAll(".alert-unread:not(.priority-low)").length;ie(e)}function Se(){return"https://event.easter.company"}function It(){return"https://discord.easter.company"}var At="http://127.0.0.1:8100",_t="http://127.0.0.1:8300",Mt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function pe(t){let e=_(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,n)=>{let r=Mt[n];return r?`<span class="${r}">`:""});let a=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return a>o&&(e+="</span>".repeat(a-o)),e}function ae(t){if(!t)return"";let e=_(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(a,o)=>{let s=o.split("|").map(n=>n.trim());return s.every(n=>n.match(/^:?-+:?$/))?"":`<div class="md-table-row">${s.map(n=>`<span class="md-table-cell">${n}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var X=null,Z=null,ce=!1,de=!1;async function I(t,e={}){if(X)try{let s=await fetch(X+t,e);if(s.ok)return s;X=null}catch{X=null}let a=Se(),o=At;try{let s=await fetch(a+t,e);if(s.ok)return X=a,ce&&(console.log("\u2728 Production event service restored."),ce=!1),s;throw new Error("Primary failed")}catch{ce||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${o}`),ce=!0);try{let n=await fetch(o+t,e);if(n.ok)return X=o,n;throw new Error("Fallback failed")}catch(n){throw n}}}async function Ke(t,e={}){if(Z)try{let s=await fetch(Z+t,e);if(s.ok)return s;Z=null}catch{Z=null}let a=It(),o=_t;try{let s=await fetch(a+t,e);if(s.ok)return Z=a,de&&(console.log("\u2728 Production discord service restored."),de=!1),s;throw new Error("Primary failed")}catch{de||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${o}`),de=!0);try{let n=await fetch(o+t,e);if(n.ok)return Z=o,n;throw new Error("Fallback failed")}catch(n){throw n}}}var Je=()=>`
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
`,ue=null,G=new Set,ge=[];async function W(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Bt(),t&&(e.innerHTML="<p>Updating...</p>");let a="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await I(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let n=(await o.json()).events||[];ue=Date.now(),O(0,ue);let r=Date.now(),b=24*60*60*1e3,p=n.filter(i=>{let d=localStorage.getItem(`alert_read_ts_${i.id}`);if(!d)return!0;let y=parseInt(d);return r-y<b});p.sort((i,d)=>{let y=C=>{let M=C.event;if(typeof M=="string")try{M=JSON.parse(M)}catch{return"low"}return(M.priority||"low").toLowerCase()},S=C=>C==="critical"?4:C==="high"?3:C==="medium"?2:1,E=S(y(i)),$=S(y(d));return E!==$?$-E:d.timestamp-i.timestamp}),ge=p;let m=i=>{let d=i.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return"low"}return(d.priority||"low").toLowerCase()},x=[],h=new Set(p.map(i=>m(i))).size>1;if(p.length>0){let i=null;p.forEach(d=>{let y=m(d);h&&y!==i&&(x.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),i=y),x.push(d)})}if(t&&(e.innerHTML=""),p.length===0){e.innerHTML=k("empty","No alerts yet."),me();return}let f=i=>{let d=i.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return null}let y=d.title||"Untitled Alert",S=d.body||"No description provided.",E=d.priority||"low",$=!!d.alert,C=d.category||"system",M=d.related_event_ids||[],A=d.audit_event_id,D=!!localStorage.getItem(`alert_read_ts_${i.id}`),N=new Date(i.timestamp*1e3),R=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),L=D?"event-border-grey":"event-border-blue";!D&&$&&(L="event-border-red"),D&&(E==="high"||E==="critical")?L="event-border-red":D&&E==="medium"&&(L="event-border-orange");let H=D?"alert-read":"alert-unread",B=G.has(i.id),ye=B?"expanded":"",he=B?"display: block;":"display: none;",Ae="",_e="";M.length>0&&(_e=`
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

`+S)}</div>
                </div>
            `;let U=document.createElement("div");U.className=`event-item notification-item ${L} ${H} ${ye} cursor-pointer priority-${E}`,U.dataset.alertId=i.id,U.onclick=function(q){if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(i.id);let te=this.querySelector(".event-details");te&&(te.style.display="none")}else{this.classList.add("expanded"),G.add(i.id);let te=this.querySelector(".event-details");if(te&&(te.style.display="block"),!localStorage.getItem(`alert_read_ts_${i.id}`)){localStorage.setItem(`alert_read_ts_${i.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ee="event-border-grey";E==="high"||E==="critical"?Ee="event-border-red":E==="medium"&&(Ee="event-border-orange"),this.classList.add(Ee),me()}}};let Qt=y,kt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[C]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${R}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-icon"><i class='bx ${kt}'></i></div>
                <div class="event-content">
                    <div class="event-service">${C.toUpperCase()} ${$?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${he}">
                        ${Ae}
                    </div>
                </div>
            `;let Be=U.querySelector(".event-details");Be&&Be.addEventListener("click",q=>{q.stopPropagation()});let De=U.querySelector(".close-details-btn");return De&&De.addEventListener("click",q=>{q.stopPropagation(),U.classList.remove("expanded");let we=U.querySelector(".event-details");we&&(we.style.display="none"),G.delete(i.id)}),U},l=i=>{let d=document.createElement("div");d.className="notification-divider",d.dataset.alertId=i.id;let y="#888888";return i.label==="CRITICAL"?y="#ff4d4d":i.label==="HIGH"?y="#ff8888":i.label==="MEDIUM"&&(y="#ffa500"),d.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,d.innerHTML=`<span style="white-space: nowrap;">${i.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,d},u=Array.from(e.children),c=new Map(u.map(i=>[i.dataset.alertId,i])),v=new Set(x.map(i=>i.id));u.forEach(i=>{let d=i.dataset.alertId;(!d||!v.has(d))&&i.remove()});let w=null;x.forEach((i,d)=>{let y=c.get(i.id);(!y||t)&&(y&&y.remove(),i.type==="divider"?y=l(i):y=f(i),!y)||(d===0?e.firstElementChild!==y&&e.prepend(y):w&&w.nextElementSibling!==y&&w.after(y),w=y)}),ue=Date.now(),O(0,ue),me()}catch(o){console.error("Error fetching alerts:",o),e.children.length===0&&(e.innerHTML=k("offline","Failed to load alerts.","The event service may be offline."))}}function Bt(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),a=document.getElementById("alerts-close-all"),o=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ge.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),W(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ge.forEach(s=>{G.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),W(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{G.clear(),W(!0)},a.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){o.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await I("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;ge.forEach(n=>{localStorage.setItem(`alert_read_ts_${n.id}`,s.toString())}),G.clear(),W(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{o.innerHTML="<i class='bx bx-trash'></i> Clear"}}},o.dataset.listenerAttached="true")}async function Ye(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await I(t);if(!e.ok)return;let o=(await e.json()).events||[],s=0;o.forEach(n=>{let r=n.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{r={}}if((r.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${n.id}`)||s++}),ie(s)}catch{}}var Xe=()=>`
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
`,V=new Set,Qe=[],Q=null;async function K(t=!1){let e=document.getElementById("roadmap-list");if(e){Dt();try{let a=await I("/roadmap");if(!a.ok)throw new Error("Offline");let o=await a.json();if(Qe=o,o.length===0){e.innerHTML=k("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let s=m=>{let x=V.has(m.id),g=m.state==="draft",h=m.state==="published",f=m.state==="consumed",l="event-border-grey";h&&(l="event-border-blue"),f&&(l="event-border-purple");let c=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),v=document.createElement("div");v.className=`event-item notification-item ${l} cursor-pointer ${x?"expanded":""}`,v.dataset.itemId=m.id,v.onclick=d=>{if(d.target.closest("button"))return;v.classList.contains("expanded")?(v.classList.remove("expanded"),v.querySelector(".event-details").style.display="none",V.delete(m.id)):(v.classList.add("expanded"),v.querySelector(".event-details").style.display="block",V.add(m.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;v.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${c.split(",")[1]}</span>
          <span class="event-date">${c.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${_(m.content)}</div>
          <div class="event-details" style="${x?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${f?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${h?"bx-pause":"bx-rocket"}'></i> ${h?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${f?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(m.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let i=v.querySelector(".event-details");return i&&i.addEventListener("click",d=>{d.stopPropagation()}),v.querySelector(".edit-btn")?.addEventListener("click",()=>Ht(m)),v.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Nt(m)),v.querySelector(".delete-btn")?.addEventListener("click",()=>Rt(m.id)),v.querySelector(".close-details-btn")?.addEventListener("click",d=>{d.stopPropagation(),v.classList.remove("expanded"),v.querySelector(".event-details").style.display="none",V.delete(m.id)}),v},n=Array.from(e.children),r=new Map(n.map(m=>[m.dataset.itemId,m])),b=new Set(o.map(m=>m.id));n.forEach(m=>{let x=m.dataset.itemId;(!x||!b.has(x))&&m.remove()});let p=null;o.forEach((m,x)=>{let g=r.get(m.id);(!g||t)&&(g&&g.remove(),g=s(m),!g)||(x===0?e.firstElementChild!==g&&e.prepend(g):p&&p.nextElementSibling!==g&&p.after(g),p=g)})}catch{e.children.length===0&&(e.innerHTML=k("offline","Failed to load roadmap.","The event service may be offline."))}}}function Dt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Q=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",Q=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let n=document.getElementById("roadmap-editor-input").value;if(!n.trim())return;let r=Q?`/roadmap/${Q}`:"/roadmap",b=Q?"PATCH":"POST";try{await I(r,{method:b,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:n})}),document.getElementById("roadmap-editor-container").style.display="none",K(!0)}catch(p){console.error(p)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{Qe.forEach(n=>V.add(n.id)),K(!0)},o.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{V.clear(),K(!0)},s.dataset.listenerAttached="true")}function Ht(t){Q=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Nt(t){let e=t.state==="published"?"draft":"published";try{await I(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),K(!0)}catch(a){console.error(a)}}async function Rt(t){if(confirm("Delete this roadmap item?"))try{await I(`/roadmap/${t}`,{method:"DELETE"}),V.delete(t),K(!0)}catch(e){console.error(e)}}var tt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,st=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,et=null,ee=new Set,nt=[];async function fe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Ot();let a="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await I(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let n=(await o.json()).events||[];if(nt=n,et=Date.now(),O(2,et),n.length===0){e.innerHTML=k("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),ne(2,0);return}t&&(e.innerHTML="");let r=g=>{let h=g.event;if(typeof h=="string")try{h=JSON.parse(h)}catch{return null}let f=h.title||"Untitled Blueprint",l=h.summary||h.body||"No summary provided.",u=h.content||"",c=h.category||"architecture",v=h.affected_services||[],w=h.implementation_path||[],i=new Date(g.timestamp*1e3),d=i.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),y=i.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=ee.has(g.id),E=S?"display: block;":"display: none;",$=document.createElement("div");$.className=`event-item notification-item event-border-purple cursor-pointer ${S?"expanded":""}`,$.dataset.blueprintId=g.id;let M={architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[c]||"bx-paint";$.onclick=function(R){if(this.classList.contains("expanded")){this.classList.remove("expanded"),ee.delete(g.id);let L=this.querySelector(".event-details");L&&(L.style.display="none")}else{this.classList.add("expanded"),ee.add(g.id);let L=this.querySelector(".event-details");L&&(L.style.display="block")}};let A=v.length>0?`<div class="event-detail-row"><span class="detail-label">Related Services:</span> <span class="detail-value">${v.join(", ")}</span></div>`:"",P="";w.length>0&&(P=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(R=>`<li>${_(R)}</li>`).join("")}
                        </ul>
                    </div>
                `),$.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${d}</span>
                    <span class="event-date">${y}</span>
                </div>
                <div class="event-icon"><i class='bx ${M}'></i></div>
                <div class="event-content">
                    <div class="event-service">${c.toUpperCase()}</div>
                    <div class="event-message">${f}</div>
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; color: #fff;">
                            ${_(l)}
                        </div>
                        ${A}
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${_(u)}</div>
                        </div>
                        ${P}
                    </div>
                </div>
            `;let D=$.querySelector(".event-details");D&&D.addEventListener("click",R=>{R.stopPropagation()});let N=$.querySelector(".close-details-btn");return N&&N.addEventListener("click",R=>{R.stopPropagation(),$.classList.remove("expanded");let T=$.querySelector(".event-details");T&&(T.style.display="none"),ee.delete(g.id)}),$},b=Array.from(e.children),p=new Map(b.map(g=>[g.dataset.blueprintId,g])),m=new Set(n.map(g=>g.id));b.forEach(g=>{let h=g.dataset.blueprintId;(!h||!m.has(h))&&g.remove()});let x=null;n.forEach((g,h)=>{let f=p.get(g.id);(!f||t)&&(f&&f.remove(),f=r(g),!f)||(h===0?e.firstElementChild!==f&&e.prepend(f):x&&x.nextElementSibling!==f&&x.after(f),x=f)}),ne(2,n.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=k("offline","Failed to load blueprints.","The event service may be offline."))}}function Ot(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{nt.forEach(a=>ee.add(a.id)),fe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ee.clear(),fe(!0)},e.dataset.listenerAttached="true")}var it=()=>`
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
`,Pt=null;async function Te(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>Te(),e.dataset.listenerAttached="true");try{let a=await Ke("/contacts");if(!a.ok)throw new Error("Service unreachable");let s=(await a.json()).members||[];if(Pt=Date.now(),s.length===0){t.innerHTML=k("empty","No contacts found.","Check your Discord connection.");return}let n={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((r,b)=>{let p=n[r.level]??10,m=n[b.level]??10;return p!==m?p-m:r.username.localeCompare(b.username)}),t.innerHTML=s.map(r=>{let b=r.color?"#"+r.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",p=r.status==="online"?"#5eff5e":r.status==="idle"?"#ffa500":r.status==="dnd"?"#ff4d4d":"#666",m="#888";r.level==="Me"||r.level==="Master"?m="#bb86fc":r.level==="Admin"?m="#cf6679":r.level==="Moderator"?m="#03dac6":r.level==="Contributor"&&(m="#ffa500");let x=r.level==="Me",g=x?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",h=x?"2px solid #bb86fc":`1px solid ${b}33`;return`
                <div class="user-profile-section" style="background: ${g}; padding: 15px; border-radius: 8px; border: ${h}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${x?"#bb86fc":b}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${r.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${x?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${p}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${r.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${m}; font-weight: 600; text-transform: uppercase;">${x?"DEXTER (ME)":r.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${r.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=k("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Ut={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Guardian Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function ot(t,e){let a=Ut[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Guardian Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!a)return t;let o=a.replace(/\{(\w+)\}/g,(s,n)=>e[n]!==void 0&&e[n]!==null?e[n]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var rt=()=>`
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
`,ve=null,J=new Set,oe=[],j="all",zt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},qt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function lt(t){for(let[e,a]of Object.entries(zt))if(a.includes(t))return e;return"system"}function Ft(t){return qt[t]||"bx-square-rounded"}async function Y(t=!1){let e=document.getElementById("events-timeline");if(!e)return;jt();let o=`/events?ml=${j==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let s=await I(o);if(!s.ok)throw new Error("Service is offline or unreachable.");let r=(await s.json()).events||[],b=r;if(j!=="all"&&(b=r.filter(f=>{let l=f.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{return!1}return lt(l.type)===j})),oe=b.slice(0,50),ve=Date.now(),O(1,ve),oe.length===0){e.innerHTML=k("empty","No events found for this filter.");return}t&&(e.innerHTML="");let p=f=>{let l=f.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{return null}let u=l.type,c=lt(u),v=Ft(u),w=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted"||u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="system.cli.command"||u==="system.analysis.audit"||u==="system.test.completed"||u==="error_occurred"||u==="system.cli.status"||u==="system.attention.expired"||u.startsWith("system.roadmap")||u.startsWith("system.process"),i="event-border-grey";w&&(u==="moderation.explicit_content.deleted"||u==="error_occurred"?i="event-border-red":u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="system.analysis.audit"?i="event-border-purple":u==="system.attention.expired"||u==="system.cli.command"||u==="system.cli.status"?i="event-border-orange":u==="system.test.completed"?i=l.test?.status==="OK"&&l.lint?.status==="OK"&&l.format?.status==="OK"?"event-border-blue":"event-border-red":i="event-border-blue");let d=w?"cursor-pointer":"",y=J.has(f.id),S=y?"expanded":"",E=y?"display: block;":"display: none;",$=new Date(f.timestamp*1e3),C=$.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),M=$.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=ot(u,l),P=l.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${l.user_level})</span>`:"",D="";if(w){let T="";if(u==="engagement.decision")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${l.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${l.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${l.engagement_raw||"None"}</pre>
                        </div>
                    `;else if(u==="system.attention.expired"){let L=l.timestamp-l.last_active,H=Math.floor(L/60);T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value" style="color: #bb86fc;">${l.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${H} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context (Last Input):</span>
                            <div class="detail-pre">${ae(l.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Thought Process (Last Output):</span>
                            <div class="detail-pre">${ae(l.last_output||"None")}</div>
                        </div>
                    `}else if(u==="messaging.bot.sent_message")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${l.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${l.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${l.response_raw||"None"}</pre>
                        </div>
                    `;else if(u==="moderation.explicit_content.deleted")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${l.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${l.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${_(l.raw_output)||"None"}</pre>
                        </div>
                    `;else if(u==="analysis.link.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${l.url}" target="_blank" class="attachment-link">${l.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${_(l.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${_(l.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${_(l.summary)||"None"}</pre>
                        </div>
                    `;else if(u==="analysis.visual.completed"){let L="";l.base64_preview?L=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${l.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:l.url&&(L=`<div class="event-detail-block"><img src="${l.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${l.filename}</span>
                        </div>
                        ${L}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${_(l.description)||"None"}</pre>
                        </div>
                    `}else if(u==="system.cli.command")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${l.command||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${l.args||"None"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${l.status||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${l.duration||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${l.exit_code!==void 0?l.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${_(l.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(u==="system.analysis.audit"){let L=l.success?"#03dac6":"#ff4d4d",H=l.success?"SUCCESS":"FAILED",B="";l.error&&(B=`
                            <div class="event-detail-block">
                                <span class="detail-label" style="color: #ff4d4d;">Error:</span>
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${_(l.error)}</pre>
                            </div>
                        `),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Agent:</span>
                            <span class="detail-value">${l.agent_name||"Guardian"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value" style="color: #bb86fc;">${l.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value" style="color: ${L}; font-weight: bold;">${H} (${l.attempts} attempts)</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${l.duration}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${l.model}</span>
                        </div>
                        ${B}
                        <div class="event-detail-block">
                            <span class="detail-label">System Prompt:</span>
                            <pre class="detail-pre" style="max-height: 150px; overflow-y: auto;">${_(l.system_prompt)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Input Context:</span>
                            <pre class="detail-pre" style="max-height: 200px; overflow-y: auto;">${_(l.input_context)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${_(l.raw_output||"(empty)")}</pre>
                        </div>
                    `}else if(u==="system.test.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${l.service_name}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${l.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Format:</span>
                            <pre class="detail-pre">${l.format?.status||"N/A"}: ${l.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Lint:</span>
                            <pre class="detail-pre">${l.lint?.status||"N/A"}: ${l.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Tests:</span>
                            <pre class="detail-pre">${l.test?.status||"N/A"}: ${l.test?.details||l.test?.message||"OK"}</pre>
                        </div>
                    `;else if(u==="error_occurred")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${l.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${_(l.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(l.context||{},null,2)}</pre>
                        </div>
                    `;else if(u==="system.cli.status")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${l.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${_(l.message)}</pre>
                        </div>
                    `;else if(u==="messaging.user.sent_message"){let L="";l.attachments&&l.attachments.length>0&&(L=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${l.attachments.map(B=>{let ye=B.content_type&&B.content_type.startsWith("image/"),he=(B.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${ye?`<div class="attachment-thumb-container"><img src="${B.url}" alt="${B.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${B.url}" target="_blank" class="attachment-link">${B.filename}</a>
                                        <span class="attachment-meta">${B.content_type} \u2022 ${he}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${l.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${l.content||"(empty)"}</pre>
                        </div>
                        ${L}
                    `}D=`
                    <div class="event-details" style="${E}">
                        ${T}
                    </div>
                `}let N=document.createElement("div");N.className=`event-item ${i} ${d} ${S}`,N.dataset.eventId=f.id,N.onclick=function(T){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(f.id);let H=this.querySelector(".event-details");H&&(H.style.display="none")}else{this.classList.add("expanded"),J.add(f.id);let H=this.querySelector(".event-details");H&&(H.style.display="block")}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${C}</span>
                    <span class="event-date">${M}</span>
                </div>
                <div class="event-icon"><i class='bx ${v}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${c}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${c}</span>
                        ${f.service} ${P}
                    </div>
                    <div class="event-message">${A}</div>
                    ${D}
                </div>
            `;let R=N.querySelector(".event-details");if(R&&R.addEventListener("click",T=>{T.stopPropagation()}),w){let T=N.querySelector(".close-details-btn");T&&T.addEventListener("click",L=>{L.stopPropagation();let H=L.target.closest(".event-item");if(H){H.classList.remove("expanded"),J.delete(f.id);let B=H.querySelector(".event-details");B&&(B.style.display="none")}})}return N},m=Array.from(e.children),x=new Map(m.map(f=>[f.dataset.eventId,f])),g=new Set(oe.map(f=>f.id));m.forEach(f=>{let l=f.dataset.eventId;(!l||!g.has(l))&&f.remove()});let h=null;oe.forEach((f,l)=>{let u=x.get(f.id);(!u||t)&&(u&&u.remove(),u=p(f),!u)||(l===0?e.firstElementChild!==u&&e.prepend(u):h&&h.nextElementSibling!==u&&h.after(u),h=u)}),ve=Date.now(),O(1,ve)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=k("offline","Failed to load events.","The event service may be offline."))}}function jt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),a=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{oe.forEach(s=>J.add(s.id)),Y(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),Y(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{a.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),s.classList.add("active"),j=s.dataset.filter,Y(!0)}}),a.dataset.listenerAttached="true");let o=document.getElementById("events-clear");o&&!o.dataset.listenerAttached&&(o.onclick=async()=>{let s=j==="all"?"ALL":j.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){o.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let n="/events";if(j!=="all"&&(n+=`?category=${j}`),!(await I(n,{method:"DELETE"})).ok)throw new Error("Failed to delete events");J.clear(),Y(!0)}catch(n){console.error("Failed to clear events:",n),alert("Failed to clear events. Check console.")}finally{o.innerHTML="<i class='bx bx-trash'></i> Clear"}}},o.dataset.listenerAttached="true")}function ct(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Gt=null;async function le(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await I("/logs");if(!e.ok)throw new Error("Logs offline");let a=await e.json();if(!a||a.length===0)return t.innerHTML=k("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let o=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=a.filter(r=>!o.includes(r.id));s.forEach(r=>{r.logs&&Array.isArray(r.logs)?r.logs.reverse():r.logs=[]}),s.reverse();let n=s.map(r=>{let b=r.logs.join(`
`),p=[...r.logs];if(p.length<25){let x=25-p.length;for(let g=0;g<x;g++)p.push("")}else p.length>25&&(p=p.slice(-25));let m=p.map(x=>pe(x)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${r.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(b)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${r.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${m}</pre>
                </div>
            `}).join("");return t.innerHTML=n,document.querySelectorAll(".copy-logs-btn").forEach(r=>{r.addEventListener("click",()=>{let b=unescape(r.dataset.logs);navigator.clipboard.writeText(b).then(()=>{let p=r.querySelector("i");p.classList.remove("bx-copy"),p.classList.add("bx-check"),setTimeout(()=>{p.classList.remove("bx-check"),p.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(r=>{r.addEventListener("click",async()=>{let b=r.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${b}?`))try{(await I(`/logs?service_id=${b}`,{method:"DELETE"})).ok&&le()}catch(p){console.error("Error clearing logs:",p)}})}),Gt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=k("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var ft=()=>`
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
        </div>`;async function wt(){await Promise.all([be(),Ce(),Le()]),await le()}var dt=null,mt=null,pt=null;async function Et(){try{return await(await I("/system_monitor")).json()}catch{return null}}async function ut(){try{return await(await I("/system/hardware")).json()}catch{return null}}async function Wt(){try{return await(await I("/processes")).json()}catch{return null}}async function Vt(){try{return await(await I("/agent/status")).json()}catch{return null}}async function Ce(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),a=document.querySelector("#hw-cpu .hw-content"),o=document.querySelector("#hw-ram .hw-content"),s=document.querySelector("#hw-gpu .hw-content"),n=document.querySelector("#hw-storage .hw-content"),r=c=>{if(c){if(o){let v=(c.MEMORY_BYTES/1073741824).toFixed(1);o.innerHTML=`
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
                </div>`}s&&(c.GPU&&c.GPU.length>0?s.innerHTML=c.GPU.map(v=>{let w=(v.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${v.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):s.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),n&&c.STORAGE&&c.STORAGE.length>0?n.innerHTML=c.STORAGE.map(v=>{let w=(v.USED/1073741824).toFixed(1),i=(v.SIZE/(1024*1024*1024)).toFixed(1),d=v.SIZE>0?(v.USED/v.SIZE*100).toFixed(0):0,y=v.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${v.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${y}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${w} GB Used</span>
                            <span>${i} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${d>90?"#cf6679":"#03dac6"}; width: ${d}%; height: 100%; box-shadow: 0 0 10px ${d>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):n&&(n.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let c=await ut();c?(r(c),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},e.dataset.listenerAttached="true"),a&&!a.hasChildNodes())){let c=await ut();r(c)}if(!t)return;let b=await Et();if(!b||!b.services){t.children.length===0&&(t.innerHTML=k("offline","Failed to load system metrics.","The event service may be offline."));return}dt=Date.now(),O(0,dt);let p=b.services||[];Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function m(c){return!c||c==="N/A"||c==="unknown"||c.trim()===""?"-":c}function x(c){if(!c||c==="N/A"||c==="unknown")return"-";let v=c.match(/^(\d+\.\d+\.\d+)/);return v?v[0]:c.split(".").slice(0,3).join(".")||"-"}function g(c){return!c||c.length<=28?c:c.substring(0,28)+"..."}function h(c){if(!c||c==="N/A"||c==="unknown")return"-";let v=c.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!v)return"-";let w=parseInt(v[1])||0,i=parseInt(v[2])||0,d=parseInt(v[3])||0,y=parseFloat(v[4])||0,S=w*86400+i*3600+d*60+y,E=Math.floor(S/86400);if(E>0)return`${E}d`;let $=Math.floor(S/3600);if($>0)return`${$}h`;let C=Math.floor(S/60);return C>0?`${C}m`:`${Math.floor(S)}s`}function f(c){let v=c.status==="online",w=v?"service-widget-online":"service-widget-offline",i=v?"bx-check-circle":"bx-x-circle",d=v?"OK":"BAD",y=c.version?x(c.version.str):"-",S=c.cpu&&c.cpu!=="N/A"?c.cpu:"-",E=c.memory&&c.memory!=="N/A"?c.memory:"-",$=S!=="-"?"#00ff00":"#666",C=S!=="-"?"#fff":"#666",M=E!=="-"?"#00ff00":"#666",A=E!=="-"?"#fff":"#666",P=h(c.uptime),D="";return v?D=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${y}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${P}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${$};"></i>
                        <span style="color: ${C};">${S}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${M};"></i>
                        <span style="color: ${A};">${E}</span>
                    </div>
                </div>`:D='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${w}" data-service-id="${c.id}"><div class="service-widget-header"><i class="bx ${i}"></i><h3>${c.short_name||c.id}</h3><span class="service-widget-status">${d}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${g(c.domain&&c.port?`${c.domain}:${c.port}`:"")}</span></div>${D}</div></div>`}let l=new Map(Array.from(t.querySelectorAll(".service-widget")).map(c=>[c.dataset.serviceId,c])),u=new Set(p.map(c=>c.id));for(let[c,v]of l)u.has(c)||v.remove();p.forEach(c=>{let v=f(c),w=l.get(c.id);w?w.outerHTML!==v&&(w.outerHTML=v):t.insertAdjacentHTML("beforeend",v)})}async function Le(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Et();if(!e){t.children.length===0&&(t.innerHTML=k("offline","Failed to load model status.","The event service may be offline."));return}mt=Date.now(),O(2,mt);let a=e.models||[],o=e.whisper;Array.from(t.children).forEach(p=>{p.classList.contains("service-widget")||p.remove()});function s(p){let m=p.status==="Ready";return`
                <div class="service-widget ${m?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${m?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${p.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function n(p){let m=p.status==="Ready";return`
                <div class="service-widget ${m?"service-widget-online":"service-widget-offline"}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx bx-volume-full"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${m?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${p.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">XTTS-v2 (Voice)</span>
                        </div>
                    </div>
                </div>`}function r(p){let m=p.status==="Downloaded",x=m?"service-widget-online":"service-widget-offline",g=m?"OK":"MISSING",h=m&&p.size>0?`${(p.size/1e9).toFixed(2)} GB`:"-",f=p.name;return p.type==="custom"&&f.endsWith(":latest")&&(f=f.replace(":latest","")),`<div class="service-widget ${x}" data-model-name="${p.name}"><div class="service-widget-header"><i class="bx ${m?"bx-check-circle":"bx-x-circle"}"></i><h3>${f}</h3><span class="service-widget-status">${g}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${p.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${h}</span></div></div></div>`}let b="";if(o&&(b+=s(o)),e.xtts&&(b+=n(e.xtts)),b+=a.map(r).join(""),!b){t.innerHTML=k("empty","No models found.");return}t.innerHTML!==b&&(t.innerHTML=b)}async function be(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("guardian-t1-val"),a=document.getElementById("guardian-t2-val"),o=document.getElementById("guardian-idle-val"),s=document.getElementById("guardian-total-idle"),n=document.getElementById("guardian-total-active"),r=document.getElementById("guardian-total-waste"),b=document.getElementById("guardian-reset-btn");b&&!b.dataset.listenerAttached&&(b.onclick=async()=>{b.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await I("/guardian/reset?tier=all",{method:"POST"}),setTimeout(()=>{b.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{b.innerHTML="<i class='bx bx-refresh'></i> Reset"},2e3)},500),be()}catch{b.innerHTML="<i class='bx bx-error'></i> Failed"}},b.dataset.listenerAttached="true");let p=await Vt();if(p){let l=Math.floor(Date.now()/1e3),u=p.active_tier,c=d=>{d<0&&(d=0);let y=Math.floor(d/3600),S=Math.floor(d%3600/60),E=d%60;return y>0?`${y}h ${S}m`:S>0?`${S}m ${E}s`:`${E}s`},v=(d,y,S,E)=>{if(u===E)d.textContent="Working",d.style.color="#bb86fc";else if(E==="t1"&&u==="tests")d.textContent="Testing",d.style.color="#03dac6";else if(S){let C=S.next_run-l;if(C<=0)d.textContent="Ready",d.style.color="#5eff5e";else{let M=Math.floor(C/60),A=C%60;d.textContent=`${M}m ${A}s`,d.style.color="#fff"}}y&&S&&(y.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${S.attempts||0}</span>
            <span style="color: ${S.failures>0?"#ffa500":"#666"}">Fails: ${S.failures||0}</span>
            <span style="color: ${S.absolute_failures>0?"#ff4d4d":"#666"}">Aborted: ${S.absolute_failures||0}</span>
          </div>
        `)};e&&v(e,document.getElementById("guardian-t1-stats"),p.t1,"t1"),a&&v(a,document.getElementById("guardian-t2-stats"),p.t2,"t2");let w=document.getElementById("system-state-label"),i=document.getElementById("system-state-val");if(i&&p.system_state){let d=p.system_state,y=c(p.system_state_time||0);w&&(w.textContent=`State: ${d.toUpperCase()}`),i.textContent=y,d==="idle"?i.style.color=p.system_state_time>300?"#5eff5e":"#fff":i.style.color="#bb86fc"}s&&(s.textContent=c(p.total_idle_time||0)),n&&(n.textContent=c(p.total_active_time||0)),r&&(r.textContent=c(p.total_waste_time||0))}else[e,a,o,s,n,r].forEach(u=>{u&&(u.textContent="-",u.style.color="#666")});let m=await Wt(),x=[],g=[];m&&(Array.isArray(m)?x=m:(x=m.active||[],g=m.history||[]));let h=document.getElementById("vitals-processes-val");if(h)if(m){let l=x.length;h.textContent=l>0?`${l} Active`:"Idle",h.style.color=l>0?"#bb86fc":"#fff"}else h.textContent="-",h.style.color="#888";if(m===null){t.children.length===0&&(t.innerHTML=k("offline","Failed to load process status.","The event service may be offline."));return}pt=Date.now(),O(1,pt),x.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=k("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),gt(t,x,!1));let f=document.getElementById("processes-history-widgets");f&&(g.length===0?f.querySelector(".tab-placeholder")||(f.innerHTML=k("empty","No recent history.")):(f.querySelector(".tab-placeholder")&&(f.innerHTML=""),gt(f,g,!0))),ne(1,x.length)}function gt(t,e,a){function o(r){let b="";r.end_time?b=`${r.end_time-r.start_time}s`:b=`${Math.floor(Date.now()/1e3-r.start_time)}s`;let p=r.retries>0?`<span class="process-retry-badge">Retry ${r.retries}</span>`:"",m=r.channel_id,x={"system-guardian":"Guardian Worker","system-cli-op":"CLI Operation"};x[m]?m=x[m]:/^\d+$/.test(m)&&(m=`Channel ${m}`);let g=a?"#888":"#fff",h=a?"border-left: 3px solid #666;":"";return`
                <div class="service-widget process-widget" data-channel-id="${r.channel_id}-${r.start_time}" style="${h}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${g}"></i>
                        <h3 style="color: ${g}">${m}</h3>
                        ${p}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${g}">${r.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${g}">${b}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${g}">${r.pid}</span>
                        </div>
                    </div>
                </div>`}let s=new Map(Array.from(t.querySelectorAll(".process-widget")).map(r=>[r.dataset.channelId,r])),n=new Set(e.map(r=>`${r.channel_id}-${r.start_time}`));for(let[r,b]of s)n.has(r)||b.remove();e.forEach(r=>{let b=`${r.channel_id}-${r.start_time}`,p=o(r),m=s.get(b);if(m){if(m.outerHTML!==p){m.outerHTML=p;let x=t.querySelector(`[data-channel-id="${b}"]`);x&&s.set(b,x)}}else{t.insertAdjacentHTML("beforeend",p);let x=t.querySelector(`[data-channel-id="${b}"]`);x&&s.set(b,x)}})}function xe(){let t=se(),e=ze()||"master@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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
                            <input type="checkbox" id="analytics-toggle" ${o?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ke(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let n=this.dataset.theme;je(n),t.setContent(xe()),ke(t)})});let a=document.getElementById("notifications-toggle");a&&(a.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=s=>{let n=s.target.checked;localStorage.setItem("easter_analytics_enabled",n),window.EASTER_ANALYTICS_ENABLED=n,window.EASTER_DEBUG_MODE=n})}var Kt="2.8.143",Tt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1 & Tier 2).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1|2] [--force]
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
    `;for(let[a,o]of Object.entries(t)){let s=Tt.filter(n=>n.category===a);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${o.icon}' style="color: ${o.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${o.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(n=>`
                        <div class="cli-command-card ${n.dummy?"dummy":""}" data-cmd="${n.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${o.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${n.icon}' style="font-size: 2em; color: ${o.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${n.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${n.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${o.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${n.usage}
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>St(),document.getElementById("terminal-action-btn").onclick=()=>St());let a=document.getElementById("cli-terminal-body"),o=document.getElementById("cli-docs-pane");a.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return o.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${s.overview}</p>
        </div>
        ${s.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${s.details.map(n=>`<li>${n}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${s.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ie=!0,a}function St(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ie=!1}function $t(t,e,a="output"){if(!Ie)return;let o=document.createElement("div");o.className=`terminal-line terminal-${a}`,a==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=pe(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function Xt(t){let e=Tt.find(s=>s.id===t);if(!e)return;let a=Yt(e);$t(a,`dex ${t}`,"prompt");let o=e.demo_output||["Executing command...","\u2713 Done."];for(let s of o){await new Promise(r=>setTimeout(r,400+Math.random()*600));let n="output";s.includes("[ERROR]")?n="error":s.includes("[SUCCESS]")||s.includes("\u2713")?n="success":s.includes("!")&&(n="warning"),$t(a,s,n)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function Ct(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Jt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let a=e.querySelector("code").textContent;navigator.clipboard.writeText(a).then(()=>{let o=e.querySelector("i");o.className="bx bx-check",o.style.color="#5eff5e",setTimeout(()=>{o.className="bx bx-copy",o.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(a=>{a.addEventListener("mouseenter",()=>{a.style.transform="translateY(-5px)",a.style.borderColor="rgba(255,255,255,0.15)",a.style.backgroundColor="rgba(255,255,255,0.05)"}),a.addEventListener("mouseleave",()=>{a.style.transform="translateY(0)",a.style.borderColor="rgba(255,255,255,0.05)",a.style.backgroundColor="rgba(255,255,255,0.03)"}),a.addEventListener("click",()=>{let o=a.dataset.cmd;Xt(o)})})}async function Zt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Se()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable.")}}function Lt(){Zt(),Ge(),He();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&Ct();let e=Ue();Ne(e),Oe();let a=document.getElementById("nav-left-container");a&&a.addEventListener("click",()=>{if(n.length>0)g();else{let i=window.location.pathname;if(!(i==="/"||i==="/index.html")){let S=(i.endsWith("/")&&i.length>1?i.slice(0,-1):i).split("/");S.pop();let E=S.join("/")||"/";window.location.href=E}}});let o=window.location.pathname==="/"||window.location.pathname==="/index.html",s=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!o&&!s&&document.querySelector("footer")?.classList.add("hide");let n=[],r=document.getElementById("windows-container");r&&r.setAttribute("data-count","0");let b=i=>{localStorage.setItem("dex_last_window",i)};function p(){return 1}function m(){for(;n.length>1;)n.shift().close(!0);let i=document.getElementById("windows-container"),d=document.querySelector("nav"),y=document.querySelector("footer"),S=window.location.pathname==="/"||window.location.pathname==="/index.html",E=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");i&&i.setAttribute("data-count",n.length),n.forEach(A=>{let P=document.getElementById(A.id);P&&P.classList.remove("hide-close")}),re(se());let $=document.getElementById("dexter-menu-container"),C=document.getElementById("nav-window-switcher"),M=document.getElementById("settings-icon");if(Re(n.length>0),n.length>0){if(y?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),d?.classList.add("window-open"),i&&(i.style.paddingTop="60px"),$&&($.style.display="none"),M&&(M.style.display="none"),C){let A=n[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(A)?(C.innerHTML=`
                      <div class="nav-switch-btn ${A==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${A==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${A==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${A==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${A==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{b("alerts-window"),x(h)}),document.getElementById("switch-events").addEventListener("click",()=>{b("events-window"),x(f)}),document.getElementById("switch-monitor").addEventListener("click",()=>{b("monitor-window"),x(u)}),document.getElementById("switch-contacts").addEventListener("click",()=>{b("contacts-window"),x(l)}),document.getElementById("switch-workspace").addEventListener("click",()=>{b("workspace-window"),x(c)})):C.innerHTML=""}}else d?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),i&&(i.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),S||E?y?.classList.remove("hide"):y?.classList.add("hide"),$&&($.style.display="flex"),M&&(M.style.display="block"),C&&(C.innerHTML="");ie(Ve())}function x(i){if(i.isOpen()){i.close();return}for(;n.length>0;)n.pop().close(!0);n.push(i),i.open(),m()}function g(){[...n].forEach(d=>d.close()),n=[]}window.addEventListener("resize",m);let h=F({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Je(),onOpen:()=>W(),onClose:()=>{let i=n.indexOf(h);i>-1&&n.splice(i,1),m()}}),f=F({id:"events-window",title:"Events",icon:"bx-calendar-event",content:rt(),onOpen:()=>Y(),onClose:()=>{let i=n.indexOf(f);i>-1&&n.splice(i,1),m()}}),l=F({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:at(),onOpen:()=>Te(),onClose:()=>{let i=n.indexOf(l);i>-1&&n.splice(i,1),m()}}),u=F({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:bt()},{icon:"bxs-component",title:"Processes",content:vt()},{icon:"bxs-brain",title:"Models",content:xt()},{icon:"bxs-hdd",title:"Hardware",content:yt()},{icon:"bxs-terminal",title:"Logs",content:ht()},{icon:"bxs-zap",title:"Agents",content:ft()}],onOpen:()=>{Ce(),be(),Le(),le()},onClose:()=>{let i=n.indexOf(u);i>-1&&n.splice(i,1),m()}}),c=F({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:it(),onOpen:()=>$e(),onClose:()=>{let i=n.indexOf(c);i>-1&&n.splice(i,1),m()}}),v=F({id:"settings-window",title:"Settings",icon:"bx-cog",content:xe(),onOpen:()=>{v.setContent(xe()),ke(v)},onClose:()=>{let i=n.indexOf(v);i>-1&&n.splice(i,1),m()}}),w=F({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:i=>{f.isOpen()||x(f),setTimeout(()=>{let d=document.querySelector(`.event-item[data-event-id="${i}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)},viewAlert:i=>{h.isOpen()||x(h),setTimeout(()=>{let d=document.querySelector(`.event-item[data-alert-id="${i}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)}},e){let i=document.getElementById("dexter-dropdown");i&&(i.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let d=document.getElementById("dexter-menu-container"),y=document.getElementById("dexter-menu-btn");d&&i&&y&&(d.addEventListener("mouseenter",()=>{i.classList.add("active"),y.classList.add("active")}),d.addEventListener("mouseleave",()=>{i.classList.remove("active"),y.classList.remove("active")}),y.addEventListener("click",S=>{S.stopPropagation();let E=localStorage.getItem("dex_last_window")||"alerts-window",$=null;E==="alerts-window"?$=h:E==="events-window"?$=f:E==="monitor-window"?$=u:E==="contacts-window"?$=l:E==="workspace-window"&&($=c),$&&x($)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{b("alerts-window"),x(h)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{b("events-window"),x(f)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{b("monitor-window"),x(u)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{b("contacts-window"),x(l)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{b("workspace-window"),x(c)}),document.getElementById("settings-icon")?.addEventListener("click",()=>x(v)),document.getElementById("close-all-windows")?.addEventListener("click",()=>g()),setInterval(()=>{h.isOpen()?W():Ye(),f.isOpen()&&Y(),u.isOpen()&&wt(),c.isOpen()&&$e()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{w.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",i=>{i.preventDefault();try{qe(document.getElementById("email-input").value),window.location.reload()}catch(d){let y=document.getElementById("login-error");y&&(y.textContent=d.message,y.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Lt):Lt();})();
