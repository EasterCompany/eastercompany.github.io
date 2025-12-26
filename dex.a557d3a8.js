(()=>{function _e(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ke(t=!1){let i=`
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
    `,a=document.createElement("nav");a.innerHTML=i,document.body.prepend(a)}function Ce(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function ye(t){let e=null,i=t.onClose||null,a=t.onOpen||null;function n(){if(e){e.classList.add("open"),window.addEventListener("resize",d),a&&setTimeout(a,10);return}let y=document.getElementById("windows-container");y||(y=document.createElement("div"),y.id="windows-container",y.className="windows-container",document.body.appendChild(y)),e=document.createElement("div"),e.id=t.id,e.className="window";let b=t.icon||"bx-window",u="",s="",r;t.tabs&&t.tabs.length>0?(u=`<div class="tab-bar">${t.tabs.map((S,$)=>{let h;return S.icon?h=`<i class="bx ${S.icon}"></i>`:S.title&&S.title.length>0?h=`<span class="tab-glyph">${S.title.charAt(0).toUpperCase()}</span>`:h='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${$===0?"active":""}" data-tab-index="${$}">
                        ${h}
                        <span class="tab-title">${S.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${$}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,r=`<div class="window-content">${t.tabs.map((S,$)=>`<div class="tab-content ${$===0?"active":""}" data-tab-content="${$}">${S.content}</div>`).join("")}</div>`):(t.title&&(s=`<div class="window-title">${t.title}</div>`),r=`<div class="window-content">${t.content}</div>`);let c=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${u}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=c+r,y.appendChild(e);let v=e.querySelector(".window-close");v&&v.addEventListener("click",o=>{o.stopPropagation(),l()}),window.addEventListener("resize",d),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(m=>{m.addEventListener("click",()=>{let S=m.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach($=>$.classList.remove("active")),m.classList.add("active"),e.querySelectorAll(".tab-content").forEach($=>$.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${S}"]`).classList.add("active"),f(m,e)})}),setTimeout(()=>{e.classList.add("open"),a&&a()},10)}function d(){if(!e||!e.classList.contains("open"))return;let y=e.querySelector(".tab.active");y&&f(y,e)}function f(y,b){setTimeout(()=>{let u=b.querySelector(".tab-bar");if(u){let s=Array.from(u.querySelectorAll(".tab")),r=s.indexOf(y),c=u.clientWidth,v=s[Math.max(0,r-2)],o=s[Math.min(s.length-1,r+2)],m=v.offsetLeft-u.offsetLeft-25,$=o.offsetLeft+o.offsetWidth-u.offsetLeft+25-m,h;$<=c?h=m-(c-$)/2:h=y.offsetLeft-u.offsetLeft-c/2+y.offsetWidth/2,u.scrollTo({left:h,behavior:"smooth"})}},350)}function l(y=!1){e&&(window.removeEventListener("resize",d),y?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function p(y){if(e){let b=e.querySelector(".window-content");b&&(b.innerHTML=y)}}function w(){return e&&e.classList.contains("open")}return{open:n,close:l,setContent:p,isOpen:w,id:t.id}}var he="easter_user_email";function Me(){return localStorage.getItem(he)!==null}function Ae(){return localStorage.getItem(he)}function Be(t){if(!t||!t.includes("@"))throw new Error("Invalid email address");if(!t.trim().toLowerCase().endsWith("@easter.company"))throw new Error("Access denied. Please check your credentials.");localStorage.setItem(he,t.trim())}var De="easter_theme",B={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function we(){return localStorage.getItem(De)||B.AUTO}function it(){let t=window.innerWidth,e=window.innerHeight,i=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?B.ANIMATED:(t===1920&&e===1080&&i||t<=1920||e<=1080,B.DEFAULT)}function Ne(t){if(!Object.values(B).includes(t))throw new Error("Invalid theme");localStorage.setItem(De,t),xe(t)}function xe(t,e=!1){let i=document.body,a=t===B.AUTO?it():t;if(e||(i.classList.add("theme-transitioning"),setTimeout(()=>{i.classList.remove("theme-transitioning")},300)),Object.values(B).forEach(n=>{i.classList.remove(`theme-${n}`)}),i.classList.add(`theme-${t}`),a===B.ANIMATED){if(!document.querySelector(".background")){let n=document.createElement("div");n.className="background",document.body.prepend(n)}}else{let n=document.querySelector(".background");n&&(e?n.remove():(n.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{n.remove()},400)))}}function He(){let t=we();if(xe(t,!0),t===B.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{xe(B.AUTO)},300)})}}function L(t,e,i=null){let n={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",d=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${n} placeholder-icon'></i><p class="placeholder-message">${e}</p>${d}</div>`}function _(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function C(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let a=Date.now(),n=Math.floor((a-e)/1e3),d;n<60?d=`${n}s ago`:n<3600?d=`${Math.floor(n/60)}m ago`:d=`${Math.floor(n/3600)}h ago`,i.textContent=`Last updated: ${d}`}function z(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let a=i.querySelector(".notification-badge");a&&(e>0?(a.textContent=e>9?"9+":e,a.style.display="flex"):a.style.display="none")}function le(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;z(0,e)}var Oe=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,G=null,q=new Set,re=[];async function R(t=!1){let e=document.getElementById("notifications-list");if(!e)return;nt(),t&&(e.innerHTML="<p>Updating...</p>");let i=localStorage.getItem("service_map");if(!i){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(i).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!a){e.innerHTML=L("error","Event service not found in service map.");return}let d=`http://${a.domain==="0.0.0.0"?"127.0.0.1":a.domain}:${a.port}/events?ml=1000&format=json&event.type=system.notification.generated`;try{let f=await fetch(d);if(!f.ok)throw new Error("Service is offline or unreachable.");let p=(await f.json()).events||[];G=Date.now(),C(0,G);let w=Date.now(),y=24*60*60*1e3,b=p.filter(g=>{let x=localStorage.getItem(`notification_read_ts_${g.id}`);if(!x)return!0;let E=parseInt(x);return w-E<y});b.sort((g,x)=>{let E=U=>{let H=U.event;if(typeof H=="string")try{H=JSON.parse(H)}catch{return"low"}return(H.priority||"low").toLowerCase()},j=U=>U==="critical"?4:U==="high"?3:U==="medium"?2:1,I=j(E(g)),k=j(E(x));return I!==k?k-I:x.timestamp-g.timestamp}),re=b;let u=g=>{let x=g.event;if(typeof x=="string")try{x=JSON.parse(x)}catch{return"low"}return(x.priority||"low").toLowerCase()},s=[],c=new Set(b.map(g=>u(g))).size>1;if(b.length>0){let g=null;b.forEach(x=>{let E=u(x);c&&E!==g&&(s.push({id:`divider-${E}`,type:"divider",label:E.toUpperCase()}),g=E),s.push(x)})}if(t&&(e.innerHTML=""),b.length===0){e.innerHTML=L("empty","No notifications yet."),le();return}let v=g=>{let x=g.event;if(typeof x=="string")try{x=JSON.parse(x)}catch{return null}let E=x.title||"Untitled Notification",j=x.body||"No description provided.",I=x.priority||"low",k=!!x.alert,U=x.category||"system",H=x.related_event_ids||[],A=!!localStorage.getItem(`notification_read_ts_${g.id}`),D=new Date(g.timestamp*1e3),T=D.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),O=D.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),M=A?"event-border-grey":"event-border-blue";!A&&k&&(M="event-border-red"),A&&(I==="high"||I==="critical")?M="event-border-red":A&&I==="medium"&&(M="event-border-orange");let N=A?"notification-read":"notification-unread",oe=q.has(g.id),fe=oe?"expanded":"",st=oe?"display: block;":"display: none;",Le="",Te="";H.length>0&&(Te=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${H.map(ee=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${ee.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),Le=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${I==="high"||I==="critical"?"#ff4d4d":I==="medium"?"#ffa500":"#888"}">${I.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${_(j)}</p>
                </div>
                ${Te}
            `;let P=document.createElement("div");P.className=`event-item notification-item ${M} ${N} ${fe} cursor-pointer`,P.dataset.notificationId=g.id,P.onclick=function(ee){if(this.classList.contains("expanded")){this.classList.remove("expanded"),q.delete(g.id);let te=this.querySelector(".event-details");te&&(te.style.display="none")}else{this.classList.add("expanded"),q.add(g.id);let te=this.querySelector(".event-details");if(te&&(te.style.display="block"),!localStorage.getItem(`notification_read_ts_${g.id}`)){localStorage.setItem(`notification_read_ts_${g.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let be="event-border-grey";I==="high"||I==="critical"?be="event-border-red":I==="medium"&&(be="event-border-orange"),this.classList.add(be),le()}}},P.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${T}</span>
                    <span class="event-date">${O}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${U.toUpperCase()} ${k?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${E}</div>
                    <div class="event-details" style="${st}">
                        <div class="event-details-header">
                            <h4>${k?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${Le}
                    </div>
                </div>
            `;let Ie=P.querySelector(".close-details-btn");return Ie&&Ie.addEventListener("click",ee=>{ee.stopPropagation(),P.classList.remove("expanded");let ge=P.querySelector(".event-details");ge&&(ge.style.display="none"),q.delete(g.id)}),P},o=g=>{let x=document.createElement("div");x.className="notification-divider",x.dataset.notificationId=g.id;let E="#888888";return g.label==="CRITICAL"?E="#ff4d4d":g.label==="HIGH"?E="#ff8888":g.label==="MEDIUM"&&(E="#ffa500"),x.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${E}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,x.innerHTML=`<span style="white-space: nowrap;">${g.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${E}44, transparent); flex-grow: 1;"></div>`,x},m=Array.from(e.children),S=new Map(m.map(g=>[g.dataset.notificationId,g])),$=new Set(s.map(g=>g.id));m.forEach(g=>{let x=g.dataset.notificationId;(!x||!$.has(x))&&g.remove()});let h=null;s.forEach((g,x)=>{let E=S.get(g.id);(!E||t)&&(E&&E.remove(),g.type==="divider"?E=o(g):E=v(g),!E)||(x===0?e.firstElementChild!==E&&e.prepend(E):h&&h.nextElementSibling!==E&&h.after(E),h=E)}),G=Date.now(),C(0,G),le()}catch(f){console.error("Error fetching notifications:",f),e.children.length===0&&(e.innerHTML=L("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function nt(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),i=document.getElementById("notif-close-all"),a=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{re.forEach(n=>{localStorage.getItem(`notification_read_ts_${n.id}`)||localStorage.setItem(`notification_read_ts_${n.id}`,Date.now().toString())}),R(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{re.forEach(n=>{q.add(n.id),localStorage.getItem(`notification_read_ts_${n.id}`)||localStorage.setItem(`notification_read_ts_${n.id}`,Date.now().toString())}),R(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{q.clear(),R(!0)},i.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{let n=Date.now()-1728e5;re.forEach(d=>{localStorage.setItem(`notification_read_ts_${d.id}`,n.toString())}),q.clear(),R(!0)},a.dataset.listenerAttached="true")}var je=()=>`
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
`,F=new Set,Ue=[],V=null;async function W(t=!1){let e=document.getElementById("roadmap-list");if(!e)return;at();let i=localStorage.getItem("service_map");if(!i)return;let a=null;try{a=(JSON.parse(i).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{return}if(!a)return;let d=`http://${a.domain==="0.0.0.0"?"127.0.0.1":a.domain}:${a.port}/roadmap`;try{let f=await fetch(d);if(!f.ok)throw new Error("Offline");let l=await f.json();if(Ue=l,l.length===0){e.innerHTML=L("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let p=s=>{let r=F.has(s.id),c=s.state==="draft",v=s.state==="published",o=s.state==="consumed",m="event-border-grey";v&&(m="event-border-blue"),o&&(m="event-border-purple");let $=new Date(s.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${m} cursor-pointer ${r?"expanded":""}`,h.dataset.itemId=s.id,h.onclick=x=>{if(x.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",F.delete(s.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",F.add(s.id))};let g=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${s.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${$.split(",")[1]}</span>
          <span class="event-date">${$.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${g}</div>
          <div class="event-message" style="white-space: pre-wrap;">${_(s.content)}</div>
          <div class="event-details" style="${r?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${o?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${v?"bx-pause":"bx-rocket"}'></i> ${v?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${o?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(s.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>ot(s)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>lt(s)),h.querySelector(".delete-btn")?.addEventListener("click",()=>rt(s.id)),h.querySelector(".close-details-btn")?.addEventListener("click",x=>{x.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",F.delete(s.id)}),h},w=Array.from(e.children),y=new Map(w.map(s=>[s.dataset.itemId,s])),b=new Set(l.map(s=>s.id));w.forEach(s=>{let r=s.dataset.itemId;(!r||!b.has(r))&&s.remove()});let u=null;l.forEach((s,r)=>{let c=y.get(s.id);(!c||t)&&(c&&c.remove(),c=p(s),!c)||(r===0?e.firstElementChild!==c&&e.prepend(c):u&&u.nextElementSibling!==c&&u.after(c),u=c)})}catch{e.innerHTML=L("error","Failed to load roadmap.")}}function at(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),a=document.getElementById("roadmap-expand-all"),n=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{V=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",V=null},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let d=document.getElementById("roadmap-editor-input").value;if(!d.trim())return;let l=JSON.parse(localStorage.getItem("service_map")).services.cs.find(b=>b.id==="dex-event-service"),p=l.domain==="0.0.0.0"?"127.0.0.1":l.domain,w=V?`http://${p}:${l.port}/roadmap/${V}`:`http://${p}:${l.port}/roadmap`,y=V?"PATCH":"POST";try{await fetch(w,{method:y,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:d})}),document.getElementById("roadmap-editor-container").style.display="none",W(!0)}catch(b){console.error(b)}},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{Ue.forEach(d=>F.add(d.id)),W(!0)},a.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{F.clear(),W(!0)},n.dataset.listenerAttached="true")}function ot(t){V=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function lt(t){let e=t.state==="published"?"draft":"published",a=JSON.parse(localStorage.getItem("service_map")).services.cs.find(d=>d.id==="dex-event-service"),n=a.domain==="0.0.0.0"?"127.0.0.1":a.domain;try{await fetch(`http://${n}:${a.port}/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),W(!0)}catch(d){console.error(d)}}async function rt(t){if(!confirm("Delete this roadmap item?"))return;let i=JSON.parse(localStorage.getItem("service_map")).services.cs.find(n=>n.id==="dex-event-service"),a=i.domain==="0.0.0.0"?"127.0.0.1":i.domain;try{await fetch(`http://${a}:${i.port}/roadmap/${t}`,{method:"DELETE"}),F.delete(t),W(!0)}catch(n){console.error(n)}}var ze=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,Pe=null,K=new Set,qe=[];async function ce(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;ct();let i=localStorage.getItem("service_map");if(!i){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(i).services?.cs||[]).find(l=>l.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!a){e.innerHTML=L("error","Event service not found in service map.");return}let d=`http://${a.domain==="0.0.0.0"?"127.0.0.1":a.domain}:${a.port}/events?ml=1000&format=json&event.type=system.blueprint.generated`;try{let f=await fetch(d);if(!f.ok)throw new Error("Service is offline or unreachable.");let p=(await f.json()).events||[];if(qe=p,Pe=Date.now(),C(2,Pe),p.length===0){e.innerHTML=L("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),z(1,0);return}t&&(e.innerHTML="");let w=r=>{let c=r.event;if(typeof c=="string")try{c=JSON.parse(c)}catch{return null}let v=c.title||"Untitled Blueprint",o=c.summary||c.body||"No summary provided.",m=c.content||"",S=c.category||"architecture",$=c.affected_services||[],h=c.implementation_path||[],g=new Date(r.timestamp*1e3),x=g.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),E=g.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),j=K.has(r.id),I=j?"display: block;":"display: none;",k=document.createElement("div");k.className=`event-item notification-item event-border-purple cursor-pointer ${j?"expanded":""}`,k.dataset.blueprintId=r.id,k.onclick=function(A){if(this.classList.contains("expanded")){this.classList.remove("expanded"),K.delete(r.id);let T=this.querySelector(".event-details");T&&(T.style.display="none")}else{this.classList.add("expanded"),K.add(r.id);let T=this.querySelector(".event-details");T&&(T.style.display="block")}};let U=$.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${$.join(", ")}</div>`:"",H="";h.length>0&&(H=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${h.map(A=>`<li>${_(A)}</li>`).join("")}
                        </ul>
                    </div>
                `),k.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${x}</span>
                    <span class="event-date">${E}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${S.toUpperCase()}</div>
                    <div class="event-message">${v}</div>
                    <div class="event-details" style="${I}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${_(o)}
                        </div>
                        ${U}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${_(m)}</p>
                        </div>
                        ${H}
                    </div>
                </div>
            `;let J=k.querySelector(".close-details-btn");return J&&J.addEventListener("click",A=>{A.stopPropagation(),k.classList.remove("expanded");let D=k.querySelector(".event-details");D&&(D.style.display="none"),K.delete(r.id)}),k},y=Array.from(e.children),b=new Map(y.map(r=>[r.dataset.blueprintId,r])),u=new Set(p.map(r=>r.id));y.forEach(r=>{let c=r.dataset.blueprintId;(!c||!u.has(c))&&r.remove()});let s=null;p.forEach((r,c)=>{let v=b.get(r.id);(!v||t)&&(v&&v.remove(),v=w(r),!v)||(c===0?e.firstElementChild!==v&&e.prepend(v):s&&s.nextElementSibling!==v&&s.after(v),s=v)}),z(2,p.length)}catch(f){console.error("Error fetching blueprints:",f),e.children.length===0&&(e.innerHTML=L("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function ct(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{qe.forEach(i=>K.add(i.id)),ce(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{K.clear(),ce(!0)},e.dataset.listenerAttached="true")}var Re=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
            </div>
            ${je()}
        </div>

        <div class="blueprints-section">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-paint' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
            </div>
            ${ze()}
        </div>
    </div>
`;async function $e(){await Promise.all([W(),ce()])}var dt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Fe(t,e){let i=dt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(i=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let a=i.replace(/\{(\w+)\}/g,(n,d)=>e[d]!==void 0&&e[d]!==null?e[d]:n);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(a+=` (Translation: ${e.english_translation})`),a}function Y(t,e,i=null){let n={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",d=i?`<p class="placeholder-action">${i}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${n} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${d}
        </div>
    `}function We(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var pt=null;async function de(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=Y("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let i;try{i=JSON.parse(e)}catch(f){return console.error("Error parsing service_map from localStorage:",f),t.classList.add("placeholder-active"),t.innerHTML=Y("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let a=null;if(i&&typeof i.services=="object"){let f=["cs","be","th"];for(let l of f)if(Array.isArray(i.services[l])){let p=i.services[l].find(w=>w.short_name==="event"||w.id==="event"||w.id==="dex-event-service");if(p){a=p;break}}}if(!a)return t.classList.add("placeholder-active"),t.innerHTML=Y("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let n=a.domain==="0.0.0.0"?"127.0.0.1":a.domain,d=`http://${n}:${a.port}/logs`;try{let f=await fetch(d);if(!f.ok)return t.classList.add("placeholder-active"),t.innerHTML=Y("offline","Event service is offline.","Please ensure the event service is running."),!1;let l=await f.json();if(!l||l.length===0)return t.classList.add("placeholder-active"),t.innerHTML=Y("empty","No logs found.","Service logs will appear here when available."),!1;let p=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],w=l.filter(b=>!p.includes(b.id));w.forEach(b=>{b.logs&&Array.isArray(b.logs)?b.logs.reverse():b.logs=[]}),w.reverse();let y=w.map(b=>{let u=b.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${b.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(u)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${b.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${u}</pre>
                </div>
            `}).join("");return t.innerHTML=y,document.querySelectorAll(".copy-logs-btn").forEach(b=>{b.addEventListener("click",()=>{let u=unescape(b.dataset.logs);navigator.clipboard.writeText(u).then(()=>{let s=b.querySelector("i");s.classList.remove("bx-copy"),s.classList.add("bx-check"),setTimeout(()=>{s.classList.remove("bx-check"),s.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(b=>{b.addEventListener("click",async()=>{let u=b.dataset.serviceId;if(!confirm(`Are you sure you want to clear logs for ${u}?`))return;let s=`http://${n}:${a.port}/logs?service_id=${u}`;try{(await fetch(s,{method:"DELETE"})).ok?de():console.error("Failed to clear logs")}catch(r){console.error("Error clearing logs:",r)}})}),pt=Date.now(),!0}catch(f){return console.error("Error fetching logs:",f),t.classList.add("placeholder-active"),t.innerHTML=Y("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}var Ge=()=>`
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
`,X=null,Z=new Set,se=[],pe="all",mt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},ut={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Je(t){for(let[e,i]of Object.entries(mt))if(i.includes(t))return e;return"system"}function vt(t){return ut[t]||"bx-square-rounded"}async function Q(t=!1){let e=document.getElementById("events-timeline");if(!e)return;document.getElementById("logs-view-container")?.style.display!=="none"&&de(),ft();let i=localStorage.getItem("service_map");if(!i){e.innerHTML=L("config","No service map configured.","Upload service-map.json in Settings.");return}let a=null;try{a=(JSON.parse(i).services?.cs||[]).find(p=>p.id==="dex-event-service")}catch{e.innerHTML=L("error","Invalid service map data.");return}if(!a){e.innerHTML=L("error","Event service not found in service map.");return}let n=a.domain==="0.0.0.0"?"127.0.0.1":a.domain,d=pe==="all"?100:250,f=`http://${n}:${a.port}/events?ml=${d}&format=json&exclude_types=system.notification.generated`;try{let l=await fetch(f);if(!l.ok)throw new Error("Service is offline or unreachable.");let w=(await l.json()).events||[],y=w;if(pe!=="all"&&(y=w.filter(v=>{let o=v.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return!1}return Je(o.type)===pe})),se=y.slice(0,50),X=Date.now(),C(1,X),se.length===0){e.innerHTML=L("empty","No events found for this filter.");return}t&&(e.innerHTML="");let b=v=>{let o=v.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return null}let m=o.type,S=Je(m),$=vt(m),h=m==="engagement.decision"||m==="messaging.bot.sent_message"||m==="messaging.user.sent_message"||m==="moderation.explicit_content.deleted"||m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="system.cli.command"||m==="system.analysis.audit"||m==="system.test.completed"||m==="error_occurred"||m==="system.cli.status"||m.startsWith("system.roadmap")||m.startsWith("system.process"),g="event-border-grey";h&&(m==="moderation.explicit_content.deleted"||m==="error_occurred"?g="event-border-red":m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="system.analysis.audit"?g="event-border-purple":m==="system.cli.command"||m==="system.cli.status"?g="event-border-orange":m==="system.test.completed"?g=o.test?.status==="OK"&&o.lint?.status==="OK"&&o.format?.status==="OK"?"event-border-blue":"event-border-red":g="event-border-blue");let x=h?"cursor-pointer":"",E=Z.has(v.id),j=E?"expanded":"",I=E?"display: block;":"display: none;",k=new Date(v.timestamp*1e3),U=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),H=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),J=Fe(m,o),A="";if(h){let T="";if(m==="engagement.decision")T=`
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
                    `;else if(m==="messaging.bot.sent_message")T=`
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
                    `;else if(m==="moderation.explicit_content.deleted")T=`
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
                            <pre class="detail-pre">${_(o.raw_output)||"None"}</pre>
                        </div>
                    `;else if(m==="analysis.link.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${o.url}" target="_blank" class="attachment-link">${o.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${_(o.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${_(o.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${_(o.summary)||"None"}</pre>
                        </div>
                    `;else if(m==="analysis.visual.completed"){let O="";o.base64_preview?O=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${o.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:o.url&&(O=`<div class="event-detail-block"><img src="${o.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${o.filename}</span>
                        </div>
                        ${O}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${_(o.description)||"None"}</pre>
                        </div>
                    `}else if(m==="system.cli.command")T=`
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
                            <pre class="detail-pre">${_(o.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(m==="system.analysis.audit")T=`
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
                            <pre class="detail-pre">${_(o.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${_(o.raw_input)}</pre>
                        </div>
                    `;else if(m==="system.test.completed")T=`
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
                    `;else if(m==="error_occurred")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${o.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${_(o.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(o.context||{},null,2)}</pre>
                        </div>
                    `;else if(m==="system.cli.status")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${o.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${_(o.message)}</pre>
                        </div>
                    `;else if(m==="messaging.user.sent_message"){let O="";o.attachments&&o.attachments.length>0&&(O=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${o.attachments.map(N=>{let oe=N.content_type&&N.content_type.startsWith("image/"),fe=(N.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${oe?`<div class="attachment-thumb-container"><img src="${N.url}" alt="${N.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${N.url}" target="_blank" class="attachment-link">${N.filename}</a>
                                        <span class="attachment-meta">${N.content_type} \u2022 ${fe}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${o.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${o.content||"(empty)"}</pre>
                        </div>
                        ${O}
                    `}A=`
                    <div class="event-details" style="${I}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${T}
                    </div>
                `}let D=document.createElement("div");if(D.className=`event-item ${g} ${x} ${j}`,D.dataset.eventId=v.id,D.onclick=function(T){if(!h)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Z.delete(v.id);let M=this.querySelector(".event-details");M&&(M.style.display="none")}else{this.classList.add("expanded"),Z.add(v.id);let M=this.querySelector(".event-details");M&&(M.style.display="block")}},D.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${U}</span>
                    <span class="event-date">${H}</span>
                </div>
                <div class="event-icon"><i class='bx ${$}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${S}">${S}</span>
                        ${v.service}
                    </div>
                    <div class="event-message">${J}</div>
                    ${A}
                </div>
            `,h){let T=D.querySelector(".close-details-btn");T&&T.addEventListener("click",O=>{O.stopPropagation();let M=O.target.closest(".event-item");if(M){M.classList.remove("expanded"),Z.delete(v.id);let N=M.querySelector(".event-details");N&&(N.style.display="none")}})}return D},u=Array.from(e.children),s=new Map(u.map(v=>[v.dataset.eventId,v])),r=new Set(se.map(v=>v.id));u.forEach(v=>{let o=v.dataset.eventId;(!o||!r.has(o))&&v.remove()});let c=null;se.forEach((v,o)=>{let m=s.get(v.id);(!m||t)&&(m&&m.remove(),m=b(v),!m)||(o===0?e.firstElementChild!==m&&e.prepend(m):c&&c.nextElementSibling!==m&&c.after(m),c=m)}),X=Date.now(),C(3,X)}catch(l){console.error("Error fetching events:",l),e.children.length===0&&(e.innerHTML=L("offline","Failed to load events.","The event service may be offline or unreachable."))}}function ft(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters"),a=document.getElementById("events-toggle-view"),n=document.getElementById("events-toggle-view-logs");a&&n&&!a.dataset.listenerAttached&&(a.onclick=()=>{a.classList.add("active"),n.classList.remove("active"),document.getElementById("timeline-view-container").style.display="block",document.getElementById("logs-view-container").style.display="none"},n.onclick=()=>{n.classList.add("active"),a.classList.remove("active"),document.getElementById("timeline-view-container").style.display="none",document.getElementById("logs-view-container").style.display="block",de()},a.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{se.forEach(d=>Z.add(d.id)),Q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Z.clear(),Q(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(d=>{d.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(f=>f.classList.remove("active")),d.classList.add("active"),pe=d.dataset.filter,Q(!0)}}),i.dataset.listenerAttached="true")}var Ke=()=>localStorage.getItem("service_map")?`
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
    `:L("config","No service map configured.","Upload service-map.json in Settings.");async function Ee(){await Promise.all([Xe(),yt(),ht()])}var me=null,ue=null,ve=null;async function Ye(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!e)return null;let a=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system_monitor`,n=await fetch(a);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}catch(t){return console.error("Error fetching system data:",t),null}}async function Ve(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!e)return null;let a=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/system/hardware`,n=await fetch(a);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}catch(t){return console.error("Error fetching hardware data:",t),null}}async function gt(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!e)return null;let a=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/processes`,n=await fetch(a);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}catch(t){return console.error("Error fetching process data:",t),null}}async function bt(){if(!localStorage.getItem("service_map"))return null;try{let e=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(d=>d.id==="dex-event-service");if(!e)return null;let a=`http://${e.domain==="0.0.0.0"?"127.0.0.1":e.domain}:${e.port}/analyst/status`,n=await fetch(a);return n.ok?await n.json():null}catch{return null}}async function yt(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),i=document.getElementById("hardware-refresh-btn"),a=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let r="",c=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(r+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${c} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let v=s.CPU[0];r+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${v.LABEL}">${v.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${v.COUNT} Cores / ${v.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((v,o)=>{let m=(v.VRAM/1073741824).toFixed(1);r+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${o}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${v.LABEL}">${v.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${m} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let v=0,o=0;s.STORAGE.forEach(h=>{v+=h.USED,o+=h.SIZE});let m=(v/(1024*1024*1024)).toFixed(1),S=(o/(1024*1024*1024)).toFixed(1),$=o>0?(v/o*100).toFixed(0):0;r+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${m} / ${S} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${$>90?"#ff4d4d":"#00ff00"}; width: ${$}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=r};if(e&&i){i.dataset.listenerAttached||(i.onclick=async()=>{i.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let r=await Ve();r?(a(r),i.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',i.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},i.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let r=await Ve();a(r)}}if(!t)return;let n=await Ye();if(!n||!n.services){t.innerHTML=L("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}me=Date.now(),C(3,me);let d=n.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function f(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function l(s){if(!s||s==="N/A"||s==="unknown")return"-";let r=s.match(/^(\d+\.\d+\.\d+)/);return r?r[0]:s.split(".").slice(0,3).join(".")||"-"}function p(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function w(s){if(!s||s==="N/A"||s==="unknown")return"-";let r=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!r)return"-";let c=parseInt(r[1])||0,v=parseInt(r[2])||0,o=parseInt(r[3])||0,m=parseFloat(r[4])||0,S=c*86400+v*3600+o*60+m,$=Math.floor(S/86400);if($>0)return`${$}d`;let h=Math.floor(S/3600);if(h>0)return`${h}h`;let g=Math.floor(S/60);return g>0?`${g}m`:`${Math.floor(S)}s`}function y(s){let r=s.status==="online",c=r?"service-widget-online":"service-widget-offline",v=r?"bx-check-circle":"bx-x-circle",o=r?"OK":"BAD",m=s.version?l(s.version.str):"-",S=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",$=s.memory&&s.memory!=="N/A"?s.memory:"-",h=S!=="-"?"#00ff00":"#666",g=S!=="-"?"#fff":"#666",x=$!=="-"?"#00ff00":"#666",E=$!=="-"?"#fff":"#666",j=w(s.uptime),I="";return r?I=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${m}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${j}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${h};"></i>
                        <span style="color: ${g};">${S}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${x};"></i>
                        <span style="color: ${E};">${$}</span>
                    </div>
                </div>`:I='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${c}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${v}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${o}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${p(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${I}</div></div>`}let b=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),u=new Set(d.map(s=>s.id));for(let[s,r]of b)u.has(s)||r.remove();d.forEach(s=>{let r=y(s),c=b.get(s.id);c?c.outerHTML!==r&&(c.outerHTML=r):t.insertAdjacentHTML("beforeend",r)})}async function ht(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Ye();if(!e){t.innerHTML=L("offline","Failed to load model status.");return}ue=Date.now(),C(3,ue);let i=e.models||[],a=e.whisper;Array.from(t.children).forEach(l=>{l.classList.contains("service-widget")||l.remove()});function n(l){let p=l.status==="Ready";return`
                <div class="service-widget ${p?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${p?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${l.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function d(l){let p=l.status==="Downloaded",w=p?"service-widget-online":"service-widget-offline",y=p?"OK":"MISSING",b=p&&l.size>0?`${(l.size/1e9).toFixed(2)} GB`:"-",u=l.name;return l.type==="custom"&&u.endsWith(":latest")&&(u=u.replace(":latest","")),`<div class="service-widget ${w}" data-model-name="${l.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${u}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${l.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${b}</span></div></div></div>`}let f="";if(a&&(f+=n(a)),f+=i.map(d).join(""),!f){t.innerHTML=L("empty","No models found.");return}t.innerHTML!==f&&(t.innerHTML=f)}async function Xe(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),i=document.getElementById("analyst-t2-val"),a=document.getElementById("analyst-t3-val"),n=document.getElementById("analyst-idle-val"),d=document.getElementById("analyst-reset-btn");d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{if(!localStorage.getItem("service_map"))return;let s=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(v=>v.id==="dex-event-service");if(!s)return;let c=`http://${s.domain==="0.0.0.0"?"127.0.0.1":s.domain}:${s.port}/analyst/reset?tier=all`;d.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await fetch(c,{method:"POST"}),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{d.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),Xe()}catch{d.innerHTML="<i class='bx bx-error'></i> Failed"}},d.dataset.listenerAttached="true");let f=await bt();if(f){let u=Math.floor(Date.now()/1e3),s=f.active_tier,r=(c,v,o)=>{if(s===o||o==="guardian"&&s==="tests"){c.textContent="Working",c.style.color="#bb86fc";return}let m=v-u;if(m<=0)c.textContent="Ready",c.style.color="#5eff5e";else{let S=Math.floor(m/60),$=m%60;c.textContent=`${S}m ${$}s`,c.style.color="#fff"}};if(e&&f.guardian&&r(e,f.guardian.next_run,"guardian"),i&&f.architect&&r(i,f.architect.next_run,"architect"),a&&f.strategist&&r(a,f.strategist.next_run,"strategist"),n&&f.system_idle_time!==void 0){let c=f.system_idle_time,v=Math.floor(c/60),o=c%60;n.textContent=`${v}m ${o}s`,c>300?n.style.color="#5eff5e":c>60?n.style.color="#ffa500":n.style.color="#fff"}}else[e,i,a,n].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let l=await gt(),p=document.getElementById("vitals-processes-val");if(p)if(l){let u=l.length;p.textContent=u>0?`${u} Active`:"Idle",p.style.color=u>0?"#bb86fc":"#fff"}else p.textContent="-",p.style.color="#888";if(l===null){t.innerHTML=L("offline","Failed to load process status.");return}if(ve=Date.now(),C(3,ve),l.length===0){t.innerHTML=L("empty","No active processes."),z(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function w(u){let s=Math.floor(Date.now()/1e3-u.start_time),r=u.retries>0?`<span class="process-retry-badge">Retry ${u.retries}</span>`:"",c=u.channel_id,v={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return v[c]?c=v[c]:/^\d+$/.test(c)&&(c=`Channel ${c}`),`
                <div class="service-widget process-widget" data-channel-id="${u.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${c}</h3>
                        ${r}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${u.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${s}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${u.pid}</span>
                        </div>
                    </div>
                </div>`}let y=new Map(Array.from(t.querySelectorAll(".process-widget")).map(u=>[u.dataset.channelId,u])),b=new Set(l.map(u=>u.channel_id));for(let[u,s]of y)b.has(u)||s.remove();l.forEach(u=>{let s=w(u),r=y.get(u.channel_id);r?r.outerHTML!==s&&(r.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),z(3,l.length)}function ie(){let t=we(),e=Ae()||"user@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},a=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="user-profile-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 20px;">
                <div class="user-avatar" style="width: 60px; height: 60px; background: #bb86fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2em; color: #000; font-weight: bold;">
                    ${e.charAt(0).toUpperCase()}
                </div>
                <div class="user-info" style="text-align: left;">
                    <h3 style="margin: 0; font-size: 1.1em; color: #fff; text-align: left;">Master User</h3>
                    <p style="margin: 4px 0 0 0; font-size: 0.9em; color: #888; text-align: left;">${e}</p>
                    <p style="margin: 8px 0 0 0; font-family: monospace; font-size: 0.75em; opacity: 0.5; text-align: left;">UUID: 313071000877137920</p>
                </div>
            </div>

            <div class="theme-selector">
                ${Object.values(B).map(n=>`
                    <div class="theme-card ${t===n?"active":""}" data-theme="${n}">
                        <div class="theme-preview theme-preview-${n.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${n}</h3>
                            <p>${n===B.AUTO?"Automatic theme selection.":n===B.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${t===n?"Active":"Select"}</span>
                        </div>
                    </div>
                `).join("")}
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Configuration</h2>
                <div class="settings-list">
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">Services</label>
                            <span class="settings-item-description">Upload your service-map.json to connect this client to your services.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="service-map-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="service-map-file-name">${localStorage.getItem("service_map")?"service-map.json":"No file selected"}</span>
                            <input type="file" class="file-upload-input" id="service-map-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem("service_map")?'<button class="file-delete-btn" id="service-map-delete-btn" title="Delete service map">\xD7</button>':""}
                        </div>
                        <div class="file-upload-error" id="service-map-error" style="display: none;"></div>
                    </div>
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">Servers</label>
                            <span class="settings-item-description">Upload your server-map.json to connect this client to your servers.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="server-map-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="server-map-file-name">${localStorage.getItem("server_map")?"server-map.json":"No file selected"}</span>
                            <input type="file" class="file-upload-input" id="server-map-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem("server_map")?'<button class="file-delete-btn" id="server-map-delete-btn" title="Delete server map">\xD7</button>':""}
                        </div>
                        <div class="file-upload-error" id="server-map-error" style="display: none;"></div>
                    </div>
                    <div class="settings-item settings-item-input">
                        <div>
                            <label class="settings-item-label">User Settings</label>
                            <span class="settings-item-description">Upload your options.json to configure user preferences.</span>
                        </div>
                        <div class="file-upload-container">
                            <button class="file-upload-btn" id="options-upload-btn">Choose File</button>
                            <span class="file-upload-name" id="options-file-name">${localStorage.getItem("user_options")?"options.json":"No file selected"}</span>
                            <input type="file" class="file-upload-input" id="options-input" accept=".json,application/json" hidden>
                            ${localStorage.getItem("user_options")?'<button class="file-delete-btn" id="options-delete-btn" title="Delete user settings">\xD7</button>':""}
                        </div>
                        <div class="file-upload-error" id="options-error" style="display: none;"></div>
                    </div>
                </div>
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
                            <input type="checkbox" id="analytics-toggle" ${a?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ne(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(l=>{l.addEventListener("click",function(){let p=this.dataset.theme;Ne(p),t.setContent(ie()),ne(t)})});function i(l,p,w,y,b,u,s){let r=document.getElementById(l),c=document.getElementById(p),v=document.getElementById(w),o=document.getElementById(y),m=document.getElementById(b);r&&c&&(r.onclick=()=>c.click(),c.onchange=S=>{let $=S.target.files[0];if(!$)return;if($.name!==s){o.textContent=`File must be named "${s}"`,o.style.display="block",c.value="";return}let h=new FileReader;h.onload=g=>{try{let x=JSON.parse(g.target.result);localStorage.setItem(u,JSON.stringify(x)),v.textContent=s,o.style.display="none",t.setContent(ie()),ne(t)}catch{o.textContent="Invalid JSON format",o.style.display="block",c.value=""}},h.onerror=()=>{o.textContent="Failed to read file",o.style.display="block",c.value=""},h.readAsText($)}),m&&(m.onclick=()=>{localStorage.removeItem(u),t.setContent(ie()),ne(t)})}i("service-map-upload-btn","service-map-input","service-map-file-name","service-map-error","service-map-delete-btn","service_map","service-map.json"),i("server-map-upload-btn","server-map-input","server-map-file-name","server-map-error","server-map-delete-btn","server_map","server-map.json"),i("options-upload-btn","options-input","options-file-name","options-error","options-delete-btn","user_options","options.json");let a=document.getElementById("notifications-toggle");if(a){let l="permissions"in navigator&&navigator.permissions.query({name:"microphone"});(!l||l.state==="denied")&&(a.disabled=!0),a.onclick=async p=>{if(p.target.checked)try{await Notification.requestPermission()!=="granted"&&(p.target.checked=!1)}catch{p.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),p.target.checked=!0)}}let n=document.getElementById("microphone-toggle");async function d(){let l="permissions"in navigator?await navigator.permissions.query({name:"microphone"}):null;n&&(n.disabled=!l||l.state==="denied",n.checked=l?.state==="granted");let p=document.querySelector("#microphone-setting-item .settings-item-description");p&&(p.textContent=l?l.state==="granted"?"Microphone access granted":"Allow access to your microphone":"Not supported in this browser")}d(),n&&!n.disabled&&(n.onclick=async l=>{if(l.target.checked)try{await navigator.mediaDevices.getUserMedia({audio:!0}),d()}catch{l.target.checked=!1,d()}else("permissions"in navigator&&await navigator.permissions.query({name:"microphone"}))?.state==="granted"&&(alert("To disable microphone access, please use your browser settings."),l.target.checked=!0)});let f=document.getElementById("analytics-toggle");f&&(f.checked=localStorage.getItem("easter_analytics_enabled")!=="false",f.onclick=l=>{let p=l.target.checked;localStorage.setItem("easter_analytics_enabled",p),window.EASTER_ANALYTICS_ENABLED=p,window.EASTER_DEBUG_MODE=p})}var Qe=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Placeholder for the future Dexter chat interface.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Trigger a manual Tier 1 Guardian system audit.",usage:"dex guardian",category:"cognitive"},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the real-time health of all system services.",usage:"dex status [service]",category:"system"},{id:"build",title:"Build",icon:"bx-package",description:"Build and install the entire ecosystem from source.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Fetch and apply the latest updates for all components.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Execute the comprehensive system-wide test suite.",usage:"dex test [service]",category:"lifecycle"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"Stream or tail logs from any manageable service.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"View detailed hardware vitals and OS-level info.",usage:"dex system [--json]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"View or modify the central service-map.json.",usage:"dex config <service> [field]",category:"system"}],xt=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>
    `;for(let[i,a]of Object.entries(t)){let n=Qe.filter(d=>d.category===i);n.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 40px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${a.icon}' style="color: ${a.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${a.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${n.map(d=>`
                        <div class="cli-command-card ${d.dummy?"dummy":""}" data-cmd="${d.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${a.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${d.icon}' style="font-size: 2em; color: ${a.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${d.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${d.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${a.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${d.usage}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)}return e+="</div>",e},Se=!1;function wt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Ze(),document.getElementById("terminal-action-btn").onclick=()=>Ze());let i=document.getElementById("cli-terminal-body");return i.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Se=!0,i}function Ze(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Se=!1}function ae(t,e,i="output"){if(!Se)return;let a=document.createElement("div");a.className=`terminal-line terminal-${i}`,i==="prompt"?a.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:a.textContent=e,t.appendChild(a),t.scrollTop=t.scrollHeight}async function $t(t){let e=Qe.find(l=>l.id===t);if(!e)return;let i=wt(e);ae(i,`dex ${t}`,"prompt");let n=(JSON.parse(localStorage.getItem("service_map")).services?.cs||[]).find(l=>l.id==="dex-event-service");if(!n){ae(i,"Error: Event service not found in service map.","error");return}let f=`http://${n.domain==="0.0.0.0"?"127.0.0.1":n.domain}:${n.port}/cli/execute`;try{let l=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})});if(!l.ok){let y=await l.text();ae(i,`Server Error: ${y}`,"error");return}let p=l.body.getReader(),w=new TextDecoder;for(;;){let{value:y,done:b}=await p.read();if(b)break;w.decode(y,{stream:!0}).split(`
`).forEach(r=>{if(r.trim()==="")return;let c="output";r.includes("[ERROR]")?c="error":r.includes("[SUCCESS]")||r.includes("\u2713")?c="success":r.includes("!")&&(c="warning"),ae(i,r,c)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch(l){ae(i,`Connection Error: ${l.message}`,"error"),document.getElementById("terminal-status-badge").className="terminal-status status-error",document.getElementById("terminal-status-badge").textContent="Failed"}finally{document.getElementById("terminal-action-btn").style.display="block"}}function et(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=xt(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.03)"}),e.addEventListener("click",()=>{let i=e.dataset.cmd;if(i==="chat"){alert("Connection to cognitive core pending deployment...");return}$t(i)})}))}function tt(){He(),_e(),window.location.pathname.includes("/dex")&&et();let t=Me();ke(t),Ce();let e=document.querySelector("footer"),i=null;function a(){i=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(p=>p.classList.remove("active","inactive"))}function n(p,w=null,y=null){let b=i&&i.id===p.id;if(b&&y!==null){let u=document.querySelector(`#${p.id} .tab[data-tab-index="${y}"]`);u&&u.click(),document.querySelectorAll(".nav-right i").forEach(s=>{let r=s===w;s.classList.toggle("active",r),s.classList.toggle("inactive",!r&&w)});return}i&&i.close(!b),b?i=null:setTimeout(()=>{if(p.open(),i=p,y!==null){let u=document.querySelector(`#${p.id} .tab[data-tab-index="${y}"]`);u&&u.click()}document.querySelectorAll(".nav-right i").forEach(u=>{let s=u===w;u.classList.toggle("active",s),u.classList.toggle("inactive",!s&&w)}),e?.classList.add("hide")},i?220:0)}async function d(){await Promise.all([R(),Q(),$e(),Ee()]);let p=setInterval(()=>{if(!l.isOpen())return clearInterval(p);C(0,G),C(1,X),C(3,ve),C(3,me),C(3,ue)},1e3),w=setInterval(()=>{if(!l.isOpen())return clearInterval(w);R(),Q(),$e(),Ee()},3e3)}let f=ye({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:a}),l=ye({id:"main-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Oe(),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:Ge(),"data-tab-index":1},{icon:"bx-bulb",title:"Ideas",content:Re(),"data-tab-index":2},{icon:"bx-server",title:"System",content:Ke(),"data-tab-index":3},{icon:"bx-cog",title:"Settings",content:ie(),"data-tab-index":4}],icon:"bx-layer",onClose:a,onOpen:()=>{d(),setTimeout(()=>ne(l),50)}});t?(document.getElementById("notif-icon")?.addEventListener("click",p=>n(l,p.currentTarget,0)),document.getElementById("events-icon")?.addEventListener("click",p=>n(l,p.currentTarget,1)),document.getElementById("ideas-icon")?.addEventListener("click",p=>n(l,p.currentTarget,2)),document.getElementById("system-icon")?.addEventListener("click",p=>n(l,p.currentTarget,3)),document.getElementById("settings-icon")?.addEventListener("click",p=>n(l,p.currentTarget,4))):document.getElementById("login-btn")?.addEventListener("click",()=>{n(f),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",p=>{p.preventDefault();try{Be(document.getElementById("email-input").value),window.location.reload()}catch(w){let y=document.getElementById("login-error");y&&(y.textContent=w.message,y.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt();})();
//# sourceMappingURL=dex.a557d3a8.js.map
