
app = require('express')();
var HELPERS = require('./helpers.js');



app.get('/:word/:url', function(req, res){
    var pageToVisit = "http://"+req.params.url;
    HELPERS.getCheer(pageToVisit, function (ret) {
        if(ret.errorCode==0){
            var $ = ret.$;
            res.send(HELPERS.searchForWord($, req.params.word));
        }else{
            res.send('FAIL TO LOAD THIS PAGE');
        }
    });
})

app.listen(8088, function () {
    console.log('UP')
})