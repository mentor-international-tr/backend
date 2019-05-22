const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class MessageItem extends Model {}

MessageItem.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        message: {
            type : Sequelize.STRING,
            allowNull: false
        }
    },
    { sequelize, modelName: 'messageItem' }
);

module.exports = MessageItem;