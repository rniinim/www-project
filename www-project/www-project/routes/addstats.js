var express = require('express');
var router = express.Router();

// GET komento add:iin
router.get('/', function(req, res, next) {
  res.send('/catalog');
});

module.exports = router;