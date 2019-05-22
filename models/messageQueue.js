const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class MessageQueue extends Model {}

MessageQueue.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    },
    { sequelize, modelName: 'messageQueue' }
);

module.exports = MessageQueue;