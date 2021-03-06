'use strict'
const db = require('../config/db-config.js');
const resCompany = db.resCompany;

const findAll = (req, res) => {
    resCompany.findAll().then(p => {
        console.log(`found user: ${JSON.stringify(p)}`);
        res.json(p);
    });
}
//Añadir variables automaticas con el lado del cliente.
const update = (req, res) => {
    resCompany.update({ name: "UpdateCompany" }, { where: { id: 5 } }).then(() => {
        res.status(200).send("Update finished")
    });
}

//Añadir variables automaticas con el lado del cliente.
const create = (req, res) => {
    resCompany.create(req.body).then(() => {
        res.status(200).send("Craate finished")
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });

}

//Añadir variables automaticas con el lado del cliente.
const expunge =  (req, res) => {
    console.log("expunge");
    let idDelete = req.params.id;
    resCompany.destroy({where: { id : idDelete }}).then(() =>{
        res.status(200).send("Delete finished")
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};


module.exports = {
    findAll,
    update,
    create,
    expunge
}