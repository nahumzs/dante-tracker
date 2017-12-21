// background.js
const host = 'background.js';
chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(message) {
      console.log(`💁‍ ${host}:`, message);
    });
});
