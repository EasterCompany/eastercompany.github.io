"use strict";(()=>{function lt(){if(!document.querySelector(".grid-overlay")){let t=document.createElement("div");t.className="grid-overlay",document.body.prepend(t)}}function ct(){let t=window.location.pathname,e=t==="/"||t==="/index.html",s=`
        <div class="nav-left" id="nav-left-wrapper" style="gap: 0;">
            ${`
        <div id="nav-left-container" style="display: flex; align-items: center; transition: transform 0.2s ease; gap: 5px; cursor: ${e?"default":"pointer"};">
            <i class='bx bx-chevron-left' id="nav-chevron" style="font-size: 28px; color: #fff; display: ${e?"none":"block"};"></i>
            <div class="navbar-favicon"></div>
        </div>
    `}
        </div>
        <div class="nav-center" id="nav-window-switcher">
            <!-- Window buttons injected here by main.js -->
        </div>
        
        <div class="nav-right">
            <div id="dexter-menu-container" style="position: relative;">
                <button id="dexter-menu-btn" class="nav-btn" title="Dexter Menu"><img src="/static/assets/logo/dexter-icon.svg" class="dexter-nav-icon" alt="Dexter Icon" /></button>
                <div id="dexter-nav-badge" class="notification-badge" style="position: absolute; top: 0; right: -2px; width: 8px; height: 8px; padding: 0; min-width: 0; display: none; box-shadow: 0 0 5px #ff4444;"></div>
            </div>
            <button id="docs-icon" class="nav-btn" title="Documentation Archive"><i class='bx bx-book-open'></i></button>
            <button id="settings-icon" class="nav-btn" title="Settings"><i class='bx bx-cog'></i></button>
            <button id="close-all-windows" class="nav-btn" title="Close Window" style="color: #ff4444; margin-left: 10px; opacity: 0.6; display: none;"><i class='bx bx-x-circle'></i></button>
        </div>
    
    `,r=document.createElement("nav");r.innerHTML=s,document.body.prepend(r);let o=document.createElement("div");o.id="dexter-dropdown",o.className="dexter-dropdown",o.innerHTML=`
        <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
        <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
        <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
        <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
        <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
    `,document.body.appendChild(o)}function ke(t){let e=window.location.pathname,a=e==="/"||e==="/index.html",n=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!n||!s||(t||!a?(n.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{n.style.transform="translateX(-3px)"},s.onmouseleave=()=>{n.style.transform="translateX(0)"}):(n.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function dt(){if(document.querySelector("footer"))return;let t=`
        <a href="/dexter" class="footer-brand-left">DEXTER M.XIV</a>
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-facebook'></i></a>
            <a href="https://linkedin.com/company/72223947" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin'></i></a>
            <a href="https://instagram.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
            <a href="https://twitter.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter'></i></a>
            <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
            <a href="https://youtube.com/@eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-youtube'></i></a>
        </div>
        <a href="/contribute" class="footer-brand-right">CONTRIBUTE</a>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var pt=1e3;function re(t){let e=null,a=t.onClose||null,n=t.onOpen||null;function s(){e&&(e.style.zIndex=(++pt).toString())}function r(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",o),n&&setTimeout(n,10);return}let w=document.getElementById("windows-container");w||(w=document.createElement("div"),w.id="windows-container",w.className="windows-container",document.body.appendChild(w)),e=document.createElement("div"),e.id=t.id,e.className="window",t.className&&e.classList.add(t.className),t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=(++pt).toString(),e.addEventListener("mousedown",s);let b=t.icon||"bx-window",i="",u="",L,I='<div class="window-bottom-spacer"></div>';t.tabs&&t.tabs.length>0?(i=`<div class="tab-bar">${t.tabs.map((y,x)=>{let d=y.icon?`<i class="bx ${y.icon}"></i>`:`<span class="tab-glyph">${y.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${x===0?"active":""}" data-tab-index="${x}">
                        ${d}
                        <span class="tab-title">${y.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${x}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,L=`<div class="window-content">${t.tabs.map((y,x)=>`<div class="tab-content ${x===0?"active":""}" data-tab-content="${x}">${y.content}${I}</div>`).join("")}</div>`):(t.title&&(u=`<div class="window-title">${t.title}</div>`),L=`<div class="window-content">${t.content||""}${I}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${i}
                ${u}
                <i class="bx bx-x window-close"></i>
            </div>
            ${L}
        `,w.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",v=>{v.stopPropagation(),c()}),window.addEventListener("resize",o),t.tabs&&e.querySelectorAll(".tab").forEach(v=>{v.addEventListener("click",()=>{if(!e)return;let f=v.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),v.classList.add("active"),e.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active"));let y=e.querySelector(`.tab-content[data-tab-content="${f}"]`);y&&y.classList.add("active"),p(v,e)})}),setTimeout(()=>{e&&e.classList.add("open"),n&&n()},10)}function o(){if(!e||!e.classList.contains("open"))return;let w=e.querySelector(".tab.active");w&&p(w,e)}function p(w,b){setTimeout(()=>{let i=b.querySelector(".tab-bar");if(!i)return;let u=Array.from(i.querySelectorAll(".tab")),L=u.indexOf(w),I=i.clientWidth,v=u[Math.max(0,L-2)],f=u[Math.min(u.length-1,L+2)],y=i,x=v.offsetLeft-y.offsetLeft-25,l=f.offsetLeft+f.offsetWidth-y.offsetLeft+25-x,$=l<=I?x-(I-l)/2:w.offsetLeft-y.offsetLeft-I/2+w.offsetWidth/2;i.scrollTo({left:$,behavior:"smooth"})},350)}function c(w=!1){e&&(window.removeEventListener("resize",o),w?(e.remove(),e=null):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e?.remove(),e=null},400)))}function g(w){t.content=w;let b=e?.querySelector(".window-content");b&&(b.innerHTML=w)}function k(){return!!(e&&e.classList.contains("open"))}return{open:r,close:c,setContent:g,isOpen:k,focus:s,id:t.id}}var mt="easter_theme",se={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function Ke(){return localStorage.getItem(mt)||se.DARK}function ut(t){if(!Object.values(se).includes(t))throw new Error("Invalid theme");localStorage.setItem(mt,t),ft(t)}function ft(t){let e=document.body;Object.values(se).forEach(r=>{e.classList.remove(`theme-${r}`)}),e.classList.add(`theme-${t}`);let a=document.querySelector('meta[name="theme-color"]');a||(a=document.createElement("meta"),a.name="theme-color",document.getElementsByTagName("head")[0].appendChild(a));let n={[se.DARK]:"#050507",[se.LIGHT]:"#FFFFFF",[se.LEGACY]:"#000000"},s=n[t]||n[se.DARK];if(a.setAttribute("content",s),!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}e.classList.add("is-animated")}function gt(){let t=Ke();ft(t)}function G(t,e,a=null,n="default"){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",o=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder" data-placeholder-id="${n}"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${e}</p>${o}</div>`}function O(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function pe(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let n=Date.now(),s=Math.floor((n-e)/1e3),r;s<60?r=`${s}s ago`:s<3600?r=`${Math.floor(s/60)}m ago`:r=`${Math.floor(s/3600)}h ago`,a.textContent=`Last updated: ${r}`}var ss=0;function vt(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let n=a.querySelector(".notification-badge");n&&(e>0?(n.textContent=e>9?"9+":e.toString(),n.style.display="flex"):n.style.display="none")}var le=0,de=0;function yt(t){le=t,Ie()}function Ie(){let t=le+de;ss=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let a=document.getElementById("alerts-menu-item");if(a){let o=a.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="auto",a.appendChild(o)),o.textContent=le>9?"9+":le.toString(),o.style.display=le>0?"flex":"none"}let n=document.getElementById("workspace-menu-item");if(n){let o=n.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="auto",n.appendChild(o)),o.textContent=de>9?"9+":de.toString(),o.style.display=de>0?"flex":"none"}let s=document.getElementById("switch-alerts");if(s){let o=s.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="8px",s.appendChild(o)),o.textContent=le>9?"9+":le.toString(),o.style.display=le>0?"flex":"none"}let r=document.getElementById("switch-workspace");if(r){let o=r.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="8px",r.appendChild(o)),o.textContent=de>9?"9+":de.toString(),o.style.display=de>0?"flex":"none"}}function Xe(){let t=document.getElementById("alerts-list");if(!t)return;le=t.querySelectorAll(".alert-unread:not(.priority-low)").length,Ie()}async function xt(){try{de=(await(await H("/roadmap/stats")).json()).open_issues||0,Ie()}catch(t){console.error("Failed to update open issue count:",t)}}function ns(){return"https://event.easter.company"}function is(){return"https://discord.easter.company"}var as="http://127.0.0.1:8100",os="http://127.0.0.1:8300",rs={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function qe(t){let e=O(t);if(!e)return e;e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,r)=>{let o=rs[r];return o?`<span class="${o}">`:""});let a=(e.match(/<span/g)||[]).length,n=(e.match(/<\/span/g)||[]).length;return a>n&&(e+="</span>".repeat(a-n)),e}function ce(t){if(!t)return"";let e=O(t);return e&&(e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^<strong>(.*)<\/strong>$/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(a,n)=>{let s=n.split("|").map(r=>r.trim());return s.every(r=>r.match(/^:?-+:?$/))?"":`<div class="md-table-row">${s.map(r=>`<span class="md-table-cell">${r}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e)}function ae(){let t=document.getElementById("windows-container"),e=t?parseInt(t.getAttribute("data-count")||"0"):0,a=document.querySelector(".profile-overlay.active"),n=document.querySelector("#cli-terminal-overlay.active");return e>0||!!a||!!n}var ls="https://sterling-javelin-12539.upstash.io",cs="AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw";function z(){return window.location.hostname.includes("easter.company")}var R=null,be={lastDashboard:0,lastFrontend:0},Ye=!1,ht=0,wt="dex_dashboard_snapshot";function ds(){let t=localStorage.getItem(wt);if(t)try{let e=JSON.parse(t);R=e,be.lastDashboard=e.timestamp?e.timestamp*1e3:0}catch{R=null}}async function bt(){if(!(!z()||Ye)){Ye=!0,ht=Math.floor(Date.now()/1e3);try{let t=await us("GET","state:dashboard:full");if(t)try{let e=JSON.parse(t);R=e,be.lastDashboard=e.timestamp?e.timestamp*1e3:Date.now(),be.lastFrontend=Date.now(),localStorage.setItem(wt,JSON.stringify(e))}catch(e){console.error("Failed to parse dashboard snapshot:",e)}}finally{Ye=!1}}}function ps(){if(!R||!R.agent_status)return;let t=R.agent_status;t.system&&typeof t.system.state_time=="number"&&(t.system.state_time+=1)}async function ms(){if(!z())return;ds();let t=Math.floor(Date.now()/1e3),e=R?t-R.timestamp:1/0;(!R||e>120)&&await bt(),setInterval(()=>{let a=new Date,n=Math.floor(Date.now()/1e3),s=R?n-R.timestamp:1/0,r=n-ht,o=a.getSeconds()===59,p=s>300,c=r>60;(o&&c||p&&c)&&bt(),ps()},1e3)}z()&&ms();async function us(t,...e){try{let n=await(await fetch(ls,{method:"POST",headers:{Authorization:`Bearer ${cs}`},body:JSON.stringify([t,...e])})).json();if(n.error)throw new Error(n.error);return n.result}catch(a){return console.error("Upstash Error:",a),null}}var Se=null,Le=null,Oe=!1,je=!1;async function H(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t.startsWith("/system_monitor")||t.startsWith("/system/status"))return new Response(JSON.stringify(R.monitor),{status:200});if(t.startsWith("/system/options"))return new Response(JSON.stringify(R.options||{}),{status:200});if(t.startsWith("/processes"))return new Response(JSON.stringify(R.processes),{status:200});if(t.startsWith("/events")){let s=new URLSearchParams(t.split("?")[1]||""),r=s.get("type")||s.get("event.type"),o=s.get("category"),p=s.get("order")||"desc",c=[];return r==="system.notification.generated"?c=[...R.alerts||[]]:r==="system.blueprint.generated"||t.includes("event.type=system.blueprint.generated")?c=[...R.blueprints||[]]:o==="messaging"?c=[...R.messaging_events||[]]:o==="system"?c=[...R.system_events||[]]:o==="cognitive"?c=[...R.cognitive_events||[]]:o==="moderation"?c=[...R.moderation_events||[]]:c=[...R.events||[]],p==="asc"?c.sort((g,k)=>g.timestamp-k.timestamp):c.sort((g,k)=>k.timestamp-g.timestamp),new Response(JSON.stringify({events:c,count:c.length}),{status:200})}if(t.startsWith("/logs"))return new Response(JSON.stringify([]),{status:200});if(t.startsWith("/system/hardware"))return new Response(JSON.stringify({}),{status:200});if(t.startsWith("/agent/status")||t.startsWith("/guardian/status"))return new Response(JSON.stringify(R.agent_status||{}),{status:200});if(t.startsWith("/roadmap/stats"))return new Response(JSON.stringify({open_issues:R.open_issue_count||0}),{status:200});if(t.startsWith("/profile/")){let s=t.split("/")[2],r=R.profiles?R.profiles[s]:null;return r?new Response(JSON.stringify(r),{status:200}):new Response(JSON.stringify({error:"Profile not found"}),{status:404})}return t.startsWith("/web/history")?new Response(JSON.stringify(R.web_history||[]),{status:200}):t.startsWith("/roadmap")?new Response(JSON.stringify(R.github_issues||[]),{status:200}):t.startsWith("/chores")?new Response(JSON.stringify(R.chores||[]),{status:200}):new Response(JSON.stringify({error:"Not available in public demo"}),{status:404})}if(Se)try{let s=await fetch(Se+t,e);if(s.ok)return s;Se=null}catch{Se=null}let a=ns(),n=as;window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&!z()&&(n=`http://${window.location.hostname}:8100`);try{let s=await fetch(a+t,e);if(s.ok)return Se=a,Oe&&(console.log("\u2728 Production event service restored."),Oe=!1),s;throw new Error("Primary failed")}catch{Oe||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${n}`),Oe=!0);try{let r=await fetch(n+t,e);if(r.ok)return Se=n,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function ve(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t==="/contacts")return new Response(JSON.stringify(R.contacts||{members:[]}),{status:200});if(t.startsWith("/member/")){let s=t.split("/")[2],r=(R.contacts?.members||[]).find(o=>o.id===s);return r?new Response(JSON.stringify(r),{status:200}):new Response(JSON.stringify({error:"Member not found"}),{status:404})}return new Response(JSON.stringify({error:"Discord API not public"}),{status:404})}if(Le)try{let s=await fetch(Le+t,e);if(s.ok)return s;Le=null}catch{Le=null}let a=is(),n=os;window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&!z()&&(n=`http://${window.location.hostname}:8300`);try{let s=await fetch(a+t,e);if(s.ok)return Le=a,je&&(console.log("\u2728 Production discord service restored."),je=!1),s;throw new Error("Primary failed")}catch{je||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${n}`),je=!0);try{let r=await fetch(n+t,e);if(r.ok)return Le=n,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Et=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-bell' style="color: #bb86fc;"></i>
        <h2>Alerts</h2>
        <div id="alerts-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button id="alerts-read-all" class="notif-action-btn" title="Read All"><i class='bx bx-check-double'></i></button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="alerts-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
            <button id="alerts-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
            <button id="alerts-clear" class="notif-action-btn danger" style="${z()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
        </div>
    </div>
    <div id="alerts-list" class="alerts-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading alerts...</p>
        </div>
    </div>
`,Ue=null,ye=new Set,Fe=[];async function me(t=!1){let e=document.getElementById("alerts-list");if(!e)return;fs(),t&&(e.innerHTML="<p>Updating...</p>");let a="/events?ml=1000&format=json&event.type=system.notification.generated";try{let n=await H(a);if(!n.ok)throw new Error("Service is offline or unreachable.");let r=(await n.json()).events||[];Ue=Date.now(),pe(0,Ue);let o=Date.now(),p=24*60*60*1e3,c=r.filter(f=>{let y=localStorage.getItem(`alert_read_ts_${f.id}`);if(!y)return!0;let x=parseInt(y);return o-x<p});c.sort((f,y)=>{let x=E=>{let m=E.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return"low"}return(m.priority||"low").toLowerCase()},d=E=>E==="critical"?4:E==="high"?3:E==="medium"?2:1,l=d(x(f)),$=d(x(y));return l!==$?$-l:y.timestamp-f.timestamp}),Fe=c;let g=f=>{let y=f.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return"low"}return(y.priority||"low").toLowerCase()},k=[];if(c.length===0)k.push({id:"placeholder-empty",type:"placeholder",message:"No alerts, all systems nominal"});else{let y=new Set(c.map(d=>g(d))).size>1,x=null;c.forEach(d=>{let l=g(d);y&&l!==x&&(k.push({id:`divider-${l}`,type:"divider",label:l.toUpperCase()}),x=l),k.push(d)})}t&&(e.innerHTML="");let w=f=>{let y=f.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return null}let x=(y.title||"Untitled Alert").trim(),d=(y.body||"No description provided.").trim(),l=y.summary||"",$=y.content||"",E=y.protocol||"",m=(y.priority||"low").toLowerCase(),h=!!y.alert,A=(y.category||"system").trim(),M=y.related_event_ids||[],B=y.audit_event_id,q=!!localStorage.getItem(`alert_read_ts_${f.id}`),Y=new Date(f.timestamp*1e3),_=Y.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=Y.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=q?"event-border-grey":"event-border-blue";!q&&h&&(S="event-border-red"),q&&(m==="high"||m==="critical")?S="event-border-red":q&&m==="medium"&&(S="event-border-orange");let C=q?"alert-read":"alert-unread",P=ye.has(f.id),D=P?"expanded":"",K=P?"display: block;":"display: none;",U="",j="";M.length>0&&(j=`
            <div style="flex: 1; min-width: 150px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    ${M.map(Z=>`<a href="#" onclick="window.dexter.viewEvent('${Z}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${Z.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let F="";B&&(F=`
            <div style="flex: 1; min-width: 120px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Audit</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    <a href="#" onclick="window.dexter.viewEvent('${B}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3); white-space: nowrap;">${B.substring(0,8)}...</a>
                </div>
            </div>`);let V="";E&&(V=`
            <div style="flex: 1; min-width: 100px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${E}</div>
            </div>`);let ee="";$?ee=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="md-para" style="color: #ddd; font-size: 0.85em; white-space: pre-wrap; line-height: 1.6; text-align: left;">${ce($)}</div>
            </div>
        `:ee=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="md-para" style="color: #fff; white-space: pre-wrap; line-height: 1.6; text-align: left;">${ce(d)}</div>
            </div>
        `,U=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${y.related_services&&y.related_services.length>0?y.related_services.join(", "):y.related||"SYSTEM"}</div>
                    </div>
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${A}</div>
                    </div>
                    ${V}
                    ${F}
                    ${j}
                </div>

                ${ee}
            `;let X=document.createElement("div");X.className=`event-item notification-item ${S} ${C} ${D} cursor-pointer priority-${m}`,X.dataset.alertId=f.id,X.onclick=function(Z){let W=this;if(W.classList.contains("expanded")){W.classList.remove("expanded"),ye.delete(f.id);let ge=W.querySelector(".event-details");ge&&(ge.style.display="none")}else{W.classList.add("expanded"),ye.add(f.id);let ge=W.querySelector(".event-details");if(ge&&(ge.style.display="block"),!localStorage.getItem(`alert_read_ts_${f.id}`)){localStorage.setItem(`alert_read_ts_${f.id}`,Date.now().toString()),W.classList.add("alert-read"),W.classList.remove("alert-unread"),W.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ce="event-border-grey";m==="high"||m==="critical"?Ce="event-border-red":m==="medium"&&(Ce="event-border-orange"),W.classList.add(Ce),Xe()}}};let Me=`${E?E.toUpperCase():"GUARDIAN"} ALERT: ${l||x}`,Ve={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[A]||"bx-bell",Ne=m==="high"||m==="critical"?"#ff4d4d":m==="medium"?"#ffa500":"#888";X.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${_}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-icon"><i class='bx ${Ve}'></i></div>
                <div class="event-content" style="text-align: left;">
                    <div class="event-service">
                        DEXTER <span class="alert-badge" style="color: ${Ne}; font-size: 0.8em; margin-left: 5px;">[${m.toUpperCase()}]</span>
                    </div>
                    <div class="event-message">${ce(Me)}</div>
                    <div class="event-details" style="${K}">
                        ${U}
                    </div>
                </div>
            `;let fe=X.querySelector(".event-details");fe&&fe.addEventListener("click",Z=>{Z.stopPropagation()});let J=X.querySelector(".close-details-btn");return J&&J.addEventListener("click",Z=>{Z.stopPropagation(),X.classList.remove("expanded");let W=X.querySelector(".event-details");W&&(W.style.display="none"),ye.delete(f.id)}),X},b=f=>{let y=document.createElement("div");y.className="notification-divider",y.dataset.alertId=f.id;let x="#888888";return f.label==="CRITICAL"?x="#ff4d4d":f.label==="HIGH"?x="#ff8888":f.label==="MEDIUM"&&(x="#ffa500"),y.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${x}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,y.innerHTML=`<span style="white-space: nowrap;">${f.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${x}44, transparent); flex-grow: 1;"></div>`,y},i=f=>{let y=document.createElement("div");y.innerHTML=G("empty",f.message,null,f.id);let x=y.firstElementChild;return x.dataset.alertId=f.id,x},u=Array.from(e.children),L=new Map(u.map(f=>[f.dataset.alertId,f])),I=new Set(k.map(f=>f.id));u.forEach(f=>{let y=f.dataset.alertId;(!y||!I.has(y))&&f.remove()});let v=null;k.forEach((f,y)=>{let x=L.get(f.id);if(!x||t){if(x&&x.remove(),f.type==="divider")x=b(f);else if(f.type==="placeholder")x=i(f);else{let d=w(f);if(!d)return;x=d}if(!x)return}y===0?e.firstElementChild!==x&&e.prepend(x):v&&v.nextElementSibling!==x&&v.after(x),v=x}),Ue=Date.now(),pe(0,Ue),Xe()}catch(n){console.error("Error fetching alerts:",n),e.children.length===0&&(e.innerHTML=G("offline","Failed to load alerts.","The event service may be offline."))}}function fs(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),a=document.getElementById("alerts-close-all"),n=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Fe.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),me(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Fe.forEach(s=>{ye.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),me(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{ye.clear(),me(!0)},a.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await H("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;Fe.forEach(r=>{localStorage.setItem(`alert_read_ts_${r.id}`,s.toString())}),ye.clear(),me(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}async function Ze(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await H(t);if(!e.ok)return;let n=(await e.json()).events||[],s=0;n.forEach(r=>{let o=r.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{o={}}if((o.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${r.id}`)||s++}),yt(s)}catch{}}var Tt=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${z()?"display: none;":""}" title="New Issue"><i class='bx bx-plus'></i></button>
    <button id="roadmap-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
    <button id="roadmap-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
  </div>
`,$t=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <input id="roadmap-editor-title" class="settings-input" style="margin-bottom: 10px; width: 100%;" placeholder="Issue Title (e.g. [event] Fix bug)">
    <textarea id="roadmap-editor-body" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe the issue or feature in detail..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-git-pull-request'></i> Create Issue</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-timeline-container" style="margin-bottom: 20px;"></div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,Ae=new Set,kt=[];async function xe(t=!1){let e=document.getElementById("roadmap-list"),a=document.getElementById("roadmap-timeline-container");if(e){gs();try{let n=await H("/roadmap");if(!n.ok)throw new Error("Offline");let s=await n.json();s.sort((c,g)=>new Date(c.createdAt).getTime()-new Date(g.createdAt).getTime()),kt=s;let r={};if(s.forEach(c=>{let g="General",k=c.title.match(/^\[(.*?)\]/);k&&(g=k[1].toLowerCase()),r[g]||(r[g]=[]),r[g].push(c)}),a){let c=`
        <div class="roadmap-timeline" style="display: flex; gap: 5px; background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); overflow-x: auto;">
          ${s.map(g=>`
            <div class="timeline-dot" title="#${g.number}: ${g.title}" style="width: 12px; height: 12px; border-radius: 50%; background: #03dac6; flex-shrink: 0; opacity: 0.6; cursor: pointer;" onclick="dexter.viewRoadmapIssue(${g.number})"></div>
          `).join("<div style='width: 20px; height: 1px; background: rgba(255,255,255,0.1); margin-top: 6px; flex-shrink: 0;'></div>")}
        </div>
      `;a.innerHTML=c}let o=c=>{let g=Ae.has(c.number),w=new Date(c.createdAt).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),b=document.createElement("div");return b.className=`event-item notification-item event-border-blue cursor-pointer ${g?"expanded":""}`,b.dataset.issueNumber=c.number,b.id=`roadmap-issue-${c.number}`,b.onclick=i=>{if(i.target.closest("button")||i.target.closest("textarea"))return;if(b.classList.contains("expanded")){b.classList.remove("expanded");let L=b.querySelector(".event-details");L&&(L.style.display="none"),Ae.delete(c.number)}else{b.classList.add("expanded");let L=b.querySelector(".event-details");L&&(L.style.display="block"),Ae.add(c.number)}},b.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${w.split(",")[1]}</span>
          <span class="event-date">${w.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ISSUE #${c.number}</div>
          <div class="event-message" style="font-weight: bold; margin-bottom: 5px;">${O(c.title)}</div>
          <div class="event-details" style="${g?"display: block;":"display: none;"} ">
            <div style="font-size: 0.9em; opacity: 0.8; margin-bottom: 15px; white-space: pre-wrap;">${O(c.body)}</div>
            ${z()?"":`
            <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px; margin-top: 15px;">
              <textarea class="settings-textarea comment-input" style="min-height: 60px; font-size: 0.8em;" placeholder="Add a comment..."></textarea>
              <div style="display: flex; gap: 10px; margin-top: 10px;">
                <button class="notif-action-btn comment-btn" style="padding: 4px 10px; font-size: 0.75em;"><i class='bx bx-comment'></i> Comment</button>
                <button class="notif-action-btn close-btn danger" style="padding: 4px 10px; font-size: 0.75em; margin-left: auto;"><i class='bx bx-check'></i> Close Issue</button>
              </div>
            </div>
            `}
          </div>
        </div>
      `,b.querySelector(".comment-btn")?.addEventListener("click",async()=>{let i=b.querySelector(".comment-input"),u=i.value.trim();u&&(await bs(c.number,u),i.value="",xe(!0))}),b.querySelector(".close-btn")?.addEventListener("click",async()=>{confirm(`Close issue #${c.number}?`)&&(await vs(c.number),xe(!0))}),b};t&&(e.innerHTML="");let p="";Object.entries(r).forEach(([c,g])=>{p+=`<div class="service-category-header" style="margin: 20px 0 10px 0; color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 2px;">${c}</div>`,e.insertAdjacentHTML("beforeend",p),p="",g.forEach(k=>{e.appendChild(o(k))})}),s.length===0&&(e.innerHTML=G("empty","No open issues found.","Dexter is currently in a perfect state."))}catch{e.innerHTML=G("offline","Failed to load roadmap.","Could not sync with GitHub.")}}}window.dexter||(window.dexter={});window.dexter.viewRoadmapIssue=t=>{let e=document.getElementById(`roadmap-issue-${t}`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.classList.contains("expanded")||e.click())};function gs(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),n=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{let r=document.getElementById("roadmap-editor-title"),o=document.getElementById("roadmap-editor-body");r&&(r.value=""),o&&(o.value="");let p=document.getElementById("roadmap-editor-container");p&&(p.style.display="block")},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{let r=document.getElementById("roadmap-editor-container");r&&(r.style.display="none")},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-title"),o=document.getElementById("roadmap-editor-body"),p=r?r.value.trim():"",c=o?o.value.trim():"";if(!p||!c){alert("Title and Body are required.");return}try{await H("/roadmap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:p,body:c})});let g=document.getElementById("roadmap-editor-container");g&&(g.style.display="none"),xe(!0)}catch(g){console.error(g)}},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{kt.forEach(r=>Ae.add(r.number)),xe(!0)},n.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{Ae.clear(),xe(!0)},s.dataset.listenerAttached="true")}async function bs(t,e){await H(`/roadmap/${t}/comment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:e})})}async function vs(t){await H(`/roadmap/${t}`,{method:"DELETE"})}var St=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px; align-items: center;">
    <select id="task-filter-owner" class="task-form-select" style="padding: 4px 10px; font-size: 0.75em; height: 32px; border-color: rgba(255,255,255,0.05);">
        <option value="all">All Owners</option>
    </select>
    <button id="create-chore-btn" class="notif-action-btn" style="${z()?"display: none;":""}" title="New Task"><i class='bx bx-plus'></i></button>
  </div>
`,Lt=()=>`
        <!-- Create Task Form -->
        <div id="create-chore-form" class="new-task-form-container" style="display: none;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                <i id="form-icon" class='bx bx-plus-circle' style="color: #bb86fc; font-size: 1.2em;"></i>
                <h3 id="form-title" style="margin: 0; font-size: 1.1em; letter-spacing: 1px;">Initialize Research Task</h3>
            </div>

            <div class="task-form-grid">
                <div class="task-input-group" style="grid-column: span 2;">
                    <label class="task-input-label">Task Goal / Instruction</label>
                    <input type="text" id="new-chore-instruction" class="task-form-input" placeholder="E.g., 'Analyze recent crypto market trends in Serbia'">
                </div>
                
                <div class="task-input-group">
                    <label class="task-input-label">Target URL (Optional)</label>
                    <input type="text" id="new-chore-url" class="task-form-input" placeholder="https://example.com/data">
                </div>

                <div class="task-input-group">
                    <label class="task-input-label">Frequency (Schedule)</label>
                    <select id="new-chore-schedule" class="task-form-select">
                        <option value="every_1h">Once per Hour</option>
                        <option value="every_6h">Once per 6 Hours</option>
                        <option value="every_12h">Once per 12 Hours</option>
                        <option value="every_24h" selected>Once per Day</option>
                        <option value="every_168h">Once per Week</option>
                        <option value="daily">Daily (Fixed Time)</option>
                    </select>
                </div>

                <div id="new-chore-time-group" class="task-input-group" style="display: none;">
                    <label class="task-input-label">Scheduled Time & Timezone</label>
                    <div style="display: flex; gap: 10px;">
                        <input type="time" id="new-chore-time" class="task-form-input" style="flex: 1;" value="08:00">
                        <select id="new-chore-timezone" class="task-form-select" style="flex: 2;">
                            <option value="Local">Local (Server)</option>
                            <option value="America/Los_Angeles">California (PST/PDT)</option>
                            <option value="America/Chicago">Texas (CST/CDT)</option>
                            <option value="America/Toronto">Toronto (EST/EDT)</option>
                            <option value="America/New_York">New York (EST/EDT)</option>
                            <option value="Europe/London">London (GMT/BST)</option>
                            <option value="Europe/Berlin">Berlin (CET/CEST)</option>
                            <option value="Europe/Belgrade">Belgrade (CET/CEST)</option>
                            <option value="Europe/Moscow">Moscow (MSK)</option>
                            <option value="Asia/Shanghai">Beijing (CST)</option>
                            <option value="Asia/Tokyo">Tokyo (JST)</option>
                            <option value="Asia/Seoul">Seoul (KST)</option>
                            <option value="UTC">UTC</option>
                        </select>
                    </div>
                </div>

                <div class="task-input-group" style="grid-column: span 2;">
                    <label id="task-owner-label" class="task-input-label">Report results to (Select multiple)</label>
                    <div id="selected-recipients" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; min-height: 32px; padding: 5px; background: rgba(0,0,0,0.2); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
                        <span style="color: #444; font-size: 0.8em; font-style: italic; padding: 4px;">No recipients selected</span>
                    </div>
                    <select id="new-chore-owner" class="task-form-select">
                        <option value="" disabled selected>Add recipient...</option>
                        <optgroup label="System">
                            <option value="dexter">Dexter (Event Timeline)</option>
                        </optgroup>
                        <optgroup label="Creators">
                            <option value="313071000877137920">Owen (Creator)</option>
                        </optgroup>
                        <optgroup id="contacts-group" label="Users">
                            <!-- Contacts will be injected here -->
                        </optgroup>
                        <optgroup id="channels-group" label="Channels">
                            <!-- Channels will be injected here -->
                        </optgroup>
                    </select>
                </div>
            </div>

            <div class="task-form-actions">
                <button id="cancel-chore-btn" class="task-btn task-btn-discard"><i class='bx bx-x'></i> Discard</button>
                <button id="save-chore-btn" class="task-btn task-btn-deploy"><i class='bx bx-zap'></i> Deploy Task</button>
            </div>
        </div>

        <div id="chores-list" class="tasks-vertical-list" style="margin-bottom: 30px; display: flex; flex-direction: column; gap: 15px;"></div>
    `,_e=[],Be={"313071000877137920":"Owen",dexter:"Dexter"},ne=[],he=null;async function He(){let t=document.getElementById("chores-list"),e=document.getElementById("create-chore-btn"),a=document.getElementById("create-chore-form"),n=document.getElementById("save-chore-btn"),s=document.getElementById("cancel-chore-btn"),r=document.getElementById("new-chore-owner"),o=document.getElementById("selected-recipients"),p=document.getElementById("task-filter-owner"),c=document.getElementById("new-chore-instruction"),g=document.getElementById("new-chore-url"),k=document.getElementById("new-chore-schedule"),w=document.getElementById("new-chore-time"),b=document.getElementById("new-chore-timezone"),i=document.getElementById("new-chore-time-group");if(b&&!b.dataset.initialValueAttached){let l=Intl.DateTimeFormat().resolvedOptions().timeZone,$=!1;for(let E=0;E<b.options.length;E++)if(b.options[E].value===l){$=!0;break}if(!$){let E=document.createElement("option");E.value=l,E.textContent=l.replace("_"," "),b.appendChild(E)}b.value=l,b.dataset.initialValueAttached="true"}k&&i&&!k.dataset.timeListenerAttached&&(k.addEventListener("change",()=>{i.style.display=k.value==="daily"?"block":"none"}),k.dataset.timeListenerAttached="true");let u=document.getElementById("form-title"),L=document.getElementById("form-icon");function I(){if(o){if(ne.length===0){o.innerHTML='<span style="color: #444; font-size: 0.8em; font-style: italic; padding: 4px;">No recipients selected</span>';return}o.innerHTML=ne.sort((l,$)=>{let E=l.startsWith("channel:"),m=$.startsWith("channel:");return E&&!m?-1:!E&&m?1:0}).map(l=>{let $=Be[l]||l,E=l.startsWith("channel:");return`
        <div class="recipient-badge" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); font-size: 0.75em; color: ${l==="dexter"?"#bb86fc":E?"#03dac6":"#fff"};">
          <i class='bx ${l==="dexter"?"bx-terminal":E?"bx-hash":"bx-user"}'></i>
          <span>${$}</span>
          <i class='bx bx-x remove-recipient' data-id="${l}" style="cursor: pointer; margin-left: 4px; opacity: 0.6;"></i>
        </div>
      `}).join(""),o.querySelectorAll(".remove-recipient").forEach(l=>{l.onclick=()=>{let $=l.dataset.id;ne=ne.filter(E=>E!==$),I()}})}}function v(l){l&&!ne.includes(l)&&(ne.push(l),I()),r&&(r.value="")}function f(l=null){if(a){if(he=l?l.id:null,l){if(u&&(u.textContent="Update Research Task"),L&&(L.className="bx bx-edit-alt",L.style.color="#03dac6"),n&&(n.innerHTML="<i class='bx bx-check'></i> Update Task"),c&&(c.value=l.natural_instruction),g&&(g.value=l.execution_plan?.entry_url||""),k&&(k.value=l.schedule,i&&(i.style.display=l.schedule==="daily"?"block":"none")),w&&l.run_at&&(w.value=l.run_at),b&&l.timezone){let $=!1;for(let E=0;E<b.options.length;E++)if(b.options[E].value===l.timezone){$=!0;break}if(!$){let E=document.createElement("option");E.value=l.timezone,E.textContent=l.timezone.replace("_"," "),b.appendChild(E)}b.value=l.timezone}ne=l.recipients||(l.owner_id?[l.owner_id]:[]),I()}else u&&(u.textContent="Initialize Research Task"),L&&(L.className="bx bx-plus-circle",L.style.color="#bb86fc"),n&&(n.innerHTML="<i class='bx bx-zap'></i> Deploy Task"),c&&(c.value=""),g&&(g.value=""),k&&(k.value="every_24h"),ne=[],I();a.style.display="block",a.scrollIntoView({behavior:"smooth",block:"start"})}}let y=document.getElementById("contacts-group"),x=document.getElementById("channels-group");if(y&&!y.dataset.populated&&!z())try{ve("/contacts").then(async l=>{l.ok&&(((await l.json()).members||[]).forEach(m=>{if(Be[m.id]=m.nickname||m.username,m.id==="313071000877137920")return;let h=document.createElement("option");h.value=m.id;let A=m.nickname||m.username;h.textContent=`${A} (${m.username})`,y.appendChild(h)}),y.dataset.populated="true")})}catch{console.warn("Failed to fetch contacts for dropdown")}if(x&&!x.dataset.populated&&!z())try{ve("/channels").then(async l=>{l.ok&&((await l.json()).forEach(E=>{let m=`channel:${E.id}`;Be[m]=E.name;let h=document.createElement("option");h.value=m,h.textContent=`#${E.name} (${E.guild})`,x.appendChild(h)}),x.dataset.populated="true")})}catch{console.warn("Failed to fetch channels for dropdown")}r&&!r.dataset.listenerAttached&&(r.onchange=()=>{v(r.value)},r.dataset.listenerAttached="true"),p&&!p.dataset.listenerAttached&&(p.onchange=()=>d(),p.dataset.listenerAttached="true");function d(){if(!t)return;let l=p?.value||"all",$=l==="all"?_e:_e.filter(m=>(m.recipients||(m.owner_id?[m.owner_id]:[])).includes(l));if($.length===0){t.innerHTML=G("empty",l==="all"?"No active tasks.":"No tasks found for this owner.",z()?"Dexter is not currently performing research.":"Click the plus icon to create a research task.");return}let E=$.map(m=>{let h=m.last_run===0?"Never":new Date(m.last_run*1e3).toLocaleString(),A=m.memory?m.memory.length:0,M=m.status==="active"?"#03dac6":"#666",N=(m.recipients||(m.owner_id?[m.owner_id]:[])).sort((q,Y)=>{let _=q.startsWith("channel:"),T=Y.startsWith("channel:");return _&&!T?-1:!_&&T?1:0}).map(q=>{let Y=Be[q]||q.substring(0,8),_=q.startsWith("channel:");return`<span title="${Y}" style="display: flex; align-items: center; gap: 3px;"><i class='bx ${q==="dexter"?"bx-terminal":_?"bx-hash":"bx-user"}'></i>${Y}</span>`}).join("<span style='color: #444;'>, </span>");return`
                <div class="service-widget wide-task-card" style="border-left: 4px solid ${M}; width: 100%; display: flex; flex-direction: column; padding: 20px;">
                    <div class="service-widget-header" style="display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; margin-bottom: 15px;">
                        <div style="display: flex; gap: 15px; flex: 1;">
                            <i class='bx bx-search-alt' style="color: ${M}; font-size: 1.5em; margin-top: 2px;"></i>
                            <div style="text-align: left;">
                                <h3 style="font-size: 1.1em; white-space: normal; line-height: 1.4; font-weight: 600; margin: 0;">${m.natural_instruction}</h3>
                                <div style="margin-top: 8px; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
                                    <div style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace; display: flex; gap: 10px; align-items: center;">
                                      <i class='bx bx-send' style="margin-right: -5px;"></i>
                                      ${N}
                                    </div>
                                    <span style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace;"><i class='bx bx-time' style="margin-right: 4px;"></i>${m.schedule}${m.run_at?" @ "+m.run_at+(m.timezone?" ("+m.timezone.split("/").pop()?.replace("_"," ")+")":""):""}</span>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button class="icon-btn reset-chore-btn" data-id="${m.id}" title="Reset Progress" style="background: none; border: none; color: #ff9800; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-refresh' style="font-size: 1.2em;"></i></button>
                            <button class="icon-btn edit-chore-btn" data-id="${m.id}" style="background: none; border: none; color: #bb86fc; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-edit-alt' style="font-size: 1.2em;"></i></button>
                            <button class="icon-btn delete-chore-btn" data-id="${m.id}" style="background: none; border: none; color: #cf6679; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-trash' style="font-size: 1.2em;"></i></button>
                        </div>
                    </div>
                    
                    <div class="service-widget-body" style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Last Run</span>
                            <span style="font-size: 0.85em; color: #fff; font-family: 'JetBrains Mono';">${h}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Items Found</span>
                            <span style="font-size: 0.85em; color: #03dac6; font-weight: bold;">${A}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 200px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Target Focus</span>
                            <span style="font-size: 0.8em; color: #888; font-family: 'JetBrains Mono'; word-break: break-all;">${m.execution_plan.entry_url||"Autonomous Detection"}</span>
                        </div>
                    </div>
                </div>
            `}).join("");t.innerHTML=E,t.querySelectorAll(".edit-chore-btn").forEach(m=>{m.onclick=h=>{h.stopPropagation();let A=m.dataset.id,M=_e.find(B=>B.id===A);M&&f(M)}}),t.querySelectorAll(".reset-chore-btn").forEach(m=>{m.onclick=async h=>{h.stopPropagation();let A=m.dataset.id;confirm("Reset this task? It will be re-run immediately on the next cycle.")&&(m.innerHTML="<i class='bx bx-loader-alt spin'></i>",await H(`/chores/${A}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({last_run:0})}),He())}}),t.querySelectorAll(".delete-chore-btn").forEach(m=>{m.onclick=async h=>{h.stopPropagation();let A=m.dataset.id;confirm("Delete this task?")&&(await H(`/chores/${A}`,{method:"DELETE"}),He())}})}e&&!e.dataset.listenerAttached&&(e.onclick=()=>{a&&(a.style.display==="none"||he!==null?f(null):a.style.display="none")},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{a&&(a.style.display="none")},s.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let l=document.getElementById("new-chore-instruction"),$=document.getElementById("new-chore-url"),E=document.getElementById("new-chore-schedule"),m=l?.value,h=E?.value||"every_24h",A=h==="daily"?w?.value:"",M=h==="daily"?b?.value:"";if(!m)return;if(ne.length===0){alert("Please add at least one recipient.");return}let B=n.innerHTML;n.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{let N=he?"PATCH":"POST",q=he?`/chores/${he}`:"/chores";await H(q,{method:N,headers:{"Content-Type":"application/json"},body:JSON.stringify({recipients:ne,natural_instruction:m,entry_url:$?.value,schedule:h,run_at:A,timezone:M})}),a&&(a.style.display="none"),l&&(l.value=""),$&&($.value=""),he=null,ne=[],He()}catch(N){console.error(N),alert(he?"Failed to update research task":"Failed to create research task")}finally{n.innerHTML=B}},n.dataset.listenerAttached="true");try{let l=await H("/chores");if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);if(_e=await l.json()||[],p){let E=p.value,m=new Set;_e.forEach(h=>{h.owner_id&&m.add(h.owner_id),h.recipients&&h.recipients.forEach(A=>m.add(A))}),p.innerHTML='<option value="all">All Recipients</option>',m.forEach(h=>{let A=document.createElement("option");A.value=h;let M=h.startsWith("channel:"),B=Be[h]||`Recipient: ${h.substring(0,8)}`;A.textContent=(M&&!B.startsWith("#")?"#":"")+B,p.appendChild(A)}),p.value=E,p.selectedIndex===-1&&(p.value="all")}d()}catch(l){console.error("Failed to fetch chores",l)}}var Mt=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${Tt()}
            </div>
            ${$t()}
        </div>
    </div>
`,Ct=()=>`
    <div class="ideas-container">
        <div class="chores-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-task' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Research Tasks</h2>
                </div>
                ${St()}
            </div>
            ${Lt()}
        </div>
    </div>
`;async function Qe(){await Promise.all([xe(),He()])}var ys=`
    .profile-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .profile-overlay.active {
        opacity: 1;
    }

    .profile-card {
        width: 800px;
        max-width: 90%;
        max-height: 90vh;
        background: #1e1e1e;
        border: 1px solid #333;
        border-radius: 12px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: scale(0.95);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
    }
    
    .profile-card.expanded {
        width: 1300px;
        height: 85vh;
        max-height: 95vh;
    }

    .profile-overlay.active .profile-card {
        transform: scale(1);
    }

    /* Holographic Border Effect */
    .profile-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, #bb86fc, #03dac6, #bb86fc);
        background-size: 200% 100%;
        animation: gradientMove 3s linear infinite;
        z-index: 10;
    }

    @keyframes gradientMove {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
    }

    .profile-header {
        padding: 40px 40px 20px 40px;
        background: linear-gradient(180deg, rgba(187, 134, 252, 0.05) 0%, rgba(30, 30, 30, 0) 100%);
        display: flex;
        align-items: center;
        gap: 30px;
        position: relative;
        flex-shrink: 0;
    }

    .profile-avatar-container {
        position: relative;
        width: 100px;
        height: 100px;
    }

    .profile-avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #bb86fc;
        box-shadow: 0 0 15px rgba(187, 134, 252, 0.4);
    }

    .profile-status-dot {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 3px solid #1e1e1e;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    .profile-identity h2 {
        margin: 0;
        font-size: 2.2em;
        color: #fff;
        font-weight: 700;
        letter-spacing: -0.5px;
    }

    .profile-badges {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }

    .profile-badge {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.75em;
        padding: 4px 8px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.05);
        color: #aaa;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .profile-badge.master {
        background: rgba(187, 134, 252, 0.15);
        color: #bb86fc;
        border-color: #bb86fc;
    }
    
    /* Navigation Tabs (Hidden unless expanded) */
    .profile-nav {
        display: none; /* Flex when expanded */
        padding: 0 40px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        margin-top: 10px;
        gap: 25px;
    }
    
    .profile-card.expanded .profile-nav {
        display: flex;
    }
    
    .profile-tab-btn {
        background: none;
        border: none;
        color: #888;
        font-family: 'JetBrains Mono', monospace;
        text-transform: uppercase;
        padding: 15px 0;
        cursor: pointer;
        position: relative;
        font-size: 0.9em;
        transition: color 0.2s;
    }
    
    .profile-tab-btn:hover {
        color: #fff;
    }
    
    .profile-tab-btn.active {
        color: #03dac6;
    }
    
    .profile-tab-btn.active::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #03dac6;
        box-shadow: 0 -2px 10px rgba(3, 218, 198, 0.5);
    }

    .profile-body {
        padding: 40px;
        overflow-y: auto;
        flex: 1;
        position: relative;
    }
    
    /* Grid layout for Overview */
    .overview-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

    .profile-section-title {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.8em;
        text-transform: uppercase;
        color: #666;
        margin-bottom: 20px;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .profile-section-title::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #333;
    }

    /* Cognitive Model Bars */
    .cog-metric {
        margin-bottom: 15px;
    }

    .cog-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-size: 0.9em;
        color: #ddd;
    }

    .cog-bar-bg {
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;
    }

    .cog-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #03dac6, #00bfa5);
        border-radius: 3px;
    }

    /* Fact Chips */
    .fact-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .fact-chip {
        display: flex;
        align-items: center;
        background: rgba(3, 218, 198, 0.05);
        border: 1px solid rgba(3, 218, 198, 0.2);
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.85em;
        color: #03dac6;
        transition: all 0.2s;
    }
    
    .fact-chip:hover {
        background: rgba(3, 218, 198, 0.15);
        transform: translateY(-2px);
    }

    .fact-key {
        font-weight: bold;
        margin-right: 6px;
        opacity: 0.8;
    }

    .fact-val {
        opacity: 1;
    }

    /* Stats Footer */
    .profile-footer {
        padding: 20px 40px;
        background: #181818;
        border-top: 1px solid #333;
        display: flex;
        justify-content: space-between;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.8em;
        color: #666;
        flex-shrink: 0;
        align-items: center;
    }

    .close-profile-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: #666;
        font-size: 1.5em;
        cursor: pointer;
        transition: color 0.2s;
        z-index: 20;
    }

    .close-profile-btn:hover {
        color: #fff;
    }
    
    .expand-btn {
        background: rgba(187, 134, 252, 0.1);
        border: 1px solid rgba(187, 134, 252, 0.3);
        color: #bb86fc;
        padding: 6px 16px;
        border-radius: 4px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85em;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .expand-btn:hover {
        background: rgba(187, 134, 252, 0.2);
        box-shadow: 0 0 15px rgba(187, 134, 252, 0.2);
    }
    
    /* Tab Content Logic */
    .tab-content {
        display: none;
        animation: fadeIn 0.3s ease;
    }
    
    .tab-content.active {
        display: block;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* Deep Dive Styles */
    .topic-bar {
        margin-bottom: 20px;
    }
    .topic-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9em;
    }
    .topic-track {
        height: 25px;
        background: rgba(255,255,255,0.05);
        border-radius: 4px;
        position: relative;
        overflow: hidden;
    }
    .topic-fill {
        height: 100%;
        background: rgba(187, 134, 252, 0.4);
        border-right: 2px solid #bb86fc;
        display: flex;
        align-items: center;
        padding-left: 10px;
        font-size: 0.75em;
        color: #fff;
        white-space: nowrap;
    }
    
    .raw-json {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85em;
        color: #03dac6;
        background: rgba(0,0,0,0.3);
        padding: 20px;
        border-radius: 8px;
        white-space: pre-wrap;
        max-height: 600px;
        overflow-y: auto;
    }

    /* Dossier Styles */
    .dossier-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    
    .dossier-item {
        background: rgba(255,255,255,0.02);
        border: 1px solid rgba(255,255,255,0.05);
        padding: 20px;
        border-radius: 8px;
    }

    .dossier-label {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.7em;
        text-transform: uppercase;
        color: #666;
        margin-bottom: 8px;
        letter-spacing: 1px;
    }
    
    .dossier-value {
        font-size: 1.1em;
        color: #fff;
        font-weight: 500;
    }
    
    .dossier-list-item {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        font-size: 0.9em;
    }
    
    .dossier-list-item:last-child {
        border-bottom: none;
    }

    .friend-chip {
        display: flex;
        align-items: center;
        gap: 10px;
        background: rgba(0,0,0,0.2);
        padding: 10px;
        border-radius: 6px;
        margin-bottom: 10px;
        border: 1px solid rgba(255,255,255,0.05);
    }
`;function It(t){if(!document.getElementById("dex-profile-styles")){let n=document.createElement("style");n.id="dex-profile-styles",n.textContent=ys,document.head.appendChild(n)}let e=document.createElement("div");e.className="profile-overlay",e.innerHTML=`
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `,e.addEventListener("click",n=>{n.target===e&&(e.classList.remove("active"),ae()||(document.body.style.overflow=""),setTimeout(()=>e.remove(),300))}),document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),document.body.style.overflow="hidden";let a=n=>{e.innerHTML=`
        <div class="profile-card" style="height: 200px; justify-content: center; align-items: center; color: #cf6679; border-color: #cf6679;">
            <div style="text-align: center;">
                <i class='bx bx-error' style="font-size: 3em; margin-bottom: 10px;"></i>
                <div style="font-family: 'JetBrains Mono'; text-transform: uppercase;">${n}</div>
            </div>
            <button class="close-profile-btn" style="color: #cf6679;" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
        </div>
    `;let s=e.querySelector(".close-profile-btn");s&&s.addEventListener("click",()=>{e.click()})};ve(`/profile/${t.id}`).then(async n=>{if(n.ok){let s=await n.json();xs(e,t,s)}else console.log("Profile not found (404) or error."),a("Profile Data Unavailable")}).catch(n=>{console.error("Profile fetch error:",n),a("Connection Failed")})}function xs(t,e,a){let n=e.status==="online"?"#03dac6":e.status==="idle"?"#ffb74d":"#cf6679",s=()=>{let L=(a.attributes||a.facts||[]).map(d=>{let l=d.key||d.k,$=d.value||d.v;return`
            <div class="fact-chip">
                <span class="fact-key">${l}:</span>
                <span class="fact-val">${$}</span>
            </div>
        `}).join(""),I=a.cognitive_model||a,v=I.technical_level||I.techLevel||0,f=I.communication_style||I.commStyle||"Unknown",y=I.patience_level||I.patience||"Unknown",x=I.vibe||"Unknown";return`
            <div class="overview-grid">
                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-brain'></i> Cognitive Model</div>
                    
                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Technical Level</span>
                            <span>${v}/10</span>
                        </div>
                        <div class="cog-bar-bg">
                            <div class="cog-bar-fill" style="width: ${Math.min(v*10,100)}%;"></div>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Communication Style</span>
                            <span style="color: #03dac6;">${f}</span>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Predicted Patience</span>
                            <span>${y}</span>
                        </div>
                    </div>

                     <div class="cog-metric">
                        <div class="cog-label">
                            <span>Vibe Check</span>
                            <span style="font-family: 'JetBrains Mono'; color: #bb86fc;">${x}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-purchase-tag-alt'></i> Fact Bank</div>
                    <div class="fact-grid">
                        ${L}
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px; font-size: 0.9em; color: #888; font-style: italic;">
                        <i class='bx bx-info-circle'></i> Dexter automatically extracts these facts from conversation context to personalize future interactions.
                    </div>
                </div>
            </div>
        `},r=()=>{let L=a.dossier||{},I=L.identity||{},v=L.career||{},f=L.personal||{},y=L.social||[];return`
            <div class="dossier-grid">
                <!-- Identity Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-id-card'></i> Identity</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Full Name</div>
                        <div class="dossier-value">${I.fullName||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Age Range</div>
                        <div class="dossier-value">${I.ageRange||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Location</div>
                        <div class="dossier-value">${I.location||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Gender</div>
                        <div class="dossier-value">${I.gender||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Sexuality</div>
                        <div class="dossier-value" style="color: #ffb74d;">${I.sexuality||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Relationship Status</div>
                        <div class="dossier-value">${I.relationship||"Unknown"}</div>
                    </div>
                    
                    <div class="profile-section-title" style="margin-top: 30px;"><i class='bx bx-briefcase'></i> Career</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Current Role</div>
                        <div class="dossier-value">${v.jobTitle||"Unknown"}</div>
                        <div style="font-size: 0.8em; color: #888; margin-top: 2px;">@ ${v.company||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                         <div class="dossier-label">Key Skills</div>
                         <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            ${(v.skills||[]).map(x=>`<span style="font-size: 0.75em; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${x}</span>`).join("")}
                         </div>
                    </div>
                </div>

                <!-- Personal Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-home-heart'></i> Personal Life</div>
                    
                    <div class="dossier-item">
                        <div class="dossier-label"><i class='bx bx-joystick'></i> Hobbies</div>
                        <div style="margin-top: 10px;">
                            ${(f.hobbies||[]).map(x=>`<div class="dossier-list-item">${x}</div>`).join("")}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(f.habits||[]).map(x=>`<div class="dossier-list-item">${x}</div>`).join("")}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(f.vices||[]).map(x=>`<div class="dossier-list-item" style="color: #cf6679;">${x}</div>`).join("")}
                        </div>
                    </div>
                </div>

                <!-- Social Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-network-chart'></i> Known Associates</div>
                    <div class="dossier-item" style="background: none; border: none; padding: 0;">
                        ${y.length>0?y.map(x=>`
                            <div class="friend-chip">
                                <div style="width: 35px; height: 35px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #888;">${x.name.substring(0,1)}</div>
                                <div style="flex: 1;">
                                    <div style="color: #fff; font-weight: 500;">${x.name}</div>
                                    <div style="font-size: 0.75em; color: #888;">${x.relation}</div>
                                </div>
                                <div style="font-size: 0.8em; color: #03dac6;">${x.trust}</div>
                            </div>
                        `).join(""):'<div style="color: #666; font-style: italic;">No associates mapped.</div>'}
                    </div>
                </div>
            </div>
        `},o=()=>{let L=a.traits||{};return`
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(L).map(([I,v])=>`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${v}%; background: ${Number(v)>50?"#03dac6":"#cf6679"}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${I.substring(0,4)}</div>
                    <div style="font-family: monospace;">${v}%</div>
                </div>
            `).join("")}
        </div>
    `},p=()=>`
        <div class="profile-section-title"><i class='bx bx-map-alt'></i> Conversation Topics</div>
        <div style="margin-top: 20px;">
            ${(a.topics||[]).map(L=>`
                <div class="topic-bar">
                    <div class="topic-header">
                        <span style="color: #eee;">${L.name}</span>
                        <span style="color: #bb86fc;">${L.val}%</span>
                    </div>
                    <div class="topic-track">
                        <div class="topic-fill" style="width: ${L.val}%"></div>
                    </div>
                </div>
            `).join("")}
        </div>
    `,c=()=>`
        <div class="profile-section-title"><i class='bx bx-code-alt'></i> Raw Profile JSON</div>
        <div class="raw-json">${JSON.stringify(a,null,2)}</div>
    `,g=`
        <div class="profile-card">
            <button class="close-profile-btn" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
            
            <div class="profile-header">
                <div class="profile-avatar-container">
                    <img src="${e.avatar_url||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="profile-avatar">
                    <div class="profile-status-dot" style="background: ${n}"></div>
                </div>
                <div class="profile-identity">
                    <h2>${O(e.username)}</h2>
                    <div class="profile-badges">${(a.badges||[]).map(L=>`<span class="profile-badge ${L==="Creator"?"master":""}">${L}</span>`).join("")}</div>
                </div>
            </div>
            
            <div class="profile-nav">
                <button class="profile-tab-btn active" data-tab="overview">Overview</button>
                <button class="profile-tab-btn" data-tab="dossier">Dossier</button>
                <button class="profile-tab-btn" data-tab="psychometrics">Psychometrics</button>
                <button class="profile-tab-btn" data-tab="topics">Topic Matrix</button>
                <button class="profile-tab-btn" data-tab="raw">Raw Data</button>
            </div>

            <div class="profile-body">
                <div id="tab-overview" class="tab-content active">${s()}</div>
                <div id="tab-dossier" class="tab-content">${r()}</div>
                <div id="tab-psychometrics" class="tab-content">${o()}</div>
                <div id="tab-topics" class="tab-content">${p()}</div>
                <div id="tab-raw" class="tab-content">${c()}</div>
            </div>

            <div class="profile-footer">
                <div style="display: flex; gap: 20px;">
                    <span>ID: ${e.id}</span>
                    <span>LIFETIME TOKENS: ${a.stats?.tokens_consumed||a.stats?.tokens||"0"}</span>
                    <span>MSGS: ${a.stats?.total_messages||a.stats?.msgs||"0"}</span>
                </div>
                <button id="profile-expand-toggle" class="expand-btn"><i class='bx bx-expand-alt'></i> Detailed Analysis</button>
            </div>
        </div>
    `;t.innerHTML=g;let k=t.querySelector(".profile-card"),w=t.querySelector("#profile-expand-toggle"),b=t.querySelectorAll(".profile-tab-btn"),i=t.querySelectorAll(".tab-content"),u=t.querySelector(".close-profile-btn");u&&u.addEventListener("click",()=>{t.classList.remove("active"),ae()||(document.body.style.overflow=""),setTimeout(()=>t.remove(),300)}),b.forEach(L=>{L.addEventListener("click",()=>{b.forEach(f=>f.classList.remove("active")),i.forEach(f=>f.classList.remove("active")),L.classList.add("active");let I=L.dataset.tab,v=t.querySelector(`#tab-${I}`);v&&v.classList.add("active")})}),w&&w.addEventListener("click",()=>{k.classList.toggle("expanded");let L=k.classList.contains("expanded");w.innerHTML=L?"<i class='bx bx-collapse-alt'></i> Collapse View":"<i class='bx bx-expand-alt'></i> Detailed Analysis"})}var At=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto; ${z()?"display: none;":""}" title="Refresh Contacts"><i class='bx bx-refresh'></i></button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,hs=null;async function et(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await et(),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),t.dataset.listenerAttached||(t.onclick=a=>{let s=a.target.closest(".user-profile-card");if(s&&s.dataset.user)try{let r=JSON.parse(s.dataset.user);It(r)}catch(r){console.error("Failed to parse user data",r)}},t.dataset.listenerAttached="true");try{let a=await ve("/contacts");if(!a.ok)throw new Error("Service unreachable");let s=(await a.json()).members||[];if(hs=Date.now(),s.length===0){t.innerHTML=G("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((o,p)=>{let c=r[o.level]??10,g=r[p.level]??10;return c!==g?c-g:o.username.localeCompare(p.username)}),t.innerHTML=s.map(o=>{let p=o.color&&o.color!==0,c=p?"#"+o.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",g=o.status==="online"?"#5eff5e":o.status==="idle"?"#ffa500":o.status==="dnd"?"#ff4d4d":"#666",k="#888";o.level==="Me"||o.level==="Master"?k="#bb86fc":o.level==="Admin"?k="#cf6679":o.level==="Moderator"?k="#03dac6":o.level==="Contributor"&&(k="#ffa500");let w=o.level==="Me",b=w?"rgba(187, 134, 252, 0.08)":p?`${c}11`:"rgba(255,255,255,0.03)",i=w?"2px solid #bb86fc":p?`1px solid ${c}66`:"1px solid rgba(255,255,255,0.1)";return`
                <div class="user-profile-card" 
                     data-user="${JSON.stringify(o).replace(/"/g,"&quot;")}"
                     style="background: ${b}; padding: 15px; border-radius: 8px; border: ${i}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; cursor: pointer; transition: transform 0.2s, background 0.2s, box-shadow 0.2s;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${w?"#bb86fc":p?c:"transparent"}33, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${o.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${w?"2px solid #bb86fc":p?`2px solid ${c}`:"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${g}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: ${p?c:"#fff"}; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">${o.nickname||o.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${k}; font-weight: 600; text-transform: uppercase;">${w?"DEXTER (ME)":o.level}</span>
                            <span style="font-size: 0.7em; color: #666; font-family: monospace;">(${o.username})</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${o.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=G("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var ws={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","analysis.user.message_signals":"Analyzed Signals for User {user_id}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"{agent_name} Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {process_id} started: {state}","system.process.unregistered":"Process {process_id} completed","system.cognitive.model_load":"Model Loaded: {model} ({method})","system.cognitive.model_inference":"Model Inference: {model} ({method})","system.cognitive.model_unload":"Model Unloaded: {model} ({reason})"};function _t(t,e){let a=ws[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"){let s=e.tier?e.tier.toUpperCase():"UNKNOWN";a=`${e.agent_name||"System"} Audit: ${s}`}if(t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!a)return t;let n=a.replace(/\{(\w+)\}/g,(s,r)=>e[r]!==void 0&&e[r]!==null?e[r]:r==="reason"||r==="method"||r==="details"||r==="args"?"":s);return n=n.replace(/\s\(\)\s*/g," ").trim(),(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(n+=` (Translation: ${e.english_translation})`),n}var tt=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn ${Q==="all"?"active":""}" data-filter="all" title="All Events"><i class='bx bx-list-ul'></i></button>
            <button class="notif-action-btn filter-btn ${Q==="messaging"?"active":""}" data-filter="messaging" title="Messaging"><i class='bx bx-message-square-detail'></i></button>
            <button class="notif-action-btn filter-btn ${Q==="system"?"active":""}" data-filter="system" title="System"><i class='bx bx-cog'></i></button>
            <button class="notif-action-btn filter-btn ${Q==="cognitive"?"active":""}" data-filter="cognitive" title="Cognitive"><i class='bx bx-brain'></i></button>
            <button class="notif-action-btn filter-btn ${Q==="moderation"?"active":""}" data-filter="moderation" title="Moderation"><i class='bx bx-shield-quarter'></i></button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="events-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
            <button id="events-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
            <button id="events-clear" class="notif-action-btn danger" style="${z()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
        </div>
    </div>
    
    <div id="timeline-view-container">
        <div id="events-timeline" class="events-timeline">
            <div class="tab-placeholder">
                <i class='bx bx-calendar-event placeholder-icon'></i>
                <p class="placeholder-message">Loading events...</p>
            </div>
        </div>
    </div>
`,Je=null,we=new Set,ze=[],Q="all",Es={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision","analysis.user.message_signals","system.cognitive.model_inference"],moderation:["moderation.explicit_content.deleted"]},Ts={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","analysis.user.message_signals":"bx-pulse","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart","system.cognitive.model_inference":"bx-brain"};function $s(t){for(let[e,a]of Object.entries(Es))if(a.includes(t))return e;return"system"}function ks(t){return Ts[t]||"bx-square-rounded"}async function ue(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ss();let n=`/events?ml=${Q==="all"?100:250}&format=json&exclude_types=system.process.registered,system.process.unregistered`;Q!=="all"&&(n+=`&category=${Q}`);try{let s=await H(n);if(!s.ok)throw new Error("Service unreachable");if(ze=((await s.json()).events||[]).filter(b=>{let i=b.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return!0}let u=i.type;return!(u==="system.blueprint.generated"||u==="system.notification.generated")}),Je=Date.now(),pe(1,Je),ze.length===0){e.innerHTML=G("empty","No events found for this filter.");return}t&&(e.innerHTML="");let p=b=>{let i=b.event;if(typeof i=="string")try{i=JSON.parse(i)}catch{return null}let u=i.type,L=$s(u),I=ks(u),v=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.bot.voice_response"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted"||u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="analysis.user.message_signals"||u==="system.cli.command"||u==="system.analysis.audit"||u==="system.cognitive.model_inference"||u==="system.test.completed"||u==="error_occurred"||u==="system.cli.status"||u==="system.attention.expired"||u.startsWith("system.roadmap")||u.startsWith("system.process"),f="event-border-grey";v&&(u==="moderation.explicit_content.deleted"||u==="error_occurred"?f="event-border-red":u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="system.analysis.audit"||u==="analysis.user.message_signals"||u==="engagement.decision"?f="event-border-purple":u==="system.attention.expired"||u==="system.cli.command"||u==="system.cli.status"?f="event-border-orange":u==="system.test.completed"?f=i.test?.status==="OK"&&i.lint?.status==="OK"&&i.format?.status==="OK"?"event-border-blue":"event-border-red":f="event-border-blue");let y=v?"cursor-pointer":"",x=we.has(b.id),d=x?"expanded":"",l=x?"display: block;":"display: none;",$=new Date(b.timestamp*1e3),E=$.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),m=$.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),h=_t(u,i),A=i.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${i.user_level})</span>`:"",M="";if(v){let _="";if(u==="engagement.decision"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${i.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Input Prompt")}
                            <pre class="detail-pre">${i.input_prompt||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Context History")}
                            <pre class="detail-pre">${i.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Raw Engagement Output")}
                            <pre class="detail-pre">${i.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(u==="system.cognitive.model_inference"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${i.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Method:</span>
                            <span class="detail-value" style="text-transform: uppercase;">${i.method}</span>
                        </div>
                        ${T("Inference Metrics")}
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 10px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${i.prompt_eval_count||0} / ${i.eval_count||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${i.duration_ms||0}ms</div>
                            </div>
                        </div>
                    `}else if(u==="system.attention.expired"){let T=P=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${P}</h5>`,S=i.timestamp-i.last_active,C=Math.floor(S/60);_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${i.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${C} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Context (Last Input)")}
                            <div class="detail-pre">${ce(i.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${T("Thought Process (Last Output)")}
                            <div class="detail-pre">${ce(i.last_output||"None")}</div>
                        </div>
                    `}else if(u==="messaging.bot.sent_message"){let T=D=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${D}</h5>`,S="";if(i.embed){let D=i.embed,K=D.title?`<div style="font-weight: bold; margin-bottom: 5px; color: #fff;">${O(D.title)}</div>`:"",U=D.description?`<div style="font-size: 0.9em; color: #bbb; white-space: pre-wrap;">${ce(D.description)}</div>`:"",j=(D.fields||[]).map(F=>`
              <div style="margin-top: 10px;">
                <div style="font-size: 0.7em; text-transform: uppercase; color: #666; letter-spacing: 1px;">${O(F.name)}</div>
                <div style="font-size: 0.85em; color: #eee; white-space: pre-wrap;">${ce(F.value)}</div>
              </div>
            `).join("");S=`
              <div class="discord-embed" style="margin-top: 15px; padding: 12px; border-left: 4px solid ${D.color?"#"+D.color.toString(16).padStart(6,"0"):"#bb86fc"}; background: rgba(255,255,255,0.02); border-radius: 0 4px 4px 0;">
                ${K}
                ${U}
                ${j}
              </div>
            `}let C="";i.eval_count&&(C=`
                            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${i.prompt_count} / ${i.eval_count}</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Total Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${i.duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Load Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${i.load_duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Processing</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${i.prompt_duration_ms}ms / ${i.eval_duration_ms}ms</div>
                                </div>
                            </div>
                        `);let P="";if(i.chat_history&&i.chat_history.length>0){let D=i.chat_history.length,K=i.chat_history.map((U,j)=>{let F=U.name?U.name.toUpperCase():U.role.toUpperCase();!U.name&&F==="ASSISTANT"&&(F="DEXTER");let V=U.role==="user"?"#03dac6":U.role==="system"?"#ffb74d":"#bb86fc",ee=j===D-1?"block":"none";return`
                                <div class="history-slide" data-index="${j}" style="display: ${ee};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${V}; letter-spacing: 1px; font-weight: bold;">${F}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${j+1} of ${D}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${O(U.content)}</div>
                                </div>
                            `}).join("");P=`
                            <div class="event-detail-block">
                                ${T("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${K}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}_=`
                        ${C}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${i.response_model||"N/A"}</span>
                        </div>
                        ${S}
                        ${P||`
                            <div class="event-detail-block">
                                ${T("Raw Input (Prompt)")}
                                <pre class="detail-pre">${i.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${T("Raw Response Output")}
                                <pre class="detail-pre">${i.response_raw||"None"}</pre>
                            </div>
                        `}
                    `}else if(u==="messaging.bot.voice_response"){let T=D=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${D}</h5>`,S="",C=[],P=i.raw_input||"";if(P.startsWith("[{")&&P.endsWith("}]")){let D=P.match(/{.*?}/g);D&&(C=D.map(K=>{let U=K.substring(1,K.length-1),j=U.indexOf(" "),F=U.substring(0,j),V=U.substring(j+1);return V=V.replace(/\[\]$/,"").trim(),{role:F,content:V}}))}if(C.length>0&&i.response_raw&&C.push({role:"assistant",content:i.response_raw}),C.length>0){let D=C.length,K=C.map((U,j)=>{let F=U.role.toUpperCase();F==="ASSISTANT"&&(F="DEXTER");let V=U.role==="user"?"#03dac6":U.role==="system"?"#ffb74d":"#bb86fc",ee=j===D-1?"block":"none";return`
                                <div class="history-slide" data-index="${j}" style="display: ${ee};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${V}; letter-spacing: 1px; font-weight: bold;">${F}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${j+1} of ${D}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${O(U.content)}</div>
                                </div>
                            `}).join("");S=`
                            <div class="event-detail-block">
                                ${T("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${K}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${i.response_model||"N/A"}</span>
                        </div>
                        ${S}
                        <div class="event-detail-block">
                            ${T("Raw Input (Prompt)")}
                            <pre class="detail-pre">${i.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Raw Response Output")}
                            <pre class="detail-pre">${i.response_raw||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.user.message_signals"){let T=P=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${P}</h5>`,S=i.signals||{};_=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Sentiment</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${S.sentiment>.3?"#03dac6":S.sentiment<-.3?"#cf6679":"#aaa"}; font-weight: bold;">${S.sentiment?.toFixed(2)||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Intent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: uppercase;">${S.intent||"N/A"}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tech Depth</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${S.technical_depth||0}/10</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Mood</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${S.mood||"N/A"}</div>
                            </div>
                        </div>
                        <div class="event-detail-block">
                            ${T("Extracted Topics")}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${(S.topics||[]).map(P=>`<span class="profile-badge">${P}</span>`).join("")||'<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${T("Raw Model Output")}
                            <pre class="detail-pre">${O(i.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="moderation.explicit_content.deleted"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${i.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${i.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Raw Model Output")}
                            <pre class="detail-pre">${O(i.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.link.completed"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${O(i.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Description")}
                            <pre class="detail-pre">${O(i.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Content Summary")}
                            <pre class="detail-pre">${O(i.summary)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.visual.completed"){let T=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`,S="";i.base64_preview?S=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${i.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:i.url?S=`<div class="event-detail-block"><img src="${i.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:S=`
              <div class="event-detail-block" style="margin-top: 10px; height: 100px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444;">
                <i class='bx bx-low-vision' style="font-size: 2rem; margin-bottom: 5px; opacity: 0.3;"></i>
                <span style="font-size: 0.65em; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;">Visual Data Restricted</span>
              </div>`,_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${i.filename}</span>
                        </div>
                        ${S}
                        <div class="event-detail-block">
                            ${T("Visual Description")}
                            <pre class="detail-pre">${O(i.description)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.router.decision"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Decision:</span>
                            <span class="detail-value" style="color: #bb86fc; font-weight: bold;">${i.decision}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${i.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${i.url}" target="_blank" class="attachment-link">${i.url}</a></span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Raw Model Output")}
                            <pre class="detail-pre">${O(i.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Input Context")}
                            <pre class="detail-pre">${O(i.raw_input)||"None"}</pre>
                        </div>
                    `}else if(u==="system.cli.command"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
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
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${i.exit_code!==void 0?i.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Output")}
                            <pre class="detail-pre">${O(i.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(u==="system.analysis.audit"){let T=i.success?"#03dac6":"#ff4d4d",S=i.success?"SUCCESS":"FAILED",C=j=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${j}</h5>`,P="";i.error&&(P=`
                            <div class="event-detail-block">
                                ${C("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${O(i.error)}</pre>
                            </div>
                        `);let D="";if(i.chat_history&&i.chat_history.length>0){let j=i.chat_history.length,F=i.chat_history.map((V,ee)=>{let X=V.name?V.name.toUpperCase():V.role.toUpperCase();!V.name&&X==="USER"&&(X="SYSTEM"),!V.name&&X==="ASSISTANT"&&(X="AGENT");let Me=V.role==="user"?"#03dac6":V.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${ee}" style="display: ${ee===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${Me}; letter-spacing: 1px; font-weight: bold;">${X}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${ee+1} of ${j}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${O(V.content)}</div>
                                </div>
                            `}).join("");D=`
                            <div class="event-detail-block">
                                ${C("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${F}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${j<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let K="";if(i.corrections&&i.corrections.length>0){let j=i.corrections.map((F,V)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${F.type}] ${F.guidance}</div>
                                ${F.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${O(F.snippet)}</div>`:""}
                            </div>
                        `).join("");K=`
                            <div class="event-detail-block">
                                ${C(`Corrections (${i.corrections.length})`)}
                                ${j}
                            </div>
                        `}let U="";if(i.parsed_results&&i.parsed_results.length>0){let j=i.parsed_results.map(F=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${O(F.title)}</div>
                                <div style="color: #ddd;">${O(F.summary)}</div>
                            </div>
                        `).join("");U=`
                            <div class="event-detail-block">
                                ${C("Parsed Results")}
                                ${j}
                            </div>
                        `}_=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 120px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${i.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${i.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${T}; font-weight: bold;">${S} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${i.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${i.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${i.model}</div>
                            </div>
                        </div>
                        ${P}
                        ${U}
                        ${K}
                        ${D}
                    `}else if(u==="system.test.completed"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${i.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${i.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Format")}
                            <pre class="detail-pre">${i.format?.status||"N/A"}: ${i.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Lint")}
                            <pre class="detail-pre">${i.lint?.status||"N/A"}: ${i.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Tests")}
                            <pre class="detail-pre">${i.test?.status||"N/A"}: ${i.test?.details||i.test?.message||"OK"}</pre>
                        </div>
                    `}else if(u==="error_occurred"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${i.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${O(i.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${T("Context")}
                            <pre class="detail-pre">${JSON.stringify(i.context||{},null,2)}</pre>
                        </div>
                    `}else if(u==="system.cli.status"){let T=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${i.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${T("Message")}
                            <pre class="detail-pre">${O(i.message)}</pre>
                        </div>
                    `}else if(u==="messaging.user.sent_message"){let T="";i.attachments&&i.attachments.length>0&&(T=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${i.attachments.map(C=>{let P=C.content_type&&C.content_type.startsWith("image/"),D=(C.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${P?`<div class="attachment-thumb-container"><img src="${C.url}" alt="${C.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${C.url}" target="_blank" class="attachment-link">${C.filename}</a>
                                        <span class="attachment-meta">${C.content_type} \u2022 ${D}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${i.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${i.content||"(empty)"}</pre>
                        </div>
                        ${T}
                    `}M=`
                    <div class="event-details" style="${l}">
                        ${_}
                    </div>
                `}let B=document.createElement("div");B.className=`event-item ${f} ${y} ${d}`,B.dataset.eventId=b.id,B.onclick=function(_){if(!v)return;let T=this;if(T.classList.contains("expanded")){T.classList.remove("expanded"),we.delete(b.id);let C=T.querySelector(".event-details");C&&(C.style.display="none")}else{T.classList.add("expanded"),we.add(b.id);let C=T.querySelector(".event-details");C&&(C.style.display="block")}},B.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${m}</span>
                </div>
                <div class="event-icon"><i class='bx ${I}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${L}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${L}</span>
                        ${b.service} ${A}
                    </div>
                    <div class="event-message">${h}</div>
                    ${M}
                </div>
            `;let N=B.querySelector(".event-details");if(N&&N.addEventListener("click",_=>{_.stopPropagation()}),v){let _=B.querySelector(".close-details-btn");_&&_.addEventListener("click",T=>{T.stopPropagation();let S=T.target.closest(".event-item");if(S){S.classList.remove("expanded"),we.delete(b.id);let C=S.querySelector(".event-details");C&&(C.style.display="none")}})}let q=B.querySelector(".prev-btn"),Y=B.querySelector(".next-btn");if(q&&Y){let _=0,T=Array.from(B.querySelectorAll(".history-slide")),S=T.length,C=()=>{T.forEach((P,D)=>{P.style.display=D===_?"block":"none"}),q.disabled=_===0,Y.disabled=_===S-1,q.style.opacity=_===0?"0.5":"1",Y.style.opacity=_===S-1?"0.5":"1"};q.addEventListener("click",P=>{P.stopPropagation(),_>0&&(_--,C())}),Y.addEventListener("click",P=>{P.stopPropagation(),_<S-1&&(_++,C())}),C()}return B},c=Array.from(e.children),g=new Map(c.map(b=>[b.dataset.eventId,b])),k=new Set(ze.map(b=>b.id));c.forEach(b=>{let i=b.dataset.eventId;(!i||!k.has(i))&&b.remove()});let w=null;ze.forEach((b,i)=>{let u=g.get(b.id);(!u||t)&&(u&&u.remove(),u=p(b),!u)||(i===0?e.firstElementChild!==u&&e.prepend(u):w&&w.nextElementSibling!==u&&w.after(u),w=u)}),Je=Date.now(),pe(1,Je)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=G("offline","Failed to load events.","The event service may be offline."))}}function Ss(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),a=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ze.forEach(s=>we.add(s.id)),ue(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{we.clear(),ue(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{a.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),s.classList.add("active"),Q=s.dataset.filter||"all",ue(!0)}}),a.dataset.listenerAttached="true"),a&&a.querySelectorAll(".filter-btn").forEach(s=>{s.dataset.filter===Q?s.classList.add("active"):s.classList.remove("active")});let n=document.getElementById("events-clear");n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let s=Q==="all"?"ALL":Q.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let r="/events";if(Q!=="all"?r+=`?category=${Q}`:r+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await H(r,{method:"DELETE"})).ok)throw new Error("Failed to delete events");we.clear(),ue(!0)}catch(r){console.error("Failed to clear events:",r),alert("Failed to clear events. Check console.")}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}function Bt(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Ls=null;async function De(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await H("/logs");if(!e.ok)throw new Error("Logs offline");let a=await e.json();if(!a||a.length===0)return t.innerHTML=G("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let n=["local-model-0","local-cache-0","upstash-redis-rw","upstash-redis-ro","easter-company","easter-company-production","dex-test-service","easter-company-root"],s=a.filter(o=>!n.includes(o.id));s.forEach(o=>{o.logs&&Array.isArray(o.logs)?o.logs.reverse():o.logs=[]}),s.reverse();let r=s.map(o=>{let p=o.logs.join(`
`),c=[...o.logs];if(c.length<25){let k=25-c.length;for(let w=0;w<k;w++)c.push("")}else c.length>25&&(c=c.slice(-25));let g=c.map(k=>qe(k)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${o.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(p)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${o.id}" title="Clear Logs" style="${z()?"display: none;":""}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(o=>{o.addEventListener("click",()=>{let p=o,c=unescape(p.dataset.logs||"");navigator.clipboard.writeText(c).then(()=>{let g=p.querySelector("i");g&&(g.classList.remove("bx-copy"),g.classList.add("bx-check"),setTimeout(()=>{g.classList.remove("bx-check"),g.classList.add("bx-copy")},2e3))})})}),document.querySelectorAll(".clear-logs-btn").forEach(o=>{o.addEventListener("click",async()=>{let c=o.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${c}?`))try{(await H(`/logs?service_id=${c}`,{method:"DELETE"})).ok&&De()}catch(g){console.error("Error clearing logs:",g)}})}),Ls=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=G("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var Ee="STANDBY",Ht=null,ie=[],te=null,st=null,zt=()=>`
    <div id="progress-view-root" class="progress-container" style="flex: 1; overflow-y: auto; padding: 20px;">
        ${Dt()}
    </div>
  `;function Dt(){switch(Ee){case"ACTIVE":return Cs();case"COMPLETED":return Is();case"STANDBY":default:return Ms()}}function Ms(){return`
    <div class="progress-standby">
        <div class="radar-container">
            <div class="orbit-ring orbit-ring-1"></div>
            <div class="orbit-ring orbit-ring-2"></div>
            <div class="radar-brain"><i class='bx bx-brain'></i></div>
        </div>
        <h3 style="margin-bottom: 10px; color: #bb86fc; letter-spacing: 2px; text-transform: uppercase; font-size: 1em;">Cognitive Standby</h3>
        <p style="color: #888; max-width: 400px; font-size: 0.9em; line-height: 1.5; margin: 0 auto;">
            Dexter is currently monitoring system health. <br>
            No active missions in progress.
        </p>
    </div>
  `}function Cs(){let t=ie.map(e=>`
    <div class="terminal-line">
        <span class="line-time">${e.time}</span>
        <span class="line-prefix">></span>
        <span class="line-msg">${O(e.msg)}</span>
    </div>
  `).join("");return`
    <div class="active-task-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <h4 style="margin: 0; font-size: 0.8em; text-transform: uppercase; letter-spacing: 2px; color: #bb86fc; text-align: left;">Active Mission</h4>
                <h2 id="active-task-title" style="margin: 5px 0 0 0; font-size: 1.2em; text-align: left;">${te?.title||"Processing..."}</h2>
            </div>
            <div class="pulse-indicator" style="background: #bb86fc; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px #bb86fc;"></div>
        </div>
        <div class="task-progress-bar">
            <div id="active-task-progress-fill" class="task-progress-fill" style="width: ${te?.progress||0}%"></div>
        </div>
        <div style="margin-top: 8px; display: flex; justify-content: space-between; font-size: 0.75em; font-family: 'JetBrains Mono'; color: #666;">
            <span id="active-task-phase">PHASE: ${te?.phase||"IMPLEMENTATION"}</span>
            <span id="active-task-progress-text">${te?.progress||0}% COMPLETE</span>
        </div>
    </div>

    <div class="thinking-stream-container">
        <div class="terminal-header">
            <div class="terminal-controls">
                <div class="terminal-dot" style="background: #ff5f56;"></div>
                <div class="terminal-dot" style="background: #ffbd2e;"></div>
                <div class="terminal-dot" style="background: #27c93f;"></div>
            </div>
            <div style="font-family: 'JetBrains Mono'; font-size: 0.7em; color: rgba(255, 255, 255, 0.3); text-transform: uppercase;">dexter_fabricator_v3.sh</div>
        </div>
        <div id="terminal-output" class="terminal-content">
            ${t}
        </div>
    </div>
  `}function Is(){return`
    <div class="mission-summary-card">
        <div class="success-icon-wrap">
            <div class="success-pulse-ring"></div>
            <i class='bx bx-check-double'></i>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
            <h4 style="margin: 0; color: #03dac6; text-transform: uppercase; letter-spacing: 3px; font-weight: 800;">Mission Accomplished</h4>
            <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #888;">The objective was successfully fulfilled by the Fabricator.</p>
        </div>

        <div class="summary-stat-grid">
            <div class="summary-stat">
                <span class="summary-stat-value">${st?.duration||"-"}</span>
                <span class="summary-stat-label">Duration</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">Real-time</span>
                <span class="summary-stat-label">Execution</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">100%</span>
                <span class="summary-stat-label">Accuracy</span>
            </div>
        </div>

        <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 30px;">
            <h5 style="margin: 0 0 10px 0; font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px;">Final Result</h5>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-family: 'JetBrains Mono'; font-size: 0.9em; color: #bb86fc;">${st?.result||"Task Finalized"}</span>
                <i class='bx bx-chevron-right' style="color: #444;"></i>
            </div>
        </div>
    </div>
  `}async function Rt(){try{let e=await(await H("/processes")).json(),a=e.active||[],n=e.history||[],s=a.find(o=>o.channel_id==="system-fabricator");if(s){Ee="ACTIVE";let p=Math.floor(Date.now()/1e3)-s.start_time,c=10,g="REVIEW";p>30&&(c=30,g="INVESTIGATION"),p>120&&(c=60,g="CONSTRUCTION"),p>300&&(c=90,g="REPORTING"),te={title:s.state||"Fabricating system improvements...",progress:c,phase:g};let k=new Date(s.updated_at*1e3).toLocaleTimeString();(ie.length===0||ie[ie.length-1].msg!==s.state)&&(ie.push({time:k,msg:s.state}),ie.length>50&&ie.shift())}else{let o=n.find(p=>p.channel_id==="system-fabricator");if(o&&Date.now()/1e3-o.end_time<60){Ee="COMPLETED";let p=o.end_time-o.start_time;st={duration:`${Math.floor(p/60)}m ${p%60}s`,steps:0,result:o.state,timestamp:o.end_time}}else Ee="STANDBY",ie=[]}let r=document.getElementById("progress-view-root");r&&(Ee!==Ht&&(r.innerHTML=Dt(),Ht=Ee),Ee==="ACTIVE"&&As())}catch(t){console.error("Failed to update progress:",t)}}function As(){let t=document.getElementById("active-task-title"),e=document.getElementById("active-task-progress-fill"),a=document.getElementById("active-task-progress-text"),n=document.getElementById("active-task-phase"),s=document.getElementById("terminal-output");if(t&&te&&(t.innerText=te.title),e&&te&&(e.style.width=`${te.progress}%`),a&&te&&(a.innerText=`${te.progress}% COMPLETE`),n&&te&&(n.innerText=`PHASE: ${te.phase}`),s){let r=s.children.length;if(ie.length>r){for(let o=r;o<ie.length;o++){let p=ie[o],c=document.createElement("div");c.className="terminal-line",c.innerHTML=`
            <span class="line-time">${p.time}</span>
            <span class="line-prefix">></span>
            <span class="line-msg">${O(p.msg)}</span>
        `,s.appendChild(c)}s.scrollTop=s.scrollHeight}}}var Ot=()=>{let t=z()?"display: none;":"";return`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary ${z()?'<span style="color: #666; font-size: 0.6em; margin-left: 10px; font-weight: normal; font-style: italic;">* Public data is approximated</span>':""}</h2>
            <button id="system-pause-toggle-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Toggle System Pause"><i class='bx bx-pause'></i></button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span id="system-state-label" style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">System State</span>
                <span id="system-state-val" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Idle Time</span>
                <span id="guardian-total-idle" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Active Time</span>
                <span id="guardian-total-active" style="color: #03dac6; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">System Waste</span>
                <span id="guardian-total-waste" style="color: #cf6679; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
        </div>

        <div class="system-section-header">
            <i class='bx bx-shield' style="color: #bb86fc;"></i>
            <h2>Guardian</h2>
            <button id="guardian-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Sentry Protocol</span>
                    <span id="guardian-sentry-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-sentry-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header">
            <i class='bx bx-search-alt' style="color: #03dac6;"></i>
            <h2>Analyzer</h2>
            <button id="analyzer-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Summary Protocol</span>
                    <span id="analyzer-summary-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="analyzer-summary-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Synthesis Protocol</span>
                    <span id="analyzer-synthesis-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="analyzer-synthesis-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center; gap: 10px;">
            <i class='bx bx-cube-alt' style="color: #03dac6; font-size: 1.5em;"></i>
            <h2 style="margin: 0;">Fabricator</h2>
            <div style="margin-left: auto; display: flex; gap: 8px;">
                <button id="fabricator-progress-btn" class="notif-action-btn" title="View Live Progress"><i class='bx bx-loader-circle'></i></button>
                <button id="fabricator-reset-btn" class="notif-action-btn" style="${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
            </div>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.65em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Review</span>
                    <span id="fabricator-review-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.0em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-review-stats" style="font-size: 0.55em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.65em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Issue</span>
                    <span id="fabricator-issue-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.0em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-issue-stats" style="font-size: 0.55em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.65em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Construct</span>
                    <span id="fabricator-construct-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.0em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-construct-stats" style="font-size: 0.55em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.65em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Reporter</span>
                    <span id="fabricator-reporter-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.0em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-reporter-stats" style="font-size: 0.55em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center; gap: 10px;">
            <i class='bx bx-paper-plane' style="color: #03dac6; font-size: 1.5em;"></i>
            <h2 style="margin: 0;">Courier</h2>
            <button id="courier-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Researcher Protocol</span>
                    <span id="courier-researcher-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="courier-researcher-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center; border-left: 1px solid rgba(255,255,255,0.05);">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Compressor Protocol</span>
                    <span id="courier-compressor-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="courier-compressor-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center; gap: 10px;">
            <i class='bx bx-layer' style="color: #bb86fc; font-size: 1.5em;"></i>
            <h2 style="margin: 0;">Architect</h2>
            <button id="imaginator-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Architect Agent</span>
                    <span id="imaginator-alert_review-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="imaginator-alert_review-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>`},jt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-zap' style="color: #03dac6;"></i>
            <h2>Active Processes</h2>
        </div>
        <div id="processes-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>

        <div class="system-section-header">
            <i class='bx bx-list-ul' style="color: #ff9800;"></i>
            <h2>Process Queue</h2>
        </div>
        <div id="processes-queue-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;">
            <div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">
                No processes in queue
            </div>
        </div>
        
        <div class="system-section-header">
            <i class='bx bx-history' style="color: #888;"></i>
            <h2>Process History</h2>
        </div>
        <div id="processes-history-widgets" class="system-monitor-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,qt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
            <div id="global-service-controls" class="header-controls" style="margin-left: auto; gap: 8px; ${z()?"display: none;":"display: flex;"}">
                <button id="global-restart-btn" class="notif-action-btn" title="Restart All Services"><i class='bx bx-refresh'></i></button>
                <button id="global-stop-btn" class="notif-action-btn" title="Stop All Services"><i class='bx bx-stop'></i></button>
                <button id="global-start-btn" class="notif-action-btn" title="Start All Services"><i class='bx bx-play'></i></button>
            </div>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`;var Ut=()=>`
        <div class="system-section-header">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2>Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;" title="Refresh Data"><i class='bx bx-refresh'></i></button>
        </div>
        <div id="hardware-metrics" class="hardware-grid" style="display: flex; flex-direction: column; gap: 25px; margin-bottom: 30px;">
            <div class="hardware-section" id="hw-os">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-laptop'></i> Operating System</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-cpu">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-chip'></i> CPU</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-ram">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bx-memory-card'></i> RAM</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section" id="hw-gpu">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bxs-card'></i> GPU</h3>
                <div class="hw-content" style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05);"></div>
            </div>
            <div class="hardware-section full-width" id="hw-storage">
                <h3 style="color: #888; margin-bottom: 10px; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; text-align: left;"><i class='bx bxs-hdd'></i> Storage</h3>
                <div class="hw-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;"></div>
            </div>
        </div>`,Ft=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${Bt()}
        </div>`;async function Jt(){_s(),await Promise.all([oe(),Te(),xt()]),await De()}var We=null;function _s(){We||(We=setInterval(()=>{if(!document.getElementById("guardian-sentry-val")){clearInterval(We),We=null;return}oe(!0)},1e3))}var Nt=null;async function Bs(){try{return await(await H("/system_monitor")).json()}catch{return null}}async function Pt(){try{return await(await H("/system/hardware")).json()}catch{return null}}async function Hs(){try{return await(await H("/processes")).json()}catch{return null}}async function zs(){try{return await(await H("/agent/status")).json()}catch{return null}}async function Te(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),a=document.getElementById("global-restart-btn"),n=document.getElementById("global-stop-btn"),s=document.getElementById("global-start-btn"),r=(d,l)=>{d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{let $=d.innerHTML;d.innerHTML="<i class='bx bx-loader-alt spin'></i>",d.disabled=!0;try{await H(`/system/service/${l}`,{method:"POST",body:JSON.stringify({service:"all"})}),setTimeout(()=>Te(),2e3),setTimeout(()=>Te(),5e3),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{d.innerHTML=$,d.disabled=!1},1e3)},1e3)}catch(E){console.error(E),d.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{d.innerHTML=$,d.disabled=!1},2e3)}},d.dataset.listenerAttached="true")};r(a,"restart"),r(n,"stop"),r(s,"start");let o=document.querySelector("#hw-os .hw-content"),p=document.querySelector("#hw-cpu .hw-content"),c=document.querySelector("#hw-ram .hw-content"),g=document.querySelector("#hw-gpu .hw-content"),k=document.querySelector("#hw-storage .hw-content"),w=d=>{if(d){if(o&&(o.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${d.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${d.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),c){let l=(d.MEMORY_BYTES/1073741824).toFixed(1);c.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${l} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(p&&d.CPU&&d.CPU.length>0){let l=d.CPU[0];p.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${l.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${l.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${l.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}g&&(d.GPU&&d.GPU.length>0?g.innerHTML=d.GPU.map(l=>{let $=(l.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${l.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${$} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):g.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),k&&d.STORAGE&&d.STORAGE.length>0?k.innerHTML=d.STORAGE.map(l=>{let $=(l.USED/1073741824).toFixed(1),E=(l.SIZE/(1024*1024*1024)).toFixed(1),m=l.SIZE>0?(l.USED/l.SIZE*100).toFixed(0):0,h=l.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${l.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${h}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${$} GB Used</span>
                            <span>${E} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${Number(m)>90?"#cf6679":"#03dac6"}; width: ${m}%; height: 100%; box-shadow: 0 0 10px ${Number(m)>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):k&&(k.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>";let d=await Pt();d?(w(d),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)):(e.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3))},e.dataset.listenerAttached="true"),p&&!p.hasChildNodes())){let d=await Pt();w(d)}if(!t)return;t.dataset.controlsAttached||(t.addEventListener("click",async d=>{let l=d.target.closest(".svc-btn");if(!l)return;let $=l,E=$.dataset.action,m=$.dataset.service;if(!E||!m)return;let h=$.innerHTML;$.innerHTML="<i class='bx bx-loader-alt spin'></i>",$.classList.add("loading"),$.disabled=!0;try{await H(`/system/service/${E}`,{method:"POST",body:JSON.stringify({service:m})}),setTimeout(()=>Te(),1e3),setTimeout(()=>Te(),3e3)}catch(A){console.error(A),alert(`Failed to ${E} ${m}`),$.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{$.innerHTML=h,$.classList.remove("loading"),$.disabled=!1},2e3)}}),t.dataset.controlsAttached="true");let b=await Bs();if(!b||!b.services){t.children.length===0&&(t.innerHTML=G("offline","Failed to load system metrics.","The event service may be offline."));return}Nt=z()&&be.lastDashboard||Date.now(),pe(3,Nt||0);let i=b.services||[],u={cli:[],fe:[],cs:[],be:[],th:[],co:[],md:[],prd:[],os:[]},L={cli:"CLI",fe:"Front-end",cs:"Core",be:"Backend",th:"Third Party",co:"Cognitive",md:"Models",prd:"Production",os:"Other"};i.forEach(d=>{u[d.type]?u[d.type].push(d):u.os.push(d)});let I="";Object.entries(u).forEach(([d,l])=>{l.length!==0&&(I+=`
            <div class="service-category-header" style="width: 100%; margin: 20px 0 15px 0; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 10px;">
                <span style="color: #888; font-size: 0.75em; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">${L[d]||d}</span>
                <span style="flex: 1; height: 1px; background: rgba(255,255,255,0.02);"></span>
            </div>
            <div class="service-category-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; width: 100%;">
                ${l.map($=>x($)).join("")}
            </div>`)}),t.innerHTML!==I&&(t.innerHTML=I);function v(d){if(!d||d==="N/A"||d==="unknown")return"-";let l=d.match(/^(\d+\.\d+\.\d+)/);return l?l[0]:d.split(".").slice(0,3).join(".")||"-"}function f(d){return!d||d.length<=28?d:d.substring(0,28)+"..."}function y(d){if(!d||d==="N/A"||d==="unknown")return"-";let l=d.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!l)return"-";let $=parseInt(l[1])||0,E=parseInt(l[2])||0,m=parseInt(l[3])||0,h=parseFloat(l[4])||0,A=$*86400+E*3600+m*60+h,M=Math.floor(A/86400);if(M>0)return`${M}d`;let B=Math.floor(A/3600);if(B>0)return`${B}h`;let N=Math.floor(A/60);return N>0?`${N}m`:`${Math.floor(A)}s`}function x(d){if(d.id==="upstash-redis-ro"){let D=z()&&(be.lastFrontend||be.lastDashboard)||Date.now();return`
            <div class="service-widget service-widget-online" data-service-id="upstash-redis-ro">
                <div class="service-widget-header">
                    <i class="bx bx-check-circle"></i>
                    <h3>public-cache</h3>
                    <span class="service-widget-status">OK</span>
                </div>
                <div class="service-widget-body" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 0;">
                    <div style="font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Next Update In</div>
                    <div id="upstash-countdown" style="font-size: 2em; font-weight: bold; color: #fff; font-family: monospace;">--</div>
                    <div class="sync-time-label" style="font-size: 0.6em; color: #444; margin-top: 10px;">Last synced: ${new Date(D).toLocaleTimeString()}</div>
                </div>
            </div>`}let l=d.status==="online",$=l?"service-widget-online":"service-widget-offline",E=l?"bx-check-circle":"bx-x-circle",m=l?"OK":"BAD",h=d.version?v(d.version.str):"-",A=d.cpu&&d.cpu!=="N/A"?d.cpu:"-",M=d.memory&&d.memory!=="N/A"?d.memory:"-",B=A!=="-"?"#00ff00":"#666",N=A!=="-"?"#fff":"#666",q=M!=="-"?"#00ff00":"#666",Y=M!=="-"?"#fff":"#666",_=y(d.uptime),T="",S=d.type!=="os"&&d.type!=="cli"&&d.type!=="prd"&&d.type!=="md",C="";if(S&&!z()&&(C=`
            <div class="service-controls" style="display: flex; gap: 8px; margin-top: 10px; justify-content: flex-end;">
                <button class="svc-btn svc-restart" title="Restart Service" data-action="restart" data-service="${d.id}"><i class='bx bx-refresh'></i></button>
                <button class="svc-btn svc-stop" title="Stop Service" data-action="stop" data-service="${d.id}" ${l?"":"disabled"}><i class='bx bx-stop'></i></button>
                <button class="svc-btn svc-start" title="Start Service" data-action="start" data-service="${d.id}" ${l?"disabled":""}><i class='bx bx-play'></i></button>
            </div>`),l){let D=d.type==="md"?"Size:":"Version:",K=d.type==="md"?d.memory:h,U=d.type==="md"?"Type:":"RAM:",j=d.type==="md"?d.health_message||"Model":M;T=`
                <div class="service-widget-info">
                    <span class="info-label">${D}</span>
                    <span class="info-value metric-version-monospace">${K}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${_}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${B};"></i>
                        <span style="color: ${N};">${A}</span>
                    </div>
                    <div class="service-widget-item" title="${U}">
                        <i class="bx bxs-chip" style="color: ${q};"></i>
                        <span style="color: ${Y};">${j}</span>
                    </div>
                </div>${C}`}else T=`<div class="service-widget-footer offline" style="justify-content: center; opacity: 0.5; letter-spacing: 2px; font-weight: bold;"><span>OFFLINE</span></div>${C}`;let P=z()||d.type==="md"?"easter.company":f(d.domain&&d.port?`${d.domain}:${d.port}`:"");return`<div class="service-widget ${$}" data-service-id="${d.id}"><div class="service-widget-header"><i class="bx ${E}"></i><h3>${d.short_name||d.id}</h3><span class="service-widget-status">${m}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${P}</span></div>${T}</div></div>`}}async function oe(t=!1){let e=document.getElementById("processes-widgets");if(!e&&!t)return;let a=document.getElementById("guardian-sentry-val"),n=document.getElementById("guardian-idle-val"),s=document.getElementById("guardian-total-idle"),r=document.getElementById("guardian-total-active"),o=document.getElementById("guardian-total-waste"),p=document.getElementById("guardian-reset-btn"),c=document.getElementById("analyzer-reset-btn"),g=document.getElementById("fabricator-reset-btn"),k=document.getElementById("fabricator-progress-btn"),w=document.getElementById("courier-reset-btn"),b=document.getElementById("system-pause-toggle-btn");k&&!k.dataset.listenerAttached&&(k.onclick=()=>{let d=re({id:"fabricator-progress-window",title:"Mission Control",icon:"bx-loader-circle",className:"full-screen-modal",content:`
          <div class="mission-control-overlay">
            <div class="progress-section" style="height: 100%; display: flex; flex-direction: column;">
                <div class="system-section-header" style="margin-bottom: 20px;">
                    <i class='bx bx-loader-circle spin' style="color: #03dac6;"></i>
                    <h2>Fabricator Live Stream</h2>
                    <button class="notif-action-btn close-modal-btn" style="margin-left: auto;"><i class='bx bx-x'></i></button>
                </div>
                ${zt()}
            </div>
          </div>
        `,onOpen:()=>{let l=document.getElementById("fabricator-progress-window");l&&l.querySelector(".close-modal-btn")?.addEventListener("click",()=>d.close()),Rt()}});d.open()},k.dataset.listenerAttached="true"),b&&!b.dataset.listenerAttached&&(b.onclick=async()=>{let l=b.querySelector(".bx-play")?"/agent/resume":"/agent/pause";b.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H(l,{method:"POST"}),await oe()}catch{b.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>oe(),2e3)}},b.dataset.listenerAttached="true"),p&&!p.dataset.listenerAttached&&(p.onclick=async()=>{p.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?protocol=all",{method:"POST"}),setTimeout(()=>{p.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{p.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),oe()}catch{p.innerHTML="<i class='bx bx-error'></i>"}},p.dataset.listenerAttached="true"),c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{c.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?protocol=synthesis",{method:"POST"}),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{c.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),oe()}catch{c.innerHTML="<i class='bx bx-error'></i>"}},c.dataset.listenerAttached="true"),g&&!g.dataset.listenerAttached&&(g.onclick=async()=>{g.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?protocol=review",{method:"POST"}),setTimeout(()=>{g.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{g.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),oe()}catch{g.innerHTML="<i class='bx bx-error'></i>"}},g.dataset.listenerAttached="true"),w&&!w.dataset.listenerAttached&&(w.onclick=async()=>{w.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?protocol=researcher",{method:"POST"}),setTimeout(()=>{w.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{w.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),oe()}catch{w.innerHTML="<i class='bx bx-error'></i>"}},w.dataset.listenerAttached="true");let i=document.getElementById("imaginator-reset-btn");i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{i.innerHTML="<i class='bx bx-loader-alt spin'></i>",setTimeout(()=>{i.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{i.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500)},i.dataset.listenerAttached="true");let u=await zs();if(u&&u.agents){let d=u.agents.guardian||{protocols:{}},l=u.agents.analyzer||{protocols:{}},$=u.agents.architect||{protocols:{}},E=u.agents.fabricator||{protocols:{}},m=u.agents.courier||{protocols:{}},h=u.system||{},A=Math.floor(Date.now()/1e3),M={sentry:"Sentry",synthesis:"Synthesis",architect:"Architect",review:"Review",issue:"Issue",construct:"Construct",reporter:"Reporter",researcher:"Researcher",compressor:"Compressor"},B=J=>{J<0&&(J=0);let Z=Math.floor(J/3600),W=Math.floor(J%3600/60),$e=J%60;return Z>0?`${Z}h ${W}m`:W>0?`${W}m ${$e}s`:`${$e}s`},N=(J,Z,W,$e,ge)=>{if(!J)return;let Ce=M[$e]||$e.toUpperCase(),ot=J.parentElement?.querySelector('span[style*="text-transform: uppercase"]');if(ot&&(ot.textContent=Ce),ge==="paused"){J.textContent="PAUSED",J.style.color="#ff9800";return}if(!W){J.textContent="Inactive",J.style.color="#666";return}let rt=W.status;if(rt==="Working")J.textContent="Working",J.style.color="#bb86fc";else if(rt==="Ready")J.textContent="Ready",J.style.color="#5eff5e";else{let Pe=W.cooldown;if(z()&&(Pe=W.next_run-A),Pe<=0)J.textContent="Ready",J.style.color="#5eff5e";else{let es=Math.floor(Pe/60),ts=Pe%60;J.textContent=`${es}m ${ts}s`,J.style.color="#fff"}}Z&&W.stats&&(Z.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <span>Runs: ${W.stats.runs||0}</span>
              <span style="color: ${W.stats.failures>0?"#ffa500":"#666"}">Fails: ${W.stats.failures||0}</span>
              <span style="color: ${W.stats.aborted>0?"#ff4d4d":"#666"}">Aborted: ${W.stats.aborted||0}</span>
            </div>
          `)};a&&N(a,document.getElementById("guardian-sentry-stats"),d.protocols.sentry,"sentry",h.state);let q=document.getElementById("analyzer-summary-val"),Y=document.getElementById("analyzer-summary-stats");q&&N(q,Y,l.protocols.summary,"summary",h.state);let _=document.getElementById("analyzer-synthesis-val"),T=document.getElementById("analyzer-synthesis-stats");_&&N(_,T,l.protocols.synthesis,"synthesis",h.state);let S=document.getElementById("imaginator-alert_review-val"),C=document.getElementById("imaginator-alert_review-stats");S&&N(S,C,$.protocols.architect,"architect",h.state);let P=document.getElementById("fabricator-review-val"),D=document.getElementById("fabricator-review-stats");P&&N(P,D,E.protocols.review,"review",h.state);let K=document.getElementById("fabricator-issue-val"),U=document.getElementById("fabricator-issue-stats");K&&N(K,U,E.protocols.issue,"issue",h.state);let j=document.getElementById("fabricator-construct-val"),F=document.getElementById("fabricator-construct-stats");j&&N(j,F,E.protocols.construct,"construct",h.state);let V=document.getElementById("fabricator-reporter-val"),ee=document.getElementById("fabricator-reporter-stats");V&&N(V,ee,E.protocols.reporter,"reporter",h.state);let X=document.getElementById("courier-researcher-val"),Me=document.getElementById("courier-researcher-stats");X&&N(X,Me,m.protocols.researcher,"researcher",h.state);let Re=document.getElementById("courier-compressor-val"),Ve=document.getElementById("courier-compressor-stats");Re&&N(Re,Ve,m.protocols.compressor,"compressor",h.state);let Ne=document.getElementById("system-state-label"),fe=document.getElementById("system-state-val");if(fe&&h.state){let J=h.state,Z=B(h.state_time||0);Ne&&(Ne.textContent=`State: ${J.toUpperCase()}`),fe.textContent=Z,J==="idle"?fe.style.color=h.state_time>300?"#5eff5e":"#fff":fe.style.color="#bb86fc",b&&(J==="paused"?(b.innerHTML="<i class='bx bx-play'></i>",b.title="Resume System",b.style.color="#ff9800"):(b.innerHTML="<i class='bx bx-pause'></i>",b.title="Pause System",b.style.color=""))}s&&(s.textContent=B(h.metrics?.total_idle_time||0)),r&&(r.textContent=B(h.metrics?.total_active_time||0)),o&&(o.textContent=B(h.metrics?.total_waste_time||0))}else[a,n,s,r,o].forEach(l=>{l&&(l.textContent="-",l.style.color="#666")});if(t)return;let L=await Hs(),I=[],v=[],f=[];L&&(Array.isArray(L)?I=L:(I=L.active||[],v=L.queue||[],f=L.history||[],f.sort((d,l)=>(l.end_time||0)-(d.end_time||0)))),e&&(I.length===0?e.querySelector(".tab-placeholder")||(e.innerHTML=G("empty","No active processes.")):((e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML=""),nt(e,I,!1)));let y=document.getElementById("processes-queue-widgets");y&&(v.length===0?!y.querySelector(".tab-placeholder")&&!y.querySelector('div[style*="font-style: italic"]')&&(y.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(y.innerHTML="",nt(y,v,!1)));let x=document.getElementById("processes-history-widgets");x&&(f.length===0?x.querySelector(".tab-placeholder")||(x.innerHTML=G("empty","No recent history.")):(x.querySelector(".tab-placeholder")&&(x.innerHTML=""),nt(x,f,!0))),vt(1,I.length)}function nt(t,e,a){function n(c){let g="";c.end_time?g=`${c.end_time-c.start_time}s`:g=`${Math.floor(Date.now()/1e3-c.start_time)}s`;let k=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",w=c.channel_id,b={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation","system-analyzer":"Analyzer Agent","system-courier":"Courier Agent","system-architect":"Architect Agent","system-fabricator":"Fabricator Agent","system-test":"System Validation","voice-mode":"Voice Interaction"};if(b[w]?w=b[w]:/^\d+$/.test(w)&&(w=`Channel ${w}`),a)return`
        <div class="process-history-item" data-channel-id="${c.channel_id}-${c.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${w}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${c.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${c.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${g}</span>
            </div>
        </div>`;let i=c.channel_id==="system-test",u=i?"#03dac6":"#fff",L=i?"border: 1px solid #03dac644;":"",I=i?"bx-shield-quarter":"bx-cog";return`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}-${c.start_time}" style="${L}">
                    <div class="service-widget-header">
                        <i class="bx ${I}" style="color: ${u}"></i>
                        <h3 style="color: ${u}">${w}</h3>
                        ${k}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${u}">${c.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${u}">${g}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${u}">${c.pid}</span>
                        </div>
                    </div>
                </div>`}let s=a?".process-history-item":".process-widget",r=new Map(Array.from(t.querySelectorAll(s)).map(c=>[c.dataset.channelId,c])),o=new Set(e.map(c=>`${c.channel_id}-${c.start_time}`));for(let[c,g]of r)c&&!o.has(c)&&g.remove();let p=new Set;e.forEach(c=>{let g=`${c.channel_id}-${c.start_time}`;if(p.has(g))return;p.add(g);let k=n(c),w=r.get(g);if(w&&w.parentNode){w.outerHTML!==k&&(w.outerHTML=k);let b=t.querySelector(`[data-channel-id="${g}"]`);b&&t.appendChild(b)}else t.insertAdjacentHTML("beforeend",k)})}function Ge(){let t=Ke(),e="Notification"in window,a={enabled:e&&Notification.permission==="granted",supported:e};return`
            <div class="theme-selector">
                ${Object.values(se).map(n=>`
                    <div class="theme-card ${t===n?"active":""}" data-theme="${n}">
                        <div class="theme-preview theme-preview-${n.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${n.charAt(0).toUpperCase()+n.slice(1)}</h3>
                            <p>${n===se.DARK?"Simple, clean, dark.":n===se.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
                            <span class="theme-badge">${t===n?"Active":"Select"}</span>
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
                </div>
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Service Configuration</h2>
                <div id="service-config-list" class="settings-list">
                    <div style="padding: 20px; text-align: center; color: #666;">
                        <i class='bx bx-loader-alt spin'></i> Loading configuration...
                    </div>
                </div>
            </div>`}function it(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(n=>{n.addEventListener("click",function(){let s=this.dataset.theme;s&&(ut(s),t.setContent(Ge()),it(t))})});let a=document.getElementById("notifications-toggle");a&&"Notification"in window?a.onclick=async n=>{let s=n.target;if(s.checked)try{await Notification.requestPermission()!=="granted"&&(s.checked=!1)}catch{s.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.checked=!0)}:a&&(a.disabled=!0),Ds()}async function Ds(){let t=document.getElementById("service-config-list");if(!t)return;let e=z();try{let n=await(await H("/system/options")).json(),s=n.services||n||{},r="",o=(p,c,g)=>`

        <div class="settings-item">

            <div class="settings-item-info">

                <span class="settings-item-label">${p}</span>

                <span class="settings-item-description">Enable GPU acceleration (CUDA)</span>

            </div>

            <label class="toggle-switch">

                <input type="checkbox" class="service-device-toggle" data-service="${c}" ${g==="cuda"?"checked":""} ${e?"disabled":""}>

                <span class="toggle-slider"></span>

            </label>

        </div>`;if(s.stt&&(r+=o("STT Service","stt",s.stt.device||"cpu")),s.tts&&(r+=o("TTS Service","tts",s.tts.device||"cpu")),r?e&&(r+='<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Service configuration is read-only in public mode.</div>'):r='<div style="padding: 20px; text-align: center; color: #666;">No configurable services found.</div>',t.innerHTML=r,e)return;t.querySelectorAll(".service-device-toggle").forEach(p=>{p.addEventListener("change",async c=>{let g=c.target,k=g.dataset.service,w=g.checked?"cuda":"cpu";g.disabled=!0;try{await H("/system/options",{method:"POST",body:JSON.stringify({service:k,key:"device",value:w})})}catch{g.checked=!g.checked,alert("Failed to update configuration.")}finally{g.disabled=!1}})})}catch{t.innerHTML='<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load configuration.</div>'}}var Gt=()=>`
        <div style="display: flex; flex-direction: column; height: 100%;">
            <div class="system-section-header" style="flex-shrink: 0;">
                <i class='bx bx-globe' style="color: #03dac6;"></i>
                <h2>Web History</h2>
                <button id="web-refresh-btn" class="notif-action-btn" style="margin-left: auto;" title="Refresh Data"><i class='bx bx-refresh'></i></button>
            </div>
            <div id="web-carousel-container" style="flex: 1; position: relative; min-height: 0; overflow: hidden;">
                <div id="web-history-content" style="height: 100%;"></div>
            </div>
        </div>
    `;async function Vt(){let t=document.getElementById("web-history-content");if(!t)return;let e=document.getElementById("web-refresh-btn");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await Wt(t),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),await Wt(t)}async function Wt(t){try{let e=await H("/web/history");if(!e.ok)throw new Error("Failed to fetch history");let a=await e.json();if(!a||a.length===0){t.innerHTML=G("empty","No web history found.");return}let n=`
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div class="web-carousel" style="flex: 1; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 20px; padding-bottom: 5px; scroll-behavior: smooth; min-height: 0;">
        `;a.forEach((p,c)=>{let g=new Date(p.timestamp*1e3).toLocaleString([],{dateStyle:"short",timeStyle:"short"}),k=p.screenshot?`<img src="data:image/png;base64,${p.screenshot}" style="width: 100%; max-height: 45%; object-fit: contain; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px; flex-shrink: 0; background: #000;">`:`<div style="width: 100%; height: 120px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444; margin-bottom: 15px; border-radius: 8px; flex-shrink: 0;">
            <i class='bx bx-image-alt' style="font-size: 2.5rem; margin-bottom: 8px; opacity: 0.3;"></i>
            <span style="font-size: 0.7em; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;">No Screenshot Available</span>
           </div>`;n+=`
                <div class="web-card" style="flex: 0 0 100%; height: 100%; display: flex; flex-direction: column; scroll-snap-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; box-sizing: border-box; max-width: 100%; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px; flex-shrink: 0;">
                        <span style="color: #03dac6; font-weight: bold; font-family: monospace;">#${c+1}</span>
                        <span style="color: #888; font-size: 0.8em; font-family: monospace;">${g}</span>
                    </div>
                    <h3 style="margin-bottom: 5px; color: #fff; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; font-size: 1.1em;">${p.title||"No Title"}</h3>
                    <a href="${p.url}" target="_blank" style="color: #bb86fc; font-size: 0.8em; margin-bottom: 15px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; text-decoration: none;">${p.url}</a>
                    
                    ${k}

                    <div style="flex: 1; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px; overflow-y: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; color: #aaa; white-space: pre-wrap; border: 1px solid rgba(255,255,255,0.03);">${p.content?p.content.replace(/</g,"&lt;").replace(/>/g,"&gt;"):"No content available"}</div>
                </div>
            `}),n+=`
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 0 0; flex-shrink: 0;">
                    <button id="web-prev-btn" class="notif-action-btn" style="margin-right: auto;"><i class='bx bx-left-arrow-alt'></i> Prev</button>
                    <span style="color: #555; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px;">Swipe to navigate</span>
                    <button id="web-next-btn" class="notif-action-btn" style="margin-left: auto;">Next <i class='bx bx-right-arrow-alt'></i></button>
                </div>
            </div>
        `,t.innerHTML=n;let s=t.querySelector(".web-carousel"),r=t.querySelector("#web-prev-btn"),o=t.querySelector("#web-next-btn");r&&(r.onclick=()=>{s.scrollBy({left:-s.offsetWidth,behavior:"smooth"})}),o&&(o.onclick=()=>{s.scrollBy({left:s.offsetWidth,behavior:"smooth"})})}catch(e){t.innerHTML=G("error","Failed to load web history.",e.message)}}var Xt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It maintains system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1] [--force]
0 = Full Analysis (Default)
1 = Tier 1 Only (Reports)`},demo_output:["\u2588 \x1B[1mGUARDIAN TECHNICAL SENTRY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m[INFO] Verifying system state...\x1B[0m"," \x1B[32m\u2713\x1B[0m No ongoing processes detected."," \x1B[32m\u2713\x1B[0m System idle time requirement met (312s).","","\x1B[1mInitializing Sentry Analysis...\x1B[0m","\x1B[94m\u2192 Executing Tier 1: Technical Sentry...\x1B[0m"," \x1B[90m\u2699\uFE0F  Auditing 50 system events...\x1B[0m"," \x1B[90m\u2699\uFE0F  Analyzing recent service logs...\x1B[0m"," \x1B[90m\u2699\uFE0F  Executing pre-analysis test suite...\x1B[0m","","# [SYSTEM] Service Connectivity Alert","**Priority**: high","**Body**: dex-tts-service reported 3 consecutive timeouts.","","\x1B[32m\u2713 Guardian run completed successfully.\x1B[0m","\x1B[90m  Duration: 14.2s | Waste: 0s | Reliability: 100%\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
dex stop
dex restart`},demo_output:["\u2192 Restarting dex-event-service...","\x1B[32m\u2713\x1B[0m Service stopped (PID 19420)","\x1B[32m\u2713\x1B[0m Service started (PID 20155)","\u2192 Verifying health check (http://127.0.0.1:8100/status)...","\x1B[32m\u2713\x1B[0m Response received in 12ms.","","\x1B[1mService uptime: 4 seconds\x1B[0m"]},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the status of CLI and services.",usage:"dex status [service]",category:"system",docs:{overview:"The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.",details:["Reports status (online/offline/degraded).","Displays version strings and build hashes.","Shows network addresses and ports.","Validates internal service-to-service communication."],extended_usage:"dex status [service_id|all]"},demo_output:["\u2588 \x1B[1mSERVICE STATUS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE  ADDRESS          VERSION  BRANCH   COMMIT   STATUS   UPTIME           CPU      MEM","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500          \u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500      \u2500\u2500\u2500","cli      local            2.8.143  main     240fc38  \x1B[32mOK\x1B[0m       \x1B[90m--\x1B[0m               \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m","event    127.0.0.1:8100   2.8.198  main     a8f2b1c  \x1B[32mOK\x1B[0m       14h22m           0.2%     12.4 MB","discord  127.0.0.1:8300   2.8.68   main     6e2d1a4  \x1B[32mOK\x1B[0m       14h22m           0.1%     24.8 MB","tts      127.0.0.1:8200   0.0.25   main     f2e1d0c  \x1B[32mOK\x1B[0m       14h22m           0.0%     1.2 GB","web      127.0.0.1:8201   0.0.5    main     b1c2d3e  \x1B[32mOK\x1B[0m       14h22m           0.0%     42.1 MB","model    127.0.0.1:8400   OK       \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       4d12h            0.5%     8.4 GB","cache    127.0.0.1:6379   7.4.1    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       32d              0.1%     4.2 MB"]},{id:"logs",title:"Logs",icon:"bx-terminal",description:"View or tail service logs.",usage:"dex logs <service> [-f]",category:"system",docs:{overview:"Logs provides real-time observability into the background processes of the Dexter services.",details:["Tail live output from systemd services.","Support for following (-f) and history limiting.","ANSI color support for terminal readability.","Aggregated view for multi-instance deployments."],extended_usage:"dex logs <service_id> [-f]"},demo_output:["\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:05\x1B[0m [INFO] Joined voice channel: 1437617331...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:08\x1B[0m [DEBUG] VAD triggered by user oweneaster","\x1B[35m[EVENT]\x1B[0m   \x1B[90m14:30:09\x1B[0m [INFO] Emitted: messaging.user.speaking.started","\x1B[32m[TTS]\x1B[0m     \x1B[90m14:30:12\x1B[0m [INFO] Generating audio for 12 words...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:15\x1B[0m [SUCCESS] Audio playback completed.","\x1B[90m[Watching for new logs...]\x1B[0m"]},{id:"event",title:"Event",icon:"bx-broadcast",description:"Interact with the Event Service.",usage:"dex event [log|service|analyst|delete]",category:"system",docs:{overview:"The event bus interface for manual debugging and data extraction.",details:["Query the history of the system event log.","Manually reset analyst tier timers.","Filter events by type, service, or count.","Delete historical events matching patterns."],extended_usage:`dex event log [-n count] [-t type]
dex event analyst [status|reset]
dex event delete <pattern>`},demo_output:["\u2588 \x1B[1mLAST 20 EVENTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m14:42:01\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[38;5;208mCMD: dex guardian [] (success)\x1B[0m","\x1B[90m14:42:02\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[35m[INFO] Analysis complete: No significant insights found.\x1B[0m","\x1B[90m14:45:10\x1B[0m \x1B[90mdiscord        \x1B[0m | \x1B[34moweneaster: Dexter, run a system scan.\x1B[0m","\x1B[90m14:45:12\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[32mPROC+: system-cli-op (started)\x1B[0m","\x1B[90m14:45:15\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[31m[ERROR] Connection timeout to Redis.\x1B[0m"]},{id:"discord",title:"Discord",icon:"bx-bot",description:"Interact with the Discord Service.",usage:"dex discord [contacts|channels|service|quiet]",category:"system",docs:{overview:"Direct control over the Discord bot integration and audio engine.",details:["List all guild members and their permission levels.","Inspect channel structures and user presence.",'Toggle "Quiet Mode" for public interactions.',"Check raw service state and gateway health."],extended_usage:`dex discord contacts
dex discord quiet [on|off]`},demo_output:["\u2588 \x1B[1mDISCORD CONTACTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Fetching guild members...","","\u2588 Server: Easter Company (12 members) \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","LEVEL           USERNAME        STATUS   DISCORD ID","\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[35mDEXTER (ME)\x1B[0m     Dexter          \x1B[32monline\x1B[0m   \x1B[90m1313...0432\x1B[0m","\x1B[35mMASTER\x1B[0m          oweneaster      \x1B[32monline\x1B[0m   \x1B[90m3130...7920\x1B[0m","\x1B[31mADMIN\x1B[0m           Developer       \x1B[33midle\x1B[0m     \x1B[90m4242...8181\x1B[0m","\x1B[37mUSER\x1B[0m            GuestUser       \x1B[90moffline\x1B[0m  \x1B[90m9999...9999\x1B[0m"]},{id:"model",title:"Model",icon:"bx-brain",description:"Run the Model Hub executable or sync neural models.",usage:"dex model [pull|sync|list]",category:"system",docs:{overview:"Proxy command for managing local LLMs and neural vision models via the Hub.",details:["Wraps the Model Hub (orchestrating Ollama and dedicated spokes).","Added 'pull' subcommand to sync all Dexter-required models.","Synchronizes custom model templates automatically.","Validates model weight checksums."],extended_usage:`dex model pull
dex model run gemma-2-2b`},demo_output:["\x1B[34m[HUB]\x1B[0m Synchronizing custom Dexter models...","Pulling base models...","Pulling gemma-2-2b... \x1B[32m[100%]\x1B[0m","\x1B[32m\u2713 Successfully pulled model: gemma-2-2b\x1B[0m","Creating custom Dexter models...","  Rebuilding dex-commit from gemma-2-2b...","\x1B[32m\u2713   Created dex-commit\x1B[0m","\x1B[32m\u2713 Models are up-to-date.\x1B[0m"]},{id:"system",title:"System Info",icon:"bx-info-square",description:"Show system info and manage packages.",usage:"dex system [info|scan|validate|install]",category:"system",docs:{overview:"Performance observability tool focused on AI resource availability.",details:["Scans and reports CPU, GPU, RAM, and Storage vitals.","Validates presence of required system packages.","Handles automatic installation of missing dependencies.","Exports telemetry data in JSON format."],extended_usage:`dex system scan
dex system validate
dex system install <package>`},demo_output:["\u2588 \x1B[1mSYSTEM CONFIGURATION\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Category        Value","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500","CPU (Generic)   Cores: 16, Threads: 32","                Avg Clock: 4.20 GHz","GPU 0           NVIDIA GeForce RTX 4090, VRAM: 24.0 GB, CUDA: 1204","Memory          64.0 GB","Storage         2.0 TB (1 devices)","                /dev/nvme0n1p3: 450.2 GB / 1862.4 GB (/)","Packages        ","                \x1B[32m\u2713 12 checks passed\x1B[0m"]},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Show service config or a specific field.",usage:"dex config <service> [field...]",category:"system",docs:{overview:"Manages the central registry that defines service interaction.",details:["View service definitions (domains, ports, IDs).","Modify environment-specific parameters.","Update authentication secrets and API endpoints.","Supports JSON path traversal for deep fields."],extended_usage:`dex config <service> [field]
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Rs=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEXTER</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>

            <div class="cli-install-section">
                <div class="cli-install-header">
                    <i class='bx bxs-download'></i>
                    <h2>One-Step Installation</h2>
                </div>
                <div class="cli-install-command" id="install-command-copy">
                    <code>curl -sSL https://easter.company/scripts/dex.sh | bash</code>
                    <i class='bx bx-copy'></i>
                </div>
                <p class="cli-install-note">Installs the latest pre-built binary for Arch/Debian Linux.</p>
            </div>

            <div class="cli-divider">
                <i class='bx bx-chevron-down'></i>
                <span>Interactive Demos</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;for(let[a,n]of Object.entries(t)){let s=Xt.filter(r=>r.category===a);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${n.icon}' style="color: ${n.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${n.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(r=>`
                        <div class="cli-command-card ${r.dummy?"dummy":""}" data-cmd="${r.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${n.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${r.icon}' style="font-size: 2em; color: ${n.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${r.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${r.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${n.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${r.usage}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `)}return e+=`
        <div class="cli-divider">
            <i class='bx bx-chevron-down'></i>
            <span>Join the Evolution</span>
            <i class='bx bx-chevron-down'></i>
        </div>

        <div class="cli-contribute-section">
            <div class="cli-contribute-card">
                <i class='bx bxl-github'></i>
                <h3>Open Source</h3>
                <p>Dexter is built with the help of creators around the world. Every contribution counts.</p>
                <a href="/contribute" class="action-btn">CONTRIBUTE</a>
            </div>
            <div class="cli-contribute-card">
                <i class='bx bxl-discord-alt'></i>
                <h3>Community</h3>
                <p>Join our Discord to stay updated, suggest new features, and interact with the community using the Dexter engine.</p>
                <a href="https://discord.gg/eastercompany" target="_blank" class="action-btn">JOIN DISCORD</a>
            </div>
        </div>
    </div>`,e},at=!1;function Ns(t){let e=document.getElementById("cli-terminal-overlay");if(!e){e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e);let c=document.getElementById("close-terminal-btn");c&&(c.onclick=()=>Kt());let g=document.getElementById("terminal-action-btn");g&&(g.onclick=()=>Kt())}let a=document.getElementById("cli-terminal-body"),n=document.getElementById("cli-docs-pane");a&&(a.innerHTML="");let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};n&&(n.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${s.overview}</p>
        </div>
        ${s.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${s.details.map(c=>`<li>${c}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${s.extended_usage}</pre>
        </div>
    `);let r=document.getElementById("terminal-cmd-name");r&&(r.textContent=`dex ${t.id}`);let o=document.getElementById("terminal-status-badge");o&&(o.className="terminal-status status-running",o.textContent="Running");let p=document.getElementById("terminal-action-btn");return p&&(p.style.display="none"),e.classList.add("active"),document.body.style.overflow="hidden",at=!0,a}function Kt(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),ae()||(document.body.style.overflow=""),at=!1}function Yt(t,e,a="output"){if(!at||!t)return;let n=document.createElement("div");if(n.className=`terminal-line terminal-${a}`,a==="prompt")n.innerHTML=`<span class="terminal-prompt">$</span> ${e}`;else{let s=qe(e);n.innerHTML=s||e}t.appendChild(n),t.scrollTop=t.scrollHeight}async function Ps(t){let e=Xt.find(o=>o.id===t);if(!e)return;let a=Ns(e);a&&Yt(a,`dex ${t}`,"prompt");let n=e.demo_output||["Executing command...","\u2713 Done."];for(let o of n){await new Promise(c=>setTimeout(c,400+Math.random()*600));let p="output";o.includes("[ERROR]")?p="error":o.includes("[SUCCESS]")||o.includes("\u2713")?p="success":o.includes("!")&&(p="warning"),a&&Yt(a,o,p)}let s=document.getElementById("terminal-status-badge");s&&(s.className="terminal-status status-success",s.textContent="Completed (Demo)");let r=document.getElementById("terminal-action-btn");r&&(r.style.display="block")}function Zt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Rs();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let a=e.querySelector("code"),n=a?a.textContent:"";n&&navigator.clipboard.writeText(n).then(()=>{let s=e.querySelector("i");s&&(s.className="bx bx-check",s.style.color="#5eff5e",setTimeout(()=>{s.className="bx bx-copy",s.style.color="#bb86fc"},2e3))})}),t.querySelectorAll(".cli-command-card").forEach(a=>{let n=a;a.addEventListener("mouseenter",()=>{n.style.transform="translateY(-5px)",n.style.borderColor="rgba(255,255,255,0.15)",n.style.backgroundColor="rgba(255,255,255,0.05)"}),a.addEventListener("mouseleave",()=>{n.style.transform="translateY(0)",n.style.borderColor="rgba(255,255,255,0.05)",n.style.backgroundColor="rgba(255,255,255,0.03)"}),a.addEventListener("click",()=>{let s=n.dataset.cmd;s&&Ps(s)})})}async function Os(){if(!z())try{if(!(await H("/system/status",{method:"GET"})).ok)throw new Error("Service unhealthy")}catch(t){console.error("Service health check failed:",t)}}function Qt(){if(window.location.protocol==="http:"&&window.location.hostname==="easter.company"){window.location.replace("https://"+window.location.hostname+window.location.pathname+window.location.search);return}ct(),dt(),Os(),gt(),lt();let t=window.location.pathname;(t==="/dexter"||t==="/dexter/")&&Zt();let e=[],a=document.getElementById("windows-container");a&&a.setAttribute("data-count","0");let n=v=>{localStorage.setItem("dex_last_window",v)};function s(){for(;e.length>1;)e.shift().close(!0);let v=document.getElementById("windows-container"),f=document.querySelector("nav"),y=document.querySelector("footer"),x=window.location.pathname==="/"||window.location.pathname==="/index.html",d=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");v&&v.setAttribute("data-count",e.length.toString()),e.forEach(M=>{let B=document.getElementById(M.id);B&&B.classList.remove("hide-close")});let l=document.getElementById("dexter-menu-container"),$=document.getElementById("nav-window-switcher"),E=document.getElementById("settings-icon"),m=document.getElementById("docs-icon"),h=document.getElementById("close-all-windows"),A=window.innerWidth<880;if(!A){let M=document.getElementById("dexter-dropdown"),B=document.getElementById("dexter-menu-btn");M&&M.classList.remove("active"),B&&B.classList.remove("active"),v&&v.classList.remove("menu-open")}if(ke(e.length>0),e.length>0)if(y?.classList.add("hide"),h&&(h.style.display=A?"none":"block"),document.querySelector("main")?.style.setProperty("opacity","0","important"),document.body.style.overflow="hidden",f?.classList.add("window-open"),v&&(v.style.paddingTop="60px"),l&&(l.style.display=A?"flex":"none"),m&&(m.style.display=A?"block":"none"),E&&(E.style.display=A?"block":"none"),!A&&$){let M=e[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(M)?($.innerHTML=`
                      <div class="nav-switch-btn ${M==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${M==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${M==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${M==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${M==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts")?.addEventListener("click",()=>{n("alerts-window"),r(p)}),document.getElementById("switch-events")?.addEventListener("click",()=>{n("events-window"),r(c)}),document.getElementById("switch-monitor")?.addEventListener("click",()=>{n("monitor-window"),r(k)}),document.getElementById("switch-contacts")?.addEventListener("click",()=>{n("contacts-window"),r(g)}),document.getElementById("switch-workspace")?.addEventListener("click",()=>{n("workspace-window"),r(w)})):$.innerHTML=""}else $&&($.innerHTML="");else f?.classList.remove("window-open"),h&&(h.style.display="none"),v&&(v.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),ae()||(document.body.style.overflow=""),x||d?y?.classList.remove("hide"):y?.classList.add("hide"),l&&(l.style.display="flex"),m&&(m.style.display="block"),E&&(E.style.display="block"),$&&($.innerHTML="");Ie()}function r(v){if(v.isOpen()){v.close();return}for(;e.length>0;)e.pop().close(!0);e.push(v),v.open(),s()}function o(){[...e].forEach(f=>f.close()),e=[]}window.addEventListener("resize",s);let p=re({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Et(),onOpen:()=>me(),onClose:()=>{let v=e.indexOf(p);v>-1&&e.splice(v,1),s()}}),c=re({id:"events-window",title:"Events",icon:"bx-calendar-event",content:tt(),onOpen:()=>{c.setContent(tt()),ue()},onClose:()=>{let v=e.indexOf(c);v>-1&&e.splice(v,1),s()}}),g=re({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:At(),onOpen:()=>et(),onClose:()=>{let v=e.indexOf(g);v>-1&&e.splice(v,1),s()}}),k=re({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-component",title:"Processes",content:jt()},{icon:"bxs-zap",title:"Agents",content:Ot()},{icon:"bx-globe",title:"Web",content:Gt()},{icon:"bxs-server",title:"Services",content:qt()},{icon:"bxs-terminal",title:"Logs",content:Ft()},{icon:"bxs-hdd",title:"Hardware",content:Ut()}].filter(v=>z()?v.title!=="Hardware"&&v.title!=="Logs":!0),onOpen:()=>{oe(),Te(),Vt(),De()},onClose:()=>{let v=e.indexOf(k);v>-1&&e.splice(v,1),s()}}),w=re({id:"workspace-window",title:"Workspace",icon:"bx-brain",tabs:[{icon:"bx-map-alt",title:"Roadmap",content:Mt()},{icon:"bx-task",title:"Tasks",content:Ct()}],onOpen:()=>Qe(),onClose:()=>{let v=e.indexOf(w);v>-1&&e.splice(v,1),s()}}),b=re({id:"settings-window",title:"Settings",icon:"bx-cog",content:Ge(),onOpen:()=>{b.setContent(Ge()),it(b)},onClose:()=>{let v=e.indexOf(b);v>-1&&e.splice(v,1),s()}});window.dexter||(window.dexter={}),window.dexter.viewEvent=v=>{c.isOpen()||r(c),setTimeout(()=>{let f=document.querySelector(`.event-item[data-event-id="${v}"]`);f&&(f.scrollIntoView({behavior:"smooth",block:"center"}),f.classList.add("flash-highlight"),f.classList.contains("expanded")||f.click(),setTimeout(()=>f.classList.remove("flash-highlight"),2e3))},500)},window.dexter.viewAlert=v=>{p.isOpen()||r(p),setTimeout(()=>{let f=document.querySelector(`.event-item[data-alert-id="${v}"]`);f&&(f.scrollIntoView({behavior:"smooth",block:"center"}),f.classList.add("flash-highlight"),f.classList.contains("expanded")||f.click(),setTimeout(()=>f.classList.remove("flash-highlight"),2e3))},500)};let i=()=>{let v=document.getElementById("dexter-dropdown"),f=document.getElementById("dexter-menu-btn");v&&f&&(v.classList.remove("active"),f.classList.remove("active"),window.innerWidth<880&&document.getElementById("windows-container")?.classList.remove("menu-open"))};(()=>{let v=document.getElementById("dexter-menu-btn"),f=document.getElementById("settings-icon"),y=document.getElementById("docs-icon"),x=document.getElementById("close-all-windows"),d=document.getElementById("nav-left-container"),l=document.getElementById("dexter-dropdown"),$=document.getElementById("windows-container");v&&l&&(v.onclick=m=>{m.stopPropagation();let h=window.innerWidth<880;if(h)l.style.top="",l.style.left="",l.style.right="",l.style.transform="";else{let M=v.getBoundingClientRect(),N=document.querySelector("nav").getBoundingClientRect(),q=220,Y=10,T=M.left+M.width/2-q/2,S=N.right-10;T+q>S&&(T=S-q),T<10&&(T=10),l.style.top=N.bottom+Y+"px",l.style.left=T+"px",l.style.right="auto",l.style.transform="none"}l.classList.toggle("active"),v.classList.toggle("active");let A=l.classList.contains("active");if(h){let M=document.querySelector("nav");A?(document.querySelector("footer")?.classList.add("hide"),document.querySelector("main")?.style.setProperty("opacity","0","important"),M?.classList.add("window-open"),$?.classList.add("menu-open"),ke(!0)):($?.classList.remove("menu-open"),e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),M?.classList.remove("window-open"),ae()||ke(!1)))}}),f&&(f.onclick=m=>{m.stopPropagation(),r(b)}),y&&(y.onclick=m=>{m.stopPropagation(),window.location.href="/docs"}),x&&(x.onclick=m=>{m.stopPropagation(),o()});let E=(m,h,A)=>{let M=document.getElementById(m);M&&(M.onclick=B=>{B.stopPropagation(),i(),A&&n(A),r(h)})};E("alerts-menu-item",p,"alerts-window"),E("events-menu-item",c,"events-window"),E("monitor-menu-item",k,"monitor-window"),E("contacts-menu-item",g,"contacts-window"),E("workspace-menu-item",w,"workspace-window"),d&&(d.onclick=m=>{if(m.stopPropagation(),l&&l.classList.contains("active")){i(),window.innerWidth<880&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),ae()||ke(!1));return}if(e.length>0)o();else{let h=window.location.pathname;if(!(h==="/"||h==="/index.html")){let M=h.endsWith("/")&&h.length>1?h.slice(0,-1):h;if(M.includes("/docs/page/")){window.location.href="/";return}let B=M.split("/");B.pop();let N=B.join("/")||"/";window.location.href=N}}}),document.addEventListener("click",()=>{let m=window.innerWidth<880;l&&l.classList.contains("active")&&(i(),m&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),ae()||ke(!1)))}),l&&(l.onclick=m=>m.stopPropagation())})();let L=window.location.pathname==="/"||window.location.pathname==="/index.html",I=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!L&&!I&&document.querySelector("footer")?.classList.add("hide"),z()||setInterval(()=>{c.isOpen()&&ue(),p.isOpen()?me():Ze()},1e3),setInterval(()=>{z()&&(p.isOpen()?me():Ze()),w.isOpen()&&Qe(),z()&&c.isOpen()&&ue(),k.isOpen()&&Jt()},5e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Qt):Qt();})();
