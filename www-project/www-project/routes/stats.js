var express = require('express');
var router = express.Router();

// GET komento stats:n
router.get('/', function(req, res, next) {
  res.send('/catalog');
});

module.exports = router;