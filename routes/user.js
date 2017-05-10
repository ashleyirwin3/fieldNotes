'use strict';

const { Router } = require('express');

const { getUsers } = require('../controllers/userCtrl');

const router = Router();

router.get('/user', getUsers);

module.exports = router;
