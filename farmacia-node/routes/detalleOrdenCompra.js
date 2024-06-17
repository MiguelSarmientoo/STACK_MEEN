const express = require('express');
const router = express.Router();
const DetalleOrdenCompra = require('../models/DetalleOrdenCompra');

// Obtener todos los detalles de las órdenes de compra
router.get('/', async (req, res) => {
    try {
        const detallesOrdenCompra = await DetalleOrdenCompra.findAll();
        res.json(detallesOrdenCompra);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Crear un nuevo detalle de orden de compra
router.post('/', async (req, res) => {
    try {
        const nuevoDetalleOrdenCompra = await DetalleOrdenCompra.create(req.body);
        res.status(201).json(nuevoDetalleOrdenCompra);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obtener un detalle de orden de compra por ID
router.get('/:id', async (req, res) => {
    try {
        const detalleOrdenCompra = await DetalleOrdenCompra.findByPk(req.params.id);
        if (detalleOrdenCompra) {
            res.json(detalleOrdenCompra);
        } else {
            res.status(404).send('Detalle de orden de compra no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Actualizar un detalle de orden de compra
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await DetalleOrdenCompra.update(req.body, {
            where: { NroOrdenC: req.params.id }
        });
        if (updated) {
            const updatedDetalleOrdenCompra = await DetalleOrdenCompra.findByPk(req.params.id);
            res.json(updatedDetalleOrdenCompra);
        } else {
            res.status(404).send('Detalle de orden de compra no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Eliminar un detalle de orden de compra
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await DetalleOrdenCompra.destroy({
            where: { NroOrdenC: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Detalle de orden de compra no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
