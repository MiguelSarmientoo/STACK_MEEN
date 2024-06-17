const express = require('express');
const router = express.Router();
const DetalleOrdenVenta = require('../models/DetalleOrdenVenta');

// Obtener todos los detalles de las órdenes de venta
router.get('/', async (req, res) => {
    try {
        const detallesOrdenVenta = await DetalleOrdenVenta.findAll();
        res.json(detallesOrdenVenta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Crear un nuevo detalle de orden de venta
router.post('/', async (req, res) => {
    try {
        const nuevoDetalleOrdenVenta = await DetalleOrdenVenta.create(req.body);
        res.status(201).json(nuevoDetalleOrdenVenta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obtener un detalle de orden de venta por ID
router.get('/:id', async (req, res) => {
    try {
        const detalleOrdenVenta = await DetalleOrdenVenta.findByPk(req.params.id);
        if (detalleOrdenVenta) {
            res.json(detalleOrdenVenta);
        } else {
            res.status(404).send('Detalle de orden de venta no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Actualizar un detalle de orden de venta
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await DetalleOrdenVenta.update(req.body, {
            where: { NroOrdenVta: req.params.id }
        });
        if (updated) {
            const updatedDetalleOrdenVenta = await DetalleOrdenVenta.findByPk(req.params.id);
            res.json(updatedDetalleOrdenVenta);
        } else {
            res.status(404).send('Detalle de orden de venta no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Eliminar un detalle de orden de venta
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await DetalleOrdenVenta.destroy({
            where: { NroOrdenVta: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Detalle de orden de venta no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
