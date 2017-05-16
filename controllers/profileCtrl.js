'use strict';

const { knex } = require('../db/database.js');
const Profile = require('../models/profile');


module.exports.getEntries = (req, res, next) => {
  Profile.getAllEntries()
    .then(entries => res.status(200).json(entries))
    .catch(err => next(err))
}
