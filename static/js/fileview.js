class FileUploadManager {
  constructor() {
    this.uploadedFiles = this.loadUploadedFiles();
    this.fileInput = document.getElementById('file-input');
    this.fileGrid = document.getElementById('file-grid');
    this.fileViewContainer = document.getElementById('file-view-container');
    this.fileText = document.getElementById('file-text');
    this.backButton = document.getElementById('back-button');

    this.fileInput.addEventListener('change', this.handleFileUpload.bind(this));
    this.backButton.addEventListener('click', this.hideFileView.bind(this));

    this.setupDragAndDrop();
    this.reUploadFiles();
  }

  loadUploadedFiles() {
    const storedFiles = localStorage.getItem('dexter.uploadedFiles');
    return storedFiles ? JSON.parse(storedFiles) : {};
  }

  saveUploadedFiles() {
    localStorage.setItem('dexter.uploadedFiles', JSON.stringify(this.uploadedFiles));
  }

  async generateContentHash(file) {
    const text = await file.text();
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash.toString();
  }

  async isDuplicate(file) {
    const contentHash = await this.generateContentHash(file);
    return Object.values(this.uploadedFiles).some(
      (uploadedFile) =>
        uploadedFile.name === file.name && uploadedFile.contentHash === contentHash
    );
  }

  async handleFileUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    for (const file of files) {
      if (await this.isDuplicate(file)) {
        alert(`Duplicate file "${file.name}" detected. Upload skipped.`);
        continue;
      }

      const contentHash = await this.generateContentHash(file);
      const fileContent = await file.text();

      this.uploadedFiles[contentHash] = {
        name: file.name,
        contentHash: contentHash,
        content: fileContent,
      };

      this.saveUploadedFiles();
      this.displayFileInfo(file);
    }
    this.fileInput.value = '';
  }

  displayFileInfo(file) {
    const fileBox = document.createElement('div');
    fileBox.classList.add('file-box');

    const iconElement = document.createElement('div');
    iconElement.classList.add('file-icon');
    iconElement.textContent = this.getFileIcon(file.name);

    const nameElement = document.createElement('div');
    nameElement.textContent = `Name: ${file.name}`;

    const sizeElement = document.createElement('div');
    sizeElement.textContent = `Size: ${this.formatFileSize(file.size)}`;

    const typeElement = document.createElement('div');
    typeElement.textContent = `Type: ${file.type || 'Unknown'}`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('file-button-container');

    const viewButton = document.createElement('button');
    viewButton.textContent = 'View';
    viewButton.classList.add('file-button');
    viewButton.addEventListener('click', () => this.viewFileContent(file));

    const downloadButton = document.createElement('a');
    downloadButton.textContent = 'Download';
    downloadButton.classList.add('file-button');
    downloadButton.href = URL.createObjectURL(file);
    downloadButton.download = file.name;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('file-button', 'remove-button');
    removeButton.addEventListener('click', () => this.removeFileBox(file, fileBox)); // Pass file and fileBox

    buttonContainer.appendChild(viewButton);
    buttonContainer.appendChild(downloadButton);
    buttonContainer.appendChild(removeButton);

    fileBox.appendChild(iconElement);
    fileBox.appendChild(nameElement);
    fileBox.appendChild(sizeElement);
    fileBox.appendChild(typeElement);
    fileBox.appendChild(buttonContainer);

    this.fileGrid.appendChild(fileBox);
  }

  viewFileContent(file) {
    const contentHashPromise = this.generateContentHash(file);
    contentHashPromise.then(hash => {
      const fileData = this.uploadedFiles[hash];
      if (fileData) {
        this.fileText.textContent = fileData.content;
        this.fileViewContainer.style.display = 'block';
      }
    });
  }

  hideFileView() {
    this.fileViewContainer.style.display = 'none';
  }

  async removeFileBox(file, fileBox) {
    if (confirm('Are you sure you want to remove this file?')) {
      const contentHash = await this.generateContentHash(file);
      delete this.uploadedFiles[contentHash]; // Remove from memory
      this.saveUploadedFiles(); // Update local storage
      this.fileGrid.removeChild(fileBox); // Remove from UI
    }
  }

  getFileIcon(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'txt': return '📄';
      case 'csv': return '📊';
      case 'md': return '📝';
      case 'js': return '⚙️';
      case 'ts': return '⚙️';
      case 'go': return '💻';
      case 'css': return '🎨';
      case 'html': return '🌐';
      case 'py': return '🐍';
      case 'java': return '☕';
      case 'c': return '💻';
      case 'cpp': return '💻';
      case 'json': return '📦';
      case 'xml': return '🏷️';
      default: return '📄';
    }
  }

  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  reUploadFiles() {
    Object.values(this.uploadedFiles).forEach((fileMetadata) => {
      const dummyFile = new File([fileMetadata.content], fileMetadata.name, {
        type: 'text/plain',
      });
      this.displayFileInfo(dummyFile);
    });
  }

  setupDragAndDrop() {
    window.addEventListener('dragover', (event) => {
      event.preventDefault(); // Prevent default browser behavior
    });

    window.addEventListener('drop', (event) => {
      event.preventDefault(); // Prevent default browser behavior
      const files = event.dataTransfer.files;
      if (files && files.length > 0) {
        this.handleDroppedFiles(files);
      }
    });
  }

  async handleDroppedFiles(files) {
    for (const file of files) {
      if (await this.isDuplicate(file)) {
        alert(`Duplicate file "${file.name}" detected. Upload skipped.`);
        continue;
      }

      const contentHash = await this.generateContentHash(file);
      const fileContent = await file.text();

      this.uploadedFiles[contentHash] = {
        name: file.name,
        contentHash: contentHash,
        content: fileContent,
      };

      this.saveUploadedFiles();
      this.displayFileInfo(file);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FileUploadManager();
});
