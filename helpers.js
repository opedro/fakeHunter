var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

module.exports= {
    searchForWord: ($, word ) => {
        var bodyText = $('html > body').text();
        if (bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
            return true;
        }
        return false;
    }, 
    
    collectInternalLinks: ($) => {
        var allRelativeLinks = [];
        var allAbsoluteLinks = [];
    
        var relativeLinks = $("a[href^='/']");
        relativeLinks.each(function () {
            allRelativeLinks.push($(this).attr('href'));
    
        });
    
        var absoluteLinks = $("a[href^='http']");
        absoluteLinks.each(function () {
            allAbsoluteLinks.push($(this).attr('href'));
        });
    
        console.log("Found " + allRelativeLinks.length + " relative links");
        console.log("Found " + allAbsoluteLinks.length + " absolute links");
    },
    
    searchForWord: ($, word) => {
        var bodyText = $('html > body').text().toLowerCase();
        return(bodyText.indexOf(word.toLowerCase()) !== -1);
      },

    getCheer: (pageToVisit, callback) => {
        console.log("Trying to reach: " + pageToVisit);
        request(pageToVisit, function (error, response, body) {
            if (error) {
                console.log("Error: " + error);
            }
        
            // Check status code (200 is HTTP OK)
            console.log("Status code: " + response.statusCode);
            if (response.statusCode === 200) {
                // Parse the document body
                var $ = cheerio.load(body);
                console.log("Loaded:  " + $('title').text());
                callback($);
                return 0;
        
            }
        });
    }
}