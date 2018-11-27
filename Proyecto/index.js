'use strict'
// variables principales 
var express = require('express');
var app = express();
var api = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.json());


//var productTemplateRoutes = require("./routes/product-template");

//Sequalize
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:admin@192.168.201.85:5432/BDproyect');
//const db = require("./config/db-config.js");


//cotroller
// var valor = "Servidor funcionando";
// const comprobarServidor = (req, res) => {
//     res.status(200).send({
//         message: valor
//     });
// };
 
//var productTemplateRoutes = require('./routes/product-template.js');

require('./routes/product-template')(api);

console.log("tiburcio");


// product_template.create({
//     name: 'EntradaBdNd'
// })
//     .then(product_template => {
//         console.log(`${product_template.name}`);
//     });

//api.use("product_template", productTemplateRoutes);

// router


//base route
app.use("/shop", api);
//api.get("/", comprobarServidor);
//host server
const port = 40000;
app.listen(port, () => {
    console.log('listening on http://localhost:' + port)
});
