var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var c1= {
    "id" : 101,
    "temp" : 0,
    "lum" : 0,
    "hum" : 0,
    "inuse" : 0,
    "aircon" : 0,
    "proj" : 0
};
var c2= {
    "id" : 102,
    "temp" : 0,
    "lum" : 0,
    "hum" : 0,
    "inuse" : 0,
    "aircon" : 0,
    "proj" : 0
};


app.use(bodyParser.json());


app.get('/1',function(req,res,next){
     res.setHeader('Content-Type', 'application/json');
     res.send(c1);

});

app.get('/2',function(req,res,next){
     res.setHeader('Content-Type', 'application/json');
     res.send(c2);

});
app.post('/',function(req,res,next){
    if(req.body.id==101){
        c1.temp = req.body.temp;
        c1.lum = req.body.lum;
        c1.hum = req.body.hum;
        c1.inuse = req.body.inuse;
        c1.aircon = req.body.aircon;
        c1.proj = req.body.proj;
        res.send(c1);
    }else{

        c2.temp = req.body.temp;
        c2.lum = req.body.lum;
        c2.hum = req.body.hum;
        c2.inuse = req.body.inuse;
        c2.aircon = req.body.aircon;
        c2.proj = req.body.proj;
        res.send(c2);
    }
});

 
app.listen(3000);
console.log('Listening on port 3000...');/////
