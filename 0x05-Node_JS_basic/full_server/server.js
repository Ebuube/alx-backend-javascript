const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 1245;
const app = express();

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});

module.exports = app;
