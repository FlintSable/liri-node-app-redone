const fs = require("fs");
const inquirer = require("inquirer");
var tweets = require('./my-tweets');
var spotify = require('./spotify-this-song');
var movie = require('./movie-this');



exports.says = function() {
    fs.readFile('./k/log/random.txt', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else if (data !== null) {
            var data = data.split('\n');
            var data2 = [];
            for (var i = 0; i < data.length; ++i)
                data[i] = data[i].replace(/(\r\n|\n|\r)/gm, "");
            data.push('runall');

            function callAll() {
                console.log(data.length);

            }

            inquirer.prompt([{
                name: "Operation",
                message: "Choose Operation: ",
                type: 'list',
                choices: data
            }]).then(function(answers, data) {
                var OP = [];
                OP.push(answers.Operation.split(' '));

                switch (OP[0][0]) {
                    case 'spotify-this-song':
                        var song = OP[0].slice(1).join(' ');
                        if (song === undefined) {
                            var defaultInput = new spotify.SearchConstructor('track', 'Lumos!');
                            spotify.spotSong(defaultInput);
                        } else if (song) {
                            var userInput = new spotify.SearchConstructor('track', song);
                            spotify.spotSong(userInput);
                        }

                        break;
                    case 'my-tweets':
                        tweets.pull();
                        break;
                    case 'movie-this':
                        movie.omdbSearch(song);
                        break;
                    case 'runall':
                        callAll();
                        break;

                }
            });
        }

    });



};
