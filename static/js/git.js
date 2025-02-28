/*
 *  static/js/git.js
 *
 *  Handles git project specific functionality and API requests.
 *
 */

const downloadGitProjectCmds = {
  'bashful-sh': {
    'bashful': {
      'lts': `curl -fsSL https://bashful-sh.github.io/install.sh | sh`,
      'latest': `curl -fsSL https://bashful-sh.github.io/install-source.sh | sh`,
      'development': ``
    }
  },
  'eastercompany': {
    'overlord': {
      'lts': `curl -fsSL https://easter.company/install-overlord.sh | sh`,
      'latest': `curl -fsSL https://easter.company/install-overlord-source.sh | sh`,
      'development': ``
    }
  }
};

const selectGitCommand = (ownerName, repoName, branchName) => {
  const cmds = downloadGitProjectCmds[ownerName][repoName];
  const cmdCode = document.getElementById(`${repoName}-cmd-code`);
  const ltsBtn = document.getElementById(`${repoName}-lts-cmd-option`);
  const latestBtn = document.getElementById(`${repoName}-latest-cmd-option`);
  const devBtn = document.getElementById(`${repoName}-dev-cmd-option`);

  if (cmds[branchName] !== undefined) {
    cmdCode.innerText = cmds[branchName];
  } else {
    cmdCode.innerText = `sorry, something went wrong ):`;
  }

  if (branchName === "lts") {
    ltsBtn ? ltsBtn.classList.add("selected") : null;
    latestBtn ? latestBtn.classList.remove("selected") : null;
    devBtn ? devBtn.classList.remove("selected") : null;
  } else if (branchName === "latest") {
    ltsBtn ? ltsBtn.classList.remove("selected") : null;
    latestBtn ? latestBtn.classList.add("selected") : null;
    devBtn ? devBtn.classList.remove("selected") : null;
  } else if (branchName === "development") {
    ltsBtn ? ltsBtn.classList.remove("selected") : null;
    latestBtn ? latestBtn.classList.remove("selected") : null;
    devBtn ? devBtn.classList.add("selected") : null;
  }
}

selectGitCommand('bashful-sh', 'bashful', 'lts');
selectGitCommand('eastercompany', 'overlord', 'lts');

const fetchAndUpdateGithubAPIData = (ownerName, repoName) => {
  const _githubAPIUrl = `https://api.github.com/repos/${ownerName}/${repoName}`;
  const _setElement = (id, text) => document.getElementById(`${repoName}-${id}`).textContent = ` ${text}`;

  fetch(_githubAPIUrl)
    .then(response => response.json())
    .then(data => {
      console.log(
        `%c [git.js] ${ownerName}/${repoName} API Status: %c 200 `,
        `background: #ddd; color: #000; padding: 4px;`,
        `background: #6f6; color: #000; padding: 4px;`,
        data
      );
      _setElement("description", data.description || '--');
      _setElement("star-count", data.stargazers_count || '--');
      _setElement("watcher-count", data.subscribers_count || '--');
      _setElement("fork-count", data.forks_count || '--');
      _setElement("last-updated", data.updated_at ? new Date(data.updated_at).toLocaleString() : '--');
    })
    .catch(() => {
      console.log(
        `%c [git.js] ${ownerName}/${repoName} API Status: %c 500 `,
        `background: #ddd; color: #000; padding: 4px;`,
        `background: #f66; color: #000; padding: 4px;`
      );
      _setElement("star-count", "--");
      _setElement("watcher-count", "--");
      _setElement("fork-count", "--");
      _setElement("last-updated", "--");
    });
};

fetchAndUpdateGithubAPIData("bashful-sh", "bashful");
fetchAndUpdateGithubAPIData("eastercompany", "overlord");

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

const selectCopyButton = (name) => {
  const copyButton = document.querySelector(`#${name}-copy-cmd-button`);
  const codeSnippet = document.querySelector(`#${name}-cmd-code`);
  const textToCopy = codeSnippet.innerText;

  writeClipboardText(textToCopy).then(() => {
    copyButton.innerHTML = "<i class='bx bx-check' style='color:#6f6;font-size:13px;'></i><code style='margin:0;padding:0;font-size:10px;'>Copied!</code>"; // Success icon
    setTimeout(() => {
      copyButton.innerHTML = "<i class='bx bx-copy'></i>"; // Back to copy icon
    }, 2000); // Reset after 2 seconds
  })
    .catch(err => {
      console.error("Failed to copy: ", err);
      copyButton.innerHTML = "<i class='bx bx-x' style='color:#f66;font-size:13px;'></i>"; // Error icon
      setTimeout(() => {
        copyButton.innerHTML = "<i class='bx bx-copy' style='color:#666;'></i>"; // Back to copy icon
      }, 2000); // Reset after 2 seconds
    });
}

const openProjectWindow = (el) => el.parentElement.classList.add("selected-project");

const closeProjectWindow = (el) => el.parentElement.classList.remove("selected-project");

const toggleProjectWindow = (el) => {
  if (el.parentElement.classList.contains("selected-project")) {
    closeProjectWindow(el);
  } else {
    openProjectWindow(el);
  }
}
