var stats = require('../models/played_games');

exports.info_site = function(req, res) {
    //Ohjataan sivulle info.pug
    res.render('info', { title: 'Stats of Boots of speed info'});
};