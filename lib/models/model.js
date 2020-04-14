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
    let results = await this.schema.findBy(_id);
    return results;
  }
  async readByQuery(query) {
    console.log('by queary dbs');
    try {
      let results = await this.schema.find(query);
      return results;
    } catch (e) {
      console.error('this is readbyquery function', e);
    }
  }
  update() {}
  delete() {}
}

module.exports = {
  category: new Model(categorySchema),
  products: new Model(productsSchema),
};
