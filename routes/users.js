var express = require('express');
const { createUser } = require('../controller/users.controller');
const { checkUserIsAdmin } = require('../utils/middlewares');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/', checkUserIsAdmin, createUser);

module.exports = router;
