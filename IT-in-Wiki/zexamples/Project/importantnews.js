var request = require('request');
var cheerio = require('cheerio');
var url = "http://themostimportantnews.com/archives/category/world";
var arr = [];
request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        console.log($('#main-content').html());
    }
});