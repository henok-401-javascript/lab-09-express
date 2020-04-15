# lab-09-express

## Project Name : API Server

### Author: Henok Gebremedhn

### Links and Resources

- [submission PR](https://github.com/henok-401-javascript/lab-09-express/pull/4)

### DOCUMENTATION

[Swagger Hub](http://localhost:3000/api-docs#/)
[heroku](https://lab-09-express.herokuapp.com/)
[npm publish](https://www.npmjs.com/package/lab-09-express)

### Setup

#### `.env` requirements (where applicable)

- `PORT` - json-server --watch ./data/db

#### How to initialize/run your application (where applicable)

- mongod --dbpath ./data/db // to start my mongoDB locally
- EndPoint:'/1'
  return By Id of 1.
- EndPoing:'/categories'
  return by all the categoryListed from the inventory.
- EndPoing:'/products'  
   return by all the productsSchema from the inventory.

#### Tests

- unit tests: 'npm test'
- lint test: 'npm run lint'

#### UML

![UML Diagram](./assets/images/lab-09-express.jpg)
