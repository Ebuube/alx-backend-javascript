function failed(path, res) {
  res.writeHead(404);
  res.end(`No handler found for '${path}'`);
}

function route(path, res, handlerObj, payload) {
  console.log(`Routing request for '${path}'`);
  let routeFound = typeof handlerObj[path] == 'function' && handlerObj.hasOwnProperty(path);
  return routeFound ? handlerObj[path](res, payload): failed(path, res);
}

module.exports = route;
