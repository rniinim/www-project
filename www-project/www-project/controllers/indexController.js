var stats = require('../models/played_games');
var async = require('async');


exports.index = function(req, res) {
    async.parallel({
        game_count: function(callback) {
          stats.count({}, callback); 
        },
    },
        function(err, results) {
            //ohjataan sivulle index.pug, titleksi asetetaan "Stats of Boots of speed"
            res.render('index', { title: 'Stats of Boots of speed', error: err, data: results });
        });
};