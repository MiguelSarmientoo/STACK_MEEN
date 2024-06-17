const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const OrdenCompra = require('./OrdenCompra');
const Medicamento = require('./Medicamento');

const DetalleOrdenCompra = sequelize.define('DetalleOrdenCompra', {
    NroOrdenC: {
        type: DataTypes.INTEGER,
        references: {
            model: OrdenCompra,
            key: 'NroOrdenC'
        }
    },
    CodMedicamento: {
        type: DataTypes.INTEGER,
        references: {
            model: Medicamento,
            key: 'CodMedicamento'
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    montouni: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'DetalleOrdenCompra',
    timestamps: false
});

module.exports = DetalleOrdenCompra;
