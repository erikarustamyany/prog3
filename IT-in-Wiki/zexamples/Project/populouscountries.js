var request = require('request');
var cheerio = require('cheerio');
var url = "https://www.census.gov/popclock/world";
var arr = [];
request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        $("#most-populous2 > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > span").each(function() {
            arr.push($(this).text());
        });
        console.log(arr);
    }
});