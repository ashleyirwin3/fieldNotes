'use strict';

const { Router } = require('express');
const router = Router();

// router.use(require('./entry'))
router.use(require('./user'))
router.use(require('./profile'))


module.exports = router;
