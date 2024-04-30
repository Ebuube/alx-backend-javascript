const http = require('http');
const url = require('url');
const countStudents = require('./utility');

const port = process.env.PORT || 1245;
const host = 'localhost';
const app = http.createServer();
const dbName = process.argv[2] || 'database.csv';

// Listen to the request event
app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  // Parse the request url
  const reqUrl = url.parse(req.url).pathname;
  // Compare our request method
  if (req.method === 'GET' && reqUrl === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && reqUrl === '/students') {
    res.statusCode = 200;
    countStudents(dbName).then((payload) => {
      res.end(Buffer.from(payload));
    })
      .catch((err) => {
        res.statusCode = 500;
        res.end(Buffer.from(JSON.stringify(err)));
      });
  } else {
    res.statusCode = 404;
    res.end('Invalid url');
  }
});

app.listen(port, host, () => {
  process.stdout.write(`Server is listening at http://${host}:${port}/\n`);
});

module.exports = app;
