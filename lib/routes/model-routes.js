'use strict';
const express = require('express');
const router = express.Router();
// const modelRouterHandler = require('../middleware/model-finder.js');

const modelFinder = require('../middleware/model-finder.js');
// const { Category, Products } = require('../models/model.js');

// const serverRouter = require('../server.js');

router.param('model', modelFinder);

router.post('/:model', async (req, res, next) => {
  let result = await req.modelMiddle.create(req.body);
  res.status(200);
  res.send(result);
});
router.get('/:model', async (req, res, next) => {
  let result = await req.modelMiddle.readByQuery({});
  res.status(200);
  res.send(result);
});
router.get('/:model/:id', async (req, res, next) => {
  let result = await req.modelMiddle.read(req.params.id);
  res.status(404);
  res.send(result);
});
router.put('/:model/:id', async (req, res, next) => {
  let result = await req.modelMiddle.update(req.params.id, req.body);
  res.status(200);
  res.send(result);
});
router.delete('/:model/:id', async (req, res, next) => {
  let result = await req.modelMiddle.delete(req.params.id);
  res.status(200);
  res.send(result);
});

module.exports = router;
