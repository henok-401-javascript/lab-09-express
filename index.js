'use strict';
const app = require('./lib/server.js');
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/app';

const port = process.env.port || 3000;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.start(port, MONGODB_URI);

// mongoose.disconnect();
