'use strict'

module.exports = function (api) {
    console.log('Llego a route users');
    const resUsersController = require("../controllers/res-users");

    //api.get("/res_users", resUsersController.findAll);
    api.get("/res_users/update", resUsersController.update);

}