'use strict';


const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/', routes);
app.use((req, res) => {
  res.render('entry')
});
app.use((req, res) => {
  res.render('user')
});

app.listen(port, function() {
  console.log(`Serving on ${port}`)
});

module.exports = app;
