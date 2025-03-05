// dexnet.js
const wss_uri = window.location.hostname === "127.0.0.1" ? "ws://127.0.0.1:9501" : "wss://api.easter.company/dexnet";
let socket = new WebSocket(wss_uri);

async function sendDexnetUserProcessRequest() {
  socket.send(JSON.stringify(session));
  console.log("Sent session data to network:", session);
  while (session.history[session.history.length - 1].role === "user") {
    await sleep(1000);
    socket.send(JSON.stringify({ clientType: 'user', deviceId: session.deviceId }));
  }
}

socket.onopen = function (event) {
  console.log(`Connected to Easter Company distributed AI compute network with unique id: ${session.deviceId}`);
  setInterval(() => {
    socket.send(JSON.stringify({ keepAlive: true }));
  }, 1000);
};

socket.onmessage = function (event) {
  console.log("Received message:", event.data);
  try {
    const data = JSON.parse(event.data);
    if (data && data.history && data.history.length > 0 && data.history[data.history.length - 1].role === "assistant") {
      session.history = data.history;
      if (session.history.length > 6) {
        session.history = session.history.slice(-6);
      }
      localStorage.setItem('dexter.localSession', JSON.stringify(session));
    }
  } catch (error) {
    console.error("Error parsing message:", error);
  }
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(`Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    console.error("Connection died");
  }
  setTimeout(function () {
    socket = new WebSocket(wss_uri);
    socket.onopen = socket.onopen;
    socket.onmessage = socket.onmessage;
    socket.onclose = socket.onclose;
    socket.onerror = socket.onerror;
  }, 5000);
};

socket.onerror = function (error) {
  console.error("Dexnet connection error:", error);
};

function sendMessageToDexnet() {
  if (socket.readyState === WebSocket.OPEN) {
    sendDexnetUserProcessRequest();
  } else {
    console.error("Dexnet connection is not established, but was expected.");
  }
}
