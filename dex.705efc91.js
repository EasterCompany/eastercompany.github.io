(()=>{function Xe(){if(!document.querySelector(".grid-overlay")){let t=document.createElement("div");t.className="grid-overlay",document.body.appendChild(t)}console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Qe(){let t=window.location.pathname,e=t==="/"||t==="/index.html",n=`
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
                <button id="dexter-menu-btn" class="nav-btn" title="Dexter Menu"><i class='bx bx-bot'></i></button>
                <div id="dexter-nav-badge" class="notification-badge" style="position: absolute; top: 0; right: -2px; width: 8px; height: 8px; padding: 0; min-width: 0; display: none; box-shadow: 0 0 5px #ff4444;"></div>
                <div id="dexter-dropdown" class="dexter-dropdown">
                    <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
                    <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
                    <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
                    <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
                    <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
                </div>
            </div>
            <button id="settings-icon" class="nav-btn" title="Settings"><i class='bx bx-cog'></i></button>
            <button id="close-all-windows" class="nav-btn" title="Close Window" style="color: #ff4444; margin-left: 10px; opacity: 0.6; display: none;"><i class='bx bx-x-circle'></i></button>
        </div>
    
    `,l=document.createElement("nav");l.innerHTML=n,document.body.prepend(l)}function fe(t){let e=window.location.pathname,i=e==="/"||e==="/index.html",s=document.getElementById("nav-chevron"),n=document.querySelector(".nav-left");!s||!n||(t||!i?(s.style.display="block",n.style.cursor="pointer",n.classList.add("recording"),n.onmouseenter=()=>{s.style.transform="translateX(-3px)"},n.onmouseleave=()=>{s.style.transform="translateX(0)"}):(s.style.display="none",n.style.cursor="default",n.classList.remove("recording"),n.onmouseenter=null,n.onmouseleave=null))}function et(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var tt=1e3;function ae(t){let e=null,i=t.onClose||null,s=t.onOpen||null;function n(){e&&(e.style.zIndex=++tt)}function l(){if(e){e.classList.add("open"),n(),window.addEventListener("resize",r),s&&setTimeout(s,10);return}let u=document.getElementById("windows-container");u||(u=document.createElement("div"),u.id="windows-container",u.className="windows-container",document.body.appendChild(u)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++tt,e.addEventListener("mousedown",n);let v=t.icon||"bx-window",o="",b="",E;t.tabs&&t.tabs.length>0?(o=`<div class="tab-bar">${t.tabs.map((d,f)=>{let g=d.icon?`<i class="bx ${d.icon}"></i>`:`<span class="tab-glyph">${d.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${f===0?"active":""}" data-tab-index="${f}">
                        ${g}
                        <span class="tab-title">${d.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${f}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,E=`<div class="window-content">${t.tabs.map((d,f)=>`<div class="tab-content ${f===0?"active":""}" data-tab-content="${f}">${d.content}</div>`).join("")}</div>`):(t.title&&(b=`<div class="window-title">${t.title}</div>`),E=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${v}"></i>
                ${o}
                ${b}
                <i class="bx bx-x window-close"></i>
            </div>
            ${E}
        `,u.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",h=>{h.stopPropagation(),c()}),window.addEventListener("resize",r),t.tabs&&e.querySelectorAll(".tab").forEach(h=>{h.addEventListener("click",()=>{let a=h.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(d=>d.classList.remove("active")),h.classList.add("active"),e.querySelectorAll(".tab-content").forEach(d=>d.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${a}"]`).classList.add("active"),m(h,e)})}),setTimeout(()=>{e.classList.add("open"),s&&s()},10)}function r(){if(!e||!e.classList.contains("open"))return;let u=e.querySelector(".tab.active");u&&m(u,e)}function m(u,v){setTimeout(()=>{let o=v.querySelector(".tab-bar");if(!o)return;let b=Array.from(o.querySelectorAll(".tab")),E=b.indexOf(u),h=o.clientWidth,a=b[Math.max(0,E-2)],d=b[Math.min(b.length-1,E+2)],f=a.offsetLeft-o.offsetLeft-25,w=d.offsetLeft+d.offsetWidth-o.offsetLeft+25-f,I=w<=h?f-(h-w)/2:u.offsetLeft-o.offsetLeft-h/2+u.offsetWidth/2;o.scrollTo({left:I,behavior:"smooth"})},350)}function c(u=!1){e&&(window.removeEventListener("resize",r),u?(e.remove(),e=null):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e?.remove(),e=null},400)))}function p(u){let v=e?.querySelector(".window-content");v&&(v.innerHTML=u)}function x(){return e&&e.classList.contains("open")}return{open:l,close:c,setContent:p,isOpen:x,focus:n,id:t.id}}var st="easter_theme",Y={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function He(){return localStorage.getItem(st)||Y.DARK}function it(t){if(!Object.values(Y).includes(t))throw new Error("Invalid theme");localStorage.setItem(st,t),nt(t)}function nt(t){let e=document.documentElement,i=document.body;Object.values(Y).forEach(r=>{i.classList.remove(`theme-${r}`)}),i.classList.add(`theme-${t}`);let s=document.querySelector('meta[name="theme-color"]');s||(s=document.createElement("meta"),s.name="theme-color",document.getElementsByTagName("head")[0].appendChild(s));let n={[Y.DARK]:"#050507",[Y.LIGHT]:"#FFFFFF",[Y.LEGACY]:"#000000"},l=n[t]||n[Y.DARK];if(s.setAttribute("content",l),!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}i.classList.add("is-animated")}function at(){let t=He();nt(t)}function N(t,e,i=null){let n={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",l=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${n} placeholder-icon'></i><p class="placeholder-message">${e}</p>${l}</div>`}function P(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function X(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let s=Date.now(),n=Math.floor((s-e)/1e3),l;n<60?l=`${n}s ago`:n<3600?l=`${Math.floor(n/60)}m ago`:l=`${Math.floor(n/3600)}h ago`,i.textContent=`Last updated: ${l}`}var Wt=0;function we(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let s=i.querySelector(".notification-badge");s&&(e>0?(s.textContent=e>9?"9+":e,s.style.display="flex"):s.style.display="none")}var ee=0,te=0;function rt(t){ee=t,ve()}function lt(t){te=t,ve()}function ve(){let t=ee+te;Wt=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let i=document.getElementById("alerts-menu-item");if(i){let r=i.querySelector(".notification-badge");r||(r=document.createElement("span"),r.className="notification-badge",r.style.marginLeft="auto",i.appendChild(r)),r.textContent=ee>9?"9+":ee,r.style.display=ee>0?"flex":"none"}let s=document.getElementById("workspace-menu-item");if(s){let r=s.querySelector(".notification-badge");r||(r=document.createElement("span"),r.className="notification-badge",r.style.marginLeft="auto",s.appendChild(r)),r.textContent=te>9?"9+":te,r.style.display=te>0?"flex":"none"}let n=document.getElementById("switch-alerts");if(n){let r=n.querySelector(".notification-badge");r||(r=document.createElement("span"),r.className="notification-badge",r.style.marginLeft="8px",n.appendChild(r)),r.textContent=ee>9?"9+":ee,r.style.display=ee>0?"flex":"none"}let l=document.getElementById("switch-workspace");if(l){let r=l.querySelector(".notification-badge");r||(r=document.createElement("span"),r.className="notification-badge",r.style.marginLeft="8px",l.appendChild(r)),r.textContent=te>9?"9+":te,r.style.display=te>0?"flex":"none"}}function Te(){let t=document.getElementById("alerts-list");if(!t)return;ee=t.querySelectorAll(".alert-unread:not(.priority-low)").length,ve()}function ct(){let t=document.getElementById("blueprints-list");if(!t)return;te=t.querySelectorAll(".event-item:not(.blueprint-approved)").length,ve()}function Vt(){return"https://event.easter.company"}function Kt(){return"https://discord.easter.company"}var Zt="http://127.0.0.1:8100",Yt="http://127.0.0.1:8300",Xt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function Le(t){let e=P(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(n,l)=>{let r=Xt[l];return r?`<span class="${r}">`:""});let i=(e.match(/<span/g)||[]).length,s=(e.match(/<\/span/g)||[]).length;return i>s&&(e+="</span>".repeat(i-s)),e}function oe(t){if(!t)return"";let e=P(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(i,s)=>{let n=s.split("|").map(l=>l.trim());return n.every(l=>l.match(/^:?-+:?$/))?"":`<div class="md-table-row">${n.map(l=>`<span class="md-table-cell">${l}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var Qt="https://sterling-javelin-12539.upstash.io",es="AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw";function z(){return window.location.hostname==="easter.company"}var R=null,Pe=!1,dt="dex_dashboard_snapshot";function ts(){let t=localStorage.getItem(dt);if(t)try{R=JSON.parse(t)}catch{R=null}}async function ot(){if(!(!z()||Pe)){Pe=!0;try{let t=await ns("GET","state:dashboard:full");if(t)try{let e=JSON.parse(t);R=e,localStorage.setItem(dt,JSON.stringify(e))}catch(e){console.error("Failed to parse dashboard snapshot:",e)}}finally{Pe=!1}}}function ss(){if(!R||!R.agent_status)return;let t=R.agent_status;typeof t.system_state_time=="number"&&(t.system_state_time+=1)}async function is(){if(!z())return;ts();let t=Math.floor(Date.now()/1e3),e=R?t-R.timestamp:1/0;(!R||e>120)&&await ot(),setInterval(()=>{let i=new Date,s=Math.floor(Date.now()/1e3),n=R?s-R.timestamp:1/0;(i.getSeconds()===59||n>300)&&ot(),ss()},1e3)}z()&&is();async function ns(t,...e){try{let s=await(await fetch(Qt,{method:"POST",headers:{Authorization:`Bearer ${es}`},body:JSON.stringify([t,...e])})).json();if(s.error)throw new Error(s.error);return s.result}catch(i){return console.error("Upstash Error:",i),null}}var ge=null,be=null,Se=!1,ke=!1;async function A(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t.startsWith("/system_monitor")||t.startsWith("/system/status"))return new Response(JSON.stringify(R.monitor),{status:200});if(t.startsWith("/processes"))return new Response(JSON.stringify(R.processes),{status:200});if(t.startsWith("/events")){let n=new URLSearchParams(t.split("?")[1]||""),l=n.get("type")||n.get("event.type"),r=n.get("category"),m=n.get("order")||"desc",c=[];return l==="system.notification.generated"?c=[...R.alerts||[]]:l==="system.blueprint.generated"||t.includes("event.type=system.blueprint.generated")?c=[...R.blueprints||[]]:r==="messaging"?c=[...R.messaging_events||[]]:r==="system"?c=[...R.system_events||[]]:r==="cognitive"?c=[...R.cognitive_events||[]]:r==="moderation"?c=[...R.moderation_events||[]]:c=[...R.events||[]],m==="asc"?c.sort((p,x)=>p.timestamp-x.timestamp):c.sort((p,x)=>x.timestamp-p.timestamp),new Response(JSON.stringify({events:c,count:c.length}),{status:200})}if(t.startsWith("/logs"))return new Response(JSON.stringify([]),{status:200});if(t.startsWith("/system/hardware"))return new Response(JSON.stringify({}),{status:200});if(t.startsWith("/agent/status")||t.startsWith("/guardian/status"))return new Response(JSON.stringify(R.agent_status||{}),{status:200});if(t.startsWith("/profile/")){let n=t.split("/")[2],l=R.profiles?R.profiles[n]:null;return l?new Response(JSON.stringify(l),{status:200}):new Response(JSON.stringify({error:"Profile not found"}),{status:404})}return new Response(JSON.stringify({error:"Not available in public demo"}),{status:404})}if(ge)try{let n=await fetch(ge+t,e);if(n.ok)return n;ge=null}catch{ge=null}let i=Vt(),s=Zt;try{let n=await fetch(i+t,e);if(n.ok)return ge=i,Se&&(console.log("\u2728 Production event service restored."),Se=!1),n;throw new Error("Primary failed")}catch{Se||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${s}`),Se=!0);try{let l=await fetch(s+t,e);if(l.ok)return ge=s,l;throw new Error("Fallback failed")}catch(l){throw l}}}async function Me(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t==="/contacts")return new Response(JSON.stringify(R.contacts||{members:[]}),{status:200});if(t.startsWith("/member/")){let n=t.split("/")[2],l=(R.contacts?.members||[]).find(r=>r.id===n);return l?new Response(JSON.stringify(l),{status:200}):new Response(JSON.stringify({error:"Member not found"}),{status:404})}return new Response(JSON.stringify({error:"Discord API not public"}),{status:404})}if(be)try{let n=await fetch(be+t,e);if(n.ok)return n;be=null}catch{be=null}let i=Kt(),s=Yt;try{let n=await fetch(i+t,e);if(n.ok)return be=i,ke&&(console.log("\u2728 Production discord service restored."),ke=!1),n;throw new Error("Primary failed")}catch{ke||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${s}`),ke=!0);try{let l=await fetch(s+t,e);if(l.ok)return be=s,l;throw new Error("Fallback failed")}catch(l){throw l}}}var pt=()=>`
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
`,Ae=null,re=new Set,Ie=[];async function ie(t=!1){let e=document.getElementById("alerts-list");if(!e)return;as(),t&&(e.innerHTML="<p>Updating...</p>");let i="/events?ml=1000&format=json&event.type=system.notification.generated";try{let s=await A(i);if(!s.ok)throw new Error("Service is offline or unreachable.");let l=(await s.json()).events||[];Ae=Date.now(),X(0,Ae);let r=Date.now(),m=24*60*60*1e3,c=l.filter(f=>{let g=localStorage.getItem(`alert_read_ts_${f.id}`);if(!g)return!0;let w=parseInt(g);return r-w<m});c.sort((f,g)=>{let w=k=>{let y=k.event;if(typeof y=="string")try{y=JSON.parse(y)}catch{return"low"}return(y.priority||"low").toLowerCase()},I=k=>k==="critical"?4:k==="high"?3:k==="medium"?2:1,M=I(w(f)),S=I(w(g));return M!==S?S-M:g.timestamp-f.timestamp}),Ie=c;let p=f=>{let g=f.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return"low"}return(g.priority||"low").toLowerCase()},x=[],v=new Set(c.map(f=>p(f))).size>1;if(c.length>0){let f=null;c.forEach(g=>{let w=p(g);v&&w!==f&&(x.push({id:`divider-${w}`,type:"divider",label:w.toUpperCase()}),f=w),x.push(g)})}if(t&&(e.innerHTML=""),c.length===0){e.innerHTML=N("empty","No alerts yet."),Te();return}let o=f=>{let g=f.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let w=(g.title||"Untitled Alert").trim(),I=(g.body||"No description provided.").trim(),M=g.summary||"",S=g.content||"",k=g.protocol||"",y=(g.priority||"low").toLowerCase(),B=!!g.alert,_=(g.category||"system").trim(),H=g.related_event_ids||[],q=g.audit_event_id,F=!!localStorage.getItem(`alert_read_ts_${f.id}`),T=new Date(f.timestamp*1e3),$=T.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),C=T.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),L=F?"event-border-grey":"event-border-blue";!F&&B&&(L="event-border-red"),F&&(y==="high"||y==="critical")?L="event-border-red":F&&y==="medium"&&(L="event-border-orange");let O=F?"alert-read":"alert-unread",D=re.has(f.id),U=D?"expanded":"",j=D?"display: block;":"display: none;",J="",G="";H.length>0&&(G=`
            <div style="flex: 1; min-width: 150px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    ${H.map(se=>`<a href="#" onclick="window.dexter.viewEvent('${se}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${se.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let W="";q&&(W=`
            <div style="flex: 1; min-width: 120px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Audit</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    <a href="#" onclick="window.dexter.viewEvent('${q}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3); white-space: nowrap;">${q.substring(0,8)}...</a>
                </div>
            </div>`);let ue="";k&&(ue=`
            <div style="flex: 1; min-width: 100px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${k}</div>
            </div>`);let Q="";S?Q=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="md-para" style="color: #ddd; font-size: 0.85em; white-space: pre-wrap; line-height: 1.6; text-align: left;">${oe(S)}</div>
            </div>
        `:Q=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="md-para" style="color: #fff; white-space: pre-wrap; line-height: 1.6; text-align: left;">${oe(I)}</div>
            </div>
        `,J=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${g.related_services&&g.related_services.length>0?g.related_services.join(", "):g.related||"SYSTEM"}</div>
                    </div>
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${_}</div>
                    </div>
                    ${ue}
                    ${W}
                    ${G}
                </div>

                ${Q}
            `;let Z=document.createElement("div");Z.className=`event-item notification-item ${L} ${O} ${U} cursor-pointer priority-${y}`,Z.dataset.alertId=f.id,Z.onclick=function(se){if(this.classList.contains("expanded")){this.classList.remove("expanded"),re.delete(f.id);let he=this.querySelector(".event-details");he&&(he.style.display="none")}else{this.classList.add("expanded"),re.add(f.id);let he=this.querySelector(".event-details");if(he&&(he.style.display="block"),!localStorage.getItem(`alert_read_ts_${f.id}`)){localStorage.setItem(`alert_read_ts_${f.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Ne="event-border-grey";y==="high"||y==="critical"?Ne="event-border-red":y==="medium"&&(Ne="event-border-orange"),this.classList.add(Ne),Te()}}};let Ke=`${k?k.toUpperCase():"GUARDIAN"} ALERT: ${M||w}`,Jt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[_]||"bx-bell",Gt=y==="high"||y==="critical"?"#ff4d4d":y==="medium"?"#ffa500":"#888";Z.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${$}</span>
                    <span class="event-date">${C}</span>
                </div>
                <div class="event-icon"><i class='bx ${Jt}'></i></div>
                <div class="event-content" style="text-align: left;">
                    <div class="event-service">
                        DEXTER <span class="alert-badge" style="color: ${Gt}; font-size: 0.8em; margin-left: 5px;">[${y.toUpperCase()}]</span>
                    </div>
                    <div class="event-message">${oe(Ke)}</div>
                    <div class="event-details" style="${j}">
                        ${J}
                    </div>
                </div>
            `;let Ze=Z.querySelector(".event-details");Ze&&Ze.addEventListener("click",se=>{se.stopPropagation()});let Ye=Z.querySelector(".close-details-btn");return Ye&&Ye.addEventListener("click",se=>{se.stopPropagation(),Z.classList.remove("expanded");let ze=Z.querySelector(".event-details");ze&&(ze.style.display="none"),re.delete(f.id)}),Z},b=f=>{let g=document.createElement("div");g.className="notification-divider",g.dataset.alertId=f.id;let w="#888888";return f.label==="CRITICAL"?w="#ff4d4d":f.label==="HIGH"?w="#ff8888":f.label==="MEDIUM"&&(w="#ffa500"),g.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${w}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,g.innerHTML=`<span style="white-space: nowrap;">${f.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${w}44, transparent); flex-grow: 1;"></div>`,g},E=Array.from(e.children),h=new Map(E.map(f=>[f.dataset.alertId,f])),a=new Set(x.map(f=>f.id));E.forEach(f=>{let g=f.dataset.alertId;(!g||!a.has(g))&&f.remove()});let d=null;x.forEach((f,g)=>{let w=h.get(f.id);(!w||t)&&(w&&w.remove(),f.type==="divider"?w=b(f):w=o(f),!w)||(g===0?e.firstElementChild!==w&&e.prepend(w):d&&d.nextElementSibling!==w&&d.after(w),d=w)}),Ae=Date.now(),X(0,Ae),Te()}catch(s){console.error("Error fetching alerts:",s),e.children.length===0&&(e.innerHTML=N("offline","Failed to load alerts.","The event service may be offline."))}}function as(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),i=document.getElementById("alerts-close-all"),s=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ie.forEach(n=>{localStorage.getItem(`alert_read_ts_${n.id}`)||localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString())}),ie(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Ie.forEach(n=>{re.add(n.id),localStorage.getItem(`alert_read_ts_${n.id}`)||localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString())}),ie(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{re.clear(),ie(!0)},i.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){s.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await A("/events?type=system.notification.generated",{method:"DELETE"});let n=Date.now()-48*60*60*1e3;Ie.forEach(l=>{localStorage.setItem(`alert_read_ts_${l.id}`,n.toString())}),re.clear(),ie(!0)}catch(n){console.error("Failed to clear alerts:",n)}finally{s.innerHTML="<i class='bx bx-trash'></i> Clear"}}},s.dataset.listenerAttached="true")}async function Re(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await A(t);if(!e.ok)return;let s=(await e.json()).events||[],n=0;s.forEach(l=>{let r=l.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{r={}}if((r.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${l.id}`)||n++}),rt(n)}catch{}}var mt=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${z()?"display: none;":""}" title="New Idea"><i class='bx bx-plus'></i></button>
    <button id="roadmap-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
    <button id="roadmap-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
  </div>
`,ut=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,le=new Set,Be=[],xe=null;async function ce(t=!1){let e=document.getElementById("roadmap-list");if(e){os();try{let i=await A("/roadmap");if(!i.ok)throw new Error("Offline");let s=await i.json();Be=s;let n=p=>{let x=le.has(p.id),u=p.state==="published",v=p.state==="consumed",o="event-border-grey";u&&(o="event-border-blue"),v&&(o="event-border-purple");let E=new Date(p.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${o} cursor-pointer ${x?"expanded":""}`,h.dataset.itemId=p.id,h.onclick=f=>{if(f.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",le.delete(p.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",le.add(p.id))};let a=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${p.state.toUpperCase()}]</span>`;h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${E.split(",")[1]}</span>
          <span class="event-date">${E.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${a}</div>
          <div class="event-message" style="white-space: pre-wrap;">${P(p.content)}</div>
          <div class="event-details" style="${x?"display: block;":"display: none;"} ">
            ${z()?"":`
            <div class="event-details-header" style="margin-bottom: 15px;">
              <h5 style="margin: 0; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Item Controls</h5>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${v?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${u?"bx-pause":"bx-rocket"}'></i> ${u?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            `}
            ${v?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(p.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let d=h.querySelector(".event-details");return d&&d.addEventListener("click",f=>{f.stopPropagation()}),h.querySelector(".edit-btn")?.addEventListener("click",()=>rs(p)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>ls(p)),h.querySelector(".delete-btn")?.addEventListener("click",()=>cs(p.id)),h.querySelector(".close-details-btn")?.addEventListener("click",f=>{f.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",le.delete(p.id)}),h},l=Array.from(e.children),r=new Map(l.map(p=>[p.dataset.itemId,p])),m=new Set(s.map(p=>p.id));if(l.forEach(p=>{let x=p.dataset.itemId;(!x||!m.has(x))&&p.remove()}),!Be||Be.length===0){e.innerHTML=N("empty","Your roadmap is empty.",z()?"Dexter is currently idle.":`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let c=null;s.forEach((p,x)=>{let u=r.get(p.id);(!u||t)&&(u&&u.remove(),u=n(p),!u)||(x===0?e.firstElementChild!==u&&e.prepend(u):c&&c.nextElementSibling!==u&&c.after(u),c=u)})}catch{e.children.length===0&&(e.innerHTML=N("offline","Failed to load roadmap.","The event service may be offline."))}}}function os(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),s=document.getElementById("roadmap-expand-all"),n=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{xe=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",xe=null},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let l=document.getElementById("roadmap-editor-input").value;if(!l.trim())return;let r=xe?`/roadmap/${xe}`:"/roadmap",m=xe?"PATCH":"POST";try{await A(r,{method:m,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:l})}),document.getElementById("roadmap-editor-container").style.display="none",ce(!0)}catch(c){console.error(c)}},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{Be.forEach(l=>le.add(l.id)),ce(!0)},s.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{le.clear(),ce(!0)},n.dataset.listenerAttached="true")}function rs(t){xe=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function ls(t){let e=t.state==="published"?"draft":"published";try{await A(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),ce(!0)}catch(i){console.error(i)}}async function cs(t){if(confirm("Delete this roadmap item?"))try{await A(`/roadmap/${t}`,{method:"DELETE"}),le.delete(t),ce(!0)}catch(e){console.error(e)}}var gt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
        <button id="blueprints-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
        <button id="blueprints-clear" class="notif-action-btn danger" style="${z()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
    </div>
`,bt=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,ft=null,de=new Set,vt=[];async function pe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;ds();let i="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let s=await A(i);if(!s.ok)throw new Error("Service is offline or unreachable.");let l=(await s.json()).events||[];if(vt=l,ft=Date.now(),X(2,ft),l.length===0){e.innerHTML=N("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),we(2,0);return}t&&(e.innerHTML="");let r=u=>{let v=u.event;if(typeof v=="string")try{v=JSON.parse(v)}catch{return null}let o=(v.title||"Untitled Blueprint").trim(),b=(v.summary||v.body||"No summary provided.").trim(),E=(v.content||"").trim(),h=(v.category||"architecture").trim(),a=(v.related_services||v.affected_services||[]).map(D=>D.trim()),d=(v.implementation_path||[]).map(D=>D.trim()),f=v.source_event_ids||[],g=v.approved===!0,w=new Date(u.timestamp*1e3),I=w.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),M=w.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=de.has(u.id),k=S?"display: block;":"display: none;",y=document.createElement("div");y.className=`event-item notification-item event-border-purple cursor-pointer ${S?"expanded":""} ${g?"blueprint-approved":""}`,y.dataset.blueprintId=u.id,g&&(y.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",y.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let _=g?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[h]||"bx-paint";y.onclick=function(D){if(this.classList.contains("expanded")){this.classList.remove("expanded"),de.delete(u.id);let j=this.querySelector(".event-details");j&&(j.style.display="none")}else{this.classList.add("expanded"),de.add(u.id);let j=this.querySelector(".event-details");j&&(j.style.display="block")}};let H="";d.length>0&&(H=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${d.map(D=>`<li style="margin-bottom: 5px;">${P(D)}</li>`).join("")}</ul></div>
                    </div>
                `);let q="";f.length>0&&(q=`
                    <div class="blueprint-source" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Source Alerts</h5>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${f.map(D=>`
                                <a href="#" onclick="window.dexter.viewEvent('${D}'); return false;" style="color: #03dac6; text-decoration: none; font-size: 0.75em; font-family: 'JetBrains Mono', monospace; padding: 4px 8px; background: rgba(3, 218, 198, 0.05); border: 1px solid rgba(3, 218, 198, 0.1); border-radius: 4px;">
                                    <i class='bx bx-link-external'></i> ${D.substring(0,8)}...
                                </a>
                            `).join("")}
                        </div>
                    </div>
                `);let K=a.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${a.join(", ")}</span></div>`:"<div></div>",F=z(),T=g?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${K}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s; display: ${F?"none":"block"};"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${K}
                    <div style="display: ${F?"none":"flex"}; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;y.innerHTML=`
                ${g?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${I}</span>
                    <span class="event-date">${M}</span>
                </div>
                <div class="event-icon" style="${g?"color: #03dac6;":""}"><i class='bx ${_}'></i></div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${o}</div>
                    <div class="event-details" style="${k}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px;">${P(b)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${P(E)}</div>
                        </div>
                        ${H}
                        ${q}
                        ${T}
                    </div>
                </div>
            `;let $=y.querySelector(".blueprint-approve-btn");$&&($.onclick=async D=>{D.stopPropagation(),$.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await A(`/events/${u.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&pe(!0)}catch(U){console.error("Failed to approve blueprint:",U)}});let C=y.querySelector(".blueprint-delete-btn");C&&(C.onclick=async D=>{D.stopPropagation();let U=!g;C.innerHTML=U?"<i class='bx bx-loader-alt spin'></i> Declining...":"<i class='bx bx-loader-alt spin'></i> Deleting...";try{(await A(`/events/${u.id}`,{method:"DELETE"})).ok&&pe(!0)}catch(j){console.error("Failed to delete blueprint:",j)}});let L=y.querySelector(".event-details");L&&L.addEventListener("click",D=>{D.stopPropagation()});let O=y.querySelector(".close-details-btn");return O&&O.addEventListener("click",D=>{D.stopPropagation(),y.classList.remove("expanded");let U=y.querySelector(".event-details");U&&(U.style.display="none"),de.delete(u.id)}),y},m=Array.from(e.children),c=new Map(m.map(u=>[u.dataset.blueprintId,u])),p=new Set(l.map(u=>u.id));m.forEach(u=>{let v=u.dataset.blueprintId;(!v||!p.has(v))&&u.remove()});let x=null;l.forEach((u,v)=>{let o=c.get(u.id);(!o||t)&&(o&&o.remove(),o=r(u),!o)||(v===0?e.firstElementChild!==o&&e.prepend(o):x&&x.nextElementSibling!==o&&x.after(o),x=o)}),we(2,l.length),ct()}catch(s){console.error("Error fetching blueprints:",s),e.children.length===0&&(e.innerHTML=N("offline","Failed to load blueprints.","The event service may be offline."))}}async function xt(){let t="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let e=await A(t);if(!e.ok)return;let s=(await e.json()).events||[],n=0;s.forEach(l=>{let r=l.event;if(typeof r=="string")try{r=JSON.parse(r)}catch{r={}}r.approved!==!0&&n++}),lt(n)}catch{}}function ds(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),i=document.getElementById("blueprints-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{vt.forEach(s=>de.add(s.id)),pe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{de.clear(),pe(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{if(confirm("Are you sure you want to delete all UNAPPROVED blueprints?")){i.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await A("/events?type=system.blueprint.generated",{method:"DELETE"}),de.clear(),pe(!0)}catch(s){console.error("Failed to clear blueprints:",s)}finally{i.innerHTML="<i class='bx bx-trash'></i> Clear"}}},i.dataset.listenerAttached="true")}var yt=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${mt()}
            </div>
            ${ut()}
        </div>

        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${gt()}
            </div>
            ${bt()}
        </div>
    </div>
`;async function Oe(){await Promise.all([ce(),pe()])}var ht=()=>`
        <div class="system-section-header">
            <i class='bx bx-task' style="color: #03dac6;"></i>
            <h2>Active Chores</h2>
            <button id="create-chore-btn" class="notif-action-btn" style="margin-left: auto;" title="New Chore"><i class='bx bx-plus'></i></button>
        </div>
        
        <!-- Create Chore Form -->
        <div id="create-chore-form" style="display: none; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <h3 style="margin-top: 0; color: #fff; font-size: 1em; margin-bottom: 10px;">New Courier Task</h3>
            <div style="display: flex; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
                <input type="text" id="new-chore-instruction" placeholder="E.g., 'Find Fiat Punto in Belgrade'" style="flex: 2; min-width: 200px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 4px;">
                <input type="text" id="new-chore-url" placeholder="Entry URL (Optional)" style="flex: 1; min-width: 150px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 4px;">
                <input type="text" id="new-chore-owner" placeholder="Discord User ID" value="313071000877137920" style="flex: 1; min-width: 150px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 4px;">
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 10px;">
                <button id="cancel-chore-btn" style="background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #ccc; padding: 6px 12px; border-radius: 4px; cursor: pointer;">Cancel</button>
                <button id="save-chore-btn" style="background: #03dac6; border: none; color: #000; padding: 6px 15px; border-radius: 4px; font-weight: bold; cursor: pointer;">Create Task</button>
            </div>
        </div>

        <div id="chores-list" class="system-monitor-widgets" style="margin-bottom: 30px; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px;"></div>
    `;async function ye(){let t=document.getElementById("chores-list"),e=document.getElementById("create-chore-btn"),i=document.getElementById("create-chore-form"),s=document.getElementById("save-chore-btn"),n=document.getElementById("cancel-chore-btn");if(e&&!e.dataset.listenerAttached&&(e.onclick=()=>{i.style.display=i.style.display==="none"?"block":"none"},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{i.style.display="none"},n.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=async()=>{let l=document.getElementById("new-chore-instruction").value,r=document.getElementById("new-chore-url").value,m=document.getElementById("new-chore-owner").value||"313071000877137920";if(l){s.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A("/chores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner_id:m,natural_instruction:l,entry_url:r,schedule:"every_6h"})}),i.style.display="none",document.getElementById("new-chore-instruction").value="",document.getElementById("new-chore-url").value="",ye()}catch(c){console.error(c),alert("Failed to create chore")}finally{s.innerHTML="Create Task"}}},s.dataset.listenerAttached="true"),!!t)try{let r=await(await A("/chores")).json();if(!r||r.length===0){t.innerHTML=N("empty","No active chores.","Create one to start monitoring.");return}let m=r.map(c=>{let p=c.last_run===0?"Never":new Date(c.last_run*1e3).toLocaleString(),x=c.memory?c.memory.length:0,u=c.status==="active"?"#03dac6":"#666";return`
                <div class="service-widget" style="border-left: 3px solid ${u}; width: 100%;">
                    <div class="service-widget-header">
                        <i class='bx bx-search-alt' style="color: ${u}"></i>
                        <h3 style="font-size: 0.95em; white-space: normal; line-height: 1.4;">${c.natural_instruction}</h3>
                        <div style="margin-left: auto; display: flex; gap: 10px;">
                            <button class="icon-btn delete-chore-btn" data-id="${c.id}" style="background: none; border: none; color: #cf6679; cursor: pointer; padding: 5px;"><i class='bx bx-trash'></i></button>
                        </div>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Schedule:</span>
                            <span class="info-value">${c.schedule}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Last Run:</span>
                            <span class="info-value">${p}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Items Found:</span>
                            <span class="info-value">${x}</span>
                        </div>
                        <div class="service-widget-info" style="grid-column: span 2; margin-top: 5px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 5px;">
                            <span class="info-label">Target:</span>
                            <span class="info-value" style="font-size: 0.8em; opacity: 0.8; word-break: break-all;">${c.execution_plan.entry_url||"Auto-detected"}</span>
                        </div>
                    </div>
                </div>
            `}).join("");t.innerHTML=m,t.querySelectorAll(".delete-chore-btn").forEach(c=>{c.onclick=async p=>{p.stopPropagation(),confirm("Delete this chore?")&&(await A(`/chores/${c.dataset.id}`,{method:"DELETE"}),ye())}})}catch(l){console.error("Failed to fetch chores",l)}}var ps=`
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
`;function wt(t,e){return{...t==="313071000877137920"?{techLevel:11,commStyle:"Direct / Efficient",patience:"Infinite",vibe:"Architect",facts:[{k:"Role",v:"Creator"},{k:"Lang",v:"Go"},{k:"OS",v:"Linux"},{k:"Editor",v:"Neovim"}],badges:["Creator","Admin","Architect"],stats:{msgs:14052,tokens:"45.2M",lastSeen:"Now"},topics:[{name:"System Architecture",val:85},{name:"Code Review",val:60},{name:"Music / Vibes",val:30},{name:"Debugging",val:45}],traits:{openness:95,conscientiousness:90,extraversion:40,agreeableness:60,neuroticism:15},dossier:{identity:{fullName:"Owen Easter",ageRange:"25-30",gender:"Male",location:"United Kingdom",sexuality:"Heterosexual",relationship:"Single"},career:{jobTitle:"Founder / Systems Architect",company:"Easter Company",skills:["Go","Distributed Systems","AI Integration"]},personal:{hobbies:["Synthwave Production","Coding","Gaming"],habits:["Late Night Coding","Coffee Consumption","System Optimization"],vices:["Perfectionism"],virtues:["Efficiency","Vision"]},social:[{name:"Dexter",relation:"Creation / AI",trust:"100%"},{name:"Sarah",relation:"Close Friend",trust:"95%"},{name:"Mike",relation:"Developer Peer",trust:"88%"}]}}:{techLevel:[2,4,6,8,3,5][Math.floor(Math.random()*6)],commStyle:["Verbose","Casual","Formal","Chaotic","Inquisitive"][Math.floor(Math.random()*5)],patience:Math.random()>.5?"High":"Medium",vibe:["NPC","Guest","Lurker","Regular","Fan"][Math.floor(Math.random()*5)],facts:[{k:"Role",v:"User"},{k:"Interest",v:Math.random()>.5?"Coding":"Gaming"}],badges:["User"],stats:{msgs:Math.floor(Math.random()*500),tokens:Math.floor(Math.random()*100)+"K",lastSeen:Math.floor(Math.random()*24)+"h ago"},topics:[{name:"General Chat",val:80},{name:"Troubleshooting",val:40},{name:"Off-Topic",val:20}],traits:{openness:Math.floor(Math.random()*100),conscientiousness:Math.floor(Math.random()*100),extraversion:Math.floor(Math.random()*100),agreeableness:Math.floor(Math.random()*100),neuroticism:Math.floor(Math.random()*100)},dossier:{identity:{fullName:"Unknown Subject",ageRange:"Unknown",gender:"Unknown",location:"Global",sexuality:"Unknown",relationship:"Unknown"},career:{jobTitle:"Unknown",company:"Unknown",skills:["General User"]},personal:{hobbies:["Lurking","Chatting"],habits:["Unknown"],vices:["None Observed"],virtues:["None Observed"]},social:[]}},id:t,username:e}}function Ct(t){if(!document.getElementById("dex-profile-styles")){let i=document.createElement("style");i.id="dex-profile-styles",i.textContent=ps,document.head.appendChild(i)}let e=document.createElement("div");e.className="profile-overlay",e.innerHTML=`
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `,e.addEventListener("click",i=>{i.target===e&&(e.classList.remove("active"),setTimeout(()=>e.remove(),300))}),document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),Me(`/profile/${t.id}`).then(async i=>{if(i.ok){let s=await i.json();Ue(e,t,s)}else{console.log("Profile not found or error, using mock data.");let s=wt(t.id,t.username);Ue(e,t,s)}}).catch(i=>{console.error("Profile fetch error:",i);let s=wt(t.id,t.username);Ue(e,t,s)})}function Ue(t,e,i){let s=e.status==="online"?"#03dac6":e.status==="idle"?"#ffb74d":"#cf6679",n=()=>{let E=(i.badges||[]).map(I=>`<span class="profile-badge ${I==="Creator"?"master":""}">${I}</span>`).join(""),h=(i.attributes||i.facts||[]).map(I=>{let M=I.key||I.k,S=I.value||I.v;return`
            <div class="fact-chip">
                <span class="fact-key">${M}:</span>
                <span class="fact-val">${S}</span>
            </div>
        `}).join(""),a=i.cognitive_model||i,d=a.technical_level||a.techLevel||0,f=a.communication_style||a.commStyle||"Unknown",g=a.patience_level||a.patience||"Unknown",w=a.vibe||"Unknown";return`
            <div class="overview-grid">
                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-brain'></i> Cognitive Model</div>
                    
                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Technical Level</span>
                            <span>${d}/10</span>
                        </div>
                        <div class="cog-bar-bg">
                            <div class="cog-bar-fill" style="width: ${Math.min(d*10,100)}%;"></div>
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
                            <span>${g}</span>
                        </div>
                    </div>

                     <div class="cog-metric">
                        <div class="cog-label">
                            <span>Vibe Check</span>
                            <span style="font-family: 'JetBrains Mono'; color: #bb86fc;">${w}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-purchase-tag-alt'></i> Fact Bank</div>
                    <div class="fact-grid">
                        ${h}
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px; font-size: 0.9em; color: #888; font-style: italic;">
                        <i class='bx bx-info-circle'></i> Dexter automatically extracts these facts from conversation context to personalize future interactions.
                    </div>
                </div>
            </div>
        `},l=()=>{let E=i.dossier||{},h=E.identity||{},a=E.career||{},d=E.personal||{},f=E.social||[];return`
            <div class="dossier-grid">
                <!-- Identity Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-id-card'></i> Identity</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Full Name</div>
                        <div class="dossier-value">${h.fullName||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Age Range</div>
                        <div class="dossier-value">${h.ageRange||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Location</div>
                        <div class="dossier-value">${h.location||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Gender</div>
                        <div class="dossier-value">${h.gender||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Sexuality</div>
                        <div class="dossier-value" style="color: #ffb74d;">${h.sexuality||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Relationship Status</div>
                        <div class="dossier-value">${h.relationship||"Unknown"}</div>
                    </div>
                    
                    <div class="profile-section-title" style="margin-top: 30px;"><i class='bx bx-briefcase'></i> Career</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Current Role</div>
                        <div class="dossier-value">${a.jobTitle||"Unknown"}</div>
                        <div style="font-size: 0.8em; color: #888; margin-top: 2px;">@ ${a.company||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                         <div class="dossier-label">Key Skills</div>
                         <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            ${(a.skills||[]).map(g=>`<span style="font-size: 0.75em; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${g}</span>`).join("")}
                         </div>
                    </div>
                </div>

                <!-- Personal Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-home-heart'></i> Personal Life</div>
                    
                    <div class="dossier-item">
                        <div class="dossier-label"><i class='bx bx-joystick'></i> Hobbies</div>
                        <div style="margin-top: 10px;">
                            ${(d.hobbies||[]).map(g=>`<div class="dossier-list-item">${g}</div>`).join("")}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(d.habits||[]).map(g=>`<div class="dossier-list-item">${g}</div>`).join("")}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(d.vices||[]).map(g=>`<div class="dossier-list-item" style="color: #cf6679;">${g}</div>`).join("")}
                        </div>
                    </div>
                </div>

                <!-- Social Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-network-chart'></i> Known Associates</div>
                    <div class="dossier-item" style="background: none; border: none; padding: 0;">
                        ${f.length>0?f.map(g=>`
                            <div class="friend-chip">
                                <div style="width: 35px; height: 35px; background: #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #888;">${g.name.substring(0,1)}</div>
                                <div style="flex: 1;">
                                    <div style="color: #fff; font-weight: 500;">${g.name}</div>
                                    <div style="font-size: 0.75em; color: #888;">${g.relation}</div>
                                </div>
                                <div style="font-size: 0.8em; color: #03dac6;">${g.trust}</div>
                            </div>
                        `).join(""):'<div style="color: #666; font-style: italic;">No associates mapped.</div>'}
                    </div>
                </div>
            </div>
        `},r=()=>{let E=i.traits||{};return`
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(E).map(([h,a])=>`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${a}%; background: ${a>50?"#03dac6":"#cf6679"}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${h.substring(0,4)}</div>
                    <div style="font-family: monospace;">${a}%</div>
                </div>
            `).join("")}
        </div>
        <div style="margin-top: 40px;">
            <div class="profile-section-title"><i class='bx bx-message-square-detail'></i> Sentiment History</div>
            <div style="height: 100px; border-bottom: 1px solid #333; display: flex; align-items: flex-end; gap: 5px; padding-bottom: 5px;">
                ${Array.from({length:40}).map(()=>{let h=Math.floor(Math.random()*80)+10;return`<div style="flex: 1; background: ${Math.random()>.7?"#cf6679":Math.random()>.5?"#03dac6":"#444"}; height: ${h}%; border-radius: 2px;"></div>`}).join("")}
            </div>
            <div style="font-family: monospace; color: #666; font-size: 0.7em; margin-top: 5px; display: flex; justify-content: space-between;">
                <span>30 Days Ago</span>
                <span>Today</span>
            </div>
        </div>
    `},m=()=>`
        <div class="profile-section-title"><i class='bx bx-map-alt'></i> Conversation Topics</div>
        <div style="margin-top: 20px;">
            ${(i.topics||[]).map(E=>`
                <div class="topic-bar">
                    <div class="topic-header">
                        <span style="color: #eee;">${E.name}</span>
                        <span style="color: #bb86fc;">${E.val}%</span>
                    </div>
                    <div class="topic-track">
                        <div class="topic-fill" style="width: ${E.val}%"></div>
                    </div>
                </div>
            `).join("")}
        </div>
    `,c=()=>`
        <div class="profile-section-title"><i class='bx bx-code-alt'></i> Raw Profile JSON</div>
        <div class="raw-json">${JSON.stringify(i,null,2)}</div>
    `,p=`
        <div class="profile-card">
            <button class="close-profile-btn" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
            
            <div class="profile-header">
                <div class="profile-avatar-container">
                    <img src="${e.avatar_url||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="profile-avatar">
                    <div class="profile-status-dot" style="background: ${s}"></div>
                </div>
                <div class="profile-identity">
                    <h2>${P(e.username)}</h2>
                    <div class="profile-badges">${(i.badges||[]).map(E=>`<span class="profile-badge ${E==="Creator"?"master":""}">${E}</span>`).join("")}</div>
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
                <div id="tab-overview" class="tab-content active">${n()}</div>
                <div id="tab-dossier" class="tab-content">${l()}</div>
                <div id="tab-psychometrics" class="tab-content">${r()}</div>
                <div id="tab-topics" class="tab-content">${m()}</div>
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
    `;t.innerHTML=p;let x=t.querySelector(".profile-card"),u=t.querySelector("#profile-expand-toggle"),v=t.querySelectorAll(".profile-tab-btn"),o=t.querySelectorAll(".tab-content");t.querySelector(".close-profile-btn").addEventListener("click",()=>{t.classList.remove("active"),setTimeout(()=>t.remove(),300)}),v.forEach(E=>{E.addEventListener("click",()=>{v.forEach(h=>h.classList.remove("active")),o.forEach(h=>h.classList.remove("active")),E.classList.add("active"),t.querySelector(`#tab-${E.dataset.tab}`).classList.add("active")})}),u.addEventListener("click",()=>{x.classList.toggle("expanded");let E=x.classList.contains("expanded");u.innerHTML=E?"<i class='bx bx-collapse-alt'></i> Collapse View":"<i class='bx bx-expand-alt'></i> Detailed Analysis"})}var $t=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto; ${z()?"display: none;":""}" title="Refresh Contacts"><i class='bx bx-refresh'></i></button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,ms=null;async function je(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await je(),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),t.dataset.listenerAttached||(t.onclick=i=>{let s=i.target.closest(".user-profile-card");if(s)try{let n=JSON.parse(s.dataset.user);Ct(n)}catch(n){console.error("Failed to parse user data",n)}},t.dataset.listenerAttached="true");try{let i=await Me("/contacts");if(!i.ok)throw new Error("Service unreachable");let n=(await i.json()).members||[];if(ms=Date.now(),n.length===0){t.innerHTML=N("empty","No contacts found.","Check your Discord connection.");return}let l={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};n.sort((r,m)=>{let c=l[r.level]??10,p=l[m.level]??10;return c!==p?c-p:r.username.localeCompare(m.username)}),t.innerHTML=n.map(r=>{let m=r.color?"#"+r.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",c=r.status==="online"?"#5eff5e":r.status==="idle"?"#ffa500":r.status==="dnd"?"#ff4d4d":"#666",p="#888";r.level==="Me"||r.level==="Master"?p="#bb86fc":r.level==="Admin"?p="#cf6679":r.level==="Moderator"?p="#03dac6":r.level==="Contributor"&&(p="#ffa500");let x=r.level==="Me",u=x?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",v=x?"2px solid #bb86fc":`1px solid ${m}33`;return`
                <div class="user-profile-card" 
                     data-user="${JSON.stringify(r).replace(/"/g,"&quot;")}"
                     style="background: ${u}; padding: 15px; border-radius: 8px; border: ${v}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; cursor: pointer; transition: transform 0.2s, background 0.2s;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${x?"#bb86fc":m}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${r.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${x?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${c}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${r.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${p}; font-weight: 600; text-transform: uppercase;">${x?"DEXTER (ME)":r.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${r.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=N("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var us={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","analysis.user.message_signals":"Analyzed Signals for User {user_id}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Guardian Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Et(t,e){let i=us[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(i=`Guardian Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let s=i.replace(/\{(\w+)\}/g,(n,l)=>e[l]!==void 0&&e[l]!==null?e[l]:n);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(s+=` (Translation: ${e.english_translation})`),s}var qe=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn ${V==="all"?"active":""}" data-filter="all" title="All Events"><i class='bx bx-list-ul'></i></button>
            <button class="notif-action-btn filter-btn ${V==="messaging"?"active":""}" data-filter="messaging" title="Messaging"><i class='bx bx-message-square-detail'></i></button>
            <button class="notif-action-btn filter-btn ${V==="system"?"active":""}" data-filter="system" title="System"><i class='bx bx-cog'></i></button>
            <button class="notif-action-btn filter-btn ${V==="cognitive"?"active":""}" data-filter="cognitive" title="Cognitive"><i class='bx bx-brain'></i></button>
            <button class="notif-action-btn filter-btn ${V==="moderation"?"active":""}" data-filter="moderation" title="Moderation"><i class='bx bx-shield-quarter'></i></button>
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
`,_e=null,me=new Set,Ce=[],V="all",fs={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision","analysis.user.message_signals"],moderation:["moderation.explicit_content.deleted"]},gs={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","analysis.user.message_signals":"bx-pulse","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function bs(t){for(let[e,i]of Object.entries(fs))if(i.includes(t))return e;return"system"}function vs(t){return gs[t]||"bx-square-rounded"}async function ne(t=!1){let e=document.getElementById("events-timeline");if(!e)return;xs();let s=`/events?ml=${V==="all"?100:250}&format=json`;V!=="all"&&(s+=`&category=${V}`);try{let n=await A(s);if(!n.ok)throw new Error("Service unreachable");if(Ce=((await n.json()).events||[]).filter(v=>{let o=v.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return!0}let b=o.type;return!(b==="system.blueprint.generated"||b==="system.notification.generated")}),_e=Date.now(),X(1,_e),Ce.length===0){e.innerHTML=N("empty","No events found for this filter.");return}t&&(e.innerHTML="");let m=v=>{let o=v.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{return null}let b=o.type,E=bs(b),h=vs(b),a=b==="engagement.decision"||b==="messaging.bot.sent_message"||b==="messaging.user.sent_message"||b==="moderation.explicit_content.deleted"||b==="analysis.link.completed"||b==="analysis.visual.completed"||b==="analysis.router.decision"||b==="analysis.user.message_signals"||b==="system.cli.command"||b==="system.analysis.audit"||b==="system.test.completed"||b==="error_occurred"||b==="system.cli.status"||b==="system.attention.expired"||b.startsWith("system.roadmap")||b.startsWith("system.process"),d="event-border-grey";a&&(b==="moderation.explicit_content.deleted"||b==="error_occurred"?d="event-border-red":b==="analysis.link.completed"||b==="analysis.visual.completed"||b==="analysis.router.decision"||b==="system.analysis.audit"||b==="analysis.user.message_signals"?d="event-border-purple":b==="system.attention.expired"||b==="system.cli.command"||b==="system.cli.status"?d="event-border-orange":b==="system.test.completed"?d=o.test?.status==="OK"&&o.lint?.status==="OK"&&o.format?.status==="OK"?"event-border-blue":"event-border-red":d="event-border-blue");let f=a?"cursor-pointer":"",g=me.has(v.id),w=g?"expanded":"",I=g?"display: block;":"display: none;",M=new Date(v.timestamp*1e3),S=M.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),k=M.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),y=Et(b,o),B=o.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${o.user_level})</span>`:"",_="";if(a){let T="";if(b==="engagement.decision"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;T=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${o.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Input Decision")}
                            <pre class="detail-pre">${o.input_decision||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context History")}
                            <pre class="detail-pre">${o.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Raw Engagement Output")}
                            <pre class="detail-pre">${o.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(b==="system.attention.expired"){let $=O=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${O}</h5>`,C=o.timestamp-o.last_active,L=Math.floor(C/60);T=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${o.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${L} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context (Last Input)")}
                            <div class="detail-pre">${oe(o.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${$("Thought Process (Last Output)")}
                            <div class="detail-pre">${oe(o.last_output||"None")}</div>
                        </div>
                    `}else if(b==="messaging.bot.sent_message"){let $=O=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${O}</h5>`,C="";o.eval_count&&(C=`
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
                        `);let L="";if(o.chat_history&&o.chat_history.length>0){let O=o.chat_history.length,D=o.chat_history.map((U,j)=>{let J=U.name?U.name.toUpperCase():U.role.toUpperCase();!U.name&&J==="ASSISTANT"&&(J="DEXTER");let G=U.role==="user"?"#03dac6":U.role==="system"?"#ffb74d":"#bb86fc",W=j===O-1?"block":"none";return`
                                <div class="history-slide" data-index="${j}" style="display: ${W};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${G}; letter-spacing: 1px; font-weight: bold;">${J}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${j+1} of ${O}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${P(U.content)}</div>
                                </div>
                            `}).join("");L=`
                            <div class="event-detail-block">
                                ${$("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${D}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}T=`
                        ${C}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${o.response_model||"N/A"}</span>
                        </div>
                        ${L||`
                            <div class="event-detail-block">
                                ${$("Raw Input (Prompt)")}
                                <pre class="detail-pre">${o.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${$("Raw Response Output")}
                                <pre class="detail-pre">${o.response_raw||"None"}</pre>
                            </div>
                        `}
                    `}else if(b==="analysis.user.message_signals"){let $=O=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${O}</h5>`,C=o.signals||{};T=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Sentiment</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${C.sentiment>.3?"#03dac6":C.sentiment<-.3?"#cf6679":"#aaa"}; font-weight: bold;">${C.sentiment?.toFixed(2)||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Intent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: uppercase;">${C.intent||"N/A"}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tech Depth</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${C.technical_depth||0}/10</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Mood</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${C.mood||"N/A"}</div>
                            </div>
                        </div>
                        <div class="event-detail-block">
                            ${$("Extracted Topics")}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${(C.topics||[]).map(O=>`<span class="profile-badge">${O}</span>`).join("")||'<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${$("Raw Model Output")}
                            <pre class="detail-pre">${P(o.raw_output)||"None"}</pre>
                        </div>
                    `}else if(b==="moderation.explicit_content.deleted"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;T=`
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
                            <pre class="detail-pre">${P(o.raw_output)||"None"}</pre>
                        </div>
                    `}else if(b==="analysis.link.completed"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;T=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${o.url}" target="_blank" class="attachment-link">${o.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${P(o.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Description")}
                            <pre class="detail-pre">${P(o.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Content Summary")}
                            <pre class="detail-pre">${P(o.summary)||"None"}</pre>
                        </div>
                    `}else if(b==="analysis.visual.completed"){let $=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`,C="";o.base64_preview?C=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${o.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:o.url&&(C=`<div class="event-detail-block"><img src="${o.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),T=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${o.filename}</span>
                        </div>
                        ${C}
                        <div class="event-detail-block">
                            ${$("Visual Description")}
                            <pre class="detail-pre">${P(o.description)||"None"}</pre>
                        </div>
                    `}else if(b==="analysis.router.decision"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;T=`
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
                            <pre class="detail-pre">${P(o.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Input Context")}
                            <pre class="detail-pre">${P(o.raw_input)||"None"}</pre>
                        </div>
                    `}else if(b==="system.cli.command"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;T=`
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
                            <pre class="detail-pre">${P(o.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(b==="system.analysis.audit"){let $=o.success?"#03dac6":"#ff4d4d",C=o.success?"SUCCESS":"FAILED",L=J=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${J}</h5>`,O="";o.error&&(O=`
                            <div class="event-detail-block">
                                ${L("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${P(o.error)}</pre>
                            </div>
                        `);let D="";if(o.chat_history&&o.chat_history.length>0){let J=o.chat_history.length,G=o.chat_history.map((W,ue)=>{let Q=W.name?W.name.toUpperCase():W.role.toUpperCase();!W.name&&Q==="USER"&&(Q="SYSTEM"),!W.name&&Q==="ASSISTANT"&&(Q="AGENT");let Z=W.role==="user"?"#03dac6":W.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${ue}" style="display: ${ue===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${Z}; letter-spacing: 1px; font-weight: bold;">${Q}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${ue+1} of ${J}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${P(W.content)}</div>
                                </div>
                            `}).join("");D=`
                            <div class="event-detail-block">
                                ${L("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${G}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${J<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let U="";if(o.corrections&&o.corrections.length>0){let J=o.corrections.map((G,W)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${G.type}] ${G.guidance}</div>
                                ${G.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${P(G.snippet)}</div>`:""}
                            </div>
                        `).join("");U=`
                            <div class="event-detail-block">
                                ${L(`Corrections (${o.corrections.length})`)}
                                ${J}
                            </div>
                        `}let j="";if(o.parsed_results&&o.parsed_results.length>0){let J=o.parsed_results.map(G=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${P(G.title)}</div>
                                <div style="color: #ddd;">${P(G.summary)}</div>
                            </div>
                        `).join("");j=`
                            <div class="event-detail-block">
                                ${L("Parsed Results")}
                                ${J}
                            </div>
                        `}T=`
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
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${$}; font-weight: bold;">${C} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${o.attempts} att)</span></div>
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
                        ${O}
                        ${j}
                        ${U}
                        ${D}
                    `}else if(b==="system.test.completed"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;T=`
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
                    `}else if(b==="error_occurred"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;T=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${o.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${P(o.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${$("Context")}
                            <pre class="detail-pre">${JSON.stringify(o.context||{},null,2)}</pre>
                        </div>
                    `}else if(b==="system.cli.status"){let $=C=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${C}</h5>`;T=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${o.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${$("Message")}
                            <pre class="detail-pre">${P(o.message)}</pre>
                        </div>
                    `}else if(b==="messaging.user.sent_message"){let $="";o.attachments&&o.attachments.length>0&&($=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${o.attachments.map(L=>{let O=L.content_type&&L.content_type.startsWith("image/"),D=(L.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${O?`<div class="attachment-thumb-container"><img src="${L.url}" alt="${L.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${L.url}" target="_blank" class="attachment-link">${L.filename}</a>
                                        <span class="attachment-meta">${L.content_type} \u2022 ${D}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),T=`
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
                    <div class="event-details" style="${I}">
                        ${T}
                    </div>
                `}let H=document.createElement("div");H.className=`event-item ${d} ${f} ${w}`,H.dataset.eventId=v.id,H.onclick=function(T){if(!a)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),me.delete(v.id);let C=this.querySelector(".event-details");C&&(C.style.display="none")}else{this.classList.add("expanded"),me.add(v.id);let C=this.querySelector(".event-details");C&&(C.style.display="block")}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${S}</span>
                    <span class="event-date">${k}</span>
                </div>
                <div class="event-icon"><i class='bx ${h}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${E}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${E}</span>
                        ${v.service} ${B}
                    </div>
                    <div class="event-message">${y}</div>
                    ${_}
                </div>
            `;let q=H.querySelector(".event-details");if(q&&q.addEventListener("click",T=>{T.stopPropagation()}),a){let T=H.querySelector(".close-details-btn");T&&T.addEventListener("click",$=>{$.stopPropagation();let C=$.target.closest(".event-item");if(C){C.classList.remove("expanded"),me.delete(v.id);let L=C.querySelector(".event-details");L&&(L.style.display="none")}})}let K=H.querySelector(".prev-btn"),F=H.querySelector(".next-btn");if(K&&F){let T=0,$=H.querySelectorAll(".history-slide"),C=$.length,L=()=>{$.forEach((O,D)=>{O.style.display=D===T?"block":"none"}),K.disabled=T===0,F.disabled=T===C-1,K.style.opacity=T===0?"0.5":"1",F.style.opacity=T===C-1?"0.5":"1"};K.addEventListener("click",O=>{O.stopPropagation(),T>0&&(T--,L())}),F.addEventListener("click",O=>{O.stopPropagation(),T<C-1&&(T++,L())}),L()}return H},c=Array.from(e.children),p=new Map(c.map(v=>[v.dataset.eventId,v])),x=new Set(Ce.map(v=>v.id));c.forEach(v=>{let o=v.dataset.eventId;(!o||!x.has(o))&&v.remove()});let u=null;Ce.forEach((v,o)=>{let b=p.get(v.id);(!b||t)&&(b&&b.remove(),b=m(v),!b)||(o===0?e.firstElementChild!==b&&e.prepend(b):u&&u.nextElementSibling!==b&&u.after(b),u=b)}),_e=Date.now(),X(1,_e)}catch(n){console.error("Error fetching events:",n),e.children.length===0&&(e.innerHTML=N("offline","Failed to load events.","The event service may be offline."))}}function xs(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ce.forEach(n=>me.add(n.id)),ne(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{me.clear(),ne(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(n=>{n.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(l=>l.classList.remove("active")),n.classList.add("active"),V=n.dataset.filter,ne(!0)}}),i.dataset.listenerAttached="true"),i&&i.querySelectorAll(".filter-btn").forEach(n=>{n.dataset.filter===V?n.classList.add("active"):n.classList.remove("active")});let s=document.getElementById("events-clear");s&&!s.dataset.listenerAttached&&(s.onclick=async()=>{let n=V==="all"?"ALL":V.toUpperCase();if(confirm(`Are you sure you want to delete ${n} events from the backend? This cannot be undone.`)){s.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let l="/events";if(V!=="all"?l+=`?category=${V}`:l+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await A(l,{method:"DELETE"})).ok)throw new Error("Failed to delete events");me.clear(),ne(!0)}catch(l){console.error("Failed to clear events:",l),alert("Failed to clear events. Check console.")}finally{s.innerHTML="<i class='bx bx-trash'></i> Clear"}}},s.dataset.listenerAttached="true")}function St(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var ys=null;async function $e(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await A("/logs");if(!e.ok)throw new Error("Logs offline");let i=await e.json();if(!i||i.length===0)return t.innerHTML=N("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let s=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],n=i.filter(r=>!s.includes(r.id));n.forEach(r=>{r.logs&&Array.isArray(r.logs)?r.logs.reverse():r.logs=[]}),n.reverse();let l=n.map(r=>{let m=r.logs.join(`
`),c=[...r.logs];if(c.length<25){let x=25-c.length;for(let u=0;u<x;u++)c.push("")}else c.length>25&&(c=c.slice(-25));let p=c.map(x=>Le(x)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${r.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(m)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${r.id}" title="Clear Logs" style="${z()?"display: none;":""}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${p}</pre>
                </div>
            `}).join("");return t.innerHTML=l,document.querySelectorAll(".copy-logs-btn").forEach(r=>{r.addEventListener("click",()=>{let m=unescape(r.dataset.logs);navigator.clipboard.writeText(m).then(()=>{let c=r.querySelector("i");c.classList.remove("bx-copy"),c.classList.add("bx-check"),setTimeout(()=>{c.classList.remove("bx-check"),c.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(r=>{r.addEventListener("click",async()=>{let m=r.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${m}?`))try{(await A(`/logs?service_id=${m}`,{method:"DELETE"})).ok&&$e()}catch(c){console.error("Error clearing logs:",c)}})}),ys=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=N("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var Mt=()=>{let t=z()?"display: none;":"";return`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary ${z()?'<span style="color: #666; font-size: 0.6em; margin-left: 10px; font-weight: normal; font-style: italic;">* Public data is approximated</span>':""}</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px;">
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span id="system-state-label" style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">System State</span>
                <span id="system-state-val" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Idle</span>
                <span id="guardian-total-idle" style="color: #fff; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Active</span>
                <span id="guardian-total-active" style="color: #03dac6; font-family: monospace; font-size: 1.2em; font-weight: bold;">-</span>
            </div>
             <div class="guardian-indicator" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; text-align: center;">
                <span style="color: #888; font-size: 0.7em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 5px;">Total Waste</span>
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
            <svg width="24" height="24" viewBox="0 0 276 268" style="color: #03dac6; fill: currentColor; min-width: 24px; margin: 0; max-width: 25px;">
                <path d="M0 0 C0.83273438 -0.02191406 1.66546875 -0.04382813 2.5234375 -0.06640625 C12.42281602 1.94089846 19.08310224 8.30026822 25.96826172 15.2746582 C26.95727226 16.25851896 27.94735021 17.2413077 28.93840027 18.22311401 C31.60457896 20.87090912 34.25495042 23.53400437 36.90205145 26.20085549 C39.68567156 29.00096491 42.48198637 31.78835012 45.27639771 34.5776825 C49.96361651 39.26039291 54.64058983 43.95314835 59.31152344 48.65209961 C64.70016956 54.07281989 70.10469891 59.47729615 75.51801288 64.87337428 C80.74280158 70.08226408 85.95618152 75.30243123 91.16449356 80.52779198 C93.37364835 82.74379185 95.58666299 84.95582576 97.80294418 87.16469765 C100.41418514 89.7682407 103.01523577 92.38156651 105.60895729 95.00255966 C107.00896503 96.4126634 108.41872373 97.81306531 109.82881165 99.21308899 C115.21512659 104.68091165 119.71720271 109.65638967 121.15625 117.43359375 C121.1459375 118.28050781 121.135625 119.12742187 121.125 120 C121.14046875 121.26650391 121.14046875 121.26650391 121.15625 122.55859375 C119.29273788 133.0956586 112.41291897 139.49918055 105.10546875 146.7109375 C103.96129859 147.8559378 102.81794583 149.00175542 101.67536926 150.14834595 C99.28844755 152.53811319 96.89305386 154.91893632 94.4909668 157.29345703 C91.42251357 160.32777217 88.37460205 163.38178886 85.33254528 166.44254112 C82.97814152 168.80754245 80.61404093 171.16265346 78.24685097 173.51485062 C77.11941282 174.63713069 75.99475802 175.76221449 74.87303734 176.8902092 C73.30147909 178.4672553 71.71750525 180.03070557 70.12963867 181.59130859 C69.23347336 182.48127533 68.33730804 183.37124207 67.41398621 184.28817749 C62.66560568 188.16031881 57.88332197 189.99168346 51.6875 190 C50.72972656 190.01933594 49.77195312 190.03867188 48.78515625 190.05859375 C39.43875364 188.59135873 33.68473352 182.19800083 27.30932617 175.7644043 C26.29907148 174.75957818 25.28796968 173.75560315 24.27609253 172.75241089 C21.5460013 170.040466 18.82860783 167.31612861 16.11394668 163.40727827 16.11394668 163.40727827 12.00000003 163.40727827 C7.88605338 163.40727827 7.88605338 163.40727827 5.17066956 167.31612861 C2.4560084 170.040466 -0.26199624 172.75241089 -1.27223206 173.75560315 C-2.28410919 174.75957818 -3.29521099 175.7644043 -4.296875 176.7734375 C-10.66254737 183.18739987 -16.40250772 189.56475727 -25.73828125 191.0546875 C-26.72507812 191.03476562 -27.68285156 191.01542969 -28.640625 189.99609375 C-34.83644697 189.98777722 -39.61873068 188.15641257 -44.3671875 184.28515625 C-45.29050933 183.36822083 -46.18667465 182.47825409 -47.08283997 181.58828735 C-48.67070654 180.02768433 -50.25468038 178.46423405 -51.82624054 176.88719177 C-52.94796122 175.75919706 -54.07261602 174.63411326 -55.20005798 173.51183319 C-57.56724794 171.15963603 -59.93134853 168.80452502 -62.28580856 166.4395256 C-65.32786533 163.37877334 -68.37577685 160.32475666 -71.4440918 157.29043579 C-73.84617887 154.91591508 -76.24157256 152.535092 -78.62850952 150.14532471 C-79.77108609 148.99873418 -80.91443885 147.85291661 -82.05859375 146.70703125 C-89.36604397 139.49527431 -96.24586288 133.09175243 -98.1086731 122.5546875 C-98.09304688 121.26259766 -98.09304688 121.26259766 -98.1086731 119.99609375 C-98.11929687 119.12351563 -98.12960937 118.27660156 -98.11408997 117.4296875 C-96.67504303 109.65248347 -92.17296691 104.67700547 -86.78659058 99.20918274 C-85.37650266 97.80915906 -83.96674396 96.40875715 -82.56673431 94.99865723 C-79.97301279 92.37766408 -77.37196216 89.76433838 -74.76072311 87.1607933 C-72.54444192 84.95192141 -70.33142728 82.7398875 -68.12227249 80.52388763 C-62.91396045 75.29852688 -57.70058051 70.07835973 -52.48318481 64.86946869 C-47.06987084 59.47339056 -41.66534149 54.0689143 -36.27669525 48.64819336 C-31.60576164 43.9492421 -26.92878832 39.25648666 -22.24157333 34.57377625 C-19.44716199 31.78444386 -16.65084718 28.99705865 -13.86722755 26.196949 C-11.22012652 23.53009788 -8.56975506 20.86700263 -5.90357637 18.21920776 C-4.91252631 17.23740145 -3.92244836 16.25461271 -2.93343735 15.27075195 C3.95172213 8.29636198 10.61200835 1.93699222 20.51138687 -0.0703125 C21.36935562 -0.04773438 22.20208999 -0.02582031 23.03482437 -0.00390625 " transform="translate(30.08984375,30.8984375)"/>
            </svg>
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
        </div>`},At=()=>`
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
        <div id="processes-history-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,It=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,Bt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,_t=()=>`
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
        </div>`,Dt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${St()}
        </div>`;async function zt(){await Promise.all([Ee(),Je(),Ge(),ye()]),await $e()}var kt=null,Tt=null;async function Nt(){try{return await(await A("/system_monitor")).json()}catch{return null}}async function Lt(){try{return await(await A("/system/hardware")).json()}catch{return null}}async function hs(){try{return await(await A("/processes")).json()}catch{return null}}async function ws(){try{return await(await A("/agent/status")).json()}catch{return null}}async function Je(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),i=document.querySelector("#hw-os .hw-content"),s=document.querySelector("#hw-cpu .hw-content"),n=document.querySelector("#hw-ram .hw-content"),l=document.querySelector("#hw-gpu .hw-content"),r=document.querySelector("#hw-storage .hw-content"),m=a=>{if(a){if(i&&(i.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${a.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${a.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),n){let d=(a.MEMORY_BYTES/1073741824).toFixed(1);n.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${d} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(s&&a.CPU&&a.CPU.length>0){let d=a.CPU[0];s.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${d.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${d.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${d.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}l&&(a.GPU&&a.GPU.length>0?l.innerHTML=a.GPU.map(d=>{let f=(d.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${d.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${f} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):l.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),r&&a.STORAGE&&a.STORAGE.length>0?r.innerHTML=a.STORAGE.map(d=>{let f=(d.USED/1073741824).toFixed(1),g=(d.SIZE/(1024*1024*1024)).toFixed(1),w=d.SIZE>0?(d.USED/d.SIZE*100).toFixed(0):0,I=d.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${d.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${I}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${f} GB Used</span>
                            <span>${g} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${w>90?"#cf6679":"#03dac6"}; width: ${w}%; height: 100%; box-shadow: 0 0 10px ${w>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):r&&(r.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>";let a=await Lt();a?(m(a),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)):(e.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3))},e.dataset.listenerAttached="true"),s&&!s.hasChildNodes())){let a=await Lt();m(a)}if(!t)return;let c=await Nt();if(!c||!c.services){t.children.length===0&&(t.innerHTML=N("offline","Failed to load system metrics.","The event service may be offline."));return}kt=Date.now(),X(0,kt);let p=c.services||[];Array.from(t.children).forEach(a=>{a.classList.contains("service-widget")||a.remove()});function x(a){return!a||a==="N/A"||a==="unknown"||a.trim()===""?"-":a}function u(a){if(!a||a==="N/A"||a==="unknown")return"-";let d=a.match(/^(\d+\.\d+\.\d+)/);return d?d[0]:a.split(".").slice(0,3).join(".")||"-"}function v(a){return!a||a.length<=28?a:a.substring(0,28)+"..."}function o(a){if(!a||a==="N/A"||a==="unknown")return"-";let d=a.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!d)return"-";let f=parseInt(d[1])||0,g=parseInt(d[2])||0,w=parseInt(d[3])||0,I=parseFloat(d[4])||0,M=f*86400+g*3600+w*60+I,S=Math.floor(M/86400);if(S>0)return`${S}d`;let k=Math.floor(M/3600);if(k>0)return`${k}h`;let y=Math.floor(M/60);return y>0?`${y}m`:`${Math.floor(M)}s`}function b(a){let d=a.status==="online",f=d?"service-widget-online":"service-widget-offline",g=d?"bx-check-circle":"bx-x-circle",w=d?"OK":"BAD",I=a.version?u(a.version.str):"-",M=a.cpu&&a.cpu!=="N/A"?a.cpu:"-",S=a.memory&&a.memory!=="N/A"?a.memory:"-",k=M!=="-"?"#00ff00":"#666",y=M!=="-"?"#fff":"#666",B=S!=="-"?"#00ff00":"#666",_=S!=="-"?"#fff":"#666",H=o(a.uptime),q="";d?q=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${I}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${H}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${k};"></i>
                        <span style="color: ${y};">${M}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${B};"></i>
                        <span style="color: ${_};">${S}</span>
                    </div>
                </div>`:q='<div class="service-widget-footer offline"><span>OFFLINE</span></div>';let K=z()?"easter.company":v(a.domain&&a.port?`${a.domain}:${a.port}`:"");return`<div class="service-widget ${f}" data-service-id="${a.id}"><div class="service-widget-header"><i class="bx ${g}"></i><h3>${a.short_name||a.id}</h3><span class="service-widget-status">${w}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${K}</span></div>${q}</div></div>`}let E=new Map(Array.from(t.querySelectorAll(".service-widget")).map(a=>[a.dataset.serviceId,a])),h=new Set(p.map(a=>a.id));for(let[a,d]of E)h.has(a)||d.remove();p.forEach(a=>{let d=b(a),f=E.get(a.id);f?f.outerHTML!==d&&(f.outerHTML=d):t.insertAdjacentHTML("beforeend",d)})}async function Ge(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Nt();if(!e){t.children.length===0&&(t.innerHTML=N("offline","Failed to load model status.","The event service may be offline."));return}Tt=Date.now(),X(2,Tt);let i=e.models||[],s=e.whisper;Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function n(c){let p=c.status==="Ready";return`
                <div class="service-widget ${p?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${p?"READY":"NOT FOUND"}</span>
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
                </div>`}function l(c){let p=c.status==="Ready";return`
                <div class="service-widget ${p?"service-widget-online":"service-widget-offline"}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx bx-volume-full"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${p?"READY":"NOT FOUND"}</span>
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
                </div>`}function r(c){let p=c.status==="Downloaded",x=p?"service-widget-online":"service-widget-offline",u=p?"OK":"MISSING",v=p&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",o=c.name;return c.type==="custom"&&o.endsWith(":latest")&&(o=o.replace(":latest","")),`<div class="service-widget ${x}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${o}</h3><span class="service-widget-status">${u}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${v}</span></div></div></div>`}let m="";if(s&&(m+=n(s)),e.xtts&&(m+=l(e.xtts)),m+=i.map(r).join(""),!m){t.innerHTML=N("empty","No models found.");return}t.innerHTML!==m&&(t.innerHTML=m)}async function Ee(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("guardian-sentry-val"),i=document.getElementById("guardian-architect-val"),s=document.getElementById("guardian-idle-val"),n=document.getElementById("guardian-total-idle"),l=document.getElementById("guardian-total-active"),r=document.getElementById("guardian-total-waste"),m=document.getElementById("guardian-reset-btn"),c=document.getElementById("analyzer-reset-btn");m&&!m.dataset.listenerAttached&&(m.onclick=async()=>{m.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A("/guardian/reset?protocol=all",{method:"POST"}),setTimeout(()=>{m.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{m.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),Ee()}catch{m.innerHTML="<i class='bx bx-error'></i>"}},m.dataset.listenerAttached="true"),c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{c.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A("/analyzer/reset?protocol=synthesis",{method:"POST"}),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{c.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),Ee()}catch{c.innerHTML="<i class='bx bx-error'></i>"}},c.dataset.listenerAttached="true");let p=await ws();if(p){let h=Math.floor(Date.now()/1e3),a=p.active_tier,d=p.active_synthesis,f=p.protocol_aliases||{sentry:"Sentry",architect:"Architect",synthesis:"Synthesis"},g=y=>{y<0&&(y=0);let B=Math.floor(y/3600),_=Math.floor(y%3600/60),H=y%60;return B>0?`${B}h ${_}m`:_>0?`${_}m ${H}s`:`${H}s`},w=(y,B,_,H,q)=>{if(!y)return;let K=f[H]||H.toUpperCase(),F=y.parentElement.querySelector('span[style*="text-transform: uppercase"]');if(F&&(F.textContent=K),q&&q.includes(H))y.textContent="Working",y.style.color="#bb86fc";else if(_){let $=_.next_run-h;if($<=0)y.textContent="Ready",y.style.color="#5eff5e";else{let C=Math.floor($/60),L=$%60;y.textContent=`${C}m ${L}s`,y.style.color="#fff"}}B&&_&&(B.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${_.attempts||0}</span>
            <span style="color: ${_.failures>0?"#ffa500":"#666"}">Fails: ${_.failures||0}</span>
            <span style="color: ${_.absolute_failures>0?"#ff4d4d":"#666"}">Aborted: ${_.absolute_failures||0}</span>
          </div>
        `)};e&&w(e,document.getElementById("guardian-sentry-stats"),p.sentry,"sentry",a),i&&w(i,document.getElementById("guardian-architect-stats"),p.architect,"architect",a);let I=document.getElementById("analyzer-synthesis-val"),M=document.getElementById("analyzer-synthesis-stats");I&&w(I,M,p.synthesis,"synthesis",d);let S=document.getElementById("system-state-label"),k=document.getElementById("system-state-val");if(k&&p.system_state){let y=p.system_state,B=g(p.system_state_time||0);S&&(S.textContent=`State: ${y.toUpperCase()}`),k.textContent=B,y==="idle"?k.style.color=p.system_state_time>300?"#5eff5e":"#fff":k.style.color="#bb86fc"}n&&(n.textContent=g(p.total_idle_time||0)),l&&(l.textContent=g(p.total_active_time||0)),r&&(r.textContent=g(p.total_waste_time||0))}else[e,i,s,n,l,r].forEach(a=>{a&&(a.textContent="-",a.style.color="#666")});let x=await hs(),u=[],v=[],o=[];x&&(Array.isArray(x)?u=x:(u=x.active||[],v=x.queue||[],o=x.history||[],o.sort((h,a)=>(a.end_time||0)-(h.end_time||0)))),u.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=N("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),Fe(t,u,!1));let b=document.getElementById("processes-queue-widgets");b&&(v.length===0?!b.querySelector(".tab-placeholder")&&!b.querySelector('div[style*="font-style: italic"]')&&(b.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(b.innerHTML="",Fe(b,v,!1)));let E=document.getElementById("processes-history-widgets");E&&(o.length===0?E.querySelector(".tab-placeholder")||(E.innerHTML=N("empty","No recent history.")):(E.querySelector(".tab-placeholder")&&(E.innerHTML=""),Fe(E,o,!0))),we(1,u.length)}function Fe(t,e,i){function s(m){let c="";m.end_time?c=`${m.end_time-m.start_time}s`:c=`${Math.floor(Date.now()/1e3-m.start_time)}s`;let p=m.retries>0?`<span class="process-retry-badge">Retry ${m.retries}</span>`:"",x=m.channel_id,u={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation","system-analyzer":"Analyzer Agent"};if(u[x]?x=u[x]:/^\d+$/.test(x)&&(x=`Channel ${x}`),i)return`
        <div class="process-history-item" data-channel-id="${m.channel_id}-${m.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${x}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${m.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${m.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${c}</span>
            </div>
        </div>`;let v="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${m.channel_id}-${m.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${v}"></i>
                        <h3 style="color: ${v}">${x}</h3>
                        ${p}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${v}">${m.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${v}">${c}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${v}">${m.pid}</span>
                        </div>
                    </div>
                </div>`}let n=i?".process-history-item":".process-widget",l=new Map(Array.from(t.querySelectorAll(n)).map(m=>[m.dataset.channelId,m])),r=new Set(e.map(m=>`${m.channel_id}-${m.start_time}`));for(let[m,c]of l)r.has(m)||c.remove();e.forEach(m=>{let c=`${m.channel_id}-${m.start_time}`,p=s(m),x=l.get(c);if(x){x.outerHTML!==p&&(x.outerHTML=p);let u=t.querySelector(`[data-channel-id="${c}"]`);u&&t.appendChild(u)}else t.insertAdjacentHTML("beforeend",p)})}function De(){let t=He(),e="Notification"in window,i={enabled:e&&Notification.permission==="granted",supported:e};return`
            <div class="theme-selector">
                ${Object.values(Y).map(s=>`
                    <div class="theme-card ${t===s?"active":""}" data-theme="${s}">
                        <div class="theme-preview theme-preview-${s.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${s.charAt(0).toUpperCase()+s.slice(1)}</h3>
                            <p>${s===Y.DARK?"Simple, clean, dark.":s===Y.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
                            <span class="theme-badge">${t===s?"Active":"Select"}</span>
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
            </div>`}function We(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(s=>{s.addEventListener("click",function(){let n=this.dataset.theme;it(n),t.setContent(De()),We(t)})});let i=document.getElementById("notifications-toggle");i&&"Notification"in window?i.onclick=async s=>{if(s.target.checked)try{await Notification.requestPermission()!=="granted"&&(s.target.checked=!1)}catch{s.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),s.target.checked=!0)}:i&&(i.disabled=!0)}var Pt=()=>`
        <div class="system-section-header">
            <i class='bx bx-globe' style="color: #03dac6;"></i>
            <h2>Web History</h2>
            <button id="web-refresh-btn" class="notif-action-btn" style="margin-left: auto;" title="Refresh Data"><i class='bx bx-refresh'></i></button>
        </div>
        <div id="web-carousel-container" style="position: relative; min-height: 400px;">
            <div id="web-history-content"></div>
        </div>
    `;async function Rt(){let t=document.getElementById("web-history-content");if(!t)return;let e=document.getElementById("web-refresh-btn");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await Ht(t),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),await Ht(t)}async function Ht(t){try{let e=await A("/web/history");if(!e.ok)throw new Error("Failed to fetch history");let i=await e.json();if(!i||i.length===0){t.innerHTML=N("empty","No web history found.");return}let s=`
            <div class="web-carousel" style="display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 20px; padding-bottom: 20px; scroll-behavior: smooth;">
        `;i.forEach((n,l)=>{let r=new Date(n.timestamp*1e3).toLocaleString(),m=n.screenshot?`<img src="data:image/png;base64,${n.screenshot}" style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px;">`:'<div style="width: 100%; height: 200px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: #666; margin-bottom: 15px; border-radius: 8px;">No Screenshot</div>';s+=`
                <div class="web-card" style="flex: 0 0 100%; scroll-snap-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; box-sizing: border-box; max-width: 100%;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span style="color: #03dac6; font-weight: bold;">#${l+1}</span>
                        <span style="color: #888; font-size: 0.85em;">${r}</span>
                    </div>
                    <h3 style="margin-bottom: 10px; color: #fff; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${n.title||"No Title"}</h3>
                    <a href="${n.url}" target="_blank" style="color: #bb86fc; font-size: 0.85em; margin-bottom: 15px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${n.url}</a>
                    
                    ${m}

                    <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 6px; height: 150px; overflow-y: auto; font-family: monospace; font-size: 0.8em; color: #ccc; white-space: pre-wrap;">${n.content?n.content.replace(/</g,"&lt;").replace(/>/g,"&gt;"):"No content"}</div>
                </div>
            `}),s+="</div>",s+=`
            <div style="text-align: center; color: #666; font-size: 0.8em; margin-top: 5px;">
                <i class='bx bx-left-arrow-alt'></i> Swipe to navigate <i class='bx bx-right-arrow-alt'></i>
            </div>
        `,t.innerHTML=s}catch(e){t.innerHTML=N("error","Failed to load web history.",e.message)}}var jt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1 & Tier 2).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1|2] [--force]
0 = Full Analysis (Default)
1 = Tier 1 Only (Reports)
2 = Tier 2 Only (Blueprints)`},demo_output:["\u2588 \x1B[1mGUARDIAN TECHNICAL SENTRY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m[INFO] Verifying system state...\x1B[0m"," \x1B[32m\u2713\x1B[0m No ongoing processes detected."," \x1B[32m\u2713\x1B[0m System idle time requirement met (312s).","","\x1B[1mInitializing Full Analysis (T1 + T2)...\x1B[0m","\x1B[94m\u2192 Executing Tier 1: Technical Sentry...\x1B[0m"," \x1B[90m\u2699\uFE0F  Auditing 50 system events...\x1B[0m"," \x1B[90m\u2699\uFE0F  Analyzing recent service logs...\x1B[0m"," \x1B[90m\u2699\uFE0F  Executing pre-analysis test suite...\x1B[0m","","# [SYSTEM] Service Connectivity Alert","**Priority**: high","**Body**: dex-tts-service reported 3 consecutive timeouts.","","\x1B[95m\u2192 Executing Tier 2: Architect Analysis...\x1B[0m"," \x1B[90m\u2699\uFE0F  Synthesizing Tier 1 reports...\x1B[0m","","# [BLUEPRINT] Automated Service Recovery","**Category**: architecture","**Summary**: Implement exponential backoff for TTS connection retries.","","\x1B[32m\u2713 Guardian run completed successfully.\x1B[0m","\x1B[90m  Duration: 14.2s | Waste: 0s | Reliability: 100%\x1B[0m"]},{id:"test",title:"Test",icon:"bx-check-shield",description:"Run service tests (Format, Lint, Unit).",usage:"dex test [service]",category:"lifecycle",docs:{overview:"Ensures code quality by running the full system test suite.",details:["Runs go test for all backend services.","Executes static analysis via golangci-lint.","Runs Python unit tests for TTS logic.","Validates configuration schemas."],extended_usage:"dex test [service] [--models]"},demo_output:["\u2588 \x1B[1mTESTING ALL SERVICES\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","","\x1B[36mTesting cli\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [12ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [842ms]\x1B[0m","\x1B[32m\u2713 Test (12 passed) [42ms]\x1B[0m","\x1B[90m  Total Duration: 896ms\x1B[0m","","\x1B[36mTesting event\x1B[0m","Checking formatting...","Linting...","Running tests...","\x1B[32m\u2713 Format (all files formatted) [15ms]\x1B[0m","\x1B[32m\u2713 Lint (no issues) [1.2s]\x1B[0m","\x1B[32m\u2713 Test (48 passed, 72.4% coverage) [156ms]\x1B[0m","\x1B[90m  Total Duration: 1.37s\x1B[0m","","\u2588 \x1B[1mTEST SUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE         FORMAT       LINT         TEST         DURATION  ","cli             \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       896.2ms   ","event           \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       \x1B[32m\u2713 PASS\x1B[0m       1.37s     ","","\x1B[32m\u2713 All tests passed!\x1B[0m"]},{id:"build",title:"Build",icon:"bx-package",description:"Build and install CLI and services from source.",usage:"dex build [major|minor|patch]",category:"lifecycle",docs:{overview:"The primary entry point for ecosystem evolution. Handles versioning and deployment.",details:["Increments semantic versioning automatically.","Bundles JS/CSS assets with content hashing.","Builds Go binaries and Python environments.","Creates Git tags and pushes to remotes.","Handles post-build service restarts."],extended_usage:"dex build [patch|minor|major] [--force]"},demo_output:["\u2588 \x1B[1mBUILDING ALL SERVICES FROM LOCAL SOURCE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Building cli with patch increment","Capturing current versions...","","\u2588 \x1B[1mBUILD PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[36m# Building cli\x1B[0m","Incrementing version: 2.8.142 -> 2.8.143 (patch)","Cleaning old build files...","Compiling binary...","\x1B[32m\u2713 Successfully built cli!\x1B[0m","","\u2588 \x1B[1mINSTALL PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[32m\u2713 Successfully installed cli!\x1B[0m","","\u2588 \x1B[1mGIT PHASE\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","[cli] Adding, committing, and pushing changes...","[cli] Creating tag 2.8.143...","\x1B[32m\u2713 [cli] Tag 2.8.143 created and pushed\x1B[0m","","\u2588 \x1B[1mSUMMARY\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Service  Version Change        Size Change  Note                                   ","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","cli      2.8.142 -> 2.8.143    +12 KB       release: publish patch version 2.8.143 ","","\x1B[32m\u2713 Build complete.\x1B[0m"]},{id:"update",title:"Update",icon:"bx-cloud-download",description:"Update CLI and services from source or pre-built binaries.",usage:"dex update",category:"lifecycle",docs:{overview:"Synchronizes your environment with the latest releases.",details:["In DEV mode: Clones fresh source and rebuilds everything.","In USER mode: Downloads latest binaries from easter.company.","Verifies checksums for all downloads.","Automatically updates environment paths."],extended_usage:"dex update"},demo_output:["\u2588 \x1B[1mDEVELOPER UPDATE - NUCLEAR FRESH INSTALL\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[33m! Cloning fresh source and rebuilding everything from scratch...\x1B[0m","Fetching latest dev version from easter.company...","Latest dev version: 2.8.143","Updating 6 services from source...","Updating cli...","  Cloning dex-cli...","  Building cli via Makefile...","\x1B[32m  \u2713 cli updated (all binaries installed)\x1B[0m","\x1B[32m\u2713 Update complete!\x1B[0m","Run 'dex version' to verify"]},{id:"restart",title:"Restart",icon:"bx-refresh",description:"Restart all manageable services.",usage:"dex restart",category:"lifecycle",docs:{overview:"Direct control over the background processes that power the Dexter ecosystem.",details:["Interfaces with systemd units.","Supports starting, stopping, and restarting.","Displays detailed uptime and PID info.","Monitors resource consumption per service."],extended_usage:`dex start
dex stop
dex restart`},demo_output:["\u2192 Restarting dex-event-service...","\x1B[32m\u2713\x1B[0m Service stopped (PID 19420)","\x1B[32m\u2713\x1B[0m Service started (PID 20155)","\u2192 Verifying health check (http://127.0.0.1:8100/status)...","\x1B[32m\u2713\x1B[0m Response received in 12ms.","","\x1B[1mService uptime: 4 seconds\x1B[0m"]},{id:"status",title:"Status",icon:"bx-pulse",description:"Check the status of CLI and services.",usage:"dex status [service]",category:"system",docs:{overview:"The Status command provides a high-level overview of the health, versioning, and connectivity of all services in the Dexter network.",details:["Reports status (online/offline/degraded).","Displays version strings and build hashes.","Shows network addresses and ports.","Validates internal service-to-service communication."],extended_usage:"dex status [service_id|all]"},demo_output:["\u2588 \x1B[1mSERVICE STATUS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","SERVICE  ADDRESS          VERSION  BRANCH   COMMIT   STATUS   UPTIME           CPU      MEM","\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500\u2500          \u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500      \u2500\u2500\u2500","cli      local            2.8.143  main     240fc38  \x1B[32mOK\x1B[0m       \x1B[90m--\x1B[0m               \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m","event    127.0.0.1:8100   2.8.198  main     a8f2b1c  \x1B[32mOK\x1B[0m       14h22m           0.2%     12.4 MB","discord  127.0.0.1:8300   2.8.68   main     6e2d1a4  \x1B[32mOK\x1B[0m       14h22m           0.1%     24.8 MB","tts      127.0.0.1:8200   0.0.25   main     f2e1d0c  \x1B[32mOK\x1B[0m       14h22m           0.0%     1.2 GB","web      127.0.0.1:8400   0.0.5    main     b1c2d3e  \x1B[32mOK\x1B[0m       14h22m           0.0%     42.1 MB","ollama   127.0.0.1:11434  0.5.4    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       4d12h            0.5%     8.4 GB","cache    127.0.0.1:6379   7.4.1    \x1B[90m--\x1B[0m       \x1B[90m--\x1B[0m       \x1B[32mOK\x1B[0m       32d              0.1%     4.2 MB"]},{id:"logs",title:"Logs",icon:"bx-terminal",description:"View or tail service logs.",usage:"dex logs <service> [-f]",category:"system",docs:{overview:"Logs provides real-time observability into the background processes of the Dexter services.",details:["Tail live output from systemd services.","Support for following (-f) and history limiting.","ANSI color support for terminal readability.","Aggregated view for multi-instance deployments."],extended_usage:"dex logs <service_id> [-f]"},demo_output:["\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:05\x1B[0m [INFO] Joined voice channel: 1437617331...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:08\x1B[0m [DEBUG] VAD triggered by user oweneaster","\x1B[35m[EVENT]\x1B[0m   \x1B[90m14:30:09\x1B[0m [INFO] Emitted: messaging.user.speaking.started","\x1B[32m[TTS]\x1B[0m     \x1B[90m14:30:12\x1B[0m [INFO] Generating audio for 12 words...","\x1B[34m[DISCORD]\x1B[0m \x1B[90m14:30:15\x1B[0m [SUCCESS] Audio playback completed.","\x1B[90m[Watching for new logs...]\x1B[0m"]},{id:"event",title:"Event",icon:"bx-broadcast",description:"Interact with the Event Service.",usage:"dex event [log|service|analyst|delete]",category:"system",docs:{overview:"The event bus interface for manual debugging and data extraction.",details:["Query the history of the system event log.","Manually reset analyst tier timers.","Filter events by type, service, or count.","Delete historical events matching patterns."],extended_usage:`dex event log [-n count] [-t type]
dex event analyst [status|reset]
dex event delete <pattern>`},demo_output:["\u2588 \x1B[1mLAST 20 EVENTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[90m14:42:01\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[38;5;208mCMD: dex guardian [] (success)\x1B[0m","\x1B[90m14:42:02\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[35m[INFO] Analysis complete: No significant insights found.\x1B[0m","\x1B[90m14:45:10\x1B[0m \x1B[90mdiscord        \x1B[0m | \x1B[34moweneaster: Dexter, run a system scan.\x1B[0m","\x1B[90m14:45:12\x1B[0m \x1B[90mevent          \x1B[0m | \x1B[32mPROC+: system-cli-op (started)\x1B[0m","\x1B[90m14:45:15\x1B[0m \x1B[90mcli            \x1B[0m | \x1B[31m[ERROR] Connection timeout to Redis.\x1B[0m"]},{id:"discord",title:"Discord",icon:"bx-bot",description:"Interact with the Discord Service.",usage:"dex discord [contacts|channels|service|quiet]",category:"system",docs:{overview:"Direct control over the Discord bot integration and audio engine.",details:["List all guild members and their permission levels.","Inspect channel structures and user presence.",'Toggle "Quiet Mode" for public interactions.',"Check raw service state and gateway health."],extended_usage:`dex discord contacts
dex discord quiet [on|off]`},demo_output:["\u2588 \x1B[1mDISCORD CONTACTS\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Fetching guild members...","","\u2588 Server: Easter Company (12 members) \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","LEVEL           USERNAME        STATUS   DISCORD ID","\u2500\u2500\u2500\u2500\u2500           \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500\u2500   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\x1B[35mDEXTER (ME)\x1B[0m     Dexter          \x1B[32monline\x1B[0m   \x1B[90m1313...0432\x1B[0m","\x1B[35mMASTER\x1B[0m          oweneaster      \x1B[32monline\x1B[0m   \x1B[90m3130...7920\x1B[0m","\x1B[31mADMIN\x1B[0m           Developer       \x1B[33midle\x1B[0m     \x1B[90m4242...8181\x1B[0m","\x1B[37mUSER\x1B[0m            GuestUser       \x1B[90moffline\x1B[0m  \x1B[90m9999...9999\x1B[0m"]},{id:"ollama",title:"Ollama",icon:"bx-brain",description:"Run the system 'ollama' executable or sync models.",usage:"dex ollama [pull|sync|list]",category:"system",docs:{overview:"Proxy command for managing local LLMs and neural vision models.",details:["Wraps the system ollama binary.","Added 'pull' subcommand to sync all Dexter-required models.","Synchronizes custom model templates automatically.","Validates model weight checksums."],extended_usage:`dex ollama pull
dex ollama run gemma3:12b`},demo_output:["\x1B[34m[OLLAMA]\x1B[0m Synchronizing custom Dexter models...","Pulling base models...","Pulling gemma3:12b... \x1B[32m[100%]\x1B[0m","\x1B[32m\u2713 Successfully pulled model: gemma3:12b\x1B[0m","Creating custom Dexter models...","  Rebuilding dex-analyst-guardian from gpt-oss:20b...","\x1B[32m\u2713   Created dex-analyst-guardian\x1B[0m","\x1B[32m\u2713 Ollama models are up-to-date.\x1B[0m"]},{id:"system",title:"System Info",icon:"bx-info-square",description:"Show system info and manage packages.",usage:"dex system [info|scan|validate|install]",category:"system",docs:{overview:"Performance observability tool focused on AI resource availability.",details:["Scans and reports CPU, GPU, RAM, and Storage vitals.","Validates presence of required system packages.","Handles automatic installation of missing dependencies.","Exports telemetry data in JSON format."],extended_usage:`dex system scan
dex system validate
dex system install <package>`},demo_output:["\u2588 \x1B[1mSYSTEM CONFIGURATION\x1B[0m \u2588","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","Category        Value","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \u2500\u2500\u2500\u2500\u2500","CPU (Generic)   Cores: 16, Threads: 32","                Avg Clock: 4.20 GHz","GPU 0           NVIDIA GeForce RTX 4090, VRAM: 24.0 GB, CUDA: 1204","Memory          64.0 GB","Storage         2.0 TB (1 devices)","                /dev/nvme0n1p3: 450.2 GB / 1862.4 GB (/)","Packages        ","                \x1B[32m\u2713 12 checks passed\x1B[0m"]},{id:"config",title:"Config",icon:"bx-slider-alt",description:"Show service config or a specific field.",usage:"dex config <service> [field...]",category:"system",docs:{overview:"Manages the central registry that defines service interaction.",details:["View service definitions (domains, ports, IDs).","Modify environment-specific parameters.","Update authentication secrets and API endpoints.","Supports JSON path traversal for deep fields."],extended_usage:`dex config <service> [field]
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Cs=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
    `;for(let[i,s]of Object.entries(t)){let n=jt.filter(l=>l.category===i);n.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${s.icon}' style="color: ${s.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${s.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${n.map(l=>`
                        <div class="cli-command-card ${l.dummy?"dummy":""}" data-cmd="${l.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${s.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${l.icon}' style="font-size: 2em; color: ${s.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${l.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${l.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${s.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${l.usage}
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
    </div>`,e},Ve=!1;function $s(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>Ot(),document.getElementById("terminal-action-btn").onclick=()=>Ot());let i=document.getElementById("cli-terminal-body"),s=document.getElementById("cli-docs-pane");i.innerHTML="";let n=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return s.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${n.overview}</p>
        </div>
        ${n.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${n.details.map(l=>`<li>${l}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${n.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ve=!0,i}function Ot(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ve=!1}function Ut(t,e,i="output"){if(!Ve)return;let s=document.createElement("div");s.className=`terminal-line terminal-${i}`,i==="prompt"?s.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:s.innerHTML=Le(e),t.appendChild(s),t.scrollTop=t.scrollHeight}async function Es(t){let e=jt.find(n=>n.id===t);if(!e)return;let i=$s(e);Ut(i,`dex ${t}`,"prompt");let s=e.demo_output||["Executing command...","\u2713 Done."];for(let n of s){await new Promise(r=>setTimeout(r,400+Math.random()*600));let l="output";n.includes("[ERROR]")?l="error":n.includes("[SUCCESS]")||n.includes("\u2713")?l="success":n.includes("!")&&(l="warning"),Ut(i,n,l)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function qt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Cs();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let i=e.querySelector("code").textContent;navigator.clipboard.writeText(i).then(()=>{let s=e.querySelector("i");s.className="bx bx-check",s.style.color="#5eff5e",setTimeout(()=>{s.className="bx bx-copy",s.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(i=>{i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-5px)",i.style.borderColor="rgba(255,255,255,0.15)",i.style.backgroundColor="rgba(255,255,255,0.05)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)",i.style.borderColor="rgba(255,255,255,0.05)",i.style.backgroundColor="rgba(255,255,255,0.03)"}),i.addEventListener("click",()=>{let s=i.dataset.cmd;Es(s)})})}async function Ss(){if(!z())try{if(!(await A("/system/status",{method:"GET"})).ok)throw new Error("Service unhealthy")}catch(t){console.error("Service health check failed:",t)}}function Ft(){if(window.location.protocol==="http:"&&window.location.hostname==="easter.company"){window.location.replace("https://"+window.location.hostname+window.location.pathname+window.location.search);return}Qe(),et(),Ss(),at(),Xe();let t=window.location.pathname;(t==="/dexter"||t==="/dexter/")&&qt();let e=[],i=document.getElementById("windows-container");i&&i.setAttribute("data-count","0");let s=a=>{localStorage.setItem("dex_last_window",a)};function n(){for(;e.length>1;)e.shift().close(!0);let a=document.getElementById("windows-container"),d=document.querySelector("nav"),f=document.querySelector("footer"),g=window.location.pathname==="/"||window.location.pathname==="/index.html",w=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");a&&a.setAttribute("data-count",e.length),e.forEach(B=>{let _=document.getElementById(B.id);_&&_.classList.remove("hide-close")});let I=document.getElementById("dexter-menu-container"),M=document.getElementById("nav-window-switcher"),S=document.getElementById("settings-icon"),k=document.getElementById("close-all-windows"),y=window.innerWidth<880;if(!y){let B=document.getElementById("dexter-dropdown"),_=document.getElementById("dexter-menu-btn");B&&B.classList.remove("active"),_&&_.classList.remove("active"),a&&a.classList.remove("menu-open")}if(fe(e.length>0),e.length>0)if(f?.classList.add("hide"),k&&(k.style.display=y?"none":"block"),document.querySelector("main")?.style.setProperty("opacity","0","important"),d?.classList.add("window-open"),a&&(a.style.paddingTop="60px"),I&&(I.style.display=y?"flex":"none"),S&&(S.style.display=y?"block":"none"),!y&&M){let B=e[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(B)?(M.innerHTML=`
                      <div class="nav-switch-btn ${B==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${B==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${B==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${B==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${B==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{s("alerts-window"),l(m)}),document.getElementById("switch-events").addEventListener("click",()=>{s("events-window"),l(c)}),document.getElementById("switch-monitor").addEventListener("click",()=>{s("monitor-window"),l(x)}),document.getElementById("switch-contacts").addEventListener("click",()=>{s("contacts-window"),l(p)}),document.getElementById("switch-workspace").addEventListener("click",()=>{s("workspace-window"),l(u)})):M.innerHTML=""}else M&&(M.innerHTML="");else d?.classList.remove("window-open"),k&&(k.style.display="none"),a&&(a.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),g||w?f?.classList.remove("hide"):f?.classList.add("hide"),I&&(I.style.display="flex"),S&&(S.style.display="block"),M&&(M.innerHTML="");ve()}function l(a){if(a.isOpen()){a.close();return}for(;e.length>0;)e.pop().close(!0);e.push(a),a.open(),n()}function r(){[...e].forEach(d=>d.close()),e=[]}window.addEventListener("resize",n);let m=ae({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:pt(),onOpen:()=>ie(),onClose:()=>{let a=e.indexOf(m);a>-1&&e.splice(a,1),n()}}),c=ae({id:"events-window",title:"Events",icon:"bx-calendar-event",content:qe(),onOpen:()=>{c.setContent(qe()),ne()},onClose:()=>{let a=e.indexOf(c);a>-1&&e.splice(a,1),n()}}),p=ae({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:$t(),onOpen:()=>je(),onClose:()=>{let a=e.indexOf(p);a>-1&&e.splice(a,1),n()}}),x=ae({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:It()},{icon:"bxs-component",title:"Processes",content:At()},{icon:"bxs-brain",title:"Models",content:Bt()},{icon:"bx-globe",title:"Web",content:Pt()},{icon:"bxs-hdd",title:"Hardware",content:_t()},{icon:"bxs-terminal",title:"Logs",content:Dt()},{icon:"bxs-zap",title:"Agents",content:Mt()},{icon:"bx-task",title:"Chores",content:ht()}].filter(a=>z()?a.title!=="Hardware"&&a.title!=="Logs":!0),onOpen:()=>{Je(),Ee(),Ge(),Rt(),$e(),ye()},onClose:()=>{let a=e.indexOf(x);a>-1&&e.splice(a,1),n()}}),u=ae({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:yt(),onOpen:()=>Oe(),onClose:()=>{let a=e.indexOf(u);a>-1&&e.splice(a,1),n()}}),v=ae({id:"settings-window",title:"Settings",icon:"bx-cog",content:De(),onOpen:()=>{v.setContent(De()),We(v)},onClose:()=>{let a=e.indexOf(v);a>-1&&e.splice(a,1),n()}});window.dexter={viewEvent:a=>{c.isOpen()||l(c),setTimeout(()=>{let d=document.querySelector(`.event-item[data-event-id="${a}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)},viewAlert:a=>{m.isOpen()||l(m),setTimeout(()=>{let d=document.querySelector(`.event-item[data-alert-id="${a}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)}};let o=()=>{let a=document.getElementById("dexter-dropdown"),d=document.getElementById("dexter-menu-btn");a&&d&&(a.classList.remove("active"),d.classList.remove("active"),window.innerWidth<880&&document.getElementById("windows-container")?.classList.remove("menu-open"))};(()=>{let a=document.getElementById("dexter-menu-btn"),d=document.getElementById("settings-icon"),f=document.getElementById("close-all-windows"),g=document.getElementById("nav-left-container"),w=document.getElementById("dexter-dropdown"),I=document.getElementById("windows-container");a&&w&&(a.onclick=S=>{S.stopPropagation();let k=window.innerWidth<880;w.classList.toggle("active"),a.classList.toggle("active");let y=w.classList.contains("active");if(k){let B=document.querySelector("nav");y?(document.querySelector("footer")?.classList.add("hide"),document.querySelector("main")?.style.setProperty("opacity","0","important"),B?.classList.add("window-open"),I?.classList.add("menu-open"),fe(!0)):(I?.classList.remove("menu-open"),e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),B?.classList.remove("window-open"),fe(!1)))}}),d&&(d.onclick=S=>{S.stopPropagation(),l(v)}),f&&(f.onclick=S=>{S.stopPropagation(),r()});let M=(S,k,y)=>{let B=document.getElementById(S);B&&(B.onclick=_=>{_.stopPropagation(),o(),y&&s(y),l(k)})};M("alerts-menu-item",m,"alerts-window"),M("events-menu-item",c,"events-window"),M("monitor-menu-item",x,"monitor-window"),M("contacts-menu-item",p,"contacts-window"),M("workspace-menu-item",u,"workspace-window"),g&&(g.onclick=S=>{if(S.stopPropagation(),w&&w.classList.contains("active")){o(),window.innerWidth<880&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),fe(!1));return}if(e.length>0)r();else{let k=window.location.pathname;if(!(k==="/"||k==="/index.html")){let _=(k.endsWith("/")&&k.length>1?k.slice(0,-1):k).split("/");_.pop();let H=_.join("/")||"/";window.location.href=H}}}),document.addEventListener("click",()=>{let S=window.innerWidth<880;w&&w.classList.contains("active")&&(o(),S&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),fe(!1)))}),w&&(w.onclick=S=>S.stopPropagation())})();let E=window.location.pathname==="/"||window.location.pathname==="/index.html",h=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!E&&!h&&document.querySelector("footer")?.classList.add("hide"),z()||setInterval(()=>{c.isOpen()&&ne(),m.isOpen()?ie():Re()},1e3),setInterval(()=>{z()&&(m.isOpen()?ie():Re()),u.isOpen()?Oe():xt(),z()&&c.isOpen()&&ne(),x.isOpen()&&zt()},5e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ft):Ft();})();
