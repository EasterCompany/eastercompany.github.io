(()=>{function Ne(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function He(t=!1){let e=window.location.pathname,n=e==="/"||e==="/index.html",o=`
        <div class="nav-left" id="nav-left-wrapper" style="gap: 0;">
            ${`
        <div id="nav-left-container" style="display: flex; align-items: center; transition: transform 0.2s ease; gap: 5px; cursor: ${n?"default":"pointer"};">
            <i class='bx bx-chevron-left' id="nav-chevron" style="font-size: 28px; color: #fff; display: ${n?"none":"block"};"></i>
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
    `,l=document.createElement("nav");l.innerHTML=o,document.body.prepend(l)}function Pe(t){let e=window.location.pathname,n=e==="/"||e==="/index.html",a=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!a||!s||(t||!n?(a.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{a.style.transform="translateX(-3px)"},s.onmouseleave=()=>{a.style.transform="translateX(0)"}):(a.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function Re(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Oe=1e3;function j(t){let e=null,n=t.onClose||null,a=t.onOpen||null;function s(){e&&(e.style.zIndex=++Oe)}function o(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",l),a&&setTimeout(a,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++Oe,e.addEventListener("mousedown",s);let h=t.icon||"bx-window",f="",r="",m;t.tabs&&t.tabs.length>0?(f=`<div class="tab-bar">${t.tabs.map((w,i)=>{let d=w.icon?`<i class="bx ${w.icon}"></i>`:`<span class="tab-glyph">${w.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${i===0?"active":""}" data-tab-index="${i}">
                        ${d}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${i}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,m=`<div class="window-content">${t.tabs.map((w,i)=>`<div class="tab-content ${i===0?"active":""}" data-tab-content="${i}">${w.content}</div>`).join("")}</div>`):(t.title&&(r=`<div class="window-title">${t.title}</div>`),m=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${f}
                ${r}
                <i class="bx bx-x window-close"></i>
            </div>
            ${m}
        `,u.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",c=>{c.stopPropagation(),b()}),window.addEventListener("resize",l),t.tabs&&e.querySelectorAll(".tab").forEach(c=>{c.addEventListener("click",()=>{let g=c.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),c.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${g}"]`).classList.add("active"),v(c,e)})}),setTimeout(()=>{e.classList.add("open"),a&&a()},10)}function l(){if(!e||!e.classList.contains("open"))return;let u=e.querySelector(".tab.active");u&&v(u,e)}function v(u,h){setTimeout(()=>{let f=h.querySelector(".tab-bar");if(!f)return;let r=Array.from(f.querySelectorAll(".tab")),m=r.indexOf(u),c=f.clientWidth,g=r[Math.max(0,m-2)],w=r[Math.min(r.length-1,m+2)],i=g.offsetLeft-f.offsetLeft-25,x=w.offsetLeft+w.offsetWidth-f.offsetLeft+25-i,$=x<=c?i-(c-x)/2:u.offsetLeft-f.offsetLeft-c/2+u.offsetWidth/2;f.scrollTo({left:$,behavior:"smooth"})},350)}function b(u=!1){e&&(window.removeEventListener("resize",l),u?(e.remove(),e=null):(e.classList.remove("open"),n&&n(),setTimeout(()=>{e?.remove(),e=null},400)))}function p(u){let h=e?.querySelector(".window-content");h&&(h.innerHTML=u)}function y(){return e&&e.classList.contains("open")}return{open:o,close:b,setContent:p,isOpen:y,focus:s,id:t.id}}function Ue(){return!0}function qe(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function ze(t){localStorage.setItem("easter_user_email",t.trim())}var je="easter_theme",q={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function te(){return localStorage.getItem(je)||q.DARK}function Fe(t){if(!Object.values(q).includes(t))throw new Error("Invalid theme");localStorage.setItem(je,t),le(t)}function le(t){let e=document.body;if(Object.values(q).forEach(a=>{e.classList.remove(`theme-${a}`)}),e.classList.add(`theme-${t}`),[q.LIGHT,q.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function Ge(){let t=te();le(t)}function C(t,e,n=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",o=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${o}</div>`}function M(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function O(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!n)return;if(!e){n.textContent="Last updated: never";return}let a=Date.now(),s=Math.floor((a-e)/1e3),o;s<60?o=`${s}s ago`:s<3600?o=`${Math.floor(s/60)}m ago`:o=`${Math.floor(s/3600)}h ago`,n.textContent=`Last updated: ${o}`}var We=0;function Ve(){return We}function se(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!n)return;let a=n.querySelector(".notification-badge");a&&(e>0?(a.textContent=e>9?"9+":e,a.style.display="flex"):a.style.display="none")}function ne(t){We=t;let e=document.getElementById("dexter-nav-badge");e&&(t>0?e.style.display="flex":e.style.display="none");let n=document.getElementById("alerts-menu-item");if(n){let s=n.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="auto",n.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}let a=document.getElementById("switch-alerts");if(a){let s=a.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="8px",a.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}}function de(){let t=document.getElementById("alerts-list");if(!t)return;let e=t.querySelectorAll(".alert-unread:not(.priority-low)").length;ne(e)}function Se(){return"https://event.easter.company"}function It(){return"https://discord.easter.company"}var At="http://127.0.0.1:8100",_t="http://127.0.0.1:8300",Mt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function me(t){let e=M(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,o)=>{let l=Mt[o];return l?`<span class="${l}">`:""});let n=(e.match(/<span/g)||[]).length,a=(e.match(/<\/span/g)||[]).length;return n>a&&(e+="</span>".repeat(n-a)),e}function ie(t){if(!t)return"";let e=M(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var K=null,J=null,re=!1,ce=!1;async function I(t,e={}){if(K)try{let s=await fetch(K+t,e);if(s.ok)return s;K=null}catch{K=null}let n=Se(),a=At;try{let s=await fetch(n+t,e);if(s.ok)return K=n,re&&(console.log("\u2728 Production event service restored."),re=!1),s;throw new Error("Primary failed")}catch{re||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${a}`),re=!0);try{let o=await fetch(a+t,e);if(o.ok)return K=a,o;throw new Error("Fallback failed")}catch(o){throw o}}}async function Ke(t,e={}){if(J)try{let s=await fetch(J+t,e);if(s.ok)return s;J=null}catch{J=null}let n=It(),a=_t;try{let s=await fetch(n+t,e);if(s.ok)return J=n,ce&&(console.log("\u2728 Production discord service restored."),ce=!1),s;throw new Error("Primary failed")}catch{ce||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${a}`),ce=!0);try{let o=await fetch(a+t,e);if(o.ok)return J=a,o;throw new Error("Fallback failed")}catch(o){throw o}}}var Je=()=>`
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
`,pe=null,F=new Set,ue=[];async function G(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Bt(),t&&(e.innerHTML="<p>Updating...</p>");let n="/events?ml=1000&format=json&event.type=system.notification.generated";try{let a=await I(n);if(!a.ok)throw new Error("Service is offline or unreachable.");let o=(await a.json()).events||[];pe=Date.now(),O(0,pe);let l=Date.now(),v=24*60*60*1e3,b=o.filter(i=>{let d=localStorage.getItem(`alert_read_ts_${i.id}`);if(!d)return!0;let x=parseInt(d);return l-x<v});b.sort((i,d)=>{let x=k=>{let A=k.event;if(typeof A=="string")try{A=JSON.parse(A)}catch{return"low"}return(A.priority||"low").toLowerCase()},$=k=>k==="critical"?4:k==="high"?3:k==="medium"?2:1,E=$(x(i)),S=$(x(d));return E!==S?S-E:d.timestamp-i.timestamp}),ue=b;let p=i=>{let d=i.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return"low"}return(d.priority||"low").toLowerCase()},y=[],h=new Set(b.map(i=>p(i))).size>1;if(b.length>0){let i=null;b.forEach(d=>{let x=p(d);h&&x!==i&&(y.push({id:`divider-${x}`,type:"divider",label:x.toUpperCase()}),i=x),y.push(d)})}if(t&&(e.innerHTML=""),b.length===0){e.innerHTML=C("empty","No alerts yet."),de();return}let f=i=>{let d=i.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return null}let x=d.title||"Untitled Alert",$=d.body||"No description provided.",E=d.priority||"low",S=!!d.alert,k=d.category||"system",A=d.related_event_ids||[],D=d.audit_event_id,_=!!localStorage.getItem(`alert_read_ts_${i.id}`),N=new Date(i.timestamp*1e3),R=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),T=_?"event-border-grey":"event-border-blue";!_&&S&&(T="event-border-red"),_&&(E==="high"||E==="critical")?T="event-border-red":_&&E==="medium"&&(T="event-border-orange");let H=_?"alert-read":"alert-unread",P=F.has(i.id),he=P?"expanded":"",xe=P?"display: block;":"display: none;",Ae="",_e="";A.length>0&&(_e=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${A.map(z=>`<a href="#" onclick="window.dexter.viewEvent('${z}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px; font-family: monospace;">${z.substring(0,8)}...</a>`).join(", ")}</span>
                    </div>`);let Me="";D&&(Me=`
              <div class="event-detail-row">
                  <span class="detail-label">Generated By:</span>
                  <span class="detail-value"><a href="#" onclick="window.dexter.viewEvent('${D}'); return false;" style="color: #bb86fc; text-decoration: none; font-family: monospace; border-bottom: 1px dashed #bb86fc;">${D.substring(0,8)}...</a></span>
              </div>`),Ae=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${E==="high"||E==="critical"?"#ff4d4d":E==="medium"?"#ffa500":"#888"}">${E.toUpperCase()}</span>
                </div>
                ${Me}
                ${_e}
                <div class="event-detail-block" style="text-align: left;">
                    <div class="detail-pre">${ie(`### Insight

`+$)}</div>
                </div>
            `;let U=document.createElement("div");U.className=`event-item notification-item ${T} ${H} ${he} cursor-pointer priority-${E}`,U.dataset.alertId=i.id,U.onclick=function(z){if(this.classList.contains("expanded")){this.classList.remove("expanded"),F.delete(i.id);let ee=this.querySelector(".event-details");ee&&(ee.style.display="none")}else{this.classList.add("expanded"),F.add(i.id);let ee=this.querySelector(".event-details");if(ee&&(ee.style.display="block"),!localStorage.getItem(`alert_read_ts_${i.id}`)){localStorage.setItem(`alert_read_ts_${i.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ee="event-border-grey";E==="high"||E==="critical"?Ee="event-border-red":E==="medium"&&(Ee="event-border-orange"),this.classList.add(Ee),de()}}};let Qt=x,kt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[k]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${R}</span>
                    <span class="event-date">${L}</span>
                </div>
                <div class="event-icon"><i class='bx ${kt}'></i></div>
                <div class="event-content">
                    <div class="event-service">${k.toUpperCase()} ${S?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${x}</div>
                    <div class="event-details" style="${xe}">
                        ${Ae}
                    </div>
                </div>
            `;let Be=U.querySelector(".event-details");Be&&Be.addEventListener("click",z=>{z.stopPropagation()});let De=U.querySelector(".close-details-btn");return De&&De.addEventListener("click",z=>{z.stopPropagation(),U.classList.remove("expanded");let we=U.querySelector(".event-details");we&&(we.style.display="none"),F.delete(i.id)}),U},r=i=>{let d=document.createElement("div");d.className="notification-divider",d.dataset.alertId=i.id;let x="#888888";return i.label==="CRITICAL"?x="#ff4d4d":i.label==="HIGH"?x="#ff8888":i.label==="MEDIUM"&&(x="#ffa500"),d.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${x}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,d.innerHTML=`<span style="white-space: nowrap;">${i.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${x}44, transparent); flex-grow: 1;"></div>`,d},m=Array.from(e.children),c=new Map(m.map(i=>[i.dataset.alertId,i])),g=new Set(y.map(i=>i.id));m.forEach(i=>{let d=i.dataset.alertId;(!d||!g.has(d))&&i.remove()});let w=null;y.forEach((i,d)=>{let x=c.get(i.id);(!x||t)&&(x&&x.remove(),i.type==="divider"?x=r(i):x=f(i),!x)||(d===0?e.firstElementChild!==x&&e.prepend(x):w&&w.nextElementSibling!==x&&w.after(x),w=x)}),pe=Date.now(),O(0,pe),de()}catch(a){console.error("Error fetching alerts:",a),e.children.length===0&&(e.innerHTML=C("offline","Failed to load alerts.","The event service may be offline."))}}function Bt(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),n=document.getElementById("alerts-close-all"),a=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ue.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),G(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ue.forEach(s=>{F.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),G(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{F.clear(),G(!0)},n.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{let s=Date.now()-1728e5;ue.forEach(o=>{localStorage.setItem(`alert_read_ts_${o.id}`,s.toString())}),F.clear(),G(!0)},a.dataset.listenerAttached="true")}async function Ye(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await I(t);if(!e.ok)return;let a=(await e.json()).events||[],s=0;a.forEach(o=>{let l=o.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}if((l.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${o.id}`)||s++}),ne(s)}catch{}}var Xe=()=>`
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
`,W=new Set,Qe=[],Y=null;async function V(t=!1){let e=document.getElementById("roadmap-list");if(e){Dt();try{let n=await I("/roadmap");if(!n.ok)throw new Error("Offline");let a=await n.json();if(Qe=a,a.length===0){e.innerHTML=C("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let s=p=>{let y=W.has(p.id),u=p.state==="draft",h=p.state==="published",f=p.state==="consumed",r="event-border-grey";h&&(r="event-border-blue"),f&&(r="event-border-purple");let c=new Date(p.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),g=document.createElement("div");g.className=`event-item notification-item ${r} cursor-pointer ${y?"expanded":""}`,g.dataset.itemId=p.id,g.onclick=d=>{if(d.target.closest("button"))return;g.classList.contains("expanded")?(g.classList.remove("expanded"),g.querySelector(".event-details").style.display="none",W.delete(p.id)):(g.classList.add("expanded"),g.querySelector(".event-details").style.display="block",W.add(p.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${p.state.toUpperCase()}]</span>`;g.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${c.split(",")[1]}</span>
          <span class="event-date">${c.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${M(p.content)}</div>
          <div class="event-details" style="${y?"display: block;":"display: none;"} ">
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
            ${f?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(p.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let i=g.querySelector(".event-details");return i&&i.addEventListener("click",d=>{d.stopPropagation()}),g.querySelector(".edit-btn")?.addEventListener("click",()=>Nt(p)),g.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Ht(p)),g.querySelector(".delete-btn")?.addEventListener("click",()=>Pt(p.id)),g.querySelector(".close-details-btn")?.addEventListener("click",d=>{d.stopPropagation(),g.classList.remove("expanded"),g.querySelector(".event-details").style.display="none",W.delete(p.id)}),g},o=Array.from(e.children),l=new Map(o.map(p=>[p.dataset.itemId,p])),v=new Set(a.map(p=>p.id));o.forEach(p=>{let y=p.dataset.itemId;(!y||!v.has(y))&&p.remove()});let b=null;a.forEach((p,y)=>{let u=l.get(p.id);(!u||t)&&(u&&u.remove(),u=s(p),!u)||(y===0?e.firstElementChild!==u&&e.prepend(u):b&&b.nextElementSibling!==u&&b.after(u),b=u)})}catch{e.children.length===0&&(e.innerHTML=C("offline","Failed to load roadmap.","The event service may be offline."))}}}function Dt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),n=document.getElementById("roadmap-cancel"),a=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Y=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",Y=null},n.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let o=document.getElementById("roadmap-editor-input").value;if(!o.trim())return;let l=Y?`/roadmap/${Y}`:"/roadmap",v=Y?"PATCH":"POST";try{await I(l,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:o})}),document.getElementById("roadmap-editor-container").style.display="none",V(!0)}catch(b){console.error(b)}},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{Qe.forEach(o=>W.add(o.id)),V(!0)},a.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{W.clear(),V(!0)},s.dataset.listenerAttached="true")}function Nt(t){Y=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Ht(t){let e=t.state==="published"?"draft":"published";try{await I(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),V(!0)}catch(n){console.error(n)}}async function Pt(t){if(confirm("Delete this roadmap item?"))try{await I(`/roadmap/${t}`,{method:"DELETE"}),W.delete(t),V(!0)}catch(e){console.error(e)}}var tt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,st=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,et=null,X=new Set,nt=[];async function ge(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Rt();let n="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let a=await I(n);if(!a.ok)throw new Error("Service is offline or unreachable.");let o=(await a.json()).events||[];if(nt=o,et=Date.now(),O(2,et),o.length===0){e.innerHTML=C("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),se(1,0);return}t&&(e.innerHTML="");let l=u=>{let h=u.event;if(typeof h=="string")try{h=JSON.parse(h)}catch{return null}let f=h.title||"Untitled Blueprint",r=h.summary||h.body||"No summary provided.",m=h.content||"",c=h.category||"architecture",g=h.affected_services||[],w=h.implementation_path||[],i=new Date(u.timestamp*1e3),d=i.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),x=i.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),$=X.has(u.id),E=$?"display: block;":"display: none;",S=document.createElement("div");S.className=`event-item notification-item event-border-purple cursor-pointer ${$?"expanded":""}`,S.dataset.blueprintId=u.id;let A={architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[c]||"bx-paint";S.onclick=function(R){if(this.classList.contains("expanded")){this.classList.remove("expanded"),X.delete(u.id);let T=this.querySelector(".event-details");T&&(T.style.display="none")}else{this.classList.add("expanded"),X.add(u.id);let T=this.querySelector(".event-details");T&&(T.style.display="block")}};let D=g.length>0?`<div class="event-detail-row"><span class="detail-label">Related Services:</span> <span class="detail-value">${g.join(", ")}</span></div>`:"",B="";w.length>0&&(B=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(R=>`<li>${M(R)}</li>`).join("")}
                        </ul>
                    </div>
                `),S.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${d}</span>
                    <span class="event-date">${x}</span>
                </div>
                <div class="event-icon"><i class='bx ${A}'></i></div>
                <div class="event-content">
                    <div class="event-service">${c.toUpperCase()}</div>
                    <div class="event-message">${f}</div>
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; color: #fff;">
                            ${M(r)}
                        </div>
                        ${D}
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${M(m)}</div>
                        </div>
                        ${B}
                    </div>
                </div>
            `;let _=S.querySelector(".event-details");_&&_.addEventListener("click",R=>{R.stopPropagation()});let N=S.querySelector(".close-details-btn");return N&&N.addEventListener("click",R=>{R.stopPropagation(),S.classList.remove("expanded");let L=S.querySelector(".event-details");L&&(L.style.display="none"),X.delete(u.id)}),S},v=Array.from(e.children),b=new Map(v.map(u=>[u.dataset.blueprintId,u])),p=new Set(o.map(u=>u.id));v.forEach(u=>{let h=u.dataset.blueprintId;(!h||!p.has(h))&&u.remove()});let y=null;o.forEach((u,h)=>{let f=b.get(u.id);(!f||t)&&(f&&f.remove(),f=l(u),!f)||(h===0?e.firstElementChild!==f&&e.prepend(f):y&&y.nextElementSibling!==f&&y.after(f),y=f)}),se(2,o.length)}catch(a){console.error("Error fetching blueprints:",a),e.children.length===0&&(e.innerHTML=C("offline","Failed to load blueprints.","The event service may be offline."))}}function Rt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{nt.forEach(n=>X.add(n.id)),ge(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.clear(),ge(!0)},e.dataset.listenerAttached="true")}var it=()=>`
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
`;async function $e(){await Promise.all([V(),ge()])}var at=()=>`
    <div class="system-section-header">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,Ot=null;async function Le(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>Le(),e.dataset.listenerAttached="true");try{let n=await Ke("/contacts");if(!n.ok)throw new Error("Service unreachable");let s=(await n.json()).members||[];if(Ot=Date.now(),s.length===0){t.innerHTML=C("empty","No contacts found.","Check your Discord connection.");return}let o={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((l,v)=>{let b=o[l.level]??10,p=o[v.level]??10;return b!==p?b-p:l.username.localeCompare(v.username)}),t.innerHTML=s.map(l=>{let v=l.color?"#"+l.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",b=l.status==="online"?"#5eff5e":l.status==="idle"?"#ffa500":l.status==="dnd"?"#ff4d4d":"#666",p="#888";l.level==="Me"||l.level==="Master"?p="#bb86fc":l.level==="Admin"?p="#cf6679":l.level==="Moderator"?p="#03dac6":l.level==="Contributor"&&(p="#ffa500");let y=l.level==="Me",u=y?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",h=y?"2px solid #bb86fc":`1px solid ${v}33`;return`
                <div class="user-profile-section" style="background: ${u}; padding: 15px; border-radius: 8px; border: ${h}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${y?"#bb86fc":v}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${l.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${y?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${b}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${l.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${p}; font-weight: 600; text-transform: uppercase;">${y?"DEXTER (ME)":l.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${l.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=C("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Ut={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function ot(t,e){let n=Ut[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(n=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!n)return t;let a=n.replace(/\{(\w+)\}/g,(s,o)=>e[o]!==void 0&&e[o]!==null?e[o]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(a+=` (Translation: ${e.english_translation})`),a}var rt=()=>`
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
`,ve=null,Z=new Set,ae=[],fe="all",qt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},zt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function lt(t){for(let[e,n]of Object.entries(qt))if(n.includes(t))return e;return"system"}function jt(t){return zt[t]||"bx-square-rounded"}async function Q(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ft();let a=`/events?ml=${fe==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let s=await I(a);if(!s.ok)throw new Error("Service is offline or unreachable.");let l=(await s.json()).events||[],v=l;if(fe!=="all"&&(v=l.filter(f=>{let r=f.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return!1}return lt(r.type)===fe})),ae=v.slice(0,50),ve=Date.now(),O(1,ve),ae.length===0){e.innerHTML=C("empty","No events found for this filter.");return}t&&(e.innerHTML="");let b=f=>{let r=f.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return null}let m=r.type,c=lt(m),g=jt(m),w=m==="engagement.decision"||m==="messaging.bot.sent_message"||m==="messaging.user.sent_message"||m==="moderation.explicit_content.deleted"||m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="system.cli.command"||m==="system.analysis.audit"||m==="system.test.completed"||m==="error_occurred"||m==="system.cli.status"||m==="system.attention.expired"||m.startsWith("system.roadmap")||m.startsWith("system.process"),i="event-border-grey";w&&(m==="moderation.explicit_content.deleted"||m==="error_occurred"?i="event-border-red":m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="system.analysis.audit"?i="event-border-purple":m==="system.attention.expired"||m==="system.cli.command"||m==="system.cli.status"?i="event-border-orange":m==="system.test.completed"?i=r.test?.status==="OK"&&r.lint?.status==="OK"&&r.format?.status==="OK"?"event-border-blue":"event-border-red":i="event-border-blue");let d=w?"cursor-pointer":"",x=Z.has(f.id),$=x?"expanded":"",E=x?"display: block;":"display: none;",S=new Date(f.timestamp*1e3),k=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=ot(m,r),B=r.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${r.user_level})</span>`:"",_="";if(w){let L="";if(m==="engagement.decision")L=`
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
                    `;else if(m==="system.attention.expired"){let T=r.timestamp-r.last_active,H=Math.floor(T/60);L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value" style="color: #bb86fc;">${r.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${H} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context (Last Input):</span>
                            <div class="detail-pre">${ie(r.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Thought Process (Last Output):</span>
                            <div class="detail-pre">${ie(r.last_output||"None")}</div>
                        </div>
                    `}else if(m==="messaging.bot.sent_message")L=`
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
                    `;else if(m==="moderation.explicit_content.deleted")L=`
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
                    `;else if(m==="analysis.link.completed")L=`
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
                    `;else if(m==="analysis.visual.completed"){let T="";r.base64_preview?T=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${r.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:r.url&&(T=`<div class="event-detail-block"><img src="${r.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${r.filename}</span>
                        </div>
                        ${T}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${M(r.description)||"None"}</pre>
                        </div>
                    `}else if(m==="system.cli.command")L=`
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
                    `;else if(m==="system.analysis.audit")L=`
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
                    `;else if(m==="system.test.completed")L=`
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
                    `;else if(m==="error_occurred")L=`
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
                    `;else if(m==="system.cli.status")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${r.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${M(r.message)}</pre>
                        </div>
                    `;else if(m==="messaging.user.sent_message"){let T="";r.attachments&&r.attachments.length>0&&(T=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${r.attachments.map(P=>{let he=P.content_type&&P.content_type.startsWith("image/"),xe=(P.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${he?`<div class="attachment-thumb-container"><img src="${P.url}" alt="${P.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${P.url}" target="_blank" class="attachment-link">${P.filename}</a>
                                        <span class="attachment-meta">${P.content_type} \u2022 ${xe}</span>
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
                `}let N=document.createElement("div");N.className=`event-item ${i} ${d} ${$}`,N.dataset.eventId=f.id,N.onclick=function(L){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Z.delete(f.id);let H=this.querySelector(".event-details");H&&(H.style.display="none")}else{this.classList.add("expanded"),Z.add(f.id);let H=this.querySelector(".event-details");H&&(H.style.display="block")}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${k}</span>
                    <span class="event-date">${A}</span>
                </div>
                <div class="event-icon"><i class='bx ${g}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${c}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${c}</span>
                        ${f.service} ${B}
                    </div>
                    <div class="event-message">${D}</div>
                    ${_}
                </div>
            `;let R=N.querySelector(".event-details");if(R&&R.addEventListener("click",L=>{L.stopPropagation()}),w){let L=N.querySelector(".close-details-btn");L&&L.addEventListener("click",T=>{T.stopPropagation();let H=T.target.closest(".event-item");if(H){H.classList.remove("expanded"),Z.delete(f.id);let P=H.querySelector(".event-details");P&&(P.style.display="none")}})}return N},p=Array.from(e.children),y=new Map(p.map(f=>[f.dataset.eventId,f])),u=new Set(ae.map(f=>f.id));p.forEach(f=>{let r=f.dataset.eventId;(!r||!u.has(r))&&f.remove()});let h=null;ae.forEach((f,r)=>{let m=y.get(f.id);(!m||t)&&(m&&m.remove(),m=b(f),!m)||(r===0?e.firstElementChild!==m&&e.prepend(m):h&&h.nextElementSibling!==m&&h.after(m),h=m)}),ve=Date.now(),O(1,ve)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=C("offline","Failed to load events.","The event service may be offline."))}}function Ft(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),n=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ae.forEach(a=>Z.add(a.id)),Q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Z.clear(),Q(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.querySelectorAll(".filter-btn").forEach(a=>{a.onclick=()=>{n.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),a.classList.add("active"),fe=a.dataset.filter,Q(!0)}}),n.dataset.listenerAttached="true")}function ct(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Gt=null;async function oe(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await I("/logs");if(!e.ok)throw new Error("Logs offline");let n=await e.json();if(!n||n.length===0)return t.innerHTML=C("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let a=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=n.filter(l=>!a.includes(l.id));s.forEach(l=>{l.logs&&Array.isArray(l.logs)?l.logs.reverse():l.logs=[]}),s.reverse();let o=s.map(l=>{let v=l.logs.join(`
`),b=[...l.logs];if(b.length<25){let y=25-b.length;for(let u=0;u<y;u++)b.push("")}else b.length>25&&(b=b.slice(-25));let p=b.map(y=>me(y)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${l.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(v)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${l.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${p}</pre>
                </div>
            `}).join("");return t.innerHTML=o,document.querySelectorAll(".copy-logs-btn").forEach(l=>{l.addEventListener("click",()=>{let v=unescape(l.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let b=l.querySelector("i");b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(l=>{l.addEventListener("click",async()=>{let v=l.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${v}?`))try{(await I(`/logs?service_id=${v}`,{method:"DELETE"})).ok&&oe()}catch(b){console.error("Error clearing logs:",b)}})}),Gt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=C("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var vt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-zap' style="color: #bb86fc;"></i>
            <h2>Analyst & Vitals</h2>
        </div>
        <div class="analyst-status-section" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0; font-size: 0.9em; color: #888; text-transform: uppercase; letter-spacing: 1px;">Analyst Tiers</h3>
                <button id="analyst-reset-btn" class="notif-action-btn"><i class='bx bx-refresh'></i> Reset</button>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Guardian</span>
                    <span id="analyst-t1-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Architect</span>
                    <span id="analyst-t2-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Strategist</span>
                    <span id="analyst-t3-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
            </div>
            
            <div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                 <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Cognitive Idle</span>
                    <span id="analyst-idle-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
                 <div class="analyst-indicator">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase;">Active Procs</span>
                    <span id="vitals-processes-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em;">-</span>
                </div>
            </div>
        </div>`,ft=()=>`
        <div class="system-section-header">
            <i class='bx bxs-component' style="color: #03dac6;"></i>
            <h2>Live Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>
        
        <div class="system-section-header">
            <i class='bx bx-history' style="color: #888;"></i>
            <h2>Process History</h2>
        </div>
        <div id="processes-history-widgets" class="system-monitor-widgets" style="margin-bottom: 30px; opacity: 0.7;"></div>`,bt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,yt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,ht=()=>`
        <div class="system-section-header">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2>Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
        </div>
        <div id="hardware-metrics" class="hardware-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
            <div class="hardware-section" id="hw-cpu">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;"><i class='bx bx-chip'></i> CPU</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 15px;"></div>
            </div>
            <div class="hardware-section" id="hw-ram">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;"><i class='bx bx-memory-card'></i> RAM</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 15px;"></div>
            </div>
            <div class="hardware-section" id="hw-gpu">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;"><i class='bx bxs-card'></i> GPU</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 15px;"></div>
            </div>
            <div class="hardware-section full-width" id="hw-storage" style="grid-column: 1 / -1;">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px;"><i class='bx bxs-hdd'></i> Storage</h3>
                <div class="hw-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;"></div>
            </div>
        </div>`,xt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${ct()}
        </div>`;async function wt(){await Promise.all([be(),Ce(),Te()]),await oe()}var dt=null,mt=null,pt=null;async function Et(){try{return await(await I("/system_monitor")).json()}catch{return null}}async function ut(){try{return await(await I("/system/hardware")).json()}catch{return null}}async function Wt(){try{return await(await I("/processes")).json()}catch{return null}}async function Vt(){try{return await(await I("/analyst/status")).json()}catch{return null}}async function Ce(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),n=document.querySelector("#hw-cpu .hw-content"),a=document.querySelector("#hw-ram .hw-content"),s=document.querySelector("#hw-gpu .hw-content"),o=document.querySelector("#hw-storage .hw-content"),l=c=>{if(c){if(a){let g=(c.MEMORY_BYTES/1073741824).toFixed(1);a.innerHTML=`
                <div style="text-align: center;">
                    <span style="font-size: 2.5em; font-weight: bold; color: #fff; display: block;">${g} <span style="font-size: 0.4em; color: #888;">GB</span></span>
                    <span style="font-size: 0.9em; color: #888;">Total System Memory</span>
                </div>`}if(n&&c.CPU&&c.CPU.length>0){let g=c.CPU[0];n.innerHTML=`
                <div style="text-align: center;">
                    <span style="font-size: 1.1em; color: #fff; display: block; margin-bottom: 5px; font-weight: 600;">${g.LABEL}</span>
                    <div style="display: flex; justify-content: center; gap: 15px; margin-top: 10px;">
                        <div><span style="display: block; font-size: 1.2em; color: #03dac6;">${g.COUNT}</span><span style="font-size: 0.7em; color: #888; text-transform: uppercase;">Cores</span></div>
                        <div><span style="display: block; font-size: 1.2em; color: #bb86fc;">${g.THREADS}</span><span style="font-size: 0.7em; color: #888; text-transform: uppercase;">Threads</span></div>
                    </div>
                </div>`}s&&(c.GPU&&c.GPU.length>0?s.innerHTML=c.GPU.map(g=>{let w=(g.VRAM/1073741824).toFixed(1);return`
                        <div style="text-align: center; margin-bottom: 10px;">
                            <span style="font-size: 1.1em; color: #fff; display: block; margin-bottom: 5px; font-weight: 600;">${g.LABEL}</span>
                            <span style="font-size: 0.9em; color: #888;">${w} GB VRAM</span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.1); margin: 10px 0;"></div>'):s.innerHTML='<p style="text-align: center; color: #666;">No GPU detected</p>'),o&&c.STORAGE&&c.STORAGE.length>0?o.innerHTML=c.STORAGE.map(g=>{let w=(g.USED/1073741824).toFixed(1),i=(g.SIZE/(1024*1024*1024)).toFixed(1),d=g.SIZE>0?(g.USED/g.SIZE*100).toFixed(0):0,x=g.MOUNT_POINT||"Unmounted";return`
                    <div class="service-widget" style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #888;"></i>
                                <span style="font-weight: 600; color: #fff;">${g.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.8em; color: #666; font-family: monospace;">${x}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.8em; color: #aaa; margin-bottom: 5px;">
                            <span>${w} GB used</span>
                            <span>${i} GB total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${d>90?"#ff4d4d":"#03dac6"}; width: ${d}%; height: 100%;"></div>
                        </div>
                    </div>`}).join(""):o&&(o.innerHTML='<p style="text-align: center; color: #666;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let c=await ut();c?(l(c),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},e.dataset.listenerAttached="true"),n&&!n.hasChildNodes())){let c=await ut();l(c)}if(!t)return;let v=await Et();if(!v||!v.services){t.children.length===0&&(t.innerHTML=C("offline","Failed to load system metrics.","The event service may be offline."));return}dt=Date.now(),O(0,dt);let b=v.services||[];Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function p(c){return!c||c==="N/A"||c==="unknown"||c.trim()===""?"-":c}function y(c){if(!c||c==="N/A"||c==="unknown")return"-";let g=c.match(/^(\d+\.\d+\.\d+)/);return g?g[0]:c.split(".").slice(0,3).join(".")||"-"}function u(c){return!c||c.length<=28?c:c.substring(0,28)+"..."}function h(c){if(!c||c==="N/A"||c==="unknown")return"-";let g=c.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!g)return"-";let w=parseInt(g[1])||0,i=parseInt(g[2])||0,d=parseInt(g[3])||0,x=parseFloat(g[4])||0,$=w*86400+i*3600+d*60+x,E=Math.floor($/86400);if(E>0)return`${E}d`;let S=Math.floor($/3600);if(S>0)return`${S}h`;let k=Math.floor($/60);return k>0?`${k}m`:`${Math.floor($)}s`}function f(c){let g=c.status==="online",w=g?"service-widget-online":"service-widget-offline",i=g?"bx-check-circle":"bx-x-circle",d=g?"OK":"BAD",x=c.version?y(c.version.str):"-",$=c.cpu&&c.cpu!=="N/A"?c.cpu:"-",E=c.memory&&c.memory!=="N/A"?c.memory:"-",S=$!=="-"?"#00ff00":"#666",k=$!=="-"?"#fff":"#666",A=E!=="-"?"#00ff00":"#666",D=E!=="-"?"#fff":"#666",B=h(c.uptime),_="";return g?_=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${x}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${B}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${S};"></i>
                        <span style="color: ${k};">${$}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${A};"></i>
                        <span style="color: ${D};">${E}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${w}" data-service-id="${c.id}"><div class="service-widget-header"><i class="bx ${i}"></i><h3>${c.short_name||c.id}</h3><span class="service-widget-status">${d}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${u(c.domain&&c.port?`${c.domain}:${c.port}`:"")}</span></div>${_}</div></div>`}let r=new Map(Array.from(t.querySelectorAll(".service-widget")).map(c=>[c.dataset.serviceId,c])),m=new Set(b.map(c=>c.id));for(let[c,g]of r)m.has(c)||g.remove();b.forEach(c=>{let g=f(c),w=r.get(c.id);w?w.outerHTML!==g&&(w.outerHTML=g):t.insertAdjacentHTML("beforeend",g)})}async function Te(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Et();if(!e){t.children.length===0&&(t.innerHTML=C("offline","Failed to load model status.","The event service may be offline."));return}mt=Date.now(),O(2,mt);let n=e.models||[],a=e.whisper;Array.from(t.children).forEach(v=>{v.classList.contains("service-widget")||v.remove()});function s(v){let b=v.status==="Ready";return`
                <div class="service-widget ${b?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${b?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${v.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function o(v){let b=v.status==="Downloaded",p=b?"service-widget-online":"service-widget-offline",y=b?"OK":"MISSING",u=b&&v.size>0?`${(v.size/1e9).toFixed(2)} GB`:"-",h=v.name;return v.type==="custom"&&h.endsWith(":latest")&&(h=h.replace(":latest","")),`<div class="service-widget ${p}" data-model-name="${v.name}"><div class="service-widget-header"><i class="bx ${b?"bx-check-circle":"bx-x-circle"}"></i><h3>${h}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${v.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${u}</span></div></div></div>`}let l="";if(a&&(l+=s(a)),l+=n.map(o).join(""),!l){t.innerHTML=C("empty","No models found.");return}t.innerHTML!==l&&(t.innerHTML=l)}async function be(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),n=document.getElementById("analyst-t2-val"),a=document.getElementById("analyst-t3-val"),s=document.getElementById("analyst-idle-val"),o=document.getElementById("analyst-reset-btn");o&&!o.dataset.listenerAttached&&(o.onclick=async()=>{o.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await I("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{o.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{o.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),be()}catch{o.innerHTML="<i class='bx bx-error'></i> Failed"}},o.dataset.listenerAttached="true");let l=await Vt();if(l){let h=Math.floor(Date.now()/1e3),f=l.active_tier,r=(m,c,g)=>{if(f===g||g==="guardian"&&f==="tests"){m.textContent="Working",m.style.color="#bb86fc";return}let w=c-h;if(w<=0)m.textContent="Ready",m.style.color="#5eff5e";else{let i=Math.floor(w/60),d=w%60;m.textContent=`${i}m ${d}s`,m.style.color="#fff"}};if(e&&l.guardian&&r(e,l.guardian.next_run,"guardian"),n&&l.architect&&r(n,l.architect.next_run,"architect"),a&&l.strategist&&r(a,l.strategist.next_run,"strategist"),s&&l.system_idle_time!==void 0){let m=l.system_idle_time,c=Math.floor(m/60),g=m%60;s.textContent=`${c}m ${g}s`,m>300?s.style.color="#5eff5e":m>60?s.style.color="#ffa500":s.style.color="#fff"}}else[e,n,a,s].forEach(f=>{f&&(f.textContent="Offline",f.style.color="#ff4d4d")});let v=await Wt(),b=[],p=[];v&&(Array.isArray(v)?b=v:(b=v.active||[],p=v.history||[]));let y=document.getElementById("vitals-processes-val");if(y)if(v){let h=b.length;y.textContent=h>0?`${h} Active`:"Idle",y.style.color=h>0?"#bb86fc":"#fff"}else y.textContent="-",y.style.color="#888";if(v===null){t.children.length===0&&(t.innerHTML=C("offline","Failed to load process status.","The event service may be offline."));return}pt=Date.now(),O(1,pt),b.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=C("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),gt(t,b,!1));let u=document.getElementById("processes-history-widgets");u&&(p.length===0?u.querySelector(".tab-placeholder")||(u.innerHTML=C("empty","No recent history.")):(u.querySelector(".tab-placeholder")&&(u.innerHTML=""),gt(u,p,!0))),se(1,b.length)}function gt(t,e,n){function a(l){let v="";l.end_time?v=`${l.end_time-l.start_time}s`:v=`${Math.floor(Date.now()/1e3-l.start_time)}s`;let b=l.retries>0?`<span class="process-retry-badge">Retry ${l.retries}</span>`:"",p=l.channel_id,y={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};y[p]?p=y[p]:/^\d+$/.test(p)&&(p=`Channel ${p}`);let u=n?"#888":"#fff",h=n?"border-left: 3px solid #666;":"";return`
                <div class="service-widget process-widget" data-channel-id="${l.channel_id}-${l.start_time}" style="${h}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${u}"></i>
                        <h3 style="color: ${u}">${p}</h3>
                        ${b}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${u}">${l.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${u}">${v}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${u}">${l.pid}</span>
                        </div>
                    </div>
                </div>`}let s=new Map(Array.from(t.querySelectorAll(".process-widget")).map(l=>[l.dataset.channelId,l])),o=new Set(e.map(l=>`${l.channel_id}-${l.start_time}`));for(let[l,v]of s)o.has(l)||v.remove();e.forEach(l=>{let v=`${l.channel_id}-${l.start_time}`,b=a(l),p=s.get(v);p?p.outerHTML!==b&&(p.outerHTML=b):t.insertAdjacentHTML("beforeend",b)})}function ye(){let t=te(),e=qe()||"master@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},a=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(q).map(s=>`
                    <div class="theme-card ${t===s?"active":""}" data-theme="${s}">
                        <div class="theme-preview theme-preview-${s.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${s.charAt(0).toUpperCase()+s.slice(1)}</h3>
                            <p>${s===q.DARK?"Simple, clean, dark.":s===q.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${a?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ke(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let o=this.dataset.theme;Fe(o),t.setContent(ye()),ke(t)})});let n=document.getElementById("notifications-toggle");n&&(n.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let a=document.getElementById("analytics-toggle");a&&(a.checked=localStorage.getItem("easter_analytics_enabled")!=="false",a.onclick=s=>{let o=s.target.checked;localStorage.setItem("easter_analytics_enabled",o),window.EASTER_ANALYTICS_ENABLED=o,window.EASTER_DEBUG_MODE=o})}var Kt="2.8.143",Lt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Tier 1 Guardian Analyst technical sentry.",usage:"dex guardian",category:"cognitive",docs:{overview:"Guardian is the Technical Sentry of the ecosystem. It performs automated health checks and audits.",details:["Scans for service crashes and restarts.","Analyzes logs for high-severity errors.","Verifies system-wide resource availability.","Triggers immediate notifications if anomalies are detected."],extended_usage:"dex guardian [--force] [--quiet]"},demo_output:["\u2588 \x1B[1mGUARDIAN ANALYST\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Initializing Tier 1 Analysis..."," \u2699\uFE0F Fetching system context..."," \u2699\uFE0F Running Guardian Analysis...","","\x1B[32mNo significant insights found.\x1B[0m"," \u2699\uFE0F Resetting Guardian timer...","\x1B[32m\u2713 Guardian timer reset.\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
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
    `;for(let[n,a]of Object.entries(t)){let s=Lt.filter(o=>o.category===n);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${a.icon}' style="color: ${a.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${a.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(o=>`
                        <div class="cli-command-card ${o.dummy?"dummy":""}" data-cmd="${o.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${a.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${o.icon}' style="font-size: 2em; color: ${a.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${o.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${o.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${a.color}; position: relative; z-index: 1;">
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>St(),document.getElementById("terminal-action-btn").onclick=()=>St());let n=document.getElementById("cli-terminal-body"),a=document.getElementById("cli-docs-pane");n.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return a.innerHTML=`
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
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ie=!0,n}function St(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ie=!1}function $t(t,e,n="output"){if(!Ie)return;let a=document.createElement("div");a.className=`terminal-line terminal-${n}`,n==="prompt"?a.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:a.innerHTML=me(e),t.appendChild(a),t.scrollTop=t.scrollHeight}async function Xt(t){let e=Lt.find(s=>s.id===t);if(!e)return;let n=Yt(e);$t(n,`dex ${t}`,"prompt");let a=e.demo_output||["Executing command...","\u2713 Done."];for(let s of a){await new Promise(l=>setTimeout(l,400+Math.random()*600));let o="output";s.includes("[ERROR]")?o="error":s.includes("[SUCCESS]")||s.includes("\u2713")?o="success":s.includes("!")&&(o="warning"),$t(n,s,o)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function Ct(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Jt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let n=e.querySelector("code").textContent;navigator.clipboard.writeText(n).then(()=>{let a=e.querySelector("i");a.className="bx bx-check",a.style.color="#5eff5e",setTimeout(()=>{a.className="bx bx-copy",a.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(n=>{n.addEventListener("mouseenter",()=>{n.style.transform="translateY(-5px)",n.style.borderColor="rgba(255,255,255,0.15)",n.style.backgroundColor="rgba(255,255,255,0.05)"}),n.addEventListener("mouseleave",()=>{n.style.transform="translateY(0)",n.style.borderColor="rgba(255,255,255,0.05)",n.style.backgroundColor="rgba(255,255,255,0.03)"}),n.addEventListener("click",()=>{let a=n.dataset.cmd;Xt(a)})})}async function Zt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Se()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function Tt(){Zt(),Ge(),Ne();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&Ct();let e=Ue();He(e),Re();let n=document.getElementById("nav-left-container");n&&n.addEventListener("click",()=>{if(o.length>0)u();else{let i=window.location.pathname;if(!(i==="/"||i==="/index.html")){let $=(i.endsWith("/")&&i.length>1?i.slice(0,-1):i).split("/");$.pop();let E=$.join("/")||"/";window.location.href=E}}});let a=window.location.pathname==="/"||window.location.pathname==="/index.html",s=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!a&&!s&&document.querySelector("footer")?.classList.add("hide");let o=[],l=document.getElementById("windows-container");l&&l.setAttribute("data-count","0");let v=i=>{localStorage.setItem("dex_last_window",i)};function b(){return 1}function p(){for(;o.length>1;)o.shift().close(!0);let i=document.getElementById("windows-container"),d=document.querySelector("nav"),x=document.querySelector("footer"),$=window.location.pathname==="/"||window.location.pathname==="/index.html",E=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");i&&i.setAttribute("data-count",o.length);let S=o.length>0;o.forEach(B=>{let _=document.getElementById(B.id);_&&_.classList.remove("hide-close")}),le(te());let k=document.getElementById("dexter-menu-container"),A=document.getElementById("nav-window-switcher"),D=document.getElementById("settings-icon");if(Pe(o.length>0),o.length>0){if(x?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),d?.classList.add("window-open"),i&&(i.style.paddingTop="60px"),k&&(k.style.display="none"),D&&(D.style.display="none"),A){let B=o[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(B)?(A.innerHTML=`
                      <div class="nav-switch-btn ${B==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${B==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${B==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${B==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${B==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{v("alerts-window"),y(h)}),document.getElementById("switch-events").addEventListener("click",()=>{v("events-window"),y(f)}),document.getElementById("switch-monitor").addEventListener("click",()=>{v("monitor-window"),y(m)}),document.getElementById("switch-contacts").addEventListener("click",()=>{v("contacts-window"),y(r)}),document.getElementById("switch-workspace").addEventListener("click",()=>{v("workspace-window"),y(c)})):A.innerHTML=""}}else d?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),i&&(i.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),$||E?x?.classList.remove("hide"):x?.classList.add("hide"),k&&(k.style.display="flex"),D&&(D.style.display="block"),A&&(A.innerHTML="");ne(Ve())}function y(i){if(i.isOpen()){i.close();return}for(;o.length>0;)o.pop().close(!0);o.push(i),i.open(),p()}function u(){[...o].forEach(d=>d.close()),o=[]}window.addEventListener("resize",p);let h=j({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Je(),onOpen:()=>G(),onClose:()=>{let i=o.indexOf(h);i>-1&&o.splice(i,1),p()}}),f=j({id:"events-window",title:"Events",icon:"bx-calendar-event",content:rt(),onOpen:()=>Q(),onClose:()=>{let i=o.indexOf(f);i>-1&&o.splice(i,1),p()}}),r=j({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:at(),onOpen:()=>Le(),onClose:()=>{let i=o.indexOf(r);i>-1&&o.splice(i,1),p()}}),m=j({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:bt()},{icon:"bxs-component",title:"Processes",content:ft()},{icon:"bxs-brain",title:"Models",content:yt()},{icon:"bxs-hdd",title:"Hardware",content:ht()},{icon:"bxs-terminal",title:"Logs",content:xt()},{icon:"bxs-zap",title:"Analyst",content:vt()}],onOpen:()=>{Ce(),be(),Te(),oe()},onClose:()=>{let i=o.indexOf(m);i>-1&&o.splice(i,1),p()}}),c=j({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:it(),onOpen:()=>$e(),onClose:()=>{let i=o.indexOf(c);i>-1&&o.splice(i,1),p()}}),g=j({id:"settings-window",title:"Settings",icon:"bx-cog",content:ye(),onOpen:()=>{g.setContent(ye()),ke(g)},onClose:()=>{let i=o.indexOf(g);i>-1&&o.splice(i,1),p()}}),w=j({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:i=>{f.isOpen()||y(f),setTimeout(()=>{let d=document.querySelector(`.event-item[data-event-id="${i}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)},viewAlert:i=>{h.isOpen()||y(h),setTimeout(()=>{let d=document.querySelector(`.event-item[data-alert-id="${i}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)}},e){let i=document.getElementById("dexter-dropdown");i&&(i.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let d=document.getElementById("dexter-menu-container"),x=document.getElementById("dexter-menu-btn");d&&i&&x&&(d.addEventListener("mouseenter",()=>{i.classList.add("active"),x.classList.add("active")}),d.addEventListener("mouseleave",()=>{i.classList.remove("active"),x.classList.remove("active")}),x.addEventListener("click",$=>{$.stopPropagation();let E=localStorage.getItem("dex_last_window")||"alerts-window",S=null;E==="alerts-window"?S=h:E==="events-window"?S=f:E==="monitor-window"?S=m:E==="contacts-window"?S=r:E==="workspace-window"&&(S=c),S&&y(S)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{v("alerts-window"),y(h)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{v("events-window"),y(f)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{v("monitor-window"),y(m)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{v("contacts-window"),y(r)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{v("workspace-window"),y(c)}),document.getElementById("settings-icon")?.addEventListener("click",()=>y(g)),document.getElementById("close-all-windows")?.addEventListener("click",()=>u()),setInterval(()=>{h.isOpen()?G():Ye(),f.isOpen()&&Q(),m.isOpen()&&wt(),c.isOpen()&&$e()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{w.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",i=>{i.preventDefault();try{ze(document.getElementById("email-input").value),window.location.reload()}catch(d){let x=document.getElementById("login-error");x&&(x.textContent=d.message,x.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt):Tt();})();
