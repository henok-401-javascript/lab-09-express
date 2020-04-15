'use strict';
const express = require('express');
const router = express.Router();
// const modelRouterHandler = require('../middleware/model-finder.js');

const modelFinder = require('../middleware/model-finder.js');
// const { Category, Products } = require('../models/model.js');

// const serverRouter = require('../server.js');

router.param('model', modelFinder);

/**
 * It allow us to create products .
 * @route model /products
 * @group products
 * @returns {object} 200 - The created Object.
 * @returns {error} - if something wrong on creating products.
 */

router.post('/:model', async (req, res, next) => {
  let result = await req.modelMiddle.create(req.body);
  res.status(200);
  res.send(result);
});
/**
 * This page will give the created products.
 * @route model /products
 * @group products
 * @returns {object} 200 - return the created products in JSON format.
 */

router.get('/:model', async (req, res, next) => {
  let result = await req.modelMiddle.readByQuery({});
  res.status(200);
  res.send(result);
});

/**
 * This page will give the created products.
 * @route model /products/:id
 * @group products
 * @returns {object} 200 - return the category by id .
 */

router.get('/:model/:id', async (req, res, next) => {
  let result = await req.modelMiddle.read(req.params.id);
  res.status(404);
  res.send(result);
});
/**
 * This page will allow you to update products.
 * @route model /products/:id
 * @group products
 * @param {Number} id.params.require - the id of the Object or field you want to update.
 * @returns {object} 200 - The updated object.
 */

router.put('/:model/:id', async (req, res, next) => {
  let result = await req.modelMiddle.update(req.params.id, req.body);
  res.status(200);
  res.send(result);
});
/**
 * This page will allow you to delete products.
 * @route model /products/:id
 * @group products
 * @param {Number} id.params.require - the id of the object or field that you want to delete.
 * @returns {object} 200 - will be deleted the selected object.
 */

router.delete('/:model/:id', async (req, res, next) => {
  let result = await req.modelMiddle.delete(req.params.id);
  res.status(200);
  res.send(result);
});

module.exports = router;
