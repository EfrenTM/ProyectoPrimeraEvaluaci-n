'use strict'
const db = require('../config/db-config.js');
const resUsers = db.resUsers;

const findAll = (req, res) => {
    resUsers.findAll().then(p => {
        console.log(`found user: ${JSON.stringify(p)}`);
        res.json(p);
    });
};

//Añadir variables automaticas con el lado del cliente.
const update = (req, res) => {
    resUsers.update({ password: "admin" }, { where: { id: 1 } }).then(() => {
        res.status(200).send("Update finished")
    });
};

//Añadir variables automaticas con el lado del cliente.
const create = (req, res) => {
    resUsers.create(req.body).then(() => {
        res.status(200).send("Craate finished")
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

//Añadir variables automaticas con el lado del cliente.
const expunge =  (req, res) =>{
    resUsers.destroy({where: req.body}).then(() =>{
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