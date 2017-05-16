'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const { knex } = require('./db/database.js')
const routes = require('./routes/');
const cors = require('cors')

const app = express();


const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));
app.use('/api/v1/', routes);


app.listen(port, function() {
  console.log(`Serving on ${port}`)
});

module.exports = app;
