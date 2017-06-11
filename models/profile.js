'use strict';

const { bookshelf, knex } = require('../db/database.js');

const Profile = bookshelf.Model.extend({
  tableName: 'notes',
})

module.exports = Profile;
