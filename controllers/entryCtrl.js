'use strict';

const { knex } = require('../db/database');
const Entry = require('../models/entry');

module.exports.getEntries = (req, res, next) => {
  Entry.fetchAll()
  .then( (entries) => {
    res.status(200).json(entries);
  });
};
