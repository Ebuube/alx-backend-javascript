const startServer = require("./server");
const router = require("./router");
const { handlerObj } = require("./handlers");

startServer(router, handlerObj);
