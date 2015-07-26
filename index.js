var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var $ = require('jquery');
var la101= {
    "id" : 101,
    "temp" : 0,
    "lum" : 0,
    "hum" : 0,
    "inuse" : 0,
    "aircon" : 0,
    "proj" : 0
};
var la102= {
    "id" : 102,
    "temp" : 0,
    "lum" : 0,
    "hum" : 0,
    "inuse" : 0,
    "aircon" : 0,
    "proj" : 0
};
var req1= {
    "id" : 101,
    "temp" : 0,
    "lum" : 0,
    "hum" : 0,
    "inuse" : 0,
    "aircon" : 0,
    "proj" : 0
};
var req2= {
    "id" : 102,
    "temp" : 0,
    "lum" : 0,
    "hum" : 0,
    "inuse" : 0,
    "aircon" : 0,
    "proj" : 0
};
var req1_bool=0;
var req2_bool=0;

app.use(bodyParser.json());


app.get('/1',function(req,res,next){
     res.setHeader('Content-Type', 'application/json');
     res.send(la101);

});

app.get('/2',function(req,res,next){
     res.setHeader('Content-Type', 'application/json');
     res.send(la102);

});
app.post('/',function(req,res,next){
    if(req.body.id==101){
        if(req.body.control==0){
            la101.temp = req.body.temp;
            la101.lum = req.body.lum;
            la101.hum = req.body.hum;
            la101.inuse = req.body.inuse;
            la101.aircon = req.body.aircon;
            la101.proj = req.body.proj;
            if(req1_bool==1){
                res.send(req1);
                req1_bool=0;
            }
            else{
                res.send("nothing request");
            }
        }
        else{
            req1.temp = req.body.temp;
            req1.lum = req.body.lum;
            req1.hum = req.body.hum;
            req1.inuse = req.body.inuse;
            req1.aircon = req.body.aircon;
            req1.proj = req.body.proj;  
            req1_bool=1;
        }
    }else{
        if(req.body.control==0){
            la102.temp = req.body.temp;
            la102.lum = req.body.lum;
            la102.hum = req.body.hum;
            la102.inuse = req.body.inuse;
            la102.aircon = req.body.aircon;
            la102.proj = req.body.proj;
            if(req2_bool==1){
                res.send(req2);
                req2_bool=0;
            }
            else{
                res.send("nothing request");
            }
        }
        else{
            req2.temp = req.body.temp;
            req2.lum = req.body.lum;
            req2.hum = req.body.hum;
            req2.inuse = req.body.inuse;
            req2.aircon = req.body.aircon;
            req2.proj = req.body.proj;  
            req2_bool=1;
        }
    }
});
app.listen(3000);
console.log('Listening on port 3000...');/////
