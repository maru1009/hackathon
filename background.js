// Function to send URL to server
function sendUrlToServer(url) {
    // Make a POST request to the server API endpoint
    fetch('http://localhost:3000/api/submit-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('URL sent successfully');
    })
    .catch(error => {
        console.error('Error sending URL to server:', error.message);
    });
}

// Example: Send a URL to the server when the extension starts
sendUrlToServer('https://example.com');
