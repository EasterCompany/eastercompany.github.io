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
    
    `,o=document.createElement("nav");o.innerHTML=s,document.body.prepend(o);let a=document.createElement("div");a.id="dexter-dropdown",a.className="dexter-dropdown",a.innerHTML=`
        <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
        <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
        <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
        <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
        <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
    `,document.body.appendChild(a)}function ke(t){let e=window.location.pathname,i=e==="/"||e==="/index.html",n=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!n||!s||(t||!i?(n.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{n.style.transform="translateX(-3px)"},s.onmouseleave=()=>{n.style.transform="translateX(0)"}):(n.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function dt(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var pt=1e3;function le(t){let e=null,i=t.onClose||null,n=t.onOpen||null;function s(){e&&(e.style.zIndex=(++pt).toString())}function o(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",a),n&&setTimeout(n,10);return}let x=document.getElementById("windows-container");x||(x=document.createElement("div"),x.id="windows-container",x.className="windows-container",document.body.appendChild(x)),e=document.createElement("div"),e.id=t.id,e.className="window",t.className&&e.classList.add(t.className),t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=(++pt).toString(),e.addEventListener("mousedown",s);let h=t.icon||"bx-window",r="",u="",L,I='<div class="window-bottom-spacer"></div>';t.tabs&&t.tabs.length>0?(r=`<div class="tab-bar">${t.tabs.map((v,y)=>{let d=v.icon?`<i class="bx ${v.icon}"></i>`:`<span class="tab-glyph">${v.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${y===0?"active":""}" data-tab-index="${y}">
                        ${d}
                        <span class="tab-title">${v.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${y}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,L=`<div class="window-content">${t.tabs.map((v,y)=>`<div class="tab-content ${y===0?"active":""}" data-tab-content="${y}">${v.content}${I}</div>`).join("")}</div>`):(t.title&&(u=`<div class="window-title">${t.title}</div>`),L=`<div class="window-content">${t.content||""}${I}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${h}"></i>
                ${r}
                ${u}
                <i class="bx bx-x window-close"></i>
            </div>
            ${L}
        `,x.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",b=>{b.stopPropagation(),c()}),window.addEventListener("resize",a),t.tabs&&e.querySelectorAll(".tab").forEach(b=>{b.addEventListener("click",()=>{if(!e)return;let f=b.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(y=>y.classList.remove("active")),b.classList.add("active"),e.querySelectorAll(".tab-content").forEach(y=>y.classList.remove("active"));let v=e.querySelector(`.tab-content[data-tab-content="${f}"]`);v&&v.classList.add("active"),p(b,e)})}),setTimeout(()=>{e&&e.classList.add("open"),n&&n()},10)}function a(){if(!e||!e.classList.contains("open"))return;let x=e.querySelector(".tab.active");x&&p(x,e)}function p(x,h){setTimeout(()=>{let r=h.querySelector(".tab-bar");if(!r)return;let u=Array.from(r.querySelectorAll(".tab")),L=u.indexOf(x),I=r.clientWidth,b=u[Math.max(0,L-2)],f=u[Math.min(u.length-1,L+2)],v=r,y=b.offsetLeft-v.offsetLeft-25,l=f.offsetLeft+f.offsetWidth-v.offsetLeft+25-y,k=l<=I?y-(I-l)/2:x.offsetLeft-v.offsetLeft-I/2+x.offsetWidth/2;r.scrollTo({left:k,behavior:"smooth"})},350)}function c(x=!1){e&&(window.removeEventListener("resize",a),x?(e.remove(),e=null):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e?.remove(),e=null},400)))}function g(x){t.content=x;let h=e?.querySelector(".window-content");h&&(h.innerHTML=x)}function T(){return!!(e&&e.classList.contains("open"))}return{open:o,close:c,setContent:g,isOpen:T,focus:s,id:t.id}}var mt="easter_theme",se={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function Ke(){return localStorage.getItem(mt)||se.DARK}function ut(t){if(!Object.values(se).includes(t))throw new Error("Invalid theme");localStorage.setItem(mt,t),ft(t)}function ft(t){let e=document.body;Object.values(se).forEach(o=>{e.classList.remove(`theme-${o}`)}),e.classList.add(`theme-${t}`);let i=document.querySelector('meta[name="theme-color"]');i||(i=document.createElement("meta"),i.name="theme-color",document.getElementsByTagName("head")[0].appendChild(i));let n={[se.DARK]:"#050507",[se.LIGHT]:"#FFFFFF",[se.LEGACY]:"#000000"},s=n[t]||n[se.DARK];if(i.setAttribute("content",s),!document.querySelector(".background")){let o=document.createElement("div");o.className="background",document.body.prepend(o)}e.classList.add("is-animated")}function gt(){let t=Ke();ft(t)}function G(t,e,i=null,n="default"){let o={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",a=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder" data-placeholder-id="${n}"><i class='bx ${o} placeholder-icon'></i><p class="placeholder-message">${e}</p>${a}</div>`}function O(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function pe(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let n=Date.now(),s=Math.floor((n-e)/1e3),o;s<60?o=`${s}s ago`:s<3600?o=`${Math.floor(s/60)}m ago`:o=`${Math.floor(s/3600)}h ago`,i.textContent=`Last updated: ${o}`}var ns=0;function vt(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let n=i.querySelector(".notification-badge");n&&(e>0?(n.textContent=e>9?"9+":e.toString(),n.style.display="flex"):n.style.display="none")}var ce=0,de=0;function yt(t){ce=t,Ie()}function Ie(){let t=ce+de;ns=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let i=document.getElementById("alerts-menu-item");if(i){let a=i.querySelector(".notification-badge");a||(a=document.createElement("span"),a.className="notification-badge",a.style.marginLeft="auto",i.appendChild(a)),a.textContent=ce>9?"9+":ce.toString(),a.style.display=ce>0?"flex":"none"}let n=document.getElementById("workspace-menu-item");if(n){let a=n.querySelector(".notification-badge");a||(a=document.createElement("span"),a.className="notification-badge",a.style.marginLeft="auto",n.appendChild(a)),a.textContent=de>9?"9+":de.toString(),a.style.display=de>0?"flex":"none"}let s=document.getElementById("switch-alerts");if(s){let a=s.querySelector(".notification-badge");a||(a=document.createElement("span"),a.className="notification-badge",a.style.marginLeft="8px",s.appendChild(a)),a.textContent=ce>9?"9+":ce.toString(),a.style.display=ce>0?"flex":"none"}let o=document.getElementById("switch-workspace");if(o){let a=o.querySelector(".notification-badge");a||(a=document.createElement("span"),a.className="notification-badge",a.style.marginLeft="8px",o.appendChild(a)),a.textContent=de>9?"9+":de.toString(),a.style.display=de>0?"flex":"none"}}function Xe(){let t=document.getElementById("alerts-list");if(!t)return;ce=t.querySelectorAll(".alert-unread:not(.priority-low)").length,Ie()}async function xt(){try{de=(await(await H("/roadmap/stats")).json()).open_issues||0,Ie()}catch(t){console.error("Failed to update open issue count:",t)}}function is(){return"https://event.easter.company"}function as(){return"https://discord.easter.company"}var os="http://127.0.0.1:8100",rs="http://127.0.0.1:8300",ls={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function qe(t){let e=O(t);if(!e)return e;e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,o)=>{let a=ls[o];return a?`<span class="${a}">`:""});let i=(e.match(/<span/g)||[]).length,n=(e.match(/<\/span/g)||[]).length;return i>n&&(e+="</span>".repeat(i-n)),e}function ne(t){if(!t)return"";let e=O(t);return e&&(e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^<strong>(.*)<\/strong>$/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(i,n)=>{let s=n.split("|").map(o=>o.trim());return s.every(o=>o.match(/^:?-+:?$/))?"":`<div class="md-table-row">${s.map(o=>`<span class="md-table-cell">${o}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e)}function oe(){let t=document.getElementById("windows-container"),e=t?parseInt(t.getAttribute("data-count")||"0"):0,i=document.querySelector(".profile-overlay.active"),n=document.querySelector("#cli-terminal-overlay.active");return e>0||!!i||!!n}var cs="https://sterling-javelin-12539.upstash.io",ds="AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw";function z(){return window.location.hostname.includes("easter.company")}var R=null,be={lastDashboard:0,lastFrontend:0},Ye=!1,ht=0,wt="dex_dashboard_snapshot";function ps(){let t=localStorage.getItem(wt);if(t)try{let e=JSON.parse(t);R=e,be.lastDashboard=e.timestamp?e.timestamp*1e3:0}catch{R=null}}async function bt(){if(!(!z()||Ye)){Ye=!0,ht=Math.floor(Date.now()/1e3);try{let t=await fs("GET","state:dashboard:full");if(t)try{let e=JSON.parse(t);R=e,be.lastDashboard=e.timestamp?e.timestamp*1e3:Date.now(),be.lastFrontend=Date.now(),localStorage.setItem(wt,JSON.stringify(e))}catch(e){console.error("Failed to parse dashboard snapshot:",e)}}finally{Ye=!1}}}function ms(){if(!R||!R.agent_status)return;let t=R.agent_status;t.system&&typeof t.system.state_time=="number"&&(t.system.state_time+=1)}async function us(){if(!z())return;ps();let t=Math.floor(Date.now()/1e3),e=R?t-R.timestamp:1/0;(!R||e>120)&&await bt(),setInterval(()=>{let i=new Date,n=Math.floor(Date.now()/1e3),s=R?n-R.timestamp:1/0,o=n-ht,a=i.getSeconds()===59,p=s>300,c=o>60;(a&&c||p&&c)&&bt(),ms()},1e3)}z()&&us();async function fs(t,...e){try{let n=await(await fetch(cs,{method:"POST",headers:{Authorization:`Bearer ${ds}`},body:JSON.stringify([t,...e])})).json();if(n.error)throw new Error(n.error);return n.result}catch(i){return console.error("Upstash Error:",i),null}}var Se=null,Le=null,Oe=!1,je=!1;async function H(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t.startsWith("/system_monitor")||t.startsWith("/system/status"))return new Response(JSON.stringify(R.monitor),{status:200});if(t.startsWith("/system/options"))return new Response(JSON.stringify(R.options||{}),{status:200});if(t.startsWith("/processes"))return new Response(JSON.stringify(R.processes),{status:200});if(t.startsWith("/events")){let s=new URLSearchParams(t.split("?")[1]||""),o=s.get("type")||s.get("event.type"),a=s.get("category"),p=s.get("order")||"desc",c=[];return o==="system.notification.generated"?c=[...R.alerts||[]]:o==="system.blueprint.generated"||t.includes("event.type=system.blueprint.generated")?c=[...R.blueprints||[]]:a==="messaging"?c=[...R.messaging_events||[]]:a==="system"?c=[...R.system_events||[]]:a==="cognitive"?c=[...R.cognitive_events||[]]:a==="moderation"?c=[...R.moderation_events||[]]:c=[...R.events||[]],p==="asc"?c.sort((g,T)=>g.timestamp-T.timestamp):c.sort((g,T)=>T.timestamp-g.timestamp),new Response(JSON.stringify({events:c,count:c.length}),{status:200})}if(t.startsWith("/logs"))return new Response(JSON.stringify([]),{status:200});if(t.startsWith("/system/hardware"))return new Response(JSON.stringify({}),{status:200});if(t.startsWith("/agent/status")||t.startsWith("/guardian/status"))return new Response(JSON.stringify(R.agent_status||{}),{status:200});if(t.startsWith("/roadmap/stats"))return new Response(JSON.stringify({open_issues:R.open_issue_count||0}),{status:200});if(t.startsWith("/profile/")){let s=t.split("/")[2],o=R.profiles?R.profiles[s]:null;return o?new Response(JSON.stringify(o),{status:200}):new Response(JSON.stringify({error:"Profile not found"}),{status:404})}return t.startsWith("/web/history")?new Response(JSON.stringify(R.web_history||[]),{status:200}):t.startsWith("/roadmap")?new Response(JSON.stringify(R.github_issues||[]),{status:200}):t.startsWith("/chores")?new Response(JSON.stringify(R.chores||[]),{status:200}):new Response(JSON.stringify({error:"Not available in public demo"}),{status:404})}if(Se)try{let s=await fetch(Se+t,e);if(s.ok)return s;Se=null}catch{Se=null}let i=is(),n=os;window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&!z()&&(n=`http://${window.location.hostname}:8100`);try{let s=await fetch(i+t,e);if(s.ok)return Se=i,Oe&&(console.log("\u2728 Production event service restored."),Oe=!1),s;throw new Error("Primary failed")}catch{Oe||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${n}`),Oe=!0);try{let o=await fetch(n+t,e);if(o.ok)return Se=n,o;throw new Error("Fallback failed")}catch(o){throw o}}}async function ve(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t==="/contacts")return new Response(JSON.stringify(R.contacts||{members:[]}),{status:200});if(t.startsWith("/member/")){let s=t.split("/")[2],o=(R.contacts?.members||[]).find(a=>a.id===s);return o?new Response(JSON.stringify(o),{status:200}):new Response(JSON.stringify({error:"Member not found"}),{status:404})}return new Response(JSON.stringify({error:"Discord API not public"}),{status:404})}if(Le)try{let s=await fetch(Le+t,e);if(s.ok)return s;Le=null}catch{Le=null}let i=as(),n=rs;window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&!z()&&(n=`http://${window.location.hostname}:8300`);try{let s=await fetch(i+t,e);if(s.ok)return Le=i,je&&(console.log("\u2728 Production discord service restored."),je=!1),s;throw new Error("Primary failed")}catch{je||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${n}`),je=!0);try{let o=await fetch(n+t,e);if(o.ok)return Le=n,o;throw new Error("Fallback failed")}catch(o){throw o}}}var Et=()=>`
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
`,Ue=null,ye=new Set,Fe=[];async function me(t=!1){let e=document.getElementById("alerts-list");if(!e)return;gs(),t&&(e.innerHTML="<p>Updating...</p>");let i="/events?ml=1000&format=json&event.type=system.notification.generated";try{let n=await H(i);if(!n.ok)throw new Error("Service is offline or unreachable.");let o=(await n.json()).events||[];Ue=Date.now(),pe(0,Ue);let a=Date.now(),p=24*60*60*1e3,c=o.filter(f=>{let v=localStorage.getItem(`alert_read_ts_${f.id}`);if(!v)return!0;let y=parseInt(v);return a-y<p});c.sort((f,v)=>{let y=E=>{let m=E.event;if(typeof m=="string")try{m=JSON.parse(m)}catch{return"low"}return(m.priority||"low").toLowerCase()},d=E=>E==="critical"?4:E==="high"?3:E==="medium"?2:1,l=d(y(f)),k=d(y(v));return l!==k?k-l:v.timestamp-f.timestamp}),Fe=c;let g=f=>{let v=f.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return"low"}return(v.priority||"low").toLowerCase()},T=[];if(c.length===0)T.push({id:"placeholder-empty",type:"placeholder",message:"No alerts, all systems nominal"});else{let v=new Set(c.map(d=>g(d))).size>1,y=null;c.forEach(d=>{let l=g(d);v&&l!==y&&(T.push({id:`divider-${l}`,type:"divider",label:l.toUpperCase()}),y=l),T.push(d)})}t&&(e.innerHTML="");let x=f=>{let v=f.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return null}let y=(v.title||"Untitled Alert").trim(),d=(v.body||"No description provided.").trim(),l=v.summary||"",k=v.content||"",E=v.protocol||"",m=(v.priority||"low").toLowerCase(),w=!!v.alert,A=(v.category||"system").trim(),M=v.related_event_ids||[],B=v.audit_event_id,q=!!localStorage.getItem(`alert_read_ts_${f.id}`),Y=new Date(f.timestamp*1e3),_=Y.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=Y.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=q?"event-border-grey":"event-border-blue";!q&&w&&(S="event-border-red"),q&&(m==="high"||m==="critical")?S="event-border-red":q&&m==="medium"&&(S="event-border-orange");let C=q?"alert-read":"alert-unread",P=ye.has(f.id),D=P?"expanded":"",K=P?"display: block;":"display: none;",U="",j="";M.length>0&&(j=`
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
            </div>`);let ee="";k?ee=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="md-para" style="color: #ddd; font-size: 0.85em; white-space: pre-wrap; line-height: 1.6; text-align: left;">${ne(k)}</div>
            </div>
        `:ee=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="md-para" style="color: #fff; white-space: pre-wrap; line-height: 1.6; text-align: left;">${ne(d)}</div>
            </div>
        `,U=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${v.related_services&&v.related_services.length>0?v.related_services.join(", "):v.related||"SYSTEM"}</div>
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
            `;let X=document.createElement("div");X.className=`event-item notification-item ${S} ${C} ${D} cursor-pointer priority-${m}`,X.dataset.alertId=f.id,X.onclick=function(Z){let W=this;if(W.classList.contains("expanded")){W.classList.remove("expanded"),ye.delete(f.id);let ge=W.querySelector(".event-details");ge&&(ge.style.display="none")}else{W.classList.add("expanded"),ye.add(f.id);let ge=W.querySelector(".event-details");if(ge&&(ge.style.display="block"),!localStorage.getItem(`alert_read_ts_${f.id}`)){localStorage.setItem(`alert_read_ts_${f.id}`,Date.now().toString()),W.classList.add("alert-read"),W.classList.remove("alert-unread"),W.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ce="event-border-grey";m==="high"||m==="critical"?Ce="event-border-red":m==="medium"&&(Ce="event-border-orange"),W.classList.add(Ce),Xe()}}};let Me=`${E?E.toUpperCase():"GUARDIAN"} ALERT: ${l||y}`,Ve={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[A]||"bx-bell",Ne=m==="high"||m==="critical"?"#ff4d4d":m==="medium"?"#ffa500":"#888";X.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${_}</span>
                    <span class="event-date">${$}</span>
                </div>
                <div class="event-icon"><i class='bx ${Ve}'></i></div>
                <div class="event-content" style="text-align: left;">
                    <div class="event-service">
                        DEXTER <span class="alert-badge" style="color: ${Ne}; font-size: 0.8em; margin-left: 5px;">[${m.toUpperCase()}]</span>
                    </div>
                    <div class="event-message">${ne(Me)}</div>
                    <div class="event-details" style="${K}">
                        ${U}
                    </div>
                </div>
            `;let fe=X.querySelector(".event-details");fe&&fe.addEventListener("click",Z=>{Z.stopPropagation()});let J=X.querySelector(".close-details-btn");return J&&J.addEventListener("click",Z=>{Z.stopPropagation(),X.classList.remove("expanded");let W=X.querySelector(".event-details");W&&(W.style.display="none"),ye.delete(f.id)}),X},h=f=>{let v=document.createElement("div");v.className="notification-divider",v.dataset.alertId=f.id;let y="#888888";return f.label==="CRITICAL"?y="#ff4d4d":f.label==="HIGH"?y="#ff8888":f.label==="MEDIUM"&&(y="#ffa500"),v.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,v.innerHTML=`<span style="white-space: nowrap;">${f.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,v},r=f=>{let v=document.createElement("div");v.innerHTML=G("empty",f.message,null,f.id);let y=v.firstElementChild;return y.dataset.alertId=f.id,y},u=Array.from(e.children),L=new Map(u.map(f=>[f.dataset.alertId,f])),I=new Set(T.map(f=>f.id));u.forEach(f=>{let v=f.dataset.alertId;(!v||!I.has(v))&&f.remove()});let b=null;T.forEach((f,v)=>{let y=L.get(f.id);if(!y||t){if(y&&y.remove(),f.type==="divider")y=h(f);else if(f.type==="placeholder")y=r(f);else{let d=x(f);if(!d)return;y=d}if(!y)return}v===0?e.firstElementChild!==y&&e.prepend(y):b&&b.nextElementSibling!==y&&b.after(y),b=y}),Ue=Date.now(),pe(0,Ue),Xe()}catch(n){console.error("Error fetching alerts:",n),e.children.length===0&&(e.innerHTML=G("offline","Failed to load alerts.","The event service may be offline."))}}function gs(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),i=document.getElementById("alerts-close-all"),n=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Fe.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),me(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Fe.forEach(s=>{ye.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),me(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{ye.clear(),me(!0)},i.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await H("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;Fe.forEach(o=>{localStorage.setItem(`alert_read_ts_${o.id}`,s.toString())}),ye.clear(),me(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}async function Ze(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await H(t);if(!e.ok)return;let n=(await e.json()).events||[],s=0;n.forEach(o=>{let a=o.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{a={}}if((a.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${o.id}`)||s++}),yt(s)}catch{}}var $t=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${z()?"display: none;":""}" title="New Issue"><i class='bx bx-plus'></i></button>
    <button id="roadmap-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
    <button id="roadmap-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
  </div>
`,kt=()=>`
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
`,Ae=new Set,St=[],Tt=t=>{let e=Ae.has(t.number),n=new Date(t.createdAt).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),s=document.createElement("div");return s.className=`event-item notification-item event-border-blue cursor-pointer ${e?"expanded":""}`,s.dataset.issueNumber=t.number,s.id=`roadmap-issue-${t.number}`,s.onclick=o=>{if(o.target.closest("button")||o.target.closest("textarea"))return;if(s.classList.contains("expanded")){s.classList.remove("expanded");let p=s.querySelector(".event-details");p&&(p.style.display="none"),Ae.delete(t.number)}else{s.classList.add("expanded");let p=s.querySelector(".event-details");p&&(p.style.display="block"),Ae.add(t.number)}},s.innerHTML=`

          <div class="event-time">

            <span class="event-time-main">${n.split(",")[1]}</span>

            <span class="event-date">${n.split(",")[0]}</span>

          </div>

          <div class="event-content">

            <div class="event-service" style="display: flex; justify-content: space-between; align-items: center;">

              <span>ISSUE #${t.number}</span>

              <span style="font-size: 0.85em; color: #666; font-family: 'JetBrains Mono', monospace;">${t.repository||"EasterCompany/EasterCompany"}</span>

            </div>

            <div class="event-message" style="font-weight: bold; margin-bottom: 5px;">${O(t.title)}</div>

            <div class="event-details" style="${e?"display: block;":"display: none;"} ">

              <div style="font-size: 0.75em; color: #bb86fc; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-weight: bold;">Target Repository: ${t.repository||"EasterCompany/EasterCompany"}</div>

              <div style="font-size: 0.9em; opacity: 0.8; margin-bottom: 15px; white-space: pre-wrap;">${ne(t.body)}</div>

  
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
  `,s.querySelector(".comment-btn")?.addEventListener("click",async()=>{let o=s.querySelector(".comment-input"),a=o.value.trim();a&&(await vs(t.number,a),o.value="",xe(!0))}),s.querySelector(".close-btn")?.addEventListener("click",async()=>{confirm(`Close issue #${t.number}?`)&&(await ys(t.number),xe(!0))}),s};async function xe(t=!1){let e=document.getElementById("roadmap-list"),i=document.getElementById("roadmap-timeline-container");if(e){bs();try{let n=await H("/roadmap");if(!n.ok)throw new Error("Offline");let s=await n.json();s.sort((c,g)=>new Date(c.createdAt).getTime()-new Date(g.createdAt).getTime()),St=s;let o=Array.from(e.children),a=new Map(o.filter(c=>c.dataset.issueNumber).map(c=>[c.dataset.issueNumber,c]));if(s.length===0){e.innerHTML=G("empty","No open issues found.","Dexter is currently in a perfect state.");return}let p={};if(s.forEach(c=>{let g="General",T=c.title.match(/^\[(.*?)\]/);T&&(g=T[1].toLowerCase()),p[g]||(p[g]=[]),p[g].push(c)}),e.innerHTML="",Object.entries(p).forEach(([c,g])=>{let T=`<div class="service-category-header" style="margin: 20px 0 10px 0; color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 2px;">${c}</div>`;e.insertAdjacentHTML("beforeend",T),g.forEach(x=>{let h=x.number.toString(),r=a.get(h);if(r&&!t){let u=r.querySelector(".event-message");u&&u.textContent!==x.title?e.appendChild(Tt(x)):e.appendChild(r)}else e.appendChild(Tt(x))})}),i){let c=s.slice(0,4),g=`
        <div class="roadmap-timeline" style="display: flex; gap: 5px; background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); overflow-x: auto; align-items: center;">
          <span style="font-size: 0.6em; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-right: 10px;">Execution Queue:</span>
          ${c.map((T,x)=>`
            <div class="timeline-dot-wrap" style="display: flex; align-items: center; gap: 5px;">
                <div class="timeline-dot" title="#${T.number}: ${T.title}" style="width: 12px; height: 12px; border-radius: 50%; background: #bb86fc; flex-shrink: 0; opacity: 0.8; cursor: pointer;" onclick="dexter.viewRoadmapIssue(${T.number})"></div>
                <span style="font-size: 0.7em; color: #aaa; white-space: nowrap;">#${T.number}</span>
                ${x<c.length-1?"<div style='width: 15px; height: 1px; background: rgba(255,255,255,0.1); flex-shrink: 0; margin: 0 5px;'></div>":""}
            </div>
          `).join("")}
            ${s.length>4?`<span style="font-size: 0.7em; color: #444; margin-left: 10px;">+${s.length-4} more</span>`:""}
        </div>
      `;i.innerHTML=g}}catch{e.innerHTML=G("offline","Failed to load roadmap.","Could not sync with GitHub.")}}}window.dexter||(window.dexter={});window.dexter.viewRoadmapIssue=t=>{let e=document.getElementById(`roadmap-issue-${t}`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.classList.contains("expanded")||e.click())};function bs(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),n=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{let o=document.getElementById("roadmap-editor-title"),a=document.getElementById("roadmap-editor-body");o&&(o.value=""),a&&(a.value="");let p=document.getElementById("roadmap-editor-container");p&&(p.style.display="block")},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{let o=document.getElementById("roadmap-editor-container");o&&(o.style.display="none")},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let o=document.getElementById("roadmap-editor-title"),a=document.getElementById("roadmap-editor-body"),p=o?o.value.trim():"",c=a?a.value.trim():"";if(!p||!c){alert("Title and Body are required.");return}try{await H("/roadmap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:p,body:c})});let g=document.getElementById("roadmap-editor-container");g&&(g.style.display="none"),xe(!0)}catch(g){console.error(g)}},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{St.forEach(o=>Ae.add(o.number)),xe(!0)},n.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{Ae.clear(),xe(!0)},s.dataset.listenerAttached="true")}async function vs(t,e){await H(`/roadmap/${t}/comment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:e})})}async function ys(t){await H(`/roadmap/${t}`,{method:"DELETE"})}var Lt=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px; align-items: center;">
    <select id="task-filter-owner" class="task-form-select" style="padding: 4px 10px; font-size: 0.75em; height: 32px; border-color: rgba(255,255,255,0.05);">
        <option value="all">All Owners</option>
    </select>
    <button id="create-chore-btn" class="notif-action-btn" style="${z()?"display: none;":""}" title="New Task"><i class='bx bx-plus'></i></button>
  </div>
