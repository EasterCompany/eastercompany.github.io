(()=>{function Ye(){if(!document.querySelector(".grid-overlay")){let t=document.createElement("div");t.className="grid-overlay",document.body.appendChild(t)}console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function Xe(){let t=window.location.pathname,e=t==="/"||t==="/index.html",s=`
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
                <i class='bx bx-bot' id="dexter-menu-btn" title="Dexter Menu"></i>
                <div id="dexter-nav-badge" class="notification-badge" style="position: absolute; top: 0; right: -2px; width: 8px; height: 8px; padding: 0; min-width: 0; display: none; box-shadow: 0 0 5px #ff4444;"></div>
                <div id="dexter-dropdown" class="dexter-dropdown">
                    <div class="dropdown-item" id="feed-menu-item"><i class='bx bx-news'></i> Feed</div>
                    <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
                    <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
                </div>
            </div>
            <i class='bx bx-cog' id="settings-icon" title="Settings"></i>
            <i class='bx bx-x-circle' id="close-all-windows" title="Close Window" style="color: #ff4444; margin-left: 10px; opacity: 0.6; display: none;"></i>
        </div>
    
    `,l=document.createElement("nav");l.innerHTML=s,document.body.prepend(l)}function fe(t){let e=window.location.pathname,i=e==="/"||e==="/index.html",a=document.getElementById("nav-chevron"),s=document.querySelector(".nav-left");!a||!s||(t||!i?(a.style.display="block",s.style.cursor="pointer",s.classList.add("recording"),s.onmouseenter=()=>{a.style.transform="translateX(-3px)"},s.onmouseleave=()=>{a.style.transform="translateX(0)"}):(a.style.display="none",s.style.cursor="default",s.classList.remove("recording"),s.onmouseenter=null,s.onmouseleave=null))}function Qe(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var et=1e3;function ae(t){let e=null,i=t.onClose||null,a=t.onOpen||null;function s(){e&&(e.style.zIndex=++et)}function l(){if(e){e.classList.add("open"),s(),window.addEventListener("resize",o),a&&setTimeout(a,10);return}let m=document.getElementById("windows-container");m||(m=document.createElement("div"),m.id="windows-container",m.className="windows-container",document.body.appendChild(m)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++et,e.addEventListener("mousedown",s);let b=t.icon||"bx-window",n="",f="",S;t.tabs&&t.tabs.length>0?(n=`<div class="tab-bar">${t.tabs.map((x,u)=>{let g=x.icon?`<i class="bx ${x.icon}"></i>`:`<span class="tab-glyph">${x.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${u===0?"active":""}" data-tab-index="${u}">
                        ${g}
                        <span class="tab-title">${x.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${u}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,S=`<div class="window-content">${t.tabs.map((x,u)=>`<div class="tab-content ${u===0?"active":""}" data-tab-content="${u}">${x.content}</div>`).join("")}</div>`):(t.title&&(f=`<div class="window-title">${t.title}</div>`),S=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${n}
                ${f}
                <i class="bx bx-x window-close"></i>
            </div>
            ${S}
        `,m.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",y=>{y.stopPropagation(),c()}),window.addEventListener("resize",o),t.tabs&&e.querySelectorAll(".tab").forEach(y=>{y.addEventListener("click",()=>{let r=y.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")),y.classList.add("active"),e.querySelectorAll(".tab-content").forEach(x=>x.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${r}"]`).classList.add("active"),v(y,e)})}),setTimeout(()=>{e.classList.add("open"),a&&a()},10)}function o(){if(!e||!e.classList.contains("open"))return;let m=e.querySelector(".tab.active");m&&v(m,e)}function v(m,b){setTimeout(()=>{let n=b.querySelector(".tab-bar");if(!n)return;let f=Array.from(n.querySelectorAll(".tab")),S=f.indexOf(m),y=n.clientWidth,r=f[Math.max(0,S-2)],x=f[Math.min(f.length-1,S+2)],u=r.offsetLeft-n.offsetLeft-25,d=x.offsetLeft+x.offsetWidth-n.offsetLeft+25-u,E=d<=y?u-(y-d)/2:m.offsetLeft-n.offsetLeft-y/2+m.offsetWidth/2;n.scrollTo({left:E,behavior:"smooth"})},350)}function c(m=!1){e&&(window.removeEventListener("resize",o),m?(e.remove(),e=null):(e.classList.remove("open"),i&&i(),setTimeout(()=>{e?.remove(),e=null},400)))}function p(m){let b=e?.querySelector(".window-content");b&&(b.innerHTML=m)}function h(){return e&&e.classList.contains("open")}return{open:l,close:c,setContent:p,isOpen:h,focus:s,id:t.id}}var tt="easter_theme",X={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function he(){return localStorage.getItem(tt)||X.DARK}function st(t){if(!Object.values(X).includes(t))throw new Error("Invalid theme");localStorage.setItem(tt,t),Se(t)}function Se(t){let e=document.body;if(Object.values(X).forEach(a=>{e.classList.remove(`theme-${a}`)}),e.classList.add(`theme-${t}`),!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}[X.LIGHT,X.LEGACY].includes(t)?e.classList.add("is-animated"):e.classList.remove("is-animated")}function it(){let t=he();Se(t)}function P(t,e,i=null){let s={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",l=i?`<p class="placeholder-action">${i}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${s} placeholder-icon'></i><p class="placeholder-message">${e}</p>${l}</div>`}function D(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function Z(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!i)return;if(!e){i.textContent="Last updated: never";return}let a=Date.now(),s=Math.floor((a-e)/1e3),l;s<60?l=`${s}s ago`:s<3600?l=`${Math.floor(s/60)}m ago`:l=`${Math.floor(s/3600)}h ago`,i.textContent=`Last updated: ${l}`}var qt=0;function we(t,e){let i=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!i)return;let a=i.querySelector(".notification-badge");a&&(e>0?(a.textContent=e>9?"9+":e,a.style.display="flex"):a.style.display="none")}var Q=0,ee=0;function at(t){Q=t,ve()}function ot(t){ee=t,ve()}function ve(){let t=Q+ee;qt=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let i=document.getElementById("alerts-menu-item");if(i){let o=i.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="auto",i.appendChild(o)),o.textContent=Q>9?"9+":Q,o.style.display=Q>0?"flex":"none"}let a=document.getElementById("workspace-menu-item");if(a){let o=a.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="auto",a.appendChild(o)),o.textContent=ee>9?"9+":ee,o.style.display=ee>0?"flex":"none"}let s=document.getElementById("switch-alerts");if(s){let o=s.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="8px",s.appendChild(o)),o.textContent=Q>9?"9+":Q,o.style.display=Q>0?"flex":"none"}let l=document.getElementById("switch-workspace");if(l){let o=l.querySelector(".notification-badge");o||(o=document.createElement("span"),o.className="notification-badge",o.style.marginLeft="8px",l.appendChild(o)),o.textContent=ee>9?"9+":ee,o.style.display=ee>0?"flex":"none"}}function Te(){let t=document.getElementById("alerts-list");if(!t)return;Q=t.querySelectorAll(".alert-unread:not(.priority-low)").length,ve()}function rt(){let t=document.getElementById("blueprints-list");if(!t)return;ee=t.querySelectorAll(".event-item:not(.blueprint-approved)").length,ve()}function jt(){return"https://event.easter.company"}function Ft(){return"https://discord.easter.company"}var Jt="http://127.0.0.1:8100",Gt="http://127.0.0.1:8300",Wt={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function Me(t){let e=D(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(s,l)=>{let o=Wt[l];return o?`<span class="${o}">`:""});let i=(e.match(/<span/g)||[]).length,a=(e.match(/<\/span/g)||[]).length;return i>a&&(e+="</span>".repeat(i-a)),e}function oe(t){if(!t)return"";let e=D(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(i,a)=>{let s=a.split("|").map(l=>l.trim());return s.every(l=>l.match(/^:?-+:?$/))?"":`<div class="md-table-row">${s.map(l=>`<span class="md-table-cell">${l}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var Vt="https://sterling-javelin-12539.upstash.io",Zt="AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw";function z(){return window.location.hostname==="easter.company"}var R=null,lt="dex_dashboard_snapshot";function Kt(){let t=localStorage.getItem(lt);if(t)try{R=JSON.parse(t)}catch{R=null}}async function nt(){if(!z())return;let t=await Qt("GET","state:dashboard:full");if(t)try{let e=JSON.parse(t);R=e,localStorage.setItem(lt,JSON.stringify(e))}catch(e){console.error("Failed to parse dashboard snapshot:",e)}}function Yt(){if(!R||!R.agent_status)return;let t=R.agent_status;typeof t.system_state_time=="number"&&(t.system_state_time+=1)}function Xt(){if(!z())return;Kt();let t=Date.now();(!R||t/1e3-R.timestamp>120)&&nt(),setInterval(()=>{new Date().getSeconds()===59&&nt(),Yt()},1e3)}z()&&Xt();async function Qt(t,...e){try{let a=await(await fetch(Vt,{method:"POST",headers:{Authorization:`Bearer ${Zt}`},body:JSON.stringify([t,...e])})).json();if(a.error)throw new Error(a.error);return a.result}catch(i){return console.error("Upstash Error:",i),null}}var ge=null,be=null,ke=!1,Le=!1;async function B(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t.startsWith("/system_monitor")||t.startsWith("/system/status"))return new Response(JSON.stringify(R.monitor),{status:200});if(t.startsWith("/processes"))return new Response(JSON.stringify(R.processes),{status:200});if(t.startsWith("/events")){let s=new URLSearchParams(t.split("?")[1]||""),l=s.get("type")||s.get("event.type"),o=s.get("category"),v=s.get("order")||"desc",c=[];return l==="system.notification.generated"?c=[...R.alerts||[]]:o==="messaging"?c=[...R.messaging_events||[]]:o==="system"?c=[...R.system_events||[]]:o==="cognitive"?c=[...R.cognitive_events||[]]:o==="moderation"?c=[...R.moderation_events||[]]:c=[...R.events||[]],v==="asc"?c.sort((p,h)=>p.timestamp-h.timestamp):c.sort((p,h)=>h.timestamp-p.timestamp),new Response(JSON.stringify({events:c,count:c.length}),{status:200})}if(t.startsWith("/logs"))return new Response(JSON.stringify([]),{status:200});if(t.startsWith("/system/hardware"))return new Response(JSON.stringify({}),{status:200});if(t.startsWith("/agent/status")||t.startsWith("/guardian/status"))return new Response(JSON.stringify(R.agent_status||{}),{status:200});if(t.startsWith("/profile/")){let s=t.split("/")[2],l=R.profiles?R.profiles[s]:null;return l?new Response(JSON.stringify(l),{status:200}):new Response(JSON.stringify({error:"Profile not found"}),{status:404})}return new Response(JSON.stringify({error:"Not available in public demo"}),{status:404})}if(ge)try{let s=await fetch(ge+t,e);if(s.ok)return s;ge=null}catch{ge=null}let i=jt(),a=Jt;try{let s=await fetch(i+t,e);if(s.ok)return ge=i,ke&&(console.log("\u2728 Production event service restored."),ke=!1),s;throw new Error("Primary failed")}catch{ke||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${a}`),ke=!0);try{let l=await fetch(a+t,e);if(l.ok)return ge=a,l;throw new Error("Fallback failed")}catch(l){throw l}}}async function Ae(t,e={}){if(z()){if(!R)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t==="/contacts")return new Response(JSON.stringify(R.contacts||{members:[]}),{status:200});if(t.startsWith("/member/")){let s=t.split("/")[2],l=(R.contacts?.members||[]).find(o=>o.id===s);return l?new Response(JSON.stringify(l),{status:200}):new Response(JSON.stringify({error:"Member not found"}),{status:404})}return new Response(JSON.stringify({error:"Discord API not public"}),{status:404})}if(be)try{let s=await fetch(be+t,e);if(s.ok)return s;be=null}catch{be=null}let i=Ft(),a=Gt;try{let s=await fetch(i+t,e);if(s.ok)return be=i,Le&&(console.log("\u2728 Production discord service restored."),Le=!1),s;throw new Error("Primary failed")}catch{Le||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${a}`),Le=!0);try{let l=await fetch(a+t,e);if(l.ok)return be=a,l;throw new Error("Fallback failed")}catch(l){throw l}}}var ct=()=>`
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
`,Ie=null,re=new Set,_e=[];async function ie(t=!1){let e=document.getElementById("alerts-list");if(!e)return;es(),t&&(e.innerHTML="<p>Updating...</p>");let i="/events?ml=1000&format=json&event.type=system.notification.generated";try{let a=await B(i);if(!a.ok)throw new Error("Service is offline or unreachable.");let l=(await a.json()).events||[];Ie=Date.now(),Z(0,Ie);let o=Date.now(),v=24*60*60*1e3,c=l.filter(u=>{let g=localStorage.getItem(`alert_read_ts_${u.id}`);if(!g)return!0;let d=parseInt(g);return o-d<v});c.sort((u,g)=>{let d=I=>{let w=I.event;if(typeof w=="string")try{w=JSON.parse(w)}catch{return"low"}return(w.priority||"low").toLowerCase()},E=I=>I==="critical"?4:I==="high"?3:I==="medium"?2:1,M=E(d(u)),A=E(d(g));return M!==A?A-M:g.timestamp-u.timestamp}),_e=c;let p=u=>{let g=u.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return"low"}return(g.priority||"low").toLowerCase()},h=[],b=new Set(c.map(u=>p(u))).size>1;if(c.length>0){let u=null;c.forEach(g=>{let d=p(g);b&&d!==u&&(h.push({id:`divider-${d}`,type:"divider",label:d.toUpperCase()}),u=d),h.push(g)})}if(t&&(e.innerHTML=""),c.length===0){e.innerHTML=P("empty","No alerts yet."),Te();return}let n=u=>{let g=u.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let d=(g.title||"Untitled Alert").trim(),E=(g.body||"No description provided.").trim(),M=g.summary||"",A=g.content||"",I=g.protocol||"",w=(g.priority||"low").toLowerCase(),H=!!g.alert,N=(g.category||"system").trim(),_=g.related_event_ids||[],O=g.audit_event_id,j=!!localStorage.getItem(`alert_read_ts_${u.id}`),k=new Date(u.timestamp*1e3),C=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),T=j?"event-border-grey":"event-border-blue";!j&&H&&(T="event-border-red"),j&&(w==="high"||w==="critical")?T="event-border-red":j&&w==="medium"&&(T="event-border-orange");let L=j?"alert-read":"alert-unread",q=re.has(u.id),F=q?"expanded":"",te=q?"display: block;":"display: none;",J="",G="";_.length>0&&(G=`
            <div style="flex: 1; min-width: 150px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    ${_.map(se=>`<a href="#" onclick="window.dexter.viewEvent('${se}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${se.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let K="";O&&(K=`
            <div style="flex: 1; min-width: 120px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Audit</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    <a href="#" onclick="window.dexter.viewEvent('${O}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3); white-space: nowrap;">${O.substring(0,8)}...</a>
                </div>
            </div>`);let ue="";I&&(ue=`
            <div style="flex: 1; min-width: 100px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${I}</div>
            </div>`);let Y="";A?Y=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="md-para" style="color: #ddd; font-size: 0.85em; white-space: pre-wrap; line-height: 1.6; text-align: left;">${oe(A)}</div>
            </div>
        `:Y=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="md-para" style="color: #fff; white-space: pre-wrap; line-height: 1.6; text-align: left;">${oe(E)}</div>
            </div>
        `,J=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${g.related_services&&g.related_services.length>0?g.related_services.join(", "):g.related||"SYSTEM"}</div>
                    </div>
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${N}</div>
                    </div>
                    ${ue}
                    ${K}
                    ${G}
                </div>

                ${Y}
            `;let V=document.createElement("div");V.className=`event-item notification-item ${T} ${L} ${F} cursor-pointer priority-${w}`,V.dataset.alertId=u.id,V.onclick=function(se){if(this.classList.contains("expanded")){this.classList.remove("expanded"),re.delete(u.id);let ye=this.querySelector(".event-details");ye&&(ye.style.display="none")}else{this.classList.add("expanded"),re.add(u.id);let ye=this.querySelector(".event-details");if(ye&&(ye.style.display="block"),!localStorage.getItem(`alert_read_ts_${u.id}`)){localStorage.setItem(`alert_read_ts_${u.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let He="event-border-grey";w==="high"||w==="critical"?He="event-border-red":w==="medium"&&(He="event-border-orange"),this.classList.add(He),Te()}}};let Ve=`${I?I.toUpperCase():"GUARDIAN"} ALERT: ${M||d}`,Ot={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[N]||"bx-bell",Ut=w==="high"||w==="critical"?"#ff4d4d":w==="medium"?"#ffa500":"#888";V.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${C}</span>
                    <span class="event-date">${$}</span>
                </div>
                <div class="event-icon"><i class='bx ${Ot}'></i></div>
                <div class="event-content" style="text-align: left;">
                    <div class="event-service">
                        DEXTER <span class="alert-badge" style="color: ${Ut}; font-size: 0.8em; margin-left: 5px;">[${w.toUpperCase()}]</span>
                    </div>
                    <div class="event-message">${oe(Ve)}</div>
                    <div class="event-details" style="${te}">
                        ${J}
                    </div>
                </div>
            `;let Ze=V.querySelector(".event-details");Ze&&Ze.addEventListener("click",se=>{se.stopPropagation()});let Ke=V.querySelector(".close-details-btn");return Ke&&Ke.addEventListener("click",se=>{se.stopPropagation(),V.classList.remove("expanded");let Ne=V.querySelector(".event-details");Ne&&(Ne.style.display="none"),re.delete(u.id)}),V},f=u=>{let g=document.createElement("div");g.className="notification-divider",g.dataset.alertId=u.id;let d="#888888";return u.label==="CRITICAL"?d="#ff4d4d":u.label==="HIGH"?d="#ff8888":u.label==="MEDIUM"&&(d="#ffa500"),g.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${d}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,g.innerHTML=`<span style="white-space: nowrap;">${u.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${d}44, transparent); flex-grow: 1;"></div>`,g},S=Array.from(e.children),y=new Map(S.map(u=>[u.dataset.alertId,u])),r=new Set(h.map(u=>u.id));S.forEach(u=>{let g=u.dataset.alertId;(!g||!r.has(g))&&u.remove()});let x=null;h.forEach((u,g)=>{let d=y.get(u.id);(!d||t)&&(d&&d.remove(),u.type==="divider"?d=f(u):d=n(u),!d)||(g===0?e.firstElementChild!==d&&e.prepend(d):x&&x.nextElementSibling!==d&&x.after(d),x=d)}),Ie=Date.now(),Z(0,Ie),Te()}catch(a){console.error("Error fetching alerts:",a),e.children.length===0&&(e.innerHTML=P("offline","Failed to load alerts.","The event service may be offline."))}}function es(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),i=document.getElementById("alerts-close-all"),a=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{_e.forEach(s=>{localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),ie(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{_e.forEach(s=>{re.add(s.id),localStorage.getItem(`alert_read_ts_${s.id}`)||localStorage.setItem(`alert_read_ts_${s.id}`,Date.now().toString())}),ie(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{re.clear(),ie(!0)},i.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await B("/events?type=system.notification.generated",{method:"DELETE"});let s=Date.now()-48*60*60*1e3;_e.forEach(l=>{localStorage.setItem(`alert_read_ts_${l.id}`,s.toString())}),re.clear(),ie(!0)}catch(s){console.error("Failed to clear alerts:",s)}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}async function Pe(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await B(t);if(!e.ok)return;let a=(await e.json()).events||[],s=0;a.forEach(l=>{let o=l.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{o={}}if((o.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${l.id}`)||s++}),at(s)}catch{}}var dt=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${z()?"display: none;":""}" title="New Idea"><i class='bx bx-plus'></i></button>
    <button id="roadmap-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
    <button id="roadmap-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
  </div>
`,pt=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,le=new Set,Be=[],xe=null;async function ce(t=!1){let e=document.getElementById("roadmap-list");if(e){ts();try{let i=await B("/roadmap");if(!i.ok)throw new Error("Offline");let a=await i.json();Be=a;let s=p=>{let h=le.has(p.id),m=p.state==="published",b=p.state==="consumed",n="event-border-grey";m&&(n="event-border-blue"),b&&(n="event-border-purple");let S=new Date(p.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),y=document.createElement("div");y.className=`event-item notification-item ${n} cursor-pointer ${h?"expanded":""}`,y.dataset.itemId=p.id,y.onclick=u=>{if(u.target.closest("button"))return;y.classList.contains("expanded")?(y.classList.remove("expanded"),y.querySelector(".event-details").style.display="none",le.delete(p.id)):(y.classList.add("expanded"),y.querySelector(".event-details").style.display="block",le.add(p.id))};let r=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${p.state.toUpperCase()}]</span>`;y.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${S.split(",")[1]}</span>
          <span class="event-date">${S.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${r}</div>
          <div class="event-message" style="white-space: pre-wrap;">${D(p.content)}</div>
          <div class="event-details" style="${h?"display: block;":"display: none;"} ">
            ${z()?"":`
            <div class="event-details-header" style="margin-bottom: 15px;">
              <h5 style="margin: 0; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Item Controls</h5>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${b?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${m?"bx-pause":"bx-rocket"}'></i> ${m?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            `}
            ${b?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(p.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let x=y.querySelector(".event-details");return x&&x.addEventListener("click",u=>{u.stopPropagation()}),y.querySelector(".edit-btn")?.addEventListener("click",()=>ss(p)),y.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>is(p)),y.querySelector(".delete-btn")?.addEventListener("click",()=>ns(p.id)),y.querySelector(".close-details-btn")?.addEventListener("click",u=>{u.stopPropagation(),y.classList.remove("expanded"),y.querySelector(".event-details").style.display="none",le.delete(p.id)}),y},l=Array.from(e.children),o=new Map(l.map(p=>[p.dataset.itemId,p])),v=new Set(a.map(p=>p.id));if(l.forEach(p=>{let h=p.dataset.itemId;(!h||!v.has(h))&&p.remove()}),!Be||Be.length===0){e.innerHTML=P("empty","Your roadmap is empty.",z()?"Dexter is currently idle.":`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let c=null;a.forEach((p,h)=>{let m=o.get(p.id);(!m||t)&&(m&&m.remove(),m=s(p),!m)||(h===0?e.firstElementChild!==m&&e.prepend(m):c&&c.nextElementSibling!==m&&c.after(m),c=m)})}catch{e.children.length===0&&(e.innerHTML=P("offline","Failed to load roadmap.","The event service may be offline."))}}}function ts(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),i=document.getElementById("roadmap-cancel"),a=document.getElementById("roadmap-expand-all"),s=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{xe=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",xe=null},i.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let l=document.getElementById("roadmap-editor-input").value;if(!l.trim())return;let o=xe?`/roadmap/${xe}`:"/roadmap",v=xe?"PATCH":"POST";try{await B(o,{method:v,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:l})}),document.getElementById("roadmap-editor-container").style.display="none",ce(!0)}catch(c){console.error(c)}},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{Be.forEach(l=>le.add(l.id)),ce(!0)},a.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{le.clear(),ce(!0)},s.dataset.listenerAttached="true")}function ss(t){xe=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function is(t){let e=t.state==="published"?"draft":"published";try{await B(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),ce(!0)}catch(i){console.error(i)}}async function ns(t){if(confirm("Delete this roadmap item?"))try{await B(`/roadmap/${t}`,{method:"DELETE"}),le.delete(t),ce(!0)}catch(e){console.error(e)}}var ut=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
        <button id="blueprints-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
        <button id="blueprints-clear" class="notif-action-btn danger" style="${z()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
    </div>
`,ft=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,mt=null,de=new Set,gt=[];async function pe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;as();let i="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let a=await B(i);if(!a.ok)throw new Error("Service is offline or unreachable.");let l=(await a.json()).events||[];if(gt=l,mt=Date.now(),Z(2,mt),l.length===0){e.innerHTML=P("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),we(2,0);return}t&&(e.innerHTML="");let o=m=>{let b=m.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return null}let n=(b.title||"Untitled Blueprint").trim(),f=(b.summary||b.body||"No summary provided.").trim(),S=(b.content||"").trim(),y=(b.category||"architecture").trim(),r=(b.related_services||b.affected_services||[]).map(L=>L.trim()),x=(b.implementation_path||[]).map(L=>L.trim()),u=b.source_event_ids||[],g=b.approved===!0,d=new Date(m.timestamp*1e3),E=d.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),M=d.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),A=de.has(m.id),I=A?"display: block;":"display: none;",w=document.createElement("div");w.className=`event-item notification-item event-border-purple cursor-pointer ${A?"expanded":""} ${g?"blueprint-approved":""}`,w.dataset.blueprintId=m.id,g&&(w.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",w.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let N=g?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[y]||"bx-paint";w.onclick=function(L){if(this.classList.contains("expanded")){this.classList.remove("expanded"),de.delete(m.id);let F=this.querySelector(".event-details");F&&(F.style.display="none")}else{this.classList.add("expanded"),de.add(m.id);let F=this.querySelector(".event-details");F&&(F.style.display="block")}};let _="";x.length>0&&(_=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${x.map(L=>`<li style="margin-bottom: 5px;">${D(L)}</li>`).join("")}</ul></div>
                    </div>
                `);let O="";u.length>0&&(O=`
                    <div class="blueprint-source" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Source Alerts</h5>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${u.map(L=>`
                                <a href="#" onclick="window.dexter.viewEvent('${L}'); return false;" style="color: #03dac6; text-decoration: none; font-size: 0.75em; font-family: 'JetBrains Mono', monospace; padding: 4px 8px; background: rgba(3, 218, 198, 0.05); border: 1px solid rgba(3, 218, 198, 0.1); border-radius: 4px;">
                                    <i class='bx bx-link-external'></i> ${L.substring(0,8)}...
                                </a>
                            `).join("")}
                        </div>
                    </div>
                `);let U=r.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${r.join(", ")}</span></div>`:"<div></div>",j=g?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${U}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${U}
                    <div style="display: flex; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;w.innerHTML=`
                ${g?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${E}</span>
                    <span class="event-date">${M}</span>
                </div>
                <div class="event-icon" style="${g?"color: #03dac6;":""}"><i class='bx ${N}'></i></div>
                <div class="event-content">
                    <div class="event-service">${y.toUpperCase()}</div>
                    <div class="event-message">${n}</div>
                    <div class="event-details" style="${I}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px;">${D(f)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${D(S)}</div>
                        </div>
                        ${_}
                        ${O}
                        ${j}
                    </div>
                </div>
            `;let k=w.querySelector(".blueprint-approve-btn");k&&(k.onclick=async L=>{L.stopPropagation(),k.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await B(`/events/${m.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&pe(!0)}catch(q){console.error("Failed to approve blueprint:",q)}});let C=w.querySelector(".blueprint-delete-btn");C&&(C.onclick=async L=>{L.stopPropagation();let q=!g;C.innerHTML=q?"<i class='bx bx-loader-alt spin'></i> Declining...":"<i class='bx bx-loader-alt spin'></i> Deleting...";try{(await B(`/events/${m.id}`,{method:"DELETE"})).ok&&pe(!0)}catch(F){console.error("Failed to delete blueprint:",F)}});let $=w.querySelector(".event-details");$&&$.addEventListener("click",L=>{L.stopPropagation()});let T=w.querySelector(".close-details-btn");return T&&T.addEventListener("click",L=>{L.stopPropagation(),w.classList.remove("expanded");let q=w.querySelector(".event-details");q&&(q.style.display="none"),de.delete(m.id)}),w},v=Array.from(e.children),c=new Map(v.map(m=>[m.dataset.blueprintId,m])),p=new Set(l.map(m=>m.id));v.forEach(m=>{let b=m.dataset.blueprintId;(!b||!p.has(b))&&m.remove()});let h=null;l.forEach((m,b)=>{let n=c.get(m.id);(!n||t)&&(n&&n.remove(),n=o(m),!n)||(b===0?e.firstElementChild!==n&&e.prepend(n):h&&h.nextElementSibling!==n&&h.after(n),h=n)}),we(2,l.length),rt()}catch(a){console.error("Error fetching blueprints:",a),e.children.length===0&&(e.innerHTML=P("offline","Failed to load blueprints.","The event service may be offline."))}}async function bt(){let t="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let e=await B(t);if(!e.ok)return;let a=(await e.json()).events||[],s=0;a.forEach(l=>{let o=l.event;if(typeof o=="string")try{o=JSON.parse(o)}catch{o={}}o.approved!==!0&&s++}),ot(s)}catch{}}function as(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),i=document.getElementById("blueprints-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{gt.forEach(a=>de.add(a.id)),pe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{de.clear(),pe(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{if(confirm("Are you sure you want to delete all UNAPPROVED blueprints?")){i.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await B("/events?type=system.blueprint.generated",{method:"DELETE"}),de.clear(),pe(!0)}catch(a){console.error("Failed to clear blueprints:",a)}finally{i.innerHTML="<i class='bx bx-trash'></i> Clear"}}},i.dataset.listenerAttached="true")}var vt=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${dt()}
            </div>
            ${pt()}
        </div>

        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${ut()}
            </div>
            ${ft()}
        </div>
    </div>
`;async function Re(){await Promise.all([ce(),pe()])}var os=`
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
`;function xt(t,e){return{...t==="313071000877137920"?{techLevel:11,commStyle:"Direct / Efficient",patience:"Infinite",vibe:"Architect",facts:[{k:"Role",v:"Creator"},{k:"Lang",v:"Go"},{k:"OS",v:"Linux"},{k:"Editor",v:"Neovim"}],badges:["Creator","Admin","Architect"],stats:{msgs:14052,tokens:"45.2M",lastSeen:"Now"},topics:[{name:"System Architecture",val:85},{name:"Code Review",val:60},{name:"Music / Vibes",val:30},{name:"Debugging",val:45}],traits:{openness:95,conscientiousness:90,extraversion:40,agreeableness:60,neuroticism:15},dossier:{identity:{fullName:"Owen Easter",ageRange:"25-30",gender:"Male",location:"United Kingdom",sexuality:"Heterosexual",relationship:"Single"},career:{jobTitle:"Founder / Systems Architect",company:"Easter Company",skills:["Go","Distributed Systems","AI Integration"]},personal:{hobbies:["Synthwave Production","Coding","Gaming"],habits:["Late Night Coding","Coffee Consumption","System Optimization"],vices:["Perfectionism"],virtues:["Efficiency","Vision"]},social:[{name:"Dexter",relation:"Creation / AI",trust:"100%"},{name:"Sarah",relation:"Close Friend",trust:"95%"},{name:"Mike",relation:"Developer Peer",trust:"88%"}]}}:{techLevel:[2,4,6,8,3,5][Math.floor(Math.random()*6)],commStyle:["Verbose","Casual","Formal","Chaotic","Inquisitive"][Math.floor(Math.random()*5)],patience:Math.random()>.5?"High":"Medium",vibe:["NPC","Guest","Lurker","Regular","Fan"][Math.floor(Math.random()*5)],facts:[{k:"Role",v:"User"},{k:"Interest",v:Math.random()>.5?"Coding":"Gaming"}],badges:["User"],stats:{msgs:Math.floor(Math.random()*500),tokens:Math.floor(Math.random()*100)+"K",lastSeen:Math.floor(Math.random()*24)+"h ago"},topics:[{name:"General Chat",val:80},{name:"Troubleshooting",val:40},{name:"Off-Topic",val:20}],traits:{openness:Math.floor(Math.random()*100),conscientiousness:Math.floor(Math.random()*100),extraversion:Math.floor(Math.random()*100),agreeableness:Math.floor(Math.random()*100),neuroticism:Math.floor(Math.random()*100)},dossier:{identity:{fullName:"Unknown Subject",ageRange:"Unknown",gender:"Unknown",location:"Global",sexuality:"Unknown",relationship:"Unknown"},career:{jobTitle:"Unknown",company:"Unknown",skills:["General User"]},personal:{hobbies:["Lurking","Chatting"],habits:["Unknown"],vices:["None Observed"],virtues:["None Observed"]},social:[]}},id:t,username:e}}function yt(t){if(!document.getElementById("dex-profile-styles")){let i=document.createElement("style");i.id="dex-profile-styles",i.textContent=os,document.head.appendChild(i)}let e=document.createElement("div");e.className="profile-overlay",e.innerHTML=`
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `,e.addEventListener("click",i=>{i.target===e&&(e.classList.remove("active"),setTimeout(()=>e.remove(),300))}),document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),Ae(`/profile/${t.id}`).then(async i=>{if(i.ok){let a=await i.json();Oe(e,t,a)}else{console.log("Profile not found or error, using mock data.");let a=xt(t.id,t.username);Oe(e,t,a)}}).catch(i=>{console.error("Profile fetch error:",i);let a=xt(t.id,t.username);Oe(e,t,a)})}function Oe(t,e,i){let a=e.status==="online"?"#03dac6":e.status==="idle"?"#ffb74d":"#cf6679",s=()=>{let S=(i.badges||[]).map(E=>`<span class="profile-badge ${E==="Creator"?"master":""}">${E}</span>`).join(""),y=(i.attributes||i.facts||[]).map(E=>{let M=E.key||E.k,A=E.value||E.v;return`
            <div class="fact-chip">
                <span class="fact-key">${M}:</span>
                <span class="fact-val">${A}</span>
            </div>
        `}).join(""),r=i.cognitive_model||i,x=r.technical_level||r.techLevel||0,u=r.communication_style||r.commStyle||"Unknown",g=r.patience_level||r.patience||"Unknown",d=r.vibe||"Unknown";return`
            <div class="overview-grid">
                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-brain'></i> Cognitive Model</div>
                    
                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Technical Level</span>
                            <span>${x}/10</span>
                        </div>
                        <div class="cog-bar-bg">
                            <div class="cog-bar-fill" style="width: ${Math.min(x*10,100)}%;"></div>
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
                            <span>${g}</span>
                        </div>
                    </div>

                     <div class="cog-metric">
                        <div class="cog-label">
                            <span>Vibe Check</span>
                            <span style="font-family: 'JetBrains Mono'; color: #bb86fc;">${d}</span>
                        </div>
                    </div>
                </div>

                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-purchase-tag-alt'></i> Fact Bank</div>
                    <div class="fact-grid">
                        ${y}
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px; font-size: 0.9em; color: #888; font-style: italic;">
                        <i class='bx bx-info-circle'></i> Dexter automatically extracts these facts from conversation context to personalize future interactions.
                    </div>
                </div>
            </div>
        `},l=()=>{let S=i.dossier||{},y=S.identity||{},r=S.career||{},x=S.personal||{},u=S.social||[];return`
            <div class="dossier-grid">
                <!-- Identity Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-id-card'></i> Identity</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Full Name</div>
                        <div class="dossier-value">${y.fullName||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Age Range</div>
                        <div class="dossier-value">${y.ageRange||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                        
                        <div class="dossier-label">Location</div>
                        <div class="dossier-value">${y.location||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Gender</div>
                        <div class="dossier-value">${y.gender||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Sexuality</div>
                        <div class="dossier-value" style="color: #ffb74d;">${y.sexuality||"Unknown"}</div>
                        <div style="height: 15px;"></div>

                        <div class="dossier-label">Relationship Status</div>
                        <div class="dossier-value">${y.relationship||"Unknown"}</div>
                    </div>
                    
                    <div class="profile-section-title" style="margin-top: 30px;"><i class='bx bx-briefcase'></i> Career</div>
                    <div class="dossier-item">
                        <div class="dossier-label">Current Role</div>
                        <div class="dossier-value">${r.jobTitle||"Unknown"}</div>
                        <div style="font-size: 0.8em; color: #888; margin-top: 2px;">@ ${r.company||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                         <div class="dossier-label">Key Skills</div>
                         <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            ${(r.skills||[]).map(g=>`<span style="font-size: 0.75em; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${g}</span>`).join("")}
                         </div>
                    </div>
                </div>

                <!-- Personal Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-home-heart'></i> Personal Life</div>
                    
                    <div class="dossier-item">
                        <div class="dossier-label"><i class='bx bx-joystick'></i> Hobbies</div>
                        <div style="margin-top: 10px;">
                            ${(x.hobbies||[]).map(g=>`<div class="dossier-list-item">${g}</div>`).join("")}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(x.habits||[]).map(g=>`<div class="dossier-list-item">${g}</div>`).join("")}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(x.vices||[]).map(g=>`<div class="dossier-list-item" style="color: #cf6679;">${g}</div>`).join("")}
                        </div>
                    </div>
                </div>

                <!-- Social Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-network-chart'></i> Known Associates</div>
                    <div class="dossier-item" style="background: none; border: none; padding: 0;">
                        ${u.length>0?u.map(g=>`
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
        `},o=()=>{let S=i.traits||{};return`
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(S).map(([y,r])=>`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${r}%; background: ${r>50?"#03dac6":"#cf6679"}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${y.substring(0,4)}</div>
                    <div style="font-family: monospace;">${r}%</div>
                </div>
            `).join("")}
        </div>
        <div style="margin-top: 40px;">
            <div class="profile-section-title"><i class='bx bx-message-square-detail'></i> Sentiment History</div>
            <div style="height: 100px; border-bottom: 1px solid #333; display: flex; align-items: flex-end; gap: 5px; padding-bottom: 5px;">
                ${Array.from({length:40}).map(()=>{let y=Math.floor(Math.random()*80)+10;return`<div style="flex: 1; background: ${Math.random()>.7?"#cf6679":Math.random()>.5?"#03dac6":"#444"}; height: ${y}%; border-radius: 2px;"></div>`}).join("")}
            </div>
            <div style="font-family: monospace; color: #666; font-size: 0.7em; margin-top: 5px; display: flex; justify-content: space-between;">
                <span>30 Days Ago</span>
                <span>Today</span>
            </div>
        </div>
    `},v=()=>`
        <div class="profile-section-title"><i class='bx bx-map-alt'></i> Conversation Topics</div>
        <div style="margin-top: 20px;">
            ${(i.topics||[]).map(S=>`
                <div class="topic-bar">
                    <div class="topic-header">
                        <span style="color: #eee;">${S.name}</span>
                        <span style="color: #bb86fc;">${S.val}%</span>
                    </div>
                    <div class="topic-track">
                        <div class="topic-fill" style="width: ${S.val}%"></div>
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
                    <div class="profile-status-dot" style="background: ${a}"></div>
                </div>
                <div class="profile-identity">
                    <h2>${D(e.username)}</h2>
                    <div class="profile-badges">${(i.badges||[]).map(S=>`<span class="profile-badge ${S==="Creator"?"master":""}">${S}</span>`).join("")}</div>
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
                <div id="tab-dossier" class="tab-content">${l()}</div>
                <div id="tab-psychometrics" class="tab-content">${o()}</div>
                <div id="tab-topics" class="tab-content">${v()}</div>
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
    `;t.innerHTML=p;let h=t.querySelector(".profile-card"),m=t.querySelector("#profile-expand-toggle"),b=t.querySelectorAll(".profile-tab-btn"),n=t.querySelectorAll(".tab-content");t.querySelector(".close-profile-btn").addEventListener("click",()=>{t.classList.remove("active"),setTimeout(()=>t.remove(),300)}),b.forEach(S=>{S.addEventListener("click",()=>{b.forEach(y=>y.classList.remove("active")),n.forEach(y=>y.classList.remove("active")),S.classList.add("active"),t.querySelector(`#tab-${S.dataset.tab}`).classList.add("active")})}),m.addEventListener("click",()=>{h.classList.toggle("expanded");let S=h.classList.contains("expanded");m.innerHTML=S?"<i class='bx bx-collapse-alt'></i> Collapse View":"<i class='bx bx-expand-alt'></i> Detailed Analysis"})}var ht=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto; ${z()?"display: none;":""}" title="Refresh Contacts"><i class='bx bx-refresh'></i></button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,rs=null;async function Ue(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await Ue(),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),t.dataset.listenerAttached||(t.onclick=i=>{let a=i.target.closest(".user-profile-card");if(a)try{let s=JSON.parse(a.dataset.user);yt(s)}catch(s){console.error("Failed to parse user data",s)}},t.dataset.listenerAttached="true");try{let i=await Ae("/contacts");if(!i.ok)throw new Error("Service unreachable");let s=(await i.json()).members||[];if(rs=Date.now(),s.length===0){t.innerHTML=P("empty","No contacts found.","Check your Discord connection.");return}let l={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};s.sort((o,v)=>{let c=l[o.level]??10,p=l[v.level]??10;return c!==p?c-p:o.username.localeCompare(v.username)}),t.innerHTML=s.map(o=>{let v=o.color?"#"+o.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",c=o.status==="online"?"#5eff5e":o.status==="idle"?"#ffa500":o.status==="dnd"?"#ff4d4d":"#666",p="#888";o.level==="Me"||o.level==="Master"?p="#bb86fc":o.level==="Admin"?p="#cf6679":o.level==="Moderator"?p="#03dac6":o.level==="Contributor"&&(p="#ffa500");let h=o.level==="Me",m=h?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",b=h?"2px solid #bb86fc":`1px solid ${v}33`;return`
                <div class="user-profile-card" 
                     data-user="${JSON.stringify(o).replace(/"/g,"&quot;")}"
                     style="background: ${m}; padding: 15px; border-radius: 8px; border: ${b}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; cursor: pointer; transition: transform 0.2s, background 0.2s;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${h?"#bb86fc":v}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${o.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${h?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${c}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${o.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${p}; font-weight: 600; text-transform: uppercase;">${h?"DEXTER (ME)":o.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${o.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=P("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var ls={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","analysis.user.message_signals":"Analyzed Signals for User {user_id}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Guardian Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function wt(t,e){let i=ls[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(i="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(i=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(i=`Guardian Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!i)return t;let a=i.replace(/\{(\w+)\}/g,(s,l)=>e[l]!==void 0&&e[l]!==null?e[l]:s);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(a+=` (Translation: ${e.english_translation})`),a}var qe=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn ${W==="all"?"active":""}" data-filter="all" title="All Events"><i class='bx bx-list-ul'></i></button>
            <button class="notif-action-btn filter-btn ${W==="messaging"?"active":""}" data-filter="messaging" title="Messaging"><i class='bx bx-message-square-detail'></i></button>
            <button class="notif-action-btn filter-btn ${W==="system"?"active":""}" data-filter="system" title="System"><i class='bx bx-cog'></i></button>
            <button class="notif-action-btn filter-btn ${W==="cognitive"?"active":""}" data-filter="cognitive" title="Cognitive"><i class='bx bx-brain'></i></button>
            <button class="notif-action-btn filter-btn ${W==="moderation"?"active":""}" data-filter="moderation" title="Moderation"><i class='bx bx-shield-quarter'></i></button>
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
`,De=null,me=new Set,Ce=[],W="all",cs={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision","analysis.user.message_signals"],moderation:["moderation.explicit_content.deleted"]},ds={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","analysis.user.message_signals":"bx-pulse","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function ps(t){for(let[e,i]of Object.entries(cs))if(i.includes(t))return e;return"system"}function ms(t){return ds[t]||"bx-square-rounded"}async function ne(t=!1){let e=document.getElementById("events-timeline");if(!e)return;us();let a=`/events?ml=${W==="all"?100:250}&format=json`;W!=="all"&&(a+=`&category=${W}`);try{let s=await B(a);if(!s.ok)throw new Error("Service unreachable");if(Ce=((await s.json()).events||[]).filter(b=>{let n=b.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return!0}let f=n.type;return!(f==="system.blueprint.generated"||f==="system.notification.generated")}),De=Date.now(),Z(1,De),Ce.length===0){e.innerHTML=P("empty","No events found for this filter.");return}t&&(e.innerHTML="");let v=b=>{let n=b.event;if(typeof n=="string")try{n=JSON.parse(n)}catch{return null}let f=n.type,S=ps(f),y=ms(f),r=f==="engagement.decision"||f==="messaging.bot.sent_message"||f==="messaging.user.sent_message"||f==="moderation.explicit_content.deleted"||f==="analysis.link.completed"||f==="analysis.visual.completed"||f==="analysis.router.decision"||f==="analysis.user.message_signals"||f==="system.cli.command"||f==="system.analysis.audit"||f==="system.test.completed"||f==="error_occurred"||f==="system.cli.status"||f==="system.attention.expired"||f.startsWith("system.roadmap")||f.startsWith("system.process"),x="event-border-grey";r&&(f==="moderation.explicit_content.deleted"||f==="error_occurred"?x="event-border-red":f==="analysis.link.completed"||f==="analysis.visual.completed"||f==="analysis.router.decision"||f==="system.analysis.audit"||f==="analysis.user.message_signals"?x="event-border-purple":f==="system.attention.expired"||f==="system.cli.command"||f==="system.cli.status"?x="event-border-orange":f==="system.test.completed"?x=n.test?.status==="OK"&&n.lint?.status==="OK"&&n.format?.status==="OK"?"event-border-blue":"event-border-red":x="event-border-blue");let u=r?"cursor-pointer":"",g=me.has(b.id),d=g?"expanded":"",E=g?"display: block;":"display: none;",M=new Date(b.timestamp*1e3),A=M.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),I=M.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),w=wt(f,n),H=n.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${n.user_level})</span>`:"",N="";if(r){let k="";if(f==="engagement.decision"){let C=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${n.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${C("Input Decision")}
                            <pre class="detail-pre">${n.input_decision||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${C("Context History")}
                            <pre class="detail-pre">${n.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${C("Raw Engagement Output")}
                            <pre class="detail-pre">${n.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(f==="system.attention.expired"){let C=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`,$=n.timestamp-n.last_active,T=Math.floor($/60);k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${n.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${T} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${C("Context (Last Input)")}
                            <div class="detail-pre">${oe(n.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${C("Thought Process (Last Output)")}
                            <div class="detail-pre">${oe(n.last_output||"None")}</div>
                        </div>
                    `}else if(f==="messaging.bot.sent_message"){let C=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`,$="";n.eval_count&&($=`
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
                        `);let T="";if(n.chat_history&&n.chat_history.length>0){let L=n.chat_history.length,q=n.chat_history.map((F,te)=>{let J=F.role.toUpperCase();J==="ASSISTANT"&&(J="DEXTER");let G=F.role==="user"?"#03dac6":F.role==="system"?"#ffb74d":"#bb86fc",K=te===L-1?"block":"none";return`
                                <div class="history-slide" data-index="${te}" style="display: ${K};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${G}; letter-spacing: 1px; font-weight: bold;">${J}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${te+1} of ${L}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${D(F.content)}</div>
                                </div>
                            `}).join("");T=`
                            <div class="event-detail-block">
                                ${C("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${q}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}k=`
                        ${$}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${n.response_model||"N/A"}</span>
                        </div>
                        ${T||`
                            <div class="event-detail-block">
                                ${C("Raw Input (Prompt)")}
                                <pre class="detail-pre">${n.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${C("Raw Response Output")}
                                <pre class="detail-pre">${n.response_raw||"None"}</pre>
                            </div>
                        `}
                    `}else if(f==="analysis.user.message_signals"){let C=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`,$=n.signals||{};k=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Sentiment</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${$.sentiment>.3?"#03dac6":$.sentiment<-.3?"#cf6679":"#aaa"}; font-weight: bold;">${$.sentiment?.toFixed(2)||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Intent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: uppercase;">${$.intent||"N/A"}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tech Depth</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${$.technical_depth||0}/10</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Mood</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${$.mood||"N/A"}</div>
                            </div>
                        </div>
                        <div class="event-detail-block">
                            ${C("Extracted Topics")}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${($.topics||[]).map(L=>`<span class="profile-badge">${L}</span>`).join("")||'<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${C("Raw Model Output")}
                            <pre class="detail-pre">${D(n.raw_output)||"None"}</pre>
                        </div>
                    `}else if(f==="moderation.explicit_content.deleted"){let C=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${n.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${C("Raw Model Output")}
                            <pre class="detail-pre">${D(n.raw_output)||"None"}</pre>
                        </div>
                    `}else if(f==="analysis.link.completed"){let C=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${n.url}" target="_blank" class="attachment-link">${n.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${D(n.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${C("Description")}
                            <pre class="detail-pre">${D(n.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${C("Content Summary")}
                            <pre class="detail-pre">${D(n.summary)||"None"}</pre>
                        </div>
                    `}else if(f==="analysis.visual.completed"){let C=T=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${T}</h5>`,$="";n.base64_preview?$=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${n.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:n.url&&($=`<div class="event-detail-block"><img src="${n.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${n.filename}</span>
                        </div>
                        ${$}
                        <div class="event-detail-block">
                            ${C("Visual Description")}
                            <pre class="detail-pre">${D(n.description)||"None"}</pre>
                        </div>
                    `}else if(f==="analysis.router.decision"){let C=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
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
                            ${C("Raw Model Output")}
                            <pre class="detail-pre">${D(n.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${C("Input Context")}
                            <pre class="detail-pre">${D(n.raw_input)||"None"}</pre>
                        </div>
                    `}else if(f==="system.cli.command"){let C=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
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
                            ${C("Output")}
                            <pre class="detail-pre">${D(n.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(f==="system.analysis.audit"){let C=n.success?"#03dac6":"#ff4d4d",$=n.success?"SUCCESS":"FAILED",T=J=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${J}</h5>`,L="";n.error&&(L=`
                            <div class="event-detail-block">
                                ${T("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${D(n.error)}</pre>
                            </div>
                        `);let q="";if(n.chat_history&&n.chat_history.length>0){let J=n.chat_history.length,G=n.chat_history.map((K,ue)=>{let Y=K.role.toUpperCase();Y==="USER"&&(Y="SYSTEM"),Y==="ASSISTANT"&&(Y="AGENT");let V=K.role==="user"?"#03dac6":K.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${ue}" style="display: ${ue===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${V}; letter-spacing: 1px; font-weight: bold;">${Y}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${ue+1} of ${J}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${D(K.content)}</div>
                                </div>
                            `}).join("");q=`
                            <div class="event-detail-block">
                                ${T("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${G}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${J<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let F="";if(n.corrections&&n.corrections.length>0){let J=n.corrections.map((G,K)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${G.type}] ${G.guidance}</div>
                                ${G.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${D(G.snippet)}</div>`:""}
                            </div>
                        `).join("");F=`
                            <div class="event-detail-block">
                                ${T(`Corrections (${n.corrections.length})`)}
                                ${J}
                            </div>
                        `}let te="";if(n.parsed_results&&n.parsed_results.length>0){let J=n.parsed_results.map(G=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${D(G.title)}</div>
                                <div style="color: #ddd;">${D(G.summary)}</div>
                            </div>
                        `).join("");te=`
                            <div class="event-detail-block">
                                ${T("Parsed Results")}
                                ${J}
                            </div>
                        `}k=`
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
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${C}; font-weight: bold;">${$} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${n.attempts} att)</span></div>
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
                        ${L}
                        ${te}
                        ${F}
                        ${q}
                    `}else if(f==="system.test.completed"){let C=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${n.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${n.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${C("Format")}
                            <pre class="detail-pre">${n.format?.status||"N/A"}: ${n.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${C("Lint")}
                            <pre class="detail-pre">${n.lint?.status||"N/A"}: ${n.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${C("Tests")}
                            <pre class="detail-pre">${n.test?.status||"N/A"}: ${n.test?.details||n.test?.message||"OK"}</pre>
                        </div>
                    `}else if(f==="error_occurred"){let C=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${n.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${C("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${D(n.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${C("Context")}
                            <pre class="detail-pre">${JSON.stringify(n.context||{},null,2)}</pre>
                        </div>
                    `}else if(f==="system.cli.status"){let C=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${n.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${C("Message")}
                            <pre class="detail-pre">${D(n.message)}</pre>
                        </div>
                    `}else if(f==="messaging.user.sent_message"){let C="";n.attachments&&n.attachments.length>0&&(C=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${n.attachments.map(T=>{let L=T.content_type&&T.content_type.startsWith("image/"),q=(T.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${L?`<div class="attachment-thumb-container"><img src="${T.url}" alt="${T.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${T.url}" target="_blank" class="attachment-link">${T.filename}</a>
                                        <span class="attachment-meta">${T.content_type} \u2022 ${q}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${n.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${n.content||"(empty)"}</pre>
                        </div>
                        ${C}
                    `}N=`
                    <div class="event-details" style="${E}">
                        ${k}
                    </div>
                `}let _=document.createElement("div");_.className=`event-item ${x} ${u} ${d}`,_.dataset.eventId=b.id,_.onclick=function(k){if(!r)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),me.delete(b.id);let $=this.querySelector(".event-details");$&&($.style.display="none")}else{this.classList.add("expanded"),me.add(b.id);let $=this.querySelector(".event-details");$&&($.style.display="block")}},_.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${A}</span>
                    <span class="event-date">${I}</span>
                </div>
                <div class="event-icon"><i class='bx ${y}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${S}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${S}</span>
                        ${b.service} ${H}
                    </div>
                    <div class="event-message">${w}</div>
                    ${N}
                </div>
            `;let O=_.querySelector(".event-details");if(O&&O.addEventListener("click",k=>{k.stopPropagation()}),r){let k=_.querySelector(".close-details-btn");k&&k.addEventListener("click",C=>{C.stopPropagation();let $=C.target.closest(".event-item");if($){$.classList.remove("expanded"),me.delete(b.id);let T=$.querySelector(".event-details");T&&(T.style.display="none")}})}let U=_.querySelector(".prev-btn"),j=_.querySelector(".next-btn");if(U&&j){let k=0,C=_.querySelectorAll(".history-slide"),$=C.length,T=()=>{C.forEach((L,q)=>{L.style.display=q===k?"block":"none"}),U.disabled=k===0,j.disabled=k===$-1,U.style.opacity=k===0?"0.5":"1",j.style.opacity=k===$-1?"0.5":"1"};U.addEventListener("click",L=>{L.stopPropagation(),k>0&&(k--,T())}),j.addEventListener("click",L=>{L.stopPropagation(),k<$-1&&(k++,T())}),T()}return _},c=Array.from(e.children),p=new Map(c.map(b=>[b.dataset.eventId,b])),h=new Set(Ce.map(b=>b.id));c.forEach(b=>{let n=b.dataset.eventId;(!n||!h.has(n))&&b.remove()});let m=null;Ce.forEach((b,n)=>{let f=p.get(b.id);(!f||t)&&(f&&f.remove(),f=v(b),!f)||(n===0?e.firstElementChild!==f&&e.prepend(f):m&&m.nextElementSibling!==f&&m.after(f),m=f)}),De=Date.now(),Z(1,De)}catch(s){console.error("Error fetching events:",s),e.children.length===0&&(e.innerHTML=P("offline","Failed to load events.","The event service may be offline."))}}function us(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),i=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ce.forEach(s=>me.add(s.id)),ne(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{me.clear(),ne(!0)},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.querySelectorAll(".filter-btn").forEach(s=>{s.onclick=()=>{i.querySelectorAll(".filter-btn").forEach(l=>l.classList.remove("active")),s.classList.add("active"),W=s.dataset.filter,ne(!0)}}),i.dataset.listenerAttached="true"),i&&i.querySelectorAll(".filter-btn").forEach(s=>{s.dataset.filter===W?s.classList.add("active"):s.classList.remove("active")});let a=document.getElementById("events-clear");a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{let s=W==="all"?"ALL":W.toUpperCase();if(confirm(`Are you sure you want to delete ${s} events from the backend? This cannot be undone.`)){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let l="/events";if(W!=="all"?l+=`?category=${W}`:l+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await B(l,{method:"DELETE"})).ok)throw new Error("Failed to delete events");me.clear(),ne(!0)}catch(l){console.error("Failed to clear events:",l),alert("Failed to clear events. Check console.")}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}var fs=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 348 346" style="color: #bb86fc; fill: currentColor; margin-right: 10px; min-width: 24px; margin-left: 0; max-width: 25px;">
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
`,Ct=fs;function $t(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var gs=null;async function $e(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await B("/logs");if(!e.ok)throw new Error("Logs offline");let i=await e.json();if(!i||i.length===0)return t.innerHTML=P("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let a=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],s=i.filter(o=>!a.includes(o.id));s.forEach(o=>{o.logs&&Array.isArray(o.logs)?o.logs.reverse():o.logs=[]}),s.reverse();let l=s.map(o=>{let v=o.logs.join(`
`),c=[...o.logs];if(c.length<25){let h=25-c.length;for(let m=0;m<h;m++)c.push("")}else c.length>25&&(c=c.slice(-25));let p=c.map(h=>Me(h)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${o.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(v)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${o.id}" title="Clear Logs" style="${z()?"display: none;":""}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${p}</pre>
                </div>
            `}).join("");return t.innerHTML=l,document.querySelectorAll(".copy-logs-btn").forEach(o=>{o.addEventListener("click",()=>{let v=unescape(o.dataset.logs);navigator.clipboard.writeText(v).then(()=>{let c=o.querySelector("i");c.classList.remove("bx-copy"),c.classList.add("bx-check"),setTimeout(()=>{c.classList.remove("bx-check"),c.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(o=>{o.addEventListener("click",async()=>{let v=o.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${v}?`))try{(await B(`/logs?service_id=${v}`,{method:"DELETE"})).ok&&$e()}catch(c){console.error("Error clearing logs:",c)}})}),gs=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=P("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var Lt=()=>{let t=z()?"display: none;":"";return`
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
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Sentry Protocol</span>
                    <span id="guardian-sentry-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-sentry-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
                </div>
                <div class="guardian-indicator" style="text-align: center;">
                    <span style="color: #666; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Architect Protocol</span>
                    <span id="guardian-architect-val" style="color: #fff; font-family: monospace; display: block; font-size: 1.1em; margin-bottom: 5px;">-</span>
                    <div id="guardian-architect-stats" style="font-size: 0.65em; color: #888; font-family: monospace;"></div>
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
                <path d="M0 0 C0.83273438 -0.02191406 1.66546875 -0.04382813 2.5234375 -0.06640625 C12.42281602 1.94089846 19.08310224 8.30026822 25.96826172 15.2746582 C26.95727226 16.25851896 27.94735021 17.2413077 28.93840027 18.22311401 C31.60457896 20.87090912 34.25495042 23.53400437 36.90205145 26.20085549 C39.68567156 29.00096491 42.48198637 31.78835012 45.27639771 34.5776825 C49.96361651 39.26039291 54.64058983 43.95314835 59.31152344 48.65209961 C64.70016956 54.07281989 70.10469891 59.47729615 75.51801288 64.87337428 C80.74280158 70.08226408 85.95618152 75.30243123 91.16449356 80.52779198 C93.37364835 82.74379185 95.58666299 84.95582576 97.80294418 87.16469765 C100.41418514 89.7682407 103.01523577 92.38156651 105.60895729 95.00255966 C107.00896503 96.4126634 108.41872373 97.81306531 109.82881165 99.21308899 C115.21512659 104.68091165 119.71720271 109.65638967 121.15625 117.43359375 C121.1459375 118.28050781 121.135625 119.12742187 121.125 120 C121.14046875 121.26650391 121.14046875 121.26650391 121.15625 122.55859375 C119.29273788 133.0956586 112.41291897 139.49918055 105.10546875 146.7109375 C103.96129859 147.8559378 102.81794583 149.00175542 101.67536926 150.14834595 C99.28844755 152.53811319 96.89305386 154.91893632 94.4909668 157.29345703 C91.42251357 160.32777217 88.37460205 163.38178886 85.33254528 166.44254112 C82.97814152 168.80754245 80.61404093 171.16265346 78.24685097 173.51485062 C77.11941282 174.63713069 75.99475802 175.76221449 74.87303734 176.8902092 C73.30147909 178.4672553 71.71750525 180.03070557 70.12963867 181.59130859 C69.23347336 182.48127533 68.33730804 183.37124207 67.41398621 184.28817749 C62.66560568 188.16031881 57.88332197 189.99168346 51.6875 190 C50.72972656 190.01933594 49.77195312 190.03867188 48.78515625 190.05859375 C39.43875364 188.59135873 33.68473352 182.19800083 27.30932617 175.7644043 C26.29907148 174.75957818 25.28796968 173.75560315 24.27609253 172.75241089 C21.5460013 170.040466 18.82860783 167.31612861 16.11394668 164.58874869 C13.26396116 161.72859314 10.40417989 158.87825841 7.54597473 156.02632141 C2.7500778 151.23768806 -2.03735442 146.44071357 -6.82006836 141.63891602 C-12.34193771 136.09526806 -17.87808586 130.56619364 -23.42184621 125.04444379 C-28.19119159 120.29327429 -32.95266783 115.53432414 -37.70770282 110.7688325 C-40.54340877 107.92690528 -43.38171285 105.08771456 -46.22715187 102.2555294 C-48.90145417 99.59281726 -51.5657144 96.92044172 -54.22267532 94.24042892 C-55.19676448 93.26107013 -56.17423765 92.28506324 -57.15538216 91.31277275 C-67.60330716 80.95044548 -67.60330716 80.95044548 -68.80859375 72.53515625 C-68.80988281 71.57480469 -68.81117187 70.61445312 -68.8125 69.625 C-68.83183594 68.66722656 -68.85117188 67.70945312 -68.87109375 66.72265625 C-67.30574621 56.75126914 -59.94014197 50.53844575 -53.109375 43.765625 C-51.99024053 42.64379096 -50.87169999 41.52136415 -49.75372314 40.39837646 C-47.41663676 38.05541695 -45.072532 35.7197827 -42.72314453 33.38916016 C-39.72603827 30.41484171 -36.747253 27.42292163 -33.77352524 24.42525101 C-31.46951551 22.10672421 -29.15598517 19.79788601 -26.8395462 17.49178314 C-25.737909 16.3927969 -24.63918713 15.29087962 -23.54357147 14.1858902 C-9.43730391 -0.01451893 -9.43730391 -0.01451893 0 0 Z " transform="translate(144.375,4.4375)"/>
                <path d="M0 0 C1.1040332 0.93706754 2.20673163 1.8757078 3.30888367 2.81498718 C4.23020096 3.59878518 4.23020096 3.59878518 5.17013073 4.39841747 C7.93327454 6.81684316 10.50793202 9.40308666 13.08203125 12.01953125 C13.62228439 12.56357101 14.16253754 13.10761078 14.71916199 13.6681366 C16.41943213 15.38047707 18.11636669 17.09606241 19.8125 18.8125 C22.06614488 21.09270671 24.32306859 23.36959413 26.58203125 25.64453125 C27.09659378 26.16739212 27.61115631 26.69025299 28.14131165 27.22895813 C30.80906769 29.95870643 30.80906769 29.95870643 34 32 C32.60013666 35.15762163 30.95160504 37.30453576 28.52392578 39.75022888 C27.44343208 40.84568527 27.44343208 40.84568527 26.34111023 41.96327209 C25.55049698 42.75455002 24.75988373 43.54582794 23.9453125 44.36108398 C23.11252274 45.20219727 22.27973297 46.04331055 21.42170715 46.90991211 C19.13803757 49.21354749 16.84982552 51.51253513 14.55869675 53.80874896 C13.12471671 55.24637776 11.69204244 56.68529502 10.25979614 58.12465096 C5.2546008 63.15433924 0.24371059 68.17828103 -4.77197266 73.19750977 C-9.43259377 77.86175845 -14.07994342 82.53894789 -18.72135925 87.22230095 C-22.71683946 91.25259879 -26.72200991 95.2730975 -30.73458862 99.28637177 C-33.12632807 101.67890061 -35.51400356 104.07515694 -37.89178467 106.48156548 C-40.55282793 109.16958677 -43.22936601 111.84121293 -45.91015625 114.50952148 C-46.68457565 115.29877518 -47.45899506 116.08802887 -48.25688171 116.90119934 C-54.65361487 123.21386137 -61.31272776 128.00286915 -70.5 128.625 C-77.28976582 128.26006209 -83.06594048 125.95835815 -87.88671875 121.09765625 C-92.60027132 115.15150397 -94.61336757 109.36758536 -94.35209942 101.76492119 C-93.17518729 92.52301649 -86.63472017 85.92640937 -80.26245117 79.69482422 C-79.39365326 78.82529617 -78.52485535 77.95576813 -77.62973022 77.05989075 C-75.26909233 74.70211816 -72.89800233 72.35592197 -70.52134109 70.0143714 C-68.0312607 67.55576868 -65.55554321 65.08278451 -63.07820129 62.61135864 C-58.39573444 57.94436778 -53.70068202 53.29025845 -49.00085384 48.64075863 C-43.6462765 43.34227024 -38.3060662 38.02939992 -32.96695364 32.71533561 C-21.99376178 21.79426027 -11.00286569 10.89118365 0 0 Z " transform="translate(103,133)"/>
                <path d="M0 0 C5.38774836 3.27445051 9.48629464 7.72940902 11.375 13.796875 C12.57556759 20.12129356 13.08379186 26.61224973 9.8125 32.3515625 C9.1525 33.2590625 8.4925 34.1665625 7.8125 35.1015625 C3.14375463 31.20179529 -1.27877809 27.14941606 -5.55859375 22.828125 C-6.12578629 22.25951752 -6.69297882 21.69091003 -7.27735901 21.10507202 C-9.06229913 19.31460014 -10.84370256 17.52065766 -12.625 15.7265625 C-13.84546939 14.50106927 -15.06617053 13.27580678 -16.28710938 12.05078125 C-19.25658756 9.07036476 -22.22290257 6.08683356 -25.1875 3.1015625 C-18.60177483 -3.68024927 -8.47804034 -3.77979299 0 0 Z " transform="translate(229.1875,30.8984375)"/>
            </svg>
            <h2>Fabricator</h2>
            <button id="fabricator-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); opacity: 0.5;">
            <div style="text-align: center; color: #666; font-style: italic; font-size: 0.85em;">
                Fabricator Agent coming soon...
            </div>
        </div>

        <div class="system-section-header" style="display: flex; align-items: center;">
            ${Ct}
            <h2>Imaginator</h2>
            <button id="imaginator-reset-btn" class="notif-action-btn" style="margin-left: auto; ${t}" title="Reset Cooldowns"><i class='bx bx-refresh'></i></button>
        </div>

        <div class="guardian-status-section" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05); opacity: 0.5;">
            <div style="text-align: center; color: #666; font-style: italic; font-size: 0.85em;">
                Fabricator Agent coming soon...
            </div>
        </div>`},Tt=()=>`
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
        <div id="processes-history-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,Mt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,At=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,It=()=>`
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
        </div>`,_t=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${$t()}
        </div>`;async function Bt(){await Promise.all([Ee(),Fe(),Je()]),await $e()}var Et=null,St=null;async function Dt(){try{return await(await B("/system_monitor")).json()}catch{return null}}async function kt(){try{return await(await B("/system/hardware")).json()}catch{return null}}async function bs(){try{return await(await B("/processes")).json()}catch{return null}}async function vs(){try{return await(await B("/agent/status")).json()}catch{return null}}async function Fe(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),i=document.querySelector("#hw-os .hw-content"),a=document.querySelector("#hw-cpu .hw-content"),s=document.querySelector("#hw-ram .hw-content"),l=document.querySelector("#hw-gpu .hw-content"),o=document.querySelector("#hw-storage .hw-content"),v=r=>{if(r){if(i&&(i.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${r.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${r.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),s){let x=(r.MEMORY_BYTES/1073741824).toFixed(1);s.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${x} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(a&&r.CPU&&r.CPU.length>0){let x=r.CPU[0];a.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${x.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${x.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${x.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}l&&(r.GPU&&r.GPU.length>0?l.innerHTML=r.GPU.map(x=>{let u=(x.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${x.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${u} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):l.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),o&&r.STORAGE&&r.STORAGE.length>0?o.innerHTML=r.STORAGE.map(x=>{let u=(x.USED/1073741824).toFixed(1),g=(x.SIZE/(1024*1024*1024)).toFixed(1),d=x.SIZE>0?(x.USED/x.SIZE*100).toFixed(0):0,E=x.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${x.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${E}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${u} GB Used</span>
                            <span>${g} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${d>90?"#cf6679":"#03dac6"}; width: ${d}%; height: 100%; box-shadow: 0 0 10px ${d>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):o&&(o.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>";let r=await kt();r?(v(r),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)):(e.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3))},e.dataset.listenerAttached="true"),a&&!a.hasChildNodes())){let r=await kt();v(r)}if(!t)return;let c=await Dt();if(!c||!c.services){t.children.length===0&&(t.innerHTML=P("offline","Failed to load system metrics.","The event service may be offline."));return}Et=Date.now(),Z(0,Et);let p=c.services||[];Array.from(t.children).forEach(r=>{r.classList.contains("service-widget")||r.remove()});function h(r){return!r||r==="N/A"||r==="unknown"||r.trim()===""?"-":r}function m(r){if(!r||r==="N/A"||r==="unknown")return"-";let x=r.match(/^(\d+\.\d+\.\d+)/);return x?x[0]:r.split(".").slice(0,3).join(".")||"-"}function b(r){return!r||r.length<=28?r:r.substring(0,28)+"..."}function n(r){if(!r||r==="N/A"||r==="unknown")return"-";let x=r.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!x)return"-";let u=parseInt(x[1])||0,g=parseInt(x[2])||0,d=parseInt(x[3])||0,E=parseFloat(x[4])||0,M=u*86400+g*3600+d*60+E,A=Math.floor(M/86400);if(A>0)return`${A}d`;let I=Math.floor(M/3600);if(I>0)return`${I}h`;let w=Math.floor(M/60);return w>0?`${w}m`:`${Math.floor(M)}s`}function f(r){let x=r.status==="online",u=x?"service-widget-online":"service-widget-offline",g=x?"bx-check-circle":"bx-x-circle",d=x?"OK":"BAD",E=r.version?m(r.version.str):"-",M=r.cpu&&r.cpu!=="N/A"?r.cpu:"-",A=r.memory&&r.memory!=="N/A"?r.memory:"-",I=M!=="-"?"#00ff00":"#666",w=M!=="-"?"#fff":"#666",H=A!=="-"?"#00ff00":"#666",N=A!=="-"?"#fff":"#666",_=n(r.uptime),O="";x?O=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${E}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${_}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${I};"></i>
                        <span style="color: ${w};">${M}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${H};"></i>
                        <span style="color: ${N};">${A}</span>
                    </div>
                </div>`:O='<div class="service-widget-footer offline"><span>OFFLINE</span></div>';let U=z()?"easter.company":b(r.domain&&r.port?`${r.domain}:${r.port}`:"");return`<div class="service-widget ${u}" data-service-id="${r.id}"><div class="service-widget-header"><i class="bx ${g}"></i><h3>${r.short_name||r.id}</h3><span class="service-widget-status">${d}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${U}</span></div>${O}</div></div>`}let S=new Map(Array.from(t.querySelectorAll(".service-widget")).map(r=>[r.dataset.serviceId,r])),y=new Set(p.map(r=>r.id));for(let[r,x]of S)y.has(r)||x.remove();p.forEach(r=>{let x=f(r),u=S.get(r.id);u?u.outerHTML!==x&&(u.outerHTML=x):t.insertAdjacentHTML("beforeend",x)})}async function Je(){let t=document.getElementById("models-widgets");if(!t)return;let e=await Dt();if(!e){t.children.length===0&&(t.innerHTML=P("offline","Failed to load model status.","The event service may be offline."));return}St=Date.now(),Z(2,St);let i=e.models||[],a=e.whisper;Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function s(c){let p=c.status==="Ready";return`
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
                </div>`}function o(c){let p=c.status==="Downloaded",h=p?"service-widget-online":"service-widget-offline",m=p?"OK":"MISSING",b=p&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",n=c.name;return c.type==="custom"&&n.endsWith(":latest")&&(n=n.replace(":latest","")),`<div class="service-widget ${h}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${p?"bx-check-circle":"bx-x-circle"}"></i><h3>${n}</h3><span class="service-widget-status">${m}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${b}</span></div></div></div>`}let v="";if(a&&(v+=s(a)),e.xtts&&(v+=l(e.xtts)),v+=i.map(o).join(""),!v){t.innerHTML=P("empty","No models found.");return}t.innerHTML!==v&&(t.innerHTML=v)}async function Ee(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("guardian-sentry-val"),i=document.getElementById("guardian-architect-val"),a=document.getElementById("guardian-idle-val"),s=document.getElementById("guardian-total-idle"),l=document.getElementById("guardian-total-active"),o=document.getElementById("guardian-total-waste"),v=document.getElementById("guardian-reset-btn"),c=document.getElementById("analyzer-reset-btn");v&&!v.dataset.listenerAttached&&(v.onclick=async()=>{v.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await B("/guardian/reset?protocol=all",{method:"POST"}),setTimeout(()=>{v.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{v.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),Ee()}catch{v.innerHTML="<i class='bx bx-error'></i>"}},v.dataset.listenerAttached="true"),c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{c.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await B("/analyzer/reset?protocol=synthesis",{method:"POST"}),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{c.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),Ee()}catch{c.innerHTML="<i class='bx bx-error'></i>"}},c.dataset.listenerAttached="true");let p=await vs();if(p){let y=Math.floor(Date.now()/1e3),r=p.active_tier,x=p.active_synthesis,u=p.protocol_aliases||{sentry:"Sentry",architect:"Architect",synthesis:"Synthesis"},g=w=>{w<0&&(w=0);let H=Math.floor(w/3600),N=Math.floor(w%3600/60),_=w%60;return H>0?`${H}h ${N}m`:N>0?`${N}m ${_}s`:`${_}s`},d=(w,H,N,_,O)=>{if(!w)return;let U=u[_]||_.toUpperCase(),j=w.parentElement.querySelector('span[style*="text-transform: uppercase"]');if(j&&(j.textContent=U),O&&O.includes(_))w.textContent="Working",w.style.color="#bb86fc";else if(N){let C=N.next_run-y;if(C<=0)w.textContent="Ready",w.style.color="#5eff5e";else{let $=Math.floor(C/60),T=C%60;w.textContent=`${$}m ${T}s`,w.style.color="#fff"}}H&&N&&(H.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${N.attempts||0}</span>
            <span style="color: ${N.failures>0?"#ffa500":"#666"}">Fails: ${N.failures||0}</span>
            <span style="color: ${N.absolute_failures>0?"#ff4d4d":"#666"}">Aborted: ${N.absolute_failures||0}</span>
          </div>
        `)};e&&d(e,document.getElementById("guardian-sentry-stats"),p.sentry,"sentry",r),i&&d(i,document.getElementById("guardian-architect-stats"),p.architect,"architect",r);let E=document.getElementById("analyzer-synthesis-val"),M=document.getElementById("analyzer-synthesis-stats");E&&d(E,M,p.synthesis,"synthesis",x);let A=document.getElementById("system-state-label"),I=document.getElementById("system-state-val");if(I&&p.system_state){let w=p.system_state,H=g(p.system_state_time||0);A&&(A.textContent=`State: ${w.toUpperCase()}`),I.textContent=H,w==="idle"?I.style.color=p.system_state_time>300?"#5eff5e":"#fff":I.style.color="#bb86fc"}s&&(s.textContent=g(p.total_idle_time||0)),l&&(l.textContent=g(p.total_active_time||0)),o&&(o.textContent=g(p.total_waste_time||0))}else[e,i,a,s,l,o].forEach(r=>{r&&(r.textContent="-",r.style.color="#666")});let h=await bs(),m=[],b=[],n=[];h&&(Array.isArray(h)?m=h:(m=h.active||[],b=h.queue||[],n=h.history||[],n.sort((y,r)=>(r.end_time||0)-(y.end_time||0)))),m.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=P("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),je(t,m,!1));let f=document.getElementById("processes-queue-widgets");f&&(b.length===0?!f.querySelector(".tab-placeholder")&&!f.querySelector('div[style*="font-style: italic"]')&&(f.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(f.innerHTML="",je(f,b,!1)));let S=document.getElementById("processes-history-widgets");S&&(n.length===0?S.querySelector(".tab-placeholder")||(S.innerHTML=P("empty","No recent history.")):(S.querySelector(".tab-placeholder")&&(S.innerHTML=""),je(S,n,!0))),we(1,m.length)}function je(t,e,i){function a(v){let c="";v.end_time?c=`${v.end_time-v.start_time}s`:c=`${Math.floor(Date.now()/1e3-v.start_time)}s`;let p=v.retries>0?`<span class="process-retry-badge">Retry ${v.retries}</span>`:"",h=v.channel_id,m={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation","system-analyzer":"Analyzer Agent"};if(m[h]?h=m[h]:/^\d+$/.test(h)&&(h=`Channel ${h}`),i)return`
        <div class="process-history-item" data-channel-id="${v.channel_id}-${v.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${h}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${v.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${v.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${c}</span>
            </div>
        </div>`;let b="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${v.channel_id}-${v.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${b}"></i>
                        <h3 style="color: ${b}">${h}</h3>
                        ${p}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${b}">${v.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${b}">${c}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${b}">${v.pid}</span>
                        </div>
                    </div>
                </div>`}let s=i?".process-history-item":".process-widget",l=new Map(Array.from(t.querySelectorAll(s)).map(v=>[v.dataset.channelId,v])),o=new Set(e.map(v=>`${v.channel_id}-${v.start_time}`));for(let[v,c]of l)o.has(v)||c.remove();e.forEach(v=>{let c=`${v.channel_id}-${v.start_time}`,p=a(v),h=l.get(c);if(h){h.outerHTML!==p&&(h.outerHTML=p);let m=t.querySelector(`[data-channel-id="${c}"]`);m&&t.appendChild(m)}else t.insertAdjacentHTML("beforeend",p)})}function ze(){let t=he(),e={enabled:Notification.permission==="granted",supported:"Notification"in window};return`
            <div class="theme-selector">
                ${Object.values(X).map(i=>`
                    <div class="theme-card ${t===i?"active":""}" data-theme="${i}">
                        <div class="theme-preview theme-preview-${i.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${i.charAt(0).toUpperCase()+i.slice(1)}</h3>
                            <p>${i===X.DARK?"Simple, clean, dark.":i===X.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
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
                            <span class="settings-item-description">${e.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${e.enabled?"checked":""} ${e.supported?"":"disabled"}>
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
            </div>`}function Ge(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(a=>{a.addEventListener("click",function(){let s=this.dataset.theme;st(s),t.setContent(ze()),Ge(t)})});let i=document.getElementById("notifications-toggle");i&&(i.onclick=async a=>{if(a.target.checked)try{await Notification.requestPermission()!=="granted"&&(a.target.checked=!1)}catch{a.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),a.target.checked=!0)})}var xs="2.8.143",Ht=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1 & Tier 2).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1|2] [--force]
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
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],ys=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
                <span>Interactive Demos (v${xs})</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;for(let[i,a]of Object.entries(t)){let s=Ht.filter(l=>l.category===i);s.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${a.icon}' style="color: ${a.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${a.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${s.map(l=>`
                        <div class="cli-command-card ${l.dummy?"dummy":""}" data-cmd="${l.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${a.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${l.icon}' style="font-size: 2em; color: ${a.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${l.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${l.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${a.color}; position: relative; z-index: 1;">
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
    </div>`,e},We=!1;function hs(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>zt(),document.getElementById("terminal-action-btn").onclick=()=>zt());let i=document.getElementById("cli-terminal-body"),a=document.getElementById("cli-docs-pane");i.innerHTML="";let s=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return a.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${s.overview}</p>
        </div>
        ${s.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${s.details.map(l=>`<li>${l}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${s.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),We=!0,i}function zt(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),We=!1}function Nt(t,e,i="output"){if(!We)return;let a=document.createElement("div");a.className=`terminal-line terminal-${i}`,i==="prompt"?a.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:a.innerHTML=Me(e),t.appendChild(a),t.scrollTop=t.scrollHeight}async function ws(t){let e=Ht.find(s=>s.id===t);if(!e)return;let i=hs(e);Nt(i,`dex ${t}`,"prompt");let a=e.demo_output||["Executing command...","\u2713 Done."];for(let s of a){await new Promise(o=>setTimeout(o,400+Math.random()*600));let l="output";s.includes("[ERROR]")?l="error":s.includes("[SUCCESS]")||s.includes("\u2713")?l="success":s.includes("!")&&(l="warning"),Nt(i,s,l)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function Pt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=ys();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let i=e.querySelector("code").textContent;navigator.clipboard.writeText(i).then(()=>{let a=e.querySelector("i");a.className="bx bx-check",a.style.color="#5eff5e",setTimeout(()=>{a.className="bx bx-copy",a.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(i=>{i.addEventListener("mouseenter",()=>{i.style.transform="translateY(-5px)",i.style.borderColor="rgba(255,255,255,0.15)",i.style.backgroundColor="rgba(255,255,255,0.05)"}),i.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)",i.style.borderColor="rgba(255,255,255,0.05)",i.style.backgroundColor="rgba(255,255,255,0.03)"}),i.addEventListener("click",()=>{let a=i.dataset.cmd;ws(a)})})}async function Cs(){try{if(!(await B("/system/status",{method:"GET"})).ok)throw new Error("Service unhealthy")}catch(t){console.error("Service health check failed:",t)}}function Rt(){Cs(),it(),Ye();let t=window.location.pathname;(t==="/dexter"||t==="/dexter/")&&Pt(),Xe(),Qe();let e=document.getElementById("nav-left-container");e&&e.addEventListener("click",()=>{let d=document.getElementById("dexter-dropdown"),E=document.getElementById("dexter-menu-btn");if(d&&d.classList.contains("active")){d.classList.remove("active"),E.classList.remove("active"),l?.classList.remove("menu-open"),s.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),fe(!1));return}if(s.length>0)h();else{let M=window.location.pathname;if(!(M==="/"||M==="/index.html")){let w=(M.endsWith("/")&&M.length>1?M.slice(0,-1):M).split("/");w.pop();let H=w.join("/")||"/";window.location.href=H}}});let i=window.location.pathname==="/"||window.location.pathname==="/index.html",a=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!i&&!a&&document.querySelector("footer")?.classList.add("hide");let s=[],l=document.getElementById("windows-container");l&&l.setAttribute("data-count","0");let o=d=>{localStorage.setItem("dex_last_window",d)};function v(){return 1}function c(){for(;s.length>1;)s.shift().close(!0);let d=document.getElementById("windows-container"),E=document.querySelector("nav"),M=document.querySelector("footer"),A=window.location.pathname==="/"||window.location.pathname==="/index.html",I=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");d&&d.setAttribute("data-count",s.length),s.forEach(U=>{let j=document.getElementById(U.id);j&&j.classList.remove("hide-close")}),Se(he());let w=document.getElementById("dexter-menu-container"),H=document.getElementById("nav-window-switcher"),N=document.getElementById("settings-icon"),_=document.getElementById("close-all-windows"),O=window.innerWidth<880;if(O||(r&&r.classList.remove("active"),u&&u.classList.remove("active"),d&&d.classList.remove("menu-open")),fe(s.length>0),s.length>0)if(M?.classList.add("hide"),_&&(_.style.display=O?"none":"block"),document.querySelector("main")?.style.setProperty("opacity","0","important"),E?.classList.add("window-open"),d&&(d.style.paddingTop="60px"),w&&(w.style.display=O?"flex":"none"),N&&(N.style.display=O?"block":"none"),!O&&H){let U=s[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(U)?(H.innerHTML=`
                      <div class="nav-switch-btn ${U==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${U==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${U==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${U==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${U==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{o("alerts-window"),p(m)}),document.getElementById("switch-events").addEventListener("click",()=>{o("events-window"),p(b)}),document.getElementById("switch-monitor").addEventListener("click",()=>{o("monitor-window"),p(f)}),document.getElementById("switch-contacts").addEventListener("click",()=>{o("contacts-window"),p(n)}),document.getElementById("switch-workspace").addEventListener("click",()=>{o("workspace-window"),p(S)})):H.innerHTML=""}else H&&(H.innerHTML="");else E?.classList.remove("window-open"),_&&(_.style.display="none"),d&&(d.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),A||I?M?.classList.remove("hide"):M?.classList.add("hide"),w&&(w.style.display="flex"),N&&(N.style.display="block"),H&&(H.innerHTML="");ve()}function p(d){if(d.isOpen()){d.close();return}for(;s.length>0;)s.pop().close(!0);s.push(d),d.open(),c()}function h(){[...s].forEach(E=>E.close()),s=[]}window.addEventListener("resize",c);let m=ae({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:ct(),onOpen:()=>ie(),onClose:()=>{let d=s.indexOf(m);d>-1&&s.splice(d,1),c()}}),b=ae({id:"events-window",title:"Events",icon:"bx-calendar-event",content:qe(),onOpen:()=>{b.setContent(qe()),ne()},onClose:()=>{let d=s.indexOf(b);d>-1&&s.splice(d,1),c()}}),n=ae({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:ht(),onOpen:()=>Ue(),onClose:()=>{let d=s.indexOf(n);d>-1&&s.splice(d,1),c()}}),f=ae({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:Mt()},{icon:"bxs-component",title:"Processes",content:Tt()},{icon:"bxs-brain",title:"Models",content:At()},{icon:"bxs-hdd",title:"Hardware",content:It()},{icon:"bxs-terminal",title:"Logs",content:_t()},{icon:"bxs-zap",title:"Agents",content:Lt()}].filter(d=>z()?d.title!=="Hardware"&&d.title!=="Logs":!0),onOpen:()=>{Fe(),Ee(),Je(),$e()},onClose:()=>{let d=s.indexOf(f);d>-1&&s.splice(d,1),c()}}),S=ae({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:vt(),onOpen:()=>Re(),onClose:()=>{let d=s.indexOf(S);d>-1&&s.splice(d,1),c()}}),y=ae({id:"settings-window",title:"Settings",icon:"bx-cog",content:ze(),onOpen:()=>{y.setContent(ze()),Ge(y)},onClose:()=>{let d=s.indexOf(y);d>-1&&s.splice(d,1),c()}});window.dexter={viewEvent:d=>{b.isOpen()||p(b),setTimeout(()=>{let E=document.querySelector(`.event-item[data-event-id="${d}"]`);E&&(E.scrollIntoView({behavior:"smooth",block:"center"}),E.classList.add("flash-highlight"),E.classList.contains("expanded")||E.click(),setTimeout(()=>E.classList.remove("flash-highlight"),2e3))},500)},viewAlert:d=>{m.isOpen()||p(m),setTimeout(()=>{let E=document.querySelector(`.event-item[data-alert-id="${d}"]`);E&&(E.scrollIntoView({behavior:"smooth",block:"center"}),E.classList.add("flash-highlight"),E.classList.contains("expanded")||E.click(),setTimeout(()=>E.classList.remove("flash-highlight"),2e3))},500)}};let r=document.getElementById("dexter-dropdown");r&&(r.innerHTML=`
          <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
          <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
          <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
          <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
          <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
      `);let x=document.getElementById("dexter-menu-container"),u=document.getElementById("dexter-menu-btn");x&&r&&u&&(u.addEventListener("click",d=>{d.stopPropagation();let E=window.innerWidth<880;r.classList.toggle("active"),u.classList.toggle("active");let M=r.classList.contains("active");if(E){let A=document.querySelector("nav"),I=document.getElementById("windows-container");M?(document.querySelector("footer")?.classList.add("hide"),document.querySelector("main")?.style.setProperty("opacity","0","important"),A?.classList.add("window-open"),I?.classList.add("menu-open"),fe(!0)):(I?.classList.remove("menu-open"),s.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),A?.classList.remove("window-open"),fe(!1)))}}),document.addEventListener("click",()=>{let d=window.innerWidth<880,E=r.classList.contains("active");if(r.classList.remove("active"),u.classList.remove("active"),d&&E){document.getElementById("windows-container")?.classList.remove("menu-open");let A=document.querySelector("nav");s.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),A?.classList.remove("window-open"),fe(!1))}}),r.addEventListener("click",d=>{d.stopPropagation()}));let g=()=>{r&&u&&(r.classList.remove("active"),u.classList.remove("active"),window.innerWidth<880&&document.getElementById("windows-container")?.classList.remove("menu-open"))};document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{g(),o("alerts-window"),p(m)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{g(),o("events-window"),p(b)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{g(),o("monitor-window"),p(f)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{g(),o("contacts-window"),p(n)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{g(),o("workspace-window"),p(S)}),document.getElementById("settings-icon")?.addEventListener("click",()=>p(y)),document.getElementById("close-all-windows")?.addEventListener("click",()=>h()),z()||setInterval(()=>{b.isOpen()&&ne(),m.isOpen()?ie():Pe()},1e3),setInterval(()=>{z()&&(m.isOpen()?ie():Pe()),S.isOpen()?Re():bt(),z()&&b.isOpen()&&ne(),f.isOpen()&&Bt()},5e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Rt):Rt();})();
