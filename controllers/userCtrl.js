'use strict';

const { knex } = require('../db/database');
const User = require('../models/user');

module.exports.getUsers = (req, res, next) => {
  User.fetchAll()
  .then( (users) => {
    res.status(200).json(users);
  });
};
