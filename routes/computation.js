var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  log=Math.log(r)
  res.send(`Log function is applied on ${r} is ${log}`);
});

module.exports = router;

var r=Math.random();
var log=0;