'use strict';

const { Router } = require('express');

const { getEntries, getEntryByDate, getEntryByPerson, deleteEntry } = require('../controllers/profileCtrl');

const router = Router();

// router.get('/profile', show);
router.get('/profile', getEntries)
router.get('/profile/:date', getEntryByDate)
router.get('/profile/:surveyors', getEntryByPerson)
router.delete('/profile/:d', deleteEntry)

module.exports = router;
