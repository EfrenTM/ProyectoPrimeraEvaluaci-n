'use strict'

module.exports = function (api) {
    console.log('Llego a route product');
    const productTemplateController = require("../controllers/product-template");

    api.get("/product_template", productTemplateController.findAll);
    api.put("/product_template/update", productTemplateController.update);
    api.post("/product_template/create", productTemplateController.create);
    api.delete("/product_template/delete/:id", productTemplateController.expunge);

}



