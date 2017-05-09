'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./entry'))

module.exports = router;
