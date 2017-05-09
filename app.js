'use strict';

const express = require('express');
const app = express();
const { knex } = require('./db/database');




// Port //
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
