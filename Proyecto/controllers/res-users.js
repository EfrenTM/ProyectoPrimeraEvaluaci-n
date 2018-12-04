'use strict'
const db = require('../config/db-config.js');
const resUsers = db.resUsers;

const findAll = (req, res) => {
    resUsers.findAll().then(p => {
        console.log(`found user: ${JSON.stringify(p)}`);
        //res.json(p);
    });
}

//Añadir variables automaticas con el lado del cliente.
const update = (req, res) => {
    resUsers.update({ password: "admin" }, { where: { id: 1 } }).then(() => {
        res.status(200).send("Update finished")
    });
}
module.exports = {
    //findAll,
    update
}