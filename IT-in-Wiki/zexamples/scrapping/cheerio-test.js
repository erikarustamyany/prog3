var request = require('request');
var cheerio = require('cheerio');
var url = "http://quakes.globalincidentmap.com/";
request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        $("tr").each(function() {
            var data = $(this);
            console.log(data + '');
        });

     /*   $(".mw-headline").each(function() {
            var data = $(this);
            console.log(data.text());
        });*/
    }
});