'use strict'

module.exports = (sequelize, Sequelize) => {
    const resUsers= sequelize.define('res_users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // name: {
        //     type: Sequelize.STRING,
        //     required: true
        // },
        login: {
            type: Sequelize.STRING,
            required: true
        },
        password: {
            type: Sequelize.STRING,
            required: true
        },
        write_uid: {
            type: Sequelize.INTEGER,
            required: false
        },
        create_uid: {
            type: Sequelize.INTEGER,
            required: false
        },
        password_crypt: {
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
            tableName: 'res_users'
        });

    return resUsers;
}