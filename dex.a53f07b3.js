(()=>{function Me(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Be(t=!1){let e=window.location.pathname,a=e==="/"||e==="/index.html",r=`
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
    `,d=document.createElement("nav");d.innerHTML=r,document.body.prepend(d)}function De(t){let e=window.location.pathname,a=e==="/"||e==="/index.html",l=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!l||!s||(t||!a?(l.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{l.style.transform="translateX(-3px)"},s.onmouseleave=()=>{l.style.transform="translateX(0)"}):(l.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function He(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Ne=1e3;function q(t){let e=null,a=t.onClose||null,l=t.onOpen||null;function s(){e&&(e.style.zIndex=++Ne)}function r(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",d),l&&setTimeout(l,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++Ne,e.addEventListener("mousedown",s);let m=t.icon||"bx-window",n="",i="",c;t.tabs&&t.tabs.length>0?(n=`<div class="tab-bar">${t.tabs.map((w,o)=>{let p=w.icon?`<i class="bx ${w.icon}"></i>`:`<span class="tab-glyph">${w.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${o===0?"active":""}" data-tab-index="${o}">
                        ${p}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${o}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,c=`<div class="window-content">${t.tabs.map((w,o)=>`<div class="tab-content ${o===0?"active":""}" data-tab-content="${o}">${w.content}</div>`).join("")}</div>`):(t.title&&(i=`<div class="window-title">${t.title}</div>`),c=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${m}"></i>
                ${n}
                ${i}
                <i class="bx bx-x window-close"></i>
            </div>
            ${c}
        `,u.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",y=>{y.stopPropagation(),b()}),window.addEventListener("resize",d),t.tabs&&e.querySelectorAll(".tab").forEach(y=>{y.addEventListener("click",()=>{let x=y.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),y.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${x}"]`).classList.add("active"),v(y,e)})}),setTimeout(()=>{e.classList.add("open"),l&&l()},10)}function d(){if(!e||!e.classList.contains("open"))return;let u=e.querySelector(".tab.active");u&&v(u,e)}function v(u,m){setTimeout(()=>{let n=m.querySelector(".tab-bar");if(!n)return;let i=Array.from(n.querySelectorAll(".tab")),c=i.indexOf(u),y=n.clientWidth,x=i[Math.max(0,c-2)],w=i[Math.min(i.length-1,c+2)],o=x.offsetLeft-n.offsetLeft-25,f=w.offsetLeft+w.offsetWidth-n.offsetLeft+25-o,C=f<=y?o-(y-f)/2:u.offsetLeft-n.offsetLeft-y/2+u.offsetWidth/2;n.scrollTo({left:C,behavior:"smooth"})},350)}function b(u=!1){e&&(window.removeEventListener("resize",d),u?(e.remove(),e=null):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e?.remove(),e=null},400)))}function g(u){let m=e?.querySelector(".window-content");m&&(m.innerHTML=u)}function h(){return e&&e.classList.contains("open")}return{open:r,close:b,setContent:g,isOpen:h,focus:s,id:t.id}}function Re(){return!0}function Pe(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Oe(t){localStorage.setItem("easter_user_email",t.trim())}var Ue="easter_theme",z={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function se(){return localStorage.getItem(Ue)||z.DARK}function ze(t){if(!Object.values(z).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ue,t),le(t)}function le(t){let e=document.body;if(Object.values(z).forEach(l=>{e.classList.remove(`theme-${l}`)}),e.classList.add(`theme-${t}`),[z.LIGHT,z.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let l=document.createElement("div");l.className="background",document.body.prepend(l)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function qe(){let t=se();le(t)}function L(t,e,a=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function A(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function B(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let l=Date.now(),s=Math.floor((l-e)/1e3),r;s<60?r=`${s}s ago`:s<3600?r=`${Math.floor(s/60)}m ago`:r=`${Math.floor(s/3600)}h ago`,a.textContent=`Last updated: ${r}`}var Fe=0;function je(){return Fe}function F(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let l=a.querySelector(".notification-badge");l&&(e>0?(l.textContent=e>9?"9+":e,l.style.display="flex"):l.style.display="none")}function ne(t){Fe=t;let e=document.getElementById("dexter-nav-badge");e&&(t>0?e.style.display="flex":e.style.display="none");let a=document.getElementById("alerts-menu-item");if(a){let s=a.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="auto",a.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}let l=document.getElementById("switch-alerts");if(l){let s=l.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="8px",l.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}}function de(){let t=document.getElementById("alerts-list");if(!t)return;let e=t.querySelectorAll(".alert-unread").length;ne(e)}function Se(){return"https://event.easter.company"}function Tt(){return"https://discord.easter.company"}var kt="http://127.0.0.1:8100",It="http://127.0.0.1:8300",At={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function me(t){let e=A(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,r)=>{let d=At[r];return d?`<span class="${d}">`:""});let a=(e.match(/<span/g)||[]).length,l=(e.match(/<\/span/g)||[]).length;return a>l&&(e+="</span>".repeat(a-l)),e}function Ge(t){if(!t)return"";let e=A(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var J=null,Y=null,re=!1,ce=!1;async function k(t,e={}){if(J)try{let s=await fetch(J+t,e);if(s.ok)return s;J=null}catch{J=null}let a=Se(),l=kt;try{let s=await fetch(a+t,e);if(s.ok)return J=a,re&&(console.log("\u2728 Production event service restored."),re=!1),s;throw new Error("Primary failed")}catch{re||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${l}`),re=!0);try{let r=await fetch(l+t,e);if(r.ok)return J=l,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function We(t,e={}){if(Y)try{let s=await fetch(Y+t,e);if(s.ok)return s;Y=null}catch{Y=null}let a=Tt(),l=It;try{let s=await fetch(a+t,e);if(s.ok)return Y=a,ce&&(console.log("\u2728 Production discord service restored."),ce=!1),s;throw new Error("Primary failed")}catch{ce||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${l}`),ce=!0);try{let r=await fetch(l+t,e);if(r.ok)return Y=l,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Ve=()=>`
    <div class="alerts-actions">
        <button id="alerts-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="alerts-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="alerts-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="alerts-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="alerts-list" class="alerts-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading alerts...</p>
        </div>
    </div>
`,pe=null,G=new Set,ue=[];async function W(t=!1){let e=document.getElementById("alerts-list");if(!e)return;_t(),t&&(e.innerHTML="<p>Updating...</p>");let a="/events?ml=1000&format=json&event.type=system.notification.generated";try{let l=await k(a);if(!l.ok)throw new Error("Service is offline or unreachable.");let r=(await l.json()).events||[];pe=Date.now(),B(0,pe);let d=Date.now(),v=24*60*60*1e3,b=r.filter(o=>{let p=localStorage.getItem(`alert_read_ts_${o.id}`);if(!p)return!0;let f=parseInt(p);return d-f<v});b.sort((o,p)=>{let f=_=>{let T=_.event;if(typeof T=="string")try{T=JSON.parse(T)}catch{return"low"}return(T.priority||"low").toLowerCase()},C=_=>_==="critical"?4:_==="high"?3:_==="medium"?2:1,E=C(f(o)),S=C(f(p));return E!==S?S-E:p.timestamp-o.timestamp}),ue=b;let g=o=>{let p=o.event;if(typeof p=="string")try{p=JSON.parse(p)}catch{return"low"}return(p.priority||"low").toLowerCase()},h=[],m=new Set(b.map(o=>g(o))).size>1;if(b.length>0){let o=null;b.forEach(p=>{let f=g(p);m&&f!==o&&(h.push({id:`divider-${f}`,type:"divider",label:f.toUpperCase()}),o=f),h.push(p)})}if(t&&(e.innerHTML=""),b.length===0){e.innerHTML=L("empty","No alerts yet."),de();return}let n=o=>{let p=o.event;if(typeof p=="string")try{p=JSON.parse(p)}catch{return null}let f=p.title||"Untitled Alert",C=p.body||"No description provided.",E=p.priority||"low",S=!!p.alert,_=p.category||"system",T=p.related_event_ids||[],I=!!localStorage.getItem(`alert_read_ts_${o.id}`),R=new Date(o.timestamp*1e3),D=R.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),P=R.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),$=I?"event-border-grey":"event-border-blue";!I&&S&&($="event-border-red"),I&&(E==="high"||E==="critical")?$="event-border-red":I&&E==="medium"&&($="event-border-orange");let M=I?"alert-read":"alert-unread",H=G.has(o.id),N=H?"expanded":"",xe=H?"display: block;":"display: none;",oe="",Ie="";T.length>0&&(Ie=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${T.map(j=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${j.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),oe=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${E==="high"||E==="critical"?"#ff4d4d":E==="medium"?"#ffa500":"#888"}">${E.toUpperCase()}</span>
                </div>
                ${Ie}
                <div class="event-detail-block" style="text-align: left;">
                    <div class="detail-pre">${Ge(`### Insight

`+C)}</div>
                </div>
            `;let U=document.createElement("div");U.className=`event-item notification-item ${$} ${M} ${N} cursor-pointer`,U.dataset.alertId=o.id,U.onclick=function(j){if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(o.id);let te=this.querySelector(".event-details");te&&(te.style.display="none")}else{this.classList.add("expanded"),G.add(o.id);let te=this.querySelector(".event-details");if(te&&(te.style.display="block"),!localStorage.getItem(`alert_read_ts_${o.id}`)){localStorage.setItem(`alert_read_ts_${o.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ee="event-border-grey";E==="high"||E==="critical"?Ee="event-border-red":E==="medium"&&(Ee="event-border-orange"),this.classList.add(Ee),de()}}};let Yt=f,Ct={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[_]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${D}</span>
                    <span class="event-date">${P}</span>
                </div>
                <div class="event-icon"><i class='bx ${Ct}'></i></div>
                <div class="event-content">
                    <div class="event-service">${_.toUpperCase()} ${S?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${f}</div>
                    <div class="event-details" style="${xe}">
                        ${oe}
                    </div>
                </div>
            `;let Ae=U.querySelector(".event-details");Ae&&Ae.addEventListener("click",j=>{j.stopPropagation()});let _e=U.querySelector(".close-details-btn");return _e&&_e.addEventListener("click",j=>{j.stopPropagation(),U.classList.remove("expanded");let we=U.querySelector(".event-details");we&&(we.style.display="none"),G.delete(o.id)}),U},i=o=>{let p=document.createElement("div");p.className="notification-divider",p.dataset.alertId=o.id;let f="#888888";return o.label==="CRITICAL"?f="#ff4d4d":o.label==="HIGH"?f="#ff8888":o.label==="MEDIUM"&&(f="#ffa500"),p.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${f}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,p.innerHTML=`<span style="white-space: nowrap;">${o.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${f}44, transparent); flex-grow: 1;"></div>`,p},c=Array.from(e.children),y=new Map(c.map(o=>[o.dataset.alertId,o])),x=new Set(h.map(o=>o.id));c.forEach(o=>{let p=o.dataset.alertId;(!p||!x.has(p))&&o.remove()});let w=null;h.forEach((o,p)=>{let f=y.get(o.id);(!f||t)&&(f&&f.remove(),o.type==="divider"?f=i(o):f=n(o),!f)||(p===0?e.firstElementChild!==f&&e.prepend(f):w&&w.nextElementSibling!==f&&w.after(f),w=f)}),pe=Date.now(),B(0,pe),de()}catch(l){console.error("Error fetching alerts:",l),e.children.length===0&&(e.innerHTML=L("offline","Failed to load alerts.","The event service may be offline."))}}function _t(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),a=document.getElementById("alerts-close-all"),l=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ue.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),W(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ue.forEach(s=>{G.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),W(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{G.clear(),W(!0)},a.dataset.listenerAttached="true"),l&&!l.dataset.listenerAttached&&(l.onclick=()=>{let s=Date.now()-1728e5;ue.forEach(r=>{localStorage.setItem(`alert_read_ts_${r.id}`,s.toString())}),G.clear(),W(!0)},l.dataset.listenerAttached="true")}async function Ke(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await k(t);if(!e.ok)return;let l=(await e.json()).events||[],s=0;l.forEach(r=>{localStorage.getItem(`alert_read_ts_${r.id}`)||s++}),ne(s)}catch{}}var Je=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn"><i class='bx bx-plus'></i> New Idea</button>
    <button id="roadmap-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
    <button id="roadmap-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
  </div>
`,Ye=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,V=new Set,Xe=[],X=null;async function K(t=!1){let e=document.getElementById("roadmap-list");if(e){Mt();try{let a=await k("/roadmap");if(!a.ok)throw new Error("Offline");let l=await a.json();if(Xe=l,l.length===0){e.innerHTML=L("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let s=g=>{let h=V.has(g.id),u=g.state==="draft",m=g.state==="published",n=g.state==="consumed",i="event-border-grey";m&&(i="event-border-blue"),n&&(i="event-border-purple");let y=new Date(g.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),x=document.createElement("div");x.className=`event-item notification-item ${i} cursor-pointer ${h?"expanded":""}`,x.dataset.itemId=g.id,x.onclick=p=>{if(p.target.closest("button"))return;x.classList.contains("expanded")?(x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",V.delete(g.id)):(x.classList.add("expanded"),x.querySelector(".event-details").style.display="block",V.add(g.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${g.state.toUpperCase()}]</span>`;x.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${y.split(",")[1]}</span>
          <span class="event-date">${y.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${A(g.content)}</div>
          <div class="event-details" style="${h?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${n?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${m?"bx-pause":"bx-rocket"}'></i> ${m?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${n?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(g.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let o=x.querySelector(".event-details");return o&&o.addEventListener("click",p=>{p.stopPropagation()}),x.querySelector(".edit-btn")?.addEventListener("click",()=>Bt(g)),x.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Dt(g)),x.querySelector(".delete-btn")?.addEventListener("click",()=>Ht(g.id)),x.querySelector(".close-details-btn")?.addEventListener("click",p=>{p.stopPropagation(),x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",V.delete(g.id)}),x},r=Array.from(e.children),d=new Map(r.map(g=>[g.dataset.itemId,g])),v=new Set(l.map(g=>g.id));r.forEach(g=>{let h=g.dataset.itemId;(!h||!v.has(h))&&g.remove()});let b=null;l.forEach((g,h)=>{let u=d.get(g.id);(!u||t)&&(u&&u.remove(),u=s(g),!u)||(h===0?e.firstElementChild!==u&&e.prepend(u):b&&b.nextElementSibling!==u&&b.after(u),b=u)})}catch{e.children.length===0&&(e.innerHTML=L("offline","Failed to load roadmap.","The event service may be offline."))}}}function Mt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),l=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{X=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",X=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input").value;if(!r.trim())return;let d=X?`/roadmap/${X}`:"/roadmap",v=X?"PATCH":"POST";try{await k(d,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})}),document.getElementById("roadmap-editor-container").style.display="none",K(!0)}catch(b){console.error(b)}},e.dataset.listenerAttached="true"),l&&!l.dataset.listenerAttached&&(l.onclick=()=>{Xe.forEach(r=>V.add(r.id)),K(!0)},l.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{V.clear(),K(!0)},s.dataset.listenerAttached="true")}function Bt(t){X=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Dt(t){let e=t.state==="published"?"draft":"published";try{await k(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),K(!0)}catch(a){console.error(a)}}async function Ht(t){if(confirm("Delete this roadmap item?"))try{await k(`/roadmap/${t}`,{method:"DELETE"}),V.delete(t),K(!0)}catch(e){console.error(e)}}var Ze=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,et=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,Qe=null,Q=new Set,tt=[];async function ge(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Nt();let a="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let l=await k(a);if(!l.ok)throw new Error("Service is offline or unreachable.");let r=(await l.json()).events||[];if(tt=r,Qe=Date.now(),B(2,Qe),r.length===0){e.innerHTML=L("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),F(1,0);return}t&&(e.innerHTML="");let d=u=>{let m=u.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let n=m.title||"Untitled Blueprint",i=m.summary||m.body||"No summary provided.",c=m.content||"",y=m.category||"architecture",x=m.affected_services||[],w=m.implementation_path||[],o=new Date(u.timestamp*1e3),p=o.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),f=o.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),C=Q.has(u.id),E=C?"display: block;":"display: none;",S=document.createElement("div");S.className=`event-item notification-item event-border-purple cursor-pointer ${C?"expanded":""}`,S.dataset.blueprintId=u.id;let T={architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[y]||"bx-paint";S.onclick=function(P){if(this.classList.contains("expanded")){this.classList.remove("expanded"),Q.delete(u.id);let M=this.querySelector(".event-details");M&&(M.style.display="none")}else{this.classList.add("expanded"),Q.add(u.id);let M=this.querySelector(".event-details");M&&(M.style.display="block")}};let O=x.length>0?`<div class="event-detail-row"><span class="detail-label">Related Services:</span> <span class="detail-value">${x.join(", ")}</span></div>`:"",I="";w.length>0&&(I=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(P=>`<li>${A(P)}</li>`).join("")}
                        </ul>
                    </div>
                `),S.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${p}</span>
                    <span class="event-date">${f}</span>
                </div>
                <div class="event-icon"><i class='bx ${T}'></i></div>
                <div class="event-content">
                    <div class="event-service">${y.toUpperCase()}</div>
                    <div class="event-message">${n}</div>
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; color: #fff;">
                            ${A(i)}
                        </div>
                        ${O}
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${A(c)}</div>
                        </div>
                        ${I}
                    </div>
                </div>
            `;let R=S.querySelector(".event-details");R&&R.addEventListener("click",P=>{P.stopPropagation()});let D=S.querySelector(".close-details-btn");return D&&D.addEventListener("click",P=>{P.stopPropagation(),S.classList.remove("expanded");let $=S.querySelector(".event-details");$&&($.style.display="none"),Q.delete(u.id)}),S},v=Array.from(e.children),b=new Map(v.map(u=>[u.dataset.blueprintId,u])),g=new Set(r.map(u=>u.id));v.forEach(u=>{let m=u.dataset.blueprintId;(!m||!g.has(m))&&u.remove()});let h=null;r.forEach((u,m)=>{let n=b.get(u.id);(!n||t)&&(n&&n.remove(),n=d(u),!n)||(m===0?e.firstElementChild!==n&&e.prepend(n):h&&h.nextElementSibling!==n&&h.after(n),h=n)}),F(2,r.length)}catch(l){console.error("Error fetching blueprints:",l),e.children.length===0&&(e.innerHTML=L("offline","Failed to load blueprints.","The event service may be offline."))}}function Nt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{tt.forEach(a=>Q.add(a.id)),ge(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Q.clear(),ge(!0)},e.dataset.listenerAttached="true")}var st=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${Je()}
            </div>
            ${Ye()}
        </div>

        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${Ze()}
            </div>
            ${et()}
        </div>
    </div>
