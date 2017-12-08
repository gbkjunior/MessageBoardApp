var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var messages = [];
app.use(bodyParser.json());


app.use(function(req,res,next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested=With, Content-Type, Accept");
    next();
})

app.get('/messages', function(req,res)
{
    
    res.json(messages);
})

app.get('/messages/:user', function(req,res)
{
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);
    res.json(result);
})
app.post('/mess', function(req, res)
{
    //console.log(req.body);
    messages.push(req.body);
    res.json(req.body);
    //res.send('hi');
})
app.listen(4205);