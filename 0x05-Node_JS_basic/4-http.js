const http = require('http');

const port = 1245;
const app = http.createServer();

// Listen to the request event
app.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  // process.stdout.write(`Server is listening at http://${host}:${port}/\n`);
});

module.exports = app;
