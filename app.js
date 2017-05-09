'use strict';

// technologies and paths needed //
const express = require('express');
const app = express();
const { knex } = require('./db/database');


// give the app access to the routes folder //
const routes = require('./routes/')


// Port //
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
