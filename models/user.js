const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class User extends Model {}

User.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: { isEmail: true }
        },
        phone: { type: Sequelize.STRING, unique: true },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            get() {
                return null;
            }
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    { sequelize, modelName: 'user' }
);

module.exports = User;
