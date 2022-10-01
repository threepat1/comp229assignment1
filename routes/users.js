// user.js
// Threepat Kiatkamol
// 301207863 
// 29 September 2022

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
