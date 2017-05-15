'use strict';


const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.locals.appname = 'Field Notes';
app.locals.errors = {};
app.locals.body = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/api/v1/', routes);
app.use((req, res) => {
  res.render('entry')
});
app.use((req, res) => {
  res.render('user')
});
app.use((req, res) => {
  res.render('profile')
});

app.listen(port, function() {
  console.log(`Serving on ${port}`)
});

module.exports = app;
