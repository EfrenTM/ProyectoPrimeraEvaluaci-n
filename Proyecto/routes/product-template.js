'use strict'

module.exports = function (api) {
    console.log('Llego a route');
    const productTemplateController = require("../controllers/product-template");

    api.get("/product_template", productTemplateController.findAll);

}



