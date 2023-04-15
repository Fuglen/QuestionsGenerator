var fs = require('fs');
var csv = require('jquery-csv');

$.csv.toArray('/Files/plants.csv')

fs.createReadStream(__dirname + '/fs_read.csv').pipe(parser);