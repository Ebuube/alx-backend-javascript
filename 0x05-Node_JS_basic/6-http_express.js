const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
