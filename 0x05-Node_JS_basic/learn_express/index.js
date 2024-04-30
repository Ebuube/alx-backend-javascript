// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
