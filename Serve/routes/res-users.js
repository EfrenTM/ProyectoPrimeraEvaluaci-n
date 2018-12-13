'use strict'

module.exports = function (api) {
    console.log('Llego a route users');
    const resUsersController = require("../controllers/res-users");

    api.get("/res_users", resUsersController.findAll);
    api.put("/res_users/update", resUsersController.update);
    api.post("/res_users/create", resUsersController.create);
    api.delete("/res_users/delete/:id", resUsersController.expunge);
}