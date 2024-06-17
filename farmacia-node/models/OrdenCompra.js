const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Laboratorio = require('./Laboratorio');

const OrdenCompra = sequelize.define('OrdenCompra', {
    NroOrdenC: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaEmision: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Situacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    CodLab: {
        type: DataTypes.INTEGER,
        references: {
            model: Laboratorio,
            key: 'CodLab'
        }
    },
    NrofacturaProv: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'OrdenCompra',
    timestamps: false
});

module.exports = OrdenCompra;
