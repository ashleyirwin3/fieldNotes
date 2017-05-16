'use strict';

const { Router } = require('express');

const { addEntry } = require('../controllers/entryCtrl');

const router = Router();

// router.get('/entry', show);
router.post('/entry', addEntry);
// router.get('/entry', getEntries);

module.exports = router;
