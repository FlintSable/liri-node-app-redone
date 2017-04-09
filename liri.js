var tweets = require('./k/parts/my-tweets');
var spotify = require('./k/parts/spotify-this-song');
var movie = require('./k/parts/movie-this');
var dowhata = require('./k/parts/do-what-it-says');




mainer();



function mainer() {
    var indexCount = process.argv.slice(2);
    var input = indexCount[0];
    var arguments = indexCount.slice(1, indexCount.length).join(' ');
    var inputCountLen = indexCount.length;
    console.log(input + '~');

    if (inputCountLen === 0) {
        console.log('no arguments passed');
    } else if (inputCountLen > 0) {
        switch (input) {
            case 'my-tweets':
                console.log('mytweetssss');
                tweets.pull();
                break;
            case 'movie-this':
                movie.omdbSearch(arguments);
                break;
            case 'spotify-this-song':
                // if (inputs.length === 2) {
                //     var defaultInput = new SearchConstructor('track', 'Ace of Base');
                //     songSearch(defaultInput);
                // } else if (songQuery.length > 0) {
                //     var userInput = new SearchConstructor('track', songQuery);
                //     songSearch(userInput);
                // }
                break;
            case 'do-what-it-says':
                console.log('do whataaaaaa');
                // call the dew
                break;
        }

    }

}








// console.log(newMovieSearch);
