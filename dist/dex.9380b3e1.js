"use strict";(()=>{function ct(){if(!document.querySelector(".grid-overlay")){let t=document.createElement("div");t.className="grid-overlay",document.body.prepend(t)}}function dt(){let t=window.location.pathname,e=t==="/"||t==="/index.html",i=`
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
    
    `,r=document.createElement("nav");r.innerHTML=i,document.body.prepend(r);let o=document.createElement("div");o.id="dexter-dropdown",o.className="dexter-dropdown",o.innerHTML=`
        <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
        <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
        <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
        <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
        <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
    `,document.body.appendChild(o)}function Te(t){let e=window.location.pathname,a=e==="/"||e==="/index.html",n=document.getElementById("nav-chevron"),i=document.querySelector(".nav-left");!n||!i||(t||!a?(n.style.display="block",i.style.cursor="pointer",i.classList.add("recording"),i.onmouseenter=()=>{n.style.transform="translateX(-3px)"},i.onmouseleave=()=>{n.style.transform="translateX(0)"}):(n.style.display="none",i.style.cursor="default",i.classList.remove("recording"),i.onmouseenter=null,i.onmouseleave=null))}function pt(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var mt=1e3;function me(t){let e=null,a=t.onClose||null,n=t.onOpen||null;function i(){e&&(e.style.zIndex=(++mt).toString())}function r(){if(e){e.classList.add("open"),i(),window.addEventListener("resize",o),n&&setTimeout(n,10);return}let m=document.getElementById("windows-container");m||(m=document.createElement("div"),m.id="windows-container",m.className="windows-container",document.body.appendChild(m)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=(++mt).toString(),e.addEventListener("mousedown",i);let v=t.icon||"bx-window",s="",u="",C,A='<div class="window-bottom-spacer"></div>';t.tabs&&t.tabs.length>0?(s=`<div class="tab-bar">${t.tabs.map((x,y)=>{let c=x.icon?`<i class="bx ${x.icon}"></i>`:`<span class="tab-glyph">${x.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${y===0?"active":""}" data-tab-index="${y}">
                        ${c}
                        <span class="tab-title">${x.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${y}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,C=`<div class="window-content">${t.tabs.map((x,y)=>`<div class="tab-content ${y===0?"active":""}" data-tab-content="${y}">${x.content}${A}</div>`).join("")}</div>`):(t.title&&(u=`<div class="window-title">${t.title}</div>`),C=`<div class="window-content">${t.content||""}${A}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${v}"></i>
                ${s}
                ${u}
                <i class="bx bx-x window-close"></i>
            </div>
            ${C}
        `,m.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",b=>{b.stopPropagation(),d()}),window.addEventListener("resize",o),t.tabs&&e.querySelectorAll(".tab").forEach(b=>{b.addEventListener("click",()=>{if(!e)return;let p=b.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(y=>y.classList.remove("active")),b.classList.add("active"),e.querySelectorAll(".tab-content").forEach(y=>y.classList.remove("active"));let x=e.querySelector(`.tab-content[data-tab-content="${p}"]`);x&&x.classList.add("active"),f(b,e)})}),setTimeout(()=>{e&&e.classList.add("open"),n&&n()},10)}function o(){if(!e||!e.classList.contains("open"))return;let m=e.querySelector(".tab.active");m&&f(m,e)}function f(m,v){setTimeout(()=>{let s=v.querySelector(".tab-bar");if(!s)return;let u=Array.from(s.querySelectorAll(".tab")),C=u.indexOf(m),A=s.clientWidth,b=u[Math.max(0,C-2)],p=u[Math.min(u.length-1,C+2)],x=s,y=b.offsetLeft-x.offsetLeft-25,l=p.offsetLeft+p.offsetWidth-x.offsetLeft+25-y,w=l<=A?y-(A-l)/2:m.offsetLeft-x.offsetLeft-A/2+m.offsetWidth/2;s.scrollTo({left:w,behavior:"smooth"})},350)}function d(m=!1){e&&(window.removeEventListener("resize",o),m?(e.remove(),e=null):(e.classList.remove("open"),a&&a(),setTimeout(()=>{e?.remove(),e=null},400)))}function h(m){t.content=m;let v=e?.querySelector(".window-content");v&&(v.innerHTML=m)}function T(){return!!(e&&e.classList.contains("open"))}return{open:r,close:d,setContent:h,isOpen:T,focus:i,id:t.id}}var ut="easter_theme",ee={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function Ze(){return localStorage.getItem(ut)||ee.DARK}function gt(t){if(!Object.values(ee).includes(t))throw new Error("Invalid theme");localStorage.setItem(ut,t),ft(t)}function ft(t){let e=document.body;Object.values(ee).forEach(r=>{e.classList.remove(`theme-${r}`)}),e.classList.add(`theme-${t}`);let a=document.querySelector('meta[name="theme-color"]');a||(a=document.createElement("meta"),a.name="theme-color",document.getElementsByTagName("head")[0].appendChild(a));let n={[ee.DARK]:"#050507",[ee.LIGHT]:"#FFFFFF",[ee.LEGACY]:"#000000"},i=n[t]||n[ee.DARK];if(a.setAttribute("content",i),!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}e.classList.add("is-animated")}function bt(){let t=Ze();ft(t)}function J(t,e,a=null,n="default"){let r={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",o=a?`<p class="placeholder-action">${a}</p>`:"";return`<div class="tab-placeholder" data-placeholder-id="${n}"><i class='bx ${r} placeholder-icon'></i><p class="placeholder-message">${e}</p>${o}</div>`}function j(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function te(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!a)return;if(!e){a.textContent="Last updated: never";return}let n=Date.now(),i=Math.floor((n-e)/1e3),r;i<60?r=`${i}s ago`:i<3600?r=`${Math.floor(i/60)}m ago`:r=`${Math.floor(i/3600)}h ago`,a.textContent=`Last updated: ${r}`}var ps=0;function Re(t,e){let a=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!a)return;let n=a.querySelector(".notification-badge");n&&(e>0?(n.textContent=e>9?"9+":e.toString(),n.style.display="flex"):n.style.display="none")}var ie=0,ae=0;function yt(t){ie=t,ke()}function xt(t){ae=t,ke()}function ke(){let t=ie+ae;ps=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let a=document.getElementById("alerts-menu-item");if(a){let o=a.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="auto",a.appendChild(o)),o.textContent=ie>9?"9+":ie.toString(),o.style.display=ie>0?"flex":"none"}let n=document.getElementById("workspace-menu-item");if(n){let o=n.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="auto",n.appendChild(o)),o.textContent=ae>9?"9+":ae.toString(),o.style.display=ae>0?"flex":"none"}let i=document.getElementById("switch-alerts");if(i){let o=i.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="8px",i.appendChild(o)),o.textContent=ie>9?"9+":ie.toString(),o.style.display=ie>0?"flex":"none"}let r=document.getElementById("switch-workspace");if(r){let o=r.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="8px",r.appendChild(o)),o.textContent=ae>9?"9+":ae.toString(),o.style.display=ae>0?"flex":"none"}}function Xe(){let t=document.getElementById("alerts-list");if(!t)return;ie=t.querySelectorAll(".alert-unread:not(.priority-low)").length,ke()}function ht(){let t=document.getElementById("blueprints-list");if(!t)return;ae=t.querySelectorAll(".event-item:not(.blueprint-approved)").length,ke()}function ms(){return"https://event.easter.company"}function us(){return"https://discord.easter.company"}var gs="http://127.0.0.1:8100",fs="http://127.0.0.1:8300",bs={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function Oe(t){let e=j(t);if(!e)return e;e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(i,r)=>{let o=bs[r];return o?`<span class="${o}">`:""});let a=(e.match(/<span/g)||[]).length,n=(e.match(/<\/span/g)||[]).length;return a>n&&(e+="</span>".repeat(a-n)),e}function re(t){if(!t)return"";let e=j(t);return e&&(e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^<strong>(.*)<\/strong>$/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(a,n)=>{let i=n.split("|").map(r=>r.trim());return i.every(r=>r.match(/^:?-+:?$/))?"":`<div class="md-table-row">${i.map(r=>`<span class="md-table-cell">${r}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e)}var vs="https://sterling-javelin-12539.upstash.io",ys="AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw";function P(){return window.location.hostname.includes("easter.company")}var F=null,oe={lastDashboard:0,lastFrontend:0},Ye=!1,wt=0,Ct="dex_dashboard_snapshot";function xs(){let t=localStorage.getItem(Ct);if(t)try{let e=JSON.parse(t);F=e,oe.lastDashboard=e.timestamp?e.timestamp*1e3:0}catch{F=null}}async function vt(){if(!(!P()||Ye)){Ye=!0,wt=Math.floor(Date.now()/1e3);try{let t=await Cs("GET","state:dashboard:full");if(t)try{let e=JSON.parse(t);F=e,oe.lastDashboard=e.timestamp?e.timestamp*1e3:Date.now(),oe.lastFrontend=Date.now(),localStorage.setItem(Ct,JSON.stringify(e))}catch(e){console.error("Failed to parse dashboard snapshot:",e)}}finally{Ye=!1}}}function hs(){if(!F||!F.agent_status)return;let t=F.agent_status;t.system&&typeof t.system.state_time=="number"&&(t.system.state_time+=1)}async function ws(){if(!P())return;xs();let t=Math.floor(Date.now()/1e3),e=F?t-F.timestamp:1/0;(!F||e>120)&&await vt(),setInterval(()=>{let a=new Date,n=Math.floor(Date.now()/1e3),i=F?n-F.timestamp:1/0,r=n-wt,o=a.getSeconds()===59,f=i>300,d=r>60;(o&&d||f&&d)&&vt(),hs()},1e3)}P()&&ws();async function Cs(t,...e){try{let n=await(await fetch(vs,{method:"POST",headers:{Authorization:`Bearer ${ys}`},body:JSON.stringify([t,...e])})).json();if(n.error)throw new Error(n.error);return n.result}catch(a){return console.error("Upstash Error:",a),null}}var $e=null,Se=null,Ne=!1,Pe=!1;async function _(t,e={}){if(P()){if(!F)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t.startsWith("/system_monitor")||t.startsWith("/system/status"))return new Response(JSON.stringify(F.monitor),{status:200});if(t.startsWith("/system/options"))return new Response(JSON.stringify(F.options||{}),{status:200});if(t.startsWith("/processes"))return new Response(JSON.stringify(F.processes),{status:200});if(t.startsWith("/events")){let i=new URLSearchParams(t.split("?")[1]||""),r=i.get("type")||i.get("event.type"),o=i.get("category"),f=i.get("order")||"desc",d=[];return r==="system.notification.generated"?d=[...F.alerts||[]]:r==="system.blueprint.generated"||t.includes("event.type=system.blueprint.generated")?d=[...F.blueprints||[]]:o==="messaging"?d=[...F.messaging_events||[]]:o==="system"?d=[...F.system_events||[]]:o==="cognitive"?d=[...F.cognitive_events||[]]:o==="moderation"?d=[...F.moderation_events||[]]:d=[...F.events||[]],f==="asc"?d.sort((h,T)=>h.timestamp-T.timestamp):d.sort((h,T)=>T.timestamp-h.timestamp),new Response(JSON.stringify({events:d,count:d.length}),{status:200})}if(t.startsWith("/logs"))return new Response(JSON.stringify([]),{status:200});if(t.startsWith("/system/hardware"))return new Response(JSON.stringify({}),{status:200});if(t.startsWith("/agent/status")||t.startsWith("/guardian/status"))return new Response(JSON.stringify(F.agent_status||{}),{status:200});if(t.startsWith("/profile/")){let i=t.split("/")[2],r=F.profiles?F.profiles[i]:null;return r?new Response(JSON.stringify(r),{status:200}):new Response(JSON.stringify({error:"Profile not found"}),{status:404})}return t.startsWith("/web/history")?new Response(JSON.stringify(F.web_history||[]),{status:200}):t.startsWith("/chores")?new Response(JSON.stringify(F.chores||[]),{status:200}):new Response(JSON.stringify({error:"Not available in public demo"}),{status:404})}if($e)try{let i=await fetch($e+t,e);if(i.ok)return i;$e=null}catch{$e=null}let a=ms(),n=gs;try{let i=await fetch(a+t,e);if(i.ok)return $e=a,Ne&&(console.log("\u2728 Production event service restored."),Ne=!1),i;throw new Error("Primary failed")}catch{Ne||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${n}`),Ne=!0);try{let r=await fetch(n+t,e);if(r.ok)return $e=n,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function ue(t,e={}){if(P()){if(!F)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t==="/contacts")return new Response(JSON.stringify(F.contacts||{members:[]}),{status:200});if(t.startsWith("/member/")){let i=t.split("/")[2],r=(F.contacts?.members||[]).find(o=>o.id===i);return r?new Response(JSON.stringify(r),{status:200}):new Response(JSON.stringify({error:"Member not found"}),{status:404})}return new Response(JSON.stringify({error:"Discord API not public"}),{status:404})}if(Se)try{let i=await fetch(Se+t,e);if(i.ok)return i;Se=null}catch{Se=null}let a=us(),n=fs;try{let i=await fetch(a+t,e);if(i.ok)return Se=a,Pe&&(console.log("\u2728 Production discord service restored."),Pe=!1),i;throw new Error("Primary failed")}catch{Pe||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${n}`),Pe=!0);try{let r=await fetch(n+t,e);if(r.ok)return Se=n,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Et=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-bell' style="color: #bb86fc;"></i>
        <h2>Alerts</h2>
        <div id="alerts-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button id="alerts-read-all" class="notif-action-btn" title="Read All"><i class='bx bx-check-double'></i></button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="alerts-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
            <button id="alerts-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
            <button id="alerts-clear" class="notif-action-btn danger" style="${P()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
        </div>
    </div>
    <div id="alerts-list" class="alerts-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading alerts...</p>
        </div>
    </div>
`,je=null,ge=new Set,qe=[];async function de(t=!1){let e=document.getElementById("alerts-list");if(!e)return;Es(),t&&(e.innerHTML="<p>Updating...</p>");let a="/events?ml=1000&format=json&event.type=system.notification.generated";try{let n=await _(a);if(!n.ok)throw new Error("Service is offline or unreachable.");let r=(await n.json()).events||[];je=Date.now(),te(0,je);let o=Date.now(),f=24*60*60*1e3,d=r.filter(p=>{let x=localStorage.getItem(`alert_read_ts_${p.id}`);if(!x)return!0;let y=parseInt(x);return o-y<f});d.sort((p,x)=>{let y=E=>{let g=E.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return"low"}return(g.priority||"low").toLowerCase()},c=E=>E==="critical"?4:E==="high"?3:E==="medium"?2:1,l=c(y(p)),w=c(y(x));return l!==w?w-l:x.timestamp-p.timestamp}),qe=d;let h=p=>{let x=p.event;if(typeof x=="string")try{x=JSON.parse(x)}catch{return"low"}return(x.priority||"low").toLowerCase()},T=[];if(d.length===0)T.push({id:"placeholder-empty",type:"placeholder",message:"No alerts, all systems nominal"});else{let x=new Set(d.map(c=>h(c))).size>1,y=null;d.forEach(c=>{let l=h(c);x&&l!==y&&(T.push({id:`divider-${l}`,type:"divider",label:l.toUpperCase()}),y=l),T.push(c)})}t&&(e.innerHTML="");let m=p=>{let x=p.event;if(typeof x=="string")try{x=JSON.parse(x)}catch{return null}let y=(x.title||"Untitled Alert").trim(),c=(x.body||"No description provided.").trim(),l=x.summary||"",w=x.content||"",E=x.protocol||"",g=(x.priority||"low").toLowerCase(),S=!!x.alert,B=(x.category||"system").trim(),k=x.related_event_ids||[],D=x.audit_event_id,U=!!localStorage.getItem(`alert_read_ts_${p.id}`),G=new Date(p.timestamp*1e3),H=G.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=G.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),M=U?"event-border-grey":"event-border-blue";!U&&S&&(M="event-border-red"),U&&(g==="high"||g==="critical")?M="event-border-red":U&&g==="medium"&&(M="event-border-orange");let I=U?"alert-read":"alert-unread",O=ge.has(p.id),R=O?"expanded":"",V=O?"display: block;":"display: none;",L="",z="";k.length>0&&(z=`
            <div style="flex: 1; min-width: 150px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    ${k.map(ce=>`<a href="#" onclick="window.dexter.viewEvent('${ce}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${ce.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let N="";D&&(N=`
            <div style="flex: 1; min-width: 120px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Audit</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    <a href="#" onclick="window.dexter.viewEvent('${D}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3); white-space: nowrap;">${D.substring(0,8)}...</a>
                </div>
            </div>`);let q="";E&&(q=`
            <div style="flex: 1; min-width: 100px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${E}</div>
            </div>`);let Y="";w?Y=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="md-para" style="color: #ddd; font-size: 0.85em; white-space: pre-wrap; line-height: 1.6; text-align: left;">${re(w)}</div>
            </div>
        `:Y=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="md-para" style="color: #fff; white-space: pre-wrap; line-height: 1.6; text-align: left;">${re(c)}</div>
            </div>
        `,L=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${x.related_services&&x.related_services.length>0?x.related_services.join(", "):x.related||"SYSTEM"}</div>
                    </div>
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${B}</div>
                    </div>
                    ${q}
                    ${N}
                    ${z}
                </div>

                ${Y}
            `;let K=document.createElement("div");K.className=`event-item notification-item ${M} ${I} ${R} cursor-pointer priority-${g}`,K.dataset.alertId=p.id,K.onclick=function(ce){let Q=this;if(Q.classList.contains("expanded")){Q.classList.remove("expanded"),ge.delete(p.id);let Ie=Q.querySelector(".event-details");Ie&&(Ie.style.display="none")}else{Q.classList.add("expanded"),ge.add(p.id);let Ie=Q.querySelector(".event-details");if(Ie&&(Ie.style.display="block"),!localStorage.getItem(`alert_read_ts_${p.id}`)){localStorage.setItem(`alert_read_ts_${p.id}`,Date.now().toString()),Q.classList.add("alert-read"),Q.classList.remove("alert-unread"),Q.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ke="event-border-grey";g==="high"||g==="critical"?Ke="event-border-red":g==="medium"&&(Ke="event-border-orange"),Q.classList.add(Ke),Xe()}}};let Ce=`${E?E.toUpperCase():"GUARDIAN"} ALERT: ${l||y}`,Ge={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[B]||"bx-bell",Ve=g==="high"||g==="critical"?"#ff4d4d":g==="medium"?"#ffa500":"#888";K.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${H}</span>
                    <span class="event-date">${$}</span>
                </div>
                <div class="event-icon"><i class='bx ${Ge}'></i></div>
                <div class="event-content" style="text-align: left;">
                    <div class="event-service">
                        DEXTER <span class="alert-badge" style="color: ${Ve}; font-size: 0.8em; margin-left: 5px;">[${g.toUpperCase()}]</span>
                    </div>
                    <div class="event-message">${re(Ce)}</div>
                    <div class="event-details" style="${V}">
                        ${L}
                    </div>
                </div>
            `;let rt=K.querySelector(".event-details");rt&&rt.addEventListener("click",ce=>{ce.stopPropagation()});let lt=K.querySelector(".close-details-btn");return lt&&lt.addEventListener("click",ce=>{ce.stopPropagation(),K.classList.remove("expanded");let Q=K.querySelector(".event-details");Q&&(Q.style.display="none"),ge.delete(p.id)}),K},v=p=>{let x=document.createElement("div");x.className="notification-divider",x.dataset.alertId=p.id;let y="#888888";return p.label==="CRITICAL"?y="#ff4d4d":p.label==="HIGH"?y="#ff8888":p.label==="MEDIUM"&&(y="#ffa500"),x.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,x.innerHTML=`<span style="white-space: nowrap;">${p.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,x},s=p=>{let x=document.createElement("div");x.innerHTML=J("empty",p.message,null,p.id);let y=x.firstElementChild;return y.dataset.alertId=p.id,y},u=Array.from(e.children),C=new Map(u.map(p=>[p.dataset.alertId,p])),A=new Set(T.map(p=>p.id));u.forEach(p=>{let x=p.dataset.alertId;(!x||!A.has(x))&&p.remove()});let b=null;T.forEach((p,x)=>{let y=C.get(p.id);if(!y||t){if(y&&y.remove(),p.type==="divider")y=v(p);else if(p.type==="placeholder")y=s(p);else{let c=m(p);if(!c)return;y=c}if(!y)return}x===0?e.firstElementChild!==y&&e.prepend(y):b&&b.nextElementSibling!==y&&b.after(y),b=y}),je=Date.now(),te(0,je),Xe()}catch(n){console.error("Error fetching alerts:",n),e.children.length===0&&(e.innerHTML=J("offline","Failed to load alerts.","The event service may be offline."))}}function Es(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),a=document.getElementById("alerts-close-all"),n=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{qe.forEach(i=>{localStorage.getItem(`alert_read_ts_${i.id}`)||localStorage.setItem(`alert_read_ts_${i.id}`,Date.now().toString())}),de(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{qe.forEach(i=>{ge.add(i.id),localStorage.getItem(`alert_read_ts_${i.id}`)||localStorage.setItem(`alert_read_ts_${i.id}`,Date.now().toString())}),de(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{ge.clear(),de(!0)},a.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await _("/events?type=system.notification.generated",{method:"DELETE"});let i=Date.now()-48*60*60*1e3;qe.forEach(r=>{localStorage.setItem(`alert_read_ts_${r.id}`,i.toString())}),ge.clear(),de(!0)}catch(i){console.error("Failed to clear alerts:",i)}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}async function Qe(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await _(t);if(!e.ok)return;let n=(await e.json()).events||[],i=0;n.forEach(r=>{let o=r.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{o={}}if((o.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${r.id}`)||i++}),yt(i)}catch{}}var Tt=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${P()?"display: none;":""}" title="New Idea"><i class='bx bx-plus'></i></button>
    <button id="roadmap-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
    <button id="roadmap-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
  </div>
`,$t=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,fe=new Set,St=[],Le=null;async function be(t=!1){let e=document.getElementById("roadmap-list");if(e){Ts();try{let a=await _("/roadmap");if(!a.ok)throw new Error("Offline");let n=await a.json();St=n;let i=m=>{let v=fe.has(m.id),s=m.state==="published",u=m.state==="consumed",C="event-border-grey";s&&(C="event-border-blue"),u&&(C="event-border-purple");let b=new Date(m.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),p=document.createElement("div");p.className=`event-item notification-item ${C} cursor-pointer ${v?"expanded":""}`,p.dataset.itemId=m.id,p.onclick=c=>{if(c.target.closest("button"))return;if(p.classList.contains("expanded")){p.classList.remove("expanded");let w=p.querySelector(".event-details");w&&(w.style.display="none"),fe.delete(m.id)}else{p.classList.add("expanded");let w=p.querySelector(".event-details");w&&(w.style.display="block"),fe.add(m.id)}};let x=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${m.state.toUpperCase()}]</span>`;p.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${b.split(",")[1]}</span>
          <span class="event-date">${b.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${x}</div>
          <div class="event-message" style="white-space: pre-wrap;">${j(m.content)}</div>
          <div class="event-details" style="${v?"display: block;":"display: none;"} ">
            ${P()?"":`
            <div class="event-details-header" style="margin-bottom: 15px;">
              <h5 style="margin: 0; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Item Controls</h5>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${u?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${s?"bx-pause":"bx-rocket"}'></i> ${s?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            `}
            ${u?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(m.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let y=p.querySelector(".event-details");return y&&y.addEventListener("click",c=>{c.stopPropagation()}),p.querySelector(".edit-btn")?.addEventListener("click",()=>$s(m)),p.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Ss(m)),p.querySelector(".delete-btn")?.addEventListener("click",()=>ks(m.id)),p.querySelector(".close-details-btn")?.addEventListener("click",c=>{c.stopPropagation(),p.classList.remove("expanded");let l=p.querySelector(".event-details");l&&(l.style.display="none"),fe.delete(m.id)}),p},r=m=>{let v=document.createElement("div");v.innerHTML=J("empty",m.message,m.action,m.id);let s=v.firstElementChild;return s.dataset.itemId=m.id,s},o=[];!n||n.length===0?o.push({id:"placeholder-empty",type:"placeholder",message:"Your roadmap is empty.",action:P()?"Dexter is currently idle.":`Click "New Idea" to start planning Dexter's future.`}):n.forEach(m=>o.push({...m,type:"item"}));let f=Array.from(e.children),d=new Map(f.map(m=>[m.dataset.itemId,m])),h=new Set(o.map(m=>m.id));f.forEach(m=>{let v=m.dataset.itemId;(!v||!h.has(v))&&m.remove()}),t&&(e.innerHTML="");let T=null;o.forEach((m,v)=>{let s=d.get(m.id);(!s||t)&&(s&&s.remove(),m.type==="placeholder"?s=r(m):s=i(m),!s)||(v===0?e.firstElementChild!==s&&e.prepend(s):T&&T.nextElementSibling!==s&&T.after(s),T=s)})}catch{e.children.length===0&&(e.innerHTML=J("offline","Failed to load roadmap.","The event service may be offline."))}}}function Ts(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),a=document.getElementById("roadmap-cancel"),n=document.getElementById("roadmap-expand-all"),i=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Le=null;let r=document.getElementById("roadmap-editor-input");r&&(r.value="");let o=document.getElementById("roadmap-editor-container");o&&(o.style.display="block")},t.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{let r=document.getElementById("roadmap-editor-container");r&&(r.style.display="none"),Le=null},a.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input"),o=r?r.value:"";if(!o.trim())return;let f=Le?`/roadmap/${Le}`:"/roadmap",d=Le?"PATCH":"POST";try{await _(f,{method:d,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:o})});let h=document.getElementById("roadmap-editor-container");h&&(h.style.display="none"),be(!0)}catch(h){console.error(h)}},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{St.forEach(r=>fe.add(r.id)),be(!0)},n.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{fe.clear(),be(!0)},i.dataset.listenerAttached="true")}function $s(t){Le=t.id;let e=document.getElementById("roadmap-editor-input");e&&(e.value=t.content);let a=document.getElementById("roadmap-editor-container");a&&(a.style.display="block",a.scrollIntoView({behavior:"smooth"}))}async function Ss(t){let e=t.state==="published"?"draft":"published";try{await _(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),be(!0)}catch(a){console.error(a)}}async function ks(t){if(confirm("Delete this roadmap item?"))try{await _(`/roadmap/${t}`,{method:"DELETE"}),fe.delete(t),be(!0)}catch(e){console.error(e)}}var Lt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
        <button id="blueprints-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
        <button id="blueprints-clear" class="notif-action-btn danger" style="${P()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
    </div>
`,Mt=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,kt=null,ve=new Set,At=[];async function ye(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Ls();let a="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let n=await _(a);if(!n.ok)throw new Error("Service is offline or unreachable.");let r=(await n.json()).events||[];At=r,kt=Date.now(),te(2,kt);let o=s=>{let u=s.event;if(typeof u=="string")try{u=JSON.parse(u)}catch{return null}let C=(u.title||"Untitled Blueprint").trim(),A=(u.summary||u.body||"No summary provided.").trim(),b=(u.content||"").trim(),p=(u.category||"architecture").trim(),x=(u.related_services||u.affected_services||[]).map(L=>L.trim()),y=(u.implementation_path||[]).map(L=>L.trim()),c=u.source_event_ids||[],l=u.approved===!0,w=new Date(s.timestamp*1e3),E=w.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),g=w.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=ve.has(s.id),B=S?"display: block;":"display: none;",k=document.createElement("div");k.className=`event-item notification-item event-border-purple cursor-pointer ${S?"expanded":""} ${l?"blueprint-approved":""}`,k.dataset.blueprintId=s.id,l&&(k.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",k.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let W=l?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[p]||"bx-paint";k.onclick=function(L){let z=this;if(z.classList.contains("expanded")){z.classList.remove("expanded"),ve.delete(s.id);let q=z.querySelector(".event-details");q&&(q.style.display="none")}else{z.classList.add("expanded"),ve.add(s.id);let q=z.querySelector(".event-details");q&&(q.style.display="block")}};let U="";y.length>0&&(U=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${y.map(L=>`<li style="margin-bottom: 5px;">${j(L)}</li>`).join("")}</ul></div>
                    </div>
                `);let G="";c.length>0&&(G=`
                    <div class="blueprint-source" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Source Alerts</h5>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${c.map(L=>`
                                <a href="#" onclick="window.dexter.viewAlert('${L}'); return false;" style="color: #03dac6; text-decoration: none; font-size: 0.75em; font-family: 'JetBrains Mono', monospace; padding: 4px 8px; background: rgba(3, 218, 198, 0.05); border: 1px solid rgba(3, 218, 198, 0.1); border-radius: 4px;">
                                    <i class='bx bx-link-external'></i> ${L.substring(0,8)}...
                                </a>
                            `).join("")}
                        </div>
                    </div>
                `);let H=x.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${x.join(", ")}</span></div>`:"<div></div>",$=P(),M=l?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${H}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s; display: ${$?"none":"block"};"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${H}
                    <div style="display: ${$?"none":"flex"}; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;k.innerHTML=`
                ${l?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${g}</span>
                </div>
                <div class="event-icon" style="${l?"color: #03dac6;":""}"><i class='bx ${W}'></i></div>
                <div class="event-content">
                    <div class="event-service">${p.toUpperCase()}</div>
                    <div class="event-message">${C}</div>
                    <div class="event-details" style="${B}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px;">${j(A)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${j(b)}</div>
                        </div>
                        ${U}
                        ${G}
                        ${M}
                    </div>
                </div>
            `;let I=k.querySelector(".blueprint-approve-btn");I&&(I.onclick=async L=>{L.stopPropagation(),I.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await _(`/events/${s.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&ye(!0)}catch(z){console.error("Failed to approve blueprint:",z)}});let O=k.querySelector(".blueprint-delete-btn");O&&(O.onclick=async L=>{L.stopPropagation();let z=!l;O.innerHTML=z?"<i class='bx bx-loader-alt spin'></i> Declining...":"<i class='bx bx-loader-alt spin'></i> Deleting...";try{(await _(`/events/${s.id}`,{method:"DELETE"})).ok&&ye(!0)}catch(N){console.error("Failed to delete blueprint:",N)}});let R=k.querySelector(".event-details");R&&R.addEventListener("click",L=>{L.stopPropagation()});let V=k.querySelector(".close-details-btn");return V&&V.addEventListener("click",L=>{L.stopPropagation(),k.classList.remove("expanded");let z=k.querySelector(".event-details");z&&(z.style.display="none"),ve.delete(s.id)}),k},f=s=>{let u=document.createElement("div");u.innerHTML=J("empty",s.message,s.action,s.id);let C=u.firstElementChild;return C.dataset.blueprintId=s.id,C},d=[];r.length===0?d.push({id:"placeholder-empty",type:"placeholder",message:"No architectural blueprints generated yet.",action:"The Imaginator will synthesize these during system idle periods."}):r.forEach(s=>d.push({...s,type:"blueprint"})),t&&(e.innerHTML="");let h=Array.from(e.children),T=new Map(h.map(s=>[s.dataset.blueprintId,s])),m=new Set(d.map(s=>s.id));h.forEach(s=>{let u=s.dataset.blueprintId;(!u||!m.has(u))&&s.remove()});let v=null;d.forEach((s,u)=>{let C=T.get(s.id);(!C||t)&&(C&&C.remove(),s.type==="placeholder"?C=f(s):C=o(s),!C)||(u===0?e.firstElementChild!==C&&e.prepend(C):v&&v.nextElementSibling!==C&&v.after(C),v=C)}),Re(2,r.length),ht()}catch(n){console.error("Error fetching blueprints:",n),e.children.length===0&&(e.innerHTML=J("offline","Failed to load blueprints.","The event service may be offline."))}}async function It(){let t="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let e=await _(t);if(!e.ok)return;let n=(await e.json()).events||[],i=0;n.forEach(r=>{let o=r.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{o={}}o.approved!==!0&&i++}),xt(i)}catch{}}function Ls(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),a=document.getElementById("blueprints-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{At.forEach(n=>ve.add(n.id)),ye(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ve.clear(),ye(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{if(confirm("Are you sure you want to delete all UNAPPROVED blueprints?")){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await _("/events?type=system.blueprint.generated",{method:"DELETE"}),ve.clear(),ye(!0)}catch(n){console.error("Failed to clear blueprints:",n)}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}var le="STANDBY",Bt=null,Me=[],X=null,Ue=null,Ht=()=>`
    <div id="progress-view-root" class="progress-container">
        <!-- Initial render will happen here -->
        ${_t()}
    </div>
  `;function _t(){switch(le){case"ACTIVE":return As();case"COMPLETED":return Is();case"STANDBY":default:return Ms()}}function Ms(){return`
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
  `}function As(){let t=Me.map(e=>`
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
  `}function Is(){return`
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
                <span class="summary-stat-value">${Ue?.duration||"12m 4s"}</span>
                <span class="summary-stat-label">Duration</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">${Ue?.steps||"42"}</span>
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
                <span style="font-family: 'JetBrains Mono'; font-size: 0.9em; color: #bb86fc;">${Ue?.result||"Optimized Event Bus"}</span>
                <i class='bx bx-chevron-right' style="color: #444;"></i>
            </div>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center;">
            <button class="notif-action-btn" onclick="window.dispatchEvent(new CustomEvent('dex-mock-reset'))">
                <i class='bx bx-refresh'></i> Return to Standby
            </button>
        </div>
    </div>
  `}async function Ae(){let t=document.getElementById("progress-view-root");t&&(le!==Bt&&(t.innerHTML=_t(),Bt=le),le==="ACTIVE"&&Bs())}function Bs(){let t=document.getElementById("active-task-title"),e=document.getElementById("active-task-progress-fill"),a=document.getElementById("active-task-progress-text"),n=document.getElementById("terminal-output");if(t&&X&&(t.innerText=X.title),e&&X&&(e.style.width=`${X.progress}%`),a&&X&&(a.innerText=`${X.progress}% COMPLETE`),n){let i=n.children.length;if(Me.length>i){for(let r=i;r<Me.length;r++){let o=Me[r],f=document.createElement("div");f.className="terminal-line",f.innerHTML=`
            <span class="line-time">${o.time}</span>
            <span class="line-prefix">></span>
            <span class="line-msg">${j(o.msg)}</span>
        `,n.appendChild(f)}n.scrollTop=n.scrollHeight}}}window.addEventListener("dex-mock-start",()=>{le="ACTIVE",Me=[{time:new Date().toLocaleTimeString(),msg:"Initializing cognitive engine..."},{time:new Date().toLocaleTimeString(),msg:"Connecting to event-service..."}],X={title:"Refactoring System Event Bus",progress:10},Ae();let t=0,e=setInterval(()=>{if(le!=="ACTIVE"){clearInterval(e);return}t++,X.progress=Math.min(100,X.progress+Math.floor(Math.random()*15));let a=["Analyzing internal/bus.go...","Checking circular dependencies.","Optimizing channel throughput.","Writing unit tests for refactor.","Deploying to staging environment.","Verifying system integrity."];t<a.length&&Me.push({time:new Date().toLocaleTimeString(),msg:a[t]}),X.progress>=100&&(le="COMPLETED",Ue={duration:"1m 12s",steps:32,result:"Optimized Event Bus"},clearInterval(e)),Ae()},1500)});window.addEventListener("dex-mock-stop",()=>{le="STANDBY",Ae()});window.addEventListener("dex-mock-reset",()=>{le="STANDBY",Ae()});var Dt=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px; align-items: center;">
    <select id="task-filter-owner" class="task-form-select" style="padding: 4px 10px; font-size: 0.75em; height: 32px; border-color: rgba(255,255,255,0.05);">
        <option value="all">All Owners</option>
    </select>
    <button id="create-chore-btn" class="notif-action-btn" style="${P()?"display: none;":""}" title="New Task"><i class='bx bx-plus'></i></button>
  </div>
`,zt=()=>`
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
    `,Be=[],He={"313071000877137920":"Owen",dexter:"Dexter"},se=[],xe=null;async function _e(){let t=document.getElementById("chores-list"),e=document.getElementById("create-chore-btn"),a=document.getElementById("create-chore-form"),n=document.getElementById("save-chore-btn"),i=document.getElementById("cancel-chore-btn"),r=document.getElementById("new-chore-owner"),o=document.getElementById("selected-recipients"),f=document.getElementById("task-filter-owner"),d=document.getElementById("new-chore-instruction"),h=document.getElementById("new-chore-url"),T=document.getElementById("new-chore-schedule"),m=document.getElementById("new-chore-time"),v=document.getElementById("new-chore-timezone"),s=document.getElementById("new-chore-time-group");if(v&&!v.dataset.initialValueAttached){let l=Intl.DateTimeFormat().resolvedOptions().timeZone,w=!1;for(let E=0;E<v.options.length;E++)if(v.options[E].value===l){w=!0;break}if(!w){let E=document.createElement("option");E.value=l,E.textContent=l.replace("_"," "),v.appendChild(E)}v.value=l,v.dataset.initialValueAttached="true"}T&&s&&!T.dataset.timeListenerAttached&&(T.addEventListener("change",()=>{s.style.display=T.value==="daily"?"block":"none"}),T.dataset.timeListenerAttached="true");let u=document.getElementById("form-title"),C=document.getElementById("form-icon");function A(){if(o){if(se.length===0){o.innerHTML='<span style="color: #444; font-size: 0.8em; font-style: italic; padding: 4px;">No recipients selected</span>';return}o.innerHTML=se.sort((l,w)=>{let E=l.startsWith("channel:"),g=w.startsWith("channel:");return E&&!g?-1:!E&&g?1:0}).map(l=>{let w=He[l]||l,E=l.startsWith("channel:");return`
        <div class="recipient-badge" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); font-size: 0.75em; color: ${l==="dexter"?"#bb86fc":E?"#03dac6":"#fff"};">
          <i class='bx ${l==="dexter"?"bx-terminal":E?"bx-hash":"bx-user"}'></i>
          <span>${w}</span>
          <i class='bx bx-x remove-recipient' data-id="${l}" style="cursor: pointer; margin-left: 4px; opacity: 0.6;"></i>
        </div>
      `}).join(""),o.querySelectorAll(".remove-recipient").forEach(l=>{l.onclick=()=>{let w=l.dataset.id;se=se.filter(E=>E!==w),A()}})}}function b(l){l&&!se.includes(l)&&(se.push(l),A()),r&&(r.value="")}function p(l=null){if(a){if(xe=l?l.id:null,l){if(u&&(u.textContent="Update Research Task"),C&&(C.className="bx bx-edit-alt",C.style.color="#03dac6"),n&&(n.innerHTML="<i class='bx bx-check'></i> Update Task"),d&&(d.value=l.natural_instruction),h&&(h.value=l.execution_plan?.entry_url||""),T&&(T.value=l.schedule,s&&(s.style.display=l.schedule==="daily"?"block":"none")),m&&l.run_at&&(m.value=l.run_at),v&&l.timezone){let w=!1;for(let E=0;E<v.options.length;E++)if(v.options[E].value===l.timezone){w=!0;break}if(!w){let E=document.createElement("option");E.value=l.timezone,E.textContent=l.timezone.replace("_"," "),v.appendChild(E)}v.value=l.timezone}se=l.recipients||(l.owner_id?[l.owner_id]:[]),A()}else u&&(u.textContent="Initialize Research Task"),C&&(C.className="bx bx-plus-circle",C.style.color="#bb86fc"),n&&(n.innerHTML="<i class='bx bx-zap'></i> Deploy Task"),d&&(d.value=""),h&&(h.value=""),T&&(T.value="every_24h"),se=[],A();a.style.display="block",a.scrollIntoView({behavior:"smooth",block:"start"})}}let x=document.getElementById("contacts-group"),y=document.getElementById("channels-group");if(x&&!x.dataset.populated&&!P())try{ue("/contacts").then(async l=>{l.ok&&(((await l.json()).members||[]).forEach(g=>{if(He[g.id]=g.nickname||g.username,g.id==="313071000877137920")return;let S=document.createElement("option");S.value=g.id;let B=g.nickname||g.username;S.textContent=`${B} (${g.username})`,x.appendChild(S)}),x.dataset.populated="true")})}catch{console.warn("Failed to fetch contacts for dropdown")}if(y&&!y.dataset.populated&&!P())try{ue("/channels").then(async l=>{l.ok&&((await l.json()).forEach(E=>{let g=`channel:${E.id}`;He[g]=E.name;let S=document.createElement("option");S.value=g,S.textContent=`#${E.name} (${E.guild})`,y.appendChild(S)}),y.dataset.populated="true")})}catch{console.warn("Failed to fetch channels for dropdown")}r&&!r.dataset.listenerAttached&&(r.onchange=()=>{b(r.value)},r.dataset.listenerAttached="true"),f&&!f.dataset.listenerAttached&&(f.onchange=()=>c(),f.dataset.listenerAttached="true");function c(){if(!t)return;let l=f?.value||"all",w=l==="all"?Be:Be.filter(g=>(g.recipients||(g.owner_id?[g.owner_id]:[])).includes(l));if(w.length===0){t.innerHTML=J("empty",l==="all"?"No active tasks.":"No tasks found for this owner.",P()?"Dexter is not currently performing research.":"Click the plus icon to create a research task.");return}let E=w.map(g=>{let S=g.last_run===0?"Never":new Date(g.last_run*1e3).toLocaleString(),B=g.memory?g.memory.length:0,k=g.status==="active"?"#03dac6":"#666",W=(g.recipients||(g.owner_id?[g.owner_id]:[])).sort((U,G)=>{let H=U.startsWith("channel:"),$=G.startsWith("channel:");return H&&!$?-1:!H&&$?1:0}).map(U=>{let G=He[U]||U.substring(0,8),H=U.startsWith("channel:");return`<span title="${G}" style="display: flex; align-items: center; gap: 3px;"><i class='bx ${U==="dexter"?"bx-terminal":H?"bx-hash":"bx-user"}'></i>${G}</span>`}).join("<span style='color: #444;'>, </span>");return`
                <div class="service-widget wide-task-card" style="border-left: 4px solid ${k}; width: 100%; display: flex; flex-direction: column; padding: 20px;">
                    <div class="service-widget-header" style="display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; margin-bottom: 15px;">
                        <div style="display: flex; gap: 15px; flex: 1;">
                            <i class='bx bx-search-alt' style="color: ${k}; font-size: 1.5em; margin-top: 2px;"></i>
                            <div style="text-align: left;">
                                <h3 style="font-size: 1.1em; white-space: normal; line-height: 1.4; font-weight: 600; margin: 0;">${g.natural_instruction}</h3>
                                <div style="margin-top: 8px; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
                                    <div style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace; display: flex; gap: 10px; align-items: center;">
                                      <i class='bx bx-send' style="margin-right: -5px;"></i>
                                      ${W}
                                    </div>
                                    <span style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace;"><i class='bx bx-time' style="margin-right: 4px;"></i>${g.schedule}${g.run_at?" @ "+g.run_at+(g.timezone?" ("+g.timezone.split("/").pop()?.replace("_"," ")+")":""):""}</span>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button class="icon-btn reset-chore-btn" data-id="${g.id}" title="Reset Progress" style="background: none; border: none; color: #ff9800; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-refresh' style="font-size: 1.2em;"></i></button>
                            <button class="icon-btn edit-chore-btn" data-id="${g.id}" style="background: none; border: none; color: #bb86fc; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-edit-alt' style="font-size: 1.2em;"></i></button>
                            <button class="icon-btn delete-chore-btn" data-id="${g.id}" style="background: none; border: none; color: #cf6679; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-trash' style="font-size: 1.2em;"></i></button>
                        </div>
                    </div>
                    
                    <div class="service-widget-body" style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Last Run</span>
                            <span style="font-size: 0.85em; color: #fff; font-family: 'JetBrains Mono';">${S}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Items Found</span>
                            <span style="font-size: 0.85em; color: #03dac6; font-weight: bold;">${B}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 200px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Target Focus</span>
                            <span style="font-size: 0.8em; color: #888; font-family: 'JetBrains Mono'; word-break: break-all;">${g.execution_plan.entry_url||"Autonomous Detection"}</span>
                        </div>
                    </div>
                </div>
            `}).join("");t.innerHTML=E,t.querySelectorAll(".edit-chore-btn").forEach(g=>{g.onclick=S=>{S.stopPropagation();let B=g.dataset.id,k=Be.find(D=>D.id===B);k&&p(k)}}),t.querySelectorAll(".reset-chore-btn").forEach(g=>{g.onclick=async S=>{S.stopPropagation();let B=g.dataset.id;confirm("Reset this task? It will be re-run immediately on the next cycle.")&&(g.innerHTML="<i class='bx bx-loader-alt spin'></i>",await _(`/chores/${B}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({last_run:0})}),_e())}}),t.querySelectorAll(".delete-chore-btn").forEach(g=>{g.onclick=async S=>{S.stopPropagation();let B=g.dataset.id;confirm("Delete this task?")&&(await _(`/chores/${B}`,{method:"DELETE"}),_e())}})}e&&!e.dataset.listenerAttached&&(e.onclick=()=>{a&&(a.style.display==="none"||xe!==null?p(null):a.style.display="none")},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{a&&(a.style.display="none")},i.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let l=document.getElementById("new-chore-instruction"),w=document.getElementById("new-chore-url"),E=document.getElementById("new-chore-schedule"),g=l?.value,S=E?.value||"every_24h",B=S==="daily"?m?.value:"",k=S==="daily"?v?.value:"";if(!g)return;if(se.length===0){alert("Please add at least one recipient.");return}let D=n.innerHTML;n.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{let W=xe?"PATCH":"POST",U=xe?`/chores/${xe}`:"/chores";await _(U,{method:W,headers:{"Content-Type":"application/json"},body:JSON.stringify({recipients:se,natural_instruction:g,entry_url:w?.value,schedule:S,run_at:B,timezone:k})}),a&&(a.style.display="none"),l&&(l.value=""),w&&(w.value=""),xe=null,se=[],_e()}catch(W){console.error(W),alert(xe?"Failed to update research task":"Failed to create research task")}finally{n.innerHTML=D}},n.dataset.listenerAttached="true");try{let l=await _("/chores");if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);if(Be=await l.json()||[],f){let E=f.value,g=new Set;Be.forEach(S=>{S.owner_id&&g.add(S.owner_id),S.recipients&&S.recipients.forEach(B=>g.add(B))}),f.innerHTML='<option value="all">All Recipients</option>',g.forEach(S=>{let B=document.createElement("option");B.value=S;let k=S.startsWith("channel:"),D=He[S]||`Recipient: ${S.substring(0,8)}`;B.textContent=(k&&!D.startsWith("#")?"#":"")+D,f.appendChild(B)}),f.value=E,f.selectedIndex===-1&&(f.value="all")}c()}catch(l){console.error("Failed to fetch chores",l)}}var Nt=()=>`
    <div class="ideas-container">
        <div class="progress-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-loader-circle spin' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Live Progress</h2>
                </div>
            </div>
            ${Ht()}
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
                ${Tt()}
            </div>
            ${$t()}
        </div>
    </div>
`,Rt=()=>`
    <div class="ideas-container">
        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${Lt()}
            </div>
            ${Mt()}
        </div>
    </div>
`,Ot=()=>`
    <div class="ideas-container">
        <div class="chores-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-task' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Research Tasks</h2>
                </div>
                ${Dt()}
            </div>
            ${zt()}
        </div>
    </div>
`;async function et(){await Promise.all([be(),ye(),Ae(),_e()])}var Hs=`
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
`;function jt(t){if(!document.getElementById("dex-profile-styles")){let n=document.createElement("style");n.id="dex-profile-styles",n.textContent=Hs,document.head.appendChild(n)}let e=document.createElement("div");e.className="profile-overlay",e.innerHTML=`
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `,e.addEventListener("click",n=>{n.target===e&&(e.classList.remove("active"),document.body.style.overflow="",setTimeout(()=>e.remove(),300))}),document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),document.body.style.overflow="hidden";let a=n=>{e.innerHTML=`
        <div class="profile-card" style="height: 200px; justify-content: center; align-items: center; color: #cf6679; border-color: #cf6679;">
            <div style="text-align: center;">
                <i class='bx bx-error' style="font-size: 3em; margin-bottom: 10px;"></i>
                <div style="font-family: 'JetBrains Mono'; text-transform: uppercase;">${n}</div>
            </div>
            <button class="close-profile-btn" style="color: #cf6679;" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
        </div>
    `;let i=e.querySelector(".close-profile-btn");i&&i.addEventListener("click",()=>{e.click()})};ue(`/profile/${t.id}`).then(async n=>{if(n.ok){let i=await n.json();_s(e,t,i)}else console.log("Profile not found (404) or error."),a("Profile Data Unavailable")}).catch(n=>{console.error("Profile fetch error:",n),a("Connection Failed")})}function _s(t,e,a){let n=e.status==="online"?"#03dac6":e.status==="idle"?"#ffb74d":"#cf6679",i=()=>{let C=(a.attributes||a.facts||[]).map(c=>{let l=c.key||c.k,w=c.value||c.v;return`
            <div class="fact-chip">
                <span class="fact-key">${l}:</span>
                <span class="fact-val">${w}</span>
            </div>
        `}).join(""),A=a.cognitive_model||a,b=A.technical_level||A.techLevel||0,p=A.communication_style||A.commStyle||"Unknown",x=A.patience_level||A.patience||"Unknown",y=A.vibe||"Unknown";return`
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
                            <span style="color: #03dac6;">${p}</span>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Predicted Patience</span>
                            <span>${x}</span>
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
                        ${C}
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px; font-size: 0.9em; color: #888; font-style: italic;">
                        <i class='bx bx-info-circle'></i> Dexter automatically extracts these facts from conversation context to personalize future interactions.
                    </div>
                </div>
            </div>
        `},r=()=>{let C=a.dossier||{},A=C.identity||{},b=C.career||{},p=C.personal||{},x=C.social||[];return`
            <div class="dossier-grid">
                <!-- Identity Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-id-card'></i> Identity</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Full Name</div>
                        <div class="dossier-value">${A.fullName||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Age Range</div>
                        <div class="dossier-value">${A.ageRange||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Location</div>
                        <div class="dossier-value">${A.location||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Gender</div>
                        <div class="dossier-value">${A.gender||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Sexuality</div>
                        <div class="dossier-value" style="color: #ffb74d;">${A.sexuality||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Relationship Status</div>
                        <div class="dossier-value">${A.relationship||"Unknown"}</div>
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
                            ${(p.hobbies||[]).map(y=>`<div class="dossier-list-item">${y}</div>`).join("")}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(p.habits||[]).map(y=>`<div class="dossier-list-item">${y}</div>`).join("")}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(p.vices||[]).map(y=>`<div class="dossier-list-item" style="color: #cf6679;">${y}</div>`).join("")}
                        </div>
                    </div>
                </div>

                <!-- Social Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-network-chart'></i> Known Associates</div>
                    <div class="dossier-item" style="background: none; border: none; padding: 0;">
                        ${x.length>0?x.map(y=>`
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
        `},o=()=>{let C=a.traits||{};return`
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(C).map(([A,b])=>`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${b}%; background: ${Number(b)>50?"#03dac6":"#cf6679"}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${A.substring(0,4)}</div>
                    <div style="font-family: monospace;">${b}%</div>
                </div>
            `).join("")}
        </div>
    `},f=()=>`
        <div class="profile-section-title"><i class='bx bx-map-alt'></i> Conversation Topics</div>
        <div style="margin-top: 20px;">
            ${(a.topics||[]).map(C=>`
                <div class="topic-bar">
                    <div class="topic-header">
                        <span style="color: #eee;">${C.name}</span>
                        <span style="color: #bb86fc;">${C.val}%</span>
                    </div>
                    <div class="topic-track">
                        <div class="topic-fill" style="width: ${C.val}%"></div>
                    </div>
                </div>
            `).join("")}
        </div>
    `,d=()=>`
        <div class="profile-section-title"><i class='bx bx-code-alt'></i> Raw Profile JSON</div>
        <div class="raw-json">${JSON.stringify(a,null,2)}</div>
    `,h=`
        <div class="profile-card">
            <button class="close-profile-btn" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
            
            <div class="profile-header">
                <div class="profile-avatar-container">
                    <img src="${e.avatar_url||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="profile-avatar">
                    <div class="profile-status-dot" style="background: ${n}"></div>
                </div>
                <div class="profile-identity">
                    <h2>${j(e.username)}</h2>
                    <div class="profile-badges">${(a.badges||[]).map(C=>`<span class="profile-badge ${C==="Creator"?"master":""}">${C}</span>`).join("")}</div>
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
                <div id="tab-overview" class="tab-content active">${i()}</div>
                <div id="tab-dossier" class="tab-content">${r()}</div>
                <div id="tab-psychometrics" class="tab-content">${o()}</div>
                <div id="tab-topics" class="tab-content">${f()}</div>
                <div id="tab-raw" class="tab-content">${d()}</div>
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
    `;t.innerHTML=h;let T=t.querySelector(".profile-card"),m=t.querySelector("#profile-expand-toggle"),v=t.querySelectorAll(".profile-tab-btn"),s=t.querySelectorAll(".tab-content"),u=t.querySelector(".close-profile-btn");u&&u.addEventListener("click",()=>{t.classList.remove("active"),document.body.style.overflow="",setTimeout(()=>t.remove(),300)}),v.forEach(C=>{C.addEventListener("click",()=>{v.forEach(p=>p.classList.remove("active")),s.forEach(p=>p.classList.remove("active")),C.classList.add("active");let A=C.dataset.tab,b=t.querySelector(`#tab-${A}`);b&&b.classList.add("active")})}),m&&m.addEventListener("click",()=>{T.classList.toggle("expanded");let C=T.classList.contains("expanded");m.innerHTML=C?"<i class='bx bx-collapse-alt'></i> Collapse View":"<i class='bx bx-expand-alt'></i> Detailed Analysis"})}var qt=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto; ${P()?"display: none;":""}" title="Refresh Contacts"><i class='bx bx-refresh'></i></button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,Ds=null;async function tt(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await tt(),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),t.dataset.listenerAttached||(t.onclick=a=>{let i=a.target.closest(".user-profile-card");if(i&&i.dataset.user)try{let r=JSON.parse(i.dataset.user);jt(r)}catch(r){console.error("Failed to parse user data",r)}},t.dataset.listenerAttached="true");try{let a=await ue("/contacts");if(!a.ok)throw new Error("Service unreachable");let i=(await a.json()).members||[];if(Ds=Date.now(),i.length===0){t.innerHTML=J("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};i.sort((o,f)=>{let d=r[o.level]??10,h=r[f.level]??10;return d!==h?d-h:o.username.localeCompare(f.username)}),t.innerHTML=i.map(o=>{let f=o.color&&o.color!==0,d=f?"#"+o.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",h=o.status==="online"?"#5eff5e":o.status==="idle"?"#ffa500":o.status==="dnd"?"#ff4d4d":"#666",T="#888";o.level==="Me"||o.level==="Master"?T="#bb86fc":o.level==="Admin"?T="#cf6679":o.level==="Moderator"?T="#03dac6":o.level==="Contributor"&&(T="#ffa500");let m=o.level==="Me",v=m?"rgba(187, 134, 252, 0.08)":f?`${d}11`:"rgba(255,255,255,0.03)",s=m?"2px solid #bb86fc":f?`1px solid ${d}66`:"1px solid rgba(255,255,255,0.1)";return`
                <div class="user-profile-card" 
                     data-user="${JSON.stringify(o).replace(/"/g,"&quot;")}"
                     style="background: ${v}; padding: 15px; border-radius: 8px; border: ${s}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; cursor: pointer; transition: transform 0.2s, background 0.2s, box-shadow 0.2s;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${m?"#bb86fc":f?d:"transparent"}33, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${o.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${m?"2px solid #bb86fc":f?`2px solid ${d}`:"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${h}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: ${f?d:"#fff"}; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">${o.nickname||o.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${T}; font-weight: 600; text-transform: uppercase;">${m?"DEXTER (ME)":o.level}</span>
                            <span style="font-size: 0.7em; color: #666; font-family: monospace;">(${o.username})</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${o.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=J("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var zs={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","analysis.user.message_signals":"Analyzed Signals for User {user_id}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"{agent_name} Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed","system.cognitive.model_load":"Model Loaded: {model} ({method})","system.cognitive.model_unload":"Model Unloaded: {model} ({reason})"};function Ut(t,e){let a=zs[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(a="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(a=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"){let i=e.tier?e.tier.toUpperCase():"UNKNOWN";a=`${e.agent_name||"System"} Audit: ${i}`}if(t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!a)return t;let n=a.replace(/\{(\w+)\}/g,(i,r)=>e[r]!==void 0&&e[r]!==null?e[r]:r==="reason"||r==="method"||r==="details"||r==="args"?"":i);return n=n.replace(/\s\(\)\s*/g," ").trim(),(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(n+=` (Translation: ${e.english_translation})`),n}var st=()=>`
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
            <button id="events-clear" class="notif-action-btn danger" style="${P()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
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
`,Fe=null,he=new Set,De=[],Z="all",Ns={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision","analysis.user.message_signals"],moderation:["moderation.explicit_content.deleted"]},Ps={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","analysis.user.message_signals":"bx-pulse","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Rs(t){for(let[e,a]of Object.entries(Ns))if(a.includes(t))return e;return"system"}function Os(t){return Ps[t]||"bx-square-rounded"}async function pe(t=!1){let e=document.getElementById("events-timeline");if(!e)return;js();let n=`/events?ml=${Z==="all"?100:250}&format=json`;Z!=="all"&&(n+=`&category=${Z}`);try{let i=await _(n);if(!i.ok)throw new Error("Service unreachable");if(De=((await i.json()).events||[]).filter(v=>{let s=v.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return!0}let u=s.type;return!(u==="system.blueprint.generated"||u==="system.notification.generated")}),Fe=Date.now(),te(1,Fe),De.length===0){e.innerHTML=J("empty","No events found for this filter.");return}t&&(e.innerHTML="");let f=v=>{let s=v.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let u=s.type,C=Rs(u),A=Os(u),b=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.bot.voice_response"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted"||u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="analysis.user.message_signals"||u==="system.cli.command"||u==="system.analysis.audit"||u==="system.test.completed"||u==="error_occurred"||u==="system.cli.status"||u==="system.attention.expired"||u.startsWith("system.roadmap")||u.startsWith("system.process"),p="event-border-grey";b&&(u==="moderation.explicit_content.deleted"||u==="error_occurred"?p="event-border-red":u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="system.analysis.audit"||u==="analysis.user.message_signals"||u==="engagement.decision"?p="event-border-purple":u==="system.attention.expired"||u==="system.cli.command"||u==="system.cli.status"?p="event-border-orange":u==="system.test.completed"?p=s.test?.status==="OK"&&s.lint?.status==="OK"&&s.format?.status==="OK"?"event-border-blue":"event-border-red":p="event-border-blue");let x=b?"cursor-pointer":"",y=he.has(v.id),c=y?"expanded":"",l=y?"display: block;":"display: none;",w=new Date(v.timestamp*1e3),E=w.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),g=w.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=Ut(u,s),B=s.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${s.user_level})</span>`:"",k="";if(b){let H="";if(u==="engagement.decision"){let $=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`;H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${s.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Input Decision")}
                            <pre class="detail-pre">${s.input_decision||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context History")}
                            <pre class="detail-pre">${s.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Engagement Output")}
                            <pre class="detail-pre">${s.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(u==="system.attention.expired"){let $=O=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${O}</h5>`,M=s.timestamp-s.last_active,I=Math.floor(M/60);H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${s.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${I} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context (Last Input)")}
                            <div class="detail-pre">${re(s.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${$("Thought Process (Last Output)")}
                            <div class="detail-pre">${re(s.last_output||"None")}</div>
                        </div>
                    `}else if(u==="messaging.bot.sent_message"){let $=R=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${R}</h5>`,M="";if(s.embed){let R=s.embed,V=R.title?`<div style="font-weight: bold; margin-bottom: 5px; color: #fff;">${j(R.title)}</div>`:"",L=R.description?`<div style="font-size: 0.9em; color: #bbb; white-space: pre-wrap;">${re(R.description)}</div>`:"",z=(R.fields||[]).map(N=>`
              <div style="margin-top: 10px;">
                <div style="font-size: 0.7em; text-transform: uppercase; color: #666; letter-spacing: 1px;">${j(N.name)}</div>
                <div style="font-size: 0.85em; color: #eee; white-space: pre-wrap;">${re(N.value)}</div>
              </div>
            `).join("");M=`
              <div class="discord-embed" style="margin-top: 15px; padding: 12px; border-left: 4px solid ${R.color?"#"+R.color.toString(16).padStart(6,"0"):"#bb86fc"}; background: rgba(255,255,255,0.02); border-radius: 0 4px 4px 0;">
                ${V}
                ${L}
                ${z}
              </div>
            `}let I="";s.eval_count&&(I=`
                            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.prompt_count} / ${s.eval_count}</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Total Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${s.duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Load Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.load_duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Processing</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.prompt_duration_ms}ms / ${s.eval_duration_ms}ms</div>
                                </div>
                            </div>
                        `);let O="";if(s.chat_history&&s.chat_history.length>0){let R=s.chat_history.length,V=s.chat_history.map((L,z)=>{let N=L.name?L.name.toUpperCase():L.role.toUpperCase();!L.name&&N==="ASSISTANT"&&(N="DEXTER");let q=L.role==="user"?"#03dac6":L.role==="system"?"#ffb74d":"#bb86fc",Y=z===R-1?"block":"none";return`
                                <div class="history-slide" data-index="${z}" style="display: ${Y};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${q}; letter-spacing: 1px; font-weight: bold;">${N}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${z+1} of ${R}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(L.content)}</div>
                                </div>
                            `}).join("");O=`
                            <div class="event-detail-block">
                                ${$("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${V}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}H=`
                        ${I}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${s.response_model||"N/A"}</span>
                        </div>
                        ${M}
                        ${O||`
                            <div class="event-detail-block">
                                ${$("Raw Input (Prompt)")}
                                <pre class="detail-pre">${s.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${$("Raw Response Output")}
                                <pre class="detail-pre">${s.response_raw||"None"}</pre>
                            </div>
                        `}
                    `}else if(u==="messaging.bot.voice_response"){let $=R=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${R}</h5>`,M="",I=[],O=s.raw_input||"";if(O.startsWith("[{")&&O.endsWith("}]")){let R=O.match(/{.*?}/g);R&&(I=R.map(V=>{let L=V.substring(1,V.length-1),z=L.indexOf(" "),N=L.substring(0,z),q=L.substring(z+1);return q=q.replace(/\[\]$/,"").trim(),{role:N,content:q}}))}if(I.length>0&&s.response_raw&&I.push({role:"assistant",content:s.response_raw}),I.length>0){let R=I.length,V=I.map((L,z)=>{let N=L.role.toUpperCase();N==="ASSISTANT"&&(N="DEXTER");let q=L.role==="user"?"#03dac6":L.role==="system"?"#ffb74d":"#bb86fc",Y=z===R-1?"block":"none";return`
                                <div class="history-slide" data-index="${z}" style="display: ${Y};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${q}; letter-spacing: 1px; font-weight: bold;">${N}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${z+1} of ${R}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(L.content)}</div>
                                </div>
                            `}).join("");M=`
                            <div class="event-detail-block">
                                ${$("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${V}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${s.response_model||"N/A"}</span>
                        </div>
                        ${M}
                        <div class="event-detail-block">
                            ${$("Raw Input (Prompt)")}
                            <pre class="detail-pre">${s.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Response Output")}
                            <pre class="detail-pre">${s.response_raw||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.user.message_signals"){let $=O=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${O}</h5>`,M=s.signals||{};H=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Sentiment</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${M.sentiment>.3?"#03dac6":M.sentiment<-.3?"#cf6679":"#aaa"}; font-weight: bold;">${M.sentiment?.toFixed(2)||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Intent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: uppercase;">${M.intent||"N/A"}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tech Depth</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${M.technical_depth||0}/10</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Mood</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${M.mood||"N/A"}</div>
                            </div>
                        </div>
                        <div class="event-detail-block">
                            ${$("Extracted Topics")}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${(M.topics||[]).map(O=>`<span class="profile-badge">${O}</span>`).join("")||'<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${j(s.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="moderation.explicit_content.deleted"){let $=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${s.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${j(s.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.link.completed"){let $=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${s.url}" target="_blank" class="attachment-link">${s.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${j(s.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Description")}
                            <pre class="detail-pre">${j(s.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Content Summary")}
                            <pre class="detail-pre">${j(s.summary)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.visual.completed"){let $=I=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${I}</h5>`,M="";s.base64_preview?M=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${s.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:s.url&&(M=`<div class="event-detail-block"><img src="${s.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${s.filename}</span>
                        </div>
                        ${M}
                        <div class="event-detail-block">
                            ${$("Visual Description")}
                            <pre class="detail-pre">${j(s.description)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.router.decision"){let $=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Decision:</span>
                            <span class="detail-value" style="color: #bb86fc; font-weight: bold;">${s.decision}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${s.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${s.url}" target="_blank" class="attachment-link">${s.url}</a></span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${j(s.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Input Context")}
                            <pre class="detail-pre">${j(s.raw_input)||"None"}</pre>
                        </div>
                    `}else if(u==="system.cli.command"){let $=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Command:</span>
                            <span class="detail-value">dex ${s.command||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Arguments:</span>
                            <span class="detail-value">${s.args||"None"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${s.status||"unknown"}</span>
                        </div>
                        <div class="event-detail-row">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${s.duration||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${s.exit_code!==void 0?s.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Output")}
                            <pre class="detail-pre">${j(s.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(u==="system.analysis.audit"){let $=s.success?"#03dac6":"#ff4d4d",M=s.success?"SUCCESS":"FAILED",I=z=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${z}</h5>`,O="";s.error&&(O=`
                            <div class="event-detail-block">
                                ${I("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${j(s.error)}</pre>
                            </div>
                        `);let R="";if(s.chat_history&&s.chat_history.length>0){let z=s.chat_history.length,N=s.chat_history.map((q,Y)=>{let K=q.name?q.name.toUpperCase():q.role.toUpperCase();!q.name&&K==="USER"&&(K="SYSTEM"),!q.name&&K==="ASSISTANT"&&(K="AGENT");let Ce=q.role==="user"?"#03dac6":q.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${Y}" style="display: ${Y===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${Ce}; letter-spacing: 1px; font-weight: bold;">${K}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${Y+1} of ${z}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${j(q.content)}</div>
                                </div>
                            `}).join("");R=`
                            <div class="event-detail-block">
                                ${I("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${N}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${z<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let V="";if(s.corrections&&s.corrections.length>0){let z=s.corrections.map((N,q)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${N.type}] ${N.guidance}</div>
                                ${N.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${j(N.snippet)}</div>`:""}
                            </div>
                        `).join("");V=`
                            <div class="event-detail-block">
                                ${I(`Corrections (${s.corrections.length})`)}
                                ${z}
                            </div>
                        `}let L="";if(s.parsed_results&&s.parsed_results.length>0){let z=s.parsed_results.map(N=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${j(N.title)}</div>
                                <div style="color: #ddd;">${j(N.summary)}</div>
                            </div>
                        `).join("");L=`
                            <div class="event-detail-block">
                                ${I("Parsed Results")}
                                ${z}
                            </div>
                        `}H=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 120px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${s.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${$}; font-weight: bold;">${M} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${s.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.model}</div>
                            </div>
                        </div>
                        ${O}
                        ${L}
                        ${V}
                        ${R}
                    `}else if(u==="system.test.completed"){let $=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`;H=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${s.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${s.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Format")}
                            <pre class="detail-pre">${s.format?.status||"N/A"}: ${s.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Lint")}
                            <pre class="detail-pre">${s.lint?.status||"N/A"}: ${s.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Tests")}
                            <pre class="detail-pre">${s.test?.status||"N/A"}: ${s.test?.details||s.test?.message||"OK"}</pre>
                        </div>
                    `}else if(u==="error_occurred"){let $=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`;H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${s.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${j(s.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context")}
                            <pre class="detail-pre">${JSON.stringify(s.context||{},null,2)}</pre>
                        </div>
                    `}else if(u==="system.cli.status"){let $=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`;H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${s.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Message")}
                            <pre class="detail-pre">${j(s.message)}</pre>
                        </div>
                    `}else if(u==="messaging.user.sent_message"){let $="";s.attachments&&s.attachments.length>0&&($=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${s.attachments.map(I=>{let O=I.content_type&&I.content_type.startsWith("image/"),R=(I.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${O?`<div class="attachment-thumb-container"><img src="${I.url}" alt="${I.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${I.url}" target="_blank" class="attachment-link">${I.filename}</a>
                                        <span class="attachment-meta">${I.content_type} \u2022 ${R}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),H=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${s.content||"(empty)"}</pre>
                        </div>
                        ${$}
                    `}k=`
                    <div class="event-details" style="${l}">
                        ${H}
                    </div>
                `}let D=document.createElement("div");D.className=`event-item ${p} ${x} ${c}`,D.dataset.eventId=v.id,D.onclick=function(H){if(!b)return;let $=this;if($.classList.contains("expanded")){$.classList.remove("expanded"),he.delete(v.id);let I=$.querySelector(".event-details");I&&(I.style.display="none")}else{$.classList.add("expanded"),he.add(v.id);let I=$.querySelector(".event-details");I&&(I.style.display="block")}},D.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${g}</span>
                </div>
                <div class="event-icon"><i class='bx ${A}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${C}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${C}</span>
                        ${v.service} ${B}
                    </div>
                    <div class="event-message">${S}</div>
                    ${k}
                </div>
            `;let W=D.querySelector(".event-details");if(W&&W.addEventListener("click",H=>{H.stopPropagation()}),b){let H=D.querySelector(".close-details-btn");H&&H.addEventListener("click",$=>{$.stopPropagation();let M=$.target.closest(".event-item");if(M){M.classList.remove("expanded"),he.delete(v.id);let I=M.querySelector(".event-details");I&&(I.style.display="none")}})}let U=D.querySelector(".prev-btn"),G=D.querySelector(".next-btn");if(U&&G){let H=0,$=Array.from(D.querySelectorAll(".history-slide")),M=$.length,I=()=>{$.forEach((O,R)=>{O.style.display=R===H?"block":"none"}),U.disabled=H===0,G.disabled=H===M-1,U.style.opacity=H===0?"0.5":"1",G.style.opacity=H===M-1?"0.5":"1"};U.addEventListener("click",O=>{O.stopPropagation(),H>0&&(H--,I())}),G.addEventListener("click",O=>{O.stopPropagation(),H<M-1&&(H++,I())}),I()}return D},d=Array.from(e.children),h=new Map(d.map(v=>[v.dataset.eventId,v])),T=new Set(De.map(v=>v.id));d.forEach(v=>{let s=v.dataset.eventId;(!s||!T.has(s))&&v.remove()});let m=null;De.forEach((v,s)=>{let u=h.get(v.id);(!u||t)&&(u&&u.remove(),u=f(v),!u)||(s===0?e.firstElementChild!==u&&e.prepend(u):m&&m.nextElementSibling!==u&&m.after(u),m=u)}),Fe=Date.now(),te(1,Fe)}catch(i){console.error("Error fetching events:",i),e.children.length===0&&(e.innerHTML=J("offline","Failed to load events.","The event service may be offline."))}}function js(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),a=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{De.forEach(i=>he.add(i.id)),pe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{he.clear(),pe(!0)},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.querySelectorAll(".filter-btn").forEach(i=>{i.onclick=()=>{a.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),i.classList.add("active"),Z=i.dataset.filter||"all",pe(!0)}}),a.dataset.listenerAttached="true"),a&&a.querySelectorAll(".filter-btn").forEach(i=>{i.dataset.filter===Z?i.classList.add("active"):i.classList.remove("active")});let n=document.getElementById("events-clear");n&&!n.dataset.listenerAttached&&(n.onclick=async()=>{let i=Z==="all"?"ALL":Z.toUpperCase();if(confirm(`Are you sure you want to delete ${i} events from the backend? This cannot be undone.`)){n.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let r="/events";if(Z!=="all"?r+=`?category=${Z}`:r+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await _(r,{method:"DELETE"})).ok)throw new Error("Failed to delete events");he.clear(),pe(!0)}catch(r){console.error("Failed to clear events:",r),alert("Failed to clear events. Check console.")}finally{n.innerHTML="<i class='bx bx-trash'></i> Clear"}}},n.dataset.listenerAttached="true")}var qs=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 348 346" style="color: #bb86fc; fill: currentColor; margin-right: 10px; min-width: 24px; margin-left: 0; max-width: 25px;">
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
`,Ft=qs;function Jt(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var Us=null;async function ze(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await _("/logs");if(!e.ok)throw new Error("Logs offline");let a=await e.json();if(!a||a.length===0)return t.innerHTML=J("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let n=["local-ollama-0","local-cache-0"],i=a.filter(o=>!n.includes(o.id));i.forEach(o=>{o.logs&&Array.isArray(o.logs)?o.logs.reverse():o.logs=[]}),i.reverse();let r=i.map(o=>{let f=o.logs.join(`
`),d=[...o.logs];if(d.length<25){let T=25-d.length;for(let m=0;m<T;m++)d.push("")}else d.length>25&&(d=d.slice(-25));let h=d.map(T=>Oe(T)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${o.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(f)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${o.id}" title="Clear Logs" style="${P()?"display: none;":""}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${h}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(o=>{o.addEventListener("click",()=>{let f=o,d=unescape(f.dataset.logs||"");navigator.clipboard.writeText(d).then(()=>{let h=f.querySelector("i");h&&(h.classList.remove("bx-copy"),h.classList.add("bx-check"),setTimeout(()=>{h.classList.remove("bx-check"),h.classList.add("bx-copy")},2e3))})})}),document.querySelectorAll(".clear-logs-btn").forEach(o=>{o.addEventListener("click",async()=>{let d=o.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${d}?`))try{(await _(`/logs?service_id=${d}`,{method:"DELETE"})).ok&&ze()}catch(h){console.error("Error clearing logs:",h)}})}),Us=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=J("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var Kt=()=>{let t=P()?"display: none;":"";return`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary ${P()?'<span style="color: #666; font-size: 0.6em; margin-left: 10px; font-weight: normal; font-style: italic;">* Public data is approximated</span>':""}</h2>
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
            ${Ft}
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
        </div>`},Zt=()=>`
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
        <div id="processes-history-widgets" class="system-monitor-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,Yt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
            <div id="global-service-controls" class="header-controls" style="margin-left: auto; gap: 8px; ${P()?"display: none;":"display: flex;"}">
                <button id="global-restart-btn" class="notif-action-btn" title="Restart All Services"><i class='bx bx-refresh'></i></button>
                <button id="global-stop-btn" class="notif-action-btn" title="Stop All Services"><i class='bx bx-stop'></i></button>
                <button id="global-start-btn" class="notif-action-btn" title="Start All Services"><i class='bx bx-play'></i></button>
            </div>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,Xt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,Qt=()=>`
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
        </div>`,es=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${Jt()}
        </div>`;async function ts(){Fs(),await Promise.all([ne(),we(),it()]),await ze()}var Je=null;function Fs(){Je||(Je=setInterval(()=>{if(!document.getElementById("guardian-sentry-val")){clearInterval(Je),Je=null;return}ne(!0)},1e3))}var Wt=null,Gt=null;async function ss(){try{return await(await _("/system_monitor")).json()}catch{return null}}async function Vt(){try{return await(await _("/system/hardware")).json()}catch{return null}}async function Js(){try{return await(await _("/processes")).json()}catch{return null}}async function Ws(){try{return await(await _("/agent/status")).json()}catch{return null}}async function we(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),a=document.getElementById("global-restart-btn"),n=document.getElementById("global-stop-btn"),i=document.getElementById("global-start-btn"),r=(c,l)=>{c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{let w=c.innerHTML;c.innerHTML="<i class='bx bx-loader-alt spin'></i>",c.disabled=!0;try{await _(`/system/service/${l}`,{method:"POST",body:JSON.stringify({service:"all"})}),setTimeout(()=>we(),2e3),setTimeout(()=>we(),5e3),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{c.innerHTML=w,c.disabled=!1},1e3)},1e3)}catch(E){console.error(E),c.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{c.innerHTML=w,c.disabled=!1},2e3)}},c.dataset.listenerAttached="true")};r(a,"restart"),r(n,"stop"),r(i,"start");let o=document.querySelector("#hw-os .hw-content"),f=document.querySelector("#hw-cpu .hw-content"),d=document.querySelector("#hw-ram .hw-content"),h=document.querySelector("#hw-gpu .hw-content"),T=document.querySelector("#hw-storage .hw-content"),m=c=>{if(c){if(o&&(o.innerHTML=`
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
                </div>`}h&&(c.GPU&&c.GPU.length>0?h.innerHTML=c.GPU.map(l=>{let w=(l.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${l.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${w} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):h.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),T&&c.STORAGE&&c.STORAGE.length>0?T.innerHTML=c.STORAGE.map(l=>{let w=(l.USED/1073741824).toFixed(1),E=(l.SIZE/(1024*1024*1024)).toFixed(1),g=l.SIZE>0?(l.USED/l.SIZE*100).toFixed(0):0,S=l.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${l.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${S}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${w} GB Used</span>
                            <span>${E} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${Number(g)>90?"#cf6679":"#03dac6"}; width: ${g}%; height: 100%; box-shadow: 0 0 10px ${Number(g)>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):T&&(T.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>";let c=await Vt();c?(m(c),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)):(e.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3))},e.dataset.listenerAttached="true"),f&&!f.hasChildNodes())){let c=await Vt();m(c)}if(!t)return;t.dataset.controlsAttached||(t.addEventListener("click",async c=>{let l=c.target.closest(".svc-btn");if(!l)return;let w=l,E=w.dataset.action,g=w.dataset.service;if(!E||!g)return;let S=w.innerHTML;w.innerHTML="<i class='bx bx-loader-alt spin'></i>",w.classList.add("loading"),w.disabled=!0;try{await _(`/system/service/${E}`,{method:"POST",body:JSON.stringify({service:g})}),setTimeout(()=>we(),1e3),setTimeout(()=>we(),3e3)}catch(B){console.error(B),alert(`Failed to ${E} ${g}`),w.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{w.innerHTML=S,w.classList.remove("loading"),w.disabled=!1},2e3)}}),t.dataset.controlsAttached="true");let v=await ss();if(!v||!v.services){t.children.length===0&&(t.innerHTML=J("offline","Failed to load system metrics.","The event service may be offline."));let c=document.querySelector('[data-service-id="upstash-redis-ro"]');if(c){c.className="service-widget service-widget-offline",c.querySelector(".service-widget-status").textContent="ERROR";let l=c.querySelector(".service-widget-body");l&&(l.innerHTML='<div class="service-widget-footer offline"><span>CONNECTION FAILED</span></div>')}return}Wt=P()&&oe.lastDashboard||Date.now(),te(0,Wt||0);let s=v.services||[];window.updateCountdownInterval||(window.updateCountdownInterval=setInterval(()=>{let c=document.getElementById("upstash-countdown");if(c){let E=59-new Date().getSeconds();E<=0&&(E+=60),c.textContent=`${E}s`}},1e3)),Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function u(c){if(!c||c==="N/A"||c==="unknown")return"-";let l=c.match(/^(\d+\.\d+\.\d+)/);return l?l[0]:c.split(".").slice(0,3).join(".")||"-"}function C(c){return!c||c.length<=28?c:c.substring(0,28)+"..."}function A(c){if(!c||c==="N/A"||c==="unknown")return"-";let l=c.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!l)return"-";let w=parseInt(l[1])||0,E=parseInt(l[2])||0,g=parseInt(l[3])||0,S=parseFloat(l[4])||0,B=w*86400+E*3600+g*60+S,k=Math.floor(B/86400);if(k>0)return`${k}d`;let D=Math.floor(B/3600);if(D>0)return`${D}h`;let W=Math.floor(B/60);return W>0?`${W}m`:`${Math.floor(B)}s`}function b(c){if(c.id==="upstash-redis-ro"){let R=P()&&(oe.lastFrontend||oe.lastDashboard)||Date.now();return`
            <div class="service-widget service-widget-online" data-service-id="upstash-redis-ro">
                <div class="service-widget-header">
                    <i class="bx bx-check-circle"></i>
                    <h3>public-cache</h3>
                    <span class="service-widget-status">OK</span>
                </div>
                <div class="service-widget-body" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 0;">
                    <div style="font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Next Update In</div>
                    <div id="upstash-countdown" style="font-size: 2em; font-weight: bold; color: #fff; font-family: monospace;">--</div>
                    <div class="sync-time-label" style="font-size: 0.6em; color: #444; margin-top: 10px;">Last synced: ${new Date(R).toLocaleTimeString()}</div>
                </div>
            </div>`}let l=c.status==="online",w=l?"service-widget-online":"service-widget-offline",E=l?"bx-check-circle":"bx-x-circle",g=l?"OK":"BAD",S=c.version?u(c.version.str):"-",B=c.cpu&&c.cpu!=="N/A"?c.cpu:"-",k=c.memory&&c.memory!=="N/A"?c.memory:"-",D=B!=="-"?"#00ff00":"#666",W=B!=="-"?"#fff":"#666",U=k!=="-"?"#00ff00":"#666",G=k!=="-"?"#fff":"#666",H=A(c.uptime),$="",M=c.type!=="os"&&c.type!=="cli"&&c.type!=="prd",I="";M&&!P()&&(I=`
            <div class="service-controls" style="display: flex; gap: 8px; margin-top: 10px; justify-content: flex-end;">
                <button class="svc-btn svc-restart" title="Restart Service" data-action="restart" data-service="${c.id}"><i class='bx bx-refresh'></i></button>
                <button class="svc-btn svc-stop" title="Stop Service" data-action="stop" data-service="${c.id}" ${l?"":"disabled"}><i class='bx bx-stop'></i></button>
                <button class="svc-btn svc-start" title="Start Service" data-action="start" data-service="${c.id}" ${l?"disabled":""}><i class='bx bx-play'></i></button>
            </div>`),l?$=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${S}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${H}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${D};"></i>
                        <span style="color: ${W};">${B}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${U};"></i>
                        <span style="color: ${G};">${k}</span>
                    </div>
                </div>${I}`:$=`<div class="service-widget-footer offline" style="justify-content: center; opacity: 0.5; letter-spacing: 2px; font-weight: bold;"><span>OFFLINE</span></div>${I}`;let O=P()?"easter.company":C(c.domain&&c.port?`${c.domain}:${c.port}`:"");return`<div class="service-widget ${w}" data-service-id="${c.id}"><div class="service-widget-header"><i class="bx ${E}"></i><h3>${c.short_name||c.id}</h3><span class="service-widget-status">${g}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${O}</span></div>${$}</div></div>`}let p=new Map(Array.from(t.querySelectorAll(".service-widget")).map(c=>[c.dataset.serviceId,c])),x=new Set(s.map(c=>c.id));for(let[c,l]of p)x.has(c)||l.remove();let y=new Set;s.forEach(c=>{if(y.has(c.id))return;y.add(c.id);let l=b(c),w=p.get(c.id);if(w&&w.parentNode)if(c.id==="upstash-redis-ro"){let E=P()&&(oe.lastFrontend||oe.lastDashboard)||Date.now(),g=new Date(E).toLocaleTimeString(),S=w.querySelector(".sync-time-label");S&&(S.textContent=`Last synced: ${g}`)}else w.outerHTML!==l&&(w.outerHTML=l);else t.insertAdjacentHTML("beforeend",l)})}async function it(){let t=document.getElementById("models-widgets");if(!t)return;let e=await ss();if(!e){t.children.length===0&&(t.innerHTML=J("offline","Failed to load model status.","The event service may be offline."));return}Gt=Date.now(),te(2,Gt);let a=e.models||[],n=e.whisper;Array.from(t.children).forEach(d=>{d.classList.contains("service-widget")||d.remove()});function i(d){let h=d.status==="Ready";return`
                <div class="service-widget ${h?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${h?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${d.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function r(d){let h=d.status==="Ready";return`
                <div class="service-widget ${h?"service-widget-online":"service-widget-offline"}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx bx-volume-full"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${h?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${d.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">xtts</span>
                        </div>
                    </div>
                </div>`}function o(d){let h=d.status==="Downloaded",T=h?"service-widget-online":"service-widget-offline",m=h?"OK":"MISSING",v=h&&d.size>0?`${(d.size/1e9).toFixed(2)} GB`:"-",s=d.name;return d.type==="custom"&&s.endsWith(":latest")&&(s=s.replace(":latest","")),`<div class="service-widget ${T}" data-model-name="${d.name}"><div class="service-widget-header"><i class="bx ${h?"bx-check-circle":"bx-x-circle"}"></i><h3>${s}</h3><span class="service-widget-status">${m}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${d.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${v}</span></div></div></div>`}let f="";if(n&&(f+=i(n)),e.xtts&&(f+=r(e.xtts)),f+=a.map(o).join(""),!f){t.innerHTML=J("empty","No models found.");return}t.innerHTML!==f&&(t.innerHTML=f)}async function ne(t=!1){let e=document.getElementById("processes-widgets");if(!e&&!t)return;let a=document.getElementById("guardian-sentry-val"),n=document.getElementById("guardian-idle-val"),i=document.getElementById("guardian-total-idle"),r=document.getElementById("guardian-total-active"),o=document.getElementById("guardian-total-waste"),f=document.getElementById("guardian-reset-btn"),d=document.getElementById("analyzer-reset-btn"),h=document.getElementById("fabricator-reset-btn"),T=document.getElementById("courier-reset-btn"),m=document.getElementById("system-pause-toggle-btn");m&&!m.dataset.listenerAttached&&(m.onclick=async()=>{let c=m.querySelector(".bx-play")?"/agent/resume":"/agent/pause";m.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await _(c,{method:"POST"}),await ne()}catch{m.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>ne(),2e3)}},m.dataset.listenerAttached="true"),f&&!f.dataset.listenerAttached&&(f.onclick=async()=>{f.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await _("/agent/reset?protocol=all",{method:"POST"}),setTimeout(()=>{f.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{f.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{f.innerHTML="<i class='bx bx-error'></i>"}},f.dataset.listenerAttached="true"),d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{d.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await _("/agent/reset?protocol=synthesis",{method:"POST"}),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{d.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{d.innerHTML="<i class='bx bx-error'></i>"}},d.dataset.listenerAttached="true"),h&&!h.dataset.listenerAttached&&(h.onclick=async()=>{h.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await _("/agent/reset?protocol=construction",{method:"POST"}),setTimeout(()=>{h.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{h.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{h.innerHTML="<i class='bx bx-error'></i>"}},h.dataset.listenerAttached="true"),T&&!T.dataset.listenerAttached&&(T.onclick=async()=>{T.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await _("/agent/reset?protocol=researcher",{method:"POST"}),setTimeout(()=>{T.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{T.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{T.innerHTML="<i class='bx bx-error'></i>"}},T.dataset.listenerAttached="true");let v=document.getElementById("imaginator-reset-btn");v&&!v.dataset.listenerAttached&&(v.onclick=async()=>{v.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await _("/agent/reset?protocol=alert_review",{method:"POST"}),setTimeout(()=>{v.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{v.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),ne()}catch{v.innerHTML="<i class='bx bx-error'></i>"}},v.dataset.listenerAttached="true");let s=await Ws();if(s&&s.agents){let y=s.agents.guardian||{protocols:{}},c=s.agents.analyzer||{protocols:{}},l=s.agents.imaginator||{protocols:{}},w=s.agents.fabricator||{protocols:{}},E=s.agents.courier||{protocols:{}},g=s.system||{},S=Math.floor(Date.now()/1e3),B={sentry:"Sentry",synthesis:"Synthesis",alert_review:"Alert Review",construction:"Construction",researcher:"Researcher"},k=L=>{L<0&&(L=0);let z=Math.floor(L/3600),N=Math.floor(L%3600/60),q=L%60;return z>0?`${z}h ${N}m`:N>0?`${N}m ${q}s`:`${q}s`},D=(L,z,N,q)=>{if(!L)return;let Y=B[q]||q.toUpperCase(),K=L.parentElement?.querySelector('span[style*="text-transform: uppercase"]');if(K&&(K.textContent=Y),!N){L.textContent="Inactive",L.style.color="#666";return}let Ce=N.status;if(Ce==="Working")L.textContent="Working",L.style.color="#bb86fc";else if(Ce==="Ready")L.textContent="Ready",L.style.color="#5eff5e";else{let Ee=N.cooldown;if(P()&&(Ee=N.next_run-S),Ee<=0)L.textContent="Ready",L.style.color="#5eff5e";else{let Ge=Math.floor(Ee/60),Ve=Ee%60;L.textContent=`${Ge}m ${Ve}s`,L.style.color="#fff"}}z&&N.stats&&(z.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <span>Runs: ${N.stats.runs||0}</span>
              <span style="color: ${N.stats.failures>0?"#ffa500":"#666"}">Fails: ${N.stats.failures||0}</span>
              <span style="color: ${N.stats.aborted>0?"#ff4d4d":"#666"}">Aborted: ${N.stats.aborted||0}</span>
            </div>
          `)};a&&D(a,document.getElementById("guardian-sentry-stats"),y.protocols.sentry,"sentry");let W=document.getElementById("analyzer-synthesis-val"),U=document.getElementById("analyzer-synthesis-stats");W&&D(W,U,c.protocols.synthesis,"synthesis");let G=document.getElementById("imaginator-alert_review-val"),H=document.getElementById("imaginator-alert_review-stats");G&&D(G,H,l.protocols.alert_review,"alert_review");let $=document.getElementById("fabricator-construction-val"),M=document.getElementById("fabricator-construction-stats");$&&D($,M,w.protocols.construction,"construction");let I=document.getElementById("courier-researcher-val"),O=document.getElementById("courier-researcher-stats");I&&D(I,O,E.protocols.researcher,"researcher");let R=document.getElementById("system-state-label"),V=document.getElementById("system-state-val");if(V&&g.state){let L=g.state,z=k(g.state_time||0);R&&(R.textContent=`State: ${L.toUpperCase()}`),V.textContent=z,L==="idle"?V.style.color=g.state_time>300?"#5eff5e":"#fff":V.style.color="#bb86fc",m&&(L==="paused"?(m.innerHTML="<i class='bx bx-play'></i>",m.title="Resume System",m.style.color="#ff9800"):(m.innerHTML="<i class='bx bx-pause'></i>",m.title="Pause System",m.style.color=""))}i&&(i.textContent=k(g.metrics?.total_idle_time||0)),r&&(r.textContent=k(g.metrics?.total_active_time||0)),o&&(o.textContent=k(g.metrics?.total_waste_time||0))}else[a,n,i,r,o].forEach(c=>{c&&(c.textContent="-",c.style.color="#666")});if(t)return;let u=await Js(),C=[],A=[],b=[];u&&(Array.isArray(u)?C=u:(C=u.active||[],A=u.queue||[],b=u.history||[],b.sort((y,c)=>(c.end_time||0)-(y.end_time||0)))),e&&(C.length===0?e.querySelector(".tab-placeholder")||(e.innerHTML=J("empty","No active processes.")):((e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML=""),nt(e,C,!1)));let p=document.getElementById("processes-queue-widgets");p&&(A.length===0?!p.querySelector(".tab-placeholder")&&!p.querySelector('div[style*="font-style: italic"]')&&(p.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(p.innerHTML="",nt(p,A,!1)));let x=document.getElementById("processes-history-widgets");x&&(b.length===0?x.querySelector(".tab-placeholder")||(x.innerHTML=J("empty","No recent history.")):(x.querySelector(".tab-placeholder")&&(x.innerHTML=""),nt(x,b,!0))),Re(1,C.length)}function nt(t,e,a){function n(d){let h="";d.end_time?h=`${d.end_time-d.start_time}s`:h=`${Math.floor(Date.now()/1e3-d.start_time)}s`;let T=d.retries>0?`<span class="process-retry-badge">Retry ${d.retries}</span>`:"",m=d.channel_id,v={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation","system-analyzer":"Analyzer Agent","system-courier":"Courier Agent","system-imaginator":"Imaginator Agent","system-fabricator":"Fabricator Agent"};if(v[m]?m=v[m]:/^\d+$/.test(m)&&(m=`Channel ${m}`),a)return`
        <div class="process-history-item" data-channel-id="${d.channel_id}-${d.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${m}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${d.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${d.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${h}</span>
            </div>
        </div>`;let s="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${d.channel_id}-${d.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${s}"></i>
                        <h3 style="color: ${s}">${m}</h3>
                        ${T}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${s}">${d.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${s}">${h}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${s}">${d.pid}</span>
                        </div>
                    </div>
                </div>`}let i=a?".process-history-item":".process-widget",r=new Map(Array.from(t.querySelectorAll(i)).map(d=>[d.dataset.channelId,d])),o=new Set(e.map(d=>`${d.channel_id}-${d.start_time}`));for(let[d,h]of r)d&&!o.has(d)&&h.remove();let f=new Set;e.forEach(d=>{let h=`${d.channel_id}-${d.start_time}`;if(f.has(h))return;f.add(h);let T=n(d),m=r.get(h);if(m&&m.parentNode){m.outerHTML!==T&&(m.outerHTML=T);let v=t.querySelector(`[data-channel-id="${h}"]`);v&&t.appendChild(v)}else t.insertAdjacentHTML("beforeend",T)})}function We(){let t=Ze(),e="Notification"in window,a={enabled:e&&Notification.permission==="granted",supported:e};return`
            <div class="theme-selector">
                ${Object.values(ee).map(n=>`
                    <div class="theme-card ${t===n?"active":""}" data-theme="${n}">
                        <div class="theme-preview theme-preview-${n.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${n.charAt(0).toUpperCase()+n.slice(1)}</h3>
                            <p>${n===ee.DARK?"Simple, clean, dark.":n===ee.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
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
            </div>

            <div class="settings-divider"></div>

            <div class="settings-section">
                <h2 class="settings-section-title">Cognitive Optimization</h2>
                <div id="ollama-config-list" class="settings-list">
                    <div style="padding: 20px; text-align: center; color: #666;">
                        <i class='bx bx-loader-alt spin'></i> Loading optimization settings...
                    </div>
                </div>
            </div>`}function at(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(n=>{n.addEventListener("click",function(){let i=this.dataset.theme;i&&(gt(i),t.setContent(We()),at(t))})});let a=document.getElementById("notifications-toggle");a&&"Notification"in window?a.onclick=async n=>{let i=n.target;if(i.checked)try{await Notification.requestPermission()!=="granted"&&(i.checked=!1)}catch{i.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),i.checked=!0)}:a&&(a.disabled=!0),Gs()}async function Gs(){let t=document.getElementById("service-config-list"),e=document.getElementById("ollama-config-list");if(!t||!e)return;let a=P();try{let i=await(await _("/system/options")).json(),r=i.services||i||{},o=i.ollama||i||{},f="",d=(C,A,b)=>`
        <div class="settings-item">
            <div class="settings-item-info">
                <span class="settings-item-label">${C}</span>
                <span class="settings-item-description">Enable GPU acceleration (CUDA)</span>
            </div>
            <label class="toggle-switch">
                <input type="checkbox" class="service-device-toggle" data-service="${A}" ${b==="cuda"?"checked":""} ${a?"disabled":""}>
                <span class="toggle-slider"></span>
            </label>
        </div>`;r.stt&&(f+=d("STT Service","stt",r.stt.device||"cpu")),r.tts&&(f+=d("TTS Service","tts",r.tts.device||"cpu")),f?a&&(f+='<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Service configuration is read-only in public mode.</div>'):f='<div style="padding: 20px; text-align: center; color: #666;">No configurable services found.</div>',t.innerHTML=f;let h="",T=o.utility_device||"cpu",m=o.utility_speed||"smart",v=a?"disabled":"";if(h+=`
        <div class="settings-item">
            <div class="settings-item-info">
                <span class="settings-item-label">Utility Hardware</span>
                <span class="settings-item-description">Force utilities (summary, engagement, etc) to specific hardware.</span>
            </div>
            <div class="settings-control">
                <select id="ollama-utility-device-select" class="settings-select" ${v}>
                    <option value="cpu" ${T==="cpu"?"selected":""}>CPU (RAM)</option>
                    <option value="gpu" ${T==="gpu"?"selected":""}>GPU (VRAM)</option>
                </select>
            </div>
        </div>
        <div class="settings-item">
            <div class="settings-item-info">
                <span class="settings-item-label">Utility Intelligence</span>
                <span class="settings-item-description">Prioritize speed (smaller models) or intelligence (larger models) for utilities.</span>
            </div>
            <div class="settings-control">
                <select id="ollama-utility-speed-select" class="settings-select" ${v}>
                    <option value="fast" ${m==="fast"?"selected":""}>Fast (Efficiency)</option>
                    <option value="smart" ${m==="smart"?"selected":""}>Smart (Fidelity)</option>
                </select>
            </div>
        </div>`,a?h+='<div style="font-size: 0.7em; color: #666; font-style: italic; margin-top: 15px; text-align: center;">* Optimization is read-only in public mode.</div>':h+=`<div style="font-size: 0.7em; color: #ffa500; font-style: italic; margin-top: 10px; text-align: center;"><i class='bx bx-info-circle'></i> Changing these settings requires a 'dex restart' to re-apply.</div>`,e.innerHTML=h,a)return;t.querySelectorAll(".service-device-toggle").forEach(C=>{C.addEventListener("change",async A=>{let b=A.target,p=b.dataset.service,x=b.checked?"cuda":"cpu";b.disabled=!0;try{await _("/system/options",{method:"POST",body:JSON.stringify({service:p,key:"device",value:x})})}catch{b.checked=!b.checked,alert("Failed to update configuration.")}finally{b.disabled=!1}})});let s=document.getElementById("ollama-utility-device-select");s&&s.addEventListener("change",async C=>{let A=C.target,b=A.value;A.disabled=!0;try{await _("/system/options",{method:"POST",body:JSON.stringify({service:"ollama",key:"utility_device",value:b})})}catch{alert("Failed to update utility hardware setting.")}finally{A.disabled=!1}});let u=document.getElementById("ollama-utility-speed-select");u&&u.addEventListener("change",async C=>{let A=C.target,b=A.value;A.disabled=!0;try{await _("/system/options",{method:"POST",body:JSON.stringify({service:"ollama",key:"utility_speed",value:b})})}catch{alert("Failed to update utility intelligence setting.")}finally{A.disabled=!1}})}catch{t.innerHTML='<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load configuration.</div>',e.innerHTML='<div style="padding: 20px; text-align: center; color: #cf6679;">Failed to load optimization settings.</div>'}}var is=()=>`
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
    `;async function as(){let t=document.getElementById("web-history-content");if(!t)return;let e=document.getElementById("web-refresh-btn");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await ns(t),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),await ns(t)}async function ns(t){try{let e=await _("/web/history");if(!e.ok)throw new Error("Failed to fetch history");let a=await e.json();if(!a||a.length===0){t.innerHTML=J("empty","No web history found.");return}let n=`
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div class="web-carousel" style="flex: 1; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 20px; padding-bottom: 5px; scroll-behavior: smooth; min-height: 0;">
        `;a.forEach((f,d)=>{let h=new Date(f.timestamp*1e3).toLocaleString([],{dateStyle:"short",timeStyle:"short"}),T=f.screenshot?`<img src="data:image/png;base64,${f.screenshot}" style="width: 100%; max-height: 45%; object-fit: contain; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px; flex-shrink: 0; background: #000;">`:'<div style="width: 100%; height: 80px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: #666; margin-bottom: 15px; border-radius: 8px; flex-shrink: 0;">No Screenshot</div>';n+=`
                <div class="web-card" style="flex: 0 0 100%; height: 100%; display: flex; flex-direction: column; scroll-snap-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; box-sizing: border-box; max-width: 100%; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px; flex-shrink: 0;">
                        <span style="color: #03dac6; font-weight: bold; font-family: monospace;">#${d+1}</span>
                        <span style="color: #888; font-size: 0.8em; font-family: monospace;">${h}</span>
                    </div>
                    <h3 style="margin-bottom: 5px; color: #fff; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; font-size: 1.1em;">${f.title||"No Title"}</h3>
                    <a href="${f.url}" target="_blank" style="color: #bb86fc; font-size: 0.8em; margin-bottom: 15px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; text-decoration: none;">${f.url}</a>
                    
                    ${T}

                    <div style="flex: 1; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px; overflow-y: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; color: #aaa; white-space: pre-wrap; border: 1px solid rgba(255,255,255,0.03);">${f.content?f.content.replace(/</g,"&lt;").replace(/>/g,"&gt;"):"No content available"}</div>
                </div>
            `}),n+=`
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 0 0; flex-shrink: 0;">
                    <button id="web-prev-btn" class="notif-action-btn" style="margin-right: auto;"><i class='bx bx-left-arrow-alt'></i> Prev</button>
                    <span style="color: #555; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px;">Swipe to navigate</span>
                    <button id="web-next-btn" class="notif-action-btn" style="margin-left: auto;">Next <i class='bx bx-right-arrow-alt'></i></button>
                </div>
            </div>
        `,t.innerHTML=n;let i=t.querySelector(".web-carousel"),r=t.querySelector("#web-prev-btn"),o=t.querySelector("#web-next-btn");r&&(r.onclick=()=>{i.scrollBy({left:-i.offsetWidth,behavior:"smooth"})}),o&&(o.onclick=()=>{i.scrollBy({left:i.offsetWidth,behavior:"smooth"})})}catch(e){t.innerHTML=J("error","Failed to load web history.",e.message)}}var ls=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It maintains system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1] [--force]
0 = Full Analysis (Default)
1 = Tier 1 Only (Reports)`},demo_output:["\u2588 \x1B[1mGUARDIAN TECHNICAL SENTRY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m[INFO] Verifying system state...\x1B[0m"," \x1B[32m\u2713\x1B[0m No ongoing processes detected."," \x1B[32m\u2713\x1B[0m System idle time requirement met (312s).","","\x1B[1mInitializing Sentry Analysis...\x1B[0m","\x1B[94m\u2192 Executing Tier 1: Technical Sentry...\x1B[0m"," \x1B[90m\u2699\uFE0F  Auditing 50 system events...\x1B[0m"," \x1B[90m\u2699\uFE0F  Analyzing recent service logs...\x1B[0m"," \x1B[90m\u2699\uFE0F  Executing pre-analysis test suite...\x1B[0m","","# [SYSTEM] Service Connectivity Alert","**Priority**: high","**Body**: dex-tts-service reported 3 consecutive timeouts.","","\x1B[32m\u2713 Guardian run completed successfully.\x1B[0m","\x1B[90m  Duration: 14.2s | Waste: 0s | Reliability: 100%\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
dex stop
dex restart`},demo_output:["\u2192 Restarting dex-event-service...","\x1B[32m\u2713\x1B[0m Service stopped (PID 19420)","\x1B[32m\u2713\x1B[0m Service started (PID 20155)","\u2192 Verifying health check (http://127.0.0.1:8100/status)...","\x1B[32m\u2713\x1B[0m Response received in 12ms.","","\x1B[1mService uptime: 4 seconds\x1B[0m"]},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the status of CLI and services.",usage:"dex status [service]",category:"system",docs:{overview:"The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.",details:["Reports status (online/offline/degraded).","Displays version strings and build hashes.","Shows network addresses and ports.","Validates internal service-to-service communication."],extended_usage:"dex status [service_id|all]"},demo_output:["\u2588 \x1B[1mSERVICE STATUS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE  ADDRESS          VERSION  BRANCH   COMMIT   STATUS   UPTIME           CPU      MEM","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500          \u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500      \u2500\u2500\u2500","cli      local            2.8.143  main     240fc38  \x1B[32mOK\x1B[0m       \x1B[90m--\x1B[0m               \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m","event    127.0.0.1:8100   2.8.198  main     a8f2b1c  \x1B[32mOK\x1B[0m       14h22m           0.2%     12.4 MB","discord  127.0.0.1:8300   2.8.68   main     6e2d1a4  \x1B[32mOK\x1B[0m       14h22m           0.1%     24.8 MB","tts      127.0.0.1:8200   0.0.25   main     f2e1d0c  \x1B[32mOK\x1B[0m       14h22m           0.0%     1.2 GB","web      127.0.0.1:8400   0.0.5    main     b1c2d3e  \x1B[32mOK\x1B[0m       14h22m           0.0%     42.1 MB","ollama   127.0.0.1:11434  0.5.4    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       4d12h            0.5%     8.4 GB","cache    127.0.0.1:6379   7.4.1    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       32d              0.1%     4.2 MB"]},{id:"logs",title:"Logs",icon:"bx-terminal",description:"View or tail service logs.",usage:"dex logs <service> [-f]",category:"system",docs:{overview:"Logs provides real-time observability into the background processes of the Dexter services.",details:["Tail live output from systemd services.","Support for following (-f) and history limiting.","ANSI color support for terminal readability.","Aggregated view for multi-instance deployments."],extended_usage:"dex logs <service_id> [-f]"},demo_output:["\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:05\x1B[0m [INFO] Joined voice channel: 1437617331...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:08\x1B[0m [DEBUG] VAD triggered by user oweneaster","\x1B[35m[EVENT]\x1B[0m   \x1B[90m14:30:09\x1B[0m [INFO] Emitted: messaging.user.speaking.started","\x1B[32m[TTS]\x1B[0m     \x1B[90m14:30:12\x1B[0m [INFO] Generating audio for 12 words...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:15\x1B[0m [SUCCESS] Audio playback completed.","\x1B[90m[Watching for new logs...]\x1B[0m"]},{id:"event",title:"Event",icon:"bx-broadcast",description:"Interact with the Event Service.",usage:"dex event [log|service|analyst|delete]",category:"system",docs:{overview:"The event bus interface for manual debugging and data extraction.",details:["Query the history of the system event log.","Manually reset analyst tier timers.","Filter events by type, service, or count.","Delete historical events matching patterns."],extended_usage:`dex event log [-n count] [-t type]
dex event analyst [status|reset]
dex event delete <pattern>`},demo_output:["\u2588 \x1B[1mLAST 20 EVENTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m14:42:01\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[38;5;208mCMD: dex guardian [] (success)\x1B[0m","\x1B[90m14:42:02\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[35m[INFO] Analysis complete: No significant insights found.\x1B[0m","\x1B[90m14:45:10\x1B[0m \x1B[90mdiscord        \x1B[0m | \x1B[34moweneaster: Dexter, run a system scan.\x1B[0m","\x1B[90m14:45:12\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[32mPROC+: system-cli-op (started)\x1B[0m","\x1B[90m14:45:15\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[31m[ERROR] Connection timeout to Redis.\x1B[0m"]},{id:"discord",title:"Discord",icon:"bx-bot",description:"Interact with the Discord Service.",usage:"dex discord [contacts|channels|service|quiet]",category:"system",docs:{overview:"Direct control over the Discord bot integration and audio engine.",details:["List all guild members and their permission levels.","Inspect channel structures and user presence.",'Toggle "Quiet Mode" for public interactions.',"Check raw service state and gateway health."],extended_usage:`dex discord contacts
dex discord quiet [on|off]`},demo_output:["\u2588 \x1B[1mDISCORD CONTACTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Fetching guild members...","","\u2588 Server: Easter Company (12 members) \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","LEVEL           USERNAME        STATUS   DISCORD ID","\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[35mDEXTER (ME)\x1B[0m     Dexter          \x1B[32monline\x1B[0m   \x1B[90m1313...0432\x1B[0m","\x1B[35mMASTER\x1B[0m          oweneaster      \x1B[32monline\x1B[0m   \x1B[90m3130...7920\x1B[0m","\x1B[31mADMIN\x1B[0m           Developer       \x1B[33midle\x1B[0m     \x1B[90m4242...8181\x1B[0m","\x1B[37mUSER\x1B[0m            GuestUser       \x1B[90moffline\x1B[0m  \x1B[90m9999...9999\x1B[0m"]},{id:"ollama",title:"Ollama",icon:"bx-brain",description:"Run the system 'ollama' executable or sync models.",usage:"dex ollama [pull|sync|list]",category:"system",docs:{overview:"Proxy command for managing local LLMs and neural vision models.",details:["Wraps the system ollama binary.","Added 'pull' subcommand to sync all Dexter-required models.","Synchronizes custom model templates automatically.","Validates model weight checksums."],extended_usage:`dex ollama pull
dex ollama run gemma3:12b`},demo_output:["\x1B[34m[OLLAMA]\x1B[0m Synchronizing custom Dexter models...","Pulling base models...","Pulling gemma3:12b... \x1B[32m[100%]\x1B[0m","\x1B[32m\u2713 Successfully pulled model: gemma3:12b\x1B[0m","Creating custom Dexter models...","  Rebuilding dex-analyst-guardian from gpt-oss:20b...","\x1B[32m\u2713   Created dex-analyst-guardian\x1B[0m","\x1B[32m\u2713 Ollama models are up-to-date.\x1B[0m"]},{id:"system",title:"System Info",icon:"bx-info-square",description:"Show system info and manage packages.",usage:"dex system [info|scan|validate|install]",category:"system",docs:{overview:"Performance observability tool focused on AI resource availability.",details:["Scans and reports CPU, GPU, RAM, and Storage vitals.","Validates presence of required system packages.","Handles automatic installation of missing dependencies.","Exports telemetry data in JSON format."],extended_usage:`dex system scan
dex system validate
dex system install <package>`},demo_output:["\u2588 \x1B[1mSYSTEM CONFIGURATION\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Category        Value","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500","CPU (Generic)   Cores: 16, Threads: 32","                Avg Clock: 4.20 GHz","GPU 0           NVIDIA GeForce RTX 4090, VRAM: 24.0 GB, CUDA: 1204","Memory          64.0 GB","Storage         2.0 TB (1 devices)","                /dev/nvme0n1p3: 450.2 GB / 1862.4 GB (/)","Packages        ","                \x1B[32m\u2713 12 checks passed\x1B[0m"]},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Show service config or a specific field.",usage:"dex config <service> [field...]",category:"system",docs:{overview:"Manages the central registry that defines service interaction.",details:["View service definitions (domains, ports, IDs).","Modify environment-specific parameters.","Update authentication secrets and API endpoints.","Supports JSON path traversal for deep fields."],extended_usage:`dex config <service> [field]
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Vs=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
    `;for(let[a,n]of Object.entries(t)){let i=ls.filter(r=>r.category===a);i.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${n.icon}' style="color: ${n.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${n.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${i.map(r=>`
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
    </div>`,e},ot=!1;function Ks(t){let e=document.getElementById("cli-terminal-overlay");if(!e){e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e);let d=document.getElementById("close-terminal-btn");d&&(d.onclick=()=>os());let h=document.getElementById("terminal-action-btn");h&&(h.onclick=()=>os())}let a=document.getElementById("cli-terminal-body"),n=document.getElementById("cli-docs-pane");a&&(a.innerHTML="");let i=t.docs||{overview:t.description,details:[],extended_usage:t.usage};n&&(n.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${i.overview}</p>
        </div>
        ${i.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${i.details.map(d=>`<li>${d}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${i.extended_usage}</pre>
        </div>
    `);let r=document.getElementById("terminal-cmd-name");r&&(r.textContent=`dex ${t.id}`);let o=document.getElementById("terminal-status-badge");o&&(o.className="terminal-status status-running",o.textContent="Running");let f=document.getElementById("terminal-action-btn");return f&&(f.style.display="none"),e.classList.add("active"),document.body.style.overflow="hidden",ot=!0,a}function os(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),document.body.style.overflow="",ot=!1}function rs(t,e,a="output"){if(!ot||!t)return;let n=document.createElement("div");if(n.className=`terminal-line terminal-${a}`,a==="prompt")n.innerHTML=`<span class="terminal-prompt">$</span> ${e}`;else{let i=Oe(e);n.innerHTML=i||e}t.appendChild(n),t.scrollTop=t.scrollHeight}async function Zs(t){let e=ls.find(o=>o.id===t);if(!e)return;let a=Ks(e);a&&rs(a,`dex ${t}`,"prompt");let n=e.demo_output||["Executing command...","\u2713 Done."];for(let o of n){await new Promise(d=>setTimeout(d,400+Math.random()*600));let f="output";o.includes("[ERROR]")?f="error":o.includes("[SUCCESS]")||o.includes("\u2713")?f="success":o.includes("!")&&(f="warning"),a&&rs(a,o,f)}let i=document.getElementById("terminal-status-badge");i&&(i.className="terminal-status status-success",i.textContent="Completed (Demo)");let r=document.getElementById("terminal-action-btn");r&&(r.style.display="block")}function cs(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Vs();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let a=e.querySelector("code"),n=a?a.textContent:"";n&&navigator.clipboard.writeText(n).then(()=>{let i=e.querySelector("i");i&&(i.className="bx bx-check",i.style.color="#5eff5e",setTimeout(()=>{i.className="bx bx-copy",i.style.color="#bb86fc"},2e3))})}),t.querySelectorAll(".cli-command-card").forEach(a=>{let n=a;a.addEventListener("mouseenter",()=>{n.style.transform="translateY(-5px)",n.style.borderColor="rgba(255,255,255,0.15)",n.style.backgroundColor="rgba(255,255,255,0.05)"}),a.addEventListener("mouseleave",()=>{n.style.transform="translateY(0)",n.style.borderColor="rgba(255,255,255,0.05)",n.style.backgroundColor="rgba(255,255,255,0.03)"}),a.addEventListener("click",()=>{let i=n.dataset.cmd;i&&Zs(i)})})}async function Ys(){if(!P())try{if(!(await _("/system/status",{method:"GET"})).ok)throw new Error("Service unhealthy")}catch(t){console.error("Service health check failed:",t)}}function ds(){if(window.location.protocol==="http:"&&window.location.hostname==="easter.company"){window.location.replace("https://"+window.location.hostname+window.location.pathname+window.location.search);return}dt(),pt(),Ys(),bt(),ct();let t=window.location.pathname;(t==="/dexter"||t==="/dexter/")&&cs();let e=[],a=document.getElementById("windows-container");a&&a.setAttribute("data-count","0");let n=b=>{localStorage.setItem("dex_last_window",b)};function i(){for(;e.length>1;)e.shift().close(!0);let b=document.getElementById("windows-container"),p=document.querySelector("nav"),x=document.querySelector("footer"),y=window.location.pathname==="/"||window.location.pathname==="/index.html",c=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");b&&b.setAttribute("data-count",e.length.toString()),e.forEach(k=>{let D=document.getElementById(k.id);D&&D.classList.remove("hide-close")});let l=document.getElementById("dexter-menu-container"),w=document.getElementById("nav-window-switcher"),E=document.getElementById("settings-icon"),g=document.getElementById("docs-icon"),S=document.getElementById("close-all-windows"),B=window.innerWidth<880;if(!B){let k=document.getElementById("dexter-dropdown"),D=document.getElementById("dexter-menu-btn");k&&k.classList.remove("active"),D&&D.classList.remove("active"),b&&b.classList.remove("menu-open")}if(Te(e.length>0),e.length>0)if(x?.classList.add("hide"),S&&(S.style.display=B?"none":"block"),document.querySelector("main")?.style.setProperty("opacity","0","important"),document.body.style.overflow="hidden",p?.classList.add("window-open"),b&&(b.style.paddingTop="60px"),l&&(l.style.display=B?"flex":"none"),g&&(g.style.display=B?"block":"none"),E&&(E.style.display=B?"block":"none"),!B&&w){let k=e[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(k)?(w.innerHTML=`
                      <div class="nav-switch-btn ${k==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${k==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${k==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${k==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${k==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts")?.addEventListener("click",()=>{n("alerts-window"),r(f)}),document.getElementById("switch-events")?.addEventListener("click",()=>{n("events-window"),r(d)}),document.getElementById("switch-monitor")?.addEventListener("click",()=>{n("monitor-window"),r(T)}),document.getElementById("switch-contacts")?.addEventListener("click",()=>{n("contacts-window"),r(h)}),document.getElementById("switch-workspace")?.addEventListener("click",()=>{n("workspace-window"),r(m)})):w.innerHTML=""}else w&&(w.innerHTML="");else p?.classList.remove("window-open"),S&&(S.style.display="none"),b&&(b.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.body.style.overflow="",y||c?x?.classList.remove("hide"):x?.classList.add("hide"),l&&(l.style.display="flex"),g&&(g.style.display="block"),E&&(E.style.display="block"),w&&(w.innerHTML="");ke()}function r(b){if(b.isOpen()){b.close();return}for(;e.length>0;)e.pop().close(!0);e.push(b),b.open(),i()}function o(){[...e].forEach(p=>p.close()),e=[]}window.addEventListener("resize",i);let f=me({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Et(),onOpen:()=>de(),onClose:()=>{let b=e.indexOf(f);b>-1&&e.splice(b,1),i()}}),d=me({id:"events-window",title:"Events",icon:"bx-calendar-event",content:st(),onOpen:()=>{d.setContent(st()),pe()},onClose:()=>{let b=e.indexOf(d);b>-1&&e.splice(b,1),i()}}),h=me({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:qt(),onOpen:()=>tt(),onClose:()=>{let b=e.indexOf(h);b>-1&&e.splice(b,1),i()}}),T=me({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:Yt()},{icon:"bxs-component",title:"Processes",content:Zt()},{icon:"bxs-brain",title:"Models",content:Xt()},{icon:"bx-globe",title:"Web",content:is()},{icon:"bxs-hdd",title:"Hardware",content:Qt()},{icon:"bxs-terminal",title:"Logs",content:es()},{icon:"bxs-zap",title:"Agents",content:Kt()}].filter(b=>P()?b.title!=="Hardware"&&b.title!=="Logs":!0),onOpen:()=>{we(),ne(),it(),as(),ze()},onClose:()=>{let b=e.indexOf(T);b>-1&&e.splice(b,1),i()}}),m=me({id:"workspace-window",title:"Workspace",icon:"bx-brain",tabs:[{icon:"bx-loader-circle",title:"Progress",content:Nt()},{icon:"bx-map-alt",title:"Roadmap",content:Pt()},{icon:"bx-paint",title:"Blueprints",content:Rt()},{icon:"bx-task",title:"Tasks",content:Ot()}],onOpen:()=>et(),onClose:()=>{let b=e.indexOf(m);b>-1&&e.splice(b,1),i()}}),v=me({id:"settings-window",title:"Settings",icon:"bx-cog",content:We(),onOpen:()=>{v.setContent(We()),at(v)},onClose:()=>{let b=e.indexOf(v);b>-1&&e.splice(b,1),i()}});window.dexter={viewEvent:b=>{d.isOpen()||r(d),setTimeout(()=>{let p=document.querySelector(`.event-item[data-event-id="${b}"]`);p&&(p.scrollIntoView({behavior:"smooth",block:"center"}),p.classList.add("flash-highlight"),p.classList.contains("expanded")||p.click(),setTimeout(()=>p.classList.remove("flash-highlight"),2e3))},500)},viewAlert:b=>{f.isOpen()||r(f),setTimeout(()=>{let p=document.querySelector(`.event-item[data-alert-id="${b}"]`);p&&(p.scrollIntoView({behavior:"smooth",block:"center"}),p.classList.add("flash-highlight"),p.classList.contains("expanded")||p.click(),setTimeout(()=>p.classList.remove("flash-highlight"),2e3))},500)}};let s=()=>{let b=document.getElementById("dexter-dropdown"),p=document.getElementById("dexter-menu-btn");b&&p&&(b.classList.remove("active"),p.classList.remove("active"),window.innerWidth<880&&document.getElementById("windows-container")?.classList.remove("menu-open"))};(()=>{let b=document.getElementById("dexter-menu-btn"),p=document.getElementById("settings-icon"),x=document.getElementById("docs-icon"),y=document.getElementById("close-all-windows"),c=document.getElementById("nav-left-container"),l=document.getElementById("dexter-dropdown"),w=document.getElementById("windows-container");b&&l&&(b.onclick=g=>{g.stopPropagation();let S=window.innerWidth<880;if(S)l.style.top="",l.style.left="",l.style.right="",l.style.transform="";else{let k=b.getBoundingClientRect(),W=document.querySelector("nav").getBoundingClientRect(),U=220,G=10,$=k.left+k.width/2-U/2,M=W.right-10;$+U>M&&($=M-U),$<10&&($=10),l.style.top=W.bottom+G+"px",l.style.left=$+"px",l.style.right="auto",l.style.transform="none"}l.classList.toggle("active"),b.classList.toggle("active");let B=l.classList.contains("active");if(S){let k=document.querySelector("nav");B?(document.querySelector("footer")?.classList.add("hide"),document.querySelector("main")?.style.setProperty("opacity","0","important"),k?.classList.add("window-open"),w?.classList.add("menu-open"),Te(!0)):(w?.classList.remove("menu-open"),e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),k?.classList.remove("window-open"),Te(!1)))}}),p&&(p.onclick=g=>{g.stopPropagation(),r(v)}),x&&(x.onclick=g=>{g.stopPropagation(),window.location.href="/docs"}),y&&(y.onclick=g=>{g.stopPropagation(),o()});let E=(g,S,B)=>{let k=document.getElementById(g);k&&(k.onclick=D=>{D.stopPropagation(),s(),B&&n(B),r(S)})};E("alerts-menu-item",f,"alerts-window"),E("events-menu-item",d,"events-window"),E("monitor-menu-item",T,"monitor-window"),E("contacts-menu-item",h,"contacts-window"),E("workspace-menu-item",m,"workspace-window"),c&&(c.onclick=g=>{if(g.stopPropagation(),l&&l.classList.contains("active")){s(),window.innerWidth<880&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),Te(!1));return}if(e.length>0)o();else{let S=window.location.pathname;if(!(S==="/"||S==="/index.html")){let k=S.endsWith("/")&&S.length>1?S.slice(0,-1):S;if(k.includes("/docs/page/")){window.location.href="/";return}let D=k.split("/");D.pop();let W=D.join("/")||"/";window.location.href=W}}}),document.addEventListener("click",()=>{let g=window.innerWidth<880;l&&l.classList.contains("active")&&(s(),g&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),Te(!1)))}),l&&(l.onclick=g=>g.stopPropagation())})();let C=window.location.pathname==="/"||window.location.pathname==="/index.html",A=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!C&&!A&&document.querySelector("footer")?.classList.add("hide"),P()||setInterval(()=>{d.isOpen()&&pe(),f.isOpen()?de():Qe()},1e3),setInterval(()=>{P()&&(f.isOpen()?de():Qe()),m.isOpen()?et():It(),P()&&d.isOpen()&&pe(),T.isOpen()&&ts()},5e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ds):ds();})();
