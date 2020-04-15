'use strict';
const express = require('express');
const morgan = require('morgan');
const swaggerDocument = require('../docs/swagger.js');
const modelRouter = require('./routes/model-routes.js');
// const modelMiddlewareHandler = require('./middleware/model-finder.js');

const cors = require('cors');
const app = express();
swaggerDocument(app);
app.use(express.json());
//MIDDLEWARE ROUTER .
app.use(cors());
app.use(morgan());
// app.use(modelMiddlewareHandler);

/**
 * This page will give you HOME PAGE text/html format.
 * @route GET /
 * @param {string} name.query - name query and will add welcome message.
 * @produces text/html
 * @returns {object} 200 - The text/html to show on the home page.
 */
app.get('', (req, res, next) => {
  res.send('HOME PAGE');
});
app.use((req, res, next) => {
  console.log('I AM FOR ALL ROUTES');
  next();
});
// MODEL ROUTE .
app.use('/api/v1', modelRouter);

const serverHandler = (port) => {
  app.listen(port, () => {
    console.log('server is up at', port);
  });
};

module.exports = {
  server: app,
  start: serverHandler,
};
