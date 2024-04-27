const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose a port for your server

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Endpoint to handle URL data sent from extension
app.post('/receive-url', (req, res) => {
    const { url } = req.body;
    console.log('Received URL:', url);
    // Here you can process the received URL data (e.g., save it to a database)
    res.sendStatus(200); // Send a response to the extension indicating success
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
