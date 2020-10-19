console.log('The bot is starting\n\n');

const Twit = require('twit');
const config = require('./config');
const Haiku = require ('./haiku');

var T = new Twit(config);

console.log(Haiku.generateHaiku());
