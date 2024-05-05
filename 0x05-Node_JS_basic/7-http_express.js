const express = require('express');
const { countStudents } = require('./server_utility');

const app = express();
const dbName = process.argv[2] || 'database.csv';

// Routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  countStudents(dbName)
    .then((data) => {
      console.log(data);
      data.unshift('This is the list of our students');
      res.status(200).send(data.join('\n'));
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Internal Server Error');
    });
});

// Start the server
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
