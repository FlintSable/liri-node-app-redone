'use strict';

const credentials = require('../o/keys').twitterKeys;
const Twitter = require('twitter');
var chalk = require('chalk');
var logger = require('./logger.js');


const client = new Twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret,
});


exports.pull = function() {

    const request = client.get('statuses/user_timeline', (error, tweets, response) => {
        if (!error && response.statusCode === 200) {

            for (var i = 0; i < tweets.length; i++) {
                var tweetInfo = '\n' + '~~~~~ '+ i +' ~~~~~' + '\n' +
                            tweets[i].created_at + '\n' + 
                            tweets[i].text + '\n' +
                            ' ~  ~  ~~ : ~~ ~  ~ ' + '\n' + 
                            '                   ';
            	console.log(chalk.blue.bgWhite(tweetInfo));
                logger.logger(tweetInfo);

            }

        }
        
    });

};

