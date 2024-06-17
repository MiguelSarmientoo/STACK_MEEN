const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const TipoMedic = require('./TipoMedic');
const Especialidad = require('./Especialidad');

const Medicamento = sequelize.define('Medicamento', {
    CodMedicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcionMed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaFabricacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaVencimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Presentacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioVentaUni: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    precioVentaPres: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    CodTipoMed: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoMedic,
            key: 'CodTipoMed'
        }
    },
    Marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CodEspec: {
        type: DataTypes.INTEGER,
        references: {
            model: Especialidad,
            key: 'CodEspec'
        }
    }
}, {
    tableName: 'Medicamento',
    timestamps: false
});

module.exports = Medicamento;
