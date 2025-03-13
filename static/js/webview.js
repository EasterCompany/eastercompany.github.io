function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const webviewAPI = window.location.hostname === '127.0.0.1' ? 'http://127.0.0.1:9500/webview' : 'https://api.easter.company/webview';
const webview = {
  protocol: getUrlParameter('protocol'),
  hostname: getUrlParameter('hostname'),
  port: getUrlParameter('port'),
  path: getUrlParameter('path'),
}

webview.url = () => {
  let r = `${webview.protocol}://${webview.hostname}`;
  if (webview.port) r += `:${webview.port}`;
  if (webview.path) r += `/${webview.path}`;
  return r;
};
webview.url = webview.url();

const fetchWebViewContent = async () => {
  try {
    const response = await fetch(webviewAPI, {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(webview),
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error fetching webview content:', error);
    return null;
  }
};

const renderWebView = async () => {
  webview.content = await fetchWebViewContent();
  console.log('webview:', webview);
  if (webview.content) {
    const modifiedHTML = rewriteRelativePaths(webview.content);
    document.documentElement.innerHTML = modifiedHTML;
  }
};

function rewriteRelativePaths(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const elements = doc.querySelectorAll('[src], [href], [srcset], [content]');

  elements.forEach(element => {
    ['src', 'href', 'srcset', 'content'].forEach(attr => {
      if (element.hasAttribute(attr)) {
        let value = element.getAttribute(attr);
        if (value.startsWith('/')) {
          let baseUrl = `${webview.protocol}://${webview.hostname}`;
          if (webview.port) {
            baseUrl += `:${webview.port}`;
          }
          const absolutePath = baseUrl + value;
          element.setAttribute(attr, absolutePath);
        }
      }
    });
  });

  return doc.documentElement.innerHTML;
}

renderWebView();
