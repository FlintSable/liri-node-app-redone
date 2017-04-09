var myweets = require('./parts/my-tweets');
var spotify = require('./parts/spotify-this-song.js');
var movie = require('./parts/movie-this');
var dowhata = require('./parts/do-what-it-says');




mainer();



function mainer() {
    var indexCount = process.argv.slice(2);
    var input = indexCount.join(' ');
    var inputCountLen = indexCount.length;
    console.log(inputCountLen);

    if (inputCountLen === 0) {
        console.log('no arguments passed');
    } else if (inputCountLen > 0) {
        switch (input) {
            case 'my-tweets':
                console.log('mytweetssss');
                // call the tweets
                break;
            case 'movie-this':
                console.log('movie-thisssss');
                // call the movie
                break;
            case 'spotify-this-song':
                console.log('spotify-this-songgggggg');
                // call the spot
                break;
            case 'do-what-it-says':
                console.log('do whataaaaaa');
                // call the dew
                break;
        }

    }




}







// movie.omdbSearch('stranger than fiction');

// console.log(newMovieSearch);
