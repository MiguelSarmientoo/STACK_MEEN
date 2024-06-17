const express = require('express');
const router = express.Router();
const OrdenCompra = require('../models/OrdenCompra');

// Obtener todas las órdenes de compra
router.get('/', async (req, res) => {
    try {
        const ordenesCompra = await OrdenCompra.findAll();
        res.json(ordenesCompra);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Crear una nueva orden de compra
router.post('/', async (req, res) => {
    try {
        const nuevaOrdenCompra = await OrdenCompra.create(req.body);
        res.status(201).json(nuevaOrdenCompra);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obtener una orden de compra por ID
router.get('/:id', async (req, res) => {
    try {
        const ordenCompra = await OrdenCompra.findByPk(req.params.id);
        if (ordenCompra) {
            res.json(ordenCompra);
        } else {
            res.status(404).send('Orden de compra no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Actualizar una orden de compra
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await OrdenCompra.update(req.body, {
            where: { NroOrdenC: req.params.id }
        });
        if (updated) {
            const updatedOrdenCompra = await OrdenCompra.findByPk(req.params.id);
            res.json(updatedOrdenCompra);
        } else {
            res.status(404).send('Orden de compra no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Eliminar una orden de compra
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await OrdenCompra.destroy({
            where: { NroOrdenC: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Orden de compra no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
