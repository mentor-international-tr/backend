const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class GroupUser extends Model {}

GroupUser.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    },
    { sequelize, modelName: 'groupUser' }
);

module.exports = GroupUser;