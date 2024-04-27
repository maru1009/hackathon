const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose a port for your server

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Sample endpoint to handle URL submission
app.post('/api/submit-url', (req, res) => {
    // Extract the URL data from the request body
    const { url } = req.body;

    // Log the received URL to the console
    console.log('Received URL:', url);

    // Here, you can perform additional operations with the received URL data
    // For example, you might save it to a database or perform some business logic

    // Send a response to the extension
    res.json({ message: 'URL received successfully', data: { url } });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
