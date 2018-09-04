var express = require('express');
var router = express.Router();

// GET komento indexiin
router.get('/', function(req, res) {
  res.redirect('/catalog');
});




module.exports = router;
