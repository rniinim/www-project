var stats = require('../models/played_games');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
//validointi työkalut

exports.add = function(req, res) {
    //avataan sivu add_form.pug
    res.render('add_form', { title: 'Lisää tilastoja', });
};

exports.add_stats = [
    body('Champion', 'Champion -kenttä ei saa olla tyhjä').isLength({ min: 1 }).trim(),
    body('role', 'Rooli -kenttä ei saa olla tyhjä').isLength({ min: 1 }).trim(),
    sanitizeBody('*').trim().escape(),
    (req, res, next) => {
        
        
        //Otetaan validointi errorit talteen
        const errors = validationResult(req);

        // Tehdään objekti, mihin tallennetaan formissa täytetyt arvot
        var stats_added = new stats(
          { champion: req.body.Champion,
            role: req.body.role,
            kills: req.body.kills,
            deaths: req.body.deaths,
            assists: req.body.assists
           });
           
        //jos virheitä ei esiintynyt tallennetaan obejkti sekä ohjataan stats-sivulle
        if (errors.isEmpty()) {
            stats_added.save(function (err) {
            res.redirect('/catalog/stats');
            });
        }
    }
            
];