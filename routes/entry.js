'use strict';

const { Router } = require('express');

const { getEntries } = require('../controllers/entryCtrl');

const router = Router();

router.get('/entries', getEntries);

module.exports = router;
