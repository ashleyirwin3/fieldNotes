'use strict';

const { Router } = require('express');

const getAllEntries = require('../controllers/profileCtrl');

const router = Router();

// router.get('/profile', show);
router.get('/profile', getAllEntries)

module.exports = router;
