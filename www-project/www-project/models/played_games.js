
var mongoose = require('mongoose');

//Määritellään skeema (schema)
var Schema = mongoose.Schema;

//Validoidaan skeema 
var played_gamesSchema = new Schema({
    champion: String,
    role: String,
    kills: {
    type: Number,
    min: 0},
    deaths: {
    type: Number,
    min: 0},
    assists: {
    type: Number,
    min: 0}
});

// Laskee pelaajan kda:n
played_gamesSchema
.virtual('kda')
.get(function () {
    if(this.deaths != 0){
    return (this.kills + this.assists)/ this.deaths;}
    else{
    return (this.kills + this.assists);    
    }
});


played_gamesSchema
.virtual('url')
.get(function () {
  return '/catalog/stats/' + this._id;
});


//Exportaa modelin
module.exports = mongoose.model('played_games', played_gamesSchema );