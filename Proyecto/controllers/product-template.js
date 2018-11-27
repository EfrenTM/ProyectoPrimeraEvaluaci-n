'use strict'
const db = require('../config/db-config.js');
const ProductTemplate = db.productTemplates;

const findAll = (req, res) => {
    ProductTemplate.findAll().then(p => {
        console.log(`found user: ${JSON.stringify(p)}`);
        res.json(p);
    });
}

module.exports = {
    findAll
}


