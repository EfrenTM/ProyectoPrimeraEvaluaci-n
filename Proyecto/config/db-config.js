'use strict'
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:admin@192.168.201.85:5432/BDproyect');


sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto')
    });

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.productTemplates = require('../models/product-template')(sequelize, Sequelize);
 
module.exports = db;