`;async function $e(){await Promise.all([K(),ge()])}var it=()=>`
    <div class="alerts-actions">
        <button id="contacts-refresh" class="notif-action-btn"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,nt=null;async function ve(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>ve(),e.dataset.listenerAttached="true");try{let a=await We("/contacts");if(!a.ok)throw new Error("Service unreachable");let s=(await a.json()).members||[];if(nt=Date.now(),B(4,nt),s.length===0){t.innerHTML=L("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,"Master User":1,Admin:2,Moderator:3,Contributor:4,User:5,Anyone:6};s.sort((d,v)=>{let b=r[d.level]??10,g=r[v.level]??10;return b!==g?b-g:d.username.localeCompare(v.username)}),t.innerHTML=s.map(d=>{let v=d.color?"#"+d.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",b=d.status==="online"?"#5eff5e":d.status==="idle"?"#ffa500":d.status==="dnd"?"#ff4d4d":"#666",g="#888";d.level==="Me"||d.level==="Master User"?g="#bb86fc":d.level==="Admin"?g="#cf6679":d.level==="Moderator"?g="#03dac6":d.level==="Contributor"&&(g="#ffa500");let h=d.level==="Me",u=h?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",m=h?"2px solid #bb86fc":`1px solid ${v}33`;return`
                <div class="user-profile-section" style="background: ${u}; padding: 15px; border-radius: 8px; border: ${m}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${h?"#bb86fc":v}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${d.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${h?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${b}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${d.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${g}; font-weight: 600; text-transform: uppercase;">${h?"DEXTER (ME)":d.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${d.id}</p>
                    </div>
                </div>
            `}).join(""),F(4,s.filter(d=>d.status!=="offline").length)}catch{t.children.length===0&&(t.innerHTML=L("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Rt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function at(t,e){let a=Rt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!a)return t;let l=a.replace(/\{(\w+)\}/g,(s,r)=>e[r]!==void 0&&e[r]!==null?e[r]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(l+=` (Translation: ${e.english_translation})`),l}var lt=()=>`
    <div class="alerts-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
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
`,fe=null,Z=new Set,ie=[],be="all",Pt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},Ot={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function ot(t){for(let[e,a]of Object.entries(Pt))if(a.includes(t))return e;return"system"}function Ut(t){return Ot[t]||"bx-square-rounded"}async function ee(t=!1){let e=document.getElementById("events-timeline");if(!e)return;zt();let l=`/events?ml=${be==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let s=await k(l);if(!s.ok)throw new Error("Service is offline or unreachable.");let d=(await s.json()).events||[],v=d;if(be!=="all"&&(v=d.filter(n=>{let i=n.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return!1}return ot(i.type)===be})),ie=v.slice(0,50),fe=Date.now(),B(1,fe),ie.length===0){e.innerHTML=L("empty","No events found for this filter.");return}t&&(e.innerHTML="");let b=n=>{let i=n.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let c=i.type,y=ot(c),x=Ut(c),w=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command"||c==="system.analysis.audit"||c==="system.test.completed"||c==="error_occurred"||c==="system.cli.status"||c.startsWith("system.roadmap")||c.startsWith("system.process"),o="event-border-grey";w&&(c==="moderation.explicit_content.deleted"||c==="error_occurred"?o="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.analysis.audit"?o="event-border-purple":c==="system.cli.command"||c==="system.cli.status"?o="event-border-orange":c==="system.test.completed"?o=i.test?.status==="OK"&&i.lint?.status==="OK"&&i.format?.status==="OK"?"event-border-blue":"event-border-red":o="event-border-blue");let p=w?"cursor-pointer":"",f=Z.has(n.id),C=f?"expanded":"",E=f?"display: block;":"display: none;",S=new Date(n.timestamp*1e3),_=S.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=S.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),O=at(c,i),I=i.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${i.user_level})</span>`:"",R="";if(w){let $="";if(c==="engagement.decision")$=`
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
                    `;else if(c==="messaging.bot.sent_message")$=`
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
                    `;else if(c==="moderation.explicit_content.deleted")$=`
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
                    `;else if(c==="analysis.link.completed")$=`
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
                    `;else if(c==="analysis.visual.completed"){let M="";i.base64_preview?M=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(M=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),$=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${i.filename}</span>
                        </div>
                        ${M}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${A(i.description)||"None"}</pre>
                        </div>
                    `}else if(c==="system.cli.command")$=`
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
                    `;else if(c==="system.analysis.audit")$=`
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
                            <pre class="detail-pre">${A(i.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${A(i.raw_input)}</pre>
                        </div>
                    `;else if(c==="system.test.completed")$=`
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
                    `;else if(c==="error_occurred")$=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${i.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${A(i.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(i.context||{},null,2)}</pre>
                        </div>
                    `;else if(c==="system.cli.status")$=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${i.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${A(i.message)}</pre>
                        </div>
                    `;else if(c==="messaging.user.sent_message"){let M="";i.attachments&&i.attachments.length>0&&(M=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${i.attachments.map(N=>{let xe=N.content_type&&N.content_type.startsWith("image/"),oe=(N.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${xe?`<div class="attachment-thumb-container"><img src="${N.url}" alt="${N.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${N.url}" target="_blank" class="attachment-link">${N.filename}</a>
                                        <span class="attachment-meta">${N.content_type} \u2022 ${oe}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),$=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${i.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${i.content||"(empty)"}</pre>
                        </div>
                        ${M}
                    `}R=`
                    <div class="event-details" style="${E}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                        </div>
                        ${$}
                    </div>
                `}let D=document.createElement("div");D.className=`event-item ${o} ${p} ${C}`,D.dataset.eventId=n.id,D.onclick=function($){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Z.delete(n.id);let H=this.querySelector(".event-details");H&&(H.style.display="none")}else{this.classList.add("expanded"),Z.add(n.id);let H=this.querySelector(".event-details");H&&(H.style.display="block")}},D.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${_}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-icon"><i class='bx ${x}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${y}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${y}</span>
                        ${n.service} ${I}
                    </div>
                    <div class="event-message">${O}</div>
                    ${R}
                </div>
            `;let P=D.querySelector(".event-details");if(P&&P.addEventListener("click",$=>{$.stopPropagation()}),w){let $=D.querySelector(".close-details-btn");$&&$.addEventListener("click",M=>{M.stopPropagation();let H=M.target.closest(".event-item");if(H){H.classList.remove("expanded"),Z.delete(n.id);let N=H.querySelector(".event-details");N&&(N.style.display="none")}})}return D},g=Array.from(e.children),h=new Map(g.map(n=>[n.dataset.eventId,n])),u=new Set(ie.map(n=>n.id));g.forEach(n=>{let i=n.dataset.eventId;(!i||!u.has(i))&&n.remove()});let m=null;ie.forEach((n,i)=>{let c=h.get(n.id);(!c||t)&&(c&&c.remove(),c=b(n),!c)||(i===0?e.firstElementChild!==c&&e.prepend(c):m&&m.nextElementSibling!==c&&m.after(c),m=c)}),fe=Date.now(),B(1,fe)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=L("offline","Failed to load events.","The event service may be offline."))}}function zt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),a=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ie.forEach(l=>Z.add(l.id)),ee(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Z.clear(),ee(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.querySelectorAll(".filter-btn").forEach(l=>{l.onclick=()=>{a.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),l.classList.add("active"),be=l.dataset.filter,ee(!0)}}),a.dataset.listenerAttached="true")}function rt(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var qt=null;async function ae(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await k("/logs");if(!e.ok)throw new Error("Logs offline");let a=await e.json();if(!a||a.length===0)return t.innerHTML=L("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let l=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=a.filter(d=>!l.includes(d.id));s.forEach(d=>{d.logs&&Array.isArray(d.logs)?d.logs.reverse():d.logs=[]}),s.reverse();let r=s.map(d=>{let v=d.logs.join(`
`),b=[...d.logs];if(b.length<25){let h=25-b.length;for(let u=0;u<h;u++)b.push("")}else b.length>25&&(b=b.slice(-25));let g=b.map(h=>me(h)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${d.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(v)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${d.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(d=>{d.addEventListener("click",()=>{let v=unescape(d.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let b=d.querySelector("i");b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(d=>{d.addEventListener("click",async()=>{let v=d.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${v}?`))try{(await k(`/logs?service_id=${v}`,{method:"DELETE"})).ok&&ae()}catch(b){console.error("Error clearing logs:",b)}})}),qt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=L("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var ut=()=>`
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
        </div>`,gt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-component' style="color: #03dac6;"></i>
            <h2>Live Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,vt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,ft=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,bt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2>Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
        </div>
        <div id="hardware-info-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px;">
        </div>`,ht=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${rt()}
        </div>`;async function yt(){await Promise.all([he(),Le(),Ce()]),await ae()}var ct=null,dt=null,mt=null;async function xt(){try{return await(await k("/system_monitor")).json()}catch{return null}}async function pt(){try{return await(await k("/system/hardware")).json()}catch{return null}}async function Ft(){try{return await(await k("/processes")).json()}catch{return null}}async function jt(){try{return await(await k("/analyst/status")).json()}catch{return null}}async function Le(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),a=document.getElementById("hardware-refresh-btn"),l=n=>{if(!n){e.children.length===0&&(e.innerHTML=L("offline","Failed to load hardware info.","The event service may be offline."));return}let i="",c=(n.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(i+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${c} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,n.CPU&&n.CPU.length>0){let y=n.CPU[0];i+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${y.LABEL}">${y.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${y.COUNT} Cores / ${y.THREADS} Threads</span>
                    </div>
                </div>`}if(n.GPU&&n.GPU.length>0&&n.GPU.forEach((y,x)=>{let w=(y.VRAM/1073741824).toFixed(1);i+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${x}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${y.LABEL}">${y.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${w} GB VRAM</span>
                        </div>
                    </div>`}),n.STORAGE&&n.STORAGE.length>0){let y=0,x=0;n.STORAGE.forEach(f=>{y+=f.USED,x+=f.SIZE});let w=(y/(1024*1024*1024)).toFixed(1),o=(x/(1024*1024*1024)).toFixed(1),p=x>0?(y/x*100).toFixed(0):0;i+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} / ${o} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${p>90?"#ff4d4d":"#00ff00"}; width: ${p}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=i};if(e&&a&&(a.dataset.listenerAttached||(a.onclick=async()=>{a.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let n=await pt();n?(l(n),a.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.children.length===0&&(e.innerHTML=L("offline","Failed to refresh.","The event service may be offline.")),a.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},a.dataset.listenerAttached="true"),e.children.length===0)){let n=await pt();l(n)}if(!t)return;let s=await xt();if(!s||!s.services){t.children.length===0&&(t.innerHTML=L("offline","Failed to load system metrics.","The event service may be offline."));return}ct=Date.now(),B(0,ct);let r=s.services||[];Array.from(t.children).forEach(n=>{n.classList.contains("service-widget")||n.remove()});function d(n){return!n||n==="N/A"||n==="unknown"||n.trim()===""?"-":n}function v(n){if(!n||n==="N/A"||n==="unknown")return"-";let i=n.match(/^(\d+\.\d+\.\d+)/);return i?i[0]:n.split(".").slice(0,3).join(".")||"-"}function b(n){return!n||n.length<=28?n:n.substring(0,28)+"..."}function g(n){if(!n||n==="N/A"||n==="unknown")return"-";let i=n.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!i)return"-";let c=parseInt(i[1])||0,y=parseInt(i[2])||0,x=parseInt(i[3])||0,w=parseFloat(i[4])||0,o=c*86400+y*3600+x*60+w,p=Math.floor(o/86400);if(p>0)return`${p}d`;let f=Math.floor(o/3600);if(f>0)return`${f}h`;let C=Math.floor(o/60);return C>0?`${C}m`:`${Math.floor(o)}s`}function h(n){let i=n.status==="online",c=i?"service-widget-online":"service-widget-offline",y=i?"bx-check-circle":"bx-x-circle",x=i?"OK":"BAD",w=n.version?v(n.version.str):"-",o=n.cpu&&n.cpu!=="N/A"?n.cpu:"-",p=n.memory&&n.memory!=="N/A"?n.memory:"-",f=o!=="-"?"#00ff00":"#666",C=o!=="-"?"#fff":"#666",E=p!=="-"?"#00ff00":"#666",S=p!=="-"?"#fff":"#666",_=g(n.uptime),T="";return i?T=`
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
                        <span style="color: ${C};">${o}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${E};"></i>
                        <span style="color: ${S};">${p}</span>
                    </div>
                </div>`:T='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${c}" data-service-id="${n.id}"><div class="service-widget-header"><i class="bx ${y}"></i><h3>${n.short_name||n.id}</h3><span class="service-widget-status">${x}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${b(n.domain&&n.port?`${n.domain}:${n.port}`:"")}</span></div>${T}</div></div>`}let u=new Map(Array.from(t.querySelectorAll(".service-widget")).map(n=>[n.dataset.serviceId,n])),m=new Set(r.map(n=>n.id));for(let[n,i]of u)m.has(n)||i.remove();r.forEach(n=>{let i=h(n),c=u.get(n.id);c?c.outerHTML!==i&&(c.outerHTML=i):t.insertAdjacentHTML("beforeend",i)})}async function Ce(){let t=document.getElementById("models-widgets");if(!t)return;let e=await xt();if(!e){t.children.length===0&&(t.innerHTML=L("offline","Failed to load model status.","The event service may be offline."));return}dt=Date.now(),B(2,dt);let a=e.models||[],l=e.whisper;Array.from(t.children).forEach(v=>{v.classList.contains("service-widget")||v.remove()});function s(v){let b=v.status==="Ready";return`
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
                </div>`}function r(v){let b=v.status==="Downloaded",g=b?"service-widget-online":"service-widget-offline",h=b?"OK":"MISSING",u=b&&v.size>0?`${(v.size/1e9).toFixed(2)} GB`:"-",m=v.name;return v.type==="custom"&&m.endsWith(":latest")&&(m=m.replace(":latest","")),`<div class="service-widget ${g}" data-model-name="${v.name}"><div class="service-widget-header"><i class="bx ${b?"bx-check-circle":"bx-x-circle"}"></i><h3>${m}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${v.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${u}</span></div></div></div>`}let d="";if(l&&(d+=s(l)),d+=a.map(r).join(""),!d){t.innerHTML=L("empty","No models found.");return}t.innerHTML!==d&&(t.innerHTML=d)}async function he(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),a=document.getElementById("analyst-t2-val"),l=document.getElementById("analyst-t3-val"),s=document.getElementById("analyst-idle-val"),r=document.getElementById("analyst-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await k("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),he()}catch{r.innerHTML="<i class='bx bx-error'></i> Failed"}},r.dataset.listenerAttached="true");let d=await jt();if(d){let m=Math.floor(Date.now()/1e3),n=d.active_tier,i=(c,y,x)=>{if(n===x||x==="guardian"&&n==="tests"){c.textContent="Working",c.style.color="#bb86fc";return}let w=y-m;if(w<=0)c.textContent="Ready",c.style.color="#5eff5e";else{let o=Math.floor(w/60),p=w%60;c.textContent=`${o}m ${p}s`,c.style.color="#fff"}};if(e&&d.guardian&&i(e,d.guardian.next_run,"guardian"),a&&d.architect&&i(a,d.architect.next_run,"architect"),l&&d.strategist&&i(l,d.strategist.next_run,"strategist"),s&&d.system_idle_time!==void 0){let c=d.system_idle_time,y=Math.floor(c/60),x=c%60;s.textContent=`${y}m ${x}s`,c>300?s.style.color="#5eff5e":c>60?s.style.color="#ffa500":s.style.color="#fff"}}else[e,a,l,s].forEach(n=>{n&&(n.textContent="Offline",n.style.color="#ff4d4d")});let v=await Ft(),b=document.getElementById("vitals-processes-val");if(b)if(v){let m=v.length;b.textContent=m>0?`${m} Active`:"Idle",b.style.color=m>0?"#bb86fc":"#fff"}else b.textContent="-",b.style.color="#888";if(v===null){t.children.length===0&&(t.innerHTML=L("offline","Failed to load process status.","The event service may be offline."));return}if(mt=Date.now(),B(1,mt),v.length===0){t.innerHTML=L("empty","No active processes."),F(1,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function g(m){let n=Math.floor(Date.now()/1e3-m.start_time),i=m.retries>0?`<span class="process-retry-badge">Retry ${m.retries}</span>`:"",c=m.channel_id,y={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return y[c]?c=y[c]:/^\d+$/.test(c)&&(c=`Channel ${c}`),`
                <div class="service-widget process-widget" data-channel-id="${m.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${c}</h3>
                        ${i}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${m.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${n}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${m.pid}</span>
                        </div>
                    </div>
                </div>`}let h=new Map(Array.from(t.querySelectorAll(".process-widget")).map(m=>[m.dataset.channelId,m])),u=new Set(v.map(m=>m.channel_id));for(let[m,n]of h)u.has(m)||n.remove();v.forEach(m=>{let n=g(m),i=h.get(m.channel_id);i?i.outerHTML!==n&&(i.outerHTML=n):t.insertAdjacentHTML("beforeend",n)}),F(1,v.length)}function ye(){let t=se(),e=Pe()||"master@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},l=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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
                            <input type="checkbox" id="analytics-toggle" ${l?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Te(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let r=this.dataset.theme;ze(r),t.setContent(ye()),Te(t)})});let a=document.getElementById("notifications-toggle");a&&(a.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let l=document.getElementById("analytics-toggle");l&&(l.checked=localStorage.getItem("easter_analytics_enabled")!=="false",l.onclick=s=>{let r=s.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}var Gt="2.8.143",St=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Tier 1 Guardian Analyst technical sentry.",usage:"dex guardian",category:"cognitive",docs:{overview:"Guardian is the Technical Sentry of the ecosystem. It performs automated health checks and audits.",details:["Scans for service crashes and restarts.","Analyzes logs for high-severity errors.","Verifies system-wide resource availability.","Triggers immediate notifications if anomalies are detected."],extended_usage:"dex guardian [--force] [--quiet]"},demo_output:["\u2588 \x1B[1mGUARDIAN ANALYST\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Initializing Tier 1 Analysis..."," \u2699\uFE0F Fetching system context..."," \u2699\uFE0F Running Guardian Analysis...","","\x1B[32mNo significant insights found.\x1B[0m"," \u2699\uFE0F Resetting Guardian timer...","\x1B[32m\u2713 Guardian timer reset.\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
dex stop
dex restart`},demo_output:["\u2192 Restarting dex-event-service...","\x1B[32m\u2713\x1B[0m Service stopped (PID 19420)","\x1B[32m\u2713\x1B[0m Service started (PID 20155)","\u2192 Verifying health check (http://127.0.0.1:8100/status)...","\x1B[32m\u2713\x1B[0m Response received in 12ms.","","\x1B[1mService uptime: 4 seconds\x1B[0m"]},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the status of CLI and services.",usage:"dex status [service]",category:"system",docs:{overview:"The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.",details:["Reports status (online/offline/degraded).","Displays version strings and build hashes.","Shows network addresses and ports.","Validates internal service-to-service communication."],extended_usage:"dex status [service_id|all]"},demo_output:["\u2588 \x1B[1mSERVICE STATUS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE  ADDRESS          VERSION  BRANCH   COMMIT   STATUS   UPTIME           CPU      MEM","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500          \u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500      \u2500\u2500\u2500","cli      local            2.8.143  main     240fc38  \x1B[32mOK\x1B[0m       \x1B[90m--\x1B[0m               \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m","event    127.0.0.1:8100   2.8.198  main     a8f2b1c  \x1B[32mOK\x1B[0m       14h22m           0.2%     12.4 MB","discord  127.0.0.1:8300   2.8.68   main     6e2d1a4  \x1B[32mOK\x1B[0m       14h22m           0.1%     24.8 MB","tts      127.0.0.1:8200   0.0.25   main     f2e1d0c  \x1B[32mOK\x1B[0m       14h22m           0.0%     1.2 GB","web      127.0.0.1:8400   0.0.5    main     b1c2d3e  \x1B[32mOK\x1B[0m       14h22m           0.0%     42.1 MB","ollama   127.0.0.1:11434  0.5.4    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       4d12h            0.5%     8.4 GB","cache    127.0.0.1:6379   7.4.1    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       32d              0.1%     4.2 MB"]},{id:"logs",title:"Logs",icon:"bx-terminal",description:"View or tail service logs.",usage:"dex logs <service> [-f]",category:"system",docs:{overview:"Logs provides real-time observability into the background processes of the Dexter services.",details:["Tail live output from systemd services.","Support for following (-f) and history limiting.","ANSI color support for terminal readability.","Aggregated view for multi-instance deployments."],extended_usage:"dex logs <service_id> [-f]"},demo_output:["\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:05\x1B[0m [INFO] Joined voice channel: 1437617331...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:08\x1B[0m [DEBUG] VAD triggered by user oweneaster","\x1B[35m[EVENT]\x1B[0m   \x1B[90m14:30:09\x1B[0m [INFO] Emitted: messaging.user.speaking.started","\x1B[32m[TTS]\x1B[0m     \x1B[90m14:30:12\x1B[0m [INFO] Generating audio for 12 words...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:15\x1B[0m [SUCCESS] Audio playback completed.","\x1B[90m[Watching for new logs...]\x1B[0m"]},{id:"event",title:"Event",icon:"bx-broadcast",description:"Interact with the Event Service.",usage:"dex event [log|service|analyst|delete]",category:"system",docs:{overview:"The event bus interface for manual debugging and data extraction.",details:["Query the history of the system event log.","Manually reset analyst tier timers.","Filter events by type, service, or count.","Delete historical events matching patterns."],extended_usage:`dex event log [-n count] [-t type]
dex event analyst [status|reset]
dex event delete <pattern>`},demo_output:["\u2588 \x1B[1mLAST 20 EVENTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m14:42:01\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[38;5;208mCMD: dex guardian [] (success)\x1B[0m","\x1B[90m14:42:02\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[35m[INFO] Analysis complete: No significant insights found.\x1B[0m","\x1B[90m14:45:10\x1B[0m \x1B[90mdiscord        \x1B[0m | \x1B[34moweneaster: Dexter, run a system scan.\x1B[0m","\x1B[90m14:45:12\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[32mPROC+: system-cli-op (started)\x1B[0m","\x1B[90m14:45:15\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[31m[ERROR] Connection timeout to Redis.\x1B[0m"]},{id:"discord",title:"Discord",icon:"bx-bot",description:"Interact with the Discord Service.",usage:"dex discord [contacts|channels|service|quiet]",category:"system",docs:{overview:"Direct control over the Discord bot integration and audio engine.",details:["List all guild members and their permission levels.","Inspect channel structures and user presence.",'Toggle "Quiet Mode" for public interactions.',"Check raw service state and gateway health."],extended_usage:`dex discord contacts
dex discord quiet [on|off]`},demo_output:["\u2588 \x1B[1mDISCORD CONTACTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Fetching guild members...","","\u2588 Server: Easter Company (12 members) \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","LEVEL           USERNAME        STATUS   DISCORD ID","\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[35mDEXTER (ME)\x1B[0m     Dexter          \x1B[32monline\x1B[0m   \x1B[90m1313...0432\x1B[0m","\x1B[35mMASTER USER\x1B[0m     oweneaster      \x1B[32monline\x1B[0m   \x1B[90m3130...7920\x1B[0m","\x1B[31mADMIN\x1B[0m           Developer       \x1B[33midle\x1B[0m     \x1B[90m4242...8181\x1B[0m","\x1B[37mUSER\x1B[0m            GuestUser       \x1B[90moffline\x1B[0m  \x1B[90m9999...9999\x1B[0m"]},{id:"ollama",title:"Ollama",icon:"bx-brain",description:"Run the system 'ollama' executable or sync models.",usage:"dex ollama [pull|sync|list]",category:"system",docs:{overview:"Proxy command for managing local LLMs and neural vision models.",details:["Wraps the system ollama binary.","Added 'pull' subcommand to sync all Dexter-required models.","Synchronizes custom model templates automatically.","Validates model weight checksums."],extended_usage:`dex ollama pull
dex ollama run gemma3:12b`},demo_output:["\x1B[34m[OLLAMA]\x1B[0m Synchronizing custom Dexter models...","Pulling base models...","Pulling gemma3:12b... \x1B[32m[100%]\x1B[0m","\x1B[32m\u2713 Successfully pulled model: gemma3:12b\x1B[0m","Creating custom Dexter models...","  Rebuilding dex-analyst-guardian from gpt-oss:20b...","\x1B[32m\u2713   Created dex-analyst-guardian\x1B[0m","\x1B[32m\u2713 Ollama models are up-to-date.\x1B[0m"]},{id:"system",title:"System Info",icon:"bx-info-square",description:"Show system info and manage packages.",usage:"dex system [info|scan|validate|install]",category:"system",docs:{overview:"Performance observability tool focused on AI resource availability.",details:["Scans and reports CPU, GPU, RAM, and Storage vitals.","Validates presence of required system packages.","Handles automatic installation of missing dependencies.","Exports telemetry data in JSON format."],extended_usage:`dex system scan
dex system validate
dex system install <package>`},demo_output:["\u2588 \x1B[1mSYSTEM CONFIGURATION\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Category        Value","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500","CPU (Generic)   Cores: 16, Threads: 32","                Avg Clock: 4.20 GHz","GPU 0           NVIDIA GeForce RTX 4090, VRAM: 24.0 GB, CUDA: 1204","Memory          64.0 GB","Storage         2.0 TB (1 devices)","                /dev/nvme0n1p3: 450.2 GB / 1862.4 GB (/)","Packages        ","                \x1B[32m\u2713 12 checks passed\x1B[0m"]},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Show service config or a specific field.",usage:"dex config <service> [field...]",category:"system",docs:{overview:"Manages the central registry that defines service interaction.",details:["View service definitions (domains, ports, IDs).","Modify environment-specific parameters.","Update authentication secrets and API endpoints.","Supports JSON path traversal for deep fields."],extended_usage:`dex config <service> [field]
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Wt=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
                <span>Interactive Demos (v${Gt})</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;for(let[a,l]of Object.entries(t)){let s=St.filter(r=>r.category===a);s.length!==0&&(e+=`
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
    </div>`,e},ke=!1;function Vt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>wt(),document.getElementById("terminal-action-btn").onclick=()=>wt());let a=document.getElementById("cli-terminal-body"),l=document.getElementById("cli-docs-pane");a.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return l.innerHTML=`
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
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),ke=!0,a}function wt(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),ke=!1}function Et(t,e,a="output"){if(!ke)return;let l=document.createElement("div");l.className=`terminal-line terminal-${a}`,a==="prompt"?l.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:l.innerHTML=me(e),t.appendChild(l),t.scrollTop=t.scrollHeight}async function Kt(t){let e=St.find(s=>s.id===t);if(!e)return;let a=Vt(e);Et(a,`dex ${t}`,"prompt");let l=e.demo_output||["Executing command...","\u2713 Done."];for(let s of l){await new Promise(d=>setTimeout(d,400+Math.random()*600));let r="output";s.includes("[ERROR]")?r="error":s.includes("[SUCCESS]")||s.includes("\u2713")?r="success":s.includes("!")&&(r="warning"),Et(a,s,r)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function $t(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Wt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let a=e.querySelector("code").textContent;navigator.clipboard.writeText(a).then(()=>{let l=e.querySelector("i");l.className="bx bx-check",l.style.color="#5eff5e",setTimeout(()=>{l.className="bx bx-copy",l.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(a=>{a.addEventListener("mouseenter",()=>{a.style.transform="translateY(-5px)",a.style.borderColor="rgba(255,255,255,0.15)",a.style.backgroundColor="rgba(255,255,255,0.05)"}),a.addEventListener("mouseleave",()=>{a.style.transform="translateY(0)",a.style.borderColor="rgba(255,255,255,0.05)",a.style.backgroundColor="rgba(255,255,255,0.03)"}),a.addEventListener("click",()=>{let l=a.dataset.cmd;Kt(l)})})}async function Jt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Se()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function Lt(){Jt(),qe(),Me();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&$t();let e=Re();Be(e),He();let a=document.getElementById("nav-left-container");a&&a.addEventListener("click",()=>{if(r.length>0)u();else{let o=window.location.pathname;if(!(o==="/"||o==="/index.html")){let C=(o.endsWith("/")&&o.length>1?o.slice(0,-1):o).split("/");C.pop();let E=C.join("/")||"/";window.location.href=E}}});let l=window.location.pathname==="/"||window.location.pathname==="/index.html",s=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!l&&!s&&document.querySelector("footer")?.classList.add("hide");let r=[],d=document.getElementById("windows-container");d&&d.setAttribute("data-count","0");let v=o=>{localStorage.setItem("dex_last_window",o)};function b(){return 1}function g(){for(;r.length>1;)r.shift().close(!0);let o=document.getElementById("windows-container"),p=document.querySelector("nav"),f=document.querySelector("footer"),C=window.location.pathname==="/"||window.location.pathname==="/index.html",E=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");o&&o.setAttribute("data-count",r.length);let S=r.length>0;r.forEach(I=>{let R=document.getElementById(I.id);R&&R.classList.remove("hide-close")}),le(se());let _=document.getElementById("dexter-menu-container"),T=document.getElementById("nav-window-switcher"),O=document.getElementById("settings-icon");if(De(r.length>0),r.length>0){if(f?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),p?.classList.add("window-open"),o&&(o.style.paddingTop="60px"),_&&(_.style.display="none"),O&&(O.style.display="none"),T){let I=r[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(I)?(T.innerHTML=`
                      <div class="nav-switch-btn ${I==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${I==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${I==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${I==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${I==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{v("alerts-window"),h(m)}),document.getElementById("switch-events").addEventListener("click",()=>{v("events-window"),h(n)}),document.getElementById("switch-monitor").addEventListener("click",()=>{v("monitor-window"),h(c)}),document.getElementById("switch-contacts").addEventListener("click",()=>{v("contacts-window"),h(i)}),document.getElementById("switch-workspace").addEventListener("click",()=>{v("workspace-window"),h(y)})):T.innerHTML=""}}else p?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),o&&(o.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),C||E?f?.classList.remove("hide"):f?.classList.add("hide"),_&&(_.style.display="flex"),O&&(O.style.display="block"),T&&(T.innerHTML="");ne(je())}function h(o){if(o.isOpen()){o.close();return}for(;r.length>0;)r.pop().close(!0);r.push(o),o.open(),g()}function u(){[...r].forEach(p=>p.close()),r=[]}window.addEventListener("resize",g);let m=q({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Ve(),onOpen:()=>W(),onClose:()=>{let o=r.indexOf(m);o>-1&&r.splice(o,1),g()}}),n=q({id:"events-window",title:"Events",icon:"bx-calendar-event",content:lt(),onOpen:()=>ee(),onClose:()=>{let o=r.indexOf(n);o>-1&&r.splice(o,1),g()}}),i=q({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:it(),onOpen:()=>ve(),onClose:()=>{let o=r.indexOf(i);o>-1&&r.splice(o,1),g()}}),c=q({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:vt()},{icon:"bxs-component",title:"Processes",content:gt()},{icon:"bxs-brain",title:"Models",content:ft()},{icon:"bxs-hdd",title:"Hardware",content:bt()},{icon:"bxs-terminal",title:"Logs",content:ht()},{icon:"bxs-zap",title:"Analyst",content:ut()}],onOpen:()=>{Le(),he(),Ce(),ae()},onClose:()=>{let o=r.indexOf(c);o>-1&&r.splice(o,1),g()}}),y=q({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:st(),onOpen:()=>$e(),onClose:()=>{let o=r.indexOf(y);o>-1&&r.splice(o,1),g()}}),x=q({id:"settings-window",title:"Settings",icon:"bx-cog",content:ye(),onOpen:()=>{x.setContent(ye()),Te(x)},onClose:()=>{let o=r.indexOf(x);o>-1&&r.splice(o,1),g()}}),w=q({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(e){let o=document.getElementById("dexter-dropdown");o&&(o.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let p=document.getElementById("dexter-menu-container"),f=document.getElementById("dexter-menu-btn");p&&o&&f&&(p.addEventListener("mouseenter",()=>{o.classList.add("active"),f.classList.add("active")}),p.addEventListener("mouseleave",()=>{o.classList.remove("active"),f.classList.remove("active")}),f.addEventListener("click",C=>{C.stopPropagation();let E=localStorage.getItem("dex_last_window")||"alerts-window",S=null;E==="alerts-window"?S=m:E==="events-window"?S=n:E==="monitor-window"?S=c:E==="contacts-window"?S=i:E==="workspace-window"&&(S=y),S&&h(S)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{v("alerts-window"),h(m)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{v("events-window"),h(n)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{v("monitor-window"),h(c)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{v("contacts-window"),h(i)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{v("workspace-window"),h(y)}),document.getElementById("settings-icon")?.addEventListener("click",()=>h(x)),document.getElementById("close-all-windows")?.addEventListener("click",()=>u()),setInterval(()=>{m.isOpen()?W():Ke(),n.isOpen()&&ee(),i.isOpen()&&ve(),c.isOpen()&&yt(),y.isOpen()&&$e()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{w.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",o=>{o.preventDefault();try{Oe(document.getElementById("email-input").value),window.location.reload()}catch(p){let f=document.getElementById("login-error");f&&(f.textContent=p.message,f.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Lt):Lt();})();
