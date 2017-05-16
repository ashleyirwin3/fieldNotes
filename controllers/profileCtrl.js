'use strict';

const { knex } = require('../db/database.js');
const Profile = require('../models/profile');


module.exports.getEntries = (req, res, next) => {
  Profile.fetchAll()
    .then(entries => res.status(200).json(entries))
    .catch(err => next(err))
}

module.exports.addEntry = ({ body }, res, next) => {
  console.log(body)
  Profile.forge(body)
    .save()
    .then((entryObject) => res.status(200).json({"msg": "Post successful"}))
    .catch( (error ) => {
      next(error)
    })
}

module.exports.getEntryByDate = ({ params: { date } }, res, next) => {
  Profile.forge({ date })
  .fetchAll()
  .then(entries => res.status(200).json(entries))
  .catch(err => next(err))
}

module.exports.getEntryByPerson = ({ params: { surveyors } }, res, next) => {
  Profile.forge({ surveyors })
  .fetchAll()
  .then(entries => res.status(200).json(entries))
  .catch(err => next(err))
}

module.exports.deleteEntry = ({ params: { id } }, res, next) => {
  Profile.forge({ id })
  .destroy()
  .then(() => res.status(201).json({ "msg": "Entry Deleted"}))
  .catch(err => next(err))
}
