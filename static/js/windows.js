// script.js
const windows = document.querySelectorAll('.window');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const resizeHandles = document.querySelectorAll('.resize-handle');
const chatInterface = document.getElementById('chat-interface');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const inputResizeHandle = document.getElementById('input-resize-handle');
const inputArea = document.getElementById('input-area');
const fullscreenButtons = document.querySelectorAll('.fullscreen-toggle');

let offsetX, offsetY, isDragging = false, isResizing = false, isInputResizing = false;
let initialWidth, initialHeight, initialMouseX, initialMouseY, initialInputHeight, defaultInputHeight;

// Function to show the loading spinner and hide content
function showLoadingSpinner(windowElement) {
  const loader = windowElement.querySelector('.tab-content-loader');
  loader.style.display = 'flex';
}

// Function to hide the loading spinner and show content
function hideLoadingSpinner(windowElement) {
  const loader = windowElement.querySelector('.tab-content-loader');
  const content = windowElement.querySelectorAll('.tab-content');
  hide(loader);
  content.forEach((el) => show(el));
}

// Dragging functionality
windows.forEach(windowElement => {
  const windowBar = windowElement.querySelector('.window-bar');
  windowBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - windowElement.offsetLeft;
    offsetY = e.clientY - windowElement.offsetTop;
  });
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging && !isResizing && !isInputResizing) return;

  windows.forEach(windowElement => {
    if (isDragging && windowElement.querySelector('.window-bar') === e.target) {
      windowElement.style.left = (e.clientX - offsetX) + 'px';
      windowElement.style.top = (e.clientY - offsetY) + 'px';
    } else if (isResizing) {
      const resizeHandle = windowElement.querySelector('.resize-handle');
      if (resizeHandle === e.target) {
        const newWidth = initialWidth + (e.clientX - initialMouseX);
        const newHeight = initialHeight + (e.clientY - initialMouseY);
        windowElement.style.width = newWidth + 'px';
        windowElement.style.height = newHeight + 'px';
      }
    }
  });

  if (isInputResizing) {
    const newHeight = initialInputHeight - (e.clientY - initialMouseY);
    if (newHeight >= defaultInputHeight) {
      inputArea.style.height = newHeight + 'px';
    } else {
      inputArea.style.height = defaultInputHeight + 'px';
    }
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  isResizing = false;
  isInputResizing = false;
});

// Tab switching functionality
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');
    const windowElement = tab.closest('.window');

    windowElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    windowElement.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    tab.classList.add('active');
    windowElement.querySelector('#' + tabId).classList.add('active');
  });
});

// Resizing functionality
resizeHandles.forEach(handle => {
  const windowElement = handle.closest('.window');
  handle.addEventListener('mousedown', (e) => {
    isResizing = true;
    initialWidth = windowElement.offsetWidth;
    initialHeight = windowElement.offsetHeight;
    initialMouseX = e.clientX;
    initialMouseY = e.clientY;
  });
});

/* Input Area Resizing
inputResizeHandle.addEventListener('mousedown', (e) => {
  isInputResizing = true;
  initialMouseY = e.clientY;
  initialInputHeight = inputArea.offsetHeight;
  if (!defaultInputHeight) {
    defaultInputHeight = inputArea.offsetHeight;
  }
});
*/

function addMessage(type, text) {
  const messageDiv = document.createElement('div');

  messageDiv.textContent = text;
  messageDiv.classList.add('message', `${type}-message`);
  chatInterface.appendChild(messageDiv);
  chatInterface.scrollTop = chatInterface.scrollHeight; // Scroll to bottom
}

// Fullscreen Toggle
fullscreenButtons.forEach(button => {
  button.addEventListener('click', () => {
    const windowId = button.getAttribute('data-window');
    const windowElement = document.getElementById(windowId);
    if (windowElement.classList.contains('fullscreen')) {
      windowElement.classList.remove('fullscreen');
      button.classList.remove('bx-exit-fullscreen');
      button.classList.add('bx-fullscreen');
    } else {
      windowElement.classList.add('fullscreen');
      button.classList.remove('bx-fullscreen');
      button.classList.add('bx-exit-fullscreen');
    }
  });
});
