'use strict';

// var weather = require('weather-js');
var inquirer = require('inquirer');
const request = require('request');
var fs = require("fs");
var chalk = require('chalk');
var logger = require('./logger.js');


exports.omdbSearch = function(movieQuery){
        var queryUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&plot=short";
        request.get(queryUrl, (err, response, movie) =>{
        var movie = JSON.parse(movie);
        var output =    '~~~~~~~~~~~~~~~' + '\n' + 
                        '* ' + movie.Title + '\n' +
                        '* ' + movie.Year + '\n' +
                        '* ' + movie.imdbRating + '\n' + 
                        '* ' + movie.Country + '\n' + 
                        '* ' + movie.Language + '\n' + 
                        '* ' + movie.Plot + '\n' + 
                        '* ' + movie.Actors + '\n' + 
                        '~~~~~~~~~~~~~~~';
        console.log(chalk.blue.bgWhite(output));
        logger.logger(output);
 
        
        });


};

