const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Organization = sequelize.define('organization', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: Sequelize.STRING
})

module.exports = Organization;