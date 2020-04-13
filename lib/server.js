'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res, next) => {
  res.send('HOME PAGE');
});

const serverHandler = port => {
  app.listen(port, () => {
    console.log('server is up at', port);
  });
};

module.exports = {
  server: app,
  start: serverHandler,
};
