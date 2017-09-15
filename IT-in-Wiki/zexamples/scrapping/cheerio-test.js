var request = require('request');
var cheerio = require('cheerio');
var url = "https://www.google.am/search?q=world+population+live&rlz=1C1GGRV_enAM751AM751&oq=world+population+&aqs=chrome.2.69i57j0l5.7693j0j7&sourceid=chrome&ie=UTF-8";
request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        $("tr > td").each(function() {
            var data = $(this);
            console.log(data.text());
        });

     /*   $(".mw-headline").each(function() {
            var data = $(this);
            console.log(data.text());
        });*/
    }
});