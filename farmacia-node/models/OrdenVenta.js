const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const OrdenVenta = sequelize.define('OrdenVenta', {
    NroOrdenVta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaEmision: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Motivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Situacion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'OrdenVenta',
    timestamps: false
});

module.exports = OrdenVenta;
