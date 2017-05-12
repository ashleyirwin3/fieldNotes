'use strict';

const { knex } = require('../db/database');
const Entry = require('../models/entry');

module.exports.show = (req, res) => {
  res.render('entry');
}

module.exports.create = (req, res, err) => {
  console.log(req.body)
  Entry.forge(req.body)
    .save()
    .then((entryObject) => {
      console.log(req.body)
    });
};

module.exports.getEntries = (req, res, next) => {
  Entry.fetchAll()
  .then( (entries) => {
    res.status(200).json(entries);
  });
};
