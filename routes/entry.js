'use strict';

const { Router } = require('express');

const { show, create } = require('../controllers/entryCtrl');

const router = Router();

router.get('/entry', show);
router.post('/entry', create);
// router.get('/entry', getEntries);

module.exports = router;
