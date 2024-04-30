const http = require('http');
const port = process.env.PORT || 8000;
const html = `<header><h1>Hello, Wordl!</h1></header>`;

function startServer(route, handlerObj) {
  function handleReq(req, res) {
    const path = req.url;
    let payload = "";

    req.on("data", (chunk) => {
      payload += chunk;
    });

    req.on("end", () => {
      route(path, res, handlerObj, payload);
    });
  }

  http.createServer(handleReq).listen(port, () => console.log(`App running on port ${port}`));
}


module.exports = startServer;
