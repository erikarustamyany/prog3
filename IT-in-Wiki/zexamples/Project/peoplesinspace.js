var request = require('request');
var cheerio = require('cheerio');
var url = "http://www.howmanypeopleareinspacerightnow.com/peopleinspace.json";
var arr = {};
request({url:url,json:true}, function(error, response, body) {
    if (!error) {
       arr = body;
       console.log(body);
    }
});