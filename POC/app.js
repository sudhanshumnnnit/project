var express = require('express');
var app = express();
var path=require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//setting middleware
//app.use(express.static(__dirname + 'public')); //Serves resources from public folder
app.use(express.static('public'));
app.use('/JS', express.static(__dirname + '/JS'));



app.get('/test', function (req, res) {
console.log(__dirname)
res.sendFile(__dirname + '/test.html');
    //res.sendFile('./index.html');
});

app.get('/', function (req, res) {
console.log(__dirname)
res.sendFile(__dirname + '/index.html');
    //res.sendFile('./index.html');
});

app.get('/pi-chart', function (req, res) {
console.log(__dirname)
res.sendFile(__dirname + '/pi-chart.html');
    //res.sendFile('./index.html');
});

app.get('/bar-chart', function (req, res) {
console.log(__dirname)
res.sendFile(__dirname + '/bar-chart.html');
    //res.sendFile('./index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
   