'use strict'

module.exports = function (api) {
    console.log('Llego a route company');
    const resCompanyController = require("../controllers/res-company");

    //api.get("/res_company", resCompanyController.findAll);
    api.get("/res_company/update", resCompanyController.update);
}