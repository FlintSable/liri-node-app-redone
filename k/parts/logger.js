var fs = require("fs");



exports.logger = function(putInFile) {
    fs.appendFile('./k/log/log.log', putInFile, function(err) {

        // If an error was experienced we say it.
        if (err) {
            console.log(err);
        } else {}

    });

};
