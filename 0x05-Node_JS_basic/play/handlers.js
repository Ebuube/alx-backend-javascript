const fs = require("fs");

const handlerObj = {
  "/": home,
  "/message": message
};

function home(res) {
  console.log("Executing 'home' handler");
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}


function message(res, payload) {
  console.log("Executing 'message' handler");
  let query = new URLSearchParams(payload);
  let data = {
    name: query.get("name"),
    message: query.get("message")
  };

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(data));
  res.end();
}


module.exports = {
  handlerObj,
  home,
  message
}
