(()=>{function Be(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function De(t=!1){let i=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${t?`
        <div class="nav-right">
            <i class='bx bx-bell' id="notif-icon" title="Notifications"></i>
            <i class='bx bx-calendar-event' id="events-icon" title="Events"></i>
            <i class='bx bx-bulb' id="ideas-icon" title="Ideas"></i>
            <i class='bx bx-server' id="system-icon" title="System"></i>
            <i class='bx bx-book-content' id="contacts-icon" title="Contacts"></i>
            <i class='bx bx-cog' id="settings-icon" title="Settings"></i>
        </div>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,o=document.createElement("nav");o.innerHTML=i,document.body.prepend(o)}function Ne(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function he(t){let e=null,i=t.onClose||null,o=t.onOpen||null;function a(){if(e){e.classList.add("open"),window.addEventListener("resize",r),o&&setTimeout(o,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),e=document.createElement("div"),e.id=t.id,e.className="window";let b=t.icon||"bx-window",d="",s="",n;t.tabs&&t.tabs.length>0?(d=`<div class="tab-bar">${t.tabs.map((p,f)=>{let y;return p.icon?y=`<i class="bx ${p.icon}"></i>`:p.title&&p.title.length>0?y=`<span class="tab-glyph">${p.title.charAt(0).toUpperCase()}</span>`:y='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${f===0?"active":""}" data-tab-index="${f}">
                        ${y}
                        <span class="tab-title">${p.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${f}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,n=`<div class="window-content">${t.tabs.map((p,f)=>`<div class="tab-content ${f===0?"active":""}" data-tab-content="${f}">${p.content}</div>`).join("")}</div>`):(t.title&&(s=`<div class="window-title">${t.title}</div>`),n=`<div class="window-content">${t.content}</div>`);let l=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${d}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=l+n,u.appendChild(e);let x=e.querySelector(".window-close");x&&x.addEventListener("click",h=>{h.stopPropagation(),v()}),window.addEventListener("resize",r),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(w=>{w.addEventListener("click",()=>{let p=w.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(f=>f.classList.remove("active")),w.classList.add("active"),e.querySelectorAll(".tab-content").forEach(f=>f.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${p}"]`).classList.add("active"),m(w,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function r(){if(!e||!e.classList.contains("open"))return;let u=e.querySelector(".tab.active");u&&m(u,e)}function m(u,b){setTimeout(()=>{let d=b.querySelector(".tab-bar");if(d){let s=Array.from(d.querySelectorAll(".tab")),n=s.indexOf(u),l=d.clientWidth,x=s[Math.max(0,n-2)],h=s[Math.min(s.length-1,n+2)],w=x.offsetLeft-d.offsetLeft-25,f=h.offsetLeft+h.offsetWidth-d.offsetLeft+25-w,y;f<=l?y=w-(l-f)/2:y=u.offsetLeft-d.offsetLeft-l/2+u.offsetWidth/2,d.scrollTo({left:y,behavior:"smooth"})}},350)}function v(u=!1){e&&(window.removeEventListener("resize",r),u?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function c(u){if(e){let b=e.querySelector(".window-content");b&&(b.innerHTML=u)}}function g(){return e&&e.classList.contains("open")}return{open:a,close:v,setContent:c,isOpen:g,id:t.id}}function He(){return!0}function Pe(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Oe(t){localStorage.setItem("easter_user_email",t.trim())}var ze="easter_theme",D={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function we(){return localStorage.getItem(ze)||D.AUTO}function ct(){let t=window.innerWidth,e=window.innerHeight,i=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?D.ANIMATED:(t===1920&&e===1080&&i||t<=1920||e<=1080,D.DEFAULT)}function Ue(t){if(!Object.values(D).includes(t))throw new Error("Invalid theme");localStorage.setItem(ze,t),xe(t)}function xe(t,e=!1){let i=document.body,o=t===D.AUTO?ct():t;if(e||(i.classList.add("theme-transitioning"),setTimeout(()=>{i.classList.remove("theme-transitioning")},300)),Object.values(D).forEach(a=>{i.classList.remove(`theme-${a}`)}),i.classList.add(`theme-${t}`),o===D.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(e?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function qe(){let t=we();if(xe(t,!0),t===D.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{xe(D.AUTO)},300)})}}function $(t,e,i=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function S(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function L(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let o=Date.now(),a=Math.floor((o-e)/1e3),r;a<60?r=`${a}s ago`:a<3600?r=`${Math.floor(a/60)}m ago`:r=`${Math.floor(a/3600)}h ago`,i.textContent=`Last updated: ${r}`}function z(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let o=i.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function ae(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;z(0,e)}function Ee(){return"https://event.easter.company"}function dt(){return"https://discord.easter.company"}var pt="http://127.0.0.1:8300",mt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function oe(t){let e=S(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(a,r)=>{let m=mt[r];return m?`<span class="${m}">`:""});let i=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return i>o&&(e+="</span>".repeat(i-o)),e}var G=null,V=null,ne=!1,ie=!1;async function E(t,e={}){if(G)try{let a=await fetch(G+t,e);if(a.ok)return a;G=null}catch{G=null}let i=Ee(),o=LOCAL_EVENT_SERVICE;try{let a=await fetch(i+t,e);if(a.ok)return G=i,ne&&(console.log("\u2728 Production event service restored."),ne=!1),a;throw new Error("Primary failed")}catch{ne||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${o}`),ne=!0);try{let r=await fetch(o+t,e);if(r.ok)return G=o,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function je(t,e={}){if(V)try{let a=await fetch(V+t,e);if(a.ok)return a;V=null}catch{V=null}let i=dt(),o=pt;try{let a=await fetch(i+t,e);if(a.ok)return V=i,ie&&(console.log("\u2728 Production discord service restored."),ie=!1),a;throw new Error("Primary failed")}catch{ie||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${o}`),ie=!0);try{let r=await fetch(o+t,e);if(r.ok)return V=o,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Fe=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,K=null,q=new Set,le=[];async function j(t=!1){let e=document.getElementById("notifications-list");if(!e)return;ut(),t&&(e.innerHTML="<p>Updating...</p>");let i="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await E(i);if(!o.ok)throw new Error("Service is offline or unreachable.");let r=(await o.json()).events||[];K=Date.now(),L(0,K);let m=Date.now(),v=24*60*60*1e3,c=r.filter(p=>{let f=localStorage.getItem(`notification_read_ts_${p.id}`);if(!f)return!0;let y=parseInt(f);return m-y<v});c.sort((p,f)=>{let y=N=>{let _=N.event;if(typeof _=="string")try{_=JSON.parse(_)}catch{return"low"}return(_.priority||"low").toLowerCase()},A=N=>N==="critical"?4:N==="high"?3:N==="medium"?2:1,k=A(y(p)),T=A(y(f));return k!==T?T-k:f.timestamp-p.timestamp}),le=c;let g=p=>{let f=p.event;if(typeof f=="string")try{f=JSON.parse(f)}catch{return"low"}return(f.priority||"low").toLowerCase()},u=[],d=new Set(c.map(p=>g(p))).size>1;if(c.length>0){let p=null;c.forEach(f=>{let y=g(f);d&&y!==p&&(u.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),p=y),u.push(f)})}if(t&&(e.innerHTML=""),c.length===0){e.innerHTML=$("empty","No notifications yet."),ae();return}let s=p=>{let f=p.event;if(typeof f=="string")try{f=JSON.parse(f)}catch{return null}let y=f.title||"Untitled Notification",A=f.body||"No description provided.",k=f.priority||"low",T=!!f.alert,N=f.category||"system",_=f.related_event_ids||[],H=!!localStorage.getItem(`notification_read_ts_${p.id}`),O=new Date(p.timestamp*1e3),M=O.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),C=O.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),I=H?"event-border-grey":"event-border-blue";!H&&T&&(I="event-border-red"),H&&(k==="high"||k==="critical")?I="event-border-red":H&&k==="medium"&&(I="event-border-orange");let P=H?"notification-read":"notification-unread",B=q.has(p.id),ge=B?"expanded":"",ve=B?"display: block;":"display: none;",Ae="",Ie="";_.length>0&&(Ie=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${_.map(ee=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${ee.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),Ae=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${k==="high"||k==="critical"?"#ff4d4d":k==="medium"?"#ffa500":"#888"}">${k.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${S(A)}</p>
                </div>
                ${Ie}
            `;let U=document.createElement("div");U.className=`event-item notification-item ${I} ${P} ${ge} cursor-pointer`,U.dataset.notificationId=p.id,U.onclick=function(ee){if(this.classList.contains("expanded")){this.classList.remove("expanded"),q.delete(p.id);let te=this.querySelector(".event-details");te&&(te.style.display="none")}else{this.classList.add("expanded"),q.add(p.id);let te=this.querySelector(".event-details");if(te&&(te.style.display="block"),!localStorage.getItem(`notification_read_ts_${p.id}`)){localStorage.setItem(`notification_read_ts_${p.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ye="event-border-grey";k==="high"||k==="critical"?ye="event-border-red":k==="medium"&&(ye="event-border-orange"),this.classList.add(ye),ae()}}},U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${M}</span>
                    <span class="event-date">${C}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${N.toUpperCase()} ${T?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${ve}">
                        <div class="event-details-header">
                            <h4>${T?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${Ae}
                    </div>
                </div>
            `;let Me=U.querySelector(".close-details-btn");return Me&&Me.addEventListener("click",ee=>{ee.stopPropagation(),U.classList.remove("expanded");let be=U.querySelector(".event-details");be&&(be.style.display="none"),q.delete(p.id)}),U},n=p=>{let f=document.createElement("div");f.className="notification-divider",f.dataset.notificationId=p.id;let y="#888888";return p.label==="CRITICAL"?y="#ff4d4d":p.label==="HIGH"?y="#ff8888":p.label==="MEDIUM"&&(y="#ffa500"),f.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,f.innerHTML=`<span style="white-space: nowrap;">${p.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,f},l=Array.from(e.children),x=new Map(l.map(p=>[p.dataset.notificationId,p])),h=new Set(u.map(p=>p.id));l.forEach(p=>{let f=p.dataset.notificationId;(!f||!h.has(f))&&p.remove()});let w=null;u.forEach((p,f)=>{let y=x.get(p.id);(!y||t)&&(y&&y.remove(),p.type==="divider"?y=n(p):y=s(p),!y)||(f===0?e.firstElementChild!==y&&e.prepend(y):w&&w.nextElementSibling!==y&&w.after(y),w=y)}),K=Date.now(),L(0,K),ae()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function ut(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),i=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{le.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),j(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{le.forEach(a=>{q.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),j(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{q.clear(),j(!0)},i.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let a=Date.now()-1728e5;le.forEach(r=>{localStorage.setItem(`notification_read_ts_${r.id}`,a.toString())}),q.clear(),j(!0)},o.dataset.listenerAttached="true")}var Re=()=>`
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
    <p>Loading roadmap...</p>
  </div>
`,F=new Set,We=[],J=null;async function R(t=!1){let e=document.getElementById("roadmap-list");if(e){ft();try{let i=await E("/roadmap");if(!i.ok)throw new Error("Offline");let o=await i.json();if(We=o,o.length===0){e.innerHTML=$("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let a=g=>{let u=F.has(g.id),b=g.state==="draft",d=g.state==="published",s=g.state==="consumed",n="event-border-grey";d&&(n="event-border-blue"),s&&(n="event-border-purple");let x=new Date(g.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${n} cursor-pointer ${u?"expanded":""}`,h.dataset.itemId=g.id,h.onclick=p=>{if(p.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",F.delete(g.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",F.add(g.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${g.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${x.split(",")[1]}</span>
          <span class="event-date">${x.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${S(g.content)}</div>
          <div class="event-details" style="${u?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${s?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${d?"bx-pause":"bx-rocket"}'></i> ${d?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${s?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(g.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>gt(g)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>vt(g)),h.querySelector(".delete-btn")?.addEventListener("click",()=>bt(g.id)),h.querySelector(".close-details-btn")?.addEventListener("click",p=>{p.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",F.delete(g.id)}),h},r=Array.from(e.children),m=new Map(r.map(g=>[g.dataset.itemId,g])),v=new Set(o.map(g=>g.id));r.forEach(g=>{let u=g.dataset.itemId;(!u||!v.has(u))&&g.remove()});let c=null;o.forEach((g,u)=>{let b=m.get(g.id);(!b||t)&&(b&&b.remove(),b=a(g),!b)||(u===0?e.firstElementChild!==b&&e.prepend(b):c&&c.nextElementSibling!==b&&c.after(b),c=b)})}catch{e.innerHTML=$("error","Failed to load roadmap.")}}}function ft(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),a=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{J=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",J=null},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input").value;if(!r.trim())return;let m=J?`/roadmap/${J}`:"/roadmap",v=J?"PATCH":"POST";try{await E(m,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})}),document.getElementById("roadmap-editor-container").style.display="none",R(!0)}catch(c){console.error(c)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{We.forEach(r=>F.add(r.id)),R(!0)},o.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{F.clear(),R(!0)},a.dataset.listenerAttached="true")}function gt(t){J=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function vt(t){let e=t.state==="published"?"draft":"published";try{await E(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),R(!0)}catch(i){console.error(i)}}async function bt(t){if(confirm("Delete this roadmap item?"))try{await E(`/roadmap/${t}`,{method:"DELETE"}),F.delete(t),R(!0)}catch(e){console.error(e)}}var Ve=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,Ge=null,Y=new Set,Ke=[];async function re(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;yt();let i="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await E(i);if(!o.ok)throw new Error("Service is offline or unreachable.");let r=(await o.json()).events||[];if(Ke=r,Ge=Date.now(),L(2,Ge),r.length===0){e.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),z(1,0);return}t&&(e.innerHTML="");let m=b=>{let d=b.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return null}let s=d.title||"Untitled Blueprint",n=d.summary||d.body||"No summary provided.",l=d.content||"",x=d.category||"architecture",h=d.affected_services||[],w=d.implementation_path||[],p=new Date(b.timestamp*1e3),f=p.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),y=p.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=Y.has(b.id),k=A?"display: block;":"display: none;",T=document.createElement("div");T.className=`event-item notification-item event-border-purple cursor-pointer ${A?"expanded":""}`,T.dataset.blueprintId=b.id,T.onclick=function(H){if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(b.id);let M=this.querySelector(".event-details");M&&(M.style.display="none")}else{this.classList.add("expanded"),Y.add(b.id);let M=this.querySelector(".event-details");M&&(M.style.display="block")}};let N=h.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${h.join(", ")}</div>`:"",_="";w.length>0&&(_=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(H=>`<li>${S(H)}</li>`).join("")}
                        </ul>
                    </div>
                `),T.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${f}</span>
                    <span class="event-date">${y}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${x.toUpperCase()}</div>
                    <div class="event-message">${s}</div>
                    <div class="event-details" style="${k}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${S(n)}
                        </div>
                        ${N}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${S(l)}</p>
                        </div>
                        ${_}
                    </div>
                </div>
            `;let W=T.querySelector(".close-details-btn");return W&&W.addEventListener("click",H=>{H.stopPropagation(),T.classList.remove("expanded");let O=T.querySelector(".event-details");O&&(O.style.display="none"),Y.delete(b.id)}),T},v=Array.from(e.children),c=new Map(v.map(b=>[b.dataset.blueprintId,b])),g=new Set(r.map(b=>b.id));v.forEach(b=>{let d=b.dataset.blueprintId;(!d||!g.has(d))&&b.remove()});let u=null;r.forEach((b,d)=>{let s=c.get(b.id);(!s||t)&&(s&&s.remove(),s=m(b),!s)||(d===0?e.firstElementChild!==s&&e.prepend(s):u&&u.nextElementSibling!==s&&u.after(s),u=s)}),z(2,r.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function yt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ke.forEach(i=>Y.add(i.id)),re(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),re(!0)},e.dataset.listenerAttached="true")}var Je=()=>`
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
            ${Ve()}
        </div>
    </div>
`;async function $e(){await Promise.all([R(),re()])}var Ye=()=>`
    <div class="notifications-actions">
        <button id="contacts-refresh" class="notif-action-btn"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
        <p>Loading contacts...</p>
    </div>
`,ce=null;async function de(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>de(),e.dataset.listenerAttached="true");try{let i=await je("/contacts");if(!i.ok)throw new Error("Service unreachable");let a=(await i.json()).members||[];if(ce=Date.now(),L(4,ce),a.length===0){t.innerHTML=$("empty","No contacts found.","Check your Discord connection.");return}let r={"Master User":0,Admin:1,Moderator:2,Contributor:3,User:4,Anyone:5};a.sort((m,v)=>{let c=r[m.level]??10,g=r[v.level]??10;return c!==g?c-g:m.username.localeCompare(v.username)}),t.innerHTML=a.map(m=>{let v=m.color?"#"+m.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",c=m.status==="online"?"#5eff5e":m.status==="idle"?"#ffa500":m.status==="dnd"?"#ff4d4d":"#666",g="#888";return m.level==="Master User"?g="#bb86fc":m.level==="Admin"?g="#cf6679":m.level==="Moderator"?g="#03dac6":m.level==="Contributor"&&(g="#ffa500"),`
                <div class="user-profile-section" style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border: 1px solid ${v}33; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${v}11, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${m.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222;" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${c}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${g}; font-weight: 600; text-transform: uppercase;">${m.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${m.id}</p>
                    </div>
                </div>
            `}).join(""),z(4,a.filter(m=>m.status!=="offline").length)}catch{t.innerHTML=$("offline","Failed to fetch contacts.","The Discord service may be offline.")}}var ht={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Xe(t,e){let i=ht[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(i=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let o=i.replace(/\{(\w+)\}/g,(a,r)=>e[r]!==void 0&&e[r]!==null?e[r]:a);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var Qe=()=>`
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
            <p>Loading events...</p>
        </div>
    </div>
`,X=null,Z=new Set,se=[],pe="all",xt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},wt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ze(t){for(let[e,i]of Object.entries(xt))if(i.includes(t))return e;return"system"}function Et(t){return wt[t]||"bx-square-rounded"}async function Q(t=!1){let e=document.getElementById("events-timeline");if(!e)return;$t();let o=`/events?ml=${pe==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let a=await E(o);if(!a.ok)throw new Error("Service is offline or unreachable.");let m=(await a.json()).events||[],v=m;if(pe!=="all"&&(v=m.filter(s=>{let n=s.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!1}return Ze(n.type)===pe})),se=v.slice(0,50),X=Date.now(),L(1,X),se.length===0){e.innerHTML=$("empty","No events found for this filter.");return}t&&(e.innerHTML="");let c=s=>{let n=s.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let l=n.type,x=Ze(l),h=Et(l),w=l==="engagement.decision"||l==="messaging.bot.sent_message"||l==="messaging.user.sent_message"||l==="moderation.explicit_content.deleted"||l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.cli.command"||l==="system.analysis.audit"||l==="system.test.completed"||l==="error_occurred"||l==="system.cli.status"||l.startsWith("system.roadmap")||l.startsWith("system.process"),p="event-border-grey";w&&(l==="moderation.explicit_content.deleted"||l==="error_occurred"?p="event-border-red":l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.analysis.audit"?p="event-border-purple":l==="system.cli.command"||l==="system.cli.status"?p="event-border-orange":l==="system.test.completed"?p=n.test?.status==="OK"&&n.lint?.status==="OK"&&n.format?.status==="OK"?"event-border-blue":"event-border-red":p="event-border-blue");let f=w?"cursor-pointer":"",y=Z.has(s.id),A=y?"expanded":"",k=y?"display: block;":"display: none;",T=new Date(s.timestamp*1e3),N=T.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),_=T.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),W=Xe(l,n),H=n.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${n.user_level})</span>`:"",O="";if(w){let C="";if(l==="engagement.decision")C=`
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
                    `;else if(l==="messaging.bot.sent_message")C=`
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
                    `;else if(l==="moderation.explicit_content.deleted")C=`
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
                            <pre class="detail-pre">${S(n.raw_output)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.link.completed")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${S(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${S(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${S(n.summary)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.visual.completed"){let I="";n.base64_preview?I=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(I=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${I}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${S(n.description)||"None"}</pre>
                        </div>
                    `}else if(l==="system.cli.command")C=`
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
                            <pre class="detail-pre">${S(n.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(l==="system.analysis.audit")C=`
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
                            <pre class="detail-pre">${S(n.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${S(n.raw_input)}</pre>
                        </div>
                    `;else if(l==="system.test.completed")C=`
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
                    `;else if(l==="error_occurred")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${n.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${S(n.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(n.context||{},null,2)}</pre>
                        </div>
                    `;else if(l==="system.cli.status")C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${S(n.message)}</pre>
                        </div>
                    `;else if(l==="messaging.user.sent_message"){let I="";n.attachments&&n.attachments.length>0&&(I=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${n.attachments.map(B=>{let ge=B.content_type&&B.content_type.startsWith("image/"),ve=(B.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${ge?`<div class="attachment-thumb-container"><img src="${B.url}" alt="${B.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${B.url}" target="_blank" class="attachment-link">${B.filename}</a>
                                        <span class="attachment-meta">${B.content_type} \u2022 ${ve}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),C=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${n.content||"(empty)"}</pre>
                        </div>
                        ${I}
                    `}O=`
                    <div class="event-details" style="${k}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${C}
                    </div>
                `}let M=document.createElement("div");if(M.className=`event-item ${p} ${f} ${A}`,M.dataset.eventId=s.id,M.onclick=function(C){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Z.delete(s.id);let P=this.querySelector(".event-details");P&&(P.style.display="none")}else{this.classList.add("expanded"),Z.add(s.id);let P=this.querySelector(".event-details");P&&(P.style.display="block")}},M.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${N}</span>
                    <span class="event-date">${_}</span>
                </div>
                <div class="event-icon"><i class='bx ${h}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${x}">${x}</span>
                        ${s.service} ${H}
                    </div>
                    <div class="event-message">${W}</div>
                    ${O}
                </div>
            `,w){let C=M.querySelector(".close-details-btn");C&&C.addEventListener("click",I=>{I.stopPropagation();let P=I.target.closest(".event-item");if(P){P.classList.remove("expanded"),Z.delete(s.id);let B=P.querySelector(".event-details");B&&(B.style.display="none")}})}return M},g=Array.from(e.children),u=new Map(g.map(s=>[s.dataset.eventId,s])),b=new Set(se.map(s=>s.id));g.forEach(s=>{let n=s.dataset.eventId;(!n||!b.has(n))&&s.remove()});let d=null;se.forEach((s,n)=>{let l=u.get(s.id);(!l||t)&&(l&&l.remove(),l=c(s),!l)||(n===0?e.firstElementChild!==l&&e.prepend(l):d&&d.nextElementSibling!==l&&d.after(l),d=l)}),X=Date.now(),L(1,X)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}function $t(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{se.forEach(o=>Z.add(o.id)),Q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Z.clear(),Q(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(o=>{o.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),o.classList.add("active"),pe=o.dataset.filter,Q(!0)}}),i.dataset.listenerAttached="true")}function et(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var Lt=null;async function Le(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await E("/logs");if(!e.ok)throw new Error("Logs offline");let i=await e.json();if(!i||i.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let o=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],a=i.filter(m=>!o.includes(m.id));a.forEach(m=>{m.logs&&Array.isArray(m.logs)?m.logs.reverse():m.logs=[]}),a.reverse();let r=a.map(m=>{let v=m.logs.join(`
`),c=[...m.logs];if(c.length<25){let u=25-c.length;for(let b=0;b<u;b++)c.push("")}else c.length>25&&(c=c.slice(-25));let g=c.map(u=>oe(u)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${m.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(v)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${m.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(m=>{m.addEventListener("click",()=>{let v=unescape(m.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let c=m.querySelector("i");c.classList.remove("bx-copy"),c.classList.add("bx-check"),setTimeout(()=>{c.classList.remove("bx-check"),c.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(m=>{m.addEventListener("click",async()=>{let v=m.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${v}?`))try{(await E(`/logs?service_id=${v}`,{method:"DELETE"})).ok&&Le()}catch(c){console.error("Error clearing logs:",c)}})}),Lt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var st=()=>`
        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-zap' style="color: #bb86fc;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Analyst & Vitals</h2>
        </div>
        <div class="analyst-status-section" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0; font-size: 0.9em; color: #888; text-transform: uppercase; letter-spacing: 1px;">Analyst Tiers</h3>
                <button id="analyst-reset-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em;"><i class='bx bx-refresh'></i> Reset</button>
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

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-component' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Live Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p>Loading processes...</p></div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p>Loading services...</p></div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"><p>Loading models...</p></div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em; margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
        </div>
        <div id="hardware-info-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px;">
            <p style="color: #ccc; font-size: 0.9em; margin: 0;">Loading hardware info...</p>
        </div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${et()}
        </div>
    `;async function Te(){await Promise.all([it(),St(),kt()]),await Le()}var me=null,ue=null,fe=null;async function nt(){try{return await(await E("/system_monitor")).json()}catch{return null}}async function tt(){try{return await(await E("/system/hardware")).json()}catch{return null}}async function Tt(){try{return await(await E("/processes")).json()}catch{return null}}async function Ct(){try{return await(await E("/analyst/status")).json()}catch{return null}}async function St(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),i=document.getElementById("hardware-refresh-btn"),o=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let n="",l=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(n+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${l} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let x=s.CPU[0];n+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${x.LABEL}">${x.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${x.COUNT} Cores / ${x.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((x,h)=>{let w=(x.VRAM/1073741824).toFixed(1);n+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${h}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${x.LABEL}">${x.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${w} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let x=0,h=0;s.STORAGE.forEach(y=>{x+=y.USED,h+=y.SIZE});let w=(x/(1024*1024*1024)).toFixed(1),p=(h/(1024*1024*1024)).toFixed(1),f=h>0?(x/h*100).toFixed(0):0;n+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} / ${p} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${f>90?"#ff4d4d":"#00ff00"}; width: ${f}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=n};if(e&&i){i.dataset.listenerAttached||(i.onclick=async()=>{i.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let n=await tt();n?(o(n),i.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',i.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},i.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let n=await tt();o(n)}}if(!t)return;let a=await nt();if(!a||!a.services){t.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}me=Date.now(),L(3,me);let r=a.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function m(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function v(s){if(!s||s==="N/A"||s==="unknown")return"-";let n=s.match(/^(\d+\.\d+\.\d+)/);return n?n[0]:s.split(".").slice(0,3).join(".")||"-"}function c(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function g(s){if(!s||s==="N/A"||s==="unknown")return"-";let n=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!n)return"-";let l=parseInt(n[1])||0,x=parseInt(n[2])||0,h=parseInt(n[3])||0,w=parseFloat(n[4])||0,p=l*86400+x*3600+h*60+w,f=Math.floor(p/86400);if(f>0)return`${f}d`;let y=Math.floor(p/3600);if(y>0)return`${y}h`;let A=Math.floor(p/60);return A>0?`${A}m`:`${Math.floor(p)}s`}function u(s){let n=s.status==="online",l=n?"service-widget-online":"service-widget-offline",x=n?"bx-check-circle":"bx-x-circle",h=n?"OK":"BAD",w=s.version?v(s.version.str):"-",p=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",f=s.memory&&s.memory!=="N/A"?s.memory:"-",y=p!=="-"?"#00ff00":"#666",A=p!=="-"?"#fff":"#666",k=f!=="-"?"#00ff00":"#666",T=f!=="-"?"#fff":"#666",N=g(s.uptime),_="";return n?_=`
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
                        <i class="bx bxs-microchip" style="color: ${y};"></i>
                        <span style="color: ${A};">${p}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${k};"></i>
                        <span style="color: ${T};">${f}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${l}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${x}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${c(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let b=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),d=new Set(r.map(s=>s.id));for(let[s,n]of b)d.has(s)||n.remove();r.forEach(s=>{let n=u(s),l=b.get(s.id);l?l.outerHTML!==n&&(l.outerHTML=n):t.insertAdjacentHTML("beforeend",n)})}async function kt(){let t=document.getElementById("models-widgets");if(!t)return;let e=await nt();if(!e){t.innerHTML=$("offline","Failed to load model status.");return}ue=Date.now(),L(3,ue);let i=e.models||[],o=e.whisper;Array.from(t.children).forEach(v=>{v.classList.contains("service-widget")||v.remove()});function a(v){let c=v.status==="Ready";return`
                <div class="service-widget ${c?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${c?"READY":"NOT FOUND"}</span>
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
                </div>`}function r(v){let c=v.status==="Downloaded",g=c?"service-widget-online":"service-widget-offline",u=c?"OK":"MISSING",b=c&&v.size>0?`${(v.size/1e9).toFixed(2)} GB`:"-",d=v.name;return v.type==="custom"&&d.endsWith(":latest")&&(d=d.replace(":latest","")),`<div class="service-widget ${g}" data-model-name="${v.name}"><div class="service-widget-header"><i class="bx ${c?"bx-check-circle":"bx-x-circle"}"></i><h3>${d}</h3><span class="service-widget-status">${u}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${v.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${b}</span></div></div></div>`}let m="";if(o&&(m+=a(o)),m+=i.map(r).join(""),!m){t.innerHTML=$("empty","No models found.");return}t.innerHTML!==m&&(t.innerHTML=m)}async function it(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),i=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),a=document.getElementById("analyst-idle-val"),r=document.getElementById("analyst-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await E("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),it()}catch{r.innerHTML="<i class='bx bx-error'></i> Failed"}},r.dataset.listenerAttached="true");let m=await Ct();if(m){let d=Math.floor(Date.now()/1e3),s=m.active_tier,n=(l,x,h)=>{if(s===h||h==="guardian"&&s==="tests"){l.textContent="Working",l.style.color="#bb86fc";return}let w=x-d;if(w<=0)l.textContent="Ready",l.style.color="#5eff5e";else{let p=Math.floor(w/60),f=w%60;l.textContent=`${p}m ${f}s`,l.style.color="#fff"}};if(e&&m.guardian&&n(e,m.guardian.next_run,"guardian"),i&&m.architect&&n(i,m.architect.next_run,"architect"),o&&m.strategist&&n(o,m.strategist.next_run,"strategist"),a&&m.system_idle_time!==void 0){let l=m.system_idle_time,x=Math.floor(l/60),h=l%60;a.textContent=`${x}m ${h}s`,l>300?a.style.color="#5eff5e":l>60?a.style.color="#ffa500":a.style.color="#fff"}}else[e,i,o,a].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let v=await Tt(),c=document.getElementById("vitals-processes-val");if(c)if(v){let d=v.length;c.textContent=d>0?`${d} Active`:"Idle",c.style.color=d>0?"#bb86fc":"#fff"}else c.textContent="-",c.style.color="#888";if(v===null){t.innerHTML=$("offline","Failed to load process status.");return}if(fe=Date.now(),L(3,fe),v.length===0){t.innerHTML=$("empty","No active processes."),z(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function g(d){let s=Math.floor(Date.now()/1e3-d.start_time),n=d.retries>0?`<span class="process-retry-badge">Retry ${d.retries}</span>`:"",l=d.channel_id,x={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return x[l]?l=x[l]:/^\d+$/.test(l)&&(l=`Channel ${l}`),`
                <div class="service-widget process-widget" data-channel-id="${d.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${l}</h3>
                        ${n}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${d.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${s}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${d.pid}</span>
                        </div>
                    </div>
                </div>`}let u=new Map(Array.from(t.querySelectorAll(".process-widget")).map(d=>[d.dataset.channelId,d])),b=new Set(v.map(d=>d.channel_id));for(let[d,s]of u)b.has(d)||s.remove();v.forEach(d=>{let s=g(d),n=u.get(d.channel_id);n?n.outerHTML!==s&&(n.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),z(3,v.length)}function Ce(){let t=we(),e=Pe()||"master@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(D).map(a=>`
                    <div class="theme-card ${t===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===D.AUTO?"Automatic theme selection.":a===D.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${t===a?"Active":"Select"}</span>
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
                            <input type="checkbox" id="analytics-toggle" ${o?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Se(t){let e=document.querySelector("#main-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(a=>{a.addEventListener("click",function(){let r=this.dataset.theme;Ue(r),t.setContent(Ce()),Se(t)})});let i=document.getElementById("notifications-toggle");i&&(i.onclick=async a=>{if(a.target.checked)try{await Notification.requestPermission()!=="granted"&&(a.target.checked=!1)}catch{a.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=a=>{let r=a.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}var ot=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Placeholder for the future Dexter chat interface.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Trigger a manual Tier 1 Guardian system audit.",usage:"dex guardian",category:"cognitive"},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the real-time health of all system services.",usage:"dex status [service]",category:"system"},{id:"build",title:"Build",icon:"bx-package",description:"Build and install the entire ecosystem from source.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Fetch and apply the latest updates for all components.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Execute the comprehensive system-wide test suite.",usage:"dex test [service]",category:"lifecycle"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"Stream or tail logs from any manageable service.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"View detailed hardware vitals and OS-level info.",usage:"dex system [--json]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"View or modify the central service-map.json.",usage:"dex config <service> [field]",category:"system"}],_t=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>
    `;for(let[i,o]of Object.entries(t)){let a=ot.filter(r=>r.category===i);a.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 40px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${o.icon}' style="color: ${o.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${o.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${a.map(r=>`
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
        `)}return e+="</div>",e},_e=!1;function At(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
            <div class="cli-terminal-window">
                <div class="cli-terminal-header">
                    <div class="terminal-title">
                        <i class='bx bx-terminal'></i>
                        <span id="terminal-cmd-name">dex command</span>
                        <span id="terminal-status-badge" class="terminal-status status-running">Running</span>
                    </div>
                    <i class='bx bx-x' id="close-terminal-btn" style="cursor: pointer; font-size: 1.5em; color: #666; transition: color 0.2s;"></i>
                </div>
                <div id="cli-terminal-body" class="cli-terminal-body"></div>
                <div class="cli-terminal-footer">
                    <button id="terminal-action-btn" class="notif-action-btn" style="display: none;">Done</button>
                </div>
            </div>
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>at(),document.getElementById("terminal-action-btn").onclick=()=>at());let i=document.getElementById("cli-terminal-body");return i.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),_e=!0,i}function at(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),_e=!1}function ke(t,e,i="output"){if(!_e)return;let o=document.createElement("div");o.className=`terminal-line terminal-${i}`,i==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=oe(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function It(t){let e=ot.find(o=>o.id===t);if(!e)return;let i=At(e);ke(i,`dex ${t}`,"prompt");try{let a=(await E("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),r=new TextDecoder;for(;;){let{value:m,done:v}=await a.read();if(v)break;r.decode(m,{stream:!0}).split(`
`).forEach(u=>{if(u.trim()==="")return;let b="output";u.includes("[ERROR]")?b="error":u.includes("[SUCCESS]")||u.includes("\u2713")?b="success":u.includes("!")&&(b="warning"),ke(i,u,b)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch(o){ke(i,`Connection Error: ${o.message}`,"error"),document.getElementById("terminal-status-badge").className="terminal-status status-error",document.getElementById("terminal-status-badge").textContent="Failed"}finally{document.getElementById("terminal-action-btn").style.display="block"}}function lt(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=_t(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.03)"}),e.addEventListener("click",()=>{let i=e.dataset.cmd;if(i==="chat"){alert("Connection to cognitive core pending deployment...");return}It(i)})}))}async function Mt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Ee()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function rt(){Mt(),qe(),Be(),window.location.pathname.includes("/dex")&&lt();let t=He();De(t),Ne();let e=document.querySelector("footer"),i=null;function o(){i=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(c=>c.classList.remove("active","inactive"))}function a(c,g=null,u=null){let b=i&&i.id===c.id;if(b&&u!==null){let d=document.querySelector(`#${c.id} .tab[data-tab-index="${u}"]`);d&&d.click(),document.querySelectorAll(".nav-right i").forEach(s=>{let n=s===g;s.classList.toggle("active",n),s.classList.toggle("inactive",!n&&g)});return}i&&i.close(!b),b?i=null:setTimeout(()=>{if(c.open(),i=c,u!==null){let d=document.querySelector(`#${c.id} .tab[data-tab-index="${u}"]`);d&&d.click()}document.querySelectorAll(".nav-right i").forEach(d=>{let s=d===g;d.classList.toggle("active",s),d.classList.toggle("inactive",!s&&g)}),e?.classList.add("hide")},i?220:0)}async function r(){await Promise.all([j(),Q(),$e(),Te(),de()]);let c=setInterval(()=>{if(!v.isOpen())return clearInterval(c);L(0,K),L(1,X),L(3,fe),L(3,me),L(3,ue),L(4,ce)},1e3),g=setInterval(()=>{if(!v.isOpen())return clearInterval(g);j(),Q(),$e(),Te(),de()},3e3)}let m=he({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),v=he({id:"main-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Fe(),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:Qe(),"data-tab-index":1},{icon:"bx-bulb",title:"Ideas",content:Je(),"data-tab-index":2},{icon:"bx-server",title:"System",content:st(),"data-tab-index":3},{icon:"bx-book-content",title:"Contacts",content:Ye(),"data-tab-index":4},{icon:"bx-cog",title:"Settings",content:Ce(),"data-tab-index":5}],icon:"bx-layer",onClose:o,onOpen:()=>{r(),setTimeout(()=>Se(v),50)}});t?(document.getElementById("notif-icon")?.addEventListener("click",c=>a(v,c.currentTarget,0)),document.getElementById("events-icon")?.addEventListener("click",c=>a(v,c.currentTarget,1)),document.getElementById("ideas-icon")?.addEventListener("click",c=>a(v,c.currentTarget,2)),document.getElementById("system-icon")?.addEventListener("click",c=>a(v,c.currentTarget,3)),document.getElementById("contacts-icon")?.addEventListener("click",c=>a(v,c.currentTarget,4)),document.getElementById("settings-icon")?.addEventListener("click",c=>a(v,c.currentTarget,5))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(m),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",c=>{c.preventDefault();try{Oe(document.getElementById("email-input").value),window.location.reload()}catch(g){let u=document.getElementById("login-error");u&&(u.textContent=g.message,u.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rt):rt();})();
//# sourceMappingURL=dex.113b7cd0.js.map
