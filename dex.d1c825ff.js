(()=>{function we(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ee(t=!1){let a=`
        <div class="nav-left">
            ${window.location.pathname.includes("/dex")?`
        <div class="nav-brand-container" id="nav-root-link" title="Back to Home">
            <i class='bx bx-microphone' id="navbar-microphone"></i>
        </div>`:`
        <div class="nav-brand-container" id="nav-root-link" title="Back to Home">
            <img src="/static/meta/favicon.svg" alt="Easter Company" class="navbar-favicon">
        </div>`}
        </div>
        ${t?`
        <div class="nav-right">
            <div class="nav-tab" id="notif-icon" data-tab-index="0">
                <i class='bx bx-bell'></i>
                <span class="nav-tab-title">Notifications</span>
                <div class="nav-dot" id="notif-dot"></div>
            </div>
            <div class="nav-tab" id="events-icon" data-tab-index="1">
                <i class='bx bx-calendar-event'></i>
                <span class="nav-tab-title">Events</span>
                <div class="nav-dot" id="events-dot"></div>
            </div>
            <div class="nav-tab" id="ideas-icon" data-tab-index="2">
                <i class='bx bx-bulb'></i>
                <span class="nav-tab-title">Ideas</span>
                <div class="nav-dot" id="ideas-dot"></div>
            </div>
            <div class="nav-tab" id="system-icon" data-tab-index="3">
                <i class='bx bx-server'></i>
                <span class="nav-tab-title">System</span>
                <div class="nav-dot" id="system-dot"></div>
            </div>
            <div class="nav-tab" id="contacts-icon" data-tab-index="4">
                <i class='bx bx-book-content'></i>
                <span class="nav-tab-title">Contacts</span>
                <div class="nav-dot" id="contacts-dot"></div>
            </div>
            <div class="nav-tab" id="settings-icon" data-tab-index="5">
                <i class='bx bx-cog'></i>
                <span class="nav-tab-title">Settings</span>
            </div>
        </div>`:'<button id="login-btn" class="login-btn">Login</button>'}
        <div class="nav-close-container" id="nav-window-close" title="Close Window">
            <i class='bx bx-x'></i>
        </div>
    `,r=document.createElement("nav");r.id="main-navbar",r.innerHTML=a,document.body.prepend(r),document.getElementById("nav-root-link")?.addEventListener("click",()=>{window.location.href="/"})}function ce(t){let e=null,n=t.content||"",i=t.onClose||null,a=t.onOpen||null,r=!1;function l(){if(r)return;if(e){e.classList.remove("switching"),e.classList.add("open"),a&&setTimeout(a,10);return}let p=document.getElementById("windows-container");p||(p=document.createElement("div"),p.id="windows-container",p.className="windows-container",document.body.appendChild(p)),e=document.createElement("div"),e.id=t.id,e.className="window",e.innerHTML=`<div class="window-content">${n}</div>`,p.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e&&(e.classList.add("open"),a&&a())})})}function v(p=!1){!e||r||(r=!0,p?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{m(),r=!1},300)):(e.classList.remove("open"),i&&i(),setTimeout(()=>{m(),r=!1},500)))}function m(){e&&e.parentNode&&e.parentNode.removeChild(e),e=null}function f(p){if(n=p,e){let s=e.querySelector(".window-content");s&&(s.innerHTML=p)}}function h(){return e&&e.classList.contains("open")}return{open:l,close:v,setContent:f,isOpen:h,id:t.id}}function $e(){return!0}function Te(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Le(t){localStorage.setItem("easter_user_email",t.trim())}var ke="easter_theme",I={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function pe(){return localStorage.getItem(ke)||I.AUTO}function it(){let t=window.innerWidth,e=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?I.ANIMATED:(t===1920&&e===1080&&n||t<=1920||e<=1080,I.DEFAULT)}function Ce(t){if(!Object.values(I).includes(t))throw new Error("Invalid theme");localStorage.setItem(ke,t),de(t)}function de(t,e=!1){let n=document.body,i=t===I.AUTO?it():t;if(e||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(I).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${t}`),i===I.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(e?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function Se(){let t=pe();if(de(t,!0),t===I.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{de(I.AUTO)},300)})}}function _(){return`
        <div class="glassy-loader-container">
            <div class="glassy-loader">
                <div class="glassy-orbit"></div>
                <div class="glassy-core"></div>
                <div class="glassy-pulse"></div>
            </div>
            <p class="loader-text">DEXTER IS THINKING</p>
        </div>
    `}function T(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function H(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function nt(t,e){let n=document.getElementById(t);n&&(n.style.display=e?"block":"none")}function se(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;nt("notif-dot",e>0)}function me(){return"https://event.easter.company"}var at="http://127.0.0.1:8100";function ot(){return"https://discord.easter.company"}var rt="http://127.0.0.1:8300",lt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function ie(t){let e=H(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(a,r)=>{let l=lt[r];return l?`<span class="${l}">`:""});let n=(e.match(/<span/g)||[]).length,i=(e.match(/<\/span/g)||[]).length;return n>i&&(e+="</span>".repeat(n-i)),e}var j=null,F=null,ee=!1,te=!1;async function $(t,e={}){if(j)try{let a=await fetch(j+t,e);if(a.ok)return a;j=null}catch{j=null}let n=me(),i=at;try{let a=await fetch(n+t,e);if(a.ok)return j=n,ee&&(console.log("\u2728 Production event service restored."),ee=!1),a;throw new Error("Primary failed")}catch{ee||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${i}`),ee=!0);try{let r=await fetch(i+t,e);if(r.ok)return j=i,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function _e(t,e={}){if(F)try{let a=await fetch(F+t,e);if(a.ok)return a;F=null}catch{F=null}let n=ot(),i=rt;try{let a=await fetch(n+t,e);if(a.ok)return F=n,te&&(console.log("\u2728 Production discord service restored."),te=!1),a;throw new Error("Primary failed")}catch{te||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${i}`),te=!0);try{let r=await fetch(i+t,e);if(r.ok)return F=i,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Ie=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        ${_()}
    </div>
`,Ae=null,z=new Set,ne=[];async function R(t=!1){let e=document.getElementById("notifications-list");if(!e)return;ct(),t&&(e.innerHTML="<p>Updating...</p>");let n="/events?ml=1000&format=json&event.type=system.notification.generated";try{let i=await $(n);if(!i.ok)throw new Error("Service is offline or unreachable.");let r=(await i.json()).events||[];Ae=Date.now();let l=Date.now(),v=24*60*60*1e3,m=r.filter(d=>{let g=localStorage.getItem(`notification_read_ts_${d.id}`);if(!g)return!0;let x=parseInt(g);return l-x<v});m.sort((d,g)=>{let x=A=>{let D=A.event;if(typeof D=="string")try{D=JSON.parse(D)}catch{return"low"}return(D.priority||"low").toLowerCase()},M=A=>A==="critical"?4:A==="high"?3:A==="medium"?2:1,k=M(x(d)),C=M(x(g));return k!==C?C-k:g.timestamp-d.timestamp}),ne=m;let f=d=>{let g=d.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return"low"}return(g.priority||"low").toLowerCase()},h=[],s=new Set(m.map(d=>f(d))).size>1;if(m.length>0){let d=null;m.forEach(g=>{let x=f(g);s&&x!==d&&(h.push({id:`divider-${x}`,type:"divider",label:x.toUpperCase()}),d=x),h.push(g)})}if(t&&(e.innerHTML=""),m.length===0){e.innerHTML=T("empty","No notifications yet."),se();return}let u=d=>{let g=d.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let x=g.title||"Untitled Notification",M=g.body||"No description provided.",k=g.priority||"low",C=!!g.alert,A=g.category||"system",D=g.related_event_ids||[],S=!!localStorage.getItem(`notification_read_ts_${d.id}`),L=new Date(d.timestamp*1e3),B=L.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),Z=L.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),Q=S?"event-border-grey":"event-border-blue";!S&&C&&(Q="event-border-red"),S&&(k==="high"||k==="critical")?Q="event-border-red":S&&k==="medium"&&(Q="event-border-orange");let et=S?"notification-read":"notification-unread",ye=z.has(d.id),tt=ye?"expanded":"",st=ye?"display: block;":"display: none;",be="",he="";D.length>0&&(he=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${D.map(W=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${W.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),be=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${k==="high"||k==="critical"?"#ff4d4d":k==="medium"?"#ffa500":"#888"}">${k.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${H(M)}</p>
                </div>
                ${he}
            `;let N=document.createElement("div");N.className=`event-item notification-item ${Q} ${et} ${tt} cursor-pointer`,N.dataset.notificationId=d.id,N.onclick=function(W){if(this.classList.contains("expanded")){this.classList.remove("expanded"),z.delete(d.id);let V=this.querySelector(".event-details");V&&(V.style.display="none")}else{this.classList.add("expanded"),z.add(d.id);let V=this.querySelector(".event-details");if(V&&(V.style.display="block"),!localStorage.getItem(`notification_read_ts_${d.id}`)){localStorage.setItem(`notification_read_ts_${d.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let le="event-border-grey";k==="high"||k==="critical"?le="event-border-red":k==="medium"&&(le="event-border-orange"),this.classList.add(le),se()}}},N.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${B}</span>
                    <span class="event-date">${Z}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${A.toUpperCase()} ${C?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${x}</div>
                    <div class="event-details" style="${st}">
                        <div class="event-details-header">
                            <h4>${C?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${be}
                    </div>
                </div>
            `;let xe=N.querySelector(".close-details-btn");return xe&&xe.addEventListener("click",W=>{W.stopPropagation(),N.classList.remove("expanded");let re=N.querySelector(".event-details");re&&(re.style.display="none"),z.delete(d.id)}),N},b=d=>{let g=document.createElement("div");g.className="notification-divider",g.dataset.notificationId=d.id;let x="#888888";return d.label==="CRITICAL"?x="#ff4d4d":d.label==="HIGH"?x="#ff8888":d.label==="MEDIUM"&&(x="#ffa500"),g.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${x}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,g.innerHTML=`<span style="white-space: nowrap;">${d.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${x}44, transparent); flex-grow: 1;"></div>`,g},o=Array.from(e.children),c=new Map(o.map(d=>[d.dataset.notificationId,d])),y=new Set(h.map(d=>d.id));o.forEach(d=>{let g=d.dataset.notificationId;(!g||!y.has(g))&&d.remove()});let E=null;h.forEach((d,g)=>{let x=c.get(d.id);(!x||t)&&(x&&x.remove(),d.type==="divider"?x=b(d):x=u(d),!x)||(g===0?e.firstElementChild!==x&&e.prepend(x):E&&E.nextElementSibling!==x&&E.after(x),E=x)}),Ae=Date.now(),se()}catch(i){console.error("Error fetching notifications:",i),e.children.length===0&&(e.innerHTML=T("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function ct(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),i=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ne.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),R(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ne.forEach(a=>{z.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),R(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{z.clear(),R(!0)},n.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{let a=Date.now()-1728e5;ne.forEach(r=>{localStorage.setItem(`notification_read_ts_${r.id}`,a.toString())}),z.clear(),R(!0)},i.dataset.listenerAttached="true")}var Be=()=>`
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
    ${_()}
  </div>
`,O=new Set,Me=[],q=null;async function U(t=!1){let e=document.getElementById("roadmap-list");if(e){dt();try{let n=await $("/roadmap");if(!n.ok)throw new Error("Offline");let i=await n.json();if(Me=i,i.length===0){e.innerHTML=T("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let a=f=>{let h=O.has(f.id),p=f.state==="draft",s=f.state==="published",u=f.state==="consumed",b="event-border-grey";s&&(b="event-border-blue"),u&&(b="event-border-purple");let c=new Date(f.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=document.createElement("div");y.className=`event-item notification-item ${b} cursor-pointer ${h?"expanded":""}`,y.dataset.itemId=f.id,y.onclick=d=>{if(d.target.closest("button"))return;y.classList.contains("expanded")?(y.classList.remove("expanded"),y.querySelector(".event-details").style.display="none",O.delete(f.id)):(y.classList.add("expanded"),y.querySelector(".event-details").style.display="block",O.add(f.id))};let E=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${f.state.toUpperCase()}]</span>`;return y.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${c.split(",")[1]}</span>
          <span class="event-date">${c.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${E}</div>
          <div class="event-message" style="white-space: pre-wrap;">${H(f.content)}</div>
          <div class="event-details" style="${h?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${u?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${s?"bx-pause":"bx-rocket"}'></i> ${s?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${u?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(f.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,y.querySelector(".edit-btn")?.addEventListener("click",()=>pt(f)),y.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>mt(f)),y.querySelector(".delete-btn")?.addEventListener("click",()=>ut(f.id)),y.querySelector(".close-details-btn")?.addEventListener("click",d=>{d.stopPropagation(),y.classList.remove("expanded"),y.querySelector(".event-details").style.display="none",O.delete(f.id)}),y},r=Array.from(e.children),l=new Map(r.map(f=>[f.dataset.itemId,f])),v=new Set(i.map(f=>f.id));r.forEach(f=>{let h=f.dataset.itemId;(!h||!v.has(h))&&f.remove()});let m=null;i.forEach((f,h)=>{let p=l.get(f.id);(!p||t)&&(p&&p.remove(),p=a(f),!p)||(h===0?e.firstElementChild!==p&&e.prepend(p):m&&m.nextElementSibling!==p&&m.after(p),m=p)})}catch{e.innerHTML=T("error","Failed to load roadmap.")}}}function dt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),n=document.getElementById("roadmap-cancel"),i=document.getElementById("roadmap-expand-all"),a=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{q=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",q=null},n.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input").value;if(!r.trim())return;let l=q?`/roadmap/${q}`:"/roadmap",v=q?"PATCH":"POST";try{await $(l,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})}),document.getElementById("roadmap-editor-container").style.display="none",U(!0)}catch(m){console.error(m)}},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{Me.forEach(r=>O.add(r.id)),U(!0)},i.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{O.clear(),U(!0)},a.dataset.listenerAttached="true")}function pt(t){q=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function mt(t){let e=t.state==="published"?"draft":"published";try{await $(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),U(!0)}catch(n){console.error(n)}}async function ut(t){if(confirm("Delete this roadmap item?"))try{await $(`/roadmap/${t}`,{method:"DELETE"}),O.delete(t),U(!0)}catch(e){console.error(e)}}var De=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        ${_()}
    </div>
`,ft=null,G=new Set,He=[];async function ae(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;gt();let n="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let i=await $(n);if(!i.ok)throw new Error("Service is offline or unreachable.");let r=(await i.json()).events||[];if(He=r,ft=Date.now(),r.length===0){e.innerHTML=T("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle.");return}t&&(e.innerHTML="");let l=p=>{let s=p.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let u=s.title||"Untitled Blueprint",b=s.summary||s.body||"No summary provided.",o=s.content||"",c=s.category||"architecture",y=s.affected_services||[],E=s.implementation_path||[],d=new Date(p.timestamp*1e3),g=d.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),x=d.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),M=G.has(p.id),k=M?"display: block;":"display: none;",C=document.createElement("div");C.className=`event-item notification-item event-border-purple cursor-pointer ${M?"expanded":""}`,C.dataset.blueprintId=p.id,C.onclick=function(S){if(this.classList.contains("expanded")){this.classList.remove("expanded"),G.delete(p.id);let B=this.querySelector(".event-details");B&&(B.style.display="none")}else{this.classList.add("expanded"),G.add(p.id);let B=this.querySelector(".event-details");B&&(B.style.display="block")}};let A=y.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${y.join(", ")}</div>`:"",D="";E.length>0&&(D=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${E.map(S=>`<li>${H(S)}</li>`).join("")}
                        </ul>
                    </div>
                `),C.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${g}</span>
                    <span class="event-date">${x}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${c.toUpperCase()}</div>
                    <div class="event-message">${u}</div>
                    <div class="event-details" style="${k}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${H(b)}
                        </div>
                        ${A}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${H(o)}</p>
                        </div>
                        ${D}
                    </div>
                </div>
            `;let P=C.querySelector(".close-details-btn");return P&&P.addEventListener("click",S=>{S.stopPropagation(),C.classList.remove("expanded");let L=C.querySelector(".event-details");L&&(L.style.display="none"),G.delete(p.id)}),C},v=Array.from(e.children),m=new Map(v.map(p=>[p.dataset.blueprintId,p])),f=new Set(r.map(p=>p.id));v.forEach(p=>{let s=p.dataset.blueprintId;(!s||!f.has(s))&&p.remove()});let h=null;r.forEach((p,s)=>{let u=m.get(p.id);(!u||t)&&(u&&u.remove(),u=l(p),!u)||(s===0?e.firstElementChild!==u&&e.prepend(u):h&&h.nextElementSibling!==u&&h.after(u),h=u)})}catch(i){console.error("Error fetching blueprints:",i),e.children.length===0&&(e.innerHTML=T("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function gt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{He.forEach(n=>G.add(n.id)),ae(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{G.clear(),ae(!0)},e.dataset.listenerAttached="true")}var Ne=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
            </div>
            ${Be()}
        </div>

        <div class="blueprints-section">
            <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i class='bx bx-paint' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
            </div>
            ${De()}
        </div>
    </div>
`;async function Pe(){await Promise.all([U(),ae()])}var ze=()=>`<div id="contacts-grid" class="system-monitor-widgets">${_()}</div>`,vt=null;async function K(){let t=document.getElementById("contacts-grid");if(t)try{let e=await _e("/contacts");if(!e.ok)throw new Error("Service unreachable");let i=(await e.json()).members||[];if(vt=Date.now(),i.length===0){t.innerHTML=T("empty","No contacts found.","Check your Discord connection.");return}let a={Me:0,"Master User":1,Admin:2,Moderator:3,Contributor:4,User:5,Anyone:6};i.sort((l,v)=>{let m=a[l.level]??10,f=a[v.level]??10;return m!==f?m-f:l.username.localeCompare(v.username)});let r=i.map(l=>{let v=l.color?"#"+l.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",m=l.status==="online"?"#5eff5e":l.status==="idle"?"#ffa500":l.status==="dnd"?"#ff4d4d":"#666",f="#888";l.level==="Me"||l.level==="Master User"?f="#bb86fc":l.level==="Admin"?f="#cf6679":l.level==="Moderator"?f="#03dac6":l.level==="Contributor"&&(f="#ffa500");let h=l.level==="Me",p=h?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",s=h?"2px solid #bb86fc":`1px solid ${v}33`;return`
                <div class="user-profile-section" style="background: ${p}; padding: 15px; border-radius: 8px; border: ${s}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${h?"#bb86fc":v}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${l.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${h?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${m}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${l.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${f}; font-weight: 600; text-transform: uppercase;">${h?"DEXTER (ME)":l.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${l.id}</p>
                    </div>
                </div>
            `}).join("");t.innerHTML!==r&&(t.innerHTML=r)}catch{t.innerHTML=T("offline","Failed to fetch contacts.","The Discord service may be offline.")}}var yt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Oe(t,e){let n=yt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(n=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!n)return t;let i=n.replace(/\{(\w+)\}/g,(a,r)=>e[r]!==void 0&&e[r]!==null?e[r]:a);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(i+=` (Translation: ${e.english_translation})`),i}var je=()=>`
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
            ${_()}
        </div>
    </div>
`,bt=null,Y=new Set,J=[],oe="all",ht={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},xt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ue(t){for(let[e,n]of Object.entries(ht))if(n.includes(t))return e;return"system"}function wt(t){return xt[t]||"bx-square-rounded"}async function X(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Et();let i=`/events?ml=${oe==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let a=await $(i);if(!a.ok)throw new Error("Service is offline or unreachable.");let l=(await a.json()).events||[];l.some(b=>{let o=b.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return!1}return o.type==="messaging.user.joined_server"})&&K();let m=l;if(oe!=="all"&&(m=l.filter(b=>{let o=b.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return!1}return Ue(o.type)===oe})),J=m.slice(0,50),bt=Date.now(),J.length===0){e.innerHTML=T("empty","No events found for this filter.");return}t&&(e.innerHTML="");let f=b=>{let o=b.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return null}let c=o.type,y=Ue(c),E=wt(c),d=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command"||c==="system.analysis.audit"||c==="system.test.completed"||c==="error_occurred"||c==="system.cli.status"||c.startsWith("system.roadmap")||c.startsWith("system.process"),g="event-border-grey";d&&(c==="moderation.explicit_content.deleted"||c==="error_occurred"?g="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.analysis.audit"?g="event-border-purple":c==="system.cli.command"||c==="system.cli.status"?g="event-border-orange":c==="system.test.completed"?g=o.test?.status==="OK"&&o.lint?.status==="OK"&&o.format?.status==="OK"?"event-border-blue":"event-border-red":g="event-border-blue");let x=Y.has(b.id),M=new Date(b.timestamp*1e3),k=M.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),C=M.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=Oe(c,o),D=o.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${o.user_level})</span>`:"",P="";if(d){let L="";c==="engagement.decision"?L=`<div class="event-detail-row"><span class="detail-label">Model:</span><span class="detail-value">${o.engagement_model||"N/A"}</span></div><div class="event-detail-block"><span class="detail-label">Raw Output:</span><pre class="detail-pre">${o.engagement_raw||"None"}</pre></div>`:c==="messaging.bot.sent_message"?L=`<div class="event-detail-row"><span class="detail-label">Model:</span><span class="detail-value">${o.response_model||"N/A"}</span></div><div class="event-detail-block"><span class="detail-label">Raw Output:</span><pre class="detail-pre">${o.response_raw||"None"}</pre></div>`:c==="moderation.explicit_content.deleted"?L=`<div class="event-detail-row"><span class="detail-label">Reason:</span><span class="detail-value">${o.reason||"N/A"}</span></div>`:c==="analysis.link.completed"?L=`<div class="event-detail-row"><span class="detail-label">URL:</span><span class="detail-value"><a href="${o.url}" target="_blank">${o.url}</a></span></div>`:c==="system.cli.command"?L=`<div class="event-detail-row"><span class="detail-label">Command:</span><span class="detail-value">dex ${o.command}</span></div><div class="event-detail-block"><span class="detail-label">Output:</span><pre class="detail-pre">${H(o.output)||"No output."}</pre></div>`:c==="system.test.completed"&&(L=`<div class="event-detail-row"><span class="detail-label">Service:</span><span class="detail-value">${o.service_name}</span></div><div class="event-detail-block"><span class="detail-label">Tests:</span><pre class="detail-pre">${o.test?.status||"N/A"}: ${o.test?.details||"OK"}</pre></div>`),P=`<div class="event-details" style="${x?"display: block;":"display: none;"}"><div class="event-details-header"><h4>Details</h4><i class="bx bx-x close-details-btn"></i></div>${L}</div>`}let S=document.createElement("div");if(S.className=`event-item ${g} ${d?"cursor-pointer":""} ${x?"expanded":""}`,S.dataset.eventId=b.id,S.onclick=function(L){if(!d)return;let B=!this.classList.contains("expanded");this.classList.toggle("expanded",B),B?Y.add(b.id):Y.delete(b.id);let Z=this.querySelector(".event-details");Z&&(Z.style.display=B?"block":"none")},S.innerHTML=`<div class="event-time"><span class="event-time-main">${k}</span><span class="event-date">${C}</span></div><div class="event-icon"><i class='bx ${E}'></i></div><div class="event-content"><div class="event-service"><span class="event-category-tag cat-${y}">${y}</span> ${b.service} ${D}</div><div class="event-message">${A}</div>${P}</div>`,d){let L=S.querySelector(".close-details-btn");L&&(L.onclick=B=>{B.stopPropagation(),S.click()})}return S},h=Array.from(e.children),p=new Map(h.map(b=>[b.dataset.eventId,b])),s=new Set(J.map(b=>b.id));h.forEach(b=>{b.dataset.eventId&&!s.has(b.dataset.eventId)&&b.remove()});let u=null;J.forEach((b,o)=>{let c=p.get(b.id);(!c||t)&&(c&&c.remove(),c=f(b),!c)||(o===0?e.firstElementChild!==c&&e.prepend(c):u&&u.nextElementSibling!==c&&u.after(c),u=c)})}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=T("offline","Failed to load events."))}}function Et(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),n=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{J.forEach(i=>Y.add(i.id)),X(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),X(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.querySelectorAll(".filter-btn").forEach(i=>{i.onclick=()=>{n.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),i.classList.add("active"),oe=i.dataset.filter,X(!0)}}),n.dataset.listenerAttached="true")}function Fe(){return`
        <div id="logs-container" class="logs-container">
            ${_()}
        </div>
    `}var $t=null;async function ue(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await $("/logs");if(!e.ok)throw new Error("Logs offline");let n=await e.json();if(!n||n.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let i=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],a=n.filter(l=>!i.includes(l.id));a.forEach(l=>{l.logs&&Array.isArray(l.logs)?l.logs.reverse():l.logs=[]}),a.reverse();let r=a.map(l=>{let v=l.logs.join(`
`),m=[...l.logs];if(m.length<25){let h=25-m.length;for(let p=0;p<h;p++)m.push("")}else m.length>25&&(m=m.slice(-25));let f=m.map(h=>ie(h)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${l.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(v)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${l.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${f}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(l=>{l.addEventListener("click",()=>{let v=unescape(l.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let m=l.querySelector("i");m.classList.remove("bx-copy"),m.classList.add("bx-check"),setTimeout(()=>{m.classList.remove("bx-check"),m.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(l=>{l.addEventListener("click",async()=>{let v=l.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${v}?`))try{(await $(`/logs?service_id=${v}`,{method:"DELETE"})).ok&&ue()}catch(m){console.error("Error clearing logs:",m)}})}),$t=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var qe=()=>`
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
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;">${_()}</div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;">${_()}</div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;">${_()}</div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="padding: 4px 10px; font-size: 0.8em; margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
        </div>
        <div id="hardware-info-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px;">
            ${_()}
        </div>

        <div class="system-section-header" style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${Fe()}
        </div>
    `;async function Ge(){await Promise.all([Ve(),_t(),At()]),await ue()}var Tt=null,Lt=null,kt=null;async function We(){try{return await(await $("/system_monitor")).json()}catch{return null}}async function Re(){try{return await(await $("/system/hardware")).json()}catch{return null}}async function Ct(){try{return await(await $("/processes")).json()}catch{return null}}async function St(){try{return await(await $("/analyst/status")).json()}catch{return null}}async function _t(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),n=document.getElementById("hardware-refresh-btn"),i=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let u="",b=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(u+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${b} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let o=s.CPU[0];u+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${o.LABEL}">${o.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${o.COUNT} Cores / ${o.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((o,c)=>{let y=(o.VRAM/1073741824).toFixed(1);u+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${c}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${o.LABEL}">${o.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${y} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let o=0,c=0;s.STORAGE.forEach(g=>{o+=g.USED,c+=g.SIZE});let y=(o/(1024*1024*1024)).toFixed(1),E=(c/(1024*1024*1024)).toFixed(1),d=c>0?(o/c*100).toFixed(0):0;u+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${y} / ${E} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${d>90?"#ff4d4d":"#00ff00"}; width: ${d}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=u};if(e&&n&&(n.dataset.listenerAttached||(n.onclick=async()=>{n.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let s=await Re();s?(i(s),n.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(n.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},n.dataset.listenerAttached="true"),e.querySelector(".glassy-loader-container"))){let s=await Re();i(s)}if(!t)return;let a=await We();if(!a||!a.services){t.innerHTML=T("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}Tt=Date.now();let r=a.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function l(s){if(!s||s==="N/A"||s==="unknown")return"-";let u=s.match(/^(\d+\.\d+\.\d+)/);return u?u[0]:s.split(".").slice(0,3).join(".")||"-"}function v(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function m(s){if(!s||s==="N/A"||s==="unknown")return"-";let u=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!u)return"-";let b=parseInt(u[1])||0,o=parseInt(u[2])||0,c=parseInt(u[3])||0,y=parseFloat(u[4])||0,E=b*86400+o*3600+c*60+y,d=Math.floor(E/86400);if(d>0)return`${d}d`;let g=Math.floor(E/3600);if(g>0)return`${g}h`;let x=Math.floor(E/60);return x>0?`${x}m`:`${Math.floor(E)}s`}function f(s){let u=s.status==="online",b=u?"service-widget-online":"service-widget-offline",o=u?"bx-check-circle":"bx-x-circle",c=u?"OK":"BAD",y=s.version?l(s.version.str):"-",E=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",d=s.memory&&s.memory!=="N/A"?s.memory:"-",g=E!=="-"?"#00ff00":"#666",x=E!=="-"?"#fff":"#666",M=d!=="-"?"#00ff00":"#666",k=d!=="-"?"#fff":"#666",C=m(s.uptime),A="";return u?A=`
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
                        <i class="bx bxs-microchip" style="color: ${g};"></i>
                        <span style="color: ${x};">${E}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${M};"></i>
                        <span style="color: ${k};">${d}</span>
                    </div>
                </div>`:A='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${b}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${o}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${c}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${v(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${A}</div></div>`}let h=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),p=new Set(r.map(s=>s.id));for(let[s,u]of h)p.has(s)||u.remove();r.forEach(s=>{let u=f(s),b=h.get(s.id);b?b.outerHTML!==u&&(b.outerHTML=u):t.insertAdjacentHTML("beforeend",u)})}async function At(){let t=document.getElementById("models-widgets");if(!t)return;let e=await We();if(!e){t.innerHTML=T("offline","Failed to load model status.");return}Lt=Date.now();let n=e.models||[],i=e.whisper;Array.from(t.children).forEach(v=>{v.classList.contains("service-widget")||v.remove()});function a(v){let m=v.status==="Ready";return`<div class="service-widget ${m?"service-widget-online":"service-widget-offline"}" data-whisper-widget><div class="service-widget-header"><i class="bx bxs-microphone-alt"></i><h3>Whisper</h3><span class="service-widget-status">${m?"READY":"NOT FOUND"}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Status:</span><span class="info-value">${v.status}</span></div><div class="service-widget-info"><span class="info-label">Model:</span><span class="info-value">large-v3-turbo</span></div></div></div>`}function r(v){let m=v.status==="Downloaded",f=m?"service-widget-online":"service-widget-offline",h=m?"OK":"MISSING",p=m&&v.size>0?`${(v.size/1e9).toFixed(2)} GB`:"-",s=v.name;return v.type==="custom"&&s.endsWith(":latest")&&(s=s.replace(":latest","")),`<div class="service-widget ${f}" data-model-name="${v.name}"><div class="service-widget-header"><i class="bx ${m?"bx-check-circle":"bx-x-circle"}"></i><h3>${s}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${v.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${p}</span></div></div></div>`}let l="";if(i&&(l+=a(i)),l+=n.map(r).join(""),!l){t.innerHTML=T("empty","No models found.");return}t.innerHTML!==l&&(t.innerHTML=l)}async function Ve(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),n=document.getElementById("analyst-t2-val"),i=document.getElementById("analyst-t3-val"),a=document.getElementById("analyst-idle-val"),r=document.getElementById("analyst-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await $("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),Ve()}catch{r.innerHTML="<i class='bx bx-error'></i> Failed"}},r.dataset.listenerAttached="true");let l=await St();if(l){let s=Math.floor(Date.now()/1e3),u=l.active_tier,b=(o,c,y)=>{if(u===y||y==="guardian"&&u==="tests"){o.textContent="Working",o.style.color="#bb86fc";return}let E=c-s;if(E<=0)o.textContent="Ready",o.style.color="#5eff5e";else{let d=Math.floor(E/60),g=E%60;o.textContent=`${d}m ${g}s`,o.style.color="#fff"}};if(e&&l.guardian&&b(e,l.guardian.next_run,"guardian"),n&&l.architect&&b(n,l.architect.next_run,"architect"),i&&l.strategist&&b(i,l.strategist.next_run,"strategist"),a&&l.system_idle_time!==void 0){let o=l.system_idle_time,c=Math.floor(o/60),y=o%60;a.textContent=`${c}m ${y}s`,o>300?a.style.color="#5eff5e":o>60?a.style.color="#ffa500":a.style.color="#fff"}}else[e,n,i,a].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let v=await Ct(),m=document.getElementById("vitals-processes-val");if(m)if(v){let s=v.length;m.textContent=s>0?`${s} Active`:"Idle",m.style.color=s>0?"#bb86fc":"#fff"}else m.textContent="-",m.style.color="#888";if(v===null){t.innerHTML=T("offline","Failed to load process status.");return}if(kt=Date.now(),v.length===0){t.innerHTML=T("empty","No active processes.");return}(t.querySelector(".tab-placeholder")||t.querySelector(".glassy-loader-container"))&&(t.innerHTML="");function f(s){let u=Math.floor(Date.now()/1e3-s.start_time),b=s.retries>0?`<span class="process-retry-badge">Retry ${s.retries}</span>`:"",o=s.channel_id,c={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return c[o]?o=c[o]:/^\d+$/.test(o)&&(o=`Channel ${o}`),`<div class="service-widget process-widget" data-channel-id="${s.channel_id}"><div class="service-widget-header"><i class="bx bx-cog"></i><h3>${o}</h3>${b}</div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">State:</span><span class="info-value">${s.state}</span></div><div class="service-widget-info"><span class="info-label">Duration:</span><span class="info-value">${u}s</span></div><div class="service-widget-info"><span class="info-label">PID:</span><span class="info-value">${s.pid}</span></div></div></div>`}let h=new Map(Array.from(t.querySelectorAll(".process-widget")).map(s=>[s.dataset.channelId,s])),p=new Set(v.map(s=>s.channel_id));for(let[s,u]of h)p.has(s)||u.remove();v.forEach(s=>{let u=f(s),b=h.get(s.channel_id);b?b.outerHTML!==u&&(b.outerHTML=u):t.insertAdjacentHTML("beforeend",u)})}function fe(){let t=pe(),e=Te()||"master@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},i=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(I).map(a=>`
                    <div class="theme-card ${t===a?"active":""}" data-theme="${a}">
                        <div class="theme-preview theme-preview-${a.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${a}</h3>
                            <p>${a===I.AUTO?"Automatic theme selection.":a===I.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
                            <input type="checkbox" id="analytics-toggle" ${i?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function ge(t){let e=document.querySelector("#main-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(a=>{a.addEventListener("click",function(){let r=this.dataset.theme;Ce(r),t.setContent(fe()),ge(t)})});let n=document.getElementById("notifications-toggle");n&&(n.onclick=async a=>{if(a.target.checked)try{await Notification.requestPermission()!=="granted"&&(a.target.checked=!1)}catch{a.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.target.checked=!0)});let i=document.getElementById("analytics-toggle");i&&(i.checked=localStorage.getItem("easter_analytics_enabled")!=="false",i.onclick=a=>{let r=a.target.checked;localStorage.setItem("easter_analytics_enabled",r),window.EASTER_ANALYTICS_ENABLED=r,window.EASTER_DEBUG_MODE=r})}var Ke=()=>`
    <div style="margin: auto auto; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
        <svg viewBox="0 0 10 2" style="width: 100%; height: 25vh; background-color: transparent; user-select: none;">
          <text
            x="5"
            y="1"
            text-anchor="middle"
            font-size="1"
            fill="none"
            stroke-width=".015"
            stroke="#fff"
            font-family="sans-serif"
          >
            404
          </text>
        </svg>
        <a href="/" style="width: 300px; margin: 0 auto; text-decoration: none; display: block; cursor: pointer;">
          <h1
            style="
              width: 100%;
              text-align: center;
              margin: 0;
              padding: 0;
              font-size: 22px;
              color: #bbb;
              font-weight: 500;
            "
          >
            Page Not Found.
          </h1>
          <h2
            style="
              width: 100%;
              text-align: center;
              margin: 10px 0 0 0;
              padding: 0;
              font-size: 18px;
              color: #999;
              font-weight: 400;
            "
          >
            Click Here To Return Home
          </h2>
        </a>
    </div>
`;var It=()=>`
    <div class="socials-bar-container">
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    </div>
`;function Je(){if(document.getElementById("main-socials-bar"))return;let e=document.createElement("footer");e.id="main-socials-bar",e.innerHTML=It(),document.body.appendChild(e)}var Xe=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Engage with Dexter's internal cognitive core directly from the browser.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Manually trigger a Tier 1 technical audit. Analyzes vitals, logs, and events for system anomalies.",usage:"dex guardian",category:"cognitive"},{id:"whisper",title:"Whisper",icon:"bx-microphone",description:"Access the local OpenAI Whisper model for high-fidelity speech-to-text transcription.",usage:"dex whisper transcribe -k <redis_key>",category:"cognitive"},{id:"ollama",title:"Ollama",icon:"bx-brain",description:"Direct proxy to the underlying Ollama instance managing local large language models.",usage:"dex ollama [pull|run|ps|list]",category:"cognitive"},{id:"build",title:"Build",icon:"bx-package",description:"Ecosystem-wide build system. Increments versions, compiles binaries, and updates the dashboard.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Syncs all service repositories and applies the latest patches from source.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Executes the unified test suite across all services (Format, Lint, and Unit Tests).",usage:"dex test [service] [--models]",category:"lifecycle"},{id:"add",title:"Add Service",icon:"bx-plus-circle",description:"Registers and installs a new service into the Dexter ecosystem from a remote repository.",usage:"dex add <repo_url>",category:"lifecycle"},{id:"remove",title:"Remove Service",icon:"bx-minus-circle",description:"Uninstalls a service and removes its registration from the global service map.",usage:"dex remove <service_id>",category:"lifecycle"},{id:"status",title:"Status",icon:"bx-pulse",description:"Real-time health check for all system components, including networking and version info.",usage:"dex status [service|all]",category:"system"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"High-performance log streaming. Connects directly to localized service log files.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"Hardware introspection. Reports CPU, GPU, Memory, and OS package dependencies.",usage:"dex system [info|scan|validate|install]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Low-level configuration management for the centralized service-map.json.",usage:"dex config <service> [field]",category:"system"},{id:"cache",title:"Cache",icon:"bx-data",description:"Manages the local Redis-backed cognitive and ephemeral data cache.",usage:"dex cache [clear|list]",category:"system"},{id:"serve",title:"Serve",icon:"bx-broadcast",description:"Internal static file server for local development and dashboard hosting.",usage:"dex serve -d <dir> -p <port>",category:"system"},{id:"event",title:"Event Bus",icon:"bx-share-alt",description:"Direct interaction with the core event service. Manage the system-wide event stream.",usage:"dex event [service|log|delete|analyst]",category:"system"},{id:"discord",title:"Discord",icon:"bx-message-square-dots",description:"Manages the Discord engine, including channel mapping and contact synchronization.",usage:"dex discord [contacts|channels|service|quiet]",category:"system"},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Gracefully restarts all manageable systemd services in the ecosystem.",usage:"dex restart [service|all]",category:"service"},{id:"start",title:"Start",icon:"bx-play",description:"Initiates service execution for all stopped manageable components.",usage:"dex start [service|all]",category:"service"},{id:"stop",title:"Stop",icon:"bx-stop",description:"Gracefully terminates the execution of manageable systemd services.",usage:"dex stop [service|all]",category:"service"},{id:"python",title:"Python Env",icon:"bx-code-curly",description:"Proxy command to run executables within Dexter's managed Python virtual environments.",usage:"dex python <command>",category:"proxy"},{id:"bun",title:"Bun Runtime",icon:"bx-bolt-circle",description:"Proxy command to the local Bun runtime for high-performance JavaScript execution.",usage:"dex bun <args>",category:"proxy"}],Bt=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},service:{title:"Service Control",icon:"bx-power-off",color:"#ffa500"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"},proxy:{title:"Runtime Proxies",icon:"bx-code-alt",color:"#666"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 60px 20px; margin-bottom: 40px;">
                <h1 style="font-size: 3em; margin-bottom: 15px; color: #fff; letter-spacing: -1px;">DEX CLI</h1>
                <p style="color: #888; max-width: 700px; margin: 0 auto; font-size: 1.1em; line-height: 1.6;">The unified command-line interface for the Dexter ecosystem. A high-fidelity toolset designed to manage, monitor, and evolve your autonomous infrastructure.</p>
            </div>
    `;for(let[n,i]of Object.entries(t)){let a=Xe.filter(r=>r.category===n);a.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 60px;">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 30px; padding: 0 20px;">
                    <i class='bx ${i.icon}' style="color: ${i.color}; font-size: 1.8em;"></i>
                    <h2 style="font-size: 1.4em; text-transform: uppercase; letter-spacing: 3px; color: #eee; margin: 0;">${i.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 25px; padding: 0 20px;">
                    ${a.map(r=>`
                        <div class="cli-command-card ${r.dummy?"dummy":""}" data-cmd="${r.id}" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); cursor: pointer; position: relative; overflow: hidden; display: flex; flex-direction: column;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${i.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 20px; position: relative; z-index: 1;">
                                <i class='bx ${r.icon}' style="font-size: 2.2em; color: ${i.color};"></i>
                                <h3 style="font-size: 1.4em; color: #fff; margin: 0; letter-spacing: -0.5px;">${r.title}</h3>
                            </div>
                            <p style="font-size: 0.95em; color: #999; margin-bottom: 25px; line-height: 1.6; text-align: left; position: relative; z-index: 1; flex: 1;">${r.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.4); padding: 12px 18px; border-radius: 10px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${i.color}; position: relative; z-index: 1; border: 1px solid rgba(255,255,255,0.03);">
                                <span style="opacity: 0.4; margin-right: 8px;">$</span>${r.usage}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)}return e+="</div>",e},ve=!1;function Mt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Ye(),document.getElementById("terminal-action-btn").onclick=()=>Ye());let n=document.getElementById("cli-terminal-body");return n.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),ve=!0,n}function Ye(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),ve=!1}function w(t,e,n="output"){if(!ve)return;let i=document.createElement("div");i.className=`terminal-line terminal-${n}`,n==="prompt"?i.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:i.innerHTML=ie(e),t.appendChild(i),t.scrollTop=t.scrollHeight}async function Dt(t){let e=Xe.find(i=>i.id===t);if(!e)return;let n=Mt(e);w(n,`dex ${t}`,"prompt");try{let a=(await $("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),r=new TextDecoder;for(;;){let{value:l,done:v}=await a.read();if(v)break;r.decode(l,{stream:!0}).split(`
`).forEach(h=>{if(h.trim()==="")return;let p="output";h.includes("[ERROR]")?p="error":h.includes("[SUCCESS]")||h.includes("\u2713")?p="success":h.includes("!")&&(p="warning"),w(n,h,p)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch{w(n,"* this is a demonstration","warning"),await Ht(t,n)}finally{document.getElementById("terminal-action-btn").style.display="block"}}async function Ht(t,e){switch(await new Promise(n=>setTimeout(n,500)),t){case"guardian":w(e,"Initializing Tier 1 Analysis..."),await new Promise(i=>setTimeout(i,800)),w(e,"Fetching system context..."),w(e,"  \u2713 system_monitor (6.2 KiB)"),w(e,"  \u2713 events (17.3 KiB)"),w(e,"  \u2713 logs (22.9 KiB)"),await new Promise(i=>setTimeout(i,1e3)),w(e,"Constructing prompt (47005 characters)..."),w(e,"Running Guardian Analysis via Ollama (gpt-oss:20b)..."),await new Promise(i=>setTimeout(i,1500)),w(e,`
# System Health Snapshot`,"success"),w(e,"Everything looks green. System is operating within normal parameters."),w(e,"  \u2022 All 5 services reporting OK"),w(e,"  \u2022 No critical errors in last 50 log lines"),w(e,"  \u2022 Memory usage at 42%"),await new Promise(i=>setTimeout(i,800)),w(e,`
Resetting Guardian timer...`),w(e,"\u2713 Guardian timer reset.","success");break;case"test":w(e,"Executing system-wide test suite...");let n=["cli","event","discord","tts","web"];for(let i of n)await new Promise(a=>setTimeout(a,600)),w(e,`Testing ${i}...`),await new Promise(a=>setTimeout(a,400)),w(e,"  \u2713 Format","success"),w(e,"  \u2713 Lint","success"),w(e,"  \u2713 Unit Tests","success");w(e,`
\u2728 All tests passed!`,"success");break;case"build":w(e,"Incrementing version: 2.8.137 -> 2.8.138 (patch)"),w(e,"Building all services from local source..."),await new Promise(i=>setTimeout(i,1e3)),w(e,"[1/3] Building dex-cli..."),w(e,"  \u2713 compilation successful"),await new Promise(i=>setTimeout(i,800)),w(e,"[2/3] Building dex-event-service..."),w(e,"  \u2713 compilation successful"),await new Promise(i=>setTimeout(i,800)),w(e,"[3/3] Building easter.company..."),w(e,"  \u2713 bundling assets"),await new Promise(i=>setTimeout(i,1200)),w(e,`
\u2713 Build complete. Release 2.8.138 ready.`,"success");break;default:w(e,`Executing ${t} logic...`),await new Promise(i=>setTimeout(i,1e3)),w(e,"Operation completed successfully.","success")}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}function Ze(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=Bt(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-8px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.04)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.02)"}),e.addEventListener("click",()=>{let n=e.dataset.cmd;if(n==="chat"){alert("Connection to cognitive core pending deployment...");return}Dt(n)})}))}async function Nt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${me()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function Qe(){Nt(),Se(),we();let t=document.getElementById("error-main-view");t&&(t.innerHTML=Ke(),void 0),window.location.pathname.includes("/dex")&&Ze();let e=$e();Ee(e),Je();let n=document.getElementById("main-socials-bar"),i=document.getElementById("main-navbar"),a=document.getElementById("nav-window-close"),r=null,l=null,v=null;function m(){l&&clearInterval(l),v&&clearInterval(v),l=null,v=null}function f(){m(),r=null,n?.classList.remove("hide"),i?.classList.remove("window-open"),document.querySelectorAll(".nav-tab").forEach(o=>o.classList.remove("active"))}a?.addEventListener("click",()=>{r&&r.close()});function h(o,c=null,y=null){let E=r&&r.id===o.id,d=r&&r.activeTabIndex===y;if(E&&d){o.close();return}r&&r.close(!0),(!E||!d)&&(i?.classList.add("window-open"),y===0?o.setContent(Ie()):y===1?o.setContent(je()):y===2?o.setContent(Ne()):y===3?o.setContent(qe()):y===4?o.setContent(ze()):y===5&&o.setContent(fe()),o.activeTabIndex=y,o.open(),r=o,document.querySelectorAll(".nav-tab").forEach(g=>{let x=parseInt(g.dataset.tabIndex)===y;g.classList.toggle("active",x)}),n?.classList.add("hide"),p(),y===5&&ge(o))}async function p(o=!1){if(!r||!r.isOpen())return;switch(r.activeTabIndex){case 0:await R(o);break;case 1:await X(o);break;case 2:await Pe(o);break;case 3:await Ge(o);break;case 4:await K(o);break}}function s(){m(),l=setInterval(()=>{r&&p()},3e3),v=setInterval(()=>{r&&r.activeTabIndex===4&&K()},6e5)}let u=ce({id:"login-window",title:"Welcome",icon:"bx-log-in",onClose:f}),b=ce({id:"main-window",icon:"bx-layer",onClose:f,onOpen:s});e?document.querySelectorAll(".nav-tab").forEach(o=>{o.addEventListener("click",c=>{let y=parseInt(c.currentTarget.dataset.tabIndex);h(b,c.currentTarget,y)})}):document.getElementById("login-btn")?.addEventListener("click",()=>{h(u),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",o=>{o.preventDefault();try{Le(document.getElementById("email-input").value),window.location.reload()}catch(c){let y=document.getElementById("login-error");y&&(y.textContent=c.message,y.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qe):Qe();})();
//# sourceMappingURL=dex.d1c825ff.js.map
