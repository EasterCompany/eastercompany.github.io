(()=>{function Ae(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ce(t=!1){let n=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${t?`
            <i id="notif-icon" class='bx bx-bell' title="Notifications"></i>
            <i id="events-icon" class='bx bx-calendar-event' title="Events"></i>
            <i id="ideas-icon" class='bx bx-bulb' title="Ideas"></i>
            <i id="system-icon" class='bx bx-server' title="System"></i>
            <i id="settings-icon" class='bx bx-cog' title="Settings"></i>
        `:`
            <button id="login-btn" class="login-btn">LOGIN</button>
        `}
        </div>
    `,o=document.createElement("nav");o.innerHTML=n,document.body.prepend(o)}function _e(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function ge(t){let e=null,n=t.onClose||null,o=t.onOpen||null;function a(){if(e){e.classList.add("open"),window.addEventListener("resize",r),o&&setTimeout(o,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),e=document.createElement("div"),e.id=t.id,e.className="window";let g=t.icon||"bx-window",c="",s="",i;t.tabs&&t.tabs.length>0?(c=`<div class="tab-bar">${t.tabs.map((d,m)=>{let y;return d.icon?y=`<i class="bx ${d.icon}"></i>`:d.title&&d.title.length>0?y=`<span class="tab-glyph">${d.title.charAt(0).toUpperCase()}</span>`:y='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${m===0?"active":""}" data-tab-index="${m}">
                        ${y}
                        <span class="tab-title">${d.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${m}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,i=`<div class="window-content">${t.tabs.map((d,m)=>`<div class="tab-content ${m===0?"active":""}" data-tab-content="${m}">${d.content}</div>`).join("")}</div>`):(t.title&&(s=`<div class="window-title">${t.title}</div>`),i=`<div class="window-content">${t.content}</div>`);let l=`
            <div class="window-header">
                <i class="bx ${g}"></i>
                ${c}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=l+i,u.appendChild(e);let x=e.querySelector(".window-close");x&&x.addEventListener("click",h=>{h.stopPropagation(),v()}),window.addEventListener("resize",r),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(w=>{w.addEventListener("click",()=>{let d=w.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(m=>m.classList.remove("active")),w.classList.add("active"),e.querySelectorAll(".tab-content").forEach(m=>m.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${d}"]`).classList.add("active"),f(w,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function r(){if(!e||!e.classList.contains("open"))return;let u=e.querySelector(".tab.active");u&&f(u,e)}function f(u,g){setTimeout(()=>{let c=g.querySelector(".tab-bar");if(c){let s=Array.from(c.querySelectorAll(".tab")),i=s.indexOf(u),l=c.clientWidth,x=s[Math.max(0,i-2)],h=s[Math.min(s.length-1,i+2)],w=x.offsetLeft-c.offsetLeft-25,m=h.offsetLeft+h.offsetWidth-c.offsetLeft+25-w,y;m<=l?y=w-(l-m)/2:y=u.offsetLeft-c.offsetLeft-l/2+u.offsetWidth/2,c.scrollTo({left:y,behavior:"smooth"})}},350)}function v(u=!1){e&&(window.removeEventListener("resize",r),u?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),n&&n(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function p(u){if(e){let g=e.querySelector(".window-content");g&&(g.innerHTML=u)}}function b(){return e&&e.classList.contains("open")}return{open:a,close:v,setContent:p,isOpen:b,id:t.id}}function Ie(){return!0}function Me(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Be(t){localStorage.setItem("easter_user_email",t.trim())}var De="easter_theme",B={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function be(){return localStorage.getItem(De)||B.AUTO}function it(){let t=window.innerWidth,e=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?B.ANIMATED:(t===1920&&e===1080&&n||t<=1920||e<=1080,B.DEFAULT)}function Ne(t){if(!Object.values(B).includes(t))throw new Error("Invalid theme");localStorage.setItem(De,t),ve(t)}function ve(t,e=!1){let n=document.body,o=t===B.AUTO?it():t;if(e||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(B).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${t}`),o===B.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(e?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function He(){let t=be();if(ve(t,!0),t===B.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{ve(B.AUTO)},300)})}}function S(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function T(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function A(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!n)return;if(!e){n.textContent="Last updated: never";return}let o=Date.now(),a=Math.floor((o-e)/1e3),r;a<60?r=`${a}s ago`:a<3600?r=`${Math.floor(a/60)}m ago`:r=`${Math.floor(a/3600)}h ago`,n.textContent=`Last updated: ${r}`}function U(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!n)return;let o=n.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function ie(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;U(0,e)}function ye(){return"https://event.easter.company"}var nt="http://127.0.0.1:8100",at={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function ne(t){let e=T(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(a,r)=>{let f=at[r];return f?`<span class="${f}">`:""});let n=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return n>o&&(e+="</span>".repeat(n-o)),e}var W=null,se=!1;async function $(t,e={}){if(W)try{let a=await fetch(W+t,e);if(a.ok)return a;W=null}catch{W=null}let n=ye(),o=nt;try{let a=await fetch(n+t,e);if(a.ok)return W=n,se&&(console.log("\u2728 Production event service restored."),se=!1),a;throw new Error("Primary failed")}catch{se||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${o}`),se=!0);try{let r=await fetch(o+t,e);if(r.ok)return W=o,r;throw new Error("Fallback failed")}catch(r){throw r}}}var ze=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,G=null,O=new Set,ae=[];async function q(t=!1){let e=document.getElementById("notifications-list");if(!e)return;ot(),t&&(e.innerHTML="<p>Updating...</p>");let n="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await $(n);if(!o.ok)throw new Error("Service is offline or unreachable.");let r=(await o.json()).events||[];G=Date.now(),A(0,G);let f=Date.now(),v=24*60*60*1e3,p=r.filter(d=>{let m=localStorage.getItem(`notification_read_ts_${d.id}`);if(!m)return!0;let y=parseInt(m);return f-y<v});p.sort((d,m)=>{let y=D=>{let C=D.event;if(typeof C=="string")try{C=JSON.parse(C)}catch{return"low"}return(C.priority||"low").toLowerCase()},_=D=>D==="critical"?4:D==="high"?3:D==="medium"?2:1,k=_(y(d)),L=_(y(m));return k!==L?L-k:m.timestamp-d.timestamp}),ae=p;let b=d=>{let m=d.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return"low"}return(m.priority||"low").toLowerCase()},u=[],c=new Set(p.map(d=>b(d))).size>1;if(p.length>0){let d=null;p.forEach(m=>{let y=b(m);c&&y!==d&&(u.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),d=y),u.push(m)})}if(t&&(e.innerHTML=""),p.length===0){e.innerHTML=S("empty","No notifications yet."),ie();return}let s=d=>{let m=d.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let y=m.title||"Untitled Notification",_=m.body||"No description provided.",k=m.priority||"low",L=!!m.alert,D=m.category||"system",C=m.related_event_ids||[],M=!!localStorage.getItem(`notification_read_ts_${d.id}`),N=new Date(d.timestamp*1e3),E=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),z=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),I=M?"event-border-grey":"event-border-blue";!M&&L&&(I="event-border-red"),M&&(k==="high"||k==="critical")?I="event-border-red":M&&k==="medium"&&(I="event-border-orange");let H=M?"notification-read":"notification-unread",te=O.has(d.id),me=te?"expanded":"",st=te?"display: block;":"display: none;",Te="",ke="";C.length>0&&(ke=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${C.map(Z=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Z.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),Te=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${k==="high"||k==="critical"?"#ff4d4d":k==="medium"?"#ffa500":"#888"}">${k.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${T(_)}</p>
                </div>
                ${ke}
            `;let P=document.createElement("div");P.className=`event-item notification-item ${I} ${H} ${me} cursor-pointer`,P.dataset.notificationId=d.id,P.onclick=function(Z){if(this.classList.contains("expanded")){this.classList.remove("expanded"),O.delete(d.id);let Q=this.querySelector(".event-details");Q&&(Q.style.display="none")}else{this.classList.add("expanded"),O.add(d.id);let Q=this.querySelector(".event-details");if(Q&&(Q.style.display="block"),!localStorage.getItem(`notification_read_ts_${d.id}`)){localStorage.setItem(`notification_read_ts_${d.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let fe="event-border-grey";k==="high"||k==="critical"?fe="event-border-red":k==="medium"&&(fe="event-border-orange"),this.classList.add(fe),ie()}}},P.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${z}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${D.toUpperCase()} ${L?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${st}">
                        <div class="event-details-header">
                            <h4>${L?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${Te}
                    </div>
                </div>
            `;let Se=P.querySelector(".close-details-btn");return Se&&Se.addEventListener("click",Z=>{Z.stopPropagation(),P.classList.remove("expanded");let ue=P.querySelector(".event-details");ue&&(ue.style.display="none"),O.delete(d.id)}),P},i=d=>{let m=document.createElement("div");m.className="notification-divider",m.dataset.notificationId=d.id;let y="#888888";return d.label==="CRITICAL"?y="#ff4d4d":d.label==="HIGH"?y="#ff8888":d.label==="MEDIUM"&&(y="#ffa500"),m.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,m.innerHTML=`<span style="white-space: nowrap;">${d.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,m},l=Array.from(e.children),x=new Map(l.map(d=>[d.dataset.notificationId,d])),h=new Set(u.map(d=>d.id));l.forEach(d=>{let m=d.dataset.notificationId;(!m||!h.has(m))&&d.remove()});let w=null;u.forEach((d,m)=>{let y=x.get(d.id);(!y||t)&&(y&&y.remove(),d.type==="divider"?y=i(d):y=s(d),!y)||(m===0?e.firstElementChild!==y&&e.prepend(y):w&&w.nextElementSibling!==y&&w.after(y),w=y)}),G=Date.now(),A(0,G),ie()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=S("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function ot(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ae.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ae.forEach(a=>{O.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),q(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{O.clear(),q(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let a=Date.now()-1728e5;ae.forEach(r=>{localStorage.setItem(`notification_read_ts_${r.id}`,a.toString())}),O.clear(),q(!0)},o.dataset.listenerAttached="true")}var Pe=()=>`
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
`,j=new Set,Ue=[],V=null;async function R(t=!1){let e=document.getElementById("roadmap-list");if(e){lt();try{let n=await $("/roadmap");if(!n.ok)throw new Error("Offline");let o=await n.json();if(Ue=o,o.length===0){e.innerHTML=S("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let a=b=>{let u=j.has(b.id),g=b.state==="draft",c=b.state==="published",s=b.state==="consumed",i="event-border-grey";c&&(i="event-border-blue"),s&&(i="event-border-purple");let x=new Date(b.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${i} cursor-pointer ${u?"expanded":""}`,h.dataset.itemId=b.id,h.onclick=d=>{if(d.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",j.delete(b.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",j.add(b.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${b.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${x.split(",")[1]}</span>
          <span class="event-date">${x.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${T(b.content)}</div>
          <div class="event-details" style="${u?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${s?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${c?"bx-pause":"bx-rocket"}'></i> ${c?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${s?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(b.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>rt(b)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>ct(b)),h.querySelector(".delete-btn")?.addEventListener("click",()=>dt(b.id)),h.querySelector(".close-details-btn")?.addEventListener("click",d=>{d.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",j.delete(b.id)}),h},r=Array.from(e.children),f=new Map(r.map(b=>[b.dataset.itemId,b])),v=new Set(o.map(b=>b.id));r.forEach(b=>{let u=b.dataset.itemId;(!u||!v.has(u))&&b.remove()});let p=null;o.forEach((b,u)=>{let g=f.get(b.id);(!g||t)&&(g&&g.remove(),g=a(b),!g)||(u===0?e.firstElementChild!==g&&e.prepend(g):p&&p.nextElementSibling!==g&&p.after(g),p=g)})}catch{e.innerHTML=S("error","Failed to load roadmap.")}}}function lt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),n=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),a=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{V=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",V=null},n.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input").value;if(!r.trim())return;let f=V?`/roadmap/${V}`:"/roadmap",v=V?"PATCH":"POST";try{await $(f,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})}),document.getElementById("roadmap-editor-container").style.display="none",R(!0)}catch(p){console.error(p)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{Ue.forEach(r=>j.add(r.id)),R(!0)},o.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{j.clear(),R(!0)},a.dataset.listenerAttached="true")}function rt(t){V=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function ct(t){let e=t.state==="published"?"draft":"published";try{await $(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),R(!0)}catch(n){console.error(n)}}async function dt(t){if(confirm("Delete this roadmap item?"))try{await $(`/roadmap/${t}`,{method:"DELETE"}),j.delete(t),R(!0)}catch(e){console.error(e)}}var qe=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,Oe=null,K=new Set,je=[];async function oe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;pt();let n="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await $(n);if(!o.ok)throw new Error("Service is offline or unreachable.");let r=(await o.json()).events||[];if(je=r,Oe=Date.now(),A(2,Oe),r.length===0){e.innerHTML=S("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),U(1,0);return}t&&(e.innerHTML="");let f=g=>{let c=g.event;if(typeof c=="string")try{c=JSON.parse(c)}catch{return null}let s=c.title||"Untitled Blueprint",i=c.summary||c.body||"No summary provided.",l=c.content||"",x=c.category||"architecture",h=c.affected_services||[],w=c.implementation_path||[],d=new Date(g.timestamp*1e3),m=d.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),y=d.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),_=K.has(g.id),k=_?"display: block;":"display: none;",L=document.createElement("div");L.className=`event-item notification-item event-border-purple cursor-pointer ${_?"expanded":""}`,L.dataset.blueprintId=g.id,L.onclick=function(M){if(this.classList.contains("expanded")){this.classList.remove("expanded"),K.delete(g.id);let E=this.querySelector(".event-details");E&&(E.style.display="none")}else{this.classList.add("expanded"),K.add(g.id);let E=this.querySelector(".event-details");E&&(E.style.display="block")}};let D=h.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${h.join(", ")}</div>`:"",C="";w.length>0&&(C=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(M=>`<li>${T(M)}</li>`).join("")}
                        </ul>
                    </div>
                `),L.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${m}</span>
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
                            ${T(i)}
                        </div>
                        ${D}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${T(l)}</p>
                        </div>
                        ${C}
                    </div>
                </div>
            `;let F=L.querySelector(".close-details-btn");return F&&F.addEventListener("click",M=>{M.stopPropagation(),L.classList.remove("expanded");let N=L.querySelector(".event-details");N&&(N.style.display="none"),K.delete(g.id)}),L},v=Array.from(e.children),p=new Map(v.map(g=>[g.dataset.blueprintId,g])),b=new Set(r.map(g=>g.id));v.forEach(g=>{let c=g.dataset.blueprintId;(!c||!b.has(c))&&g.remove()});let u=null;r.forEach((g,c)=>{let s=p.get(g.id);(!s||t)&&(s&&s.remove(),s=f(g),!s)||(c===0?e.firstElementChild!==s&&e.prepend(s):u&&u.nextElementSibling!==s&&u.after(s),u=s)}),U(2,r.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=S("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function pt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{je.forEach(n=>K.add(n.id)),oe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{K.clear(),oe(!0)},e.dataset.listenerAttached="true")}var Re=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
            </div>
            ${Pe()}
        </div>

        <div class="blueprints-section">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-paint' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
            </div>
            ${qe()}
        </div>
    </div>
`;async function he(){await Promise.all([R(),oe()])}var mt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Fe(t,e){let n=mt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(n=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!n)return t;let o=n.replace(/\{(\w+)\}/g,(a,r)=>e[r]!==void 0&&e[r]!==null?e[r]:a);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}function We(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var ut=null;async function le(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await $("/logs");if(!e.ok)throw new Error("Logs offline");let n=await e.json();if(!n||n.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let o=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],a=n.filter(f=>!o.includes(f.id));a.forEach(f=>{f.logs&&Array.isArray(f.logs)?f.logs.reverse():f.logs=[]}),a.reverse();let r=a.map(f=>{let v=f.logs.join(`
`),p=f.logs.map(b=>ne(b)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${f.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(v)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${f.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${p}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(f=>{f.addEventListener("click",()=>{let v=unescape(f.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let p=f.querySelector("i");p.classList.remove("bx-copy"),p.classList.add("bx-check"),setTimeout(()=>{p.classList.remove("bx-check"),p.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(f=>{f.addEventListener("click",async()=>{let v=f.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${v}?`))try{(await $(`/logs?service_id=${v}`,{method:"DELETE"})).ok&&le()}catch(p){console.error("Error clearing logs:",p)}})}),ut=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var Ve=()=>`
    <div class="notifications-actions">
        <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <div style="width: 1px; background: rgba(255,255,255,0.1); margin: 0 5px;"></div>
        <button id="events-toggle-view" class="notif-action-btn active" data-view="timeline"><i class='bx bx-list-ul'></i> Timeline</button>
        <button id="events-toggle-view-logs" class="notif-action-btn" data-view="logs"><i class='bx bx-history'></i> Service Logs</button>
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

    <div id="logs-view-container" style="display: none;">
        ${We()}
    </div>
`,J=null,Y=new Set,ee=[],re="all",ft={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},gt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ge(t){for(let[e,n]of Object.entries(ft))if(n.includes(t))return e;return"system"}function vt(t){return gt[t]||"bx-square-rounded"}async function X(t=!1){let e=document.getElementById("events-timeline");if(!e)return;document.getElementById("logs-view-container")?.style.display!=="none"&&le(),bt();let o=`/events?ml=${re==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let a=await $(o);if(!a.ok)throw new Error("Service is offline or unreachable.");let f=(await a.json()).events||[],v=f;if(re!=="all"&&(v=f.filter(s=>{let i=s.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return!1}return Ge(i.type)===re})),ee=v.slice(0,50),J=Date.now(),A(1,J),ee.length===0){e.innerHTML=S("empty","No events found for this filter.");return}t&&(e.innerHTML="");let p=s=>{let i=s.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let l=i.type,x=Ge(l),h=vt(l),w=l==="engagement.decision"||l==="messaging.bot.sent_message"||l==="messaging.user.sent_message"||l==="moderation.explicit_content.deleted"||l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.cli.command"||l==="system.analysis.audit"||l==="system.test.completed"||l==="error_occurred"||l==="system.cli.status"||l.startsWith("system.roadmap")||l.startsWith("system.process"),d="event-border-grey";w&&(l==="moderation.explicit_content.deleted"||l==="error_occurred"?d="event-border-red":l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.analysis.audit"?d="event-border-purple":l==="system.cli.command"||l==="system.cli.status"?d="event-border-orange":l==="system.test.completed"?d=i.test?.status==="OK"&&i.lint?.status==="OK"&&i.format?.status==="OK"?"event-border-blue":"event-border-red":d="event-border-blue");let m=w?"cursor-pointer":"",y=Y.has(s.id),_=y?"expanded":"",k=y?"display: block;":"display: none;",L=new Date(s.timestamp*1e3),D=L.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),C=L.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),F=Fe(l,i),M="";if(w){let E="";if(l==="engagement.decision")E=`
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
                    `;else if(l==="messaging.bot.sent_message")E=`
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
                    `;else if(l==="moderation.explicit_content.deleted")E=`
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
                            <pre class="detail-pre">${T(i.raw_output)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.link.completed")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${T(i.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${T(i.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${T(i.summary)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.visual.completed"){let z="";i.base64_preview?z=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(z=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${i.filename}</span>
                        </div>
                        ${z}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${T(i.description)||"None"}</pre>
                        </div>
                    `}else if(l==="system.cli.command")E=`
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
                            <pre class="detail-pre">${T(i.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(l==="system.analysis.audit")E=`
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
                            <pre class="detail-pre">${T(i.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${T(i.raw_input)}</pre>
                        </div>
                    `;else if(l==="system.test.completed")E=`
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
                    `;else if(l==="error_occurred")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${i.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${T(i.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(i.context||{},null,2)}</pre>
                        </div>
                    `;else if(l==="system.cli.status")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${i.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${T(i.message)}</pre>
                        </div>
                    `;else if(l==="messaging.user.sent_message"){let z="";i.attachments&&i.attachments.length>0&&(z=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${i.attachments.map(H=>{let te=H.content_type&&H.content_type.startsWith("image/"),me=(H.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${te?`<div class="attachment-thumb-container"><img src="${H.url}" alt="${H.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${H.url}" target="_blank" class="attachment-link">${H.filename}</a>
                                        <span class="attachment-meta">${H.content_type} \u2022 ${me}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${i.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${i.content||"(empty)"}</pre>
                        </div>
                        ${z}
                    `}M=`
                    <div class="event-details" style="${k}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${E}
                    </div>
                `}let N=document.createElement("div");if(N.className=`event-item ${d} ${m} ${_}`,N.dataset.eventId=s.id,N.onclick=function(E){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(s.id);let I=this.querySelector(".event-details");I&&(I.style.display="none")}else{this.classList.add("expanded"),Y.add(s.id);let I=this.querySelector(".event-details");I&&(I.style.display="block")}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${D}</span>
                    <span class="event-date">${C}</span>
                </div>
                <div class="event-icon"><i class='bx ${h}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${x}">${x}</span>
                        ${s.service}
                    </div>
                    <div class="event-message">${F}</div>
                    ${M}
                </div>
            `,w){let E=N.querySelector(".close-details-btn");E&&E.addEventListener("click",z=>{z.stopPropagation();let I=z.target.closest(".event-item");if(I){I.classList.remove("expanded"),Y.delete(s.id);let H=I.querySelector(".event-details");H&&(H.style.display="none")}})}return N},b=Array.from(e.children),u=new Map(b.map(s=>[s.dataset.eventId,s])),g=new Set(ee.map(s=>s.id));b.forEach(s=>{let i=s.dataset.eventId;(!i||!g.has(i))&&s.remove()});let c=null;ee.forEach((s,i)=>{let l=u.get(s.id);(!l||t)&&(l&&l.remove(),l=p(s),!l)||(i===0?e.firstElementChild!==l&&e.prepend(l):c&&c.nextElementSibling!==l&&c.after(l),c=l)}),J=Date.now(),A(3,J)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=S("offline","Failed to load events.","The event service may be offline or unreachable."))}}function bt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),n=document.getElementById("event-filters"),o=document.getElementById("events-toggle-view"),a=document.getElementById("events-toggle-view-logs");o&&a&&!o.dataset.listenerAttached&&(o.onclick=()=>{o.classList.add("active"),a.classList.remove("active"),document.getElementById("timeline-view-container").style.display="block",document.getElementById("logs-view-container").style.display="none"},a.onclick=()=>{a.classList.add("active"),o.classList.remove("active"),document.getElementById("timeline-view-container").style.display="none",document.getElementById("logs-view-container").style.display="block",le()},o.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ee.forEach(r=>Y.add(r.id)),X(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),X(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.querySelectorAll(".filter-btn").forEach(r=>{r.onclick=()=>{n.querySelectorAll(".filter-btn").forEach(f=>f.classList.remove("active")),r.classList.add("active"),re=r.dataset.filter,X(!0)}}),n.dataset.listenerAttached="true")}var Je=()=>`
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
        <div id="hardware-info-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
            <p style="color: #ccc; font-size: 0.9em; margin: 0;">Loading hardware info...</p>
        </div>
    `;async function xe(){await Promise.all([Xe(),xt(),wt()])}var ce=null,de=null,pe=null;async function Ye(){try{return await(await $("/system_monitor")).json()}catch{return null}}async function Ke(){try{return await(await $("/system/hardware")).json()}catch{return null}}async function yt(){try{return await(await $("/processes")).json()}catch{return null}}async function ht(){try{return await(await $("/analyst/status")).json()}catch{return null}}async function xt(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),n=document.getElementById("hardware-refresh-btn"),o=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let i="",l=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(i+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${l} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let x=s.CPU[0];i+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${x.LABEL}">${x.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${x.COUNT} Cores / ${x.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((x,h)=>{let w=(x.VRAM/1073741824).toFixed(1);i+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${h}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${x.LABEL}">${x.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${w} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let x=0,h=0;s.STORAGE.forEach(y=>{x+=y.USED,h+=y.SIZE});let w=(x/(1024*1024*1024)).toFixed(1),d=(h/(1024*1024*1024)).toFixed(1),m=h>0?(x/h*100).toFixed(0):0;i+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} / ${d} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${m>90?"#ff4d4d":"#00ff00"}; width: ${m}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=i};if(e&&n){n.dataset.listenerAttached||(n.onclick=async()=>{n.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let i=await Ke();i?(o(i),n.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',n.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},n.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let i=await Ke();o(i)}}if(!t)return;let a=await Ye();if(!a||!a.services){t.innerHTML=S("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}ce=Date.now(),A(3,ce);let r=a.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function f(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function v(s){if(!s||s==="N/A"||s==="unknown")return"-";let i=s.match(/^(\d+\.\d+\.\d+)/);return i?i[0]:s.split(".").slice(0,3).join(".")||"-"}function p(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function b(s){if(!s||s==="N/A"||s==="unknown")return"-";let i=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!i)return"-";let l=parseInt(i[1])||0,x=parseInt(i[2])||0,h=parseInt(i[3])||0,w=parseFloat(i[4])||0,d=l*86400+x*3600+h*60+w,m=Math.floor(d/86400);if(m>0)return`${m}d`;let y=Math.floor(d/3600);if(y>0)return`${y}h`;let _=Math.floor(d/60);return _>0?`${_}m`:`${Math.floor(d)}s`}function u(s){let i=s.status==="online",l=i?"service-widget-online":"service-widget-offline",x=i?"bx-check-circle":"bx-x-circle",h=i?"OK":"BAD",w=s.version?v(s.version.str):"-",d=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",m=s.memory&&s.memory!=="N/A"?s.memory:"-",y=d!=="-"?"#00ff00":"#666",_=d!=="-"?"#fff":"#666",k=m!=="-"?"#00ff00":"#666",L=m!=="-"?"#fff":"#666",D=b(s.uptime),C="";return i?C=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${w}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${D}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${y};"></i>
                        <span style="color: ${_};">${d}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${k};"></i>
                        <span style="color: ${L};">${m}</span>
                    </div>
                </div>`:C='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${l}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${x}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${p(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${C}</div></div>`}let g=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),c=new Set(r.map(s=>s.id));for(let[s,i]of g)c.has(s)||i.remove();r.forEach(s=>{let i=u(s),l=g.get(s.id);l?l.outerHTML!==i&&(l.outerHTML=i):t.insertAdjacentHTML("beforeend",i)})}async function wt(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Ye();if(!e){t.innerHTML=S("offline","Failed to load model status.");return}de=Date.now(),A(3,de);let n=e.models||[],o=e.whisper;Array.from(t.children).forEach(v=>{v.classList.contains("service-widget")||v.remove()});function a(v){let p=v.status==="Ready";return`
                <div class="service-widget ${p?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${p?"READY":"NOT FOUND"}</span>
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
                </div>`}function r(v){let p=v.status==="Downloaded",b=p?"service-widget-online":"service-widget-offline",u=p?"OK":"MISSING",g=p&&v.size>0?`${(v.size/1e9).toFixed(2)} GB`:"-",c=v.name;return v.type==="custom"&&c.endsWith(":latest")&&(c=c.replace(":latest","")),`<div class="service-widget ${b}" data-model-name="${v.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${c}</h3><span class="service-widget-status">${u}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${v.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${g}</span></div></div></div>`}let f="";if(o&&(f+=a(o)),f+=n.map(r).join(""),!f){t.innerHTML=S("empty","No models found.");return}t.innerHTML!==f&&(t.innerHTML=f)}async function Xe(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),n=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),a=document.getElementById("analyst-idle-val"),r=document.getElementById("analyst-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await $("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),Xe()}catch{r.innerHTML="<i class='bx bx-error'></i> Failed"}},r.dataset.listenerAttached="true");let f=await ht();if(f){let c=Math.floor(Date.now()/1e3),s=f.active_tier,i=(l,x,h)=>{if(s===h||h==="guardian"&&s==="tests"){l.textContent="Working",l.style.color="#bb86fc";return}let w=x-c;if(w<=0)l.textContent="Ready",l.style.color="#5eff5e";else{let d=Math.floor(w/60),m=w%60;l.textContent=`${d}m ${m}s`,l.style.color="#fff"}};if(e&&f.guardian&&i(e,f.guardian.next_run,"guardian"),n&&f.architect&&i(n,f.architect.next_run,"architect"),o&&f.strategist&&i(o,f.strategist.next_run,"strategist"),a&&f.system_idle_time!==void 0){let l=f.system_idle_time,x=Math.floor(l/60),h=l%60;a.textContent=`${x}m ${h}s`,l>300?a.style.color="#5eff5e":l>60?a.style.color="#ffa500":a.style.color="#fff"}}else[e,n,o,a].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let v=await yt(),p=document.getElementById("vitals-processes-val");if(p)if(v){let c=v.length;p.textContent=c>0?`${c} Active`:"Idle",p.style.color=c>0?"#bb86fc":"#fff"}else p.textContent="-",p.style.color="#888";if(v===null){t.innerHTML=S("offline","Failed to load process status.");return}if(pe=Date.now(),A(3,pe),v.length===0){t.innerHTML=S("empty","No active processes."),U(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function b(c){let s=Math.floor(Date.now()/1e3-c.start_time),i=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",l=c.channel_id,x={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return x[l]?l=x[l]:/^\d+$/.test(l)&&(l=`Channel ${l}`),`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${l}</h3>
                        ${i}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${c.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${s}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${c.pid}</span>
                        </div>
                    </div>
                </div>`}let u=new Map(Array.from(t.querySelectorAll(".process-widget")).map(c=>[c.dataset.channelId,c])),g=new Set(v.map(c=>c.channel_id));for(let[c,s]of u)g.has(c)||s.remove();v.forEach(c=>{let s=b(c),i=u.get(c.channel_id);i?i.outerHTML!==s&&(i.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),U(3,v.length)}function we(){let t=be(),e=Me()||"master@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="settings-section">
                <h2 class="settings-section-title" style="margin-bottom: 15px;">Authorized Users</h2>
                <div class="user-profiles-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <!-- Master User Profile -->
                    <div class="user-profile-section" style="background: rgba(187, 134, 252, 0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(187, 134, 252, 0.2); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #bb86fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            ${e.charAt(0).toUpperCase()}
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #fff; text-align: left;">Master User</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #bb86fc; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${e}</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 313071000877137920</p>
                        </div>
                    </div>

                    <!-- Admin Profile -->
                    <div class="user-profile-section" style="background: rgba(207, 102, 121, 0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(207, 102, 121, 0.2); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #cf6679; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            A
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #eee; text-align: left;">Admin</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #cf6679; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">admin@easter.company</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 1426957003108122656</p>
                        </div>
                    </div>

                    <!-- Moderator Profile -->
                    <div class="user-profile-section" style="background: rgba(3, 218, 198, 0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(3, 218, 198, 0.2); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #03dac6; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            M
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #eee; text-align: left;">Moderator</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #03dac6; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">mod@easter.company</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 1437617331529580614</p>
                        </div>
                    </div>

                    <!-- User Profile -->
                    <div class="user-profile-section" style="background: rgba(255, 255, 255, 0.03); padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #666; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            B
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #eee; text-align: left;">User</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #888; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">bashful@bashful.sh</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 742895103462109285</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theme-selector">
                ${Object.values(B).map(a=>`
                    <div class="theme-card ${t===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===B.AUTO?"Automatic theme selection.":a===B.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${o?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Ee(t){let e=document.querySelector("#main-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(a=>{a.addEventListener("click",function(){let r=this.dataset.theme;Ne(r),t.setContent(we()),Ee(t)})});let n=document.getElementById("notifications-toggle");n&&(n.onclick=async a=>{if(a.target.checked)try{await Notification.requestPermission()!=="granted"&&(a.target.checked=!1)}catch{a.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=a=>{let r=a.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}var Qe=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Placeholder for the future Dexter chat interface.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Trigger a manual Tier 1 Guardian system audit.",usage:"dex guardian",category:"cognitive"},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the real-time health of all system services.",usage:"dex status [service]",category:"system"},{id:"build",title:"Build",icon:"bx-package",description:"Build and install the entire ecosystem from source.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Fetch and apply the latest updates for all components.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Execute the comprehensive system-wide test suite.",usage:"dex test [service]",category:"lifecycle"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"Stream or tail logs from any manageable service.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"View detailed hardware vitals and OS-level info.",usage:"dex system [--json]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"View or modify the central service-map.json.",usage:"dex config <service> [field]",category:"system"}],Et=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>
    `;for(let[n,o]of Object.entries(t)){let a=Qe.filter(r=>r.category===n);a.length!==0&&(e+=`
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
        `)}return e+="</div>",e},Le=!1;function $t(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Ze(),document.getElementById("terminal-action-btn").onclick=()=>Ze());let n=document.getElementById("cli-terminal-body");return n.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Le=!0,n}function Ze(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Le=!1}function $e(t,e,n="output"){if(!Le)return;let o=document.createElement("div");o.className=`terminal-line terminal-${n}`,n==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=ne(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function Lt(t){let e=Qe.find(o=>o.id===t);if(!e)return;let n=$t(e);$e(n,`dex ${t}`,"prompt");try{let a=(await $("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),r=new TextDecoder;for(;;){let{value:f,done:v}=await a.read();if(v)break;r.decode(f,{stream:!0}).split(`
`).forEach(u=>{if(u.trim()==="")return;let g="output";u.includes("[ERROR]")?g="error":u.includes("[SUCCESS]")||u.includes("\u2713")?g="success":u.includes("!")&&(g="warning"),$e(n,u,g)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch(o){$e(n,`Connection Error: ${o.message}`,"error"),document.getElementById("terminal-status-badge").className="terminal-status status-error",document.getElementById("terminal-status-badge").textContent="Failed"}finally{document.getElementById("terminal-action-btn").style.display="block"}}function et(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=Et(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.03)"}),e.addEventListener("click",()=>{let n=e.dataset.cmd;if(n==="chat"){alert("Connection to cognitive core pending deployment...");return}Lt(n)})}))}async function Tt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${ye()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function tt(){Tt(),He(),Ae(),window.location.pathname.includes("/dex")&&et();let t=Ie();Ce(t),_e();let e=document.querySelector("footer"),n=null;function o(){n=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(p=>p.classList.remove("active","inactive"))}function a(p,b=null,u=null){let g=n&&n.id===p.id;if(g&&u!==null){let c=document.querySelector(`#${p.id} .tab[data-tab-index="${u}"]`);c&&c.click(),document.querySelectorAll(".nav-right i").forEach(s=>{let i=s===b;s.classList.toggle("active",i),s.classList.toggle("inactive",!i&&b)});return}n&&n.close(!g),g?n=null:setTimeout(()=>{if(p.open(),n=p,u!==null){let c=document.querySelector(`#${p.id} .tab[data-tab-index="${u}"]`);c&&c.click()}document.querySelectorAll(".nav-right i").forEach(c=>{let s=c===b;c.classList.toggle("active",s),c.classList.toggle("inactive",!s&&b)}),e?.classList.add("hide")},n?220:0)}async function r(){await Promise.all([q(),X(),he(),xe()]);let p=setInterval(()=>{if(!v.isOpen())return clearInterval(p);A(0,G),A(1,J),A(3,pe),A(3,ce),A(3,de)},1e3),b=setInterval(()=>{if(!v.isOpen())return clearInterval(b);q(),X(),he(),xe()},3e3)}let f=ge({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),v=ge({id:"main-window",tabs:[{icon:"bx-bell",title:"Notifications",content:ze(),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:Ve(),"data-tab-index":1},{icon:"bx-bulb",title:"Ideas",content:Re(),"data-tab-index":2},{icon:"bx-server",title:"System",content:Je(),"data-tab-index":3},{icon:"bx-cog",title:"Settings",content:we(),"data-tab-index":4}],icon:"bx-layer",onClose:o,onOpen:()=>{r(),setTimeout(()=>Ee(v),50)}});t?(document.getElementById("notif-icon")?.addEventListener("click",p=>a(v,p.currentTarget,0)),document.getElementById("events-icon")?.addEventListener("click",p=>a(v,p.currentTarget,1)),document.getElementById("ideas-icon")?.addEventListener("click",p=>a(v,p.currentTarget,2)),document.getElementById("system-icon")?.addEventListener("click",p=>a(v,p.currentTarget,3)),document.getElementById("settings-icon")?.addEventListener("click",p=>a(v,p.currentTarget,4))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(f),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",p=>{p.preventDefault();try{Be(document.getElementById("email-input").value),window.location.reload()}catch(b){let u=document.getElementById("login-error");u&&(u.textContent=b.message,u.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt();})();
//# sourceMappingURL=dex.ca8e56cf.js.map
