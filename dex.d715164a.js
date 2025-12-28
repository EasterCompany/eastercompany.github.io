(()=>{function He(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ne(t=!1){let e=window.location.pathname,i=e==="/"||e==="/index.html",r=`
        <div class="nav-left" id="nav-left-wrapper" style="gap: 0;">
            ${`
        <div id="nav-left-container" style="display: flex; align-items: center; transition: transform 0.2s ease; gap: 5px; cursor: ${i?"default":"pointer"};">
            <i class='bx bx-chevron-left' id="nav-chevron" style="font-size: 28px; color: #fff; display: ${i?"none":"block"};"></i>
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
    `,c=document.createElement("nav");c.innerHTML=r,document.body.prepend(c)}function Re(t){let e=window.location.pathname,i=e==="/"||e==="/index.html",l=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!l||!s||(t||!i?(l.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{l.style.transform="translateX(-3px)"},s.onmouseleave=()=>{l.style.transform="translateX(0)"}):(l.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function Pe(){if(document.querySelector("footer"))return;let t=`
        <a href="/dexter" class="footer-brand-left">DEXTER</a>
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-facebook'></i></a>
            <a href="https://linkedin.com/company/72223947" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin'></i></a>
            <a href="https://instagram.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
            <a href="https://twitter.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter'></i></a>
            <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
            <a href="https://youtube.com/@eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-youtube'></i></a>
        </div>
        <a href="/dexter/contribute" class="footer-brand-right">CONTRIBUTE</a>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Oe=1e3;function F(t){let e=null,i=t.onClose||null,l=t.onOpen||null;function s(){e&&(e.style.zIndex=++Oe)}function r(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",c),l&&setTimeout(l,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++Oe,e.addEventListener("mousedown",s);let h=t.icon||"bx-window",n="",o="",d;t.tabs&&t.tabs.length>0?(n=`<div class="tab-bar">${t.tabs.map((w,a)=>{let m=w.icon?`<i class="bx ${w.icon}"></i>`:`<span class="tab-glyph">${w.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${a===0?"active":""}" data-tab-index="${a}">
                        ${m}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${a}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,d=`<div class="window-content">${t.tabs.map((w,a)=>`<div class="tab-content ${a===0?"active":""}" data-tab-content="${a}">${w.content}</div>`).join("")}</div>`):(t.title&&(o=`<div class="window-title">${t.title}</div>`),d=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${n}
                ${o}
                <i class="bx bx-x window-close"></i>
            </div>
            ${d}
        `,u.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",x=>{x.stopPropagation(),g()}),window.addEventListener("resize",c),t.tabs&&e.querySelectorAll(".tab").forEach(x=>{x.addEventListener("click",()=>{let y=x.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),x.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${y}"]`).classList.add("active"),v(x,e)})}),setTimeout(()=>{e.classList.add("open"),l&&l()},10)}function c(){if(!e||!e.classList.contains("open"))return;let u=e.querySelector(".tab.active");u&&v(u,e)}function v(u,h){setTimeout(()=>{let n=h.querySelector(".tab-bar");if(!n)return;let o=Array.from(n.querySelectorAll(".tab")),d=o.indexOf(u),x=n.clientWidth,y=o[Math.max(0,d-2)],w=o[Math.min(o.length-1,d+2)],a=y.offsetLeft-n.offsetLeft-25,f=w.offsetLeft+w.offsetWidth-n.offsetLeft+25-a,C=f<=x?a-(x-f)/2:u.offsetLeft-n.offsetLeft-x/2+u.offsetWidth/2;n.scrollTo({left:C,behavior:"smooth"})},350)}function g(u=!1){e&&(window.removeEventListener("resize",c),u?(e.remove(),e=null):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e?.remove(),e=null},400)))}function p(u){let h=e?.querySelector(".window-content");h&&(h.innerHTML=u)}function b(){return e&&e.classList.contains("open")}return{open:r,close:g,setContent:p,isOpen:b,focus:s,id:t.id}}function Ue(){return!0}function qe(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function ze(t){localStorage.setItem("easter_user_email",t.trim())}var Fe="easter_theme",q={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function te(){return localStorage.getItem(Fe)||q.DARK}function je(t){if(!Object.values(q).includes(t))throw new Error("Invalid theme");localStorage.setItem(Fe,t),le(t)}function le(t){let e=document.body;if(Object.values(q).forEach(l=>{e.classList.remove(`theme-${l}`)}),e.classList.add(`theme-${t}`),[q.LIGHT,q.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let l=document.createElement("div");l.className="background",document.body.prepend(l)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function Ge(){let t=te();le(t)}function L(t,e,i=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function A(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function O(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let l=Date.now(),s=Math.floor((l-e)/1e3),r;s<60?r=`${s}s ago`:s<3600?r=`${Math.floor(s/60)}m ago`:r=`${Math.floor(s/3600)}h ago`,i.textContent=`Last updated: ${r}`}var We=0;function Ve(){return We}function se(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let l=i.querySelector(".notification-badge");l&&(e>0?(l.textContent=e>9?"9+":e,l.style.display="flex"):l.style.display="none")}function ne(t){We=t;let e=document.getElementById("dexter-nav-badge");e&&(t>0?e.style.display="flex":e.style.display="none");let i=document.getElementById("alerts-menu-item");if(i){let s=i.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="auto",i.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}let l=document.getElementById("switch-alerts");if(l){let s=l.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="8px",l.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}}function de(){let t=document.getElementById("alerts-list");if(!t)return;let e=t.querySelectorAll(".alert-unread:not(.priority-low)").length;ne(e)}function Se(){return"https://event.easter.company"}function It(){return"https://discord.easter.company"}var At="http://127.0.0.1:8100",_t="http://127.0.0.1:8300",Mt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function me(t){let e=A(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,r)=>{let c=Mt[r];return c?`<span class="${c}">`:""});let i=(e.match(/<span/g)||[]).length,l=(e.match(/<\/span/g)||[]).length;return i>l&&(e+="</span>".repeat(i-l)),e}function ie(t){if(!t)return"";let e=A(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var K=null,J=null,re=!1,ce=!1;async function I(t,e={}){if(K)try{let s=await fetch(K+t,e);if(s.ok)return s;K=null}catch{K=null}let i=Se(),l=At;try{let s=await fetch(i+t,e);if(s.ok)return K=i,re&&(console.log("\u2728 Production event service restored."),re=!1),s;throw new Error("Primary failed")}catch{re||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${l}`),re=!0);try{let r=await fetch(l+t,e);if(r.ok)return K=l,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function Ke(t,e={}){if(J)try{let s=await fetch(J+t,e);if(s.ok)return s;J=null}catch{J=null}let i=It(),l=_t;try{let s=await fetch(i+t,e);if(s.ok)return J=i,ce&&(console.log("\u2728 Production discord service restored."),ce=!1),s;throw new Error("Primary failed")}catch{ce||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${l}`),ce=!0);try{let r=await fetch(l+t,e);if(r.ok)return J=l,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Je=()=>`
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
`,pe=null,j=new Set,ue=[];async function G(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Bt(),t&&(e.innerHTML="<p>Updating...</p>");let i="/events?ml=1000&format=json&event.type=system.notification.generated";try{let l=await I(i);if(!l.ok)throw new Error("Service is offline or unreachable.");let r=(await l.json()).events||[];pe=Date.now(),O(0,pe);let c=Date.now(),v=24*60*60*1e3,g=r.filter(a=>{let m=localStorage.getItem(`alert_read_ts_${a.id}`);if(!m)return!0;let f=parseInt(m);return c-f<v});g.sort((a,m)=>{let f=_=>{let k=_.event;if(typeof k=="string")try{k=JSON.parse(k)}catch{return"low"}return(k.priority||"low").toLowerCase()},C=_=>_==="critical"?4:_==="high"?3:_==="medium"?2:1,E=C(f(a)),$=C(f(m));return E!==$?$-E:m.timestamp-a.timestamp}),ue=g;let p=a=>{let m=a.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return"low"}return(m.priority||"low").toLowerCase()},b=[],h=new Set(g.map(a=>p(a))).size>1;if(g.length>0){let a=null;g.forEach(m=>{let f=p(m);h&&f!==a&&(b.push({id:`divider-${f}`,type:"divider",label:f.toUpperCase()}),a=f),b.push(m)})}if(t&&(e.innerHTML=""),g.length===0){e.innerHTML=L("empty","No alerts yet."),de();return}let n=a=>{let m=a.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let f=m.title||"Untitled Alert",C=m.body||"No description provided.",E=m.priority||"low",$=!!m.alert,_=m.category||"system",k=m.related_event_ids||[],R=m.audit_event_id,B=!!localStorage.getItem(`alert_read_ts_${a.id}`),D=new Date(a.timestamp*1e3),P=D.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=D.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),T=B?"event-border-grey":"event-border-blue";!B&&$&&(T="event-border-red"),B&&(E==="high"||E==="critical")?T="event-border-red":B&&E==="medium"&&(T="event-border-orange");let H=B?"alert-read":"alert-unread",N=j.has(a.id),xe=N?"expanded":"",we=N?"display: block;":"display: none;",Ae="",_e="";k.length>0&&(_e=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${k.map(z=>`<a href="#" onclick="window.dexter.viewEvent('${z}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px; font-family: monospace;">${z.substring(0,8)}...</a>`).join(", ")}</span>
                    </div>`);let Me="";R&&(Me=`
              <div class="event-detail-row">
                  <span class="detail-label">Generated By:</span>
                  <span class="detail-value"><a href="#" onclick="window.dexter.viewEvent('${R}'); return false;" style="color: #bb86fc; text-decoration: none; font-family: monospace; border-bottom: 1px dashed #bb86fc;">${R.substring(0,8)}...</a></span>
              </div>`),Ae=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${E==="high"||E==="critical"?"#ff4d4d":E==="medium"?"#ffa500":"#888"}">${E.toUpperCase()}</span>
                </div>
                ${Me}
                ${_e}
                <div class="event-detail-block" style="text-align: left;">
                    <div class="detail-pre">${ie(`### Insight

`+C)}</div>
                </div>
            `;let U=document.createElement("div");U.className=`event-item notification-item ${T} ${H} ${xe} cursor-pointer priority-${E}`,U.dataset.alertId=a.id,U.onclick=function(z){if(this.classList.contains("expanded")){this.classList.remove("expanded"),j.delete(a.id);let ee=this.querySelector(".event-details");ee&&(ee.style.display="none")}else{this.classList.add("expanded"),j.add(a.id);let ee=this.querySelector(".event-details");if(ee&&(ee.style.display="block"),!localStorage.getItem(`alert_read_ts_${a.id}`)){localStorage.setItem(`alert_read_ts_${a.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let $e="event-border-grey";E==="high"||E==="critical"?$e="event-border-red":E==="medium"&&($e="event-border-orange"),this.classList.add($e),de()}}};let Zt=f,kt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[_]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${P}</span>
                    <span class="event-date">${S}</span>
                </div>
                <div class="event-icon"><i class='bx ${kt}'></i></div>
                <div class="event-content">
                    <div class="event-service">${_.toUpperCase()} ${$?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${f}</div>
                    <div class="event-details" style="${we}">
                        ${Ae}
                    </div>
                </div>
            `;let Be=U.querySelector(".event-details");Be&&Be.addEventListener("click",z=>{z.stopPropagation()});let De=U.querySelector(".close-details-btn");return De&&De.addEventListener("click",z=>{z.stopPropagation(),U.classList.remove("expanded");let Ee=U.querySelector(".event-details");Ee&&(Ee.style.display="none"),j.delete(a.id)}),U},o=a=>{let m=document.createElement("div");m.className="notification-divider",m.dataset.alertId=a.id;let f="#888888";return a.label==="CRITICAL"?f="#ff4d4d":a.label==="HIGH"?f="#ff8888":a.label==="MEDIUM"&&(f="#ffa500"),m.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${f}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,m.innerHTML=`<span style="white-space: nowrap;">${a.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${f}44, transparent); flex-grow: 1;"></div>`,m},d=Array.from(e.children),x=new Map(d.map(a=>[a.dataset.alertId,a])),y=new Set(b.map(a=>a.id));d.forEach(a=>{let m=a.dataset.alertId;(!m||!y.has(m))&&a.remove()});let w=null;b.forEach((a,m)=>{let f=x.get(a.id);(!f||t)&&(f&&f.remove(),a.type==="divider"?f=o(a):f=n(a),!f)||(m===0?e.firstElementChild!==f&&e.prepend(f):w&&w.nextElementSibling!==f&&w.after(f),w=f)}),pe=Date.now(),O(0,pe),de()}catch(l){console.error("Error fetching alerts:",l),e.children.length===0&&(e.innerHTML=L("offline","Failed to load alerts.","The event service may be offline."))}}function Bt(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),i=document.getElementById("alerts-close-all"),l=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ue.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),G(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ue.forEach(s=>{j.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),G(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{j.clear(),G(!0)},i.dataset.listenerAttached="true"),l&&!l.dataset.listenerAttached&&(l.onclick=()=>{let s=Date.now()-1728e5;ue.forEach(r=>{localStorage.setItem(`alert_read_ts_${r.id}`,s.toString())}),j.clear(),G(!0)},l.dataset.listenerAttached="true")}async function Ye(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await I(t);if(!e.ok)return;let l=(await e.json()).events||[],s=0;l.forEach(r=>{let c=r.event;if(typeof c=="string")try{c=JSON.parse(c)}catch{c={}}if((c.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${r.id}`)||s++}),ne(s)}catch{}}var Xe=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn"><i class='bx bx-plus'></i> New Idea</button>
    <button id="roadmap-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
    <button id="roadmap-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
  </div>
`,Qe=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,W=new Set,Ze=[],Y=null;async function V(t=!1){let e=document.getElementById("roadmap-list");if(e){Dt();try{let i=await I("/roadmap");if(!i.ok)throw new Error("Offline");let l=await i.json();if(Ze=l,l.length===0){e.innerHTML=L("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let s=p=>{let b=W.has(p.id),u=p.state==="draft",h=p.state==="published",n=p.state==="consumed",o="event-border-grey";h&&(o="event-border-blue"),n&&(o="event-border-purple");let x=new Date(p.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=document.createElement("div");y.className=`event-item notification-item ${o} cursor-pointer ${b?"expanded":""}`,y.dataset.itemId=p.id,y.onclick=m=>{if(m.target.closest("button"))return;y.classList.contains("expanded")?(y.classList.remove("expanded"),y.querySelector(".event-details").style.display="none",W.delete(p.id)):(y.classList.add("expanded"),y.querySelector(".event-details").style.display="block",W.add(p.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${p.state.toUpperCase()}]</span>`;y.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${x.split(",")[1]}</span>
          <span class="event-date">${x.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${A(p.content)}</div>
          <div class="event-details" style="${b?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${n?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${h?"bx-pause":"bx-rocket"}'></i> ${h?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${n?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(p.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let a=y.querySelector(".event-details");return a&&a.addEventListener("click",m=>{m.stopPropagation()}),y.querySelector(".edit-btn")?.addEventListener("click",()=>Ht(p)),y.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Nt(p)),y.querySelector(".delete-btn")?.addEventListener("click",()=>Rt(p.id)),y.querySelector(".close-details-btn")?.addEventListener("click",m=>{m.stopPropagation(),y.classList.remove("expanded"),y.querySelector(".event-details").style.display="none",W.delete(p.id)}),y},r=Array.from(e.children),c=new Map(r.map(p=>[p.dataset.itemId,p])),v=new Set(l.map(p=>p.id));r.forEach(p=>{let b=p.dataset.itemId;(!b||!v.has(b))&&p.remove()});let g=null;l.forEach((p,b)=>{let u=c.get(p.id);(!u||t)&&(u&&u.remove(),u=s(p),!u)||(b===0?e.firstElementChild!==u&&e.prepend(u):g&&g.nextElementSibling!==u&&g.after(u),g=u)})}catch{e.children.length===0&&(e.innerHTML=L("offline","Failed to load roadmap.","The event service may be offline."))}}}function Dt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),l=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Y=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",Y=null},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input").value;if(!r.trim())return;let c=Y?`/roadmap/${Y}`:"/roadmap",v=Y?"PATCH":"POST";try{await I(c,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})}),document.getElementById("roadmap-editor-container").style.display="none",V(!0)}catch(g){console.error(g)}},e.dataset.listenerAttached="true"),l&&!l.dataset.listenerAttached&&(l.onclick=()=>{Ze.forEach(r=>W.add(r.id)),V(!0)},l.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{W.clear(),V(!0)},s.dataset.listenerAttached="true")}function Ht(t){Y=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Nt(t){let e=t.state==="published"?"draft":"published";try{await I(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),V(!0)}catch(i){console.error(i)}}async function Rt(t){if(confirm("Delete this roadmap item?"))try{await I(`/roadmap/${t}`,{method:"DELETE"}),W.delete(t),V(!0)}catch(e){console.error(e)}}var tt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,st=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,et=null,X=new Set,nt=[];async function ve(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Pt();let i="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let l=await I(i);if(!l.ok)throw new Error("Service is offline or unreachable.");let r=(await l.json()).events||[];if(nt=r,et=Date.now(),O(2,et),r.length===0){e.innerHTML=L("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),se(1,0);return}t&&(e.innerHTML="");let c=u=>{let h=u.event;if(typeof h=="string")try{h=JSON.parse(h)}catch{return null}let n=h.title||"Untitled Blueprint",o=h.summary||h.body||"No summary provided.",d=h.content||"",x=h.category||"architecture",y=h.affected_services||[],w=h.implementation_path||[],a=new Date(u.timestamp*1e3),m=a.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),f=a.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),C=X.has(u.id),E=C?"display: block;":"display: none;",$=document.createElement("div");$.className=`event-item notification-item event-border-purple cursor-pointer ${C?"expanded":""}`,$.dataset.blueprintId=u.id;let k={architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[x]||"bx-paint";$.onclick=function(P){if(this.classList.contains("expanded")){this.classList.remove("expanded"),X.delete(u.id);let T=this.querySelector(".event-details");T&&(T.style.display="none")}else{this.classList.add("expanded"),X.add(u.id);let T=this.querySelector(".event-details");T&&(T.style.display="block")}};let R=y.length>0?`<div class="event-detail-row"><span class="detail-label">Related Services:</span> <span class="detail-value">${y.join(", ")}</span></div>`:"",M="";w.length>0&&(M=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(P=>`<li>${A(P)}</li>`).join("")}
                        </ul>
                    </div>
                `),$.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${m}</span>
                    <span class="event-date">${f}</span>
                </div>
                <div class="event-icon"><i class='bx ${k}'></i></div>
                <div class="event-content">
                    <div class="event-service">${x.toUpperCase()}</div>
                    <div class="event-message">${n}</div>
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; color: #fff;">
                            ${A(o)}
                        </div>
                        ${R}
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${A(d)}</div>
                        </div>
                        ${M}
                    </div>
                </div>
            `;let B=$.querySelector(".event-details");B&&B.addEventListener("click",P=>{P.stopPropagation()});let D=$.querySelector(".close-details-btn");return D&&D.addEventListener("click",P=>{P.stopPropagation(),$.classList.remove("expanded");let S=$.querySelector(".event-details");S&&(S.style.display="none"),X.delete(u.id)}),$},v=Array.from(e.children),g=new Map(v.map(u=>[u.dataset.blueprintId,u])),p=new Set(r.map(u=>u.id));v.forEach(u=>{let h=u.dataset.blueprintId;(!h||!p.has(h))&&u.remove()});let b=null;r.forEach((u,h)=>{let n=g.get(u.id);(!n||t)&&(n&&n.remove(),n=c(u),!n)||(h===0?e.firstElementChild!==n&&e.prepend(n):b&&b.nextElementSibling!==n&&b.after(n),b=n)}),se(2,r.length)}catch(l){console.error("Error fetching blueprints:",l),e.children.length===0&&(e.innerHTML=L("offline","Failed to load blueprints.","The event service may be offline."))}}function Pt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{nt.forEach(i=>X.add(i.id)),ve(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.clear(),ve(!0)},e.dataset.listenerAttached="true")}var it=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${Xe()}
            </div>
            ${Qe()}
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
`;async function Le(){await Promise.all([V(),ve()])}var at=()=>`
    <div class="system-section-header">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,Ot=null;async function ge(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>ge(),e.dataset.listenerAttached="true");try{let i=await Ke("/contacts");if(!i.ok)throw new Error("Service unreachable");let s=(await i.json()).members||[];if(Ot=Date.now(),s.length===0){t.innerHTML=L("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((c,v)=>{let g=r[c.level]??10,p=r[v.level]??10;return g!==p?g-p:c.username.localeCompare(v.username)}),t.innerHTML=s.map(c=>{let v=c.color?"#"+c.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",g=c.status==="online"?"#5eff5e":c.status==="idle"?"#ffa500":c.status==="dnd"?"#ff4d4d":"#666",p="#888";c.level==="Me"||c.level==="Master"?p="#bb86fc":c.level==="Admin"?p="#cf6679":c.level==="Moderator"?p="#03dac6":c.level==="Contributor"&&(p="#ffa500");let b=c.level==="Me",u=b?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",h=b?"2px solid #bb86fc":`1px solid ${v}33`;return`
                <div class="user-profile-section" style="background: ${u}; padding: 15px; border-radius: 8px; border: ${h}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${b?"#bb86fc":v}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${c.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${b?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${g}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${p}; font-weight: 600; text-transform: uppercase;">${b?"DEXTER (ME)":c.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${c.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=L("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Ut={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function ot(t,e){let i=Ut[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(i=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let l=i.replace(/\{(\w+)\}/g,(s,r)=>e[r]!==void 0&&e[r]!==null?e[r]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(l+=` (Translation: ${e.english_translation})`),l}var rt=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
            <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        </div>
    </div>
    
    <div id="timeline-view-container">
        <div id="event-filters" class="event-filters">
            <button class="notif-action-btn filter-btn active" data-filter="all">All</button>
            <button class="notif-action-btn filter-btn" data-filter="messaging">Messaging</button>
            <button class="notif-action-btn filter-btn" data-filter="system">System</button>
            <button class="notif-action-btn filter-btn" data-filter="cognitive">Cognitive</button>
            <button class="notif-action-btn filter-btn" data-filter="moderation">Moderation</button>
        </div>
        <div id="events-timeline" class="events-timeline">
            <div class="tab-placeholder">
                <i class='bx bx-calendar-event placeholder-icon'></i>
                <p class="placeholder-message">Loading events...</p>
            </div>
        </div>
    </div>
`,fe=null,Q=new Set,ae=[],be="all",qt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},zt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function lt(t){for(let[e,i]of Object.entries(qt))if(i.includes(t))return e;return"system"}function Ft(t){return zt[t]||"bx-square-rounded"}async function Z(t=!1){let e=document.getElementById("events-timeline");if(!e)return;jt();let l=`/events?ml=${be==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let s=await I(l);if(!s.ok)throw new Error("Service is offline or unreachable.");let c=(await s.json()).events||[],v=c;if(be!=="all"&&(v=c.filter(n=>{let o=n.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return!1}return lt(o.type)===be})),ae=v.slice(0,50),fe=Date.now(),O(1,fe),ae.length===0){e.innerHTML=L("empty","No events found for this filter.");return}t&&(e.innerHTML="");let g=n=>{let o=n.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return null}let d=o.type,x=lt(d),y=Ft(d),w=d==="engagement.decision"||d==="messaging.bot.sent_message"||d==="messaging.user.sent_message"||d==="moderation.explicit_content.deleted"||d==="analysis.link.completed"||d==="analysis.visual.completed"||d==="system.cli.command"||d==="system.analysis.audit"||d==="system.test.completed"||d==="error_occurred"||d==="system.cli.status"||d==="system.attention.expired"||d.startsWith("system.roadmap")||d.startsWith("system.process"),a="event-border-grey";w&&(d==="moderation.explicit_content.deleted"||d==="error_occurred"?a="event-border-red":d==="analysis.link.completed"||d==="analysis.visual.completed"||d==="system.analysis.audit"?a="event-border-purple":d==="system.attention.expired"||d==="system.cli.command"||d==="system.cli.status"?a="event-border-orange":d==="system.test.completed"?a=o.test?.status==="OK"&&o.lint?.status==="OK"&&o.format?.status==="OK"?"event-border-blue":"event-border-red":a="event-border-blue");let m=w?"cursor-pointer":"",f=Q.has(n.id),C=f?"expanded":"",E=f?"display: block;":"display: none;",$=new Date(n.timestamp*1e3),_=$.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),k=$.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),R=ot(d,o),M=o.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${o.user_level})</span>`:"",B="";if(w){let S="";if(d==="engagement.decision")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${o.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${o.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${o.engagement_raw||"None"}</pre>
                        </div>
                    `;else if(d==="system.attention.expired"){let T=o.timestamp-o.last_active,H=Math.floor(T/60);S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value" style="color: #bb86fc;">${o.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${H} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context (Last Input):</span>
                            <div class="detail-pre">${ie(o.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Thought Process (Last Output):</span>
                            <div class="detail-pre">${ie(o.last_output||"None")}</div>
                        </div>
                    `}else if(d==="messaging.bot.sent_message")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${o.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${o.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${o.response_raw||"None"}</pre>
                        </div>
                    `;else if(d==="moderation.explicit_content.deleted")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${o.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${o.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${A(o.raw_output)||"None"}</pre>
                        </div>
                    `;else if(d==="analysis.link.completed")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${o.url}" target="_blank" class="attachment-link">${o.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${A(o.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${A(o.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${A(o.summary)||"None"}</pre>
                        </div>
                    `;else if(d==="analysis.visual.completed"){let T="";o.base64_preview?T=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${o.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:o.url&&(T=`<div class="event-detail-block"><img src="${o.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${o.filename}</span>
                        </div>
                        ${T}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${A(o.description)||"None"}</pre>
                        </div>
                    `}else if(d==="system.cli.command")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${o.command||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${o.args||"None"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${o.status||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${o.duration||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${o.exit_code!==void 0?o.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${A(o.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(d==="system.analysis.audit")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${o.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${o.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${A(o.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${A(o.raw_input)}</pre>
                        </div>
                    `;else if(d==="system.test.completed")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${o.service_name}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${o.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Format:</span>
                            <pre class="detail-pre">${o.format?.status||"N/A"}: ${o.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Lint:</span>
                            <pre class="detail-pre">${o.lint?.status||"N/A"}: ${o.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Tests:</span>
                            <pre class="detail-pre">${o.test?.status||"N/A"}: ${o.test?.details||o.test?.message||"OK"}</pre>
                        </div>
                    `;else if(d==="error_occurred")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${o.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${A(o.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(o.context||{},null,2)}</pre>
                        </div>
                    `;else if(d==="system.cli.status")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${o.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${A(o.message)}</pre>
                        </div>
                    `;else if(d==="messaging.user.sent_message"){let T="";o.attachments&&o.attachments.length>0&&(T=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${o.attachments.map(N=>{let xe=N.content_type&&N.content_type.startsWith("image/"),we=(N.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${xe?`<div class="attachment-thumb-container"><img src="${N.url}" alt="${N.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${N.url}" target="_blank" class="attachment-link">${N.filename}</a>
                                        <span class="attachment-meta">${N.content_type} \u2022 ${we}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${o.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${o.content||"(empty)"}</pre>
                        </div>
                        ${T}
                    `}B=`
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                        </div>
                        ${S}
                    </div>
                `}let D=document.createElement("div");D.className=`event-item ${a} ${m} ${C}`,D.dataset.eventId=n.id,D.onclick=function(S){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Q.delete(n.id);let H=this.querySelector(".event-details");H&&(H.style.display="none")}else{this.classList.add("expanded"),Q.add(n.id);let H=this.querySelector(".event-details");H&&(H.style.display="block")}},D.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${_}</span>
                    <span class="event-date">${k}</span>
                </div>
                <div class="event-icon"><i class='bx ${y}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${x}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${x}</span>
                        ${n.service} ${M}
                    </div>
                    <div class="event-message">${R}</div>
                    ${B}
                </div>
            `;let P=D.querySelector(".event-details");if(P&&P.addEventListener("click",S=>{S.stopPropagation()}),w){let S=D.querySelector(".close-details-btn");S&&S.addEventListener("click",T=>{T.stopPropagation();let H=T.target.closest(".event-item");if(H){H.classList.remove("expanded"),Q.delete(n.id);let N=H.querySelector(".event-details");N&&(N.style.display="none")}})}return D},p=Array.from(e.children),b=new Map(p.map(n=>[n.dataset.eventId,n])),u=new Set(ae.map(n=>n.id));p.forEach(n=>{let o=n.dataset.eventId;(!o||!u.has(o))&&n.remove()});let h=null;ae.forEach((n,o)=>{let d=b.get(n.id);(!d||t)&&(d&&d.remove(),d=g(n),!d)||(o===0?e.firstElementChild!==d&&e.prepend(d):h&&h.nextElementSibling!==d&&h.after(d),h=d)}),fe=Date.now(),O(1,fe)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=L("offline","Failed to load events.","The event service may be offline."))}}function jt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ae.forEach(l=>Q.add(l.id)),Z(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Q.clear(),Z(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(l=>{l.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),l.classList.add("active"),be=l.dataset.filter,Z(!0)}}),i.dataset.listenerAttached="true")}function ct(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Gt=null;async function oe(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await I("/logs");if(!e.ok)throw new Error("Logs offline");let i=await e.json();if(!i||i.length===0)return t.innerHTML=L("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let l=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=i.filter(c=>!l.includes(c.id));s.forEach(c=>{c.logs&&Array.isArray(c.logs)?c.logs.reverse():c.logs=[]}),s.reverse();let r=s.map(c=>{let v=c.logs.join(`
`),g=[...c.logs];if(g.length<25){let b=25-g.length;for(let u=0;u<b;u++)g.push("")}else g.length>25&&(g=g.slice(-25));let p=g.map(b=>me(b)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${c.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(v)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${c.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${p}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(c=>{c.addEventListener("click",()=>{let v=unescape(c.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let g=c.querySelector("i");g.classList.remove("bx-copy"),g.classList.add("bx-check"),setTimeout(()=>{g.classList.remove("bx-check"),g.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(c=>{c.addEventListener("click",async()=>{let v=c.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${v}?`))try{(await I(`/logs?service_id=${v}`,{method:"DELETE"})).ok&&oe()}catch(g){console.error("Error clearing logs:",g)}})}),Gt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=L("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var gt=()=>`
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
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,ht=()=>`
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
        <div id="hardware-info-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px;">
        </div>`,xt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${ct()}
        </div>`;async function wt(){await Promise.all([he(),Ce(),Te()]),await oe()}var dt=null,mt=null,pt=null;async function Et(){try{return await(await I("/system_monitor")).json()}catch{return null}}async function ut(){try{return await(await I("/system/hardware")).json()}catch{return null}}async function Wt(){try{return await(await I("/processes")).json()}catch{return null}}async function Vt(){try{return await(await I("/analyst/status")).json()}catch{return null}}async function Ce(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),i=document.getElementById("hardware-refresh-btn"),l=n=>{if(!n){e.children.length===0&&(e.innerHTML=L("offline","Failed to load hardware info.","The event service may be offline."));return}let o="",d=(n.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(o+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${d} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,n.CPU&&n.CPU.length>0){let x=n.CPU[0];o+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${x.LABEL}">${x.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${x.COUNT} Cores / ${x.THREADS} Threads</span>
                    </div>
                </div>`}if(n.GPU&&n.GPU.length>0&&n.GPU.forEach((x,y)=>{let w=(x.VRAM/1073741824).toFixed(1);o+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${y}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${x.LABEL}">${x.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${w} GB VRAM</span>
                        </div>
                    </div>`}),n.STORAGE&&n.STORAGE.length>0){let x=0,y=0;n.STORAGE.forEach(f=>{x+=f.USED,y+=f.SIZE});let w=(x/(1024*1024*1024)).toFixed(1),a=(y/(1024*1024*1024)).toFixed(1),m=y>0?(x/y*100).toFixed(0):0;o+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} / ${a} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${m>90?"#ff4d4d":"#00ff00"}; width: ${m}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=o};if(e&&i&&(i.dataset.listenerAttached||(i.onclick=async()=>{i.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let n=await ut();n?(l(n),i.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.children.length===0&&(e.innerHTML=L("offline","Failed to refresh.","The event service may be offline.")),i.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},i.dataset.listenerAttached="true"),e.children.length===0)){let n=await ut();l(n)}if(!t)return;let s=await Et();if(!s||!s.services){t.children.length===0&&(t.innerHTML=L("offline","Failed to load system metrics.","The event service may be offline."));return}dt=Date.now(),O(0,dt);let r=s.services||[];Array.from(t.children).forEach(n=>{n.classList.contains("service-widget")||n.remove()});function c(n){return!n||n==="N/A"||n==="unknown"||n.trim()===""?"-":n}function v(n){if(!n||n==="N/A"||n==="unknown")return"-";let o=n.match(/^(\d+\.\d+\.\d+)/);return o?o[0]:n.split(".").slice(0,3).join(".")||"-"}function g(n){return!n||n.length<=28?n:n.substring(0,28)+"..."}function p(n){if(!n||n==="N/A"||n==="unknown")return"-";let o=n.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!o)return"-";let d=parseInt(o[1])||0,x=parseInt(o[2])||0,y=parseInt(o[3])||0,w=parseFloat(o[4])||0,a=d*86400+x*3600+y*60+w,m=Math.floor(a/86400);if(m>0)return`${m}d`;let f=Math.floor(a/3600);if(f>0)return`${f}h`;let C=Math.floor(a/60);return C>0?`${C}m`:`${Math.floor(a)}s`}function b(n){let o=n.status==="online",d=o?"service-widget-online":"service-widget-offline",x=o?"bx-check-circle":"bx-x-circle",y=o?"OK":"BAD",w=n.version?v(n.version.str):"-",a=n.cpu&&n.cpu!=="N/A"?n.cpu:"-",m=n.memory&&n.memory!=="N/A"?n.memory:"-",f=a!=="-"?"#00ff00":"#666",C=a!=="-"?"#fff":"#666",E=m!=="-"?"#00ff00":"#666",$=m!=="-"?"#fff":"#666",_=p(n.uptime),k="";return o?k=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${w}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${_}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${f};"></i>
                        <span style="color: ${C};">${a}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${E};"></i>
                        <span style="color: ${$};">${m}</span>
                    </div>
                </div>`:k='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${d}" data-service-id="${n.id}"><div class="service-widget-header"><i class="bx ${x}"></i><h3>${n.short_name||n.id}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${g(n.domain&&n.port?`${n.domain}:${n.port}`:"")}</span></div>${k}</div></div>`}let u=new Map(Array.from(t.querySelectorAll(".service-widget")).map(n=>[n.dataset.serviceId,n])),h=new Set(r.map(n=>n.id));for(let[n,o]of u)h.has(n)||o.remove();r.forEach(n=>{let o=b(n),d=u.get(n.id);d?d.outerHTML!==o&&(d.outerHTML=o):t.insertAdjacentHTML("beforeend",o)})}async function Te(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Et();if(!e){t.children.length===0&&(t.innerHTML=L("offline","Failed to load model status.","The event service may be offline."));return}mt=Date.now(),O(2,mt);let i=e.models||[],l=e.whisper;Array.from(t.children).forEach(v=>{v.classList.contains("service-widget")||v.remove()});function s(v){let g=v.status==="Ready";return`
                <div class="service-widget ${g?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${g?"READY":"NOT FOUND"}</span>
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
                </div>`}function r(v){let g=v.status==="Downloaded",p=g?"service-widget-online":"service-widget-offline",b=g?"OK":"MISSING",u=g&&v.size>0?`${(v.size/1e9).toFixed(2)} GB`:"-",h=v.name;return v.type==="custom"&&h.endsWith(":latest")&&(h=h.replace(":latest","")),`<div class="service-widget ${p}" data-model-name="${v.name}"><div class="service-widget-header"><i class="bx ${g?"bx-check-circle":"bx-x-circle"}"></i><h3>${h}</h3><span class="service-widget-status">${b}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${v.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${u}</span></div></div></div>`}let c="";if(l&&(c+=s(l)),c+=i.map(r).join(""),!c){t.innerHTML=L("empty","No models found.");return}t.innerHTML!==c&&(t.innerHTML=c)}async function he(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),i=document.getElementById("analyst-t2-val"),l=document.getElementById("analyst-t3-val"),s=document.getElementById("analyst-idle-val"),r=document.getElementById("analyst-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await I("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),he()}catch{r.innerHTML="<i class='bx bx-error'></i> Failed"}},r.dataset.listenerAttached="true");let c=await Vt();if(c){let h=Math.floor(Date.now()/1e3),n=c.active_tier,o=(d,x,y)=>{if(n===y||y==="guardian"&&n==="tests"){d.textContent="Working",d.style.color="#bb86fc";return}let w=x-h;if(w<=0)d.textContent="Ready",d.style.color="#5eff5e";else{let a=Math.floor(w/60),m=w%60;d.textContent=`${a}m ${m}s`,d.style.color="#fff"}};if(e&&c.guardian&&o(e,c.guardian.next_run,"guardian"),i&&c.architect&&o(i,c.architect.next_run,"architect"),l&&c.strategist&&o(l,c.strategist.next_run,"strategist"),s&&c.system_idle_time!==void 0){let d=c.system_idle_time,x=Math.floor(d/60),y=d%60;s.textContent=`${x}m ${y}s`,d>300?s.style.color="#5eff5e":d>60?s.style.color="#ffa500":s.style.color="#fff"}}else[e,i,l,s].forEach(n=>{n&&(n.textContent="Offline",n.style.color="#ff4d4d")});let v=await Wt(),g=[],p=[];v&&(Array.isArray(v)?g=v:(g=v.active||[],p=v.history||[]));let b=document.getElementById("vitals-processes-val");if(b)if(v){let h=g.length;b.textContent=h>0?`${h} Active`:"Idle",b.style.color=h>0?"#bb86fc":"#fff"}else b.textContent="-",b.style.color="#888";if(v===null){t.children.length===0&&(t.innerHTML=L("offline","Failed to load process status.","The event service may be offline."));return}pt=Date.now(),O(1,pt),g.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=L("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),vt(t,g,!1));let u=document.getElementById("processes-history-widgets");u&&(p.length===0?u.querySelector(".tab-placeholder")||(u.innerHTML=L("empty","No recent history.")):(u.querySelector(".tab-placeholder")&&(u.innerHTML=""),vt(u,p,!0))),se(1,g.length)}function vt(t,e,i){function l(c){let v="";c.end_time?v=`${c.end_time-c.start_time}s`:v=`${Math.floor(Date.now()/1e3-c.start_time)}s`;let g=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",p=c.channel_id,b={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};b[p]?p=b[p]:/^\d+$/.test(p)&&(p=`Channel ${p}`);let u=i?"#888":"#fff",h=i?"border-left: 3px solid #666;":"";return`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}-${c.start_time}" style="${h}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${u}"></i>
                        <h3 style="color: ${u}">${p}</h3>
                        ${g}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${u}">${c.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${u}">${v}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${u}">${c.pid}</span>
                        </div>
                    </div>
                </div>`}let s=new Map(Array.from(t.querySelectorAll(".process-widget")).map(c=>[c.dataset.channelId,c])),r=new Set(e.map(c=>`${c.channel_id}-${c.start_time}`));for(let[c,v]of s)r.has(c)||v.remove();e.forEach(c=>{let v=`${c.channel_id}-${c.start_time}`,g=l(c),p=s.get(v);p?p.outerHTML!==g&&(p.outerHTML=g):t.insertAdjacentHTML("beforeend",g)})}function ye(){let t=te(),e=qe()||"master@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},l=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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
                            <input type="checkbox" id="analytics-toggle" ${l?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ke(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let r=this.dataset.theme;je(r),t.setContent(ye()),ke(t)})});let i=document.getElementById("notifications-toggle");i&&(i.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let l=document.getElementById("analytics-toggle");l&&(l.checked=localStorage.getItem("easter_analytics_enabled")!=="false",l.onclick=s=>{let r=s.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}var Kt="2.8.143",Lt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Tier 1 Guardian Analyst technical sentry.",usage:"dex guardian",category:"cognitive",docs:{overview:"Guardian is the Technical Sentry of the ecosystem. It performs automated health checks and audits.",details:["Scans for service crashes and restarts.","Analyzes logs for high-severity errors.","Verifies system-wide resource availability.","Triggers immediate notifications if anomalies are detected."],extended_usage:"dex guardian [--force] [--quiet]"},demo_output:["\u2588 \x1B[1mGUARDIAN ANALYST\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Initializing Tier 1 Analysis..."," \u2699\uFE0F Fetching system context..."," \u2699\uFE0F Running Guardian Analysis...","","\x1B[32mNo significant insights found.\x1B[0m"," \u2699\uFE0F Resetting Guardian timer...","\x1B[32m\u2713 Guardian timer reset.\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
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
    `;for(let[i,l]of Object.entries(t)){let s=Lt.filter(r=>r.category===i);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${l.icon}' style="color: ${l.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${l.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(r=>`
                        <div class="cli-command-card ${r.dummy?"dummy":""}" data-cmd="${r.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${l.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${r.icon}' style="font-size: 2em; color: ${l.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${r.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${r.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${l.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${r.usage}
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>$t(),document.getElementById("terminal-action-btn").onclick=()=>$t());let i=document.getElementById("cli-terminal-body"),l=document.getElementById("cli-docs-pane");i.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return l.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${s.overview}</p>
        </div>
        ${s.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${s.details.map(r=>`<li>${r}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${s.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ie=!0,i}function $t(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ie=!1}function St(t,e,i="output"){if(!Ie)return;let l=document.createElement("div");l.className=`terminal-line terminal-${i}`,i==="prompt"?l.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:l.innerHTML=me(e),t.appendChild(l),t.scrollTop=t.scrollHeight}async function Xt(t){let e=Lt.find(s=>s.id===t);if(!e)return;let i=Yt(e);St(i,`dex ${t}`,"prompt");let l=e.demo_output||["Executing command...","\u2713 Done."];for(let s of l){await new Promise(c=>setTimeout(c,400+Math.random()*600));let r="output";s.includes("[ERROR]")?r="error":s.includes("[SUCCESS]")||s.includes("\u2713")?r="success":s.includes("!")&&(r="warning"),St(i,s,r)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function Ct(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Jt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let i=e.querySelector("code").textContent;navigator.clipboard.writeText(i).then(()=>{let l=e.querySelector("i");l.className="bx bx-check",l.style.color="#5eff5e",setTimeout(()=>{l.className="bx bx-copy",l.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(i=>{i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-5px)",i.style.borderColor="rgba(255,255,255,0.15)",i.style.backgroundColor="rgba(255,255,255,0.05)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)",i.style.borderColor="rgba(255,255,255,0.05)",i.style.backgroundColor="rgba(255,255,255,0.03)"}),i.addEventListener("click",()=>{let l=i.dataset.cmd;Xt(l)})})}async function Qt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Se()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function Tt(){Qt(),Ge(),He();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&Ct();let e=Ue();Ne(e),Pe();let i=document.getElementById("nav-left-container");i&&i.addEventListener("click",()=>{if(r.length>0)u();else{let a=window.location.pathname;if(!(a==="/"||a==="/index.html")){let C=(a.endsWith("/")&&a.length>1?a.slice(0,-1):a).split("/");C.pop();let E=C.join("/")||"/";window.location.href=E}}});let l=window.location.pathname==="/"||window.location.pathname==="/index.html",s=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!l&&!s&&document.querySelector("footer")?.classList.add("hide");let r=[],c=document.getElementById("windows-container");c&&c.setAttribute("data-count","0");let v=a=>{localStorage.setItem("dex_last_window",a)};function g(){return 1}function p(){for(;r.length>1;)r.shift().close(!0);let a=document.getElementById("windows-container"),m=document.querySelector("nav"),f=document.querySelector("footer"),C=window.location.pathname==="/"||window.location.pathname==="/index.html",E=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");a&&a.setAttribute("data-count",r.length);let $=r.length>0;r.forEach(M=>{let B=document.getElementById(M.id);B&&B.classList.remove("hide-close")}),le(te());let _=document.getElementById("dexter-menu-container"),k=document.getElementById("nav-window-switcher"),R=document.getElementById("settings-icon");if(Re(r.length>0),r.length>0){if(f?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),m?.classList.add("window-open"),a&&(a.style.paddingTop="60px"),_&&(_.style.display="none"),R&&(R.style.display="none"),k){let M=r[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(M)?(k.innerHTML=`
                      <div class="nav-switch-btn ${M==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${M==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${M==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${M==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${M==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{v("alerts-window"),b(h)}),document.getElementById("switch-events").addEventListener("click",()=>{v("events-window"),b(n)}),document.getElementById("switch-monitor").addEventListener("click",()=>{v("monitor-window"),b(d)}),document.getElementById("switch-contacts").addEventListener("click",()=>{v("contacts-window"),b(o)}),document.getElementById("switch-workspace").addEventListener("click",()=>{v("workspace-window"),b(x)})):k.innerHTML=""}}else m?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),a&&(a.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),C||E?f?.classList.remove("hide"):f?.classList.add("hide"),_&&(_.style.display="flex"),R&&(R.style.display="block"),k&&(k.innerHTML="");ne(Ve())}function b(a){if(a.isOpen()){a.close();return}for(;r.length>0;)r.pop().close(!0);r.push(a),a.open(),p()}function u(){[...r].forEach(m=>m.close()),r=[]}window.addEventListener("resize",p);let h=F({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Je(),onOpen:()=>G(),onClose:()=>{let a=r.indexOf(h);a>-1&&r.splice(a,1),p()}}),n=F({id:"events-window",title:"Events",icon:"bx-calendar-event",content:rt(),onOpen:()=>Z(),onClose:()=>{let a=r.indexOf(n);a>-1&&r.splice(a,1),p()}}),o=F({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:at(),onOpen:()=>ge(),onClose:()=>{let a=r.indexOf(o);a>-1&&r.splice(a,1),p()}}),d=F({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:bt()},{icon:"bxs-component",title:"Processes",content:ft()},{icon:"bxs-brain",title:"Models",content:ht()},{icon:"bxs-hdd",title:"Hardware",content:yt()},{icon:"bxs-terminal",title:"Logs",content:xt()},{icon:"bxs-zap",title:"Analyst",content:gt()}],onOpen:()=>{Ce(),he(),Te(),oe()},onClose:()=>{let a=r.indexOf(d);a>-1&&r.splice(a,1),p()}}),x=F({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:it(),onOpen:()=>Le(),onClose:()=>{let a=r.indexOf(x);a>-1&&r.splice(a,1),p()}}),y=F({id:"settings-window",title:"Settings",icon:"bx-cog",content:ye(),onOpen:()=>{y.setContent(ye()),ke(y)},onClose:()=>{let a=r.indexOf(y);a>-1&&r.splice(a,1),p()}}),w=F({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:a=>{n.isOpen()||b(n),setTimeout(()=>{let m=document.querySelector(`.event-item[data-event-id="${a}"]`);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),m.classList.add("flash-highlight"),m.classList.contains("expanded")||m.click(),setTimeout(()=>m.classList.remove("flash-highlight"),2e3))},500)},viewAlert:a=>{h.isOpen()||b(h),setTimeout(()=>{let m=document.querySelector(`.event-item[data-alert-id="${a}"]`);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),m.classList.add("flash-highlight"),m.classList.contains("expanded")||m.click(),setTimeout(()=>m.classList.remove("flash-highlight"),2e3))},500)}},e){let a=document.getElementById("dexter-dropdown");a&&(a.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let m=document.getElementById("dexter-menu-container"),f=document.getElementById("dexter-menu-btn");m&&a&&f&&(m.addEventListener("mouseenter",()=>{a.classList.add("active"),f.classList.add("active")}),m.addEventListener("mouseleave",()=>{a.classList.remove("active"),f.classList.remove("active")}),f.addEventListener("click",C=>{C.stopPropagation();let E=localStorage.getItem("dex_last_window")||"alerts-window",$=null;E==="alerts-window"?$=h:E==="events-window"?$=n:E==="monitor-window"?$=d:E==="contacts-window"?$=o:E==="workspace-window"&&($=x),$&&b($)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{v("alerts-window"),b(h)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{v("events-window"),b(n)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{v("monitor-window"),b(d)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{v("contacts-window"),b(o)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{v("workspace-window"),b(x)}),document.getElementById("settings-icon")?.addEventListener("click",()=>b(y)),document.getElementById("close-all-windows")?.addEventListener("click",()=>u()),setInterval(()=>{h.isOpen()?G():Ye(),n.isOpen()&&Z(),o.isOpen()&&ge(),d.isOpen()&&wt(),x.isOpen()&&Le()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{w.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",a=>{a.preventDefault();try{ze(document.getElementById("email-input").value),window.location.reload()}catch(m){let f=document.getElementById("login-error");f&&(f.textContent=m.message,f.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tt):Tt();})();
