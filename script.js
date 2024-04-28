document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('checkButton');
    var resultDiv = document.getElementById('result');

    checkButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var url = tabs[0].url;
            resultDiv.innerText = 'Checking...';

            fetch('https://www.virustotal.com/api/v3/urls', {
                method: 'POST',
                headers: {
                    'x-apikey': '871852d9b02678c7d04bc2144b35f06230660c5f9b5a9ce8287ae0f7c3b812ab                   ',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({url: url})
            })
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    resultDiv.innerText = 'URL is safe.';
                } else {
                    resultDiv.innerText = 'URL is suspicious!';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerText = 'Error checking URL.';
            });
        });
    });
});
