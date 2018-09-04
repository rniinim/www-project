var stats = require('../models/played_games');


exports.stats_list = function(req, res) {
    
  stats.find({}, 'champion role kills deaths assists _id')
    .exec(function (err, stats_lista) {
      if (err) { return next(err); }
      //Onnistunut, joten avataan stats.pug
      res.render('stats', { title: 'Stats List', stats_list: stats_lista });
    });
};

