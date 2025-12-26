(()=>{function Te(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Le(t=!1){let e=loggedIn?`
        <div class="nav-right">
            <div class="nav-icon-container">
                <i class='bx bx-bell' id="notif-icon" title="Notifications"></i>
                <div class="nav-dot" id="notif-dot"></div>
            </div>
            <div class="nav-icon-container">
                <i class='bx bx-calendar-event' id="events-icon" title="Events"></i>
                <div class="nav-dot" id="events-dot"></div>
            </div>
            <div class="nav-icon-container">
                <i class='bx bx-bulb' id="ideas-icon" title="Ideas"></i>
                <div class="nav-dot" id="ideas-dot"></div>
            </div>
            <div class="nav-icon-container">
                <i class='bx bx-server' id="system-icon" title="System"></i>
                <div class="nav-dot" id="system-dot"></div>
            </div>
            <div class="nav-icon-container">
                <i class='bx bx-book-content' id="contacts-icon" title="Contacts"></i>
                <div class="nav-dot" id="contacts-dot"></div>
            </div>
            <i class='bx bx-cog' id="settings-icon" title="Settings"></i>
        </div>`:'<button id="login-btn" class="login-btn">Login</button>',i=`
        <div class="nav-left">
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>
        <div class="nav-right">
            ${navRightContent}
        </div>
    `,a=document.createElement("nav");a.innerHTML=i,document.body.prepend(a)}function ke(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function ge(t){let e=null,i=t.onClose||null,a=t.onOpen||null;function o(){if(e){e.classList.add("open"),window.addEventListener("resize",r),a&&setTimeout(a,10);return}let l=document.getElementById("windows-container");l||(l=document.createElement("div"),l.id="windows-container",l.className="windows-container",document.body.appendChild(l)),e=document.createElement("div"),e.id=t.id,e.className="window";let f=t.icon||"bx-window",g=t.title?`<div class="window-title">${t.title}</div>`:"",s=`
            <div class="window-header">
                <i class="bx ${f}"></i>
                ${g}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=s+`<div class="window-content">${t.content||""}</div>`,l.appendChild(e);let p=e.querySelector(".window-close");p&&p.addEventListener("click",v=>{v.stopPropagation(),c()}),window.addEventListener("resize",r),setTimeout(()=>{e.classList.add("open"),a&&a()},10)}function r(){}function c(l=!1){e&&(window.removeEventListener("resize",r),l?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function b(l){if(e){let f=e.querySelector(".window-content");f&&(f.innerHTML=l)}}function m(){return e&&e.classList.contains("open")}return{open:o,close:c,setContent:b,isOpen:m,id:t.id}}function Ce(){return!0}function Se(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function _e(t){localStorage.setItem("easter_user_email",t.trim())}var Ae="easter_theme",A={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ve(){return localStorage.getItem(Ae)||A.AUTO}function st(){let t=window.innerWidth,e=window.innerHeight,i=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?A.ANIMATED:(t===1920&&e===1080&&i||t<=1920||e<=1080,A.DEFAULT)}function Ie(t){if(!Object.values(A).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ae,t),fe(t)}function fe(t,e=!1){let i=document.body,a=t===A.AUTO?st():t;if(e||(i.classList.add("theme-transitioning"),setTimeout(()=>{i.classList.remove("theme-transitioning")},300)),Object.values(A).forEach(o=>{i.classList.remove(`theme-${o}`)}),i.classList.add(`theme-${t}`),a===A.ANIMATED){if(!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}}else{let o=document.querySelector(".background");o&&(e?o.remove():(o.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{o.remove()},400)))}}function Me(){let t=ve();if(fe(t,!0),t===A.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{fe(A.AUTO)},300)})}}function L(t,e,i=null){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${o} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function k(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function it(t,e){let i=document.getElementById(t);i&&(i.style.display=e?"block":"none")}function ae(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;it("notif-dot",e>0)}function ye(){return"https://event.easter.company"}var nt="http://127.0.0.1:8100";function at(){return"https://discord.easter.company"}var ot="http://127.0.0.1:8300",lt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function oe(t){let e=k(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(o,r)=>{let c=lt[r];return c?`<span class="${c}">`:""});let i=(e.match(/<span/g)||[]).length,a=(e.match(/<\/span/g)||[]).length;return i>a&&(e+="</span>".repeat(i-a)),e}var W=null,G=null,ie=!1,ne=!1;async function T(t,e={}){if(W)try{let o=await fetch(W+t,e);if(o.ok)return o;W=null}catch{W=null}let i=ye(),a=nt;try{let o=await fetch(i+t,e);if(o.ok)return W=i,ie&&(console.log("\u2728 Production event service restored."),ie=!1),o;throw new Error("Primary failed")}catch{ie||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${a}`),ie=!0);try{let r=await fetch(a+t,e);if(r.ok)return W=a,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function Be(t,e={}){if(G)try{let o=await fetch(G+t,e);if(o.ok)return o;G=null}catch{G=null}let i=at(),a=ot;try{let o=await fetch(i+t,e);if(o.ok)return G=i,ne&&(console.log("\u2728 Production discord service restored."),ne=!1),o;throw new Error("Primary failed")}catch{ne||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${a}`),ne=!0);try{let r=await fetch(a+t,e);if(r.ok)return G=a,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Ne=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,De=null,R=new Set,le=[];async function K(t=!1){let e=document.getElementById("notifications-list");if(!e)return;rt(),t&&(e.innerHTML="<p>Updating...</p>");let i="/events?ml=1000&format=json&event.type=system.notification.generated";try{let a=await T(i);if(!a.ok)throw new Error("Service is offline or unreachable.");let r=(await a.json()).events||[];De=Date.now();let c=Date.now(),b=24*60*60*1e3,m=r.filter(u=>{let y=localStorage.getItem(`notification_read_ts_${u.id}`);if(!y)return!0;let h=parseInt(y);return c-h<b});m.sort((u,y)=>{let h=_=>{let N=_.event;if(typeof N=="string")try{N=JSON.parse(N)}catch{return"low"}return(N.priority||"low").toLowerCase()},D=_=>_==="critical"?4:_==="high"?3:_==="medium"?2:1,C=D(h(u)),S=D(h(y));return C!==S?S-C:y.timestamp-u.timestamp}),le=m;let l=u=>{let y=u.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return"low"}return(y.priority||"low").toLowerCase()},f=[],s=new Set(m.map(u=>l(u))).size>1;if(m.length>0){let u=null;m.forEach(y=>{let h=l(y);s&&h!==u&&(f.push({id:`divider-${h}`,type:"divider",label:h.toUpperCase()}),u=h),f.push(y)})}if(t&&(e.innerHTML=""),m.length===0){e.innerHTML=L("empty","No notifications yet."),ae();return}let p=u=>{let y=u.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return null}let h=y.title||"Untitled Notification",D=y.body||"No description provided.",C=y.priority||"low",S=!!y.alert,_=y.category||"system",N=y.related_event_ids||[],I=!!localStorage.getItem(`notification_read_ts_${u.id}`),O=new Date(u.timestamp*1e3),P=O.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),z=O.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),$=I?"event-border-grey":"event-border-blue";!I&&S&&($="event-border-red"),I&&(C==="high"||C==="critical")?$="event-border-red":I&&C==="medium"&&($="event-border-orange");let H=I?"notification-read":"notification-unread",M=R.has(u.id),B=M?"expanded":"",pe=M?"display: block;":"display: none;",se="",Ee="";N.length>0&&(Ee=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${N.map(Z=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Z.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),se=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${C==="high"||C==="critical"?"#ff4d4d":C==="medium"?"#ffa500":"#888"}">${C.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${k(D)}</p>
                </div>
                ${Ee}
            `;let U=document.createElement("div");U.className=`event-item notification-item ${$} ${H} ${B} cursor-pointer`,U.dataset.notificationId=u.id,U.onclick=function(Z){if(this.classList.contains("expanded")){this.classList.remove("expanded"),R.delete(u.id);let Q=this.querySelector(".event-details");Q&&(Q.style.display="none")}else{this.classList.add("expanded"),R.add(u.id);let Q=this.querySelector(".event-details");if(Q&&(Q.style.display="block"),!localStorage.getItem(`notification_read_ts_${u.id}`)){localStorage.setItem(`notification_read_ts_${u.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let ue="event-border-grey";C==="high"||C==="critical"?ue="event-border-red":C==="medium"&&(ue="event-border-orange"),this.classList.add(ue),ae()}}},U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${P}</span>
                    <span class="event-date">${z}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${_.toUpperCase()} ${S?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${h}</div>
                    <div class="event-details" style="${pe}">
                        <div class="event-details-header">
                            <h4>${S?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${se}
                    </div>
                </div>
            `;let $e=U.querySelector(".close-details-btn");return $e&&$e.addEventListener("click",Z=>{Z.stopPropagation(),U.classList.remove("expanded");let me=U.querySelector(".event-details");me&&(me.style.display="none"),R.delete(u.id)}),U},v=u=>{let y=document.createElement("div");y.className="notification-divider",y.dataset.notificationId=u.id;let h="#888888";return u.label==="CRITICAL"?h="#ff4d4d":u.label==="HIGH"?h="#ff8888":u.label==="MEDIUM"&&(h="#ffa500"),y.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${h}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,y.innerHTML=`<span style="white-space: nowrap;">${u.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${h}44, transparent); flex-grow: 1;"></div>`,y},n=Array.from(e.children),d=new Map(n.map(u=>[u.dataset.notificationId,u])),x=new Set(f.map(u=>u.id));n.forEach(u=>{let y=u.dataset.notificationId;(!y||!x.has(y))&&u.remove()});let E=null;f.forEach((u,y)=>{let h=d.get(u.id);(!h||t)&&(h&&h.remove(),u.type==="divider"?h=v(u):h=p(u),!h)||(y===0?e.firstElementChild!==h&&e.prepend(h):E&&E.nextElementSibling!==h&&E.after(h),E=h)}),De=Date.now(),ae()}catch(a){console.error("Error fetching notifications:",a),e.children.length===0&&(e.innerHTML=L("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function rt(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),i=document.getElementById("notif-close-all"),a=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{le.forEach(o=>{localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),K(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{le.forEach(o=>{R.add(o.id),localStorage.getItem(`notification_read_ts_${o.id}`)||localStorage.setItem(`notification_read_ts_${o.id}`,Date.now().toString())}),K(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{R.clear(),K(!0)},i.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{let o=Date.now()-1728e5;le.forEach(r=>{localStorage.setItem(`notification_read_ts_${r.id}`,o.toString())}),R.clear(),K(!0)},a.dataset.listenerAttached="true")}var He=()=>`
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
`,j=new Set,Pe=[],V=null;async function F(t=!1){let e=document.getElementById("roadmap-list");if(e){ct();try{let i=await T("/roadmap");if(!i.ok)throw new Error("Offline");let a=await i.json();if(Pe=a,a.length===0){e.innerHTML=L("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let o=l=>{let f=j.has(l.id),g=l.state==="draft",s=l.state==="published",p=l.state==="consumed",v="event-border-grey";s&&(v="event-border-blue"),p&&(v="event-border-purple");let d=new Date(l.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),x=document.createElement("div");x.className=`event-item notification-item ${v} cursor-pointer ${f?"expanded":""}`,x.dataset.itemId=l.id,x.onclick=u=>{if(u.target.closest("button"))return;x.classList.contains("expanded")?(x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",j.delete(l.id)):(x.classList.add("expanded"),x.querySelector(".event-details").style.display="block",j.add(l.id))};let E=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${l.state.toUpperCase()}]</span>`;return x.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${d.split(",")[1]}</span>
          <span class="event-date">${d.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${E}</div>
          <div class="event-message" style="white-space: pre-wrap;">${k(l.content)}</div>
          <div class="event-details" style="${f?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${p?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${s?"bx-pause":"bx-rocket"}'></i> ${s?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${p?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(l.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,x.querySelector(".edit-btn")?.addEventListener("click",()=>dt(l)),x.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>pt(l)),x.querySelector(".delete-btn")?.addEventListener("click",()=>mt(l.id)),x.querySelector(".close-details-btn")?.addEventListener("click",u=>{u.stopPropagation(),x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",j.delete(l.id)}),x},r=Array.from(e.children),c=new Map(r.map(l=>[l.dataset.itemId,l])),b=new Set(a.map(l=>l.id));r.forEach(l=>{let f=l.dataset.itemId;(!f||!b.has(f))&&l.remove()});let m=null;a.forEach((l,f)=>{let g=c.get(l.id);(!g||t)&&(g&&g.remove(),g=o(l),!g)||(f===0?e.firstElementChild!==g&&e.prepend(g):m&&m.nextElementSibling!==g&&m.after(g),m=g)})}catch{e.innerHTML=L("error","Failed to load roadmap.")}}}function ct(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),a=document.getElementById("roadmap-expand-all"),o=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{V=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",V=null},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input").value;if(!r.trim())return;let c=V?`/roadmap/${V}`:"/roadmap",b=V?"PATCH":"POST";try{await T(c,{method:b,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})}),document.getElementById("roadmap-editor-container").style.display="none",F(!0)}catch(m){console.error(m)}},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{Pe.forEach(r=>j.add(r.id)),F(!0)},a.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{j.clear(),F(!0)},o.dataset.listenerAttached="true")}function dt(t){V=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function pt(t){let e=t.state==="published"?"draft":"published";try{await T(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),F(!0)}catch(i){console.error(i)}}async function mt(t){if(confirm("Delete this roadmap item?"))try{await T(`/roadmap/${t}`,{method:"DELETE"}),j.delete(t),F(!0)}catch(e){console.error(e)}}var Oe=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,ut=null,J=new Set,ze=[];async function re(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;gt();let i="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let a=await T(i);if(!a.ok)throw new Error("Service is offline or unreachable.");let r=(await a.json()).events||[];if(ze=r,ut=Date.now(),r.length===0){e.innerHTML=L("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle.");return}t&&(e.innerHTML="");let c=g=>{let s=g.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let p=s.title||"Untitled Blueprint",v=s.summary||s.body||"No summary provided.",n=s.content||"",d=s.category||"architecture",x=s.affected_services||[],E=s.implementation_path||[],u=new Date(g.timestamp*1e3),y=u.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),h=u.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),D=J.has(g.id),C=D?"display: block;":"display: none;",S=document.createElement("div");S.className=`event-item notification-item event-border-purple cursor-pointer ${D?"expanded":""}`,S.dataset.blueprintId=g.id,S.onclick=function(I){if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(g.id);let P=this.querySelector(".event-details");P&&(P.style.display="none")}else{this.classList.add("expanded"),J.add(g.id);let P=this.querySelector(".event-details");P&&(P.style.display="block")}};let _=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",N="";E.length>0&&(N=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${E.map(I=>`<li>${k(I)}</li>`).join("")}
                        </ul>
                    </div>
                `),S.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${y}</span>
                    <span class="event-date">${h}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${d.toUpperCase()}</div>
                    <div class="event-message">${p}</div>
                    <div class="event-details" style="${C}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${k(v)}
                        </div>
                        ${_}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${k(n)}</p>
                        </div>
                        ${N}
                    </div>
                </div>
            `;let q=S.querySelector(".close-details-btn");return q&&q.addEventListener("click",I=>{I.stopPropagation(),S.classList.remove("expanded");let O=S.querySelector(".event-details");O&&(O.style.display="none"),J.delete(g.id)}),S},b=Array.from(e.children),m=new Map(b.map(g=>[g.dataset.blueprintId,g])),l=new Set(r.map(g=>g.id));b.forEach(g=>{let s=g.dataset.blueprintId;(!s||!l.has(s))&&g.remove()});let f=null;r.forEach((g,s)=>{let p=m.get(g.id);(!p||t)&&(p&&p.remove(),p=c(g),!p)||(s===0?e.firstElementChild!==p&&e.prepend(p):f&&f.nextElementSibling!==p&&f.after(p),f=p)})}catch(a){console.error("Error fetching blueprints:",a),e.children.length===0&&(e.innerHTML=L("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function gt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ze.forEach(i=>J.add(i.id)),re(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),re(!0)},e.dataset.listenerAttached="true")}var Ue=()=>`
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
            ${Oe()}
        </div>
    </div>
`;async function Re(){await Promise.all([F(),re()])}var je=()=>`
    <div class="notifications-actions">
        <button id="contacts-refresh" class="notif-action-btn"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
        <p>Loading contacts...</p>
    </div>
`,ft=null;async function Y(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>Y(),e.dataset.listenerAttached="true");try{let i=await Be("/contacts");if(!i.ok)throw new Error("Service unreachable");let o=(await i.json()).members||[];if(ft=Date.now(),o.length===0){t.innerHTML=L("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,"Master User":1,Admin:2,Moderator:3,Contributor:4,User:5,Anyone:6};o.sort((c,b)=>{let m=r[c.level]??10,l=r[b.level]??10;return m!==l?m-l:c.username.localeCompare(b.username)}),t.innerHTML=o.map(c=>{let b=c.color?"#"+c.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",m=c.status==="online"?"#5eff5e":c.status==="idle"?"#ffa500":c.status==="dnd"?"#ff4d4d":"#666",l="#888";c.level==="Me"||c.level==="Master User"?l="#bb86fc":c.level==="Admin"?l="#cf6679":c.level==="Moderator"?l="#03dac6":c.level==="Contributor"&&(l="#ffa500");let f=c.level==="Me",g=f?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",s=f?"2px solid #bb86fc":`1px solid ${b}33`;return`
                <div class="user-profile-section" style="background: ${g}; padding: 15px; border-radius: 8px; border: ${s}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${f?"#bb86fc":b}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${c.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${f?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${m}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${l}; font-weight: 600; text-transform: uppercase;">${f?"DEXTER (ME)":c.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${c.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.innerHTML=L("offline","Failed to fetch contacts.","The Discord service may be offline.")}}var vt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Fe(t,e){let i=vt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(i=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let a=i.replace(/\{(\w+)\}/g,(o,r)=>e[r]!==void 0&&e[r]!==null?e[r]:o);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(a+=` (Translation: ${e.english_translation})`),a}var We=()=>`
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
`,ce=null,X=new Set,ee=[],de="all",yt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},bt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function qe(t){for(let[e,i]of Object.entries(yt))if(i.includes(t))return e;return"system"}function ht(t){return bt[t]||"bx-square-rounded"}async function te(t=!1){let e=document.getElementById("events-timeline");if(!e)return;xt();let a=`/events?ml=${de==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let o=await T(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[];c.some(v=>{let n=v.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!1}return n.type==="messaging.user.joined_server"})&&Y();let m=c;if(de!=="all"&&(m=c.filter(v=>{let n=v.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!1}return qe(n.type)===de})),ee=m.slice(0,50),ce=Date.now(),updateTabTimestamp(1,ce),ee.length===0){e.innerHTML=L("empty","No events found for this filter.");return}t&&(e.innerHTML="");let l=v=>{let n=v.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let d=n.type,x=qe(d),E=ht(d),u=d==="engagement.decision"||d==="messaging.bot.sent_message"||d==="messaging.user.sent_message"||d==="moderation.explicit_content.deleted"||d==="analysis.link.completed"||d==="analysis.visual.completed"||d==="system.cli.command"||d==="system.analysis.audit"||d==="system.test.completed"||d==="error_occurred"||d==="system.cli.status"||d.startsWith("system.roadmap")||d.startsWith("system.process"),y="event-border-grey";u&&(d==="moderation.explicit_content.deleted"||d==="error_occurred"?y="event-border-red":d==="analysis.link.completed"||d==="analysis.visual.completed"||d==="system.analysis.audit"?y="event-border-purple":d==="system.cli.command"||d==="system.cli.status"?y="event-border-orange":d==="system.test.completed"?y=n.test?.status==="OK"&&n.lint?.status==="OK"&&n.format?.status==="OK"?"event-border-blue":"event-border-red":y="event-border-blue");let h=u?"cursor-pointer":"",D=X.has(v.id),C=D?"expanded":"",S=D?"display: block;":"display: none;",_=new Date(v.timestamp*1e3),N=_.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),q=_.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),I=Fe(d,n),O=n.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${n.user_level})</span>`:"",P="";if(u){let $="";if(d==="engagement.decision")$=`
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
                    `;else if(d==="messaging.bot.sent_message")$=`
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
                    `;else if(d==="moderation.explicit_content.deleted")$=`
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
                            <pre class="detail-pre">${k(n.raw_output)||"None"}</pre>
                        </div>
                    `;else if(d==="analysis.link.completed")$=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${k(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${k(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${k(n.summary)||"None"}</pre>
                        </div>
                    `;else if(d==="analysis.visual.completed"){let H="";n.base64_preview?H=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(H=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),$=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${H}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${k(n.description)||"None"}</pre>
                        </div>
                    `}else if(d==="system.cli.command")$=`
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
                            <pre class="detail-pre">${k(n.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(d==="system.analysis.audit")$=`
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
                            <pre class="detail-pre">${k(n.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${k(n.raw_input)}</pre>
                        </div>
                    `;else if(d==="system.test.completed")$=`
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
                    `;else if(d==="error_occurred")$=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${n.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${k(n.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(n.context||{},null,2)}</pre>
                        </div>
                    `;else if(d==="system.cli.status")$=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${k(n.message)}</pre>
                        </div>
                    `;else if(d==="messaging.user.sent_message"){let H="";n.attachments&&n.attachments.length>0&&(H=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${n.attachments.map(B=>{let pe=B.content_type&&B.content_type.startsWith("image/"),se=(B.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${pe?`<div class="attachment-thumb-container"><img src="${B.url}" alt="${B.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${B.url}" target="_blank" class="attachment-link">${B.filename}</a>
                                        <span class="attachment-meta">${B.content_type} \u2022 ${se}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),$=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${n.content||"(empty)"}</pre>
                        </div>
                        ${H}
                    `}P=`
                    <div class="event-details" style="${S}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${$}
                    </div>
                `}let z=document.createElement("div");if(z.className=`event-item ${y} ${h} ${C}`,z.dataset.eventId=v.id,z.onclick=function($){if(!u)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),X.delete(v.id);let M=this.querySelector(".event-details");M&&(M.style.display="none")}else{this.classList.add("expanded"),X.add(v.id);let M=this.querySelector(".event-details");M&&(M.style.display="block")}},z.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${N}</span>
                    <span class="event-date">${q}</span>
                </div>
                <div class="event-icon"><i class='bx ${E}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${x}">${x}</span>
                        ${v.service} ${O}
                    </div>
                    <div class="event-message">${I}</div>
                    ${P}
                </div>
            `,u){let $=z.querySelector(".close-details-btn");$&&$.addEventListener("click",H=>{H.stopPropagation();let M=H.target.closest(".event-item");if(M){M.classList.remove("expanded"),X.delete(v.id);let B=M.querySelector(".event-details");B&&(B.style.display="none")}})}return z},f=Array.from(e.children),g=new Map(f.map(v=>[v.dataset.eventId,v])),s=new Set(ee.map(v=>v.id));f.forEach(v=>{let n=v.dataset.eventId;(!n||!s.has(n))&&v.remove()});let p=null;ee.forEach((v,n)=>{let d=g.get(v.id);(!d||t)&&(d&&d.remove(),d=l(v),!d)||(n===0?e.firstElementChild!==d&&e.prepend(d):p&&p.nextElementSibling!==d&&p.after(d),p=d)}),ce=Date.now(),updateTabTimestamp(1,ce)}catch(o){console.error("Error fetching events:",o),e.children.length===0&&(e.innerHTML=L("offline","Failed to load events.","The event service may be offline or unreachable."))}}function xt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ee.forEach(a=>X.add(a.id)),te(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.clear(),te(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(a=>{a.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),a.classList.add("active"),de=a.dataset.filter,te(!0)}}),i.dataset.listenerAttached="true")}function Ge(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var wt=null;async function be(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await T("/logs");if(!e.ok)throw new Error("Logs offline");let i=await e.json();if(!i||i.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let a=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],o=i.filter(c=>!a.includes(c.id));o.forEach(c=>{c.logs&&Array.isArray(c.logs)?c.logs.reverse():c.logs=[]}),o.reverse();let r=o.map(c=>{let b=c.logs.join(`
`),m=[...c.logs];if(m.length<25){let f=25-m.length;for(let g=0;g<f;g++)m.push("")}else m.length>25&&(m=m.slice(-25));let l=m.map(f=>oe(f)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${c.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(b)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${c.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${l}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(c=>{c.addEventListener("click",()=>{let b=unescape(c.dataset.logs);navigator.clipboard.writeText(b).then(()=>{let m=c.querySelector("i");m.classList.remove("bx-copy"),m.classList.add("bx-check"),setTimeout(()=>{m.classList.remove("bx-check"),m.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(c=>{c.addEventListener("click",async()=>{let b=c.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${b}?`))try{(await T(`/logs?service_id=${b}`,{method:"DELETE"})).ok&&be()}catch(m){console.error("Error clearing logs:",m)}})}),wt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var Ve=()=>`
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
            ${Ge()}
        </div>
    `;async function Je(){await Promise.all([Xe(),Ct(),St()]),await be()}var Et=null,$t=null,Tt=null;async function Ye(){try{return await(await T("/system_monitor")).json()}catch{return null}}async function Ke(){try{return await(await T("/system/hardware")).json()}catch{return null}}async function Lt(){try{return await(await T("/processes")).json()}catch{return null}}async function kt(){try{return await(await T("/analyst/status")).json()}catch{return null}}async function Ct(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),i=document.getElementById("hardware-refresh-btn"),a=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let p="",v=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(p+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${v} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let n=s.CPU[0];p+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${n.LABEL}">${n.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${n.COUNT} Cores / ${n.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((n,d)=>{let x=(n.VRAM/1073741824).toFixed(1);p+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${d}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${n.LABEL}">${n.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${x} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let n=0,d=0;s.STORAGE.forEach(y=>{n+=y.USED,d+=y.SIZE});let x=(n/(1024*1024*1024)).toFixed(1),E=(d/(1024*1024*1024)).toFixed(1),u=d>0?(n/d*100).toFixed(0):0;p+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${x} / ${E} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${u>90?"#ff4d4d":"#00ff00"}; width: ${u}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=p};if(e&&i){i.dataset.listenerAttached||(i.onclick=async()=>{i.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let p=await Ke();p?(a(p),i.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(i.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},i.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let p=await Ke();a(p)}}if(!t)return;let o=await Ye();if(!o||!o.services){t.innerHTML=L("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}Et=Date.now();let r=o.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function c(s){if(!s||s==="N/A"||s==="unknown")return"-";let p=s.match(/^(\d+\.\d+\.\d+)/);return p?p[0]:s.split(".").slice(0,3).join(".")||"-"}function b(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function m(s){if(!s||s==="N/A"||s==="unknown")return"-";let p=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!p)return"-";let v=parseInt(p[1])||0,n=parseInt(p[2])||0,d=parseInt(p[3])||0,x=parseFloat(p[4])||0,E=v*86400+n*3600+d*60+x,u=Math.floor(E/86400);if(u>0)return`${u}d`;let y=Math.floor(E/3600);if(y>0)return`${y}h`;let h=Math.floor(E/60);return h>0?`${h}m`:`${Math.floor(E)}s`}function l(s){let p=s.status==="online",v=p?"service-widget-online":"service-widget-offline",n=p?"bx-check-circle":"bx-x-circle",d=p?"OK":"BAD",x=s.version?c(s.version.str):"-",E=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",u=s.memory&&s.memory!=="N/A"?s.memory:"-",y=E!=="-"?"#00ff00":"#666",h=E!=="-"?"#fff":"#666",D=u!=="-"?"#00ff00":"#666",C=u!=="-"?"#fff":"#666",S=m(s.uptime),_="";return p?_=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${x}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${S}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${y};"></i>
                        <span style="color: ${h};">${E}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${D};"></i>
                        <span style="color: ${C};">${u}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${v}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${n}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${d}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${b(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let f=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),g=new Set(r.map(s=>s.id));for(let[s,p]of f)g.has(s)||p.remove();r.forEach(s=>{let p=l(s),v=f.get(s.id);v?v.outerHTML!==p&&(v.outerHTML=p):t.insertAdjacentHTML("beforeend",p)})}async function St(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Ye();if(!e){t.innerHTML=L("offline","Failed to load model status.");return}$t=Date.now();let i=e.models||[],a=e.whisper;Array.from(t.children).forEach(b=>{b.classList.contains("service-widget")||b.remove()});function o(b){let m=b.status==="Ready";return`<div class="service-widget ${m?"service-widget-online":"service-widget-offline"}" data-whisper-widget><div class="service-widget-header"><i class="bx bxs-microphone-alt"></i><h3>Whisper</h3><span class="service-widget-status">${m?"READY":"NOT FOUND"}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Status:</span><span class="info-value">${b.status}</span></div><div class="service-widget-info"><span class="info-label">Model:</span><span class="info-value">large-v3-turbo</span></div></div></div>`}function r(b){let m=b.status==="Downloaded",l=m?"service-widget-online":"service-widget-offline",f=m?"OK":"MISSING",g=m&&b.size>0?`${(b.size/1e9).toFixed(2)} GB`:"-",s=b.name;return b.type==="custom"&&s.endsWith(":latest")&&(s=s.replace(":latest","")),`<div class="service-widget ${l}" data-model-name="${b.name}"><div class="service-widget-header"><i class="bx ${m?"bx-check-circle":"bx-x-circle"}"></i><h3>${s}</h3><span class="service-widget-status">${f}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${b.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${g}</span></div></div></div>`}let c="";if(a&&(c+=o(a)),c+=i.map(r).join(""),!c){t.innerHTML=L("empty","No models found.");return}t.innerHTML!==c&&(t.innerHTML=c)}async function Xe(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),i=document.getElementById("analyst-t2-val"),a=document.getElementById("analyst-t3-val"),o=document.getElementById("analyst-idle-val"),r=document.getElementById("analyst-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await T("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),Xe()}catch{r.innerHTML="<i class='bx bx-error'></i> Failed"}},r.dataset.listenerAttached="true");let c=await kt();if(c){let s=Math.floor(Date.now()/1e3),p=c.active_tier,v=(n,d,x)=>{if(p===x||x==="guardian"&&p==="tests"){n.textContent="Working",n.style.color="#bb86fc";return}let E=d-s;if(E<=0)n.textContent="Ready",n.style.color="#5eff5e";else{let u=Math.floor(E/60),y=E%60;n.textContent=`${u}m ${y}s`,n.style.color="#fff"}};if(e&&c.guardian&&v(e,c.guardian.next_run,"guardian"),i&&c.architect&&v(i,c.architect.next_run,"architect"),a&&c.strategist&&v(a,c.strategist.next_run,"strategist"),o&&c.system_idle_time!==void 0){let n=c.system_idle_time,d=Math.floor(n/60),x=n%60;o.textContent=`${d}m ${x}s`,n>300?o.style.color="#5eff5e":n>60?o.style.color="#ffa500":o.style.color="#fff"}}else[e,i,a,o].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let b=await Lt(),m=document.getElementById("vitals-processes-val");if(m)if(b){let s=b.length;m.textContent=s>0?`${s} Active`:"Idle",m.style.color=s>0?"#bb86fc":"#fff"}else m.textContent="-",m.style.color="#888";if(b===null){t.innerHTML=L("offline","Failed to load process status.");return}if(Tt=Date.now(),b.length===0){t.innerHTML=L("empty","No active processes.");return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function l(s){let p=Math.floor(Date.now()/1e3-s.start_time),v=s.retries>0?`<span class="process-retry-badge">Retry ${s.retries}</span>`:"",n=s.channel_id,d={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return d[n]?n=d[n]:/^\d+$/.test(n)&&(n=`Channel ${n}`),`<div class="service-widget process-widget" data-channel-id="${s.channel_id}"><div class="service-widget-header"><i class="bx bx-cog"></i><h3>${n}</h3>${v}</div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">State:</span><span class="info-value">${s.state}</span></div><div class="service-widget-info"><span class="info-label">Duration:</span><span class="info-value">${p}s</span></div><div class="service-widget-info"><span class="info-label">PID:</span><span class="info-value">${s.pid}</span></div></div></div>`}let f=new Map(Array.from(t.querySelectorAll(".process-widget")).map(s=>[s.dataset.channelId,s])),g=new Set(b.map(s=>s.channel_id));for(let[s,p]of f)g.has(s)||p.remove();b.forEach(s=>{let p=l(s),v=f.get(s.channel_id);v?v.outerHTML!==p&&(v.outerHTML=p):t.insertAdjacentHTML("beforeend",p)})}function he(){let t=ve(),e=Se()||"master@easter.company",i={enabled:Notification.permission==="granted",supported:"Notification"in window},a=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(A).map(o=>`
                    <div class="theme-card ${t===o?"active":""}" data-theme="${o}">
                        <div class="theme-preview theme-preview-${o.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${o}</h3>
                            <p>${o===A.AUTO?"Automatic theme selection.":o===A.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
            </div>`}function xe(t){let e=document.querySelector("#main-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(o=>{o.addEventListener("click",function(){let r=this.dataset.theme;Ie(r),t.setContent(he()),xe(t)})});let i=document.getElementById("notifications-toggle");i&&(i.onclick=async o=>{if(o.target.checked)try{await Notification.requestPermission()!=="granted"&&(o.target.checked=!1)}catch{o.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),o.target.checked=!0)});let a=document.getElementById("analytics-toggle");a&&(a.checked=localStorage.getItem("easter_analytics_enabled")!=="false",a.onclick=o=>{let r=o.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}var Qe=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Engage with Dexter's internal cognitive core directly from the browser.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Manually trigger a Tier 1 technical audit. Analyzes vitals, logs, and events for system anomalies.",usage:"dex guardian",category:"cognitive"},{id:"whisper",title:"Whisper",icon:"bx-microphone",description:"Access the local OpenAI Whisper model for high-fidelity speech-to-text transcription.",usage:"dex whisper transcribe -k <redis_key>",category:"cognitive"},{id:"ollama",title:"Ollama",icon:"bx-brain",description:"Direct proxy to the underlying Ollama instance managing local large language models.",usage:"dex ollama [pull|run|ps|list]",category:"cognitive"},{id:"build",title:"Build",icon:"bx-package",description:"Ecosystem-wide build system. Increments versions, compiles binaries, and updates the dashboard.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Syncs all service repositories and applies the latest patches from source.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Executes the unified test suite across all services (Format, Lint, and Unit Tests).",usage:"dex test [service] [--models]",category:"lifecycle"},{id:"add",title:"Add Service",icon:"bx-plus-circle",description:"Registers and installs a new service into the Dexter ecosystem from a remote repository.",usage:"dex add <repo_url>",category:"lifecycle"},{id:"remove",title:"Remove Service",icon:"bx-minus-circle",description:"Uninstalls a service and removes its registration from the global service map.",usage:"dex remove <service_id>",category:"lifecycle"},{id:"status",title:"Status",icon:"bx-pulse",description:"Real-time health check for all system components, including networking and version info.",usage:"dex status [service|all]",category:"system"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"High-performance log streaming. Connects directly to localized service log files.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"Hardware introspection. Reports CPU, GPU, Memory, and OS package dependencies.",usage:"dex system [info|scan|validate|install]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Low-level configuration management for the centralized service-map.json.",usage:"dex config <service> [field]",category:"system"},{id:"cache",title:"Cache",icon:"bx-data",description:"Manages the local Redis-backed cognitive and ephemeral data cache.",usage:"dex cache [clear|list]",category:"system"},{id:"serve",title:"Serve",icon:"bx-broadcast",description:"Internal static file server for local development and dashboard hosting.",usage:"dex serve -d <dir> -p <port>",category:"system"},{id:"event",title:"Event Bus",icon:"bx-share-alt",description:"Direct interaction with the core event service. Manage the system-wide event stream.",usage:"dex event [service|log|delete|analyst]",category:"system"},{id:"discord",title:"Discord",icon:"bx-message-square-dots",description:"Manages the Discord engine, including channel mapping and contact synchronization.",usage:"dex discord [contacts|channels|service|quiet]",category:"system"},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Gracefully restarts all manageable systemd services in the ecosystem.",usage:"dex restart [service|all]",category:"service"},{id:"start",title:"Start",icon:"bx-play",description:"Initiates service execution for all stopped manageable components.",usage:"dex start [service|all]",category:"service"},{id:"stop",title:"Stop",icon:"bx-stop",description:"Gracefully terminates the execution of manageable systemd services.",usage:"dex stop [service|all]",category:"service"},{id:"python",title:"Python Env",icon:"bx-code-curly",description:"Proxy command to run executables within Dexter's managed Python virtual environments.",usage:"dex python <command>",category:"proxy"},{id:"bun",title:"Bun Runtime",icon:"bx-bolt-circle",description:"Proxy command to the local Bun runtime for high-performance JavaScript execution.",usage:"dex bun <args>",category:"proxy"}],_t=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},service:{title:"Service Control",icon:"bx-power-off",color:"#ffa500"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"},proxy:{title:"Runtime Proxies",icon:"bx-code-alt",color:"#666"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 60px 20px; margin-bottom: 40px;">
                <h1 style="font-size: 3em; margin-bottom: 15px; color: #fff; letter-spacing: -1px;">DEX CLI</h1>
                <p style="color: #888; max-width: 700px; margin: 0 auto; font-size: 1.1em; line-height: 1.6;">The unified command-line interface for the Dexter ecosystem. A high-fidelity toolset designed to manage, monitor, and evolve your autonomous infrastructure.</p>
            </div>
    `;for(let[i,a]of Object.entries(t)){let o=Qe.filter(r=>r.category===i);o.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 60px;">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 30px; padding: 0 20px;">
                    <i class='bx ${a.icon}' style="color: ${a.color}; font-size: 1.8em;"></i>
                    <h2 style="font-size: 1.4em; text-transform: uppercase; letter-spacing: 3px; color: #eee; margin: 0;">${a.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 25px; padding: 0 20px;">
                    ${o.map(r=>`
                        <div class="cli-command-card ${r.dummy?"dummy":""}" data-cmd="${r.id}" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); cursor: pointer; position: relative; overflow: hidden; display: flex; flex-direction: column;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${a.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 20px; position: relative; z-index: 1;">
                                <i class='bx ${r.icon}' style="font-size: 2.2em; color: ${a.color};"></i>
                                <h3 style="font-size: 1.4em; color: #fff; margin: 0; letter-spacing: -0.5px;">${r.title}</h3>
                            </div>
                            <p style="font-size: 0.95em; color: #999; margin-bottom: 25px; line-height: 1.6; text-align: left; position: relative; z-index: 1; flex: 1;">${r.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.4); padding: 12px 18px; border-radius: 10px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${a.color}; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.03);">
                                <span style="opacity: 0.4; margin-right: 8px;">$</span>${r.usage}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)}return e+="</div>",e},we=!1;function At(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
                    <button id="terminal-action-btn" class="notif-action-btn" style="display: none; padding: 6px 20px;">Done</button>
                </div>
            </div>
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Ze(),document.getElementById("terminal-action-btn").onclick=()=>Ze());let i=document.getElementById("cli-terminal-body");return i.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),we=!0,i}function Ze(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),we=!1}function w(t,e,i="output"){if(!we)return;let a=document.createElement("div");a.className=`terminal-line terminal-${i}`,i==="prompt"?a.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:a.innerHTML=oe(e),t.appendChild(a),t.scrollTop=t.scrollHeight}async function It(t){let e=Qe.find(a=>a.id===t);if(!e)return;let i=At(e);w(i,`dex ${t}`,"prompt");try{let o=(await T("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),r=new TextDecoder;for(;;){let{value:c,done:b}=await o.read();if(b)break;r.decode(c,{stream:!0}).split(`
`).forEach(f=>{if(f.trim()==="")return;let g="output";f.includes("[ERROR]")?g="error":f.includes("[SUCCESS]")||f.includes("\u2713")?g="success":f.includes("!")&&(g="warning"),w(i,f,g)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch{w(i,"* this is a demonstration","warning"),await Mt(t,i)}finally{document.getElementById("terminal-action-btn").style.display="block"}}async function Mt(t,e){switch(await new Promise(i=>setTimeout(i,500)),t){case"guardian":w(e,"Initializing Tier 1 Analysis..."),await new Promise(a=>setTimeout(a,800)),w(e,"Fetching system context..."),w(e,"  \u2713 system_monitor (6.2 KiB)"),w(e,"  \u2713 events (17.3 KiB)"),w(e,"  \u2713 logs (22.9 KiB)"),await new Promise(a=>setTimeout(a,1e3)),w(e,"Constructing prompt (47005 characters)..."),w(e,"Running Guardian Analysis via Ollama (gpt-oss:20b)..."),await new Promise(a=>setTimeout(a,1500)),w(e,`
# System Health Snapshot`,"success"),w(e,"Everything looks green. System is operating within normal parameters."),w(e,"  \u2022 All 5 services reporting OK"),w(e,"  \u2022 No critical errors in last 50 log lines"),w(e,"  \u2022 Memory usage at 42%"),await new Promise(a=>setTimeout(a,800)),w(e,`
Resetting Guardian timer...`),w(e,"\u2713 Guardian timer reset.","success");break;case"test":w(e,"Executing system-wide test suite...");let i=["cli","event","discord","tts","web"];for(let a of i)await new Promise(o=>setTimeout(o,600)),w(e,`Testing ${a}...`),await new Promise(o=>setTimeout(o,400)),w(e,"  \u2713 Format","success"),w(e,"  \u2713 Lint","success"),w(e,"  \u2713 Unit Tests","success");w(e,`
\u2728 All tests passed!`,"success");break;case"build":w(e,"Incrementing version: 2.8.137 -> 2.8.138 (patch)"),w(e,"Building all services from local source..."),await new Promise(a=>setTimeout(a,1e3)),w(e,"[1/3] Building dex-cli..."),w(e,"  \u2713 compilation successful"),await new Promise(a=>setTimeout(a,800)),w(e,"[2/3] Building dex-event-service..."),w(e,"  \u2713 compilation successful"),await new Promise(a=>setTimeout(a,800)),w(e,"[3/3] Building easter.company..."),w(e,"  \u2713 bundling assets"),await new Promise(a=>setTimeout(a,1200)),w(e,`
\u2713 Build complete. Release 2.8.138 ready.`,"success");break;default:w(e,`Executing ${t} logic...`),await new Promise(a=>setTimeout(a,1e3)),w(e,"Operation completed successfully.","success")}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}function et(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=_t(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-8px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.04)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.02)"}),e.addEventListener("click",()=>{let i=e.dataset.cmd;if(i==="chat"){alert("Connection to cognitive core pending deployment...");return}It(i)})}))}async function Bt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${ye()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function tt(){Bt(),Me(),Te(),window.location.pathname.includes("/dex")&&et();let t=Ce();Le(t),ke();let e=document.querySelector("footer"),i=null;function a(){i=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(l=>l.classList.remove("active","inactive"))}function o(l,f=null,g=null){let s=i&&i.id===l.id;i&&i.close(!s),s?i=null:setTimeout(()=>{g===0?l.setContent(Ne()):g===1?l.setContent(We()):g===2?l.setContent(Ue()):g===3?l.setContent(Ve()):g===4?l.setContent(je()):g===5&&l.setContent(he()),l.open(),i=l,l.activeTabIndex=g,document.querySelectorAll(".nav-right i").forEach(p=>{let v=p===f;p.classList.toggle("active",v),p.classList.toggle("inactive",!v&&f)}),e?.classList.add("hide"),r(),g===5&&xe(l)},i?220:0)}async function r(l=!1){if(!m.isOpen())return;switch(m.activeTabIndex){case 0:await K(l);break;case 1:await te(l);break;case 2:await Re(l);break;case 3:await Je(l);break;case 4:await Y(l);break}}async function c(){let l=setInterval(()=>{if(!m.isOpen())return clearInterval(l);r()},3e3),f=setInterval(()=>{if(!m.isOpen())return clearInterval(f);Y()},6e5)}let b=ge({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:a}),m=ge({id:"main-window",icon:"bx-layer",onClose:a,onOpen:()=>{c()}});t?(document.getElementById("notif-icon")?.addEventListener("click",l=>o(m,l.currentTarget,0)),document.getElementById("events-icon")?.addEventListener("click",l=>o(m,l.currentTarget,1)),document.getElementById("ideas-icon")?.addEventListener("click",l=>o(m,l.currentTarget,2)),document.getElementById("system-icon")?.addEventListener("click",l=>o(m,l.currentTarget,3)),document.getElementById("contacts-icon")?.addEventListener("click",l=>o(m,l.currentTarget,4)),document.getElementById("settings-icon")?.addEventListener("click",l=>o(m,l.currentTarget,5))):document.getElementById("login-btn")?.addEventListener("click",()=>{o(b),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",l=>{l.preventDefault();try{_e(document.getElementById("email-input").value),window.location.reload()}catch(f){let g=document.getElementById("login-error");g&&(g.textContent=f.message,g.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",tt):tt();})();
//# sourceMappingURL=dex.a17dbe54.js.map
