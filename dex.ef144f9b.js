(()=>{function Ae(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ie(t=!1){let a=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${t?`
        <div class="nav-right">
            <i class='bx bx-news' id="feed-icon" title="Feed"></i>
            <i class='bx bx-pulse' id="monitor-icon" title="Monitor"></i>
            <i class='bx bx-brain' id="workspace-icon" title="Workspace"></i>
            <i class='bx bx-cog' id="settings-icon" title="Settings"></i>
            <i class='bx bx-x-circle' id="close-all-windows" title="Close All Windows" style="color: #ff4444; margin-left: 10px; opacity: 0.6; display: none;"></i>
        </div>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,o=document.createElement("nav");o.innerHTML=a,document.body.prepend(o)}function ke(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var _e=1e3;function G(t){let e=null,a=t.onClose||null,o=t.onOpen||null;function s(){e&&(e.style.zIndex=++_e)}function r(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",c),o&&setTimeout(o,10);return}let p=document.getElementById("windows-container");p||(p=document.createElement("div"),p.id="windows-container",p.className="windows-container",document.body.appendChild(p)),e=document.createElement("div"),e.id=t.id,e.className="window",e.style.zIndex=++_e,e.addEventListener("mousedown",s);let m=t.icon||"bx-window",i="",n="",l;t.tabs&&t.tabs.length>0?(i=`<div class="tab-bar">${t.tabs.map((y,d)=>{let b=y.icon?`<i class="bx ${y.icon}"></i>`:`<span class="tab-glyph">${y.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${d===0?"active":""}" data-tab-index="${d}">
                        ${b}
                        <span class="tab-title">${y.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${d}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,l=`<div class="window-content">${t.tabs.map((y,d)=>`<div class="tab-content ${d===0?"active":""}" data-tab-content="${d}">${y.content}</div>`).join("")}</div>`):(t.title&&(n=`<div class="window-title">${t.title}</div>`),l=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${m}"></i>
                ${i}
                ${n}
                <i class="bx bx-x window-close"></i>
            </div>
            ${l}
        `,p.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",g=>{g.stopPropagation(),u()}),window.addEventListener("resize",c),t.tabs&&e.querySelectorAll(".tab").forEach(g=>{g.addEventListener("click",()=>{let h=g.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(y=>y.classList.remove("active")),g.classList.add("active"),e.querySelectorAll(".tab-content").forEach(y=>y.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${h}"]`).classList.add("active"),f(g,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function c(){if(!e||!e.classList.contains("open"))return;let p=e.querySelector(".tab.active");p&&f(p,e)}function f(p,m){setTimeout(()=>{let i=m.querySelector(".tab-bar");if(!i)return;let n=Array.from(i.querySelectorAll(".tab")),l=n.indexOf(p),g=i.clientWidth,h=n[Math.max(0,l-2)],y=n[Math.min(n.length-1,l+2)],d=h.offsetLeft-i.offsetLeft-25,x=y.offsetLeft+y.offsetWidth-i.offsetLeft+25-d,k=x<=g?d-(g-x)/2:p.offsetLeft-i.offsetLeft-g/2+p.offsetWidth/2;i.scrollTo({left:k,behavior:"smooth"})},350)}function u(p=!1){e&&(window.removeEventListener("resize",c),p?(e.remove(),e=null):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e?.remove(),e=null},400)))}function v(p){let m=e?.querySelector(".window-content");m&&(m.innerHTML=p)}function w(){return e&&e.classList.contains("open")}return{open:r,close:u,setContent:v,isOpen:w,focus:s,id:t.id}}function De(){return!0}function Me(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Be(t){localStorage.setItem("easter_user_email",t.trim())}var Ne="easter_theme",_={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function se(){return localStorage.getItem(Ne)||_.AUTO}function mt(){let t=window.innerWidth,e=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?_.ANIMATED:(t===1920&&e===1080&&a||t<=1920||e<=1080,_.DEFAULT)}function He(t){if(!Object.values(_).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ne,t),te(t)}function te(t,e=!1,a=!1){let o=document.body,s=t===_.AUTO?mt():t;if(t===_.AUTO&&a&&(s=_.ANIMATED),e||(o.classList.add("theme-transitioning"),setTimeout(()=>{o.classList.remove("theme-transitioning")},300)),Object.values(_).forEach(r=>{o.classList.remove(`theme-${r}`)}),o.classList.add(`theme-${t}`),s===_.ANIMATED){if(o.classList.add("is-animated"),!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}}else{o.classList.remove("is-animated");let r=document.querySelector(".background");r&&(e?r.remove():(r.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{r.remove()},400)))}}function Oe(){let t=se();if(te(t,!0),t===_.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{te(_.AUTO)},300)})}}function $(t,e,a=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function A(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function N(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let o=Date.now(),s=Math.floor((o-e)/1e3),r;s<60?r=`${s}s ago`:s<3600?r=`${Math.floor(s/60)}m ago`:r=`${Math.floor(s/3600)}h ago`,a.textContent=`Last updated: ${r}`}function R(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let o=a.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function oe(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;R(0,e)}function be(){return"https://event.easter.company"}function pt(){return"https://discord.easter.company"}var ut="http://127.0.0.1:8100",gt="http://127.0.0.1:8300",ft={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function le(t){let e=A(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,r)=>{let c=ft[r];return c?`<span class="${c}">`:""});let a=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return a>o&&(e+="</span>".repeat(a-o)),e}var V=null,W=null,ne=!1,ae=!1;async function I(t,e={}){if(V)try{let s=await fetch(V+t,e);if(s.ok)return s;V=null}catch{V=null}let a=be(),o=ut;try{let s=await fetch(a+t,e);if(s.ok)return V=a,ne&&(console.log("\u2728 Production event service restored."),ne=!1),s;throw new Error("Primary failed")}catch{ne||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${o}`),ne=!0);try{let r=await fetch(o+t,e);if(r.ok)return V=o,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function Re(t,e={}){if(W)try{let s=await fetch(W+t,e);if(s.ok)return s;W=null}catch{W=null}let a=pt(),o=gt;try{let s=await fetch(a+t,e);if(s.ok)return W=a,ae&&(console.log("\u2728 Production discord service restored."),ae=!1),s;throw new Error("Primary failed")}catch{ae||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${o}`),ae=!0);try{let r=await fetch(o+t,e);if(r.ok)return W=o,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Pe=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading notifications...</p>
        </div>
    </div>
`,re=null,z=new Set,ce=[];async function F(t=!1){let e=document.getElementById("notifications-list");if(!e)return;vt(),t&&(e.innerHTML="<p>Updating...</p>");let a="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await I(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let r=(await o.json()).events||[];re=Date.now(),N(0,re);let c=Date.now(),f=24*60*60*1e3,u=r.filter(d=>{let b=localStorage.getItem(`notification_read_ts_${d.id}`);if(!b)return!0;let x=parseInt(b);return c-x<f});u.sort((d,b)=>{let x=C=>{let D=C.event;if(typeof D=="string")try{D=JSON.parse(D)}catch{return"low"}return(D.priority||"low").toLowerCase()},k=C=>C==="critical"?4:C==="high"?3:C==="medium"?2:1,T=k(x(d)),E=k(x(b));return T!==E?E-T:b.timestamp-d.timestamp}),ce=u;let v=d=>{let b=d.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return"low"}return(b.priority||"low").toLowerCase()},w=[],m=new Set(u.map(d=>v(d))).size>1;if(u.length>0){let d=null;u.forEach(b=>{let x=v(b);m&&x!==d&&(w.push({id:`divider-${x}`,type:"divider",label:x.toUpperCase()}),d=x),w.push(b)})}if(t&&(e.innerHTML=""),u.length===0){e.innerHTML=$("empty","No notifications yet."),oe();return}let i=d=>{let b=d.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return null}let x=b.title||"Untitled Notification",k=b.body||"No description provided.",T=b.priority||"low",E=!!b.alert,C=b.category||"system",D=b.related_event_ids||[],O=!!localStorage.getItem(`notification_read_ts_${d.id}`),P=new Date(d.timestamp*1e3),M=P.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=P.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),L=O?"event-border-grey":"event-border-blue";!O&&E&&(L="event-border-red"),O&&(T==="high"||T==="critical")?L="event-border-red":O&&T==="medium"&&(L="event-border-orange");let H=O?"notification-read":"notification-unread",B=z.has(d.id),ue=B?"expanded":"",ge=B?"display: block;":"display: none;",Le="",$e="";D.length>0&&($e=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${D.map(Z=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Z.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),Le=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${T==="high"||T==="critical"?"#ff4d4d":T==="medium"?"#ffa500":"#888"}">${T.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${A(k)}</p>
                </div>
                ${$e}
            `;let U=document.createElement("div");U.className=`event-item notification-item ${L} ${H} ${ue} cursor-pointer`,U.dataset.notificationId=d.id,U.onclick=function(Z){if(this.classList.contains("expanded")){this.classList.remove("expanded"),z.delete(d.id);let ee=this.querySelector(".event-details");ee&&(ee.style.display="none")}else{this.classList.add("expanded"),z.add(d.id);let ee=this.querySelector(".event-details");if(ee&&(ee.style.display="block"),!localStorage.getItem(`notification_read_ts_${d.id}`)){localStorage.setItem(`notification_read_ts_${d.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ve="event-border-grey";T==="high"||T==="critical"?ve="event-border-red":T==="medium"&&(ve="event-border-orange"),this.classList.add(ve),oe()}}};let Ot=x,dt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[C]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${M}</span>
                    <span class="event-date">${S}</span>
                </div>
                <div class="event-icon"><i class='bx ${dt}'></i></div>
                <div class="event-content">
                    <div class="event-service">${C.toUpperCase()} ${E?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${x}</div>
                    <div class="event-details" style="${ge}">
                        <div class="event-details-header">
                            <h4>${E?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${Le}
                    </div>
                </div>
            `;let Ce=U.querySelector(".close-details-btn");return Ce&&Ce.addEventListener("click",Z=>{Z.stopPropagation(),U.classList.remove("expanded");let fe=U.querySelector(".event-details");fe&&(fe.style.display="none"),z.delete(d.id)}),U},n=d=>{let b=document.createElement("div");b.className="notification-divider",b.dataset.notificationId=d.id;let x="#888888";return d.label==="CRITICAL"?x="#ff4d4d":d.label==="HIGH"?x="#ff8888":d.label==="MEDIUM"&&(x="#ffa500"),b.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${x}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,b.innerHTML=`<span style="white-space: nowrap;">${d.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${x}44, transparent); flex-grow: 1;"></div>`,b},l=Array.from(e.children),g=new Map(l.map(d=>[d.dataset.notificationId,d])),h=new Set(w.map(d=>d.id));l.forEach(d=>{let b=d.dataset.notificationId;(!b||!h.has(b))&&d.remove()});let y=null;w.forEach((d,b)=>{let x=g.get(d.id);(!x||t)&&(x&&x.remove(),d.type==="divider"?x=n(d):x=i(d),!x)||(b===0?e.firstElementChild!==x&&e.prepend(x):y&&y.nextElementSibling!==x&&y.after(x),y=x)}),re=Date.now(),N(0,re),oe()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function vt(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),a=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ce.forEach(s=>{localStorage.getItem(`notification_read_ts_${s.id}`)||localStorage.setItem(`notification_read_ts_${s.id}`,Date.now().toString())}),F(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ce.forEach(s=>{z.add(s.id),localStorage.getItem(`notification_read_ts_${s.id}`)||localStorage.setItem(`notification_read_ts_${s.id}`,Date.now().toString())}),F(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{z.clear(),F(!0)},a.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let s=Date.now()-1728e5;ce.forEach(r=>{localStorage.setItem(`notification_read_ts_${r.id}`,s.toString())}),z.clear(),F(!0)},o.dataset.listenerAttached="true")}var Ue=()=>`
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
    <div class="tab-placeholder">
        <i class='bx bx-map-alt placeholder-icon'></i>
        <p class="placeholder-message">Loading roadmap...</p>
    </div>
  </div>
`,q=new Set,ze=[],K=null;async function j(t=!1){let e=document.getElementById("roadmap-list");if(e){bt();try{let a=await I("/roadmap");if(!a.ok)throw new Error("Offline");let o=await a.json();if(ze=o,o.length===0){e.innerHTML=$("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let s=v=>{let w=q.has(v.id),p=v.state==="draft",m=v.state==="published",i=v.state==="consumed",n="event-border-grey";m&&(n="event-border-blue"),i&&(n="event-border-purple");let g=new Date(v.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${n} cursor-pointer ${w?"expanded":""}`,h.dataset.itemId=v.id,h.onclick=d=>{if(d.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",q.delete(v.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",q.add(v.id))};let y=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${v.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${g.split(",")[1]}</span>
          <span class="event-date">${g.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${y}</div>
          <div class="event-message" style="white-space: pre-wrap;">${A(v.content)}</div>
          <div class="event-details" style="${w?"display: block;":"display: none;"} ">
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
            ${i?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(v.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>ht(v)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>xt(v)),h.querySelector(".delete-btn")?.addEventListener("click",()=>yt(v.id)),h.querySelector(".close-details-btn")?.addEventListener("click",d=>{d.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",q.delete(v.id)}),h},r=Array.from(e.children),c=new Map(r.map(v=>[v.dataset.itemId,v])),f=new Set(o.map(v=>v.id));r.forEach(v=>{let w=v.dataset.itemId;(!w||!f.has(w))&&v.remove()});let u=null;o.forEach((v,w)=>{let p=c.get(v.id);(!p||t)&&(p&&p.remove(),p=s(v),!p)||(w===0?e.firstElementChild!==p&&e.prepend(p):u&&u.nextElementSibling!==p&&u.after(p),u=p)})}catch{e.innerHTML=$("error","Failed to load roadmap.")}}}function bt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{K=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",K=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input").value;if(!r.trim())return;let c=K?`/roadmap/${K}`:"/roadmap",f=K?"PATCH":"POST";try{await I(c,{method:f,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})}),document.getElementById("roadmap-editor-container").style.display="none",j(!0)}catch(u){console.error(u)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{ze.forEach(r=>q.add(r.id)),j(!0)},o.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{q.clear(),j(!0)},s.dataset.listenerAttached="true")}function ht(t){K=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function xt(t){let e=t.state==="published"?"draft":"published";try{await I(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),j(!0)}catch(a){console.error(a)}}async function yt(t){if(confirm("Delete this roadmap item?"))try{await I(`/roadmap/${t}`,{method:"DELETE"}),q.delete(t),j(!0)}catch(e){console.error(e)}}var qe=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-paint placeholder-icon'></i>
            <p class="placeholder-message">Loading blueprints...</p>
        </div>
    </div>
`,Fe=null,J=new Set,je=[];async function de(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;wt();let a="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await I(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let r=(await o.json()).events||[];if(je=r,Fe=Date.now(),N(2,Fe),r.length===0){e.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),R(1,0);return}t&&(e.innerHTML="");let c=p=>{let m=p.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let i=m.title||"Untitled Blueprint",n=m.summary||m.body||"No summary provided.",l=m.content||"",g=m.category||"architecture",h=m.affected_services||[],y=m.implementation_path||[],d=new Date(p.timestamp*1e3),b=d.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),x=d.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),k=J.has(p.id),T=k?"display: block;":"display: none;",E=document.createElement("div");E.className=`event-item notification-item event-border-purple cursor-pointer ${k?"expanded":""}`,E.dataset.blueprintId=p.id;let D={architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[g]||"bx-paint";E.onclick=function(M){if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(p.id);let L=this.querySelector(".event-details");L&&(L.style.display="none")}else{this.classList.add("expanded"),J.add(p.id);let L=this.querySelector(".event-details");L&&(L.style.display="block")}};let Q=h.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${h.join(", ")}</div>`:"",O="";y.length>0&&(O=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${y.map(M=>`<li>${A(M)}</li>`).join("")}
                        </ul>
                    </div>
                `),E.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${b}</span>
                    <span class="event-date">${x}</span>
                </div>
                <div class="event-icon"><i class='bx ${D}'></i></div>
                <div class="event-content">
                    <div class="event-service">${g.toUpperCase()}</div>
                    <div class="event-message">${i}</div>
                    <div class="event-details" style="${T}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${A(n)}
                        </div>
                        ${Q}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${A(l)}</p>
                        </div>
                        ${O}
                    </div>
                </div>
            `;let P=E.querySelector(".close-details-btn");return P&&P.addEventListener("click",M=>{M.stopPropagation(),E.classList.remove("expanded");let S=E.querySelector(".event-details");S&&(S.style.display="none"),J.delete(p.id)}),E},f=Array.from(e.children),u=new Map(f.map(p=>[p.dataset.blueprintId,p])),v=new Set(r.map(p=>p.id));f.forEach(p=>{let m=p.dataset.blueprintId;(!m||!v.has(m))&&p.remove()});let w=null;r.forEach((p,m)=>{let i=u.get(p.id);(!i||t)&&(i&&i.remove(),i=c(p),!i)||(m===0?e.firstElementChild!==i&&e.prepend(i):w&&w.nextElementSibling!==i&&w.after(i),w=i)}),R(2,r.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function wt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{je.forEach(a=>J.add(a.id)),de(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),de(!0)},e.dataset.listenerAttached="true")}var Ge=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
            </div>
            ${Ue()}
        </div>

        <div class="blueprints-section">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-paint' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
            </div>
            ${qe()}
        </div>
    </div>
`;async function he(){await Promise.all([j(),de()])}var We=()=>`
    <div class="notifications-actions">
        <button id="contacts-refresh" class="notif-action-btn"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
        <div class="tab-placeholder">
            <i class='bx bx-book-content placeholder-icon'></i>
            <p class="placeholder-message">Loading contacts...</p>
        </div>
    </div>
`,Ve=null;async function xe(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>xe(),e.dataset.listenerAttached="true");try{let a=await Re("/contacts");if(!a.ok)throw new Error("Service unreachable");let s=(await a.json()).members||[];if(Ve=Date.now(),N(4,Ve),s.length===0){t.innerHTML=$("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,"Master User":1,Admin:2,Moderator:3,Contributor:4,User:5,Anyone:6};s.sort((c,f)=>{let u=r[c.level]??10,v=r[f.level]??10;return u!==v?u-v:c.username.localeCompare(f.username)}),t.innerHTML=s.map(c=>{let f=c.color?"#"+c.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",u=c.status==="online"?"#5eff5e":c.status==="idle"?"#ffa500":c.status==="dnd"?"#ff4d4d":"#666",v="#888";c.level==="Me"||c.level==="Master User"?v="#bb86fc":c.level==="Admin"?v="#cf6679":c.level==="Moderator"?v="#03dac6":c.level==="Contributor"&&(v="#ffa500");let w=c.level==="Me",p=w?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",m=w?"2px solid #bb86fc":`1px solid ${f}33`;return`
                <div class="user-profile-section" style="background: ${p}; padding: 15px; border-radius: 8px; border: ${m}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${w?"#bb86fc":f}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${c.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${w?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${u}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${v}; font-weight: 600; text-transform: uppercase;">${w?"DEXTER (ME)":c.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${c.id}</p>
                    </div>
                </div>
            `}).join(""),R(4,s.filter(c=>c.status!=="offline").length)}catch{t.innerHTML=$("offline","Failed to fetch contacts.","The Discord service may be offline.")}}var Et={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Ke(t,e){let a=Et[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!a)return t;let o=a.replace(/\{(\w+)\}/g,(s,r)=>e[r]!==void 0&&e[r]!==null?e[r]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var Ye=()=>`
    <div class="notifications-actions">
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
`,me=null,Y=new Set,ie=[],pe="all",St={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},Tt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Je(t){for(let[e,a]of Object.entries(St))if(a.includes(t))return e;return"system"}function Lt(t){return Tt[t]||"bx-square-rounded"}async function X(t=!1){let e=document.getElementById("events-timeline");if(!e)return;$t();let o=`/events?ml=${pe==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let s=await I(o);if(!s.ok)throw new Error("Service is offline or unreachable.");let c=(await s.json()).events||[],f=c;if(pe!=="all"&&(f=c.filter(i=>{let n=i.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!1}return Je(n.type)===pe})),ie=f.slice(0,50),me=Date.now(),N(1,me),ie.length===0){e.innerHTML=$("empty","No events found for this filter.");return}t&&(e.innerHTML="");let u=i=>{let n=i.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let l=n.type,g=Je(l),h=Lt(l),y=l==="engagement.decision"||l==="messaging.bot.sent_message"||l==="messaging.user.sent_message"||l==="moderation.explicit_content.deleted"||l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.cli.command"||l==="system.analysis.audit"||l==="system.test.completed"||l==="error_occurred"||l==="system.cli.status"||l.startsWith("system.roadmap")||l.startsWith("system.process"),d="event-border-grey";y&&(l==="moderation.explicit_content.deleted"||l==="error_occurred"?d="event-border-red":l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.analysis.audit"?d="event-border-purple":l==="system.cli.command"||l==="system.cli.status"?d="event-border-orange":l==="system.test.completed"?d=n.test?.status==="OK"&&n.lint?.status==="OK"&&n.format?.status==="OK"?"event-border-blue":"event-border-red":d="event-border-blue");let b=y?"cursor-pointer":"",x=Y.has(i.id),k=x?"expanded":"",T=x?"display: block;":"display: none;",E=new Date(i.timestamp*1e3),C=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),D=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),Q=Ke(l,n),O=n.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${n.user_level})</span>`:"",P="";if(y){let S="";if(l==="engagement.decision")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${n.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${n.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${n.engagement_raw||"None"}</pre>
                        </div>
                    `;else if(l==="messaging.bot.sent_message")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${n.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${n.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${n.response_raw||"None"}</pre>
                        </div>
                    `;else if(l==="moderation.explicit_content.deleted")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${n.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${A(n.raw_output)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.link.completed")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${A(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${A(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${A(n.summary)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.visual.completed"){let L="";n.base64_preview?L=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(L=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${L}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${A(n.description)||"None"}</pre>
                        </div>
                    `}else if(l==="system.cli.command")S=`
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
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${n.exit_code!==void 0?n.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${A(n.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(l==="system.analysis.audit")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${n.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${n.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${A(n.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${A(n.raw_input)}</pre>
                        </div>
                    `;else if(l==="system.test.completed")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${n.service_name}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${n.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Format:</span>
                            <pre class="detail-pre">${n.format?.status||"N/A"}: ${n.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Lint:</span>
                            <pre class="detail-pre">${n.lint?.status||"N/A"}: ${n.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Tests:</span>
                            <pre class="detail-pre">${n.test?.status||"N/A"}: ${n.test?.details||n.test?.message||"OK"}</pre>
                        </div>
                    `;else if(l==="error_occurred")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${n.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${A(n.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(n.context||{},null,2)}</pre>
                        </div>
                    `;else if(l==="system.cli.status")S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${A(n.message)}</pre>
                        </div>
                    `;else if(l==="messaging.user.sent_message"){let L="";n.attachments&&n.attachments.length>0&&(L=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${n.attachments.map(B=>{let ue=B.content_type&&B.content_type.startsWith("image/"),ge=(B.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${ue?`<div class="attachment-thumb-container"><img src="${B.url}" alt="${B.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${B.url}" target="_blank" class="attachment-link">${B.filename}</a>
                                        <span class="attachment-meta">${B.content_type} \u2022 ${ge}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),S=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${n.content||"(empty)"}</pre>
                        </div>
                        ${L}
                    `}P=`
                    <div class="event-details" style="${T}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${S}
                    </div>
                `}let M=document.createElement("div");if(M.className=`event-item ${d} ${b} ${k}`,M.dataset.eventId=i.id,M.onclick=function(S){if(!y)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(i.id);let H=this.querySelector(".event-details");H&&(H.style.display="none")}else{this.classList.add("expanded"),Y.add(i.id);let H=this.querySelector(".event-details");H&&(H.style.display="block")}},M.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${C}</span>
                    <span class="event-date">${D}</span>
                </div>
                <div class="event-icon"><i class='bx ${h}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${g}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${g}</span>
                        ${i.service} ${O}
                    </div>
                    <div class="event-message">${Q}</div>
                    ${P}
                </div>
            `,y){let S=M.querySelector(".close-details-btn");S&&S.addEventListener("click",L=>{L.stopPropagation();let H=L.target.closest(".event-item");if(H){H.classList.remove("expanded"),Y.delete(i.id);let B=H.querySelector(".event-details");B&&(B.style.display="none")}})}return M},v=Array.from(e.children),w=new Map(v.map(i=>[i.dataset.eventId,i])),p=new Set(ie.map(i=>i.id));v.forEach(i=>{let n=i.dataset.eventId;(!n||!p.has(n))&&i.remove()});let m=null;ie.forEach((i,n)=>{let l=w.get(i.id);(!l||t)&&(l&&l.remove(),l=u(i),!l)||(n===0?e.firstElementChild!==l&&e.prepend(l):m&&m.nextElementSibling!==l&&m.after(l),m=l)}),me=Date.now(),N(1,me)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}function $t(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),a=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ie.forEach(o=>Y.add(o.id)),X(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),X(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.querySelectorAll(".filter-btn").forEach(o=>{o.onclick=()=>{a.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),o.classList.add("active"),pe=o.dataset.filter,X(!0)}}),a.dataset.listenerAttached="true")}function Xe(){return`
        <div id="logs-container" class="logs-container">
            <div class="tab-placeholder">
                <i class='bx bx-terminal placeholder-icon'></i>
                <p class="placeholder-message">Loading logs...</p>
            </div>
        </div>
    `}var Ct=null;async function ye(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await I("/logs");if(!e.ok)throw new Error("Logs offline");let a=await e.json();if(!a||a.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let o=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=a.filter(c=>!o.includes(c.id));s.forEach(c=>{c.logs&&Array.isArray(c.logs)?c.logs.reverse():c.logs=[]}),s.reverse();let r=s.map(c=>{let f=c.logs.join(`
`),u=[...c.logs];if(u.length<25){let w=25-u.length;for(let p=0;p<w;p++)u.push("")}else u.length>25&&(u=u.slice(-25));let v=u.map(w=>le(w)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${c.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(f)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${c.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${v}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(c=>{c.addEventListener("click",()=>{let f=unescape(c.dataset.logs);navigator.clipboard.writeText(f).then(()=>{let u=c.querySelector("i");u.classList.remove("bx-copy"),u.classList.add("bx-check"),setTimeout(()=>{u.classList.remove("bx-check"),u.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(c=>{c.addEventListener("click",async()=>{let f=c.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${f}?`))try{(await I(`/logs?service_id=${f}`,{method:"DELETE"})).ok&&ye()}catch(u){console.error("Error clearing logs:",u)}})}),Ct=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var st=()=>`
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
        </div>

        <div class="system-section-header">
            <i class='bx bxs-component' style="color: #03dac6;"></i>
            <h2>Live Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p style="grid-column: 1 / -1; text-align: center; padding: 20px; color: #666;">Loading processes...</p></div>

        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p style="grid-column: 1 / -1; text-align: center; padding: 20px; color: #666;">Loading services...</p></div>

        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p style="grid-column: 1 / -1; text-align: center; padding: 20px; color: #666;">Loading models...</p></div>

        <div class="system-section-header">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2>Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
        </div>
        <div id="hardware-info-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px;">
            <p style="grid-column: 1 / -1; color: #666; font-size: 0.9em; margin: 0; text-align: center; padding: 20px;">Loading hardware info...</p>
        </div>

        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${Xe()}
        </div>
    `;async function we(){await Promise.all([nt(),kt(),_t()]),await ye()}var Qe=null,Ze=null,et=null;async function it(){try{return await(await I("/system_monitor")).json()}catch{return null}}async function tt(){try{return await(await I("/system/hardware")).json()}catch{return null}}async function At(){try{return await(await I("/processes")).json()}catch{return null}}async function It(){try{return await(await I("/analyst/status")).json()}catch{return null}}async function kt(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),a=document.getElementById("hardware-refresh-btn"),o=i=>{if(!i){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let n="",l=(i.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(n+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${l} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,i.CPU&&i.CPU.length>0){let g=i.CPU[0];n+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${g.LABEL}">${g.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${g.COUNT} Cores / ${g.THREADS} Threads</span>
                    </div>
                </div>`}if(i.GPU&&i.GPU.length>0&&i.GPU.forEach((g,h)=>{let y=(g.VRAM/1073741824).toFixed(1);n+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${h}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${g.LABEL}">${g.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${y} GB VRAM</span>
                        </div>
                    </div>`}),i.STORAGE&&i.STORAGE.length>0){let g=0,h=0;i.STORAGE.forEach(x=>{g+=x.USED,h+=x.SIZE});let y=(g/(1024*1024*1024)).toFixed(1),d=(h/(1024*1024*1024)).toFixed(1),b=h>0?(g/h*100).toFixed(0):0;n+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${y} / ${d} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${b>90?"#ff4d4d":"#00ff00"}; width: ${b}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=n};if(e&&a){a.dataset.listenerAttached||(a.onclick=async()=>{a.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let n=await tt();n?(o(n),a.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',a.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},a.dataset.listenerAttached="true");let i=e.querySelector("p");if(i&&i.textContent==="Loading hardware info..."){let n=await tt();o(n)}}if(!t)return;let s=await it();if(!s||!s.services){t.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}Qe=Date.now(),N(3,Qe);let r=s.services||[];Array.from(t.children).forEach(i=>{i.classList.contains("service-widget")||i.remove()});function c(i){return!i||i==="N/A"||i==="unknown"||i.trim()===""?"-":i}function f(i){if(!i||i==="N/A"||i==="unknown")return"-";let n=i.match(/^(\d+\.\d+\.\d+)/);return n?n[0]:i.split(".").slice(0,3).join(".")||"-"}function u(i){return!i||i.length<=28?i:i.substring(0,28)+"..."}function v(i){if(!i||i==="N/A"||i==="unknown")return"-";let n=i.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!n)return"-";let l=parseInt(n[1])||0,g=parseInt(n[2])||0,h=parseInt(n[3])||0,y=parseFloat(n[4])||0,d=l*86400+g*3600+h*60+y,b=Math.floor(d/86400);if(b>0)return`${b}d`;let x=Math.floor(d/3600);if(x>0)return`${x}h`;let k=Math.floor(d/60);return k>0?`${k}m`:`${Math.floor(d)}s`}function w(i){let n=i.status==="online",l=n?"service-widget-online":"service-widget-offline",g=n?"bx-check-circle":"bx-x-circle",h=n?"OK":"BAD",y=i.version?f(i.version.str):"-",d=i.cpu&&i.cpu!=="N/A"?i.cpu:"-",b=i.memory&&i.memory!=="N/A"?i.memory:"-",x=d!=="-"?"#00ff00":"#666",k=d!=="-"?"#fff":"#666",T=b!=="-"?"#00ff00":"#666",E=b!=="-"?"#fff":"#666",C=v(i.uptime),D="";return n?D=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${y}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${C}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${x};"></i>
                        <span style="color: ${k};">${d}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${T};"></i>
                        <span style="color: ${E};">${b}</span>
                    </div>
                </div>`:D='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${l}" data-service-id="${i.id}"><div class="service-widget-header"><i class="bx ${g}"></i><h3>${i.short_name||i.id}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${u(i.domain&&i.port?`${i.domain}:${i.port}`:"")}</span></div>${D}</div></div>`}let p=new Map(Array.from(t.querySelectorAll(".service-widget")).map(i=>[i.dataset.serviceId,i])),m=new Set(r.map(i=>i.id));for(let[i,n]of p)m.has(i)||n.remove();r.forEach(i=>{let n=w(i),l=p.get(i.id);l?l.outerHTML!==n&&(l.outerHTML=n):t.insertAdjacentHTML("beforeend",n)})}async function _t(){let t=document.getElementById("models-widgets");if(!t)return;let e=await it();if(!e){t.innerHTML=$("offline","Failed to load model status.");return}Ze=Date.now(),N(3,Ze);let a=e.models||[],o=e.whisper;Array.from(t.children).forEach(f=>{f.classList.contains("service-widget")||f.remove()});function s(f){let u=f.status==="Ready";return`
                <div class="service-widget ${u?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${u?"READY":"NOT FOUND"}</span>
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
                </div>`}function r(f){let u=f.status==="Downloaded",v=u?"service-widget-online":"service-widget-offline",w=u?"OK":"MISSING",p=u&&f.size>0?`${(f.size/1e9).toFixed(2)} GB`:"-",m=f.name;return f.type==="custom"&&m.endsWith(":latest")&&(m=m.replace(":latest","")),`<div class="service-widget ${v}" data-model-name="${f.name}"><div class="service-widget-header"><i class="bx ${u?"bx-check-circle":"bx-x-circle"}"></i><h3>${m}</h3><span class="service-widget-status">${w}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${f.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${p}</span></div></div></div>`}let c="";if(o&&(c+=s(o)),c+=a.map(r).join(""),!c){t.innerHTML=$("empty","No models found.");return}t.innerHTML!==c&&(t.innerHTML=c)}async function nt(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),a=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),s=document.getElementById("analyst-idle-val"),r=document.getElementById("analyst-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await I("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),nt()}catch{r.innerHTML="<i class='bx bx-error'></i> Failed"}},r.dataset.listenerAttached="true");let c=await It();if(c){let m=Math.floor(Date.now()/1e3),i=c.active_tier,n=(l,g,h)=>{if(i===h||h==="guardian"&&i==="tests"){l.textContent="Working",l.style.color="#bb86fc";return}let y=g-m;if(y<=0)l.textContent="Ready",l.style.color="#5eff5e";else{let d=Math.floor(y/60),b=y%60;l.textContent=`${d}m ${b}s`,l.style.color="#fff"}};if(e&&c.guardian&&n(e,c.guardian.next_run,"guardian"),a&&c.architect&&n(a,c.architect.next_run,"architect"),o&&c.strategist&&n(o,c.strategist.next_run,"strategist"),s&&c.system_idle_time!==void 0){let l=c.system_idle_time,g=Math.floor(l/60),h=l%60;s.textContent=`${g}m ${h}s`,l>300?s.style.color="#5eff5e":l>60?s.style.color="#ffa500":s.style.color="#fff"}}else[e,a,o,s].forEach(i=>{i&&(i.textContent="Offline",i.style.color="#ff4d4d")});let f=await At(),u=document.getElementById("vitals-processes-val");if(u)if(f){let m=f.length;u.textContent=m>0?`${m} Active`:"Idle",u.style.color=m>0?"#bb86fc":"#fff"}else u.textContent="-",u.style.color="#888";if(f===null){t.innerHTML=$("offline","Failed to load process status.");return}if(et=Date.now(),N(3,et),f.length===0){t.innerHTML=$("empty","No active processes."),R(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function v(m){let i=Math.floor(Date.now()/1e3-m.start_time),n=m.retries>0?`<span class="process-retry-badge">Retry ${m.retries}</span>`:"",l=m.channel_id,g={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return g[l]?l=g[l]:/^\d+$/.test(l)&&(l=`Channel ${l}`),`
                <div class="service-widget process-widget" data-channel-id="${m.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${l}</h3>
                        ${n}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${m.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${i}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${m.pid}</span>
                        </div>
                    </div>
                </div>`}let w=new Map(Array.from(t.querySelectorAll(".process-widget")).map(m=>[m.dataset.channelId,m])),p=new Set(f.map(m=>m.channel_id));for(let[m,i]of w)p.has(m)||i.remove();f.forEach(m=>{let i=v(m),n=w.get(m.channel_id);n?n.outerHTML!==i&&(n.outerHTML=i):t.insertAdjacentHTML("beforeend",i)}),R(3,f.length)}function Ee(){let t=se(),e=Me()||"master@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(_).map(s=>`
                    <div class="theme-card ${t===s?"active":""}" data-theme="${s}">
                        <div class="theme-preview theme-preview-${s.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${s}</h3>
                            <p>${s===_.AUTO?"Automatic theme selection.":s===_.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
            </div>`}function Se(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let r=this.dataset.theme;He(r),t.setContent(Ee()),Se(t)})});let a=document.getElementById("notifications-toggle");a&&(a.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=s=>{let r=s.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}var Dt="2.8.143",lt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Tier 1 Guardian Analyst technical sentry.",usage:"dex guardian",category:"cognitive",docs:{overview:"Guardian is the Technical Sentry of the ecosystem. It performs automated health checks and audits.",details:["Scans for service crashes and restarts.","Analyzes logs for high-severity errors.","Verifies system-wide resource availability.","Triggers immediate notifications if anomalies are detected."],extended_usage:"dex guardian [--force] [--quiet]"},demo_output:["\u2588 \x1B[1mGUARDIAN ANALYST\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Initializing Tier 1 Analysis..."," \u2699\uFE0F Fetching system context..."," \u2699\uFE0F Running Guardian Analysis...","","\x1B[32mNo significant insights found.\x1B[0m"," \u2699\uFE0F Resetting Guardian timer...","\x1B[32m\u2713 Guardian timer reset.\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
dex stop
dex restart`},demo_output:["\u2192 Restarting dex-event-service...","\x1B[32m\u2713\x1B[0m Service stopped (PID 19420)","\x1B[32m\u2713\x1B[0m Service started (PID 20155)","\u2192 Verifying health check (http://127.0.0.1:8100/status)...","\x1B[32m\u2713\x1B[0m Response received in 12ms.","","\x1B[1mService uptime: 4 seconds\x1B[0m"]},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the status of CLI and services.",usage:"dex status [service]",category:"system",docs:{overview:"The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.",details:["Reports status (online/offline/degraded).","Displays version strings and build hashes.","Shows network addresses and ports.","Validates internal service-to-service communication."],extended_usage:"dex status [service_id|all]"},demo_output:["\u2588 \x1B[1mSERVICE STATUS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE  ADDRESS          VERSION  BRANCH   COMMIT   STATUS   UPTIME           CPU      MEM","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500          \u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500      \u2500\u2500\u2500","cli      local            2.8.143  main     240fc38  \x1B[32mOK\x1B[0m       \x1B[90m--\x1B[0m               \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m","event    127.0.0.1:8100   2.8.198  main     a8f2b1c  \x1B[32mOK\x1B[0m       14h22m           0.2%     12.4 MB","discord  127.0.0.1:8300   2.8.68   main     6e2d1a4  \x1B[32mOK\x1B[0m       14h22m           0.1%     24.8 MB","tts      127.0.0.1:8200   0.0.25   main     f2e1d0c  \x1B[32mOK\x1B[0m       14h22m           0.0%     1.2 GB","web      127.0.0.1:8400   0.0.5    main     b1c2d3e  \x1B[32mOK\x1B[0m       14h22m           0.0%     42.1 MB","ollama   127.0.0.1:11434  0.5.4    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       4d12h            0.5%     8.4 GB","cache    127.0.0.1:6379   7.4.1    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       32d              0.1%     4.2 MB"]},{id:"logs",title:"Logs",icon:"bx-terminal",description:"View or tail service logs.",usage:"dex logs <service> [-f]",category:"system",docs:{overview:"Logs provides real-time observability into the background processes of the Dexter services.",details:["Tail live output from systemd services.","Support for following (-f) and history limiting.","ANSI color support for terminal readability.","Aggregated view for multi-instance deployments."],extended_usage:"dex logs <service_id> [-f]"},demo_output:["\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:05\x1B[0m [INFO] Joined voice channel: 1437617331...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:08\x1B[0m [DEBUG] VAD triggered by user oweneaster","\x1B[35m[EVENT]\x1B[0m   \x1B[90m14:30:09\x1B[0m [INFO] Emitted: messaging.user.speaking.started","\x1B[32m[TTS]\x1B[0m     \x1B[90m14:30:12\x1B[0m [INFO] Generating audio for 12 words...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:15\x1B[0m [SUCCESS] Audio playback completed.","\x1B[90m[Watching for new logs...]\x1B[0m"]},{id:"event",title:"Event",icon:"bx-broadcast",description:"Interact with the Event Service.",usage:"dex event [log|service|analyst|delete]",category:"system",docs:{overview:"The event bus interface for manual debugging and data extraction.",details:["Query the history of the system event log.","Manually reset analyst tier timers.","Filter events by type, service, or count.","Delete historical events matching patterns."],extended_usage:`dex event log [-n count] [-t type]
dex event analyst [status|reset]
dex event delete <pattern>`},demo_output:["\u2588 \x1B[1mLAST 20 EVENTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m14:42:01\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[38;5;208mCMD: dex guardian [] (success)\x1B[0m","\x1B[90m14:42:02\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[35m[INFO] Analysis complete: No significant insights found.\x1B[0m","\x1B[90m14:45:10\x1B[0m \x1B[90mdiscord        \x1B[0m | \x1B[34moweneaster: Dexter, run a system scan.\x1B[0m","\x1B[90m14:45:12\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[32mPROC+: system-cli-op (started)\x1B[0m","\x1B[90m14:45:15\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[31m[ERROR] Connection timeout to Redis.\x1B[0m"]},{id:"discord",title:"Discord",icon:"bx-bot",description:"Interact with the Discord Service.",usage:"dex discord [contacts|channels|service|quiet]",category:"system",docs:{overview:"Direct control over the Discord bot integration and audio engine.",details:["List all guild members and their permission levels.","Inspect channel structures and user presence.",'Toggle "Quiet Mode" for public interactions.',"Check raw service state and gateway health."],extended_usage:`dex discord contacts
dex discord quiet [on|off]`},demo_output:["\u2588 \x1B[1mDISCORD CONTACTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Fetching guild members...","","\u2588 Server: Easter Company (12 members) \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","LEVEL           USERNAME        STATUS   DISCORD ID","\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[35mDEXTER (ME)\x1B[0m     Dexter          \x1B[32monline\x1B[0m   \x1B[90m1313...0432\x1B[0m","\x1B[35mMASTER USER\x1B[0m     oweneaster      \x1B[32monline\x1B[0m   \x1B[90m3130...7920\x1B[0m","\x1B[31mADMIN\x1B[0m           Developer       \x1B[33midle\x1B[0m     \x1B[90m4242...8181\x1B[0m","\x1B[37mUSER\x1B[0m            GuestUser       \x1B[90moffline\x1B[0m  \x1B[90m9999...9999\x1B[0m"]},{id:"ollama",title:"Ollama",icon:"bx-brain",description:"Run the system 'ollama' executable or sync models.",usage:"dex ollama [pull|sync|list]",category:"system",docs:{overview:"Proxy command for managing local LLMs and neural vision models.",details:["Wraps the system ollama binary.","Added 'pull' subcommand to sync all Dexter-required models.","Synchronizes custom model templates automatically.","Validates model weight checksums."],extended_usage:`dex ollama pull
dex ollama run gemma3:12b`},demo_output:["\x1B[34m[OLLAMA]\x1B[0m Synchronizing custom Dexter models...","Pulling base models...","Pulling gemma3:12b... \x1B[32m[100%]\x1B[0m","\x1B[32m\u2713 Successfully pulled model: gemma3:12b\x1B[0m","Creating custom Dexter models...","  Rebuilding dex-analyst-guardian from gpt-oss:20b...","\x1B[32m\u2713   Created dex-analyst-guardian\x1B[0m","\x1B[32m\u2713 Ollama models are up-to-date.\x1B[0m"]},{id:"system",title:"System Info",icon:"bx-info-square",description:"Show system info and manage packages.",usage:"dex system [info|scan|validate|install]",category:"system",docs:{overview:"Performance observability tool focused on AI resource availability.",details:["Scans and reports CPU, GPU, RAM, and Storage vitals.","Validates presence of required system packages.","Handles automatic installation of missing dependencies.","Exports telemetry data in JSON format."],extended_usage:`dex system scan
dex system validate
dex system install <package>`},demo_output:["\u2588 \x1B[1mSYSTEM CONFIGURATION\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Category        Value","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500","CPU (Generic)   Cores: 16, Threads: 32","                Avg Clock: 4.20 GHz","GPU 0           NVIDIA GeForce RTX 4090, VRAM: 24.0 GB, CUDA: 1204","Memory          64.0 GB","Storage         2.0 TB (1 devices)","                /dev/nvme0n1p3: 450.2 GB / 1862.4 GB (/)","Packages        ","                \x1B[32m\u2713 12 checks passed\x1B[0m"]},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Show service config or a specific field.",usage:"dex config <service> [field...]",category:"system",docs:{overview:"Manages the central registry that defines service interaction.",details:["View service definitions (domains, ports, IDs).","Modify environment-specific parameters.","Update authentication secrets and API endpoints.","Supports JSON path traversal for deep fields."],extended_usage:`dex config <service> [field]
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Mt=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
                <p class="cli-install-note">Installs the latest pre-built binary for Linux/macOS and configures your environment.</p>
            </div>

            <div class="cli-divider">
                <i class='bx bx-chevron-down'></i>
                <span>Interactive Demos (v${Dt})</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;for(let[a,o]of Object.entries(t)){let s=lt.filter(r=>r.category===a);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${o.icon}' style="color: ${o.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${o.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(r=>`
                        <div class="cli-command-card ${r.dummy?"dummy":""}" data-cmd="${r.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${o.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${r.icon}' style="font-size: 2em; color: ${o.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${r.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${r.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${o.color}; position: relative; z-index: 1;">
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
                <a href="/dex/contribute" target="_blank" class="notif-action-btn active">Contribute on GitHub</a>
            </div>
            <div class="cli-contribute-card">
                <i class='bx bxl-discord-alt'></i>
                <h3>For Users</h3>
                <p>Join our Discord to stay updated, suggest new features, and interact with the community using the Dexter engine.</p>
                <a href="https://discord.gg/eastercompany" target="_blank" class="notif-action-btn active">Join Discord</a>
            </div>
        </div>
    </div>`,e},Te=!1;function Bt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>at(),document.getElementById("terminal-action-btn").onclick=()=>at());let a=document.getElementById("cli-terminal-body"),o=document.getElementById("cli-docs-pane");a.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return o.innerHTML=`
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
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Te=!0,a}function at(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Te=!1}function ot(t,e,a="output"){if(!Te)return;let o=document.createElement("div");o.className=`terminal-line terminal-${a}`,a==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=le(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function Nt(t){let e=lt.find(s=>s.id===t);if(!e)return;let a=Bt(e);ot(a,`dex ${t}`,"prompt");let o=e.demo_output||["Executing command...","\u2713 Done."];for(let s of o){await new Promise(c=>setTimeout(c,400+Math.random()*600));let r="output";s.includes("[ERROR]")?r="error":s.includes("[SUCCESS]")||s.includes("\u2713")?r="success":s.includes("!")&&(r="warning"),ot(a,s,r)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function rt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Mt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let a=e.querySelector("code").textContent;navigator.clipboard.writeText(a).then(()=>{let o=e.querySelector("i");o.className="bx bx-check",o.style.color="#5eff5e",setTimeout(()=>{o.className="bx bx-copy",o.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(a=>{a.addEventListener("mouseenter",()=>{a.style.transform="translateY(-5px)",a.style.borderColor="rgba(255,255,255,0.15)",a.style.backgroundColor="rgba(255,255,255,0.05)"}),a.addEventListener("mouseleave",()=>{a.style.transform="translateY(0)",a.style.borderColor="rgba(255,255,255,0.05)",a.style.backgroundColor="rgba(255,255,255,0.03)"}),a.addEventListener("click",()=>{let o=a.dataset.cmd;Nt(o)})})}async function Ht(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${be()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function ct(){Ht(),Oe(),Ae();let t=window.location.pathname;(t==="/dex"||t==="/dex/"||t.includes("/dex/index.html"))&&!t.includes("/contribute")&&rt();let e=De();Ie(e),ke();let a=window.location.pathname==="/"||window.location.pathname==="/index.html",o=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!a&&!o&&document.querySelector("footer")?.classList.add("hide");let s=[],r=document.getElementById("windows-container");r&&r.setAttribute("data-count","0");function c(){return window.innerWidth>=1900?2:1}function f(){let l=c();for(;s.length>l;)s.shift().close(!0);let g=document.getElementById("windows-container"),h=document.querySelector("nav"),y=document.querySelector("footer"),d=window.location.pathname.includes("/dex"),b=window.location.pathname.includes("404")||!!document.getElementById("error-main-view"),x=window.location.pathname==="/"||window.location.pathname==="/index.html";g&&g.setAttribute("data-count",s.length);let k=s.length>1||s.length===1&&window.innerWidth<1200;s.forEach(E=>{let C=document.getElementById(E.id);C&&(s.length===1?C.classList.add("hide-close"):C.classList.remove("hide-close"))});let T={"feed-window":"feed-icon","monitor-window":"monitor-icon","workspace-window":"workspace-icon","settings-window":"settings-icon"};Object.values(T).forEach(E=>document.getElementById(E)?.classList.remove("active")),s.forEach(E=>{let C=T[E.id];C&&document.getElementById(C)?.classList.add("active")}),te(se(),!1,s.length>0),s.length>0?(y?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),h?.classList.add("window-open"),k?g&&(g.style.paddingTop="60px"):g&&(g.style.paddingTop="100px")):(h?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),g&&(g.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),x||b?y?.classList.remove("hide"):y?.classList.add("hide"))}function u(l){if(l.isOpen()){l.close();return}let g=c();s.length>=g&&s.shift().close(!0),s.push(l),l.open(),f()}function v(){[...s].forEach(g=>g.close()),s=[]}window.addEventListener("resize",f);let w=G({id:"feed-window",icon:"bx-news",tabs:[{icon:"bx-bell",title:"Notifications",content:Pe()},{icon:"bx-calendar-event",title:"Events",content:Ye()}],onOpen:()=>{F(),X()},onClose:()=>{let l=s.indexOf(w);l>-1&&s.splice(l,1),f()}}),p=G({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bx-server",title:"System",content:st()},{icon:"bx-book-content",title:"Contacts",content:We()}],onOpen:()=>{we(),xe()},onClose:()=>{let l=s.indexOf(p);l>-1&&s.splice(l,1),f()}}),m=G({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:Ge(),onOpen:()=>he(),onClose:()=>{let l=s.indexOf(m);l>-1&&s.splice(l,1),f()}}),i=G({id:"settings-window",title:"Settings",icon:"bx-cog",content:Ee(),onOpen:()=>Se(i),onClose:()=>{let l=s.indexOf(i);l>-1&&s.splice(l,1),f()}}),n=G({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dex/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});e?(document.getElementById("feed-icon")?.addEventListener("click",()=>u(w)),document.getElementById("monitor-icon")?.addEventListener("click",()=>u(p)),document.getElementById("workspace-icon")?.addEventListener("click",()=>u(m)),document.getElementById("settings-icon")?.addEventListener("click",()=>u(i)),document.getElementById("close-all-windows")?.addEventListener("click",()=>v()),setInterval(()=>{w.isOpen()&&(F(),X()),p.isOpen()&&we(),m.isOpen()&&he()},5e3)):document.getElementById("login-btn")?.addEventListener("click",()=>{n.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",l=>{l.preventDefault();try{Be(document.getElementById("email-input").value),window.location.reload()}catch(g){let h=document.getElementById("login-error");h&&(h.textContent=g.message,h.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ct):ct();})();