`,Mt=()=>`
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
    `,_e=[],Be={"313071000877137920":"Owen",dexter:"Dexter"},ie=[],he=null;async function He(){let t=document.getElementById("chores-list"),e=document.getElementById("create-chore-btn"),i=document.getElementById("create-chore-form"),n=document.getElementById("save-chore-btn"),s=document.getElementById("cancel-chore-btn"),o=document.getElementById("new-chore-owner"),a=document.getElementById("selected-recipients"),p=document.getElementById("task-filter-owner"),c=document.getElementById("new-chore-instruction"),g=document.getElementById("new-chore-url"),T=document.getElementById("new-chore-schedule"),x=document.getElementById("new-chore-time"),h=document.getElementById("new-chore-timezone"),r=document.getElementById("new-chore-time-group");if(h&&!h.dataset.initialValueAttached){let l=Intl.DateTimeFormat().resolvedOptions().timeZone,k=!1;for(let E=0;E<h.options.length;E++)if(h.options[E].value===l){k=!0;break}if(!k){let E=document.createElement("option");E.value=l,E.textContent=l.replace("_"," "),h.appendChild(E)}h.value=l,h.dataset.initialValueAttached="true"}T&&r&&!T.dataset.timeListenerAttached&&(T.addEventListener("change",()=>{r.style.display=T.value==="daily"?"block":"none"}),T.dataset.timeListenerAttached="true");let u=document.getElementById("form-title"),L=document.getElementById("form-icon");function I(){if(a){if(ie.length===0){a.innerHTML='<span style="color: #444; font-size: 0.8em; font-style: italic; padding: 4px;">No recipients selected</span>';return}a.innerHTML=ie.sort((l,k)=>{let E=l.startsWith("channel:"),m=k.startsWith("channel:");return E&&!m?-1:!E&&m?1:0}).map(l=>{let k=Be[l]||l,E=l.startsWith("channel:");return`
        <div class="recipient-badge" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); font-size: 0.75em; color: ${l==="dexter"?"#bb86fc":E?"#03dac6":"#fff"};">
          <i class='bx ${l==="dexter"?"bx-terminal":E?"bx-hash":"bx-user"}'></i>
          <span>${k}</span>
          <i class='bx bx-x remove-recipient' data-id="${l}" style="cursor: pointer; margin-left: 4px; opacity: 0.6;"></i>
        </div>
      `}).join(""),a.querySelectorAll(".remove-recipient").forEach(l=>{l.onclick=()=>{let k=l.dataset.id;ie=ie.filter(E=>E!==k),I()}})}}function b(l){l&&!ie.includes(l)&&(ie.push(l),I()),o&&(o.value="")}function f(l=null){if(i){if(he=l?l.id:null,l){if(u&&(u.textContent="Update Research Task"),L&&(L.className="bx bx-edit-alt",L.style.color="#03dac6"),n&&(n.innerHTML="<i class='bx bx-check'></i> Update Task"),c&&(c.value=l.natural_instruction),g&&(g.value=l.execution_plan?.entry_url||""),T&&(T.value=l.schedule,r&&(r.style.display=l.schedule==="daily"?"block":"none")),x&&l.run_at&&(x.value=l.run_at),h&&l.timezone){let k=!1;for(let E=0;E<h.options.length;E++)if(h.options[E].value===l.timezone){k=!0;break}if(!k){let E=document.createElement("option");E.value=l.timezone,E.textContent=l.timezone.replace("_"," "),h.appendChild(E)}h.value=l.timezone}ie=l.recipients||(l.owner_id?[l.owner_id]:[]),I()}else u&&(u.textContent="Initialize Research Task"),L&&(L.className="bx bx-plus-circle",L.style.color="#bb86fc"),n&&(n.innerHTML="<i class='bx bx-zap'></i> Deploy Task"),c&&(c.value=""),g&&(g.value=""),T&&(T.value="every_24h"),ie=[],I();i.style.display="block",i.scrollIntoView({behavior:"smooth",block:"start"})}}let v=document.getElementById("contacts-group"),y=document.getElementById("channels-group");if(v&&!v.dataset.populated&&!z())try{ve("/contacts").then(async l=>{l.ok&&(((await l.json()).members||[]).forEach(m=>{if(Be[m.id]=m.nickname||m.username,m.id==="313071000877137920")return;let w=document.createElement("option");w.value=m.id;let A=m.nickname||m.username;w.textContent=`${A} (${m.username})`,v.appendChild(w)}),v.dataset.populated="true")})}catch{console.warn("Failed to fetch contacts for dropdown")}if(y&&!y.dataset.populated&&!z())try{ve("/channels").then(async l=>{l.ok&&((await l.json()).forEach(E=>{let m=`channel:${E.id}`;Be[m]=E.name;let w=document.createElement("option");w.value=m,w.textContent=`#${E.name} (${E.guild})`,y.appendChild(w)}),y.dataset.populated="true")})}catch{console.warn("Failed to fetch channels for dropdown")}o&&!o.dataset.listenerAttached&&(o.onchange=()=>{b(o.value)},o.dataset.listenerAttached="true"),p&&!p.dataset.listenerAttached&&(p.onchange=()=>d(),p.dataset.listenerAttached="true");function d(){if(!t)return;let l=p?.value||"all",k=l==="all"?_e:_e.filter(m=>(m.recipients||(m.owner_id?[m.owner_id]:[])).includes(l));if(k.length===0){t.innerHTML=G("empty",l==="all"?"No active tasks.":"No tasks found for this owner.",z()?"Dexter is not currently performing research.":"Click the plus icon to create a research task.");return}let E=k.map(m=>{let w=m.last_run===0?"Never":new Date(m.last_run*1e3).toLocaleString(),A=m.memory?m.memory.length:0,M=m.status==="active"?"#03dac6":"#666",N=(m.recipients||(m.owner_id?[m.owner_id]:[])).sort((q,Y)=>{let _=q.startsWith("channel:"),$=Y.startsWith("channel:");return _&&!$?-1:!_&&$?1:0}).map(q=>{let Y=Be[q]||q.substring(0,8),_=q.startsWith("channel:");return`<span title="${Y}" style="display: flex; align-items: center; gap: 3px;"><i class='bx ${q==="dexter"?"bx-terminal":_?"bx-hash":"bx-user"}'></i>${Y}</span>`}).join("<span style='color: #444;'>, </span>");return`
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
                            <span style="font-size: 0.85em; color: #fff; font-family: 'JetBrains Mono';">${w}</span>
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
            `}).join("");t.innerHTML=E,t.querySelectorAll(".edit-chore-btn").forEach(m=>{m.onclick=w=>{w.stopPropagation();let A=m.dataset.id,M=_e.find(B=>B.id===A);M&&f(M)}}),t.querySelectorAll(".reset-chore-btn").forEach(m=>{m.onclick=async w=>{w.stopPropagation();let A=m.dataset.id;confirm("Reset this task? It will be re-run immediately on the next cycle.")&&(m.innerHTML="<i class='bx bx-loader-alt spin'></i>",await H(`/chores/${A}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({last_run:0})}),He())}}),t.querySelectorAll(".delete-chore-btn").forEach(m=>{m.onclick=async w=>{w.stopPropagation();let A=m.dataset.id;confirm("Delete this task?")&&(await H(`/chores/${A}`,{method:"DELETE"}),He())}})}e&&!e.dataset.listenerAttached&&(e.onclick=()=>{i&&(i.style.display==="none"||he!==null?f(null):i.style.display="none")},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{i&&(i.style.display="none")},s.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let l=document.getElementById("new-chore-instruction"),k=document.getElementById("new-chore-url"),E=document.getElementById("new-chore-schedule"),m=l?.value,w=E?.value||"every_24h",A=w==="daily"?x?.value:"",M=w==="daily"?h?.value:"";if(!m)return;if(ie.length===0){alert("Please add at least one recipient.");return}let B=n.innerHTML;n.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{let N=he?"PATCH":"POST",q=he?`/chores/${he}`:"/chores";await H(q,{method:N,headers:{"Content-Type":"application/json"},body:JSON.stringify({recipients:ie,natural_instruction:m,entry_url:k?.value,schedule:w,run_at:A,timezone:M})}),i&&(i.style.display="none"),l&&(l.value=""),k&&(k.value=""),he=null,ie=[],He()}catch(N){console.error(N),alert(he?"Failed to update research task":"Failed to create research task")}finally{n.innerHTML=B}},n.dataset.listenerAttached="true");try{let l=await H("/chores");if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);if(_e=await l.json()||[],p){let E=p.value,m=new Set;_e.forEach(w=>{w.owner_id&&m.add(w.owner_id),w.recipients&&w.recipients.forEach(A=>m.add(A))}),p.innerHTML='<option value="all">All Recipients</option>',m.forEach(w=>{let A=document.createElement("option");A.value=w;let M=w.startsWith("channel:"),B=Be[w]||`Recipient: ${w.substring(0,8)}`;A.textContent=(M&&!B.startsWith("#")?"#":"")+B,p.appendChild(A)}),p.value=E,p.selectedIndex===-1&&(p.value="all")}d()}catch(l){console.error("Failed to fetch chores",l)}}var Ct=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${$t()}
            </div>
            ${kt()}
        </div>
    </div>
