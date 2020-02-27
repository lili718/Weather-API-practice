// /forecasts/42.25,-95.25?
// https://api.aerisapi.com/[:endpoint]/[:action]?client_id=[ID]&client_secret=[SECRET]

let express = require("express");
let request = require("request");
let data = require("./aeriskey.json");
let app = express();
app.use(express.static("."));
app.listen(8080);
let id = data.AccessID;
let sk = data.SecretKey;
app.get("/getWeather", function(req, res){
    let URL = "https://api.aerisapi.com/forecasts/";
    URL += req.query.lat + "," + req.query.lon + "/?client_id="+ id + "&client_secret=" + sk;
    request.get(URL, function(error,response, body){
        res.type("application/json");
        res.send(body);
        //console.log(body);
        //console.log(id);
        //console.log(req.query.lat);
        //console.log(sk);
        //console.log(req.query.lon);
    });
});