// api.js

const apiKey = '871852d9b02678c7d04bc2144b35f06230660c5f9b5a9ce8287ae0f7c3b812ab';

function scanUrl(url) {
    const scanUrl = 'https://www.virustotal.com/api/v3/urls';
    const bodyData = new FormData();
    bodyData.append('url', url);

    return fetch(scanUrl, {
        method: 'POST',
        headers: {
            'x-apikey': apiKey
        },
        body: bodyData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to scan URL');
        }
        return response.json();
    })
    .then(data => {
        return data; // Return the scan results
    })
    .catch(error => {
        console.error('Error scanning URL:', error);
        return null;
    });
}
