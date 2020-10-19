console.log('The bot is starting\n\n');

const Twit = require('twit');
const config = require('./config');
const Haiku = require ('./haiku');

const T = new Twit(config);

/*
let userStream = T.stream('statuses/filter', { track: '@haikubot12' });

userStream.on('follow', followed);

function followed(eventMsg) {
    console.log("Somebody followed me!");
    let name = eventMsg.source.name;
    let screenName = eventMsg.source.screen_name;
    sendTweet('@'+screenName+
        "\nThanks for following"+
        "\nI hope you can stay awhile"+
        "\nHave an awesome day!");
}
*/

sendHaiku();
setInterval(sendHaiku, 1000*60*60);

function sendTweet (tweet) {

    console.log(tweet);
    T.post('statuses/update', {status: tweet}, function(err, data, response) {
        if (err)
            console.log(err);
        else
            console.log("Successfully posted!");
    });
}

function sendHaiku () {
    sendTweet(Haiku.generateHaiku().concat("Really makes you think...\n#haiku"));
}
