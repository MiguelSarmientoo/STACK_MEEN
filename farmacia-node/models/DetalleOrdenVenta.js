const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const OrdenVenta = require('./OrdenVenta');
const Medicamento = require('./Medicamento');

const DetalleOrdenVenta = sequelize.define('DetalleOrdenVenta', {
    NroOrdenVta: {
        type: DataTypes.INTEGER,
        references: {
            model: OrdenVenta,
            key: 'NroOrdenVta'
        }
    },
    CodMedicamento: {
        type: DataTypes.INTEGER,
        references: {
            model: Medicamento,
            key: 'CodMedicamento'
        }
    },
    descripcionMed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidadRequerida: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'DetalleOrdenVenta',
    timestamps: false
});

module.exports = DetalleOrdenVenta;
