'use strict';

const { Router } = require('express');

const { getEntries } = require('../controllers/entryCtrl');

const router = Router();

router.get('/entry', getEntries);

module.exports = router;
