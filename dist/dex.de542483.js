"use strict";(()=>{function rt(){if(!document.querySelector(".grid-overlay")){let t=document.createElement("div");t.className="grid-overlay",document.body.prepend(t)}}function lt(){let t=window.location.pathname,e=t==="/"||t==="/index.html",s=`
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
    
    `,a=document.createElement("nav");a.innerHTML=s,document.body.prepend(a);let r=document.createElement("div");r.id="dexter-dropdown",r.className="dexter-dropdown",r.innerHTML=`
        <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
        <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
        <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
        <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
        <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
    `,document.body.appendChild(r)}function Te(t){let e=window.location.pathname,i=e==="/"||e==="/index.html",n=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!n||!s||(t||!i?(n.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{n.style.transform="translateX(-3px)"},s.onmouseleave=()=>{n.style.transform="translateX(0)"}):(n.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function ct(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var dt=1e3;function oe(t){let e=null,i=t.onClose||null,n=t.onOpen||null;function s(){e&&(e.style.zIndex=(++dt).toString())}function a(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",r),n&&setTimeout(n,10);return}let y=document.getElementById("windows-container");y||(y=document.createElement("div"),y.id="windows-container",y.className="windows-container",document.body.appendChild(y)),e=document.createElement("div"),e.id=t.id,e.className="window",t.className&&e.classList.add(t.className),t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=(++dt).toString(),e.addEventListener("mousedown",s);let h=t.icon||"bx-window",o="",m="",L,I='<div class="window-bottom-spacer"></div>';t.tabs&&t.tabs.length>0?(o=`<div class="tab-bar">${t.tabs.map((v,x)=>{let c=v.icon?`<i class="bx ${v.icon}"></i>`:`<span class="tab-glyph">${v.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${x===0?"active":""}" data-tab-index="${x}">
                        ${c}
                        <span class="tab-title">${v.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${x}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,L=`<div class="window-content">${t.tabs.map((v,x)=>`<div class="tab-content ${x===0?"active":""}" data-tab-content="${x}">${v.content}${I}</div>`).join("")}</div>`):(t.title&&(m=`<div class="window-title">${t.title}</div>`),L=`<div class="window-content">${t.content||""}${I}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${o}
                ${m}
                <i class="bx bx-x window-close"></i>
            </div>
            ${L}
        `,t.appendToBody?document.body.appendChild(e):y.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",g=>{g.stopPropagation(),d()}),window.addEventListener("resize",r),t.tabs&&e.querySelectorAll(".tab").forEach(g=>{g.addEventListener("click",()=>{if(!e)return;let u=g.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),g.classList.add("active"),e.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active"));let v=e.querySelector(`.tab-content[data-tab-content="${u}"]`);v&&v.classList.add("active"),f(g,e)})}),setTimeout(()=>{e&&e.classList.add("open"),n&&n()},10)}function r(){if(!e||!e.classList.contains("open"))return;let y=e.querySelector(".tab.active");y&&f(y,e)}function f(y,h){setTimeout(()=>{let o=h.querySelector(".tab-bar");if(!o)return;let m=Array.from(o.querySelectorAll(".tab")),L=m.indexOf(y),I=o.clientWidth,g=m[Math.max(0,L-2)],u=m[Math.min(m.length-1,L+2)],v=o,x=g.offsetLeft-v.offsetLeft-25,l=u.offsetLeft+u.offsetWidth-v.offsetLeft+25-x,T=l<=I?x-(I-l)/2:y.offsetLeft-v.offsetLeft-I/2+y.offsetWidth/2;o.scrollTo({left:T,behavior:"smooth"})},350)}function d(y=!1){e&&(window.removeEventListener("resize",r),y?(e.remove(),e=null):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e?.remove(),e=null},400)))}function b(y){t.content=y;let h=e?.querySelector(".window-content");h&&(h.innerHTML=y)}function S(){return!!(e&&e.classList.contains("open"))}return{open:a,close:d,setContent:b,isOpen:S,focus:s,id:t.id}}var pt="easter_theme",te={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function Ge(){return localStorage.getItem(pt)||te.DARK}function mt(t){if(!Object.values(te).includes(t))throw new Error("Invalid theme");localStorage.setItem(pt,t),ut(t)}function ut(t){let e=document.body;Object.values(te).forEach(a=>{e.classList.remove(`theme-${a}`)}),e.classList.add(`theme-${t}`);let i=document.querySelector('meta[name="theme-color"]');i||(i=document.createElement("meta"),i.name="theme-color",document.getElementsByTagName("head")[0].appendChild(i));let n={[te.DARK]:"#050507",[te.LIGHT]:"#FFFFFF",[te.LEGACY]:"#000000"},s=n[t]||n[te.DARK];if(i.setAttribute("content",s),!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}e.classList.add("is-animated")}function ft(){let t=Ge();ut(t)}function W(t,e,i=null,n="default"){let a={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder" data-placeholder-id="${n}"><i class='bx ${a} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function j(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ce(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let n=Date.now(),s=Math.floor((n-e)/1e3),a;s<60?a=`${s}s ago`:s<3600?a=`${Math.floor(s/60)}m ago`:a=`${Math.floor(s/3600)}h ago`,i.textContent=`Last updated: ${a}`}var ts=0;function bt(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let n=i.querySelector(".notification-badge");n&&(e>0?(n.textContent=e>9?"9+":e.toString(),n.style.display="flex"):n.style.display="none")}var re=0,le=0;function vt(t){re=t,Ie()}function Ie(){let t=re+le;ts=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let i=document.getElementById("alerts-menu-item");if(i){let r=i.querySelector(".notification-badge");r||(r=document.createElement("span"),r.className="notification-badge",r.style.marginLeft="auto",i.appendChild(r)),r.textContent=re>9?"9+":re.toString(),r.style.display=re>0?"flex":"none"}let n=document.getElementById("workspace-menu-item");if(n){let r=n.querySelector(".notification-badge");r||(r=document.createElement("span"),r.className="notification-badge",r.style.marginLeft="auto",n.appendChild(r)),r.textContent=le>9?"9+":le.toString(),r.style.display=le>0?"flex":"none"}let s=document.getElementById("switch-alerts");if(s){let r=s.querySelector(".notification-badge");r||(r=document.createElement("span"),r.className="notification-badge",r.style.marginLeft="8px",s.appendChild(r)),r.textContent=re>9?"9+":re.toString(),r.style.display=re>0?"flex":"none"}let a=document.getElementById("switch-workspace");if(a){let r=a.querySelector(".notification-badge");r||(r=document.createElement("span"),r.className="notification-badge",r.style.marginLeft="8px",a.appendChild(r)),r.textContent=le>9?"9+":le.toString(),r.style.display=le>0?"flex":"none"}}function Ye(){let t=document.getElementById("alerts-list");if(!t)return;re=t.querySelectorAll(".alert-unread:not(.priority-low)").length,Ie()}async function yt(){try{le=(await(await H("/roadmap/stats")).json()).open_issues||0,Ie()}catch(t){console.error("Failed to update open issue count:",t)}}function ss(){return"https://event.easter.company"}function ns(){return"https://discord.easter.company"}var is="http://127.0.0.1:8100",as="http://127.0.0.1:8300",os={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function Le(t){let e=j(t);if(!e)return e;e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,a)=>{let r=os[a];return r?`<span class="${r}">`:""});let i=(e.match(/<span/g)||[]).length,n=(e.match(/<\/span/g)||[]).length;return i>n&&(e+="</span>".repeat(i-n)),e}function se(t){if(!t)return"";let e=j(t);return e&&(e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^<strong>(.*)<\/strong>$/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(i,n)=>{let s=n.split("|").map(a=>a.trim());return s.every(a=>a.match(/^:?-+:?$/))?"":`<div class="md-table-row">${s.map(a=>`<span class="md-table-cell">${a}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e)}function ae(){let t=document.getElementById("windows-container"),e=t?parseInt(t.getAttribute("data-count")||"0"):0,i=document.querySelector(".profile-overlay.active"),n=document.querySelector("#cli-terminal-overlay.active");return e>0||!!i||!!n}var rs="https://sterling-javelin-12539.upstash.io",ls="AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw";function z(){return window.location.hostname.includes("easter.company")}var R=null,ge={lastDashboard:0,lastFrontend:0},Ke=!1,xt=0,ht="dex_dashboard_snapshot";function cs(){let t=localStorage.getItem(ht);if(t)try{let e=JSON.parse(t);R=e,ge.lastDashboard=e.timestamp?e.timestamp*1e3:0}catch{R=null}}async function gt(){if(!(!z()||Ke)){Ke=!0,xt=Math.floor(Date.now()/1e3);try{let t=await ms("GET","state:dashboard:full");if(t)try{let e=JSON.parse(t);R=e,ge.lastDashboard=e.timestamp?e.timestamp*1e3:Date.now(),ge.lastFrontend=Date.now(),localStorage.setItem(ht,JSON.stringify(e))}catch(e){console.error("Failed to parse dashboard snapshot:",e)}}finally{Ke=!1}}}function ds(){if(!R||!R.agent_status)return;let t=R.agent_status;t.system&&typeof t.system.state_time=="number"&&(t.system.state_time+=1)}async function ps(){if(!z())return;cs();let t=Math.floor(Date.now()/1e3),e=R?t-R.timestamp:1/0;(!R||e>120)&&await gt(),setInterval(()=>{let i=new Date,n=Math.floor(Date.now()/1e3),s=R?n-R.timestamp:1/0,a=n-xt,r=i.getSeconds()===59,f=s>300,d=a>60;(r&&d||f&&d)&&gt(),ds()},1e3)}z()&&ps();async function ms(t,...e){try{let n=await(await fetch(rs,{method:"POST",headers:{Authorization:`Bearer ${ls}`},body:JSON.stringify([t,...e])})).json();if(n.error)throw new Error(n.error);return n.result}catch(i){return console.error("Upstash Error:",i),null}}var Se=null,ke=null,Pe=!1,je=!1;async function H(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t.startsWith("/system_monitor")||t.startsWith("/system/status"))return new Response(JSON.stringify(R.monitor),{status:200});if(t.startsWith("/system/options"))return new Response(JSON.stringify(R.options||{}),{status:200});if(t.startsWith("/processes"))return new Response(JSON.stringify(R.processes),{status:200});if(t.startsWith("/events")){let s=new URLSearchParams(t.split("?")[1]||""),a=s.get("type")||s.get("event.type"),r=s.get("category"),f=s.get("order")||"desc",d=[];return a==="system.notification.generated"?d=[...R.alerts||[]]:a==="system.blueprint.generated"||t.includes("event.type=system.blueprint.generated")?d=[...R.blueprints||[]]:r==="messaging"?d=[...R.messaging_events||[]]:r==="system"?d=[...R.system_events||[]]:r==="cognitive"?d=[...R.cognitive_events||[]]:r==="moderation"?d=[...R.moderation_events||[]]:d=[...R.events||[]],f==="asc"?d.sort((b,S)=>b.timestamp-S.timestamp):d.sort((b,S)=>S.timestamp-b.timestamp),new Response(JSON.stringify({events:d,count:d.length}),{status:200})}if(t.startsWith("/logs"))return new Response(JSON.stringify([]),{status:200});if(t.startsWith("/system/hardware"))return new Response(JSON.stringify({}),{status:200});if(t.startsWith("/agent/status")||t.startsWith("/guardian/status"))return new Response(JSON.stringify(R.agent_status||{}),{status:200});if(t.startsWith("/roadmap/stats"))return new Response(JSON.stringify({open_issues:R.open_issue_count||0}),{status:200});if(t.startsWith("/profile/")){let s=t.split("/")[2],a=R.profiles?R.profiles[s]:null;return a?new Response(JSON.stringify(a),{status:200}):new Response(JSON.stringify({error:"Profile not found"}),{status:404})}return t.startsWith("/web/view")?new Response(JSON.stringify(R.web_view||{}),{status:200}):t.startsWith("/web/history")?new Response(JSON.stringify(R.web_history||[]),{status:200}):t.startsWith("/roadmap")?new Response(JSON.stringify(R.github_issues||[]),{status:200}):t.startsWith("/chores")?new Response(JSON.stringify(R.chores||[]),{status:200}):t.startsWith("/fabricator/live")?new Response(JSON.stringify({buffer:R.fabricator_live_buffer||[]}),{status:200}):new Response(JSON.stringify({error:"Not available in public demo"}),{status:404})}if(Se)try{let s=await fetch(Se+t,e);if(s.ok)return s;Se=null}catch{Se=null}let i=ss(),n=is;window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&!z()&&(n=`http://${window.location.hostname}:8100`);try{let s=await fetch(i+t,e);if(s.ok)return Se=i,Pe&&(console.log("\u2728 Production event service restored."),Pe=!1),s;throw new Error("Primary failed")}catch{Pe||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${n}`),Pe=!0);try{let a=await fetch(n+t,e);if(a.ok)return Se=n,a;throw new Error("Fallback failed")}catch(a){if(t==="/roadmap/stats")return new Response(JSON.stringify({open_issues:0}),{status:200});throw a}}}async function be(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t==="/contacts")return new Response(JSON.stringify(R.contacts||{members:[]}),{status:200});if(t.startsWith("/member/")){let s=t.split("/")[2],a=(R.contacts?.members||[]).find(r=>r.id===s);return a?new Response(JSON.stringify(a),{status:200}):new Response(JSON.stringify({error:"Member not found"}),{status:404})}return new Response(JSON.stringify({error:"Discord API not public"}),{status:404})}if(ke)try{let s=await fetch(ke+t,e);if(s.ok)return s;ke=null}catch{ke=null}let i=ns(),n=as;window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&!z()&&(n=`http://${window.location.hostname}:8300`);try{let s=await fetch(i+t,e);if(s.ok)return ke=i,je&&(console.log("\u2728 Production discord service restored."),je=!1),s;throw new Error("Primary failed")}catch{je||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${n}`),je=!0);try{let a=await fetch(n+t,e);if(a.ok)return ke=n,a;throw new Error("Fallback failed")}catch(a){throw a}}}var wt=()=>`
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
`,qe=null,ve=new Set,Ue=[];async function de(t=!1){let e=document.getElementById("alerts-list");if(!e)return;us(),t&&(e.innerHTML="<p>Updating...</p>");let i="/events?ml=1000&format=json&event.type=system.notification.generated";try{let n=await H(i);if(!n.ok)throw new Error("Service is offline or unreachable.");let a=(await n.json()).events||[];qe=Date.now(),ce(0,qe);let r=Date.now(),f=24*60*60*1e3,d=a.filter(u=>{let v=localStorage.getItem(`alert_read_ts_${u.id}`);if(!v)return!0;let x=parseInt(v);return r-x<f});d.sort((u,v)=>{let x=E=>{let p=E.event;if(typeof p=="string")try{p=JSON.parse(p)}catch{return"low"}return(p.priority||"low").toLowerCase()},c=E=>E==="critical"?4:E==="high"?3:E==="medium"?2:1,l=c(x(u)),T=c(x(v));return l!==T?T-l:v.timestamp-u.timestamp}),Ue=d;let b=u=>{let v=u.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return"low"}return(v.priority||"low").toLowerCase()},S=[];if(d.length===0)S.push({id:"placeholder-empty",type:"placeholder",message:"No alerts, all systems nominal"});else{let v=new Set(d.map(c=>b(c))).size>1,x=null;d.forEach(c=>{let l=b(c);v&&l!==x&&(S.push({id:`divider-${l}`,type:"divider",label:l.toUpperCase()}),x=l),S.push(c)})}t&&(e.innerHTML="");let y=u=>{let v=u.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return null}let x=(v.title||"Untitled Alert").trim(),c=(v.body||"No description provided.").trim(),l=v.summary||"",T=v.content||"",E=v.protocol||"",p=(v.priority||"low").toLowerCase(),w=!!v.alert,A=(v.category||"system").trim(),_=v.related_event_ids||[],B=v.audit_event_id,V=!!localStorage.getItem(`alert_read_ts_${u.id}`),Z=new Date(u.timestamp*1e3),M=Z.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=Z.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),k=V?"event-border-grey":"event-border-blue";!V&&w&&(k="event-border-red"),V&&(p==="high"||p==="critical")?k="event-border-red":V&&p==="medium"&&(k="event-border-orange");let C=V?"alert-read":"alert-unread",N=ve.has(u.id),D=N?"expanded":"",K=N?"display: block;":"display: none;",q="",P="";_.length>0&&(P=`
            <div style="flex: 1; min-width: 150px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    ${_.map(X=>`<a href="#" onclick="window.dexter.viewEvent('${X}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${X.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let U="";B&&(U=`
            <div style="flex: 1; min-width: 120px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Audit</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    <a href="#" onclick="window.dexter.viewEvent('${B}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3); white-space: nowrap;">${B.substring(0,8)}...</a>
                </div>
            </div>`);let G="";E&&(G=`
            <div style="flex: 1; min-width: 100px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${E}</div>
            </div>`);let ee="";T?ee=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="md-para" style="color: #ddd; font-size: 0.85em; white-space: pre-wrap; line-height: 1.6; text-align: left;">${se(T)}</div>
            </div>
        `:ee=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="md-para" style="color: #fff; white-space: pre-wrap; line-height: 1.6; text-align: left;">${se(c)}</div>
            </div>
        `,q=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${v.related_services&&v.related_services.length>0?v.related_services.join(", "):v.related||"SYSTEM"}</div>
                    </div>
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${A}</div>
                    </div>
                    ${G}
                    ${U}
                    ${P}
                </div>

                ${ee}
            `;let Y=document.createElement("div");Y.className=`event-item notification-item ${k} ${C} ${D} cursor-pointer priority-${p}`,Y.dataset.alertId=u.id,Y.onclick=function(X){let J=this;if(J.classList.contains("expanded")){J.classList.remove("expanded"),ve.delete(u.id);let fe=J.querySelector(".event-details");fe&&(fe.style.display="none")}else{J.classList.add("expanded"),ve.add(u.id);let fe=J.querySelector(".event-details");if(fe&&(fe.style.display="block"),!localStorage.getItem(`alert_read_ts_${u.id}`)){localStorage.setItem(`alert_read_ts_${u.id}`,Date.now().toString()),J.classList.add("alert-read"),J.classList.remove("alert-unread"),J.classList.remove("event-border-blue","event-border-red","event-border-purple");let Me="event-border-grey";p==="high"||p==="critical"?Me="event-border-red":p==="medium"&&(Me="event-border-orange"),J.classList.add(Me),Ye()}}};let Ce=`${E?E.toUpperCase():"GUARDIAN"} ALERT: ${l||x}`,Ve={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[A]||"bx-bell",Ne=p==="high"||p==="critical"?"#ff4d4d":p==="medium"?"#ffa500":"#888";Y.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${M}</span>
                    <span class="event-date">${$}</span>
                </div>
                <div class="event-icon"><i class='bx ${Ve}'></i></div>
                <div class="event-content" style="text-align: left;">
                    <div class="event-service">
                        DEXTER <span class="alert-badge" style="color: ${Ne}; font-size: 0.8em; margin-left: 5px;">[${p.toUpperCase()}]</span>
                    </div>
                    <div class="event-message">${se(Ce)}</div>
                    <div class="event-details" style="${K}">
                        ${q}
                    </div>
                </div>
            `;let ue=Y.querySelector(".event-details");ue&&ue.addEventListener("click",X=>{X.stopPropagation()});let F=Y.querySelector(".close-details-btn");return F&&F.addEventListener("click",X=>{X.stopPropagation(),Y.classList.remove("expanded");let J=Y.querySelector(".event-details");J&&(J.style.display="none"),ve.delete(u.id)}),Y},h=u=>{let v=document.createElement("div");v.className="notification-divider",v.dataset.alertId=u.id;let x="#888888";return u.label==="CRITICAL"?x="#ff4d4d":u.label==="HIGH"?x="#ff8888":u.label==="MEDIUM"&&(x="#ffa500"),v.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${x}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,v.innerHTML=`<span style="white-space: nowrap;">${u.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${x}44, transparent); flex-grow: 1;"></div>`,v},o=u=>{let v=document.createElement("div");v.innerHTML=W("empty",u.message,null,u.id);let x=v.firstElementChild;return x.dataset.alertId=u.id,x},m=Array.from(e.children),L=new Map(m.map(u=>[u.dataset.alertId,u])),I=new Set(S.map(u=>u.id));m.forEach(u=>{let v=u.dataset.alertId;(!v||!I.has(v))&&u.remove()});let g=null;S.forEach((u,v)=>{let x=L.get(u.id);if(!x||t){if(x&&x.remove(),u.type==="divider")x=h(u);else if(u.type==="placeholder")x=o(u);else{let c=y(u);if(!c)return;x=c}if(!x)return}v===0?e.firstElementChild!==x&&e.prepend(x):g&&g.nextElementSibling!==x&&g.after(x),g=x}),qe=Date.now(),ce(0,qe),Ye()}catch(n){console.error("Error fetching alerts:",n),e.children.length===0&&(e.innerHTML=W("offline","Failed to load alerts.","The event service may be offline."))}}function us(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),i=document.getElementById("alerts-close-all"),n=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ue.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),de(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Ue.forEach(s=>{ve.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),de(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{ve.clear(),de(!0)},i.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await H("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;Ue.forEach(a=>{localStorage.setItem(`alert_read_ts_${a.id}`,s.toString())}),ve.clear(),de(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}async function Xe(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await H(t);if(!e.ok)return;let n=(await e.json()).events||[],s=0;n.forEach(a=>{let r=a.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{r={}}if((r.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${a.id}`)||s++}),vt(s)}catch{}}var $t=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${z()?"display: none;":""}" title="New Issue"><i class='bx bx-plus'></i></button>
    <button id="roadmap-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
    <button id="roadmap-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
  </div>
`,Tt=()=>`
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
`,Ae=new Set,Ze=[],Et=t=>{let e=Ae.has(t.number),n=new Date(t.createdAt).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),s=document.createElement("div");return s.className=`event-item notification-item event-border-blue cursor-pointer ${e?"expanded":""}`,s.dataset.issueNumber=t.number,s.id=`roadmap-issue-${t.number}`,s.onclick=a=>{if(a.target.closest("button")||a.target.closest("textarea"))return;if(s.classList.contains("expanded")){s.classList.remove("expanded");let f=s.querySelector(".event-details");f&&(f.style.display="none"),Ae.delete(t.number)}else{s.classList.add("expanded");let f=s.querySelector(".event-details");f&&(f.style.display="block"),Ae.add(t.number)}},s.innerHTML=`

          <div class="event-time">

            <span class="event-time-main">${n.split(",")[1]}</span>

            <span class="event-date">${n.split(",")[0]}</span>

          </div>

          <div class="event-content">

            <div class="event-service" style="display: flex; justify-content: space-between; align-items: center;">

              <span>ISSUE #${t.number}</span>

              <span style="font-size: 0.85em; color: #666; font-family: 'JetBrains Mono', monospace;">${t.repository||"EasterCompany/EasterCompany"}</span>

            </div>

            <div class="event-message" style="font-weight: bold; margin-bottom: 5px;">${j(t.title)}</div>

            <div class="event-details" style="${e?"display: block;":"display: none;"} ">

              <div style="font-size: 0.75em; color: #bb86fc; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-weight: bold;">Target Repository: ${t.repository||"EasterCompany/EasterCompany"}</div>

              <div style="font-size: 0.9em; opacity: 0.8; margin-bottom: 15px; white-space: pre-wrap;">${se(t.body)}</div>

  
        ${z()?"":`
        <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px; margin-top: 15px;">
          <textarea class="settings-textarea comment-input" style="min-height: 80px; font-size: 0.85em; margin-bottom: 10px;" placeholder="Add a technical comment..."></textarea>
          <div style="display: flex; gap: 10px; align-items: center;">
            <button class="notif-action-btn comment-btn" style="padding: 6px 12px; font-size: 0.8em;"><i class='bx bx-comment'></i> Comment</button>
            <button class="notif-action-btn close-btn danger" style="padding: 6px 12px; font-size: 0.8em; margin-left: auto;"><i class='bx bx-check-circle'></i> Close Issue</button>
          </div>
        </div>
        `}
      </div>
    </div>
  `,s.querySelector(".comment-btn")?.addEventListener("click",async()=>{let a=s.querySelector(".comment-input"),r=a.value.trim();r&&(await gs(t.number,r),a.value="",ye(!0))}),s.querySelector(".close-btn")?.addEventListener("click",async()=>{confirm(`Close issue #${t.number}?`)&&(await bs(t.number),ye(!0))}),s};async function ye(t=!1){let e=document.getElementById("roadmap-list"),i=document.getElementById("roadmap-timeline-container");if(e){fs();try{let n=await H("/roadmap");if(!n.ok)throw new Error("Offline");let s=await n.json();if(s.sort((d,b)=>new Date(d.createdAt).getTime()-new Date(b.createdAt).getTime()),!t&&JSON.stringify(s)===JSON.stringify(Ze))return;Ze=s;let a=Array.from(e.children),r=new Map(a.filter(d=>d.dataset.issueNumber).map(d=>[d.dataset.issueNumber,d]));if(s.length===0){e.innerHTML=W("empty","No open issues found.","Dexter is currently in a perfect state.");return}let f={};if(s.forEach(d=>{let b="General",S=d.title.match(/^\[(.*?)\]/);S&&(b=S[1].toLowerCase()),f[b]||(f[b]=[]),f[b].push(d)}),e.innerHTML="",Object.entries(f).forEach(([d,b])=>{let S=`<div class="service-category-header" style="margin: 20px 0 10px 0; color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 2px;">${d}</div>`;e.insertAdjacentHTML("beforeend",S),b.forEach(y=>{let h=y.number.toString(),o=r.get(h);if(o&&!t){let m=o.querySelector(".event-message");m&&m.textContent!==y.title?e.appendChild(Et(y)):e.appendChild(o)}else e.appendChild(Et(y))})}),i){let d=s.slice(0,4),b=`
        <div class="roadmap-timeline" style="display: flex; gap: 5px; background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); overflow-x: auto; align-items: center;">
          <span style="font-size: 0.6em; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-right: 10px;">Execution Queue:</span>
          ${d.map((S,y)=>`
            <div class="timeline-dot-wrap" style="display: flex; align-items: center; gap: 5px;">
                <div class="timeline-dot" title="#${S.number}: ${S.title}" style="width: 12px; height: 12px; border-radius: 50%; background: #bb86fc; flex-shrink: 0; opacity: 0.8; cursor: pointer;" onclick="dexter.viewRoadmapIssue(${S.number})"></div>
                <span style="font-size: 0.7em; color: #aaa; white-space: nowrap;">#${S.number}</span>
                ${y<d.length-1?"<div style='width: 15px; height: 1px; background: rgba(255,255,255,0.1); flex-shrink: 0; margin: 0 5px;'></div>":""}
            </div>
          `).join("")}
            ${s.length>4?`<span style="font-size: 0.7em; color: #444; margin-left: 10px;">+${s.length-4} more</span>`:""}
        </div>
      `;i.innerHTML=b}}catch{if(e.querySelector(".placeholder-message.offline"))return;e.innerHTML=W("offline","Failed to load roadmap.","Could not sync with GitHub.")}}}window.dexter||(window.dexter={});window.dexter.viewRoadmapIssue=t=>{let e=document.getElementById(`roadmap-issue-${t}`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.classList.contains("expanded")||e.click())};function fs(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),n=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{let a=document.getElementById("roadmap-editor-title"),r=document.getElementById("roadmap-editor-body");a&&(a.value=""),r&&(r.value="");let f=document.getElementById("roadmap-editor-container");f&&(f.style.display="block")},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{let a=document.getElementById("roadmap-editor-container");a&&(a.style.display="none")},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let a=document.getElementById("roadmap-editor-title"),r=document.getElementById("roadmap-editor-body"),f=a?a.value.trim():"",d=r?r.value.trim():"";if(!f||!d){alert("Title and Body are required.");return}try{await H("/roadmap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:f,body:d})});let b=document.getElementById("roadmap-editor-container");b&&(b.style.display="none"),ye(!0)}catch(b){console.error(b)}},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{Ze.forEach(a=>Ae.add(a.number)),ye(!0)},n.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{Ae.clear(),ye(!0)},s.dataset.listenerAttached="true")}async function gs(t,e){await H(`/roadmap/${t}/comment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:e})})}async function bs(t){await H(`/roadmap/${t}`,{method:"DELETE"})}var St=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px; align-items: center;">
    <select id="task-filter-owner" class="task-form-select" style="padding: 4px 10px; font-size: 0.75em; height: 32px; border-color: rgba(255,255,255,0.05);">
        <option value="all">All Owners</option>
    </select>
    <button id="create-chore-btn" class="notif-action-btn" style="${z()?"display: none;":""}" title="New Task"><i class='bx bx-plus'></i></button>
  </div>
`,kt=()=>`
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
    `,_e=[],Be={"313071000877137920":"Owen",dexter:"Dexter"},ne=[],xe=null;async function He(){let t=document.getElementById("chores-list"),e=document.getElementById("create-chore-btn"),i=document.getElementById("create-chore-form"),n=document.getElementById("save-chore-btn"),s=document.getElementById("cancel-chore-btn"),a=document.getElementById("new-chore-owner"),r=document.getElementById("selected-recipients"),f=document.getElementById("task-filter-owner"),d=document.getElementById("new-chore-instruction"),b=document.getElementById("new-chore-url"),S=document.getElementById("new-chore-schedule"),y=document.getElementById("new-chore-time"),h=document.getElementById("new-chore-timezone"),o=document.getElementById("new-chore-time-group");if(h&&!h.dataset.initialValueAttached){let l=Intl.DateTimeFormat().resolvedOptions().timeZone,T=!1;for(let E=0;E<h.options.length;E++)if(h.options[E].value===l){T=!0;break}if(!T){let E=document.createElement("option");E.value=l,E.textContent=l.replace("_"," "),h.appendChild(E)}h.value=l,h.dataset.initialValueAttached="true"}S&&o&&!S.dataset.timeListenerAttached&&(S.addEventListener("change",()=>{o.style.display=S.value==="daily"?"block":"none"}),S.dataset.timeListenerAttached="true");let m=document.getElementById("form-title"),L=document.getElementById("form-icon");function I(){if(r){if(ne.length===0){r.innerHTML='<span style="color: #444; font-size: 0.8em; font-style: italic; padding: 4px;">No recipients selected</span>';return}r.innerHTML=ne.sort((l,T)=>{let E=l.startsWith("channel:"),p=T.startsWith("channel:");return E&&!p?-1:!E&&p?1:0}).map(l=>{let T=Be[l]||l,E=l.startsWith("channel:");return`
        <div class="recipient-badge" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); font-size: 0.75em; color: ${l==="dexter"?"#bb86fc":E?"#03dac6":"#fff"};">
          <i class='bx ${l==="dexter"?"bx-terminal":E?"bx-hash":"bx-user"}'></i>
          <span>${T}</span>
          <i class='bx bx-x remove-recipient' data-id="${l}" style="cursor: pointer; margin-left: 4px; opacity: 0.6;"></i>
        </div>
      `}).join(""),r.querySelectorAll(".remove-recipient").forEach(l=>{l.onclick=()=>{let T=l.dataset.id;ne=ne.filter(E=>E!==T),I()}})}}function g(l){l&&!ne.includes(l)&&(ne.push(l),I()),a&&(a.value="")}function u(l=null){if(i){if(xe=l?l.id:null,l){if(m&&(m.textContent="Update Research Task"),L&&(L.className="bx bx-edit-alt",L.style.color="#03dac6"),n&&(n.innerHTML="<i class='bx bx-check'></i> Update Task"),d&&(d.value=l.natural_instruction),b&&(b.value=l.execution_plan?.entry_url||""),S&&(S.value=l.schedule,o&&(o.style.display=l.schedule==="daily"?"block":"none")),y&&l.run_at&&(y.value=l.run_at),h&&l.timezone){let T=!1;for(let E=0;E<h.options.length;E++)if(h.options[E].value===l.timezone){T=!0;break}if(!T){let E=document.createElement("option");E.value=l.timezone,E.textContent=l.timezone.replace("_"," "),h.appendChild(E)}h.value=l.timezone}ne=l.recipients||(l.owner_id?[l.owner_id]:[]),I()}else m&&(m.textContent="Initialize Research Task"),L&&(L.className="bx bx-plus-circle",L.style.color="#bb86fc"),n&&(n.innerHTML="<i class='bx bx-zap'></i> Deploy Task"),d&&(d.value=""),b&&(b.value=""),S&&(S.value="every_24h"),ne=[],I();i.style.display="block",i.scrollIntoView({behavior:"smooth",block:"start"})}}let v=document.getElementById("contacts-group"),x=document.getElementById("channels-group");if(v&&!v.dataset.populated&&!z())try{be("/contacts").then(async l=>{l.ok&&(((await l.json()).members||[]).forEach(p=>{if(Be[p.id]=p.nickname||p.username,p.id==="313071000877137920")return;let w=document.createElement("option");w.value=p.id;let A=p.nickname||p.username;w.textContent=`${A} (${p.username})`,v.appendChild(w)}),v.dataset.populated="true")})}catch{console.warn("Failed to fetch contacts for dropdown")}if(x&&!x.dataset.populated&&!z())try{be("/channels").then(async l=>{l.ok&&((await l.json()).forEach(E=>{let p=`channel:${E.id}`;Be[p]=E.name;let w=document.createElement("option");w.value=p,w.textContent=`#${E.name} (${E.guild})`,x.appendChild(w)}),x.dataset.populated="true")})}catch{console.warn("Failed to fetch channels for dropdown")}a&&!a.dataset.listenerAttached&&(a.onchange=()=>{g(a.value)},a.dataset.listenerAttached="true"),f&&!f.dataset.listenerAttached&&(f.onchange=()=>c(),f.dataset.listenerAttached="true");function c(){if(!t)return;let l=f?.value||"all",T=l==="all"?_e:_e.filter(p=>(p.recipients||(p.owner_id?[p.owner_id]:[])).includes(l));if(T.length===0){t.innerHTML=W("empty",l==="all"?"No active tasks.":"No tasks found for this owner.",z()?"Dexter is not currently performing research.":"Click the plus icon to create a research task.");return}let E=T.map(p=>{let w=p.last_run===0?"Never":new Date(p.last_run*1e3).toLocaleString(),A=p.memory?p.memory.length:0,_=p.status==="active"?"service-widget-online":"service-widget-offline",B=p.status==="active"?"ACTIVE":"PAUSED",V=(p.recipients||(p.owner_id?[p.owner_id]:[])).sort((M,$)=>{let k=M.startsWith("channel:"),C=$.startsWith("channel:");return k&&!C?-1:!k&&C?1:0}).map(M=>{let $=Be[M]||M.substring(0,8),k=M.startsWith("channel:");return`<span title="${$}" style="display: flex; align-items: center; gap: 3px; white-space: nowrap;"><i class='bx ${M==="dexter"?"bx-terminal":k?"bx-hash":"bx-user"}'></i>${$}</span>`}).join("<span style='color: #444; margin: 0 5px;'>|</span>"),Z=`${p.schedule}${p.run_at?" @ "+p.run_at+(p.timezone?" ("+p.timezone.split("/").pop()?.replace("_"," ")+")":""):""}`;return`
                <div class="service-widget task-widget ${_}">
                    <div class="service-widget-header">
                        <i class='bx bx-search-alt'></i>
                        <h3 title="${p.natural_instruction}">${p.natural_instruction}</h3>
                        <span class="service-widget-status">${B}</span>
                    </div>
                    
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Schedule:</span>
                            <span class="info-value"><i class='bx bx-time' style="margin-right: 4px;"></i>${Z}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Last Run:</span>
                            <span class="info-value">${w}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Items Found:</span>
                            <span class="info-value" style="color: #03dac6; font-weight: bold;">${A}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Target:</span>
                            <span class="info-value" title="${p.execution_plan.entry_url||"Autonomous"}">${p.execution_plan.entry_url||"Autonomous Detection"}</span>
                        </div>
                        <div class="service-widget-info" style="margin-top: 5px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 8px;">
                            <span class="info-label" style="margin-right: 10px;">Recipients:</span>
                            <div class="info-value" style="display: flex; gap: 5px; overflow-x: auto; justify-content: flex-end;">${V}</div>
                        </div>
                    </div>

                    <div class="service-controls">
                        <button class="svc-btn reset-chore-btn" data-id="${p.id}" title="Reset Progress"><i class='bx bx-refresh'></i></button>
                        <button class="svc-btn edit-chore-btn" data-id="${p.id}" title="Edit Task"><i class='bx bx-edit-alt'></i></button>
                        <button class="svc-btn delete-chore-btn" data-id="${p.id}" title="Delete Task"><i class='bx bx-trash'></i></button>
                    </div>
                </div>
            `}).join("");t.innerHTML=E,t.querySelectorAll(".edit-chore-btn").forEach(p=>{p.onclick=w=>{w.stopPropagation();let A=p.dataset.id,_=_e.find(B=>B.id===A);_&&u(_)}}),t.querySelectorAll(".reset-chore-btn").forEach(p=>{p.onclick=async w=>{w.stopPropagation();let A=p.dataset.id;confirm("Reset this task? It will be re-run immediately on the next cycle.")&&(p.innerHTML="<i class='bx bx-loader-alt spin'></i>",await H(`/chores/${A}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({last_run:0})}),He())}}),t.querySelectorAll(".delete-chore-btn").forEach(p=>{p.onclick=async w=>{w.stopPropagation();let A=p.dataset.id;confirm("Delete this task?")&&(await H(`/chores/${A}`,{method:"DELETE"}),He())}})}e&&!e.dataset.listenerAttached&&(e.onclick=()=>{i&&(i.style.display==="none"||xe!==null?u(null):i.style.display="none")},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{i&&(i.style.display="none")},s.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let l=document.getElementById("new-chore-instruction"),T=document.getElementById("new-chore-url"),E=document.getElementById("new-chore-schedule"),p=l?.value,w=E?.value||"every_24h",A=w==="daily"?y?.value:"",_=w==="daily"?h?.value:"";if(!p)return;if(ne.length===0){alert("Please add at least one recipient.");return}let B=n.innerHTML;n.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{let O=xe?"PATCH":"POST",V=xe?`/chores/${xe}`:"/chores";await H(V,{method:O,headers:{"Content-Type":"application/json"},body:JSON.stringify({recipients:ne,natural_instruction:p,entry_url:T?.value,schedule:w,run_at:A,timezone:_})}),i&&(i.style.display="none"),l&&(l.value=""),T&&(T.value=""),xe=null,ne=[],He()}catch(O){console.error(O),alert(xe?"Failed to update research task":"Failed to create research task")}finally{n.innerHTML=B}},n.dataset.listenerAttached="true");try{let l=await H("/chores");if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);if(_e=await l.json()||[],f){let E=f.value,p=new Set;_e.forEach(w=>{w.owner_id&&p.add(w.owner_id),w.recipients&&w.recipients.forEach(A=>p.add(A))}),f.innerHTML='<option value="all">All Recipients</option>',p.forEach(w=>{let A=document.createElement("option");A.value=w;let _=w.startsWith("channel:"),B=Be[w]||`Recipient: ${w.substring(0,8)}`;A.textContent=(_&&!B.startsWith("#")?"#":"")+B,f.appendChild(A)}),f.value=E,f.selectedIndex===-1&&(f.value="all")}c()}catch(l){console.error("Failed to fetch chores",l)}}var Lt=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div class="system-section-header" style="margin-bottom: 15px;">
                <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                <div style="margin-left: auto;">
                    ${$t()}
                </div>
            </div>
            ${Tt()}
        </div>
    </div>
