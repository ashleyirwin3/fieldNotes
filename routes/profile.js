'use strict';

const { Router } = require('express');

const { getEntries, addEntry, getEntryByDate, getEntryByPerson, deleteEntry } = require('../controllers/profileCtrl');

const router = Router();

router.get('/profile', getEntries)
router.post('/profile', addEntry)
router.get('/profile/:date', getEntryByDate)
router.get('/profile/:surveyors', getEntryByPerson)
router.delete('/profile/:id', deleteEntry)

module.exports = router;
