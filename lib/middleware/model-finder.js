'use strict';
// const modelRouter = require("../routes/model-routes.js");

const { category, products } = require('../models/model.js');

const modelFinder = (req, res, next) => {
  switch (req.params.model) {
  case 'categories':
    console.log('category route is hit');
    req.modelMiddle = category;
    next();
    break;
  case 'products':
    console.log('products route is hit');
    req.modelMiddle = products;
    next();
    break;
  default:
    console.log('invalid model');
    res.status(404);
    res.end();
    break;
  }
};

module.exports = modelFinder;
