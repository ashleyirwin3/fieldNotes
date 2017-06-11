'use strict';

const { Router } = require('express');

const { create, getUsers } = require('../controllers/userCtrl');

const router = Router();

router.post('/user', create);
router.get('/user', getUsers);


module.exports = router;
