'use strict';

const categorySchema = require('./categories-schema.js');
const productsSchema = require('./products-schema.js');

class Model {
  constructor(schema) {
    this.schema = schema;
  }
  async create(data) {
    let results = await this.schema(data);
    return results;
  }
  async read(_id) {
    let results = await this.schema.findById(_id);
    return results;
  }
  async readByQuery(query) {
    let results = await this.schema.find(query);
    return results;
  }

  async update(_id, record) {
    let results = await this.schema.findByIdAndUpdate(_id, record);
    return results;
  }
  async delete(_id) {
    let results = await this.schema.findByIdAndDelete(_id);
    return results;
  }
}

module.exports = {
  category: new Model(categorySchema),
  products: new Model(productsSchema),
};
