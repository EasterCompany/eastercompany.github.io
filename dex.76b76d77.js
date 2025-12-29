(()=>{function Ne(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Re(t=!1){let e=window.location.pathname,o=e==="/"||e==="/index.html",i=`
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
    `,u=document.createElement("nav");u.innerHTML=i,document.body.prepend(u)}function Pe(t){let e=window.location.pathname,o=e==="/"||e==="/index.html",a=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!a||!s||(t||!o?(a.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{a.style.transform="translateX(-3px)"},s.onmouseleave=()=>{a.style.transform="translateX(0)"}):(a.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function Oe(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var ze=1e3;function G(t){let e=null,o=t.onClose||null,a=t.onOpen||null;function s(){e&&(e.style.zIndex=++ze)}function i(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",u),a&&setTimeout(a,10);return}let b=document.getElementById("windows-container");b||(b=document.createElement("div"),b.id="windows-container",b.className="windows-container",document.body.appendChild(b)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++ze,e.addEventListener("mousedown",s);let h=t.icon||"bx-window",v="",l="",f;t.tabs&&t.tabs.length>0?(v=`<div class="tab-bar">${t.tabs.map((x,n)=>{let c=x.icon?`<i class="bx ${x.icon}"></i>`:`<span class="tab-glyph">${x.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${n===0?"active":""}" data-tab-index="${n}">
                        ${c}
                        <span class="tab-title">${x.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${n}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,f=`<div class="window-content">${t.tabs.map((x,n)=>`<div class="tab-content ${n===0?"active":""}" data-tab-content="${n}">${x.content}</div>`).join("")}</div>`):(t.title&&(l=`<div class="window-title">${t.title}</div>`),f=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${v}
                ${l}
                <i class="bx bx-x window-close"></i>
            </div>
            ${f}
        `,b.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",E=>{E.stopPropagation(),p()}),window.addEventListener("resize",u),t.tabs&&e.querySelectorAll(".tab").forEach(E=>{E.addEventListener("click",()=>{let r=E.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),E.classList.add("active"),e.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${r}"]`).classList.add("active"),d(E,e)})}),setTimeout(()=>{e.classList.add("open"),a&&a()},10)}function u(){if(!e||!e.classList.contains("open"))return;let b=e.querySelector(".tab.active");b&&d(b,e)}function d(b,h){setTimeout(()=>{let v=h.querySelector(".tab-bar");if(!v)return;let l=Array.from(v.querySelectorAll(".tab")),f=l.indexOf(b),E=v.clientWidth,r=l[Math.max(0,f-2)],x=l[Math.min(l.length-1,f+2)],n=r.offsetLeft-v.offsetLeft-25,g=x.offsetLeft+x.offsetWidth-v.offsetLeft+25-n,T=g<=E?n-(E-g)/2:b.offsetLeft-v.offsetLeft-E/2+b.offsetWidth/2;v.scrollTo({left:T,behavior:"smooth"})},350)}function p(b=!1){e&&(window.removeEventListener("resize",u),b?(e.remove(),e=null):(e.classList.remove("open"),o&&o(),setTimeout(()=>{e?.remove(),e=null},400)))}function m(b){let h=e?.querySelector(".window-content");h&&(h.innerHTML=b)}function y(){return e&&e.classList.contains("open")}return{open:i,close:p,setContent:m,isOpen:y,focus:s,id:t.id}}function Ue(){return!0}function qe(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Fe(t){localStorage.setItem("easter_user_email",t.trim())}var je="easter_theme",q={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function ae(){return localStorage.getItem(je)||q.DARK}function Ge(t){if(!Object.values(q).includes(t))throw new Error("Invalid theme");localStorage.setItem(je,t),pe(t)}function pe(t){let e=document.body;if(Object.values(q).forEach(a=>{e.classList.remove(`theme-${a}`)}),e.classList.add(`theme-${t}`),[q.LIGHT,q.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function We(){let t=ae();pe(t)}function A(t,e,o=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",i=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${i}</div>`}function B(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function O(t,e){let o=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!o)return;if(!e){o.textContent="Last updated: never";return}let a=Date.now(),s=Math.floor((a-e)/1e3),i;s<60?i=`${s}s ago`:s<3600?i=`${Math.floor(s/60)}m ago`:i=`${Math.floor(s/3600)}h ago`,o.textContent=`Last updated: ${i}`}var Ve=0;function Ke(){return Ve}function oe(t,e){let o=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!o)return;let a=o.querySelector(".notification-badge");a&&(e>0?(a.textContent=e>9?"9+":e,a.style.display="flex"):a.style.display="none")}function le(t){Ve=t;let e=document.getElementById("dexter-nav-badge");e&&(t>0?e.style.display="flex":e.style.display="none");let o=document.getElementById("alerts-menu-item");if(o){let s=o.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="auto",o.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}let a=document.getElementById("switch-alerts");if(a){let s=a.querySelector(".notification-badge");s||(s=document.createElement("span"),s.className="notification-badge",s.style.marginLeft="8px",a.appendChild(s)),t>0?(s.textContent=t>9?"9+":t,s.style.display="flex"):s.style.display="none"}}function ge(){let t=document.getElementById("alerts-list");if(!t)return;let e=t.querySelectorAll(".alert-unread:not(.priority-low)").length;le(e)}function $e(){return"https://event.easter.company"}function kt(){return"https://discord.easter.company"}var It="http://127.0.0.1:8100",At="http://127.0.0.1:8300",_t={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function fe(t){let e=B(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,i)=>{let u=_t[i];return u?`<span class="${u}">`:""});let o=(e.match(/<span/g)||[]).length,a=(e.match(/<\/span/g)||[]).length;return o>a&&(e+="</span>".repeat(o-a)),e}function re(t){if(!t)return"";let e=B(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(o,a)=>{let s=a.split("|").map(i=>i.trim());return s.every(i=>i.match(/^:?-+:?$/))?"":`<div class="md-table-row">${s.map(i=>`<span class="md-table-cell">${i}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var Z=null,ee=null,me=!1,ue=!1;async function k(t,e={}){if(Z)try{let s=await fetch(Z+t,e);if(s.ok)return s;Z=null}catch{Z=null}let o=$e(),a=It;try{let s=await fetch(o+t,e);if(s.ok)return Z=o,me&&(console.log("\u2728 Production event service restored."),me=!1),s;throw new Error("Primary failed")}catch{me||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${a}`),me=!0);try{let i=await fetch(a+t,e);if(i.ok)return Z=a,i;throw new Error("Fallback failed")}catch(i){throw i}}}async function Je(t,e={}){if(ee)try{let s=await fetch(ee+t,e);if(s.ok)return s;ee=null}catch{ee=null}let o=kt(),a=At;try{let s=await fetch(o+t,e);if(s.ok)return ee=o,ue&&(console.log("\u2728 Production discord service restored."),ue=!1),s;throw new Error("Primary failed")}catch{ue||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${a}`),ue=!0);try{let i=await fetch(a+t,e);if(i.ok)return ee=a,i;throw new Error("Fallback failed")}catch(i){throw i}}}var Ye=()=>`
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
`,be=null,V=new Set,ve=[];async function K(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Mt(),t&&(e.innerHTML="<p>Updating...</p>");let o="/events?ml=1000&format=json&event.type=system.notification.generated";try{let a=await k(o);if(!a.ok)throw new Error("Service is offline or unreachable.");let i=(await a.json()).events||[];be=Date.now(),O(0,be);let u=Date.now(),d=24*60*60*1e3,p=i.filter(n=>{let c=localStorage.getItem(`alert_read_ts_${n.id}`);if(!c)return!0;let g=parseInt(c);return u-g<d});p.sort((n,c)=>{let g=S=>{let I=S.event;if(typeof I=="string")try{I=JSON.parse(I)}catch{return"low"}return(I.priority||"low").toLowerCase()},T=S=>S==="critical"?4:S==="high"?3:S==="medium"?2:1,w=T(g(n)),$=T(g(c));return w!==$?$-w:c.timestamp-n.timestamp}),ve=p;let m=n=>{let c=n.event;if(typeof c=="string")try{c=JSON.parse(c)}catch{return"low"}return(c.priority||"low").toLowerCase()},y=[],h=new Set(p.map(n=>m(n))).size>1;if(p.length>0){let n=null;p.forEach(c=>{let g=m(c);h&&g!==n&&(y.push({id:`divider-${g}`,type:"divider",label:g.toUpperCase()}),n=g),y.push(c)})}if(t&&(e.innerHTML=""),p.length===0){e.innerHTML=A("empty","No alerts yet."),ge();return}let v=n=>{let c=n.event;if(typeof c=="string")try{c=JSON.parse(c)}catch{return null}let g=c.title||"Untitled Alert",T=c.body||"No description provided.",w=c.priority||"low",$=!!c.alert,S=c.category||"system",I=c.related_event_ids||[],_=c.audit_event_id,N=!!localStorage.getItem(`alert_read_ts_${n.id}`),H=new Date(n.timestamp*1e3),F=H.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=H.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),M=N?"event-border-grey":"event-border-blue";!N&&$&&(M="event-border-red"),N&&(w==="high"||w==="critical")?M="event-border-red":N&&w==="medium"&&(M="event-border-orange");let D=N?"alert-read":"alert-unread",C=V.has(n.id),P=C?"expanded":"",z=C?"display: block;":"display: none;",_e="",Me="";I.length>0&&(Me=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${I.map(j=>`<a href="#" onclick="window.dexter.viewEvent('${j}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px; font-family: monospace; width: fit-content;">${j.substring(0,8)}...</a>`).join(", ")}</span>
                    </div>`);let Be="";_&&(Be=`
              <div class="event-detail-row">
                  <span class="detail-label">Generated By:</span>
                  <span class="detail-value"><a href="#" onclick="window.dexter.viewEvent('${_}'); return false;" style="color: #bb86fc; text-decoration: none; font-family: monospace; border-bottom: 1px dashed #bb86fc; width: fit-content;">${_.substring(0,8)}...</a></span>
              </div>`),_e=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${w==="high"||w==="critical"?"#ff4d4d":w==="medium"?"#ffa500":"#888"}">${w.toUpperCase()}</span>
                </div>
                ${Be}
                ${Me}
                <div class="event-detail-block" style="text-align: left;">
                    <div class="detail-pre">${re(`### Insight

`+T)}</div>
                </div>
            `;let U=document.createElement("div");U.className=`event-item notification-item ${M} ${D} ${P} cursor-pointer priority-${w}`,U.dataset.alertId=n.id,U.onclick=function(j){if(this.classList.contains("expanded")){this.classList.remove("expanded"),V.delete(n.id);let ie=this.querySelector(".event-details");ie&&(ie.style.display="none")}else{this.classList.add("expanded"),V.add(n.id);let ie=this.querySelector(".event-details");if(ie&&(ie.style.display="block"),!localStorage.getItem(`alert_read_ts_${n.id}`)){localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ee="event-border-grey";w==="high"||w==="critical"?Ee="event-border-red":w==="medium"&&(Ee="event-border-orange"),this.classList.add(Ee),ge()}}};let Qt=g,Lt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[S]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${F}</span>
                    <span class="event-date">${L}</span>
                </div>
                <div class="event-icon"><i class='bx ${Lt}'></i></div>
                <div class="event-content">
                    <div class="event-service">${S.toUpperCase()} ${$?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${g}</div>
                    <div class="event-details" style="${z}">
                        ${_e}
                    </div>
                </div>
            `;let De=U.querySelector(".event-details");De&&De.addEventListener("click",j=>{j.stopPropagation()});let He=U.querySelector(".close-details-btn");return He&&He.addEventListener("click",j=>{j.stopPropagation(),U.classList.remove("expanded");let we=U.querySelector(".event-details");we&&(we.style.display="none"),V.delete(n.id)}),U},l=n=>{let c=document.createElement("div");c.className="notification-divider",c.dataset.alertId=n.id;let g="#888888";return n.label==="CRITICAL"?g="#ff4d4d":n.label==="HIGH"?g="#ff8888":n.label==="MEDIUM"&&(g="#ffa500"),c.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${g}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,c.innerHTML=`<span style="white-space: nowrap;">${n.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${g}44, transparent); flex-grow: 1;"></div>`,c},f=Array.from(e.children),E=new Map(f.map(n=>[n.dataset.alertId,n])),r=new Set(y.map(n=>n.id));f.forEach(n=>{let c=n.dataset.alertId;(!c||!r.has(c))&&n.remove()});let x=null;y.forEach((n,c)=>{let g=E.get(n.id);(!g||t)&&(g&&g.remove(),n.type==="divider"?g=l(n):g=v(n),!g)||(c===0?e.firstElementChild!==g&&e.prepend(g):x&&x.nextElementSibling!==g&&x.after(g),x=g)}),be=Date.now(),O(0,be),ge()}catch(a){console.error("Error fetching alerts:",a),e.children.length===0&&(e.innerHTML=A("offline","Failed to load alerts.","The event service may be offline."))}}function Mt(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),o=document.getElementById("alerts-close-all"),a=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ve.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),K(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ve.forEach(s=>{V.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),K(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{V.clear(),K(!0)},o.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await k("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;ve.forEach(i=>{localStorage.setItem(`alert_read_ts_${i.id}`,s.toString())}),V.clear(),K(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}async function Xe(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await k(t);if(!e.ok)return;let a=(await e.json()).events||[],s=0;a.forEach(i=>{let u=i.event;if(typeof u=="string")try{u=JSON.parse(u)}catch{u={}}if((u.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${i.id}`)||s++}),le(s)}catch{}}var Qe=()=>`
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
`,J=new Set,et=[],te=null;async function Y(t=!1){let e=document.getElementById("roadmap-list");if(e){Bt();try{let o=await k("/roadmap");if(!o.ok)throw new Error("Offline");let a=await o.json();if(et=a,a.length===0){e.innerHTML=A("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let s=m=>{let y=J.has(m.id),b=m.state==="draft",h=m.state==="published",v=m.state==="consumed",l="event-border-grey";h&&(l="event-border-blue"),v&&(l="event-border-purple");let E=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),r=document.createElement("div");r.className=`event-item notification-item ${l} cursor-pointer ${y?"expanded":""}`,r.dataset.itemId=m.id,r.onclick=c=>{if(c.target.closest("button"))return;r.classList.contains("expanded")?(r.classList.remove("expanded"),r.querySelector(".event-details").style.display="none",J.delete(m.id)):(r.classList.add("expanded"),r.querySelector(".event-details").style.display="block",J.add(m.id))};let x=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;r.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${E.split(",")[1]}</span>
          <span class="event-date">${E.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${x}</div>
          <div class="event-message" style="white-space: pre-wrap;">${B(m.content)}</div>
          <div class="event-details" style="${y?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${v?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${h?"bx-pause":"bx-rocket"}'></i> ${h?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${v?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(m.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let n=r.querySelector(".event-details");return n&&n.addEventListener("click",c=>{c.stopPropagation()}),r.querySelector(".edit-btn")?.addEventListener("click",()=>Dt(m)),r.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Ht(m)),r.querySelector(".delete-btn")?.addEventListener("click",()=>Nt(m.id)),r.querySelector(".close-details-btn")?.addEventListener("click",c=>{c.stopPropagation(),r.classList.remove("expanded"),r.querySelector(".event-details").style.display="none",J.delete(m.id)}),r},i=Array.from(e.children),u=new Map(i.map(m=>[m.dataset.itemId,m])),d=new Set(a.map(m=>m.id));i.forEach(m=>{let y=m.dataset.itemId;(!y||!d.has(y))&&m.remove()});let p=null;a.forEach((m,y)=>{let b=u.get(m.id);(!b||t)&&(b&&b.remove(),b=s(m),!b)||(y===0?e.firstElementChild!==b&&e.prepend(b):p&&p.nextElementSibling!==b&&p.after(b),p=b)})}catch{e.children.length===0&&(e.innerHTML=A("offline","Failed to load roadmap.","The event service may be offline."))}}}function Bt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),o=document.getElementById("roadmap-cancel"),a=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{te=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",te=null},o.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let i=document.getElementById("roadmap-editor-input").value;if(!i.trim())return;let u=te?`/roadmap/${te}`:"/roadmap",d=te?"PATCH":"POST";try{await k(u,{method:d,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:i})}),document.getElementById("roadmap-editor-container").style.display="none",Y(!0)}catch(p){console.error(p)}},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{et.forEach(i=>J.add(i.id)),Y(!0)},a.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{J.clear(),Y(!0)},s.dataset.listenerAttached="true")}function Dt(t){te=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Ht(t){let e=t.state==="published"?"draft":"published";try{await k(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),Y(!0)}catch(o){console.error(o)}}async function Nt(t){if(confirm("Delete this roadmap item?"))try{await k(`/roadmap/${t}`,{method:"DELETE"}),J.delete(t),Y(!0)}catch(e){console.error(e)}}var st=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
`,nt=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,tt=null,se=new Set,it=[];async function ne(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Rt();let o="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let a=await k(o);if(!a.ok)throw new Error("Service is offline or unreachable.");let i=(await a.json()).events||[];if(it=i,tt=Date.now(),O(2,tt),i.length===0){e.innerHTML=A("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),oe(2,0);return}t&&(e.innerHTML="");let u=b=>{let h=b.event;if(typeof h=="string")try{h=JSON.parse(h)}catch{return null}let v=h.title||"Untitled Blueprint",l=h.summary||h.body||"No summary provided.",f=h.content||"",E=h.category||"architecture",r=h.affected_services||[],x=h.implementation_path||[],n=h.approved===!0,c=new Date(b.timestamp*1e3),g=c.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=c.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),w=se.has(b.id),$=w?"display: block;":"display: none;",S=document.createElement("div");S.className=`event-item notification-item event-border-purple cursor-pointer ${w?"expanded":""} ${n?"blueprint-approved":""}`,S.dataset.blueprintId=b.id,n&&(S.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",S.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let _=n?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[E]||"bx-paint";S.onclick=function(C){if(this.classList.contains("expanded")){this.classList.remove("expanded"),se.delete(b.id);let z=this.querySelector(".event-details");z&&(z.style.display="none")}else{this.classList.add("expanded"),se.add(b.id);let z=this.querySelector(".event-details");z&&(z.style.display="block")}};let R="";x.length>0&&(R=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px;">Proposed Steps</h5>
                        <div class="detail-pre">
                            <ul style="margin: 0; padding-left: 20px;">
                                ${x.map(C=>`<li style="margin-bottom: 5px;">${B(C)}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                `);let N=r.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${r.join(", ")}</span></div>`:"<div></div>",H=n?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${N}
                    <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                        <i class='bx bxs-check-shield'></i> Approved Blueprint
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${N}
                    <div style="display: flex; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-deny-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;S.innerHTML=`
                ${n?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${g}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-icon" style="${n?"color: #03dac6;":""}"><i class='bx ${_}'></i></div>
                <div class="event-content">
                    <div class="event-service">${E.toUpperCase()}</div>
                    <div class="event-message">${v}</div>
                    <div class="event-details" style="${$}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                        </div>
                        
                        <h5 style="margin-bottom: 8px;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px; color: #fff;">
                            ${B(l)}
                        </div>

                        <h5 style="margin-bottom: 8px;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${B(f)}</div>
                        </div>
                        ${R}
                        ${H}
                    </div>
                </div>
            `;let F=S.querySelector(".blueprint-approve-btn");F&&(F.onclick=async C=>{C.stopPropagation(),F.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await k(`/events/${b.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&ne(!0)}catch(P){console.error("Failed to approve blueprint:",P)}});let L=S.querySelector(".blueprint-deny-btn");L&&(L.onclick=async C=>{C.stopPropagation(),L.innerHTML="<i class='bx bx-loader-alt spin'></i> Declining...";try{(await k(`/events/${b.id}`,{method:"DELETE"})).ok&&ne(!0)}catch(P){console.error("Failed to delete blueprint:",P)}});let M=S.querySelector(".event-details");M&&M.addEventListener("click",C=>{C.stopPropagation()});let D=S.querySelector(".close-details-btn");return D&&D.addEventListener("click",C=>{C.stopPropagation(),S.classList.remove("expanded");let P=S.querySelector(".event-details");P&&(P.style.display="none"),se.delete(b.id)}),S},d=Array.from(e.children),p=new Map(d.map(b=>[b.dataset.blueprintId,b])),m=new Set(i.map(b=>b.id));d.forEach(b=>{let h=b.dataset.blueprintId;(!h||!m.has(h))&&b.remove()});let y=null;i.forEach((b,h)=>{let v=p.get(b.id);(!v||t)&&(v&&v.remove(),v=u(b),!v)||(h===0?e.firstElementChild!==v&&e.prepend(v):y&&y.nextElementSibling!==v&&y.after(v),y=v)}),oe(2,i.length)}catch(a){console.error("Error fetching blueprints:",a),e.children.length===0&&(e.innerHTML=A("offline","Failed to load blueprints.","The event service may be offline."))}}function Rt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{it.forEach(o=>se.add(o.id)),ne(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{se.clear(),ne(!0)},e.dataset.listenerAttached="true")}var at=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${Qe()}
            </div>
            ${Ze()}
        </div>

        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${st()}
            </div>
            ${nt()}
        </div>
    </div>
`;async function Se(){await Promise.all([Y(),ne()])}var ot=()=>`
    <div class="system-section-header">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,Pt=null;async function Te(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...",await Te(),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)},e.dataset.listenerAttached="true");try{let o=await Je("/contacts");if(!o.ok)throw new Error("Service unreachable");let s=(await o.json()).members||[];if(Pt=Date.now(),s.length===0){t.innerHTML=A("empty","No contacts found.","Check your Discord connection.");return}let i={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((u,d)=>{let p=i[u.level]??10,m=i[d.level]??10;return p!==m?p-m:u.username.localeCompare(d.username)}),t.innerHTML=s.map(u=>{let d=u.color?"#"+u.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",p=u.status==="online"?"#5eff5e":u.status==="idle"?"#ffa500":u.status==="dnd"?"#ff4d4d":"#666",m="#888";u.level==="Me"||u.level==="Master"?m="#bb86fc":u.level==="Admin"?m="#cf6679":u.level==="Moderator"?m="#03dac6":u.level==="Contributor"&&(m="#ffa500");let y=u.level==="Me",b=y?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",h=y?"2px solid #bb86fc":`1px solid ${d}33`;return`
                <div class="user-profile-section" style="background: ${b}; padding: 15px; border-radius: 8px; border: ${h}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${y?"#bb86fc":d}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${u.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${y?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${p}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${u.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${m}; font-weight: 600; text-transform: uppercase;">${y?"DEXTER (ME)":u.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${u.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=A("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Ot={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Guardian Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function lt(t,e){let o=Ot[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(o="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(o=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(o=`Guardian Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!o)return t;let a=o.replace(/\{(\w+)\}/g,(s,i)=>e[i]!==void 0&&e[i]!==null?e[i]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(a+=` (Translation: ${e.english_translation})`),a}var ct=()=>`
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
`,xe=null,X=new Set,ce=[],W="all",zt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},Ut={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function rt(t){for(let[e,o]of Object.entries(zt))if(o.includes(t))return e;return"system"}function qt(t){return Ut[t]||"bx-square-rounded"}async function Q(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ft();let a=`/events?ml=${W==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let s=await k(a);if(!s.ok)throw new Error("Service is offline or unreachable.");let u=(await s.json()).events||[],d=u;if(W!=="all"&&(d=u.filter(v=>{let l=v.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{return!1}return rt(l.type)===W})),ce=d.slice(0,50),xe=Date.now(),O(1,xe),ce.length===0){e.innerHTML=A("empty","No events found for this filter.");return}t&&(e.innerHTML="");let p=v=>{let l=v.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{return null}let f=l.type,E=rt(f),r=qt(f),x=f==="engagement.decision"||f==="messaging.bot.sent_message"||f==="messaging.user.sent_message"||f==="moderation.explicit_content.deleted"||f==="analysis.link.completed"||f==="analysis.visual.completed"||f==="system.cli.command"||f==="system.analysis.audit"||f==="system.test.completed"||f==="error_occurred"||f==="system.cli.status"||f==="system.attention.expired"||f.startsWith("system.roadmap")||f.startsWith("system.process"),n="event-border-grey";x&&(f==="moderation.explicit_content.deleted"||f==="error_occurred"?n="event-border-red":f==="analysis.link.completed"||f==="analysis.visual.completed"||f==="system.analysis.audit"?n="event-border-purple":f==="system.attention.expired"||f==="system.cli.command"||f==="system.cli.status"?n="event-border-orange":f==="system.test.completed"?n=l.test?.status==="OK"&&l.lint?.status==="OK"&&l.format?.status==="OK"?"event-border-blue":"event-border-red":n="event-border-blue");let c=x?"cursor-pointer":"",g=X.has(v.id),T=g?"expanded":"",w=g?"display: block;":"display: none;",$=new Date(v.timestamp*1e3),S=$.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),I=$.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),_=lt(f,l),R=l.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${l.user_level})</span>`:"",N="";if(x){let L="";if(f==="engagement.decision")L=`
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
                    `;else if(f==="system.attention.expired"){let M=l.timestamp-l.last_active,D=Math.floor(M/60);L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value" style="color: #bb86fc;">${l.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${D} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context (Last Input):</span>
                            <div class="detail-pre">${re(l.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Thought Process (Last Output):</span>
                            <div class="detail-pre">${re(l.last_output||"None")}</div>
                        </div>
                    `}else if(f==="messaging.bot.sent_message")L=`
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
                    `;else if(f==="moderation.explicit_content.deleted")L=`
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
                            <pre class="detail-pre">${B(l.raw_output)||"None"}</pre>
                        </div>
                    `;else if(f==="analysis.link.completed")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${l.url}" target="_blank" class="attachment-link">${l.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${B(l.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${B(l.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${B(l.summary)||"None"}</pre>
                        </div>
                    `;else if(f==="analysis.visual.completed"){let M="";l.base64_preview?M=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${l.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:l.url&&(M=`<div class="event-detail-block"><img src="${l.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${l.filename}</span>
                        </div>
                        ${M}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${B(l.description)||"None"}</pre>
                        </div>
                    `}else if(f==="system.cli.command")L=`
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
                            <pre class="detail-pre">${B(l.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(f==="system.analysis.audit"){let M=l.success?"#03dac6":"#ff4d4d",D=l.success?"SUCCESS":"FAILED",C="";l.error&&(C=`
                            <div class="event-detail-block">
                                <span class="detail-label" style="color: #ff4d4d;">Error:</span>
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${B(l.error)}</pre>
                            </div>
                        `),L=`
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
                            <span class="detail-value" style="color: ${M}; font-weight: bold;">${D} (${l.attempts} attempts)</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${l.duration}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${l.model}</span>
                        </div>
                        ${C}
                        <div class="event-detail-block">
                            <span class="detail-label">System Prompt:</span>
                            <pre class="detail-pre" style="max-height: 150px; overflow-y: auto;">${B(l.system_prompt)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Input Context:</span>
                            <pre class="detail-pre" style="max-height: 200px; overflow-y: auto;">${B(l.input_context)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${B(l.raw_output||"(empty)")}</pre>
                        </div>
                    `}else if(f==="system.test.completed")L=`
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
                    `;else if(f==="error_occurred")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${l.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${B(l.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(l.context||{},null,2)}</pre>
                        </div>
                    `;else if(f==="system.cli.status")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${l.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${B(l.message)}</pre>
                        </div>
                    `;else if(f==="messaging.user.sent_message"){let M="";l.attachments&&l.attachments.length>0&&(M=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${l.attachments.map(C=>{let P=C.content_type&&C.content_type.startsWith("image/"),z=(C.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${P?`<div class="attachment-thumb-container"><img src="${C.url}" alt="${C.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${C.url}" target="_blank" class="attachment-link">${C.filename}</a>
                                        <span class="attachment-meta">${C.content_type} \u2022 ${z}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${l.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${l.content||"(empty)"}</pre>
                        </div>
                        ${M}
                    `}N=`
                    <div class="event-details" style="${w}">
                        ${L}
                    </div>
                `}let H=document.createElement("div");H.className=`event-item ${n} ${c} ${T}`,H.dataset.eventId=v.id,H.onclick=function(L){if(!x)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),X.delete(v.id);let D=this.querySelector(".event-details");D&&(D.style.display="none")}else{this.classList.add("expanded"),X.add(v.id);let D=this.querySelector(".event-details");D&&(D.style.display="block")}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${S}</span>
                    <span class="event-date">${I}</span>
                </div>
                <div class="event-icon"><i class='bx ${r}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${E}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${E}</span>
                        ${v.service} ${R}
                    </div>
                    <div class="event-message">${_}</div>
                    ${N}
                </div>
            `;let F=H.querySelector(".event-details");if(F&&F.addEventListener("click",L=>{L.stopPropagation()}),x){let L=H.querySelector(".close-details-btn");L&&L.addEventListener("click",M=>{M.stopPropagation();let D=M.target.closest(".event-item");if(D){D.classList.remove("expanded"),X.delete(v.id);let C=D.querySelector(".event-details");C&&(C.style.display="none")}})}return H},m=Array.from(e.children),y=new Map(m.map(v=>[v.dataset.eventId,v])),b=new Set(ce.map(v=>v.id));m.forEach(v=>{let l=v.dataset.eventId;(!l||!b.has(l))&&v.remove()});let h=null;ce.forEach((v,l)=>{let f=y.get(v.id);(!f||t)&&(f&&f.remove(),f=p(v),!f)||(l===0?e.firstElementChild!==f&&e.prepend(f):h&&h.nextElementSibling!==f&&h.after(f),h=f)}),xe=Date.now(),O(1,xe)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=A("offline","Failed to load events.","The event service may be offline."))}}function Ft(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),o=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ce.forEach(s=>X.add(s.id)),Q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.clear(),Q(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{o.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),s.classList.add("active"),W=s.dataset.filter,Q(!0)}}),o.dataset.listenerAttached="true");let a=document.getElementById("events-clear");a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{let s=W==="all"?"ALL":W.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let i="/events";if(W!=="all"&&(i+=`?category=${W}`),!(await k(i,{method:"DELETE"})).ok)throw new Error("Failed to delete events");X.clear(),Q(!0)}catch(i){console.error("Failed to clear events:",i),alert("Failed to clear events. Check console.")}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}function dt(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var jt=null;async function de(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await k("/logs");if(!e.ok)throw new Error("Logs offline");let o=await e.json();if(!o||o.length===0)return t.innerHTML=A("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let a=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=o.filter(u=>!a.includes(u.id));s.forEach(u=>{u.logs&&Array.isArray(u.logs)?u.logs.reverse():u.logs=[]}),s.reverse();let i=s.map(u=>{let d=u.logs.join(`
`),p=[...u.logs];if(p.length<25){let y=25-p.length;for(let b=0;b<y;b++)p.push("")}else p.length>25&&(p=p.slice(-25));let m=p.map(y=>fe(y)).join(`
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
            `}).join("");return t.innerHTML=i,document.querySelectorAll(".copy-logs-btn").forEach(u=>{u.addEventListener("click",()=>{let d=unescape(u.dataset.logs);navigator.clipboard.writeText(d).then(()=>{let p=u.querySelector("i");p.classList.remove("bx-copy"),p.classList.add("bx-check"),setTimeout(()=>{p.classList.remove("bx-check"),p.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(u=>{u.addEventListener("click",async()=>{let d=u.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${d}?`))try{(await k(`/logs?service_id=${d}`,{method:"DELETE"})).ok&&de()}catch(p){console.error("Error clearing logs:",p)}})}),jt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=A("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var gt=()=>`
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
        </div>`,ft=()=>`
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
        <div id="processes-history-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,bt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,vt=()=>`
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
        </div>`,yt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${dt()}
        </div>`;async function ht(){await Promise.all([ye(),Le(),ke()]),await de()}var pt=null,mt=null;async function wt(){try{return await(await k("/system_monitor")).json()}catch{return null}}async function ut(){try{return await(await k("/system/hardware")).json()}catch{return null}}async function Gt(){try{return await(await k("/processes")).json()}catch{return null}}async function Wt(){try{return await(await k("/agent/status")).json()}catch{return null}}async function Le(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),o=document.querySelector("#hw-os .hw-content"),a=document.querySelector("#hw-cpu .hw-content"),s=document.querySelector("#hw-ram .hw-content"),i=document.querySelector("#hw-gpu .hw-content"),u=document.querySelector("#hw-storage .hw-content"),d=r=>{if(r){if(o&&(o.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${r.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${r.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),s){let x=(r.MEMORY_BYTES/1073741824).toFixed(1);s.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${x} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(a&&r.CPU&&r.CPU.length>0){let x=r.CPU[0];a.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${x.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${x.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${x.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}i&&(r.GPU&&r.GPU.length>0?i.innerHTML=r.GPU.map(x=>{let n=(x.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${x.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${n} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):i.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),u&&r.STORAGE&&r.STORAGE.length>0?u.innerHTML=r.STORAGE.map(x=>{let n=(x.USED/1073741824).toFixed(1),c=(x.SIZE/(1024*1024*1024)).toFixed(1),g=x.SIZE>0?(x.USED/x.SIZE*100).toFixed(0):0,T=x.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${x.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${T}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${n} GB Used</span>
                            <span>${c} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${g>90?"#cf6679":"#03dac6"}; width: ${g}%; height: 100%; box-shadow: 0 0 10px ${g>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):u&&(u.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let r=await ut();r?(d(r),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},e.dataset.listenerAttached="true"),a&&!a.hasChildNodes())){let r=await ut();d(r)}if(!t)return;let p=await wt();if(!p||!p.services){t.children.length===0&&(t.innerHTML=A("offline","Failed to load system metrics.","The event service may be offline."));return}pt=Date.now(),O(0,pt);let m=p.services||[];Array.from(t.children).forEach(r=>{r.classList.contains("service-widget")||r.remove()});function y(r){return!r||r==="N/A"||r==="unknown"||r.trim()===""?"-":r}function b(r){if(!r||r==="N/A"||r==="unknown")return"-";let x=r.match(/^(\d+\.\d+\.\d+)/);return x?x[0]:r.split(".").slice(0,3).join(".")||"-"}function h(r){return!r||r.length<=28?r:r.substring(0,28)+"..."}function v(r){if(!r||r==="N/A"||r==="unknown")return"-";let x=r.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!x)return"-";let n=parseInt(x[1])||0,c=parseInt(x[2])||0,g=parseInt(x[3])||0,T=parseFloat(x[4])||0,w=n*86400+c*3600+g*60+T,$=Math.floor(w/86400);if($>0)return`${$}d`;let S=Math.floor(w/3600);if(S>0)return`${S}h`;let I=Math.floor(w/60);return I>0?`${I}m`:`${Math.floor(w)}s`}function l(r){let x=r.status==="online",n=x?"service-widget-online":"service-widget-offline",c=x?"bx-check-circle":"bx-x-circle",g=x?"OK":"BAD",T=r.version?b(r.version.str):"-",w=r.cpu&&r.cpu!=="N/A"?r.cpu:"-",$=r.memory&&r.memory!=="N/A"?r.memory:"-",S=w!=="-"?"#00ff00":"#666",I=w!=="-"?"#fff":"#666",_=$!=="-"?"#00ff00":"#666",R=$!=="-"?"#fff":"#666",N=v(r.uptime),H="";return x?H=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${T}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${N}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${S};"></i>
                        <span style="color: ${I};">${w}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${_};"></i>
                        <span style="color: ${R};">${$}</span>
                    </div>
                </div>`:H='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${n}" data-service-id="${r.id}"><div class="service-widget-header"><i class="bx ${c}"></i><h3>${r.short_name||r.id}</h3><span class="service-widget-status">${g}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${h(r.domain&&r.port?`${r.domain}:${r.port}`:"")}</span></div>${H}</div></div>`}let f=new Map(Array.from(t.querySelectorAll(".service-widget")).map(r=>[r.dataset.serviceId,r])),E=new Set(m.map(r=>r.id));for(let[r,x]of f)E.has(r)||x.remove();m.forEach(r=>{let x=l(r),n=f.get(r.id);n?n.outerHTML!==x&&(n.outerHTML=x):t.insertAdjacentHTML("beforeend",x)})}async function ke(){let t=document.getElementById("models-widgets");if(!t)return;let e=await wt();if(!e){t.children.length===0&&(t.innerHTML=A("offline","Failed to load model status.","The event service may be offline."));return}mt=Date.now(),O(2,mt);let o=e.models||[],a=e.whisper;Array.from(t.children).forEach(p=>{p.classList.contains("service-widget")||p.remove()});function s(p){let m=p.status==="Ready";return`
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
                </div>`}function i(p){let m=p.status==="Ready";return`
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
                            <span class="info-value">xtts</span>
                        </div>
                    </div>
                </div>`}function u(p){let m=p.status==="Downloaded",y=m?"service-widget-online":"service-widget-offline",b=m?"OK":"MISSING",h=m&&p.size>0?`${(p.size/1e9).toFixed(2)} GB`:"-",v=p.name;return p.type==="custom"&&v.endsWith(":latest")&&(v=v.replace(":latest","")),`<div class="service-widget ${y}" data-model-name="${p.name}"><div class="service-widget-header"><i class="bx ${m?"bx-check-circle":"bx-x-circle"}"></i><h3>${v}</h3><span class="service-widget-status">${b}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${p.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${h}</span></div></div></div>`}let d="";if(a&&(d+=s(a)),e.xtts&&(d+=i(e.xtts)),d+=o.map(u).join(""),!d){t.innerHTML=A("empty","No models found.");return}t.innerHTML!==d&&(t.innerHTML=d)}async function ye(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("guardian-t1-val"),o=document.getElementById("guardian-t2-val"),a=document.getElementById("guardian-idle-val"),s=document.getElementById("guardian-total-idle"),i=document.getElementById("guardian-total-active"),u=document.getElementById("guardian-total-waste"),d=document.getElementById("guardian-reset-btn");d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{d.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await k("/guardian/reset?tier=all",{method:"POST"}),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{d.innerHTML="<i class='bx bx-refresh'></i> Reset"},2e3)},500),ye()}catch{d.innerHTML="<i class='bx bx-error'></i> Failed"}},d.dataset.listenerAttached="true");let p=await Wt();if(p){let f=Math.floor(Date.now()/1e3),E=p.active_tier,r=g=>{g<0&&(g=0);let T=Math.floor(g/3600),w=Math.floor(g%3600/60),$=g%60;return T>0?`${T}h ${w}m`:w>0?`${w}m ${$}s`:`${$}s`},x=(g,T,w,$)=>{if(E===$)g.textContent="Working",g.style.color="#bb86fc";else if($==="t1"&&E==="tests")g.textContent="Testing",g.style.color="#03dac6";else if(w){let I=w.next_run-f;if(I<=0)g.textContent="Ready",g.style.color="#5eff5e";else{let _=Math.floor(I/60),R=I%60;g.textContent=`${_}m ${R}s`,g.style.color="#fff"}}T&&w&&(T.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${w.attempts||0}</span>
            <span style="color: ${w.failures>0?"#ffa500":"#666"}">Fails: ${w.failures||0}</span>
            <span style="color: ${w.absolute_failures>0?"#ff4d4d":"#666"}">Aborted: ${w.absolute_failures||0}</span>
          </div>
        `)};e&&x(e,document.getElementById("guardian-t1-stats"),p.t1,"t1"),o&&x(o,document.getElementById("guardian-t2-stats"),p.t2,"t2");let n=document.getElementById("system-state-label"),c=document.getElementById("system-state-val");if(c&&p.system_state){let g=p.system_state,T=r(p.system_state_time||0);n&&(n.textContent=`State: ${g.toUpperCase()}`),c.textContent=T,g==="idle"?c.style.color=p.system_state_time>300?"#5eff5e":"#fff":c.style.color="#bb86fc"}s&&(s.textContent=r(p.total_idle_time||0)),i&&(i.textContent=r(p.total_active_time||0)),u&&(u.textContent=r(p.total_waste_time||0))}else[e,o,a,s,i,u].forEach(E=>{E&&(E.textContent="-",E.style.color="#666")});let m=await Gt(),y=[],b=[],h=[];m&&(Array.isArray(m)?y=m:(y=m.active||[],b=m.queue||[],h=m.history||[],h.sort((f,E)=>(E.end_time||0)-(f.end_time||0)))),y.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=A("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),Ce(t,y,!1));let v=document.getElementById("processes-queue-widgets");v&&(b.length===0?!v.querySelector(".tab-placeholder")&&!v.querySelector('div[style*="font-style: italic"]')&&(v.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(v.innerHTML="",Ce(v,b,!1)));let l=document.getElementById("processes-history-widgets");l&&(h.length===0?l.querySelector(".tab-placeholder")||(l.innerHTML=A("empty","No recent history.")):(l.querySelector(".tab-placeholder")&&(l.innerHTML=""),Ce(l,h,!0))),oe(1,y.length)}function Ce(t,e,o){function a(d){let p="";d.end_time?p=`${d.end_time-d.start_time}s`:p=`${Math.floor(Date.now()/1e3-d.start_time)}s`;let m=d.retries>0?`<span class="process-retry-badge">Retry ${d.retries}</span>`:"",y=d.channel_id,b={"system-guardian":"Guardian Worker","system-cli-op":"CLI Operation"};if(b[y]?y=b[y]:/^\d+$/.test(y)&&(y=`Channel ${y}`),o)return`
        <div class="process-history-item" data-channel-id="${d.channel_id}-${d.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${y}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${d.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${d.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${p}</span>
            </div>
        </div>`;let h="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${d.channel_id}-${d.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${h}"></i>
                        <h3 style="color: ${h}">${y}</h3>
                        ${m}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${h}">${d.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${h}">${p}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${h}">${d.pid}</span>
                        </div>
                    </div>
                </div>`}let s=o?".process-history-item":".process-widget",i=new Map(Array.from(t.querySelectorAll(s)).map(d=>[d.dataset.channelId,d])),u=new Set(e.map(d=>`${d.channel_id}-${d.start_time}`));for(let[d,p]of i)u.has(d)||p.remove();e.forEach(d=>{let p=`${d.channel_id}-${d.start_time}`,m=a(d),y=i.get(p);if(y){y.outerHTML!==m&&(y.outerHTML=m);let b=t.querySelector(`[data-channel-id="${p}"]`);b&&t.appendChild(b)}else t.insertAdjacentHTML("beforeend",m)})}function he(){let t=ae(),e=qe()||"master@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},a=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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
                            <input type="checkbox" id="analytics-toggle" ${a?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Ie(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let i=this.dataset.theme;Ge(i),t.setContent(he()),Ie(t)})});let o=document.getElementById("notifications-toggle");o&&(o.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let a=document.getElementById("analytics-toggle");a&&(a.checked=localStorage.getItem("easter_analytics_enabled")!=="false",a.onclick=s=>{let i=s.target.checked;localStorage.setItem("easter_analytics_enabled",i),window.EASTER_ANALYTICS_ENABLED=i,window.EASTER_DEBUG_MODE=i})}var Vt="2.8.143",St=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1 & Tier 2).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1|2] [--force]
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
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Kt=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
    `;for(let[o,a]of Object.entries(t)){let s=St.filter(i=>i.category===o);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${a.icon}' style="color: ${a.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${a.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(i=>`
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
    </div>`,e},Ae=!1;function Jt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Et(),document.getElementById("terminal-action-btn").onclick=()=>Et());let o=document.getElementById("cli-terminal-body"),a=document.getElementById("cli-docs-pane");o.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return a.innerHTML=`
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
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ae=!0,o}function Et(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ae=!1}function $t(t,e,o="output"){if(!Ae)return;let a=document.createElement("div");a.className=`terminal-line terminal-${o}`,o==="prompt"?a.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:a.innerHTML=fe(e),t.appendChild(a),t.scrollTop=t.scrollHeight}async function Yt(t){let e=St.find(s=>s.id===t);if(!e)return;let o=Jt(e);$t(o,`dex ${t}`,"prompt");let a=e.demo_output||["Executing command...","\u2713 Done."];for(let s of a){await new Promise(u=>setTimeout(u,400+Math.random()*600));let i="output";s.includes("[ERROR]")?i="error":s.includes("[SUCCESS]")||s.includes("\u2713")?i="success":s.includes("!")&&(i="warning"),$t(o,s,i)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function Tt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Kt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let o=e.querySelector("code").textContent;navigator.clipboard.writeText(o).then(()=>{let a=e.querySelector("i");a.className="bx bx-check",a.style.color="#5eff5e",setTimeout(()=>{a.className="bx bx-copy",a.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(o=>{o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-5px)",o.style.borderColor="rgba(255,255,255,0.15)",o.style.backgroundColor="rgba(255,255,255,0.05)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)",o.style.borderColor="rgba(255,255,255,0.05)",o.style.backgroundColor="rgba(255,255,255,0.03)"}),o.addEventListener("click",()=>{let a=o.dataset.cmd;Yt(a)})})}async function Xt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${$e()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable.")}}function Ct(){Xt(),We(),Ne();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&Tt();let e=Ue();Re(e),Oe();let o=document.getElementById("nav-left-container");o&&o.addEventListener("click",()=>{if(i.length>0)b();else{let n=window.location.pathname;if(!(n==="/"||n==="/index.html")){let T=(n.endsWith("/")&&n.length>1?n.slice(0,-1):n).split("/");T.pop();let w=T.join("/")||"/";window.location.href=w}}});let a=window.location.pathname==="/"||window.location.pathname==="/index.html",s=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!a&&!s&&document.querySelector("footer")?.classList.add("hide");let i=[],u=document.getElementById("windows-container");u&&u.setAttribute("data-count","0");let d=n=>{localStorage.setItem("dex_last_window",n)};function p(){return 1}function m(){for(;i.length>1;)i.shift().close(!0);let n=document.getElementById("windows-container"),c=document.querySelector("nav"),g=document.querySelector("footer"),T=window.location.pathname==="/"||window.location.pathname==="/index.html",w=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");n&&n.setAttribute("data-count",i.length),i.forEach(_=>{let R=document.getElementById(_.id);R&&R.classList.remove("hide-close")}),pe(ae());let $=document.getElementById("dexter-menu-container"),S=document.getElementById("nav-window-switcher"),I=document.getElementById("settings-icon");if(Pe(i.length>0),i.length>0){if(g?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),c?.classList.add("window-open"),n&&(n.style.paddingTop="60px"),$&&($.style.display="none"),I&&(I.style.display="none"),S){let _=i[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(_)?(S.innerHTML=`
                      <div class="nav-switch-btn ${_==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${_==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${_==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${_==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${_==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{d("alerts-window"),y(h)}),document.getElementById("switch-events").addEventListener("click",()=>{d("events-window"),y(v)}),document.getElementById("switch-monitor").addEventListener("click",()=>{d("monitor-window"),y(f)}),document.getElementById("switch-contacts").addEventListener("click",()=>{d("contacts-window"),y(l)}),document.getElementById("switch-workspace").addEventListener("click",()=>{d("workspace-window"),y(E)})):S.innerHTML=""}}else c?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),n&&(n.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),T||w?g?.classList.remove("hide"):g?.classList.add("hide"),$&&($.style.display="flex"),I&&(I.style.display="block"),S&&(S.innerHTML="");le(Ke())}function y(n){if(n.isOpen()){n.close();return}for(;i.length>0;)i.pop().close(!0);i.push(n),n.open(),m()}function b(){[...i].forEach(c=>c.close()),i=[]}window.addEventListener("resize",m);let h=G({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Ye(),onOpen:()=>K(),onClose:()=>{let n=i.indexOf(h);n>-1&&i.splice(n,1),m()}}),v=G({id:"events-window",title:"Events",icon:"bx-calendar-event",content:ct(),onOpen:()=>Q(),onClose:()=>{let n=i.indexOf(v);n>-1&&i.splice(n,1),m()}}),l=G({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:ot(),onOpen:()=>Te(),onClose:()=>{let n=i.indexOf(l);n>-1&&i.splice(n,1),m()}}),f=G({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:bt()},{icon:"bxs-component",title:"Processes",content:ft()},{icon:"bxs-brain",title:"Models",content:vt()},{icon:"bxs-hdd",title:"Hardware",content:xt()},{icon:"bxs-terminal",title:"Logs",content:yt()},{icon:"bxs-zap",title:"Agents",content:gt()}],onOpen:()=>{Le(),ye(),ke(),de()},onClose:()=>{let n=i.indexOf(f);n>-1&&i.splice(n,1),m()}}),E=G({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:at(),onOpen:()=>Se(),onClose:()=>{let n=i.indexOf(E);n>-1&&i.splice(n,1),m()}}),r=G({id:"settings-window",title:"Settings",icon:"bx-cog",content:he(),onOpen:()=>{r.setContent(he()),Ie(r)},onClose:()=>{let n=i.indexOf(r);n>-1&&i.splice(n,1),m()}}),x=G({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:n=>{v.isOpen()||y(v),setTimeout(()=>{let c=document.querySelector(`.event-item[data-event-id="${n}"]`);c&&(c.scrollIntoView({behavior:"smooth",block:"center"}),c.classList.add("flash-highlight"),c.classList.contains("expanded")||c.click(),setTimeout(()=>c.classList.remove("flash-highlight"),2e3))},500)},viewAlert:n=>{h.isOpen()||y(h),setTimeout(()=>{let c=document.querySelector(`.event-item[data-alert-id="${n}"]`);c&&(c.scrollIntoView({behavior:"smooth",block:"center"}),c.classList.add("flash-highlight"),c.classList.contains("expanded")||c.click(),setTimeout(()=>c.classList.remove("flash-highlight"),2e3))},500)}},e){let n=document.getElementById("dexter-dropdown");n&&(n.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let c=document.getElementById("dexter-menu-container"),g=document.getElementById("dexter-menu-btn");c&&n&&g&&(c.addEventListener("mouseenter",()=>{n.classList.add("active"),g.classList.add("active")}),c.addEventListener("mouseleave",()=>{n.classList.remove("active"),g.classList.remove("active")}),g.addEventListener("click",T=>{T.stopPropagation();let w=localStorage.getItem("dex_last_window")||"alerts-window",$=null;w==="alerts-window"?$=h:w==="events-window"?$=v:w==="monitor-window"?$=f:w==="contacts-window"?$=l:w==="workspace-window"&&($=E),$&&y($)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{d("alerts-window"),y(h)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{d("events-window"),y(v)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{d("monitor-window"),y(f)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{d("contacts-window"),y(l)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{d("workspace-window"),y(E)}),document.getElementById("settings-icon")?.addEventListener("click",()=>y(r)),document.getElementById("close-all-windows")?.addEventListener("click",()=>b()),setInterval(()=>{h.isOpen()?K():Xe(),v.isOpen()&&Q(),f.isOpen()&&ht(),E.isOpen()&&Se()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{x.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",n=>{n.preventDefault();try{Fe(document.getElementById("email-input").value),window.location.reload()}catch(c){let g=document.getElementById("login-error");g&&(g.textContent=c.message,g.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ct):Ct();})();
