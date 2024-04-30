const app = require('http');

const port = process.env.PORT || 1245;

app.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Holberton School!');
  res.end();
}).listen(port, () => {
  /* Info to log on terminal */
});

module.exports = app;
