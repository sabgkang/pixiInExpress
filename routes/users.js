var express = require('express');
var router = express.Router();
var hash = require("js-sha256");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query); //參數不是用 params
  res.send(hash.sha256('respond with a resource'));
});

module.exports = router;
