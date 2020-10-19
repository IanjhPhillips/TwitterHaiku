console.log('The bot is starting');

var Twit = require('twit');
var words = require('spache');
var syll = require('syllable');
var fs = require('fs');
var config = require('./config');

var T = new Twit(config);

