const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class OrganizationUser extends Model {}

OrganizationUser.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    },
    { sequelize, modelName: 'organizationUser' }
);

module.exports = OrganizationUser;