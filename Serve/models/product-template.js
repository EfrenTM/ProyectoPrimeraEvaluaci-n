'use strict'

module.exports = (sequelize, Sequelize) => {
    const ProductTemplate = sequelize.define('product_template', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            required: true
        },
        warranty: {
            type: Sequelize.FLOAT,
            required: false
        },
        list_price: {
            type: Sequelize.INTEGER,
            required: false
        },
        color: {
            type: Sequelize.INTEGER,
            required: false
        },
        uom_id: {
            type: Sequelize.INTEGER,
            required: true
        },
        company_id: {
            type: Sequelize.INTEGER,
            required: false
        },
        description: {
            type: Sequelize.STRING,
            required: false
        }
    }, {
            // don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: false,

            // don't delete database entries but set the newly added attribute deletedAt
            // to the current date (when deletion was done). paranoid will only work if
            // timestamps are enabled
            //paranoid: true,

            // don't use camelcase for automatically added attributes but underscore style
            // so updatedAt will be updated_at
            //underscored: true,

            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,

            // define the table's name
            tableName: 'product_template'
        });

    return ProductTemplate;
}


