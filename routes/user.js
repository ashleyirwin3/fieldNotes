'use strict';

const { Router } = require('express');

const { show, create, getUsers } = require('../controllers/userCtrl');

const router = Router();

router.get('/user', show);
router.post('/user', create);
router.get('/user', getUsers);


module.exports = router;
