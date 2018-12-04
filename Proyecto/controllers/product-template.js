'use strict'
const db = require('../config/db-config.js');
const ProductTemplate = db.productTemplates;

const findAll = (req, res) => {
    ProductTemplate.findAll().then(p => {
        console.log(`found user: ${JSON.stringify(p)}`);
        //res.json(p);
    });
}
//Añadir variables automaticas con el lado del cliente.
const update = (req, res) => {
    ProductTemplate.update({ name: "UpdateCrud" }, { where: { id: 1 } }).then(() => {
        res.status(200).send("Update finished")
    });
}
//Añadir variables automaticas con el lado del cliente.
const create = (req, res) => {
    console.log("LLEGO");
    ProductTemplate.create(req.body).then(() => {
        res.status(200).send("Craate finished")
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });

}


module.exports = {
    // findAll,
    //update,
    create
}

