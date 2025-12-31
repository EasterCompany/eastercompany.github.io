(()=>{function Ge(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function We(t=!1){let e=window.location.pathname,o=e==="/"||e==="/index.html",i=`
        <div class="nav-left" id="nav-left-wrapper" style="gap: 0;">
            ${`
        <div id="nav-left-container" style="display: flex; align-items: center; transition: transform 0.2s ease; gap: 5px; cursor: ${o?"default":"pointer"};">
            <i class='bx bx-chevron-left' id="nav-chevron" style="font-size: 28px; color: #fff; display: ${o?"none":"block"};"></i>
            <img src="/static/meta/favicon.svg" alt="Easter Company Favicon" class="navbar-favicon" style="opacity: 1 !important; height: 24px; width: 24px;">
        </div>
    `}
        </div>
        <div class="nav-center" id="nav-window-switcher">
            <!-- Window buttons injected here by main.js -->
        </div>
        ${t?`
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
        `:`
            <div class="nav-right">
                <button id="login-btn" class="login-btn">LOGIN</button>
            </div>
        `}
    `,l=document.createElement("nav");l.innerHTML=i,document.body.prepend(l)}function Je(t){let e=window.location.pathname,o=e==="/"||e==="/index.html",a=document.getElementById("nav-chevron"),n=document.querySelector(".nav-left");!a||!n||(t||!o?(a.style.display="block",n.style.cursor="pointer",n.classList.add("recording"),n.onmouseenter=()=>{a.style.transform="translateX(-3px)"},n.onmouseleave=()=>{a.style.transform="translateX(0)"}):(a.style.display="none",n.style.cursor="default",n.classList.remove("recording"),n.onmouseenter=null,n.onmouseleave=null))}function Ve(){if(document.querySelector("footer"))return;let t=`
        <a href="/dexter" class="footer-brand-left">DEXTER M.XIV</a>
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-facebook'></i></a>
            <a href="https://linkedin.com/company/72223947" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin'></i></a>
            <a href="https://instagram.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
            <a href="https://twitter.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter'></i></a>
            <a href="https://github.com/eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
            <a href="https://youtube.com/@eastercompany" target="_blank" rel="noopener noreferrer"><i class='bx bxl-youtube'></i></a>
        </div>
        <a href="/dexter/contribute" class="footer-brand-right">CONTRIBUTE</a>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}var Ke=1e3;function ee(t){let e=null,o=t.onClose||null,a=t.onOpen||null;function n(){e&&(e.style.zIndex=++Ke)}function i(){if(e){e.classList.add("open"),n(),window.addEventListener("resize",l),a&&setTimeout(a,10);return}let f=document.getElementById("windows-container");f||(f=document.createElement("div"),f.id="windows-container",f.className="windows-container",document.body.appendChild(f)),e=document.createElement("div"),e.id=t.id,e.className="window",t.tabs&&t.tabs.length>0&&e.classList.add("has-tabs"),e.style.zIndex=++Ke,e.addEventListener("mousedown",n);let b=t.icon||"bx-window",s="",u="",I;t.tabs&&t.tabs.length>0?(s=`<div class="tab-bar">${t.tabs.map((v,r)=>{let d=v.icon?`<i class="bx ${v.icon}"></i>`:`<span class="tab-glyph">${v.title?.charAt(0).toUpperCase()||"?"}</span>`;return`
                    <div class="tab ${r===0?"active":""}" data-tab-index="${r}">
                        ${d}
                        <span class="tab-title">${v.title}</span>
                        <span class="tab-subtitle" data-tab-subtitle="${r}">Last updated: never</span>
                        <span class="notification-badge" style="display: none;">0</span>
                    </div>
                `}).join("")}</div>`,I=`<div class="window-content">${t.tabs.map((v,r)=>`<div class="tab-content ${r===0?"active":""}" data-tab-content="${r}">${v.content}</div>`).join("")}</div>`):(t.title&&(u=`<div class="window-title">${t.title}</div>`),I=`<div class="window-content">${t.content||""}</div>`),e.innerHTML=`
            <div class="window-header">
                <i class="bx ${b}"></i>
                ${s}
                ${u}
                <i class="bx bx-x window-close"></i>
            </div>
            ${I}
        `,f.appendChild(e),e.querySelector(".window-close")?.addEventListener("click",h=>{h.stopPropagation(),p()}),window.addEventListener("resize",l),t.tabs&&e.querySelectorAll(".tab").forEach(h=>{h.addEventListener("click",()=>{let c=h.getAttribute("data-tab-index");e.querySelectorAll(".tab").forEach(v=>v.classList.remove("active")),h.classList.add("active"),e.querySelectorAll(".tab-content").forEach(v=>v.classList.remove("active")),e.querySelector(`.tab-content[data-tab-content="${c}"]`).classList.add("active"),m(h,e)})}),setTimeout(()=>{e.classList.add("open"),a&&a()},10)}function l(){if(!e||!e.classList.contains("open"))return;let f=e.querySelector(".tab.active");f&&m(f,e)}function m(f,b){setTimeout(()=>{let s=b.querySelector(".tab-bar");if(!s)return;let u=Array.from(s.querySelectorAll(".tab")),I=u.indexOf(f),h=s.clientWidth,c=u[Math.max(0,I-2)],v=u[Math.min(u.length-1,I+2)],r=c.offsetLeft-s.offsetLeft-25,y=v.offsetLeft+v.offsetWidth-s.offsetLeft+25-r,C=y<=h?r-(h-y)/2:f.offsetLeft-s.offsetLeft-h/2+f.offsetWidth/2;s.scrollTo({left:C,behavior:"smooth"})},350)}function p(f=!1){e&&(window.removeEventListener("resize",l),f?(e.remove(),e=null):(e.classList.remove("open"),o&&o(),setTimeout(()=>{e?.remove(),e=null},400)))}function g(f){let b=e?.querySelector(".window-content");b&&(b.innerHTML=f)}function x(){return e&&e.classList.contains("open")}return{open:i,close:p,setContent:g,isOpen:x,focus:n,id:t.id}}function Ye(){return!0}function Xe(){return localStorage.getItem("easter_user_email")||"master@easter.company"}function Qe(t){localStorage.setItem("easter_user_email",t.trim())}var Ze="easter_theme",K={DARK:"dark",LIGHT:"light",LEGACY:"legacy"};function be(){return localStorage.getItem(Ze)||K.DARK}function et(t){if(!Object.values(K).includes(t))throw new Error("Invalid theme");localStorage.setItem(Ze,t),we(t)}function we(t){let e=document.body;if(Object.values(K).forEach(a=>{e.classList.remove(`theme-${a}`)}),e.classList.add(`theme-${t}`),[K.LIGHT,K.LEGACY].includes(t)){if(e.classList.add("is-animated"),!document.querySelector(".background")){let a=document.createElement("div");a.className="background",document.body.prepend(a)}}else e.classList.remove("is-animated"),document.querySelector(".background")?.remove()}function tt(){let t=be();we(t)}function B(t,e,o=null){let n={config:"bx-cog",error:"bx-error-circle",empty:"bx-info-circle",offline:"bx-wifi-off"}[t]||"bx-info-circle",i=o?`<p class="placeholder-action">${o}</p>`:"";return`<div class="tab-placeholder"><i class='bx ${n} placeholder-icon'></i><p class="placeholder-message">${e}</p>${i}</div>`}function D(t){return t&&t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function W(t,e){let o=document.querySelector(`.tab[data-tab-index="${t}"] .tab-subtitle`);if(!o)return;if(!e){o.textContent="Last updated: never";return}let a=Date.now(),n=Math.floor((a-e)/1e3),i;n<60?i=`${n}s ago`:n<3600?i=`${Math.floor(n/60)}m ago`:i=`${Math.floor(n/3600)}h ago`,o.textContent=`Last updated: ${i}`}var zt=0;function ve(t,e){let o=document.querySelector(`.tab[data-tab-index="${t}"]`);if(!o)return;let a=o.querySelector(".notification-badge");a&&(e>0?(a.textContent=e>9?"9+":e,a.style.display="flex"):a.style.display="none")}var Y=0,X=0;function st(t){Y=t,me()}function nt(t){X=t,me()}function me(){let t=Y+X;zt=t;let e=document.getElementById("dexter-nav-badge");e&&(e.style.display=t>0?"flex":"none");let o=document.getElementById("alerts-menu-item");if(o){let l=o.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="auto",o.appendChild(l)),l.textContent=Y>9?"9+":Y,l.style.display=Y>0?"flex":"none"}let a=document.getElementById("workspace-menu-item");if(a){let l=a.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="auto",a.appendChild(l)),l.textContent=X>9?"9+":X,l.style.display=X>0?"flex":"none"}let n=document.getElementById("switch-alerts");if(n){let l=n.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="8px",n.appendChild(l)),l.textContent=Y>9?"9+":Y,l.style.display=Y>0?"flex":"none"}let i=document.getElementById("switch-workspace");if(i){let l=i.querySelector(".notification-badge");l||(l=document.createElement("span"),l.className="notification-badge",l.style.marginLeft="8px",i.appendChild(l)),l.textContent=X>9?"9+":X,l.style.display=X>0?"flex":"none"}}function Se(){let t=document.getElementById("alerts-list");if(!t)return;Y=t.querySelectorAll(".alert-unread:not(.priority-low)").length,me()}function it(){let t=document.getElementById("blueprints-list");if(!t)return;X=t.querySelectorAll(".event-item:not(.blueprint-approved)").length,me()}function Be(){return"https://event.easter.company"}function Pt(){return"https://discord.easter.company"}var Rt="http://127.0.0.1:8100",Ot="http://127.0.0.1:8300",Ut={31:"ansi-red",91:"ansi-bright-red",32:"ansi-green",33:"ansi-yellow",34:"ansi-blue",35:"ansi-purple",36:"ansi-cyan",37:"ansi-white",90:"ansi-dark-gray"};function Ce(t){let e=D(t);e=e.replace(/\x1b\[0m/g,"</span>"),e=e.replace(/\x1b\[(\d+)m/g,(n,i)=>{let l=Ut[i];return l?`<span class="${l}">`:""});let o=(e.match(/<span/g)||[]).length,a=(e.match(/<\/span/g)||[]).length;return o>a&&(e+="</span>".repeat(o-a)),e}function ue(t){if(!t)return"";let e=D(t);return e=e.replace(/```([\s\S]*?)```/g,'<pre class="md-code-block">$1</pre>'),e=e.replace(/`([^`]+)`/g,'<code class="md-inline-code">$1</code>'),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/^# (.*$)/gm,'<h3 class="md-header">$1</h3>'),e=e.replace(/^## (.*$)/gm,'<h4 class="md-header">$1</h4>'),e=e.replace(/^### (.*$)/gm,'<h5 class="md-header">$1</h5>'),e=e.replace(/^\|(.+)\|$/gm,(o,a)=>{let n=a.split("|").map(i=>i.trim());return n.every(i=>i.match(/^:?-+:?$/))?"":`<div class="md-table-row">${n.map(i=>`<span class="md-table-cell">${i}</span>`).join("")}</div>`}),e=e.replace(/^- (.*$)/gm,'<div class="md-list-item"><span class="md-bullet">\u2022</span> $1</div>'),e=e.replace(/^(\d+)\. (.*$)/gm,'<div class="md-list-item"><span class="md-number">$1.</span> $2</div>'),e}var de=null,pe=null,Ee=!1,$e=!1;async function M(t,e={}){if(de)try{let n=await fetch(de+t,e);if(n.ok)return n;de=null}catch{de=null}let o=Be(),a=Rt;try{let n=await fetch(o+t,e);if(n.ok)return de=o,Ee&&(console.log("\u2728 Production event service restored."),Ee=!1),n;throw new Error("Primary failed")}catch{Ee||(console.warn(`\u{1F310} Production service unreachable. Falling back to local: ${a}`),Ee=!0);try{let i=await fetch(a+t,e);if(i.ok)return de=a,i;throw new Error("Fallback failed")}catch(i){throw i}}}async function at(t,e={}){if(pe)try{let n=await fetch(pe+t,e);if(n.ok)return n;pe=null}catch{pe=null}let o=Pt(),a=Ot;try{let n=await fetch(o+t,e);if(n.ok)return pe=o,$e&&(console.log("\u2728 Production discord service restored."),$e=!1),n;throw new Error("Primary failed")}catch{$e||(console.warn(`\u{1F310} Production discord service unreachable. Falling back to local: ${a}`),$e=!0);try{let i=await fetch(a+t,e);if(i.ok)return pe=a,i;throw new Error("Fallback failed")}catch(i){throw i}}}var ot=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-bell' style="color: #bb86fc;"></i>
        <h2>Alerts</h2>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="alerts-read-all" class="notif-action-btn"><i class='bx bx-check-double'></i> Read All</button>
            <button id="alerts-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
            <button id="alerts-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
            <button id="alerts-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
        </div>
    </div>
    <div id="alerts-list" class="alerts-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="tab-placeholder">
            <i class='bx bx-bell placeholder-icon'></i>
            <p class="placeholder-message">Loading alerts...</p>
        </div>
    </div>
`,ke=null,te=new Set,Te=[];async function se(t=!1){let e=document.getElementById("alerts-list");if(!e)return;qt(),t&&(e.innerHTML="<p>Updating...</p>");let o="/events?ml=1000&format=json&event.type=system.notification.generated";try{let a=await M(o);if(!a.ok)throw new Error("Service is offline or unreachable.");let i=(await a.json()).events||[];ke=Date.now(),W(0,ke);let l=Date.now(),m=24*60*60*1e3,p=i.filter(r=>{let d=localStorage.getItem(`alert_read_ts_${r.id}`);if(!d)return!0;let y=parseInt(d);return l-y<m});p.sort((r,d)=>{let y=A=>{let E=A.event;if(typeof E=="string")try{E=JSON.parse(E)}catch{return"low"}return(E.priority||"low").toLowerCase()},C=A=>A==="critical"?4:A==="high"?3:A==="medium"?2:1,T=C(y(r)),S=C(y(d));return T!==S?S-T:d.timestamp-r.timestamp}),Te=p;let g=r=>{let d=r.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return"low"}return(d.priority||"low").toLowerCase()},x=[],b=new Set(p.map(r=>g(r))).size>1;if(p.length>0){let r=null;p.forEach(d=>{let y=g(d);b&&y!==r&&(x.push({id:`divider-${y}`,type:"divider",label:y.toUpperCase()}),r=y),x.push(d)})}if(t&&(e.innerHTML=""),p.length===0){e.innerHTML=B("empty","No alerts yet."),Se();return}let s=r=>{let d=r.event;if(typeof d=="string")try{d=JSON.parse(d)}catch{return null}let y=(d.title||"Untitled Alert").trim(),C=(d.body||"No description provided.").trim(),T=d.summary||"",S=d.content||"",A=d.protocol||"",E=(d.priority||"low").toLowerCase(),N=!!d.alert,R=(d.category||"system").trim(),H=d.related_event_ids||[],P=d.audit_event_id,q=!!localStorage.getItem(`alert_read_ts_${r.id}`),k=new Date(r.timestamp*1e3),w=k.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),$=k.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),_=q?"event-border-grey":"event-border-blue";!q&&N&&(_="event-border-red"),q&&(E==="high"||E==="critical")?_="event-border-red":q&&E==="medium"&&(_="event-border-orange");let L=q?"alert-read":"alert-unread",z=te.has(r.id),U=z?"expanded":"",he=z?"display: block;":"display: none;",F="",j="";H.length>0&&(j=`
            <div style="flex: 1; min-width: 150px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Related Events</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
                    ${H.map(Z=>`<a href="#" onclick="window.dexter.viewEvent('${Z}'); return false;" style="color: #03dac6; text-decoration: none; margin-right: 5px;">${Z.substring(0,8)}...</a>`).join(", ")}
                </div>
            </div>`);let Q="";P&&(Q=`
            <div style="flex: 1; min-width: 120px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Generated By</div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
                    <a href="#" onclick="window.dexter.viewEvent('${P}'); return false;" style="color: #bb86fc; text-decoration: none; border-bottom: 1px dashed rgba(187, 134, 252, 0.3);">${P.substring(0,8)}...</a>
                </div>
            </div>`);let ce="";A&&(ce=`
            <div style="flex: 1; min-width: 100px;">
                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc; font-weight: bold;">${A}</div>
            </div>`);let V="";S?V=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                <div class="detail-pre" style="color: #ddd; font-size: 0.85em;">${ue(S)}</div>
            </div>
        `:V=`
            <div class="event-detail-block" style="text-align: left;">
                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Insight</h5>
                <div class="detail-pre" style="color: #fff;">${ue(C)}</div>
            </div>
        `,F=`
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="flex: 1; min-width: 100px;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Priority</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; font-weight: bold; color: ${E==="high"||E==="critical"?"#ff4d4d":E==="medium"?"#ffa500":"#888"}">
                            ${E}
                        </div>
                    </div>
                    <div style="flex: 1; min-width: 100px;">
                        <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Category</div>
                        <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${R}</div>
                    </div>
                    ${ce}
                    ${Q}
                    ${j}
                </div>

                ${V}
            `;let G=document.createElement("div");G.className=`event-item notification-item ${_} ${L} ${U} cursor-pointer priority-${E}`,G.dataset.alertId=r.id,G.onclick=function(Z){if(this.classList.contains("expanded")){this.classList.remove("expanded"),te.delete(r.id);let fe=this.querySelector(".event-details");fe&&(fe.style.display="none")}else{this.classList.add("expanded"),te.add(r.id);let fe=this.querySelector(".event-details");if(fe&&(fe.style.display="block"),!localStorage.getItem(`alert_read_ts_${r.id}`)){localStorage.setItem(`alert_read_ts_${r.id}`,Date.now().toString()),this.classList.add("alert-read"),this.classList.remove("alert-unread"),this.classList.remove("event-border-blue","event-border-red","event-border-purple");let Me="event-border-grey";E==="high"||E==="critical"?Me="event-border-red":E==="medium"&&(Me="event-border-orange"),this.classList.add(Me),Se()}}};let qe=`${A?A.charAt(0).toUpperCase()+A.slice(1):"Guardian"} Alert: ${T||y}`,Nt={system:"bx-cog",messaging:"bx-message-detail",cognitive:"bx-brain",moderation:"bx-shield-x",lifecycle:"bx-git-branch"}[R]||"bx-bell";G.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${w}</span>
                    <span class="event-date">${$}</span>
                </div>
                <div class="event-icon"><i class='bx ${Nt}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        DEXTER ${N?'<span class="alert-badge" style="color: #ff4d4d; font-size: 0.8em; margin-left: 5px;">[ALERT]</span>':""}
                    </div>
                    <div class="event-message">${qe}</div>
                    <div class="event-details" style="${he}">
                        ${F}
                    </div>
                </div>
            `;let je=G.querySelector(".event-details");je&&je.addEventListener("click",Z=>{Z.stopPropagation()});let Fe=G.querySelector(".close-details-btn");return Fe&&Fe.addEventListener("click",Z=>{Z.stopPropagation(),G.classList.remove("expanded");let _e=G.querySelector(".event-details");_e&&(_e.style.display="none"),te.delete(r.id)}),G},u=r=>{let d=document.createElement("div");d.className="notification-divider",d.dataset.alertId=r.id;let y="#888888";return r.label==="CRITICAL"?y="#ff4d4d":r.label==="HIGH"?y="#ff8888":r.label==="MEDIUM"&&(y="#ffa500"),d.style.cssText=`display: flex; align-items: center; gap: 15px; color: ${y}; font-size: 0.7em; font-weight: 700; margin: 20px 0 10px 0; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.8;`,d.innerHTML=`<span style="white-space: nowrap;">${r.label} PRIORITY</span><div style="height: 1px; background: linear-gradient(to right, ${y}44, transparent); flex-grow: 1;"></div>`,d},I=Array.from(e.children),h=new Map(I.map(r=>[r.dataset.alertId,r])),c=new Set(x.map(r=>r.id));I.forEach(r=>{let d=r.dataset.alertId;(!d||!c.has(d))&&r.remove()});let v=null;x.forEach((r,d)=>{let y=h.get(r.id);(!y||t)&&(y&&y.remove(),r.type==="divider"?y=u(r):y=s(r),!y)||(d===0?e.firstElementChild!==y&&e.prepend(y):v&&v.nextElementSibling!==y&&v.after(y),v=y)}),ke=Date.now(),W(0,ke),Se()}catch(a){console.error("Error fetching alerts:",a),e.children.length===0&&(e.innerHTML=B("offline","Failed to load alerts.","The event service may be offline."))}}function qt(){let t=document.getElementById("alerts-read-all"),e=document.getElementById("alerts-expand-all"),o=document.getElementById("alerts-close-all"),a=document.getElementById("alerts-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{Te.forEach(n=>{localStorage.getItem(`alert_read_ts_${n.id}`)||localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString())}),se(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{Te.forEach(n=>{te.add(n.id),localStorage.getItem(`alert_read_ts_${n.id}`)||localStorage.setItem(`alert_read_ts_${n.id}`,Date.now().toString())}),se(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{te.clear(),se(!0)},o.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{if(confirm("Are you sure you want to delete all alerts from the backend?")){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await M("/events?type=system.notification.generated",{method:"DELETE"});let n=Date.now()-48*60*60*1e3;Te.forEach(i=>{localStorage.setItem(`alert_read_ts_${i.id}`,n.toString())}),te.clear(),se(!0)}catch(n){console.error("Failed to clear alerts:",n)}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}async function rt(){let t="/events?ml=1000&format=json&event.type=system.notification.generated";try{let e=await M(t);if(!e.ok)return;let a=(await e.json()).events||[],n=0;a.forEach(i=>{let l=i.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}if((l.priority||"low").toLowerCase()==="low")return;localStorage.getItem(`alert_read_ts_${i.id}`)||n++}),st(n)}catch{}}var lt=()=>`
  <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
    <button id="roadmap-new" class="notif-action-btn"><i class='bx bx-plus'></i> New Idea</button>
    <button id="roadmap-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
    <button id="roadmap-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
  </div>
`,ct=()=>`
  <div id="roadmap-editor-container" style="display: none; padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <textarea id="roadmap-editor-input" class="settings-textarea" style="min-height: 120px; margin-bottom: 10px;" placeholder="Describe your visionary idea or strategic objective..."></textarea>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button id="roadmap-save" class="notif-action-btn"><i class='bx bx-save'></i> Save Draft</button>
      <button id="roadmap-cancel" class="notif-action-btn"><i class='bx bx-x'></i> Cancel</button>
    </div>
  </div>
  <div id="roadmap-list" class="notifications-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
  </div>
`,ne=new Set,dt=[],ge=null;async function ie(t=!1){let e=document.getElementById("roadmap-list");if(e){jt();try{let o=await M("/roadmap");if(!o.ok)throw new Error("Offline");let a=await o.json();dt=a;let n=g=>{let x=ne.has(g.id),f=g.state==="published",b=g.state==="consumed",s="event-border-grey";f&&(s="event-border-blue"),b&&(s="event-border-purple");let I=new Date(g.created_at*1e3).toLocaleDateString(navigator.language,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=document.createElement("div");h.className=`event-item notification-item ${s} cursor-pointer ${x?"expanded":""}`,h.dataset.itemId=g.id,h.onclick=r=>{if(r.target.closest("button"))return;h.classList.contains("expanded")?(h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",ne.delete(g.id)):(h.classList.add("expanded"),h.querySelector(".event-details").style.display="block",ne.add(g.id))};let c=`<span style="font-size: 0.7em; opacity: 0.6; margin-left: 10px;">[${g.state.toUpperCase()}]</span>`;h.innerHTML=`
        <div class="event-time">
          <span class="event-time-main">${I.split(",")[1]}</span>
          <span class="event-date">${I.split(",")[0]}</span>
        </div>
        <div class="event-content">
          <div class="event-service">ROADMAP ${c}</div>
          <div class="event-message" style="white-space: pre-wrap;">${D(g.content)}</div>
          <div class="event-details" style="${x?"display: block;":"display: none;"} ">
            <div class="event-details-header" style="margin-bottom: 15px;">
              <h5 style="margin: 0; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Item Controls</h5>
              <i class="bx bx-x close-details-btn"></i>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              ${b?"":`<button class="notif-action-btn edit-btn"><i class='bx bx-edit'></i> Edit</button>`}
              <button class="notif-action-btn publish-toggle-btn">
                <i class='bx ${f?"bx-pause":"bx-rocket"}'></i> ${f?"Un-publish":"Publish"}
              </button>
              <button class="notif-action-btn delete-btn danger"><i class='bx bx-trash'></i> Delete</button>
            </div>
            ${b?`<div style="margin-top: 15px; font-size: 0.8em; color: #888;">Consumed at: ${new Date(g.consumed_at*1e3).toLocaleString()}</div>`:""}
          </div>
        </div>
      `;let v=h.querySelector(".event-details");return v&&v.addEventListener("click",r=>{r.stopPropagation()}),h.querySelector(".edit-btn")?.addEventListener("click",()=>Ft(g)),h.querySelector(".publish-toggle-btn")?.addEventListener("click",()=>Gt(g)),h.querySelector(".delete-btn")?.addEventListener("click",()=>Wt(g.id)),h.querySelector(".close-details-btn")?.addEventListener("click",r=>{r.stopPropagation(),h.classList.remove("expanded"),h.querySelector(".event-details").style.display="none",ne.delete(g.id)}),h},i=Array.from(e.children),l=new Map(i.map(g=>[g.dataset.itemId,g])),m=new Set(a.map(g=>g.id));if(i.forEach(g=>{let x=g.dataset.itemId;(!x||!m.has(x))&&g.remove()}),a.length===0){e.innerHTML=B("empty","Your roadmap is empty.",`Click "New Idea" to start planning Dexter's future.`);return}t&&(e.innerHTML="");let p=null;a.forEach((g,x)=>{let f=l.get(g.id);(!f||t)&&(f&&f.remove(),f=n(g),!f)||(x===0?e.firstElementChild!==f&&e.prepend(f):p&&p.nextElementSibling!==f&&p.after(f),p=f)})}catch{e.children.length===0&&(e.innerHTML=B("offline","Failed to load roadmap.","The event service may be offline."))}}}function jt(){let t=document.getElementById("roadmap-new"),e=document.getElementById("roadmap-save"),o=document.getElementById("roadmap-cancel"),a=document.getElementById("roadmap-expand-all"),n=document.getElementById("roadmap-close-all");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{ge=null,document.getElementById("roadmap-editor-input").value="",document.getElementById("roadmap-editor-container").style.display="block"},t.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=()=>{document.getElementById("roadmap-editor-container").style.display="none",ge=null},o.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{let i=document.getElementById("roadmap-editor-input").value;if(!i.trim())return;let l=ge?`/roadmap/${ge}`:"/roadmap",m=ge?"PATCH":"POST";try{await M(l,{method:m,headers:{"Content-Type":"application/json"},body:JSON.stringify({content:i})}),document.getElementById("roadmap-editor-container").style.display="none",ie(!0)}catch(p){console.error(p)}},e.dataset.listenerAttached="true"),a&&!a.dataset.listenerAttached&&(a.onclick=()=>{dt.forEach(i=>ne.add(i.id)),ie(!0)},a.dataset.listenerAttached="true"),n&&!n.dataset.listenerAttached&&(n.onclick=()=>{ne.clear(),ie(!0)},n.dataset.listenerAttached="true")}function Ft(t){ge=t.id,document.getElementById("roadmap-editor-input").value=t.content,document.getElementById("roadmap-editor-container").style.display="block",document.getElementById("roadmap-editor-container").scrollIntoView({behavior:"smooth"})}async function Gt(t){let e=t.state==="published"?"draft":"published";try{await M(`/roadmap/${t.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e})}),ie(!0)}catch(o){console.error(o)}}async function Wt(t){if(confirm("Delete this roadmap item?"))try{await M(`/roadmap/${t}`,{method:"DELETE"}),ne.delete(t),ie(!0)}catch(e){console.error(e)}}var mt=()=>`
    <div class="alerts-actions" style="margin: 0; padding: 0; background: none; border: none; box-shadow: none; display: flex; gap: 10px;">
        <button id="blueprints-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
        <button id="blueprints-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
        <button id="blueprints-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
    </div>
`,ut=()=>`
    <div id="blueprints-list" class="blueprints-list blueprints-list events-timeline" style="display: flex; flex-direction: column; gap: 15px;">
    </div>
`,pt=null,ae=new Set,gt=[];async function oe(t=!1){let e=document.getElementById("blueprints-list");if(!e)return;Jt();let o="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let a=await M(o);if(!a.ok)throw new Error("Service is offline or unreachable.");let i=(await a.json()).events||[];if(gt=i,pt=Date.now(),W(2,pt),i.length===0){e.innerHTML=B("empty","No architectural blueprints generated yet.","The Guardian will generate these when idle."),ve(2,0);return}t&&(e.innerHTML="");let l=f=>{let b=f.event;if(typeof b=="string")try{b=JSON.parse(b)}catch{return null}let s=(b.title||"Untitled Blueprint").trim(),u=(b.summary||b.body||"No summary provided.").trim(),I=(b.content||"").trim(),h=(b.category||"architecture").trim(),c=(b.related_services||b.affected_services||[]).map(L=>L.trim()),v=(b.implementation_path||[]).map(L=>L.trim()),r=b.source_event_ids||[],d=b.approved===!0,y=new Date(f.timestamp*1e3),C=y.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),T=y.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),S=ae.has(f.id),A=S?"display: block;":"display: none;",E=document.createElement("div");E.className=`event-item notification-item event-border-purple cursor-pointer ${S?"expanded":""} ${d?"blueprint-approved":""}`,E.dataset.blueprintId=f.id,d&&(E.style.boxShadow="0 0 20px rgba(3, 218, 198, 0.15)",E.style.background="linear-gradient(135deg, rgba(3, 218, 198, 0.05) 0%, rgba(187, 134, 252, 0.05) 100%)");let R=d?"bx-check-shield":{architecture:"bx-vector",optimization:"bx-trending-up",feature:"bx-extension",security:"bx-shield-lock"}[h]||"bx-paint";E.onclick=function(L){if(this.classList.contains("expanded")){this.classList.remove("expanded"),ae.delete(f.id);let U=this.querySelector(".event-details");U&&(U.style.display="none")}else{this.classList.add("expanded"),ae.add(f.id);let U=this.querySelector(".event-details");U&&(U.style.display="block")}};let H="";v.length>0&&(H=`
                    <div class="blueprint-path" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Proposed Steps</h5>
                        <div class="detail-pre"><ul style="margin: 0; padding-left: 20px;">${v.map(L=>`<li style="margin-bottom: 5px;">${D(L)}</li>`).join("")}</ul></div>
                    </div>
                `);let P="";r.length>0&&(P=`
                    <div class="blueprint-source" style="margin-top: 15px;">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Source Alerts</h5>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${r.map(L=>`
                                <a href="#" onclick="window.dexter.viewEvent('${L}'); return false;" style="color: #03dac6; text-decoration: none; font-size: 0.75em; font-family: 'JetBrains Mono', monospace; padding: 4px 8px; background: rgba(3, 218, 198, 0.05); border: 1px solid rgba(3, 218, 198, 0.1); border-radius: 4px;">
                                    <i class='bx bx-link-external'></i> ${L.substring(0,8)}...
                                </a>
                            `).join("")}
                        </div>
                    </div>
                `);let J=c.length>0?`<div style="display: flex; align-items: center; gap: 8px; color: #666; font-size: 0.75em;"><span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Related:</span> <span style="background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 4px;">${c.join(", ")}</span></div>`:"<div></div>",q=d?`
                <div class="blueprint-status-badge" style="display: flex; align-items: center; justify-content: space-between; margin-top: 15px;">
                    ${J}
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 5px; color: #03dac6; font-size: 0.75em; font-weight: 700; text-transform: uppercase;">
                            <i class='bx bxs-check-shield'></i> Approved Blueprint
                        </div>
                        <button class="blueprint-delete-btn" onmouseover="this.style.background='rgba(207, 102, 121, 0.1)'; this.style.color='#cf6679'; this.style.borderColor='rgba(207, 102, 121, 0.2)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.03)'; this.style.color='#666'; this.style.borderColor='rgba(255, 255, 255, 0.05)';" style="background: rgba(255, 255, 255, 0.03); color: #666; border: 1px solid rgba(255, 255, 255, 0.05); padding: 4px 10px; border-radius: 4px; font-size: 0.75em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-trash'></i> Delete</button>
                    </div>
                </div>
            `:`
                <div class="blueprint-actions" style="display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 20px;">
                    ${J}
                    <div style="display: flex; gap: 10px;">
                        <button class="blueprint-approve-btn" style="background: rgba(3, 218, 198, 0.1); color: #03dac6; border: 1px solid rgba(3, 218, 198, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-check'></i> Approve</button>
                        <button class="blueprint-delete-btn" style="background: rgba(207, 102, 121, 0.1); color: #cf6679; border: 1px solid rgba(207, 102, 121, 0.2); padding: 6px 15px; border-radius: 4px; font-size: 0.8em; font-weight: 600; cursor: pointer; transition: all 0.2s;"><i class='bx bx-x'></i> Decline</button>
                    </div>
                </div>
            `;E.innerHTML=`
                ${d?'<div class="blueprint-sparkle"></div>':""}
                <div class="event-time">
                    <span class="event-time-main">${C}</span>
                    <span class="event-date">${T}</span>
                </div>
                <div class="event-icon" style="${d?"color: #03dac6;":""}"><i class='bx ${R}'></i></div>
                <div class="event-content">
                    <div class="event-service">${h.toUpperCase()}</div>
                    <div class="event-message">${s}</div>
                    <div class="event-details" style="${A}">
                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Summary</h5>
                        <div class="detail-pre" style="margin-bottom: 15px;">${D(u)}</div>

                        <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Technical Details</h5>
                        <div class="event-detail-block" style="text-align: left;">
                            <div class="detail-pre">${D(I)}</div>
                        </div>
                        ${H}
                        ${P}
                        ${q}
                    </div>
                </div>
            `;let k=E.querySelector(".blueprint-approve-btn");k&&(k.onclick=async L=>{L.stopPropagation(),k.innerHTML="<i class='bx bx-loader-alt spin'></i> Approving...";try{(await M(`/events/${f.id}`,{method:"PATCH",body:JSON.stringify({approved:!0})})).ok&&oe(!0)}catch(z){console.error("Failed to approve blueprint:",z)}});let w=E.querySelector(".blueprint-delete-btn");w&&(w.onclick=async L=>{L.stopPropagation();let z=!d;w.innerHTML=z?"<i class='bx bx-loader-alt spin'></i> Declining...":"<i class='bx bx-loader-alt spin'></i> Deleting...";try{(await M(`/events/${f.id}`,{method:"DELETE"})).ok&&oe(!0)}catch(U){console.error("Failed to delete blueprint:",U)}});let $=E.querySelector(".event-details");$&&$.addEventListener("click",L=>{L.stopPropagation()});let _=E.querySelector(".close-details-btn");return _&&_.addEventListener("click",L=>{L.stopPropagation(),E.classList.remove("expanded");let z=E.querySelector(".event-details");z&&(z.style.display="none"),ae.delete(f.id)}),E},m=Array.from(e.children),p=new Map(m.map(f=>[f.dataset.blueprintId,f])),g=new Set(i.map(f=>f.id));m.forEach(f=>{let b=f.dataset.blueprintId;(!b||!g.has(b))&&f.remove()});let x=null;i.forEach((f,b)=>{let s=p.get(f.id);(!s||t)&&(s&&s.remove(),s=l(f),!s)||(b===0?e.firstElementChild!==s&&e.prepend(s):x&&x.nextElementSibling!==s&&x.after(s),x=s)}),ve(2,i.length),it()}catch(a){console.error("Error fetching blueprints:",a),e.children.length===0&&(e.innerHTML=B("offline","Failed to load blueprints.","The event service may be offline."))}}async function ft(){let t="/events?ml=1000&format=json&event.type=system.blueprint.generated";try{let e=await M(t);if(!e.ok)return;let a=(await e.json()).events||[],n=0;a.forEach(i=>{let l=i.event;if(typeof l=="string")try{l=JSON.parse(l)}catch{l={}}l.approved!==!0&&n++}),nt(n)}catch{}}function Jt(){let t=document.getElementById("blueprints-expand-all"),e=document.getElementById("blueprints-close-all"),o=document.getElementById("blueprints-clear");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{gt.forEach(a=>ae.add(a.id)),oe(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{ae.clear(),oe(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.onclick=async()=>{if(confirm("Are you sure you want to delete all UNAPPROVED blueprints?")){o.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{await M("/events?type=system.blueprint.generated",{method:"DELETE"}),ae.clear(),oe(!0)}catch(a){console.error("Failed to clear blueprints:",a)}finally{o.innerHTML="<i class='bx bx-trash'></i> Clear"}}},o.dataset.listenerAttached="true")}var bt=()=>`
    <div class="ideas-container">
        <div class="roadmap-section" style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-map-alt' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Strategic Roadmap</h2>
                </div>
                ${lt()}
            </div>
            ${ct()}
        </div>

        <div class="blueprints-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div class="system-section-header" style="margin: 0; display: flex; align-items: center; gap: 10px;">
                    <i class='bx bx-paint' style="color: #bb86fc;"></i>
                    <h2 style="font-size: 1.1em; margin: 0; text-align: left;">Architectural Blueprints</h2>
                </div>
                ${mt()}
            </div>
            ${ut()}
        </div>
    </div>
`;async function De(){await Promise.all([ie(),oe()])}var vt=()=>`
    <div class="system-section-header">
        <i class='bx bx-book-content' style="color: #03dac6;"></i>
        <h2>Contacts</h2>
        <button id="contacts-refresh" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
    </div>
    <div id="contacts-list" class="contacts-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; padding: 10px 0;">
    </div>
`,Vt=null;async function He(){let t=document.getElementById("contacts-list");if(!t)return;let e=document.getElementById("contacts-refresh");e&&!e.dataset.listenerAttached&&(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...",await He(),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)},e.dataset.listenerAttached="true");try{let o=await at("/contacts");if(!o.ok)throw new Error("Service unreachable");let n=(await o.json()).members||[];if(Vt=Date.now(),n.length===0){t.innerHTML=B("empty","No contacts found.","Check your Discord connection.");return}let i={Me:0,Master:1,Admin:2,Moderator:3,Contributor:4,User:5};n.sort((l,m)=>{let p=i[l.level]??10,g=i[m.level]??10;return p!==g?p-g:l.username.localeCompare(m.username)}),t.innerHTML=n.map(l=>{let m=l.color?"#"+l.color.toString(16).padStart(6,"0"):"rgba(255,255,255,0.1)",p=l.status==="online"?"#5eff5e":l.status==="idle"?"#ffa500":l.status==="dnd"?"#ff4d4d":"#666",g="#888";l.level==="Me"||l.level==="Master"?g="#bb86fc":l.level==="Admin"?g="#cf6679":l.level==="Moderator"?g="#03dac6":l.level==="Contributor"&&(g="#ffa500");let x=l.level==="Me",f=x?"rgba(187, 134, 252, 0.08)":"rgba(255,255,255,0.03)",b=x?"2px solid #bb86fc":`1px solid ${m}33`;return`
                <div class="user-profile-section" style="background: ${f}; padding: 15px; border-radius: 8px; border: ${b}; display: flex; align-items: center; gap: 12px; position: relative; overflow: hidden;">
                    <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 0% 0%, ${x?"#bb86fc":m}22, transparent 70%); pointer-events: none;"></div>
                    <div style="position: relative;">
                        <img src="${l.avatar_url}" style="width: 45px; height: 45px; border-radius: 50%; background: #222; border: ${x?"2px solid #bb86fc":"none"};" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
                        <div style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; background: ${p}; border: 2px solid #1a1a1a; border-radius: 50%;"></div>
                    </div>
                    <div class="user-info" style="text-align: left; flex: 1; min-width: 0;">
                        <h3 style="margin: 0; font-size: 0.95em; color: #fff; text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${l.username}</h3>
                        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
                            <span style="font-size: 0.75em; color: ${g}; font-weight: 600; text-transform: uppercase;">${x?"DEXTER (ME)":l.level}</span>
                        </div>
                        <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 0.65em; opacity: 0.4; text-align: left;">${l.id}</p>
                    </div>
                </div>
            `}).join("")}catch{t.children.length===0&&(t.innerHTML=B("offline","Failed to fetch contacts.","The Discord service may be offline."))}}var Kt={message_received:"{user} posted in {channel}: {message}",action_performed:"{actor} {action} {target}",log_entry:"[{level}] {message}",error_occurred:"ERROR: {error}",status_change:"{entity} changed status to {new_status}",metric_recorded:"{metric_name}: {value}{unit}","messaging.user.joined_voice":"{user_name} joined voice channel {channel_name}","messaging.user.left_voice":"{user_name} left voice channel {channel_name}","messaging.user.sent_message":"{user_name} in {channel_name}: {content}","messaging.bot.sent_message":"Dexter sent in {channel_name}: {content}","messaging.bot.joined_voice":"Dexter joined voice channel {channel_name}","messaging.bot.voice_response":"Dexter said: {content}","messaging.bot.status_update":"Dexter status changed to {status}: {details}","messaging.user.speaking.started":"{user_name} started speaking","messaging.user.speaking.stopped":"{user_name} stopped speaking","messaging.user.transcribed":"{user_name} said: {transcription}","messaging.user.joined_server":"{user_name} joined {server_name}","messaging.webhook.message":"{user_name} (Webhook): {content}","webhook.processed":"Webhook processed: {status}",voice_speaking_started:"User {user_id} started speaking in voice channel {channel_id}",voice_speaking_stopped:"User {user_id} stopped speaking in voice channel {channel_id}",voice_transcribed:"{user_name} said: {transcription}","engagement.decision":"Engagement Decision: {decision} ({reason})",bot_response:"Bot Responded: {response}","moderation.explicit_content.deleted":"Explicit content deleted in {channel_name} from {user_name}: {reason}","analysis.link.completed":"Analyzed link: {url}","analysis.visual.completed":"Analyzed image: {filename}","analysis.router.decision":"Router Decision: {decision} for {url}","system.status.change":"{entity} changed status to {new_status}","system.test.completed":"Tests completed for {service_name} ({duration})","system.build.completed":"Build completed for {service_name}: {status}","system.analysis.audit":"Guardian Audit: {tier}","system.blueprint.generated":"Blueprint Generated: {title}","system.cli.command":"CLI Command: {command} {args} ({status})","system.cli.status":"CLI Status: {message}","system.notification.generated":"Notification ({priority}): {title}","system.attention.expired":"Attention Expired: {tier}","system.roadmap.created":"Roadmap item created: {content}","system.roadmap.updated":"Roadmap item {id} changed to {state}","system.process.registered":"Process {id} started: {state}","system.process.unregistered":"Process {id} completed"};function xt(t,e){let o=Kt[t];if(t==="voice_transcribed"&&!e.user_name&&e.user_id&&(o="User {user_id} said in voice channel {channel_id}: {transcription}"),t==="system.notification.generated"&&(o=`Notification (${e.priority?e.priority.charAt(0).toUpperCase()+e.priority.slice(1):"Low"}): ${e.title}`),t==="system.analysis.audit"&&(o=`Guardian Audit: ${e.tier?e.tier.toUpperCase():"UNKNOWN"}`),t==="system.attention.expired")return`System Attention Expired: ${e.tier?e.tier.charAt(0).toUpperCase()+e.tier.slice(1):"Unknown"}`;if(t==="system.test.completed")return`Tests ${e.test?.status==="OK"&&e.lint?.status==="OK"&&e.format?.status==="OK"?"PASSED":"FAILED"} for ${e.service_name} (${e.duration})`;if(!o)return t;let a=o.replace(/\{(\w+)\}/g,(n,i)=>e[i]!==void 0&&e[i]!==null?e[i]:n);return(t==="messaging.user.transcribed"||t==="voice_transcribed")&&e.detected_language&&e.detected_language!=="en"&&e.english_translation&&(a+=` (Translation: ${e.english_translation})`),a}var Ne=()=>`
    <div class="system-section-header" style="margin-bottom: 20px;">
        <i class='bx bx-calendar-event' style="color: #03dac6;"></i>
        <h2>Events</h2>
        <div id="event-filters" class="event-filters" style="margin-left: 20px; margin-bottom: 0;">
            <button class="notif-action-btn filter-btn ${O==="all"?"active":""}" data-filter="all">All</button>
            <button class="notif-action-btn filter-btn ${O==="messaging"?"active":""}" data-filter="messaging">Messaging</button>
            <button class="notif-action-btn filter-btn ${O==="system"?"active":""}" data-filter="system">System</button>
            <button class="notif-action-btn filter-btn ${O==="cognitive"?"active":""}" data-filter="cognitive">Cognitive</button>
            <button class="notif-action-btn filter-btn ${O==="moderation"?"active":""}" data-filter="moderation">Moderation</button>
        </div>
        <div class="alerts-actions" style="margin-left: auto; display: flex; gap: 10px; padding: 0;">
            <button id="events-expand-all" class="notif-action-btn"><i class='bx bx-expand'></i> Expand All</button>
            <button id="events-close-all" class="notif-action-btn"><i class='bx bx-collapse'></i> Close All</button>
            <button id="events-clear" class="notif-action-btn danger"><i class='bx bx-trash'></i> Clear</button>
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
`,Le=null,re=new Set,xe=[],O="all",Yt={messaging:["message_received","messaging.user.sent_message","messaging.bot.sent_message","messaging.user.transcribed","voice_transcribed","bot_response","messaging.user.joined_voice","messaging.user.left_voice","messaging.bot.joined_voice","messaging.bot.voice_response","messaging.user.speaking.started","messaging.user.speaking.stopped","messaging.webhook.message"],system:["system.cli.command","system.cli.status","system.status.change","metric_recorded","log_entry","error_occurred","webhook.processed","messaging.bot.status_update","messaging.user.joined_server","system.test.completed","system.build.completed","system.roadmap.created","system.roadmap.updated","system.process.registered","system.process.unregistered"],cognitive:["engagement.decision","system.analysis.audit","system.blueprint.generated","analysis.link.completed","analysis.visual.completed","analysis.router.decision"],moderation:["moderation.explicit_content.deleted"]},Xt={message_received:"bx-message-detail","messaging.user.sent_message":"bx-message-rounded-dots","messaging.bot.sent_message":"bx-bot","messaging.user.transcribed":"bx-microphone",voice_transcribed:"bx-microphone","messaging.user.joined_voice":"bx-phone-incoming","messaging.user.left_voice":"bx-phone-outgoing","messaging.webhook.message":"bx-cloud-lightning","system.cli.command":"bx-terminal","system.cli.status":"bx-info-circle","system.test.completed":"bx-check-shield","system.build.completed":"bx-package","system.roadmap.created":"bx-map-pin","system.roadmap.updated":"bx-map-alt","system.process.registered":"bx-play-circle","system.process.unregistered":"bx-stop-circle",error_occurred:"bx-error-alt","engagement.decision":"bx-brain","system.analysis.audit":"bx-search-alt","system.blueprint.generated":"bx-paint","analysis.link.completed":"bx-link","analysis.visual.completed":"bx-image","analysis.router.decision":"bx-git-branch","moderation.explicit_content.deleted":"bx-shield-x","system.status.change":"bx-refresh",metric_recorded:"bx-line-chart"};function Qt(t){for(let[e,o]of Object.entries(Yt))if(o.includes(t))return e;return"system"}function Zt(t){return Xt[t]||"bx-square-rounded"}async function le(t=!1){let e=document.getElementById("events-timeline");if(!e)return;es();let a=`/events?ml=${O==="all"?100:250}&format=json`;O!=="all"&&(a+=`&category=${O}`);try{let n=await M(a);if(!n.ok)throw new Error("Service unreachable");if(xe=((await n.json()).events||[]).filter(b=>{let s=b.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return!0}let u=s.type;return!(u==="system.blueprint.generated"||u==="system.notification.generated")}),Le=Date.now(),W(1,Le),xe.length===0){e.innerHTML=B("empty","No events found for this filter.");return}t&&(e.innerHTML="");let m=b=>{let s=b.event;if(typeof s=="string")try{s=JSON.parse(s)}catch{return null}let u=s.type,I=Qt(u),h=Zt(u),c=u==="engagement.decision"||u==="messaging.bot.sent_message"||u==="messaging.user.sent_message"||u==="moderation.explicit_content.deleted"||u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="system.cli.command"||u==="system.analysis.audit"||u==="system.test.completed"||u==="error_occurred"||u==="system.cli.status"||u==="system.attention.expired"||u.startsWith("system.roadmap")||u.startsWith("system.process"),v="event-border-grey";c&&(u==="moderation.explicit_content.deleted"||u==="error_occurred"?v="event-border-red":u==="analysis.link.completed"||u==="analysis.visual.completed"||u==="analysis.router.decision"||u==="system.analysis.audit"?v="event-border-purple":u==="system.attention.expired"||u==="system.cli.command"||u==="system.cli.status"?v="event-border-orange":u==="system.test.completed"?v=s.test?.status==="OK"&&s.lint?.status==="OK"&&s.format?.status==="OK"?"event-border-blue":"event-border-red":v="event-border-blue");let r=c?"cursor-pointer":"",d=re.has(b.id),y=d?"expanded":"",C=d?"display: block;":"display: none;",T=new Date(b.timestamp*1e3),S=T.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}),A=T.toLocaleDateString(navigator.language,{month:"short",day:"numeric"}),E=xt(u,s),N=s.user_level?`<span style="font-size: 0.8em; opacity: 0.6; margin-left: 5px;">(${s.user_level})</span>`:"",R="";if(c){let k="";if(u==="engagement.decision"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Engagement Model:</span>
                            <span class="detail-value">${s.engagement_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Input Decision")}
                            <pre class="detail-pre">${s.input_decision||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context History")}
                            <pre class="detail-pre">${s.context_history||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Engagement Output")}
                            <pre class="detail-pre">${s.engagement_raw||"None"}</pre>
                        </div>
                    `}else if(u==="system.attention.expired"){let w=L=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${L}</h5>`,$=s.timestamp-s.last_active,_=Math.floor($/60);k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Protocol:</span>
                            <span class="detail-value" style="color: #bb86fc;">${s.tier}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Idle Time:</span>
                            <span class="detail-value">${_} minutes</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context (Last Input)")}
                            <div class="detail-pre">${ue(s.last_input||"None")}</div>
                        </div>
                        <div class="event-detail-block">
                            ${w("Thought Process (Last Output)")}
                            <div class="detail-pre">${ue(s.last_output||"None")}</div>
                        </div>
                    `}else if(u==="messaging.bot.sent_message"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Response Model:</span>
                            <span class="detail-value">${s.response_model||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Input (Prompt)")}
                            <pre class="detail-pre">${s.raw_input||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Response Output")}
                            <pre class="detail-pre">${s.response_raw||"None"}</pre>
                        </div>
                    `}else if(u==="moderation.explicit_content.deleted"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Reason:</span>
                            <span class="detail-value">${s.reason||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Raw Model Output")}
                            <pre class="detail-pre">${D(s.raw_output)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.link.completed"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">URL:</span>
                            <span class="detail-value"><a href="${s.url}" target="_blank" class="attachment-link">${s.url}</a></span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Title:</span>
                            <span class="detail-value">${D(s.title)||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Description")}
                            <pre class="detail-pre">${D(s.description)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Content Summary")}
                            <pre class="detail-pre">${D(s.summary)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.visual.completed"){let w=_=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${_}</h5>`,$="";s.base64_preview?$=`<div class="event-detail-block"><img src="data:image/jpeg;base64,${s.base64_preview}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`:s.url&&($=`<div class="event-detail-block"><img src="${s.url}" class="event-image-preview" style="max-width: 100%; border-radius: 4px; margin-top: 10px;"></div>`),k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Filename:</span>
                            <span class="detail-value">${s.filename}</span>
                        </div>
                        ${$}
                        <div class="event-detail-block">
                            ${w("Visual Description")}
                            <pre class="detail-pre">${D(s.description)||"None"}</pre>
                        </div>
                    `}else if(u==="analysis.router.decision"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
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
                            ${w("Raw Model Output")}
                            <pre class="detail-pre">${D(s.raw_output)||"None"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Input Context")}
                            <pre class="detail-pre">${D(s.raw_input)||"None"}</pre>
                        </div>
                    `}else if(u==="system.cli.command"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
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
                            ${w("Output")}
                            <pre class="detail-pre">${D(s.output)||"No output recorded."}</pre>
                        </div>
                    `}else if(u==="system.analysis.audit"){let w=s.success?"#03dac6":"#ff4d4d",$=s.success?"SUCCESS":"FAILED",_=F=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${F}</h5>`,L="";s.error&&(L=`
                            <div class="event-detail-block">
                                ${_("Error")}
                                <pre class="detail-pre" style="color: #ff4d4d; border-color: rgba(255, 77, 77, 0.2);">${D(s.error)}</pre>
                            </div>
                        `);let z="";if(s.chat_history&&s.chat_history.length>0){let F=s.chat_history.length,j=s.chat_history.map((Q,ce)=>{let V=Q.role.toUpperCase();V==="USER"&&(V="SYSTEM"),V==="ASSISTANT"&&(V="AGENT");let G=Q.role==="user"?"#03dac6":Q.role==="system"?"#ffb74d":"#bb86fc";return`
                                <div class="history-slide" data-index="${ce}" style="display: ${ce===0?"block":"none"};">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                        <span style="font-size: 0.7em; text-transform: uppercase; color: ${G}; letter-spacing: 1px; font-weight: bold;">${V}</span>
                                        <span style="font-size: 0.7em; color: #666;">Turn ${ce+1} of ${F}</span>
                                    </div>
                                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee; white-space: pre-wrap; overflow-x: auto; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; max-height: 300px; overflow-y: auto;">${D(Q.content)}</div>
                                </div>
                            `}).join("");z=`
                            <div class="event-detail-block">
                                ${_("Turn-by-Turn History")}
                                <div class="history-carousel" style="position: relative; background: rgba(255,255,255,0.03); border-radius: 4px; padding: 15px;">
                                    ${j}
                                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                        <button class="carousel-btn prev-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" disabled><i class='bx bx-chevron-left'></i> Prev</button>
                                        <button class="carousel-btn next-btn" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 0.8em; transition: background 0.2s;" ${F<=1?"disabled":""}>Next <i class='bx bx-chevron-right'></i></button>
                                    </div>
                                </div>
                            </div>
                        `}let U="";if(s.corrections&&s.corrections.length>0){let F=s.corrections.map((j,Q)=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(255, 77, 77, 0.1); border-left: 2px solid #ff4d4d; font-size: 0.85em;">
                                <div style="color: #ff4d4d; font-weight: bold; margin-bottom: 4px;">[${j.type}] ${j.guidance}</div>
                                ${j.snippet?`<div style="font-family: monospace; color: #aaa; background: rgba(0,0,0,0.3); padding: 4px;">${D(j.snippet)}</div>`:""}
                            </div>
                        `).join("");U=`
                            <div class="event-detail-block">
                                ${_(`Corrections (${s.corrections.length})`)}
                                ${F}
                            </div>
                        `}let he="";if(s.parsed_results&&s.parsed_results.length>0){let F=s.parsed_results.map(j=>`
                            <div style="margin-bottom: 8px; padding: 8px; background: rgba(3, 218, 198, 0.1); border-left: 2px solid #03dac6; font-size: 0.85em;">
                                <div style="color: #03dac6; font-weight: bold; margin-bottom: 4px;">${D(j.title)}</div>
                                <div style="color: #ddd;">${D(j.summary)}</div>
                            </div>
                        `).join("");he=`
                            <div class="event-detail-block">
                                ${_("Parsed Results")}
                                ${F}
                            </div>
                        `}k=`
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">
                            <div style="flex: 1; min-width: 120px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Agent</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.agent_name||"Guardian"}</div>
                            </div>
                            <div style="flex: 1; min-width: 80px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Protocol</div>
                                <div class="metadata-value" style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #bb86fc;">${s.tier}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Status</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: ${w}; font-weight: bold;">${$} <span style="font-weight: normal; opacity: 0.6; font-size: 0.9em;">(${s.attempts} att)</span></div>
                            </div>
                            <div style="flex: 1; min-width: 100px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Duration</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.duration}</div>
                            </div>
                            <div style="flex: 1; min-width: 150px;">
                                <div style="font-size: 0.65em; text-transform: uppercase; color: #666; letter-spacing: 1px; margin-bottom: 4px;">Model</div>
                                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.85em; color: #eee;">${s.model}</div>
                            </div>
                        </div>
                        ${L}
                        ${he}
                        ${U}
                        ${z}
                    `}else if(u==="system.test.completed"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row">
                            <span class="detail-label">Service:</span>
                            <span class="detail-value">${s.service_name}</span>
                        </div>
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${s.duration}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Format")}
                            <pre class="detail-pre">${s.format?.status||"N/A"}: ${s.format?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Lint")}
                            <pre class="detail-pre">${s.lint?.status||"N/A"}: ${s.lint?.message||"OK"}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Tests")}
                            <pre class="detail-pre">${s.test?.status||"N/A"}: ${s.test?.details||s.test?.message||"OK"}</pre>
                        </div>
                    `}else if(u==="error_occurred"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Severity:</span>
                            <span class="detail-value" style="color: #ff4d4d;">${s.severity||"high"}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Error Message")}
                            <pre class="detail-pre" style="color: #ff4d4d;">${D(s.error)}</pre>
                        </div>
                        <div class="event-detail-block">
                            ${w("Context")}
                            <pre class="detail-pre">${JSON.stringify(s.context||{},null,2)}</pre>
                        </div>
                    `}else if(u==="system.cli.status"){let w=$=>`<h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">${$}</h5>`;k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Status:</span>
                            <span class="detail-value">${s.status}</span>
                        </div>
                        <div class="event-detail-block">
                            ${w("Message")}
                            <pre class="detail-pre">${D(s.message)}</pre>
                        </div>
                    `}else if(u==="messaging.user.sent_message"){let w="";s.attachments&&s.attachments.length>0&&(w=`
                            <div class="event-detail-block">
                                <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Attachments</h5>
                                <div class="attachments-grid">${s.attachments.map(_=>{let L=_.content_type&&_.content_type.startsWith("image/"),z=(_.size/1024).toFixed(1)+" KB";return`
                                <div class="attachment-item">
                                    ${L?`<div class="attachment-thumb-container"><img src="${_.url}" alt="${_.filename}" class="attachment-thumb"></div>`:`<div class="attachment-icon-container"><i class='bx bx-file attachment-icon'></i></div>`}
                                    <div class="attachment-info">
                                        <a href="${_.url}" target="_blank" class="attachment-link">${_.filename}</a>
                                        <span class="attachment-meta">${_.content_type} \u2022 ${z}</span>
                                    </div>
                                </div>`}).join("")}</div>
                            </div>`),k=`
                        <div class="event-detail-row" style="margin-bottom: 15px;">
                            <span class="detail-label">Message ID:</span>
                            <span class="detail-value">${s.message_id||"N/A"}</span>
                        </div>
                        <div class="event-detail-block">
                            <h5 style="margin-bottom: 8px; text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 0.75em; text-transform: uppercase; letter-spacing: 1.5px; color: #888;">Raw Content</h5>
                            <pre class="detail-pre" style="color: #fff;">${s.content||"(empty)"}</pre>
                        </div>
                        ${w}
                    `}R=`
                    <div class="event-details" style="${C}">
                        ${k}
                    </div>
                `}let H=document.createElement("div");H.className=`event-item ${v} ${r} ${y}`,H.dataset.eventId=b.id,H.onclick=function(k){if(!c)return;if(this.classList.contains("expanded")){this.classList.remove("expanded"),re.delete(b.id);let $=this.querySelector(".event-details");$&&($.style.display="none")}else{this.classList.add("expanded"),re.add(b.id);let $=this.querySelector(".event-details");$&&($.style.display="block")}},H.innerHTML=`
                <div class="event-time">
                    <span class="event-time-main">${S}</span>
                    <span class="event-date">${A}</span>
                </div>
                <div class="event-icon"><i class='bx ${h}'></i></div>
                <div class="event-content">
                    <div class="event-service">
                        <span class="event-category-tag cat-${I}" style="font-size: 0.7em; padding: 2px 6px; border-radius: 4px; background: rgba(255,255,255,0.05); color: #888; text-transform: uppercase; margin-right: 8px;">${I}</span>
                        ${b.service} ${N}
                    </div>
                    <div class="event-message">${E}</div>
                    ${R}
                </div>
            `;let P=H.querySelector(".event-details");if(P&&P.addEventListener("click",k=>{k.stopPropagation()}),c){let k=H.querySelector(".close-details-btn");k&&k.addEventListener("click",w=>{w.stopPropagation();let $=w.target.closest(".event-item");if($){$.classList.remove("expanded"),re.delete(b.id);let _=$.querySelector(".event-details");_&&(_.style.display="none")}})}let J=H.querySelector(".prev-btn"),q=H.querySelector(".next-btn");if(J&&q){let k=0,w=H.querySelectorAll(".history-slide"),$=w.length,_=()=>{w.forEach((L,z)=>{L.style.display=z===k?"block":"none"}),J.disabled=k===0,q.disabled=k===$-1,J.style.opacity=k===0?"0.5":"1",q.style.opacity=k===$-1?"0.5":"1"};J.addEventListener("click",L=>{L.stopPropagation(),k>0&&(k--,_())}),q.addEventListener("click",L=>{L.stopPropagation(),k<$-1&&(k++,_())}),_()}return H},p=Array.from(e.children),g=new Map(p.map(b=>[b.dataset.eventId,b])),x=new Set(xe.map(b=>b.id));p.forEach(b=>{let s=b.dataset.eventId;(!s||!x.has(s))&&b.remove()});let f=null;xe.forEach((b,s)=>{let u=g.get(b.id);(!u||t)&&(u&&u.remove(),u=m(b),!u)||(s===0?e.firstElementChild!==u&&e.prepend(u):f&&f.nextElementSibling!==u&&f.after(u),f=u)}),Le=Date.now(),W(1,Le)}catch(n){console.error("Error fetching events:",n),e.children.length===0&&(e.innerHTML=B("offline","Failed to load events.","The event service may be offline."))}}function es(){let t=document.getElementById("events-expand-all"),e=document.getElementById("events-close-all"),o=document.getElementById("event-filters");t&&!t.dataset.listenerAttached&&(t.onclick=()=>{xe.forEach(n=>re.add(n.id)),le(!0)},t.dataset.listenerAttached="true"),e&&!e.dataset.listenerAttached&&(e.onclick=()=>{re.clear(),le(!0)},e.dataset.listenerAttached="true"),o&&!o.dataset.listenerAttached&&(o.querySelectorAll(".filter-btn").forEach(n=>{n.onclick=()=>{o.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),n.classList.add("active"),O=n.dataset.filter,le(!0)}}),o.dataset.listenerAttached="true"),o&&o.querySelectorAll(".filter-btn").forEach(n=>{n.dataset.filter===O?n.classList.add("active"):n.classList.remove("active")});let a=document.getElementById("events-clear");a&&!a.dataset.listenerAttached&&(a.onclick=async()=>{let n=O==="all"?"ALL":O.toUpperCase();if(confirm(`Are you sure you want to delete ${n} events from the backend? This cannot be undone.`)){a.innerHTML="<i class='bx bx-loader-alt spin'></i> Clearing...";try{let i="/events";if(O!=="all"?i+=`?category=${O}`:i+="?exclude_types=system.blueprint.generated,system.notification.generated",!(await M(i,{method:"DELETE"})).ok)throw new Error("Failed to delete events");re.clear(),le(!0)}catch(i){console.error("Failed to clear events:",i),alert("Failed to clear events. Check console.")}finally{a.innerHTML="<i class='bx bx-trash'></i> Clear"}}},a.dataset.listenerAttached="true")}function yt(){return`
        <div id="logs-container" class="logs-container"></div>
    `}var ts=null;async function ye(){let t=document.getElementById("logs-container");if(!t)return!1;t.classList.remove("placeholder-active");try{let e=await M("/logs");if(!e.ok)throw new Error("Logs offline");let o=await e.json();if(!o||o.length===0)return t.innerHTML=B("empty","No logs found.","Services are quiet."),t.classList.add("placeholder-active"),!1;let a=["local-ollama-0","local-cache-0","cloud-cache-0","cloud-cache-1"],n=o.filter(l=>!a.includes(l.id));n.forEach(l=>{l.logs&&Array.isArray(l.logs)?l.logs.reverse():l.logs=[]}),n.reverse();let i=n.map(l=>{let m=l.logs.join(`
`),p=[...l.logs];if(p.length<25){let x=25-p.length;for(let f=0;f<x;f++)p.push("")}else p.length>25&&(p=p.slice(-25));let g=p.map(x=>Ce(x)).join(`
`);return`
                <div class="log-report">
                    <div class="log-report-header">
                        <h3>${l.id}</h3>
                        <div style="display: flex; gap: 5px;">
                            <button class="log-action-btn copy-logs-btn" data-logs="${escape(m)}" title="Copy Logs">
                                <i class="bx bx-copy"></i>
                            </button>
                            <button class="log-action-btn delete clear-logs-btn" data-service-id="${l.id}" title="Clear Logs">
                                <i class="bx bx-trash"></i>
                            </button>
                        </div>
                    </div>
                    <pre class="log-content">${g}</pre>
                </div>
            `}).join("");return t.innerHTML=i,document.querySelectorAll(".copy-logs-btn").forEach(l=>{l.addEventListener("click",()=>{let m=unescape(l.dataset.logs);navigator.clipboard.writeText(m).then(()=>{let p=l.querySelector("i");p.classList.remove("bx-copy"),p.classList.add("bx-check"),setTimeout(()=>{p.classList.remove("bx-check"),p.classList.add("bx-copy")},2e3)})})}),document.querySelectorAll(".clear-logs-btn").forEach(l=>{l.addEventListener("click",async()=>{let m=l.dataset.serviceId;if(confirm(`Are you sure you want to clear logs for ${m}?`))try{(await M(`/logs?service_id=${m}`,{method:"DELETE"})).ok&&ye()}catch(p){console.error("Error clearing logs:",p)}})}),ts=Date.now(),!0}catch(e){return console.error("Error fetching logs:",e),t.children.length===0&&(t.innerHTML=B("offline","Failed to load logs.","The event service may be offline."),t.classList.add("placeholder-active")),!1}}var $t=()=>`
        <div class="system-section-header">
            <i class='bx bxs-pie-chart-alt-2' style="color: #03dac6;"></i>
            <h2>Summary</h2>
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
            <i class='bx bxs-zap' style="color: #bb86fc;"></i>
            <h2>Guardian</h2>
            <button id="guardian-reset-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Reset</button>
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
        </div>`,St=()=>`
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
        <div id="processes-history-widgets" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; opacity: 0.8;"></div>`,Ct=()=>`
        <div class="system-section-header">
            <i class='bx bxs-server' style="color: #03dac6;"></i>
            <h2>Services</h2>
        </div>
        <div id="services-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,kt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-brain' style="color: #03dac6;"></i>
            <h2>Cognitive Models</h2>
        </div>
        <div id="models-widgets" class="system-monitor-widgets" style="margin-bottom: 30px;"></div>`,Tt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-hdd' style="color: #03dac6;"></i>
            <h2>Hardware</h2>
            <button id="hardware-refresh-btn" class="notif-action-btn" style="margin-left: auto;"><i class='bx bx-refresh'></i> Refresh</button>
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
        </div>`,Lt=()=>`
        <div class="system-section-header">
            <i class='bx bxs-terminal' style="color: #03dac6;"></i>
            <h2>Service Logs</h2>
        </div>
        <div id="logs-container-wrapper" style="margin-bottom: 20px;">
            ${yt()}
        </div>`;async function It(){await Promise.all([Ie(),Pe(),Re()]),await ye()}var ht=null,wt=null;async function At(){try{return await(await M("/system_monitor")).json()}catch{return null}}async function Et(){try{return await(await M("/system/hardware")).json()}catch{return null}}async function ss(){try{return await(await M("/processes")).json()}catch{return null}}async function ns(){try{return await(await M("/agent/status")).json()}catch{return null}}async function Pe(){let t=document.getElementById("services-widgets"),e=document.getElementById("hardware-refresh-btn"),o=document.querySelector("#hw-os .hw-content"),a=document.querySelector("#hw-cpu .hw-content"),n=document.querySelector("#hw-ram .hw-content"),i=document.querySelector("#hw-gpu .hw-content"),l=document.querySelector("#hw-storage .hw-content"),m=c=>{if(c){if(o&&(o.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${c.OS||"Unknown"}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${c.ARCHITECTURE||"unknown"}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Architecture</span></div>
                    </div>
                </div>`),n){let v=(c.MEMORY_BYTES/1073741824).toFixed(1);n.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.9em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">Total System Memory</span>
                    <span style="font-size: 1.8em; font-weight: bold; color: #fff;">${v} <span style="font-size: 0.5em; color: #888; font-weight: normal; margin-left: 2px;">GB</span></span>
                </div>`}if(a&&c.CPU&&c.CPU.length>0){let v=c.CPU[0];a.innerHTML=`
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                    <span style="font-size: 1.1em; color: #fff; font-weight: 400; letter-spacing: 0.5px;">${v.LABEL}</span>
                    <div style="display: flex; gap: 30px;">
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #03dac6; line-height: 1;">${v.COUNT}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Cores</span></div>
                        <div style="text-align: right;"><span style="display: block; font-size: 1.3em; font-weight: bold; color: #bb86fc; line-height: 1;">${v.THREADS}</span><span style="font-size: 0.65em; color: #666; text-transform: uppercase; font-weight: 700;">Threads</span></div>
                    </div>
                </div>`}i&&(c.GPU&&c.GPU.length>0?i.innerHTML=c.GPU.map(v=>{let r=(v.VRAM/1073741824).toFixed(1);return`
                        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                            <span style="font-size: 1.1em; color: #fff; font-weight: 400;">${v.LABEL}</span>
                            <span style="font-size: 1.2em; font-weight: bold; color: #fff;">${r} <span style="font-size: 0.6em; color: #888; font-weight: normal;">GB VRAM</span></span>
                        </div>`}).join('<div style="height: 1px; background: rgba(255,255,255,0.05); margin: 15px 0;"></div>'):i.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No GPU detected</p>'),l&&c.STORAGE&&c.STORAGE.length>0?l.innerHTML=c.STORAGE.map(v=>{let r=(v.USED/1073741824).toFixed(1),d=(v.SIZE/(1024*1024*1024)).toFixed(1),y=v.SIZE>0?(v.USED/v.SIZE*100).toFixed(0):0,C=v.MOUNT_POINT||"Unmounted";return`
                    <div style="padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i class='bx bxs-hdd' style="color: #03dac6; font-size: 1.1em;"></i>
                                <span style="font-weight: 600; color: #fff; font-size: 0.95em;">${v.DEVICE}</span>
                            </div>
                            <span style="font-size: 0.75em; color: #666; font-family: monospace; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px;">${C}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.75em; color: #888; margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                            <span>${r} GB Used</span>
                            <span>${d} GB Total</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.05); height: 6px; border-radius: 3px; overflow: hidden;">
                             <div style="background: ${y>90?"#cf6679":"#03dac6"}; width: ${y}%; height: 100%; box-shadow: 0 0 10px ${y>90?"#cf667944":"#03dac644"};"></div>
                        </div>
                    </div>`}).join(""):l&&(l.innerHTML='<p style="text-align: center; color: #666; margin: 0;">No storage devices found</p>')}};if(e&&(e.dataset.listenerAttached||(e.onclick=async()=>{e.innerHTML="<i class='bx bx-loader-alt spin'></i> Refreshing...";let c=await Et();c?(m(c),e.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3)):(e.innerHTML="<i class='bx bx-error'></i> Failed",setTimeout(()=>{e.innerHTML="<i class='bx bx-refresh'></i> Refresh"},2e3))},e.dataset.listenerAttached="true"),a&&!a.hasChildNodes())){let c=await Et();m(c)}if(!t)return;let p=await At();if(!p||!p.services){t.children.length===0&&(t.innerHTML=B("offline","Failed to load system metrics.","The event service may be offline."));return}ht=Date.now(),W(0,ht);let g=p.services||[];Array.from(t.children).forEach(c=>{c.classList.contains("service-widget")||c.remove()});function x(c){return!c||c==="N/A"||c==="unknown"||c.trim()===""?"-":c}function f(c){if(!c||c==="N/A"||c==="unknown")return"-";let v=c.match(/^(\d+\.\d+\.\d+)/);return v?v[0]:c.split(".").slice(0,3).join(".")||"-"}function b(c){return!c||c.length<=28?c:c.substring(0,28)+"..."}function s(c){if(!c||c==="N/A"||c==="unknown")return"-";let v=c.match(/(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:([\d.]+)s)?/);if(!v)return"-";let r=parseInt(v[1])||0,d=parseInt(v[2])||0,y=parseInt(v[3])||0,C=parseFloat(v[4])||0,T=r*86400+d*3600+y*60+C,S=Math.floor(T/86400);if(S>0)return`${S}d`;let A=Math.floor(T/3600);if(A>0)return`${A}h`;let E=Math.floor(T/60);return E>0?`${E}m`:`${Math.floor(T)}s`}function u(c){let v=c.status==="online",r=v?"service-widget-online":"service-widget-offline",d=v?"bx-check-circle":"bx-x-circle",y=v?"OK":"BAD",C=c.version?f(c.version.str):"-",T=c.cpu&&c.cpu!=="N/A"?c.cpu:"-",S=c.memory&&c.memory!=="N/A"?c.memory:"-",A=T!=="-"?"#00ff00":"#666",E=T!=="-"?"#fff":"#666",N=S!=="-"?"#00ff00":"#666",R=S!=="-"?"#fff":"#666",H=s(c.uptime),P="";return v?P=`
                <div class="service-widget-info">
                    <span class="info-label">Version:</span>
                    <span class="info-value metric-version-monospace">${C}</span>
                </div>
                <div class="service-widget-footer">
                    <div class="service-widget-item">
                        <i class="bx bx-time-five" style="color: #00ff00;"></i>
                        <span style="color: #fff;">${H}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-microchip" style="color: ${A};"></i>
                        <span style="color: ${E};">${T}</span>
                    </div>
                    <div class="service-widget-item">
                        <i class="bx bxs-chip" style="color: ${N};"></i>
                        <span style="color: ${R};">${S}</span>
                    </div>
                </div>`:P='<div class="service-widget-footer offline"><span>OFFLINE</span></div>',`<div class="service-widget ${r}" data-service-id="${c.id}"><div class="service-widget-header"><i class="bx ${d}"></i><h3>${c.short_name||c.id}</h3><span class="service-widget-status">${y}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Address:</span><span class="info-value">${b(c.domain&&c.port?`${c.domain}:${c.port}`:"")}</span></div>${P}</div></div>`}let I=new Map(Array.from(t.querySelectorAll(".service-widget")).map(c=>[c.dataset.serviceId,c])),h=new Set(g.map(c=>c.id));for(let[c,v]of I)h.has(c)||v.remove();g.forEach(c=>{let v=u(c),r=I.get(c.id);r?r.outerHTML!==v&&(r.outerHTML=v):t.insertAdjacentHTML("beforeend",v)})}async function Re(){let t=document.getElementById("models-widgets");if(!t)return;let e=await At();if(!e){t.children.length===0&&(t.innerHTML=B("offline","Failed to load model status.","The event service may be offline."));return}wt=Date.now(),W(2,wt);let o=e.models||[],a=e.whisper;Array.from(t.children).forEach(p=>{p.classList.contains("service-widget")||p.remove()});function n(p){let g=p.status==="Ready";return`
                <div class="service-widget ${g?"service-widget-online":"service-widget-offline"}" data-whisper-widget>
                    <div class="service-widget-header">
                        <i class="bx bxs-microphone-alt"></i>
                        <h3>Whisper</h3>
                        <span class="service-widget-status">${g?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${p.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">large-v3-turbo</span>
                        </div>
                    </div>
                </div>`}function i(p){let g=p.status==="Ready";return`
                <div class="service-widget ${g?"service-widget-online":"service-widget-offline"}" data-xtts-widget>
                    <div class="service-widget-header">
                        <i class="bx bx-volume-full"></i>
                        <h3>XTTS-v2</h3>
                        <span class="service-widget-status">${g?"READY":"NOT FOUND"}</span>
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">Status:</span>
                            <span class="info-value">${p.status}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Model:</span>
                            <span class="info-value">xtts</span>
                        </div>
                    </div>
                </div>`}function l(p){let g=p.status==="Downloaded",x=g?"service-widget-online":"service-widget-offline",f=g?"OK":"MISSING",b=g&&p.size>0?`${(p.size/1e9).toFixed(2)} GB`:"-",s=p.name;return p.type==="custom"&&s.endsWith(":latest")&&(s=s.replace(":latest","")),`<div class="service-widget ${x}" data-model-name="${p.name}"><div class="service-widget-header"><i class="bx ${g?"bx-check-circle":"bx-x-circle"}"></i><h3>${s}</h3><span class="service-widget-status">${f}</span></div><div class="service-widget-body"><div class="service-widget-info"><span class="info-label">Type:</span><span class="info-value">${p.type}</span></div><div class="service-widget-info"><span class="info-label">Size:</span><span class="info-value">${b}</span></div></div></div>`}let m="";if(a&&(m+=n(a)),e.xtts&&(m+=i(e.xtts)),m+=o.map(l).join(""),!m){t.innerHTML=B("empty","No models found.");return}t.innerHTML!==m&&(t.innerHTML=m)}async function Ie(){let t=document.getElementById("processes-widgets");if(!t)return;let e=document.getElementById("guardian-sentry-val"),o=document.getElementById("guardian-architect-val"),a=document.getElementById("guardian-idle-val"),n=document.getElementById("guardian-total-idle"),i=document.getElementById("guardian-total-active"),l=document.getElementById("guardian-total-waste"),m=document.getElementById("guardian-reset-btn");m&&!m.dataset.listenerAttached&&(m.onclick=async()=>{m.innerHTML="<i class='bx bx-loader-alt spin'></i> Resetting...";try{await M("/guardian/reset?protocol=all",{method:"POST"}),setTimeout(()=>{m.innerHTML="<i class='bx bx-check'></i> Done",setTimeout(()=>{m.innerHTML="<i class='bx bx-refresh'></i> Reset"},2e3)},500),Ie()}catch{m.innerHTML="<i class='bx bx-error'></i> Failed"}},m.dataset.listenerAttached="true");let p=await ns();if(p){let I=Math.floor(Date.now()/1e3),h=p.active_tier,c=p.protocol_aliases||{sentry:"Sentry",architect:"Architect"},v=C=>{C<0&&(C=0);let T=Math.floor(C/3600),S=Math.floor(C%3600/60),A=C%60;return T>0?`${T}h ${S}m`:S>0?`${S}m ${A}s`:`${A}s`},r=(C,T,S,A)=>{if(!C)return;let E=c[A]||A.toUpperCase(),N=C.parentElement.querySelector('span[style*="text-transform: uppercase"]');if(N&&(N.textContent=E),h&&h.includes(E))C.textContent="Working",C.style.color="#bb86fc";else if(S){let H=S.next_run-I;if(H<=0)C.textContent="Ready",C.style.color="#5eff5e";else{let P=Math.floor(H/60),J=H%60;C.textContent=`${P}m ${J}s`,C.style.color="#fff"}}T&&S&&(T.innerHTML=`
          <div style="display: flex; flex-direction: column; gap: 2px;">
            <span>Runs: ${S.attempts||0}</span>
            <span style="color: ${S.failures>0?"#ffa500":"#666"}">Fails: ${S.failures||0}</span>
            <span style="color: ${S.absolute_failures>0?"#ff4d4d":"#666"}">Aborted: ${S.absolute_failures||0}</span>
          </div>
        `)};e&&r(e,document.getElementById("guardian-sentry-stats"),p.sentry,"sentry"),o&&r(o,document.getElementById("guardian-architect-stats"),p.architect,"architect");let d=document.getElementById("system-state-label"),y=document.getElementById("system-state-val");if(y&&p.system_state){let C=p.system_state,T=v(p.system_state_time||0);d&&(d.textContent=`State: ${C.toUpperCase()}`),y.textContent=T,C==="idle"?y.style.color=p.system_state_time>300?"#5eff5e":"#fff":y.style.color="#bb86fc"}n&&(n.textContent=v(p.total_idle_time||0)),i&&(i.textContent=v(p.total_active_time||0)),l&&(l.textContent=v(p.total_waste_time||0))}else[e,o,a,n,i,l].forEach(h=>{h&&(h.textContent="-",h.style.color="#666")});let g=await ss(),x=[],f=[],b=[];g&&(Array.isArray(g)?x=g:(x=g.active||[],f=g.queue||[],b=g.history||[],b.sort((I,h)=>(h.end_time||0)-(I.end_time||0)))),x.length===0?t.querySelector(".tab-placeholder")||(t.innerHTML=B("empty","No active processes.")):((t.querySelector(".tab-placeholder")||t.querySelector("p"))&&(t.innerHTML=""),ze(t,x,!1));let s=document.getElementById("processes-queue-widgets");s&&(f.length===0?!s.querySelector(".tab-placeholder")&&!s.querySelector('div[style*="font-style: italic"]')&&(s.innerHTML='<div style="width: 100%; text-align: center; padding: 20px; color: #666; font-style: italic; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.05);">Queue is empty</div>'):(s.innerHTML="",ze(s,f,!1)));let u=document.getElementById("processes-history-widgets");u&&(b.length===0?u.querySelector(".tab-placeholder")||(u.innerHTML=B("empty","No recent history.")):(u.querySelector(".tab-placeholder")&&(u.innerHTML=""),ze(u,b,!0))),ve(1,x.length)}function ze(t,e,o){function a(m){let p="";m.end_time?p=`${m.end_time-m.start_time}s`:p=`${Math.floor(Date.now()/1e3-m.start_time)}s`;let g=m.retries>0?`<span class="process-retry-badge">Retry ${m.retries}</span>`:"",x=m.channel_id,f={"system-guardian":"Guardian Agent","system-cli-op":"CLI Operation"};if(f[x]?x=f[x]:/^\d+$/.test(x)&&(x=`Channel ${x}`),o)return`
        <div class="process-history-item" data-channel-id="${m.channel_id}-${m.start_time}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-family: 'JetBrains Mono', monospace; font-size: 0.85em;">
            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                <i class='bx bx-check-circle' style="color: #03dac6; font-size: 1.1em;"></i>
                <span style="color: #fff; font-weight: 600;">${x}</span>
                <span style="color: #666; font-size: 0.9em; background: rgba(0,0,0,0.2); padding: 1px 6px; border-radius: 4px;">${m.state}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 20px; color: #888;">
                <span>PID: ${m.pid}</span>
                <span style="color: #03dac6; min-width: 40px; text-align: right;">${p}</span>
            </div>
        </div>`;let b="#fff";return`
                <div class="service-widget process-widget" data-channel-id="${m.channel_id}-${m.start_time}" style="">
                    <div class="service-widget-header">
                        <i class="bx bx-cog" style="color: ${b}"></i>
                        <h3 style="color: ${b}">${x}</h3>
                        ${g}
                    </div>
                    <div class="service-widget-body">
                        <div class="service-widget-info">
                            <span class="info-label">State:</span>
                            <span class="info-value" style="color: ${b}">${m.state}</span>
                        </div>
                        <div class="service-widget-info">
                            <span class="info-label">Duration:</span>
                            <span class="info-value" style="color: ${b}">${p}</span>
                        </div>
                         <div class="service-widget-info">
                            <span class="info-label">PID:</span>
                            <span class="info-value" style="color: ${b}">${m.pid}</span>
                        </div>
                    </div>
                </div>`}let n=o?".process-history-item":".process-widget",i=new Map(Array.from(t.querySelectorAll(n)).map(m=>[m.dataset.channelId,m])),l=new Set(e.map(m=>`${m.channel_id}-${m.start_time}`));for(let[m,p]of i)l.has(m)||p.remove();e.forEach(m=>{let p=`${m.channel_id}-${m.start_time}`,g=a(m),x=i.get(p);if(x){x.outerHTML!==g&&(x.outerHTML=g);let f=t.querySelector(`[data-channel-id="${p}"]`);f&&t.appendChild(f)}else t.insertAdjacentHTML("beforeend",g)})}function Ae(){let t=be(),e=Xe()||"master@easter.company",o={enabled:Notification.permission==="granted",supported:"Notification"in window},a=localStorage.getItem("easter_analytics_enabled")!=="false";return`
            <div class="theme-selector">
                ${Object.values(K).map(n=>`
                    <div class="theme-card ${t===n?"active":""}" data-theme="${n}">
                        <div class="theme-preview theme-preview-${n.toLowerCase()}"></div>
                        <div class="theme-info">
                            <h3>${n.charAt(0).toUpperCase()+n.slice(1)}</h3>
                            <p>${n===K.DARK?"Simple, clean, dark.":n===K.LIGHT?"Heavenly, bright, and glowy.":"The original animated style."}</p>
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
                    <div class="settings-item">
                        <div class="settings-item-info">
                            <span class="settings-item-label">Analytics</span>
                            <span class="settings-item-description">Help improve the platform (enables debug mode)</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="analytics-toggle" ${a?"checked":""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>`}function Oe(t){let e=document.querySelector("#settings-window .window-content");if(!e)return;e.querySelectorAll(".theme-card").forEach(n=>{n.addEventListener("click",function(){let i=this.dataset.theme;et(i),t.setContent(Ae()),Oe(t)})});let o=document.getElementById("notifications-toggle");o&&(o.onclick=async n=>{if(n.target.checked)try{await Notification.requestPermission()!=="granted"&&(n.target.checked=!1)}catch{n.target.checked=!1}else Notification.permission==="granted"&&(alert("To disable notifications, please use your browser settings."),n.target.checked=!0)});let a=document.getElementById("analytics-toggle");a&&(a.checked=localStorage.getItem("easter_analytics_enabled")!=="false",a.onclick=n=>{let i=n.target.checked;localStorage.setItem("easter_analytics_enabled",i),window.EASTER_ANALYTICS_ENABLED=i,window.EASTER_DEBUG_MODE=i})}var is="2.8.143",Bt=[{id:"chat",title:"Chat",icon:"bx-message-rounded-dots",description:"Direct natural language interaction with Dexter's cognitive core.",usage:"dex chat",category:"cognitive",dummy:!0,docs:{overview:"The Cognitive Chat interface (Alpha) allows direct interaction with Dexter's strategic layer using natural language.",details:["Context-aware reasoning based on system-wide events.","Multi-modal input support (text, voice, images).","Deep integration with the Roadmap and Blueprint systems.","Real-time access to logs and service status."],extended_usage:"dex chat [--voice] [--vision]"},demo_output:["\x1B[35m[DEXTER]\x1B[0m Initializing neural uplink...","\x1B[32m\u2713\x1B[0m Context window loaded (128k tokens)","\x1B[34m[SYSTEM]\x1B[0m Attaching to live event stream...","",`Owen: "Dexter, what's the status of the new event service build?"`,'Dexter: "The build completed 5 minutes ago (v2.8.198). All 42 tests passed.',"        I've noticed a slight increase in latency on the Redis cache,",'        should I run a diagnostic?"']},{id:"guardian",title:"Guardian",icon:"bx-shield-quarter",description:"Run the Guardian Technical Sentry system (Tier 1 & Tier 2).",usage:"dex guardian [tier]",category:"cognitive",docs:{overview:"Guardian is the cognitive sentry of the ecosystem. It operates in two specialized tiers to maintain system health and architectural integrity.",details:["Tier 1 (Technical Sentry): High-fidelity anomaly detection across logs, events, and metrics.","Tier 2 (Architect): Synthesizes Tier 1 findings into actionable structural Blueprints.","Automated Trigger: Activates after 5 minutes of system idle time.","CLI Proxy: Heavy lifting is proxied to the event service to preserve local resources.","Outcome Tracking: Records scientific buckets for Active, Idle, and Waste time."],extended_usage:`dex guardian [0|1|2] [--force]
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
dex config reset`},demo_output:["{",'  "id": "event-service",','  "short_name": "event",','  "type": "be",','  "port": 8100,','  "domain": "127.0.0.1",','  "log_path": "~/Dexter/logs/event-service.log"',"}"]}],as=()=>{let t={cognitive:{title:"Cognitive Core",icon:"bx-brain",color:"#bb86fc"},lifecycle:{title:"Development Lifecycle",icon:"bx-git-branch",color:"#03dac6"},system:{title:"System Management",icon:"bx-cog",color:"#aaa"}},e=`
        <div class="cli-dashboard">
            <div class="cli-hero" style="text-align: center; padding: 40px 20px; margin-bottom: 20px;">
                <h1 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">DEX CLI</h1>
                <p style="color: #888; max-width: 600px; margin: 0 auto;">The unified command-line interface for the Dexter ecosystem. Manage, monitor, and evolve your AI infrastructure.</p>
            </div>

            <div class="cli-install-section">
                <div class="cli-install-header">
                    <i class='bx bxs-download'></i>
                    <h2>One-Step Installation</h2>
                </div>
                <div class="cli-install-command" id="install-command-copy">
                    <code>curl -sSL https://easter.company/scripts/install_dex-cli.sh | bash</code>
                    <i class='bx bx-copy'></i>
                </div>
                <p class="cli-install-note">Installs the latest pre-built binary for Arch/Debian Linux.</p>
            </div>

            <div class="cli-divider">
                <i class='bx bx-chevron-down'></i>
                <span>Interactive Demos (v${is})</span>
                <i class='bx bx-chevron-down'></i>
            </div>
    `;for(let[o,a]of Object.entries(t)){let n=Bt.filter(i=>i.category===o);n.length!==0&&(e+=`
            <div class="cli-category-section">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding: 0 20px;">
                    <i class='bx ${a.icon}' style="color: ${a.color}; font-size: 1.5em;"></i>
                    <h2 style="font-size: 1.2em; text-transform: uppercase; letter-spacing: 2px; color: #eee; margin: 0;">${a.title}</h2>
                </div>
                <div class="cli-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 0 20px;">
                    ${n.map(i=>`
                        <div class="cli-command-card ${i.dummy?"dummy":""}" data-cmd="${i.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px; transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden;">
                            <div class="card-glow" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 0%, ${a.color}11, transparent 70%); pointer-events: none;"></div>
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; position: relative; z-index: 1;">
                                <i class='bx ${i.icon}' style="font-size: 2em; color: ${a.color};"></i>
                                <h3 style="font-size: 1.3em; color: #fff; margin: 0;">${i.title}</h3>
                            </div>
                            <p style="font-size: 0.9em; color: #aaa; margin-bottom: 20px; line-height: 1.5; text-align: left; position: relative; z-index: 1;">${i.description}</p>
                            <div class="usage-block" style="background: rgba(0,0,0,0.3); overflow: hidden; padding: 10px 15px; border-radius: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.8em; color: ${a.color}; position: relative; z-index: 1;">
                                <span style="opacity: 0.5;">$</span> ${i.usage}
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
                <h3>For Developers</h3>
                <p>Dexter is open-source and built for the community. Help us refine the neural architecture or add new command modules.</p>
                <a href="/dexter/contribute" target="_blank" class="notif-action-btn active">Contribute on GitHub</a>
            </div>
            <div class="cli-contribute-card">
                <i class='bx bxl-discord-alt'></i>
                <h3>For Users</h3>
                <p>Join our Discord to stay updated, suggest new features, and interact with the community using the Dexter engine.</p>
                <a href="https://discord.gg/eastercompany" target="_blank" class="notif-action-btn active">Join Discord</a>
            </div>
        </div>
    </div>`,e},Ue=!1;function os(t){let e=document.getElementById("cli-terminal-overlay");e||(e=document.createElement("div"),e.id="cli-terminal-overlay",e.className="cli-execution-overlay",e.innerHTML=`
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
        `,document.body.appendChild(e),document.getElementById("close-terminal-btn").onclick=()=>_t(),document.getElementById("terminal-action-btn").onclick=()=>_t());let o=document.getElementById("cli-terminal-body"),a=document.getElementById("cli-docs-pane");o.innerHTML="";let n=t.docs||{overview:t.description,details:[],extended_usage:t.usage};return a.innerHTML=`
        <div class="cli-docs-section">
            <h4>Command Overview</h4>
            <h2>${t.title}</h2>
            <p>${n.overview}</p>
        </div>
        ${n.details.length>0?`
            <div class="cli-docs-section">
                <h4>Core Features</h4>
                <ul class="cli-docs-list">
                    ${n.details.map(i=>`<li>${i}</li>`).join("")}
                </ul>
            </div>
        `:""}
        <div class="cli-docs-section">
            <h4>Detailed Usage</h4>
            <pre class="cli-docs-usage">${n.extended_usage}</pre>
        </div>
    `,document.getElementById("terminal-cmd-name").textContent=`dex ${t.id}`,document.getElementById("terminal-status-badge").className="terminal-status status-running",document.getElementById("terminal-status-badge").textContent="Running",document.getElementById("terminal-action-btn").style.display="none",e.classList.add("active"),Ue=!0,o}function _t(){let t=document.getElementById("cli-terminal-overlay");t&&t.classList.remove("active"),Ue=!1}function Mt(t,e,o="output"){if(!Ue)return;let a=document.createElement("div");a.className=`terminal-line terminal-${o}`,o==="prompt"?a.innerHTML=`<span class="terminal-prompt">$</span> ${e}`:a.innerHTML=Ce(e),t.appendChild(a),t.scrollTop=t.scrollHeight}async function rs(t){let e=Bt.find(n=>n.id===t);if(!e)return;let o=os(e);Mt(o,`dex ${t}`,"prompt");let a=e.demo_output||["Executing command...","\u2713 Done."];for(let n of a){await new Promise(l=>setTimeout(l,400+Math.random()*600));let i="output";n.includes("[ERROR]")?i="error":n.includes("[SUCCESS]")||n.includes("\u2713")?i="success":n.includes("!")&&(i="warning"),Mt(o,n,i)}document.getElementById("terminal-status-badge").className="terminal-status status-success",document.getElementById("terminal-status-badge").textContent="Completed (Demo)",document.getElementById("terminal-action-btn").style.display="block"}function Dt(){let t=document.getElementById("cli-interface-container");if(!t)return;t.innerHTML=as();let e=document.getElementById("install-command-copy");e&&e.addEventListener("click",()=>{let o=e.querySelector("code").textContent;navigator.clipboard.writeText(o).then(()=>{let a=e.querySelector("i");a.className="bx bx-check",a.style.color="#5eff5e",setTimeout(()=>{a.className="bx bx-copy",a.style.color="#bb86fc"},2e3)})}),t.querySelectorAll(".cli-command-card").forEach(o=>{o.addEventListener("mouseenter",()=>{o.style.transform="translateY(-5px)",o.style.borderColor="rgba(255,255,255,0.15)",o.style.backgroundColor="rgba(255,255,255,0.05)"}),o.addEventListener("mouseleave",()=>{o.style.transform="translateY(0)",o.style.borderColor="rgba(255,255,255,0.05)",o.style.backgroundColor="rgba(255,255,255,0.03)"}),o.addEventListener("click",()=>{let a=o.dataset.cmd;rs(a)})})}async function ls(){if(window.location.hostname==="easter.company")try{if(!(await fetch(`${Be()}/system/status`,{method:"HEAD"})).ok)throw new Error("Service unhealthy")}catch{console.error("Production event service unreachable.")}}function Ht(){ls(),tt(),Ge();let t=window.location.pathname;(t.includes("/dexter/cli")||t==="/cli"||t==="/cli/")&&Dt();let e=Ye();We(e),Ve();let o=document.getElementById("nav-left-container");o&&o.addEventListener("click",()=>{if(i.length>0)f();else{let r=window.location.pathname;if(!(r==="/"||r==="/index.html")){let C=(r.endsWith("/")&&r.length>1?r.slice(0,-1):r).split("/");C.pop();let T=C.join("/")||"/";window.location.href=T}}});let a=window.location.pathname==="/"||window.location.pathname==="/index.html",n=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");!a&&!n&&document.querySelector("footer")?.classList.add("hide");let i=[],l=document.getElementById("windows-container");l&&l.setAttribute("data-count","0");let m=r=>{localStorage.setItem("dex_last_window",r)};function p(){return 1}function g(){for(;i.length>1;)i.shift().close(!0);let r=document.getElementById("windows-container"),d=document.querySelector("nav"),y=document.querySelector("footer"),C=window.location.pathname==="/"||window.location.pathname==="/index.html",T=window.location.pathname.includes("404")||!!document.getElementById("error-main-view");r&&r.setAttribute("data-count",i.length),i.forEach(N=>{let R=document.getElementById(N.id);R&&R.classList.remove("hide-close")}),we(be());let S=document.getElementById("dexter-menu-container"),A=document.getElementById("nav-window-switcher"),E=document.getElementById("settings-icon");if(Je(i.length>0),i.length>0){if(y?.classList.add("hide"),document.getElementById("close-all-windows")?.style.setProperty("display","block"),document.querySelector("main")?.style.setProperty("opacity","0.3","important"),d?.classList.add("window-open"),r&&(r.style.paddingTop="60px"),S&&(S.style.display="none"),E&&(E.style.display="none"),A){let N=i[0].id;["alerts-window","events-window","monitor-window","contacts-window","workspace-window"].includes(N)?(A.innerHTML=`
                      <div class="nav-switch-btn ${N==="alerts-window"?"active":""}" id="switch-alerts"><i class='bx bx-bell'></i> Alerts</div>
                      <div class="nav-switch-btn ${N==="events-window"?"active":""}" id="switch-events"><i class='bx bx-calendar-event'></i> Events</div>
                      <div class="nav-switch-btn ${N==="monitor-window"?"active":""}" id="switch-monitor"><i class='bx bx-pulse'></i> Monitor</div>
                      <div class="nav-switch-btn ${N==="contacts-window"?"active":""}" id="switch-contacts"><i class='bx bx-book-content'></i> Contacts</div>
                      <div class="nav-switch-btn ${N==="workspace-window"?"active":""}" id="switch-workspace"><i class='bx bx-brain'></i> Workspace</div>
                  `,document.getElementById("switch-alerts").addEventListener("click",()=>{m("alerts-window"),x(b)}),document.getElementById("switch-events").addEventListener("click",()=>{m("events-window"),x(s)}),document.getElementById("switch-monitor").addEventListener("click",()=>{m("monitor-window"),x(I)}),document.getElementById("switch-contacts").addEventListener("click",()=>{m("contacts-window"),x(u)}),document.getElementById("switch-workspace").addEventListener("click",()=>{m("workspace-window"),x(h)})):A.innerHTML=""}}else d?.classList.remove("window-open"),document.getElementById("close-all-windows")?.style.setProperty("display","none"),r&&(r.style.paddingTop="100px"),document.querySelector("main")?.style.setProperty("opacity","1","important"),C||T?y?.classList.remove("hide"):y?.classList.add("hide"),S&&(S.style.display="flex"),E&&(E.style.display="block"),A&&(A.innerHTML="");me()}function x(r){if(r.isOpen()){r.close();return}for(;i.length>0;)i.pop().close(!0);i.push(r),r.open(),g()}function f(){[...i].forEach(d=>d.close()),i=[]}window.addEventListener("resize",g);let b=ee({id:"alerts-window",title:"Alerts",icon:"bx-bell",content:ot(),onOpen:()=>se(),onClose:()=>{let r=i.indexOf(b);r>-1&&i.splice(r,1),g()}}),s=ee({id:"events-window",title:"Events",icon:"bx-calendar-event",content:Ne(),onOpen:()=>{s.setContent(Ne()),le()},onClose:()=>{let r=i.indexOf(s);r>-1&&i.splice(r,1),g()}}),u=ee({id:"contacts-window",title:"Contacts",icon:"bx-book-content",content:vt(),onOpen:()=>He(),onClose:()=>{let r=i.indexOf(u);r>-1&&i.splice(r,1),g()}}),I=ee({id:"monitor-window",icon:"bx-pulse",tabs:[{icon:"bxs-server",title:"Services",content:Ct()},{icon:"bxs-component",title:"Processes",content:St()},{icon:"bxs-brain",title:"Models",content:kt()},{icon:"bxs-hdd",title:"Hardware",content:Tt()},{icon:"bxs-terminal",title:"Logs",content:Lt()},{icon:"bxs-zap",title:"Agents",content:$t()}],onOpen:()=>{Pe(),Ie(),Re(),ye()},onClose:()=>{let r=i.indexOf(I);r>-1&&i.splice(r,1),g()}}),h=ee({id:"workspace-window",title:"Workspace",icon:"bx-brain",content:bt(),onOpen:()=>De(),onClose:()=>{let r=i.indexOf(h);r>-1&&i.splice(r,1),g()}}),c=ee({id:"settings-window",title:"Settings",icon:"bx-cog",content:Ae(),onOpen:()=>{c.setContent(Ae()),Oe(c)},onClose:()=>{let r=i.indexOf(c);r>-1&&i.splice(r,1),g()}}),v=ee({id:"login-window",title:"Welcome",content:'<div class="login-split-container"><div class="login-top-section"><div class="login-form"><p>Enter your email to continue</p><form id="login-form"><input type="email" id="email-input" placeholder="you@easter.company" required autocomplete="email" /><button type="submit">Continue</button><div id="login-error" class="error" style="display: none;"></div></form></div></div><div class="login-bottom-section"><div class="login-disclaimer"><h2>Early Access</h2><p>Contribute on <a href="/dexter/contribute" target="_blank" rel="noopener noreferrer">GitHub</a> to unlock early access.</p></div></div></div>',icon:"bx-log-in"});if(window.dexter={viewEvent:r=>{s.isOpen()||x(s),setTimeout(()=>{let d=document.querySelector(`.event-item[data-event-id="${r}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)},viewAlert:r=>{b.isOpen()||x(b),setTimeout(()=>{let d=document.querySelector(`.event-item[data-alert-id="${r}"]`);d&&(d.scrollIntoView({behavior:"smooth",block:"center"}),d.classList.add("flash-highlight"),d.classList.contains("expanded")||d.click(),setTimeout(()=>d.classList.remove("flash-highlight"),2e3))},500)}},e){let r=document.getElementById("dexter-dropdown");r&&(r.innerHTML=`
            <div class="dropdown-item" id="alerts-menu-item"><i class='bx bx-bell'></i> Alerts</div>
            <div class="dropdown-item" id="events-menu-item"><i class='bx bx-calendar-event'></i> Events</div>
            <div class="dropdown-item" id="monitor-menu-item"><i class='bx bx-pulse'></i> Monitor</div>
            <div class="dropdown-item" id="contacts-menu-item"><i class='bx bx-book-content'></i> Contacts</div>
            <div class="dropdown-item" id="workspace-menu-item"><i class='bx bx-brain'></i> Workspace</div>
        `);let d=document.getElementById("dexter-menu-container"),y=document.getElementById("dexter-menu-btn");d&&r&&y&&(d.addEventListener("mouseenter",()=>{r.classList.add("active"),y.classList.add("active")}),d.addEventListener("mouseleave",()=>{r.classList.remove("active"),y.classList.remove("active")}),y.addEventListener("click",C=>{C.stopPropagation();let T=localStorage.getItem("dex_last_window")||"alerts-window",S=null;T==="alerts-window"?S=b:T==="events-window"?S=s:T==="monitor-window"?S=I:T==="contacts-window"?S=u:T==="workspace-window"&&(S=h),S&&x(S)})),document.getElementById("alerts-menu-item")?.addEventListener("click",()=>{m("alerts-window"),x(b)}),document.getElementById("events-menu-item")?.addEventListener("click",()=>{m("events-window"),x(s)}),document.getElementById("monitor-menu-item")?.addEventListener("click",()=>{m("monitor-window"),x(I)}),document.getElementById("contacts-menu-item")?.addEventListener("click",()=>{m("contacts-window"),x(u)}),document.getElementById("workspace-menu-item")?.addEventListener("click",()=>{m("workspace-window"),x(h)}),document.getElementById("settings-icon")?.addEventListener("click",()=>x(c)),document.getElementById("close-all-windows")?.addEventListener("click",()=>f()),setInterval(()=>{b.isOpen()?se():rt(),h.isOpen()?De():ft(),s.isOpen()&&le(),I.isOpen()&&It()},5e3)}else document.getElementById("login-btn")?.addEventListener("click",()=>{v.open(),setTimeout(()=>{document.getElementById("login-form")?.addEventListener("submit",r=>{r.preventDefault();try{Qe(document.getElementById("email-input").value),window.location.reload()}catch(d){let y=document.getElementById("login-error");y&&(y.textContent=d.message,y.style.display="block")}})},100)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ht):Ht();})();
