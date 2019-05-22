const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class PrivateRoom extends Model {}

PrivateRoom.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    },
    { sequelize, modelName: 'privateRoom' }
);

module.exports = PrivateRoom;