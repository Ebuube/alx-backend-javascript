const http = require('http');

const port = process.env.PORT || 1245;
const host = 'localhost';
const app = http.createServer();

// Listen to the request event
app.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  process.stdout.write(`Server is listening at http://${host}:${port}/\n`);
});

module.exports = app;
