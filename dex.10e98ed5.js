(()=>{function He(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ne(t=!1){let e=window.location.pathname,a=e==="/"||e==="/index.html",o=`
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
    `,l=document.createElement("nav");l.innerHTML=o,document.body.prepend(l)}function Pe(t){let e=window.location.pathname,a=e==="/"||e==="/index.html",i=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!i||!s||(t||!a?(i.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{i.style.transform="translateX(-3px)"},s.onmouseleave=()=>{i.style.transform="translateX(0)"}):(i.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function Re(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Oe=1e3;function j(t){let e=null,a=t.onClose||null,i=t.onOpen||null;function s(){e&&(e.style.zIndex=++Oe)}function o(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",l),i&&setTimeout(i,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++Oe,e.addEventListener("mousedown",s);let h=t.icon||"bx-window",b="",r="",p;t.tabs&&t.tabs.length>0?(b=`<div class="tab-bar">${t.tabs.map((w,n)=>{let m=w.icon?`<i class="bx ${w.icon}"></i>`:`<span class="tab-glyph">${w.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${n===0?"active":""}" data-tab-index="${n}">
                        ${m}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${n}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,p=`<div class="window-content">${t.tabs.map((w,n)=>`<div class="tab-content ${n===0?"active":""}" data-tab-content="${n}">${w.content}</div>`).join("")}</div>`):(t.title&&(r=`<div class="window-title">${t.title}</div>`),p=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${b}
                ${r}
                <i class="bx bx-x window-close"></i>
            </div>
            ${p}
        `,u.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",c=>{c.stopPropagation(),v()}),window.addEventListener("resize",l),t.tabs&&e.querySelectorAll(".tab").forEach(c=>{c.addEventListener("click",()=>{let g=c.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),c.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${g}"]`).classList.add("active"),f(c,e)})}),setTimeout(()=>{e.classList.add("open"),i&&i()},10)}function l(){if(!e||!e.classList.contains("open"))return;let u=e.querySelector(".tab.active");u&&f(u,e)}function f(u,h){setTimeout(()=>{let b=h.querySelector(".tab-bar");if(!b)return;let r=Array.from(b.querySelectorAll(".tab")),p=r.indexOf(u),c=b.clientWidth,g=r[Math.max(0,p-2)],w=r[Math.min(r.length-1,p+2)],n=g.offsetLeft-b.offsetLeft-25,y=w.offsetLeft+w.offsetWidth-b.offsetLeft+25-n,S=y<=c?n-(c-y)/2:u.offsetLeft-b.offsetLeft-c/2+u.offsetWidth/2;b.scrollTo({left:S,behavior:"smooth"})},350)}function v(u=!1){e&&(window.removeEventListener("resize",l),u?(e.remove(),e=null):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e?.remove(),e=null},400)))}function d(u){let h=e?.querySelector(".window-content");h&&(h.innerHTML=u)}function x(){return e&&e.classList.contains("open")}return{open:o,close:v,setContent:d,isOpen:x,focus:s,id:t.id}}function Ue(){return!0}function ze(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function qe(t){localStorage.setItem("easter_user_email",t.trim())}var je="easter_theme",z={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function se(){return localStorage.getItem(je)||z.DARK}function Fe(t){if(!Object.values(z).includes(t))throw new Error("Invalid theme");localStorage.setItem(je,t),re(t)}function re(t){let e=document.body;if(Object.values(z).forEach(i=>{e.classList.remove(`theme-${i}`)}),e.classList.add(`theme-${t}`),[z.LIGHT,z.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let i=document.createElement("div");i.className="background",document.body.prepend(i)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function Ge(){let t=se();re(t)}function C(t,e,a=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",o=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${o}</div>`}function M(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function O(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let i=Date.now(),s=Math.floor((i-e)/1e3),o;s<60?o=`${s}s ago`:s<3600?o=`${Math.floor(s/60)}m ago`:o=`${Math.floor(s/3600)}h ago`,a.textContent=`Last updated: ${o}`}var We=0;function Ve(){return We}function ne(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let i=a.querySelector(".notification-badge");i&&(e>0?(i.textContent=e>9?"9+":e,i.style.display="flex"):i.style.display="none")}function ie(t){We=t;let e=document.getElementById("dexter-nav-badge");e&&(t>0?e.style.display="flex":e.style.display="none");let a=document.getElementById("alerts-menu-item");if(a){let s=a.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="auto",a.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}let i=document.getElementById("switch-alerts");if(i){let s=i.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="8px",i.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}}function me(){let t=document.getElementById("alerts-list");if(!t)return;let e=t.querySelectorAll(".alert-unread:not(.priority-low)").length;ie(e)}function Se(){return"https://event.easter.company"}function It(){return"https://discord.easter.company"}var At="http://127.0.0.1:8100",_t="http://127.0.0.1:8300",Mt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function pe(t){let e=M(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,o)=>{let l=Mt[o];return l?`<span class="${l}">`:""});let a=(e.match(/<span/g)||[]).length,i=(e.match(/<\/span/g)||[]).length;return a>i&&(e+="</span>".repeat(a-i)),e}function ae(t){if(!t)return"";let e=M(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var X=null,Z=null,ce=!1,de=!1;async function k(t,e={}){if(X)try{let s=await fetch(X+t,e);if(s.ok)return s;X=null}catch{X=null}let a=Se(),i=At;try{let s=await fetch(a+t,e);if(s.ok)return X=a,ce&&(console.log("\u2728 Production event service restored."),ce=!1),s;throw new Error("Primary failed")}catch{ce||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${i}`),ce=!0);try{let o=await fetch(i+t,e);if(o.ok)return X=i,o;throw new Error("Fallback failed")}catch(o){throw o}}}async function Ke(t,e={}){if(Z)try{let s=await fetch(Z+t,e);if(s.ok)return s;Z=null}catch{Z=null}let a=It(),i=_t;try{let s=await fetch(a+t,e);if(s.ok)return Z=a,de&&(console.log("\u2728 Production discord service restored."),de=!1),s;throw new Error("Primary failed")}catch{de||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${i}`),de=!0);try{let o=await fetch(i+t,e);if(o.ok)return Z=i,o;throw new Error("Fallback failed")}catch(o){throw o}}}var Je=()=>`
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
`,ue=null,G=new Set,ge=[];async function W(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Bt(),t&&(e.innerHTML="<p>Updating...</p>");let a="/events?ml=1000&format=json&event.type=system.notification.generated";try{let i=await k(a);if(!i.ok)throw new Error("Service is offline or unreachable.");let o=(await i.json()).events||[];ue=Date.now(),O(0,ue);let l=Date.now(),f=24*60*60*1e3,v=o.filter(n=>{let m=localStorage.getItem(`alert_read_ts_${n.id}`);if(!m)return!0;let y=parseInt(m);return l-y<f});v.sort((n,m)=>{let y=I=>{let A=I.event;if(typeof A=="string")try{A=JSON.parse(A)}catch{return"low"}return(A.priority||"low").toLowerCase()},S=I=>I==="critical"?4:I==="high"?3:I==="medium"?2:1,E=S(y(n)),$=S(y(m));return E!==$?$-E:m.timestamp-n.timestamp}),ge=v;let d=n=>{let m=n.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return"low"}return(m.priority||"low").toLowerCase()},x=[],h=new Set(v.map(n=>d(n))).size>1;if(v.length>0){let n=null;v.forEach(m=>{let y=d(m);h&&y!==n&&(x.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),n=y),x.push(m)})}if(t&&(e.innerHTML=""),v.length===0){e.innerHTML=C("empty","No alerts yet."),me();return}let b=n=>{let m=n.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let y=m.title||"Untitled Alert",S=m.body||"No description provided.",E=m.priority||"low",$=!!m.alert,I=m.category||"system",A=m.related_event_ids||[],D=m.audit_event_id,_=!!localStorage.getItem(`alert_read_ts_${n.id}`),H=new Date(n.timestamp*1e3),R=H.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=H.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),T=_?"event-border-grey":"event-border-blue";!_&&$&&(T="event-border-red"),_&&(E==="high"||E==="critical")?T="event-border-red":_&&E==="medium"&&(T="event-border-orange");let N=_?"alert-read":"alert-unread",P=G.has(n.id),xe=P?"expanded":"",he=P?"display: block;":"display: none;",Ae="",_e="";A.length>0&&(_e=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${A.map(q=>`<a href="#" onclick="window.dexter.viewEvent('${q}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px; font-family: monospace; width: fit-content;">${q.substring(0,8)}...</a>`).join(", ")}</span>
                    </div>`);let Me="";D&&(Me=`
              <div class="event-detail-row">
                  <span class="detail-label">Generated By:</span>
                  <span class="detail-value"><a href="#" onclick="window.dexter.viewEvent('${D}'); return false;" style="color: #bb86fc; text-decoration: none; font-family: monospace; border-bottom: 1px dashed #bb86fc; width: fit-content;">${D.substring(0,8)}...</a></span>
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
            `;let U=document.createElement("div");U.className=`event-item notification-item ${T} ${N} ${xe} cursor-pointer priority-${E}`,U.dataset.alertId=n.id,U.onclick=function(q){if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(n.id);let te=this.querySelector(".event-details");te&&(te.style.display="none")}else{this.classList.add("expanded"),G.add(n.id);let te=this.querySelector(".event-details");if(te&&(te.style.display="block"),!localStorage.getItem(`alert_read_ts_${n.id}`)){localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ee="event-border-grey";E==="high"||E==="critical"?Ee="event-border-red":E==="medium"&&(Ee="event-border-orange"),this.classList.add(Ee),me()}}};let Qt=y,kt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[I]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${R}</span>
                    <span class="event-date">${L}</span>
                </div>
                <div class="event-icon"><i class='bx ${kt}'></i></div>
                <div class="event-content">
                    <div class="event-service">${I.toUpperCase()} ${$?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${he}">
                        ${Ae}
                    </div>
                </div>
            `;let Be=U.querySelector(".event-details");Be&&Be.addEventListener("click",q=>{q.stopPropagation()});let De=U.querySelector(".close-details-btn");return De&&De.addEventListener("click",q=>{q.stopPropagation(),U.classList.remove("expanded");let we=U.querySelector(".event-details");we&&(we.style.display="none"),G.delete(n.id)}),U},r=n=>{let m=document.createElement("div");m.className="notification-divider",m.dataset.alertId=n.id;let y="#888888";return n.label==="CRITICAL"?y="#ff4d4d":n.label==="HIGH"?y="#ff8888":n.label==="MEDIUM"&&(y="#ffa500"),m.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,m.innerHTML=`<span style="white-space: nowrap;">${n.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,m},p=Array.from(e.children),c=new Map(p.map(n=>[n.dataset.alertId,n])),g=new Set(x.map(n=>n.id));p.forEach(n=>{let m=n.dataset.alertId;(!m||!g.has(m))&&n.remove()});let w=null;x.forEach((n,m)=>{let y=c.get(n.id);(!y||t)&&(y&&y.remove(),n.type==="divider"?y=r(n):y=b(n),!y)||(m===0?e.firstElementChild!==y&&e.prepend(y):w&&w.nextElementSibling!==y&&w.after(y),w=y)}),ue=Date.now(),O(0,ue),me()}catch(i){console.error("Error fetching alerts:",i),e.children.length===0&&(e.innerHTML=C("offline","Failed to load alerts.","The event service may be offline."))}}function Bt(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),a=document.getElementById("alerts-close-all"),i=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ge.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),W(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ge.forEach(s=>{G.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),W(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{G.clear(),W(!0)},a.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){i.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await k("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;ge.forEach(o=>{localStorage.setItem(`alert_read_ts_${o.id}`,s.toString())}),G.clear(),W(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{i.innerHTML="<i class='bx bx-trash'></i> Clear"}}},i.dataset.listenerAttached="true")}async function Ye(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await k(t);if(!e.ok)return;let i=(await e.json()).events||[],s=0;i.forEach(o=>{let l=o.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}if((l.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${o.id}`)||s++}),ie(s)}catch{}}var Xe=()=>`
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
`,V=new Set,Qe=[],Q=null;async function K(t=!1){let e=document.getElementById("roadmap-list");if(e){Dt();try{let a=await k("/roadmap");if(!a.ok)throw new Error("Offline");let i=await a.json();if(Qe=i,i.length===0){e.innerHTML=C("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let s=d=>{let x=V.has(d.id),u=d.state==="draft",h=d.state==="published",b=d.state==="consumed",r="event-border-grey";h&&(r="event-border-blue"),b&&(r="event-border-purple");let c=new Date(d.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),g=document.createElement("div");g.className=`event-item notification-item ${r} cursor-pointer ${x?"expanded":""}`,g.dataset.itemId=d.id,g.onclick=m=>{if(m.target.closest("button"))return;g.classList.contains("expanded")?(g.classList.remove("expanded"),g.querySelector(".event-details").style.display="none",V.delete(d.id)):(g.classList.add("expanded"),g.querySelector(".event-details").style.display="block",V.add(d.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${d.state.toUpperCase()}]</span>`;g.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${c.split(",")[1]}</span>
          <span class="event-date">${c.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${M(d.content)}</div>
          <div class="event-details" style="${x?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${b?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${h?"bx-pause":"bx-rocket"}'></i> ${h?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${b?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(d.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let n=g.querySelector(".event-details");return n&&n.addEventListener("click",m=>{m.stopPropagation()}),g.querySelector(".edit-btn")?.addEventListener("click",()=>Ht(d)),g.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Nt(d)),g.querySelector(".delete-btn")?.addEventListener("click",()=>Pt(d.id)),g.querySelector(".close-details-btn")?.addEventListener("click",m=>{m.stopPropagation(),g.classList.remove("expanded"),g.querySelector(".event-details").style.display="none",V.delete(d.id)}),g},o=Array.from(e.children),l=new Map(o.map(d=>[d.dataset.itemId,d])),f=new Set(i.map(d=>d.id));o.forEach(d=>{let x=d.dataset.itemId;(!x||!f.has(x))&&d.remove()});let v=null;i.forEach((d,x)=>{let u=l.get(d.id);(!u||t)&&(u&&u.remove(),u=s(d),!u)||(x===0?e.firstElementChild!==u&&e.prepend(u):v&&v.nextElementSibling!==u&&v.after(u),v=u)})}catch{e.children.length===0&&(e.innerHTML=C("offline","Failed to load roadmap.","The event service may be offline."))}}}function Dt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),i=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Q=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",Q=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let o=document.getElementById("roadmap-editor-input").value;if(!o.trim())return;let l=Q?`/roadmap/${Q}`:"/roadmap",f=Q?"PATCH":"POST";try{await k(l,{method:f,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:o})}),document.getElementById("roadmap-editor-container").style.display="none",K(!0)}catch(v){console.error(v)}},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{Qe.forEach(o=>V.add(o.id)),K(!0)},i.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{V.clear(),K(!0)},s.dataset.listenerAttached="true")}function Ht(t){Q=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Nt(t){let e=t.state==="published"?"draft":"published";try{await k(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),K(!0)}catch(a){console.error(a)}}async function Pt(t){if(confirm("Delete this roadmap item?"))try{await k(`/roadmap/${t}`,{method:"DELETE"}),V.delete(t),K(!0)}catch(e){console.error(e)}}var tt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,st=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,et=null,ee=new Set,nt=[];async function fe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Rt();let a="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let i=await k(a);if(!i.ok)throw new Error("Service is offline or unreachable.");let o=(await i.json()).events||[];if(nt=o,et=Date.now(),O(2,et),o.length===0){e.innerHTML=C("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),ne(1,0);return}t&&(e.innerHTML="");let l=u=>{let h=u.event;if(typeof h=="string")try{h=JSON.parse(h)}catch{return null}let b=h.title||"Untitled Blueprint",r=h.summary||h.body||"No summary provided.",p=h.content||"",c=h.category||"architecture",g=h.affected_services||[],w=h.implementation_path||[],n=new Date(u.timestamp*1e3),m=n.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),y=n.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=ee.has(u.id),E=S?"display: block;":"display: none;",$=document.createElement("div");$.className=`event-item notification-item event-border-purple cursor-pointer ${S?"expanded":""}`,$.dataset.blueprintId=u.id;let A={architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[c]||"bx-paint";$.onclick=function(R){if(this.classList.contains("expanded")){this.classList.remove("expanded"),ee.delete(u.id);let T=this.querySelector(".event-details");T&&(T.style.display="none")}else{this.classList.add("expanded"),ee.add(u.id);let T=this.querySelector(".event-details");T&&(T.style.display="block")}};let D=g.length>0?`<div class="event-detail-row"><span class="detail-label">Related Services:</span> <span class="detail-value">${g.join(", ")}</span></div>`:"",B="";w.length>0&&(B=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(R=>`<li>${M(R)}</li>`).join("")}
                        </ul>
                    </div>
                `),$.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${m}</span>
                    <span class="event-date">${y}</span>
                </div>
                <div class="event-icon"><i class='bx ${A}'></i></div>
                <div class="event-content">
                    <div class="event-service">${c.toUpperCase()}</div>
                    <div class="event-message">${b}</div>
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; color: #fff;">
                            ${M(r)}
                        </div>
                        ${D}
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${M(p)}</div>
                        </div>
                        ${B}
                    </div>
                </div>
            `;let _=$.querySelector(".event-details");_&&_.addEventListener("click",R=>{R.stopPropagation()});let H=$.querySelector(".close-details-btn");return H&&H.addEventListener("click",R=>{R.stopPropagation(),$.classList.remove("expanded");let L=$.querySelector(".event-details");L&&(L.style.display="none"),ee.delete(u.id)}),$},f=Array.from(e.children),v=new Map(f.map(u=>[u.dataset.blueprintId,u])),d=new Set(o.map(u=>u.id));f.forEach(u=>{let h=u.dataset.blueprintId;(!h||!d.has(h))&&u.remove()});let x=null;o.forEach((u,h)=>{let b=v.get(u.id);(!b||t)&&(b&&b.remove(),b=l(u),!b)||(h===0?e.firstElementChild!==b&&e.prepend(b):x&&x.nextElementSibling!==b&&x.after(b),x=b)}),ne(2,o.length)}catch(i){console.error("Error fetching blueprints:",i),e.children.length===0&&(e.innerHTML=C("offline","Failed to load blueprints.","The event service may be offline."))}}function Rt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{nt.forEach(a=>ee.add(a.id)),fe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ee.clear(),fe(!0)},e.dataset.listenerAttached="true")}var it=()=>`
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
`,Ot=null;async function Le(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>Le(),e.dataset.listenerAttached="true");try{let a=await Ke("/contacts");if(!a.ok)throw new Error("Service unreachable");let s=(await a.json()).members||[];if(Ot=Date.now(),s.length===0){t.innerHTML=C("empty","No contacts found.","Check your Discord connection.");return}let o={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((l,f)=>{let v=o[l.level]??10,d=o[f.level]??10;return v!==d?v-d:l.username.localeCompare(f.username)}),t.innerHTML=s.map(l=>{let f=l.color?"#"+l.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",v=l.status==="online"?"#5eff5e":l.status==="idle"?"#ffa500":l.status==="dnd"?"#ff4d4d":"#666",d="#888";l.level==="Me"||l.level==="Master"?d="#bb86fc":l.level==="Admin"?d="#cf6679":l.level==="Moderator"?d="#03dac6":l.level==="Contributor"&&(d="#ffa500");let x=l.level==="Me",u=x?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",h=x?"2px solid #bb86fc":`1px solid ${f}33`;return`
                <div class="user-profile-section" style="background: ${u}; padding: 15px; border-radius: 8px; border: ${h}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${x?"#bb86fc":f}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${l.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${x?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${v}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${l.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${d}; font-weight: 600; text-transform: uppercase;">${x?"DEXTER (ME)":l.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${l.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=C("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Ut={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function ot(t,e){let a=Ut[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!a)return t;let i=a.replace(/\{(\w+)\}/g,(s,o)=>e[o]!==void 0&&e[o]!==null?e[o]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(i+=` (Translation: ${e.english_translation})`),i}var rt=()=>`
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
`,ve=null,J=new Set,oe=[],F="all",zt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},qt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function lt(t){for(let[e,a]of Object.entries(zt))if(a.includes(t))return e;return"system"}function jt(t){return qt[t]||"bx-square-rounded"}async function Y(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ft();let i=`/events?ml=${F==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let s=await k(i);if(!s.ok)throw new Error("Service is offline or unreachable.");let l=(await s.json()).events||[],f=l;if(F!=="all"&&(f=l.filter(b=>{let r=b.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return!1}return lt(r.type)===F})),oe=f.slice(0,50),ve=Date.now(),O(1,ve),oe.length===0){e.innerHTML=C("empty","No events found for this filter.");return}t&&(e.innerHTML="");let v=b=>{let r=b.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return null}let p=r.type,c=lt(p),g=jt(p),w=p==="engagement.decision"||p==="messaging.bot.sent_message"||p==="messaging.user.sent_message"||p==="moderation.explicit_content.deleted"||p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.cli.command"||p==="system.analysis.audit"||p==="system.test.completed"||p==="error_occurred"||p==="system.cli.status"||p==="system.attention.expired"||p.startsWith("system.roadmap")||p.startsWith("system.process"),n="event-border-grey";w&&(p==="moderation.explicit_content.deleted"||p==="error_occurred"?n="event-border-red":p==="analysis.link.completed"||p==="analysis.visual.completed"||p==="system.analysis.audit"?n="event-border-purple":p==="system.attention.expired"||p==="system.cli.command"||p==="system.cli.status"?n="event-border-orange":p==="system.test.completed"?n=r.test?.status==="OK"&&r.lint?.status==="OK"&&r.format?.status==="OK"?"event-border-blue":"event-border-red":n="event-border-blue");let m=w?"cursor-pointer":"",y=J.has(b.id),S=y?"expanded":"",E=y?"display: block;":"display: none;",$=new Date(b.timestamp*1e3),I=$.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=$.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=ot(p,r),B=r.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${r.user_level})</span>`:"",_="";if(w){let L="";if(p==="engagement.decision")L=`
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
                    `;else if(p==="system.attention.expired"){let T=r.timestamp-r.last_active,N=Math.floor(T/60);L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value" style="color: #bb86fc;">${r.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${N} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context (Last Input):</span>
                            <div class="detail-pre">${ae(r.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Thought Process (Last Output):</span>
                            <div class="detail-pre">${ae(r.last_output||"None")}</div>
                        </div>
                    `}else if(p==="messaging.bot.sent_message")L=`
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
                    `;else if(p==="moderation.explicit_content.deleted")L=`
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
                            <pre class="detail-pre">${M(r.raw_output)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.link.completed")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${r.url}" target="_blank" class="attachment-link">${r.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${M(r.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${M(r.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${M(r.summary)||"None"}</pre>
                        </div>
                    `;else if(p==="analysis.visual.completed"){let T="";r.base64_preview?T=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${r.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:r.url&&(T=`<div class="event-detail-block"><img src="${r.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${r.filename}</span>
                        </div>
                        ${T}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${M(r.description)||"None"}</pre>
                        </div>
                    `}else if(p==="system.cli.command")L=`
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
                            <pre class="detail-pre">${M(r.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(p==="system.analysis.audit")L=`
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
                            <pre class="detail-pre">${M(r.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${M(r.raw_input)}</pre>
                        </div>
                    `;else if(p==="system.test.completed")L=`
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
                    `;else if(p==="error_occurred")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${r.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${M(r.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(r.context||{},null,2)}</pre>
                        </div>
                    `;else if(p==="system.cli.status")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${r.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${M(r.message)}</pre>
                        </div>
                    `;else if(p==="messaging.user.sent_message"){let T="";r.attachments&&r.attachments.length>0&&(T=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${r.attachments.map(P=>{let xe=P.content_type&&P.content_type.startsWith("image/"),he=(P.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${xe?`<div class="attachment-thumb-container"><img src="${P.url}" alt="${P.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${P.url}" target="_blank" class="attachment-link">${P.filename}</a>
                                        <span class="attachment-meta">${P.content_type} \u2022 ${he}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${r.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${r.content||"(empty)"}</pre>
                        </div>
                        ${T}
                    `}_=`
                    <div class="event-details" style="${E}">
                        ${L}
                    </div>
                `}let H=document.createElement("div");H.className=`event-item ${n} ${m} ${S}`,H.dataset.eventId=b.id,H.onclick=function(L){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(b.id);let N=this.querySelector(".event-details");N&&(N.style.display="none")}else{this.classList.add("expanded"),J.add(b.id);let N=this.querySelector(".event-details");N&&(N.style.display="block")}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${I}</span>
                    <span class="event-date">${A}</span>
                </div>
                <div class="event-icon"><i class='bx ${g}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${c}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${c}</span>
                        ${b.service} ${B}
                    </div>
                    <div class="event-message">${D}</div>
                    ${_}
                </div>
            `;let R=H.querySelector(".event-details");if(R&&R.addEventListener("click",L=>{L.stopPropagation()}),w){let L=H.querySelector(".close-details-btn");L&&L.addEventListener("click",T=>{T.stopPropagation();let N=T.target.closest(".event-item");if(N){N.classList.remove("expanded"),J.delete(b.id);let P=N.querySelector(".event-details");P&&(P.style.display="none")}})}return H},d=Array.from(e.children),x=new Map(d.map(b=>[b.dataset.eventId,b])),u=new Set(oe.map(b=>b.id));d.forEach(b=>{let r=b.dataset.eventId;(!r||!u.has(r))&&b.remove()});let h=null;oe.forEach((b,r)=>{let p=x.get(b.id);(!p||t)&&(p&&p.remove(),p=v(b),!p)||(r===0?e.firstElementChild!==p&&e.prepend(p):h&&h.nextElementSibling!==p&&h.after(p),h=p)}),ve=Date.now(),O(1,ve)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=C("offline","Failed to load events.","The event service may be offline."))}}function Ft(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),a=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{oe.forEach(s=>J.add(s.id)),Y(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),Y(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{a.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),s.classList.add("active"),F=s.dataset.filter,Y(!0)}}),a.dataset.listenerAttached="true");let i=document.getElementById("events-clear");i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{let s=F==="all"?"ALL":F.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){i.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let o="/events";if(F!=="all"&&(o+=`?category=${F}`),!(await k(o,{method:"DELETE"})).ok)throw new Error("Failed to delete events");J.clear(),Y(!0)}catch(o){console.error("Failed to clear events:",o),alert("Failed to clear events. Check console.")}finally{i.innerHTML="<i class='bx bx-trash'></i> Clear"}}},i.dataset.listenerAttached="true")}function ct(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Gt=null;async function le(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await k("/logs");if(!e.ok)throw new Error("Logs offline");let a=await e.json();if(!a||a.length===0)return t.innerHTML=C("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let i=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=a.filter(l=>!i.includes(l.id));s.forEach(l=>{l.logs&&Array.isArray(l.logs)?l.logs.reverse():l.logs=[]}),s.reverse();let o=s.map(l=>{let f=l.logs.join(`
`),v=[...l.logs];if(v.length<25){let x=25-v.length;for(let u=0;u<x;u++)v.push("")}else v.length>25&&(v=v.slice(-25));let d=v.map(x=>pe(x)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${l.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(f)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${l.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${d}</pre>
                </div>
            `}).join("");return t.innerHTML=o,document.querySelectorAll(".copy-logs-btn").forEach(l=>{l.addEventListener("click",()=>{let f=unescape(l.dataset.logs);navigator.clipboard.writeText(f).then(()=>{let v=l.querySelector("i");v.classList.remove("bx-copy"),v.classList.add("bx-check"),setTimeout(()=>{v.classList.remove("bx-check"),v.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(l=>{l.addEventListener("click",async()=>{let f=l.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${f}?`))try{(await k(`/logs?service_id=${f}`,{method:"DELETE"})).ok&&le()}catch(v){console.error("Error clearing logs:",v)}})}),Gt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=C("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var ft=()=>`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
             <div class="analyst-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Current Idle</span>
                <span id="analyst-idle-val" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="analyst-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Idle</span>
                <span id="analyst-total-idle" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="analyst-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Active</span>
                <span id="analyst-total-active" style="color: #03dac6; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="analyst-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Waste</span>
                <span id="analyst-total-waste" style="color: #cf6679; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
        </div>

        <div class="system-section-header">
            <i class='bx bxs-zap' style="color: #bb86fc;"></i>
            <h2>Analyst</h2>
            <button id="analyst-reset-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Reset</button>
        </div>
        <div class="analyst-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                <div class="analyst-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Guardian</span>
                    <span id="analyst-t1-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                <div class="analyst-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Architect</span>
                    <span id="analyst-t2-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                <div class="analyst-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Strategist</span>
                    <span id="analyst-t3-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
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
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,yt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,xt=()=>`
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
        </div>`;async function wt(){await Promise.all([be(),Ce(),Te()]),await le()}var dt=null,mt=null,pt=null;async function Et(){try{return await(await k("/system_monitor")).json()}catch{return null}}async function ut(){try{return await(await k("/system/hardware")).json()}catch{return null}}async function Wt(){try{return await(await k("/processes")).json()}catch{return null}}async function Vt(){try{return await(await k("/analyst/status")).json()}catch{return null}}async function Ce(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),a=document.querySelector("#hw-cpu .hw-content"),i=document.querySelector("#hw-ram .hw-content"),s=document.querySelector("#hw-gpu .hw-content"),o=document.querySelector("#hw-storage .hw-content"),l=c=>{if(c){if(i){let g=(c.MEMORY_BYTES/1073741824).toFixed(1);i.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #888; font-weight: 500;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${g} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(a&&c.CPU&&c.CPU.length>0){let g=c.CPU[0];a.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${g.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${g.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${g.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}s&&(c.GPU&&c.GPU.length>0?s.innerHTML=c.GPU.map(g=>{let w=(g.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 600;">${g.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):s.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),o&&c.STORAGE&&c.STORAGE.length>0?o.innerHTML=c.STORAGE.map(g=>{let w=(g.USED/1073741824).toFixed(1),n=(g.SIZE/(1024*1024*1024)).toFixed(1),m=g.SIZE>0?(g.USED/g.SIZE*100).toFixed(0):0,y=g.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${g.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${y}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${w} GB Used</span>
                            <span>${n} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${m>90?"#cf6679":"#03dac6"}; width: ${m}%; height: 100%; box-shadow: 0 0 10px ${m>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):o&&(o.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let c=await ut();c?(l(c),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},e.dataset.listenerAttached="true"),a&&!a.hasChildNodes())){let c=await ut();l(c)}if(!t)return;let f=await Et();if(!f||!f.services){t.children.length===0&&(t.innerHTML=C("offline","Failed to load system metrics.","The event service may be offline."));return}dt=Date.now(),O(0,dt);let v=f.services||[];Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function d(c){return!c||c==="N/A"||c==="unknown"||c.trim()===""?"-":c}function x(c){if(!c||c==="N/A"||c==="unknown")return"-";let g=c.match(/^(\d+\.\d+\.\d+)/);return g?g[0]:c.split(".").slice(0,3).join(".")||"-"}function u(c){return!c||c.length<=28?c:c.substring(0,28)+"..."}function h(c){if(!c||c==="N/A"||c==="unknown")return"-";let g=c.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!g)return"-";let w=parseInt(g[1])||0,n=parseInt(g[2])||0,m=parseInt(g[3])||0,y=parseFloat(g[4])||0,S=w*86400+n*3600+m*60+y,E=Math.floor(S/86400);if(E>0)return`${E}d`;let $=Math.floor(S/3600);if($>0)return`${$}h`;let I=Math.floor(S/60);return I>0?`${I}m`:`${Math.floor(S)}s`}function b(c){let g=c.status==="online",w=g?"service-widget-online":"service-widget-offline",n=g?"bx-check-circle":"bx-x-circle",m=g?"OK":"BAD",y=c.version?x(c.version.str):"-",S=c.cpu&&c.cpu!=="N/A"?c.cpu:"-",E=c.memory&&c.memory!=="N/A"?c.memory:"-",$=S!=="-"?"#00ff00":"#666",I=S!=="-"?"#fff":"#666",A=E!=="-"?"#00ff00":"#666",D=E!=="-"?"#fff":"#666",B=h(c.uptime),_="";return g?_=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${y}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${B}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${$};"></i>
                        <span style="color: ${I};">${S}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${A};"></i>
                        <span style="color: ${D};">${E}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${w}" data-service-id="${c.id}"><div class="service-widget-header"><i class="bx ${n}"></i><h3>${c.short_name||c.id}</h3><span class="service-widget-status">${m}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${u(c.domain&&c.port?`${c.domain}:${c.port}`:"")}</span></div>${_}</div></div>`}let r=new Map(Array.from(t.querySelectorAll(".service-widget")).map(c=>[c.dataset.serviceId,c])),p=new Set(v.map(c=>c.id));for(let[c,g]of r)p.has(c)||g.remove();v.forEach(c=>{let g=b(c),w=r.get(c.id);w?w.outerHTML!==g&&(w.outerHTML=g):t.insertAdjacentHTML("beforeend",g)})}async function Te(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Et();if(!e){t.children.length===0&&(t.innerHTML=C("offline","Failed to load model status.","The event service may be offline."));return}mt=Date.now(),O(2,mt);let a=e.models||[],i=e.whisper;Array.from(t.children).forEach(f=>{f.classList.contains("service-widget")||f.remove()});function s(f){let v=f.status==="Ready";return`
                <div class="service-widget ${v?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${v?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${f.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function o(f){let v=f.status==="Downloaded",d=v?"service-widget-online":"service-widget-offline",x=v?"OK":"MISSING",u=v&&f.size>0?`${(f.size/1e9).toFixed(2)} GB`:"-",h=f.name;return f.type==="custom"&&h.endsWith(":latest")&&(h=h.replace(":latest","")),`<div class="service-widget ${d}" data-model-name="${f.name}"><div class="service-widget-header"><i class="bx ${v?"bx-check-circle":"bx-x-circle"}"></i><h3>${h}</h3><span class="service-widget-status">${x}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${f.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${u}</span></div></div></div>`}let l="";if(i&&(l+=s(i)),l+=a.map(o).join(""),!l){t.innerHTML=C("empty","No models found.");return}t.innerHTML!==l&&(t.innerHTML=l)}async function be(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),a=document.getElementById("analyst-t2-val"),i=document.getElementById("analyst-t3-val"),s=document.getElementById("analyst-idle-val"),o=document.getElementById("analyst-total-idle"),l=document.getElementById("analyst-total-active"),f=document.getElementById("analyst-total-waste"),v=document.getElementById("analyst-reset-btn");v&&!v.dataset.listenerAttached&&(v.onclick=async()=>{v.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await k("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{v.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{v.innerHTML="<i class='bx bx-refresh'></i> Reset"},2e3)},500),be()}catch{v.innerHTML="<i class='bx bx-error'></i> Failed"}},v.dataset.listenerAttached="true");let d=await Vt();if(d){let p=Math.floor(Date.now()/1e3),c=d.active_tier,g=n=>{n<0&&(n=0);let m=Math.floor(n/3600),y=Math.floor(n%3600/60),S=n%60;return m>0?`${m}h ${y}m`:y>0?`${y}m ${S}s`:`${S}s`},w=(n,m,y)=>{if(c===y||y==="guardian"&&c==="tests"){n.textContent="Working",n.style.color="#bb86fc";return}let S=m-p;if(S<=0)n.textContent="Ready",n.style.color="#5eff5e";else{let E=Math.floor(S/60),$=S%60;n.textContent=`${E}m ${$}s`,n.style.color="#fff"}};if(e&&d.guardian&&w(e,d.guardian.next_run,"guardian"),a&&d.architect&&w(a,d.architect.next_run,"architect"),i&&d.strategist&&w(i,d.strategist.next_run,"strategist"),s&&d.system_idle_time!==void 0){let n=d.system_idle_time;s.textContent=g(n),n>300?s.style.color="#5eff5e":n>60?s.style.color="#ffa500":s.style.color="#fff"}o&&(o.textContent=g(d.total_idle_time||0)),l&&(l.textContent=g(d.total_active_time||0)),f&&(f.textContent=g(d.total_waste_time||0))}else[e,a,i,s,o,l,f].forEach(c=>{c&&(c.textContent="-",c.style.color="#666")});let x=await Wt(),u=[],h=[];x&&(Array.isArray(x)?u=x:(u=x.active||[],h=x.history||[]));let b=document.getElementById("vitals-processes-val");if(b)if(x){let p=u.length;b.textContent=p>0?`${p} Active`:"Idle",b.style.color=p>0?"#bb86fc":"#fff"}else b.textContent="-",b.style.color="#888";if(x===null){t.children.length===0&&(t.innerHTML=C("offline","Failed to load process status.","The event service may be offline."));return}pt=Date.now(),O(1,pt),u.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=C("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),gt(t,u,!1));let r=document.getElementById("processes-history-widgets");r&&(h.length===0?r.querySelector(".tab-placeholder")||(r.innerHTML=C("empty","No recent history.")):(r.querySelector(".tab-placeholder")&&(r.innerHTML=""),gt(r,h,!0))),ne(1,u.length)}function gt(t,e,a){function i(l){let f="";l.end_time?f=`${l.end_time-l.start_time}s`:f=`${Math.floor(Date.now()/1e3-l.start_time)}s`;let v=l.retries>0?`<span class="process-retry-badge">Retry ${l.retries}</span>`:"",d=l.channel_id,x={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};x[d]?d=x[d]:/^\d+$/.test(d)&&(d=`Channel ${d}`);let u=a?"#888":"#fff",h=a?"border-left: 3px solid #666;":"";return`
                <div class="service-widget process-widget" data-channel-id="${l.channel_id}-${l.start_time}" style="${h}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${u}"></i>
                        <h3 style="color: ${u}">${d}</h3>
                        ${v}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${u}">${l.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${u}">${f}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${u}">${l.pid}</span>
                        </div>
                    </div>
                </div>`}let s=new Map(Array.from(t.querySelectorAll(".process-widget")).map(l=>[l.dataset.channelId,l])),o=new Set(e.map(l=>`${l.channel_id}-${l.start_time}`));for(let[l,f]of s)o.has(l)||f.remove();e.forEach(l=>{let f=`${l.channel_id}-${l.start_time}`,v=i(l),d=s.get(f);d?d.outerHTML!==v&&(d.outerHTML=v):t.insertAdjacentHTML("beforeend",v)})}function ye(){let t=se(),e=ze()||"master@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},i=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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
                            <input type="checkbox" id="analytics-toggle" ${i?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ke(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let o=this.dataset.theme;Fe(o),t.setContent(ye()),ke(t)})});let a=document.getElementById("notifications-toggle");a&&(a.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let i=document.getElementById("analytics-toggle");i&&(i.checked=localStorage.getItem("easter_analytics_enabled")!=="false",i.onclick=s=>{let o=s.target.checked;localStorage.setItem("easter_analytics_enabled",o),window.EASTER_ANALYTICS_ENABLED=o,window.EASTER_DEBUG_MODE=o})}var Kt="2.8.143",Lt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Tier 1 Guardian Analyst technical sentry.",usage:"dex guardian",category:"cognitive",docs:{overview:"Guardian is the Technical Sentry of the ecosystem. It performs automated health checks and audits.",details:["Scans for service crashes and restarts.","Analyzes logs for high-severity errors.","Verifies system-wide resource availability.","Triggers immediate notifications if anomalies are detected."],extended_usage:"dex guardian [--force] [--quiet]"},demo_output:["\u2588 \x1B[1mGUARDIAN ANALYST\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Initializing Tier 1 Analysis..."," \u2699\uFE0F Fetching system context..."," \u2699\uFE0F Running Guardian Analysis...","","\x1B[32mNo significant insights found.\x1B[0m"," \u2699\uFE0F Resetting Guardian timer...","\x1B[32m\u2713 Guardian timer reset.\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
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
    `;for(let[a,i]of Object.entries(t)){let s=Lt.filter(o=>o.category===a);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${i.icon}' style="color: ${i.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${i.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(o=>`
                        <div class="cli-command-card ${o.dummy?"dummy":""}" data-cmd="${o.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${i.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${o.icon}' style="font-size: 2em; color: ${i.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${o.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${o.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${i.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${o.usage}
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>St(),document.getElementById("terminal-action-btn").onclick=()=>St());let a=document.getElementById("cli-terminal-body"),i=document.getElementById("cli-docs-pane");a.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return i.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${s.overview}</p>
        </div>
        ${s.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${s.details.map(o=>`<li>${o}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${s.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ie=!0,a}function St(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ie=!1}function $t(t,e,a="output"){if(!Ie)return;let i=document.createElement("div");i.className=`terminal-line terminal-${a}`,a==="prompt"?i.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:i.innerHTML=pe(e),t.appendChild(i),t.scrollTop=t.scrollHeight}async function Xt(t){let e=Lt.find(s=>s.id===t);if(!e)return;let a=Yt(e);$t(a,`dex ${t}`,"prompt");let i=e.demo_output||["Executing command...","\u2713 Done."];for(let s of i){await new Promise(l=>setTimeout(l,400+Math.random()*600));let o="output";s.includes("[ERROR]")?o="error":s.includes("[SUCCESS]")||s.includes("\u2713")?o="success":s.includes("!")&&(o="warning"),$t(a,s,o)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function Ct(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Jt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let a=e.querySelector("code").textContent;navigator.clipboard.writeText(a).then(()=>{let i=e.querySelector("i");i.className="bx bx-check",i.style.color="#5eff5e",setTimeout(()=>{i.className="bx bx-copy",i.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(a=>{a.addEventListener("mouseenter",()=>{a.style.transform="translateY(-5px)",a.style.borderColor="rgba(255,255,255,0.15)",a.style.backgroundColor="rgba(255,255,255,0.05)"}),a.addEventListener("mouseleave",()=>{a.style.transform="translateY(0)",a.style.borderColor="rgba(255,255,255,0.05)",a.style.backgroundColor="rgba(255,255,255,0.03)"}),a.addEventListener("click",()=>{let i=a.dataset.cmd;Xt(i)})})}async function Zt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Se()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable.")}}function Tt(){Zt(),Ge(),He();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&Ct();let e=Ue();Ne(e),Re();let a=document.getElementById("nav-left-container");a&&a.addEventListener("click",()=>{if(o.length>0)u();else{let n=window.location.pathname;if(!(n==="/"||n==="/index.html")){let S=(n.endsWith("/")&&n.length>1?n.slice(0,-1):n).split("/");S.pop();let E=S.join("/")||"/";window.location.href=E}}});let i=window.location.pathname==="/"||window.location.pathname==="/index.html",s=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!i&&!s&&document.querySelector("footer")?.classList.add("hide");let o=[],l=document.getElementById("windows-container");l&&l.setAttribute("data-count","0");let f=n=>{localStorage.setItem("dex_last_window",n)};function v(){return 1}function d(){for(;o.length>1;)o.shift().close(!0);let n=document.getElementById("windows-container"),m=document.querySelector("nav"),y=document.querySelector("footer"),S=window.location.pathname==="/"||window.location.pathname==="/index.html",E=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");n&&n.setAttribute("data-count",o.length);let $=o.length>0;o.forEach(B=>{let _=document.getElementById(B.id);_&&_.classList.remove("hide-close")}),re(se());let I=document.getElementById("dexter-menu-container"),A=document.getElementById("nav-window-switcher"),D=document.getElementById("settings-icon");if(Pe(o.length>0),o.length>0){if(y?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),m?.classList.add("window-open"),n&&(n.style.paddingTop="60px"),I&&(I.style.display="none"),D&&(D.style.display="none"),A){let B=o[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(B)?(A.innerHTML=`
                      <div class="nav-switch-btn ${B==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${B==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${B==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${B==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${B==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{f("alerts-window"),x(h)}),document.getElementById("switch-events").addEventListener("click",()=>{f("events-window"),x(b)}),document.getElementById("switch-monitor").addEventListener("click",()=>{f("monitor-window"),x(p)}),document.getElementById("switch-contacts").addEventListener("click",()=>{f("contacts-window"),x(r)}),document.getElementById("switch-workspace").addEventListener("click",()=>{f("workspace-window"),x(c)})):A.innerHTML=""}}else m?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),n&&(n.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),S||E?y?.classList.remove("hide"):y?.classList.add("hide"),I&&(I.style.display="flex"),D&&(D.style.display="block"),A&&(A.innerHTML="");ie(Ve())}function x(n){if(n.isOpen()){n.close();return}for(;o.length>0;)o.pop().close(!0);o.push(n),n.open(),d()}function u(){[...o].forEach(m=>m.close()),o=[]}window.addEventListener("resize",d);let h=j({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Je(),onOpen:()=>W(),onClose:()=>{let n=o.indexOf(h);n>-1&&o.splice(n,1),d()}}),b=j({id:"events-window",title:"Events",icon:"bx-calendar-event",content:rt(),onOpen:()=>Y(),onClose:()=>{let n=o.indexOf(b);n>-1&&o.splice(n,1),d()}}),r=j({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:at(),onOpen:()=>Le(),onClose:()=>{let n=o.indexOf(r);n>-1&&o.splice(n,1),d()}}),p=j({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:bt()},{icon:"bxs-component",title:"Processes",content:vt()},{icon:"bxs-brain",title:"Models",content:yt()},{icon:"bxs-hdd",title:"Hardware",content:xt()},{icon:"bxs-terminal",title:"Logs",content:ht()},{icon:"bxs-zap",title:"Agents",content:ft()}],onOpen:()=>{Ce(),be(),Te(),le()},onClose:()=>{let n=o.indexOf(p);n>-1&&o.splice(n,1),d()}}),c=j({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:it(),onOpen:()=>$e(),onClose:()=>{let n=o.indexOf(c);n>-1&&o.splice(n,1),d()}}),g=j({id:"settings-window",title:"Settings",icon:"bx-cog",content:ye(),onOpen:()=>{g.setContent(ye()),ke(g)},onClose:()=>{let n=o.indexOf(g);n>-1&&o.splice(n,1),d()}}),w=j({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:n=>{b.isOpen()||x(b),setTimeout(()=>{let m=document.querySelector(`.event-item[data-event-id="${n}"]`);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),m.classList.add("flash-highlight"),m.classList.contains("expanded")||m.click(),setTimeout(()=>m.classList.remove("flash-highlight"),2e3))},500)},viewAlert:n=>{h.isOpen()||x(h),setTimeout(()=>{let m=document.querySelector(`.event-item[data-alert-id="${n}"]`);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),m.classList.add("flash-highlight"),m.classList.contains("expanded")||m.click(),setTimeout(()=>m.classList.remove("flash-highlight"),2e3))},500)}},e){let n=document.getElementById("dexter-dropdown");n&&(n.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let m=document.getElementById("dexter-menu-container"),y=document.getElementById("dexter-menu-btn");m&&n&&y&&(m.addEventListener("mouseenter",()=>{n.classList.add("active"),y.classList.add("active")}),m.addEventListener("mouseleave",()=>{n.classList.remove("active"),y.classList.remove("active")}),y.addEventListener("click",S=>{S.stopPropagation();let E=localStorage.getItem("dex_last_window")||"alerts-window",$=null;E==="alerts-window"?$=h:E==="events-window"?$=b:E==="monitor-window"?$=p:E==="contacts-window"?$=r:E==="workspace-window"&&($=c),$&&x($)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{f("alerts-window"),x(h)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{f("events-window"),x(b)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{f("monitor-window"),x(p)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{f("contacts-window"),x(r)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{f("workspace-window"),x(c)}),document.getElementById("settings-icon")?.addEventListener("click",()=>x(g)),document.getElementById("close-all-windows")?.addEventListener("click",()=>u()),setInterval(()=>{h.isOpen()?W():Ye(),b.isOpen()&&Y(),p.isOpen()&&wt(),c.isOpen()&&$e()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{w.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{qe(document.getElementById("email-input").value),window.location.reload()}catch(m){let y=document.getElementById("login-error");y&&(y.textContent=m.message,y.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt):Tt();})();
