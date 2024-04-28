// content.js
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            chrome.runtime.sendMessage({url: window.location.href});
        }
    });
});
