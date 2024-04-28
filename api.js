const apiKey = '871852d9b02678c7d04bc2144b35f06230660c5f9b5a9ce8287ae0f7c3b812ab'; // Replace with your actual VirusTotal API key

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
        return data.data.links.self; // Return the self link
    })
    .catch(error => {
        console.error('Error scanning URL:', error);
        return null;
    });
}

// Example usage:
const urlToScan = '17ebook.co';
scanUrl(urlToScan)
    .then(selfLink => {
        if (selfLink) {
            return fetch(selfLink, {
                method: 'GET',
                headers: {
                    'x-apikey': apiKey
                }
            });
        }
    })
    .then(response => {
        if (response) {
            return response.json();
        }
    })
    .then(scanReport => {
        if (scanReport) {
            const isVirus = hasVirus(scanReport);
            console.log( isVirus);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    function hasVirus(scanReport) {
        const scanResults = scanReport.data.attributes.results;
        for (const engine in scanResults) {
            if (scanResults[engine].category === 'malicious') {
                return true; 
            }
        }
        return false; // No virus detected
    }
