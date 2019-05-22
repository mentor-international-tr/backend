const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class ScheduledMessageItem extends Model {}

ScheduledMessageItem.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        message: Sequelize.STRING,
        date: Sequelize.DATE
    },
    { sequelize, modelName: 'scheduledMessageItem' }
);

module.exports = ScheduledMessageItem;