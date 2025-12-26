(()=>{function Se(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ke(t=!1){let i=`
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
    `,o=document.createElement("nav");o.innerHTML=i,document.body.prepend(o)}function _e(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function ue(t){let e=null,i=t.onClose||null,o=t.onOpen||null;function a(){if(e){e.classList.add("open"),window.addEventListener("resize",c),o&&setTimeout(o,10);return}let f=document.getElementById("windows-container");f||(f=document.createElement("div"),f.id="windows-container",f.className="windows-container",document.body.appendChild(f)),e=document.createElement("div"),e.id=t.id,e.className="window";let p=t.icon||"bx-window",r="",s="",n;t.tabs&&t.tabs.length>0?(r=`<div class="tab-bar">${t.tabs.map((d,m)=>{let b;return d.icon?b=`<i class="bx ${d.icon}"></i>`:d.title&&d.title.length>0?b=`<span class="tab-glyph">${d.title.charAt(0).toUpperCase()}</span>`:b='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${m===0?"active":""}" data-tab-index="${m}">
                        ${b}
                        <span class="tab-title">${d.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${m}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,n=`<div class="window-content">${t.tabs.map((d,m)=>`<div class="tab-content ${m===0?"active":""}" data-tab-content="${m}">${d.content}</div>`).join("")}</div>`):(t.title&&(s=`<div class="window-title">${t.title}</div>`),n=`<div class="window-content">${t.content}</div>`);let l=`
            <div class="window-header">
                <i class="bx ${p}"></i>
                ${r}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=l+n,f.appendChild(e);let x=e.querySelector(".window-close");x&&x.addEventListener("click",h=>{h.stopPropagation(),v()}),window.addEventListener("resize",c),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(w=>{w.addEventListener("click",()=>{let d=w.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(m=>m.classList.remove("active")),w.classList.add("active"),e.querySelectorAll(".tab-content").forEach(m=>m.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${d}"]`).classList.add("active"),y(w,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function c(){if(!e||!e.classList.contains("open"))return;let f=e.querySelector(".tab.active");f&&y(f,e)}function y(f,p){setTimeout(()=>{let r=p.querySelector(".tab-bar");if(r){let s=Array.from(r.querySelectorAll(".tab")),n=s.indexOf(f),l=r.clientWidth,x=s[Math.max(0,n-2)],h=s[Math.min(s.length-1,n+2)],w=x.offsetLeft-r.offsetLeft-25,m=h.offsetLeft+h.offsetWidth-r.offsetLeft+25-w,b;m<=l?b=w-(l-m)/2:b=f.offsetLeft-r.offsetLeft-l/2+f.offsetWidth/2,r.scrollTo({left:b,behavior:"smooth"})}},350)}function v(f=!1){e&&(window.removeEventListener("resize",c),f?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function u(f){if(e){let p=e.querySelector(".window-content");p&&(p.innerHTML=f)}}function g(){return e&&e.classList.contains("open")}return{open:a,close:v,setContent:u,isOpen:g,id:t.id}}function Ce(){return!0}function Ae(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Ie(t){localStorage.setItem("easter_user_email",t.trim())}var Me="easter_theme",B={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ge(){return localStorage.getItem(Me)||B.AUTO}function tt(){let t=window.innerWidth,e=window.innerHeight,i=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?B.ANIMATED:(t===1920&&e===1080&&i||t<=1920||e<=1080,B.DEFAULT)}function Be(t){if(!Object.values(B).includes(t))throw new Error("Invalid theme");localStorage.setItem(Me,t),fe(t)}function fe(t,e=!1){let i=document.body,o=t===B.AUTO?tt():t;if(e||(i.classList.add("theme-transitioning"),setTimeout(()=>{i.classList.remove("theme-transitioning")},300)),Object.values(B).forEach(a=>{i.classList.remove(`theme-${a}`)}),i.classList.add(`theme-${t}`),o===B.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(e?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function De(){let t=ge();if(fe(t,!0),t===B.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{fe(B.AUTO)},300)})}}function k(t,e,i=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${c}</div>`}function $(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function _(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let o=Date.now(),a=Math.floor((o-e)/1e3),c;a<60?c=`${a}s ago`:a<3600?c=`${Math.floor(a/60)}m ago`:c=`${Math.floor(a/3600)}h ago`,i.textContent=`Last updated: ${c}`}function z(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let o=i.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function se(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;z(0,e)}function ve(){return"https://event.easter.company"}var st="http://127.0.0.1:8100";async function S(t,e={}){let i=ve()+t,o=st+t;try{let a=await fetch(i,e);if(a.ok)return a;throw new Error("Primary failed")}catch{try{return await fetch(o,e)}catch(c){throw c}}}var Ne=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,W=null,U=new Set,ne=[];async function q(t=!1){let e=document.getElementById("notifications-list");if(!e)return;nt(),t&&(e.innerHTML="<p>Updating...</p>");let i="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await S(i);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[];W=Date.now(),_(0,W);let y=Date.now(),v=24*60*60*1e3,u=c.filter(d=>{let m=localStorage.getItem(`notification_read_ts_${d.id}`);if(!m)return!0;let b=parseInt(m);return y-b<v});u.sort((d,m)=>{let b=D=>{let C=D.event;if(typeof C=="string")try{C=JSON.parse(C)}catch{return"low"}return(C.priority||"low").toLowerCase()},A=D=>D==="critical"?4:D==="high"?3:D==="medium"?2:1,T=A(b(d)),L=A(b(m));return T!==L?L-T:m.timestamp-d.timestamp}),ne=u;let g=d=>{let m=d.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return"low"}return(m.priority||"low").toLowerCase()},f=[],r=new Set(u.map(d=>g(d))).size>1;if(u.length>0){let d=null;u.forEach(m=>{let b=g(m);r&&b!==d&&(f.push({id:`divider-${b}`,type:"divider",label:b.toUpperCase()}),d=b),f.push(m)})}if(t&&(e.innerHTML=""),u.length===0){e.innerHTML=k("empty","No notifications yet."),se();return}let s=d=>{let m=d.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return null}let b=m.title||"Untitled Notification",A=m.body||"No description provided.",T=m.priority||"low",L=!!m.alert,D=m.category||"system",C=m.related_event_ids||[],M=!!localStorage.getItem(`notification_read_ts_${d.id}`),N=new Date(d.timestamp*1e3),E=N.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),P=N.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),I=M?"event-border-grey":"event-border-blue";!M&&L&&(I="event-border-red"),M&&(T==="high"||T==="critical")?I="event-border-red":M&&T==="medium"&&(I="event-border-orange");let H=M?"notification-read":"notification-unread",te=U.has(d.id),de=te?"expanded":"",et=te?"display: block;":"display: none;",$e="",Le="";C.length>0&&(Le=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${C.map(Z=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Z.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),$e=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${T==="high"||T==="critical"?"#ff4d4d":T==="medium"?"#ffa500":"#888"}">${T.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${$(A)}</p>
                </div>
                ${Le}
            `;let O=document.createElement("div");O.className=`event-item notification-item ${I} ${H} ${de} cursor-pointer`,O.dataset.notificationId=d.id,O.onclick=function(Z){if(this.classList.contains("expanded")){this.classList.remove("expanded"),U.delete(d.id);let Q=this.querySelector(".event-details");Q&&(Q.style.display="none")}else{this.classList.add("expanded"),U.add(d.id);let Q=this.querySelector(".event-details");if(Q&&(Q.style.display="block"),!localStorage.getItem(`notification_read_ts_${d.id}`)){localStorage.setItem(`notification_read_ts_${d.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let me="event-border-grey";T==="high"||T==="critical"?me="event-border-red":T==="medium"&&(me="event-border-orange"),this.classList.add(me),se()}}},O.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${P}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${D.toUpperCase()} ${L?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${b}</div>
                    <div class="event-details" style="${et}">
                        <div class="event-details-header">
                            <h4>${L?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${$e}
                    </div>
                </div>
            `;let Te=O.querySelector(".close-details-btn");return Te&&Te.addEventListener("click",Z=>{Z.stopPropagation(),O.classList.remove("expanded");let pe=O.querySelector(".event-details");pe&&(pe.style.display="none"),U.delete(d.id)}),O},n=d=>{let m=document.createElement("div");m.className="notification-divider",m.dataset.notificationId=d.id;let b="#888888";return d.label==="CRITICAL"?b="#ff4d4d":d.label==="HIGH"?b="#ff8888":d.label==="MEDIUM"&&(b="#ffa500"),m.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${b}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,m.innerHTML=`<span style="white-space: nowrap;">${d.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${b}44, transparent); flex-grow: 1;"></div>`,m},l=Array.from(e.children),x=new Map(l.map(d=>[d.dataset.notificationId,d])),h=new Set(f.map(d=>d.id));l.forEach(d=>{let m=d.dataset.notificationId;(!m||!h.has(m))&&d.remove()});let w=null;f.forEach((d,m)=>{let b=x.get(d.id);(!b||t)&&(b&&b.remove(),d.type==="divider"?b=n(d):b=s(d),!b)||(m===0?e.firstElementChild!==b&&e.prepend(b):w&&w.nextElementSibling!==b&&w.after(b),w=b)}),W=Date.now(),_(0,W),se()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=k("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function nt(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),i=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ne.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ne.forEach(a=>{U.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),q(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{U.clear(),q(!0)},i.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let a=Date.now()-1728e5;ne.forEach(c=>{localStorage.setItem(`notification_read_ts_${c.id}`,a.toString())}),U.clear(),q(!0)},o.dataset.listenerAttached="true")}var He=()=>`
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
`,j=new Set,Pe=[],G=null;async function R(t=!1){let e=document.getElementById("roadmap-list");if(e){it();try{let i=await S("/roadmap");if(!i.ok)throw new Error("Offline");let o=await i.json();if(Pe=o,o.length===0){e.innerHTML=k("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let a=g=>{let f=j.has(g.id),p=g.state==="draft",r=g.state==="published",s=g.state==="consumed",n="event-border-grey";r&&(n="event-border-blue"),s&&(n="event-border-purple");let x=new Date(g.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${n} cursor-pointer ${f?"expanded":""}`,h.dataset.itemId=g.id,h.onclick=d=>{if(d.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",j.delete(g.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",j.add(g.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${g.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${x.split(",")[1]}</span>
          <span class="event-date">${x.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${$(g.content)}</div>
          <div class="event-details" style="${f?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${s?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${r?"bx-pause":"bx-rocket"}'></i> ${r?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${s?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(g.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>at(g)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>ot(g)),h.querySelector(".delete-btn")?.addEventListener("click",()=>lt(g.id)),h.querySelector(".close-details-btn")?.addEventListener("click",d=>{d.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",j.delete(g.id)}),h},c=Array.from(e.children),y=new Map(c.map(g=>[g.dataset.itemId,g])),v=new Set(o.map(g=>g.id));c.forEach(g=>{let f=g.dataset.itemId;(!f||!v.has(f))&&g.remove()});let u=null;o.forEach((g,f)=>{let p=y.get(g.id);(!p||t)&&(p&&p.remove(),p=a(g),!p)||(f===0?e.firstElementChild!==p&&e.prepend(p):u&&u.nextElementSibling!==p&&u.after(p),u=p)})}catch{e.innerHTML=k("error","Failed to load roadmap.")}}}function it(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),a=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{G=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",G=null},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let c=document.getElementById("roadmap-editor-input").value;if(!c.trim())return;let y=G?`/roadmap/${G}`:"/roadmap",v=G?"PATCH":"POST";try{await S(y,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c})}),document.getElementById("roadmap-editor-container").style.display="none",R(!0)}catch(u){console.error(u)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{Pe.forEach(c=>j.add(c.id)),R(!0)},o.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{j.clear(),R(!0)},a.dataset.listenerAttached="true")}function at(t){G=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function ot(t){let e=t.state==="published"?"draft":"published";try{await S(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),R(!0)}catch(i){console.error(i)}}async function lt(t){if(confirm("Delete this roadmap item?"))try{await S(`/roadmap/${t}`,{method:"DELETE"}),j.delete(t),R(!0)}catch(e){console.error(e)}}var ze=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,Oe=null,V=new Set,Ue=[];async function ie(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;rt();let i="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await S(i);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[];if(Ue=c,Oe=Date.now(),_(2,Oe),c.length===0){e.innerHTML=k("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),z(1,0);return}t&&(e.innerHTML="");let y=p=>{let r=p.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return null}let s=r.title||"Untitled Blueprint",n=r.summary||r.body||"No summary provided.",l=r.content||"",x=r.category||"architecture",h=r.affected_services||[],w=r.implementation_path||[],d=new Date(p.timestamp*1e3),m=d.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),b=d.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=V.has(p.id),T=A?"display: block;":"display: none;",L=document.createElement("div");L.className=`event-item notification-item event-border-purple cursor-pointer ${A?"expanded":""}`,L.dataset.blueprintId=p.id,L.onclick=function(M){if(this.classList.contains("expanded")){this.classList.remove("expanded"),V.delete(p.id);let E=this.querySelector(".event-details");E&&(E.style.display="none")}else{this.classList.add("expanded"),V.add(p.id);let E=this.querySelector(".event-details");E&&(E.style.display="block")}};let D=h.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${h.join(", ")}</div>`:"",C="";w.length>0&&(C=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(M=>`<li>${$(M)}</li>`).join("")}
                        </ul>
                    </div>
                `),L.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${m}</span>
                    <span class="event-date">${b}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${x.toUpperCase()}</div>
                    <div class="event-message">${s}</div>
                    <div class="event-details" style="${T}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${$(n)}
                        </div>
                        ${D}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${$(l)}</p>
                        </div>
                        ${C}
                    </div>
                </div>
            `;let F=L.querySelector(".close-details-btn");return F&&F.addEventListener("click",M=>{M.stopPropagation(),L.classList.remove("expanded");let N=L.querySelector(".event-details");N&&(N.style.display="none"),V.delete(p.id)}),L},v=Array.from(e.children),u=new Map(v.map(p=>[p.dataset.blueprintId,p])),g=new Set(c.map(p=>p.id));v.forEach(p=>{let r=p.dataset.blueprintId;(!r||!g.has(r))&&p.remove()});let f=null;c.forEach((p,r)=>{let s=u.get(p.id);(!s||t)&&(s&&s.remove(),s=y(p),!s)||(r===0?e.firstElementChild!==s&&e.prepend(s):f&&f.nextElementSibling!==s&&f.after(s),f=s)}),z(2,c.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=k("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function rt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ue.forEach(i=>V.add(i.id)),ie(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{V.clear(),ie(!0)},e.dataset.listenerAttached="true")}var qe=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
            </div>
            ${He()}
        </div>

        <div class="blueprints-section">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-paint' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
            </div>
            ${ze()}
        </div>
    </div>
`;async function be(){await Promise.all([R(),ie()])}var ct={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function je(t,e){let i=ct[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(i=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let o=i.replace(/\{(\w+)\}/g,(a,c)=>e[c]!==void 0&&e[c]!==null?e[c]:a);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}function K(t,e,i=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=i?`<p class="placeholder-action">${i}</p>`:"";return`
        <div class="tab-placeholder">
            <i class='bx ${a} placeholder-icon'></i>
            <p class="placeholder-message">${e}</p>
            ${c}
        </div>
    `}function Re(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var dt=null;async function ae(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");let e=localStorage.getItem("service_map");if(!e)return t.classList.add("placeholder-active"),t.innerHTML=K("config","No service map configured.","Please upload your service-map.json in Settings to enable log monitoring."),!1;let i;try{i=JSON.parse(e)}catch(y){return console.error("Error parsing service_map from localStorage:",y),t.classList.add("placeholder-active"),t.innerHTML=K("error","Invalid service map data.","Please re-upload a valid service-map.json file in Settings."),!1}let o=null;if(i&&typeof i.services=="object"){let y=["cs","be","th"];for(let v of y)if(Array.isArray(i.services[v])){let u=i.services[v].find(g=>g.short_name==="event"||g.id==="event"||g.id==="dex-event-service");if(u){o=u;break}}}if(!o)return t.classList.add("placeholder-active"),t.innerHTML=K("error","Event service not found in service map.","Please ensure dex-event-service is configured in your service-map.json."),!1;let a=o.domain==="0.0.0.0"?"127.0.0.1":o.domain,c=`http://${a}:${o.port}/logs`;try{let y=await fetch(c);if(!y.ok)return t.classList.add("placeholder-active"),t.innerHTML=K("offline","Event service is offline.","Please ensure the event service is running."),!1;let v=await y.json();if(!v||v.length===0)return t.classList.add("placeholder-active"),t.innerHTML=K("empty","No logs found.","Service logs will appear here when available."),!1;let u=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],g=v.filter(p=>!u.includes(p.id));g.forEach(p=>{p.logs&&Array.isArray(p.logs)?p.logs.reverse():p.logs=[]}),g.reverse();let f=g.map(p=>{let r=p.logs.join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${p.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(r)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${p.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${r}</pre>
                </div>
            `}).join("");return t.innerHTML=f,document.querySelectorAll(".copy-logs-btn").forEach(p=>{p.addEventListener("click",()=>{let r=unescape(p.dataset.logs);navigator.clipboard.writeText(r).then(()=>{let s=p.querySelector("i");s.classList.remove("bx-copy"),s.classList.add("bx-check"),setTimeout(()=>{s.classList.remove("bx-check"),s.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(p=>{p.addEventListener("click",async()=>{let r=p.dataset.serviceId;if(!confirm(`Are you sure you want to clear logs for ${r}?`))return;let s=`http://${a}:${o.port}/logs?service_id=${r}`;try{(await fetch(s,{method:"DELETE"})).ok?ae():console.error("Failed to clear logs")}catch(n){console.error("Error clearing logs:",n)}})}),dt=Date.now(),!0}catch(y){return console.error("Error fetching logs:",y),t.classList.add("placeholder-active"),t.innerHTML=K("offline","Failed to load logs.","The event service may be offline, unreachable, or blocked by a browser extension (e.g., ad blocker)."),!1}}var We=()=>`
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
        ${Re()}
    </div>
`,J=null,Y=new Set,ee=[],oe="all",pt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},mt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Fe(t){for(let[e,i]of Object.entries(pt))if(i.includes(t))return e;return"system"}function ut(t){return mt[t]||"bx-square-rounded"}async function X(t=!1){let e=document.getElementById("events-timeline");if(!e)return;document.getElementById("logs-view-container")?.style.display!=="none"&&ae(),ft();let o=`/events?ml=${oe==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let a=await S(o);if(!a.ok)throw new Error("Service is offline or unreachable.");let y=(await a.json()).events||[],v=y;if(oe!=="all"&&(v=y.filter(s=>{let n=s.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!1}return Fe(n.type)===oe})),ee=v.slice(0,50),J=Date.now(),_(1,J),ee.length===0){e.innerHTML=k("empty","No events found for this filter.");return}t&&(e.innerHTML="");let u=s=>{let n=s.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let l=n.type,x=Fe(l),h=ut(l),w=l==="engagement.decision"||l==="messaging.bot.sent_message"||l==="messaging.user.sent_message"||l==="moderation.explicit_content.deleted"||l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.cli.command"||l==="system.analysis.audit"||l==="system.test.completed"||l==="error_occurred"||l==="system.cli.status"||l.startsWith("system.roadmap")||l.startsWith("system.process"),d="event-border-grey";w&&(l==="moderation.explicit_content.deleted"||l==="error_occurred"?d="event-border-red":l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.analysis.audit"?d="event-border-purple":l==="system.cli.command"||l==="system.cli.status"?d="event-border-orange":l==="system.test.completed"?d=n.test?.status==="OK"&&n.lint?.status==="OK"&&n.format?.status==="OK"?"event-border-blue":"event-border-red":d="event-border-blue");let m=w?"cursor-pointer":"",b=Y.has(s.id),A=b?"expanded":"",T=b?"display: block;":"display: none;",L=new Date(s.timestamp*1e3),D=L.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),C=L.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),F=je(l,n),M="";if(w){let E="";if(l==="engagement.decision")E=`
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
                    `;else if(l==="messaging.bot.sent_message")E=`
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
                    `;else if(l==="moderation.explicit_content.deleted")E=`
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
                            <pre class="detail-pre">${$(n.raw_output)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.link.completed")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${$(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${$(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${$(n.summary)||"None"}</pre>
                        </div>
                    `;else if(l==="analysis.visual.completed"){let P="";n.base64_preview?P=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(P=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${P}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${$(n.description)||"None"}</pre>
                        </div>
                    `}else if(l==="system.cli.command")E=`
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
                            <pre class="detail-pre">${$(n.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(l==="system.analysis.audit")E=`
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
                            <pre class="detail-pre">${$(n.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${$(n.raw_input)}</pre>
                        </div>
                    `;else if(l==="system.test.completed")E=`
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
                    `;else if(l==="error_occurred")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${n.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${$(n.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(n.context||{},null,2)}</pre>
                        </div>
                    `;else if(l==="system.cli.status")E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${$(n.message)}</pre>
                        </div>
                    `;else if(l==="messaging.user.sent_message"){let P="";n.attachments&&n.attachments.length>0&&(P=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${n.attachments.map(H=>{let te=H.content_type&&H.content_type.startsWith("image/"),de=(H.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${te?`<div class="attachment-thumb-container"><img src="${H.url}" alt="${H.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${H.url}" target="_blank" class="attachment-link">${H.filename}</a>
                                        <span class="attachment-meta">${H.content_type} \u2022 ${de}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),E=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${n.content||"(empty)"}</pre>
                        </div>
                        ${P}
                    `}M=`
                    <div class="event-details" style="${T}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${E}
                    </div>
                `}let N=document.createElement("div");if(N.className=`event-item ${d} ${m} ${A}`,N.dataset.eventId=s.id,N.onclick=function(E){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(s.id);let I=this.querySelector(".event-details");I&&(I.style.display="none")}else{this.classList.add("expanded"),Y.add(s.id);let I=this.querySelector(".event-details");I&&(I.style.display="block")}},N.innerHTML=`
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
            `,w){let E=N.querySelector(".close-details-btn");E&&E.addEventListener("click",P=>{P.stopPropagation();let I=P.target.closest(".event-item");if(I){I.classList.remove("expanded"),Y.delete(s.id);let H=I.querySelector(".event-details");H&&(H.style.display="none")}})}return N},g=Array.from(e.children),f=new Map(g.map(s=>[s.dataset.eventId,s])),p=new Set(ee.map(s=>s.id));g.forEach(s=>{let n=s.dataset.eventId;(!n||!p.has(n))&&s.remove()});let r=null;ee.forEach((s,n)=>{let l=f.get(s.id);(!l||t)&&(l&&l.remove(),l=u(s),!l)||(n===0?e.firstElementChild!==l&&e.prepend(l):r&&r.nextElementSibling!==l&&r.after(l),r=l)}),J=Date.now(),_(3,J)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=k("offline","Failed to load events.","The event service may be offline or unreachable."))}}function ft(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters"),o=document.getElementById("events-toggle-view"),a=document.getElementById("events-toggle-view-logs");o&&a&&!o.dataset.listenerAttached&&(o.onclick=()=>{o.classList.add("active"),a.classList.remove("active"),document.getElementById("timeline-view-container").style.display="block",document.getElementById("logs-view-container").style.display="none"},a.onclick=()=>{a.classList.add("active"),o.classList.remove("active"),document.getElementById("timeline-view-container").style.display="none",document.getElementById("logs-view-container").style.display="block",ae()},o.dataset.listenerAttached="true"),t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ee.forEach(c=>Y.add(c.id)),X(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),X(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(c=>{c.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(y=>y.classList.remove("active")),c.classList.add("active"),oe=c.dataset.filter,X(!0)}}),i.dataset.listenerAttached="true")}var Ve=()=>`
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
    `;async function ye(){await Promise.all([Je(),bt(),yt()])}var le=null,re=null,ce=null;async function Ke(){try{return await(await S("/system_monitor")).json()}catch{return null}}async function Ge(){try{return await(await S("/system/hardware")).json()}catch{return null}}async function gt(){try{return await(await S("/processes")).json()}catch{return null}}async function vt(){try{return await(await S("/analyst/status")).json()}catch{return null}}async function bt(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),i=document.getElementById("hardware-refresh-btn"),o=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let n="",l=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(n+=`
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
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let x=0,h=0;s.STORAGE.forEach(b=>{x+=b.USED,h+=b.SIZE});let w=(x/(1024*1024*1024)).toFixed(1),d=(h/(1024*1024*1024)).toFixed(1),m=h>0?(x/h*100).toFixed(0):0;n+=`
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
                </div>`}e.innerHTML=n};if(e&&i){i.dataset.listenerAttached||(i.onclick=async()=>{i.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let n=await Ge();n?(o(n),i.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',i.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},i.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let n=await Ge();o(n)}}if(!t)return;let a=await Ke();if(!a||!a.services){t.innerHTML=k("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}le=Date.now(),_(3,le);let c=a.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function y(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function v(s){if(!s||s==="N/A"||s==="unknown")return"-";let n=s.match(/^(\d+\.\d+\.\d+)/);return n?n[0]:s.split(".").slice(0,3).join(".")||"-"}function u(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function g(s){if(!s||s==="N/A"||s==="unknown")return"-";let n=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!n)return"-";let l=parseInt(n[1])||0,x=parseInt(n[2])||0,h=parseInt(n[3])||0,w=parseFloat(n[4])||0,d=l*86400+x*3600+h*60+w,m=Math.floor(d/86400);if(m>0)return`${m}d`;let b=Math.floor(d/3600);if(b>0)return`${b}h`;let A=Math.floor(d/60);return A>0?`${A}m`:`${Math.floor(d)}s`}function f(s){let n=s.status==="online",l=n?"service-widget-online":"service-widget-offline",x=n?"bx-check-circle":"bx-x-circle",h=n?"OK":"BAD",w=s.version?v(s.version.str):"-",d=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",m=s.memory&&s.memory!=="N/A"?s.memory:"-",b=d!=="-"?"#00ff00":"#666",A=d!=="-"?"#fff":"#666",T=m!=="-"?"#00ff00":"#666",L=m!=="-"?"#fff":"#666",D=g(s.uptime),C="";return n?C=`
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
                        <i class="bx bxs-microchip" style="color: ${b};"></i>
                        <span style="color: ${A};">${d}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${T};"></i>
                        <span style="color: ${L};">${m}</span>
                    </div>
                </div>`:C='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${l}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${x}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${u(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${C}</div></div>`}let p=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),r=new Set(c.map(s=>s.id));for(let[s,n]of p)r.has(s)||n.remove();c.forEach(s=>{let n=f(s),l=p.get(s.id);l?l.outerHTML!==n&&(l.outerHTML=n):t.insertAdjacentHTML("beforeend",n)})}async function yt(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Ke();if(!e){t.innerHTML=k("offline","Failed to load model status.");return}re=Date.now(),_(3,re);let i=e.models||[],o=e.whisper;Array.from(t.children).forEach(v=>{v.classList.contains("service-widget")||v.remove()});function a(v){let u=v.status==="Ready";return`
                <div class="service-widget ${u?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${u?"READY":"NOT FOUND"}</span>
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
                </div>`}function c(v){let u=v.status==="Downloaded",g=u?"service-widget-online":"service-widget-offline",f=u?"OK":"MISSING",p=u&&v.size>0?`${(v.size/1e9).toFixed(2)} GB`:"-",r=v.name;return v.type==="custom"&&r.endsWith(":latest")&&(r=r.replace(":latest","")),`<div class="service-widget ${g}" data-model-name="${v.name}"><div class="service-widget-header"><i class="bx ${u?"bx-check-circle":"bx-x-circle"}"></i><h3>${r}</h3><span class="service-widget-status">${f}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${v.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${p}</span></div></div></div>`}let y="";if(o&&(y+=a(o)),y+=i.map(c).join(""),!y){t.innerHTML=k("empty","No models found.");return}t.innerHTML!==y&&(t.innerHTML=y)}async function Je(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),i=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),a=document.getElementById("analyst-idle-val"),c=document.getElementById("analyst-reset-btn");c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{c.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await S("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{c.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),Je()}catch{c.innerHTML="<i class='bx bx-error'></i> Failed"}},c.dataset.listenerAttached="true");let y=await vt();if(y){let r=Math.floor(Date.now()/1e3),s=y.active_tier,n=(l,x,h)=>{if(s===h||h==="guardian"&&s==="tests"){l.textContent="Working",l.style.color="#bb86fc";return}let w=x-r;if(w<=0)l.textContent="Ready",l.style.color="#5eff5e";else{let d=Math.floor(w/60),m=w%60;l.textContent=`${d}m ${m}s`,l.style.color="#fff"}};if(e&&y.guardian&&n(e,y.guardian.next_run,"guardian"),i&&y.architect&&n(i,y.architect.next_run,"architect"),o&&y.strategist&&n(o,y.strategist.next_run,"strategist"),a&&y.system_idle_time!==void 0){let l=y.system_idle_time,x=Math.floor(l/60),h=l%60;a.textContent=`${x}m ${h}s`,l>300?a.style.color="#5eff5e":l>60?a.style.color="#ffa500":a.style.color="#fff"}}else[e,i,o,a].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let v=await gt(),u=document.getElementById("vitals-processes-val");if(u)if(v){let r=v.length;u.textContent=r>0?`${r} Active`:"Idle",u.style.color=r>0?"#bb86fc":"#fff"}else u.textContent="-",u.style.color="#888";if(v===null){t.innerHTML=k("offline","Failed to load process status.");return}if(ce=Date.now(),_(3,ce),v.length===0){t.innerHTML=k("empty","No active processes."),z(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function g(r){let s=Math.floor(Date.now()/1e3-r.start_time),n=r.retries>0?`<span class="process-retry-badge">Retry ${r.retries}</span>`:"",l=r.channel_id,x={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return x[l]?l=x[l]:/^\d+$/.test(l)&&(l=`Channel ${l}`),`
                <div class="service-widget process-widget" data-channel-id="${r.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${l}</h3>
                        ${n}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${r.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${s}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${r.pid}</span>
                        </div>
                    </div>
                </div>`}let f=new Map(Array.from(t.querySelectorAll(".process-widget")).map(r=>[r.dataset.channelId,r])),p=new Set(v.map(r=>r.channel_id));for(let[r,s]of f)p.has(r)||s.remove();v.forEach(r=>{let s=g(r),n=f.get(r.channel_id);n?n.outerHTML!==s&&(n.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),z(3,v.length)}function he(){let t=ge(),e=Ae()||"master@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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
            </div>`}function xe(t){let e=document.querySelector("#main-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(a=>{a.addEventListener("click",function(){let c=this.dataset.theme;Be(c),t.setContent(he()),xe(t)})});let i=document.getElementById("notifications-toggle");i&&(i.onclick=async a=>{if(a.target.checked)try{await Notification.requestPermission()!=="granted"&&(a.target.checked=!1)}catch{a.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=a=>{let c=a.target.checked;localStorage.setItem("easter_analytics_enabled",c),window.EASTER_ANALYTICS_ENABLED=c,window.EASTER_DEBUG_MODE=c})}var ht={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function xt(t){let e=$(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(a,c)=>{let y=ht[c];return y?`<span class="${y}">`:""});let i=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return i>o&&(e+="</span>".repeat(i-o)),e}var Xe=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Placeholder for the future Dexter chat interface.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Trigger a manual Tier 1 Guardian system audit.",usage:"dex guardian",category:"cognitive"},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the real-time health of all system services.",usage:"dex status [service]",category:"system"},{id:"build",title:"Build",icon:"bx-package",description:"Build and install the entire ecosystem from source.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Fetch and apply the latest updates for all components.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Execute the comprehensive system-wide test suite.",usage:"dex test [service]",category:"lifecycle"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"Stream or tail logs from any manageable service.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"View detailed hardware vitals and OS-level info.",usage:"dex system [--json]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"View or modify the central service-map.json.",usage:"dex config <service> [field]",category:"system"}],wt=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>
    `;for(let[i,o]of Object.entries(t)){let a=Xe.filter(c=>c.category===i);a.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 40px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${o.icon}' style="color: ${o.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${o.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${a.map(c=>`
                        <div class="cli-command-card ${c.dummy?"dummy":""}" data-cmd="${c.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${o.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${c.icon}' style="font-size: 2em; color: ${o.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${c.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${c.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${o.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${c.usage}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)}return e+="</div>",e},Ee=!1;function Et(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Ye(),document.getElementById("terminal-action-btn").onclick=()=>Ye());let i=document.getElementById("cli-terminal-body");return i.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ee=!0,i}function Ye(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ee=!1}function we(t,e,i="output"){if(!Ee)return;let o=document.createElement("div");o.className=`terminal-line terminal-${i}`,i==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=xt(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function $t(t){let e=Xe.find(o=>o.id===t);if(!e)return;let i=Et(e);we(i,`dex ${t}`,"prompt");try{let a=(await S("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),c=new TextDecoder;for(;;){let{value:y,done:v}=await a.read();if(v)break;c.decode(y,{stream:!0}).split(`
`).forEach(f=>{if(f.trim()==="")return;let p="output";f.includes("[ERROR]")?p="error":f.includes("[SUCCESS]")||f.includes("\u2713")?p="success":f.includes("!")&&(p="warning"),we(i,f,p)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch(o){we(i,`Connection Error: ${o.message}`,"error"),document.getElementById("terminal-status-badge").className="terminal-status status-error",document.getElementById("terminal-status-badge").textContent="Failed"}finally{document.getElementById("terminal-action-btn").style.display="block"}}function Ze(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=wt(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.03)"}),e.addEventListener("click",()=>{let i=e.dataset.cmd;if(i==="chat"){alert("Connection to cognitive core pending deployment...");return}$t(i)})}))}async function Lt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${ve()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function Qe(){Lt(),De(),Se(),window.location.pathname.includes("/dex")&&Ze();let t=Ce();ke(t),_e();let e=document.querySelector("footer"),i=null;function o(){i=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(u=>u.classList.remove("active","inactive"))}function a(u,g=null,f=null){let p=i&&i.id===u.id;if(p&&f!==null){let r=document.querySelector(`#${u.id} .tab[data-tab-index="${f}"]`);r&&r.click(),document.querySelectorAll(".nav-right i").forEach(s=>{let n=s===g;s.classList.toggle("active",n),s.classList.toggle("inactive",!n&&g)});return}i&&i.close(!p),p?i=null:setTimeout(()=>{if(u.open(),i=u,f!==null){let r=document.querySelector(`#${u.id} .tab[data-tab-index="${f}"]`);r&&r.click()}document.querySelectorAll(".nav-right i").forEach(r=>{let s=r===g;r.classList.toggle("active",s),r.classList.toggle("inactive",!s&&g)}),e?.classList.add("hide")},i?220:0)}async function c(){await Promise.all([q(),X(),be(),ye()]);let u=setInterval(()=>{if(!v.isOpen())return clearInterval(u);_(0,W),_(1,J),_(3,ce),_(3,le),_(3,re)},1e3),g=setInterval(()=>{if(!v.isOpen())return clearInterval(g);q(),X(),be(),ye()},3e3)}let y=ue({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),v=ue({id:"main-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ne(),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:We(),"data-tab-index":1},{icon:"bx-bulb",title:"Ideas",content:qe(),"data-tab-index":2},{icon:"bx-server",title:"System",content:Ve(),"data-tab-index":3},{icon:"bx-cog",title:"Settings",content:he(),"data-tab-index":4}],icon:"bx-layer",onClose:o,onOpen:()=>{c(),setTimeout(()=>xe(v),50)}});t?(document.getElementById("notif-icon")?.addEventListener("click",u=>a(v,u.currentTarget,0)),document.getElementById("events-icon")?.addEventListener("click",u=>a(v,u.currentTarget,1)),document.getElementById("ideas-icon")?.addEventListener("click",u=>a(v,u.currentTarget,2)),document.getElementById("system-icon")?.addEventListener("click",u=>a(v,u.currentTarget,3)),document.getElementById("settings-icon")?.addEventListener("click",u=>a(v,u.currentTarget,4))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(y),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",u=>{u.preventDefault();try{Ie(document.getElementById("email-input").value),window.location.reload()}catch(g){let f=document.getElementById("login-error");f&&(f.textContent=g.message,f.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qe):Qe();})();
//# sourceMappingURL=dex.498b2509.js.map
