(()=>{function Be(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function De(t=!1){let n=`
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
    `,o=document.createElement("nav");o.innerHTML=n,document.body.prepend(o)}function Ne(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function xe(t){let e=null,n=t.onClose||null,o=t.onOpen||null,i=t.onTabChange||null;function d(){if(e){e.classList.add("open"),window.addEventListener("resize",m),o&&setTimeout(o,10);return}let r=document.getElementById("windows-container");r||(r=document.createElement("div"),r.id="windows-container",r.className="windows-container",document.body.appendChild(r)),e=document.createElement("div"),e.id=t.id,e.className="window";let s=t.icon||"bx-window",l="",a="",c;t.tabs&&t.tabs.length>0?(l=`<div class="tab-bar">${t.tabs.map((y,w)=>{let $;return y.icon?$=`<i class="bx ${y.icon}"></i>`:y.title&&y.title.length>0?$=`<span class="tab-glyph">${y.title.charAt(0).toUpperCase()}</span>`:$='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${w===0?"active":""}" data-tab-index="${w}">
                        ${$}
                        <span class="tab-title">${y.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${w}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,c=`<div class="window-content">${t.tabs.map((y,w)=>`<div class="tab-content ${w===0?"active":""}" data-tab-content="${w}">${y.content}</div>`).join("")}</div>`):(t.title&&(a=`<div class="window-title">${t.title}</div>`),c=`<div class="window-content">${t.content}</div>`);let x=`
            <div class="window-header">
                <i class="bx ${s}"></i>
                ${l}
                ${a}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=x+c,r.appendChild(e);let E=e.querySelector(".window-close");E&&E.addEventListener("click",u=>{u.stopPropagation(),f()}),window.addEventListener("resize",m),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(v=>{v.addEventListener("click",()=>{let y=v.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(w=>w.classList.remove("active")),v.classList.add("active"),e.querySelectorAll(".tab-content").forEach(w=>w.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${y}"]`).classList.add("active"),h(v,e),i&&i(parseInt(y))})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function m(){if(!e||!e.classList.contains("open"))return;let r=e.querySelector(".tab.active");r&&h(r,e)}function h(r,s){setTimeout(()=>{let l=s.querySelector(".tab-bar");if(l){let a=Array.from(l.querySelectorAll(".tab")),c=a.indexOf(r),x=l.clientWidth,E=a[Math.max(0,c-2)],u=a[Math.min(a.length-1,c+2)],v=E.offsetLeft-l.offsetLeft-25,w=u.offsetLeft+u.offsetWidth-l.offsetLeft+25-v,$;w<=x?$=v-(x-w)/2:$=r.offsetLeft-l.offsetLeft-x/2+r.offsetWidth/2,l.scrollTo({left:$,behavior:"smooth"})}},350)}function f(r=!1){e&&(window.removeEventListener("resize",m),r?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),n&&n(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function p(r){if(e){let s=e.querySelector(".window-content");s&&(s.innerHTML=r)}}function b(){return e&&e.classList.contains("open")}function g(){if(!e)return-1;let r=e.querySelector(".tab.active");return r?parseInt(r.getAttribute("data-tab-index")):-1}return{open:d,close:f,setContent:p,isOpen:b,getActiveTabIndex:g,id:t.id}}function He(){return!0}function Oe(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Pe(t){localStorage.setItem("easter_user_email",t.trim())}var ze="easter_theme",M={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function Ee(){return localStorage.getItem(ze)||M.AUTO}function ct(){let t=window.innerWidth,e=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?M.ANIMATED:(t===1920&&e===1080&&n||t<=1920||e<=1080,M.DEFAULT)}function Ue(t){if(!Object.values(M).includes(t))throw new Error("Invalid theme");localStorage.setItem(ze,t),we(t)}function we(t,e=!1){let n=document.body,o=t===M.AUTO?ct():t;if(e||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(M).forEach(i=>{n.classList.remove(`theme-${i}`)}),n.classList.add(`theme-${t}`),o===M.ANIMATED){if(!document.querySelector(".background")){let i=document.createElement("div");i.className="background",document.body.prepend(i)}}else{let i=document.querySelector(".background");i&&(e?i.remove():(i.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{i.remove()},400)))}}function qe(){let t=Ee();if(we(t,!0),t===M.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{we(M.AUTO)},300)})}}function C(t,e,n=null){let i={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",d=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${i} placeholder-icon'></i><p class="placeholder-message">${e}</p>${d}</div>`}function A(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function k(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!n)return;if(!e){n.textContent="Last updated: never";return}let o=Date.now(),i=Math.floor((o-e)/1e3),d;i<60?d=`${i}s ago`:i<3600?d=`${Math.floor(i/60)}m ago`:d=`${Math.floor(i/3600)}h ago`,n.textContent=`Last updated: ${d}`}function P(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!n)return;let o=n.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function re(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;P(0,e)}function $e(){return"https://event.easter.company"}var dt="http://127.0.0.1:8100";function pt(){return"https://discord.easter.company"}var mt="http://127.0.0.1:8300",ut={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function ce(t){let e=A(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(i,d)=>{let m=ut[d];return m?`<span class="${m}">`:""});let n=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return n>o&&(e+="</span>".repeat(n-o)),e}var V=null,J=null,oe=!1,le=!1;async function L(t,e={}){if(V)try{let i=await fetch(V+t,e);if(i.ok)return i;V=null}catch{V=null}let n=$e(),o=dt;try{let i=await fetch(n+t,e);if(i.ok)return V=n,oe&&(console.log("\u2728 Production event service restored."),oe=!1),i;throw new Error("Primary failed")}catch{oe||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${o}`),oe=!0);try{let d=await fetch(o+t,e);if(d.ok)return V=o,d;throw new Error("Fallback failed")}catch(d){throw d}}}async function je(t,e={}){if(J)try{let i=await fetch(J+t,e);if(i.ok)return i;J=null}catch{J=null}let n=pt(),o=mt;try{let i=await fetch(n+t,e);if(i.ok)return J=n,le&&(console.log("\u2728 Production discord service restored."),le=!1),i;throw new Error("Primary failed")}catch{le||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${o}`),le=!0);try{let d=await fetch(o+t,e);if(d.ok)return J=o,d;throw new Error("Fallback failed")}catch(d){throw d}}}var Fe=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,K=null,j=new Set,de=[];async function F(t=!1){let e=document.getElementById("notifications-list");if(!e)return;ft(),t&&(e.innerHTML="<p>Updating...</p>");let n="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await L(n);if(!o.ok)throw new Error("Service is offline or unreachable.");let d=(await o.json()).events||[];K=Date.now(),k(0,K);let m=Date.now(),h=24*60*60*1e3,f=d.filter(u=>{let v=localStorage.getItem(`notification_read_ts_${u.id}`);if(!v)return!0;let y=parseInt(v);return m-y<h});f.sort((u,v)=>{let y=I=>{let _=I.event;if(typeof _=="string")try{_=JSON.parse(_)}catch{return"low"}return(_.priority||"low").toLowerCase()},w=I=>I==="critical"?4:I==="high"?3:I==="medium"?2:1,$=w(y(u)),S=w(y(v));return $!==S?S-$:v.timestamp-u.timestamp}),de=f;let p=u=>{let v=u.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return"low"}return(v.priority||"low").toLowerCase()},b=[],r=new Set(f.map(u=>p(u))).size>1;if(f.length>0){let u=null;f.forEach(v=>{let y=p(v);r&&y!==u&&(b.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),u=y),b.push(v)})}if(t&&(e.innerHTML=""),f.length===0){e.innerHTML=C("empty","No notifications yet."),re();return}let s=u=>{let v=u.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return null}let y=v.title||"Untitled Notification",w=v.body||"No description provided.",$=v.priority||"low",S=!!v.alert,I=v.category||"system",_=v.related_event_ids||[],B=!!localStorage.getItem(`notification_read_ts_${u.id}`),z=new Date(u.timestamp*1e3),O=z.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),U=z.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),T=B?"event-border-grey":"event-border-blue";!B&&S&&(T="event-border-red"),B&&($==="high"||$==="critical")?T="event-border-red":B&&$==="medium"&&(T="event-border-orange");let H=B?"notification-read":"notification-unread",D=j.has(u.id),N=D?"expanded":"",be=D?"display: block;":"display: none;",ie="",Ie="";_.length>0&&(Ie=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${_.map(se=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${se.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),ie=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${$==="high"||$==="critical"?"#ff4d4d":$==="medium"?"#ffa500":"#888"}">${$.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${A(w)}</p>
                </div>
                ${Ie}
            `;let q=document.createElement("div");q.className=`event-item notification-item ${T} ${H} ${N} cursor-pointer`,q.dataset.notificationId=u.id,q.onclick=function(se){if(this.classList.contains("expanded")){this.classList.remove("expanded"),j.delete(u.id);let ne=this.querySelector(".event-details");ne&&(ne.style.display="none")}else{this.classList.add("expanded"),j.add(u.id);let ne=this.querySelector(".event-details");if(ne&&(ne.style.display="block"),!localStorage.getItem(`notification_read_ts_${u.id}`)){localStorage.setItem(`notification_read_ts_${u.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let he="event-border-grey";$==="high"||$==="critical"?he="event-border-red":$==="medium"&&(he="event-border-orange"),this.classList.add(he),re()}}},q.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${O}</span>
                    <span class="event-date">${U}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${I.toUpperCase()} ${S?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${be}">
                        <div class="event-details-header">
                            <h4>${S?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${ie}
                    </div>
                </div>
            `;let Me=q.querySelector(".close-details-btn");return Me&&Me.addEventListener("click",se=>{se.stopPropagation(),q.classList.remove("expanded");let ye=q.querySelector(".event-details");ye&&(ye.style.display="none"),j.delete(u.id)}),q},l=u=>{let v=document.createElement("div");v.className="notification-divider",v.dataset.notificationId=u.id;let y="#888888";return u.label==="CRITICAL"?y="#ff4d4d":u.label==="HIGH"?y="#ff8888":u.label==="MEDIUM"&&(y="#ffa500"),v.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,v.innerHTML=`<span style="white-space: nowrap;">${u.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,v},a=Array.from(e.children),c=new Map(a.map(u=>[u.dataset.notificationId,u])),x=new Set(b.map(u=>u.id));a.forEach(u=>{let v=u.dataset.notificationId;(!v||!x.has(v))&&u.remove()});let E=null;b.forEach((u,v)=>{let y=c.get(u.id);(!y||t)&&(y&&y.remove(),u.type==="divider"?y=l(u):y=s(u),!y)||(v===0?e.firstElementChild!==y&&e.prepend(y):E&&E.nextElementSibling!==y&&E.after(y),E=y)}),K=Date.now(),k(0,K),re()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=C("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function ft(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{de.forEach(i=>{localStorage.getItem(`notification_read_ts_${i.id}`)||localStorage.setItem(`notification_read_ts_${i.id}`,Date.now().toString())}),F(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{de.forEach(i=>{j.add(i.id),localStorage.getItem(`notification_read_ts_${i.id}`)||localStorage.setItem(`notification_read_ts_${i.id}`,Date.now().toString())}),F(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{j.clear(),F(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let i=Date.now()-1728e5;de.forEach(d=>{localStorage.setItem(`notification_read_ts_${d.id}`,i.toString())}),j.clear(),F(!0)},o.dataset.listenerAttached="true")}var Re=()=>`
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
`,R=new Set,We=[],Y=null;async function W(t=!1){let e=document.getElementById("roadmap-list");if(e){gt();try{let n=await L("/roadmap");if(!n.ok)throw new Error("Offline");let o=await n.json();if(We=o,o.length===0){e.innerHTML=C("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let i=p=>{let b=R.has(p.id),g=p.state==="draft",r=p.state==="published",s=p.state==="consumed",l="event-border-grey";r&&(l="event-border-blue"),s&&(l="event-border-purple");let c=new Date(p.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),x=document.createElement("div");x.className=`event-item notification-item ${l} cursor-pointer ${b?"expanded":""}`,x.dataset.itemId=p.id,x.onclick=u=>{if(u.target.closest("button"))return;x.classList.contains("expanded")?(x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",R.delete(p.id)):(x.classList.add("expanded"),x.querySelector(".event-details").style.display="block",R.add(p.id))};let E=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${p.state.toUpperCase()}]</span>`;return x.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${c.split(",")[1]}</span>
          <span class="event-date">${c.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${E}</div>
          <div class="event-message" style="white-space: pre-wrap;">${A(p.content)}</div>
          <div class="event-details" style="${b?"display: block;":"display: none;"} ">
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
            ${s?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(p.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,x.querySelector(".edit-btn")?.addEventListener("click",()=>vt(p)),x.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>bt(p)),x.querySelector(".delete-btn")?.addEventListener("click",()=>yt(p.id)),x.querySelector(".close-details-btn")?.addEventListener("click",u=>{u.stopPropagation(),x.classList.remove("expanded"),x.querySelector(".event-details").style.display="none",R.delete(p.id)}),x},d=Array.from(e.children),m=new Map(d.map(p=>[p.dataset.itemId,p])),h=new Set(o.map(p=>p.id));d.forEach(p=>{let b=p.dataset.itemId;(!b||!h.has(b))&&p.remove()});let f=null;o.forEach((p,b)=>{let g=m.get(p.id);(!g||t)&&(g&&g.remove(),g=i(p),!g)||(b===0?e.firstElementChild!==g&&e.prepend(g):f&&f.nextElementSibling!==g&&f.after(g),f=g)})}catch{e.innerHTML=C("error","Failed to load roadmap.")}}}function gt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),n=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),i=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Y=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",Y=null},n.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let d=document.getElementById("roadmap-editor-input").value;if(!d.trim())return;let m=Y?`/roadmap/${Y}`:"/roadmap",h=Y?"PATCH":"POST";try{await L(m,{method:h,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:d})}),document.getElementById("roadmap-editor-container").style.display="none",W(!0)}catch(f){console.error(f)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{We.forEach(d=>R.add(d.id)),W(!0)},o.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{R.clear(),W(!0)},i.dataset.listenerAttached="true")}function vt(t){Y=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function bt(t){let e=t.state==="published"?"draft":"published";try{await L(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),W(!0)}catch(n){console.error(n)}}async function yt(t){if(confirm("Delete this roadmap item?"))try{await L(`/roadmap/${t}`,{method:"DELETE"}),R.delete(t),W(!0)}catch(e){console.error(e)}}var Ve=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,Ge=null,X=new Set,Je=[];async function pe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;ht();let n="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await L(n);if(!o.ok)throw new Error("Service is offline or unreachable.");let d=(await o.json()).events||[];if(Je=d,Ge=Date.now(),k(2,Ge),d.length===0){e.innerHTML=C("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),P(1,0);return}t&&(e.innerHTML="");let m=g=>{let r=g.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return null}let s=r.title||"Untitled Blueprint",l=r.summary||r.body||"No summary provided.",a=r.content||"",c=r.category||"architecture",x=r.affected_services||[],E=r.implementation_path||[],u=new Date(g.timestamp*1e3),v=u.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),y=u.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),w=X.has(g.id),$=w?"display: block;":"display: none;",S=document.createElement("div");S.className=`event-item notification-item event-border-purple cursor-pointer ${w?"expanded":""}`,S.dataset.blueprintId=g.id,S.onclick=function(B){if(this.classList.contains("expanded")){this.classList.remove("expanded"),X.delete(g.id);let O=this.querySelector(".event-details");O&&(O.style.display="none")}else{this.classList.add("expanded"),X.add(g.id);let O=this.querySelector(".event-details");O&&(O.style.display="block")}};let I=x.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${x.join(", ")}</div>`:"",_="";E.length>0&&(_=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${E.map(B=>`<li>${A(B)}</li>`).join("")}
                        </ul>
                    </div>
                `),S.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${v}</span>
                    <span class="event-date">${y}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${c.toUpperCase()}</div>
                    <div class="event-message">${s}</div>
                    <div class="event-details" style="${$}">
                        <div class="event-details-header">
                            <h4>Blueprint Design</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        <div class="blueprint-summary" style="margin-bottom: 10px; font-weight: 500; color: #fff;">
                            ${A(l)}
                        </div>
                        ${I}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${A(a)}</p>
                        </div>
                        ${_}
                    </div>
                </div>
            `;let G=S.querySelector(".close-details-btn");return G&&G.addEventListener("click",B=>{B.stopPropagation(),S.classList.remove("expanded");let z=S.querySelector(".event-details");z&&(z.style.display="none"),X.delete(g.id)}),S},h=Array.from(e.children),f=new Map(h.map(g=>[g.dataset.blueprintId,g])),p=new Set(d.map(g=>g.id));h.forEach(g=>{let r=g.dataset.blueprintId;(!r||!p.has(r))&&g.remove()});let b=null;d.forEach((g,r)=>{let s=f.get(g.id);(!s||t)&&(s&&s.remove(),s=m(g),!s)||(r===0?e.firstElementChild!==s&&e.prepend(s):b&&b.nextElementSibling!==s&&b.after(s),b=s)}),P(2,d.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=C("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function ht(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Je.forEach(n=>X.add(n.id)),pe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.clear(),pe(!0)},e.dataset.listenerAttached="true")}var Ke=()=>`
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
`;async function Te(){await Promise.all([W(),pe()])}var Ye=()=>`
    <div class="notifications-actions">
        <button id="contacts-refresh" class="notif-action-btn"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
        <p>Loading contacts...</p>
    </div>
`,me=null;async function Z(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=()=>Z(),e.dataset.listenerAttached="true");try{let n=await je("/contacts");if(!n.ok)throw new Error("Service unreachable");let i=(await n.json()).members||[];if(me=Date.now(),k(4,me),i.length===0){t.innerHTML=C("empty","No contacts found.","Check your Discord connection.");return}let d={Me:0,"Master User":1,Admin:2,Moderator:3,Contributor:4,User:5,Anyone:6};i.sort((m,h)=>{let f=d[m.level]??10,p=d[h.level]??10;return f!==p?f-p:m.username.localeCompare(h.username)}),t.innerHTML=i.map(m=>{let h=m.color?"#"+m.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",f=m.status==="online"?"#5eff5e":m.status==="idle"?"#ffa500":m.status==="dnd"?"#ff4d4d":"#666",p="#888";m.level==="Me"||m.level==="Master User"?p="#bb86fc":m.level==="Admin"?p="#cf6679":m.level==="Moderator"?p="#03dac6":m.level==="Contributor"&&(p="#ffa500");let b=m.level==="Me",g=b?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",r=b?"2px solid #bb86fc":`1px solid ${h}33`;return`
                <div class="user-profile-section" style="background: ${g}; padding: 15px; border-radius: 8px; border: ${r}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${b?"#bb86fc":h}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${m.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${b?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${f}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${p}; font-weight: 600; text-transform: uppercase;">${b?"DEXTER (ME)":m.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${m.id}</p>
                    </div>
                </div>
            `}).join(""),P(4,i.filter(m=>m.status!=="offline").length)}catch{t.innerHTML=C("offline","Failed to fetch contacts.","The Discord service may be offline.")}}var xt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Xe(t,e){let n=xt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(n=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!n)return t;let o=n.replace(/\{(\w+)\}/g,(i,d)=>e[d]!==void 0&&e[d]!==null?e[d]:i);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var Qe=()=>`
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
`,Q=null,ee=new Set,ae=[],ue="all",wt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},Et={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ze(t){for(let[e,n]of Object.entries(wt))if(n.includes(t))return e;return"system"}function $t(t){return Et[t]||"bx-square-rounded"}async function te(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Tt();let o=`/events?ml=${ue==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let i=await L(o);if(!i.ok)throw new Error("Service is offline or unreachable.");let m=(await i.json()).events||[];m.some(l=>{let a=l.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return!1}return a.type==="messaging.user.joined_server"})&&Z();let f=m;if(ue!=="all"&&(f=m.filter(l=>{let a=l.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return!1}return Ze(a.type)===ue})),ae=f.slice(0,50),Q=Date.now(),k(1,Q),ae.length===0){e.innerHTML=C("empty","No events found for this filter.");return}t&&(e.innerHTML="");let p=l=>{let a=l.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let c=a.type,x=Ze(c),E=$t(c),u=c==="engagement.decision"||c==="messaging.bot.sent_message"||c==="messaging.user.sent_message"||c==="moderation.explicit_content.deleted"||c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.cli.command"||c==="system.analysis.audit"||c==="system.test.completed"||c==="error_occurred"||c==="system.cli.status"||c.startsWith("system.roadmap")||c.startsWith("system.process"),v="event-border-grey";u&&(c==="moderation.explicit_content.deleted"||c==="error_occurred"?v="event-border-red":c==="analysis.link.completed"||c==="analysis.visual.completed"||c==="system.analysis.audit"?v="event-border-purple":c==="system.cli.command"||c==="system.cli.status"?v="event-border-orange":c==="system.test.completed"?v=a.test?.status==="OK"&&a.lint?.status==="OK"&&a.format?.status==="OK"?"event-border-blue":"event-border-red":v="event-border-blue");let y=u?"cursor-pointer":"",w=ee.has(l.id),$=w?"expanded":"",S=w?"display: block;":"display: none;",I=new Date(l.timestamp*1e3),_=I.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),G=I.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),B=Xe(c,a),z=a.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${a.user_level})</span>`:"",O="";if(u){let T="";if(c==="engagement.decision")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${a.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context History:</span>
                            <pre class="detail-pre">${a.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Engagement Output:</span>
                            <pre class="detail-pre">${a.engagement_raw||"None"}</pre>
                        </div>
                    `;else if(c==="messaging.bot.sent_message")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${a.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${a.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Response Output:</span>
                            <pre class="detail-pre">${a.response_raw||"None"}</pre>
                        </div>
                    `;else if(c==="moderation.explicit_content.deleted")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${a.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${a.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Model Output:</span>
                            <pre class="detail-pre">${A(a.raw_output)||"None"}</pre>
                        </div>
                    `;else if(c==="analysis.link.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${A(a.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Description:</span>
                            <pre class="detail-pre">${A(a.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Content Summary:</span>
                            <pre class="detail-pre">${A(a.summary)||"None"}</pre>
                        </div>
                    `;else if(c==="analysis.visual.completed"){let H="";a.base64_preview?H=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(H=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${a.filename}</span>
                        </div>
                        ${H}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${A(a.description)||"None"}</pre>
                        </div>
                    `}else if(c==="system.cli.command")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${a.command||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${a.args||"None"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${a.status||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${a.duration||"N/A"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${a.exit_code!==void 0?a.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Output:</span>
                            <pre class="detail-pre">${A(a.output)||"No output recorded."}</pre>
                        </div>
                    `;else if(c==="system.analysis.audit")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Tier:</span>
                            <span class="detail-value">${a.tier}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${a.model}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Output:</span>
                            <pre class="detail-pre">${A(a.raw_output)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Input (Prompt):</span>
                            <pre class="detail-pre">${A(a.raw_input)}</pre>
                        </div>
                    `;else if(c==="system.test.completed")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${a.service_name}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${a.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Format:</span>
                            <pre class="detail-pre">${a.format?.status||"N/A"}: ${a.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Lint:</span>
                            <pre class="detail-pre">${a.lint?.status||"N/A"}: ${a.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Tests:</span>
                            <pre class="detail-pre">${a.test?.status||"N/A"}: ${a.test?.details||a.test?.message||"OK"}</pre>
                        </div>
                    `;else if(c==="error_occurred")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${a.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Error Message:</span>
                            <pre class="detail-pre">${A(a.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Context:</span>
                            <pre class="detail-pre">${JSON.stringify(a.context||{},null,2)}</pre>
                        </div>
                    `;else if(c==="system.cli.status")T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${a.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${A(a.message)}</pre>
                        </div>
                    `;else if(c==="messaging.user.sent_message"){let H="";a.attachments&&a.attachments.length>0&&(H=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${a.attachments.map(N=>{let be=N.content_type&&N.content_type.startsWith("image/"),ie=(N.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${be?`<div class="attachment-thumb-container"><img src="${N.url}" alt="${N.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${N.url}" target="_blank" class="attachment-link">${N.filename}</a>
                                        <span class="attachment-meta">${N.content_type} \u2022 ${ie}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${a.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${a.content||"(empty)"}</pre>
                        </div>
                        ${H}
                    `}O=`
                    <div class="event-details" style="${S}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${T}
                    </div>
                `}let U=document.createElement("div");if(U.className=`event-item ${v} ${y} ${$}`,U.dataset.eventId=l.id,U.onclick=function(T){if(!u)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),ee.delete(l.id);let D=this.querySelector(".event-details");D&&(D.style.display="none")}else{this.classList.add("expanded"),ee.add(l.id);let D=this.querySelector(".event-details");D&&(D.style.display="block")}},U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${_}</span>
                    <span class="event-date">${G}</span>
                </div>
                <div class="event-icon"><i class='bx ${E}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${x}">${x}</span>
                        ${l.service} ${z}
                    </div>
                    <div class="event-message">${B}</div>
                    ${O}
                </div>
            `,u){let T=U.querySelector(".close-details-btn");T&&T.addEventListener("click",H=>{H.stopPropagation();let D=H.target.closest(".event-item");if(D){D.classList.remove("expanded"),ee.delete(l.id);let N=D.querySelector(".event-details");N&&(N.style.display="none")}})}return U},b=Array.from(e.children),g=new Map(b.map(l=>[l.dataset.eventId,l])),r=new Set(ae.map(l=>l.id));b.forEach(l=>{let a=l.dataset.eventId;(!a||!r.has(a))&&l.remove()});let s=null;ae.forEach((l,a)=>{let c=g.get(l.id);(!c||t)&&(c&&c.remove(),c=p(l),!c)||(a===0?e.firstElementChild!==c&&e.prepend(c):s&&s.nextElementSibling!==c&&s.after(c),s=c)}),Q=Date.now(),k(1,Q)}catch(i){console.error("Error fetching events:",i),e.children.length===0&&(e.innerHTML=C("offline","Failed to load events.","The event service may be offline or unreachable."))}}function Tt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),n=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ae.forEach(o=>ee.add(o.id)),te(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ee.clear(),te(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.querySelectorAll(".filter-btn").forEach(o=>{o.onclick=()=>{n.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),o.classList.add("active"),ue=o.dataset.filter,te(!0)}}),n.dataset.listenerAttached="true")}function et(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var Lt=null;async function Le(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await L("/logs");if(!e.ok)throw new Error("Logs offline");let n=await e.json();if(!n||n.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let o=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],i=n.filter(m=>!o.includes(m.id));i.forEach(m=>{m.logs&&Array.isArray(m.logs)?m.logs.reverse():m.logs=[]}),i.reverse();let d=i.map(m=>{let h=m.logs.join(`
`),f=[...m.logs];if(f.length<25){let b=25-f.length;for(let g=0;g<b;g++)f.push("")}else f.length>25&&(f=f.slice(-25));let p=f.map(b=>ce(b)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${m.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(h)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${m.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${p}</pre>
                </div>
            `}).join("");return t.innerHTML=d,document.querySelectorAll(".copy-logs-btn").forEach(m=>{m.addEventListener("click",()=>{let h=unescape(m.dataset.logs);navigator.clipboard.writeText(h).then(()=>{let f=m.querySelector("i");f.classList.remove("bx-copy"),f.classList.add("bx-check"),setTimeout(()=>{f.classList.remove("bx-check"),f.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(m=>{m.addEventListener("click",async()=>{let h=m.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${h}?`))try{(await L(`/logs?service_id=${h}`,{method:"DELETE"})).ok&&Le()}catch(f){console.error("Error clearing logs:",f)}})}),Lt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var st=()=>`
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
    `;async function Ce(){await Promise.all([at(),St(),At()]),await Le()}var fe=null,ge=null,ve=null;async function nt(){try{return await(await L("/system_monitor")).json()}catch{return null}}async function tt(){try{return await(await L("/system/hardware")).json()}catch{return null}}async function Ct(){try{return await(await L("/processes")).json()}catch{return null}}async function kt(){try{return await(await L("/analyst/status")).json()}catch{return null}}async function St(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),n=document.getElementById("hardware-refresh-btn"),o=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let l="",a=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(l+=`
            <div class="service-widget" style="padding: 10px; min-height: 80px;">
                <div class="service-widget-header" style="margin-bottom: 5px;">
                    <i class='bx bxs-chip'></i>
                    <h3 style="font-size: 0.9em;">Memory</h3>
                </div>
                <div class="service-widget-body">
                    <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${a} GB</span>
                    <span style="font-size: 0.8em; color: #888;">Total RAM</span>
                </div>
            </div>`,s.CPU&&s.CPU.length>0){let c=s.CPU[0];l+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-microchip'></i>
                        <h3 style="font-size: 0.9em;">CPU</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${c.LABEL}">${c.LABEL}</span>
                        <span style="font-size: 0.8em; color: #888;">${c.COUNT} Cores / ${c.THREADS} Threads</span>
                    </div>
                </div>`}if(s.GPU&&s.GPU.length>0&&s.GPU.forEach((c,x)=>{let E=(c.VRAM/1073741824).toFixed(1);l+=`
                    <div class="service-widget" style="padding: 10px; min-height: 80px;">
                        <div class="service-widget-header" style="margin-bottom: 5px;">
                            <i class='bx bxs-component'></i>
                            <h3 style="font-size: 0.9em;">GPU ${x}</h3>
                        </div>
                        <div class="service-widget-body">
                            <span style="font-size: 0.9em; color: #fff; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${c.LABEL}">${c.LABEL}</span>
                            <span style="font-size: 0.8em; color: #888;">${E} GB VRAM</span>
                        </div>
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let c=0,x=0;s.STORAGE.forEach(y=>{c+=y.USED,x+=y.SIZE});let E=(c/(1024*1024*1024)).toFixed(1),u=(x/(1024*1024*1024)).toFixed(1),v=x>0?(c/x*100).toFixed(0):0;l+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${E} / ${u} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${v>90?"#ff4d4d":"#00ff00"}; width: ${v}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=l};if(e&&n){n.dataset.listenerAttached||(n.onclick=async()=>{n.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let l=await tt();l?(o(l),n.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',n.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},n.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let l=await tt();o(l)}}if(!t)return;let i=await nt();if(!i||!i.services){t.innerHTML=C("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}fe=Date.now(),k(3,fe);let d=i.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function m(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function h(s){if(!s||s==="N/A"||s==="unknown")return"-";let l=s.match(/^(\d+\.\d+\.\d+)/);return l?l[0]:s.split(".").slice(0,3).join(".")||"-"}function f(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function p(s){if(!s||s==="N/A"||s==="unknown")return"-";let l=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!l)return"-";let a=parseInt(l[1])||0,c=parseInt(l[2])||0,x=parseInt(l[3])||0,E=parseFloat(l[4])||0,u=a*86400+c*3600+x*60+E,v=Math.floor(u/86400);if(v>0)return`${v}d`;let y=Math.floor(u/3600);if(y>0)return`${y}h`;let w=Math.floor(u/60);return w>0?`${w}m`:`${Math.floor(u)}s`}function b(s){let l=s.status==="online",a=l?"service-widget-online":"service-widget-offline",c=l?"bx-check-circle":"bx-x-circle",x=l?"OK":"BAD",E=s.version?h(s.version.str):"-",u=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",v=s.memory&&s.memory!=="N/A"?s.memory:"-",y=u!=="-"?"#00ff00":"#666",w=u!=="-"?"#fff":"#666",$=v!=="-"?"#00ff00":"#666",S=v!=="-"?"#fff":"#666",I=p(s.uptime),_="";return l?_=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${E}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${I}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${y};"></i>
                        <span style="color: ${w};">${u}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${$};"></i>
                        <span style="color: ${S};">${v}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${a}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${c}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${x}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${f(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let g=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),r=new Set(d.map(s=>s.id));for(let[s,l]of g)r.has(s)||l.remove();d.forEach(s=>{let l=b(s),a=g.get(s.id);a?a.outerHTML!==l&&(a.outerHTML=l):t.insertAdjacentHTML("beforeend",l)})}async function At(){let t=document.getElementById("models-widgets");if(!t)return;let e=await nt();if(!e){t.innerHTML=C("offline","Failed to load model status.");return}ge=Date.now(),k(3,ge);let n=e.models||[],o=e.whisper;Array.from(t.children).forEach(h=>{h.classList.contains("service-widget")||h.remove()});function i(h){let f=h.status==="Ready";return`
                <div class="service-widget ${f?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${f?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${h.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function d(h){let f=h.status==="Downloaded",p=f?"service-widget-online":"service-widget-offline",b=f?"OK":"MISSING",g=f&&h.size>0?`${(h.size/1e9).toFixed(2)} GB`:"-",r=h.name;return h.type==="custom"&&r.endsWith(":latest")&&(r=r.replace(":latest","")),`<div class="service-widget ${p}" data-model-name="${h.name}"><div class="service-widget-header"><i class="bx ${f?"bx-check-circle":"bx-x-circle"}"></i><h3>${r}</h3><span class="service-widget-status">${b}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${h.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${g}</span></div></div></div>`}let m="";if(o&&(m+=i(o)),m+=n.map(d).join(""),!m){t.innerHTML=C("empty","No models found.");return}t.innerHTML!==m&&(t.innerHTML=m)}async function at(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),n=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),i=document.getElementById("analyst-idle-val"),d=document.getElementById("analyst-reset-btn");d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{d.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await L("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{d.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),at()}catch{d.innerHTML="<i class='bx bx-error'></i> Failed"}},d.dataset.listenerAttached="true");let m=await kt();if(m){let r=Math.floor(Date.now()/1e3),s=m.active_tier,l=(a,c,x)=>{if(s===x||x==="guardian"&&s==="tests"){a.textContent="Working",a.style.color="#bb86fc";return}let E=c-r;if(E<=0)a.textContent="Ready",a.style.color="#5eff5e";else{let u=Math.floor(E/60),v=E%60;a.textContent=`${u}m ${v}s`,a.style.color="#fff"}};if(e&&m.guardian&&l(e,m.guardian.next_run,"guardian"),n&&m.architect&&l(n,m.architect.next_run,"architect"),o&&m.strategist&&l(o,m.strategist.next_run,"strategist"),i&&m.system_idle_time!==void 0){let a=m.system_idle_time,c=Math.floor(a/60),x=a%60;i.textContent=`${c}m ${x}s`,a>300?i.style.color="#5eff5e":a>60?i.style.color="#ffa500":i.style.color="#fff"}}else[e,n,o,i].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let h=await Ct(),f=document.getElementById("vitals-processes-val");if(f)if(h){let r=h.length;f.textContent=r>0?`${r} Active`:"Idle",f.style.color=r>0?"#bb86fc":"#fff"}else f.textContent="-",f.style.color="#888";if(h===null){t.innerHTML=C("offline","Failed to load process status.");return}if(ve=Date.now(),k(3,ve),h.length===0){t.innerHTML=C("empty","No active processes."),P(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function p(r){let s=Math.floor(Date.now()/1e3-r.start_time),l=r.retries>0?`<span class="process-retry-badge">Retry ${r.retries}</span>`:"",a=r.channel_id,c={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return c[a]?a=c[a]:/^\d+$/.test(a)&&(a=`Channel ${a}`),`
                <div class="service-widget process-widget" data-channel-id="${r.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${a}</h3>
                        ${l}
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
                </div>`}let b=new Map(Array.from(t.querySelectorAll(".process-widget")).map(r=>[r.dataset.channelId,r])),g=new Set(h.map(r=>r.channel_id));for(let[r,s]of b)g.has(r)||s.remove();h.forEach(r=>{let s=p(r),l=b.get(r.channel_id);l?l.outerHTML!==s&&(l.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),P(3,h.length)}function ke(){let t=Ee(),e=Oe()||"master@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(M).map(i=>`
                    <div class="theme-card ${t===i?"active":""}" data-theme="${i}">
                        <div class="theme-preview theme-preview-${i.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${i}</h3>
                            <p>${i===M.AUTO?"Automatic theme selection.":i===M.DEFAULT?"Simple, black, default.":"Colourful, not bright."}</p>
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
            </div>`}function Se(t){let e=document.querySelector("#main-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(i=>{i.addEventListener("click",function(){let d=this.dataset.theme;Ue(d),t.setContent(ke()),Se(t)})});let n=document.getElementById("notifications-toggle");n&&(n.onclick=async i=>{if(i.target.checked)try{await Notification.requestPermission()!=="granted"&&(i.target.checked=!1)}catch{i.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),i.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=i=>{let d=i.target.checked;localStorage.setItem("easter_analytics_enabled",d),window.EASTER_ANALYTICS_ENABLED=d,window.EASTER_DEBUG_MODE=d})}var ot=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Placeholder for the future Dexter chat interface.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Trigger a manual Tier 1 Guardian system audit.",usage:"dex guardian",category:"cognitive"},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the real-time health of all system services.",usage:"dex status [service]",category:"system"},{id:"build",title:"Build",icon:"bx-package",description:"Build and install the entire ecosystem from source.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Fetch and apply the latest updates for all components.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Execute the comprehensive system-wide test suite.",usage:"dex test [service]",category:"lifecycle"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"Stream or tail logs from any manageable service.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"View detailed hardware vitals and OS-level info.",usage:"dex system [--json]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"View or modify the central service-map.json.",usage:"dex config <service> [field]",category:"system"}],_t=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>
    `;for(let[n,o]of Object.entries(t)){let i=ot.filter(d=>d.category===n);i.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 40px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${o.icon}' style="color: ${o.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${o.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${i.map(d=>`
                        <div class="cli-command-card ${d.dummy?"dummy":""}" data-cmd="${d.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${o.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${d.icon}' style="font-size: 2em; color: ${o.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${d.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${d.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${o.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${d.usage}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)}return e+="</div>",e},_e=!1;function It(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>it(),document.getElementById("terminal-action-btn").onclick=()=>it());let n=document.getElementById("cli-terminal-body");return n.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),_e=!0,n}function it(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),_e=!1}function Ae(t,e,n="output"){if(!_e)return;let o=document.createElement("div");o.className=`terminal-line terminal-${n}`,n==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=ce(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function Mt(t){let e=ot.find(o=>o.id===t);if(!e)return;let n=It(e);Ae(n,`dex ${t}`,"prompt");try{let i=(await L("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),d=new TextDecoder;for(;;){let{value:m,done:h}=await i.read();if(h)break;d.decode(m,{stream:!0}).split(`
`).forEach(b=>{if(b.trim()==="")return;let g="output";b.includes("[ERROR]")?g="error":b.includes("[SUCCESS]")||b.includes("\u2713")?g="success":b.includes("!")&&(g="warning"),Ae(n,b,g)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch(o){Ae(n,`Connection Error: ${o.message}`,"error"),document.getElementById("terminal-status-badge").className="terminal-status status-error",document.getElementById("terminal-status-badge").textContent="Failed"}finally{document.getElementById("terminal-action-btn").style.display="block"}}function lt(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=_t(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.03)"}),e.addEventListener("click",()=>{let n=e.dataset.cmd;if(n==="chat"){alert("Connection to cognitive core pending deployment...");return}Mt(n)})}))}async function Bt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${$e()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function rt(){Bt(),qe(),Be(),window.location.pathname.includes("/dex")&&lt();let t=He();De(t),Ne();let e=document.querySelector("footer"),n=null;function o(){n=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(p=>p.classList.remove("active","inactive"))}function i(p,b=null,g=null){let r=n&&n.id===p.id;if(r&&g!==null){let s=document.querySelector(`#${p.id} .tab[data-tab-index="${g}"]`);s&&s.click(),document.querySelectorAll(".nav-right i").forEach(l=>{let a=l===b;l.classList.toggle("active",a),l.classList.toggle("inactive",!a&&b)});return}n&&n.close(!r),r?n=null:setTimeout(()=>{if(p.open(),n=p,g!==null){let s=document.querySelector(`#${p.id} .tab[data-tab-index="${g}"]`);s&&s.click()}document.querySelectorAll(".nav-right i").forEach(s=>{let l=s===b;s.classList.toggle("active",l),s.classList.toggle("inactive",!l&&b)}),e?.classList.add("hide")},n?220:0)}async function d(p=!1){if(!f.isOpen())return;switch(f.getActiveTabIndex()){case 0:await F(p);break;case 1:await te(p);break;case 2:await Te(p);break;case 3:await Ce(p);break}}async function m(){await Promise.all([F(),te(),Te(),Ce(),Z()]);let p=setInterval(()=>{if(!f.isOpen())return clearInterval(p);let r=f.getActiveTabIndex();r===0&&k(0,K),r===1&&k(1,Q),r===3&&(k(3,ve),k(3,fe),k(3,ge)),r===4&&k(4,me)},1e3),b=setInterval(()=>{if(!f.isOpen())return clearInterval(b);d()},3e3),g=setInterval(()=>{if(!f.isOpen())return clearInterval(g);Z()},6e5)}let h=xe({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),f=xe({id:"main-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Fe(),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:Qe(),"data-tab-index":1},{icon:"bx-bulb",title:"Ideas",content:Ke(),"data-tab-index":2},{icon:"bx-server",title:"System",content:st(),"data-tab-index":3},{icon:"bx-book-content",title:"Contacts",content:Ye(),"data-tab-index":4},{icon:"bx-cog",title:"Settings",content:ke(),"data-tab-index":5}],icon:"bx-layer",onClose:o,onOpen:()=>{m(),setTimeout(()=>Se(f),50)},onTabChange:()=>{d(!0)}});t?(document.getElementById("notif-icon")?.addEventListener("click",p=>i(f,p.currentTarget,0)),document.getElementById("events-icon")?.addEventListener("click",p=>i(f,p.currentTarget,1)),document.getElementById("ideas-icon")?.addEventListener("click",p=>i(f,p.currentTarget,2)),document.getElementById("system-icon")?.addEventListener("click",p=>i(f,p.currentTarget,3)),document.getElementById("contacts-icon")?.addEventListener("click",p=>i(f,p.currentTarget,4)),document.getElementById("settings-icon")?.addEventListener("click",p=>i(f,p.currentTarget,5))):document.getElementById("login-btn")?.addEventListener("click",()=>{i(h),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",p=>{p.preventDefault();try{Pe(document.getElementById("email-input").value),window.location.reload()}catch(b){let g=document.getElementById("login-error");g&&(g.textContent=b.message,g.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rt):rt();})();
//# sourceMappingURL=dex.3a46fc2a.js.map
