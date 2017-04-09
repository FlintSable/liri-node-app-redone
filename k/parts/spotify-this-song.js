const spotify = require('spotify');
var browser = require('child_process');
var os = require('os');
var confirm = require('inquirer-confirm');



var SeachConstructor = function(arg1, arg2) {
    this.type = arg1;
    this.query = arg2;
};


exports.spotSong = function(searchObj) {
    spotify.search('sunshines gone', function(err, data) {
        console.log(searchObj);
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else if (!err) {
            console.log(data);
            console.log('Artist: ' + data.tracks.items[0].artists[0].name + '\n' +
                'Song Name: ' + data.tracks.items[0].name + '\n' +
                'Album Name: ' + data.tracks.items[0].album.name + '\n'
            );

            // ask user if they would like to sample the song
            confirm('Would you like to hear a sample?').then(function confirmed() {
                // check for operating system
                if (os.platform() === 'win32') {
                    browser.exec("Chrome.exe --window-position=0,0 --app=" + data.tracks.items[0].preview_url);
                } else if (os.platform === 'darwin') {
                    browser.exec("/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --app=" + data.tracks.items[0].preview_url);
                } else if (os.platform === 'linux') {
                    browser.exec("google-chrome --app=" + data.tracks.items[0].preview_url);
                }
            }, function canceled() {
                console.log('Preview Url: ' + data.tracks.items[0].preview_url);
            });

        }
    });
};
