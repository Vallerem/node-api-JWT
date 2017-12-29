var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const VerifyToken = require('../auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));

// Private route
router.get('/private', VerifyToken,  function (req, res, next) {
  res.send("User verified!! Acces granted")
});

module.exports = router;