var request = require('request');
var cheerio = require('cheerio');
var url = "http://quakes.globalincidentmap.com/";
var arr = [];
request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        $("table:nth-child(10) > tbody > tr > td").each(function() {
        arr.push($(this).text());
        });


        for(var i = 15; i < arr.length; i++)
        {
            if(i%8 == 0) console.log(arr[i - 2]);//i - region // i - 2 - date // i + 2 - magnitude
        }
    }
});