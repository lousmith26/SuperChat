var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:true});
var port = 3001;

var server = app.listen(port, () => {
    console.log('Server is running on port', server.address().port);
});

app.post('/signup', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.end();
});