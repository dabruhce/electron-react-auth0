var electron = require('electron');
var shell = electron.shell;
var ipc = electron.ipcRenderer;

window.onload = () => {
  const $ = require('jquery')
  console.log($('body div').length)

}
