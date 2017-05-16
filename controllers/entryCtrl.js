'use strict';

const { knex } = require('../db/database');
const Entry = require('../models/entry');

module.exports.addEntry = (req, res, err) => {
  console.log(req.body)
  Entry.forge(req.body)
    .save()
    .then((entryObject) => {
      console.log(req.body)
    });
};
