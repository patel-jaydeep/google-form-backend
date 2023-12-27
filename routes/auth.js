var express = require('express');
const { loginUser } = require('../controller/users.controller');
var router = express.Router();

router.post('/login', loginUser)

module.exports = router;
