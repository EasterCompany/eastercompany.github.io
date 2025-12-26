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
    `,o=document.createElement("nav");o.innerHTML=a,document.body.prepend(o)}function Ie(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Me=1e3;function G(t){let e=null,a=t.onClose||null,o=t.onOpen||null;function i(){e&&(e.style.zIndex=++Me)}function c(){if(e){e.classList.add("open"),i(),window.addEventListener("resize",d),o&&setTimeout(o,10);return}let m=document.getElementById("windows-container");m||(m=document.createElement("div"),m.id="windows-container",m.className="windows-container",document.body.appendChild(m)),e=document.createElement("div"),e.id=t.id,e.className="window",e.style.zIndex=++Me,e.addEventListener("mousedown",i);let l=t.icon||"bx-window",s="",n="",r;t.tabs&&t.tabs.length>0?(s=`<div class="tab-bar">${t.tabs.map((w,p)=>{let v=w.icon?`<i class="bx ${w.icon}"></i>`:`<span class="tab-glyph">${w.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${p===0?"active":""}" data-tab-index="${p}">
                        ${v}
                        <span class="tab-title">${w.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${p}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,r=`<div class="window-content">${t.tabs.map((w,p)=>`<div class="tab-content ${p===0?"active":""}" data-tab-content="${p}">${w.content}</div>`).join("")}</div>`):(t.title&&(n=`<div class="window-title">${t.title}</div>`),r=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${l}"></i>
                ${s}
                ${n}
                <i class="bx bx-x window-close"></i>
            </div>
            ${r}
        `,m.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",h=>{h.stopPropagation(),u()}),window.addEventListener("resize",d),t.tabs&&e.querySelectorAll(".tab").forEach(h=>{h.addEventListener("click",()=>{let x=h.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),h.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${x}"]`).classList.add("active"),g(h,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function d(){if(!e||!e.classList.contains("open"))return;let m=e.querySelector(".tab.active");m&&g(m,e)}function g(m,l){setTimeout(()=>{let s=l.querySelector(".tab-bar");if(!s)return;let n=Array.from(s.querySelectorAll(".tab")),r=n.indexOf(m),h=s.clientWidth,x=n[Math.max(0,r-2)],w=n[Math.min(n.length-1,r+2)],p=x.offsetLeft-s.offsetLeft-25,y=w.offsetLeft+w.offsetWidth-s.offsetLeft+25-p,S=y<=h?p-(h-y)/2:m.offsetLeft-s.offsetLeft-h/2+m.offsetWidth/2;s.scrollTo({left:S,behavior:"smooth"})},350)}function u(m=!1){e&&(window.removeEventListener("resize",d),m?(e.remove(),e=null):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e?.remove(),e=null},400)))}function f(m){let l=e?.querySelector(".window-content");l&&(l.innerHTML=m)}function b(){return e&&e.classList.contains("open")}return{open:c,close:u,setContent:f,isOpen:b,focus:i,id:t.id}}function Be(){return!0}function De(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function He(t){localStorage.setItem("easter_user_email",t.trim())}var Ne="easter_theme",B={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function ve(){return localStorage.getItem(Ne)||B.AUTO}function dt(){let t=window.innerWidth,e=window.innerHeight,a=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?B.ANIMATED:(t===1920&&e===1080&&a||t<=1920||e<=1080,B.DEFAULT)}function Oe(t){if(!Object.values(B).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ne,t),ge(t)}function ge(t,e=!1){let a=document.body,o=t===B.AUTO?dt():t;if(e||(a.classList.add("theme-transitioning"),setTimeout(()=>{a.classList.remove("theme-transitioning")},300)),Object.values(B).forEach(i=>{a.classList.remove(`theme-${i}`)}),a.classList.add(`theme-${t}`),o===B.ANIMATED){if(!document.querySelector(".background")){let i=document.createElement("div");i.className="background",document.body.prepend(i)}}else{let i=document.querySelector(".background");i&&(e?i.remove():(i.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{i.remove()},400)))}}function ze(){let t=ve();if(ge(t,!0),t===B.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{ge(B.AUTO)},300)})}}function $(t,e,a=null){let i={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",c=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${i} placeholder-icon'></i><p class="placeholder-message">${e}</p>${c}</div>`}function k(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function D(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let o=Date.now(),i=Math.floor((o-e)/1e3),c;i<60?c=`${i}s ago`:i<3600?c=`${Math.floor(i/60)}m ago`:c=`${Math.floor(i/3600)}h ago`,a.textContent=`Last updated: ${c}`}function P(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let o=a.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function ie(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;P(0,e)}function be(){return"https://event.easter.company"}function pt(){return"https://discord.easter.company"}var mt="http://127.0.0.1:8100",ut="http://127.0.0.1:8300",ft={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function ae(t){let e=k(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(i,c)=>{let d=ft[c];return d?`<span class="${d}">`:""});let a=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return a>o&&(e+="</span>".repeat(a-o)),e}var V=null,K=null,se=!1,ne=!1;async function E(t,e={}){if(V)try{let i=await fetch(V+t,e);if(i.ok)return i;V=null}catch{V=null}let a=be(),o=mt;try{let i=await fetch(a+t,e);if(i.ok)return V=a,se&&(console.log("\u2728 Production event service restored."),se=!1),i;throw new Error("Primary failed")}catch{se||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${o}`),se=!0);try{let c=await fetch(o+t,e);if(c.ok)return V=o,c;throw new Error("Fallback failed")}catch(c){throw c}}}async function Pe(t,e={}){if(K)try{let i=await fetch(K+t,e);if(i.ok)return i;K=null}catch{K=null}let a=pt(),o=ut;try{let i=await fetch(a+t,e);if(i.ok)return K=a,ne&&(console.log("\u2728 Production discord service restored."),ne=!1),i;throw new Error("Primary failed")}catch{ne||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${o}`),ne=!0);try{let c=await fetch(o+t,e);if(c.ok)return K=o,c;throw new Error("Fallback failed")}catch(c){throw c}}}var Ue=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,oe=null,j=new Set,le=[];async function F(t=!1){let e=document.getElementById("notifications-list");if(!e)return;gt(),t&&(e.innerHTML="<p>Updating...</p>");let a="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await E(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[];oe=Date.now(),D(0,oe);let d=Date.now(),g=24*60*60*1e3,u=c.filter(p=>{let v=localStorage.getItem(`notification_read_ts_${p.id}`);if(!v)return!0;let y=parseInt(v);return d-y<g});u.sort((p,v)=>{let y=H=>{let _=H.event;if(typeof _=="string")try{_=JSON.parse(_)}catch{return"low"}return(_.priority||"low").toLowerCase()},S=H=>H==="critical"?4:H==="high"?3:H==="medium"?2:1,C=S(y(p)),L=S(y(v));return C!==L?L-C:v.timestamp-p.timestamp}),le=u;let f=p=>{let v=p.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return"low"}return(v.priority||"low").toLowerCase()},b=[],l=new Set(u.map(p=>f(p))).size>1;if(u.length>0){let p=null;u.forEach(v=>{let y=f(v);l&&y!==p&&(b.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),p=y),b.push(v)})}if(t&&(e.innerHTML=""),u.length===0){e.innerHTML=$("empty","No notifications yet."),ie();return}let s=p=>{let v=p.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return null}let y=v.title||"Untitled Notification",S=v.body||"No description provided.",C=v.priority||"low",L=!!v.alert,H=v.category||"system",_=v.related_event_ids||[],N=!!localStorage.getItem(`notification_read_ts_${p.id}`),z=new Date(p.timestamp*1e3),I=z.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=z.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=N?"event-border-grey":"event-border-blue";!N&&L&&(A="event-border-red"),N&&(C==="high"||C==="critical")?A="event-border-red":N&&C==="medium"&&(A="event-border-orange");let O=N?"notification-read":"notification-unread",M=j.has(p.id),pe=M?"expanded":"",me=M?"display: block;":"display: none;",ke="",Ce="";_.length>0&&(Ce=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${_.map(Q=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Q.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),ke=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${C==="high"||C==="critical"?"#ff4d4d":C==="medium"?"#ffa500":"#888"}">${C.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${k(S)}</p>
                </div>
                ${Ce}
            `;let U=document.createElement("div");U.className=`event-item notification-item ${A} ${O} ${pe} cursor-pointer`,U.dataset.notificationId=p.id,U.onclick=function(Q){if(this.classList.contains("expanded")){this.classList.remove("expanded"),j.delete(p.id);let ee=this.querySelector(".event-details");ee&&(ee.style.display="none")}else{this.classList.add("expanded"),j.add(p.id);let ee=this.querySelector(".event-details");if(ee&&(ee.style.display="block"),!localStorage.getItem(`notification_read_ts_${p.id}`)){localStorage.setItem(`notification_read_ts_${p.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let fe="event-border-grey";C==="high"||C==="critical"?fe="event-border-red":C==="medium"&&(fe="event-border-orange"),this.classList.add(fe),ie()}}},U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${I}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${H.toUpperCase()} ${L?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${me}">
                        <div class="event-details-header">
                            <h4>${L?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${ke}
                    </div>
                </div>
            `;let Se=U.querySelector(".close-details-btn");return Se&&Se.addEventListener("click",Q=>{Q.stopPropagation(),U.classList.remove("expanded");let ue=U.querySelector(".event-details");ue&&(ue.style.display="none"),j.delete(p.id)}),U},n=p=>{let v=document.createElement("div");v.className="notification-divider",v.dataset.notificationId=p.id;let y="#888888";return p.label==="CRITICAL"?y="#ff4d4d":p.label==="HIGH"?y="#ff8888":p.label==="MEDIUM"&&(y="#ffa500"),v.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,v.innerHTML=`<span style="white-space: nowrap;">${p.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,v},r=Array.from(e.children),h=new Map(r.map(p=>[p.dataset.notificationId,p])),x=new Set(b.map(p=>p.id));r.forEach(p=>{let v=p.dataset.notificationId;(!v||!x.has(v))&&p.remove()});let w=null;b.forEach((p,v)=>{let y=h.get(p.id);(!y||t)&&(y&&y.remove(),p.type==="divider"?y=n(p):y=s(p),!y)||(v===0?e.firstElementChild!==y&&e.prepend(y):w&&w.nextElementSibling!==y&&w.after(y),w=y)}),oe=Date.now(),D(0,oe),ie()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function gt(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),a=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{le.forEach(i=>{localStorage.getItem(`notification_read_ts_${i.id}`)||localStorage.setItem(`notification_read_ts_${i.id}`,Date.now().toString())}),F(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{le.forEach(i=>{j.add(i.id),localStorage.getItem(`notification_read_ts_${i.id}`)||localStorage.setItem(`notification_read_ts_${i.id}`,Date.now().toString())}),F(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{j.clear(),F(!0)},a.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let i=Date.now()-1728e5;le.forEach(c=>{localStorage.setItem(`notification_read_ts_${c.id}`,i.toString())}),j.clear(),F(!0)},o.dataset.listenerAttached="true")}var je=()=>`
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
`,R=new Set,Fe=[],J=null;async function q(t=!1){let e=document.getElementById("roadmap-list");if(e){vt();try{let a=await E("/roadmap");if(!a.ok)throw new Error("Offline");let o=await a.json();if(Fe=o,o.length===0){e.innerHTML=$("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let i=f=>{let b=R.has(f.id),m=f.state==="draft",l=f.state==="published",s=f.state==="consumed",n="event-border-grey";l&&(n="event-border-blue"),s&&(n="event-border-purple");let h=new Date(f.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),x=document.createElement("div");x.className=`event-item notification-item ${n} cursor-pointer ${b?"expanded":""}`,x.dataset.itemId=f.id,x.onclick=p=>{if(p.target.closest("button"))return;x.classList.contains("expanded")?(x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",R.delete(f.id)):(x.classList.add("expanded"),x.querySelector(".event-details").style.display="block",R.add(f.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${f.state.toUpperCase()}]</span>`;return x.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${h.split(",")[1]}</span>
          <span class="event-date">${h.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${k(f.content)}</div>
          <div class="event-details" style="${b?"display: block;":"display: none;"} ">
            <div class="event-details-header">
              <h4>Item Controls</h4>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${s?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${l?"bx-pause":"bx-rocket"}'></i> ${l?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${s?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(f.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,x.querySelector(".edit-btn")?.addEventListener("click",()=>bt(f)),x.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>yt(f)),x.querySelector(".delete-btn")?.addEventListener("click",()=>ht(f.id)),x.querySelector(".close-details-btn")?.addEventListener("click",p=>{p.stopPropagation(),x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",R.delete(f.id)}),x},c=Array.from(e.children),d=new Map(c.map(f=>[f.dataset.itemId,f])),g=new Set(o.map(f=>f.id));c.forEach(f=>{let b=f.dataset.itemId;(!b||!g.has(b))&&f.remove()});let u=null;o.forEach((f,b)=>{let m=d.get(f.id);(!m||t)&&(m&&m.remove(),m=i(f),!m)||(b===0?e.firstElementChild!==m&&e.prepend(m):u&&u.nextElementSibling!==m&&u.after(m),u=m)})}catch{e.innerHTML=$("error","Failed to load roadmap.")}}}function vt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),i=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{J=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",J=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let c=document.getElementById("roadmap-editor-input").value;if(!c.trim())return;let d=J?`/roadmap/${J}`:"/roadmap",g=J?"PATCH":"POST";try{await E(d,{method:g,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c})}),document.getElementById("roadmap-editor-container").style.display="none",q(!0)}catch(u){console.error(u)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{Fe.forEach(c=>R.add(c.id)),q(!0)},o.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{R.clear(),q(!0)},i.dataset.listenerAttached="true")}function bt(t){J=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function yt(t){let e=t.state==="published"?"draft":"published";try{await E(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),q(!0)}catch(a){console.error(a)}}async function ht(t){if(confirm("Delete this roadmap item?"))try{await E(`/roadmap/${t}`,{method:"DELETE"}),R.delete(t),q(!0)}catch(e){console.error(e)}}var qe=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,Re=null,Y=new Set,We=[];async function re(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;xt();let a="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await E(a);if(!o.ok)throw new Error("Service is offline or unreachable.");let c=(await o.json()).events||[];if(We=c,Re=Date.now(),D(2,Re),c.length===0){e.innerHTML=$("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),P(1,0);return}t&&(e.innerHTML="");let d=m=>{let l=m.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{return null}let s=l.title||"Untitled Blueprint",n=l.summary||l.body||"No summary provided.",r=l.content||"",h=l.category||"architecture",x=l.affected_services||[],w=l.implementation_path||[],p=new Date(m.timestamp*1e3),v=p.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),y=p.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=Y.has(m.id),C=S?"display: block;":"display: none;",L=document.createElement("div");L.className=`event-item notification-item event-border-purple cursor-pointer ${S?"expanded":""}`,L.dataset.blueprintId=m.id,L.onclick=function(N){if(this.classList.contains("expanded")){this.classList.remove("expanded"),Y.delete(m.id);let I=this.querySelector(".event-details");I&&(I.style.display="none")}else{this.classList.add("expanded"),Y.add(m.id);let I=this.querySelector(".event-details");I&&(I.style.display="block")}};let H=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",_="";w.length>0&&(_=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(N=>`<li>${k(N)}</li>`).join("")}
                        </ul>
                    </div>
                `),L.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${v}</span>
                    <span class="event-date">${y}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${s}</div>
                    <div class="event-details" style="${C}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${k(n)}
                        </div>
                        ${H}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${k(r)}</p>
                        </div>
                        ${_}
                    </div>
                </div>
            `;let W=L.querySelector(".close-details-btn");return W&&W.addEventListener("click",N=>{N.stopPropagation(),L.classList.remove("expanded");let z=L.querySelector(".event-details");z&&(z.style.display="none"),Y.delete(m.id)}),L},g=Array.from(e.children),u=new Map(g.map(m=>[m.dataset.blueprintId,m])),f=new Set(c.map(m=>m.id));g.forEach(m=>{let l=m.dataset.blueprintId;(!l||!f.has(l))&&m.remove()});let b=null;c.forEach((m,l)=>{let s=u.get(m.id);(!s||t)&&(s&&s.remove(),s=d(m),!s)||(l===0?e.firstElementChild!==s&&e.prepend(s):b&&b.nextElementSibling!==s&&b.after(s),b=s)}),P(2,c.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=$("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function xt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{We.forEach(a=>Y.add(a.id)),re(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Y.clear(),re(!0)},e.dataset.listenerAttached="true")}var Ge=()=>`
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
            ${qe()}
        </div>
    </div>
`;async function ye(){await Promise.all([q(),re()])}var Ke=()=>`
    <div class="notifications-actions">
        <button id="contacts-refresh" class="notif-action-btn"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
        <p>Loading contacts...</p>
    </div>
`,Ve=null;async function he(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>he(),e.dataset.listenerAttached="true");try{let a=await Pe("/contacts");if(!a.ok)throw new Error("Service unreachable");let i=(await a.json()).members||[];if(Ve=Date.now(),D(4,Ve),i.length===0){t.innerHTML=$("empty","No contacts found.","Check your Discord connection.");return}let c={Me:0,"Master User":1,Admin:2,Moderator:3,Contributor:4,User:5,Anyone:6};i.sort((d,g)=>{let u=c[d.level]??10,f=c[g.level]??10;return u!==f?u-f:d.username.localeCompare(g.username)}),t.innerHTML=i.map(d=>{let g=d.color?"#"+d.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",u=d.status==="online"?"#5eff5e":d.status==="idle"?"#ffa500":d.status==="dnd"?"#ff4d4d":"#666",f="#888";d.level==="Me"||d.level==="Master User"?f="#bb86fc":d.level==="Admin"?f="#cf6679":d.level==="Moderator"?f="#03dac6":d.level==="Contributor"&&(f="#ffa500");let b=d.level==="Me",m=b?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",l=b?"2px solid #bb86fc":`1px solid ${g}33`;return`
                <div class="user-profile-section" style="background: ${m}; padding: 15px; border-radius: 8px; border: ${l}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${b?"#bb86fc":g}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${d.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${b?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${u}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${d.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${f}; font-weight: 600; text-transform: uppercase;">${b?"DEXTER (ME)":d.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${d.id}</p>
                    </div>
                </div>
            `}).join(""),P(4,i.filter(d=>d.status!=="offline").length)}catch{t.innerHTML=$("offline","Failed to fetch contacts.","The Discord service may be offline.")}}var wt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Je(t,e){let a=wt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(a=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!a)return t;let o=a.replace(/\{(\w+)\}/g,(i,c)=>e[c]!==void 0&&e[c]!==null?e[c]:i);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var Xe=()=>`
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
`,ce=null,X=new Set,te=[],de="all",Et={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},$t={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ye(t){for(let[e,a]of Object.entries(Et))if(a.includes(t))return e;return"system"}function Lt(t){return $t[t]||"bx-square-rounded"}async function Z(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Tt();let o=`/events?ml=${de==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let i=await E(o);if(!i.ok)throw new Error("Service is offline or unreachable.");let d=(await i.json()).events||[],g=d;if(de!=="all"&&(g=d.filter(s=>{let n=s.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!1}return Ye(n.type)===de})),te=g.slice(0,50),ce=Date.now(),D(1,ce),te.length===0){e.innerHTML=$("empty","No events found for this filter.");return}t&&(e.innerHTML="");let u=s=>{let n=s.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let r=n.type,h=Ye(r),x=Lt(r),w=r==="engagement.decision"||r==="messaging.bot.sent_message"||r==="messaging.user.sent_message"||r==="moderation.explicit_content.deleted"||r==="analysis.link.completed"||r==="analysis.visual.completed"||r==="system.cli.command"||r==="system.analysis.audit"||r==="system.test.completed"||r==="error_occurred"||r==="system.cli.status"||r.startsWith("system.roadmap")||r.startsWith("system.process"),p="event-border-grey";w&&(r==="moderation.explicit_content.deleted"||r==="error_occurred"?p="event-border-red":r==="analysis.link.completed"||r==="analysis.visual.completed"||r==="system.analysis.audit"?p="event-border-purple":r==="system.cli.command"||r==="system.cli.status"?p="event-border-orange":r==="system.test.completed"?p=n.test?.status==="OK"&&n.lint?.status==="OK"&&n.format?.status==="OK"?"event-border-blue":"event-border-red":p="event-border-blue");let v=w?"cursor-pointer":"",y=X.has(s.id),S=y?"expanded":"",C=y?"display: block;":"display: none;",L=new Date(s.timestamp*1e3),H=L.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),_=L.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),W=Je(r,n),N=n.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${n.user_level})</span>`:"",z="";if(w){let T="";if(r==="engagement.decision")T=`
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
                    `;else if(r==="messaging.bot.sent_message")T=`
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
                    `;else if(r==="moderation.explicit_content.deleted")T=`
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
                    `;else if(r==="analysis.link.completed")T=`
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
                    `;else if(r==="analysis.visual.completed"){let A="";n.base64_preview?A=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&(A=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${A}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${k(n.description)||"None"}</pre>
                        </div>
                    `}else if(r==="system.cli.command")T=`
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
                    `;else if(r==="system.analysis.audit")T=`
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
                    `;else if(r==="system.test.completed")T=`
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
                    `;else if(r==="error_occurred")T=`
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
                    `;else if(r==="system.cli.status")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${k(n.message)}</pre>
                        </div>
                    `;else if(r==="messaging.user.sent_message"){let A="";n.attachments&&n.attachments.length>0&&(A=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${n.attachments.map(M=>{let pe=M.content_type&&M.content_type.startsWith("image/"),me=(M.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${pe?`<div class="attachment-thumb-container"><img src="${M.url}" alt="${M.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${M.url}" target="_blank" class="attachment-link">${M.filename}</a>
                                        <span class="attachment-meta">${M.content_type} \u2022 ${me}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${n.content||"(empty)"}</pre>
                        </div>
                        ${A}
                    `}z=`
                    <div class="event-details" style="${C}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${T}
                    </div>
                `}let I=document.createElement("div");if(I.className=`event-item ${p} ${v} ${S}`,I.dataset.eventId=s.id,I.onclick=function(T){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),X.delete(s.id);let O=this.querySelector(".event-details");O&&(O.style.display="none")}else{this.classList.add("expanded"),X.add(s.id);let O=this.querySelector(".event-details");O&&(O.style.display="block")}},I.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${H}</span>
                    <span class="event-date">${_}</span>
                </div>
                <div class="event-icon"><i class='bx ${x}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${h}">${h}</span>
                        ${s.service} ${N}
                    </div>
                    <div class="event-message">${W}</div>
                    ${z}
                </div>
            `,w){let T=I.querySelector(".close-details-btn");T&&T.addEventListener("click",A=>{A.stopPropagation();let O=A.target.closest(".event-item");if(O){O.classList.remove("expanded"),X.delete(s.id);let M=O.querySelector(".event-details");M&&(M.style.display="none")}})}return I},f=Array.from(e.children),b=new Map(f.map(s=>[s.dataset.eventId,s])),m=new Set(te.map(s=>s.id));f.forEach(s=>{let n=s.dataset.eventId;(!n||!m.has(n))&&s.remove()});let l=null;te.forEach((s,n)=>{let r=b.get(s.id);(!r||t)&&(r&&r.remove(),r=u(s),!r)||(n===0?e.firstElementChild!==r&&e.prepend(r):l&&l.nextElementSibling!==r&&l.after(r),l=r)}),ce=Date.now(),D(1,ce)}catch(i){console.error("Error fetching events:",i),e.children.length===0&&(e.innerHTML=$("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Tt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),a=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{te.forEach(o=>X.add(o.id)),Z(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.clear(),Z(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.querySelectorAll(".filter-btn").forEach(o=>{o.onclick=()=>{a.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),o.classList.add("active"),de=o.dataset.filter,Z(!0)}}),a.dataset.listenerAttached="true")}function Ze(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var kt=null;async function xe(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await E("/logs");if(!e.ok)throw new Error("Logs offline");let a=await e.json();if(!a||a.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let o=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],i=a.filter(d=>!o.includes(d.id));i.forEach(d=>{d.logs&&Array.isArray(d.logs)?d.logs.reverse():d.logs=[]}),i.reverse();let c=i.map(d=>{let g=d.logs.join(`
`),u=[...d.logs];if(u.length<25){let b=25-u.length;for(let m=0;m<b;m++)u.push("")}else u.length>25&&(u=u.slice(-25));let f=u.map(b=>ae(b)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${d.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(g)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${d.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${f}</pre>
                </div>
            `}).join("");return t.innerHTML=c,document.querySelectorAll(".copy-logs-btn").forEach(d=>{d.addEventListener("click",()=>{let g=unescape(d.dataset.logs);navigator.clipboard.writeText(g).then(()=>{let u=d.querySelector("i");u.classList.remove("bx-copy"),u.classList.add("bx-check"),setTimeout(()=>{u.classList.remove("bx-check"),u.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(d=>{d.addEventListener("click",async()=>{let g=d.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${g}?`))try{(await E(`/logs?service_id=${g}`,{method:"DELETE"})).ok&&xe()}catch(u){console.error("Error clearing logs:",u)}})}),kt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var nt=()=>`
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
            ${Ze()}
        </div>
    `;async function we(){await Promise.all([at(),_t(),At()]),await xe()}var Qe=null,et=null,tt=null;async function it(){try{return await(await E("/system_monitor")).json()}catch{return null}}async function st(){try{return await(await E("/system/hardware")).json()}catch{return null}}async function Ct(){try{return await(await E("/processes")).json()}catch{return null}}async function St(){try{return await(await E("/analyst/status")).json()}catch{return null}}async function _t(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),a=document.getElementById("hardware-refresh-btn"),o=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let n="",r=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(n+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${r} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let h=s.CPU[0];n+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${h.LABEL}">${h.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${h.COUNT} Cores / ${h.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((h,x)=>{let w=(h.VRAM/1073741824).toFixed(1);n+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${x}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${h.LABEL}">${h.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${w} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let h=0,x=0;s.STORAGE.forEach(y=>{h+=y.USED,x+=y.SIZE});let w=(h/(1024*1024*1024)).toFixed(1),p=(x/(1024*1024*1024)).toFixed(1),v=x>0?(h/x*100).toFixed(0):0;n+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} / ${p} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${v>90?"#ff4d4d":"#00ff00"}; width: ${v}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=n};if(e&&a){a.dataset.listenerAttached||(a.onclick=async()=>{a.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let n=await st();n?(o(n),a.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',a.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{a.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},a.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let n=await st();o(n)}}if(!t)return;let i=await it();if(!i||!i.services){t.innerHTML=$("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}Qe=Date.now(),D(3,Qe);let c=i.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function d(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function g(s){if(!s||s==="N/A"||s==="unknown")return"-";let n=s.match(/^(\d+\.\d+\.\d+)/);return n?n[0]:s.split(".").slice(0,3).join(".")||"-"}function u(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function f(s){if(!s||s==="N/A"||s==="unknown")return"-";let n=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!n)return"-";let r=parseInt(n[1])||0,h=parseInt(n[2])||0,x=parseInt(n[3])||0,w=parseFloat(n[4])||0,p=r*86400+h*3600+x*60+w,v=Math.floor(p/86400);if(v>0)return`${v}d`;let y=Math.floor(p/3600);if(y>0)return`${y}h`;let S=Math.floor(p/60);return S>0?`${S}m`:`${Math.floor(p)}s`}function b(s){let n=s.status==="online",r=n?"service-widget-online":"service-widget-offline",h=n?"bx-check-circle":"bx-x-circle",x=n?"OK":"BAD",w=s.version?g(s.version.str):"-",p=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",v=s.memory&&s.memory!=="N/A"?s.memory:"-",y=p!=="-"?"#00ff00":"#666",S=p!=="-"?"#fff":"#666",C=v!=="-"?"#00ff00":"#666",L=v!=="-"?"#fff":"#666",H=f(s.uptime),_="";return n?_=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${w}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${H}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${y};"></i>
                        <span style="color: ${S};">${p}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${C};"></i>
                        <span style="color: ${L};">${v}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${r}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${h}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${x}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${u(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let m=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),l=new Set(c.map(s=>s.id));for(let[s,n]of m)l.has(s)||n.remove();c.forEach(s=>{let n=b(s),r=m.get(s.id);r?r.outerHTML!==n&&(r.outerHTML=n):t.insertAdjacentHTML("beforeend",n)})}async function At(){let t=document.getElementById("models-widgets");if(!t)return;let e=await it();if(!e){t.innerHTML=$("offline","Failed to load model status.");return}et=Date.now(),D(3,et);let a=e.models||[],o=e.whisper;Array.from(t.children).forEach(g=>{g.classList.contains("service-widget")||g.remove()});function i(g){let u=g.status==="Ready";return`
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
                </div>`}function c(g){let u=g.status==="Downloaded",f=u?"service-widget-online":"service-widget-offline",b=u?"OK":"MISSING",m=u&&g.size>0?`${(g.size/1e9).toFixed(2)} GB`:"-",l=g.name;return g.type==="custom"&&l.endsWith(":latest")&&(l=l.replace(":latest","")),`<div class="service-widget ${f}" data-model-name="${g.name}"><div class="service-widget-header"><i class="bx ${u?"bx-check-circle":"bx-x-circle"}"></i><h3>${l}</h3><span class="service-widget-status">${b}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${g.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${m}</span></div></div></div>`}let d="";if(o&&(d+=i(o)),d+=a.map(c).join(""),!d){t.innerHTML=$("empty","No models found.");return}t.innerHTML!==d&&(t.innerHTML=d)}async function at(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),a=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),i=document.getElementById("analyst-idle-val"),c=document.getElementById("analyst-reset-btn");c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{c.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await E("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{c.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),at()}catch{c.innerHTML="<i class='bx bx-error'></i> Failed"}},c.dataset.listenerAttached="true");let d=await St();if(d){let l=Math.floor(Date.now()/1e3),s=d.active_tier,n=(r,h,x)=>{if(s===x||x==="guardian"&&s==="tests"){r.textContent="Working",r.style.color="#bb86fc";return}let w=h-l;if(w<=0)r.textContent="Ready",r.style.color="#5eff5e";else{let p=Math.floor(w/60),v=w%60;r.textContent=`${p}m ${v}s`,r.style.color="#fff"}};if(e&&d.guardian&&n(e,d.guardian.next_run,"guardian"),a&&d.architect&&n(a,d.architect.next_run,"architect"),o&&d.strategist&&n(o,d.strategist.next_run,"strategist"),i&&d.system_idle_time!==void 0){let r=d.system_idle_time,h=Math.floor(r/60),x=r%60;i.textContent=`${h}m ${x}s`,r>300?i.style.color="#5eff5e":r>60?i.style.color="#ffa500":i.style.color="#fff"}}else[e,a,o,i].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let g=await Ct(),u=document.getElementById("vitals-processes-val");if(u)if(g){let l=g.length;u.textContent=l>0?`${l} Active`:"Idle",u.style.color=l>0?"#bb86fc":"#fff"}else u.textContent="-",u.style.color="#888";if(g===null){t.innerHTML=$("offline","Failed to load process status.");return}if(tt=Date.now(),D(3,tt),g.length===0){t.innerHTML=$("empty","No active processes."),P(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function f(l){let s=Math.floor(Date.now()/1e3-l.start_time),n=l.retries>0?`<span class="process-retry-badge">Retry ${l.retries}</span>`:"",r=l.channel_id,h={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return h[r]?r=h[r]:/^\d+$/.test(r)&&(r=`Channel ${r}`),`
                <div class="service-widget process-widget" data-channel-id="${l.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${r}</h3>
                        ${n}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value">${l.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${s}s</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value">${l.pid}</span>
                        </div>
                    </div>
                </div>`}let b=new Map(Array.from(t.querySelectorAll(".process-widget")).map(l=>[l.dataset.channelId,l])),m=new Set(g.map(l=>l.channel_id));for(let[l,s]of b)m.has(l)||s.remove();g.forEach(l=>{let s=f(l),n=b.get(l.channel_id);n?n.outerHTML!==s&&(n.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),P(3,g.length)}function Ee(){let t=ve(),e=De()||"master@easter.company",a={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(B).map(i=>`
                    <div class="theme-card ${t===i?"active":""}" data-theme="${i}">
                        <div class="theme-preview theme-preview-${i.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${i}</h3>
                            <p>${i===B.AUTO?"Automatic theme selection.":i===B.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
                            <span class="theme-badge">${t===i?"Active":"Select"}</span>
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
            </div>`}function $e(t){let e=document.querySelector("#main-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(i=>{i.addEventListener("click",function(){let c=this.dataset.theme;Oe(c),t.setContent(Ee()),$e(t)})});let a=document.getElementById("notifications-toggle");a&&(a.onclick=async i=>{if(i.target.checked)try{await Notification.requestPermission()!=="granted"&&(i.target.checked=!1)}catch{i.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),i.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=i=>{let c=i.target.checked;localStorage.setItem("easter_analytics_enabled",c),window.EASTER_ANALYTICS_ENABLED=c,window.EASTER_DEBUG_MODE=c})}var lt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Placeholder for the future Dexter chat interface.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Trigger a manual Tier 1 Guardian system audit.",usage:"dex guardian",category:"cognitive"},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the real-time health of all system services.",usage:"dex status [service]",category:"system"},{id:"build",title:"Build",icon:"bx-package",description:"Build and install the entire ecosystem from source.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Fetch and apply the latest updates for all components.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Execute the comprehensive system-wide test suite.",usage:"dex test [service]",category:"lifecycle"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"Stream or tail logs from any manageable service.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"View detailed hardware vitals and OS-level info.",usage:"dex system [--json]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"View or modify the central service-map.json.",usage:"dex config <service> [field]",category:"system"}],It=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>
    `;for(let[a,o]of Object.entries(t)){let i=lt.filter(c=>c.category===a);i.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 40px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${o.icon}' style="color: ${o.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${o.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${i.map(c=>`
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
        `)}return e+="</div>",e},Te=!1;function Mt(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>ot(),document.getElementById("terminal-action-btn").onclick=()=>ot());let a=document.getElementById("cli-terminal-body");return a.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Te=!0,a}function ot(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Te=!1}function Le(t,e,a="output"){if(!Te)return;let o=document.createElement("div");o.className=`terminal-line terminal-${a}`,a==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=ae(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function Bt(t){let e=lt.find(o=>o.id===t);if(!e)return;let a=Mt(e);Le(a,`dex ${t}`,"prompt");try{let i=(await E("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),c=new TextDecoder;for(;;){let{value:d,done:g}=await i.read();if(g)break;c.decode(d,{stream:!0}).split(`
`).forEach(b=>{if(b.trim()==="")return;let m="output";b.includes("[ERROR]")?m="error":b.includes("[SUCCESS]")||b.includes("\u2713")?m="success":b.includes("!")&&(m="warning"),Le(a,b,m)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch(o){Le(a,`Connection Error: ${o.message}`,"error"),document.getElementById("terminal-status-badge").className="terminal-status status-error",document.getElementById("terminal-status-badge").textContent="Failed"}finally{document.getElementById("terminal-action-btn").style.display="block"}}function rt(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=It(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.03)"}),e.addEventListener("click",()=>{let a=e.dataset.cmd;if(a==="chat"){alert("Connection to cognitive core pending deployment...");return}Bt(a)})}))}async function Dt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${be()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function ct(){Dt(),ze(),_e(),window.location.pathname.includes("/dex")&&rt();let t=Be();Ae(t),Ie();let e=[],a=document.getElementById("windows-container");a&&a.setAttribute("data-count","0");function o(){return window.innerWidth>=1900?2:1}function i(){let l=o();for(;e.length>l;)e.shift().close(!0);let s=document.getElementById("windows-container");s&&s.setAttribute("data-count",e.length)}function c(l){if(l.isOpen()){l.close();return}let s=o();e.length>=s&&e.shift().close(!0),e.push(l),l.open(),i()}function d(){[...e].forEach(s=>s.close()),e=[]}window.addEventListener("resize",i);let g=G({id:"feed-window",icon:"bx-news",tabs:[{icon:"bx-bell",title:"Notifications",content:Ue()},{icon:"bx-calendar-event",title:"Events",content:Xe()}],onOpen:()=>{F(),Z()},onClose:()=>{let l=e.indexOf(g);l>-1&&e.splice(l,1),i()}}),u=G({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bx-server",title:"System",content:nt()},{icon:"bx-book-content",title:"Contacts",content:Ke()}],onOpen:()=>{we(),he()},onClose:()=>{let l=e.indexOf(u);l>-1&&e.splice(l,1),i()}}),f=G({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:Ge(),onOpen:()=>ye(),onClose:()=>{let l=e.indexOf(f);l>-1&&e.splice(l,1),i()}}),b=G({id:"settings-window",title:"Settings",icon:"bx-cog",content:Ee(),onOpen:()=>$e(b),onClose:()=>{let l=e.indexOf(b);l>-1&&e.splice(l,1),i()}}),m=G({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});t?(document.getElementById("feed-icon")?.addEventListener("click",()=>c(g)),document.getElementById("monitor-icon")?.addEventListener("click",()=>c(u)),document.getElementById("workspace-icon")?.addEventListener("click",()=>c(f)),document.getElementById("settings-icon")?.addEventListener("click",()=>c(b)),document.getElementById("close-all-windows")?.addEventListener("click",()=>d()),setInterval(()=>{g.isOpen()&&(F(),Z()),u.isOpen()&&we(),f.isOpen()&&ye()},5e3)):document.getElementById("login-btn")?.addEventListener("click",()=>{m.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",l=>{l.preventDefault();try{He(document.getElementById("email-input").value),window.location.reload()}catch(s){let n=document.getElementById("login-error");n&&(n.textContent=s.message,n.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ct):ct();})();
