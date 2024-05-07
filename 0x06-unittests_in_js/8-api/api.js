const express = require('express');

const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

const server = app.listen(port, () => {
  console.log(`API is listening on localhost port ${port}`);
});

module.exports = {
  app: app,
  server: server
};
