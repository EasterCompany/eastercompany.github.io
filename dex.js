(()=>{function o(){console.log("Applying base styles...");let e=document.createElement("style");e.textContent=`
        /* Easter Company Standard Styles */
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 2rem;
            background-color: #f4f4f4; /* A light fallback background */
        }

        h1, h2, h3, h4, h5, h6 {
            color: #1a1a1a;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }

        p {
            margin-bottom: 1em;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        /* Add more generic tag styles here */
    `,document.head.appendChild(e),document.body.style.backgroundColor="#1a1d21",document.body.style.color="#c5c5c5"}function t(){console.log("Welcome to Easter Company."),o()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t();})();
//# sourceMappingURL=dex.js.map
