'use strict';

const { bookshelf, knex } = require('../db/database.js');

const User = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = User;