`,Ct=()=>`
    <div class="ideas-container">
        <div class="chores-section">
            <div class="system-section-header" style="margin-bottom: 15px;">
                <i class='bx bx-task' style="color: #bb86fc;"></i>
                <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Research Tasks</h2>
                <div style="margin-left: auto;">
                    ${St()}
                </div>
            </div>
            ${kt()}
        </div>
    </div>
`;async function Qe(){await Promise.all([ye(),He()])}var vs=`
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
`;function Mt(t){if(!document.getElementById("dex-profile-styles")){let n=document.createElement("style");n.id="dex-profile-styles",n.textContent=vs,document.head.appendChild(n)}let e=document.createElement("div");e.className="profile-overlay",e.innerHTML=`
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `,e.addEventListener("click",n=>{n.target===e&&(e.classList.remove("active"),ae()||(document.body.style.overflow=""),setTimeout(()=>e.remove(),300))}),document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),document.body.style.overflow="hidden";let i=n=>{e.innerHTML=`
        <div class="profile-card" style="height: 200px; justify-content: center; align-items: center; color: #cf6679; border-color: #cf6679;">
            <div style="text-align: center;">
                <i class='bx bx-error' style="font-size: 3em; margin-bottom: 10px;"></i>
                <div style="font-family: 'JetBrains Mono'; text-transform: uppercase;">${n}</div>
            </div>
            <button class="close-profile-btn" style="color: #cf6679;" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
        </div>
    `;let s=e.querySelector(".close-profile-btn");s&&s.addEventListener("click",()=>{e.click()})};be(`/profile/${t.id}`).then(async n=>{if(n.ok){let s=await n.json();ys(e,t,s)}else console.log("Profile not found (404) or error."),i("Profile Data Unavailable")}).catch(n=>{console.error("Profile fetch error:",n),i("Connection Failed")})}function ys(t,e,i){let n=e.status==="online"?"#03dac6":e.status==="idle"?"#ffb74d":"#cf6679",s=()=>{let L=(i.attributes||i.facts||[]).map(c=>{let l=c.key||c.k,T=c.value||c.v;return`
            <div class="fact-chip">
                <span class="fact-key">${l}:</span>
                <span class="fact-val">${T}</span>
            </div>
        `}).join(""),I=i.cognitive_model||i,g=I.technical_level||I.techLevel||0,u=I.communication_style||I.commStyle||"Unknown",v=I.patience_level||I.patience||"Unknown",x=I.vibe||"Unknown";return`
            <div class="overview-grid">
                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-brain'></i> Cognitive Model</div>
                    
                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Technical Level</span>
                            <span>${g}/10</span>
                        </div>
                        <div class="cog-bar-bg">
                            <div class="cog-bar-fill" style="width: ${Math.min(g*10,100)}%;"></div>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Communication Style</span>
                            <span style="color: #03dac6;">${u}</span>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Predicted Patience</span>
                            <span>${v}</span>
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
        `},a=()=>{let L=i.dossier||{},I=L.identity||{},g=L.career||{},u=L.personal||{},v=L.social||[];return`
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
                        <div class="dossier-value">${g.jobTitle||"Unknown"}</div>
                        <div style="font-size: 0.8em; color: #888; margin-top: 2px;">@ ${g.company||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                         <div class="dossier-label">Key Skills</div>
                         <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            ${(g.skills||[]).map(x=>`<span style="font-size: 0.75em; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${x}</span>`).join("")}
                         </div>
                    </div>
                </div>

                <!-- Personal Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-home-heart'></i> Personal Life</div>
                    
                    <div class="dossier-item">
                        <div class="dossier-label"><i class='bx bx-joystick'></i> Hobbies</div>
                        <div style="margin-top: 10px;">
                            ${(u.hobbies||[]).map(x=>`<div class="dossier-list-item">${x}</div>`).join("")}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(u.habits||[]).map(x=>`<div class="dossier-list-item">${x}</div>`).join("")}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(u.vices||[]).map(x=>`<div class="dossier-list-item" style="color: #cf6679;">${x}</div>`).join("")}
                        </div>
                    </div>
                </div>

                <!-- Social Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-network-chart'></i> Known Associates</div>
                    <div class="dossier-item" style="background: none; border: none; padding: 0;">
                        ${v.length>0?v.map(x=>`
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
        `},r=()=>{let L=i.traits||{};return`
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(L).map(([I,g])=>`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${g}%; background: ${Number(g)>50?"#03dac6":"#cf6679"}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${I.substring(0,4)}</div>
                    <div style="font-family: monospace;">${g}%</div>
                </div>
            `).join("")}
        </div>
    `},f=()=>`
        <div class="profile-section-title"><i class='bx bx-map-alt'></i> Conversation Topics</div>
        <div style="margin-top: 20px;">
            ${(i.topics||[]).map(L=>`
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
    `,d=()=>`
        <div class="profile-section-title"><i class='bx bx-code-alt'></i> Raw Profile JSON</div>
        <div class="raw-json">${JSON.stringify(i,null,2)}</div>
    `,b=`
        <div class="profile-card">
            <button class="close-profile-btn" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
            
            <div class="profile-header">
                <div class="profile-avatar-container">
                    <img src="${e.avatar_url||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="profile-avatar">
                    <div class="profile-status-dot" style="background: ${n}"></div>
                </div>
                <div class="profile-identity">
                    <h2>${j(e.username)}</h2>
                    <div class="profile-badges">${(i.badges||[]).map(L=>`<span class="profile-badge ${L==="Creator"?"master":""}">${L}</span>`).join("")}</div>
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
                <div id="tab-dossier" class="tab-content">${a()}</div>
                <div id="tab-psychometrics" class="tab-content">${r()}</div>
                <div id="tab-topics" class="tab-content">${f()}</div>
                <div id="tab-raw" class="tab-content">${d()}</div>
            </div>

            <div class="profile-footer">
                <div style="display: flex; gap: 20px;">
                    <span>ID: ${e.id}</span>
                    <span>LIFETIME TOKENS: ${i.stats?.tokens_consumed||i.stats?.tokens||"0"}</span>
                    <span>MSGS: ${i.stats?.total_messages||i.stats?.msgs||"0"}</span>
                </div>
                <button id="profile-expand-toggle" class="expand-btn"><i class='bx bx-expand-alt'></i> Detailed Analysis</button>
            </div>
        </div>
    `;t.innerHTML=b;let S=t.querySelector(".profile-card"),y=t.querySelector("#profile-expand-toggle"),h=t.querySelectorAll(".profile-tab-btn"),o=t.querySelectorAll(".tab-content"),m=t.querySelector(".close-profile-btn");m&&m.addEventListener("click",()=>{t.classList.remove("active"),ae()||(document.body.style.overflow=""),setTimeout(()=>t.remove(),300)}),h.forEach(L=>{L.addEventListener("click",()=>{h.forEach(u=>u.classList.remove("active")),o.forEach(u=>u.classList.remove("active")),L.classList.add("active");let I=L.dataset.tab,g=t.querySelector(`#tab-${I}`);g&&g.classList.add("active")})}),y&&y.addEventListener("click",()=>{S.classList.toggle("expanded");let L=S.classList.contains("expanded");y.innerHTML=L?"<i class='bx bx-collapse-alt'></i> Collapse View":"<i class='bx bx-expand-alt'></i> Detailed Analysis"})}var It=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto; ${z()?"display: none;":""}" title="Refresh Contacts"><i class='bx bx-refresh'></i></button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,xs=null;async function et(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await et(),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),t.dataset.listenerAttached||(t.onclick=i=>{let s=i.target.closest(".user-profile-card");if(s&&s.dataset.user)try{let a=JSON.parse(s.dataset.user);Mt(a)}catch(a){console.error("Failed to parse user data",a)}},t.dataset.listenerAttached="true");try{let i=await be("/contacts");if(!i.ok)throw new Error("Service unreachable");let s=(await i.json()).members||[];if(xs=Date.now(),s.length===0){t.innerHTML=W("empty","No contacts found.","Check your Discord connection.");return}let a={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((r,f)=>{let d=a[r.level]??10,b=a[f.level]??10;return d!==b?d-b:r.username.localeCompare(f.username)}),t.innerHTML=s.map(r=>{let f=r.color&&r.color!==0,d=f?"#"+r.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",b=r.status==="online"?"#5eff5e":r.status==="idle"?"#ffa500":r.status==="dnd"?"#ff4d4d":"#666",S="#888";r.level==="Me"||r.level==="Master"?S="#bb86fc":r.level==="Admin"?S="#cf6679":r.level==="Moderator"?S="#03dac6":r.level==="Contributor"&&(S="#ffa500");let y=r.level==="Me",h=y?"rgba(187, 134, 252, 0.08)":f?`${d}11`:"rgba(255,255,255,0.03)",o=y?"2px solid #bb86fc":f?`1px solid ${d}66`:"1px solid rgba(255,255,255,0.1)";return`
                <div class="user-profile-card" 
                     data-user="${JSON.stringify(r).replace(/"/g,"&quot;")}"
                     style="background: ${h}; padding: 15px; border-radius: 8px; border: ${o}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; cursor: pointer; transition: transform 0.2s, background 0.2s, box-shadow 0.2s;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${y?"#bb86fc":f?d:"transparent"}33, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${r.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${y?"2px solid #bb86fc":f?`2px solid ${d}`:"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${b}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: ${f?d:"#fff"}; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">${r.nickname||r.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${S}; font-weight: 600; text-transform: uppercase;">${y?"DEXTER (ME)":r.level}</span>
                            <span style="font-size: 0.7em; color: #666; font-family: monospace;">(${r.username})</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${r.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=W("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var hs={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","analysis.user.message_signals":"Analyzed Signals for User {user_id}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"{agent_name} Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {process_id} started: {state}","system.process.unregistered":"Process {process_id} completed","system.cognitive.model_load":"Model Loaded: {model} ({method})","system.cognitive.model_inference":"Model Inference: {model} ({method})","system.cognitive.model_unload":"Model Unloaded: {model} ({reason})"};function At(t,e){let i=hs[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"){let s=e.tier?e.tier.toUpperCase():"UNKNOWN";i=`${e.agent_name||"System"} Audit: ${s}`}if(t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let n=i.replace(/\{(\w+)\}/g,(s,a)=>e[a]!==void 0&&e[a]!==null?e[a]:a==="reason"||a==="method"||a==="details"||a==="args"?"":s);return n=n.replace(/\s\(\)\s*/g," ").trim(),(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(n+=` (Translation: ${e.english_translation})`),n}var tt=()=>`
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
`,Fe=null,he=new Set,ze=[],Q="all",ws={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision","analysis.user.message_signals","system.cognitive.model_inference"],moderation:["moderation.explicit_content.deleted"]},Es={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","analysis.user.message_signals":"bx-pulse","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart","system.cognitive.model_inference":"bx-brain"};function $s(t){for(let[e,i]of Object.entries(ws))if(i.includes(t))return e;return"system"}function Ts(t){return Es[t]||"bx-square-rounded"}async function pe(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ss();let n=`/events?ml=${Q==="all"?100:250}&format=json&exclude_types=system.process.registered,system.process.unregistered`;Q!=="all"&&(n+=`&category=${Q}`);try{let s=await H(n);if(!s.ok)throw new Error("Service unreachable");if(ze=((await s.json()).events||[]).filter(h=>{let o=h.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return!0}let m=o.type;return!(m==="system.blueprint.generated"||m==="system.notification.generated")}),Fe=Date.now(),ce(1,Fe),ze.length===0){e.innerHTML=W("empty","No events found for this filter.");return}t&&(e.innerHTML="");let f=h=>{let o=h.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return null}let m=o.type,L=$s(m),I=Ts(m),g=m==="engagement.decision"||m==="messaging.bot.sent_message"||m==="messaging.bot.voice_response"||m==="messaging.user.sent_message"||m==="moderation.explicit_content.deleted"||m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="analysis.router.decision"||m==="analysis.user.message_signals"||m==="system.cli.command"||m==="system.analysis.audit"||m==="system.cognitive.model_inference"||m==="system.test.completed"||m==="error_occurred"||m==="system.cli.status"||m==="system.attention.expired"||m.startsWith("system.roadmap")||m.startsWith("system.process"),u="event-border-grey";g&&(m==="moderation.explicit_content.deleted"||m==="error_occurred"?u="event-border-red":m==="analysis.link.completed"||m==="analysis.visual.completed"||m==="analysis.router.decision"||m==="system.analysis.audit"||m==="analysis.user.message_signals"||m==="engagement.decision"?u="event-border-purple":m==="system.attention.expired"||m==="system.cli.command"||m==="system.cli.status"?u="event-border-orange":m==="system.test.completed"?u=o.test?.status==="OK"&&o.lint?.status==="OK"&&o.format?.status==="OK"?"event-border-blue":"event-border-red":u="event-border-blue");let v=g?"cursor-pointer":"",x=he.has(h.id),c=x?"expanded":"",l=x?"display: block;":"display: none;",T=new Date(h.timestamp*1e3),E=T.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),p=T.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),w=At(m,o),A=o.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${o.user_level})</span>`:"",_="";if(g){let M="";if(m==="engagement.decision"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${o.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Input Prompt")}
                            <pre class="detail-pre">${o.input_prompt||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context History")}
                            <pre class="detail-pre">${o.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Engagement Output")}
                            <pre class="detail-pre">${o.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(m==="system.cognitive.model_inference"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${o.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Method:</span>
                            <span class="detail-value" style="text-transform: uppercase;">${o.method}</span>
                        </div>
                        ${$("Inference Metrics")}
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 10px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${o.prompt_eval_count||0} / ${o.eval_count||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${o.duration_ms||0}ms</div>
                            </div>
                        </div>
                    `}else if(m==="system.attention.expired"){let $=N=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${N}</h5>`,k=o.timestamp-o.last_active,C=Math.floor(k/60);M=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${o.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${C} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context (Last Input)")}
                            <div class="detail-pre">${se(o.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${$("Thought Process (Last Output)")}
                            <div class="detail-pre">${se(o.last_output||"None")}</div>
                        </div>
                    `}else if(m==="messaging.bot.sent_message"){let $=D=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${D}</h5>`,k="";if(o.embed){let D=o.embed,K=D.title?`<div style="font-weight: bold; margin-bottom: 5px; color: #fff;">${j(D.title)}</div>`:"",q=D.description?`<div style="font-size: 0.9em; color: #bbb; white-space: pre-wrap;">${se(D.description)}</div>`:"",P=(D.fields||[]).map(U=>`
              <div style="margin-top: 10px;">
                <div style="font-size: 0.7em; text-transform: uppercase; color: #666; letter-spacing: 1px;">${j(U.name)}</div>
                <div style="font-size: 0.85em; color: #eee; white-space: pre-wrap;">${se(U.value)}</div>
              </div>
            `).join("");k=`
              <div class="discord-embed" style="margin-top: 15px; padding: 12px; border-left: 4px solid ${D.color?"#"+D.color.toString(16).padStart(6,"0"):"#bb86fc"}; background: rgba(255,255,255,0.02); border-radius: 0 4px 4px 0;">
                ${K}
                ${q}
                ${P}
              </div>
            `}let C="";o.eval_count&&(C=`
                            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${o.prompt_count} / ${o.eval_count}</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Total Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${o.duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Load Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${o.load_duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Processing</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${o.prompt_duration_ms}ms / ${o.eval_duration_ms}ms</div>
                                </div>
                            </div>
                        `);let N="";if(o.chat_history&&o.chat_history.length>0){let D=o.chat_history.length,K=o.chat_history.map((q,P)=>{let U=q.name?q.name.toUpperCase():q.role.toUpperCase();!q.name&&U==="ASSISTANT"&&(U="DEXTER");let G=q.role==="user"?"#03dac6":q.role==="system"?"#ffb74d":"#bb86fc",ee=P===D-1?"block":"none";return`
                                <div class="history-slide" data-index="${P}" style="display: ${ee};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${G}; letter-spacing: 1px; font-weight: bold;">${U}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${P+1} of ${D}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(q.content)}</div>
                                </div>
                            `}).join("");N=`
                            <div class="event-detail-block">
                                ${$("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${K}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}M=`
                        ${C}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${o.response_model||"N/A"}</span>
                        </div>
                        ${k}
                        ${N||`
                            <div class="event-detail-block">
                                ${$("Raw Input (Prompt)")}
                                <pre class="detail-pre">${o.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${$("Raw Response Output")}
                                <pre class="detail-pre">${o.response_raw||"None"}</pre>
                            </div>
                        `}
                    `}else if(m==="messaging.bot.voice_response"){let $=D=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${D}</h5>`,k="",C=[],N=o.raw_input||"";if(N.startsWith("[{")&&N.endsWith("}]")){let D=N.match(/{.*?}/g);D&&(C=D.map(K=>{let q=K.substring(1,K.length-1),P=q.indexOf(" "),U=q.substring(0,P),G=q.substring(P+1);return G=G.replace(/\[\]$/,"").trim(),{role:U,content:G}}))}if(C.length>0&&o.response_raw&&C.push({role:"assistant",content:o.response_raw}),C.length>0){let D=C.length,K=C.map((q,P)=>{let U=q.role.toUpperCase();U==="ASSISTANT"&&(U="DEXTER");let G=q.role==="user"?"#03dac6":q.role==="system"?"#ffb74d":"#bb86fc",ee=P===D-1?"block":"none";return`
                                <div class="history-slide" data-index="${P}" style="display: ${ee};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${G}; letter-spacing: 1px; font-weight: bold;">${U}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${P+1} of ${D}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(q.content)}</div>
                                </div>
                            `}).join("");k=`
                            <div class="event-detail-block">
                                ${$("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${K}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}M=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${o.response_model||"N/A"}</span>
                        </div>
                        ${k}
                        <div class="event-detail-block">
                            ${$("Raw Input (Prompt)")}
                            <pre class="detail-pre">${o.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Response Output")}
                            <pre class="detail-pre">${o.response_raw||"None"}</pre>
                        </div>
                    `}else if(m==="analysis.user.message_signals"){let $=N=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${N}</h5>`,k=o.signals||{};M=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Sentiment</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${k.sentiment>.3?"#03dac6":k.sentiment<-.3?"#cf6679":"#aaa"}; font-weight: bold;">${k.sentiment?.toFixed(2)||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Intent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: uppercase;">${k.intent||"N/A"}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tech Depth</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${k.technical_depth||0}/10</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Mood</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${k.mood||"N/A"}</div>
                            </div>
                        </div>
                        <div class="event-detail-block">
                            ${$("Extracted Topics")}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${(k.topics||[]).map(N=>`<span class="profile-badge">${N}</span>`).join("")||'<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${j(o.raw_output)||"None"}</pre>
                        </div>
                    `}else if(m==="moderation.explicit_content.deleted"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${o.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${o.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${j(o.raw_output)||"None"}</pre>
                        </div>
                    `}else if(m==="analysis.link.completed"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${o.url}" target="_blank" class="attachment-link">${o.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${j(o.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Description")}
                            <pre class="detail-pre">${j(o.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Content Summary")}
                            <pre class="detail-pre">${j(o.summary)||"None"}</pre>
                        </div>
                    `}else if(m==="analysis.visual.completed"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`,k="";o.base64_preview?k=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${o.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:o.url?k=`<div class="event-detail-block"><img src="${o.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:k=`
              <div class="event-detail-block" style="margin-top: 10px; height: 100px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444;">
                <i class='bx bx-low-vision' style="font-size: 2rem; margin-bottom: 5px; opacity: 0.3;"></i>
                <span style="font-size: 0.65em; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;">Visual Data Restricted</span>
              </div>`,M=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${o.filename}</span>
                        </div>
                        ${k}
                        <div class="event-detail-block">
                            ${$("Visual Description")}
                            <pre class="detail-pre">${j(o.description)||"None"}</pre>
                        </div>
                    `}else if(m==="analysis.router.decision"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
                        <div class="event-detail-row">
                            <span class="detail-label">Decision:</span>
                            <span class="detail-value" style="color: #bb86fc; font-weight: bold;">${o.decision}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${o.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${o.url}" target="_blank" class="attachment-link">${o.url}</a></span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${j(o.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Input Context")}
                            <pre class="detail-pre">${j(o.raw_input)||"None"}</pre>
                        </div>
                    `}else if(m==="system.cli.command"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
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
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${o.exit_code!==void 0?o.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Output")}
                            <pre class="detail-pre">${j(o.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(m==="system.analysis.audit"){let $=o.success?"#03dac6":"#ff4d4d",k=o.success?"SUCCESS":"FAILED",C=P=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${P}</h5>`,N="";o.error&&(N=`
                            <div class="event-detail-block">
                                ${C("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${j(o.error)}</pre>
                            </div>
                        `);let D="";if(o.chat_history&&o.chat_history.length>0){let P=o.chat_history.length,U=o.chat_history.map((G,ee)=>{let Y=G.name?G.name.toUpperCase():G.role.toUpperCase();!G.name&&Y==="USER"&&(Y="SYSTEM"),!G.name&&Y==="ASSISTANT"&&(Y="AGENT");let Ce=G.role==="user"?"#03dac6":G.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${ee}" style="display: ${ee===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${Ce}; letter-spacing: 1px; font-weight: bold;">${Y}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${ee+1} of ${P}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(G.content)}</div>
                                </div>
                            `}).join("");D=`
                            <div class="event-detail-block">
                                ${C("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${U}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${P<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let K="";if(o.corrections&&o.corrections.length>0){let P=o.corrections.map((U,G)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${U.type}] ${U.guidance}</div>
                                ${U.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${j(U.snippet)}</div>`:""}
                            </div>
                        `).join("");K=`
                            <div class="event-detail-block">
                                ${C(`Corrections (${o.corrections.length})`)}
                                ${P}
                            </div>
                        `}let q="";if(o.parsed_results&&o.parsed_results.length>0){let P=o.parsed_results.map(U=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${j(U.title)}</div>
                                <div style="color: #ddd;">${j(U.summary)}</div>
                            </div>
                        `).join("");q=`
                            <div class="event-detail-block">
                                ${C("Parsed Results")}
                                ${P}
                            </div>
                        `}M=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 120px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${o.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${o.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${$}; font-weight: bold;">${k} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${o.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${o.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${o.model}</div>
                            </div>
                        </div>
                        ${N}
                        ${q}
                        ${K}
                        ${D}
                    `}else if(m==="system.test.completed"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${o.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${o.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Format")}
                            <pre class="detail-pre">${o.format?.status||"N/A"}: ${o.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Lint")}
                            <pre class="detail-pre">${o.lint?.status||"N/A"}: ${o.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Tests")}
                            <pre class="detail-pre">${o.test?.status||"N/A"}: ${o.test?.details||o.test?.message||"OK"}</pre>
                        </div>
                    `}else if(m==="error_occurred"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${o.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${j(o.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context")}
                            <pre class="detail-pre">${JSON.stringify(o.context||{},null,2)}</pre>
                        </div>
                    `}else if(m==="system.cli.status"){let $=k=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${k}</h5>`;M=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${o.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Message")}
                            <pre class="detail-pre">${j(o.message)}</pre>
                        </div>
                    `}else if(m==="messaging.user.sent_message"){let $="";o.attachments&&o.attachments.length>0&&($=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${o.attachments.map(C=>{let N=C.content_type&&C.content_type.startsWith("image/"),D=(C.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${N?`<div class="attachment-thumb-container"><img src="${C.url}" alt="${C.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${C.url}" target="_blank" class="attachment-link">${C.filename}</a>
                                        <span class="attachment-meta">${C.content_type} \u2022 ${D}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),M=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${o.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${o.content||"(empty)"}</pre>
                        </div>
                        ${$}
                    `}_=`
                    <div class="event-details" style="${l}">
                        ${M}
                    </div>
                `}let B=document.createElement("div");B.className=`event-item ${u} ${v} ${c}`,B.dataset.eventId=h.id,B.onclick=function(M){if(!g)return;let $=this;if($.classList.contains("expanded")){$.classList.remove("expanded"),he.delete(h.id);let C=$.querySelector(".event-details");C&&(C.style.display="none")}else{$.classList.add("expanded"),he.add(h.id);let C=$.querySelector(".event-details");C&&(C.style.display="block")}},B.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${p}</span>
                </div>
                <div class="event-icon"><i class='bx ${I}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${L}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${L}</span>
                        ${h.service} ${A}
                    </div>
                    <div class="event-message">${w}</div>
                    ${_}
                </div>
            `;let O=B.querySelector(".event-details");if(O&&O.addEventListener("click",M=>{M.stopPropagation()}),g){let M=B.querySelector(".close-details-btn");M&&M.addEventListener("click",$=>{$.stopPropagation();let k=$.target.closest(".event-item");if(k){k.classList.remove("expanded"),he.delete(h.id);let C=k.querySelector(".event-details");C&&(C.style.display="none")}})}let V=B.querySelector(".prev-btn"),Z=B.querySelector(".next-btn");if(V&&Z){let M=0,$=Array.from(B.querySelectorAll(".history-slide")),k=$.length,C=()=>{$.forEach((N,D)=>{N.style.display=D===M?"block":"none"}),V.disabled=M===0,Z.disabled=M===k-1,V.style.opacity=M===0?"0.5":"1",Z.style.opacity=M===k-1?"0.5":"1"};V.addEventListener("click",N=>{N.stopPropagation(),M>0&&(M--,C())}),Z.addEventListener("click",N=>{N.stopPropagation(),M<k-1&&(M++,C())}),C()}return B},d=Array.from(e.children),b=new Map(d.map(h=>[h.dataset.eventId,h])),S=new Set(ze.map(h=>h.id));d.forEach(h=>{let o=h.dataset.eventId;(!o||!S.has(o))&&h.remove()});let y=null;ze.forEach((h,o)=>{let m=b.get(h.id);(!m||t)&&(m&&m.remove(),m=f(h),!m)||(o===0?e.firstElementChild!==m&&e.prepend(m):y&&y.nextElementSibling!==m&&y.after(m),y=m)}),Fe=Date.now(),ce(1,Fe)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=W("offline","Failed to load events.","The event service may be offline."))}}function Ss(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ze.forEach(s=>he.add(s.id)),pe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{he.clear(),pe(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),s.classList.add("active"),Q=s.dataset.filter||"all",pe(!0)}}),i.dataset.listenerAttached="true"),i&&i.querySelectorAll(".filter-btn").forEach(s=>{s.dataset.filter===Q?s.classList.add("active"):s.classList.remove("active")});let n=document.getElementById("events-clear");n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let s=Q==="all"?"ALL":Q.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let a="/events";if(Q!=="all"?a+=`?category=${Q}`:a+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await H(a,{method:"DELETE"})).ok)throw new Error("Failed to delete events");he.clear(),pe(!0)}catch(a){console.error("Failed to clear events:",a),alert("Failed to clear events. Check console.")}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}function _t(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var ks=null;async function De(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await H("/logs");if(!e.ok)throw new Error("Logs offline");let i=await e.json();if(!i||i.length===0)return t.innerHTML=W("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let n=["local-model-0","local-cache-0","upstash-redis-rw","upstash-redis-ro","easter-company","easter-company-production","dex-test-service","easter-company-root"],s=i.filter(r=>!n.includes(r.id));s.forEach(r=>{r.logs&&Array.isArray(r.logs)?r.logs.reverse():r.logs=[]}),s.reverse();let a=s.map(r=>{let f=r.logs.join(`
`),d=[...r.logs];if(d.length<25){let S=25-d.length;for(let y=0;y<S;y++)d.push("")}else d.length>25&&(d=d.slice(-25));let b=d.map(S=>Le(S)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${r.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(f)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${r.id}" title="Clear Logs" style="${z()?"display: none;":""}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${b}</pre>
                </div>
            `}).join("");return t.innerHTML=a,document.querySelectorAll(".copy-logs-btn").forEach(r=>{r.addEventListener("click",()=>{let f=r,d=unescape(f.dataset.logs||"");navigator.clipboard.writeText(d).then(()=>{let b=f.querySelector("i");b&&(b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3))})})}),document.querySelectorAll(".clear-logs-btn").forEach(r=>{r.addEventListener("click",async()=>{let d=r.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${d}?`))try{(await H(`/logs?service_id=${d}`,{method:"DELETE"})).ok&&De()}catch(b){console.error("Error clearing logs:",b)}})}),ks=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=W("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var we=[],Ls=200,me=null,Bt=()=>`
    <div id="fabricator-live-root" style="flex: 1; display: flex; flex-direction: column; overflow: hidden; background: #000;">
        <div id="fabricator-standby" class="progress-standby" style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div class="radar-container">
                <div class="orbit-ring orbit-ring-1"></div>
                <div class="orbit-ring orbit-ring-2"></div>
                <div class="radar-brain"><i class='bx bx-brain'></i></div>
            </div>
            <h3 style="margin-bottom: 10px; color: #bb86fc; letter-spacing: 2px; text-transform: uppercase; font-size: 1em;">Cognitive Standby</h3>
            <p style="color: #888; max-width: 400px; font-size: 0.9em; line-height: 1.5; margin: 0 auto; text-align: center;">
                Dexter is currently monitoring system health. <br>
                Fabricator CLI self-instance is idle.
            </p>
        </div>

        <div id="fabricator-terminal" class="thinking-stream-container" style="flex: 1; display: none; flex-direction: column; margin: 0; border-radius: 0; border: none;">
            <div class="terminal-header" style="background: #1a1a1a; padding: 8px 15px;">
                <div class="terminal-controls">
                    <div class="terminal-dot" style="background: #ff5f56;"></div>
                    <div class="terminal-dot" style="background: #ffbd2e;"></div>
                    <div class="terminal-dot" style="background: #27c93f;"></div>
                </div>
                <div style="font-family: 'JetBrains Mono'; font-size: 0.7em; color: rgba(255, 255, 255, 0.5); text-transform: uppercase; letter-spacing: 1px;">fabricator_cli_self.sh</div>
            </div>
            <div id="fabricator-terminal-output" class="terminal-content" style="flex: 1; overflow-y: auto; padding: 15px; font-family: 'JetBrains Mono', monospace; font-size: 0.85em; line-height: 1.4; color: #e0e0e0; background: #000;">
                <!-- Live logs will be injected here -->
            </div>
        </div>
    </div>
  `;function Ht(){if(!document.getElementById("fabricator-live-root"))return;we=[];let e=document.getElementById("fabricator-terminal-output");e&&(e.innerHTML=""),z()?Cs():zt()}async function Cs(){let t=async()=>{try{let i=await H("/fabricator/live");if(!i.ok)return;let n=await i.json();n&&n.buffer&&(we=n.buffer,Dt())}catch(i){console.error("Failed to sync fabricator live from cache:",i)}};await t();let e=setInterval(()=>{if(!document.getElementById("fabricator-live-root")){clearInterval(e);return}t()},5e3)}function zt(){me&&me.close(),me=new EventSource("http://127.0.0.1:8100/fabricator/live"),me.onmessage=e=>{let i=e.data.replace(/\\n/g,`
`);we.push(i),we.length>Ls&&we.shift(),Dt()},me.onerror=e=>{console.error("Fabricator SSE Error:",e),me?.close(),setTimeout(()=>{document.getElementById("fabricator-live-root")&&zt()},5e3)};let t=setInterval(()=>{document.getElementById("fabricator-live-root")||(me?.close(),me=null,clearInterval(t))},1e3)}function Dt(){let t=document.getElementById("fabricator-terminal"),e=document.getElementById("fabricator-standby"),i=document.getElementById("fabricator-terminal-output");if(!(!t||!e||!i))if(we.length>0){t.style.display="flex",e.style.display="none";let n=we.join("");i.innerHTML=Le(n)||"",i.scrollTop=i.scrollHeight}else t.style.display="none",e.style.display="flex"}var Ot=()=>{let t=z()?"display: none;":"";return`
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

        <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">
            <i class='bx bx-shield' style="color: #bb86fc; font-size: 1.5em;"></i>
            <h2 style="margin: 0;">Guardian</h2>
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

        <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">
            <i class='bx bx-search-alt' style="color: #03dac6; font-size: 1.5em;"></i>
            <h2 style="margin: 0;">Analyzer</h2>
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

        <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">
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

                <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">

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

        

                <div class="system-section-header" style="display: flex; align-items: center; gap: 12px;">

                    <i class='bx bx-layer' style="color: #bb86fc; font-size: 1.5em;"></i>

                    <h2 style="margin: 0;">Architect</h2>

                    <button id="architect-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>

                </div>

        

                <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">

                    <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">

                        <div class="guardian-indicator" style="text-align: center;">

                            <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Architect Agent</span>

                            <span id="architect-alert_review-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>

                            <div id="architect-alert_review-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>

                        </div>

                    </div>

                </div>

        `},Pt=()=>`
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
        <div id="processes-history-widgets" class="system-monitor-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,jt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
            <div id="global-service-controls" class="header-controls" style="margin-left: auto; gap: 8px; ${z()?"display: none;":"display: flex;"}">
                <button id="global-restart-btn" class="notif-action-btn" title="Restart All Services"><i class='bx bx-refresh'></i></button>
                <button id="global-stop-btn" class="notif-action-btn" title="Stop All Services"><i class='bx bx-stop'></i></button>
                <button id="global-start-btn" class="notif-action-btn" title="Start All Services"><i class='bx bx-play'></i></button>
            </div>
        </div>
        <div id="services-widgets" style="margin-bottom: 30px;">
            ${W("config","Acquiring system metrics...","Searching for active nodes...")}
        </div>`;var qt=()=>`
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
        </div>`,Ut=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${_t()}
        </div>`;async function Ft(){Ms(),await Promise.all([ie(),Ee(),yt()]),await De()}var Je=null;function Ms(){Je||(Je=setInterval(()=>{if(!document.getElementById("guardian-sentry-val")){clearInterval(Je),Je=null;return}let e=document.getElementById("upstash-countdown");if(e){let s=60-new Date().getSeconds();e.textContent=`${s}s`,s<10?e.style.color="#cf6679":e.style.color="#fff"}ie(!0)},1e3))}var Rt=null;async function Is(){try{return await(await H("/system_monitor")).json()}catch{return null}}async function Nt(){try{return await(await H("/system/hardware")).json()}catch{return null}}async function As(){try{return await(await H("/processes")).json()}catch{return null}}async function _s(){try{return await(await H("/agent/status")).json()}catch{return null}}async function Ee(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),i=document.getElementById("global-restart-btn"),n=document.getElementById("global-stop-btn"),s=document.getElementById("global-start-btn"),a=(c,l)=>{c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{let T=c.innerHTML;c.innerHTML="<i class='bx bx-loader-alt spin'></i>",c.disabled=!0;try{await H(`/system/service/${l}`,{method:"POST",body:JSON.stringify({service:"all"})}),setTimeout(()=>Ee(),2e3),setTimeout(()=>Ee(),5e3),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{c.innerHTML=T,c.disabled=!1},1e3)},1e3)}catch(E){console.error(E),c.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{c.innerHTML=T,c.disabled=!1},2e3)}},c.dataset.listenerAttached="true")};a(i,"restart"),a(n,"stop"),a(s,"start");let r=document.querySelector("#hw-os .hw-content"),f=document.querySelector("#hw-cpu .hw-content"),d=document.querySelector("#hw-ram .hw-content"),b=document.querySelector("#hw-gpu .hw-content"),S=document.querySelector("#hw-storage .hw-content"),y=c=>{if(c){if(r&&(r.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${c.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${c.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),d){let l=(c.MEMORY_BYTES/1073741824).toFixed(1);d.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${l} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(f&&c.CPU&&c.CPU.length>0){let l=c.CPU[0];f.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${l.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${l.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${l.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}b&&(c.GPU&&c.GPU.length>0?b.innerHTML=c.GPU.map(l=>{let T=(l.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${l.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${T} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):b.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),S&&c.STORAGE&&c.STORAGE.length>0?S.innerHTML=c.STORAGE.map(l=>{let T=(l.USED/1073741824).toFixed(1),E=(l.SIZE/(1024*1024*1024)).toFixed(1),p=l.SIZE>0?(l.USED/l.SIZE*100).toFixed(0):0,w=l.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${l.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${w}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${T} GB Used</span>
                            <span>${E} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${Number(p)>90?"#cf6679":"#03dac6"}; width: ${p}%; height: 100%; box-shadow: 0 0 10px ${Number(p)>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):S&&(S.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>";let c=await Nt();c?(y(c),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)):(e.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3))},e.dataset.listenerAttached="true"),f&&!f.hasChildNodes())){let c=await Nt();y(c)}if(!t)return;t.dataset.controlsAttached||(t.addEventListener("click",async c=>{let l=c.target.closest(".svc-btn");if(!l)return;let T=l,E=T.dataset.action,p=T.dataset.service;if(!E||!p)return;let w=T.innerHTML;T.innerHTML="<i class='bx bx-loader-alt spin'></i>",T.classList.add("loading"),T.disabled=!0;try{await H(`/system/service/${E}`,{method:"POST",body:JSON.stringify({service:p})}),setTimeout(()=>Ee(),1e3),setTimeout(()=>Ee(),3e3)}catch(A){console.error(A),alert(`Failed to ${E} ${p}`),T.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{T.innerHTML=w,T.classList.remove("loading"),T.disabled=!1},2e3)}}),t.dataset.controlsAttached="true");let h=await Is();if(!h||!h.services){t.children.length===0&&(t.innerHTML=W("offline","Failed to load system metrics.","The event service may be offline."));return}Rt=z()&&ge.lastDashboard||Date.now(),ce(3,Rt||0);let o=h.services||[],m={cli:[],fe:[],cs:[],be:[],th:[],co:[],md:[],prd:[],os:[]},L={cli:"CLI",fe:"Front-end",cs:"Core",be:"Backend",th:"Third Party",co:"Cognitive",md:"Models",prd:"Production",os:"Other"};o.forEach(c=>{m[c.type]?m[c.type].push(c):m.os.push(c)});let I="";Object.entries(m).forEach(([c,l])=>{l.length!==0&&(I+=`
            <div class="service-category-header" style="width: 100%; margin: 20px 0 15px 0; display: flex; align-items: center; gap: 10px;">
                <span style="color: #888; font-size: 0.75em; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">${L[c]||c}</span>
                <span style="flex: 1; height: 1px; background: rgba(255,255,255,0.02);"></span>
            </div>
            <div class="service-category-grid system-monitor-widgets" style="padding-bottom: 20px;">
                ${l.map(T=>x(T)).join("")}
            </div>`)}),t.innerHTML!==I&&(t.innerHTML=I);function g(c){if(!c||c==="N/A"||c==="unknown")return"-";let l=c.match(/^(\d+\.\d+\.\d+)/);return l?l[0]:c.split(".").slice(0,3).join(".")||"-"}function u(c){return!c||c.length<=22?c:c.substring(0,22)+"..."}function v(c){if(!c||c==="N/A"||c==="unknown")return"-";let l=c.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!l)return"-";let T=parseInt(l[1])||0,E=parseInt(l[2])||0,p=parseInt(l[3])||0,w=parseFloat(l[4])||0,A=T*86400+E*3600+p*60+w,_=Math.floor(A/86400);if(_>0)return`${_}d`;let B=Math.floor(A/3600);if(B>0)return`${B}h`;let O=Math.floor(A/60);return O>0?`${O}m`:`${Math.floor(A)}s`}function x(c){if(c.id==="upstash-redis-ro"){let D=z()&&(ge.lastFrontend||ge.lastDashboard)||Date.now();return`
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
            </div>`}let l=c.status==="online",T=l?"service-widget-online":"service-widget-offline",E=l?"bx-check-circle":"bx-x-circle",p=l?"OK":"BAD",w=c.version?g(c.version.str):"-",A=c.cpu&&c.cpu!=="N/A"?c.cpu:"-",_=c.memory&&c.memory!=="N/A"?c.memory:"-",B=A!=="-"?"#00ff00":"#666",O=A!=="-"?"#fff":"#666",V=_!=="-"?"#00ff00":"#666",Z=_!=="-"?"#fff":"#666",M=v(c.uptime),$="",k=c.type!=="os"&&c.type!=="cli"&&c.type!=="prd"&&c.type!=="md",C="";if(k&&!z()&&(C=`
            <div class="service-controls">
                <button class="svc-btn svc-restart" title="Restart Service" data-action="restart" data-service="${c.id}"><i class='bx bx-refresh'></i></button>
                <button class="svc-btn svc-stop" title="Stop Service" data-action="stop" data-service="${c.id}" ${l?"":"disabled"}><i class='bx bx-stop'></i></button>
                <button class="svc-btn svc-start" title="Start Service" data-action="start" data-service="${c.id}" ${l?"disabled":""}><i class='bx bx-play'></i></button>
            </div>`),l){let D=c.type==="md"?"Size:":"Version:",K=c.type==="md"?c.memory:w,q=c.type==="md"?"Type:":"RAM:",P=c.type==="md"?c.health_message||"Model":_;$=`
                <div class="service-widget-info">
                    <span class="info-label">${D}</span>
                    <span class="info-value metric-version-monospace">${K}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${M}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${B};"></i>
                        <span style="color: ${O};">${A}</span>
                    </div>
                    <div class="service-widget-item" title="${q}">
                        <i class="bx bxs-chip" style="color: ${V};"></i>
                        <span style="color: ${Z};">${P}</span>
                    </div>
                </div>`}else $='<div class="service-widget-footer offline" style="justify-content: center; opacity: 0.5; letter-spacing: 2px; font-weight: bold; margin-top: auto;"><span>OFFLINE</span></div>';let N=z()||c.type==="md"?"easter.company":u(c.domain&&c.port?`${c.domain}:${c.port}`:"");return`<div class="service-widget ${T}" data-service-id="${c.id}"><div class="service-widget-header"><i class="bx ${E}"></i><h3>${c.short_name||c.id}</h3><span class="service-widget-status">${p}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${N}</span></div>${$}</div>${C}</div>`}}async function ie(t=!1){let e=document.getElementById("processes-widgets");if(!e&&!t)return;let i=document.getElementById("guardian-sentry-val"),n=document.getElementById("guardian-idle-val"),s=document.getElementById("guardian-total-idle"),a=document.getElementById("guardian-total-active"),r=document.getElementById("guardian-total-waste"),f=document.getElementById("guardian-reset-btn"),d=document.getElementById("analyzer-reset-btn"),b=document.getElementById("fabricator-reset-btn"),S=document.getElementById("fabricator-progress-btn"),y=document.getElementById("courier-reset-btn"),h=document.getElementById("system-pause-toggle-btn");S&&!S.dataset.listenerAttached&&(S.onclick=()=>{let c=document.querySelector("nav");c&&(c.style.display="none");let l=oe({id:"fabricator-progress-window",title:"Mission Control",icon:"bx-loader-circle",className:"fabricator-progress-modal",appendToBody:!0,content:`
                          <div class="full-modal">
                            <div class="window-header">
                                <i class='bx bx-loader-circle spin' style="color: #03dac6;"></i>
                                <div class="window-title">Fabrication Live</div>
                                <div class="window-close close-modal-btn"><i class='bx bx-x'></i></div>
                            </div>
                            <div class="inner-modal-content" style="height: 100%; display: flex; flex-direction: column;">
                                ${Bt()}
                            </div>
                          </div>
                        `,onOpen:()=>{let p=document.getElementById("fabricator-progress-window");p&&p.querySelector(".close-modal-btn")?.addEventListener("click",()=>l.close()),Ht()},onClose:()=>{c&&(c.style.display=""),window.removeEventListener("popstate",T),document.removeEventListener("visibilitychange",E)}}),T=()=>l.close(),E=()=>{document.hidden&&l.close()};window.addEventListener("popstate",T),document.addEventListener("visibilitychange",E),l.open()},S.dataset.listenerAttached="true"),h&&!h.dataset.listenerAttached&&(h.onclick=async()=>{let l=h.querySelector(".bx-play")?"/agent/resume":"/agent/pause";h.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H(l,{method:"POST"}),await ie()}catch{h.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>ie(),2e3)}},h.dataset.listenerAttached="true"),f&&!f.dataset.listenerAttached&&(f.onclick=async()=>{f.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?agent=all",{method:"POST"}),setTimeout(()=>{f.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{f.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ie()}catch{f.innerHTML="<i class='bx bx-error'></i>"}},f.dataset.listenerAttached="true"),d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{d.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?agent=analyzer",{method:"POST"}),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{d.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ie()}catch{d.innerHTML="<i class='bx bx-error'></i>"}},d.dataset.listenerAttached="true"),b&&!b.dataset.listenerAttached&&(b.onclick=async()=>{b.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?agent=fabricator",{method:"POST"}),setTimeout(()=>{b.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{b.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ie()}catch{b.innerHTML="<i class='bx bx-error'></i>"}},b.dataset.listenerAttached="true"),y&&!y.dataset.listenerAttached&&(y.onclick=async()=>{y.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?agent=courier",{method:"POST"}),setTimeout(()=>{y.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{y.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ie()}catch{y.innerHTML="<i class='bx bx-error'></i>"}},y.dataset.listenerAttached="true");let o=document.getElementById("architect-reset-btn");o&&!o.dataset.listenerAttached&&(o.onclick=async()=>{o.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?agent=architect",{method:"POST"}),setTimeout(()=>{o.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{o.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ie()}catch{o.innerHTML="<i class='bx bx-error'></i>"}},o.dataset.listenerAttached="true");let m=await _s();if(m&&m.agents){let c=m.agents.guardian||{protocols:{}},l=m.agents.analyzer||{protocols:{}},T=m.agents.architect||{protocols:{}},E=m.agents.fabricator||{protocols:{}},p=m.agents.courier||{protocols:{}},w=m.system||{},A=Math.floor(Date.now()/1e3),_={sentry:"Sentry",synthesis:"Synthesis",architect:"Architect",review:"Review",issue:"Issue",construct:"Construct",reporter:"Reporter",researcher:"Researcher",compressor:"Compressor"},B=F=>{F<0&&(F=0);let X=Math.floor(F/3600),J=Math.floor(F%3600/60),$e=F%60;return X>0?`${X}h ${J}m`:J>0?`${J}m ${$e}s`:`${$e}s`},O=(F,X,J,$e,fe)=>{if(!F)return;let Me=_[$e]||$e.toUpperCase(),at=F.parentElement?.querySelector('span[style*="text-transform: uppercase"]');if(at&&(at.textContent=Me),fe==="paused"){F.textContent="PAUSED",F.style.color="#ff9800";return}if(!J){F.textContent="Inactive",F.style.color="#666";return}let ot=J.status;if(ot==="Working")F.textContent="Working",F.style.color="#bb86fc";else if(ot==="Ready")F.textContent="Ready",F.style.color="#5eff5e";else{let Oe=J.cooldown;if(z()&&(Oe=J.next_run-A),Oe<=0)F.textContent="Ready",F.style.color="#5eff5e";else{let Qt=Math.floor(Oe/60),es=Oe%60;F.textContent=`${Qt}m ${es}s`,F.style.color="#fff"}}X&&J.stats&&(X.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <span>Runs: ${J.stats.runs||0}</span>
              <span style="color: ${J.stats.failures>0?"#ffa500":"#666"}">Fails: ${J.stats.failures||0}</span>
              <span style="color: ${J.stats.aborted>0?"#ff4d4d":"#666"}">Aborted: ${J.stats.aborted||0}</span>
            </div>
          `)};i&&O(i,document.getElementById("guardian-sentry-stats"),c.protocols.sentry,"sentry",w.state);let V=document.getElementById("analyzer-summary-val"),Z=document.getElementById("analyzer-summary-stats");V&&O(V,Z,l.protocols.summary,"summary",w.state);let M=document.getElementById("analyzer-synthesis-val"),$=document.getElementById("analyzer-synthesis-stats");M&&O(M,$,l.protocols.synthesis,"synthesis",w.state);let k=document.getElementById("architect-alert_review-val"),C=document.getElementById("architect-alert_review-stats");k&&O(k,C,T.protocols.architect,"architect",w.state);let N=document.getElementById("fabricator-review-val"),D=document.getElementById("fabricator-review-stats");N&&O(N,D,E.protocols.review,"review",w.state);let K=document.getElementById("fabricator-issue-val"),q=document.getElementById("fabricator-issue-stats");K&&O(K,q,E.protocols.issue,"issue",w.state);let P=document.getElementById("fabricator-construct-val"),U=document.getElementById("fabricator-construct-stats");P&&O(P,U,E.protocols.construct,"construct",w.state);let G=document.getElementById("fabricator-reporter-val"),ee=document.getElementById("fabricator-reporter-stats");G&&O(G,ee,E.protocols.reporter,"reporter",w.state);let Y=document.getElementById("courier-researcher-val"),Ce=document.getElementById("courier-researcher-stats");Y&&O(Y,Ce,p.protocols.researcher,"researcher",w.state);let Re=document.getElementById("courier-compressor-val"),Ve=document.getElementById("courier-compressor-stats");Re&&O(Re,Ve,p.protocols.compressor,"compressor",w.state);let Ne=document.getElementById("system-state-label"),ue=document.getElementById("system-state-val");if(ue&&w.state){let F=w.state,X=B(w.state_time||0);Ne&&(Ne.textContent=`State: ${F.toUpperCase()}`),ue.textContent=X,F==="idle"?ue.style.color=w.state_time>300?"#5eff5e":"#fff":ue.style.color="#bb86fc",h&&(F==="paused"?(h.innerHTML="<i class='bx bx-play'></i>",h.title="Resume System",h.style.color="#ff9800"):(h.innerHTML="<i class='bx bx-pause'></i>",h.title="Pause System",h.style.color=""))}s&&(s.textContent=B(w.metrics?.total_idle_time||0)),a&&(a.textContent=B(w.metrics?.total_active_time||0)),r&&(r.textContent=B(w.metrics?.total_waste_time||0))}else[i,n,s,a,r].forEach(l=>{l&&(l.textContent="-",l.style.color="#666")});if(t)return;let L=await As(),I=[],g=[],u=[];L&&(Array.isArray(L)?I=L:(I=L.active||[],g=L.queue||[],u=L.history||[],u.sort((c,l)=>(l.end_time||0)-(c.end_time||0)))),e&&(I.length===0?e.querySelector(".tab-placeholder")||(e.innerHTML=W("empty","No active processes.")):((e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML=""),st(e,I,!1)));let v=document.getElementById("processes-queue-widgets");v&&(g.length===0?!v.querySelector(".tab-placeholder")&&!v.querySelector('div[style*="font-style: italic"]')&&(v.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(v.innerHTML="",st(v,g,!1)));let x=document.getElementById("processes-history-widgets");x&&(u.length===0?x.querySelector(".tab-placeholder")||(x.innerHTML=W("empty","No recent history.")):(x.querySelector(".tab-placeholder")&&(x.innerHTML=""),st(x,u,!0))),bt(0,I.length)}function st(t,e,i){function n(d){let b="";d.end_time?b=`${d.end_time-d.start_time}s`:b=`${Math.floor(Date.now()/1e3-d.start_time)}s`;let S=d.retries>0?`<span class="process-retry-badge">Retry ${d.retries}</span>`:"",y=d.channel_id,h={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation","system-analyzer":"Analyzer Agent","system-courier":"Courier Agent","system-architect":"Architect Agent","system-fabricator":"Fabricator Agent","system-test":"System Validation","voice-mode":"Voice Interaction","system-context-summary-test-channel-id":"Context Summary Test"};if(h[y]?y=h[y]:y.startsWith("system-context-summary-")?y=`Context Compression: ${y.replace("system-context-summary-","")}`:/^\d+$/.test(y)&&(y=`Channel ${y}`),i)return`
        <div class="process-history-item" data-channel-id="${d.channel_id}-${d.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${y}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${d.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${d.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${b}</span>
            </div>
        </div>`;let o=d.channel_id==="system-test",m=o?"#03dac6":"#fff",L=o?"border: 1px solid #03dac644;":"",I=o?"bx-shield-quarter":"bx-cog";return`
                <div class="service-widget process-widget" data-channel-id="${d.channel_id}-${d.start_time}" style="${L}">
                    <div class="service-widget-header">
                        <i class="bx ${I}" style="color: ${m}"></i>
                        <h3 style="color: ${m}">${y}</h3>
                        ${S}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${m}">${d.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${m}">${b}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${m}">${d.pid}</span>
                        </div>
                    </div>
                </div>`}let s=i?".process-history-item":".process-widget",a=new Map(Array.from(t.querySelectorAll(s)).map(d=>[d.dataset.channelId,d])),r=new Set(e.map(d=>`${d.channel_id}-${d.start_time}`));for(let[d,b]of a)d&&!r.has(d)&&b.remove();let f=new Set;e.forEach(d=>{let b=`${d.channel_id}-${d.start_time}`;if(f.has(b))return;f.add(b);let S=n(d),y=a.get(b);if(y&&y.parentNode){y.outerHTML!==S&&(y.outerHTML=S);let h=t.querySelector(`[data-channel-id="${b}"]`);h&&t.appendChild(h)}else t.insertAdjacentHTML("beforeend",S)})}function We(){let t=Ge(),e="Notification"in window,i={enabled:e&&Notification.permission==="granted",supported:e};return`
            <div class="theme-selector">
                ${Object.values(te).map(n=>`
                    <div class="theme-card ${t===n?"active":""}" data-theme="${n}">
                        <div class="theme-preview theme-preview-${n.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${n.charAt(0).toUpperCase()+n.slice(1)}</h3>
                            <p>${n===te.DARK?"Simple, clean, dark.":n===te.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
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
            </div>`}function nt(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(n=>{n.addEventListener("click",function(){let s=this.dataset.theme;s&&(mt(s),t.setContent(We()),nt(t))})});let i=document.getElementById("notifications-toggle");i&&"Notification"in window?i.onclick=async n=>{let s=n.target;if(s.checked)try{await Notification.requestPermission()!=="granted"&&(s.checked=!1)}catch{s.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.checked=!0)}:i&&(i.disabled=!0),Bs()}async function Bs(){let t=document.getElementById("service-config-list");if(!t)return;let e=z();try{let n=await(await H("/system/options")).json(),s=n.services||n||{},a="",r=(f,d,b)=>`

        <div class="settings-item">

            <div class="settings-item-info">

                <span class="settings-item-label">${f}</span>

                <span class="settings-item-description">Enable GPU acceleration (CUDA)</span>

            </div>

            <label class="toggle-switch">

                <input type="checkbox" class="service-device-toggle" data-service="${d}" ${b==="cuda"?"checked":""} ${e?"disabled":""}>

                <span class="toggle-slider"></span>

            </label>

        </div>`;if(s.stt&&(a+=r("STT Service","stt",s.stt.device||"cpu")),s.tts&&(a+=r("TTS Service","tts",s.tts.device||"cpu")),a?e&&(a+='<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Service configuration is read-only in public mode.</div>'):a='<div style="padding: 20px; text-align: center; color: #666;">No configurable services found.</div>',t.innerHTML=a,e)return;t.querySelectorAll(".service-device-toggle").forEach(f=>{f.addEventListener("change",async d=>{let b=d.target,S=b.dataset.service,y=b.checked?"cuda":"cpu";b.disabled=!0;try{await H("/system/options",{method:"POST",body:JSON.stringify({service:S,key:"device",value:y})})}catch{b.checked=!b.checked,alert("Failed to update configuration.")}finally{b.disabled=!1}})})}catch{t.innerHTML='<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load configuration.</div>'}}var Wt=()=>`
        <style>
            .web-view-container {
                display: flex;
                flex: 1;
                overflow: hidden;
                position: relative;
            }
            .web-sidebar {
                width: 350px;
                background: rgba(255,255,255,0.02);
                border-left: 1px solid rgba(255,255,255,0.05);
                display: flex;
                flex-direction: column;
                transition: all 0.3s ease;
            }
            #web-switch-btn {
                display: none;
            }

            @media (max-width: 880px) {
                .web-view-container {
                    flex-direction: column;
                }
                .web-sidebar {
                    width: 100% !important;
                    border-left: none;
                    position: absolute;
                    inset: 0;
                    z-index: 5;
                    background: #050507;
                }
                #web-switch-btn {
                    display: flex;
                }
            }
        </style>
        <div style="display: flex; flex-direction: column; height: 100%; overflow: hidden;">
            <div class="system-section-header" style="flex-shrink: 0;">
                <i class='bx bx-globe' style="color: #03dac6;"></i>
                <h2 id="web-view-title">Web View</h2>
                <div style="margin-left: auto; display: flex; gap: 10px;">
                    <button id="web-switch-btn" class="notif-action-btn" title="Switch View"><i class='bx bx-transfer-alt'></i></button>
                    <button id="web-sidebar-toggle" class="notif-action-btn" title="Toggle Analysis Sidebar"><i class='bx bx-dock-right'></i></button>
                    <button id="web-refresh-btn" class="notif-action-btn" title="Refresh Data"><i class='bx bx-refresh'></i></button>
                </div>
            </div>
            <div class="web-view-container">
                <!-- Main Iframe Area -->
                <div id="web-frame-container" style="flex: 1; height: 100%; background: #000; position: relative;">
                    <div id="web-frame-placeholder" style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1; background: #050507; color: #444; text-align: center; padding: 20px;">
                        <i class='bx bx-world' style="font-size: 4rem; margin-bottom: 15px; opacity: 0.2;"></i>
                        <p style="max-width: 300px; font-size: 0.9em; line-height: 1.6;">Enter a URL or wait for Dexter to browse the web.</p>
                    </div>
                    <iframe id="web-main-frame" sandbox="allow-scripts allow-forms allow-same-origin" style="width: 100%; height: 100%; border: none; background: #fff; display: none;"></iframe>
                </div>

                <!-- Analysis Sidebar -->
                <div id="web-analysis-sidebar" class="web-sidebar">
                    <div style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.2);">
                        <h3 style="margin: 0; font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #888;">Active Analysis</h3>
                    </div>
                    <div id="web-analysis-content" style="flex: 1; overflow-y: auto; padding: 15px;">
                        <div style="text-align: center; color: #444; padding-top: 50px;">
                            <i class='bx bx-analyse' style="font-size: 2rem; opacity: 0.3;"></i>
                            <p style="font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px;">No analysis data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;async function Vt(){let t=document.getElementById("web-analysis-sidebar"),e=document.getElementById("web-sidebar-toggle"),i=document.getElementById("web-switch-btn"),n=document.getElementById("web-refresh-btn"),s=document.getElementById("web-view-title");e&&!e.dataset.listenerAttached&&(e.onclick=()=>{if(t){let r=t.style.display==="none";t.style.display=r?"flex":"none",e.style.color=r?"#03dac6":""}},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{if(t){let r=t.style.display!=="none";t.style.display=r?"none":"flex",s&&(s.textContent=r?"Web View":"Web Analysis")}},i.dataset.listenerAttached="true");let a=()=>{let r=window.innerWidth<880;t&&e&&i&&s&&(r?(e.style.display="none",t.style.display="none",s.textContent="Web View"):(e.style.display="flex",t.style.display="flex",s.textContent="Web View"))};window.hasWebResizeListener||(window.addEventListener("resize",a),window.hasWebResizeListener=!0),a(),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{n.innerHTML="<i class='bx bx-loader-alt spin'></i>",await Jt(),n.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{n.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},n.dataset.listenerAttached="true"),await Jt()}async function Jt(){let t=document.getElementById("web-analysis-content"),e=document.getElementById("web-main-frame"),i=document.getElementById("web-frame-placeholder");if(!(!t||!e||!i))try{let n=await H("/web/view");if(!n.ok)throw new Error("Failed to fetch web view state");let s=await n.json();if(!s||!s.url){i.style.display="flex",e.style.display="none",t.innerHTML=`
                <div style="text-align: center; color: #444; padding-top: 50px;">
                    <i class='bx bx-analyse' style="font-size: 2rem; opacity: 0.3;"></i>
                    <p style="font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px;">No active analysis</p>
                </div>`;return}e.src!==s.url&&(i.style.display="none",e.style.display="block",e.src=s.url);let a="";s.metadata&&(a+=`
                <div class="analysis-section" style="margin-bottom: 25px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: #03dac6;">
                        <i class='bx bx-info-circle'></i>
                        <span style="font-size: 0.7em; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Metadata</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <h4 style="margin: 0 0 8px 0; color: #fff; font-size: 0.9em; line-height: 1.4;">${s.metadata.title||"Untitled"}</h4>
                        <p style="margin: 0; color: #888; font-size: 0.75em; line-height: 1.5;">${s.metadata.description||"No description extracted."}</p>
                    </div>
                </div>
            `),s.scrape&&(a+=`
                <div class="analysis-section" style="margin-bottom: 25px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: #bb86fc;">
                        <i class='bx bx-code-alt'></i>
                        <span style="font-size: 0.7em; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Scraped Content</span>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.03); max-height: 200px; overflow-y: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.7em; color: #aaa; white-space: pre-wrap;">${j(s.scrape.content)||"No content."}</div>
                </div>
            `),s.visual&&(a+=`
                <div class="analysis-section" style="margin-bottom: 25px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: #ff9800;">
                        <i class='bx bx-camera'></i>
                        <span style="font-size: 0.7em; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Visual Analysis</span>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <p style="margin: 0; color: #fff; font-size: 0.8em; line-height: 1.5;">${s.visual.description||"Analyzing page layout..."}</p>
                    </div>
                </div>
            `),a||(a=`<div style="text-align: center; color: #444; padding-top: 50px;">
            <i class='bx bx-loader-alt spin' style="font-size: 2rem; opacity: 0.3;"></i>
            <p style="font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px;">Awaiting analysis data...</p>
        </div>`),t.innerHTML=`
        <div style="margin-bottom: 20px;">
            <a href="${s.url}" target="_blank" style="color: #bb86fc; font-size: 0.7em; text-decoration: none; word-break: break-all; display: block; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 4px;">
                <i class='bx bx-link-external'></i> ${s.url}
            </a>
        </div>
        ${a}
    `}catch(n){t.innerHTML=W("error","Web View failed.",n.message)}}var Yt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It maintains system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1] [--force]
0 = Full Analysis (Default)
1 = Tier 1 Only (Reports)`},demo_output:["\u2588 \x1B[1mGUARDIAN TECHNICAL SENTRY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m[INFO] Verifying system state...\x1B[0m"," \x1B[32m\u2713\x1B[0m No ongoing processes detected."," \x1B[32m\u2713\x1B[0m System idle time requirement met (312s).","","\x1B[1mInitializing Sentry Analysis...\x1B[0m","\x1B[94m\u2192 Executing Tier 1: Technical Sentry...\x1B[0m"," \x1B[90m\u2699\uFE0F  Auditing 50 system events...\x1B[0m"," \x1B[90m\u2699\uFE0F  Analyzing recent service logs...\x1B[0m"," \x1B[90m\u2699\uFE0F  Executing pre-analysis test suite...\x1B[0m","","# [SYSTEM] Service Connectivity Alert","**Priority**: high","**Body**: dex-tts-service reported 3 consecutive timeouts.","","\x1B[32m\u2713 Guardian run completed successfully.\x1B[0m","\x1B[90m  Duration: 14.2s | Waste: 0s | Reliability: 100%\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
dex stop
dex restart`},demo_output:["\u2192 Restarting dex-event-service...","\x1B[32m\u2713\x1B[0m Service stopped (PID 19420)","\x1B[32m\u2713\x1B[0m Service started (PID 20155)","\u2192 Verifying health check (http://127.0.0.1:8100/status)...","\x1B[32m\u2713\x1B[0m Response received in 12ms.","","\x1B[1mService uptime: 4 seconds\x1B[0m"]},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the status of CLI and services.",usage:"dex status [service]",category:"system",docs:{overview:"The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.",details:["Reports status (online/offline/degraded).","Displays version strings and build hashes.","Shows network addresses and ports.","Validates internal service-to-service communication."],extended_usage:"dex status [service_id|all]"},demo_output:["\u2588 \x1B[1mSERVICE STATUS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE  ADDRESS          VERSION  BRANCH   COMMIT   STATUS   UPTIME           CPU      MEM","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500          \u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500      \u2500\u2500\u2500","cli      local            2.8.143  main     240fc38  \x1B[32mOK\x1B[0m       \x1B[90m--\x1B[0m               \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m","event    127.0.0.1:8100   2.8.198  main     a8f2b1c  \x1B[32mOK\x1B[0m       14h22m           0.2%     12.4 MB","discord  127.0.0.1:8300   2.8.68   main     6e2d1a4  \x1B[32mOK\x1B[0m       14h22m           0.1%     24.8 MB","tts      127.0.0.1:8200   0.0.25   main     f2e1d0c  \x1B[32mOK\x1B[0m       14h22m           0.0%     1.2 GB","web      127.0.0.1:8201   0.0.5    main     b1c2d3e  \x1B[32mOK\x1B[0m       14h22m           0.0%     42.1 MB","model    127.0.0.1:8400   OK       \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       4d12h            0.5%     8.4 GB","cache    127.0.0.1:6379   7.4.1    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       32d              0.1%     4.2 MB"]},{id:"logs",title:"Logs",icon:"bx-terminal",description:"View or tail service logs.",usage:"dex logs <service> [-f]",category:"system",docs:{overview:"Logs provides real-time observability into the background processes of the Dexter services.",details:["Tail live output from systemd services.","Support for following (-f) and history limiting.","ANSI color support for terminal readability.","Aggregated view for multi-instance deployments."],extended_usage:"dex logs <service_id> [-f]"},demo_output:["\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:05\x1B[0m [INFO] Joined voice channel: 1437617331...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:08\x1B[0m [DEBUG] VAD triggered by user oweneaster","\x1B[35m[EVENT]\x1B[0m   \x1B[90m14:30:09\x1B[0m [INFO] Emitted: messaging.user.speaking.started","\x1B[32m[TTS]\x1B[0m     \x1B[90m14:30:12\x1B[0m [INFO] Generating audio for 12 words...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:15\x1B[0m [SUCCESS] Audio playback completed.","\x1B[90m[Watching for new logs...]\x1B[0m"]},{id:"event",title:"Event",icon:"bx-broadcast",description:"Interact with the Event Service.",usage:"dex event [log|service|analyst|delete]",category:"system",docs:{overview:"The event bus interface for manual debugging and data extraction.",details:["Query the history of the system event log.","Manually reset analyst tier timers.","Filter events by type, service, or count.","Delete historical events matching patterns."],extended_usage:`dex event log [-n count] [-t type]
dex event analyst [status|reset]
dex event delete <pattern>`},demo_output:["\u2588 \x1B[1mLAST 20 EVENTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m14:42:01\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[38;5;208mCMD: dex guardian [] (success)\x1B[0m","\x1B[90m14:42:02\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[35m[INFO] Analysis complete: No significant insights found.\x1B[0m","\x1B[90m14:45:10\x1B[0m \x1B[90mdiscord        \x1B[0m | \x1B[34moweneaster: Dexter, run a system scan.\x1B[0m","\x1B[90m14:45:12\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[32mPROC+: system-cli-op (started)\x1B[0m","\x1B[90m14:45:15\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[31m[ERROR] Connection timeout to Redis.\x1B[0m"]},{id:"discord",title:"Discord",icon:"bx-bot",description:"Interact with the Discord Service.",usage:"dex discord [contacts|channels|service|quiet]",category:"system",docs:{overview:"Direct control over the Discord bot integration and audio engine.",details:["List all guild members and their permission levels.","Inspect channel structures and user presence.",'Toggle "Quiet Mode" for public interactions.',"Check raw service state and gateway health."],extended_usage:`dex discord contacts
dex discord quiet [on|off]`},demo_output:["\u2588 \x1B[1mDISCORD CONTACTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Fetching guild members...","","\u2588 Server: Easter Company (12 members) \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","LEVEL           USERNAME        STATUS   DISCORD ID","\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[35mDEXTER (ME)\x1B[0m     Dexter          \x1B[32monline\x1B[0m   \x1B[90m1313...0432\x1B[0m","\x1B[35mMASTER\x1B[0m          oweneaster      \x1B[32monline\x1B[0m   \x1B[90m3130...7920\x1B[0m","\x1B[31mADMIN\x1B[0m           Developer       \x1B[33midle\x1B[0m     \x1B[90m4242...8181\x1B[0m","\x1B[37mUSER\x1B[0m            GuestUser       \x1B[90moffline\x1B[0m  \x1B[90m9999...9999\x1B[0m"]},{id:"model",title:"Model",icon:"bx-brain",description:"Run the Model Hub executable or sync neural models.",usage:"dex model [pull|sync|list]",category:"system",docs:{overview:"Proxy command for managing local LLMs and neural vision models via the Hub.",details:["Wraps the Model Hub (orchestrating dedicated neural spokes).","Added 'pull' subcommand to sync all Dexter-required models.","Synchronizes custom model templates automatically.","Validates model weight checksums."],extended_usage:`dex model pull
dex model run gemma-2-2b`},demo_output:["\x1B[34m[HUB]\x1B[0m Synchronizing custom Dexter models...","Pulling base models...","Pulling gemma-2-2b... \x1B[32m[100%]\x1B[0m","\x1B[32m\u2713 Successfully pulled model: gemma-2-2b\x1B[0m","Creating custom Dexter models...","  Rebuilding dex-commit from gemma-2-2b...","\x1B[32m\u2713   Created dex-commit\x1B[0m","\x1B[32m\u2713 Models are up-to-date.\x1B[0m"]},{id:"system",title:"System Info",icon:"bx-info-square",description:"Show system info and manage packages.",usage:"dex system [info|scan|validate|install]",category:"system",docs:{overview:"Performance observability tool focused on AI resource availability.",details:["Scans and reports CPU, GPU, RAM, and Storage vitals.","Validates presence of required system packages.","Handles automatic installation of missing dependencies.","Exports telemetry data in JSON format."],extended_usage:`dex system scan
dex system validate
dex system install <package>`},demo_output:["\u2588 \x1B[1mSYSTEM CONFIGURATION\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Category        Value","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500","CPU (Generic)   Cores: 16, Threads: 32","                Avg Clock: 4.20 GHz","GPU 0           NVIDIA GeForce RTX 4090, VRAM: 24.0 GB, CUDA: 1204","Memory          64.0 GB","Storage         2.0 TB (1 devices)","                /dev/nvme0n1p3: 450.2 GB / 1862.4 GB (/)","Packages        ","                \x1B[32m\u2713 12 checks passed\x1B[0m"]},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Show service config or a specific field.",usage:"dex config <service> [field...]",category:"system",docs:{overview:"Manages the central registry that defines service interaction.",details:["View service definitions (domains, ports, IDs).","Modify environment-specific parameters.","Update authentication secrets and API endpoints.","Supports JSON path traversal for deep fields."],extended_usage:`dex config <service> [field]
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Hs=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
    `;for(let[i,n]of Object.entries(t)){let s=Yt.filter(a=>a.category===i);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${n.icon}' style="color: ${n.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${n.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(a=>`
                        <div class="cli-command-card ${a.dummy?"dummy":""}" data-cmd="${a.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${n.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${a.icon}' style="font-size: 2em; color: ${n.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${a.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${a.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${n.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${a.usage}
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
    </div>`,e},it=!1;function zs(t){let e=document.getElementById("cli-terminal-overlay");if(!e){e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e);let d=document.getElementById("close-terminal-btn");d&&(d.onclick=()=>Gt());let b=document.getElementById("terminal-action-btn");b&&(b.onclick=()=>Gt())}let i=document.getElementById("cli-terminal-body"),n=document.getElementById("cli-docs-pane");i&&(i.innerHTML="");let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};n&&(n.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${s.overview}</p>
        </div>
        ${s.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${s.details.map(d=>`<li>${d}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${s.extended_usage}</pre>
        </div>
    `);let a=document.getElementById("terminal-cmd-name");a&&(a.textContent=`dex ${t.id}`);let r=document.getElementById("terminal-status-badge");r&&(r.className="terminal-status status-running",r.textContent="Running");let f=document.getElementById("terminal-action-btn");return f&&(f.style.display="none"),e.classList.add("active"),document.body.style.overflow="hidden",it=!0,i}function Gt(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),ae()||(document.body.style.overflow=""),it=!1}function Kt(t,e,i="output"){if(!it||!t)return;let n=document.createElement("div");if(n.className=`terminal-line terminal-${i}`,i==="prompt")n.innerHTML=`<span class="terminal-prompt">$</span> ${e}`;else{let s=Le(e);n.innerHTML=s||e}t.appendChild(n),t.scrollTop=t.scrollHeight}async function Ds(t){let e=Yt.find(r=>r.id===t);if(!e)return;let i=zs(e);i&&Kt(i,`dex ${t}`,"prompt");let n=e.demo_output||["Executing command...","\u2713 Done."];for(let r of n){await new Promise(d=>setTimeout(d,400+Math.random()*600));let f="output";r.includes("[ERROR]")?f="error":r.includes("[SUCCESS]")||r.includes("\u2713")?f="success":r.includes("!")&&(f="warning"),i&&Kt(i,r,f)}let s=document.getElementById("terminal-status-badge");s&&(s.className="terminal-status status-success",s.textContent="Completed (Demo)");let a=document.getElementById("terminal-action-btn");a&&(a.style.display="block")}function Xt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Hs();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let i=e.querySelector("code"),n=i?i.textContent:"";n&&navigator.clipboard.writeText(n).then(()=>{let s=e.querySelector("i");s&&(s.className="bx bx-check",s.style.color="#5eff5e",setTimeout(()=>{s.className="bx bx-copy",s.style.color="#bb86fc"},2e3))})}),t.querySelectorAll(".cli-command-card").forEach(i=>{let n=i;i.addEventListener("mouseenter",()=>{n.style.transform="translateY(-5px)",n.style.borderColor="rgba(255,255,255,0.15)",n.style.backgroundColor="rgba(255,255,255,0.05)"}),i.addEventListener("mouseleave",()=>{n.style.transform="translateY(0)",n.style.borderColor="rgba(255,255,255,0.05)",n.style.backgroundColor="rgba(255,255,255,0.03)"}),i.addEventListener("click",()=>{let s=n.dataset.cmd;s&&Ds(s)})})}async function Rs(){if(!z())try{if(!(await H("/system/status",{method:"GET"})).ok)throw new Error("Service unhealthy")}catch(t){console.error("Service health check failed:",t)}}function Zt(){if(window.location.protocol==="http:"&&window.location.hostname==="easter.company"){window.location.replace("https://"+window.location.hostname+window.location.pathname+window.location.search);return}lt(),ct(),Rs(),ft(),rt();let t=window.location.pathname;(t==="/dexter"||t==="/dexter/")&&Xt();let e=[],i=document.getElementById("windows-container");i&&i.setAttribute("data-count","0");let n=g=>{localStorage.setItem("dex_last_window",g)};function s(){for(;e.length>1;)e.shift().close(!0);let g=document.getElementById("windows-container"),u=document.querySelector("nav"),v=document.querySelector("footer"),x=window.location.pathname==="/"||window.location.pathname==="/index.html",c=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");g&&g.setAttribute("data-count",e.length.toString()),e.forEach(_=>{let B=document.getElementById(_.id);B&&B.classList.remove("hide-close")});let l=document.getElementById("dexter-menu-container"),T=document.getElementById("nav-window-switcher"),E=document.getElementById("settings-icon"),p=document.getElementById("docs-icon"),w=document.getElementById("close-all-windows"),A=window.innerWidth<880;if(!A){let _=document.getElementById("dexter-dropdown"),B=document.getElementById("dexter-menu-btn");_&&_.classList.remove("active"),B&&B.classList.remove("active"),g&&g.classList.remove("menu-open")}if(Te(e.length>0),e.length>0)if(v?.classList.add("hide"),w&&(w.style.display=A?"none":"block"),document.querySelector("main")?.style.setProperty("opacity","0","important"),document.body.style.overflow="hidden",u?.classList.add("window-open"),g&&(g.style.paddingTop="60px"),l&&(l.style.display=A?"flex":"none"),p&&(p.style.display=A?"block":"none"),E&&(E.style.display=A?"block":"none"),!A&&T){let _=e[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(_)?(T.innerHTML=`
                      <div class="nav-switch-btn ${_==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${_==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${_==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${_==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${_==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts")?.addEventListener("click",()=>{n("alerts-window"),a(f)}),document.getElementById("switch-events")?.addEventListener("click",()=>{n("events-window"),a(d)}),document.getElementById("switch-monitor")?.addEventListener("click",()=>{n("monitor-window"),a(S)}),document.getElementById("switch-contacts")?.addEventListener("click",()=>{n("contacts-window"),a(b)}),document.getElementById("switch-workspace")?.addEventListener("click",()=>{n("workspace-window"),a(y)})):T.innerHTML=""}else T&&(T.innerHTML="");else u?.classList.remove("window-open"),w&&(w.style.display="none"),g&&(g.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),ae()||(document.body.style.overflow=""),x||c?v?.classList.remove("hide"):v?.classList.add("hide"),l&&(l.style.display="flex"),p&&(p.style.display="block"),E&&(E.style.display="block"),T&&(T.innerHTML="");Ie()}function a(g){if(g.isOpen()){g.close();return}for(;e.length>0;)e.pop().close(!0);e.push(g),g.open(),s()}function r(){[...e].forEach(u=>u.close()),e=[]}window.addEventListener("resize",s);let f=oe({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:wt(),onOpen:()=>de(),onClose:()=>{let g=e.indexOf(f);g>-1&&e.splice(g,1),s()}}),d=oe({id:"events-window",title:"Events",icon:"bx-calendar-event",content:tt(),onOpen:()=>{d.setContent(tt()),pe()},onClose:()=>{let g=e.indexOf(d);g>-1&&e.splice(g,1),s()}}),b=oe({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:It(),onOpen:()=>et(),onClose:()=>{let g=e.indexOf(b);g>-1&&e.splice(g,1),s()}}),S=oe({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-component",title:"Processes",content:Pt()},{icon:"bxs-zap",title:"Agents",content:Ot()},{icon:"bx-globe",title:"Web",content:Wt()},{icon:"bxs-server",title:"Services",content:jt()},{icon:"bxs-terminal",title:"Logs",content:Ut()},{icon:"bxs-hdd",title:"Hardware",content:qt()}].filter(g=>z()?g.title!=="Hardware"&&g.title!=="Logs":!0),onOpen:()=>{ie(),Ee(),Vt(),De()},onClose:()=>{let g=e.indexOf(S);g>-1&&e.splice(g,1),s()}}),y=oe({id:"workspace-window",title:"Workspace",icon:"bx-brain",tabs:[{icon:"bx-map-alt",title:"Roadmap",content:Lt()},{icon:"bx-task",title:"Tasks",content:Ct()}],onOpen:()=>Qe(),onClose:()=>{let g=e.indexOf(y);g>-1&&e.splice(g,1),s()}}),h=oe({id:"settings-window",title:"Settings",icon:"bx-cog",content:We(),onOpen:()=>{h.setContent(We()),nt(h)},onClose:()=>{let g=e.indexOf(h);g>-1&&e.splice(g,1),s()}});window.dexter||(window.dexter={}),window.dexter.viewEvent=g=>{d.isOpen()||a(d),setTimeout(()=>{let u=document.querySelector(`.event-item[data-event-id="${g}"]`);u&&(u.scrollIntoView({behavior:"smooth",block:"center"}),u.classList.add("flash-highlight"),u.classList.contains("expanded")||u.click(),setTimeout(()=>u.classList.remove("flash-highlight"),2e3))},500)},window.dexter.viewAlert=g=>{f.isOpen()||a(f),setTimeout(()=>{let u=document.querySelector(`.event-item[data-alert-id="${g}"]`);u&&(u.scrollIntoView({behavior:"smooth",block:"center"}),u.classList.add("flash-highlight"),u.classList.contains("expanded")||u.click(),setTimeout(()=>u.classList.remove("flash-highlight"),2e3))},500)};let o=()=>{let g=document.getElementById("dexter-dropdown"),u=document.getElementById("dexter-menu-btn");g&&u&&(g.classList.remove("active"),u.classList.remove("active"),window.innerWidth<880&&document.getElementById("windows-container")?.classList.remove("menu-open"))};(()=>{let g=document.getElementById("dexter-menu-btn"),u=document.getElementById("settings-icon"),v=document.getElementById("docs-icon"),x=document.getElementById("close-all-windows"),c=document.getElementById("nav-left-container"),l=document.getElementById("dexter-dropdown"),T=document.getElementById("windows-container");g&&l&&(g.onclick=p=>{p.stopPropagation();let w=window.innerWidth<880;if(w)l.style.top="",l.style.left="",l.style.right="",l.style.transform="";else{let _=g.getBoundingClientRect(),O=document.querySelector("nav").getBoundingClientRect(),V=220,Z=10,$=_.left+_.width/2-V/2,k=O.right-10;$+V>k&&($=k-V),$<10&&($=10),l.style.top=O.bottom+Z+"px",l.style.left=$+"px",l.style.right="auto",l.style.transform="none"}l.classList.toggle("active"),g.classList.toggle("active");let A=l.classList.contains("active");if(w){let _=document.querySelector("nav");A?(document.querySelector("footer")?.classList.add("hide"),document.querySelector("main")?.style.setProperty("opacity","0","important"),_?.classList.add("window-open"),T?.classList.add("menu-open"),Te(!0)):(T?.classList.remove("menu-open"),e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),_?.classList.remove("window-open"),ae()||Te(!1)))}}),u&&(u.onclick=p=>{p.stopPropagation(),a(h)}),v&&(v.onclick=p=>{p.stopPropagation(),window.location.href="/docs"}),x&&(x.onclick=p=>{p.stopPropagation(),r()});let E=(p,w,A)=>{let _=document.getElementById(p);_&&(_.onclick=B=>{B.stopPropagation(),o(),A&&n(A),a(w)})};E("alerts-menu-item",f,"alerts-window"),E("events-menu-item",d,"events-window"),E("monitor-menu-item",S,"monitor-window"),E("contacts-menu-item",b,"contacts-window"),E("workspace-menu-item",y,"workspace-window"),c&&(c.onclick=p=>{if(p.stopPropagation(),l&&l.classList.contains("active")){o(),window.innerWidth<880&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),ae()||Te(!1));return}if(e.length>0)r();else{let w=window.location.pathname;if(!(w==="/"||w==="/index.html")){let _=w.endsWith("/")&&w.length>1?w.slice(0,-1):w;if(_.includes("/docs/page/")){window.location.href="/";return}let B=_.split("/");B.pop();let O=B.join("/")||"/";window.location.href=O}}}),document.addEventListener("click",()=>{let p=window.innerWidth<880;l&&l.classList.contains("active")&&(o(),p&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),ae()||Te(!1)))}),l&&(l.onclick=p=>p.stopPropagation())})();let L=window.location.pathname==="/"||window.location.pathname==="/index.html",I=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!L&&!I&&document.querySelector("footer")?.classList.add("hide"),z()||setInterval(()=>{d.isOpen()&&pe(),f.isOpen()?de():Xe()},1e3),setInterval(()=>{z()&&(f.isOpen()?de():Xe()),y.isOpen()&&Qe(),z()&&d.isOpen()&&pe(),S.isOpen()&&Ft()},5e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Zt):Zt();})();
