const express = require('express');
const router = express.Router();
const OrdenVenta = require('../models/OrdenVenta');

// Obtener todas las órdenes de venta
router.get('/', async (req, res) => {
    try {
        const ordenesVenta = await OrdenVenta.findAll();
        res.json(ordenesVenta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Crear una nueva orden de venta
router.post('/', async (req, res) => {
    try {
        const nuevaOrdenVenta = await OrdenVenta.create(req.body);
        res.status(201).json(nuevaOrdenVenta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obtener una orden de venta por ID
router.get('/:id', async (req, res) => {
    try {
        const ordenVenta = await OrdenVenta.findByPk(req.params.id);
        if (ordenVenta) {
            res.json(ordenVenta);
        } else {
            res.status(404).send('Orden de venta no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Actualizar una orden de venta
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await OrdenVenta.update(req.body, {
            where: { NroOrdenVta: req.params.id }
        });
        if (updated) {
            const updatedOrdenVenta = await OrdenVenta.findByPk(req.params.id);
            res.json(updatedOrdenVenta);
        } else {
            res.status(404).send('Orden de venta no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Eliminar una orden de venta
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await OrdenVenta.destroy({
            where: { NroOrdenVta: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Orden de venta no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
