'use strict';


const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/entry');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.use((req, res) => {
  res.render('entry')
});

app.listen(port, function() {
  console.log(`Serving on ${port}`)
});

module.exports = app;
