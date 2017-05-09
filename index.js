/**
 * Created by Thomas on 5/2/2017.
 */
var http        = require('http');
var express     = require('express');
var config      = require('./config.json');

//Create the application
var app = express();

app.set('PORT', config.webPort);

app.all('*', function(req, res, next){
    console.log(JSON.stringify(req.headers));
    console.log(req.method + " " + req.url);
    next();
});

app.get('/api/v1/hello', function(req, res, next){
    res.contentType('application/json');
    res.json({"msg":"Hello to you all! Have a nice day!",
    "temperatuur":  [
        10, 20, 30, "koud"
        ]
    });

});

//Routing with versions
app.use('/apiv1', require('./routes/routes_apiv1'));
// app.use('/apiv2', require('./routes/routes_apiv2'));
app.use('/apiv3', require('./routes/routes_apiv3'));

//Start the server
var port = process.env.PORT || app.get('PORT');

app.listen(port, function(){
    console.log('The magic happens at http://localhost:' + port)
    console.log('Dit is een extra toevoeging')
});

module.exports = app;