`,It=()=>`
    <div class="ideas-container">
        <div class="chores-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-task' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Research Tasks</h2>
                </div>
                ${Lt()}
            </div>
            ${Mt()}
        </div>
    </div>
`;async function Qe(){await Promise.all([xe(),He()])}var xs=`
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
`;function At(t){if(!document.getElementById("dex-profile-styles")){let n=document.createElement("style");n.id="dex-profile-styles",n.textContent=xs,document.head.appendChild(n)}let e=document.createElement("div");e.className="profile-overlay",e.innerHTML=`
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `,e.addEventListener("click",n=>{n.target===e&&(e.classList.remove("active"),oe()||(document.body.style.overflow=""),setTimeout(()=>e.remove(),300))}),document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),document.body.style.overflow="hidden";let i=n=>{e.innerHTML=`
        <div class="profile-card" style="height: 200px; justify-content: center; align-items: center; color: #cf6679; border-color: #cf6679;">
            <div style="text-align: center;">
                <i class='bx bx-error' style="font-size: 3em; margin-bottom: 10px;"></i>
                <div style="font-family: 'JetBrains Mono'; text-transform: uppercase;">${n}</div>
            </div>
            <button class="close-profile-btn" style="color: #cf6679;" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
        </div>
    `;let s=e.querySelector(".close-profile-btn");s&&s.addEventListener("click",()=>{e.click()})};ve(`/profile/${t.id}`).then(async n=>{if(n.ok){let s=await n.json();hs(e,t,s)}else console.log("Profile not found (404) or error."),i("Profile Data Unavailable")}).catch(n=>{console.error("Profile fetch error:",n),i("Connection Failed")})}function hs(t,e,i){let n=e.status==="online"?"#03dac6":e.status==="idle"?"#ffb74d":"#cf6679",s=()=>{let L=(i.attributes||i.facts||[]).map(d=>{let l=d.key||d.k,k=d.value||d.v;return`
            <div class="fact-chip">
                <span class="fact-key">${l}:</span>
                <span class="fact-val">${k}</span>
            </div>
        `}).join(""),I=i.cognitive_model||i,b=I.technical_level||I.techLevel||0,f=I.communication_style||I.commStyle||"Unknown",v=I.patience_level||I.patience||"Unknown",y=I.vibe||"Unknown";return`
            <div class="overview-grid">
                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-brain'></i> Cognitive Model</div>
                    
                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Technical Level</span>
                            <span>${b}/10</span>
                        </div>
                        <div class="cog-bar-bg">
                            <div class="cog-bar-fill" style="width: ${Math.min(b*10,100)}%;"></div>
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
                            <span>${v}</span>
                        </div>
                    </div>

                     <div class="cog-metric">
                        <div class="cog-label">
                            <span>Vibe Check</span>
                            <span style="font-family: 'JetBrains Mono'; color: #bb86fc;">${y}</span>
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
        `},o=()=>{let L=i.dossier||{},I=L.identity||{},b=L.career||{},f=L.personal||{},v=L.social||[];return`
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
                        <div class="dossier-value">${b.jobTitle||"Unknown"}</div>
                        <div style="font-size: 0.8em; color: #888; margin-top: 2px;">@ ${b.company||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                         <div class="dossier-label">Key Skills</div>
                         <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            ${(b.skills||[]).map(y=>`<span style="font-size: 0.75em; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${y}</span>`).join("")}
                         </div>
                    </div>
                </div>

                <!-- Personal Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-home-heart'></i> Personal Life</div>
                    
                    <div class="dossier-item">
                        <div class="dossier-label"><i class='bx bx-joystick'></i> Hobbies</div>
                        <div style="margin-top: 10px;">
                            ${(f.hobbies||[]).map(y=>`<div class="dossier-list-item">${y}</div>`).join("")}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(f.habits||[]).map(y=>`<div class="dossier-list-item">${y}</div>`).join("")}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(f.vices||[]).map(y=>`<div class="dossier-list-item" style="color: #cf6679;">${y}</div>`).join("")}
                        </div>
                    </div>
                </div>

                <!-- Social Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-network-chart'></i> Known Associates</div>
                    <div class="dossier-item" style="background: none; border: none; padding: 0;">
                        ${v.length>0?v.map(y=>`
                            <div class="friend-chip">
                                <div style="width: 35px; height: 35px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #888;">${y.name.substring(0,1)}</div>
                                <div style="flex: 1;">
                                    <div style="color: #fff; font-weight: 500;">${y.name}</div>
                                    <div style="font-size: 0.75em; color: #888;">${y.relation}</div>
                                </div>
                                <div style="font-size: 0.8em; color: #03dac6;">${y.trust}</div>
                            </div>
                        `).join(""):'<div style="color: #666; font-style: italic;">No associates mapped.</div>'}
                    </div>
                </div>
            </div>
        `},a=()=>{let L=i.traits||{};return`
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(L).map(([I,b])=>`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${b}%; background: ${Number(b)>50?"#03dac6":"#cf6679"}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${I.substring(0,4)}</div>
                    <div style="font-family: monospace;">${b}%</div>
                </div>
            `).join("")}
        </div>
    `},p=()=>`
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
    `,c=()=>`
        <div class="profile-section-title"><i class='bx bx-code-alt'></i> Raw Profile JSON</div>
        <div class="raw-json">${JSON.stringify(i,null,2)}</div>
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
                <div id="tab-dossier" class="tab-content">${o()}</div>
                <div id="tab-psychometrics" class="tab-content">${a()}</div>
                <div id="tab-topics" class="tab-content">${p()}</div>
                <div id="tab-raw" class="tab-content">${c()}</div>
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
    `;t.innerHTML=g;let T=t.querySelector(".profile-card"),x=t.querySelector("#profile-expand-toggle"),h=t.querySelectorAll(".profile-tab-btn"),r=t.querySelectorAll(".tab-content"),u=t.querySelector(".close-profile-btn");u&&u.addEventListener("click",()=>{t.classList.remove("active"),oe()||(document.body.style.overflow=""),setTimeout(()=>t.remove(),300)}),h.forEach(L=>{L.addEventListener("click",()=>{h.forEach(f=>f.classList.remove("active")),r.forEach(f=>f.classList.remove("active")),L.classList.add("active");let I=L.dataset.tab,b=t.querySelector(`#tab-${I}`);b&&b.classList.add("active")})}),x&&x.addEventListener("click",()=>{T.classList.toggle("expanded");let L=T.classList.contains("expanded");x.innerHTML=L?"<i class='bx bx-collapse-alt'></i> Collapse View":"<i class='bx bx-expand-alt'></i> Detailed Analysis"})}var _t=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto; ${z()?"display: none;":""}" title="Refresh Contacts"><i class='bx bx-refresh'></i></button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,ws=null;async function et(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await et(),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),t.dataset.listenerAttached||(t.onclick=i=>{let s=i.target.closest(".user-profile-card");if(s&&s.dataset.user)try{let o=JSON.parse(s.dataset.user);At(o)}catch(o){console.error("Failed to parse user data",o)}},t.dataset.listenerAttached="true");try{let i=await ve("/contacts");if(!i.ok)throw new Error("Service unreachable");let s=(await i.json()).members||[];if(ws=Date.now(),s.length===0){t.innerHTML=G("empty","No contacts found.","Check your Discord connection.");return}let o={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((a,p)=>{let c=o[a.level]??10,g=o[p.level]??10;return c!==g?c-g:a.username.localeCompare(p.username)}),t.innerHTML=s.map(a=>{let p=a.color&&a.color!==0,c=p?"#"+a.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",g=a.status==="online"?"#5eff5e":a.status==="idle"?"#ffa500":a.status==="dnd"?"#ff4d4d":"#666",T="#888";a.level==="Me"||a.level==="Master"?T="#bb86fc":a.level==="Admin"?T="#cf6679":a.level==="Moderator"?T="#03dac6":a.level==="Contributor"&&(T="#ffa500");let x=a.level==="Me",h=x?"rgba(187, 134, 252, 0.08)":p?`${c}11`:"rgba(255,255,255,0.03)",r=x?"2px solid #bb86fc":p?`1px solid ${c}66`:"1px solid rgba(255,255,255,0.1)";return`
                <div class="user-profile-card" 
                     data-user="${JSON.stringify(a).replace(/"/g,"&quot;")}"
                     style="background: ${h}; padding: 15px; border-radius: 8px; border: ${r}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; cursor: pointer; transition: transform 0.2s, background 0.2s, box-shadow 0.2s;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${x?"#bb86fc":p?c:"transparent"}33, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${a.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${x?"2px solid #bb86fc":p?`2px solid ${c}`:"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${g}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: ${p?c:"#fff"}; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">${a.nickname||a.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${T}; font-weight: 600; text-transform: uppercase;">${x?"DEXTER (ME)":a.level}</span>
                            <span style="font-size: 0.7em; color: #666; font-family: monospace;">(${a.username})</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${a.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=G("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Es={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","analysis.user.message_signals":"Analyzed Signals for User {user_id}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"{agent_name} Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {process_id} started: {state}","system.process.unregistered":"Process {process_id} completed","system.cognitive.model_load":"Model Loaded: {model} ({method})","system.cognitive.model_inference":"Model Inference: {model} ({method})","system.cognitive.model_unload":"Model Unloaded: {model} ({reason})"};function Bt(t,e){let i=Es[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"){let s=e.tier?e.tier.toUpperCase():"UNKNOWN";i=`${e.agent_name||"System"} Audit: ${s}`}if(t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let n=i.replace(/\{(\w+)\}/g,(s,o)=>e[o]!==void 0&&e[o]!==null?e[o]:o==="reason"||o==="method"||o==="details"||o==="args"?"":s);return n=n.replace(/\s\(\)\s*/g," ").trim(),(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(n+=` (Translation: ${e.english_translation})`),n}var tt=()=>`
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
`,Je=null,we=new Set,ze=[],Q="all",Ts={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision","analysis.user.message_signals","system.cognitive.model_inference"],moderation:["moderation.explicit_content.deleted"]},$s={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","analysis.user.message_signals":"bx-pulse","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart","system.cognitive.model_inference":"bx-brain"};function ks(t){for(let[e,i]of Object.entries(Ts))if(i.includes(t))return e;return"system"}function Ss(t){return $s[t]||"bx-square-rounded"}async function ue(t=!1){let e=document.getElementById("events-timeline");if(!e)return;Ls();let n=`/events?ml=${Q==="all"?100:250}&format=json&exclude_types=system.process.registered,system.process.unregistered`;Q!=="all"&&(n+=`&category=${Q}`);try{let s=await H(n);if(!s.ok)throw new Error("Service unreachable");if(ze=((await s.json()).events||[]).filter(h=>{let r=h.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return!0}let u=r.type;return!(u==="system.blueprint.generated"||u==="system.notification.generated")}),Je=Date.now(),pe(1,Je),ze.length===0){e.innerHTML=G("empty","No events found for this filter.");return}t&&(e.innerHTML="");let p=h=>{let r=h.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{return null}let u=r.type,L=ks(u),I=Ss(u),b=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.bot.voice_response"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted"||u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="analysis.user.message_signals"||u==="system.cli.command"||u==="system.analysis.audit"||u==="system.cognitive.model_inference"||u==="system.test.completed"||u==="error_occurred"||u==="system.cli.status"||u==="system.attention.expired"||u.startsWith("system.roadmap")||u.startsWith("system.process"),f="event-border-grey";b&&(u==="moderation.explicit_content.deleted"||u==="error_occurred"?f="event-border-red":u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="system.analysis.audit"||u==="analysis.user.message_signals"||u==="engagement.decision"?f="event-border-purple":u==="system.attention.expired"||u==="system.cli.command"||u==="system.cli.status"?f="event-border-orange":u==="system.test.completed"?f=r.test?.status==="OK"&&r.lint?.status==="OK"&&r.format?.status==="OK"?"event-border-blue":"event-border-red":f="event-border-blue");let v=b?"cursor-pointer":"",y=we.has(h.id),d=y?"expanded":"",l=y?"display: block;":"display: none;",k=new Date(h.timestamp*1e3),E=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),m=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),w=Bt(u,r),A=r.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${r.user_level})</span>`:"",M="";if(b){let _="";if(u==="engagement.decision"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${r.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Input Prompt")}
                            <pre class="detail-pre">${r.input_prompt||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context History")}
                            <pre class="detail-pre">${r.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Engagement Output")}
                            <pre class="detail-pre">${r.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(u==="system.cognitive.model_inference"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${r.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Method:</span>
                            <span class="detail-value" style="text-transform: uppercase;">${r.method}</span>
                        </div>
                        ${$("Inference Metrics")}
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 10px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${r.prompt_eval_count||0} / ${r.eval_count||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${r.duration_ms||0}ms</div>
                            </div>
                        </div>
                    `}else if(u==="system.attention.expired"){let $=P=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${P}</h5>`,S=r.timestamp-r.last_active,C=Math.floor(S/60);_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${r.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${C} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context (Last Input)")}
                            <div class="detail-pre">${ne(r.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${$("Thought Process (Last Output)")}
                            <div class="detail-pre">${ne(r.last_output||"None")}</div>
                        </div>
                    `}else if(u==="messaging.bot.sent_message"){let $=D=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${D}</h5>`,S="";if(r.embed){let D=r.embed,K=D.title?`<div style="font-weight: bold; margin-bottom: 5px; color: #fff;">${O(D.title)}</div>`:"",U=D.description?`<div style="font-size: 0.9em; color: #bbb; white-space: pre-wrap;">${ne(D.description)}</div>`:"",j=(D.fields||[]).map(F=>`
              <div style="margin-top: 10px;">
                <div style="font-size: 0.7em; text-transform: uppercase; color: #666; letter-spacing: 1px;">${O(F.name)}</div>
                <div style="font-size: 0.85em; color: #eee; white-space: pre-wrap;">${ne(F.value)}</div>
              </div>
            `).join("");S=`
              <div class="discord-embed" style="margin-top: 15px; padding: 12px; border-left: 4px solid ${D.color?"#"+D.color.toString(16).padStart(6,"0"):"#bb86fc"}; background: rgba(255,255,255,0.02); border-radius: 0 4px 4px 0;">
                ${K}
                ${U}
                ${j}
              </div>
            `}let C="";r.eval_count&&(C=`
                            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${r.prompt_count} / ${r.eval_count}</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Total Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${r.duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Load Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${r.load_duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Processing</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${r.prompt_duration_ms}ms / ${r.eval_duration_ms}ms</div>
                                </div>
                            </div>
                        `);let P="";if(r.chat_history&&r.chat_history.length>0){let D=r.chat_history.length,K=r.chat_history.map((U,j)=>{let F=U.name?U.name.toUpperCase():U.role.toUpperCase();!U.name&&F==="ASSISTANT"&&(F="DEXTER");let V=U.role==="user"?"#03dac6":U.role==="system"?"#ffb74d":"#bb86fc",ee=j===D-1?"block":"none";return`
                                <div class="history-slide" data-index="${j}" style="display: ${ee};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${V}; letter-spacing: 1px; font-weight: bold;">${F}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${j+1} of ${D}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${O(U.content)}</div>
                                </div>
                            `}).join("");P=`
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
                        `}_=`
                        ${C}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${r.response_model||"N/A"}</span>
                        </div>
                        ${S}
                        ${P||`
                            <div class="event-detail-block">
                                ${$("Raw Input (Prompt)")}
                                <pre class="detail-pre">${r.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${$("Raw Response Output")}
                                <pre class="detail-pre">${r.response_raw||"None"}</pre>
                            </div>
                        `}
                    `}else if(u==="messaging.bot.voice_response"){let $=D=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${D}</h5>`,S="",C=[],P=r.raw_input||"";if(P.startsWith("[{")&&P.endsWith("}]")){let D=P.match(/{.*?}/g);D&&(C=D.map(K=>{let U=K.substring(1,K.length-1),j=U.indexOf(" "),F=U.substring(0,j),V=U.substring(j+1);return V=V.replace(/\[\]$/,"").trim(),{role:F,content:V}}))}if(C.length>0&&r.response_raw&&C.push({role:"assistant",content:r.response_raw}),C.length>0){let D=C.length,K=C.map((U,j)=>{let F=U.role.toUpperCase();F==="ASSISTANT"&&(F="DEXTER");let V=U.role==="user"?"#03dac6":U.role==="system"?"#ffb74d":"#bb86fc",ee=j===D-1?"block":"none";return`
                                <div class="history-slide" data-index="${j}" style="display: ${ee};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${V}; letter-spacing: 1px; font-weight: bold;">${F}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${j+1} of ${D}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${O(U.content)}</div>
                                </div>
                            `}).join("");S=`
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
                        `}_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${r.response_model||"N/A"}</span>
                        </div>
                        ${S}
                        <div class="event-detail-block">
                            ${$("Raw Input (Prompt)")}
                            <pre class="detail-pre">${r.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Response Output")}
                            <pre class="detail-pre">${r.response_raw||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.user.message_signals"){let $=P=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${P}</h5>`,S=r.signals||{};_=`
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
                            ${$("Extracted Topics")}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${(S.topics||[]).map(P=>`<span class="profile-badge">${P}</span>`).join("")||'<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${O(r.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="moderation.explicit_content.deleted"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${r.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${r.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${O(r.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.link.completed"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${r.url}" target="_blank" class="attachment-link">${r.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${O(r.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Description")}
                            <pre class="detail-pre">${O(r.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Content Summary")}
                            <pre class="detail-pre">${O(r.summary)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.visual.completed"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`,S="";r.base64_preview?S=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${r.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:r.url?S=`<div class="event-detail-block"><img src="${r.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:S=`
              <div class="event-detail-block" style="margin-top: 10px; height: 100px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444;">
                <i class='bx bx-low-vision' style="font-size: 2rem; margin-bottom: 5px; opacity: 0.3;"></i>
                <span style="font-size: 0.65em; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;">Visual Data Restricted</span>
              </div>`,_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${r.filename}</span>
                        </div>
                        ${S}
                        <div class="event-detail-block">
                            ${$("Visual Description")}
                            <pre class="detail-pre">${O(r.description)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.router.decision"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Decision:</span>
                            <span class="detail-value" style="color: #bb86fc; font-weight: bold;">${r.decision}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${r.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${r.url}" target="_blank" class="attachment-link">${r.url}</a></span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${O(r.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Input Context")}
                            <pre class="detail-pre">${O(r.raw_input)||"None"}</pre>
                        </div>
                    `}else if(u==="system.cli.command"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${r.command||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${r.args||"None"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${r.status||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${r.duration||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${r.exit_code!==void 0?r.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Output")}
                            <pre class="detail-pre">${O(r.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(u==="system.analysis.audit"){let $=r.success?"#03dac6":"#ff4d4d",S=r.success?"SUCCESS":"FAILED",C=j=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${j}</h5>`,P="";r.error&&(P=`
                            <div class="event-detail-block">
                                ${C("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${O(r.error)}</pre>
                            </div>
                        `);let D="";if(r.chat_history&&r.chat_history.length>0){let j=r.chat_history.length,F=r.chat_history.map((V,ee)=>{let X=V.name?V.name.toUpperCase():V.role.toUpperCase();!V.name&&X==="USER"&&(X="SYSTEM"),!V.name&&X==="ASSISTANT"&&(X="AGENT");let Me=V.role==="user"?"#03dac6":V.role==="system"?"#ffb74d":"#bb86fc";return`
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
                        `}let K="";if(r.corrections&&r.corrections.length>0){let j=r.corrections.map((F,V)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${F.type}] ${F.guidance}</div>
                                ${F.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${O(F.snippet)}</div>`:""}
                            </div>
                        `).join("");K=`
                            <div class="event-detail-block">
                                ${C(`Corrections (${r.corrections.length})`)}
                                ${j}
                            </div>
                        `}let U="";if(r.parsed_results&&r.parsed_results.length>0){let j=r.parsed_results.map(F=>`
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
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${r.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${r.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${$}; font-weight: bold;">${S} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${r.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${r.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${r.model}</div>
                            </div>
                        </div>
                        ${P}
                        ${U}
                        ${K}
                        ${D}
                    `}else if(u==="system.test.completed"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${r.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${r.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Format")}
                            <pre class="detail-pre">${r.format?.status||"N/A"}: ${r.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Lint")}
                            <pre class="detail-pre">${r.lint?.status||"N/A"}: ${r.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Tests")}
                            <pre class="detail-pre">${r.test?.status||"N/A"}: ${r.test?.details||r.test?.message||"OK"}</pre>
                        </div>
                    `}else if(u==="error_occurred"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${r.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${O(r.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context")}
                            <pre class="detail-pre">${JSON.stringify(r.context||{},null,2)}</pre>
                        </div>
                    `}else if(u==="system.cli.status"){let $=S=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${S}</h5>`;_=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${r.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Message")}
                            <pre class="detail-pre">${O(r.message)}</pre>
                        </div>
                    `}else if(u==="messaging.user.sent_message"){let $="";r.attachments&&r.attachments.length>0&&($=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${r.attachments.map(C=>{let P=C.content_type&&C.content_type.startsWith("image/"),D=(C.size/1024).toFixed(1)+" KB";return`
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
                            <span class="detail-value">${r.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${r.content||"(empty)"}</pre>
                        </div>
                        ${$}
                    `}M=`
                    <div class="event-details" style="${l}">
                        ${_}
                    </div>
                `}let B=document.createElement("div");B.className=`event-item ${f} ${v} ${d}`,B.dataset.eventId=h.id,B.onclick=function(_){if(!b)return;let $=this;if($.classList.contains("expanded")){$.classList.remove("expanded"),we.delete(h.id);let C=$.querySelector(".event-details");C&&(C.style.display="none")}else{$.classList.add("expanded"),we.add(h.id);let C=$.querySelector(".event-details");C&&(C.style.display="block")}},B.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${m}</span>
                </div>
                <div class="event-icon"><i class='bx ${I}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${L}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${L}</span>
                        ${h.service} ${A}
                    </div>
                    <div class="event-message">${w}</div>
                    ${M}
                </div>
            `;let N=B.querySelector(".event-details");if(N&&N.addEventListener("click",_=>{_.stopPropagation()}),b){let _=B.querySelector(".close-details-btn");_&&_.addEventListener("click",$=>{$.stopPropagation();let S=$.target.closest(".event-item");if(S){S.classList.remove("expanded"),we.delete(h.id);let C=S.querySelector(".event-details");C&&(C.style.display="none")}})}let q=B.querySelector(".prev-btn"),Y=B.querySelector(".next-btn");if(q&&Y){let _=0,$=Array.from(B.querySelectorAll(".history-slide")),S=$.length,C=()=>{$.forEach((P,D)=>{P.style.display=D===_?"block":"none"}),q.disabled=_===0,Y.disabled=_===S-1,q.style.opacity=_===0?"0.5":"1",Y.style.opacity=_===S-1?"0.5":"1"};q.addEventListener("click",P=>{P.stopPropagation(),_>0&&(_--,C())}),Y.addEventListener("click",P=>{P.stopPropagation(),_<S-1&&(_++,C())}),C()}return B},c=Array.from(e.children),g=new Map(c.map(h=>[h.dataset.eventId,h])),T=new Set(ze.map(h=>h.id));c.forEach(h=>{let r=h.dataset.eventId;(!r||!T.has(r))&&h.remove()});let x=null;ze.forEach((h,r)=>{let u=g.get(h.id);(!u||t)&&(u&&u.remove(),u=p(h),!u)||(r===0?e.firstElementChild!==u&&e.prepend(u):x&&x.nextElementSibling!==u&&x.after(u),x=u)}),Je=Date.now(),pe(1,Je)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=G("offline","Failed to load events.","The event service may be offline."))}}function Ls(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ze.forEach(s=>we.add(s.id)),ue(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{we.clear(),ue(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),s.classList.add("active"),Q=s.dataset.filter||"all",ue(!0)}}),i.dataset.listenerAttached="true"),i&&i.querySelectorAll(".filter-btn").forEach(s=>{s.dataset.filter===Q?s.classList.add("active"):s.classList.remove("active")});let n=document.getElementById("events-clear");n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let s=Q==="all"?"ALL":Q.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let o="/events";if(Q!=="all"?o+=`?category=${Q}`:o+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await H(o,{method:"DELETE"})).ok)throw new Error("Failed to delete events");we.clear(),ue(!0)}catch(o){console.error("Failed to clear events:",o),alert("Failed to clear events. Check console.")}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}function Ht(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Ms=null;async function De(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await H("/logs");if(!e.ok)throw new Error("Logs offline");let i=await e.json();if(!i||i.length===0)return t.innerHTML=G("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let n=["local-model-0","local-cache-0","upstash-redis-rw","upstash-redis-ro","easter-company","easter-company-production","dex-test-service","easter-company-root"],s=i.filter(a=>!n.includes(a.id));s.forEach(a=>{a.logs&&Array.isArray(a.logs)?a.logs.reverse():a.logs=[]}),s.reverse();let o=s.map(a=>{let p=a.logs.join(`
`),c=[...a.logs];if(c.length<25){let T=25-c.length;for(let x=0;x<T;x++)c.push("")}else c.length>25&&(c=c.slice(-25));let g=c.map(T=>qe(T)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${a.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(p)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${a.id}" title="Clear Logs" style="${z()?"display: none;":""}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return t.innerHTML=o,document.querySelectorAll(".copy-logs-btn").forEach(a=>{a.addEventListener("click",()=>{let p=a,c=unescape(p.dataset.logs||"");navigator.clipboard.writeText(c).then(()=>{let g=p.querySelector("i");g&&(g.classList.remove("bx-copy"),g.classList.add("bx-check"),setTimeout(()=>{g.classList.remove("bx-check"),g.classList.add("bx-copy")},2e3))})})}),document.querySelectorAll(".clear-logs-btn").forEach(a=>{a.addEventListener("click",async()=>{let c=a.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${c}?`))try{(await H(`/logs?service_id=${c}`,{method:"DELETE"})).ok&&De()}catch(g){console.error("Error clearing logs:",g)}})}),Ms=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=G("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var Ee="STANDBY",zt=null,ae=[],te=null,st=null,Dt=()=>`
    <div id="progress-view-root" class="progress-container" style="flex: 1; overflow-y: auto; padding: 20px;">
        ${Rt()}
    </div>
  `;function Rt(){switch(Ee){case"ACTIVE":return Is();case"COMPLETED":return As();case"STANDBY":default:return Cs()}}function Cs(){return`
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
  `}function Is(){let t=ae.map(e=>`
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
  `}function As(){return`
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
  `}async function Nt(){try{let e=await(await H("/processes")).json(),i=e.active||[],n=e.history||[],s=i.find(a=>a.channel_id==="system-fabricator");if(s){Ee="ACTIVE";let p=Math.floor(Date.now()/1e3)-s.start_time,c=10,g="REVIEW";p>30&&(c=30,g="INVESTIGATION"),p>120&&(c=60,g="CONSTRUCTION"),p>300&&(c=90,g="REPORTING"),te={title:s.state||"Fabricating system improvements...",progress:c,phase:g};let T=new Date(s.updated_at*1e3).toLocaleTimeString();(ae.length===0||ae[ae.length-1].msg!==s.state)&&(ae.push({time:T,msg:s.state}),ae.length>50&&ae.shift())}else{let a=n.find(p=>p.channel_id==="system-fabricator");if(a&&Date.now()/1e3-a.end_time<60){Ee="COMPLETED";let p=a.end_time-a.start_time;st={duration:`${Math.floor(p/60)}m ${p%60}s`,steps:0,result:a.state,timestamp:a.end_time}}else Ee="STANDBY",ae=[]}let o=document.getElementById("progress-view-root");o&&(Ee!==zt&&(o.innerHTML=Rt(),zt=Ee),Ee==="ACTIVE"&&_s())}catch(t){console.error("Failed to update progress:",t)}}function _s(){let t=document.getElementById("active-task-title"),e=document.getElementById("active-task-progress-fill"),i=document.getElementById("active-task-progress-text"),n=document.getElementById("active-task-phase"),s=document.getElementById("terminal-output");if(t&&te&&(t.innerText=te.title),e&&te&&(e.style.width=`${te.progress}%`),i&&te&&(i.innerText=`${te.progress}% COMPLETE`),n&&te&&(n.innerText=`PHASE: ${te.phase}`),s){let o=s.children.length;if(ae.length>o){for(let a=o;a<ae.length;a++){let p=ae[a],c=document.createElement("div");c.className="terminal-line",c.innerHTML=`
            <span class="line-time">${p.time}</span>
            <span class="line-prefix">></span>
            <span class="line-msg">${O(p.msg)}</span>
        `,s.appendChild(c)}s.scrollTop=s.scrollHeight}}}var jt=()=>{let t=z()?"display: none;":"";return`
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

                </div>

        `},qt=()=>`
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
        <div id="processes-history-widgets" class="system-monitor-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,Ut=()=>`
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
            ${G("config","Acquiring system metrics...","Searching for active nodes...")}
        </div>`;var Ft=()=>`
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
        </div>`,Jt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${Ht()}
        </div>`;async function Wt(){Bs(),await Promise.all([re(),Te(),xt()]),await De()}var We=null;function Bs(){We||(We=setInterval(()=>{if(!document.getElementById("guardian-sentry-val")){clearInterval(We),We=null;return}re(!0)},1e3))}var Pt=null;async function Hs(){try{return await(await H("/system_monitor")).json()}catch{return null}}async function Ot(){try{return await(await H("/system/hardware")).json()}catch{return null}}async function zs(){try{return await(await H("/processes")).json()}catch{return null}}async function Ds(){try{return await(await H("/agent/status")).json()}catch{return null}}async function Te(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),i=document.getElementById("global-restart-btn"),n=document.getElementById("global-stop-btn"),s=document.getElementById("global-start-btn"),o=(d,l)=>{d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{let k=d.innerHTML;d.innerHTML="<i class='bx bx-loader-alt spin'></i>",d.disabled=!0;try{await H(`/system/service/${l}`,{method:"POST",body:JSON.stringify({service:"all"})}),setTimeout(()=>Te(),2e3),setTimeout(()=>Te(),5e3),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{d.innerHTML=k,d.disabled=!1},1e3)},1e3)}catch(E){console.error(E),d.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{d.innerHTML=k,d.disabled=!1},2e3)}},d.dataset.listenerAttached="true")};o(i,"restart"),o(n,"stop"),o(s,"start");let a=document.querySelector("#hw-os .hw-content"),p=document.querySelector("#hw-cpu .hw-content"),c=document.querySelector("#hw-ram .hw-content"),g=document.querySelector("#hw-gpu .hw-content"),T=document.querySelector("#hw-storage .hw-content"),x=d=>{if(d){if(a&&(a.innerHTML=`
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
                </div>`}g&&(d.GPU&&d.GPU.length>0?g.innerHTML=d.GPU.map(l=>{let k=(l.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${l.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${k} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):g.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),T&&d.STORAGE&&d.STORAGE.length>0?T.innerHTML=d.STORAGE.map(l=>{let k=(l.USED/1073741824).toFixed(1),E=(l.SIZE/(1024*1024*1024)).toFixed(1),m=l.SIZE>0?(l.USED/l.SIZE*100).toFixed(0):0,w=l.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${l.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${w}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${k} GB Used</span>
                            <span>${E} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${Number(m)>90?"#cf6679":"#03dac6"}; width: ${m}%; height: 100%; box-shadow: 0 0 10px ${Number(m)>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):T&&(T.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>";let d=await Ot();d?(x(d),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)):(e.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3))},e.dataset.listenerAttached="true"),p&&!p.hasChildNodes())){let d=await Ot();x(d)}if(!t)return;t.dataset.controlsAttached||(t.addEventListener("click",async d=>{let l=d.target.closest(".svc-btn");if(!l)return;let k=l,E=k.dataset.action,m=k.dataset.service;if(!E||!m)return;let w=k.innerHTML;k.innerHTML="<i class='bx bx-loader-alt spin'></i>",k.classList.add("loading"),k.disabled=!0;try{await H(`/system/service/${E}`,{method:"POST",body:JSON.stringify({service:m})}),setTimeout(()=>Te(),1e3),setTimeout(()=>Te(),3e3)}catch(A){console.error(A),alert(`Failed to ${E} ${m}`),k.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{k.innerHTML=w,k.classList.remove("loading"),k.disabled=!1},2e3)}}),t.dataset.controlsAttached="true");let h=await Hs();if(!h||!h.services){t.children.length===0&&(t.innerHTML=G("offline","Failed to load system metrics.","The event service may be offline."));return}Pt=z()&&be.lastDashboard||Date.now(),pe(3,Pt||0);let r=h.services||[],u={cli:[],fe:[],cs:[],be:[],th:[],co:[],md:[],prd:[],os:[]},L={cli:"CLI",fe:"Front-end",cs:"Core",be:"Backend",th:"Third Party",co:"Cognitive",md:"Models",prd:"Production",os:"Other"};r.forEach(d=>{u[d.type]?u[d.type].push(d):u.os.push(d)});let I="";Object.entries(u).forEach(([d,l])=>{l.length!==0&&(I+=`
            <div class="service-category-header" style="width: 100%; margin: 20px 0 15px 0; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 10px;">
                <span style="color: #888; font-size: 0.75em; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">${L[d]||d}</span>
                <span style="flex: 1; height: 1px; background: rgba(255,255,255,0.02);"></span>
            </div>
            <div class="service-category-grid system-monitor-widgets" style="padding-bottom: 20px;">
                ${l.map(k=>y(k)).join("")}
            </div>`)}),t.innerHTML!==I&&(t.innerHTML=I);function b(d){if(!d||d==="N/A"||d==="unknown")return"-";let l=d.match(/^(\d+\.\d+\.\d+)/);return l?l[0]:d.split(".").slice(0,3).join(".")||"-"}function f(d){return!d||d.length<=28?d:d.substring(0,28)+"..."}function v(d){if(!d||d==="N/A"||d==="unknown")return"-";let l=d.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!l)return"-";let k=parseInt(l[1])||0,E=parseInt(l[2])||0,m=parseInt(l[3])||0,w=parseFloat(l[4])||0,A=k*86400+E*3600+m*60+w,M=Math.floor(A/86400);if(M>0)return`${M}d`;let B=Math.floor(A/3600);if(B>0)return`${B}h`;let N=Math.floor(A/60);return N>0?`${N}m`:`${Math.floor(A)}s`}function y(d){if(d.id==="upstash-redis-ro"){let D=z()&&(be.lastFrontend||be.lastDashboard)||Date.now();return`
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
            </div>`}let l=d.status==="online",k=l?"service-widget-online":"service-widget-offline",E=l?"bx-check-circle":"bx-x-circle",m=l?"OK":"BAD",w=d.version?b(d.version.str):"-",A=d.cpu&&d.cpu!=="N/A"?d.cpu:"-",M=d.memory&&d.memory!=="N/A"?d.memory:"-",B=A!=="-"?"#00ff00":"#666",N=A!=="-"?"#fff":"#666",q=M!=="-"?"#00ff00":"#666",Y=M!=="-"?"#fff":"#666",_=v(d.uptime),$="",S=d.type!=="os"&&d.type!=="cli"&&d.type!=="prd"&&d.type!=="md",C="";if(S&&!z()&&(C=`
            <div class="service-controls" style="display: flex; gap: 8px; margin-top: 10px; justify-content: flex-end;">
                <button class="svc-btn svc-restart" title="Restart Service" data-action="restart" data-service="${d.id}"><i class='bx bx-refresh'></i></button>
                <button class="svc-btn svc-stop" title="Stop Service" data-action="stop" data-service="${d.id}" ${l?"":"disabled"}><i class='bx bx-stop'></i></button>
                <button class="svc-btn svc-start" title="Start Service" data-action="start" data-service="${d.id}" ${l?"disabled":""}><i class='bx bx-play'></i></button>
            </div>`),l){let D=d.type==="md"?"Size:":"Version:",K=d.type==="md"?d.memory:w,U=d.type==="md"?"Type:":"RAM:",j=d.type==="md"?d.health_message||"Model":M;$=`
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
                </div>${C}`}else $=`<div class="service-widget-footer offline" style="justify-content: center; opacity: 0.5; letter-spacing: 2px; font-weight: bold;"><span>OFFLINE</span></div>${C}`;let P=z()||d.type==="md"?"easter.company":f(d.domain&&d.port?`${d.domain}:${d.port}`:"");return`<div class="service-widget ${k}" data-service-id="${d.id}"><div class="service-widget-header"><i class="bx ${E}"></i><h3>${d.short_name||d.id}</h3><span class="service-widget-status">${m}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${P}</span></div>${$}</div></div>`}}async function re(t=!1){let e=document.getElementById("processes-widgets");if(!e&&!t)return;let i=document.getElementById("guardian-sentry-val"),n=document.getElementById("guardian-idle-val"),s=document.getElementById("guardian-total-idle"),o=document.getElementById("guardian-total-active"),a=document.getElementById("guardian-total-waste"),p=document.getElementById("guardian-reset-btn"),c=document.getElementById("analyzer-reset-btn"),g=document.getElementById("fabricator-reset-btn"),T=document.getElementById("fabricator-progress-btn"),x=document.getElementById("courier-reset-btn"),h=document.getElementById("system-pause-toggle-btn");T&&!T.dataset.listenerAttached&&(T.onclick=()=>{let d=le({id:"fabricator-progress-window",title:"Mission Control",icon:"bx-loader-circle",className:"full-screen-modal",content:`
          <div class="mission-control-overlay">
            <div class="progress-section" style="height: 100%; display: flex; flex-direction: column;">
                <div class="system-section-header" style="margin-bottom: 20px;">
                    <i class='bx bx-loader-circle spin' style="color: #03dac6;"></i>
                    <h2>Fabricator Live Stream</h2>
                    <button class="notif-action-btn close-modal-btn" style="margin-left: auto;"><i class='bx bx-x'></i></button>
                </div>
                ${Dt()}
            </div>
          </div>
        `,onOpen:()=>{let l=document.getElementById("fabricator-progress-window");l&&l.querySelector(".close-modal-btn")?.addEventListener("click",()=>d.close()),Nt()}});d.open()},T.dataset.listenerAttached="true"),h&&!h.dataset.listenerAttached&&(h.onclick=async()=>{let l=h.querySelector(".bx-play")?"/agent/resume":"/agent/pause";h.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H(l,{method:"POST"}),await re()}catch{h.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>re(),2e3)}},h.dataset.listenerAttached="true"),p&&!p.dataset.listenerAttached&&(p.onclick=async()=>{p.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?protocol=all",{method:"POST"}),setTimeout(()=>{p.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{p.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),re()}catch{p.innerHTML="<i class='bx bx-error'></i>"}},p.dataset.listenerAttached="true"),c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{c.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?protocol=synthesis",{method:"POST"}),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{c.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),re()}catch{c.innerHTML="<i class='bx bx-error'></i>"}},c.dataset.listenerAttached="true"),g&&!g.dataset.listenerAttached&&(g.onclick=async()=>{g.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?protocol=review",{method:"POST"}),setTimeout(()=>{g.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{g.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),re()}catch{g.innerHTML="<i class='bx bx-error'></i>"}},g.dataset.listenerAttached="true"),x&&!x.dataset.listenerAttached&&(x.onclick=async()=>{x.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await H("/agent/reset?protocol=researcher",{method:"POST"}),setTimeout(()=>{x.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{x.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),re()}catch{x.innerHTML="<i class='bx bx-error'></i>"}},x.dataset.listenerAttached="true");let r=document.getElementById("imaginator-reset-btn");r&&!r.dataset.listenerAttached&&(r.onclick=async()=>{r.innerHTML="<i class='bx bx-loader-alt spin'></i>",setTimeout(()=>{r.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{r.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500)},r.dataset.listenerAttached="true");let u=await Ds();if(u&&u.agents){let d=u.agents.guardian||{protocols:{}},l=u.agents.analyzer||{protocols:{}},k=u.agents.architect||{protocols:{}},E=u.agents.fabricator||{protocols:{}},m=u.agents.courier||{protocols:{}},w=u.system||{},A=Math.floor(Date.now()/1e3),M={sentry:"Sentry",synthesis:"Synthesis",architect:"Architect",review:"Review",issue:"Issue",construct:"Construct",reporter:"Reporter",researcher:"Researcher",compressor:"Compressor"},B=J=>{J<0&&(J=0);let Z=Math.floor(J/3600),W=Math.floor(J%3600/60),$e=J%60;return Z>0?`${Z}h ${W}m`:W>0?`${W}m ${$e}s`:`${$e}s`},N=(J,Z,W,$e,ge)=>{if(!J)return;let Ce=M[$e]||$e.toUpperCase(),ot=J.parentElement?.querySelector('span[style*="text-transform: uppercase"]');if(ot&&(ot.textContent=Ce),ge==="paused"){J.textContent="PAUSED",J.style.color="#ff9800";return}if(!W){J.textContent="Inactive",J.style.color="#666";return}let rt=W.status;if(rt==="Working")J.textContent="Working",J.style.color="#bb86fc";else if(rt==="Ready")J.textContent="Ready",J.style.color="#5eff5e";else{let Pe=W.cooldown;if(z()&&(Pe=W.next_run-A),Pe<=0)J.textContent="Ready",J.style.color="#5eff5e";else{let ts=Math.floor(Pe/60),ss=Pe%60;J.textContent=`${ts}m ${ss}s`,J.style.color="#fff"}}Z&&W.stats&&(Z.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <span>Runs: ${W.stats.runs||0}</span>
              <span style="color: ${W.stats.failures>0?"#ffa500":"#666"}">Fails: ${W.stats.failures||0}</span>
              <span style="color: ${W.stats.aborted>0?"#ff4d4d":"#666"}">Aborted: ${W.stats.aborted||0}</span>
            </div>
          `)};i&&N(i,document.getElementById("guardian-sentry-stats"),d.protocols.sentry,"sentry",w.state);let q=document.getElementById("analyzer-summary-val"),Y=document.getElementById("analyzer-summary-stats");q&&N(q,Y,l.protocols.summary,"summary",w.state);let _=document.getElementById("analyzer-synthesis-val"),$=document.getElementById("analyzer-synthesis-stats");_&&N(_,$,l.protocols.synthesis,"synthesis",w.state);let S=document.getElementById("imaginator-alert_review-val"),C=document.getElementById("imaginator-alert_review-stats");S&&N(S,C,k.protocols.architect,"architect",w.state);let P=document.getElementById("fabricator-review-val"),D=document.getElementById("fabricator-review-stats");P&&N(P,D,E.protocols.review,"review",w.state);let K=document.getElementById("fabricator-issue-val"),U=document.getElementById("fabricator-issue-stats");K&&N(K,U,E.protocols.issue,"issue",w.state);let j=document.getElementById("fabricator-construct-val"),F=document.getElementById("fabricator-construct-stats");j&&N(j,F,E.protocols.construct,"construct",w.state);let V=document.getElementById("fabricator-reporter-val"),ee=document.getElementById("fabricator-reporter-stats");V&&N(V,ee,E.protocols.reporter,"reporter",w.state);let X=document.getElementById("courier-researcher-val"),Me=document.getElementById("courier-researcher-stats");X&&N(X,Me,m.protocols.researcher,"researcher",w.state);let Re=document.getElementById("courier-compressor-val"),Ve=document.getElementById("courier-compressor-stats");Re&&N(Re,Ve,m.protocols.compressor,"compressor",w.state);let Ne=document.getElementById("system-state-label"),fe=document.getElementById("system-state-val");if(fe&&w.state){let J=w.state,Z=B(w.state_time||0);Ne&&(Ne.textContent=`State: ${J.toUpperCase()}`),fe.textContent=Z,J==="idle"?fe.style.color=w.state_time>300?"#5eff5e":"#fff":fe.style.color="#bb86fc",h&&(J==="paused"?(h.innerHTML="<i class='bx bx-play'></i>",h.title="Resume System",h.style.color="#ff9800"):(h.innerHTML="<i class='bx bx-pause'></i>",h.title="Pause System",h.style.color=""))}s&&(s.textContent=B(w.metrics?.total_idle_time||0)),o&&(o.textContent=B(w.metrics?.total_active_time||0)),a&&(a.textContent=B(w.metrics?.total_waste_time||0))}else[i,n,s,o,a].forEach(l=>{l&&(l.textContent="-",l.style.color="#666")});if(t)return;let L=await zs(),I=[],b=[],f=[];L&&(Array.isArray(L)?I=L:(I=L.active||[],b=L.queue||[],f=L.history||[],f.sort((d,l)=>(l.end_time||0)-(d.end_time||0)))),e&&(I.length===0?e.querySelector(".tab-placeholder")||(e.innerHTML=G("empty","No active processes.")):((e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML=""),nt(e,I,!1)));let v=document.getElementById("processes-queue-widgets");v&&(b.length===0?!v.querySelector(".tab-placeholder")&&!v.querySelector('div[style*="font-style: italic"]')&&(v.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(v.innerHTML="",nt(v,b,!1)));let y=document.getElementById("processes-history-widgets");y&&(f.length===0?y.querySelector(".tab-placeholder")||(y.innerHTML=G("empty","No recent history.")):(y.querySelector(".tab-placeholder")&&(y.innerHTML=""),nt(y,f,!0))),vt(1,I.length)}function nt(t,e,i){function n(c){let g="";c.end_time?g=`${c.end_time-c.start_time}s`:g=`${Math.floor(Date.now()/1e3-c.start_time)}s`;let T=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",x=c.channel_id,h={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation","system-analyzer":"Analyzer Agent","system-courier":"Courier Agent","system-architect":"Architect Agent","system-fabricator":"Fabricator Agent","system-test":"System Validation","voice-mode":"Voice Interaction"};if(h[x]?x=h[x]:/^\d+$/.test(x)&&(x=`Channel ${x}`),i)return`
        <div class="process-history-item" data-channel-id="${c.channel_id}-${c.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${x}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${c.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${c.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${g}</span>
            </div>
        </div>`;let r=c.channel_id==="system-test",u=r?"#03dac6":"#fff",L=r?"border: 1px solid #03dac644;":"",I=r?"bx-shield-quarter":"bx-cog";return`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}-${c.start_time}" style="${L}">
                    <div class="service-widget-header">
                        <i class="bx ${I}" style="color: ${u}"></i>
                        <h3 style="color: ${u}">${x}</h3>
                        ${T}
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
                </div>`}let s=i?".process-history-item":".process-widget",o=new Map(Array.from(t.querySelectorAll(s)).map(c=>[c.dataset.channelId,c])),a=new Set(e.map(c=>`${c.channel_id}-${c.start_time}`));for(let[c,g]of o)c&&!a.has(c)&&g.remove();let p=new Set;e.forEach(c=>{let g=`${c.channel_id}-${c.start_time}`;if(p.has(g))return;p.add(g);let T=n(c),x=o.get(g);if(x&&x.parentNode){x.outerHTML!==T&&(x.outerHTML=T);let h=t.querySelector(`[data-channel-id="${g}"]`);h&&t.appendChild(h)}else t.insertAdjacentHTML("beforeend",T)})}function Ge(){let t=Ke(),e="Notification"in window,i={enabled:e&&Notification.permission==="granted",supported:e};return`
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
            </div>`}function it(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(n=>{n.addEventListener("click",function(){let s=this.dataset.theme;s&&(ut(s),t.setContent(Ge()),it(t))})});let i=document.getElementById("notifications-toggle");i&&"Notification"in window?i.onclick=async n=>{let s=n.target;if(s.checked)try{await Notification.requestPermission()!=="granted"&&(s.checked=!1)}catch{s.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.checked=!0)}:i&&(i.disabled=!0),Rs()}async function Rs(){let t=document.getElementById("service-config-list");if(!t)return;let e=z();try{let n=await(await H("/system/options")).json(),s=n.services||n||{},o="",a=(p,c,g)=>`

        <div class="settings-item">

            <div class="settings-item-info">

                <span class="settings-item-label">${p}</span>

                <span class="settings-item-description">Enable GPU acceleration (CUDA)</span>

            </div>

            <label class="toggle-switch">

                <input type="checkbox" class="service-device-toggle" data-service="${c}" ${g==="cuda"?"checked":""} ${e?"disabled":""}>

                <span class="toggle-slider"></span>

            </label>

        </div>`;if(s.stt&&(o+=a("STT Service","stt",s.stt.device||"cpu")),s.tts&&(o+=a("TTS Service","tts",s.tts.device||"cpu")),o?e&&(o+='<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Service configuration is read-only in public mode.</div>'):o='<div style="padding: 20px; text-align: center; color: #666;">No configurable services found.</div>',t.innerHTML=o,e)return;t.querySelectorAll(".service-device-toggle").forEach(p=>{p.addEventListener("change",async c=>{let g=c.target,T=g.dataset.service,x=g.checked?"cuda":"cpu";g.disabled=!0;try{await H("/system/options",{method:"POST",body:JSON.stringify({service:T,key:"device",value:x})})}catch{g.checked=!g.checked,alert("Failed to update configuration.")}finally{g.disabled=!1}})})}catch{t.innerHTML='<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load configuration.</div>'}}var Vt=()=>`
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
    `;async function Kt(){let t=document.getElementById("web-history-content");if(!t)return;let e=document.getElementById("web-refresh-btn");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await Gt(t),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),await Gt(t)}async function Gt(t){try{let e=await H("/web/history");if(!e.ok)throw new Error("Failed to fetch history");let i=await e.json();if(!i||i.length===0){t.innerHTML=G("empty","No web history found.");return}let n=`
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div class="web-carousel" style="flex: 1; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 20px; padding-bottom: 5px; scroll-behavior: smooth; min-height: 0;">
        `;i.forEach((p,c)=>{let g=new Date(p.timestamp*1e3).toLocaleString([],{dateStyle:"short",timeStyle:"short"}),T=p.screenshot?`<img src="data:image/png;base64,${p.screenshot}" style="width: 100%; max-height: 45%; object-fit: contain; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px; flex-shrink: 0; background: #000;">`:`<div style="width: 100%; height: 120px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444; margin-bottom: 15px; border-radius: 8px; flex-shrink: 0;">
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
                    
                    ${T}

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
        `,t.innerHTML=n;let s=t.querySelector(".web-carousel"),o=t.querySelector("#web-prev-btn"),a=t.querySelector("#web-next-btn");o&&(o.onclick=()=>{s.scrollBy({left:-s.offsetWidth,behavior:"smooth"})}),a&&(a.onclick=()=>{s.scrollBy({left:s.offsetWidth,behavior:"smooth"})})}catch(e){t.innerHTML=G("error","Failed to load web history.",e.message)}}var Zt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It maintains system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1] [--force]
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
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Ns=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
    `;for(let[i,n]of Object.entries(t)){let s=Zt.filter(o=>o.category===i);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${n.icon}' style="color: ${n.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${n.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(o=>`
                        <div class="cli-command-card ${o.dummy?"dummy":""}" data-cmd="${o.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${n.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${o.icon}' style="font-size: 2em; color: ${n.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${o.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${o.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${n.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${o.usage}
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
    </div>`,e},at=!1;function Ps(t){let e=document.getElementById("cli-terminal-overlay");if(!e){e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e);let c=document.getElementById("close-terminal-btn");c&&(c.onclick=()=>Yt());let g=document.getElementById("terminal-action-btn");g&&(g.onclick=()=>Yt())}let i=document.getElementById("cli-terminal-body"),n=document.getElementById("cli-docs-pane");i&&(i.innerHTML="");let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};n&&(n.innerHTML=`
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
    `);let o=document.getElementById("terminal-cmd-name");o&&(o.textContent=`dex ${t.id}`);let a=document.getElementById("terminal-status-badge");a&&(a.className="terminal-status status-running",a.textContent="Running");let p=document.getElementById("terminal-action-btn");return p&&(p.style.display="none"),e.classList.add("active"),document.body.style.overflow="hidden",at=!0,i}function Yt(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),oe()||(document.body.style.overflow=""),at=!1}function Xt(t,e,i="output"){if(!at||!t)return;let n=document.createElement("div");if(n.className=`terminal-line terminal-${i}`,i==="prompt")n.innerHTML=`<span class="terminal-prompt">$</span> ${e}`;else{let s=qe(e);n.innerHTML=s||e}t.appendChild(n),t.scrollTop=t.scrollHeight}async function Os(t){let e=Zt.find(a=>a.id===t);if(!e)return;let i=Ps(e);i&&Xt(i,`dex ${t}`,"prompt");let n=e.demo_output||["Executing command...","\u2713 Done."];for(let a of n){await new Promise(c=>setTimeout(c,400+Math.random()*600));let p="output";a.includes("[ERROR]")?p="error":a.includes("[SUCCESS]")||a.includes("\u2713")?p="success":a.includes("!")&&(p="warning"),i&&Xt(i,a,p)}let s=document.getElementById("terminal-status-badge");s&&(s.className="terminal-status status-success",s.textContent="Completed (Demo)");let o=document.getElementById("terminal-action-btn");o&&(o.style.display="block")}function Qt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Ns();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let i=e.querySelector("code"),n=i?i.textContent:"";n&&navigator.clipboard.writeText(n).then(()=>{let s=e.querySelector("i");s&&(s.className="bx bx-check",s.style.color="#5eff5e",setTimeout(()=>{s.className="bx bx-copy",s.style.color="#bb86fc"},2e3))})}),t.querySelectorAll(".cli-command-card").forEach(i=>{let n=i;i.addEventListener("mouseenter",()=>{n.style.transform="translateY(-5px)",n.style.borderColor="rgba(255,255,255,0.15)",n.style.backgroundColor="rgba(255,255,255,0.05)"}),i.addEventListener("mouseleave",()=>{n.style.transform="translateY(0)",n.style.borderColor="rgba(255,255,255,0.05)",n.style.backgroundColor="rgba(255,255,255,0.03)"}),i.addEventListener("click",()=>{let s=n.dataset.cmd;s&&Os(s)})})}async function js(){if(!z())try{if(!(await H("/system/status",{method:"GET"})).ok)throw new Error("Service unhealthy")}catch(t){console.error("Service health check failed:",t)}}function es(){if(window.location.protocol==="http:"&&window.location.hostname==="easter.company"){window.location.replace("https://"+window.location.hostname+window.location.pathname+window.location.search);return}ct(),dt(),js(),gt(),lt();let t=window.location.pathname;(t==="/dexter"||t==="/dexter/")&&Qt();let e=[],i=document.getElementById("windows-container");i&&i.setAttribute("data-count","0");let n=b=>{localStorage.setItem("dex_last_window",b)};function s(){for(;e.length>1;)e.shift().close(!0);let b=document.getElementById("windows-container"),f=document.querySelector("nav"),v=document.querySelector("footer"),y=window.location.pathname==="/"||window.location.pathname==="/index.html",d=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");b&&b.setAttribute("data-count",e.length.toString()),e.forEach(M=>{let B=document.getElementById(M.id);B&&B.classList.remove("hide-close")});let l=document.getElementById("dexter-menu-container"),k=document.getElementById("nav-window-switcher"),E=document.getElementById("settings-icon"),m=document.getElementById("docs-icon"),w=document.getElementById("close-all-windows"),A=window.innerWidth<880;if(!A){let M=document.getElementById("dexter-dropdown"),B=document.getElementById("dexter-menu-btn");M&&M.classList.remove("active"),B&&B.classList.remove("active"),b&&b.classList.remove("menu-open")}if(ke(e.length>0),e.length>0)if(v?.classList.add("hide"),w&&(w.style.display=A?"none":"block"),document.querySelector("main")?.style.setProperty("opacity","0","important"),document.body.style.overflow="hidden",f?.classList.add("window-open"),b&&(b.style.paddingTop="60px"),l&&(l.style.display=A?"flex":"none"),m&&(m.style.display=A?"block":"none"),E&&(E.style.display=A?"block":"none"),!A&&k){let M=e[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(M)?(k.innerHTML=`
                      <div class="nav-switch-btn ${M==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${M==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${M==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${M==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${M==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts")?.addEventListener("click",()=>{n("alerts-window"),o(p)}),document.getElementById("switch-events")?.addEventListener("click",()=>{n("events-window"),o(c)}),document.getElementById("switch-monitor")?.addEventListener("click",()=>{n("monitor-window"),o(T)}),document.getElementById("switch-contacts")?.addEventListener("click",()=>{n("contacts-window"),o(g)}),document.getElementById("switch-workspace")?.addEventListener("click",()=>{n("workspace-window"),o(x)})):k.innerHTML=""}else k&&(k.innerHTML="");else f?.classList.remove("window-open"),w&&(w.style.display="none"),b&&(b.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),oe()||(document.body.style.overflow=""),y||d?v?.classList.remove("hide"):v?.classList.add("hide"),l&&(l.style.display="flex"),m&&(m.style.display="block"),E&&(E.style.display="block"),k&&(k.innerHTML="");Ie()}function o(b){if(b.isOpen()){b.close();return}for(;e.length>0;)e.pop().close(!0);e.push(b),b.open(),s()}function a(){[...e].forEach(f=>f.close()),e=[]}window.addEventListener("resize",s);let p=le({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Et(),onOpen:()=>me(),onClose:()=>{let b=e.indexOf(p);b>-1&&e.splice(b,1),s()}}),c=le({id:"events-window",title:"Events",icon:"bx-calendar-event",content:tt(),onOpen:()=>{c.setContent(tt()),ue()},onClose:()=>{let b=e.indexOf(c);b>-1&&e.splice(b,1),s()}}),g=le({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:_t(),onOpen:()=>et(),onClose:()=>{let b=e.indexOf(g);b>-1&&e.splice(b,1),s()}}),T=le({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-component",title:"Processes",content:qt()},{icon:"bxs-zap",title:"Agents",content:jt()},{icon:"bx-globe",title:"Web",content:Vt()},{icon:"bxs-server",title:"Services",content:Ut()},{icon:"bxs-terminal",title:"Logs",content:Jt()},{icon:"bxs-hdd",title:"Hardware",content:Ft()}].filter(b=>z()?b.title!=="Hardware"&&b.title!=="Logs":!0),onOpen:()=>{re(),Te(),Kt(),De()},onClose:()=>{let b=e.indexOf(T);b>-1&&e.splice(b,1),s()}}),x=le({id:"workspace-window",title:"Workspace",icon:"bx-brain",tabs:[{icon:"bx-map-alt",title:"Roadmap",content:Ct()},{icon:"bx-task",title:"Tasks",content:It()}],onOpen:()=>Qe(),onClose:()=>{let b=e.indexOf(x);b>-1&&e.splice(b,1),s()}}),h=le({id:"settings-window",title:"Settings",icon:"bx-cog",content:Ge(),onOpen:()=>{h.setContent(Ge()),it(h)},onClose:()=>{let b=e.indexOf(h);b>-1&&e.splice(b,1),s()}});window.dexter||(window.dexter={}),window.dexter.viewEvent=b=>{c.isOpen()||o(c),setTimeout(()=>{let f=document.querySelector(`.event-item[data-event-id="${b}"]`);f&&(f.scrollIntoView({behavior:"smooth",block:"center"}),f.classList.add("flash-highlight"),f.classList.contains("expanded")||f.click(),setTimeout(()=>f.classList.remove("flash-highlight"),2e3))},500)},window.dexter.viewAlert=b=>{p.isOpen()||o(p),setTimeout(()=>{let f=document.querySelector(`.event-item[data-alert-id="${b}"]`);f&&(f.scrollIntoView({behavior:"smooth",block:"center"}),f.classList.add("flash-highlight"),f.classList.contains("expanded")||f.click(),setTimeout(()=>f.classList.remove("flash-highlight"),2e3))},500)};let r=()=>{let b=document.getElementById("dexter-dropdown"),f=document.getElementById("dexter-menu-btn");b&&f&&(b.classList.remove("active"),f.classList.remove("active"),window.innerWidth<880&&document.getElementById("windows-container")?.classList.remove("menu-open"))};(()=>{let b=document.getElementById("dexter-menu-btn"),f=document.getElementById("settings-icon"),v=document.getElementById("docs-icon"),y=document.getElementById("close-all-windows"),d=document.getElementById("nav-left-container"),l=document.getElementById("dexter-dropdown"),k=document.getElementById("windows-container");b&&l&&(b.onclick=m=>{m.stopPropagation();let w=window.innerWidth<880;if(w)l.style.top="",l.style.left="",l.style.right="",l.style.transform="";else{let M=b.getBoundingClientRect(),N=document.querySelector("nav").getBoundingClientRect(),q=220,Y=10,$=M.left+M.width/2-q/2,S=N.right-10;$+q>S&&($=S-q),$<10&&($=10),l.style.top=N.bottom+Y+"px",l.style.left=$+"px",l.style.right="auto",l.style.transform="none"}l.classList.toggle("active"),b.classList.toggle("active");let A=l.classList.contains("active");if(w){let M=document.querySelector("nav");A?(document.querySelector("footer")?.classList.add("hide"),document.querySelector("main")?.style.setProperty("opacity","0","important"),M?.classList.add("window-open"),k?.classList.add("menu-open"),ke(!0)):(k?.classList.remove("menu-open"),e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),M?.classList.remove("window-open"),oe()||ke(!1)))}}),f&&(f.onclick=m=>{m.stopPropagation(),o(h)}),v&&(v.onclick=m=>{m.stopPropagation(),window.location.href="/docs"}),y&&(y.onclick=m=>{m.stopPropagation(),a()});let E=(m,w,A)=>{let M=document.getElementById(m);M&&(M.onclick=B=>{B.stopPropagation(),r(),A&&n(A),o(w)})};E("alerts-menu-item",p,"alerts-window"),E("events-menu-item",c,"events-window"),E("monitor-menu-item",T,"monitor-window"),E("contacts-menu-item",g,"contacts-window"),E("workspace-menu-item",x,"workspace-window"),d&&(d.onclick=m=>{if(m.stopPropagation(),l&&l.classList.contains("active")){r(),window.innerWidth<880&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),oe()||ke(!1));return}if(e.length>0)a();else{let w=window.location.pathname;if(!(w==="/"||w==="/index.html")){let M=w.endsWith("/")&&w.length>1?w.slice(0,-1):w;if(M.includes("/docs/page/")){window.location.href="/";return}let B=M.split("/");B.pop();let N=B.join("/")||"/";window.location.href=N}}}),document.addEventListener("click",()=>{let m=window.innerWidth<880;l&&l.classList.contains("active")&&(r(),m&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),oe()||ke(!1)))}),l&&(l.onclick=m=>m.stopPropagation())})();let L=window.location.pathname==="/"||window.location.pathname==="/index.html",I=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!L&&!I&&document.querySelector("footer")?.classList.add("hide"),z()||setInterval(()=>{c.isOpen()&&ue(),p.isOpen()?me():Ze()},1e3),setInterval(()=>{z()&&(p.isOpen()?me():Ze()),x.isOpen()&&Qe(),z()&&c.isOpen()&&ue(),T.isOpen()&&Wt()},5e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",es):es();})();
