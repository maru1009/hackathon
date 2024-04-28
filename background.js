// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.url) {
        console.log('User input URL:', request.url);
    }
});
