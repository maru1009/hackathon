importScripts('api.js');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'showPopup') {
      // Open the extension's popup
      chrome.action.openPopup();
    }
  });
  
  // Other parts of your background script...
  