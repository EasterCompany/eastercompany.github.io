(()=>{function _e(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Ae(t=!1){let n=`
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
    `,o=document.createElement("nav");o.innerHTML=n,document.body.prepend(o)}function Ie(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function ge(t){let e=null,n=t.onClose||null,o=t.onOpen||null;function a(){if(e){e.classList.add("open"),window.addEventListener("resize",d),o&&setTimeout(o,10);return}let m=document.getElementById("windows-container");m||(m=document.createElement("div"),m.id="windows-container",m.className="windows-container",document.body.appendChild(m)),e=document.createElement("div"),e.id=t.id,e.className="window";let f=t.icon||"bx-window",r="",s="",i;t.tabs&&t.tabs.length>0?(r=`<div class="tab-bar">${t.tabs.map((c,u)=>{let y;return c.icon?y=`<i class="bx ${c.icon}"></i>`:c.title&&c.title.length>0?y=`<span class="tab-glyph">${c.title.charAt(0).toUpperCase()}</span>`:y='<i class="bx bx-question-mark"></i>',`
                    <div class="tab ${u===0?"active":""}" data-tab-index="${u}">
                        ${y}
                        <span class="tab-title">${c.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${u}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,i=`<div class="window-content">${t.tabs.map((c,u)=>`<div class="tab-content ${u===0?"active":""}" data-tab-content="${u}">${c.content}</div>`).join("")}</div>`):(t.title&&(s=`<div class="window-title">${t.title}</div>`),i=`<div class="window-content">${t.content}</div>`);let l=`
            <div class="window-header">
                <i class="bx ${f}"></i>
                ${r}
                ${s}
                <i class="bx bx-x window-close"></i>
            </div>
        `;e.innerHTML=l+i,m.appendChild(e);let x=e.querySelector(".window-close");x&&x.addEventListener("click",h=>{h.stopPropagation(),v()}),window.addEventListener("resize",d),t.tabs&&t.tabs.length>0&&e.querySelectorAll(".tab").forEach(w=>{w.addEventListener("click",()=>{let c=w.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(u=>u.classList.remove("active")),w.classList.add("active"),e.querySelectorAll(".tab-content").forEach(u=>u.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${c}"]`).classList.add("active"),g(w,e)})}),setTimeout(()=>{e.classList.add("open"),o&&o()},10)}function d(){if(!e||!e.classList.contains("open"))return;let m=e.querySelector(".tab.active");m&&g(m,e)}function g(m,f){setTimeout(()=>{let r=f.querySelector(".tab-bar");if(r){let s=Array.from(r.querySelectorAll(".tab")),i=s.indexOf(m),l=r.clientWidth,x=s[Math.max(0,i-2)],h=s[Math.min(s.length-1,i+2)],w=x.offsetLeft-r.offsetLeft-25,u=h.offsetLeft+h.offsetWidth-r.offsetLeft+25-w,y;u<=l?y=w-(l-u)/2:y=m.offsetLeft-r.offsetLeft-l/2+m.offsetWidth/2,r.scrollTo({left:y,behavior:"smooth"})}},350)}function v(m=!1){e&&(window.removeEventListener("resize",d),m?(e.classList.add("switching"),e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},200)):(e.classList.remove("open"),n&&n(),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400)))}function p(m){if(e){let f=e.querySelector(".window-content");f&&(f.innerHTML=m)}}function b(){return e&&e.classList.contains("open")}return{open:a,close:v,setContent:p,isOpen:b,id:t.id}}function Me(){return!0}function Be(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function De(t){localStorage.setItem("easter_user_email",t.trim())}var Ne="easter_theme",D={AUTO:"auto",DEFAULT:"default",ANIMATED:"animated"};function be(){return localStorage.getItem(Ne)||D.AUTO}function it(){let t=window.innerWidth,e=window.innerHeight,n=window.innerHeight===window.screen.height&&window.innerWidth===window.screen.width;return t>1920&&e>1080?D.ANIMATED:(t===1920&&e===1080&&n||t<=1920||e<=1080,D.DEFAULT)}function He(t){if(!Object.values(D).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ne,t),ve(t)}function ve(t,e=!1){let n=document.body,o=t===D.AUTO?it():t;if(e||(n.classList.add("theme-transitioning"),setTimeout(()=>{n.classList.remove("theme-transitioning")},300)),Object.values(D).forEach(a=>{n.classList.remove(`theme-${a}`)}),n.classList.add(`theme-${t}`),o===D.ANIMATED){if(!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else{let a=document.querySelector(".background");a&&(e?a.remove():(a.style.animation="fadeOutBackground 0.4s ease forwards",setTimeout(()=>{a.remove()},400)))}}function ze(){let t=be();if(ve(t,!0),t===D.AUTO){let e;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{ve(D.AUTO)},300)})}}function S(t,e,n=null){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",d=n?`<p class="placeholder-action">${n}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${d}</div>`}function T(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function C(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!n)return;if(!e){n.textContent="Last updated: never";return}let o=Date.now(),a=Math.floor((o-e)/1e3),d;a<60?d=`${a}s ago`:a<3600?d=`${Math.floor(a/60)}m ago`:d=`${Math.floor(a/3600)}h ago`,n.textContent=`Last updated: ${d}`}function O(t,e){let n=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!n)return;let o=n.querySelector(".notification-badge");o&&(e>0?(o.textContent=e>9?"9+":e,o.style.display="flex"):o.style.display="none")}function ie(){let t=document.getElementById("notifications-list");if(!t)return;let e=t.querySelectorAll(".notification-unread").length;O(0,e)}function ye(){return"https://event.easter.company"}var nt="http://127.0.0.1:8100",at={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function ne(t){let e=T(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(a,d)=>{let g=at[d];return g?`<span class="${g}">`:""});let n=(e.match(/<span/g)||[]).length,o=(e.match(/<\/span/g)||[]).length;return n>o&&(e+="</span>".repeat(n-o)),e}var G=null,se=!1;async function E(t,e={}){if(G)try{let a=await fetch(G+t,e);if(a.ok)return a;G=null}catch{G=null}let n=ye(),o=nt;try{let a=await fetch(n+t,e);if(a.ok)return G=n,se&&(console.log("\u2728 Production event service restored."),se=!1),a;throw new Error("Primary failed")}catch{se||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${o}`),se=!0);try{let d=await fetch(o+t,e);if(d.ok)return G=o,d;throw new Error("Fallback failed")}catch(d){throw d}}}var Ue=()=>`
    <div class="notifications-actions">
        <button id="notif-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
        <button id="notif-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="notif-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="notif-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
    <div id="notifications-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading notifications...</p>
    </div>
`,V=null,j=new Set,ae=[];async function q(t=!1){let e=document.getElementById("notifications-list");if(!e)return;ot(),t&&(e.innerHTML="<p>Updating...</p>");let n="/events?ml=1000&format=json&event.type=system.notification.generated";try{let o=await E(n);if(!o.ok)throw new Error("Service is offline or unreachable.");let d=(await o.json()).events||[];V=Date.now(),C(0,V);let g=Date.now(),v=24*60*60*1e3,p=d.filter(c=>{let u=localStorage.getItem(`notification_read_ts_${c.id}`);if(!u)return!0;let y=parseInt(u);return g-y<v});p.sort((c,u)=>{let y=N=>{let _=N.event;if(typeof _=="string")try{_=JSON.parse(_)}catch{return"low"}return(_.priority||"low").toLowerCase()},A=N=>N==="critical"?4:N==="high"?3:N==="medium"?2:1,k=A(y(c)),$=A(y(u));return k!==$?$-k:u.timestamp-c.timestamp}),ae=p;let b=c=>{let u=c.event;if(typeof u=="string")try{u=JSON.parse(u)}catch{return"low"}return(u.priority||"low").toLowerCase()},m=[],r=new Set(p.map(c=>b(c))).size>1;if(p.length>0){let c=null;p.forEach(u=>{let y=b(u);r&&y!==c&&(m.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),c=y),m.push(u)})}if(t&&(e.innerHTML=""),p.length===0){e.innerHTML=S("empty","No notifications yet."),ie();return}let s=c=>{let u=c.event;if(typeof u=="string")try{u=JSON.parse(u)}catch{return null}let y=u.title||"Untitled Notification",A=u.body||"No description provided.",k=u.priority||"low",$=!!u.alert,N=u.category||"system",_=u.related_event_ids||[],H=!!localStorage.getItem(`notification_read_ts_${c.id}`),U=new Date(c.timestamp*1e3),M=U.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=U.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),I=H?"event-border-grey":"event-border-blue";!H&&$&&(I="event-border-red"),H&&(k==="high"||k==="critical")?I="event-border-red":H&&k==="medium"&&(I="event-border-orange");let z=H?"notification-read":"notification-unread",B=j.has(c.id),pe=B?"expanded":"",me=B?"display: block;":"display: none;",ke="",Se="";_.length>0&&(Se=`
                    <div class="event-detail-row">
                        <span class="detail-label">Related Events:</span>
                        <span class="detail-value">${_.map(Q=>`<span class="related-event-id" style="font-family: monospace; opacity: 0.7;">${Q.substring(0,8)}...</span>`).join(", ")}</span>
                    </div>`),ke=`
                <div class="event-detail-row">
                    <span class="detail-label">Priority:</span>
                    <span class="detail-value" style="color: ${k==="high"||k==="critical"?"#ff4d4d":k==="medium"?"#ffa500":"#888"}">${k.toUpperCase()}</span>
                </div>
                <div class="event-detail-block" style="text-align: left;">
                    <span class="detail-label">Insight:</span>
                    <p class="detail-pre" style="white-space: pre-wrap; margin-top: 5px; text-align: left;">${T(A)}</p>
                </div>
                ${Se}
            `;let P=document.createElement("div");P.className=`event-item notification-item ${I} ${z} ${pe} cursor-pointer`,P.dataset.notificationId=c.id,P.onclick=function(Q){if(this.classList.contains("expanded")){this.classList.remove("expanded"),j.delete(c.id);let ee=this.querySelector(".event-details");ee&&(ee.style.display="none")}else{this.classList.add("expanded"),j.add(c.id);let ee=this.querySelector(".event-details");if(ee&&(ee.style.display="block"),!localStorage.getItem(`notification_read_ts_${c.id}`)){localStorage.setItem(`notification_read_ts_${c.id}`,Date.now().toString()),this.classList.add("notification-read"),this.classList.remove("notification-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let fe="event-border-grey";k==="high"||k==="critical"?fe="event-border-red":k==="medium"&&(fe="event-border-orange"),this.classList.add(fe),ie()}}},P.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${M}</span>
                    <span class="event-date">${L}</span>
                </div>
                <div class="event-content">
                    <div class="event-service">${N.toUpperCase()} ${$?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}</div>
                    <div class="event-message">${y}</div>
                    <div class="event-details" style="${me}">
                        <div class="event-details-header">
                            <h4>${$?"Alert":"Notification"} Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${ke}
                    </div>
                </div>
            `;let Ce=P.querySelector(".close-details-btn");return Ce&&Ce.addEventListener("click",Q=>{Q.stopPropagation(),P.classList.remove("expanded");let ue=P.querySelector(".event-details");ue&&(ue.style.display="none"),j.delete(c.id)}),P},i=c=>{let u=document.createElement("div");u.className="notification-divider",u.dataset.notificationId=c.id;let y="#888888";return c.label==="CRITICAL"?y="#ff4d4d":c.label==="HIGH"?y="#ff8888":c.label==="MEDIUM"&&(y="#ffa500"),u.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,u.innerHTML=`<span style="white-space: nowrap;">${c.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,u},l=Array.from(e.children),x=new Map(l.map(c=>[c.dataset.notificationId,c])),h=new Set(m.map(c=>c.id));l.forEach(c=>{let u=c.dataset.notificationId;(!u||!h.has(u))&&c.remove()});let w=null;m.forEach((c,u)=>{let y=x.get(c.id);(!y||t)&&(y&&y.remove(),c.type==="divider"?y=i(c):y=s(c),!y)||(u===0?e.firstElementChild!==y&&e.prepend(y):w&&w.nextElementSibling!==y&&w.after(y),w=y)}),V=Date.now(),C(0,V),ie()}catch(o){console.error("Error fetching notifications:",o),e.children.length===0&&(e.innerHTML=S("offline","Failed to load notifications.","The event service may be offline or unreachable."))}}function ot(){let t=document.getElementById("notif-read-all"),e=document.getElementById("notif-expand-all"),n=document.getElementById("notif-close-all"),o=document.getElementById("notif-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ae.forEach(a=>{localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),q(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ae.forEach(a=>{j.add(a.id),localStorage.getItem(`notification_read_ts_${a.id}`)||localStorage.setItem(`notification_read_ts_${a.id}`,Date.now().toString())}),q(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{j.clear(),q(!0)},n.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let a=Date.now()-1728e5;ae.forEach(d=>{localStorage.setItem(`notification_read_ts_${d.id}`,a.toString())}),j.clear(),q(!0)},o.dataset.listenerAttached="true")}var Pe=()=>`
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
`,R=new Set,Oe=[],K=null;async function F(t=!1){let e=document.getElementById("roadmap-list");if(e){lt();try{let n=await E("/roadmap");if(!n.ok)throw new Error("Offline");let o=await n.json();if(Oe=o,o.length===0){e.innerHTML=S("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let a=b=>{let m=R.has(b.id),f=b.state==="draft",r=b.state==="published",s=b.state==="consumed",i="event-border-grey";r&&(i="event-border-blue"),s&&(i="event-border-purple");let x=new Date(b.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${i} cursor-pointer ${m?"expanded":""}`,h.dataset.itemId=b.id,h.onclick=c=>{if(c.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",R.delete(b.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",R.add(b.id))};let w=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${b.state.toUpperCase()}]</span>`;return h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${x.split(",")[1]}</span>
          <span class="event-date">${x.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${w}</div>
          <div class="event-message" style="white-space: pre-wrap;">${T(b.content)}</div>
          <div class="event-details" style="${m?"display: block;":"display: none;"} ">
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
            ${s?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(b.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `,h.querySelector(".edit-btn")?.addEventListener("click",()=>rt(b)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>ct(b)),h.querySelector(".delete-btn")?.addEventListener("click",()=>dt(b.id)),h.querySelector(".close-details-btn")?.addEventListener("click",c=>{c.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",R.delete(b.id)}),h},d=Array.from(e.children),g=new Map(d.map(b=>[b.dataset.itemId,b])),v=new Set(o.map(b=>b.id));d.forEach(b=>{let m=b.dataset.itemId;(!m||!v.has(m))&&b.remove()});let p=null;o.forEach((b,m)=>{let f=g.get(b.id);(!f||t)&&(f&&f.remove(),f=a(b),!f)||(m===0?e.firstElementChild!==f&&e.prepend(f):p&&p.nextElementSibling!==f&&p.after(f),p=f)})}catch{e.innerHTML=S("error","Failed to load roadmap.")}}}function lt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),n=document.getElementById("roadmap-cancel"),o=document.getElementById("roadmap-expand-all"),a=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{K=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",K=null},n.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let d=document.getElementById("roadmap-editor-input").value;if(!d.trim())return;let g=K?`/roadmap/${K}`:"/roadmap",v=K?"PATCH":"POST";try{await E(g,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:d})}),document.getElementById("roadmap-editor-container").style.display="none",F(!0)}catch(p){console.error(p)}},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{Oe.forEach(d=>R.add(d.id)),F(!0)},o.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{R.clear(),F(!0)},a.dataset.listenerAttached="true")}function rt(t){K=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function ct(t){let e=t.state==="published"?"draft":"published";try{await E(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),F(!0)}catch(n){console.error(n)}}async function dt(t){if(confirm("Delete this roadmap item?"))try{await E(`/roadmap/${t}`,{method:"DELETE"}),R.delete(t),F(!0)}catch(e){console.error(e)}}var qe=()=>`
    <div class="notifications-actions">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
    </div>
    <div id="blueprints-list" class="blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <p>Loading blueprints...</p>
    </div>
`,je=null,J=new Set,Re=[];async function oe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;pt();let n="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let o=await E(n);if(!o.ok)throw new Error("Service is offline or unreachable.");let d=(await o.json()).events||[];if(Re=d,je=Date.now(),C(2,je),d.length===0){e.innerHTML=S("empty","No architectural blueprints generated yet.","The Analyst Worker will generate these when idle."),O(1,0);return}t&&(e.innerHTML="");let g=f=>{let r=f.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return null}let s=r.title||"Untitled Blueprint",i=r.summary||r.body||"No summary provided.",l=r.content||"",x=r.category||"architecture",h=r.affected_services||[],w=r.implementation_path||[],c=new Date(f.timestamp*1e3),u=c.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),y=c.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=J.has(f.id),k=A?"display: block;":"display: none;",$=document.createElement("div");$.className=`event-item notification-item event-border-purple cursor-pointer ${A?"expanded":""}`,$.dataset.blueprintId=f.id,$.onclick=function(H){if(this.classList.contains("expanded")){this.classList.remove("expanded"),J.delete(f.id);let M=this.querySelector(".event-details");M&&(M.style.display="none")}else{this.classList.add("expanded"),J.add(f.id);let M=this.querySelector(".event-details");M&&(M.style.display="block")}};let N=h.length>0?`<div class="blueprint-meta-row"><strong>Affected:</strong> ${h.join(", ")}</div>`:"",_="";w.length>0&&(_=`
                    <div class="blueprint-path">
                        <h5>Implementation Path</h5>
                        <ul>
                            ${w.map(H=>`<li>${T(H)}</li>`).join("")}
                        </ul>
                    </div>
                `),$.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${u}</span>
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
                        ${N}
                        <div class="event-detail-block" style="text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;">
                            <p class="detail-pre" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; text-align: left; color: #ccc;">${T(l)}</p>
                        </div>
                        ${_}
                    </div>
                </div>
            `;let W=$.querySelector(".close-details-btn");return W&&W.addEventListener("click",H=>{H.stopPropagation(),$.classList.remove("expanded");let U=$.querySelector(".event-details");U&&(U.style.display="none"),J.delete(f.id)}),$},v=Array.from(e.children),p=new Map(v.map(f=>[f.dataset.blueprintId,f])),b=new Set(d.map(f=>f.id));v.forEach(f=>{let r=f.dataset.blueprintId;(!r||!b.has(r))&&f.remove()});let m=null;d.forEach((f,r)=>{let s=p.get(f.id);(!s||t)&&(s&&s.remove(),s=g(f),!s)||(r===0?e.firstElementChild!==s&&e.prepend(s):m&&m.nextElementSibling!==s&&m.after(s),m=s)}),O(2,d.length)}catch(o){console.error("Error fetching blueprints:",o),e.children.length===0&&(e.innerHTML=S("offline","Failed to load blueprints.","The event service may be offline or unreachable."))}}function pt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Re.forEach(n=>J.add(n.id)),oe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{J.clear(),oe(!0)},e.dataset.listenerAttached="true")}var Fe=()=>`
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
`;async function he(){await Promise.all([F(),oe()])}var mt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Analysis Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function We(t,e){let n=mt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(n="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(n=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(n=`Analysis Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!n)return t;let o=n.replace(/\{(\w+)\}/g,(a,d)=>e[d]!==void 0&&e[d]!==null?e[d]:a);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(o+=` (Translation: ${e.english_translation})`),o}var Ve=()=>`
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
`,Y=null,X=new Set,te=[],le="all",ut={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed"],moderation:["moderation.explicit_content.deleted"]},ft={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ge(t){for(let[e,n]of Object.entries(ut))if(n.includes(t))return e;return"system"}function gt(t){return ft[t]||"bx-square-rounded"}async function Z(t=!1){let e=document.getElementById("events-timeline");if(!e)return;vt();let o=`/events?ml=${le==="all"?100:250}&format=json&exclude_types=system.notification.generated`;try{let a=await E(o);if(!a.ok)throw new Error("Service is offline or unreachable.");let g=(await a.json()).events||[],v=g;if(le!=="all"&&(v=g.filter(s=>{let i=s.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return!1}return Ge(i.type)===le})),te=v.slice(0,50),Y=Date.now(),C(1,Y),te.length===0){e.innerHTML=S("empty","No events found for this filter.");return}t&&(e.innerHTML="");let p=s=>{let i=s.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let l=i.type,x=Ge(l),h=gt(l),w=l==="engagement.decision"||l==="messaging.bot.sent_message"||l==="messaging.user.sent_message"||l==="moderation.explicit_content.deleted"||l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.cli.command"||l==="system.analysis.audit"||l==="system.test.completed"||l==="error_occurred"||l==="system.cli.status"||l.startsWith("system.roadmap")||l.startsWith("system.process"),c="event-border-grey";w&&(l==="moderation.explicit_content.deleted"||l==="error_occurred"?c="event-border-red":l==="analysis.link.completed"||l==="analysis.visual.completed"||l==="system.analysis.audit"?c="event-border-purple":l==="system.cli.command"||l==="system.cli.status"?c="event-border-orange":l==="system.test.completed"?c=i.test?.status==="OK"&&i.lint?.status==="OK"&&i.format?.status==="OK"?"event-border-blue":"event-border-red":c="event-border-blue");let u=w?"cursor-pointer":"",y=X.has(s.id),A=y?"expanded":"",k=y?"display: block;":"display: none;",$=new Date(s.timestamp*1e3),N=$.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),_=$.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),W=We(l,i),H=i.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${i.user_level})</span>`:"",U="";if(w){let L="";if(l==="engagement.decision")L=`
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
                    `;else if(l==="messaging.bot.sent_message")L=`
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
                    `;else if(l==="moderation.explicit_content.deleted")L=`
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
                    `;else if(l==="analysis.link.completed")L=`
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
                    `;else if(l==="analysis.visual.completed"){let I="";i.base64_preview?I=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url&&(I=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${i.filename}</span>
                        </div>
                        ${I}
                        <div class="event-detail-block">
                            <span class="detail-label">Visual Description:</span>
                            <pre class="detail-pre">${T(i.description)||"None"}</pre>
                        </div>
                    `}else if(l==="system.cli.command")L=`
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
                    `;else if(l==="system.analysis.audit")L=`
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
                    `;else if(l==="system.test.completed")L=`
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
                    `;else if(l==="error_occurred")L=`
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
                    `;else if(l==="system.cli.status")L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${i.status}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Message:</span>
                            <pre class="detail-pre">${T(i.message)}</pre>
                        </div>
                    `;else if(l==="messaging.user.sent_message"){let I="";i.attachments&&i.attachments.length>0&&(I=`
                            <div class="event-detail-block">
                                <span class="detail-label">Attachments:</span>
                                <div class="attachments-grid">${i.attachments.map(B=>{let pe=B.content_type&&B.content_type.startsWith("image/"),me=(B.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${pe?`<div class="attachment-thumb-container"><img src="${B.url}" alt="${B.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${B.url}" target="_blank" class="attachment-link">${B.filename}</a>
                                        <span class="attachment-meta">${B.content_type} \u2022 ${me}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),L=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${i.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <span class="detail-label">Raw Content:</span>
                            <pre class="detail-pre">${i.content||"(empty)"}</pre>
                        </div>
                        ${I}
                    `}U=`
                    <div class="event-details" style="${k}">
                        <div class="event-details-header">
                            <h4>Event Details</h4>
                            <i class="bx bx-x close-details-btn"></i>
                        </div>
                        ${L}
                    </div>
                `}let M=document.createElement("div");if(M.className=`event-item ${c} ${u} ${A}`,M.dataset.eventId=s.id,M.onclick=function(L){if(!w)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),X.delete(s.id);let z=this.querySelector(".event-details");z&&(z.style.display="none")}else{this.classList.add("expanded"),X.add(s.id);let z=this.querySelector(".event-details");z&&(z.style.display="block")}},M.innerHTML=`
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
                    ${U}
                </div>
            `,w){let L=M.querySelector(".close-details-btn");L&&L.addEventListener("click",I=>{I.stopPropagation();let z=I.target.closest(".event-item");if(z){z.classList.remove("expanded"),X.delete(s.id);let B=z.querySelector(".event-details");B&&(B.style.display="none")}})}return M},b=Array.from(e.children),m=new Map(b.map(s=>[s.dataset.eventId,s])),f=new Set(te.map(s=>s.id));b.forEach(s=>{let i=s.dataset.eventId;(!i||!f.has(i))&&s.remove()});let r=null;te.forEach((s,i)=>{let l=m.get(s.id);(!l||t)&&(l&&l.remove(),l=p(s),!l)||(i===0?e.firstElementChild!==l&&e.prepend(l):r&&r.nextElementSibling!==l&&r.after(l),r=l)}),Y=Date.now(),C(1,Y)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=S("offline","Failed to load events.","The event service may be offline or unreachable."))}}function vt(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),n=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{te.forEach(o=>X.add(o.id)),Z(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{X.clear(),Z(!0)},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.querySelectorAll(".filter-btn").forEach(o=>{o.onclick=()=>{n.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),o.classList.add("active"),le=o.dataset.filter,Z(!0)}}),n.dataset.listenerAttached="true")}function Ke(){return`
        <div id="logs-container" class="logs-container">
            <p>Loading logs...</p>
        </div>
    `}var bt=null;async function xe(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await E("/logs");if(!e.ok)throw new Error("Logs offline");let n=await e.json();if(!n||n.length===0)return t.innerHTML='<p style="text-align: center; opacity: 0.5; padding: 20px;">No logs found.</p>',!1;let o=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],a=n.filter(g=>!o.includes(g.id));a.forEach(g=>{g.logs&&Array.isArray(g.logs)?g.logs.reverse():g.logs=[]}),a.reverse();let d=a.map(g=>{let v=g.logs.join(`
`),p=[...g.logs];if(p.length<25){let m=25-p.length;for(let f=0;f<m;f++)p.push("")}else p.length>25&&(p=p.slice(-25));let b=p.map(m=>ne(m)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${g.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(v)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${g.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${b}</pre>
                </div>
            `}).join("");return t.innerHTML=d,document.querySelectorAll(".copy-logs-btn").forEach(g=>{g.addEventListener("click",()=>{let v=unescape(g.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let p=g.querySelector("i");p.classList.remove("bx-copy"),p.classList.add("bx-check"),setTimeout(()=>{p.classList.remove("bx-check"),p.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(g=>{g.addEventListener("click",async()=>{let v=g.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${v}?`))try{(await E(`/logs?service_id=${v}`,{method:"DELETE"})).ok&&xe()}catch(p){console.error("Error clearing logs:",p)}})}),bt=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.innerHTML='<p style="text-align: center; color: #cf6679; padding: 20px;">Failed to load logs.</p>',!1}}var Ye=()=>`
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
            ${Ke()}
        </div>
    `;async function we(){await Promise.all([Ze(),xt(),wt()]),await xe()}var re=null,ce=null,de=null;async function Xe(){try{return await(await E("/system_monitor")).json()}catch{return null}}async function Je(){try{return await(await E("/system/hardware")).json()}catch{return null}}async function yt(){try{return await(await E("/processes")).json()}catch{return null}}async function ht(){try{return await(await E("/analyst/status")).json()}catch{return null}}async function xt(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-info-content"),n=document.getElementById("hardware-refresh-btn"),o=s=>{if(!s){e.innerHTML='<p style="color: #ff4d4d;">Failed to load hardware info.</p>';return}let i="",l=(s.MEMORY_BYTES/(1024*1024*1024)).toFixed(1);if(i+=`
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
                    </div>`}),s.STORAGE&&s.STORAGE.length>0){let x=0,h=0;s.STORAGE.forEach(y=>{x+=y.USED,h+=y.SIZE});let w=(x/(1024*1024*1024)).toFixed(1),c=(h/(1024*1024*1024)).toFixed(1),u=h>0?(x/h*100).toFixed(0):0;i+=`
                <div class="service-widget" style="padding: 10px; min-height: 80px;">
                    <div class="service-widget-header" style="margin-bottom: 5px;">
                        <i class='bx bxs-hdd'></i>
                        <h3 style="font-size: 0.9em;">Storage</h3>
                    </div>
                    <div class="service-widget-body">
                        <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} / ${c} GB</span>
                        <div style="background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; margin-top: 5px;">
                             <div style="background: ${u>90?"#ff4d4d":"#00ff00"}; width: ${u}%; height: 100%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>`}e.innerHTML=i};if(e&&n){n.dataset.listenerAttached||(n.onclick=async()=>{n.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let i=await Je();i?(o(i),n.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML='<p style="color: #ff4d4d;">Failed to refresh.</p>',n.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},n.dataset.listenerAttached="true");let s=e.querySelector("p");if(s&&s.textContent==="Loading hardware info..."){let i=await Je();o(i)}}if(!t)return;let a=await Xe();if(!a||!a.services){t.innerHTML=S("offline","Failed to load system metrics.","The event service may be offline or unreachable.");return}re=Date.now(),C(3,re);let d=a.services||[];Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function g(s){return!s||s==="N/A"||s==="unknown"||s.trim()===""?"-":s}function v(s){if(!s||s==="N/A"||s==="unknown")return"-";let i=s.match(/^(\d+\.\d+\.\d+)/);return i?i[0]:s.split(".").slice(0,3).join(".")||"-"}function p(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function b(s){if(!s||s==="N/A"||s==="unknown")return"-";let i=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!i)return"-";let l=parseInt(i[1])||0,x=parseInt(i[2])||0,h=parseInt(i[3])||0,w=parseFloat(i[4])||0,c=l*86400+x*3600+h*60+w,u=Math.floor(c/86400);if(u>0)return`${u}d`;let y=Math.floor(c/3600);if(y>0)return`${y}h`;let A=Math.floor(c/60);return A>0?`${A}m`:`${Math.floor(c)}s`}function m(s){let i=s.status==="online",l=i?"service-widget-online":"service-widget-offline",x=i?"bx-check-circle":"bx-x-circle",h=i?"OK":"BAD",w=s.version?v(s.version.str):"-",c=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",u=s.memory&&s.memory!=="N/A"?s.memory:"-",y=c!=="-"?"#00ff00":"#666",A=c!=="-"?"#fff":"#666",k=u!=="-"?"#00ff00":"#666",$=u!=="-"?"#fff":"#666",N=b(s.uptime),_="";return i?_=`
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
                        <span style="color: ${A};">${c}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${k};"></i>
                        <span style="color: ${$};">${u}</span>
                    </div>
                </div>`:_='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${l}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${x}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${h}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${p(s.domain&&s.port?`${s.domain}:${s.port}`:"")}</span></div>${_}</div></div>`}let f=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),r=new Set(d.map(s=>s.id));for(let[s,i]of f)r.has(s)||i.remove();d.forEach(s=>{let i=m(s),l=f.get(s.id);l?l.outerHTML!==i&&(l.outerHTML=i):t.insertAdjacentHTML("beforeend",i)})}async function wt(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Xe();if(!e){t.innerHTML=S("offline","Failed to load model status.");return}ce=Date.now(),C(3,ce);let n=e.models||[],o=e.whisper;Array.from(t.children).forEach(v=>{v.classList.contains("service-widget")||v.remove()});function a(v){let p=v.status==="Ready";return`
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
                </div>`}function d(v){let p=v.status==="Downloaded",b=p?"service-widget-online":"service-widget-offline",m=p?"OK":"MISSING",f=p&&v.size>0?`${(v.size/1e9).toFixed(2)} GB`:"-",r=v.name;return v.type==="custom"&&r.endsWith(":latest")&&(r=r.replace(":latest","")),`<div class="service-widget ${b}" data-model-name="${v.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${r}</h3><span class="service-widget-status">${m}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${v.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${f}</span></div></div></div>`}let g="";if(o&&(g+=a(o)),g+=n.map(d).join(""),!g){t.innerHTML=S("empty","No models found.");return}t.innerHTML!==g&&(t.innerHTML=g)}async function Ze(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("analyst-t1-val"),n=document.getElementById("analyst-t2-val"),o=document.getElementById("analyst-t3-val"),a=document.getElementById("analyst-idle-val"),d=document.getElementById("analyst-reset-btn");d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{d.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await E("/analyst/reset?tier=all",{method:"POST"}),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{d.innerHTML="<i class='bx bx-refresh'></i> Reset Analyst"},2e3)},500),Ze()}catch{d.innerHTML="<i class='bx bx-error'></i> Failed"}},d.dataset.listenerAttached="true");let g=await ht();if(g){let r=Math.floor(Date.now()/1e3),s=g.active_tier,i=(l,x,h)=>{if(s===h||h==="guardian"&&s==="tests"){l.textContent="Working",l.style.color="#bb86fc";return}let w=x-r;if(w<=0)l.textContent="Ready",l.style.color="#5eff5e";else{let c=Math.floor(w/60),u=w%60;l.textContent=`${c}m ${u}s`,l.style.color="#fff"}};if(e&&g.guardian&&i(e,g.guardian.next_run,"guardian"),n&&g.architect&&i(n,g.architect.next_run,"architect"),o&&g.strategist&&i(o,g.strategist.next_run,"strategist"),a&&g.system_idle_time!==void 0){let l=g.system_idle_time,x=Math.floor(l/60),h=l%60;a.textContent=`${x}m ${h}s`,l>300?a.style.color="#5eff5e":l>60?a.style.color="#ffa500":a.style.color="#fff"}}else[e,n,o,a].forEach(s=>{s&&(s.textContent="Offline",s.style.color="#ff4d4d")});let v=await yt(),p=document.getElementById("vitals-processes-val");if(p)if(v){let r=v.length;p.textContent=r>0?`${r} Active`:"Idle",p.style.color=r>0?"#bb86fc":"#fff"}else p.textContent="-",p.style.color="#888";if(v===null){t.innerHTML=S("offline","Failed to load process status.");return}if(de=Date.now(),C(3,de),v.length===0){t.innerHTML=S("empty","No active processes."),O(3,0);return}(t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML="");function b(r){let s=Math.floor(Date.now()/1e3-r.start_time),i=r.retries>0?`<span class="process-retry-badge">Retry ${r.retries}</span>`:"",l=r.channel_id,x={"system-discord":"Discord Engine","system-analyst":"Analyst Worker","system-cli-op":"CLI Operation"};return x[l]?l=x[l]:/^\d+$/.test(l)&&(l=`Channel ${l}`),`
                <div class="service-widget process-widget" data-channel-id="${r.channel_id}">
                    <div class="service-widget-header">
                        <i class="bx bx-cog"></i>
                        <h3>${l}</h3>
                        ${i}
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
                </div>`}let m=new Map(Array.from(t.querySelectorAll(".process-widget")).map(r=>[r.dataset.channelId,r])),f=new Set(v.map(r=>r.channel_id));for(let[r,s]of m)f.has(r)||s.remove();v.forEach(r=>{let s=b(r),i=m.get(r.channel_id);i?i.outerHTML!==s&&(i.outerHTML=s):t.insertAdjacentHTML("beforeend",s)}),O(3,v.length)}function Ee(){let t=be(),e=Be()||"master@easter.company",n={enabled:Notification.permission==="granted",supported:"Notification"in window},o=localStorage.getItem("easter_analytics_enabled")!=="false";return`
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

                    <!-- Contributor Profile -->
                    <div class="user-profile-section" style="background: rgba(255, 165, 0, 0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 165, 0, 0.2); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #ffa500; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #000; font-weight: bold; flex-shrink: 0;">
                            C
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #eee; text-align: left;">Contributor</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #ffa500; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">dev@easter.company</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.5; text-align: left;">UUID: 294857103462109285</p>
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

                    <!-- Anyone Profile -->
                    <div class="user-profile-section" style="background: rgba(255, 255, 255, 0.01); padding: 20px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.03); display: flex; align-items: center; gap: 15px;">
                        <div class="user-avatar" style="width: 50px; height: 50px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #666; font-weight: bold; flex-shrink: 0;">
                            *
                        </div>
                        <div class="user-info" style="text-align: left; overflow: hidden;">
                            <h3 style="margin: 0; font-size: 1em; color: #888; text-align: left;">Anyone</h3>
                            <p style="margin: 2px 0 0 0; font-size: 0.85em; color: #555; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">public@easter.company</p>
                            <p style="margin: 6px 0 0 0; font-family: monospace; font-size: 0.7em; opacity: 0.3; text-align: left;">UUID: 000000000000000000</p>
                        </div>
                    </div>
                </div>
            </div>

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
            </div>`}function $e(t){let e=document.querySelector("#main-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(a=>{a.addEventListener("click",function(){let d=this.dataset.theme;He(d),t.setContent(Ee()),$e(t)})});let n=document.getElementById("notifications-toggle");n&&(n.onclick=async a=>{if(a.target.checked)try{await Notification.requestPermission()!=="granted"&&(a.target.checked=!1)}catch{a.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.target.checked=!0)});let o=document.getElementById("analytics-toggle");o&&(o.checked=localStorage.getItem("easter_analytics_enabled")!=="false",o.onclick=a=>{let d=a.target.checked;localStorage.setItem("easter_analytics_enabled",d),window.EASTER_ANALYTICS_ENABLED=d,window.EASTER_DEBUG_MODE=d})}var et=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Placeholder for the future Dexter chat interface.",usage:"Coming soon...",category:"cognitive",dummy:!0},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Trigger a manual Tier 1 Guardian system audit.",usage:"dex guardian",category:"cognitive"},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the real-time health of all system services.",usage:"dex status [service]",category:"system"},{id:"build",title:"Build",icon:"bx-package",description:"Build and install the entire ecosystem from source.",usage:"dex build [major|minor|patch]",category:"lifecycle"},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Fetch and apply the latest updates for all components.",usage:"dex update",category:"lifecycle"},{id:"test",title:"Test",icon:"bx-check-shield",description:"Execute the comprehensive system-wide test suite.",usage:"dex test [service]",category:"lifecycle"},{id:"logs",title:"Logs",icon:"bx-terminal",description:"Stream or tail logs from any manageable service.",usage:"dex logs <service> [-f]",category:"system"},{id:"system",title:"System Info",icon:"bx-info-square",description:"View detailed hardware vitals and OS-level info.",usage:"dex system [--json]",category:"system"},{id:"config",title:"Config",icon:"bx-slider-alt",description:"View or modify the central service-map.json.",usage:"dex config <service> [field]",category:"system"}],Et=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>
    `;for(let[n,o]of Object.entries(t)){let a=et.filter(d=>d.category===n);a.length!==0&&(e+=`
            <div class="cli-category-section" style="margin-bottom: 40px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${o.icon}' style="color: ${o.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${o.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${a.map(d=>`
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
        `)}return e+="</div>",e},Te=!1;function $t(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Qe(),document.getElementById("terminal-action-btn").onclick=()=>Qe());let n=document.getElementById("cli-terminal-body");return n.innerHTML="",document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Te=!0,n}function Qe(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Te=!1}function Le(t,e,n="output"){if(!Te)return;let o=document.createElement("div");o.className=`terminal-line terminal-${n}`,n==="prompt"?o.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:o.innerHTML=ne(e),t.appendChild(o),t.scrollTop=t.scrollHeight}async function Lt(t){let e=et.find(o=>o.id===t);if(!e)return;let n=$t(e);Le(n,`dex ${t}`,"prompt");try{let a=(await E("/cli/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:t,args:[]})})).body.getReader(),d=new TextDecoder;for(;;){let{value:g,done:v}=await a.read();if(v)break;d.decode(g,{stream:!0}).split(`
`).forEach(m=>{if(m.trim()==="")return;let f="output";m.includes("[ERROR]")?f="error":m.includes("[SUCCESS]")||m.includes("\u2713")?f="success":m.includes("!")&&(f="warning"),Le(n,m,f)})}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed"}catch(o){Le(n,`Connection Error: ${o.message}`,"error"),document.getElementById("terminal-status-badge").className="terminal-status status-error",document.getElementById("terminal-status-badge").textContent="Failed"}finally{document.getElementById("terminal-action-btn").style.display="block"}}function tt(){let t=document.getElementById("cli-interface-container");t&&(t.innerHTML=Et(),t.querySelectorAll(".cli-command-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-5px)",e.style.borderColor="rgba(255,255,255,0.15)",e.style.backgroundColor="rgba(255,255,255,0.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.borderColor="rgba(255,255,255,0.05)",e.style.backgroundColor="rgba(255,255,255,0.03)"}),e.addEventListener("click",()=>{let n=e.dataset.cmd;if(n==="chat"){alert("Connection to cognitive core pending deployment...");return}Lt(n)})}))}async function Tt(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${ye()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable. Redirecting to 404."),window.location.href="/404.html"}}function st(){Tt(),ze(),_e(),window.location.pathname.includes("/dex")&&tt();let t=Me();Ae(t),Ie();let e=document.querySelector("footer"),n=null;function o(){n=null,e?.classList.remove("hide"),document.querySelectorAll(".nav-right i").forEach(p=>p.classList.remove("active","inactive"))}function a(p,b=null,m=null){let f=n&&n.id===p.id;if(f&&m!==null){let r=document.querySelector(`#${p.id} .tab[data-tab-index="${m}"]`);r&&r.click(),document.querySelectorAll(".nav-right i").forEach(s=>{let i=s===b;s.classList.toggle("active",i),s.classList.toggle("inactive",!i&&b)});return}n&&n.close(!f),f?n=null:setTimeout(()=>{if(p.open(),n=p,m!==null){let r=document.querySelector(`#${p.id} .tab[data-tab-index="${m}"]`);r&&r.click()}document.querySelectorAll(".nav-right i").forEach(r=>{let s=r===b;r.classList.toggle("active",s),r.classList.toggle("inactive",!s&&b)}),e?.classList.add("hide")},n?220:0)}async function d(){await Promise.all([q(),Z(),he(),we()]);let p=setInterval(()=>{if(!v.isOpen())return clearInterval(p);C(0,V),C(1,Y),C(3,de),C(3,re),C(3,ce)},1e3),b=setInterval(()=>{if(!v.isOpen())return clearInterval(b);q(),Z(),he(),we()},3e3)}let g=ge({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in",onClose:o}),v=ge({id:"main-window",tabs:[{icon:"bx-bell",title:"Notifications",content:Ue(),"data-tab-index":0},{icon:"bx-calendar-event",title:"Events",content:Ve(),"data-tab-index":1},{icon:"bx-bulb",title:"Ideas",content:Fe(),"data-tab-index":2},{icon:"bx-server",title:"System",content:Ye(),"data-tab-index":3},{icon:"bx-cog",title:"Settings",content:Ee(),"data-tab-index":4}],icon:"bx-layer",onClose:o,onOpen:()=>{d(),setTimeout(()=>$e(v),50)}});t?(document.getElementById("notif-icon")?.addEventListener("click",p=>a(v,p.currentTarget,0)),document.getElementById("events-icon")?.addEventListener("click",p=>a(v,p.currentTarget,1)),document.getElementById("ideas-icon")?.addEventListener("click",p=>a(v,p.currentTarget,2)),document.getElementById("system-icon")?.addEventListener("click",p=>a(v,p.currentTarget,3)),document.getElementById("settings-icon")?.addEventListener("click",p=>a(v,p.currentTarget,4))):document.getElementById("login-btn")?.addEventListener("click",()=>{a(g),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",p=>{p.preventDefault();try{De(document.getElementById("email-input").value),window.location.reload()}catch(b){let m=document.getElementById("login-error");m&&(m.textContent=b.message,m.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",st):st();})();
//# sourceMappingURL=dex.131c137b.js.map
