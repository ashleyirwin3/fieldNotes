'use strict';

const { knex } = require('../db/database');
const User = require('../models/user');

module.exports.show = (req, res) => {
  res.render('user')
}

module.exports.create = (req, res, err) => {
  console.log(req.body)
  User.forge(req.body)
    .save()
    .then((userObject) => {
      console.log(req.body)
    });
};

module.exports.getUsers = (req, res, next) => {
  User.fetchAll()
  .then( (users) => {
    res.status(200).json(users);
  });
};
