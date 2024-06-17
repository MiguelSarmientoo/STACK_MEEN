const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Laboratorio = sequelize.define('Laboratorio', {
    CodLab: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    razonSocial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contacto: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Laboratorio',
    timestamps: false
});

module.exports = Laboratorio;
