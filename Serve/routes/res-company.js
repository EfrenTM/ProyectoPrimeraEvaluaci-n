'use strict'

module.exports = function (api) {
    console.log('Llego a route company');
    const resCompanyController = require("../controllers/res-company");

    api.get("/res_company", resCompanyController.findAll);
    api.put("/res_company/update", resCompanyController.update);
    api.post("/res_company/create", resCompanyController.create);
    api.delete("/res_company/delete/:id", resCompanyController.expunge);
}