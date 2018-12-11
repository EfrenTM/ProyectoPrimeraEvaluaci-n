'use strict'
// variables principales 
var express = require('express');
var app = express();
var api = express.Router();

var bodyParser = require('body-parser');
app.use(
    bodyParser.json());

//llamadas a routers 
require('./routes/product-template')(api);
require('./routes/res-company')(api);
require('./routes/res-users')(api);

console.log("Index");


//base route
app.use("/shop", api);



//host server
const port = 40000;
app.listen(port, () => {
    console.log('listening on http://localhost:' + port)
});
