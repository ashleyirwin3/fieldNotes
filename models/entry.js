'use strict';

const { bookshelf, knex } = require('../db/database.js');

const Entry = bookshelf.Model.extend({
  tableName: 'entries'
});

module.exports = Entry;
