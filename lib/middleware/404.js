'use strict';
const wrongRouter = (req, res, next) => {
  res.status(404);
  res.end();
};

module.exports = wrongRouter;
