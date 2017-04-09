// var weather = require('weather-js');
var inquirer = require('inquirer');
const request = require('request');
var fs = require("fs");
var chalk = require('chalk');


exports.movieThis = function(movieQuery){
        queryUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&plot=short";
        request.get(queryUrl, (err, response, movie) =>{
        movie = JSON.parse(movie);
        var output =    '~~~~~~~~~~~~~~~' + '\n' + 
                        '* ' + movie.Title + '\n' +
                        '* ' + movie.Year + '\n' +
                        '* ' + movie.Imdbraiting + '\n' + 
                        '* ' + movie.Country + '\n' + 
                        '* ' + movie.Language + '\n' + 
                        '* ' + movie.Plot + '\n' + 
                        '* ' + movie.Actors + '\n' + 
                        '~~~~~~~~~~~~~~~';
        console.log(chalk.blue.bgWhite(output));
 
        
        });


};

