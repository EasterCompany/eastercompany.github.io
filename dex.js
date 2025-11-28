(()=>{function d(){console.log("Applying base styles dynamically (e.g., for background animation or theme toggles).")}function p(){let t=window.location.hostname;t.includes(":")&&(t=t.split(":")[0]);let e=t.split("."),r=["com","org","net","info","biz","co","io","company","xyz","app"];if(t==="localhost"||t.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/))return t;let l=t;for(let n=e.length-1;n>=0;n--){let i=e[n];if(r.includes(i))l=e.slice(0,n).join(".");else{let a=l.split(".");return a.length>1&&a[a.length-1]!=="www"?a[0]:a.length===1&&a[0]==="www"&&n>0&&!r.includes(e[n-1])?e[n-1]:a[a.length-1]}}let o=[],s=!1;for(let n=e.length-1;n>=0;n--){let i=e[n];r.includes(i)&&!s||(s=!0,o.unshift(i))}return o.length===0?t:o[0]==="www"&&o.length>1?o[1]:(o.length>1,o[0])}function u(){let t=`
        <div class="nav-left">
            <h1>${p()}</h1>
        </div>
        <div class="nav-right">
            <i id="message-icon" class='bx bxs-message-dots'></i>
            <i class='bx bx-microphone'></i>
            <i id="user-icon" class='bx bx-user'></i>
        </div>
    `,e=document.createElement("nav");e.innerHTML=t,document.body.prepend(e)}function m(){let t=`
        <div class="socials-section">
            <a href="https://facebook.com/eastercompany" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="bx bxl-facebook-square"></i></a>
            <a href="https://linkedin.com/company/72223947" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://instagram.com/eastercompany" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="bx bxl-instagram-alt"></i></a>
            <a href="https://x.com/eastercompany" aria-label="X" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://github.com/eastercompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://youtube.com/@eastercompany" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="bx bxl-youtube"></i></a>
        </div>
    `,e=document.createElement("footer");e.innerHTML=t,document.body.appendChild(e)}function c(t){let e=null;function r(){if(e){e.classList.add("open");return}let n=document.getElementById("windows-container");n||(n=document.createElement("div"),n.id="windows-container",n.className="windows-container",document.body.appendChild(n)),e=document.createElement("div"),e.id=t.id,e.className="window",e.innerHTML=`<div class="window-content">${t.content}</div>`,n.appendChild(e),setTimeout(()=>{e.classList.add("open")},10)}function l(){e&&(e.classList.remove("open"),setTimeout(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),e=null},400))}function o(n){e&&(e.innerHTML=n)}function s(){return e&&e.classList.contains("open")}return{open:r,close:l,setContent:o,isOpen:s,id:t.id}}function f(){console.log("Welcome to Easter Company."),d(),u(),m();let t=document.querySelector("footer"),e=null,r=c({id:"user-window",content:"<h1>User Profile</h1><p>This is the user profile window.</p>"}),l=c({id:"message-window",content:"<h1>Messages</h1><p>This is the message window.</p>"});function o(i){e&&e.id===i.id?(i.close(),e=null):(e&&e.close(),i.open(),e=i),e?t?.classList.add("hide"):t?.classList.remove("hide")}let s=document.getElementById("user-icon"),n=document.getElementById("message-icon");s&&s.addEventListener("click",()=>o(r)),n&&n.addEventListener("click",()=>o(l))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f();})();
//# sourceMappingURL=dex.js.map
