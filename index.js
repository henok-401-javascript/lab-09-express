'use strict';
const app = require('./lib/server.js');
const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

mongoose.connection.once('open', () => {
  console.log('mongo db is on');
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.start(port, MONGODB_URI);

// mongoose.disconnect();
