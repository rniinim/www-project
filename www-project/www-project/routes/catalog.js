var express = require('express');
var router = express.Router();

//tämä tiedosto ohjaa sivut oikeaan osoitteeseen

var stats_controller = require('../controllers/statsController');
var info_controller = require('../controllers/infoController');
var add_controller = require('../controllers/addController');
var index_controller = require('../controllers/indexController');

//avataan sivu stats
router.get('/stats', stats_controller.stats_list);
//avataan kotisivu
router.get('/', index_controller.index);

//avataan sivu info
router.get('/info', info_controller.info_site);

//Lisätään tilastoja
router.post('/add', add_controller.add_stats);
//avataan sivu add
router.get('/add', add_controller.add);



module.exports = router;