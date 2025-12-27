(()=>{function _e(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ae(t=!1){let a=`
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
            <i class='bx bx-x-circle' id="close-all-windows" title="Close All Windows" style="color: #ff4444; margin-left: 10px; opacity: 0.6;"></i>
        </div>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,n=document.createElement("nav");n.innerHTML=a,document.body.prepend(n)}function Ie(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Me=1e3;function W(t){let e=null,a=t.onClose||null,n=t.onOpen||null;function o(){e&&(e.style.zIndex=++Me)}function r(){if(e){e.classList.add("open"),o(),window.addEventListener("resize",c),n&&setTimeout(n,10);return}let p=document.getElementById("windows-container");p||(p=document.createElement("div"),p.id="windows-container",p.className="windows-container",document.body.appendChild(p)),e=document.createElement("div"),e.id=t.id,e.className="window",e.style.zIndex=++Me,e.addEventListener("mousedown",o);let m=t.icon||"bx-window",i="",s="",l;t.tabs&&t.tabs.length>0?(i=`<div class="tab-bar">${t.tabs.map((w,d)=>{let v=w.icon?`<i class="bx ${w.icon}"></i>`:`<span class="tab-glyph">${w.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${d===0?"active":""}" data-tab-index="${d}">
                        ${v}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${d}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,l=`<div class="window-content">${t.tabs.map((w,d)=>`<div class="tab-content ${d===0?"active":""}" data-tab-content="${d}">${w.content}</div>`).join("")}</div>`):(t.title&&(s=`<div class="window-title">${t.title}</div>`),l=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${m}"></i>
                ${i}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
            ${l}
        `,p.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",b=>{b.stopPropagation(),u()}),window.addEventListener("resize",c),t.tabs&&e.querySelectorAll(".tab").forEach(b=>{b.addEventListener("click",()=>{let x=b.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),b.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${x}"]`).classList.add("active"),g(b,e)})}),setTimeout(()=>{e.classList.add("open"),n&&n()},10)}function c(){if(!e||!e.classList.contains("open"))return;let p=e.querySelector(".tab.active");p&&g(p,e)}function g(p,m){setTimeout(()=>{let i=m.querySelector(".tab-bar");if(!i)return;let s=Array.from(i.querySelectorAll(".tab")),l=s.indexOf(p),b=i.clientWidth,x=s[Math.max(0,l-2)],w=s[Math.min(s.length-1,l+2)],d=x.offsetLeft-i.offsetLeft-25,h=w.offsetLeft+w.offsetWidth-i.offsetLeft+25-d,_=h<=b?d-(b-h)/2:p.offsetLeft-i.offsetLeft-b/2+p.offsetWidth/2;i.scrollTo({left:_,behavior:"smooth"})},350)}function u(p=!1){e&&(window.removeEventListener("resize",c),p?(e.remove(),e=null):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e?.remove(),e=null},400)))}function f(p){let m=e?.querySelector(".window-content");m&&(m.innerHTML=p)}function y(){return e&&e.classList.contains("open")}return{open:r,close:u,setContent:f,isOpen:y,focus:o,id:t.id}}function Be(){return!0}function De(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Ne(t){localStorage.setItem("easter_user_email",t.trim())}var He="easter_theme",B={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ve(){return localStorage.getItem(He)||B.AUTO}function pt(){let t=window.innerWidth,e=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?B.ANIMATED:(t===1920&&e===1080&&a||t<=1920||e<=1080,B.DEFAULT)}function Oe(t){if(!Object.values(B).includes(t))throw new Error("Invalid theme");localStorage.setItem(He,t),ge(t)}function ge(t,e=!1){let a=document.body,n=t===B.AUTO?pt():t;if(e||(a.classList.add("theme-transitioning"),setTimeout(()=>{a.classList.remove("theme-transitioning")},300)),Object.values(B).forEach(o=>{a.classList.remove(`theme-${o}`)}),a.classList.add(`theme-${t}`),n===B.ANIMATED){if(!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else{let o=document.querySelector(".background");o&&(e?o.remove():(o.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{o.remove()},400)))}}function Pe(){let t=ve();if(ge(t,!0),t===B.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{ge(B.AUTO)},300)})}}function S(t,e,a=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${o} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function C(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function D(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let n=Date.now(),o=Math.floor((n-e)/1e3),r;o<60?r=`${o}s ago`:o<3600?r=`${Math.floor(o/60)}m ago`:r=`${Math.floor(o/3600)}h ago`,a.textContent=`Last updated: ${r}`}function P(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let n=a.querySelector(".notification-badge");n&&(e>0?(n.textContent=e>9?"9+":e,n.style.display="flex"):n.style.display="none")}function ne(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;P(0,e)}function be(){return"https://event.easter.company"}function mt(){return"https://discord.easter.company"}var ut="http://127.0.0.1:8100",ft="http://127.0.0.1:8300",gt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function ae(t){let e=C(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(o,r)=>{let c=gt[r];return c?`<span class="${c}">`:""});let a=(e.match(/<span/g)||[]).length,n=(e.match(/<\/span/g)||[]).length;return a>n&&(e+="</span>".repeat(a-n)),e}var G=null,V=null,se=!1,ie=!1;async function T(t,e={}){if(G)try{let o=await fetch(G+t,e);if(o.ok)return o;G=null}catch{G=null}let a=be(),n=ut;try{let o=await fetch(a+t,e);if(o.ok)return G=a,se&&(console.log("\u2728 Production event service restored."),se=!1),o;throw new Error("Primary failed")}catch{se||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${n}`),se=!0);try{let r=await fetch(n+t,e);if(r.ok)return G=n,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function ze(t,e={}){if(V)try{let o=await fetch(V+t,e);if(o.ok)return o;V=null}catch{V=null}let a=mt(),n=ft;try{let o=await fetch(a+t,e);if(o.ok)return V=a,ie&&(console.log("\u2728 Production discord service restored."),ie=!1),o;throw new Error("Primary failed")}catch{ie||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${n}`),ie=!0);try{let r=await fetch(n+t,e);if(r.ok)return V=n,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Ue=()=>`
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
`,oe=null,R=new Set,le=[];async function j(t=!1){let e=document.getElementById("notifications-list");if(!e)return;vt(),t&&(e.innerHTML="<p>Updating...</p>");let a="/events?ml=1000&format=json&event.type=system.notification.generated";try{let n=await T(a);if(!n.ok)throw new Error("Service is offline or unreachable.");let r=(await n.json()).events||[];oe=Date.now(),D(0,oe);let c=Date.now(),g=24*60*60*1e3,u=r.filter(d=>{let v=localStorage.getItem(`notification_read_ts_${d.id}`);if(!v)return!0;let h=parseInt(v);return c-h<g});u.sort((d,v)=>{let h=N=>{let A=N.event;if(typeof A=="string")try{A=JSON.parse(A)}catch{return"low"}return(A.priority||"low").toLowerCase()},_=N=>N==="critical"?4:N==="high"?3:N==="medium"?2:1,$=_(h(d)),E=_(h(v));return $!==E?E-$:v.timestamp-d.timestamp}),le=u;let f=d=>{let v=d.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return"low"}return(v.priority||"low").toLowerCase()},y=[],m=new Set(u.map(d=>f(d))).size>1;if(u.length>0){let d=null;u.forEach(v=>{let h=f(v);m&&h!==d&&(y.push({id:`divider-${h}`,type:"divider",label:h.toUpperCase()}),d=h),y.push(v)})}if(t&&(e.innerHTML=""),u.length===0){e.innerHTML=S("empty","No notifications yet."),ne();return}let i=d=>{let v=d.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return null}let h=v.title||"Untitled Notification",_=v.body||"No description provided.",$=v.priority||"low",E=!!v.alert,N=v.category||"system",A=v.related_event_ids||[],O=!!localStorage.getItem(`notification_read_ts_${d.id}`),z=new Date(d.timestamp*1e3),I=z.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=z.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),k=O?"event-border-grey":"event-border-blue";!O&&E&&(k="event-border-red"),O&&($==="high"||$==="critical")?k="event-border-red":O&&$==="medium"&&(k="event-border-orange");let H=O?"notification-read":"notification-unread",M=R.has(d.id),pe=M?"expanded":"",me=M?"display: block;":"display: none;",ke="",Se="";A.length>0&&(Se=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${A.map(Q=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Q.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),ke=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${$==="high"||$==="critical"?"#ff4d4d":$==="medium"?"#ffa500":"#888"}">${$.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${C(_)}</p>
                </div>
                ${Se}
            `;let U=document.createElement("div");U.className=`event-item notification-item ${k} ${H} ${pe} cursor-pointer`,U.dataset.notificationId=d.id,U.onclick=function(Q){if(this.classList.contains("expanded")){this.classList.remove("expanded"),R.delete(d.id);let ee=this.querySelector(".event-details");ee&&(ee.style.display="none")}else{this.classList.add("expanded"),R.add(d.id);let ee=this.querySelector(".event-details");if(ee&&(ee.style.display="block"),!localStorage.getItem(`notification_read_ts_${d.id}`)){localStorage.setItem(`notification_read_ts_${d.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let fe="event-border-grey";$==="high"||$==="critical"?fe="event-border-red":$==="medium"&&(fe="event-border-orange"),this.classList.add(fe),ne()}}};let Ht=h,dt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[N]||"bx-bell";U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${I}</span>
                    <span class="event-date">${L}</span>
                </div>
                <div class="event-icon"><i class='bx ${dt}'></i></div>
                <div class="event-content">
                    <div class="event-service">${N.toUpperCase()} ${E?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${h}</div>
                    <div class="event-details" style="${me}">
                        <div class="event-details-header">
                            <h4>${E?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${ke}
                    </div>
                </div>
            `;let Ce=U.querySelector(".close-details-btn");return Ce&&Ce.addEventListener("click",Q=>{Q.stopPropagation(),U.classList.remove("expanded");let ue=U.querySelector(".event-details");ue&&(ue.style.display="none"),R.delete(d.id)}),U},s=d=>{let v=document.createElement("div");v.className="notification-divider",v.dataset.notificationId=d.id;let h="#888888";return d.label==="CRITICAL"?h="#ff4d4d":d.label==="HIGH"?h="#ff8888":d.label==="MEDIUM"&&(h="#ffa500"),v.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${h}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,v.innerHTML=`<span style="white-space: nowrap;">${d.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${h}44, transparent); flex-grow: 1;"></div>`,v},l=Array.from(e.children),b=new Map(l.map(d=>[d.dataset.notificationId,d])),x=new Set(y.map(d=>d.id));l.forEach(d=>{let v=d.dataset.notificationId;(!v||!x.has(v))&&d.remove()});let w=null;y.forEach((d,v)=>{let h=b.get(d.id);(!h||t)&&(h&&h.remove(),d.type==="divider"?h=s(d):h=i(d),!h)||(v===0?e.firstElementChild!==h&&e.prepend(h):w&&w.nextElementSibling!==h&&w.after(h),w=h)}),oe=Date.now(),D(0,oe),ne()}catch(n){console.error("Error fetching notifications:",n),e.children.length===0&&(e.innerHTML=S("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function vt(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),a=document.getElementById("notif-close-all"),n=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{le.forEach(o=>{localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),j(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{le.forEach(o=>{R.add(o.id),localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),j(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{R.clear(),j(!0)},a.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{let o=Date.now()-1728e5;le.forEach(r=>{localStorage.setItem(`notification_read_ts_${r.id}`,o.toString())}),R.clear(),j(!0)},n.dataset.listenerAttached="true")}var Re=()=>`
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
`,q=new Set,je=[],J=null;async function F(t=!1){let e=document.getElementById("roadmap-list");if(e){bt();try{let a=await T("/roadmap");if(!a.ok)throw new Error("Offline");let n=await a.json();if(je=n,n.length===0){e.innerHTML=S("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let o=f=>{let y=q.has(f.id),p=f.state==="draft",m=f.state==="published",i=f.state==="consumed",s="event-border-grey";m&&(s="event-border-blue"),i&&(s="event-border-purple");let b=new Date(f.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),x=document.createElement("div");x.className=`event-item notification-item ${s} cursor-pointer ${y?"expanded":""}`,x.dataset.itemId=f.id,x.onclick=d=>{if(d.target.closest("button"))return;x.classList.contains("expanded")?(x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",q.delete(f.id)):(x.classList.add("expanded"),x.querySelector(".event-details").style.display="block",q.add(f.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${f.state.toUpperCase()}]</span>`;return x.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${b.split(",")[1]}</span>
          <span class="event-date">${b.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${C(f.content)}</div>
          <div class="event-details" style="${y?"display: block;":"display: none;"} ">
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
            ${i?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(f.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,x.querySelector(".edit-btn")?.addEventListener("click",()=>yt(f)),x.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>ht(f)),x.querySelector(".delete-btn")?.addEventListener("click",()=>xt(f.id)),x.querySelector(".close-details-btn")?.addEventListener("click",d=>{d.stopPropagation(),x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",q.delete(f.id)}),x},r=Array.from(e.children),c=new Map(r.map(f=>[f.dataset.itemId,f])),g=new Set(n.map(f=>f.id));r.forEach(f=>{let y=f.dataset.itemId;(!y||!g.has(y))&&f.remove()});let u=null;n.forEach((f,y)=>{let p=c.get(f.id);(!p||t)&&(p&&p.remove(),p=o(f),!p)||(y===0?e.firstElementChild!==p&&e.prepend(p):u&&u.nextElementSibling!==p&&u.after(p),u=p)})}catch{e.innerHTML=S("error","Failed to load roadmap.")}}}function bt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),n=document.getElementById("roadmap-expand-all"),o=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{J=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",J=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input").value;if(!r.trim())return;let c=J?`/roadmap/${J}`:"/roadmap",g=J?"PATCH":"POST";try{await T(c,{method:g,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})}),document.getElementById("roadmap-editor-container").style.display="none",F(!0)}catch(u){console.error(u)}},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{je.forEach(r=>q.add(r.id)),F(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{q.clear(),F(!0)},o.dataset.listenerAttached="true")}function yt(t){J=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function ht(t){let e=t.state==="published"?"draft":"published";try{await T(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),F(!0)}catch(a){console.error(a)}}async function xt(t){if(confirm("Delete this roadmap item?"))try{await T(`/roadmap/${t}`,{method:"DELETE"}),q.delete(t),F(!0)}catch(e){console.error(e)}}var Fe=()=>`
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
`,qe=null,K=new Set,We=[];async function re(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;wt();let a="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let n=await T(a);if(!n.ok)throw new Error("Service is offline or unreachable.");let r=(await n.json()).events||[];if(We=r,qe=Date.now(),D(2,qe),r.length===0){e.innerHTML=S("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),P(1,0);return}t&&(e.innerHTML="");let c=p=>{let m=p.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let i=m.title||"Untitled Blueprint",s=m.summary||m.body||"No summary provided.",l=m.content||"",b=m.category||"architecture",x=m.affected_services||[],w=m.implementation_path||[],d=new Date(p.timestamp*1e3),v=d.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),h=d.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),_=K.has(p.id),$=_?"display: block;":"display: none;",E=document.createElement("div");E.className=`event-item notification-item event-border-purple cursor-pointer ${_?"expanded":""}`,E.dataset.blueprintId=p.id;let A={architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[b]||"bx-paint";E.onclick=function(I){if(this.classList.contains("expanded")){this.classList.remove("expanded"),K.delete(p.id);let k=this.querySelector(".event-details");k&&(k.style.display="none")}else{this.classList.add("expanded"),K.add(p.id);let k=this.querySelector(".event-details");k&&(k.style.display="block")}};let Z=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",O="";w.length>0&&(O=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(I=>`<li>${C(I)}</li>`).join("")}
                        </ul>
                    </div>
                `),E.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${v}</span>
                    <span class="event-date">${h}</span>
                </div>
                <div class="event-icon"><i class='bx ${A}'></i></div>
                <div class="event-content">
                    <div class="event-service">${b.toUpperCase()}</div>
                    <div class="event-message">${i}</div>
                    <div class="event-details" style="${$}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${C(s)}
                        </div>
                        ${Z}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${C(l)}</p>
                        </div>
                        ${O}
                    </div>
                </div>
            `;let z=E.querySelector(".close-details-btn");return z&&z.addEventListener("click",I=>{I.stopPropagation(),E.classList.remove("expanded");let L=E.querySelector(".event-details");L&&(L.style.display="none"),K.delete(p.id)}),E},g=Array.from(e.children),u=new Map(g.map(p=>[p.dataset.blueprintId,p])),f=new Set(r.map(p=>p.id));g.forEach(p=>{let m=p.dataset.blueprintId;(!m||!f.has(m))&&p.remove()});let y=null;r.forEach((p,m)=>{let i=u.get(p.id);(!i||t)&&(i&&i.remove(),i=c(p),!i)||(m===0?e.firstElementChild!==i&&e.prepend(i):y&&y.nextElementSibling!==i&&y.after(i),y=i)}),P(2,r.length)}catch(n){console.error("Error fetching blueprints:",n),e.children.length===0&&(e.innerHTML=S("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function wt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{We.forEach(a=>K.add(a.id)),re(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{K.clear(),re(!0)},e.dataset.listenerAttached="true")}var Ge=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
            </div>
            ${Re()}
        </div>

        <div class="blueprints-section">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-paint' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
            </div>
            ${Fe()}
        </div>
    </div>
`;async function ye(){await Promise.all([F(),re()])}var Je=()=>`
    <div class="notifications-actions">
        <button id="contacts-refresh" class="notif-action-btn"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
        <div class="tab-placeholder">
            <i class='bx bx-book-content placeholder-icon'></i>
            <p class="placeholder-message">Loading contacts...</p>
        </div>
    </div>
`,Ve=null;async function he(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>he(),e.dataset.listenerAttached="true");try{let a=await ze("/contacts");if(!a.ok)throw new Error("Service unreachable");let o=(await a.json()).members||[];if(Ve=Date.now(),D(4,Ve),o.length===0){t.innerHTML=S("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,"Master User":1,Admin:2,Moderator:3,Contributor:4,User:5,Anyone:6};o.sort((c,g)=>{let u=r[c.level]??10,f=r[g.level]??10;return u!==f?u-f:c.username.localeCompare(g.username)}),t.innerHTML=o.map(c=>{let g=c.color?"#"+c.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",u=c.status==="online"?"#5eff5e":c.status==="idle"?"#ffa500":c.status==="dnd"?"#ff4d4d":"#666",f="#888";c.level==="Me"||c.level==="Master User"?f="#bb86fc":c.level==="Admin"?f="#cf6679":c.level==="Moderator"?f="#03dac6":c.level==="Contributor"&&(f="#ffa500");let y=c.level==="Me",p=y?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",m=y?"2px solid #bb86fc":`1px solid ${g}33`;return`
                <div class="user-profile-section" style="background: ${p}; padding: 15px; border-radius: 8px; border: ${m}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${y?"#bb86fc":g}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${c.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${y?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${u}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${f}; font-weight: 600; text-transform: uppercase;">${y?"DEXTER (ME)":c.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${c.id}</p>
                    </div>
                </div>
            `}).join(""),P(4,o.filter(c=>c.status!=="offline").length)}catch{t.innerHTML=S("offline","Failed to fetch contacts.","The Discord service may be offline.")}}var Et={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Ke(t,e){let a=Et[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!a)return t;let n=a.replace(/\{(\w+)\}/g,(o,r)=>e[r]!==void 0&&e[r]!==null?e[r]:o);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(n+=` (Translation: ${e.english_translation})`),n}var Xe=()=>`
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
`,ce=null,Y=new Set,te=[],de="all",$t={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},Lt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ye(t){for(let[e,a]of Object.entries($t))if(a.includes(t))return e;return"system"}function Tt(t){return Lt[t]||"bx-square-rounded"}async function X(t=!1){let e=document.getElementById("events-timeline");if(!e)return;kt();let n=`/events?ml=${de==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let o=await T(n);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[],g=c;if(de!=="all"&&(g=c.filter(i=>{let s=i.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return!1}return Ye(s.type)===de})),te=g.slice(0,50),ce=Date.now(),D(1,ce),te.length===0){e.innerHTML=S("empty","No events found for this filter.");return}t&&(e.innerHTML="");let u=i=>{let s=i.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let l=s.type,b=Ye(l),x=Tt(l),w=l==="engagement.decision"||l==="messaging.bot.sent_message"||l==="messaging.user.sent_message"||l==="moderation.explicit_content.deleted"||l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.cli.command"||l==="system.analysis.audit"||l==="system.test.completed"||l==="error_occurred"||l==="system.cli.status"||l.startsWith("system.roadmap")||l.startsWith("system.process"),d="event-border-grey";w&&(l==="moderation.explicit_content.deleted"||l==="error_occurred"?d="event-border-red":l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.analysis.audit"?d="event-border-purple":l==="system.cli.command"||l==="system.cli.status"?d="event-border-orange":l==="system.test.completed"?d=s.test?.status==="OK"&&s.lint?.status==="OK"&&s.format?.status==="OK"?"event-border-blue":"event-border-red":d="event-border-blue");let v=w?"cursor-pointer":"",h=Y.has(i.id),_=h?"expanded":"",$=h?"display: block;":"display: none;",E=new Date(i.timestamp*1e3),N=E.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=E.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),Z=Ke(l,s),O=s.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${s.user_level})</span>`:"",z="";if(w){let L="";if(l==="engagement.decision")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${s.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${s.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${s.engagement_raw||"None"}</pre>
                        </div>
                    `;else if(l==="messaging.bot.sent_message")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${s.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${s.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${s.response_raw||"None"}</pre>
                        </div>
                    `;else if(l==="moderation.explicit_content.deleted")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${s.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${C(s.raw_output)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.link.completed")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${s.url}" target="_blank" class="attachment-link">${s.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${C(s.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${C(s.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${C(s.summary)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.visual.completed"){let k="";s.base64_preview?k=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${s.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:s.url&&(k=`<div class="event-detail-block"><img src="${s.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${s.filename}</span>
                        </div>
                        ${k}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${C(s.description)||"None"}</pre>
                        </div>
                    `}else if(l==="system.cli.command")L=`
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
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${s.exit_code!==void 0?s.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${C(s.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(l==="system.analysis.audit")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${s.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${s.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${C(s.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${C(s.raw_input)}</pre>
                        </div>
                    `;else if(l==="system.test.completed")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${s.service_name}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${s.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Format:</span>
                            <pre class="detail-pre">${s.format?.status||"N/A"}: ${s.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Lint:</span>
                            <pre class="detail-pre">${s.lint?.status||"N/A"}: ${s.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Tests:</span>
                            <pre class="detail-pre">${s.test?.status||"N/A"}: ${s.test?.details||s.test?.message||"OK"}</pre>
                        </div>
                    `;else if(l==="error_occurred")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${s.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${C(s.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(s.context||{},null,2)}</pre>
                        </div>
                    `;else if(l==="system.cli.status")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${s.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${C(s.message)}</pre>
                        </div>
                    `;else if(l==="messaging.user.sent_message"){let k="";s.attachments&&s.attachments.length>0&&(k=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${s.attachments.map(M=>{let pe=M.content_type&&M.content_type.startsWith("image/"),me=(M.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${pe?`<div class="attachment-thumb-container"><img src="${M.url}" alt="${M.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${M.url}" target="_blank" class="attachment-link">${M.filename}</a>
                                        <span class="attachment-meta">${M.content_type} \u2022 ${me}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${s.content||"(empty)"}</pre>
                        </div>
                        ${k}
                    `}z=`
                    <div class="event-details" style="${$}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${L}
                    </div>
                `}let I=document.createElement("div");if(I.className=`event-item ${d} ${v} ${_}`,I.dataset.eventId=i.id,I.onclick=function(L){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(i.id);let H=this.querySelector(".event-details");H&&(H.style.display="none")}else{this.classList.add("expanded"),Y.add(i.id);let H=this.querySelector(".event-details");H&&(H.style.display="block")}},I.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${N}</span>
                    <span class="event-date">${A}</span>
                </div>
                <div class="event-icon"><i class='bx ${x}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${b}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${b}</span>
                        ${i.service} ${O}
                    </div>
                    <div class="event-message">${Z}</div>
                    ${z}
                </div>
            `,w){let L=I.querySelector(".close-details-btn");L&&L.addEventListener("click",k=>{k.stopPropagation();let H=k.target.closest(".event-item");if(H){H.classList.remove("expanded"),Y.delete(i.id);let M=H.querySelector(".event-details");M&&(M.style.display="none")}})}return I},f=Array.from(e.children),y=new Map(f.map(i=>[i.dataset.eventId,i])),p=new Set(te.map(i=>i.id));f.forEach(i=>{let s=i.dataset.eventId;(!s||!p.has(s))&&i.remove()});let m=null;te.forEach((i,s)=>{let l=y.get(i.id);(!l||t)&&(l&&l.remove(),l=u(i),!l)||(s===0?e.firstElementChild!==l&&e.prepend(l):m&&m.nextElementSibling!==l&&m.after(l),m=l)}),ce=Date.now(),D(1,ce)}catch(o){console.error("Error fetching events:",o),e.children.length===0&&(e.innerHTML=S("offline","Failed to load events.","The event service may be offline or unreachable."))}}function kt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),a=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{te.forEach(n=>Y.add(n.id)),X(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),X(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.querySelectorAll(".filter-btn").forEach(n=>{n.onclick=()=>{a.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),n.classList.add("active"),de=n.dataset.filter,X(!0)}}),a.dataset.listenerAttached="true")}function Ze(){return`
        <div id="logs-container" class="logs-container">
            <div class="tab-placeholder">
                <i class='bx bx-terminal placeholder-icon'></i>
                <p class="placeholder-message">Loading logs...</p>
            </div>
        </div>
    `}var St=null;async function xe(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await T("/logs");if(!e.ok)throw new Error("Logs offline");let a=await e.json();if(!a||a.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let n=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],o=a.filter(c=>!n.includes(c.id));o.forEach(c=>{c.logs&&Array.isArray(c.logs)?c.logs.reverse():c.logs=[]}),o.reverse();let r=o.map(c=>{let g=c.logs.join(`
`),u=[...c.logs];if(u.length<25){let y=25-u.length;for(let p=0;p<y;p++)u.push("")}else u.length>25&&(u=u.slice(-25));let f=u.map(y=>ae(y)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${c.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(g)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${c.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${f}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(c=>{c.addEventListener("click",()=>{let g=unescape(c.dataset.logs);navigator.clipboard.writeText(g).then(()=>{let u=c.querySelector("i");u.classList.remove("bx-copy"),u.classList.add("bx-check"),setTimeout(()=>{u.classList.remove("bx-check"),u.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(c=>{c.addEventListener("click",async()=>{let g=c.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${g}?`))try{(await T(`/logs?service_id=${g}`,{method:"DELETE"})).ok&&xe()}catch(u){console.error("Error clearing logs:",u)}})}),St=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var it=()=>`
        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-zap' style="color: #bb86fc;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Analyst & Vitals</h2>
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
            ${Ze()}
        </div>
    `;async function we(){await Promise.all([at(),At(),It()]),await xe()}var Qe=null,et=null,tt=null;async function nt(){try{return await(await T("/system_monitor")).json()}catch{return null}}async function st(){try{return await(await T("/system/hardware")).json()}catch{return null}}async function Ct(){try{return await(await T("/processes")).json()}catch{return null}}async function _t(){try{return await(await T("/analyst/status")).json()}catch{return null}}async function At(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),a=document.getElementById("hardware-refresh-btn"),n=i=>{if(!i){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let s="",l=(i.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(s+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${l} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,i.CPU&&i.CPU.length>0){let b=i.CPU[0];s+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${b.LABEL}">${b.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${b.COUNT} Cores / ${b.THREADS} Threads</span>
                    </div>
                </div>`}if(i.GPU&&i.GPU.length>0&&i.GPU.forEach((b,x)=>{let w=(b.VRAM/1073741824).toFixed(1);s+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${x}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${b.LABEL}">${b.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${w} GB VRAM</span>
                        </div>
                    </div>`}),i.STORAGE&&i.STORAGE.length>0){let b=0,x=0;i.STORAGE.forEach(h=>{b+=h.USED,x+=h.SIZE});let w=(b/(1024*1024*1024)).toFixed(1),d=(x/(1024*1024*1024)).toFixed(1),v=x>0?(b/x*100).toFixed(0):0;s+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} / ${d} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${v>90?"#ff4d4d":"#00ff00"}; width: ${v}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=s};if(e&&a){a.dataset.listenerAttached||(a.onclick=async()=>{a.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let s=await st();s?(n(s),a.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',a.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},a.dataset.listenerAttached="true");let i=e.querySelector("p");if(i&&i.textContent==="Loading hardware info..."){let s=await st();n(s)}}if(!t)return;let o=await nt();if(!o||!o.services){t.innerHTML=S("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}Qe=Date.now(),D(3,Qe);let r=o.services||[];Array.from(t.children).forEach(i=>{i.classList.contains("service-widget")||i.remove()});function c(i){return!i||i==="N/A"||i==="unknown"||i.trim()===""?"-":i}function g(i){if(!i||i==="N/A"||i==="unknown")return"-";let s=i.match(/^(\d+\.\d+\.\d+)/);return s?s[0]:i.split(".").slice(0,3).join(".")||"-"}function u(i){return!i||i.length<=28?i:i.substring(0,28)+"..."}function f(i){if(!i||i==="N/A"||i==="unknown")return"-";let s=i.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!s)return"-";let l=parseInt(s[1])||0,b=parseInt(s[2])||0,x=parseInt(s[3])||0,w=parseFloat(s[4])||0,d=l*86400+b*3600+x*60+w,v=Math.floor(d/86400);if(v>0)return`${v}d`;let h=Math.floor(d/3600);if(h>0)return`${h}h`;let _=Math.floor(d/60);return _>0?`${_}m`:`${Math.floor(d)}s`}function y(i){let s=i.status==="online",l=s?"service-widget-online":"service-widget-offline",b=s?"bx-check-circle":"bx-x-circle",x=s?"OK":"BAD",w=i.version?g(i.version.str):"-",d=i.cpu&&i.cpu!=="N/A"?i.cpu:"-",v=i.memory&&i.memory!=="N/A"?i.memory:"-",h=d!=="-"?"#00ff00":"#666",_=d!=="-"?"#fff":"#666",$=v!=="-"?"#00ff00":"#666",E=v!=="-"?"#fff":"#666",N=f(i.uptime),A="";return s?A=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${w}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${N}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${h};"></i>
                        <span style="color: ${_};">${d}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${$};"></i>
                        <span style="color: ${E};">${v}</span>
                    </div>
                </div>`:A='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${l}" data-service-id="${i.id}"><div class="service-widget-header"><i class="bx ${b}"></i><h3>${i.short_name||i.id}</h3><span class="service-widget-status">${x}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${u(i.domain&&i.port?`${i.domain}:${i.port}`:"")}</span></div>${A}</div></div>`}let p=new Map(Array.from(t.querySelectorAll(".service-widget")).map(i=>[i.dataset.serviceId,i])),m=new Set(r.map(i=>i.id));for(let[i,s]of p)m.has(i)||s.remove();r.forEach(i=>{let s=y(i),l=p.get(i.id);l?l.outerHTML!==s&&(l.outerHTML=s):t.insertAdjacentHTML("beforeend",s)})}async function It(){let t=document.getElementById("models-widgets");if(!t)return;let e=await nt();if(!e){t.innerHTML=S("offline","Failed to load model status.");return}et=Date.now(),D(3,et);let a=e.models||[],n=e.whisper;Array.from(t.children).forEach(g=>{g.classList.contains("service-widget")||g.remove()});function o(g){let u=g.status==="Ready";return`
                <div class="service-widget ${u?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${u?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${g.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function r(g){let u=g.status==="Downloaded",f=u?"service-widget-online":"service-widget-offline",y=u?"OK":"MISSING",p=u&&g.size>0?`${(g.size/1e9).toFixed(2)} GB`:"-",m=g.name;return g.type==="custom"&&m.endsWith(":latest")&&(m=m.replace(":latest","")),`<div class="service-widget ${f}" data-model-name="${g.name}"><div class="service-widget-header"><i class="bx ${u?"bx-check-circle":"bx-x-circle"}"></i><h3>${m}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${g.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${p}</span></div></div></div>`}let c="";if(n&&(c+=o(n)),c+=a.map(r).join(""),!c){t.innerHTML=S("empty","No models found.");return}t.innerHTML!==c&&(t.innerHTML=c)}async function at(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),a=document.getElementById("analyst-t2-val"),n=document.getElementById("analyst-t3-val"),o=document.getElementById("analyst-idle-val"),r=document.getElementById("analyst-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await T("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),at()}catch{r.innerHTML="<i class='bx bx-error'></i> Failed"}},r.dataset.listenerAttached="true");let c=await _t();if(c){let m=Math.floor(Date.now()/1e3),i=c.active_tier,s=(l,b,x)=>{if(i===x||x==="guardian"&&i==="tests"){l.textContent="Working",l.style.color="#bb86fc";return}let w=b-m;if(w<=0)l.textContent="Ready",l.style.color="#5eff5e";else{let d=Math.floor(w/60),v=w%60;l.textContent=`${d}m ${v}s`,l.style.color="#fff"}};if(e&&c.guardian&&s(e,c.guardian.next_run,"guardian"),a&&c.architect&&s(a,c.architect.next_run,"architect"),n&&c.strategist&&s(n,c.strategist.next_run,"strategist"),o&&c.system_idle_time!==void 0){let l=c.system_idle_time,b=Math.floor(l/60),x=l%60;o.textContent=`${b}m ${x}s`,l>300?o.style.color="#5eff5e":l>60?o.style.color="#ffa500":o.style.color="#fff"}}else[e,a,n,o].forEach(i=>{i&&(i.textContent="Offline",i.style.color="#ff4d4d")});let g=await Ct(),u=document.getElementById("vitals-processes-val");if(u)if(g){let m=g.length;u.textContent=m>0?`${m} Active`:"Idle",u.style.color=m>0?"#bb86fc":"#fff"}else u.textContent="-",u.style.color="#888";if(g===null){t.innerHTML=S("offline","Failed to load process status.");return}if(tt=Date.now(),D(3,tt),g.length===0){t.innerHTML=S("empty","No active processes."),P(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function f(m){let i=Math.floor(Date.now()/1e3-m.start_time),s=m.retries>0?`<span class="process-retry-badge">Retry ${m.retries}</span>`:"",l=m.channel_id,b={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return b[l]?l=b[l]:/^\d+$/.test(l)&&(l=`Channel ${l}`),`
                <div class="service-widget process-widget" data-channel-id="${m.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${l}</h3>
                        ${s}
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
                </div>`}let y=new Map(Array.from(t.querySelectorAll(".process-widget")).map(m=>[m.dataset.channelId,m])),p=new Set(g.map(m=>m.channel_id));for(let[m,i]of y)p.has(m)||i.remove();g.forEach(m=>{let i=f(m),s=y.get(m.channel_id);s?s.outerHTML!==i&&(s.outerHTML=i):t.insertAdjacentHTML("beforeend",i)}),P(3,g.length)}function Ee(){let t=ve(),e=De()||"master@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},n=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(B).map(o=>`
                    <div class="theme-card ${t===o?"active":""}" data-theme="${o}">
                        <div class="theme-preview theme-preview-${o.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${o}</h3>
                            <p>${o===B.AUTO?"Automatic theme selection.":o===B.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${t===o?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${n?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function $e(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(o=>{o.addEventListener("click",function(){let r=this.dataset.theme;Oe(r),t.setContent(Ee()),$e(t)})});let a=document.getElementById("notifications-toggle");a&&(a.onclick=async o=>{if(o.target.checked)try{await Notification.requestPermission()!=="granted"&&(o.target.checked=!1)}catch{o.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),o.target.checked=!0)});let n=document.getElementById("analytics-toggle");n&&(n.checked=localStorage.getItem("easter_analytics_enabled")!=="false",n.onclick=o=>{let r=o.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}var lt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Placeholder for the future Dexter chat interface.",usage:"Coming soon...",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface will allow direct, natural language interaction with Dexter's strategic layer.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems."],extended_usage:"Coming in Dexter v3.0"}},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Trigger a manual Tier 1 Guardian system audit.",usage:"dex guardian",category:"cognitive",docs:{overview:"Guardian is the Technical Sentry of the ecosystem. It performs automated health checks, log analysis, and technical audits.",details:["Scans for service crashes and restarts.","Analyzes logs for high-severity errors.","Verifies system-wide resource availability (Redis, Ollama).","Triggers immediate notifications if anomalies are detected."],extended_usage:"dex guardian [--force] [--quiet]"}},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the real-time health of all system services.",usage:"dex status [service]",category:"system",docs:{overview:"The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.",details:["Reports status (online/offline/degraded).","Displays version strings and build hashes.","Shows network addresses and ports.","Validates internal service-to-service communication."],extended_usage:"dex status [service_id] [--json]"}},{id:"build",title:"Build",icon:"bx-package",description:"Build and install the entire ecosystem from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The Build command is the primary entry point for ecosystem evolution. It handles versioning, bundling, and deployment.",details:["Increments semantic versioning automatically.","Bundles JavaScript and CSS assets for the frontend.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remote repositories.","Handles post-build cleanup and Ollama model synchronization."],extended_usage:"dex build [patch|minor|major] [--force] [--skip-git]"}},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Fetch and apply the latest updates for all components.",usage:"dex update",category:"lifecycle",docs:{overview:"Update pulls the latest changes from the central repositories and synchronizes your local environment.",details:["Performs git fetch/pull for all configured services.","Verifies compatibility between local and remote versions.","Triggers a rebuild if significant changes are detected."],extended_usage:"dex update [--service=name]"}},{id:"test",title:"Test",icon:"bx-check-shield",description:"Execute the comprehensive system-wide test suite.",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Test ensures the integrity of the codebase by running unit tests, linters, and integration checks.",details:["Runs go test for backend services.","Executes linting via golangci-lint and ruff.","Validates JSON configurations and schemas.","Reports duration and pass/fail metrics."],extended_usage:"dex test [service_id] [--bench] [--coverage]"}},{id:"logs",title:"Logs",icon:"bx-terminal",description:"Stream or tail logs from any manageable service.",usage:"dex logs <service> [-f]",category:"system",docs:{overview:"Logs provides real-time observability into the background processes of the Dexter services.",details:["Tail live output from systemd services.","Support for following (-f) and history limiting.","ANSI color support for terminal readability.","Aggregated view for multi-instance deployments."],extended_usage:"dex logs <service_id> [-f] [-n lines]"}},{id:"system",title:"System Info",icon:"bx-info-square",description:"View detailed hardware vitals and OS-level info.",usage:"dex system [--json]",category:"system",docs:{overview:"System provides detailed hardware observability, focused on AI performance metrics (CPU/GPU/VRAM).",details:["CPU Core/Thread count and current utilization.","RAM and VRAM (GPU) availability.","Storage usage for local model weights.","OS-level environment variable validation."],extended_usage:"dex system [--json] [--vitals-only]"}},{id:"config",title:"Config",icon:"bx-slider-alt",description:"View or modify the central service-map.json.",usage:"dex config <service> [field]",category:"system",docs:{overview:"Config manages the central registry that defines how services find and interact with each other.",details:["View service definitions (domains, ports, IDs).","Modify environment-specific parameters.","Update authentication secrets and API endpoints."],extended_usage:`dex config get <service> [field]
dex config set <service> <field> <value>`}}],Mt=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
    `;for(let[a,n]of Object.entries(t)){let o=lt.filter(r=>r.category===a);o.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 40px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${n.icon}' style="color: ${n.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${n.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${o.map(r=>`
                        <div class="cli-command-card ${r.dummy?"dummy":""}" data-cmd="${r.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${n.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${r.icon}' style="font-size: 2em; color: ${n.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${r.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${r.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${n.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${r.usage}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)}return e+="</div>",e},Te=!1;function Bt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>ot(),document.getElementById("terminal-action-btn").onclick=()=>ot());let a=document.getElementById("cli-terminal-body"),n=document.getElementById("cli-docs-pane");a.innerHTML="";let o=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return n.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${o.overview}</p>
        </div>
        ${o.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${o.details.map(r=>`<li>${r}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${o.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Te=!0,a}function ot(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Te=!1}function Le(t,e,a="output"){if(!Te)return;let n=document.createElement("div");n.className=`terminal-line terminal-${a}`,a==="prompt"?n.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:n.innerHTML=ae(e),t.appendChild(n),t.scrollTop=t.scrollHeight}async function Dt(t){let e=lt.find(n=>n.id===t);if(!e)return;let a=Bt(e);Le(a,`dex ${t}`,"prompt");try{let o=(await T("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),r=new TextDecoder;for(;;){let{value:c,done:g}=await o.read();if(g)break;r.decode(c,{stream:!0}).split(`
`).forEach(y=>{if(y.trim()==="")return;let p="output";y.includes("[ERROR]")?p="error":y.includes("[SUCCESS]")||y.includes("\u2713")?p="success":y.includes("!")&&(p="warning"),Le(a,y,p)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch(n){Le(a,`Connection Error: ${n.message}`,"error"),document.getElementById("terminal-status-badge").className="terminal-status status-error",document.getElementById("terminal-status-badge").textContent="Failed"}finally{document.getElementById("terminal-action-btn").style.display="block"}}function rt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Mt();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let a=e.querySelector("code").textContent;navigator.clipboard.writeText(a).then(()=>{let n=e.querySelector("i");n.className="bx bx-check",n.style.color="#5eff5e",setTimeout(()=>{n.className="bx bx-copy",n.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(a=>{a.addEventListener("mouseenter",()=>{a.style.transform="translateY(-5px)",a.style.borderColor="rgba(255,255,255,0.15)",a.style.backgroundColor="rgba(255,255,255,0.05)"}),a.addEventListener("mouseleave",()=>{a.style.transform="translateY(0)",a.style.borderColor="rgba(255,255,255,0.05)",a.style.backgroundColor="rgba(255,255,255,0.03)"}),a.addEventListener("click",()=>{let n=a.dataset.cmd;if(n==="chat"){alert("Connection to cognitive core pending deployment...");return}Dt(n)})})}async function Nt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${be()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function ct(){Nt(),Pe(),_e(),window.location.pathname.includes("/dex")&&rt();let t=Be();Ae(t),Ie();let e=window.location.pathname==="/"||window.location.pathname==="/index.html",a=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!e&&!a&&document.querySelector("footer")?.classList.add("hide");let n=[],o=document.getElementById("windows-container");o&&o.setAttribute("data-count","0");function r(){return window.innerWidth>=1900?2:1}function c(){let s=r();for(;n.length>s;)n.shift().close(!0);let l=document.getElementById("windows-container"),b=document.querySelector("nav"),x=document.querySelector("footer"),w=window.location.pathname.includes("/dex"),d=window.location.pathname.includes("404")||!!document.getElementById("error-main-view"),v=window.location.pathname==="/"||window.location.pathname==="/index.html";l&&l.setAttribute("data-count",n.length);let h=n.length>1||n.length===1&&window.innerWidth<1200;n.forEach($=>{let E=document.getElementById($.id);E&&(n.length===1?E.classList.add("hide-close"):E.classList.remove("hide-close"))});let _={"feed-window":"feed-icon","monitor-window":"monitor-icon","workspace-window":"workspace-icon","settings-window":"settings-icon"};Object.values(_).forEach($=>document.getElementById($)?.classList.remove("active")),n.forEach($=>{let E=_[$.id];E&&document.getElementById(E)?.classList.add("active")}),n.length>0?(x?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),b?.classList.add("window-open"),h?l&&(l.style.paddingTop="60px"):l&&(l.style.paddingTop="100px")):(b?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),l&&(l.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),v||d?x?.classList.remove("hide"):x?.classList.add("hide"))}function g(s){if(s.isOpen()){s.close();return}let l=r();n.length>=l&&n.shift().close(!0),n.push(s),s.open(),c()}function u(){[...n].forEach(l=>l.close()),n=[]}window.addEventListener("resize",c);let f=W({id:"feed-window",icon:"bx-news",tabs:[{icon:"bx-bell",title:"Notifications",content:Ue()},{icon:"bx-calendar-event",title:"Events",content:Xe()}],onOpen:()=>{j(),X()},onClose:()=>{let s=n.indexOf(f);s>-1&&n.splice(s,1),c()}}),y=W({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bx-server",title:"System",content:it()},{icon:"bx-book-content",title:"Contacts",content:Je()}],onOpen:()=>{we(),he()},onClose:()=>{let s=n.indexOf(y);s>-1&&n.splice(s,1),c()}}),p=W({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:Ge(),onOpen:()=>ye(),onClose:()=>{let s=n.indexOf(p);s>-1&&n.splice(s,1),c()}}),m=W({id:"settings-window",title:"Settings",icon:"bx-cog",content:Ee(),onOpen:()=>$e(m),onClose:()=>{let s=n.indexOf(m);s>-1&&n.splice(s,1),c()}}),i=W({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});t?(document.getElementById("feed-icon")?.addEventListener("click",()=>g(f)),document.getElementById("monitor-icon")?.addEventListener("click",()=>g(y)),document.getElementById("workspace-icon")?.addEventListener("click",()=>g(p)),document.getElementById("settings-icon")?.addEventListener("click",()=>g(m)),document.getElementById("close-all-windows")?.addEventListener("click",()=>u()),setInterval(()=>{f.isOpen()&&(j(),X()),y.isOpen()&&we(),p.isOpen()&&ye()},5e3)):document.getElementById("login-btn")?.addEventListener("click",()=>{i.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",s=>{s.preventDefault();try{Ne(document.getElementById("email-input").value),window.location.reload()}catch(l){let b=document.getElementById("login-error");b&&(b.textContent=l.message,b.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ct):ct();})();
