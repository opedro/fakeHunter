
var HELPERS = require('./helpers.js');
var pageToVisit = "http://www.arstechnica.com";


var $ = HELPERS.getCheer(pageToVisit, function ($) {
    console.log(HELPERS.searchForWord($, 'arstechnica'));
});


