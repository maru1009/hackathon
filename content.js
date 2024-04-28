import 'api.js';
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showPopup') {
      // Show the extension's popup
      chrome.action.openPopup();
    }
  });
  
  // Check the current URL and send it to the background script for checking
  const url = window.location.href;
  chrome.runtime.sendMessage({ action: 'checkUrl', url }, (response) => {
    if (response && response.positives > 0) {
      // Send message to background script to show popup
      chrome.runtime.sendMessage({ action: 'showPopup' });
    }
  });
  