const http = require('http');
const { URL } = require('url');
const countStudents = require('./utility');

const port = process.env.PORT || 1245;
const host = 'localhost';
const app = http.createServer();
const dbName = process.argv[2] || 'database.csv';

// Listen to the request event
app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  // Parse the request url
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  // Compare our request method
  if (req.method === 'GET' && reqUrl.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && reqUrl.pathname === '/students') {
    res.statusCode = 200;
    countStudents(dbName).then((payload) => {
      res.end(Buffer.from(payload));
    })
      .catch((err) => {
        res.statusCode = 500;
        res.end(JSON.stringify(err));
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
