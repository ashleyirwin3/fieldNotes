'use strict';

const { Router } = require('express');

const { getEntries } = require('../controllers/profileCtrl');

const router = Router();

// router.get('/profile', show);
router.get('/profile', getEntries)


module.exports = router;
