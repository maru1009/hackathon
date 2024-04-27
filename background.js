chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        // Send URL to server
        sendUrlToServer(tab.url);
    }
});

function sendUrlToServer(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "localhost", true); // Replace example.com/endpoint with your server endpoint
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log("URL sent successfully");
            } else {
                console.error("Failed to send URL:", xhr.status);
            }
        }
    };
    xhr.send(JSON.stringify({ url: url }));
}
