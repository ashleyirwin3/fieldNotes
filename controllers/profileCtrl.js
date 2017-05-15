'use strict';

const { knex } = require('../db/database');
const Profile = require('../models/profile');

module.exports.getEntries = (req, res, next) => {
  Profile.fetchAll()
  .then( (entries) => {
    console.log(req.body)
    res.status(200).json(entries);
    res.render('profile', entries)
  });
};
