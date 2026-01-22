"use strict";(()=>{function dt(){if(!document.querySelector(".grid-overlay")){let t=document.createElement("div");t.className="grid-overlay",document.body.prepend(t)}}function pt(){let t=window.location.pathname,e=t==="/"||t==="/index.html",a=`
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
    
    `,r=document.createElement("nav");r.innerHTML=a,document.body.prepend(r);let l=document.createElement("div");l.id="dexter-dropdown",l.className="dexter-dropdown",l.innerHTML=`
        <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
        <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
        <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
        <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
        <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
    `,document.body.appendChild(l)}function $e(t){let e=window.location.pathname,o=e==="/"||e==="/index.html",i=document.getElementById("nav-chevron"),a=document.querySelector(".nav-left");!i||!a||(t||!o?(i.style.display="block",a.style.cursor="pointer",a.classList.add("recording"),a.onmouseenter=()=>{i.style.transform="translateX(-3px)"},a.onmouseleave=()=>{i.style.transform="translateX(0)"}):(i.style.display="none",a.style.cursor="default",a.classList.remove("recording"),a.onmouseenter=null,a.onmouseleave=null))}function mt(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var ut=1e3;function ue(t){let e=null,o=t.onClose||null,i=t.onOpen||null;function a(){e&&(e.style.zIndex=(++ut).toString())}function r(){if(e){e.classList.add("open"),a(),window.addEventListener("resize",l),i&&setTimeout(i,10);return}let m=document.getElementById("windows-container");m||(m=document.createElement("div"),m.id="windows-container",m.className="windows-container",document.body.appendChild(m)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=(++ut).toString(),e.addEventListener("mousedown",a);let x=t.icon||"bx-window",n="",u="",T,z='<div class="window-bottom-spacer"></div>';t.tabs&&t.tabs.length>0?(n=`<div class="tab-bar">${t.tabs.map((h,y)=>{let I=h.icon?`<i class="bx ${h.icon}"></i>`:`<span class="tab-glyph">${h.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${y===0?"active":""}" data-tab-index="${y}">
                        ${I}
                        <span class="tab-title">${h.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${y}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,T=`<div class="window-content">${t.tabs.map((h,y)=>`<div class="tab-content ${y===0?"active":""}" data-tab-content="${y}">${h.content}${z}</div>`).join("")}</div>`):(t.title&&(u=`<div class="window-title">${t.title}</div>`),T=`<div class="window-content">${t.content||""}${z}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${x}"></i>
                ${n}
                ${u}
                <i class="bx bx-x window-close"></i>
            </div>
            ${T}
        `,m.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",v=>{v.stopPropagation(),c()}),window.addEventListener("resize",l),t.tabs&&e.querySelectorAll(".tab").forEach(v=>{v.addEventListener("click",()=>{if(!e)return;let d=v.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(y=>y.classList.remove("active")),v.classList.add("active"),e.querySelectorAll(".tab-content").forEach(y=>y.classList.remove("active"));let h=e.querySelector(`.tab-content[data-tab-content="${d}"]`);h&&h.classList.add("active"),f(v,e)})}),setTimeout(()=>{e&&e.classList.add("open"),i&&i()},10)}function l(){if(!e||!e.classList.contains("open"))return;let m=e.querySelector(".tab.active");m&&f(m,e)}function f(m,x){setTimeout(()=>{let n=x.querySelector(".tab-bar");if(!n)return;let u=Array.from(n.querySelectorAll(".tab")),T=u.indexOf(m),z=n.clientWidth,v=u[Math.max(0,T-2)],d=u[Math.min(u.length-1,T+2)],h=n,y=v.offsetLeft-h.offsetLeft-25,s=d.offsetLeft+d.offsetWidth-h.offsetLeft+25-y,g=s<=z?y-(z-s)/2:m.offsetLeft-h.offsetLeft-z/2+m.offsetWidth/2;n.scrollTo({left:g,behavior:"smooth"})},350)}function c(m=!1){e&&(window.removeEventListener("resize",l),m?(e.remove(),e=null):(e.classList.remove("open"),o&&o(),setTimeout(()=>{e?.remove(),e=null},400)))}function b(m){t.content=m;let x=e?.querySelector(".window-content");x&&(x.innerHTML=m)}function C(){return!!(e&&e.classList.contains("open"))}return{open:r,close:c,setContent:b,isOpen:C,focus:a,id:t.id}}var ft="easter_theme",ee={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function Xe(){return localStorage.getItem(ft)||ee.DARK}function gt(t){if(!Object.values(ee).includes(t))throw new Error("Invalid theme");localStorage.setItem(ft,t),bt(t)}function bt(t){let e=document.body;Object.values(ee).forEach(r=>{e.classList.remove(`theme-${r}`)}),e.classList.add(`theme-${t}`);let o=document.querySelector('meta[name="theme-color"]');o||(o=document.createElement("meta"),o.name="theme-color",document.getElementsByTagName("head")[0].appendChild(o));let i={[ee.DARK]:"#050507",[ee.LIGHT]:"#FFFFFF",[ee.LEGACY]:"#000000"},a=i[t]||i[ee.DARK];if(o.setAttribute("content",a),!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}e.classList.add("is-animated")}function vt(){let t=Xe();bt(t)}function J(t,e,o=null,i="default"){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",l=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder" data-placeholder-id="${i}"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${e}</p>${l}</div>`}function j(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function te(t,e){let o=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!o)return;if(!e){o.textContent="Last updated: never";return}let i=Date.now(),a=Math.floor((i-e)/1e3),r;a<60?r=`${a}s ago`:a<3600?r=`${Math.floor(a/60)}m ago`:r=`${Math.floor(a/3600)}h ago`,o.textContent=`Last updated: ${r}`}var ms=0;function qe(t,e){let o=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!o)return;let i=o.querySelector(".notification-badge");i&&(e>0?(i.textContent=e>9?"9+":e.toString(),i.style.display="flex"):i.style.display="none")}var ae=0,oe=0;function xt(t){ae=t,Le()}function ht(t){oe=t,Le()}function Le(){let t=ae+oe;ms=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let o=document.getElementById("alerts-menu-item");if(o){let l=o.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="auto",o.appendChild(l)),l.textContent=ae>9?"9+":ae.toString(),l.style.display=ae>0?"flex":"none"}let i=document.getElementById("workspace-menu-item");if(i){let l=i.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="auto",i.appendChild(l)),l.textContent=oe>9?"9+":oe.toString(),l.style.display=oe>0?"flex":"none"}let a=document.getElementById("switch-alerts");if(a){let l=a.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="8px",a.appendChild(l)),l.textContent=ae>9?"9+":ae.toString(),l.style.display=ae>0?"flex":"none"}let r=document.getElementById("switch-workspace");if(r){let l=r.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="8px",r.appendChild(l)),l.textContent=oe>9?"9+":oe.toString(),l.style.display=oe>0?"flex":"none"}}function et(){let t=document.getElementById("alerts-list");if(!t)return;ae=t.querySelectorAll(".alert-unread:not(.priority-low)").length,Le()}function wt(){let t=document.getElementById("blueprints-list");if(!t)return;oe=t.querySelectorAll(".event-item:not(.blueprint-approved)").length,Le()}function us(){return"https://event.easter.company"}function fs(){return"https://discord.easter.company"}var gs="http://127.0.0.1:8100",bs="http://127.0.0.1:8300",vs={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function Ue(t){let e=j(t);if(!e)return e;e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(a,r)=>{let l=vs[r];return l?`<span class="${l}">`:""});let o=(e.match(/<span/g)||[]).length,i=(e.match(/<\/span/g)||[]).length;return o>i&&(e+="</span>".repeat(o-i)),e}function le(t){if(!t)return"";let e=j(t);return e&&(e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^<strong>(.*)<\/strong>$/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(o,i)=>{let a=i.split("|").map(r=>r.trim());return a.every(r=>r.match(/^:?-+:?$/))?"":`<div class="md-table-row">${a.map(r=>`<span class="md-table-cell">${r}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e)}function ie(){let t=document.getElementById("windows-container"),e=t?parseInt(t.getAttribute("data-count")||"0"):0,o=document.querySelector(".profile-overlay.active"),i=document.querySelector("#cli-terminal-overlay.active");return e>0||!!o||!!i}var ys="https://sterling-javelin-12539.upstash.io",xs="AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw";function N(){return window.location.hostname.includes("easter.company")}var F=null,re={lastDashboard:0,lastFrontend:0},Qe=!1,Ct=0,Et="dex_dashboard_snapshot";function hs(){let t=localStorage.getItem(Et);if(t)try{let e=JSON.parse(t);F=e,re.lastDashboard=e.timestamp?e.timestamp*1e3:0}catch{F=null}}async function yt(){if(!(!N()||Qe)){Qe=!0,Ct=Math.floor(Date.now()/1e3);try{let t=await Es("GET","state:dashboard:full");if(t)try{let e=JSON.parse(t);F=e,re.lastDashboard=e.timestamp?e.timestamp*1e3:Date.now(),re.lastFrontend=Date.now(),localStorage.setItem(Et,JSON.stringify(e))}catch(e){console.error("Failed to parse dashboard snapshot:",e)}}finally{Qe=!1}}}function ws(){if(!F||!F.agent_status)return;let t=F.agent_status;t.system&&typeof t.system.state_time=="number"&&(t.system.state_time+=1)}async function Cs(){if(!N())return;hs();let t=Math.floor(Date.now()/1e3),e=F?t-F.timestamp:1/0;(!F||e>120)&&await yt(),setInterval(()=>{let o=new Date,i=Math.floor(Date.now()/1e3),a=F?i-F.timestamp:1/0,r=i-Ct,l=o.getSeconds()===59,f=a>300,c=r>60;(l&&c||f&&c)&&yt(),ws()},1e3)}N()&&Cs();async function Es(t,...e){try{let i=await(await fetch(ys,{method:"POST",headers:{Authorization:`Bearer ${xs}`},body:JSON.stringify([t,...e])})).json();if(i.error)throw new Error(i.error);return i.result}catch(o){return console.error("Upstash Error:",o),null}}var Se=null,ke=null,Oe=!1,je=!1;async function D(t,e={}){if(N()){if(!F)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t.startsWith("/system_monitor")||t.startsWith("/system/status"))return new Response(JSON.stringify(F.monitor),{status:200});if(t.startsWith("/system/options"))return new Response(JSON.stringify(F.options||{}),{status:200});if(t.startsWith("/processes"))return new Response(JSON.stringify(F.processes),{status:200});if(t.startsWith("/events")){let a=new URLSearchParams(t.split("?")[1]||""),r=a.get("type")||a.get("event.type"),l=a.get("category"),f=a.get("order")||"desc",c=[];return r==="system.notification.generated"?c=[...F.alerts||[]]:r==="system.blueprint.generated"||t.includes("event.type=system.blueprint.generated")?c=[...F.blueprints||[]]:l==="messaging"?c=[...F.messaging_events||[]]:l==="system"?c=[...F.system_events||[]]:l==="cognitive"?c=[...F.cognitive_events||[]]:l==="moderation"?c=[...F.moderation_events||[]]:c=[...F.events||[]],f==="asc"?c.sort((b,C)=>b.timestamp-C.timestamp):c.sort((b,C)=>C.timestamp-b.timestamp),new Response(JSON.stringify({events:c,count:c.length}),{status:200})}if(t.startsWith("/logs"))return new Response(JSON.stringify([]),{status:200});if(t.startsWith("/system/hardware"))return new Response(JSON.stringify({}),{status:200});if(t.startsWith("/agent/status")||t.startsWith("/guardian/status"))return new Response(JSON.stringify(F.agent_status||{}),{status:200});if(t.startsWith("/profile/")){let a=t.split("/")[2],r=F.profiles?F.profiles[a]:null;return r?new Response(JSON.stringify(r),{status:200}):new Response(JSON.stringify({error:"Profile not found"}),{status:404})}return t.startsWith("/web/history")?new Response(JSON.stringify(F.web_history||[]),{status:200}):t.startsWith("/chores")?new Response(JSON.stringify(F.chores||[]),{status:200}):new Response(JSON.stringify({error:"Not available in public demo"}),{status:404})}if(Se)try{let a=await fetch(Se+t,e);if(a.ok)return a;Se=null}catch{Se=null}let o=us(),i=gs;window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&!N()&&(i=`http://${window.location.hostname}:8100`);try{let a=await fetch(o+t,e);if(a.ok)return Se=o,Oe&&(console.log("\u2728 Production event service restored."),Oe=!1),a;throw new Error("Primary failed")}catch{Oe||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${i}`),Oe=!0);try{let r=await fetch(i+t,e);if(r.ok)return Se=i,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function fe(t,e={}){if(N()){if(!F)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t==="/contacts")return new Response(JSON.stringify(F.contacts||{members:[]}),{status:200});if(t.startsWith("/member/")){let a=t.split("/")[2],r=(F.contacts?.members||[]).find(l=>l.id===a);return r?new Response(JSON.stringify(r),{status:200}):new Response(JSON.stringify({error:"Member not found"}),{status:404})}return new Response(JSON.stringify({error:"Discord API not public"}),{status:404})}if(ke)try{let a=await fetch(ke+t,e);if(a.ok)return a;ke=null}catch{ke=null}let o=fs(),i=bs;window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"&&!N()&&(i=`http://${window.location.hostname}:8300`);try{let a=await fetch(o+t,e);if(a.ok)return ke=o,je&&(console.log("\u2728 Production discord service restored."),je=!1),a;throw new Error("Primary failed")}catch{je||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${i}`),je=!0);try{let r=await fetch(i+t,e);if(r.ok)return ke=i,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Tt=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-bell' style="color: #bb86fc;"></i>
        <h2>Alerts</h2>
        <div id="alerts-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button id="alerts-read-all" class="notif-action-btn" title="Read All"><i class='bx bx-check-double'></i></button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="alerts-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
            <button id="alerts-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
            <button id="alerts-clear" class="notif-action-btn danger" style="${N()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
        </div>
    </div>
    <div id="alerts-list" class="alerts-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading alerts...</p>
        </div>
    </div>
`,Fe=null,ge=new Set,Je=[];async function pe(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Ts(),t&&(e.innerHTML="<p>Updating...</p>");let o="/events?ml=1000&format=json&event.type=system.notification.generated";try{let i=await D(o);if(!i.ok)throw new Error("Service is offline or unreachable.");let r=(await i.json()).events||[];Fe=Date.now(),te(0,Fe);let l=Date.now(),f=24*60*60*1e3,c=r.filter(d=>{let h=localStorage.getItem(`alert_read_ts_${d.id}`);if(!h)return!0;let y=parseInt(h);return l-y<f});c.sort((d,h)=>{let y=w=>{let p=w.event;if(typeof p=="string")try{p=JSON.parse(p)}catch{return"low"}return(p.priority||"low").toLowerCase()},I=w=>w==="critical"?4:w==="high"?3:w==="medium"?2:1,s=I(y(d)),g=I(y(h));return s!==g?g-s:h.timestamp-d.timestamp}),Je=c;let b=d=>{let h=d.event;if(typeof h=="string")try{h=JSON.parse(h)}catch{return"low"}return(h.priority||"low").toLowerCase()},C=[];if(c.length===0)C.push({id:"placeholder-empty",type:"placeholder",message:"No alerts, all systems nominal"});else{let h=new Set(c.map(I=>b(I))).size>1,y=null;c.forEach(I=>{let s=b(I);h&&s!==y&&(C.push({id:`divider-${s}`,type:"divider",label:s.toUpperCase()}),y=s),C.push(I)})}t&&(e.innerHTML="");let m=d=>{let h=d.event;if(typeof h=="string")try{h=JSON.parse(h)}catch{return null}let y=(h.title||"Untitled Alert").trim(),I=(h.body||"No description provided.").trim(),s=h.summary||"",g=h.content||"",w=h.protocol||"",p=(h.priority||"low").toLowerCase(),$=!!h.alert,A=(h.category||"system").trim(),S=h.related_event_ids||[],B=h.audit_event_id,q=!!localStorage.getItem(`alert_read_ts_${d.id}`),V=new Date(d.timestamp*1e3),H=V.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),E=V.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),L=q?"event-border-grey":"event-border-blue";!q&&$&&(L="event-border-red"),q&&(p==="high"||p==="critical")?L="event-border-red":q&&p==="medium"&&(L="event-border-orange");let M=q?"alert-read":"alert-unread",O=ge.has(d.id),P=O?"expanded":"",G=O?"display: block;":"display: none;",k="",_="";S.length>0&&(_=`
            <div style="flex: 1; min-width: 150px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    ${S.map(de=>`<a href="#" onclick="window.dexter.viewEvent('${de}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${de.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let R="";B&&(R=`
            <div style="flex: 1; min-width: 120px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Audit</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    <a href="#" onclick="window.dexter.viewEvent('${B}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3); white-space: nowrap;">${B.substring(0,8)}...</a>
                </div>
            </div>`);let U="";w&&(U=`
            <div style="flex: 1; min-width: 100px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${w}</div>
            </div>`);let Y="";g?Y=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="md-para" style="color: #ddd; font-size: 0.85em; white-space: pre-wrap; line-height: 1.6; text-align: left;">${le(g)}</div>
            </div>
        `:Y=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="md-para" style="color: #fff; white-space: pre-wrap; line-height: 1.6; text-align: left;">${le(I)}</div>
            </div>
        `,k=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${h.related_services&&h.related_services.length>0?h.related_services.join(", "):h.related||"SYSTEM"}</div>
                    </div>
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${A}</div>
                    </div>
                    ${U}
                    ${R}
                    ${_}
                </div>

                ${Y}
            `;let K=document.createElement("div");K.className=`event-item notification-item ${L} ${M} ${P} cursor-pointer priority-${p}`,K.dataset.alertId=d.id,K.onclick=function(de){let Q=this;if(Q.classList.contains("expanded")){Q.classList.remove("expanded"),ge.delete(d.id);let Be=Q.querySelector(".event-details");Be&&(Be.style.display="none")}else{Q.classList.add("expanded"),ge.add(d.id);let Be=Q.querySelector(".event-details");if(Be&&(Be.style.display="block"),!localStorage.getItem(`alert_read_ts_${d.id}`)){localStorage.setItem(`alert_read_ts_${d.id}`,Date.now().toString()),Q.classList.add("alert-read"),Q.classList.remove("alert-unread"),Q.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ye="event-border-grey";p==="high"||p==="critical"?Ye="event-border-red":p==="medium"&&(Ye="event-border-orange"),Q.classList.add(Ye),et()}}};let Ee=`${w?w.toUpperCase():"GUARDIAN"} ALERT: ${s||y}`,Te={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[A]||"bx-bell",Ze=p==="high"||p==="critical"?"#ff4d4d":p==="medium"?"#ffa500":"#888";K.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${H}</span>
                    <span class="event-date">${E}</span>
                </div>
                <div class="event-icon"><i class='bx ${Te}'></i></div>
                <div class="event-content" style="text-align: left;">
                    <div class="event-service">
                        DEXTER <span class="alert-badge" style="color: ${Ze}; font-size: 0.8em; margin-left: 5px;">[${p.toUpperCase()}]</span>
                    </div>
                    <div class="event-message">${le(Ee)}</div>
                    <div class="event-details" style="${G}">
                        ${k}
                    </div>
                </div>
            `;let Pe=K.querySelector(".event-details");Pe&&Pe.addEventListener("click",de=>{de.stopPropagation()});let ct=K.querySelector(".close-details-btn");return ct&&ct.addEventListener("click",de=>{de.stopPropagation(),K.classList.remove("expanded");let Q=K.querySelector(".event-details");Q&&(Q.style.display="none"),ge.delete(d.id)}),K},x=d=>{let h=document.createElement("div");h.className="notification-divider",h.dataset.alertId=d.id;let y="#888888";return d.label==="CRITICAL"?y="#ff4d4d":d.label==="HIGH"?y="#ff8888":d.label==="MEDIUM"&&(y="#ffa500"),h.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,h.innerHTML=`<span style="white-space: nowrap;">${d.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,h},n=d=>{let h=document.createElement("div");h.innerHTML=J("empty",d.message,null,d.id);let y=h.firstElementChild;return y.dataset.alertId=d.id,y},u=Array.from(e.children),T=new Map(u.map(d=>[d.dataset.alertId,d])),z=new Set(C.map(d=>d.id));u.forEach(d=>{let h=d.dataset.alertId;(!h||!z.has(h))&&d.remove()});let v=null;C.forEach((d,h)=>{let y=T.get(d.id);if(!y||t){if(y&&y.remove(),d.type==="divider")y=x(d);else if(d.type==="placeholder")y=n(d);else{let I=m(d);if(!I)return;y=I}if(!y)return}h===0?e.firstElementChild!==y&&e.prepend(y):v&&v.nextElementSibling!==y&&v.after(y),v=y}),Fe=Date.now(),te(0,Fe),et()}catch(i){console.error("Error fetching alerts:",i),e.children.length===0&&(e.innerHTML=J("offline","Failed to load alerts.","The event service may be offline."))}}function Ts(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),o=document.getElementById("alerts-close-all"),i=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Je.forEach(a=>{localStorage.getItem(`alert_read_ts_${a.id}`)||localStorage.setItem(`alert_read_ts_${a.id}`,Date.now().toString())}),pe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Je.forEach(a=>{ge.add(a.id),localStorage.getItem(`alert_read_ts_${a.id}`)||localStorage.setItem(`alert_read_ts_${a.id}`,Date.now().toString())}),pe(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{ge.clear(),pe(!0)},o.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){i.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await D("/events?type=system.notification.generated",{method:"DELETE"});let a=Date.now()-48*60*60*1e3;Je.forEach(r=>{localStorage.setItem(`alert_read_ts_${r.id}`,a.toString())}),ge.clear(),pe(!0)}catch(a){console.error("Failed to clear alerts:",a)}finally{i.innerHTML="<i class='bx bx-trash'></i> Clear"}}},i.dataset.listenerAttached="true")}async function tt(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await D(t);if(!e.ok)return;let i=(await e.json()).events||[],a=0;i.forEach(r=>{let l=r.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}if((l.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${r.id}`)||a++}),xt(a)}catch{}}var $t=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${N()?"display: none;":""}" title="New Idea"><i class='bx bx-plus'></i></button>
    <button id="roadmap-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
    <button id="roadmap-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
  </div>
`,St=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,be=new Set,kt=[],Me=null;async function ve(t=!1){let e=document.getElementById("roadmap-list");if(e){$s();try{let o=await D("/roadmap");if(!o.ok)throw new Error("Offline");let i=await o.json();kt=i;let a=m=>{let x=be.has(m.id),n=m.state==="published",u=m.state==="consumed",T="event-border-grey";n&&(T="event-border-blue"),u&&(T="event-border-purple");let v=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),d=document.createElement("div");d.className=`event-item notification-item ${T} cursor-pointer ${x?"expanded":""}`,d.dataset.itemId=m.id,d.onclick=I=>{if(I.target.closest("button"))return;if(d.classList.contains("expanded")){d.classList.remove("expanded");let g=d.querySelector(".event-details");g&&(g.style.display="none"),be.delete(m.id)}else{d.classList.add("expanded");let g=d.querySelector(".event-details");g&&(g.style.display="block"),be.add(m.id)}};let h=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;d.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${v.split(",")[1]}</span>
          <span class="event-date">${v.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${h}</div>
          <div class="event-message" style="white-space: pre-wrap;">${j(m.content)}</div>
          <div class="event-details" style="${x?"display: block;":"display: none;"} ">
            ${N()?"":`
            <div class="event-details-header" style="margin-bottom: 15px;">
              <h5 style="margin: 0; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Item Controls</h5>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${u?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${n?"bx-pause":"bx-rocket"}'></i> ${n?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            `}
            ${u?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(m.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let y=d.querySelector(".event-details");return y&&y.addEventListener("click",I=>{I.stopPropagation()}),d.querySelector(".edit-btn")?.addEventListener("click",()=>Ss(m)),d.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>ks(m)),d.querySelector(".delete-btn")?.addEventListener("click",()=>Ls(m.id)),d.querySelector(".close-details-btn")?.addEventListener("click",I=>{I.stopPropagation(),d.classList.remove("expanded");let s=d.querySelector(".event-details");s&&(s.style.display="none"),be.delete(m.id)}),d},r=m=>{let x=document.createElement("div");x.innerHTML=J("empty",m.message,m.action,m.id);let n=x.firstElementChild;return n.dataset.itemId=m.id,n},l=[];!i||i.length===0?l.push({id:"placeholder-empty",type:"placeholder",message:"Your roadmap is empty.",action:N()?"Dexter is currently idle.":`Click "New Idea" to start planning Dexter's future.`}):i.forEach(m=>l.push({...m,type:"item"}));let f=Array.from(e.children),c=new Map(f.map(m=>[m.dataset.itemId,m])),b=new Set(l.map(m=>m.id));f.forEach(m=>{let x=m.dataset.itemId;(!x||!b.has(x))&&m.remove()}),t&&(e.innerHTML="");let C=null;l.forEach((m,x)=>{let n=c.get(m.id);(!n||t)&&(n&&n.remove(),m.type==="placeholder"?n=r(m):n=a(m),!n)||(x===0?e.firstElementChild!==n&&e.prepend(n):C&&C.nextElementSibling!==n&&C.after(n),C=n)})}catch{e.children.length===0&&(e.innerHTML=J("offline","Failed to load roadmap.","The event service may be offline."))}}}function $s(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),o=document.getElementById("roadmap-cancel"),i=document.getElementById("roadmap-expand-all"),a=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Me=null;let r=document.getElementById("roadmap-editor-input");r&&(r.value="");let l=document.getElementById("roadmap-editor-container");l&&(l.style.display="block")},t.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{let r=document.getElementById("roadmap-editor-container");r&&(r.style.display="none"),Me=null},o.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input"),l=r?r.value:"";if(!l.trim())return;let f=Me?`/roadmap/${Me}`:"/roadmap",c=Me?"PATCH":"POST";try{await D(f,{method:c,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:l})});let b=document.getElementById("roadmap-editor-container");b&&(b.style.display="none"),ve(!0)}catch(b){console.error(b)}},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{kt.forEach(r=>be.add(r.id)),ve(!0)},i.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{be.clear(),ve(!0)},a.dataset.listenerAttached="true")}function Ss(t){Me=t.id;let e=document.getElementById("roadmap-editor-input");e&&(e.value=t.content);let o=document.getElementById("roadmap-editor-container");o&&(o.style.display="block",o.scrollIntoView({behavior:"smooth"}))}async function ks(t){let e=t.state==="published"?"draft":"published";try{await D(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),ve(!0)}catch(o){console.error(o)}}async function Ls(t){if(confirm("Delete this roadmap item?"))try{await D(`/roadmap/${t}`,{method:"DELETE"}),be.delete(t),ve(!0)}catch(e){console.error(e)}}var Mt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
        <button id="blueprints-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
        <button id="blueprints-clear" class="notif-action-btn danger" style="${N()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
    </div>
`,It=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,Lt=null,ye=new Set,At=[];async function xe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Ms();let o="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let i=await D(o);if(!i.ok)throw new Error("Service is offline or unreachable.");let r=(await i.json()).events||[];At=r,Lt=Date.now(),te(2,Lt);let l=n=>{let u=n.event;if(typeof u=="string")try{u=JSON.parse(u)}catch{return null}let T=(u.title||"Untitled Blueprint").trim(),z=(u.summary||u.body||"No summary provided.").trim(),v=(u.content||"").trim(),d=(u.category||"architecture").trim(),h=(u.related_services||u.affected_services||[]).map(k=>k.trim()),y=(u.implementation_path||[]).map(k=>k.trim()),I=u.source_event_ids||[],s=u.approved===!0,g=new Date(n.timestamp*1e3),w=g.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),p=g.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),$=ye.has(n.id),A=$?"display: block;":"display: none;",S=document.createElement("div");S.className=`event-item notification-item event-border-purple cursor-pointer ${$?"expanded":""} ${s?"blueprint-approved":""}`,S.dataset.blueprintId=n.id,s&&(S.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",S.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let W=s?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[d]||"bx-paint";S.onclick=function(k){let _=this;if(_.classList.contains("expanded")){_.classList.remove("expanded"),ye.delete(n.id);let U=_.querySelector(".event-details");U&&(U.style.display="none")}else{_.classList.add("expanded"),ye.add(n.id);let U=_.querySelector(".event-details");U&&(U.style.display="block")}};let q="";y.length>0&&(q=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${y.map(k=>`<li style="margin-bottom: 5px;">${j(k)}</li>`).join("")}</ul></div>
                    </div>
                `);let V="";I.length>0&&(V=`
                    <div class="blueprint-source" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Source Alerts</h5>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${I.map(k=>`
                                <a href="#" onclick="window.dexter.viewAlert('${k}'); return false;" style="color: #03dac6; text-decoration: none; font-size: 0.75em; font-family: 'JetBrains Mono', monospace; padding: 4px 8px; background: rgba(3, 218, 198, 0.05); border: 1px solid rgba(3, 218, 198, 0.1); border-radius: 4px;">
                                    <i class='bx bx-link-external'></i> ${k.substring(0,8)}...
                                </a>
                            `).join("")}
                        </div>
                    </div>
                `);let H=h.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${h.join(", ")}</span></div>`:"<div></div>",E=N(),L=s?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${H}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s; display: ${E?"none":"block"};"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${H}
                    <div style="display: ${E?"none":"flex"}; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;S.innerHTML=`
                ${s?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${w}</span>
                    <span class="event-date">${p}</span>
                </div>
                <div class="event-icon" style="${s?"color: #03dac6;":""}"><i class='bx ${W}'></i></div>
                <div class="event-content">
                    <div class="event-service">${d.toUpperCase()}</div>
                    <div class="event-message">${T}</div>
                    <div class="event-details" style="${A}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px;">${j(z)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${j(v)}</div>
                        </div>
                        ${q}
                        ${V}
                        ${L}
                    </div>
                </div>
            `;let M=S.querySelector(".blueprint-approve-btn");M&&(M.onclick=async k=>{k.stopPropagation(),M.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await D(`/events/${n.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&xe(!0)}catch(_){console.error("Failed to approve blueprint:",_)}});let O=S.querySelector(".blueprint-delete-btn");O&&(O.onclick=async k=>{k.stopPropagation();let _=!s;O.innerHTML=_?"<i class='bx bx-loader-alt spin'></i> Declining...":"<i class='bx bx-loader-alt spin'></i> Deleting...";try{(await D(`/events/${n.id}`,{method:"DELETE"})).ok&&xe(!0)}catch(R){console.error("Failed to delete blueprint:",R)}});let P=S.querySelector(".event-details");P&&P.addEventListener("click",k=>{k.stopPropagation()});let G=S.querySelector(".close-details-btn");return G&&G.addEventListener("click",k=>{k.stopPropagation(),S.classList.remove("expanded");let _=S.querySelector(".event-details");_&&(_.style.display="none"),ye.delete(n.id)}),S},f=n=>{let u=document.createElement("div");u.innerHTML=J("empty",n.message,n.action,n.id);let T=u.firstElementChild;return T.dataset.blueprintId=n.id,T},c=[];r.length===0?c.push({id:"placeholder-empty",type:"placeholder",message:"No architectural blueprints generated yet.",action:"The Imaginator will synthesize these during system idle periods."}):r.forEach(n=>c.push({...n,type:"blueprint"})),t&&(e.innerHTML="");let b=Array.from(e.children),C=new Map(b.map(n=>[n.dataset.blueprintId,n])),m=new Set(c.map(n=>n.id));b.forEach(n=>{let u=n.dataset.blueprintId;(!u||!m.has(u))&&n.remove()});let x=null;c.forEach((n,u)=>{let T=C.get(n.id);(!T||t)&&(T&&T.remove(),n.type==="placeholder"?T=f(n):T=l(n),!T)||(u===0?e.firstElementChild!==T&&e.prepend(T):x&&x.nextElementSibling!==T&&x.after(T),x=T)}),qe(2,r.length),wt()}catch(i){console.error("Error fetching blueprints:",i),e.children.length===0&&(e.innerHTML=J("offline","Failed to load blueprints.","The event service may be offline."))}}async function Bt(){let t="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let e=await D(t);if(!e.ok)return;let i=(await e.json()).events||[],a=0;i.forEach(r=>{let l=r.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}l.approved!==!0&&a++}),ht(a)}catch{}}function Ms(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),o=document.getElementById("blueprints-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{At.forEach(i=>ye.add(i.id)),xe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ye.clear(),xe(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=async()=>{if(confirm("Are you sure you want to delete all UNAPPROVED blueprints?")){o.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await D("/events?type=system.blueprint.generated",{method:"DELETE"}),ye.clear(),xe(!0)}catch(i){console.error("Failed to clear blueprints:",i)}finally{o.innerHTML="<i class='bx bx-trash'></i> Clear"}}},o.dataset.listenerAttached="true")}var ce="STANDBY",Ht=null,Ie=[],X=null,We=null,_t=()=>`
    <div id="progress-view-root" class="progress-container">
        <!-- Initial render will happen here -->
        ${Dt()}
    </div>
  `;function Dt(){switch(ce){case"ACTIVE":return As();case"COMPLETED":return Bs();case"STANDBY":default:return Is()}}function Is(){return`
    <div class="progress-standby">
        <div class="radar-container">
            <!-- 
               These rings are now part of a PERSISTENT DOM. 
               They will never be removed/re-added while in Standby. 
            -->
            <div class="orbit-ring orbit-ring-1"></div>
            <div class="orbit-ring orbit-ring-2"></div>
            <div class="radar-brain"><i class='bx bx-brain'></i></div>
        </div>
        <h3 style="margin-bottom: 10px; color: #bb86fc; letter-spacing: 2px; text-transform: uppercase; font-size: 1em;">Cognitive Standby</h3>
        <p style="color: #888; max-width: 400px; font-size: 0.9em; line-height: 1.5;">
            Dexter is currently monitoring system health. <br>
            No active missions in progress.
        </p>
        <div style="margin-top: 30px; display: flex; gap: 15px;">
            <button class="notif-action-btn" onclick="window.dispatchEvent(new CustomEvent('dex-mock-start'))">
                <i class='bx bx-play'></i> Simulate Mission
            </button>
        </div>
    </div>
  `}function As(){let t=Ie.map(e=>`
    <div class="terminal-line">
        <span class="line-time">${e.time}</span>
        <span class="line-prefix">></span>
        <span class="line-msg">${j(e.msg)}</span>
    </div>
  `).join("");return`
    <div class="active-task-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <h4 style="margin: 0; font-size: 0.8em; text-transform: uppercase; letter-spacing: 2px; color: #bb86fc; text-align: left;">Active Mission</h4>
                <h2 id="active-task-title" style="margin: 5px 0 0 0; font-size: 1.2em; text-align: left;">${X?.title||"Processing..."}</h2>
            </div>
            <div class="pulse-indicator" style="background: #bb86fc; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px #bb86fc;"></div>
        </div>
        <div class="task-progress-bar">
            <div id="active-task-progress-fill" class="task-progress-fill" style="width: ${X?.progress||0}%"></div>
        </div>
        <div style="margin-top: 8px; display: flex; justify-content: space-between; font-size: 0.75em; font-family: 'JetBrains Mono'; color: #666;">
            <span>PHASE: IMPLEMENTATION</span>
            <span id="active-task-progress-text">${X?.progress||0}% COMPLETE</span>
        </div>
    </div>

    <div class="thinking-stream-container">
        <div class="terminal-header">
            <div class="terminal-controls">
                <div class="terminal-dot" style="background: #ff5f56;"></div>
                <div class="terminal-dot" style="background: #ffbd2e;"></div>
                <div class="terminal-dot" style="background: #27c93f;"></div>
            </div>
            <div style="font-family: 'JetBrains Mono'; font-size: 0.7em; color: rgba(255, 255, 255, 0.3); text-transform: uppercase;">dexter_mind_v2.0.sh</div>
        </div>
        <div id="terminal-output" class="terminal-content">
            ${t}
        </div>
    </div>

    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 10px;">
        <button class="notif-action-btn danger" onclick="window.dispatchEvent(new CustomEvent('dex-mock-stop'))">
            <i class='bx bx-square'></i> Terminate Mission
        </button>
    </div>
  `}function Bs(){return`
    <div class="mission-summary-card">
        <div class="success-icon-wrap">
            <div class="success-pulse-ring"></div>
            <i class='bx bx-check-double'></i>
        </div>
        
        <div style="text-align: center; margin-bottom: 30px;">
            <h4 style="margin: 0; color: #03dac6; text-transform: uppercase; letter-spacing: 3px; font-weight: 800;">Mission Accomplished</h4>
            <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #888;">The objective was successfully fulfilled by Dexter.</p>
        </div>

        <div class="summary-stat-grid">
            <div class="summary-stat">
                <span class="summary-stat-value">${We?.duration||"12m 4s"}</span>
                <span class="summary-stat-label">Duration</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">${We?.steps||"42"}</span>
                <span class="summary-stat-label">Steps</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">100%</span>
                <span class="summary-stat-label">Accuracy</span>
            </div>
        </div>

        <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 30px;">
            <h5 style="margin: 0 0 10px 0; font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px;">Final Result</h5>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-family: 'JetBrains Mono'; font-size: 0.9em; color: #bb86fc;">${We?.result||"Optimized Event Bus"}</span>
                <i class='bx bx-chevron-right' style="color: #444;"></i>
            </div>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center;">
            <button class="notif-action-btn" onclick="window.dispatchEvent(new CustomEvent('dex-mock-reset'))">
                <i class='bx bx-refresh'></i> Return to Standby
            </button>
        </div>
    </div>
  `}async function Ae(){let t=document.getElementById("progress-view-root");t&&(ce!==Ht&&(t.innerHTML=Dt(),Ht=ce),ce==="ACTIVE"&&Hs())}function Hs(){let t=document.getElementById("active-task-title"),e=document.getElementById("active-task-progress-fill"),o=document.getElementById("active-task-progress-text"),i=document.getElementById("terminal-output");if(t&&X&&(t.innerText=X.title),e&&X&&(e.style.width=`${X.progress}%`),o&&X&&(o.innerText=`${X.progress}% COMPLETE`),i){let a=i.children.length;if(Ie.length>a){for(let r=a;r<Ie.length;r++){let l=Ie[r],f=document.createElement("div");f.className="terminal-line",f.innerHTML=`
            <span class="line-time">${l.time}</span>
            <span class="line-prefix">></span>
            <span class="line-msg">${j(l.msg)}</span>
        `,i.appendChild(f)}i.scrollTop=i.scrollHeight}}}window.addEventListener("dex-mock-start",()=>{ce="ACTIVE",Ie=[{time:new Date().toLocaleTimeString(),msg:"Initializing cognitive engine..."},{time:new Date().toLocaleTimeString(),msg:"Connecting to event-service..."}],X={title:"Refactoring System Event Bus",progress:10},Ae();let t=0,e=setInterval(()=>{if(ce!=="ACTIVE"){clearInterval(e);return}t++,X.progress=Math.min(100,X.progress+Math.floor(Math.random()*15));let o=["Analyzing internal/bus.go...","Checking circular dependencies.","Optimizing channel throughput.","Writing unit tests for refactor.","Deploying to staging environment.","Verifying system integrity."];t<o.length&&Ie.push({time:new Date().toLocaleTimeString(),msg:o[t]}),X.progress>=100&&(ce="COMPLETED",We={duration:"1m 12s",steps:32,result:"Optimized Event Bus"},clearInterval(e)),Ae()},1500)});window.addEventListener("dex-mock-stop",()=>{ce="STANDBY",Ae()});window.addEventListener("dex-mock-reset",()=>{ce="STANDBY",Ae()});var zt=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px; align-items: center;">
    <select id="task-filter-owner" class="task-form-select" style="padding: 4px 10px; font-size: 0.75em; height: 32px; border-color: rgba(255,255,255,0.05);">
        <option value="all">All Owners</option>
    </select>
    <button id="create-chore-btn" class="notif-action-btn" style="${N()?"display: none;":""}" title="New Task"><i class='bx bx-plus'></i></button>
  </div>
`,Nt=()=>`
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
    `,He=[],_e={"313071000877137920":"Owen",dexter:"Dexter"},se=[],he=null;async function De(){let t=document.getElementById("chores-list"),e=document.getElementById("create-chore-btn"),o=document.getElementById("create-chore-form"),i=document.getElementById("save-chore-btn"),a=document.getElementById("cancel-chore-btn"),r=document.getElementById("new-chore-owner"),l=document.getElementById("selected-recipients"),f=document.getElementById("task-filter-owner"),c=document.getElementById("new-chore-instruction"),b=document.getElementById("new-chore-url"),C=document.getElementById("new-chore-schedule"),m=document.getElementById("new-chore-time"),x=document.getElementById("new-chore-timezone"),n=document.getElementById("new-chore-time-group");if(x&&!x.dataset.initialValueAttached){let s=Intl.DateTimeFormat().resolvedOptions().timeZone,g=!1;for(let w=0;w<x.options.length;w++)if(x.options[w].value===s){g=!0;break}if(!g){let w=document.createElement("option");w.value=s,w.textContent=s.replace("_"," "),x.appendChild(w)}x.value=s,x.dataset.initialValueAttached="true"}C&&n&&!C.dataset.timeListenerAttached&&(C.addEventListener("change",()=>{n.style.display=C.value==="daily"?"block":"none"}),C.dataset.timeListenerAttached="true");let u=document.getElementById("form-title"),T=document.getElementById("form-icon");function z(){if(l){if(se.length===0){l.innerHTML='<span style="color: #444; font-size: 0.8em; font-style: italic; padding: 4px;">No recipients selected</span>';return}l.innerHTML=se.sort((s,g)=>{let w=s.startsWith("channel:"),p=g.startsWith("channel:");return w&&!p?-1:!w&&p?1:0}).map(s=>{let g=_e[s]||s,w=s.startsWith("channel:");return`
        <div class="recipient-badge" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); font-size: 0.75em; color: ${s==="dexter"?"#bb86fc":w?"#03dac6":"#fff"};">
          <i class='bx ${s==="dexter"?"bx-terminal":w?"bx-hash":"bx-user"}'></i>
          <span>${g}</span>
          <i class='bx bx-x remove-recipient' data-id="${s}" style="cursor: pointer; margin-left: 4px; opacity: 0.6;"></i>
        </div>
      `}).join(""),l.querySelectorAll(".remove-recipient").forEach(s=>{s.onclick=()=>{let g=s.dataset.id;se=se.filter(w=>w!==g),z()}})}}function v(s){s&&!se.includes(s)&&(se.push(s),z()),r&&(r.value="")}function d(s=null){if(o){if(he=s?s.id:null,s){if(u&&(u.textContent="Update Research Task"),T&&(T.className="bx bx-edit-alt",T.style.color="#03dac6"),i&&(i.innerHTML="<i class='bx bx-check'></i> Update Task"),c&&(c.value=s.natural_instruction),b&&(b.value=s.execution_plan?.entry_url||""),C&&(C.value=s.schedule,n&&(n.style.display=s.schedule==="daily"?"block":"none")),m&&s.run_at&&(m.value=s.run_at),x&&s.timezone){let g=!1;for(let w=0;w<x.options.length;w++)if(x.options[w].value===s.timezone){g=!0;break}if(!g){let w=document.createElement("option");w.value=s.timezone,w.textContent=s.timezone.replace("_"," "),x.appendChild(w)}x.value=s.timezone}se=s.recipients||(s.owner_id?[s.owner_id]:[]),z()}else u&&(u.textContent="Initialize Research Task"),T&&(T.className="bx bx-plus-circle",T.style.color="#bb86fc"),i&&(i.innerHTML="<i class='bx bx-zap'></i> Deploy Task"),c&&(c.value=""),b&&(b.value=""),C&&(C.value="every_24h"),se=[],z();o.style.display="block",o.scrollIntoView({behavior:"smooth",block:"start"})}}let h=document.getElementById("contacts-group"),y=document.getElementById("channels-group");if(h&&!h.dataset.populated&&!N())try{fe("/contacts").then(async s=>{s.ok&&(((await s.json()).members||[]).forEach(p=>{if(_e[p.id]=p.nickname||p.username,p.id==="313071000877137920")return;let $=document.createElement("option");$.value=p.id;let A=p.nickname||p.username;$.textContent=`${A} (${p.username})`,h.appendChild($)}),h.dataset.populated="true")})}catch{console.warn("Failed to fetch contacts for dropdown")}if(y&&!y.dataset.populated&&!N())try{fe("/channels").then(async s=>{s.ok&&((await s.json()).forEach(w=>{let p=`channel:${w.id}`;_e[p]=w.name;let $=document.createElement("option");$.value=p,$.textContent=`#${w.name} (${w.guild})`,y.appendChild($)}),y.dataset.populated="true")})}catch{console.warn("Failed to fetch channels for dropdown")}r&&!r.dataset.listenerAttached&&(r.onchange=()=>{v(r.value)},r.dataset.listenerAttached="true"),f&&!f.dataset.listenerAttached&&(f.onchange=()=>I(),f.dataset.listenerAttached="true");function I(){if(!t)return;let s=f?.value||"all",g=s==="all"?He:He.filter(p=>(p.recipients||(p.owner_id?[p.owner_id]:[])).includes(s));if(g.length===0){t.innerHTML=J("empty",s==="all"?"No active tasks.":"No tasks found for this owner.",N()?"Dexter is not currently performing research.":"Click the plus icon to create a research task.");return}let w=g.map(p=>{let $=p.last_run===0?"Never":new Date(p.last_run*1e3).toLocaleString(),A=p.memory?p.memory.length:0,S=p.status==="active"?"#03dac6":"#666",W=(p.recipients||(p.owner_id?[p.owner_id]:[])).sort((q,V)=>{let H=q.startsWith("channel:"),E=V.startsWith("channel:");return H&&!E?-1:!H&&E?1:0}).map(q=>{let V=_e[q]||q.substring(0,8),H=q.startsWith("channel:");return`<span title="${V}" style="display: flex; align-items: center; gap: 3px;"><i class='bx ${q==="dexter"?"bx-terminal":H?"bx-hash":"bx-user"}'></i>${V}</span>`}).join("<span style='color: #444;'>, </span>");return`
                <div class="service-widget wide-task-card" style="border-left: 4px solid ${S}; width: 100%; display: flex; flex-direction: column; padding: 20px;">
                    <div class="service-widget-header" style="display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; margin-bottom: 15px;">
                        <div style="display: flex; gap: 15px; flex: 1;">
                            <i class='bx bx-search-alt' style="color: ${S}; font-size: 1.5em; margin-top: 2px;"></i>
                            <div style="text-align: left;">
                                <h3 style="font-size: 1.1em; white-space: normal; line-height: 1.4; font-weight: 600; margin: 0;">${p.natural_instruction}</h3>
                                <div style="margin-top: 8px; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
                                    <div style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace; display: flex; gap: 10px; align-items: center;">
                                      <i class='bx bx-send' style="margin-right: -5px;"></i>
                                      ${W}
                                    </div>
                                    <span style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace;"><i class='bx bx-time' style="margin-right: 4px;"></i>${p.schedule}${p.run_at?" @ "+p.run_at+(p.timezone?" ("+p.timezone.split("/").pop()?.replace("_"," ")+")":""):""}</span>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button class="icon-btn reset-chore-btn" data-id="${p.id}" title="Reset Progress" style="background: none; border: none; color: #ff9800; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-refresh' style="font-size: 1.2em;"></i></button>
                            <button class="icon-btn edit-chore-btn" data-id="${p.id}" style="background: none; border: none; color: #bb86fc; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-edit-alt' style="font-size: 1.2em;"></i></button>
                            <button class="icon-btn delete-chore-btn" data-id="${p.id}" style="background: none; border: none; color: #cf6679; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-trash' style="font-size: 1.2em;"></i></button>
                        </div>
                    </div>
                    
                    <div class="service-widget-body" style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Last Run</span>
                            <span style="font-size: 0.85em; color: #fff; font-family: 'JetBrains Mono';">${$}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Items Found</span>
                            <span style="font-size: 0.85em; color: #03dac6; font-weight: bold;">${A}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 200px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Target Focus</span>
                            <span style="font-size: 0.8em; color: #888; font-family: 'JetBrains Mono'; word-break: break-all;">${p.execution_plan.entry_url||"Autonomous Detection"}</span>
                        </div>
                    </div>
                </div>
            `}).join("");t.innerHTML=w,t.querySelectorAll(".edit-chore-btn").forEach(p=>{p.onclick=$=>{$.stopPropagation();let A=p.dataset.id,S=He.find(B=>B.id===A);S&&d(S)}}),t.querySelectorAll(".reset-chore-btn").forEach(p=>{p.onclick=async $=>{$.stopPropagation();let A=p.dataset.id;confirm("Reset this task? It will be re-run immediately on the next cycle.")&&(p.innerHTML="<i class='bx bx-loader-alt spin'></i>",await D(`/chores/${A}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({last_run:0})}),De())}}),t.querySelectorAll(".delete-chore-btn").forEach(p=>{p.onclick=async $=>{$.stopPropagation();let A=p.dataset.id;confirm("Delete this task?")&&(await D(`/chores/${A}`,{method:"DELETE"}),De())}})}e&&!e.dataset.listenerAttached&&(e.onclick=()=>{o&&(o.style.display==="none"||he!==null?d(null):o.style.display="none")},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{o&&(o.style.display="none")},a.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{let s=document.getElementById("new-chore-instruction"),g=document.getElementById("new-chore-url"),w=document.getElementById("new-chore-schedule"),p=s?.value,$=w?.value||"every_24h",A=$==="daily"?m?.value:"",S=$==="daily"?x?.value:"";if(!p)return;if(se.length===0){alert("Please add at least one recipient.");return}let B=i.innerHTML;i.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{let W=he?"PATCH":"POST",q=he?`/chores/${he}`:"/chores";await D(q,{method:W,headers:{"Content-Type":"application/json"},body:JSON.stringify({recipients:se,natural_instruction:p,entry_url:g?.value,schedule:$,run_at:A,timezone:S})}),o&&(o.style.display="none"),s&&(s.value=""),g&&(g.value=""),he=null,se=[],De()}catch(W){console.error(W),alert(he?"Failed to update research task":"Failed to create research task")}finally{i.innerHTML=B}},i.dataset.listenerAttached="true");try{let s=await D("/chores");if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);if(He=await s.json()||[],f){let w=f.value,p=new Set;He.forEach($=>{$.owner_id&&p.add($.owner_id),$.recipients&&$.recipients.forEach(A=>p.add(A))}),f.innerHTML='<option value="all">All Recipients</option>',p.forEach($=>{let A=document.createElement("option");A.value=$;let S=$.startsWith("channel:"),B=_e[$]||`Recipient: ${$.substring(0,8)}`;A.textContent=(S&&!B.startsWith("#")?"#":"")+B,f.appendChild(A)}),f.value=w,f.selectedIndex===-1&&(f.value="all")}I()}catch(s){console.error("Failed to fetch chores",s)}}var Rt=()=>`
    <div class="ideas-container">
        <div class="progress-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-loader-circle spin' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Live Progress</h2>
                </div>
            </div>
            ${_t()}
        </div>
    </div>
`,Pt=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${$t()}
            </div>
            ${St()}
        </div>
    </div>
