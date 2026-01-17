"use strict";(()=>{function lt(){if(!document.querySelector(".grid-overlay")){let t=document.createElement("div");t.className="grid-overlay",document.body.appendChild(t)}console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function ct(){let t=window.location.pathname,e=t==="/"||t==="/index.html",n=`
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
            <button id="settings-icon" class="nav-btn" title="Settings"><i class='bx bx-cog'></i></button>
            <button id="close-all-windows" class="nav-btn" title="Close Window" style="color: #ff4444; margin-left: 10px; opacity: 0.6; display: none;"><i class='bx bx-x-circle'></i></button>
        </div>
    
    `,r=document.createElement("nav");r.innerHTML=n,document.body.prepend(r);let l=document.createElement("div");l.id="dexter-dropdown",l.className="dexter-dropdown",l.innerHTML=`
        <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
        <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
        <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
        <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
        <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
    `,document.body.appendChild(l)}function xe(t){let e=window.location.pathname,s=e==="/"||e==="/index.html",i=document.getElementById("nav-chevron"),n=document.querySelector(".nav-left");!i||!n||(t||!s?(i.style.display="block",n.style.cursor="pointer",n.classList.add("recording"),n.onmouseenter=()=>{i.style.transform="translateX(-3px)"},n.onmouseleave=()=>{i.style.transform="translateX(0)"}):(i.style.display="none",n.style.cursor="default",n.classList.remove("recording"),n.onmouseenter=null,n.onmouseleave=null))}function dt(){if(document.querySelector("footer"))return;let t=`
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
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var pt=1e3;function pe(t){let e=null,s=t.onClose||null,i=t.onOpen||null;function n(){e&&(e.style.zIndex=(++pt).toString())}function r(){if(e){e.classList.add("open"),n(),window.addEventListener("resize",l),i&&setTimeout(i,10);return}let p=document.getElementById("windows-container");p||(p=document.createElement("div"),p.id="windows-container",p.className="windows-container",document.body.appendChild(p)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=(++pt).toString(),e.addEventListener("mousedown",n);let u=t.icon||"bx-window",a="",v="",C;t.tabs&&t.tabs.length>0?(a=`<div class="tab-bar">${t.tabs.map((m,f)=>{let g=m.icon?`<i class="bx ${m.icon}"></i>`:`<span class="tab-glyph">${m.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${f===0?"active":""}" data-tab-index="${f}">
                        ${g}
                        <span class="tab-title">${m.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${f}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,C=`<div class="window-content">${t.tabs.map((m,f)=>`<div class="tab-content ${f===0?"active":""}" data-tab-content="${f}">${m.content}</div>`).join("")}</div>`):(t.title&&(v=`<div class="window-title">${t.title}</div>`),C=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${u}"></i>
                ${a}
                ${v}
                <i class="bx bx-x window-close"></i>
            </div>
            ${C}
        `,p.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",h=>{h.stopPropagation(),c()}),window.addEventListener("resize",l),t.tabs&&e.querySelectorAll(".tab").forEach(h=>{h.addEventListener("click",()=>{if(!e)return;let o=h.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(f=>f.classList.remove("active")),h.classList.add("active"),e.querySelectorAll(".tab-content").forEach(f=>f.classList.remove("active"));let m=e.querySelector(`.tab-content[data-tab-content="${o}"]`);m&&m.classList.add("active"),b(h,e)})}),setTimeout(()=>{e&&e.classList.add("open"),i&&i()},10)}function l(){if(!e||!e.classList.contains("open"))return;let p=e.querySelector(".tab.active");p&&b(p,e)}function b(p,u){setTimeout(()=>{let a=u.querySelector(".tab-bar");if(!a)return;let v=Array.from(a.querySelectorAll(".tab")),C=v.indexOf(p),h=a.clientWidth,o=v[Math.max(0,C-2)],m=v[Math.min(v.length-1,C+2)],f=a,g=o.offsetLeft-f.offsetLeft-25,H=m.offsetLeft+m.offsetWidth-f.offsetLeft+25-g,I=H<=h?g-(h-H)/2:p.offsetLeft-f.offsetLeft-h/2+p.offsetWidth/2;a.scrollTo({left:I,behavior:"smooth"})},350)}function c(p=!1){e&&(window.removeEventListener("resize",l),p?(e.remove(),e=null):(e.classList.remove("open"),s&&s(),setTimeout(()=>{e?.remove(),e=null},400)))}function d(p){t.content=p;let u=e?.querySelector(".window-content");u&&(u.innerHTML=p)}function x(){return!!(e&&e.classList.contains("open"))}return{open:r,close:c,setContent:d,isOpen:x,focus:n,id:t.id}}var mt="easter_theme",ee={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function We(){return localStorage.getItem(mt)||ee.DARK}function ut(t){if(!Object.values(ee).includes(t))throw new Error("Invalid theme");localStorage.setItem(mt,t),ft(t)}function ft(t){let e=document.body;Object.values(ee).forEach(r=>{e.classList.remove(`theme-${r}`)}),e.classList.add(`theme-${t}`);let s=document.querySelector('meta[name="theme-color"]');s||(s=document.createElement("meta"),s.name="theme-color",document.getElementsByTagName("head")[0].appendChild(s));let i={[ee.DARK]:"#050507",[ee.LIGHT]:"#FFFFFF",[ee.LEGACY]:"#000000"},n=i[t]||i[ee.DARK];if(s.setAttribute("content",n),!document.querySelector(".background")){let r=document.createElement("div");r.className="background",document.body.prepend(r)}e.classList.add("is-animated")}function gt(){let t=We();ft(t)}function P(t,e,s=null){let n={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",r=s?`<p class="placeholder-action">${s}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${n} placeholder-icon'></i><p class="placeholder-message">${e}</p>${r}</div>`}function N(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function te(t,e){let s=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!s)return;if(!e){s.textContent="Last updated: never";return}let i=Date.now(),n=Math.floor((i-e)/1e3),r;n<60?r=`${n}s ago`:n<3600?r=`${Math.floor(n/60)}m ago`:r=`${Math.floor(n/3600)}h ago`,s.textContent=`Last updated: ${r}`}var ms=0;function Me(t,e){let s=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!s)return;let i=s.querySelector(".notification-badge");i&&(e>0?(i.textContent=e>9?"9+":e.toString(),i.style.display="flex"):i.style.display="none")}var ie=0,ae=0;function vt(t){ie=t,Ce()}function yt(t){ae=t,Ce()}function Ce(){let t=ie+ae;ms=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let s=document.getElementById("alerts-menu-item");if(s){let l=s.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="auto",s.appendChild(l)),l.textContent=ie>9?"9+":ie.toString(),l.style.display=ie>0?"flex":"none"}let i=document.getElementById("workspace-menu-item");if(i){let l=i.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="auto",i.appendChild(l)),l.textContent=ae>9?"9+":ae.toString(),l.style.display=ae>0?"flex":"none"}let n=document.getElementById("switch-alerts");if(n){let l=n.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="8px",n.appendChild(l)),l.textContent=ie>9?"9+":ie.toString(),l.style.display=ie>0?"flex":"none"}let r=document.getElementById("switch-workspace");if(r){let l=r.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="8px",r.appendChild(l)),l.textContent=ae>9?"9+":ae.toString(),l.style.display=ae>0?"flex":"none"}}function He(){let t=document.getElementById("alerts-list");if(!t)return;ie=t.querySelectorAll(".alert-unread:not(.priority-low)").length,Ce()}function xt(){let t=document.getElementById("blueprints-list");if(!t)return;ae=t.querySelectorAll(".event-item:not(.blueprint-approved)").length,Ce()}function us(){return"https://event.easter.company"}function fs(){return"https://discord.easter.company"}var gs="http://127.0.0.1:8100",bs="http://127.0.0.1:8300",vs={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function De(t){let e=N(t);if(!e)return e;e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(n,r)=>{let l=vs[r];return l?`<span class="${l}">`:""});let s=(e.match(/<span/g)||[]).length,i=(e.match(/<\/span/g)||[]).length;return s>i&&(e+="</span>".repeat(s-i)),e}function me(t){if(!t)return"";let e=N(t);return e&&(e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(s,i)=>{let n=i.split("|").map(r=>r.trim());return n.every(r=>r.match(/^:?-+:?$/))?"":`<div class="md-table-row">${n.map(r=>`<span class="md-table-cell">${r}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e)}var ys="https://sterling-javelin-12539.upstash.io",xs="AjD7AAIgcDLTsB2z5ZUJmdu6PPARA5_w2VGIiEdO34oEKjK3VKsuiw";function B(){return window.location.hostname.includes("easter.company")}var j=null,oe={lastDashboard:0,lastFrontend:0},Ge=!1,ht=0,wt="dex_dashboard_snapshot";function hs(){let t=localStorage.getItem(wt);if(t)try{let e=JSON.parse(t);j=e,oe.lastDashboard=e.timestamp?e.timestamp*1e3:0}catch{j=null}}async function bt(){if(!(!B()||Ge)){Ge=!0,ht=Math.floor(Date.now()/1e3);try{let t=await Es("GET","state:dashboard:full");if(t)try{let e=JSON.parse(t);j=e,oe.lastDashboard=e.timestamp?e.timestamp*1e3:Date.now(),oe.lastFrontend=Date.now(),localStorage.setItem(wt,JSON.stringify(e))}catch(e){console.error("Failed to parse dashboard snapshot:",e)}}finally{Ge=!1}}}function ws(){if(!j||!j.agent_status)return;let t=j.agent_status;t.system&&typeof t.system.state_time=="number"&&(t.system.state_time+=1)}async function Cs(){if(!B())return;hs();let t=Math.floor(Date.now()/1e3),e=j?t-j.timestamp:1/0;(!j||e>120)&&await bt(),setInterval(()=>{let s=new Date,i=Math.floor(Date.now()/1e3),n=j?i-j.timestamp:1/0,r=i-ht,l=s.getSeconds()===59,b=n>300,c=r>60;(l&&c||b&&c)&&bt(),ws()},1e3)}B()&&Cs();async function Es(t,...e){try{let i=await(await fetch(ys,{method:"POST",headers:{Authorization:`Bearer ${xs}`},body:JSON.stringify([t,...e])})).json();if(i.error)throw new Error(i.error);return i.result}catch(s){return console.error("Upstash Error:",s),null}}var he=null,we=null,Be=!1,_e=!1;async function A(t,e={}){if(B()){if(!j)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t.startsWith("/system_monitor")||t.startsWith("/system/status"))return new Response(JSON.stringify(j.monitor),{status:200});if(t.startsWith("/processes"))return new Response(JSON.stringify(j.processes),{status:200});if(t.startsWith("/events")){let n=new URLSearchParams(t.split("?")[1]||""),r=n.get("type")||n.get("event.type"),l=n.get("category"),b=n.get("order")||"desc",c=[];return r==="system.notification.generated"?c=[...j.alerts||[]]:r==="system.blueprint.generated"||t.includes("event.type=system.blueprint.generated")?c=[...j.blueprints||[]]:l==="messaging"?c=[...j.messaging_events||[]]:l==="system"?c=[...j.system_events||[]]:l==="cognitive"?c=[...j.cognitive_events||[]]:l==="moderation"?c=[...j.moderation_events||[]]:c=[...j.events||[]],b==="asc"?c.sort((d,x)=>d.timestamp-x.timestamp):c.sort((d,x)=>x.timestamp-d.timestamp),new Response(JSON.stringify({events:c,count:c.length}),{status:200})}if(t.startsWith("/logs"))return new Response(JSON.stringify([]),{status:200});if(t.startsWith("/system/hardware"))return new Response(JSON.stringify({}),{status:200});if(t.startsWith("/agent/status")||t.startsWith("/guardian/status"))return new Response(JSON.stringify(j.agent_status||{}),{status:200});if(t.startsWith("/profile/")){let n=t.split("/")[2],r=j.profiles?j.profiles[n]:null;return r?new Response(JSON.stringify(r),{status:200}):new Response(JSON.stringify({error:"Profile not found"}),{status:404})}return t.startsWith("/web/history")?new Response(JSON.stringify(j.web_history||[]),{status:200}):t.startsWith("/chores")?new Response(JSON.stringify([]),{status:200}):new Response(JSON.stringify({error:"Not available in public demo"}),{status:404})}if(he)try{let n=await fetch(he+t,e);if(n.ok)return n;he=null}catch{he=null}let s=us(),i=gs;try{let n=await fetch(s+t,e);if(n.ok)return he=s,Be&&(console.log("\u2728 Production event service restored."),Be=!1),n;throw new Error("Primary failed")}catch{Be||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${i}`),Be=!0);try{let r=await fetch(i+t,e);if(r.ok)return he=i,r;throw new Error("Fallback failed")}catch(r){throw r}}}async function Ee(t,e={}){if(B()){if(!j)return new Response(JSON.stringify({error:"Initializing dashboard cache..."}),{status:503});if(t==="/contacts")return new Response(JSON.stringify(j.contacts||{members:[]}),{status:200});if(t.startsWith("/member/")){let n=t.split("/")[2],r=(j.contacts?.members||[]).find(l=>l.id===n);return r?new Response(JSON.stringify(r),{status:200}):new Response(JSON.stringify({error:"Member not found"}),{status:404})}return new Response(JSON.stringify({error:"Discord API not public"}),{status:404})}if(we)try{let n=await fetch(we+t,e);if(n.ok)return n;we=null}catch{we=null}let s=fs(),i=bs;try{let n=await fetch(s+t,e);if(n.ok)return we=s,_e&&(console.log("\u2728 Production discord service restored."),_e=!1),n;throw new Error("Primary failed")}catch{_e||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${i}`),_e=!0);try{let r=await fetch(i+t,e);if(r.ok)return we=i,r;throw new Error("Fallback failed")}catch(r){throw r}}}var Ct=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-bell' style="color: #bb86fc;"></i>
        <h2>Alerts</h2>
        <div id="alerts-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button id="alerts-read-all" class="notif-action-btn" title="Read All"><i class='bx bx-check-double'></i></button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="alerts-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
            <button id="alerts-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
            <button id="alerts-clear" class="notif-action-btn danger" style="${B()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
        </div>
    </div>
    <div id="alerts-list" class="alerts-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading alerts...</p>
        </div>
    </div>
`,ze=null,ue=new Set,Ne=[];async function ce(t=!1){let e=document.getElementById("alerts-list");if(!e)return;$s(),t&&(e.innerHTML="<p>Updating...</p>");let s="/events?ml=1000&format=json&event.type=system.notification.generated";try{let i=await A(s);if(!i.ok)throw new Error("Service is offline or unreachable.");let r=(await i.json()).events||[];ze=Date.now(),te(0,ze);let l=Date.now(),b=24*60*60*1e3,c=r.filter(f=>{let g=localStorage.getItem(`alert_read_ts_${f.id}`);if(!g)return!0;let y=parseInt(g);return l-y<b});c.sort((f,g)=>{let y=L=>{let $=L.event;if(typeof $=="string")try{$=JSON.parse($)}catch{return"low"}return($.priority||"low").toLowerCase()},H=L=>L==="critical"?4:L==="high"?3:L==="medium"?2:1,I=H(y(f)),S=H(y(g));return I!==S?S-I:g.timestamp-f.timestamp}),Ne=c;let d=f=>{let g=f.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return"low"}return(g.priority||"low").toLowerCase()},x=[],u=new Set(c.map(f=>d(f))).size>1;if(c.length>0){let f=null;c.forEach(g=>{let y=d(g);u&&y!==f&&(x.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),f=y),x.push(g)})}if(t&&(e.innerHTML=""),c.length===0){e.innerHTML=P("empty","No alerts yet."),He();return}let a=f=>{let g=f.event;if(typeof g=="string")try{g=JSON.parse(g)}catch{return null}let y=(g.title||"Untitled Alert").trim(),H=(g.body||"No description provided.").trim(),I=g.summary||"",S=g.content||"",L=g.protocol||"",$=(g.priority||"low").toLowerCase(),D=!!g.alert,O=(g.category||"system").trim(),U=g.related_event_ids||[],J=g.audit_event_id,W=!!localStorage.getItem(`alert_read_ts_${f.id}`),k=new Date(f.timestamp*1e3),w=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),E=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),M=W?"event-border-grey":"event-border-blue";!W&&D&&(M="event-border-red"),W&&($==="high"||$==="critical")?M="event-border-red":W&&$==="medium"&&(M="event-border-orange");let R=W?"alert-read":"alert-unread",z=ue.has(f.id),T=z?"expanded":"",q=z?"display: block;":"display: none;",_="",F="";U.length>0&&(F=`
            <div style="flex: 1; min-width: 150px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    ${U.map(le=>`<a href="#" onclick="window.dexter.viewEvent('${le}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${le.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let G="";J&&(G=`
            <div style="flex: 1; min-width: 120px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Audit</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; display: inline-block;">
                    <a href="#" onclick="window.dexter.viewEvent('${J}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3); white-space: nowrap;">${J.substring(0,8)}...</a>
                </div>
            </div>`);let ne="";L&&(ne=`
            <div style="flex: 1; min-width: 100px; text-align: center;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${L}</div>
            </div>`);let X="";S?X=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="md-para" style="color: #ddd; font-size: 0.85em; white-space: pre-wrap; line-height: 1.6; text-align: left;">${me(S)}</div>
            </div>
        `:X=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="md-para" style="color: #fff; white-space: pre-wrap; line-height: 1.6; text-align: left;">${me(H)}</div>
            </div>
        `,_=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${g.related_services&&g.related_services.length>0?g.related_services.join(", "):g.related||"SYSTEM"}</div>
                    </div>
                    <div style="flex: 1; min-width: 100px; text-align: center;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${O}</div>
                    </div>
                    ${ne}
                    ${G}
                    ${F}
                </div>

                ${X}
            `;let V=document.createElement("div");V.className=`event-item notification-item ${M} ${R} ${T} cursor-pointer priority-${$}`,V.dataset.alertId=f.id,V.onclick=function(le){let Q=this;if(Q.classList.contains("expanded")){Q.classList.remove("expanded"),ue.delete(f.id);let Se=Q.querySelector(".event-details");Se&&(Se.style.display="none")}else{Q.classList.add("expanded"),ue.add(f.id);let Se=Q.querySelector(".event-details");if(Se&&(Se.style.display="block"),!localStorage.getItem(`alert_read_ts_${f.id}`)){localStorage.setItem(`alert_read_ts_${f.id}`,Date.now().toString()),Q.classList.add("alert-read"),Q.classList.remove("alert-unread"),Q.classList.remove("event-border-blue","event-border-red","event-border-purple");let Je="event-border-grey";$==="high"||$==="critical"?Je="event-border-red":$==="medium"&&(Je="event-border-orange"),Q.classList.add(Je),He()}}};let Ie=`${L?L.toUpperCase():"GUARDIAN"} ALERT: ${I||y}`,ds={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[O]||"bx-bell",ps=$==="high"||$==="critical"?"#ff4d4d":$==="medium"?"#ffa500":"#888";V.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${w}</span>
                    <span class="event-date">${E}</span>
                </div>
                <div class="event-icon"><i class='bx ${ds}'></i></div>
                <div class="event-content" style="text-align: left;">
                    <div class="event-service">
                        DEXTER <span class="alert-badge" style="color: ${ps}; font-size: 0.8em; margin-left: 5px;">[${$.toUpperCase()}]</span>
                    </div>
                    <div class="event-message">${me(Ie)}</div>
                    <div class="event-details" style="${q}">
                        ${_}
                    </div>
                </div>
            `;let ot=V.querySelector(".event-details");ot&&ot.addEventListener("click",le=>{le.stopPropagation()});let rt=V.querySelector(".close-details-btn");return rt&&rt.addEventListener("click",le=>{le.stopPropagation(),V.classList.remove("expanded");let Q=V.querySelector(".event-details");Q&&(Q.style.display="none"),ue.delete(f.id)}),V},v=f=>{let g=document.createElement("div");g.className="notification-divider",g.dataset.alertId=f.id;let y="#888888";return f.label==="CRITICAL"?y="#ff4d4d":f.label==="HIGH"?y="#ff8888":f.label==="MEDIUM"&&(y="#ffa500"),g.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,g.innerHTML=`<span style="white-space: nowrap;">${f.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,g},C=Array.from(e.children),h=new Map(C.map(f=>[f.dataset.alertId,f])),o=new Set(x.map(f=>f.id));C.forEach(f=>{let g=f.dataset.alertId;(!g||!o.has(g))&&f.remove()});let m=null;x.forEach((f,g)=>{let y=h.get(f.id);if(!y||t){if(y&&y.remove(),f.type==="divider")y=v(f);else{let H=a(f);if(!H)return;y=H}if(!y)return}g===0?e.firstElementChild!==y&&e.prepend(y):m&&m.nextElementSibling!==y&&m.after(y),m=y}),ze=Date.now(),te(0,ze),He()}catch(i){console.error("Error fetching alerts:",i),e.children.length===0&&(e.innerHTML=P("offline","Failed to load alerts.","The event service may be offline."))}}function $s(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),s=document.getElementById("alerts-close-all"),i=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Ne.forEach(n=>{localStorage.getItem(`alert_read_ts_${n.id}`)||localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString())}),ce(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Ne.forEach(n=>{ue.add(n.id),localStorage.getItem(`alert_read_ts_${n.id}`)||localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString())}),ce(!0)},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{ue.clear(),ce(!0)},s.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){i.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await A("/events?type=system.notification.generated",{method:"DELETE"});let n=Date.now()-48*60*60*1e3;Ne.forEach(r=>{localStorage.setItem(`alert_read_ts_${r.id}`,n.toString())}),ue.clear(),ce(!0)}catch(n){console.error("Failed to clear alerts:",n)}finally{i.innerHTML="<i class='bx bx-trash'></i> Clear"}}},i.dataset.listenerAttached="true")}async function Ve(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await A(t);if(!e.ok)return;let i=(await e.json()).events||[],n=0;i.forEach(r=>{let l=r.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}if((l.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${r.id}`)||n++}),vt(n)}catch{}}var Et=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn" style="${B()?"display: none;":""}" title="New Idea"><i class='bx bx-plus'></i></button>
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
`,fe=new Set,Re=[],$e=null;async function ge(t=!1){let e=document.getElementById("roadmap-list");if(e){Ts();try{let s=await A("/roadmap");if(!s.ok)throw new Error("Offline");let i=await s.json();Re=i;let n=d=>{let x=fe.has(d.id),p=d.state==="published",u=d.state==="consumed",a="event-border-grey";p&&(a="event-border-blue"),u&&(a="event-border-purple");let C=new Date(d.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${a} cursor-pointer ${x?"expanded":""}`,h.dataset.itemId=d.id,h.onclick=f=>{if(f.target.closest("button"))return;if(h.classList.contains("expanded")){h.classList.remove("expanded");let y=h.querySelector(".event-details");y&&(y.style.display="none"),fe.delete(d.id)}else{h.classList.add("expanded");let y=h.querySelector(".event-details");y&&(y.style.display="block"),fe.add(d.id)}};let o=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${d.state.toUpperCase()}]</span>`;h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${C.split(",")[1]}</span>
          <span class="event-date">${C.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${o}</div>
          <div class="event-message" style="white-space: pre-wrap;">${N(d.content)}</div>
          <div class="event-details" style="${x?"display: block;":"display: none;"} ">
            ${B()?"":`
            <div class="event-details-header" style="margin-bottom: 15px;">
              <h5 style="margin: 0; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Item Controls</h5>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${u?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${p?"bx-pause":"bx-rocket"}'></i> ${p?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            `}
            ${u?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(d.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let m=h.querySelector(".event-details");return m&&m.addEventListener("click",f=>{f.stopPropagation()}),h.querySelector(".edit-btn")?.addEventListener("click",()=>ks(d)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Ss(d)),h.querySelector(".delete-btn")?.addEventListener("click",()=>Ms(d.id)),h.querySelector(".close-details-btn")?.addEventListener("click",f=>{f.stopPropagation(),h.classList.remove("expanded");let g=h.querySelector(".event-details");g&&(g.style.display="none"),fe.delete(d.id)}),h},r=Array.from(e.children),l=new Map(r.map(d=>[d.dataset.itemId,d])),b=new Set(i.map(d=>d.id));if(r.forEach(d=>{let x=d.dataset.itemId;(!x||!b.has(x))&&d.remove()}),!Re||Re.length===0){e.innerHTML=P("empty","Your roadmap is empty.",B()?"Dexter is currently idle.":`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let c=null;i.forEach((d,x)=>{let p=l.get(d.id);(!p||t)&&(p&&p.remove(),p=n(d),!p)||(x===0?e.firstElementChild!==p&&e.prepend(p):c&&c.nextElementSibling!==p&&c.after(p),c=p)})}catch{e.children.length===0&&(e.innerHTML=P("offline","Failed to load roadmap.","The event service may be offline."))}}}function Ts(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),s=document.getElementById("roadmap-cancel"),i=document.getElementById("roadmap-expand-all"),n=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{$e=null;let r=document.getElementById("roadmap-editor-input");r&&(r.value="");let l=document.getElementById("roadmap-editor-container");l&&(l.style.display="block")},t.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=()=>{let r=document.getElementById("roadmap-editor-container");r&&(r.style.display="none"),$e=null},s.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let r=document.getElementById("roadmap-editor-input"),l=r?r.value:"";if(!l.trim())return;let b=$e?`/roadmap/${$e}`:"/roadmap",c=$e?"PATCH":"POST";try{await A(b,{method:c,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:l})});let d=document.getElementById("roadmap-editor-container");d&&(d.style.display="none"),ge(!0)}catch(d){console.error(d)}},e.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=()=>{Re.forEach(r=>fe.add(r.id)),ge(!0)},i.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{fe.clear(),ge(!0)},n.dataset.listenerAttached="true")}function ks(t){$e=t.id;let e=document.getElementById("roadmap-editor-input");e&&(e.value=t.content);let s=document.getElementById("roadmap-editor-container");s&&(s.style.display="block",s.scrollIntoView({behavior:"smooth"}))}async function Ss(t){let e=t.state==="published"?"draft":"published";try{await A(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),ge(!0)}catch(s){console.error(s)}}async function Ms(t){if(confirm("Delete this roadmap item?"))try{await A(`/roadmap/${t}`,{method:"DELETE"}),fe.delete(t),ge(!0)}catch(e){console.error(e)}}var kt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn" title="Expand All"><i class='bx bx-expand'></i></button>
        <button id="blueprints-close-all" class="notif-action-btn" title="Close All"><i class='bx bx-collapse'></i></button>
        <button id="blueprints-clear" class="notif-action-btn danger" style="${B()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
    </div>
`,St=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,Tt=null,be=new Set,Mt=[];async function ve(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Ls();let s="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let i=await A(s);if(!i.ok)throw new Error("Service is offline or unreachable.");let r=(await i.json()).events||[];if(Mt=r,Tt=Date.now(),te(2,Tt),r.length===0){e.innerHTML=P("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),Me(2,0);return}t&&(e.innerHTML="");let l=p=>{let u=p.event;if(typeof u=="string")try{u=JSON.parse(u)}catch{return null}let a=(u.title||"Untitled Blueprint").trim(),v=(u.summary||u.body||"No summary provided.").trim(),C=(u.content||"").trim(),h=(u.category||"architecture").trim(),o=(u.related_services||u.affected_services||[]).map(z=>z.trim()),m=(u.implementation_path||[]).map(z=>z.trim()),f=u.source_event_ids||[],g=u.approved===!0,y=new Date(p.timestamp*1e3),H=y.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),I=y.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=be.has(p.id),L=S?"display: block;":"display: none;",$=document.createElement("div");$.className=`event-item notification-item event-border-purple cursor-pointer ${S?"expanded":""} ${g?"blueprint-approved":""}`,$.dataset.blueprintId=p.id,g&&($.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",$.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let O=g?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[h]||"bx-paint";$.onclick=function(z){let T=this;if(T.classList.contains("expanded")){T.classList.remove("expanded"),be.delete(p.id);let _=T.querySelector(".event-details");_&&(_.style.display="none")}else{T.classList.add("expanded"),be.add(p.id);let _=T.querySelector(".event-details");_&&(_.style.display="block")}};let U="";m.length>0&&(U=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${m.map(z=>`<li style="margin-bottom: 5px;">${N(z)}</li>`).join("")}</ul></div>
                    </div>
                `);let J="";f.length>0&&(J=`
                    <div class="blueprint-source" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Source Alerts</h5>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${f.map(z=>`
                                <a href="#" onclick="window.dexter.viewEvent('${z}'); return false;" style="color: #03dac6; text-decoration: none; font-size: 0.75em; font-family: 'JetBrains Mono', monospace; padding: 4px 8px; background: rgba(3, 218, 198, 0.05); border: 1px solid rgba(3, 218, 198, 0.1); border-radius: 4px;">
                                    <i class='bx bx-link-external'></i> ${z.substring(0,8)}...
                                </a>
                            `).join("")}
                        </div>
                    </div>
                `);let K=o.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${o.join(", ")}</span></div>`:"<div></div>",W=B(),k=g?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${K}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s; display: ${W?"none":"block"};"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${K}
                    <div style="display: ${W?"none":"flex"}; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;$.innerHTML=`
                ${g?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${H}</span>
                    <span class="event-date">${I}</span>
                </div>
                <div class="event-icon" style="${g?"color: #03dac6;":""}"><i class='bx ${O}'></i></div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${a}</div>
                    <div class="event-details" style="${L}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px;">${N(v)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${N(C)}</div>
                        </div>
                        ${U}
                        ${J}
                        ${k}
                    </div>
                </div>
            `;let w=$.querySelector(".blueprint-approve-btn");w&&(w.onclick=async z=>{z.stopPropagation(),w.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await A(`/events/${p.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&ve(!0)}catch(T){console.error("Failed to approve blueprint:",T)}});let E=$.querySelector(".blueprint-delete-btn");E&&(E.onclick=async z=>{z.stopPropagation();let T=!g;E.innerHTML=T?"<i class='bx bx-loader-alt spin'></i> Declining...":"<i class='bx bx-loader-alt spin'></i> Deleting...";try{(await A(`/events/${p.id}`,{method:"DELETE"})).ok&&ve(!0)}catch(q){console.error("Failed to delete blueprint:",q)}});let M=$.querySelector(".event-details");M&&M.addEventListener("click",z=>{z.stopPropagation()});let R=$.querySelector(".close-details-btn");return R&&R.addEventListener("click",z=>{z.stopPropagation(),$.classList.remove("expanded");let T=$.querySelector(".event-details");T&&(T.style.display="none"),be.delete(p.id)}),$},b=Array.from(e.children),c=new Map(b.map(p=>[p.dataset.blueprintId,p])),d=new Set(r.map(p=>p.id));b.forEach(p=>{let u=p.dataset.blueprintId;(!u||!d.has(u))&&p.remove()});let x=null;r.forEach((p,u)=>{let a=c.get(p.id);if(!a||t){a&&a.remove();let v=l(p);if(!v)return;a=v}u===0?e.firstElementChild!==a&&e.prepend(a):x&&x.nextElementSibling!==a&&x.after(a),x=a}),Me(2,r.length),xt()}catch(i){console.error("Error fetching blueprints:",i),e.children.length===0&&(e.innerHTML=P("offline","Failed to load blueprints.","The event service may be offline."))}}async function Lt(){let t="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let e=await A(t);if(!e.ok)return;let i=(await e.json()).events||[],n=0;i.forEach(r=>{let l=r.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}l.approved!==!0&&n++}),yt(n)}catch{}}function Ls(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),s=document.getElementById("blueprints-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Mt.forEach(i=>be.add(i.id)),ve(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{be.clear(),ve(!0)},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.onclick=async()=>{if(confirm("Are you sure you want to delete all UNAPPROVED blueprints?")){s.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await A("/events?type=system.blueprint.generated",{method:"DELETE"}),be.clear(),ve(!0)}catch(i){console.error("Failed to clear blueprints:",i)}finally{s.innerHTML="<i class='bx bx-trash'></i> Clear"}}},s.dataset.listenerAttached="true")}var re="STANDBY",At=null,Te=[],Y=null,Pe=null,It=()=>`
    <div id="progress-view-root" class="progress-container">
        <!-- Initial render will happen here -->
        ${Bt()}
    </div>
  `;function Bt(){switch(re){case"ACTIVE":return Is();case"COMPLETED":return Bs();case"STANDBY":default:return As()}}function As(){return`
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
  `}function Is(){let t=Te.map(e=>`
    <div class="terminal-line">
        <span class="line-time">${e.time}</span>
        <span class="line-prefix">></span>
        <span class="line-msg">${N(e.msg)}</span>
    </div>
  `).join("");return`
    <div class="active-task-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <h4 style="margin: 0; font-size: 0.8em; text-transform: uppercase; letter-spacing: 2px; color: #bb86fc;">Active Mission</h4>
                <h2 id="active-task-title" style="margin: 5px 0 0 0; font-size: 1.2em;">${Y?.title||"Processing..."}</h2>
            </div>
            <div class="pulse-indicator" style="background: #bb86fc; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px #bb86fc;"></div>
        </div>
        <div class="task-progress-bar">
            <div id="active-task-progress-fill" class="task-progress-fill" style="width: ${Y?.progress||0}%"></div>
        </div>
        <div style="margin-top: 8px; display: flex; justify-content: space-between; font-size: 0.75em; font-family: 'JetBrains Mono'; color: #666;">
            <span>PHASE: IMPLEMENTATION</span>
            <span id="active-task-progress-text">${Y?.progress||0}% COMPLETE</span>
        </div>
    </div>

    <div class="thinking-stream-container">
        <div class="terminal-header">
            <div class="terminal-controls">
                <div class="terminal-dot" style="background: #ff5f56;"></div>
                <div class="terminal-dot" style="background: #ffbd2e;"></div>
                <div class="terminal-dot" style="background: #27c93f;"></div>
            </div>
            <div style="font-family: 'JetBrains Mono'; font-size: 0.7em; color: #666; text-transform: uppercase;">dexter_mind_v2.0.sh</div>
            <div></div>
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
                <span class="summary-stat-value">${Pe?.duration||"12m 4s"}</span>
                <span class="summary-stat-label">Duration</span>
            </div>
            <div class="summary-stat">
                <span class="summary-stat-value">${Pe?.steps||"42"}</span>
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
                <span style="font-family: 'JetBrains Mono'; font-size: 0.9em; color: #bb86fc;">${Pe?.result||"Optimized Event Bus"}</span>
                <i class='bx bx-chevron-right' style="color: #444;"></i>
            </div>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center;">
            <button class="notif-action-btn" onclick="window.dispatchEvent(new CustomEvent('dex-mock-reset'))">
                <i class='bx bx-refresh'></i> Return to Standby
            </button>
        </div>
    </div>
  `}async function ke(){let t=document.getElementById("progress-view-root");t&&(re!==At&&(t.innerHTML=Bt(),At=re),re==="ACTIVE"&&_s())}function _s(){let t=document.getElementById("active-task-title"),e=document.getElementById("active-task-progress-fill"),s=document.getElementById("active-task-progress-text"),i=document.getElementById("terminal-output");if(t&&Y&&(t.innerText=Y.title),e&&Y&&(e.style.width=`${Y.progress}%`),s&&Y&&(s.innerText=`${Y.progress}% COMPLETE`),i){let n=i.children.length;if(Te.length>n){for(let r=n;r<Te.length;r++){let l=Te[r],b=document.createElement("div");b.className="terminal-line",b.innerHTML=`
            <span class="line-time">${l.time}</span>
            <span class="line-prefix">></span>
            <span class="line-msg">${N(l.msg)}</span>
        `,i.appendChild(b)}i.scrollTop=i.scrollHeight}}}window.addEventListener("dex-mock-start",()=>{re="ACTIVE",Te=[{time:new Date().toLocaleTimeString(),msg:"Initializing cognitive engine..."},{time:new Date().toLocaleTimeString(),msg:"Connecting to event-service..."}],Y={title:"Refactoring System Event Bus",progress:10},ke();let t=0,e=setInterval(()=>{if(re!=="ACTIVE"){clearInterval(e);return}t++,Y.progress=Math.min(100,Y.progress+Math.floor(Math.random()*15));let s=["Analyzing internal/bus.go...","Checking circular dependencies.","Optimizing channel throughput.","Writing unit tests for refactor.","Deploying to staging environment.","Verifying system integrity."];t<s.length&&Te.push({time:new Date().toLocaleTimeString(),msg:s[t]}),Y.progress>=100&&(re="COMPLETED",Pe={duration:"1m 12s",steps:32,result:"Optimized Event Bus"},clearInterval(e)),ke()},1500)});window.addEventListener("dex-mock-stop",()=>{re="STANDBY",ke()});window.addEventListener("dex-mock-reset",()=>{re="STANDBY",ke()});var _t=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px; align-items: center;">
    <select id="task-filter-owner" class="task-form-select" style="padding: 4px 10px; font-size: 0.75em; height: 32px; border-color: rgba(255,255,255,0.05);">
        <option value="all">All Owners</option>
    </select>
    <button id="create-chore-btn" class="notif-action-btn" style="${B()?"display: none;":""}" title="New Task"><i class='bx bx-plus'></i></button>
  </div>
`,Ht=()=>`
        <!-- Create Task Form -->
        <div id="create-chore-form" class="new-task-form-container" style="display: none;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                <i class='bx bx-plus-circle' style="color: #bb86fc; font-size: 1.2em;"></i>
                <h3 style="margin: 0; font-size: 1.1em; letter-spacing: 1px;">Initialize Research Task</h3>
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
                    </select>
                </div>

                <div class="task-input-group">
                    <label id="task-owner-label" class="task-input-label">Report result to</label>
                    <select id="new-chore-owner" class="task-form-select">
                        <option value="313071000877137920">Creator (Owen)</option>
                        <option value="dexter">Dexter (Event Timeline)</option>
                        <!-- Contacts will be injected here -->
                    </select>
                </div>
            </div>

            <div class="task-form-actions">
                <button id="cancel-chore-btn" class="task-btn task-btn-discard"><i class='bx bx-x'></i> Discard</button>
                <button id="save-chore-btn" class="task-btn task-btn-deploy"><i class='bx bx-zap'></i> Deploy Task</button>
            </div>
        </div>

        <div id="chores-list" class="tasks-vertical-list" style="margin-bottom: 30px; display: flex; flex-direction: column; gap: 15px;"></div>
    `,Oe=[],Ke={"313071000877137920":"Owen"};async function je(){let t=document.getElementById("chores-list"),e=document.getElementById("create-chore-btn"),s=document.getElementById("create-chore-form"),i=document.getElementById("save-chore-btn"),n=document.getElementById("cancel-chore-btn"),r=document.getElementById("new-chore-owner"),l=document.getElementById("task-owner-label"),b=document.getElementById("task-filter-owner");if(r&&!r.dataset.populated&&!B())try{Ee("/contacts").then(async d=>{d.ok&&(((await d.json()).members||[]).forEach(u=>{if(Ke[u.id]=u.nickname||u.username,u.id==="313071000877137920")return;let a=document.createElement("option");a.value=u.id;let v=u.nickname||u.username;a.textContent=`${v} (${u.username})`,r.appendChild(a)}),r.dataset.populated="true")})}catch{console.warn("Failed to fetch contacts for dropdown")}r&&l&&!r.dataset.listenerAttached&&(r.onchange=()=>{let d=r.options[r.selectedIndex];if(d){let x=d.text.split(" (")[0];d.value==="dexter"&&(x="Dexter"),l.textContent=`Report result to: ${x}`}},r.dataset.listenerAttached="true"),b&&!b.dataset.listenerAttached&&(b.onchange=()=>c(),b.dataset.listenerAttached="true");function c(){if(!t)return;let d=b?.value||"all",x=d==="all"?Oe:Oe.filter(u=>u.owner_id===d);if(x.length===0){t.innerHTML=P("empty",d==="all"?"No active tasks.":"No tasks found for this owner.",B()?"Dexter is not currently performing research.":"Click the plus icon to create a research task.");return}let p=x.map(u=>{let a=u.last_run===0?"Never":new Date(u.last_run*1e3).toLocaleString(),v=u.memory?u.memory.length:0,C=u.status==="active"?"#03dac6":"#666",h=Ke[u.owner_id]||u.owner_id.substring(0,8);return`
                <div class="service-widget wide-task-card" style="border-left: 4px solid ${C}; width: 100%; display: flex; flex-direction: column; padding: 20px;">
                    <div class="service-widget-header" style="display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; margin-bottom: 15px;">
                        <div style="display: flex; gap: 15px; flex: 1;">
                            <i class='bx bx-search-alt' style="color: ${C}; font-size: 1.5em; margin-top: 2px;"></i>
                            <div style="text-align: left;">
                                <h3 style="font-size: 1.1em; white-space: normal; line-height: 1.4; font-weight: 600; margin: 0;">${u.natural_instruction}</h3>
                                <div style="margin-top: 8px; display: flex; gap: 15px; align-items: center;">
                                    <span style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace;"><i class='bx bx-user' style="margin-right: 4px;"></i>${h}</span>
                                    <span style="font-size: 0.7em; color: #666; font-family: 'JetBrains Mono', monospace;"><i class='bx bx-time' style="margin-right: 4px;"></i>${u.schedule}</span>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button class="icon-btn delete-chore-btn" data-id="${u.id}" style="background: none; border: none; color: #cf6679; cursor: pointer; padding: 8px; border-radius: 50%; transition: background 0.2s;"><i class='bx bx-trash' style="font-size: 1.2em;"></i></button>
                        </div>
                    </div>
                    
                    <div class="service-widget-body" style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Last Run</span>
                            <span style="font-size: 0.85em; color: #fff; font-family: 'JetBrains Mono';">${a}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Items Found</span>
                            <span style="font-size: 0.85em; color: #03dac6; font-weight: bold;">${v}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 200px;">
                            <span style="font-size: 0.6em; color: #555; text-transform: uppercase; letter-spacing: 1px;">Target Focus</span>
                            <span style="font-size: 0.8em; color: #888; font-family: 'JetBrains Mono'; word-break: break-all;">${u.execution_plan.entry_url||"Autonomous Detection"}</span>
                        </div>
                    </div>
                </div>
            `}).join("");t.innerHTML=p,t.querySelectorAll(".delete-chore-btn").forEach(u=>{u.onclick=async a=>{a.stopPropagation();let v=u.dataset.id;confirm("Delete this task?")&&(await A(`/chores/${v}`,{method:"DELETE"}),je())}})}e&&!e.dataset.listenerAttached&&(e.onclick=()=>{s&&(s.style.display=s.style.display==="none"?"block":"none")},e.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{s&&(s.style.display="none")},n.dataset.listenerAttached="true"),i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{let d=document.getElementById("new-chore-instruction"),x=document.getElementById("new-chore-url"),p=document.getElementById("new-chore-owner"),u=document.getElementById("new-chore-schedule"),a=d?.value,v=x?.value,C=p?.value||"313071000877137920",h=u?.value||"every_24h";if(a){i.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A("/chores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner_id:C,natural_instruction:a,entry_url:v,schedule:h})}),s&&(s.style.display="none"),d&&(d.value=""),x&&(x.value=""),je()}catch(o){console.error(o),alert("Failed to create research task")}finally{i.innerHTML="<i class='bx bx-zap'></i> Deploy Task"}}},i.dataset.listenerAttached="true");try{let d=await A("/chores");if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);if(Oe=await d.json()||[],b){let p=b.value,u=Array.from(new Set(Oe.map(a=>a.owner_id)));b.innerHTML='<option value="all">All Owners</option>',u.forEach(a=>{let v=document.createElement("option");v.value=a,v.textContent=Ke[a]||`Owner: ${a.substring(0,8)}`,b.appendChild(v)}),b.value=p,b.selectedIndex===-1&&(b.value="all")}c()}catch(d){console.error("Failed to fetch chores",d)}}var Dt=()=>`
    <div class="ideas-container">
        <div class="progress-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-loader-circle spin' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Live Progress</h2>
                </div>
            </div>
            ${It()}
        </div>
    </div>
`,zt=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${Et()}
            </div>
            ${$t()}
        </div>
    </div>
`,Nt=()=>`
    <div class="ideas-container">
        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${kt()}
            </div>
            ${St()}
        </div>
    </div>
`,Rt=()=>`
    <div class="ideas-container">
        <div class="chores-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-task' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Research Tasks</h2>
                </div>
                ${_t()}
            </div>
            ${Ht()}
        </div>
    </div>
`;async function Ze(){await Promise.all([ge(),ve(),ke(),je()])}var Hs=`
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
`;function Pt(t,e){return{...t==="313071000877137920"?{techLevel:11,commStyle:"Direct / Efficient",patience:"Infinite",vibe:"Architect",facts:[{k:"Role",v:"Creator"},{k:"Lang",v:"Go"},{k:"OS",v:"Linux"},{k:"Editor",v:"Neovim"}],badges:["Creator","Admin","Architect"],stats:{msgs:14052,tokens:"45.2M",lastSeen:"Now"},topics:[{name:"System Architecture",val:85},{name:"Code Review",val:60},{name:"Music / Vibes",val:30},{name:"Debugging",val:45}],traits:{openness:95,conscientiousness:90,extraversion:40,agreeableness:60,neuroticism:15},dossier:{identity:{fullName:"Owen Easter",ageRange:"25-30",gender:"Male",location:"United Kingdom",sexuality:"Heterosexual",relationship:"Single"},career:{jobTitle:"Founder / Systems Architect",company:"Easter Company",skills:["Go","Distributed Systems","AI Integration"]},personal:{hobbies:["Synthwave Production","Coding","Gaming"],habits:["Late Night Coding","Coffee Consumption","System Optimization"],vices:["Perfectionism"],virtues:["Efficiency","Vision"]},social:[{name:"Dexter",relation:"Creation / AI",trust:"100%"},{name:"Sarah",relation:"Close Friend",trust:"95%"},{name:"Mike",relation:"Developer Peer",trust:"88%"}]}}:{techLevel:[2,4,6,8,3,5][Math.floor(Math.random()*6)],commStyle:["Verbose","Casual","Formal","Chaotic","Inquisitive"][Math.floor(Math.random()*5)],patience:Math.random()>.5?"High":"Medium",vibe:["NPC","Guest","Lurker","Regular","Fan"][Math.floor(Math.random()*5)],facts:[{k:"Role",v:"User"},{k:"Interest",v:Math.random()>.5?"Coding":"Gaming"}],badges:["User"],stats:{msgs:Math.floor(Math.random()*500),tokens:Math.floor(Math.random()*100)+"K",lastSeen:Math.floor(Math.random()*24)+"h ago"},topics:[{name:"General Chat",val:80},{name:"Troubleshooting",val:40},{name:"Off-Topic",val:20}],traits:{openness:Math.floor(Math.random()*100),conscientiousness:Math.floor(Math.random()*100),extraversion:Math.floor(Math.random()*100),agreeableness:Math.floor(Math.random()*100),neuroticism:Math.floor(Math.random()*100)},dossier:{identity:{fullName:"Unknown Subject",ageRange:"Unknown",gender:"Unknown",location:"Global",sexuality:"Unknown",relationship:"Unknown"},career:{jobTitle:"Unknown",company:"Unknown",skills:["General User"]},personal:{hobbies:["Lurking","Chatting"],habits:["Unknown"],vices:["None Observed"],virtues:["None Observed"]},social:[]}},id:t,username:e}}function Ot(t){if(!document.getElementById("dex-profile-styles")){let s=document.createElement("style");s.id="dex-profile-styles",s.textContent=Hs,document.head.appendChild(s)}let e=document.createElement("div");e.className="profile-overlay",e.innerHTML=`
        <div class="profile-card" style="height: 400px; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <div style="font-size: 3em; color: #bb86fc;"><i class='bx bx-loader-alt spin'></i></div>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono'; color: #666;">ACCESSING SECURE ARCHIVE...</div>
            </div>
        </div>
    `,e.addEventListener("click",s=>{s.target===e&&(e.classList.remove("active"),document.body.style.overflow="",setTimeout(()=>e.remove(),300))}),document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("active")),document.body.style.overflow="hidden",Ee(`/profile/${t.id}`).then(async s=>{if(s.ok){let i=await s.json();Ye(e,t,i)}else{console.log("Profile not found or error, using mock data.");let i=Pt(t.id,t.username);Ye(e,t,i)}}).catch(s=>{console.error("Profile fetch error:",s);let i=Pt(t.id,t.username);Ye(e,t,i)})}function Ye(t,e,s){let i=e.status==="online"?"#03dac6":e.status==="idle"?"#ffb74d":"#cf6679",n=()=>{let C=(s.attributes||s.facts||[]).map(y=>{let H=y.key||y.k,I=y.value||y.v;return`
            <div class="fact-chip">
                <span class="fact-key">${H}:</span>
                <span class="fact-val">${I}</span>
            </div>
        `}).join(""),h=s.cognitive_model||s,o=h.technical_level||h.techLevel||0,m=h.communication_style||h.commStyle||"Unknown",f=h.patience_level||h.patience||"Unknown",g=h.vibe||"Unknown";return`
            <div class="overview-grid">
                <div class="profile-section">
                    <div class="profile-section-title"><i class='bx bx-brain'></i> Cognitive Model</div>
                    
                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Technical Level</span>
                            <span>${o}/10</span>
                        </div>
                        <div class="cog-bar-bg">
                            <div class="cog-bar-fill" style="width: ${Math.min(o*10,100)}%;"></div>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Communication Style</span>
                            <span style="color: #03dac6;">${m}</span>
                        </div>
                    </div>

                    <div class="cog-metric">
                        <div class="cog-label">
                            <span>Predicted Patience</span>
                            <span>${f}</span>
                        </div>
                    </div>

                     <div class="cog-metric">
                        <div class="cog-label">
                            <span>Vibe Check</span>
                            <span style="font-family: 'JetBrains Mono'; color: #bb86fc;">${g}</span>
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
        `},r=()=>{let C=s.dossier||{},h=C.identity||{},o=C.career||{},m=C.personal||{},f=C.social||[];return`
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
                        <div class="dossier-value">${o.jobTitle||"Unknown"}</div>
                        <div style="font-size: 0.8em; color: #888; margin-top: 2px;">@ ${o.company||"Unknown"}</div>
                        <div style="height: 15px;"></div>
                         <div class="dossier-label">Key Skills</div>
                         <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
                            ${(o.skills||[]).map(g=>`<span style="font-size: 0.75em; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">${g}</span>`).join("")}
                         </div>
                    </div>
                </div>

                <!-- Personal Column -->
                <div class="dossier-column">
                    <div class="profile-section-title"><i class='bx bx-home-heart'></i> Personal Life</div>
                    
                    <div class="dossier-item">
                        <div class="dossier-label"><i class='bx bx-joystick'></i> Hobbies</div>
                        <div style="margin-top: 10px;">
                            ${(m.hobbies||[]).map(g=>`<div class="dossier-list-item">${g}</div>`).join("")}
                        </div>
                    </div>

                    <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-sync'></i> Habits</div>
                        <div style="margin-top: 10px;">
                            ${(m.habits||[]).map(g=>`<div class="dossier-list-item">${g}</div>`).join("")}
                        </div>
                    </div>

                     <div class="dossier-item" style="margin-top: 20px;">
                        <div class="dossier-label"><i class='bx bx-error-circle'></i> Known Vices</div>
                        <div style="margin-top: 10px;">
                            ${(m.vices||[]).map(g=>`<div class="dossier-list-item" style="color: #cf6679;">${g}</div>`).join("")}
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
        `},l=()=>{let C=s.traits||{};return`
        <div class="profile-section-title"><i class='bx bx-radar'></i> Personality Matrix (OCEAN)</div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-top: 30px; text-align: center;">
            ${Object.entries(C).map(([h,o])=>`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                    <div style="width: 10px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 5px; position: relative; overflow: hidden;">
                        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: ${o}%; background: ${Number(o)>50?"#03dac6":"#cf6679"}; transition: height 1s;"></div>
                    </div>
                    <div style="font-size: 0.8em; text-transform: uppercase; letter-spacing: 1px; color: #aaa;">${h.substring(0,4)}</div>
                    <div style="font-family: monospace;">${o}%</div>
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
    `},b=()=>`
        <div class="profile-section-title"><i class='bx bx-map-alt'></i> Conversation Topics</div>
        <div style="margin-top: 20px;">
            ${(s.topics||[]).map(C=>`
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
    `,c=()=>`
        <div class="profile-section-title"><i class='bx bx-code-alt'></i> Raw Profile JSON</div>
        <div class="raw-json">${JSON.stringify(s,null,2)}</div>
    `,d=`
        <div class="profile-card">
            <button class="close-profile-btn" onclick="document.querySelector('.profile-overlay').click()"><i class='bx bx-x'></i></button>
            
            <div class="profile-header">
                <div class="profile-avatar-container">
                    <img src="${e.avatar_url||"https://cdn.discordapp.com/embed/avatars/0.png"}" class="profile-avatar">
                    <div class="profile-status-dot" style="background: ${i}"></div>
                </div>
                <div class="profile-identity">
                    <h2>${N(e.username)}</h2>
                    <div class="profile-badges">${(s.badges||[]).map(C=>`<span class="profile-badge ${C==="Creator"?"master":""}">${C}</span>`).join("")}</div>
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
                <div id="tab-dossier" class="tab-content">${r()}</div>
                <div id="tab-psychometrics" class="tab-content">${l()}</div>
                <div id="tab-topics" class="tab-content">${b()}</div>
                <div id="tab-raw" class="tab-content">${c()}</div>
            </div>

            <div class="profile-footer">
                <div style="display: flex; gap: 20px;">
                    <span>ID: ${e.id}</span>
                    <span>LIFETIME TOKENS: ${s.stats?.tokens_consumed||s.stats?.tokens||"0"}</span>
                    <span>MSGS: ${s.stats?.total_messages||s.stats?.msgs||"0"}</span>
                </div>
                <button id="profile-expand-toggle" class="expand-btn"><i class='bx bx-expand-alt'></i> Detailed Analysis</button>
            </div>
        </div>
    `;t.innerHTML=d;let x=t.querySelector(".profile-card"),p=t.querySelector("#profile-expand-toggle"),u=t.querySelectorAll(".profile-tab-btn"),a=t.querySelectorAll(".tab-content"),v=t.querySelector(".close-profile-btn");v&&v.addEventListener("click",()=>{t.classList.remove("active"),document.body.style.overflow="",setTimeout(()=>t.remove(),300)}),u.forEach(C=>{C.addEventListener("click",()=>{u.forEach(m=>m.classList.remove("active")),a.forEach(m=>m.classList.remove("active")),C.classList.add("active");let h=C.dataset.tab,o=t.querySelector(`#tab-${h}`);o&&o.classList.add("active")})}),p&&p.addEventListener("click",()=>{x.classList.toggle("expanded");let C=x.classList.contains("expanded");p.innerHTML=C?"<i class='bx bx-collapse-alt'></i> Collapse View":"<i class='bx bx-expand-alt'></i> Detailed Analysis"})}var jt=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto; ${B()?"display: none;":""}" title="Refresh Contacts"><i class='bx bx-refresh'></i></button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,Ds=null;async function Xe(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await Xe(),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),t.dataset.listenerAttached||(t.onclick=s=>{let n=s.target.closest(".user-profile-card");if(n&&n.dataset.user)try{let r=JSON.parse(n.dataset.user);Ot(r)}catch(r){console.error("Failed to parse user data",r)}},t.dataset.listenerAttached="true");try{let s=await Ee("/contacts");if(!s.ok)throw new Error("Service unreachable");let n=(await s.json()).members||[];if(Ds=Date.now(),n.length===0){t.innerHTML=P("empty","No contacts found.","Check your Discord connection.");return}let r={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};n.sort((l,b)=>{let c=r[l.level]??10,d=r[b.level]??10;return c!==d?c-d:l.username.localeCompare(b.username)}),t.innerHTML=n.map(l=>{let b=l.color&&l.color!==0,c=b?"#"+l.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",d=l.status==="online"?"#5eff5e":l.status==="idle"?"#ffa500":l.status==="dnd"?"#ff4d4d":"#666",x="#888";l.level==="Me"||l.level==="Master"?x="#bb86fc":l.level==="Admin"?x="#cf6679":l.level==="Moderator"?x="#03dac6":l.level==="Contributor"&&(x="#ffa500");let p=l.level==="Me",u=p?"rgba(187, 134, 252, 0.08)":b?`${c}11`:"rgba(255,255,255,0.03)",a=p?"2px solid #bb86fc":b?`1px solid ${c}66`:"1px solid rgba(255,255,255,0.1)";return`
                <div class="user-profile-card" 
                     data-user="${JSON.stringify(l).replace(/"/g,"&quot;")}"
                     style="background: ${u}; padding: 15px; border-radius: 8px; border: ${a}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden; cursor: pointer; transition: transform 0.2s, background 0.2s, box-shadow 0.2s;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${p?"#bb86fc":b?c:"transparent"}33, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${l.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${p?"2px solid #bb86fc":b?`2px solid ${c}`:"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${d}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: ${b?c:"#fff"}; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">${l.nickname||l.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${x}; font-weight: 600; text-transform: uppercase;">${p?"DEXTER (ME)":l.level}</span>
                            <span style="font-size: 0.7em; color: #666; font-family: monospace;">(${l.username})</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${l.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=P("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var zs={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","analysis.user.message_signals":"Analyzed Signals for User {user_id}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"{agent_name} Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function Ut(t,e){let s=zs[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(s="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(s=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"){let n=e.tier?e.tier.toUpperCase():"UNKNOWN";s=`${e.agent_name||"System"} Audit: ${n}`}if(t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!s)return t;let i=s.replace(/\{(\w+)\}/g,(n,r)=>e[r]!==void 0&&e[r]!==null?e[r]:n);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(i+=` (Translation: ${e.english_translation})`),i}var Qe=()=>`
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
            <button id="events-clear" class="notif-action-btn danger" style="${B()?"display: none;":""}" title="Clear"><i class='bx bx-trash'></i></button>
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
`,Ue=null,ye=new Set,Le=[],Z="all",Ns={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision","analysis.user.message_signals"],moderation:["moderation.explicit_content.deleted"]},Rs={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","analysis.user.message_signals":"bx-pulse","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Ps(t){for(let[e,s]of Object.entries(Ns))if(s.includes(t))return e;return"system"}function Os(t){return Rs[t]||"bx-square-rounded"}async function de(t=!1){let e=document.getElementById("events-timeline");if(!e)return;js();let i=`/events?ml=${Z==="all"?100:250}&format=json`;Z!=="all"&&(i+=`&category=${Z}`);try{let n=await A(i);if(!n.ok)throw new Error("Service unreachable");if(Le=((await n.json()).events||[]).filter(u=>{let a=u.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return!0}let v=a.type;return!(v==="system.blueprint.generated"||v==="system.notification.generated")}),Ue=Date.now(),te(1,Ue),Le.length===0){e.innerHTML=P("empty","No events found for this filter.");return}t&&(e.innerHTML="");let b=u=>{let a=u.event;if(typeof a=="string")try{a=JSON.parse(a)}catch{return null}let v=a.type,C=Ps(v),h=Os(v),o=v==="engagement.decision"||v==="messaging.bot.sent_message"||v==="messaging.user.sent_message"||v==="moderation.explicit_content.deleted"||v==="analysis.link.completed"||v==="analysis.visual.completed"||v==="analysis.router.decision"||v==="analysis.user.message_signals"||v==="system.cli.command"||v==="system.analysis.audit"||v==="system.test.completed"||v==="error_occurred"||v==="system.cli.status"||v==="system.attention.expired"||v.startsWith("system.roadmap")||v.startsWith("system.process"),m="event-border-grey";o&&(v==="moderation.explicit_content.deleted"||v==="error_occurred"?m="event-border-red":v==="analysis.link.completed"||v==="analysis.visual.completed"||v==="analysis.router.decision"||v==="system.analysis.audit"||v==="analysis.user.message_signals"?m="event-border-purple":v==="system.attention.expired"||v==="system.cli.command"||v==="system.cli.status"?m="event-border-orange":v==="system.test.completed"?m=a.test?.status==="OK"&&a.lint?.status==="OK"&&a.format?.status==="OK"?"event-border-blue":"event-border-red":m="event-border-blue");let f=o?"cursor-pointer":"",g=ye.has(u.id),y=g?"expanded":"",H=g?"display: block;":"display: none;",I=new Date(u.timestamp*1e3),S=I.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),L=I.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),$=Ut(v,a),D=a.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${a.user_level})</span>`:"",O="";if(o){let k="";if(v==="engagement.decision"){let w=E=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${E}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${a.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Input Decision")}
                            <pre class="detail-pre">${a.input_decision||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context History")}
                            <pre class="detail-pre">${a.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Engagement Output")}
                            <pre class="detail-pre">${a.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(v==="system.attention.expired"){let w=R=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${R}</h5>`,E=a.timestamp-a.last_active,M=Math.floor(E/60);k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${a.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${M} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context (Last Input)")}
                            <div class="detail-pre">${me(a.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${w("Thought Process (Last Output)")}
                            <div class="detail-pre">${me(a.last_output||"None")}</div>
                        </div>
                    `}else if(v==="messaging.bot.sent_message"){let w=R=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${R}</h5>`,E="";a.eval_count&&(E=`
                            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tokens (In/Out)</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${a.prompt_count} / ${a.eval_count}</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Total Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #03dac6; font-weight: bold;">${a.duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Load Time</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${a.load_duration_ms}ms</div>
                                </div>
                                <div style="flex: 1; min-width: 100px; text-align: center;">
                                    <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Processing</div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${a.prompt_duration_ms}ms / ${a.eval_duration_ms}ms</div>
                                </div>
                            </div>
                        `);let M="";if(a.chat_history&&a.chat_history.length>0){let R=a.chat_history.length,z=a.chat_history.map((T,q)=>{let _=T.name?T.name.toUpperCase():T.role.toUpperCase();!T.name&&_==="ASSISTANT"&&(_="DEXTER");let F=T.role==="user"?"#03dac6":T.role==="system"?"#ffb74d":"#bb86fc",G=q===R-1?"block":"none";return`
                                <div class="history-slide" data-index="${q}" style="display: ${G};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; color: ${F}; letter-spacing: 1px; font-weight: bold;">${_}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${q+1} of ${R}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${N(T.content)}</div>
                                </div>
                            `}).join("");M=`
                            <div class="event-detail-block">
                                ${w("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${z}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;"><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;">Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}k=`
                        ${E}
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${a.response_model||"N/A"}</span>
                        </div>
                        ${M||`
                            <div class="event-detail-block">
                                ${w("Raw Input (Prompt)")}
                                <pre class="detail-pre">${a.raw_input||"None"}</pre>
                            </div>
                            <div class="event-detail-block">
                                ${w("Raw Response Output")}
                                <pre class="detail-pre">${a.response_raw||"None"}</pre>
                            </div>
                        `}
                    `}else if(v==="analysis.user.message_signals"){let w=R=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${R}</h5>`,E=a.signals||{};k=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Sentiment</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${E.sentiment>.3?"#03dac6":E.sentiment<-.3?"#cf6679":"#aaa"}; font-weight: bold;">${E.sentiment?.toFixed(2)||0}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Intent</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; text-transform: uppercase;">${E.intent||"N/A"}</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Tech Depth</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${E.technical_depth||0}/10</div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Mood</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${E.mood||"N/A"}</div>
                            </div>
                        </div>
                        <div class="event-detail-block">
                            ${w("Extracted Topics")}
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${(E.topics||[]).map(R=>`<span class="profile-badge">${R}</span>`).join("")||'<span style="color: #666;">No topics mapped.</span>'}
                            </div>
                        </div>
                        <div class="event-detail-block" style="margin-top: 15px;">
                            ${w("Raw Model Output")}
                            <pre class="detail-pre">${N(a.raw_output)||"None"}</pre>
                        </div>
                    `}else if(v==="moderation.explicit_content.deleted"){let w=E=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${E}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${a.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${a.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Model Output")}
                            <pre class="detail-pre">${N(a.raw_output)||"None"}</pre>
                        </div>
                    `}else if(v==="analysis.link.completed"){let w=E=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${E}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${N(a.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Description")}
                            <pre class="detail-pre">${N(a.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Content Summary")}
                            <pre class="detail-pre">${N(a.summary)||"None"}</pre>
                        </div>
                    `}else if(v==="analysis.visual.completed"){let w=M=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${M}</h5>`,E="";a.base64_preview?E=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${a.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:a.url&&(E=`<div class="event-detail-block"><img src="${a.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${a.filename}</span>
                        </div>
                        ${E}
                        <div class="event-detail-block">
                            ${w("Visual Description")}
                            <pre class="detail-pre">${N(a.description)||"None"}</pre>
                        </div>
                    `}else if(v==="analysis.router.decision"){let w=E=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${E}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Decision:</span>
                            <span class="detail-value" style="color: #bb86fc; font-weight: bold;">${a.decision}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Model:</span>
                            <span class="detail-value">${a.model}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${a.url}" target="_blank" class="attachment-link">${a.url}</a></span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Model Output")}
                            <pre class="detail-pre">${N(a.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Input Context")}
                            <pre class="detail-pre">${N(a.raw_input)||"None"}</pre>
                        </div>
                    `}else if(v==="system.cli.command"){let w=E=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${E}</h5>`;k=`
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
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Exit Code:</span>
                            <span class="detail-value">${a.exit_code!==void 0?a.exit_code:"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Output")}
                            <pre class="detail-pre">${N(a.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(v==="system.analysis.audit"){let w=a.success?"#03dac6":"#ff4d4d",E=a.success?"SUCCESS":"FAILED",M=_=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${_}</h5>`,R="";a.error&&(R=`
                            <div class="event-detail-block">
                                ${M("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${N(a.error)}</pre>
                            </div>
                        `);let z="";if(a.chat_history&&a.chat_history.length>0){let _=a.chat_history.length,F=a.chat_history.map((G,ne)=>{let X=G.name?G.name.toUpperCase():G.role.toUpperCase();!G.name&&X==="USER"&&(X="SYSTEM"),!G.name&&X==="ASSISTANT"&&(X="AGENT");let V=G.role==="user"?"#03dac6":G.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${ne}" style="display: ${ne===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${V}; letter-spacing: 1px; font-weight: bold;">${X}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${ne+1} of ${_}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${N(G.content)}</div>
                                </div>
                            `}).join("");z=`
                            <div class="event-detail-block">
                                ${M("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${F}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${_<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let T="";if(a.corrections&&a.corrections.length>0){let _=a.corrections.map((F,G)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${F.type}] ${F.guidance}</div>
                                ${F.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${N(F.snippet)}</div>`:""}
                            </div>
                        `).join("");T=`
                            <div class="event-detail-block">
                                ${M(`Corrections (${a.corrections.length})`)}
                                ${_}
                            </div>
                        `}let q="";if(a.parsed_results&&a.parsed_results.length>0){let _=a.parsed_results.map(F=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${N(F.title)}</div>
                                <div style="color: #ddd;">${N(F.summary)}</div>
                            </div>
                        `).join("");q=`
                            <div class="event-detail-block">
                                ${M("Parsed Results")}
                                ${_}
                            </div>
                        `}k=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); justify-content: space-between; align-items: center;">
                            <div style="flex: 1; min-width: 120px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${a.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${a.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${w}; font-weight: bold;">${E} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${a.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${a.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px; text-align: center;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${a.model}</div>
                            </div>
                        </div>
                        ${R}
                        ${q}
                        ${T}
                        ${z}
                    `}else if(v==="system.test.completed"){let w=E=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${E}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${a.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${a.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Format")}
                            <pre class="detail-pre">${a.format?.status||"N/A"}: ${a.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Lint")}
                            <pre class="detail-pre">${a.lint?.status||"N/A"}: ${a.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Tests")}
                            <pre class="detail-pre">${a.test?.status||"N/A"}: ${a.test?.details||a.test?.message||"OK"}</pre>
                        </div>
                    `}else if(v==="error_occurred"){let w=E=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${E}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${a.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${N(a.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context")}
                            <pre class="detail-pre">${JSON.stringify(a.context||{},null,2)}</pre>
                        </div>
                    `}else if(v==="system.cli.status"){let w=E=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${E}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${a.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Message")}
                            <pre class="detail-pre">${N(a.message)}</pre>
                        </div>
                    `}else if(v==="messaging.user.sent_message"){let w="";a.attachments&&a.attachments.length>0&&(w=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${a.attachments.map(M=>{let R=M.content_type&&M.content_type.startsWith("image/"),z=(M.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${R?`<div class="attachment-thumb-container"><img src="${M.url}" alt="${M.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${M.url}" target="_blank" class="attachment-link">${M.filename}</a>
                                        <span class="attachment-meta">${M.content_type} \u2022 ${z}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${a.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${a.content||"(empty)"}</pre>
                        </div>
                        ${w}
                    `}O=`
                    <div class="event-details" style="${H}">
                        ${k}
                    </div>
                `}let U=document.createElement("div");U.className=`event-item ${m} ${f} ${y}`,U.dataset.eventId=u.id,U.onclick=function(k){if(!o)return;let w=this;if(w.classList.contains("expanded")){w.classList.remove("expanded"),ye.delete(u.id);let M=w.querySelector(".event-details");M&&(M.style.display="none")}else{w.classList.add("expanded"),ye.add(u.id);let M=w.querySelector(".event-details");M&&(M.style.display="block")}},U.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${S}</span>
                    <span class="event-date">${L}</span>
                </div>
                <div class="event-icon"><i class='bx ${h}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${C}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${C}</span>
                        ${u.service} ${D}
                    </div>
                    <div class="event-message">${$}</div>
                    ${O}
                </div>
            `;let J=U.querySelector(".event-details");if(J&&J.addEventListener("click",k=>{k.stopPropagation()}),o){let k=U.querySelector(".close-details-btn");k&&k.addEventListener("click",w=>{w.stopPropagation();let E=w.target.closest(".event-item");if(E){E.classList.remove("expanded"),ye.delete(u.id);let M=E.querySelector(".event-details");M&&(M.style.display="none")}})}let K=U.querySelector(".prev-btn"),W=U.querySelector(".next-btn");if(K&&W){let k=0,w=Array.from(U.querySelectorAll(".history-slide")),E=w.length,M=()=>{w.forEach((R,z)=>{R.style.display=z===k?"block":"none"}),K.disabled=k===0,W.disabled=k===E-1,K.style.opacity=k===0?"0.5":"1",W.style.opacity=k===E-1?"0.5":"1"};K.addEventListener("click",R=>{R.stopPropagation(),k>0&&(k--,M())}),W.addEventListener("click",R=>{R.stopPropagation(),k<E-1&&(k++,M())}),M()}return U},c=Array.from(e.children),d=new Map(c.map(u=>[u.dataset.eventId,u])),x=new Set(Le.map(u=>u.id));c.forEach(u=>{let a=u.dataset.eventId;(!a||!x.has(a))&&u.remove()});let p=null;Le.forEach((u,a)=>{let v=d.get(u.id);(!v||t)&&(v&&v.remove(),v=b(u),!v)||(a===0?e.firstElementChild!==v&&e.prepend(v):p&&p.nextElementSibling!==v&&p.after(v),p=v)}),Ue=Date.now(),te(1,Ue)}catch(n){console.error("Error fetching events:",n),e.children.length===0&&(e.innerHTML=P("offline","Failed to load events.","The event service may be offline."))}}function js(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),s=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Le.forEach(n=>ye.add(n.id)),de(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ye.clear(),de(!0)},e.dataset.listenerAttached="true"),s&&!s.dataset.listenerAttached&&(s.querySelectorAll(".filter-btn").forEach(n=>{n.onclick=()=>{s.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),n.classList.add("active"),Z=n.dataset.filter||"all",de(!0)}}),s.dataset.listenerAttached="true"),s&&s.querySelectorAll(".filter-btn").forEach(n=>{n.dataset.filter===Z?n.classList.add("active"):n.classList.remove("active")});let i=document.getElementById("events-clear");i&&!i.dataset.listenerAttached&&(i.onclick=async()=>{let n=Z==="all"?"ALL":Z.toUpperCase();if(confirm(`Are you sure you want to delete ${n} events from the backend? This cannot be undone.`)){i.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let r="/events";if(Z!=="all"?r+=`?category=${Z}`:r+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await A(r,{method:"DELETE"})).ok)throw new Error("Failed to delete events");ye.clear(),de(!0)}catch(r){console.error("Failed to clear events:",r),alert("Failed to clear events. Check console.")}finally{i.innerHTML="<i class='bx bx-trash'></i> Clear"}}},i.dataset.listenerAttached="true")}var Us=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 348 346" style="color: #bb86fc; fill: currentColor; margin-right: 10px; min-width: 24px; margin-left: 0; max-width: 25px;">
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
`,qt=Us;function Ft(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var qs=null;async function Ae(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await A("/logs");if(!e.ok)throw new Error("Logs offline");let s=await e.json();if(!s||s.length===0)return t.innerHTML=P("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let i=["local-ollama-0","local-cache-0"],n=s.filter(l=>!i.includes(l.id));n.forEach(l=>{l.logs&&Array.isArray(l.logs)?l.logs.reverse():l.logs=[]}),n.reverse();let r=n.map(l=>{let b=l.logs.join(`
`),c=[...l.logs];if(c.length<25){let x=25-c.length;for(let p=0;p<x;p++)c.push("")}else c.length>25&&(c=c.slice(-25));let d=c.map(x=>De(x)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${l.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(b)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${l.id}" title="Clear Logs" style="${B()?"display: none;":""}">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${d}</pre>
                </div>
            `}).join("");return t.innerHTML=r,document.querySelectorAll(".copy-logs-btn").forEach(l=>{l.addEventListener("click",()=>{let b=l,c=unescape(b.dataset.logs||"");navigator.clipboard.writeText(c).then(()=>{let d=b.querySelector("i");d&&(d.classList.remove("bx-copy"),d.classList.add("bx-check"),setTimeout(()=>{d.classList.remove("bx-check"),d.classList.add("bx-copy")},2e3))})})}),document.querySelectorAll(".clear-logs-btn").forEach(l=>{l.addEventListener("click",async()=>{let c=l.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${c}?`))try{(await A(`/logs?service_id=${c}`,{method:"DELETE"})).ok&&Ae()}catch(d){console.error("Error clearing logs:",d)}})}),qs=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=P("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var Vt=()=>{let t=B()?"display: none;":"";return`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary ${B()?'<span style="color: #666; font-size: 0.6em; margin-left: 10px; font-weight: normal; font-style: italic;">* Public data is approximated</span>':""}</h2>
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
            ${qt}
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
        </div>
        <div class="system-monitor-widgets" style="margin-top: 0; padding-top: 0;"></div>`},Kt=()=>`
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
        <div id="processes-history-widgets" class="system-monitor-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,Zt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,Yt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,Xt=()=>`
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
        </div>`,Qt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${Ft()}
        </div>`;async function es(){Fs(),await Promise.all([se(),tt(),st()]),await Ae()}var qe=null;function Fs(){qe||(qe=setInterval(()=>{if(!document.getElementById("guardian-sentry-val")){clearInterval(qe),qe=null;return}se(!0)},1e3))}var Jt=null,Wt=null;async function ts(){try{return await(await A("/system_monitor")).json()}catch{return null}}async function Gt(){try{return await(await A("/system/hardware")).json()}catch{return null}}async function Js(){try{return await(await A("/processes")).json()}catch{return null}}async function Ws(){try{return await(await A("/agent/status")).json()}catch{return null}}async function tt(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),s=document.querySelector("#hw-os .hw-content"),i=document.querySelector("#hw-cpu .hw-content"),n=document.querySelector("#hw-ram .hw-content"),r=document.querySelector("#hw-gpu .hw-content"),l=document.querySelector("#hw-storage .hw-content"),b=o=>{if(o){if(s&&(s.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${o.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${o.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),n){let m=(o.MEMORY_BYTES/1073741824).toFixed(1);n.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${m} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(i&&o.CPU&&o.CPU.length>0){let m=o.CPU[0];i.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${m.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${m.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${m.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}r&&(o.GPU&&o.GPU.length>0?r.innerHTML=o.GPU.map(m=>{let f=(m.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${m.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${f} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):r.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),l&&o.STORAGE&&o.STORAGE.length>0?l.innerHTML=o.STORAGE.map(m=>{let f=(m.USED/1073741824).toFixed(1),g=(m.SIZE/(1024*1024*1024)).toFixed(1),y=m.SIZE>0?(m.USED/m.SIZE*100).toFixed(0):0,H=m.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${m.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${H}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${f} GB Used</span>
                            <span>${g} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${Number(y)>90?"#cf6679":"#03dac6"}; width: ${y}%; height: 100%; box-shadow: 0 0 10px ${Number(y)>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):l&&(l.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>";let o=await Gt();o?(b(o),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)):(e.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3))},e.dataset.listenerAttached="true"),i&&!i.hasChildNodes())){let o=await Gt();b(o)}if(!t)return;let c=await ts();if(!c||!c.services){t.children.length===0&&(t.innerHTML=P("offline","Failed to load system metrics.","The event service may be offline."));let o=document.querySelector('[data-service-id="upstash-redis-ro"]');if(o){o.className="service-widget service-widget-offline",o.querySelector(".service-widget-status").textContent="ERROR";let m=o.querySelector(".service-widget-body");m&&(m.innerHTML='<div class="service-widget-footer offline"><span>CONNECTION FAILED</span></div>')}return}Jt=B()&&oe.lastDashboard||Date.now(),te(0,Jt||0);let d=c.services||[];window.updateCountdownInterval||(window.updateCountdownInterval=setInterval(()=>{let o=document.getElementById("upstash-countdown");if(o){let g=59-new Date().getSeconds();g<=0&&(g+=60),o.textContent=`${g}s`}},1e3)),Array.from(t.children).forEach(o=>{o.classList.contains("service-widget")||o.remove()});function x(o){if(!o||o==="N/A"||o==="unknown")return"-";let m=o.match(/^(\d+\.\d+\.\d+)/);return m?m[0]:o.split(".").slice(0,3).join(".")||"-"}function p(o){return!o||o.length<=28?o:o.substring(0,28)+"..."}function u(o){if(!o||o==="N/A"||o==="unknown")return"-";let m=o.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!m)return"-";let f=parseInt(m[1])||0,g=parseInt(m[2])||0,y=parseInt(m[3])||0,H=parseFloat(m[4])||0,I=f*86400+g*3600+y*60+H,S=Math.floor(I/86400);if(S>0)return`${S}d`;let L=Math.floor(I/3600);if(L>0)return`${L}h`;let $=Math.floor(I/60);return $>0?`${$}m`:`${Math.floor(I)}s`}function a(o){if(o.id==="upstash-redis-ro"){let W=B()&&(oe.lastFrontend||oe.lastDashboard)||Date.now();return`
            <div class="service-widget service-widget-online" data-service-id="upstash-redis-ro">
                <div class="service-widget-header">
                    <i class="bx bx-check-circle"></i>
                    <h3>public-cache</h3>
                    <span class="service-widget-status">OK</span>
                </div>
                <div class="service-widget-body" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 0;">
                    <div style="font-size: 0.7em; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Next Update In</div>
                    <div id="upstash-countdown" style="font-size: 2em; font-weight: bold; color: #fff; font-family: monospace;">--</div>
                    <div class="sync-time-label" style="font-size: 0.6em; color: #444; margin-top: 10px;">Last synced: ${new Date(W).toLocaleTimeString()}</div>
                </div>
            </div>`}let m=o.status==="online",f=m?"service-widget-online":"service-widget-offline",g=m?"bx-check-circle":"bx-x-circle",y=m?"OK":"BAD",H=o.version?x(o.version.str):"-",I=o.cpu&&o.cpu!=="N/A"?o.cpu:"-",S=o.memory&&o.memory!=="N/A"?o.memory:"-",L=I!=="-"?"#00ff00":"#666",$=I!=="-"?"#fff":"#666",D=S!=="-"?"#00ff00":"#666",O=S!=="-"?"#fff":"#666",U=u(o.uptime),J="";m?J=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${H}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${U}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${L};"></i>
                        <span style="color: ${$};">${I}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${D};"></i>
                        <span style="color: ${O};">${S}</span>
                    </div>
                </div>`:J='<div class="service-widget-footer offline" style="justify-content: center; opacity: 0.5; letter-spacing: 2px; font-weight: bold;"><span>OFFLINE</span></div>';let K=B()?"easter.company":p(o.domain&&o.port?`${o.domain}:${o.port}`:"");return`<div class="service-widget ${f}" data-service-id="${o.id}"><div class="service-widget-header"><i class="bx ${g}"></i><h3>${o.short_name||o.id}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${K}</span></div>${J}</div></div>`}let v=new Map(Array.from(t.querySelectorAll(".service-widget")).map(o=>[o.dataset.serviceId,o])),C=new Set(d.map(o=>o.id));for(let[o,m]of v)C.has(o)||m.remove();let h=new Set;d.forEach(o=>{if(h.has(o.id))return;h.add(o.id);let m=a(o),f=v.get(o.id);if(f&&f.parentNode)if(o.id==="upstash-redis-ro"){let g=B()&&(oe.lastFrontend||oe.lastDashboard)||Date.now(),y=new Date(g).toLocaleTimeString(),H=f.querySelector(".sync-time-label");H&&(H.textContent=`Last synced: ${y}`)}else f.outerHTML!==m&&(f.outerHTML=m);else t.insertAdjacentHTML("beforeend",m)})}async function st(){let t=document.getElementById("models-widgets");if(!t)return;let e=await ts();if(!e){t.children.length===0&&(t.innerHTML=P("offline","Failed to load model status.","The event service may be offline."));return}Wt=Date.now(),te(2,Wt);let s=e.models||[],i=e.whisper;Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function n(c){let d=c.status==="Ready";return`
                <div class="service-widget ${d?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${d?"READY":"NOT FOUND"}</span>
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
                </div>`}function r(c){let d=c.status==="Ready";return`
                <div class="service-widget ${d?"service-widget-online":"service-widget-offline"}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx bx-volume-full"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${d?"READY":"NOT FOUND"}</span>
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
                </div>`}function l(c){let d=c.status==="Downloaded",x=d?"service-widget-online":"service-widget-offline",p=d?"OK":"MISSING",u=d&&c.size>0?`${(c.size/1e9).toFixed(2)} GB`:"-",a=c.name;return c.type==="custom"&&a.endsWith(":latest")&&(a=a.replace(":latest","")),`<div class="service-widget ${x}" data-model-name="${c.name}"><div class="service-widget-header"><i class="bx ${d?"bx-check-circle":"bx-x-circle"}"></i><h3>${a}</h3><span class="service-widget-status">${p}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${c.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${u}</span></div></div></div>`}let b="";if(i&&(b+=n(i)),e.xtts&&(b+=r(e.xtts)),b+=s.map(l).join(""),!b){t.innerHTML=P("empty","No models found.");return}t.innerHTML!==b&&(t.innerHTML=b)}async function se(t=!1){let e=document.getElementById("processes-widgets");if(!e&&!t)return;let s=document.getElementById("guardian-sentry-val"),i=document.getElementById("guardian-idle-val"),n=document.getElementById("guardian-total-idle"),r=document.getElementById("guardian-total-active"),l=document.getElementById("guardian-total-waste"),b=document.getElementById("guardian-reset-btn"),c=document.getElementById("analyzer-reset-btn"),d=document.getElementById("fabricator-reset-btn"),x=document.getElementById("courier-reset-btn"),p=document.getElementById("system-pause-toggle-btn");p&&!p.dataset.listenerAttached&&(p.onclick=async()=>{let g=p.querySelector(".bx-play")?"/agent/resume":"/agent/pause";p.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A(g,{method:"POST"}),await se()}catch{p.innerHTML="<i class='bx bx-error'></i>",setTimeout(()=>se(),2e3)}},p.dataset.listenerAttached="true"),b&&!b.dataset.listenerAttached&&(b.onclick=async()=>{b.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A("/guardian/reset?protocol=all",{method:"POST"}),setTimeout(()=>{b.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{b.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),se()}catch{b.innerHTML="<i class='bx bx-error'></i>"}},b.dataset.listenerAttached="true"),c&&!c.dataset.listenerAttached&&(c.onclick=async()=>{c.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A("/analyzer/reset?protocol=synthesis",{method:"POST"}),setTimeout(()=>{c.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{c.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),se()}catch{c.innerHTML="<i class='bx bx-error'></i>"}},c.dataset.listenerAttached="true"),d&&!d.dataset.listenerAttached&&(d.onclick=async()=>{d.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A("/fabricator/reset?protocol=construction",{method:"POST"}),setTimeout(()=>{d.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{d.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),se()}catch{d.innerHTML="<i class='bx bx-error'></i>"}},d.dataset.listenerAttached="true"),x&&!x.dataset.listenerAttached&&(x.onclick=async()=>{x.innerHTML="<i class='bx bx-loader-alt spin'></i>";try{await A("/agent/reset?protocol=researcher",{method:"POST"}),setTimeout(()=>{x.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{x.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},500),se()}catch{x.innerHTML="<i class='bx bx-error'></i>"}},x.dataset.listenerAttached="true");let u=await Ws();if(u&&u.agents){let f=u.agents.guardian||{protocols:{}},g=u.agents.analyzer||{protocols:{}},y=u.agents.imaginator||{protocols:{}},H=u.agents.fabricator||{protocols:{}},I=u.agents.courier||{protocols:{}},S=u.system||{},L=Math.floor(Date.now()/1e3),$={sentry:"Sentry",synthesis:"Synthesis",alert_review:"Alert Review",construction:"Construction",researcher:"Researcher"},D=T=>{T<0&&(T=0);let q=Math.floor(T/3600),_=Math.floor(T%3600/60),F=T%60;return q>0?`${q}h ${_}m`:_>0?`${_}m ${F}s`:`${F}s`},O=(T,q,_,F)=>{if(!T)return;let G=$[F]||F.toUpperCase(),ne=T.parentElement?.querySelector('span[style*="text-transform: uppercase"]');if(ne&&(ne.textContent=G),!_){T.textContent="Inactive",T.style.color="#666";return}let X=_.status;if(X==="Working")T.textContent="Working",T.style.color="#bb86fc";else if(X==="Ready")T.textContent="Ready",T.style.color="#5eff5e";else{let V=_.cooldown;if(B()&&(V=_.next_run-L),V<=0)T.textContent="Ready",T.style.color="#5eff5e";else{let Ie=Math.floor(V/60),at=V%60;T.textContent=`${Ie}m ${at}s`,T.style.color="#fff"}}q&&_.stats&&(q.innerHTML=`
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <span>Runs: ${_.stats.runs||0}</span>
              <span style="color: ${_.stats.failures>0?"#ffa500":"#666"}">Fails: ${_.stats.failures||0}</span>
              <span style="color: ${_.stats.aborted>0?"#ff4d4d":"#666"}">Aborted: ${_.stats.aborted||0}</span>
            </div>
          `)};s&&O(s,document.getElementById("guardian-sentry-stats"),f.protocols.sentry,"sentry");let U=document.getElementById("analyzer-synthesis-val"),J=document.getElementById("analyzer-synthesis-stats");U&&O(U,J,g.protocols.synthesis,"synthesis");let K=document.getElementById("imaginator-alert_review-val"),W=document.getElementById("imaginator-alert_review-stats");K&&O(K,W,y.protocols.alert_review,"alert_review");let k=document.getElementById("fabricator-construction-val"),w=document.getElementById("fabricator-construction-stats");k&&O(k,w,H.protocols.construction,"construction");let E=document.getElementById("courier-researcher-val"),M=document.getElementById("courier-researcher-stats");E&&O(E,M,I.protocols.researcher,"researcher");let R=document.getElementById("system-state-label"),z=document.getElementById("system-state-val");if(z&&S.state){let T=S.state,q=D(S.state_time||0);R&&(R.textContent=`State: ${T.toUpperCase()}`),z.textContent=q,T==="idle"?z.style.color=S.state_time>300?"#5eff5e":"#fff":z.style.color="#bb86fc",p&&(T==="paused"?(p.innerHTML="<i class='bx bx-play'></i>",p.title="Resume System",p.style.color="#ff9800"):(p.innerHTML="<i class='bx bx-pause'></i>",p.title="Pause System",p.style.color=""))}n&&(n.textContent=D(S.metrics?.total_idle_time||0)),r&&(r.textContent=D(S.metrics?.total_active_time||0)),l&&(l.textContent=D(S.metrics?.total_waste_time||0))}else[s,i,n,r,l].forEach(g=>{g&&(g.textContent="-",g.style.color="#666")});if(t)return;let a=await Js(),v=[],C=[],h=[];a&&(Array.isArray(a)?v=a:(v=a.active||[],C=a.queue||[],h=a.history||[],h.sort((f,g)=>(g.end_time||0)-(f.end_time||0)))),e&&(v.length===0?e.querySelector(".tab-placeholder")||(e.innerHTML=P("empty","No active processes.")):((e.querySelector(".tab-placeholder")||e.querySelector("p"))&&(e.innerHTML=""),et(e,v,!1)));let o=document.getElementById("processes-queue-widgets");o&&(C.length===0?!o.querySelector(".tab-placeholder")&&!o.querySelector('div[style*="font-style: italic"]')&&(o.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(o.innerHTML="",et(o,C,!1)));let m=document.getElementById("processes-history-widgets");m&&(h.length===0?m.querySelector(".tab-placeholder")||(m.innerHTML=P("empty","No recent history.")):(m.querySelector(".tab-placeholder")&&(m.innerHTML=""),et(m,h,!0))),Me(1,v.length)}function et(t,e,s){function i(c){let d="";c.end_time?d=`${c.end_time-c.start_time}s`:d=`${Math.floor(Date.now()/1e3-c.start_time)}s`;let x=c.retries>0?`<span class="process-retry-badge">Retry ${c.retries}</span>`:"",p=c.channel_id,u={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation","system-analyzer":"Analyzer Agent"};if(u[p]?p=u[p]:/^\d+$/.test(p)&&(p=`Channel ${p}`),s)return`
        <div class="process-history-item" data-channel-id="${c.channel_id}-${c.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${p}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${c.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${c.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${d}</span>
            </div>
        </div>`;let a="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${c.channel_id}-${c.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${a}"></i>
                        <h3 style="color: ${a}">${p}</h3>
                        ${x}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${a}">${c.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${a}">${d}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${a}">${c.pid}</span>
                        </div>
                    </div>
                </div>`}let n=s?".process-history-item":".process-widget",r=new Map(Array.from(t.querySelectorAll(n)).map(c=>[c.dataset.channelId,c])),l=new Set(e.map(c=>`${c.channel_id}-${c.start_time}`));for(let[c,d]of r)c&&!l.has(c)&&d.remove();let b=new Set;e.forEach(c=>{let d=`${c.channel_id}-${c.start_time}`;if(b.has(d))return;b.add(d);let x=i(c),p=r.get(d);if(p&&p.parentNode){p.outerHTML!==x&&(p.outerHTML=x);let u=t.querySelector(`[data-channel-id="${d}"]`);u&&t.appendChild(u)}else t.insertAdjacentHTML("beforeend",x)})}function Fe(){let t=We(),e="Notification"in window,s={enabled:e&&Notification.permission==="granted",supported:e};return`
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
                            <span class="settings-item-description">${s.supported?"Receive desktop notifications":"Not supported in this browser"}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="notifications-toggle" ${s.enabled?"checked":""} ${s.supported?"":"disabled"}>
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
            </div>`}function nt(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(i=>{i.addEventListener("click",function(){let n=this.dataset.theme;n&&(ut(n),t.setContent(Fe()),nt(t))})});let s=document.getElementById("notifications-toggle");s&&"Notification"in window?s.onclick=async i=>{let n=i.target;if(n.checked)try{await Notification.requestPermission()!=="granted"&&(n.checked=!1)}catch{n.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),n.checked=!0)}:s&&(s.disabled=!0)}var ns=()=>`
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
    `;async function is(){let t=document.getElementById("web-history-content");if(!t)return;let e=document.getElementById("web-refresh-btn");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i>",await ss(t),e.innerHTML="<i class='bx bx-check'></i>",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i>"},2e3)},e.dataset.listenerAttached="true"),await ss(t)}async function ss(t){try{let e=await A("/web/history");if(!e.ok)throw new Error("Failed to fetch history");let s=await e.json();if(!s||s.length===0){t.innerHTML=P("empty","No web history found.");return}let i=`
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div class="web-carousel" style="flex: 1; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 20px; padding-bottom: 5px; scroll-behavior: smooth; min-height: 0;">
        `;s.forEach((b,c)=>{let d=new Date(b.timestamp*1e3).toLocaleString([],{dateStyle:"short",timeStyle:"short"}),x=b.screenshot?`<img src="data:image/png;base64,${b.screenshot}" style="width: 100%; max-height: 45%; object-fit: contain; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px; flex-shrink: 0; background: #000;">`:'<div style="width: 100%; height: 80px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: #666; margin-bottom: 15px; border-radius: 8px; flex-shrink: 0;">No Screenshot</div>';i+=`
                <div class="web-card" style="flex: 0 0 100%; height: 100%; display: flex; flex-direction: column; scroll-snap-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; box-sizing: border-box; max-width: 100%; overflow: hidden;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px; flex-shrink: 0;">
                        <span style="color: #03dac6; font-weight: bold; font-family: monospace;">#${c+1}</span>
                        <span style="color: #888; font-size: 0.8em; font-family: monospace;">${d}</span>
                    </div>
                    <h3 style="margin-bottom: 5px; color: #fff; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; font-size: 1.1em;">${b.title||"No Title"}</h3>
                    <a href="${b.url}" target="_blank" style="color: #bb86fc; font-size: 0.8em; margin-bottom: 15px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 0; text-decoration: none;">${b.url}</a>
                    
                    ${x}

                    <div style="flex: 1; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px; overflow-y: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; color: #aaa; white-space: pre-wrap; border: 1px solid rgba(255,255,255,0.03);">${b.content?b.content.replace(/</g,"&lt;").replace(/>/g,"&gt;"):"No content available"}</div>
                </div>
            `}),i+=`
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 0 0; flex-shrink: 0;">
                    <button id="web-prev-btn" class="notif-action-btn" style="margin-right: auto;"><i class='bx bx-left-arrow-alt'></i> Prev</button>
                    <span style="color: #555; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px;">Swipe to navigate</span>
                    <button id="web-next-btn" class="notif-action-btn" style="margin-left: auto;">Next <i class='bx bx-right-arrow-alt'></i></button>
                </div>
            </div>
        `,t.innerHTML=i;let n=t.querySelector(".web-carousel"),r=t.querySelector("#web-prev-btn"),l=t.querySelector("#web-next-btn");r&&(r.onclick=()=>{n.scrollBy({left:-n.offsetWidth,behavior:"smooth"})}),l&&(l.onclick=()=>{n.scrollBy({left:n.offsetWidth,behavior:"smooth"})})}catch(e){t.innerHTML=P("error","Failed to load web history.",e.message)}}var rs=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It maintains system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1] [--force]
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
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],Gs=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
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
    `;for(let[s,i]of Object.entries(t)){let n=rs.filter(r=>r.category===s);n.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${i.icon}' style="color: ${i.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${i.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${n.map(r=>`
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
    </div>`,e},it=!1;function Vs(t){let e=document.getElementById("cli-terminal-overlay");if(!e){e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e);let c=document.getElementById("close-terminal-btn");c&&(c.onclick=()=>as());let d=document.getElementById("terminal-action-btn");d&&(d.onclick=()=>as())}let s=document.getElementById("cli-terminal-body"),i=document.getElementById("cli-docs-pane");s&&(s.innerHTML="");let n=t.docs||{overview:t.description,details:[],extended_usage:t.usage};i&&(i.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${n.overview}</p>
        </div>
        ${n.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${n.details.map(c=>`<li>${c}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${n.extended_usage}</pre>
        </div>
    `);let r=document.getElementById("terminal-cmd-name");r&&(r.textContent=`dex ${t.id}`);let l=document.getElementById("terminal-status-badge");l&&(l.className="terminal-status status-running",l.textContent="Running");let b=document.getElementById("terminal-action-btn");return b&&(b.style.display="none"),e.classList.add("active"),document.body.style.overflow="hidden",it=!0,s}function as(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),document.body.style.overflow="",it=!1}function os(t,e,s="output"){if(!it||!t)return;let i=document.createElement("div");if(i.className=`terminal-line terminal-${s}`,s==="prompt")i.innerHTML=`<span class="terminal-prompt">$</span> ${e}`;else{let n=De(e);i.innerHTML=n||e}t.appendChild(i),t.scrollTop=t.scrollHeight}async function Ks(t){let e=rs.find(l=>l.id===t);if(!e)return;let s=Vs(e);s&&os(s,`dex ${t}`,"prompt");let i=e.demo_output||["Executing command...","\u2713 Done."];for(let l of i){await new Promise(c=>setTimeout(c,400+Math.random()*600));let b="output";l.includes("[ERROR]")?b="error":l.includes("[SUCCESS]")||l.includes("\u2713")?b="success":l.includes("!")&&(b="warning"),s&&os(s,l,b)}let n=document.getElementById("terminal-status-badge");n&&(n.className="terminal-status status-success",n.textContent="Completed (Demo)");let r=document.getElementById("terminal-action-btn");r&&(r.style.display="block")}function ls(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=Gs();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let s=e.querySelector("code"),i=s?s.textContent:"";i&&navigator.clipboard.writeText(i).then(()=>{let n=e.querySelector("i");n&&(n.className="bx bx-check",n.style.color="#5eff5e",setTimeout(()=>{n.className="bx bx-copy",n.style.color="#bb86fc"},2e3))})}),t.querySelectorAll(".cli-command-card").forEach(s=>{let i=s;s.addEventListener("mouseenter",()=>{i.style.transform="translateY(-5px)",i.style.borderColor="rgba(255,255,255,0.15)",i.style.backgroundColor="rgba(255,255,255,0.05)"}),s.addEventListener("mouseleave",()=>{i.style.transform="translateY(0)",i.style.borderColor="rgba(255,255,255,0.05)",i.style.backgroundColor="rgba(255,255,255,0.03)"}),s.addEventListener("click",()=>{let n=i.dataset.cmd;n&&Ks(n)})})}async function Zs(){if(!B())try{if(!(await A("/system/status",{method:"GET"})).ok)throw new Error("Service unhealthy")}catch(t){console.error("Service health check failed:",t)}}function cs(){if(window.location.protocol==="http:"&&window.location.hostname==="easter.company"){window.location.replace("https://"+window.location.hostname+window.location.pathname+window.location.search);return}ct(),dt(),Zs(),gt(),lt();let t=window.location.pathname;(t==="/dexter"||t==="/dexter/")&&ls();let e=[],s=document.getElementById("windows-container");s&&s.setAttribute("data-count","0");let i=o=>{localStorage.setItem("dex_last_window",o)};function n(){for(;e.length>1;)e.shift().close(!0);let o=document.getElementById("windows-container"),m=document.querySelector("nav"),f=document.querySelector("footer"),g=window.location.pathname==="/"||window.location.pathname==="/index.html",y=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");o&&o.setAttribute("data-count",e.length.toString()),e.forEach(D=>{let O=document.getElementById(D.id);O&&O.classList.remove("hide-close")});let H=document.getElementById("dexter-menu-container"),I=document.getElementById("nav-window-switcher"),S=document.getElementById("settings-icon"),L=document.getElementById("close-all-windows"),$=window.innerWidth<880;if(!$){let D=document.getElementById("dexter-dropdown"),O=document.getElementById("dexter-menu-btn");D&&D.classList.remove("active"),O&&O.classList.remove("active"),o&&o.classList.remove("menu-open")}if(xe(e.length>0),e.length>0)if(f?.classList.add("hide"),L&&(L.style.display=$?"none":"block"),document.querySelector("main")?.style.setProperty("opacity","0","important"),document.body.style.overflow="hidden",m?.classList.add("window-open"),o&&(o.style.paddingTop="60px"),H&&(H.style.display=$?"flex":"none"),S&&(S.style.display=$?"block":"none"),!$&&I){let D=e[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(D)?(I.innerHTML=`
                      <div class="nav-switch-btn ${D==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${D==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${D==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${D==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${D==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts")?.addEventListener("click",()=>{i("alerts-window"),r(b)}),document.getElementById("switch-events")?.addEventListener("click",()=>{i("events-window"),r(c)}),document.getElementById("switch-monitor")?.addEventListener("click",()=>{i("monitor-window"),r(x)}),document.getElementById("switch-contacts")?.addEventListener("click",()=>{i("contacts-window"),r(d)}),document.getElementById("switch-workspace")?.addEventListener("click",()=>{i("workspace-window"),r(p)})):I.innerHTML=""}else I&&(I.innerHTML="");else m?.classList.remove("window-open"),L&&(L.style.display="none"),o&&(o.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.body.style.overflow="",g||y?f?.classList.remove("hide"):f?.classList.add("hide"),H&&(H.style.display="flex"),S&&(S.style.display="block"),I&&(I.innerHTML="");Ce()}function r(o){if(o.isOpen()){o.close();return}for(;e.length>0;)e.pop().close(!0);e.push(o),o.open(),n()}function l(){[...e].forEach(m=>m.close()),e=[]}window.addEventListener("resize",n);let b=pe({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:Ct(),onOpen:()=>ce(),onClose:()=>{let o=e.indexOf(b);o>-1&&e.splice(o,1),n()}}),c=pe({id:"events-window",title:"Events",icon:"bx-calendar-event",content:Qe(),onOpen:()=>{c.setContent(Qe()),de()},onClose:()=>{let o=e.indexOf(c);o>-1&&e.splice(o,1),n()}}),d=pe({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:jt(),onOpen:()=>Xe(),onClose:()=>{let o=e.indexOf(d);o>-1&&e.splice(o,1),n()}}),x=pe({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:Zt()},{icon:"bxs-component",title:"Processes",content:Kt()},{icon:"bxs-brain",title:"Models",content:Yt()},{icon:"bx-globe",title:"Web",content:ns()},{icon:"bxs-hdd",title:"Hardware",content:Xt()},{icon:"bxs-terminal",title:"Logs",content:Qt()},{icon:"bxs-zap",title:"Agents",content:Vt()}].filter(o=>B()?o.title!=="Hardware"&&o.title!=="Logs":!0),onOpen:()=>{tt(),se(),st(),is(),Ae()},onClose:()=>{let o=e.indexOf(x);o>-1&&e.splice(o,1),n()}}),p=pe({id:"workspace-window",title:"Workspace",icon:"bx-brain",tabs:[{icon:"bx-loader-circle",title:"Progress",content:Dt()},{icon:"bx-map-alt",title:"Roadmap",content:zt()},{icon:"bx-paint",title:"Blueprints",content:Nt()},{icon:"bx-task",title:"Tasks",content:Rt()}],onOpen:()=>Ze(),onClose:()=>{let o=e.indexOf(p);o>-1&&e.splice(o,1),n()}}),u=pe({id:"settings-window",title:"Settings",icon:"bx-cog",content:Fe(),onOpen:()=>{u.setContent(Fe()),nt(u)},onClose:()=>{let o=e.indexOf(u);o>-1&&e.splice(o,1),n()}});window.dexter={viewEvent:o=>{c.isOpen()||r(c),setTimeout(()=>{let m=document.querySelector(`.event-item[data-event-id="${o}"]`);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),m.classList.add("flash-highlight"),m.classList.contains("expanded")||m.click(),setTimeout(()=>m.classList.remove("flash-highlight"),2e3))},500)},viewAlert:o=>{b.isOpen()||r(b),setTimeout(()=>{let m=document.querySelector(`.event-item[data-alert-id="${o}"]`);m&&(m.scrollIntoView({behavior:"smooth",block:"center"}),m.classList.add("flash-highlight"),m.classList.contains("expanded")||m.click(),setTimeout(()=>m.classList.remove("flash-highlight"),2e3))},500)}};let a=()=>{let o=document.getElementById("dexter-dropdown"),m=document.getElementById("dexter-menu-btn");o&&m&&(o.classList.remove("active"),m.classList.remove("active"),window.innerWidth<880&&document.getElementById("windows-container")?.classList.remove("menu-open"))};(()=>{let o=document.getElementById("dexter-menu-btn"),m=document.getElementById("settings-icon"),f=document.getElementById("close-all-windows"),g=document.getElementById("nav-left-container"),y=document.getElementById("dexter-dropdown"),H=document.getElementById("windows-container");o&&y&&(o.onclick=S=>{S.stopPropagation();let L=window.innerWidth<880;if(L)y.style.top="",y.style.left="",y.style.right="",y.style.transform="";else{let D=o.getBoundingClientRect(),U=document.querySelector("nav").getBoundingClientRect(),J=220,K=10,k=D.left+D.width/2-J/2,w=U.right-10;k+J>w&&(k=w-J),k<10&&(k=10),y.style.top=U.bottom+K+"px",y.style.left=k+"px",y.style.right="auto",y.style.transform="none"}y.classList.toggle("active"),o.classList.toggle("active");let $=y.classList.contains("active");if(L){let D=document.querySelector("nav");$?(document.querySelector("footer")?.classList.add("hide"),document.querySelector("main")?.style.setProperty("opacity","0","important"),D?.classList.add("window-open"),H?.classList.add("menu-open"),xe(!0)):(H?.classList.remove("menu-open"),e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),D?.classList.remove("window-open"),xe(!1)))}}),m&&(m.onclick=S=>{S.stopPropagation(),r(u)}),f&&(f.onclick=S=>{S.stopPropagation(),l()});let I=(S,L,$)=>{let D=document.getElementById(S);D&&(D.onclick=O=>{O.stopPropagation(),a(),$&&i($),r(L)})};I("alerts-menu-item",b,"alerts-window"),I("events-menu-item",c,"events-window"),I("monitor-menu-item",x,"monitor-window"),I("contacts-menu-item",d,"contacts-window"),I("workspace-menu-item",p,"workspace-window"),g&&(g.onclick=S=>{if(S.stopPropagation(),y&&y.classList.contains("active")){a(),window.innerWidth<880&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),xe(!1));return}if(e.length>0)l();else{let L=window.location.pathname;if(!(L==="/"||L==="/index.html")){let O=(L.endsWith("/")&&L.length>1?L.slice(0,-1):L).split("/");O.pop();let U=O.join("/")||"/";window.location.href=U}}}),document.addEventListener("click",()=>{let S=window.innerWidth<880;y&&y.classList.contains("active")&&(a(),S&&e.length===0&&(document.querySelector("footer")?.classList.remove("hide"),document.querySelector("main")?.style.setProperty("opacity","1","important"),document.querySelector("nav")?.classList.remove("window-open"),xe(!1)))}),y&&(y.onclick=S=>S.stopPropagation())})();let C=window.location.pathname==="/"||window.location.pathname==="/index.html",h=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!C&&!h&&document.querySelector("footer")?.classList.add("hide"),B()||setInterval(()=>{c.isOpen()&&de(),b.isOpen()?ce():Ve()},1e3),setInterval(()=>{B()&&(b.isOpen()?ce():Ve()),p.isOpen()?Ze():Lt(),B()&&c.isOpen()&&de(),x.isOpen()&&es()},5e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cs):cs();})();
