'use strict';

const { bookshelf } = require('../db/database');

const Entry = bookshelf.Model.extend({
  tableName: 'entries'
});

module.exports = Entry;