`,Ot=()=>`
    <div class="ideas-container">
        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${Mt()}
            </div>
            ${It()}
        </div>
    </div>
`,jt=()=>`
    <div class="ideas-container">
        <div class="chores-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-task' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Research Tasks</h2>
                </div>
                ${zt()}
            </div>
            ${Nt()}
        </div>
    </div>
`;async function st(){await Promise.all([ve(),xe(),Ae(),De()])}var _s=`
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
`;function qt(t){if(!document.getElementById("dex-profile-styles")){let i=document.createElement("style");i.id="dex-profile-styles",i.textContent=_s,document.head.appendChild(i)}let e=document.createElement("div");e.className="profile-overlay",e.innerHTML=`
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `,e.addEventListener("click",i=>{i.target===e&&(e.classList.remove("active"),ie()||(document.body.style.overflow=""),setTimeout(()=>e.remove(),300))}),document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),document.body.style.overflow="hidden";let o=i=>{e.innerHTML=`
        <div class="profile-card" style="height: 200px; justify-content: center; align-items: center; color: #cf6679; border-color: #cf6679;">
            <div style="text-align: center;">
                <i class='bx bx-error' style="font-size: 3em; margin-bottom: 10px;"></i>
                <div style="font-family: 'JetBrains Mono'; text-transform: uppercase;">${i}</div>
            </div>
            <button class="close-profile-btn" style="color: #cf6679;" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
        </div>
    `;let a=e.querySelector(".close-profile-btn");a&&a.addEventListener("click",()=>{e.click()})};fe(`/profile/${t.id}`).then(async i=>{if(i.ok){let a=await i.json();Ds(e,t,a)}else console.log("Profile not found (404) or error."),o("Profile Data Unavailable")}).catch(i=>{console.error("Profile fetch error:",i),o("Connection Failed")})}function Ds(t,e,o){let i=e.status==="online"?"#03dac6":e.status==="idle"?"#ffb74d":"#cf6679",a=()=>{let T=(o.attributes||o.facts||[]).map(I=>{let s=I.key||I.k,g=I.value||I.v;return`
            <div class="fact-chip">
                <span class="fact-key">${s}:</span>
                <span class="fact-val">${g}</span>
            </div>
        `}).join(""),z=o.cognitive_model||o,v=z.technical_level||z.techLevel||0,d=z.communication_style||z.commStyle||"Unknown",h=z.patience_level||z.patience||"Unknown",y=z.vibe||"Unknown";return`
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
                            <span style="color: #03dac6;">${d}</span>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Predicted Patience</span>
                            <span>${h}</span>
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
                        ${T}
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px; font-size: 0.9em; color: #888; font-style: italic;">
                        <i class='bx bx-info-circle'></i> Dexter automatically extracts these facts from conversation context to personalize future interactions.
                    </div>
                </div>
            </div>
        `},r=()=>{let T=o.dossier||{},z=T.identity||{},v=T.career||{},d=T.personal||{},h=T.social||[];return`
            <div class="dossier-grid">
                <!-- Identity Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-id-card'></i> Identity</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Full Name</div>
                        <div class="dossier-value">${z.fullName||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Age Range</div>
                        <div class="dossier-value">${z.ageRange||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Location</div>
                        <div class="dossier-value">${z.location||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Gender</div>
                        <div class="dossier-value">${z.gender||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Sexuality</div>
                        <div class="dossier-value" style="color: #ffb74d;">${z.sexuality||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Relationship Status</div>
                        <div class="dossier-value">${z.relationship||"Unknown"}</div>
                    </div>
                    
                    <div class="profile-section-title" style="margin-top: 30px;"><i class='bx bx-briefcase'></i> Career</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Current Role</div>
                        <div class="dossier-value">${v.jobTitle||"Unknown"}</div>
                        <div style="font-size: 0.8em; color: #888; margin-top: 2px;">@ ${v.company||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                         <div class="dossier-label">Key Skills</div>
                         <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            ${(v.skills||[]).map(y=>`<span style="font-size: 0.75em; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${y}</span>`).join("")}
                         </div>
                    </div>
                </div>

                <!-- Personal Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-home-heart'></i> Personal Life</div>
                    
                    <div class="dossier-item">
                        <div class="dossier-label"><i class='bx bx-joystick'></i> Hobbies</div>
                        <div style="margin-top: 10px;">
                            ${(d.hobbies||[]).map(y=>`<div class="dossier-list-item">${y}</div>`).join("")}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(d.habits||[]).map(y=>`<div class="dossier-list-item">${y}</div>`).join("")}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(d.vices||[]).map(y=>`<div class="dossier-list-item" style="color: #cf6679;">${y}</div>`).join("")}
                        </div>
                    </div>
                </div>

                <!-- Social Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-network-chart'></i> Known Associates</div>
                    <div class="dossier-item" style="background: none; border: none; padding: 0;">
                        ${h.length>0?h.map(y=>`
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
        `},l=()=>{let T=o.traits||{};return`
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(T).map(([z,v])=>`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${v}%; background: ${Number(v)>50?"#03dac6":"#cf6679"}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${z.substring(0,4)}</div>
                    <div style="font-family: monospace;">${v}%</div>
                </div>
            `).join("")}
        </div>
    `},f=()=>`
        <div class="profile-section-title"><i class='bx bx-map-alt'></i> Conversation Topics</div>
        <div style="margin-top: 20px;">
            ${(o.topics||[]).map(T=>`
                <div class="topic-bar">
                    <div class="topic-header">
                        <span style="color: #eee;">${T.name}</span>
                        <span style="color: #bb86fc;">${T.val}%</span>
                    </div>
                    <div class="topic-track">
                        <div class="topic-fill" style="width: ${T.val}%"></div>
                    </div>
                </div>
            `).join("")}
        </div>
    `,c=()=>`
        <div class="profile-section-title"><i class='bx bx-code-alt'></i> Raw Profile JSON</div>
        <div class="raw-json">${JSON.stringify(o,null,2)}</div>
    `,b=`
        <div class="profile-card">
            <button class="close-profile-btn" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
            
            <div class="profile-header">
                <div class="profile-avatar-container">
                    <img src="${e.avatar_url||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="profile-avatar">
                    <div class="profile-status-dot" style="background: ${i}"></div>
                </div>
                <div class="profile-identity">
                    <h2>${j(e.username)}</h2>
                    <div class="profile-badges">${(o.badges||[]).map(T=>`<span class="profile-badge ${T==="Creator"?"master":""}">${T}</span>`).join("")}</div>
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
                <div id="tab-overview" class="tab-content active">${a()}</div>
                <div id="tab-dossier" class="tab-content">${r()}</div>
                <div id="tab-psychometrics" class="tab-content">${l()}</div>
                <div id="tab-topics" class="tab-content">${f()}</div>
                <div id="tab-raw" class="tab-content">${c()}</div>
            </div>

            <div class="profile-footer">
                <div style="display: flex; gap: 20px;">
                    <span>ID: ${e.id}</span>
                    <span>LIFETIME TOKENS: ${o.stats?.tokens_consumed||o.stats?.tokens||"0"}</span>
                    <span>MSGS: ${o.stats?.total_messages||o.stats?.msgs||"0"}</span>
                </div>
                <button id="profile-expand-toggle" class="expand-btn"><i class='bx bx-expand-alt'></i> Detailed Analysis</button>
            </div>
        </div>
    `;t.innerHTML=b;let C=t.querySelector(".profile-card"),m=t.querySelector("#profile-expand-toggle"),x=t.querySelectorAll(".profile-tab-btn"),n=t.querySelectorAll(".tab-content"),u=t.querySelector(".close-profile-btn");u&&u.addEventListener("click",()=>{t.classList.remove("active"),ie()||(document.body.style.overflow=""),setTimeout(()=>t.remove(),300)}),x.forEach(T=>{T.addEventListener("click",()=>{x.forEach(d=>d.classList.remove("active")),n.forEach(d=>d.classList.remove("active")),T.classList.add("active");let z=T.dataset.tab,v=t.querySelector(`#tab-${z}`);v&&v.classList.add("active")})}),m&&m.addEventListener("click",()=>{C.classList.toggle("expanded");let T=C.classList.contains("expanded");m.innerHTML=T?"<i class='bx bx-collapse-alt'></i> Collapse View":"<i class='bx bx-expand-alt'></i> Detailed Analysis"})}var Ut=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto; ${N()?"display: none;":""}" title="Refresh Contacts"><i class='bx bx-refresh'></i></button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,zs=null;async function nt(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await nt(),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),t.dataset.listenerAttached||(t.onclick=o=>{let a=o.target.closest(".user-profile-card");if(a&&a.dataset.user)try{let r=JSON.parse(a.dataset.user);qt(r)}catch(r){console.error("Failed to parse user data",r)}},t.dataset.listenerAttached="true");try{let o=await fe("/contacts");if(!o.ok)throw new Error("Service unreachable");let a=(await o.json()).members||[];if(zs=Date.now(),a.length===0){t.innerHTML=J("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};a.sort((l,f)=>{let c=r[l.level]??10,b=r[f.level]??10;return c!==b?c-b:l.username.localeCompare(f.username)}),t.innerHTML=a.map(l=>{let f=l.color&&l.color!==0,c=f?"#"+l.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",b=l.status==="online"?"#5eff5e":l.status==="idle"?"#ffa500":l.status==="dnd"?"#ff4d4d":"#666",C="#888";l.level==="Me"||l.level==="Master"?C="#bb86fc":l.level==="Admin"?C="#cf6679":l.level==="Moderator"?C="#03dac6":l.level==="Contributor"&&(C="#ffa500");let m=l.level==="Me",x=m?"rgba(187, 134, 252, 0.08)":f?`${c}11`:"rgba(255,255,255,0.03)",n=m?"2px solid #bb86fc":f?`1px solid ${c}66`:"1px solid rgba(255,255,255,0.1)";return`
                <div class="user-profile-card" 
                     data-user="${JSON.stringify(l).replace(/"/g,"&quot;")}"
                     style="background: ${x}; padding: 15px; border-radius: 8px; border: ${n}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; cursor: pointer; transition: transform 0.2s, background 0.2s, box-shadow 0.2s;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${m?"#bb86fc":f?c:"transparent"}33, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${l.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${m?"2px solid #bb86fc":f?`2px solid ${c}`:"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${b}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: ${f?c:"#fff"}; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">${l.nickname||l.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${C}; font-weight: 600; text-transform: uppercase;">${m?"DEXTER (ME)":l.level}</span>
                            <span style="font-size: 0.7em; color: #666; font-family: monospace;">(${l.username})</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${l.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=J("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Ns={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","analysis.user.message_signals":"Analyzed Signals for User {user_id}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"{agent_name} Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed","system.cognitive.model_load":"Model Loaded: {model} ({method})","system.cognitive.model_inference":"Model Inference: {model} ({method})","system.cognitive.model_unload":"Model Unloaded: {model} ({reason})"};function Ft(t,e){let o=Ns[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(o="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(o=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"){let a=e.tier?e.tier.toUpperCase():"UNKNOWN";o=`${e.agent_name||"System"} Audit: ${a}`}if(t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!o)return t;let i=o.replace(/\{(\w+)\}/g,(a,r)=>e[r]!==void 0&&e[r]!==null?e[r]:r==="reason"||r==="method"||r==="details"||r==="args"?"":a);return i=i.replace(/\s\(\)\s*/g," ").trim(),(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(i+=` (Translation: ${e.english_translation})`),i}var it=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn ${Z==="all"?"active":""}" data-filter="all" title="All Events"><i class='bx bx-list-ul'></i></button>
            <button class="notif-action-btn filter-btn ${Z==="messaging"?"active":""}" data-filter="messaging" title="Messaging"><i class='bx bx-message-square-detail'></i></button>
            <button class="notif-action-btn filter-btn ${Z==="system"?"active":""}" data-filter="system" title="System"><i class='bx bx-cog'></i></button>
            <button class="notif-action-btn filter-btn ${Z==="cognitive"?"active":""}" data-filter="cognitive" title="Cognitive"><i class='bx bx-brain'></i></button>
            <button class="notif-action-btn filter-btn ${Z==="moderation"?"active":""}" data-filter="moderation" title="Moderation"><i class='bx bx-shield-quarter'></i></button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="events-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
            <button id="events-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
            <button id="events-clear" class="notif-action-btn danger" style="${N()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
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
`,Ge=null,we=new Set,ze=[],Z="all",Rs={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision","analysis.user.message_signals","system.cognitive.model_inference"],moderation:["moderation.explicit_content.deleted"]},Ps={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","analysis.user.message_signals":"bx-pulse","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart","system.cognitive.model_inference":"bx-brain"};function Os(t){for(let[e,o]of Object.entries(Rs))if(o.includes(t))return e;return"system"}function js(t){return Ps[t]||"bx-square-rounded"}async function me(t=!1){let e=document.getElementById("events-timeline");if(!e)return;qs();let i=`/events?ml=${Z==="all"?100:250}&format=json&exclude_types=system.process.registered,system.process.unregistered`;Z!=="all"&&(i+=`&category=${Z}`);try{let a=await D(i);if(!a.ok)throw new Error("Service unreachable");if(ze=((await a.json()).events||[]).filter(x=>{let n=x.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!0}let u=n.type;return!(u==="system.blueprint.generated"||u==="system.notification.generated")}),Ge=Date.now(),te(1,Ge),ze.length===0){e.innerHTML=J("empty","No events found for this filter.");return}t&&(e.innerHTML="");let f=x=>{let n=x.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let u=n.type,T=Os(u),z=js(u),v=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.bot.voice_response"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted"||u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="analysis.user.message_signals"||u==="system.cli.command"||u==="system.analysis.audit"||u==="system.cognitive.model_inference"||u==="system.test.completed"||u==="error_occurred"||u==="system.cli.status"||u==="system.attention.expired"||u.startsWith("system.roadmap")||u.startsWith("system.process"),d="event-border-grey";v&&(u==="moderation.explicit_content.deleted"||u==="error_occurred"?d="event-border-red":u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="system.analysis.audit"||u==="analysis.user.message_signals"||u==="engagement.decision"?d="event-border-purple":u==="system.attention.expired"||u==="system.cli.command"||u==="system.cli.status"?d="event-border-orange":u==="system.test.completed"?d=n.test?.status==="OK"&&n.lint?.status==="OK"&&n.format?.status==="OK"?"event-border-blue":"event-border-red":d="event-border-blue");let h=v?"cursor-pointer":"",y=we.has(x.id),I=y?"expanded":"",s=y?"display: block;":"display: none;",g=new Date(x.timestamp*1e3),w=g.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),p=g.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),$=Ft(u,n),A=n.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${n.user_level})</span>`:"",S="";if(v){let H="";if(u==="engagement.decision"){let E=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`;H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${n.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Input Prompt")}
                            <pre class="detail-pre">${n.input_prompt||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${E("Context History")}
                            <pre class="detail-pre">${n.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${E("Raw Engagement Output")}
                            <pre class="detail-pre">${n.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(u==="system.attention.expired"){let E=O=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${O}</h5>`,L=n.timestamp-n.last_active,M=Math.floor(L/60);H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${n.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${M} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Context (Last Input)")}
                            <div class="detail-pre">${le(n.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${E("Thought Process (Last Output)")}
                            <div class="detail-pre">${le(n.last_output||"None")}</div>
                        </div>
                    `}else if(u==="messaging.bot.sent_message"){let E=P=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${P}</h5>`,L="";if(n.embed){let P=n.embed,G=P.title?`<div style="font-weight: bold; margin-bottom: 5px; color: #fff;">${j(P.title)}</div>`:"",k=P.description?`<div style="font-size: 0.9em; color: #bbb; white-space: pre-wrap;">${le(P.description)}</div>`:"",_=(P.fields||[]).map(R=>`
              <div style="margin-top: 10px;">
                <div style="font-size: 0.7em; text-transform: uppercase; color: #666; letter-spacing: 1px;">${j(R.name)}</div>
                <div style="font-size: 0.85em; color: #eee; white-space: pre-wrap;">${le(R.value)}</div>
              </div>
            `).join("");L=`
              <div class="discord-embed" style="margin-top: 15px; padding: 12px; border-left: 4px solid ${P.color?"#"+P.color.toString(16).padStart(6,"0"):"#bb86fc"}; background: rgba(255,255,255,0.02); border-radius: 0 4px 4px 0;">
                ${G}
                ${k}
                ${_}
              </div>
            `}let M="";n.eval_count&&(M=`
                            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.prompt_count} / ${n.eval_count}</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Total Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${n.duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Load Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.load_duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Processing</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.prompt_duration_ms}ms / ${n.eval_duration_ms}ms</div>
                                </div>
                            </div>
                        `);let O="";if(n.chat_history&&n.chat_history.length>0){let P=n.chat_history.length,G=n.chat_history.map((k,_)=>{let R=k.name?k.name.toUpperCase():k.role.toUpperCase();!k.name&&R==="ASSISTANT"&&(R="DEXTER");let U=k.role==="user"?"#03dac6":k.role==="system"?"#ffb74d":"#bb86fc",Y=_===P-1?"block":"none";return`
                                <div class="history-slide" data-index="${_}" style="display: ${Y};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${U}; letter-spacing: 1px; font-weight: bold;">${R}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${_+1} of ${P}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(k.content)}</div>
                                </div>
                            `}).join("");O=`
                            <div class="event-detail-block">
                                ${E("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${G}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}H=`
                        ${M}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${n.response_model||"N/A"}</span>
                        </div>
                        ${L}
                        ${O||`
                            <div class="event-detail-block">
                                ${E("Raw Input (Prompt)")}
                                <pre class="detail-pre">${n.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${E("Raw Response Output")}
                                <pre class="detail-pre">${n.response_raw||"None"}</pre>
                            </div>
                        `}
                    `}else if(u==="messaging.bot.voice_response"){let E=P=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${P}</h5>`,L="",M=[],O=n.raw_input||"";if(O.startsWith("[{")&&O.endsWith("}]")){let P=O.match(/{.*?}/g);P&&(M=P.map(G=>{let k=G.substring(1,G.length-1),_=k.indexOf(" "),R=k.substring(0,_),U=k.substring(_+1);return U=U.replace(/\[\]$/,"").trim(),{role:R,content:U}}))}if(M.length>0&&n.response_raw&&M.push({role:"assistant",content:n.response_raw}),M.length>0){let P=M.length,G=M.map((k,_)=>{let R=k.role.toUpperCase();R==="ASSISTANT"&&(R="DEXTER");let U=k.role==="user"?"#03dac6":k.role==="system"?"#ffb74d":"#bb86fc",Y=_===P-1?"block":"none";return`
                                <div class="history-slide" data-index="${_}" style="display: ${Y};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${U}; letter-spacing: 1px; font-weight: bold;">${R}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${_+1} of ${P}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(k.content)}</div>
                                </div>
                            `}).join("");L=`
                            <div class="event-detail-block">
                                ${E("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${G}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${n.response_model||"N/A"}</span>
                        </div>
                        ${L}
                        <div class="event-detail-block">
                            ${E("Raw Input (Prompt)")}
                            <pre class="detail-pre">${n.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${E("Raw Response Output")}
                            <pre class="detail-pre">${n.response_raw||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.user.message_signals"){let E=O=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${O}</h5>`,L=n.signals||{};H=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Sentiment</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${L.sentiment>.3?"#03dac6":L.sentiment<-.3?"#cf6679":"#aaa"}; font-weight: bold;">${L.sentiment?.toFixed(2)||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Intent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: uppercase;">${L.intent||"N/A"}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tech Depth</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${L.technical_depth||0}/10</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Mood</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${L.mood||"N/A"}</div>
                            </div>
                        </div>
                        <div class="event-detail-block">
                            ${E("Extracted Topics")}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${(L.topics||[]).map(O=>`<span class="profile-badge">${O}</span>`).join("")||'<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${E("Raw Model Output")}
                            <pre class="detail-pre">${j(n.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="moderation.explicit_content.deleted"){let E=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${n.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Raw Model Output")}
                            <pre class="detail-pre">${j(n.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.link.completed"){let E=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${j(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Description")}
                            <pre class="detail-pre">${j(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${E("Content Summary")}
                            <pre class="detail-pre">${j(n.summary)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.visual.completed"){let E=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`,L="";n.base64_preview?L=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url?L=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:L=`
              <div class="event-detail-block" style="margin-top: 10px; height: 100px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444;">
                <i class='bx bx-low-vision' style="font-size: 2rem; margin-bottom: 5px; opacity: 0.3;"></i>
                <span style="font-size: 0.65em; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;">Visual Data Restricted</span>
              </div>`,H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${L}
                        <div class="event-detail-block">
                            ${E("Visual Description")}
                            <pre class="detail-pre">${j(n.description)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.router.decision"){let E=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Decision:</span>
                            <span class="detail-value" style="color: #bb86fc; font-weight: bold;">${n.decision}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${n.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Raw Model Output")}
                            <pre class="detail-pre">${j(n.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${E("Input Context")}
                            <pre class="detail-pre">${j(n.raw_input)||"None"}</pre>
                        </div>
                    `}else if(u==="system.cli.command"){let E=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`;H=`
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
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${n.exit_code!==void 0?n.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Output")}
                            <pre class="detail-pre">${j(n.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(u==="system.analysis.audit"){let E=n.success?"#03dac6":"#ff4d4d",L=n.success?"SUCCESS":"FAILED",M=_=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${_}</h5>`,O="";n.error&&(O=`
                            <div class="event-detail-block">
                                ${M("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${j(n.error)}</pre>
                            </div>
                        `);let P="";if(n.chat_history&&n.chat_history.length>0){let _=n.chat_history.length,R=n.chat_history.map((U,Y)=>{let K=U.name?U.name.toUpperCase():U.role.toUpperCase();!U.name&&K==="USER"&&(K="SYSTEM"),!U.name&&K==="ASSISTANT"&&(K="AGENT");let Ee=U.role==="user"?"#03dac6":U.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${Y}" style="display: ${Y===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${Ee}; letter-spacing: 1px; font-weight: bold;">${K}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${Y+1} of ${_}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(U.content)}</div>
                                </div>
                            `}).join("");P=`
                            <div class="event-detail-block">
                                ${M("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${R}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${_<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let G="";if(n.corrections&&n.corrections.length>0){let _=n.corrections.map((R,U)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${R.type}] ${R.guidance}</div>
                                ${R.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${j(R.snippet)}</div>`:""}
                            </div>
                        `).join("");G=`
                            <div class="event-detail-block">
                                ${M(`Corrections (${n.corrections.length})`)}
                                ${_}
                            </div>
                        `}let k="";if(n.parsed_results&&n.parsed_results.length>0){let _=n.parsed_results.map(R=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${j(R.title)}</div>
                                <div style="color: #ddd;">${j(R.summary)}</div>
                            </div>
                        `).join("");k=`
                            <div class="event-detail-block">
                                ${M("Parsed Results")}
                                ${_}
                            </div>
                        `}H=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 120px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${n.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${E}; font-weight: bold;">${L} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${n.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${n.model}</div>
                            </div>
                        </div>
                        ${O}
                        ${k}
                        ${G}
                        ${P}
                    `}else if(u==="system.test.completed"){let E=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${n.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${n.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Format")}
                            <pre class="detail-pre">${n.format?.status||"N/A"}: ${n.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${E("Lint")}
                            <pre class="detail-pre">${n.lint?.status||"N/A"}: ${n.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${E("Tests")}
                            <pre class="detail-pre">${n.test?.status||"N/A"}: ${n.test?.details||n.test?.message||"OK"}</pre>
                        </div>
                    `}else if(u==="error_occurred"){let E=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`;H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${n.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${j(n.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${E("Context")}
                            <pre class="detail-pre">${JSON.stringify(n.context||{},null,2)}</pre>
                        </div>
                    `}else if(u==="system.cli.status"){let E=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`;H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${E("Message")}
                            <pre class="detail-pre">${j(n.message)}</pre>
                        </div>
                    `}else if(u==="messaging.user.sent_message"){let E="";n.attachments&&n.attachments.length>0&&(E=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${n.attachments.map(M=>{let O=M.content_type&&M.content_type.startsWith("image/"),P=(M.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${O?`<div class="attachment-thumb-container"><img src="${M.url}" alt="${M.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${M.url}" target="_blank" class="attachment-link">${M.filename}</a>
                                        <span class="attachment-meta">${M.content_type} \u2022 ${P}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${n.content||"(empty)"}</pre>
                        </div>
                        ${E}
                    `}S=`
                    <div class="event-details" style="${s}">
                        ${H}
                    </div>
                `}let B=document.createElement("div");B.className=`event-item ${d} ${h} ${I}`,B.dataset.eventId=x.id,B.onclick=function(H){if(!v)return;let E=this;if(E.classList.contains("expanded")){E.classList.remove("expanded"),we.delete(x.id);let M=E.querySelector(".event-details");M&&(M.style.display="none")}else{E.classList.add("expanded"),we.add(x.id);let M=E.querySelector(".event-details");M&&(M.style.display="block")}},B.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${w}</span>
                    <span class="event-date">${p}</span>
                </div>
                <div class="event-icon"><i class='bx ${z}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${T}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${T}</span>
                        ${x.service} ${A}
                    </div>
                    <div class="event-message">${$}</div>
                    ${S}
                </div>
            `;let W=B.querySelector(".event-details");if(W&&W.addEventListener("click",H=>{H.stopPropagation()}),v){let H=B.querySelector(".close-details-btn");H&&H.addEventListener("click",E=>{E.stopPropagation();let L=E.target.closest(".event-item");if(L){L.classList.remove("expanded"),we.delete(x.id);let M=L.querySelector(".event-details");M&&(M.style.display="none")}})}let q=B.querySelector(".prev-btn"),V=B.querySelector(".next-btn");if(q&&V){let H=0,E=Array.from(B.querySelectorAll(".history-slide")),L=E.length,M=()=>{E.forEach((O,P)=>{O.style.display=P===H?"block":"none"}),q.disabled=H===0,V.disabled=H===L-1,q.style.opacity=H===0?"0.5":"1",V.style.opacity=H===L-1?"0.5":"1"};q.addEventListener("click",O=>{O.stopPropagation(),H>0&&(H--,M())}),V.addEventListener("click",O=>{O.stopPropagation(),H<L-1&&(H++,M())}),M()}return B},c=Array.from(e.children),b=new Map(c.map(x=>[x.dataset.eventId,x])),C=new Set(ze.map(x=>x.id));c.forEach(x=>{let n=x.dataset.eventId;(!n||!C.has(n))&&x.remove()});let m=null;ze.forEach((x,n)=>{let u=b.get(x.id);(!u||t)&&(u&&u.remove(),u=f(x),!u)||(n===0?e.firstElementChild!==u&&e.prepend(u):m&&m.nextElementSibling!==u&&m.after(u),m=u)}),Ge=Date.now(),te(1,Ge)}catch(a){console.error("Error fetching events:",a),e.children.length===0&&(e.innerHTML=J("offline","Failed to load events.","The event service may be offline."))}}function qs(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),o=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ze.forEach(a=>we.add(a.id)),me(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{we.clear(),me(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.querySelectorAll(".filter-btn").forEach(a=>{a.onclick=()=>{o.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),a.classList.add("active"),Z=a.dataset.filter||"all",me(!0)}}),o.dataset.listenerAttached="true"),o&&o.querySelectorAll(".filter-btn").forEach(a=>{a.dataset.filter===Z?a.classList.add("active"):a.classList.remove("active")});let i=document.getElementById("events-clear");i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{let a=Z==="all"?"ALL":Z.toUpperCase();if(confirm(`Are you sure you want to delete ${a} events from the backend? This cannot be undone.`)){i.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let r="/events";if(Z!=="all"?r+=`?category=${Z}`:r+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await D(r,{method:"DELETE"})).ok)throw new Error("Failed to delete events");we.clear(),me(!0)}catch(r){console.error("Failed to clear events:",r),alert("Failed to clear events. Check console.")}finally{i.innerHTML="<i class='bx bx-trash'></i> Clear"}}},i.dataset.listenerAttached="true")}var Us=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 348 346" style="color: #bb86fc; fill: currentColor; margin-right: 10px; min-width: 24px; margin-left: 0; max-width: 25px;">
<path d="M0 0 C6.68906895 0.30942998 13.34298509 1.14956038 19.984375 1.9765625 C21.04816879 2.1076088 21.04816879 2.1076088 22.13345337 2.24130249 C55.44930058 6.37374759 89.44852457 11.1701099 121.234375 22.3515625 C122.0190918 22.62500488 122.80380859 22.89844727 123.61230469 23.18017578 C126.17837625 24.07923377 128.73863524 24.9929688 131.296875 25.9140625 C132.08344482 26.19507813 132.87001465 26.47609375 133.68041992 26.765625 C137.31290641 28.10565219 140.66084169 29.52135743 143.98046875 31.5234375 C148.9255565 34.30171009 152.70673961 34.37236954 158.234375 33.3515625 C161.19075168 32.16972593 164.01848917 30.83745747 166.86157227 29.40722656 C189.09451792 18.33311522 214.1097852 13.06828487 238.484375 9.28125 C242.0480496 8.72309832 245.57972623 8.10268773 249.109375 7.359375 C260.87664682 4.88142336 272.66220914 3.38697773 284.609375 2.1015625 C285.4294101 2.01261719 286.24944519 1.92367187 287.09432983 1.83203125 C289.46077916 1.57775351 291.8278105 1.3302037 294.1953125 1.0859375 C294.90185471 1.01115173 295.60839691 0.93636597 296.33634949 0.85931396 C298.29983402 0.66293761 300.26718112 0.50642829 302.234375 0.3515625 C303.47268066 0.25391602 304.71098633 0.15626953 305.98681641 0.05566406 C309.234375 0.3515625 309.234375 0.3515625 311.40896606 2.03759766 C313.62046553 4.84098704 313.72210791 6.13960734 313.68847656 9.67089844 C313.68802338 11.26209503 313.68802338 11.26209503 313.68756104 12.88543701 C313.66691589 14.02410217 313.64627075 15.16276733 313.625 16.3359375 C313.61934021 17.50666809 313.61368042 18.67739868 313.60784912 19.88360596 C313.58545625 23.6233405 313.5352518 27.36211747 313.484375 31.1015625 C313.46431389 33.63670492 313.44606244 36.17186235 313.4296875 38.70703125 C313.38558178 44.92220179 313.31863954 51.13681374 313.234375 57.3515625 C315.1215625 57.25875 315.1215625 57.25875 317.046875 57.1640625 C320.94155078 57.18512993 320.94155078 57.18512993 323.20727539 58.47290039 C325.65285499 62.94609626 324.70011794 68.83114218 324.671875 73.7890625 C324.69185547 75.02978516 324.71183594 76.27050781 324.73242188 77.54882812 C324.73177734 78.74056641 324.73113281 79.93230469 324.73046875 81.16015625 C324.73232178 82.25126709 324.7341748 83.34237793 324.73608398 84.46655273 C324.10324457 88.10561034 323.11038098 89.08260175 320.234375 91.3515625 C317.45481014 91.85213375 317.45481014 91.85213375 314.19285583 91.85276794 C312.3357901 91.86751915 312.3357901 91.86751915 310.44120789 91.88256836 C309.07204925 91.8731967 307.70289335 91.8634174 306.33374023 91.85327148 C304.88975498 91.85705507 303.44577335 91.86255544 302.00180054 91.86964417 C298.08238523 91.8836099 294.16340834 91.87242202 290.24401736 91.85593295 C286.14412508 91.84208843 282.04425841 91.84854174 277.9443512 91.85206604 C271.06024097 91.85476834 264.17630508 91.84128991 257.29223633 91.81811523 C249.32937929 91.79149474 241.36681357 91.78976163 233.40392727 91.8015036 C225.74724942 91.81227574 218.09067711 91.80609946 210.43400764 91.79194832 C207.17368136 91.78618465 203.91343222 91.78627414 200.65310478 91.79101372 C196.81578854 91.79577963 192.9787921 91.78569821 189.14153671 91.76405907 C187.73181677 91.75848609 186.32206613 91.7580306 184.91234398 91.76301193 C182.99119233 91.76895004 181.07000959 91.75464687 179.14891052 91.73924255 C178.07284263 91.73681266 176.99677473 91.73438276 175.88809872 91.73187923 C173.234375 91.3515625 173.234375 91.3515625 171.3993845 89.9691782 C169.86921668 87.84454017 169.6851698 86.12555538 169.359375 83.5390625 C168.42408919 78.322753 167.16382417 75.9317273 163.234375 72.3515625 C158.44641172 69.6915829 154.68845721 68.75657171 149.234375 69.3515625 C144.38523011 71.09725466 140.70979663 73.7800942 138.234375 78.3515625 C137.60341831 80.93165292 137.18265404 83.44293705 136.88671875 86.08203125 C136.01470353 89.11580876 134.93221382 89.75561394 132.234375 91.3515625 C129.45481014 91.73187923 129.45481014 91.73187923 126.19285583 91.73924255 C124.95481201 91.74914719 123.71676819 91.75905182 122.44120789 91.76925659 C121.07205101 91.76501864 119.70289509 91.76046079 118.33374023 91.75561523 C116.88975496 91.76131831 115.44577419 91.76828233 114.00180054 91.77641296 C110.08247452 91.79436369 106.16337215 91.79317281 102.24401736 91.78747058 C98.973391 91.78438239 95.70280783 91.79046684 92.43218762 91.79650933 C84.71883403 91.81055836 77.00559121 91.8089893 69.29223633 91.79760742 C61.32933972 91.78611714 53.36677955 91.80021611 45.40392727 91.8270039 C38.56986186 91.84913522 31.73590226 91.85580436 24.90180355 91.84992748 C20.81882199 91.84655156 16.73605628 91.84901522 12.65310478 91.86617851 C8.815742 91.8816056 4.97887943 91.87773998 1.14153671 91.85887337 C-0.2681932 91.85517607 -1.67795984 91.85832911 -3.08765602 91.86875916 C-5.00876303 91.88189016 -6.92999848 91.86806256 -8.85108948 91.85276794 C-9.92715737 91.85255866 -11.00322527 91.85234938 -12.11190128 91.85213375 C-14.765625 91.3515625 -14.765625 91.3515625 -16.611022 89.50055027 C-18.16026852 86.61703808 -18.15393672 84.42523721 -18.1640625 81.16015625 C-18.16792969 79.96841797 -18.17179687 78.77667969 -18.17578125 77.54882812 C-18.16417969 76.30810547 -18.15257812 75.06738281 -18.140625 73.7890625 C-18.15802734 71.92217773 -18.15802734 71.92217773 -18.17578125 70.01757812 C-18.17191406 68.82712891 -18.16804688 67.63667969 -18.1640625 66.41015625 C-18.16067871 65.32017334 -18.15729492 64.23019043 -18.15380859 63.10717773 C-17.765625 60.3515625 -17.765625 60.3515625 -16.74072266 58.47290039 C-13.50845762 56.63782087 -10.43369607 57.17116556 -6.765625 57.3515625 C-6.77561775 56.36890411 -6.77561775 56.36890411 -6.78581238 55.36639404 C-6.85213825 48.55339461 -6.8974143 41.74048676 -6.93041992 34.92724609 C-6.94551436 32.38391393 -6.96599188 29.84060783 -6.99194336 27.29736328 C-7.02829677 23.6434893 -7.04534497 19.98995921 -7.05859375 16.3359375 C-7.07407761 15.19727234 -7.08956146 14.05860718 -7.10551453 12.88543701 C-7.10574112 11.82463928 -7.10596771 10.76384155 -7.10620117 9.67089844 C-7.11619392 8.27191315 -7.11619392 8.27191315 -7.12638855 6.84466553 C-6.42189256 1.97615514 -4.85517479 0.45328395 0 0 Z " fill="#060606" transform="translate(21.765625,251.6484375)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.14695312 1.28970703 2.14695312 1.28970703 2.296875 2.60546875 C5.08360945 24.63508504 14.41729795 41.81161864 28 59 C28.75925781 59.98355469 29.51851562 60.96710938 30.30078125 61.98046875 C36.7308671 69.94703993 43.96024328 77.13956811 51.1875 84.375 C51.70887543 84.89746307 52.23025085 85.41992615 52.76742554 85.95822144 C57.56330909 90.75297453 62.35486952 95.51788786 67.5078125 99.93359375 C75.90110735 107.13804583 82.11998331 117.66652759 83.4453125 128.7109375 C83.95888965 145.59050657 76.30622862 157.74088673 65.11328125 169.80859375 C64.41589844 170.53175781 63.71851563 171.25492188 63 172 C62.29230469 172.75410156 61.58460938 173.50820312 60.85546875 174.28515625 C59 176 59 176 57 176 C56.70867187 175.05640625 56.41734375 174.1128125 56.1171875 173.140625 C48.70619998 149.66788328 35.03316674 131.71527224 17.59306335 114.68505859 C15.36913305 112.51154379 13.15338738 110.32973714 10.93661499 108.14892578 C9.29609528 106.54506523 7.64072695 104.95780678 5.98364258 103.37109375 C-3.28333878 94.36929929 -10.58064719 84.29542711 -15 72 C-15.35449219 71.01515625 -15.70898438 70.0303125 -16.07421875 69.015625 C-22.4055257 46.11190862 -14.04830546 24.41218485 -3.06567383 4.81494141 C-2.10227483 3.17418352 -1.05542177 1.58313265 0 0 Z " fill="#BB86FC" transform="translate(119,29)"/>
<path d="M0 0 C2.6875 1.0625 2.6875 1.0625 4.6875 3.0625 C4.69921875 5.12109375 4.69921875 5.12109375 4.375 7.5 C4.27574219 8.28246094 4.17648438 9.06492187 4.07421875 9.87109375 C3.6875 12.0625 3.6875 12.0625 2.6875 15.0625 C1.11751294 41.13458025 10.70017547 60.20871873 26.6875 80.0625 C27.32631104 80.87485107 27.32631104 80.87485107 27.97802734 81.70361328 C38.00384498 94.4313106 49.75405874 106.28039473 62.015625 116.84765625 C73.31308007 126.59059735 82.51511524 140.57567183 83.93359375 155.68359375 C84.80464021 175.55929027 75.13286292 190.4683239 62.37890625 204.625 C57.73963885 209.50042059 52.7715211 213.75009263 47.375 217.75 C46.49485229 218.42011108 46.49485229 218.42011108 45.59692383 219.10375977 C42.9036089 221.0257985 41.25267503 222.08384227 37.89453125 221.95703125 C35.6875 221.0625 35.6875 221.0625 33.6875 219.0625 C33.57834186 217.00738807 33.48167927 214.95049672 33.46240234 212.89257812 C33.19649736 186.01010601 14.86556478 165.96635035 -3.4140625 147.96875 C-3.94474335 147.44587906 -4.47542419 146.92300812 -5.02218628 146.3842926 C-7.209009 144.23393129 -9.39847831 142.08646079 -11.59765625 139.94873047 C-28.73945797 123.25776218 -39.9245404 104.51739082 -40.73217773 80.15063477 C-40.96750809 50.10249423 -25.32855137 22.56751306 -4.96069336 1.33837891 C-3.3125 0.0625 -3.3125 0.0625 0 0 Z M-11.3125 27.0625 C-18.47043958 39.22879094 -18.47043958 39.22879094 -24.3125 52.0625 C-24.70566406 53.01253906 -25.09882812 53.96257813 -25.50390625 54.94140625 C-30.62887368 69.4948852 -31.1271472 88.87170382 -24.85546875 103.1015625 C-24.34628906 104.07867187 -23.83710937 105.05578125 -23.3125 106.0625 C-22.79300781 107.10148437 -22.27351563 108.14046875 -21.73828125 109.2109375 C-14.67368766 122.28619929 -3.23503581 132.25756497 7.3190918 142.52270508 C18.97878583 153.88200462 28.53854239 165.91104681 36.6875 180.0625 C37.08582031 180.74441406 37.48414063 181.42632812 37.89453125 182.12890625 C41.44550337 188.67910582 43.44004283 195.98853646 45.6875 203.0625 C57.20837041 197.9881391 65.51761894 183.80608342 70.25 172.625 C73.4350825 162.59788842 72.8346148 152.32347304 68.26953125 142.87890625 C62.70662662 132.97556245 55.47793746 125.81779121 47.1875 118.22265625 C34.690972 106.74630941 22.51974202 94.94052607 12.6875 81.0625 C12.25646973 80.45986328 11.82543945 79.85722656 11.38134766 79.23632812 C0.01118248 63.19709329 -7.89296503 46.93598964 -9.3125 27.0625 C-9.9725 27.0625 -10.6325 27.0625 -11.3125 27.0625 Z " fill="#060606" transform="translate(130.3125,1.9375)"/>
<path d="M0 0 C4.5345874 1.3549779 6.92348527 3.87010073 10.15625 7.23046875 C10.76976318 7.85872559 11.38327637 8.48698242 12.01538086 9.13427734 C17.48906423 14.90373776 21.62251454 20.89221981 25.28125 27.98046875 C25.80589844 28.955 26.33054687 29.92953125 26.87109375 30.93359375 C31.24759394 40.00179913 31.93385811 49.9751534 29.28125 59.73046875 C25.6877308 68.60562547 19.4575609 75.27449775 11.9296875 80.9609375 C2.59100721 88.08202557 -9.22931458 97.68639609 -11.02734375 110.11328125 C-11.06988281 110.77070312 -11.11242187 111.428125 -11.15625 112.10546875 C-11.71875 115.98046875 -11.71875 115.98046875 -12.90625 117.98046875 C-15.6437027 119.49078748 -17.62351164 119.26692711 -20.71875 118.98046875 C-32.2282976 112.68982532 -41.34742203 102.14638142 -45.90625 89.89453125 C-47.89803046 82.75093402 -47.38031076 76.74223686 -44.0234375 70.12109375 C-39.77362458 63.14834681 -33.75852779 58.21312329 -27.56225586 53.04736328 C-18.36181276 45.37302226 -9.38340224 36.78099964 -5.71875 24.98046875 C-5.43981465 21.40489103 -5.43981465 21.40489103 -5.53125 17.60546875 C-5.54091797 15.70667969 -5.54091797 15.70667969 -5.55078125 13.76953125 C-5.71414991 10.08423828 -6.13160059 6.61609792 -6.71875 2.98046875 C-4.40045082 0.75133492 -3.26615936 -0.02346379 0 0 Z " fill="#060606" transform="translate(232.71875,2.01953125)"/>
<path d="M0 0 C0 7.26 0 14.52 0 22 C-22.44 22 -44.88 22 -68 22 C-68 25.96 -68 29.92 -68 34 C-45.56 34 -23.12 34 0 34 C0 37.63 0 41.26 0 45 C-13.56910638 45.20861963 -27.13783072 45.36849091 -40.70821476 45.46630955 C-47.00974776 45.51326073 -53.31018289 45.57693232 -59.61108398 45.67895508 C-65.69308171 45.776816 -71.77402426 45.83057321 -77.85674858 45.85389519 C-80.17610729 45.87051253 -82.49540883 45.90296415 -84.8143177 45.95157051 C-88.06635951 46.017019 -91.31405493 46.02589835 -94.56665039 46.02172852 C-96.00164131 46.07026474 -96.00164131 46.07026474 -97.46562195 46.11978149 C-101.60850305 46.06239136 -104.02110222 45.92205754 -107.11273003 43.00994682 C-108.87556101 40.73919645 -110.43335863 38.40775002 -112 36 C-114.34525303 33.69255563 -114.34525303 33.69255563 -116.625 32.0625 C-117.33914062 31.51722656 -118.05328125 30.97195313 -118.7890625 30.41015625 C-121.116099 28.92595099 -123.41048786 27.94040178 -126 27 C-123.31367535 23.60199979 -119.71025633 22.5373171 -115.75 21.1875 C-115.00476074 20.93105713 -114.25952148 20.67461426 -113.49169922 20.41040039 C-78.76529374 8.77226593 -36.83425042 0 0 0 Z " fill="#BB86FC" transform="translate(323,264)"/>
<path d="M0 0 C9.06447625 0.68596037 18.04996231 1.69359371 27.0625 2.875 C27.74485718 2.96436829 28.42721436 3.05373657 29.13024902 3.14581299 C33.7549945 3.75302509 38.37784902 4.37335196 43 5 C43.9389209 5.12632812 44.8778418 5.25265625 45.84521484 5.3828125 C66.88391207 8.27022995 87.79987146 13.09637352 108.0625 19.4375 C108.73861328 19.64850342 109.41472656 19.85950684 110.11132812 20.0769043 C115.51719432 21.79103799 120.78900117 23.75776733 126 26 C124.24848149 27.16767901 122.4935713 28.33035538 120.73046875 29.48046875 C114.13227357 33.90967197 109.39414828 38.40877758 105 45 C103.11408043 45.36914349 103.11408043 45.36914349 100.77328491 45.36076355 C99.88704941 45.36488754 99.0008139 45.36901154 98.08772278 45.3732605 C97.11308578 45.36247467 96.13844879 45.35168884 95.13427734 45.34057617 C94.10986038 45.34101425 93.08544342 45.34145233 92.02998352 45.34190369 C88.63177669 45.33980766 85.23405852 45.31643798 81.8359375 45.29296875 C79.48467275 45.2873757 77.1334045 45.28310423 74.78213501 45.28010559 C68.58421224 45.26863397 62.38649934 45.23914676 56.18865967 45.20599365 C49.8679895 45.17534271 43.54728552 45.1616109 37.2265625 45.14648438 C24.81761597 45.11427937 12.40882541 45.06305501 0 45 C0 41.37 0 37.74 0 34 C22.44 34 44.88 34 68 34 C68 30.04 68 26.08 68 22 C45.56 22 23.12 22 0 22 C0 14.74 0 7.48 0 0 Z " fill="#BB86FC" transform="translate(27,264)"/>
<path d="M0 0 C0.97090576 0.01281006 1.94181152 0.02562012 2.94213867 0.03881836 C14.24124494 0.35877457 23.02934425 3.3589093 31.125 11.5 C32.02893683 13.21524941 32.91852754 14.93812009 33.79516602 16.66748047 C36.25469818 20.22579808 37.48179903 21.33597974 41.72311401 22.4175415 C46.36191377 22.88569937 50.99721244 22.78222776 55.65234375 22.6953125 C57.36871318 22.69910286 59.08507803 22.7072968 60.80140686 22.71969604 C65.30183341 22.74044936 69.79982382 22.70166524 74.29992676 22.65020752 C78.89854685 22.60824671 83.49695379 22.62295917 88.09570312 22.6328125 C97.10615507 22.64381073 106.11505056 22.59187339 115.125 22.5 C115.125 26.46 115.125 30.42 115.125 34.5 C86.745 34.5 58.365 34.5 29.125 34.5 C27.145 30.54 25.165 26.58 23.125 22.5 C16.44389278 15.4956134 10.81347397 12.42928624 1.125 12.125 C-7.82739124 12.41704789 -12.87303809 15.09068623 -19.69921875 20.78125 C-22.89315544 24.54398083 -22.89315544 24.54398083 -26.875 34.5 C-55.255 34.5 -83.635 34.5 -112.875 34.5 C-112.875 30.54 -112.875 26.58 -112.875 22.5 C-111.45465454 22.51784798 -111.45465454 22.51784798 -110.00561523 22.53605652 C-101.06046233 22.64124281 -92.11662485 22.6881699 -83.1708374 22.67878246 C-78.57192527 22.67580954 -73.97497033 22.69300581 -69.37646484 22.75708008 C-64.93414142 22.81822311 -60.49464586 22.8253599 -56.05203247 22.79583168 C-54.36157466 22.79393528 -52.67097883 22.81115396 -50.98092651 22.84822655 C-41.37774228 23.27965692 -41.37774228 23.27965692 -33.14526367 19.08535767 C-30.98638316 16.20981472 -30.98638316 16.20981472 -29.38989258 13.19648743 C-23.64026386 2.96222938 -10.8489097 -0.21703457 0 0 Z " fill="#BB86FC" transform="translate(173.875,297.5)"/>
<path d="M0 0 C7.04045007 6.03467149 11.05806628 14.80802611 12 24 C12.34347833 31.4772591 9.81575257 37.34250244 5 43 C1.83851719 45.8690068 -1.52220082 48.48094085 -4.88842773 51.10351562 C-14.96603475 58.98821864 -23.39584024 68.40250272 -29 80 C-33.05439056 77.88193045 -35.22374864 75.7324661 -37.75 71.9375 C-38.63945312 70.62072266 -38.63945312 70.62072266 -39.546875 69.27734375 C-42.71193116 64.31705412 -42.56004551 59.78988221 -42 54 C-39.31410903 48.04432872 -33.90191554 44.15773034 -29 40 C-15.32001042 28.23823774 -6.70305918 16.89413559 0 0 Z " fill="#BB86FC" transform="translate(240,25)"/>
<path d="M0 0 C2.9375 0.8125 2.9375 0.8125 4.9375 3.8125 C5.30226189 5.27965338 5.61140918 6.76133948 5.6875 8.0625 C6.74846232 13.18352286 9.02175637 16.39476866 12.9375 19.8125 C15.89545833 21.44716118 18.92899438 22.06327262 22.1875 22.875 C25.9375 23.8125 25.9375 23.8125 26.9375 24.8125 C27.1875 28.25 27.1875 28.25 26.9375 31.8125 C24.07905839 33.71812774 22.86498638 34.13910852 19.625 34.6875 C14.13494468 35.8479995 10.33032091 37.67352504 7.1875 42.5 C5.88770821 45.94444824 5.15422382 49.23506659 4.5625 52.859375 C3.9375 54.8125 3.9375 54.8125 0.9375 56.8125 C-2.125 56.625 -2.125 56.625 -5.0625 55.8125 C-7.0625 52.8125 -7.0625 52.8125 -7.4375 49 C-7.93073697 44.66428797 -9.06401602 42.11083238 -12.0625 38.8125 C-17.06212825 35.8726799 -22.50157639 34.31858348 -28.0625 32.8125 C-29.0625 31.8125 -29.0625 31.8125 -29.25 28.375 C-29.0625 24.8125 -29.0625 24.8125 -27.0625 22.8125 C-25.15603586 22.37013182 -23.23684733 21.98162656 -21.3125 21.625 C-16.25576327 20.39563766 -13.25846729 19.21368194 -10.1640625 14.98828125 C-8.41518539 11.53393887 -7.56737291 7.94877794 -6.80078125 4.16796875 C-5.60780231 0.36179785 -3.83136413 -0.23457331 0 0 Z " fill="#060606" transform="translate(290.0625,127.1875)"/>
<path d="M0 0 C3 0.4375 3 0.4375 4.75 1.875 C5.94004449 4.31459121 6.34799807 6.10729973 6.8125 8.75 C7.87832116 13.84412163 9.66198855 17.41078859 14 20.4375 C17.11818867 21.50810525 20.15019602 22.23150399 23.390625 22.83203125 C26 23.4375 26 23.4375 28 25.4375 C28.32051241 28.45031664 28.4851593 30.55814877 27 33.25 C25 34.4375 25 34.4375 21.3125 34.75 C16.16447656 35.20675624 12.59359221 37.83547213 9 41.4375 C6.88079781 44.91498279 6.29841002 48.45854617 5.5625 52.4140625 C5 54.4375 5 54.4375 3 56.4375 C-0.5 56.75 -0.5 56.75 -4 56.4375 C-6.02464886 53.40052671 -6.32895408 52.05890894 -6.8125 48.5625 C-7.91733895 42.6326222 -10.50986476 40.30510143 -15.25 36.75 C-18.48741223 35.20487144 -21.59744737 34.53003477 -25.109375 33.8671875 C-27 33.4375 -27 33.4375 -28 32.4375 C-28.1875 29 -28.1875 29 -28 25.4375 C-25.70934041 23.14684041 -24.85231111 23.07955185 -21.75 22.5625 C-16.63741623 21.51039273 -12.90260843 19.59533639 -9.3984375 15.62109375 C-7.38466753 12.47668757 -7.15097451 9.42081299 -6.625 5.77734375 C-5.56179178 1.79695799 -4.03192964 0.58798974 0 0 Z " fill="#060606" transform="translate(101,183.5625)"/>
<path d="M0 0 C2.9375 0.8125 2.9375 0.8125 4.9375 3.8125 C5.30226189 5.27965338 5.61140918 6.76133948 5.875 8.25 C6.60110409 11.82824097 7.4890178 14.03013387 9.9375 16.8125 C9.9375 17.4725 9.9375 18.1325 9.9375 18.8125 C14.09351469 20.75197352 18.24252429 21.49640213 22.73046875 22.25 C24.9375 22.8125 24.9375 22.8125 26.9375 24.8125 C27.49792032 30.08045096 27.49792032 30.08045096 25.6875 32.4453125 C23.61582148 34.06381134 22.20748023 34.35303844 19.625 34.75 C15.28950741 35.61709852 12.3543489 36.88377237 8.9375 39.8125 C6.24070073 43.95401317 5.34672586 48.0559916 4.5625 52.859375 C3.9375 54.8125 3.9375 54.8125 0.9375 56.8125 C-2.125 56.625 -2.125 56.625 -5.0625 55.8125 C-7.08714886 52.77552671 -7.39145408 51.43390894 -7.875 47.9375 C-8.78445036 43.13140462 -10.00762233 40.78607696 -14.0625 37.8125 C-17.61766669 36.03491666 -21.11269566 34.7689028 -24.9375 33.75 C-25.96875 33.440625 -27 33.13125 -28.0625 32.8125 C-29.44375018 30.04999964 -29.25329306 27.86518901 -29.0625 24.8125 C-26.79805803 22.54805803 -25.87555146 22.39593837 -22.8125 21.8125 C-15.99255547 20.85275263 -15.99255547 20.85275263 -10.8125 17 C-10.565 16.278125 -10.3175 15.55625 -10.0625 14.8125 C-9.7325 14.07 -9.4025 13.3275 -9.0625 12.5625 C-8.21213821 10.22400507 -7.65464072 8.0455894 -7.125 5.625 C-5.83814242 1.00745221 -4.89384055 -0.29962289 0 0 Z " fill="#060606" transform="translate(176.0625,2.1875)"/>
<path d="M0 0 C4.41854291 3.11306432 8.02390999 6.75922996 9.75 11.9375 C10.33738515 17.92882854 9.05397394 22.02965522 5.75 26.9375 C0.93548728 31.51128709 -3.27607053 33.47938046 -9.87109375 33.31640625 C-15.32201585 32.44819698 -18.99633127 29.22251045 -22.75 25.375 C-24.99392156 20.23267977 -25.00106183 15.46045971 -24.25 9.9375 C-19.35441203 -0.21631209 -10.44193302 -3.41370887 0 0 Z " fill="#070707" transform="translate(302.25,60.0625)"/>
<path d="M0 0 C4.80373898 2.65718633 8.05016447 6.08799341 9.8125 11.375 C10.34393715 17.64595838 9.66386045 22.25803668 5.8125 27.375 C1.75662438 31.31635678 -2.19734495 32.70067033 -7.8125 32.9375 C-12.63559754 32.71037352 -15.48827662 31.61182046 -19.1875 28.375 C-19.765 27.88 -20.3425 27.385 -20.9375 26.875 C-24.52497154 22.57003416 -24.60899982 18.49438319 -24.5078125 13.06640625 C-23.85518894 7.58277659 -20.20509824 3.89039846 -16.1875 0.375 C-11.26655208 -3.1399628 -5.22390983 -2.3700158 0 0 Z " fill="#060606" transform="translate(222.1875,213.625)"/>
<path d="M0 0 C4.80724455 2.31914993 9.14992171 5.91228471 11 11 C11.7019824 16.96685043 11.52873436 21.94214742 8 27 C3.44624927 31.35576157 -0.11992315 33.67999146 -6.375 34.375 C-12.19551476 33.77287778 -16.08780089 31.28780588 -19.875 27 C-23.23545194 22.25583256 -23.75923947 17.79191255 -23 12 C-21.38809624 7.28081187 -18.36337894 3.58726061 -14.18359375 0.890625 C-9.52711372 -1.00861909 -4.88522712 -0.92002951 0 0 Z " fill="#060606" transform="translate(67,116)"/>
<path d="M0 0 C3.96 0 7.92 0 12 0 C12 3.96 12 7.92 12 12 C8.04 12 4.08 12 0 12 C0 8.04 0 4.08 0 0 Z " fill="#191919" transform="translate(38,212)"/>
<path d="M0 0 C3.96 0 7.92 0 12 0 C12 3.96 12 7.92 12 12 C8.04 12 4.08 12 0 12 C0 8.04 0 4.08 0 0 Z " fill="#181818" transform="translate(89,155)"/>
<path d="M0 0 C3.63 0 7.26 0 11 0 C11 3.96 11 7.92 11 12 C7.37 12 3.74 12 0 12 C0 8.04 0 4.08 0 0 Z " fill="#101010" transform="translate(232,286)"/>
<path d="M0 0 C3.63 0 7.26 0 11 0 C11 3.63 11 7.26 11 11 C7.37 11 3.74 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#060606" transform="translate(147,241)"/>
<path d="M0 0 C3.63 0 7.26 0 11 0 C11 3.63 11 7.26 11 11 C7.37 11 3.74 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#020202" transform="translate(238,184)"/>
<path d="M0 0 C3.63 0 7.26 0 11 0 C11 3.63 11 7.26 11 11 C7.37 11 3.74 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#070707" transform="translate(175,156)"/>
<path d="M0 0 C3.63 0 7.26 0 11 0 C11 3.63 11 7.26 11 11 C7.37 11 3.74 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#050505" transform="translate(158,139)"/>
<path d="M0 0 C3.63 0 7.26 0 11 0 C11 3.63 11 7.26 11 11 C7.37 11 3.74 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#030303" transform="translate(238,110)"/>
<path d="M0 0 C2.9375 0.8125 2.9375 0.8125 4.9375 3.8125 C4.6133631 7.13490324 4.32973697 8.42026303 1.9375 10.8125 C-1.1929173 11.14552312 -3.24148298 11.28921956 -6 9.6875 C-7.0625 7.8125 -7.0625 7.8125 -6.9375 4.75 C-5.7077917 0.62169358 -4.27894903 -0.26197647 0 0 Z " fill="#5A5AE7" transform="translate(62.0625,127.1875)"/>
<path d="M0 0 C1.8125 1.125 1.8125 1.125 3 3 C3.3125 6.0625 3.3125 6.0625 3 9 C1 11 1 11 -2.5 11.3125 C-4.2325 11.1578125 -4.2325 11.1578125 -6 11 C-8.15502531 7.76746204 -8.46856135 6.74849077 -8 3 C-5.85607122 -0.27231235 -3.76836426 -0.56525464 0 0 Z " fill="#5A5AE7" transform="translate(297,70)"/>
<path d="M0 0 C3 0.25 3 0.25 5 2.25 C5.3125 5.75 5.3125 5.75 5 9.25 C1.77856724 11.39762184 0.7404533 11.811068 -3 11.25 C-4.875 9.5625 -4.875 9.5625 -6 7.25 C-5.67747519 2.7346526 -4.81889451 0.40157454 0 0 Z " fill="#5AE95A" transform="translate(215,223.75)"/>
<path d="M0 0 C3.36720387 1.39332574 4.9859524 2.9789286 7 6 C5.35 7.65 3.7 9.3 2 11 C-1.68802044 9.77065985 -2.72356973 8.06140622 -5 5 C-3.35 3.35 -1.7 1.7 0 0 Z " fill="#DA5A5A" transform="translate(288,150)"/>
<path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C4 2.66 4 3.32 4 4 C4.66 4 5.32 4 6 4 C4.79618552 6.49361571 3.54571278 8.68143083 2 11 C1.34 11 0.68 11 0 11 C-1.7143618 9.04072937 -3.38405168 7.04119788 -5 5 C-3.35 3.35 -1.7 1.7 0 0 Z " fill="#5AC55A" transform="translate(174,25)"/>
<path d="M0 0 C2.62187494 1.04874998 3.79371361 1.64931313 5.25 4.125 C5.4975 4.74375 5.745 5.3625 6 6 C4.71937515 7.7074998 3.38232443 9.37373596 2 11 C1.34 11 0.68 11 0 11 C-1.38232443 9.37373596 -2.71937515 7.7074998 -4 6 C-2.84826645 3.53199953 -1.95216435 1.95216435 0 0 Z " fill="#DA5A5A" transform="translate(100,207)"/>
</svg>
`,Jt=Us;function Wt(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Fs=null;async function Ne(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await D("/logs");if(!e.ok)throw new Error("Logs offline");let o=await e.json();if(!o||o.length===0)return t.innerHTML=J("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let i=["local-model-0","local-cache-0","upstash-redis-rw","upstash-redis-ro","easter-company","easter-company-production","dex-test-service","easter-company-root"],a=o.filter(l=>!i.includes(l.id));a.forEach(l=>{l.logs&&Array.isArray(l.logs)?l.logs.reverse():l.logs=[]}),a.reverse();let r=a.map(l=>{let f=l.logs.join(`
`),c=[...l.logs];if(c.length<25){let C=25-c.length;for(let m=0;m<C;m++)c.push("")}else c.length>25&&(c=c.slice(-25));let b=c.map(C=>Ue(C)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${l.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(f)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${l.id}" title="Clear Logs" style="${N()?"display: none;":""}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${b}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(l=>{l.addEventListener("click",()=>{let f=l,c=unescape(f.dataset.logs||"");navigator.clipboard.writeText(c).then(()=>{let b=f.querySelector("i");b&&(b.classList.remove("bx-copy"),b.classList.add("bx-check"),setTimeout(()=>{b.classList.remove("bx-check"),b.classList.add("bx-copy")},2e3))})})}),document.querySelectorAll(".clear-logs-btn").forEach(l=>{l.addEventListener("click",async()=>{let c=l.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${c}?`))try{(await D(`/logs?service_id=${c}`,{method:"DELETE"})).ok&&Ne()}catch(b){console.error("Error clearing logs:",b)}})}),Fs=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=J("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var Zt=()=>{let t=N()?"display: none;":"";return`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary ${N()?'<span style="color: #666; font-size: 0.6em; margin-left: 10px; font-weight: normal; font-style: italic;">* Public data is approximated</span>':""}</h2>
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
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Synthesis Protocol</span>
                    <span id="analyzer-synthesis-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="analyzer-synthesis-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center;">
            <i class='bx bx-cube-alt' style="color: #03dac6; font-size: 1.5em; margin-right: 10px;"></i>
            <h2>Fabricator</h2>
            <button id="fabricator-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Construction Protocol</span>
                    <span id="fabricator-construction-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="fabricator-construction-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center;">
            <i class='bx bx-paper-plane' style="color: #03dac6; font-size: 1.5em; margin-right: 10px;"></i>
            <h2>Courier</h2>
            <button id="courier-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Researcher Protocol</span>
                    <span id="courier-researcher-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="courier-researcher-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center;">
            ${Jt}
            <h2>Imaginator</h2>
            <button id="imaginator-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Alert Review Protocol</span>
                    <span id="imaginator-alert_review-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="imaginator-alert_review-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
            </div>
        </div>`},Yt=()=>`
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
        <div id="processes-history-widgets" class="system-monitor-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,Xt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
            <div id="global-service-controls" class="header-controls" style="margin-left: auto; gap: 8px; ${N()?"display: none;":"display: flex;"}">
                <button id="global-restart-btn" class="notif-action-btn" title="Restart All Services"><i class='bx bx-refresh'></i></button>
                <button id="global-stop-btn" class="notif-action-btn" title="Stop All Services"><i class='bx bx-stop'></i></button>
                <button id="global-start-btn" class="notif-action-btn" title="Start All Services"><i class='bx bx-play'></i></button>
            </div>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,Qt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,es=()=>`
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
        </div>`,ts=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${Wt()}
        </div>`;async function ss(){Js(),await Promise.all([ne(),Ce(),ot()]),await Ne()}var Ve=null;function Js(){Ve||(Ve=setInterval(()=>{if(!document.getElementById("guardian-sentry-val")){clearInterval(Ve),Ve=null;return}ne(!0)},1e3))}var Gt=null,Vt=null;async function ns(){try{return await(await D("/system_monitor")).json()}catch{return null}}async function Kt(){try{return await(await D("/system/hardware")).json()}catch{return null}}async function Ws(){try{return await(await D("/processes")).json()}catch{return null}}async function Gs(){try{return await(await D("/agent/status")).json()}catch{return null}}async function Ce(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),o=document.getElementById("global-restart-btn"),i=document.getElementById("global-stop-btn"),a=document.getElementById("global-start-btn"),r=(s,g)=>{s&&!s.dataset.listenerAttached&&(s.onclick=async()=>{let w=s.innerHTML;s.innerHTML="<i class='bx bx-loader-alt spin'></i>",s.disabled=!0;try{await D(`/system/service/${g}`,{method:"POST",body:JSON.stringify({service:"all"})}),setTimeout(()=>Ce(),2e3),setTimeout(()=>Ce(),5e3),setTimeout(()=>{s.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{s.innerHTML=w,s.disabled=!1},1e3)},1e3)}catch(p){console.error(p),s.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{s.innerHTML=w,s.disabled=!1},2e3)}},s.dataset.listenerAttached="true")};r(o,"restart"),r(i,"stop"),r(a,"start");let l=document.querySelector("#hw-os .hw-content"),f=document.querySelector("#hw-cpu .hw-content"),c=document.querySelector("#hw-ram .hw-content"),b=document.querySelector("#hw-gpu .hw-content"),C=document.querySelector("#hw-storage .hw-content"),m=s=>{if(s){if(l&&(l.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${s.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${s.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),c){let g=(s.MEMORY_BYTES/1073741824).toFixed(1);c.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${g} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(f&&s.CPU&&s.CPU.length>0){let g=s.CPU[0];f.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${g.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${g.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${g.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}b&&(s.GPU&&s.GPU.length>0?b.innerHTML=s.GPU.map(g=>{let w=(g.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${g.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):b.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),C&&s.STORAGE&&s.STORAGE.length>0?C.innerHTML=s.STORAGE.map(g=>{let w=(g.USED/1073741824).toFixed(1),p=(g.SIZE/(1024*1024*1024)).toFixed(1),$=g.SIZE>0?(g.USED/g.SIZE*100).toFixed(0):0,A=g.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${g.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${A}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${w} GB Used</span>
                            <span>${p} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${Number($)>90?"#cf6679":"#03dac6"}; width: ${$}%; height: 100%; box-shadow: 0 0 10px ${Number($)>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):C&&(C.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>";let s=await Kt();s?(m(s),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)):(e.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3))},e.dataset.listenerAttached="true"),f&&!f.hasChildNodes())){let s=await Kt();m(s)}if(!t)return;t.dataset.controlsAttached||(t.addEventListener("click",async s=>{let g=s.target.closest(".svc-btn");if(!g)return;let w=g,p=w.dataset.action,$=w.dataset.service;if(!p||!$)return;let A=w.innerHTML;w.innerHTML="<i class='bx bx-loader-alt spin'></i>",w.classList.add("loading"),w.disabled=!0;try{await D(`/system/service/${p}`,{method:"POST",body:JSON.stringify({service:$})}),setTimeout(()=>Ce(),1e3),setTimeout(()=>Ce(),3e3)}catch(S){console.error(S),alert(`Failed to ${p} ${$}`),w.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{w.innerHTML=A,w.classList.remove("loading"),w.disabled=!1},2e3)}}),t.dataset.controlsAttached="true");let x=await ns();if(!x||!x.services){t.children.length===0&&(t.innerHTML=J("offline","Failed to load system metrics.","The event service may be offline."));let s=document.querySelector('[data-service-id="upstash-redis-ro"]');if(s){s.className="service-widget service-widget-offline",s.querySelector(".service-widget-status").textContent="ERROR";let g=s.querySelector(".service-widget-body");g&&(g.innerHTML='<div class="service-widget-footer offline"><span>CONNECTION FAILED</span></div>')}return}Gt=N()&&re.lastDashboard||Date.now(),te(0,Gt||0);let n=x.services||[];window.updateCountdownInterval||(window.updateCountdownInterval=setInterval(()=>{let s=document.getElementById("upstash-countdown");if(s){let p=59-new Date().getSeconds();p<=0&&(p+=60),s.textContent=`${p}s`}},1e3)),Array.from(t.children).forEach(s=>{s.classList.contains("service-widget")||s.remove()});function u(s){if(!s||s==="N/A"||s==="unknown")return"-";let g=s.match(/^(\d+\.\d+\.\d+)/);return g?g[0]:s.split(".").slice(0,3).join(".")||"-"}function T(s){return!s||s.length<=28?s:s.substring(0,28)+"..."}function z(s){if(!s||s==="N/A"||s==="unknown")return"-";let g=s.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!g)return"-";let w=parseInt(g[1])||0,p=parseInt(g[2])||0,$=parseInt(g[3])||0,A=parseFloat(g[4])||0,S=w*86400+p*3600+$*60+A,B=Math.floor(S/86400);if(B>0)return`${B}d`;let W=Math.floor(S/3600);if(W>0)return`${W}h`;let q=Math.floor(S/60);return q>0?`${q}m`:`${Math.floor(S)}s`}function v(s){if(s.id==="upstash-redis-ro"){let G=N()&&(re.lastFrontend||re.lastDashboard)||Date.now();return`
            <div class="service-widget service-widget-online" data-service-id="upstash-redis-ro">
                <div class="service-widget-header">
                    <i class="bx bx-check-circle"></i>
                    <h3>public-cache</h3>
                    <span class="service-widget-status">OK</span>
                </div>
                <div class="service-widget-body" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 0;">
                    <div style="font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Next Update In</div>
                    <div id="upstash-countdown" style="font-size: 2em; font-weight: bold; color: #fff; font-family: monospace;">--</div>
                    <div class="sync-time-label" style="font-size: 0.6em; color: #444; margin-top: 10px;">Last synced: ${new Date(G).toLocaleTimeString()}</div>
                </div>
            </div>`}let g=s.status==="online",w=g?"service-widget-online":"service-widget-offline",p=g?"bx-check-circle":"bx-x-circle",$=g?"OK":"BAD",A=s.version?u(s.version.str):"-",S=s.cpu&&s.cpu!=="N/A"?s.cpu:"-",B=s.memory&&s.memory!=="N/A"?s.memory:"-",W=S!=="-"?"#00ff00":"#666",q=S!=="-"?"#fff":"#666",V=B!=="-"?"#00ff00":"#666",H=B!=="-"?"#fff":"#666",E=z(s.uptime),L="",M=s.type!=="os"&&s.type!=="cli"&&s.type!=="prd",O="";M&&!N()&&(O=`
            <div class="service-controls" style="display: flex; gap: 8px; margin-top: 10px; justify-content: flex-end;">
                <button class="svc-btn svc-restart" title="Restart Service" data-action="restart" data-service="${s.id}"><i class='bx bx-refresh'></i></button>
                <button class="svc-btn svc-stop" title="Stop Service" data-action="stop" data-service="${s.id}" ${g?"":"disabled"}><i class='bx bx-stop'></i></button>
                <button class="svc-btn svc-start" title="Start Service" data-action="start" data-service="${s.id}" ${g?"disabled":""}><i class='bx bx-play'></i></button>
            </div>`),g?L=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${A}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${E}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${W};"></i>
                        <span style="color: ${q};">${S}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${V};"></i>
                        <span style="color: ${H};">${B}</span>
                    </div>
                </div>${O}`:L=`<div class="service-widget-footer offline" style="justify-content: center; opacity: 0.5; letter-spacing: 2px; font-weight: bold;"><span>OFFLINE</span></div>${O}`;let P=N()?"easter.company":T(s.domain&&s.port?`${s.domain}:${s.port}`:"");return`<div class="service-widget ${w}" data-service-id="${s.id}"><div class="service-widget-header"><i class="bx ${p}"></i><h3>${s.short_name||s.id}</h3><span class="service-widget-status">${$}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${P}</span></div>${L}</div></div>`}let d=new Map(Array.from(t.querySelectorAll(".service-widget")).map(s=>[s.dataset.serviceId,s])),h=new Set(n.map(s=>s.id));for(let[s,g]of d)h.has(s)||g.remove();let y=new Set,I=["upstash-redis-rw","upstash-redis-ro","easter-company","easter-company-production","dex-test-service","easter-company-root"];n.forEach(s=>{if(y.has(s.id)||I.includes(s.id))return;y.add(s.id);let g=v(s),w=d.get(s.id);if(w&&w.parentNode)if(s.id==="upstash-redis-ro"){let p=N()&&(re.lastFrontend||re.lastDashboard)||Date.now(),$=new Date(p).toLocaleTimeString(),A=w.querySelector(".sync-time-label");A&&(A.textContent=`Last synced: ${$}`)}else w.outerHTML!==g&&(w.outerHTML=g);else t.insertAdjacentHTML("beforeend",g)})}async function ot(){let t=document.getElementById("models-widgets");if(!t)return;let e=await ns();if(!e){t.children.length===0&&(t.innerHTML=J("offline","Failed to load model status.","The event service may be offline."));return}Vt=Date.now(),te(2,Vt);let o=e.models||[],i=e.whisper;Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function a(c){let b=c.status==="Ready";return`
                <div class="service-widget ${b?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${b?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${c.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function r(c){let b=c.status==="Ready";return`
                <div class="service-widget ${b?"service-widget-online":"service-widget-offline"}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx bx-volume-full"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${b?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${c.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">xtts</span>
                        </div>
                    </div>
                </div>`}function l(c){let b=c.status==="Downloaded",C=b?"service-widget-online":"service-widget-offline",m=b?"OK":"MISSING",x=b&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",n=c.name;return c.type==="custom"&&n.endsWith(":latest")&&(n=n.replace(":latest","")),`<div class="service-widget ${C}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${b?"bx-check-circle":"bx-x-circle"}"></i><h3>${n}</h3><span class="service-widget-status">${m}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${x}</span></div></div></div>`}let f="";if(i&&(f+=a(i)),e.xtts&&(f+=r(e.xtts)),f+=o.map(l).join(""),!f){t.innerHTML=J("empty","No models found.");return}t.innerHTML!==f&&(t.innerHTML=f)}async function ne(t=!1){let e=document.getElementById("processes-widgets");if(!e&&!t)return;let o=document.getElementById("guardian-sentry-val"),i=document.getElementById("guardian-idle-val"),a=document.getElementById("guardian-total-idle"),r=document.getElementById("guardian-total-active"),l=document.getElementById("guardian-total-waste"),f=document.getElementById("guardian-reset-btn"),c=document.getElementById("analyzer-reset-btn"),b=document.getElementById("fabricator-reset-btn"),C=document.getElementById("courier-reset-btn"),m=document.getElementById("system-pause-toggle-btn");m&&!m.dataset.listenerAttached&&(m.onclick=async()=>{let I=m.querySelector(".bx-play")?"/agent/resume":"/agent/pause";m.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await D(I,{method:"POST"}),await ne()}catch{m.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>ne(),2e3)}},m.dataset.listenerAttached="true"),f&&!f.dataset.listenerAttached&&(f.onclick=async()=>{f.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await D("/agent/reset?protocol=all",{method:"POST"}),setTimeout(()=>{f.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{f.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{f.innerHTML="<i class='bx bx-error'></i>"}},f.dataset.listenerAttached="true"),c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{c.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await D("/agent/reset?protocol=synthesis",{method:"POST"}),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{c.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{c.innerHTML="<i class='bx bx-error'></i>"}},c.dataset.listenerAttached="true"),b&&!b.dataset.listenerAttached&&(b.onclick=async()=>{b.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await D("/agent/reset?protocol=construction",{method:"POST"}),setTimeout(()=>{b.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{b.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{b.innerHTML="<i class='bx bx-error'></i>"}},b.dataset.listenerAttached="true"),C&&!C.dataset.listenerAttached&&(C.onclick=async()=>{C.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await D("/agent/reset?protocol=researcher",{method:"POST"}),setTimeout(()=>{C.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{C.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{C.innerHTML="<i class='bx bx-error'></i>"}},C.dataset.listenerAttached="true");let x=document.getElementById("imaginator-reset-btn");x&&!x.dataset.listenerAttached&&(x.onclick=async()=>{x.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await D("/agent/reset?protocol=alert_review",{method:"POST"}),setTimeout(()=>{x.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{x.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{x.innerHTML="<i class='bx bx-error'></i>"}},x.dataset.listenerAttached="true");let n=await Gs();if(n&&n.agents){let y=n.agents.guardian||{protocols:{}},I=n.agents.analyzer||{protocols:{}},s=n.agents.imaginator||{protocols:{}},g=n.agents.fabricator||{protocols:{}},w=n.agents.courier||{protocols:{}},p=n.system||{},$=Math.floor(Date.now()/1e3),A={sentry:"Sentry",synthesis:"Synthesis",alert_review:"Alert Review",construction:"Construction",researcher:"Researcher"},S=k=>{k<0&&(k=0);let _=Math.floor(k/3600),R=Math.floor(k%3600/60),U=k%60;return _>0?`${_}h ${R}m`:R>0?`${R}m ${U}s`:`${U}s`},B=(k,_,R,U,Y)=>{if(!k)return;let K=A[U]||U.toUpperCase(),Ee=k.parentElement?.querySelector('span[style*="text-transform: uppercase"]');if(Ee&&(Ee.textContent=K),Y==="paused"){k.textContent="PAUSED",k.style.color="#ff9800";return}if(!R){k.textContent="Inactive",k.style.color="#666";return}let Re=R.status;if(Re==="Working")k.textContent="Working",k.style.color="#bb86fc";else if(Re==="Ready")k.textContent="Ready",k.style.color="#5eff5e";else{let Te=R.cooldown;if(N()&&(Te=R.next_run-$),Te<=0)k.textContent="Ready",k.style.color="#5eff5e";else{let Ze=Math.floor(Te/60),Pe=Te%60;k.textContent=`${Ze}m ${Pe}s`,k.style.color="#fff"}}_&&R.stats&&(_.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <span>Runs: ${R.stats.runs||0}</span>
              <span style="color: ${R.stats.failures>0?"#ffa500":"#666"}">Fails: ${R.stats.failures||0}</span>
              <span style="color: ${R.stats.aborted>0?"#ff4d4d":"#666"}">Aborted: ${R.stats.aborted||0}</span>
            </div>
          `)};o&&B(o,document.getElementById("guardian-sentry-stats"),y.protocols.sentry,"sentry",p.state);let W=document.getElementById("analyzer-synthesis-val"),q=document.getElementById("analyzer-synthesis-stats");W&&B(W,q,I.protocols.synthesis,"synthesis",p.state);let V=document.getElementById("imaginator-alert_review-val"),H=document.getElementById("imaginator-alert_review-stats");V&&B(V,H,s.protocols.alert_review,"alert_review",p.state);let E=document.getElementById("fabricator-construction-val"),L=document.getElementById("fabricator-construction-stats");E&&B(E,L,g.protocols.construction,"construction",p.state);let M=document.getElementById("courier-researcher-val"),O=document.getElementById("courier-researcher-stats");M&&B(M,O,w.protocols.researcher,"researcher",p.state);let P=document.getElementById("system-state-label"),G=document.getElementById("system-state-val");if(G&&p.state){let k=p.state,_=S(p.state_time||0);P&&(P.textContent=`State: ${k.toUpperCase()}`),G.textContent=_,k==="idle"?G.style.color=p.state_time>300?"#5eff5e":"#fff":G.style.color="#bb86fc",m&&(k==="paused"?(m.innerHTML="<i class='bx bx-play'></i>",m.title="Resume System",m.style.color="#ff9800"):(m.innerHTML="<i class='bx bx-pause'></i>",m.title="Pause System",m.style.color=""))}a&&(a.textContent=S(p.metrics?.total_idle_time||0)),r&&(r.textContent=S(p.metrics?.total_active_time||0)),l&&(l.textContent=S(p.metrics?.total_waste_time||0))}else[o,i,a,r,l].forEach(I=>{I&&(I.textContent="-",I.style.color="#666")});if(t)return;let u=await Ws(),T=[],z=[],v=[];u&&(Array.isArray(u)?T=u:(T=u.active||[],z=u.queue||[],v=u.history||[],v.sort((y,I)=>(I.end_time||0)-(y.end_time||0)))),e&&(T.length===0?e.querySelector(".tab-placeholder")||(e.innerHTML=J("empty","No active processes.")):((e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML=""),at(e,T,!1)));let d=document.getElementById("processes-queue-widgets");d&&(z.length===0?!d.querySelector(".tab-placeholder")&&!d.querySelector('div[style*="font-style: italic"]')&&(d.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(d.innerHTML="",at(d,z,!1)));let h=document.getElementById("processes-history-widgets");h&&(v.length===0?h.querySelector(".tab-placeholder")||(h.innerHTML=J("empty","No recent history.")):(h.querySelector(".tab-placeholder")&&(h.innerHTML=""),at(h,v,!0))),qe(1,T.length)}function at(t,e,o){function i(c){let b="";c.end_time?b=`${c.end_time-c.start_time}s`:b=`${Math.floor(Date.now()/1e3-c.start_time)}s`;let C=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",m=c.channel_id,x={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation","system-analyzer":"Analyzer Agent","system-courier":"Courier Agent","system-imaginator":"Imaginator Agent","system-fabricator":"Fabricator Agent","voice-mode":"Voice Interaction"};if(x[m]?m=x[m]:/^\d+$/.test(m)&&(m=`Channel ${m}`),o)return`
        <div class="process-history-item" data-channel-id="${c.channel_id}-${c.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${m}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${c.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${c.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${b}</span>
            </div>
        </div>`;let n="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}-${c.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${n}"></i>
                        <h3 style="color: ${n}">${m}</h3>
                        ${C}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${n}">${c.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${n}">${b}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${n}">${c.pid}</span>
                        </div>
                    </div>
                </div>`}let a=o?".process-history-item":".process-widget",r=new Map(Array.from(t.querySelectorAll(a)).map(c=>[c.dataset.channelId,c])),l=new Set(e.map(c=>`${c.channel_id}-${c.start_time}`));for(let[c,b]of r)c&&!l.has(c)&&b.remove();let f=new Set;e.forEach(c=>{let b=`${c.channel_id}-${c.start_time}`;if(f.has(b))return;f.add(b);let C=i(c),m=r.get(b);if(m&&m.parentNode){m.outerHTML!==C&&(m.outerHTML=C);let x=t.querySelector(`[data-channel-id="${b}"]`);x&&t.appendChild(x)}else t.insertAdjacentHTML("beforeend",C)})}function Ke(){let t=Xe(),e="Notification"in window,o={enabled:e&&Notification.permission==="granted",supported:e};return`
            <div class="theme-selector">
                ${Object.values(ee).map(i=>`
                    <div class="theme-card ${t===i?"active":""}" data-theme="${i}">
                        <div class="theme-preview theme-preview-${i.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${i.charAt(0).toUpperCase()+i.slice(1)}</h3>
                            <p>${i===ee.DARK?"Simple, clean, dark.":i===ee.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
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
                            <span class="settings-item-description">${o.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${o.enabled?"checked":""} ${o.supported?"":"disabled"}>
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
            </div>`}function rt(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(i=>{i.addEventListener("click",function(){let a=this.dataset.theme;a&&(gt(a),t.setContent(Ke()),rt(t))})});let o=document.getElementById("notifications-toggle");o&&"Notification"in window?o.onclick=async i=>{let a=i.target;if(a.checked)try{await Notification.requestPermission()!=="granted"&&(a.checked=!1)}catch{a.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.checked=!0)}:o&&(o.disabled=!0),Vs()}async function Vs(){let t=document.getElementById("service-config-list");if(!t)return;let e=N();try{let i=await(await D("/system/options")).json(),a=i.services||i||{},r="",l=(f,c,b)=>`

        <div class="settings-item">

            <div class="settings-item-info">

                <span class="settings-item-label">${f}</span>

                <span class="settings-item-description">Enable GPU acceleration (CUDA)</span>

            </div>

            <label class="toggle-switch">

                <input type="checkbox" class="service-device-toggle" data-service="${c}" ${b==="cuda"?"checked":""} ${e?"disabled":""}>

                <span class="toggle-slider"></span>

            </label>

        </div>`;if(a.stt&&(r+=l("STT Service","stt",a.stt.device||"cpu")),a.tts&&(r+=l("TTS Service","tts",a.tts.device||"cpu")),r?e&&(r+='<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Service configuration is read-only in public mode.</div>'):r='<div style="padding: 20px; text-align: center; color: #666;">No configurable services found.</div>',t.innerHTML=r,e)return;t.querySelectorAll(".service-device-toggle").forEach(f=>{f.addEventListener("change",async c=>{let b=c.target,C=b.dataset.service,m=b.checked?"cuda":"cpu";b.disabled=!0;try{await D("/system/options",{method:"POST",body:JSON.stringify({service:C,key:"device",value:m})})}catch{b.checked=!b.checked,alert("Failed to update configuration.")}finally{b.disabled=!1}})})}catch{t.innerHTML='<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load configuration.</div>'}}var as=()=>`
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
    `;async function os(){let t=document.getElementById("web-history-content");if(!t)return;let e=document.getElementById("web-refresh-btn");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await is(t),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),await is(t)}async function is(t){try{let e=await D("/web/history");if(!e.ok)throw new Error("Failed to fetch history");let o=await e.json();if(!o||o.length===0){t.innerHTML=J("empty","No web history found.");return}let i=`
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div class="web-carousel" style="flex: 1; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 20px; padding-bottom: 5px; scroll-behavior: smooth; min-height: 0;">
        `;o.forEach((f,c)=>{let b=new Date(f.timestamp*1e3).toLocaleString([],{dateStyle:"short",timeStyle:"short"}),C=f.screenshot?`<img src="data:image/png;base64,${f.screenshot}" style="width: 100%; max-height: 45%; object-fit: contain; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px; flex-shrink: 0; background: #000;">`:`<div style="width: 100%; height: 120px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #444; margin-bottom: 15px; border-radius: 8px; flex-shrink: 0;">
            <i class='bx bx-image-alt' style="font-size: 2.5rem; margin-bottom: 8px; opacity: 0.3;"></i>
            <span style="font-size: 0.7em; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 1px; opacity: 0.5;">No Screenshot Available</span>
           </div>`;i+=`
                <div class="web-card" style="flex: 0 0 100%; height: 100%; display: flex; flex-direction: column; scroll-snap-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; box-sizing: border-box; max-width: 100%; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px; flex-shrink: 0;">
                        <span style="color: #03dac6; font-weight: bold; font-family: monospace;">#${c+1}</span>
                        <span style="color: #888; font-size: 0.8em; font-family: monospace;">${b}</span>
                    </div>
                    <h3 style="margin-bottom: 5px; color: #fff; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; font-size: 1.1em;">${f.title||"No Title"}</h3>
                    <a href="${f.url}" target="_blank" style="color: #bb86fc; font-size: 0.8em; margin-bottom: 15px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; text-decoration: none;">${f.url}</a>
                    
                    ${C}

                    <div style="flex: 1; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px; overflow-y: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; color: #aaa; white-space: pre-wrap; border: 1px solid rgba(255,255,255,0.03);">${f.content?f.content.replace(/</g,"&lt;").replace(/>/g,"&gt;"):"No content available"}</div>
                </div>
            `}),i+=`
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 0 0; flex-shrink: 0;">
                    <button id="web-prev-btn" class="notif-action-btn" style="margin-right: auto;"><i class='bx bx-left-arrow-alt'></i> Prev</button>
                    <span style="color: #555; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px;">Swipe to navigate</span>
                    <button id="web-next-btn" class="notif-action-btn" style="margin-left: auto;">Next <i class='bx bx-right-arrow-alt'></i></button>
                </div>
            </div>
        `,t.innerHTML=i;let a=t.querySelector(".web-carousel"),r=t.querySelector("#web-prev-btn"),l=t.querySelector("#web-next-btn");r&&(r.onclick=()=>{a.scrollBy({left:-a.offsetWidth,behavior:"smooth"})}),l&&(l.onclick=()=>{a.scrollBy({left:a.offsetWidth,behavior:"smooth"})})}catch(e){t.innerHTML=J("error","Failed to load web history.",e.message)}}var cs=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It maintains system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1] [--force]
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
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Ks=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
    `;for(let[o,i]of Object.entries(t)){let a=cs.filter(r=>r.category===o);a.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${i.icon}' style="color: ${i.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${i.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${a.map(r=>`
                        <div class="cli-command-card ${r.dummy?"dummy":""}" data-cmd="${r.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${i.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${r.icon}' style="font-size: 2em; color: ${i.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${r.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${r.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${i.color}; position: relative; z-index: 1;">
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
    </div>`,e},lt=!1;function Zs(t){let e=document.getElementById("cli-terminal-overlay");if(!e){e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e);let c=document.getElementById("close-terminal-btn");c&&(c.onclick=()=>rs());let b=document.getElementById("terminal-action-btn");b&&(b.onclick=()=>rs())}let o=document.getElementById("cli-terminal-body"),i=document.getElementById("cli-docs-pane");o&&(o.innerHTML="");let a=t.docs||{overview:t.description,details:[],extended_usage:t.usage};i&&(i.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${a.overview}</p>
        </div>
        ${a.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${a.details.map(c=>`<li>${c}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${a.extended_usage}</pre>
        </div>
    `);let r=document.getElementById("terminal-cmd-name");r&&(r.textContent=`dex ${t.id}`);let l=document.getElementById("terminal-status-badge");l&&(l.className="terminal-status status-running",l.textContent="Running");let f=document.getElementById("terminal-action-btn");return f&&(f.style.display="none"),e.classList.add("active"),document.body.style.overflow="hidden",lt=!0,o}function rs(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),ie()||(document.body.style.overflow=""),lt=!1}function ls(t,e,o="output"){if(!lt||!t)return;let i=document.createElement("div");if(i.className=`terminal-line terminal-${o}`,o==="prompt")i.innerHTML=`<span class="terminal-prompt">$</span> ${e}`;else{let a=Ue(e);i.innerHTML=a||e}t.appendChild(i),t.scrollTop=t.scrollHeight}async function Ys(t){let e=cs.find(l=>l.id===t);if(!e)return;let o=Zs(e);o&&ls(o,`dex ${t}`,"prompt");let i=e.demo_output||["Executing command...","\u2713 Done."];for(let l of i){await new Promise(c=>setTimeout(c,400+Math.random()*600));let f="output";l.includes("[ERROR]")?f="error":l.includes("[SUCCESS]")||l.includes("\u2713")?f="success":l.includes("!")&&(f="warning"),o&&ls(o,l,f)}let a=document.getElementById("terminal-status-badge");a&&(a.className="terminal-status status-success",a.textContent="Completed (Demo)");let r=document.getElementById("terminal-action-btn");r&&(r.style.display="block")}function ds(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Ks();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let o=e.querySelector("code"),i=o?o.textContent:"";i&&navigator.clipboard.writeText(i).then(()=>{let a=e.querySelector("i");a&&(a.className="bx bx-check",a.style.color="#5eff5e",setTimeout(()=>{a.className="bx bx-copy",a.style.color="#bb86fc"},2e3))})}),t.querySelectorAll(".cli-command-card").forEach(o=>{let i=o;o.addEventListener("mouseenter",()=>{i.style.transform="translateY(-5px)",i.style.borderColor="rgba(255,255,255,0.15)",i.style.backgroundColor="rgba(255,255,255,0.05)"}),o.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)",i.style.borderColor="rgba(255,255,255,0.05)",i.style.backgroundColor="rgba(255,255,255,0.03)"}),o.addEventListener("click",()=>{let a=i.dataset.cmd;a&&Ys(a)})})}async function Xs(){if(!N())try{if(!(await D("/system/status",{method:"GET"})).ok)throw new Error("Service unhealthy")}catch(t){console.error("Service health check failed:",t)}}function ps(){if(window.location.protocol==="http:"&&window.location.hostname==="easter.company"){window.location.replace("https://"+window.location.hostname+window.location.pathname+window.location.search);return}pt(),mt(),Xs(),vt(),dt();let t=window.location.pathname;(t==="/dexter"||t==="/dexter/")&&ds();let e=[],o=document.getElementById("windows-container");o&&o.setAttribute("data-count","0");let i=v=>{localStorage.setItem("dex_last_window",v)};function a(){for(;e.length>1;)e.shift().close(!0);let v=document.getElementById("windows-container"),d=document.querySelector("nav"),h=document.querySelector("footer"),y=window.location.pathname==="/"||window.location.pathname==="/index.html",I=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");v&&v.setAttribute("data-count",e.length.toString()),e.forEach(S=>{let B=document.getElementById(S.id);B&&B.classList.remove("hide-close")});let s=document.getElementById("dexter-menu-container"),g=document.getElementById("nav-window-switcher"),w=document.getElementById("settings-icon"),p=document.getElementById("docs-icon"),$=document.getElementById("close-all-windows"),A=window.innerWidth<880;if(!A){let S=document.getElementById("dexter-dropdown"),B=document.getElementById("dexter-menu-btn");S&&S.classList.remove("active"),B&&B.classList.remove("active"),v&&v.classList.remove("menu-open")}if($e(e.length>0),e.length>0)if(h?.classList.add("hide"),$&&($.style.display=A?"none":"block"),document.querySelector("main")?.style.setProperty("opacity","0","important"),document.body.style.overflow="hidden",d?.classList.add("window-open"),v&&(v.style.paddingTop="60px"),s&&(s.style.display=A?"flex":"none"),p&&(p.style.display=A?"block":"none"),w&&(w.style.display=A?"block":"none"),!A&&g){let S=e[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(S)?(g.innerHTML=`
                      <div class="nav-switch-btn ${S==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${S==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${S==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${S==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${S==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts")?.addEventListener("click",()=>{i("alerts-window"),r(f)}),document.getElementById("switch-events")?.addEventListener("click",()=>{i("events-window"),r(c)}),document.getElementById("switch-monitor")?.addEventListener("click",()=>{i("monitor-window"),r(C)}),document.getElementById("switch-contacts")?.addEventListener("click",()=>{i("contacts-window"),r(b)}),document.getElementById("switch-workspace")?.addEventListener("click",()=>{i("workspace-window"),r(m)})):g.innerHTML=""}else g&&(g.innerHTML="");else d?.classList.remove("window-open"),$&&($.style.display="none"),v&&(v.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),ie()||(document.body.style.overflow=""),y||I?h?.classList.remove("hide"):h?.classList.add("hide"),s&&(s.style.display="flex"),p&&(p.style.display="block"),w&&(w.style.display="block"),g&&(g.innerHTML="");Le()}function r(v){if(v.isOpen()){v.close();return}for(;e.length>0;)e.pop().close(!0);e.push(v),v.open(),a()}function l(){[...e].forEach(d=>d.close()),e=[]}window.addEventListener("resize",a);let f=ue({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Tt(),onOpen:()=>pe(),onClose:()=>{let v=e.indexOf(f);v>-1&&e.splice(v,1),a()}}),c=ue({id:"events-window",title:"Events",icon:"bx-calendar-event",content:it(),onOpen:()=>{c.setContent(it()),me()},onClose:()=>{let v=e.indexOf(c);v>-1&&e.splice(v,1),a()}}),b=ue({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:Ut(),onOpen:()=>nt(),onClose:()=>{let v=e.indexOf(b);v>-1&&e.splice(v,1),a()}}),C=ue({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:Xt()},{icon:"bxs-component",title:"Processes",content:Yt()},{icon:"bxs-brain",title:"Models",content:Qt()},{icon:"bx-globe",title:"Web",content:as()},{icon:"bxs-hdd",title:"Hardware",content:es()},{icon:"bxs-terminal",title:"Logs",content:ts()},{icon:"bxs-zap",title:"Agents",content:Zt()}].filter(v=>N()?v.title!=="Hardware"&&v.title!=="Logs":!0),onOpen:()=>{Ce(),ne(),ot(),os(),Ne()},onClose:()=>{let v=e.indexOf(C);v>-1&&e.splice(v,1),a()}}),m=ue({id:"workspace-window",title:"Workspace",icon:"bx-brain",tabs:[{icon:"bx-loader-circle",title:"Progress",content:Rt()},{icon:"bx-map-alt",title:"Roadmap",content:Pt()},{icon:"bx-paint",title:"Blueprints",content:Ot()},{icon:"bx-task",title:"Tasks",content:jt()}],onOpen:()=>st(),onClose:()=>{let v=e.indexOf(m);v>-1&&e.splice(v,1),a()}}),x=ue({id:"settings-window",title:"Settings",icon:"bx-cog",content:Ke(),onOpen:()=>{x.setContent(Ke()),rt(x)},onClose:()=>{let v=e.indexOf(x);v>-1&&e.splice(v,1),a()}});window.dexter={viewEvent:v=>{c.isOpen()||r(c),setTimeout(()=>{let d=document.querySelector(`.event-item[data-event-id="${v}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)},viewAlert:v=>{f.isOpen()||r(f),setTimeout(()=>{let d=document.querySelector(`.event-item[data-alert-id="${v}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)}};let n=()=>{let v=document.getElementById("dexter-dropdown"),d=document.getElementById("dexter-menu-btn");v&&d&&(v.classList.remove("active"),d.classList.remove("active"),window.innerWidth<880&&document.getElementById("windows-container")?.classList.remove("menu-open"))};(()=>{let v=document.getElementById("dexter-menu-btn"),d=document.getElementById("settings-icon"),h=document.getElementById("docs-icon"),y=document.getElementById("close-all-windows"),I=document.getElementById("nav-left-container"),s=document.getElementById("dexter-dropdown"),g=document.getElementById("windows-container");v&&s&&(v.onclick=p=>{p.stopPropagation();let $=window.innerWidth<880;if($)s.style.top="",s.style.left="",s.style.right="",s.style.transform="";else{let S=v.getBoundingClientRect(),W=document.querySelector("nav").getBoundingClientRect(),q=220,V=10,E=S.left+S.width/2-q/2,L=W.right-10;E+q>L&&(E=L-q),E<10&&(E=10),s.style.top=W.bottom+V+"px",s.style.left=E+"px",s.style.right="auto",s.style.transform="none"}s.classList.toggle("active"),v.classList.toggle("active");let A=s.classList.contains("active");if($){let S=document.querySelector("nav");A?(document.querySelector("footer")?.classList.add("hide"),document.querySelector("main")?.style.setProperty("opacity","0","important"),S?.classList.add("window-open"),g?.classList.add("menu-open"),$e(!0)):(g?.classList.remove("menu-open"),e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),S?.classList.remove("window-open"),ie()||$e(!1)))}}),d&&(d.onclick=p=>{p.stopPropagation(),r(x)}),h&&(h.onclick=p=>{p.stopPropagation(),window.location.href="/docs"}),y&&(y.onclick=p=>{p.stopPropagation(),l()});let w=(p,$,A)=>{let S=document.getElementById(p);S&&(S.onclick=B=>{B.stopPropagation(),n(),A&&i(A),r($)})};w("alerts-menu-item",f,"alerts-window"),w("events-menu-item",c,"events-window"),w("monitor-menu-item",C,"monitor-window"),w("contacts-menu-item",b,"contacts-window"),w("workspace-menu-item",m,"workspace-window"),I&&(I.onclick=p=>{if(p.stopPropagation(),s&&s.classList.contains("active")){n(),window.innerWidth<880&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),ie()||$e(!1));return}if(e.length>0)l();else{let $=window.location.pathname;if(!($==="/"||$==="/index.html")){let S=$.endsWith("/")&&$.length>1?$.slice(0,-1):$;if(S.includes("/docs/page/")){window.location.href="/";return}let B=S.split("/");B.pop();let W=B.join("/")||"/";window.location.href=W}}}),document.addEventListener("click",()=>{let p=window.innerWidth<880;s&&s.classList.contains("active")&&(n(),p&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),ie()||$e(!1)))}),s&&(s.onclick=p=>p.stopPropagation())})();let T=window.location.pathname==="/"||window.location.pathname==="/index.html",z=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!T&&!z&&document.querySelector("footer")?.classList.add("hide"),N()||setInterval(()=>{c.isOpen()&&me(),f.isOpen()?pe():tt()},1e3),setInterval(()=>{N()&&(f.isOpen()?pe():tt()),m.isOpen()?st():Bt(),N()&&c.isOpen()&&me(),C.isOpen()&&ss()},5e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ps):ps();})();
