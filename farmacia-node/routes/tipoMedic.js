//tipoMedic.js

const express = require('express');
const router = express.Router();
const TipoMedic = require('../models/TipoMedic');

// Obtener todos los tipos de medicamento
router.get('/', async (req, res) => {
    try {
        const tiposMedic = await TipoMedic.findAll();
        res.json(tiposMedic);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Crear un nuevo tipo de medicamento
router.post('/', async (req, res) => {
    try {
        const nuevoTipoMedic = await TipoMedic.create(req.body);
        res.status(201).json(nuevoTipoMedic);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obtener un tipo de medicamento por ID
router.get('/:id', async (req, res) => {
    try {
        const tipoMedic = await TipoMedic.findByPk(req.params.id);
        if (tipoMedic) {
            res.json(tipoMedic);
        } else {
            res.status(404).send('Tipo de medicamento no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Actualizar un tipo de medicamento
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await TipoMedic.update(req.body, {
            where: { CodTipoMed: req.params.id }
        });
        if (updated) {
            const updatedTipoMedic = await TipoMedic.findByPk(req.params.id);
            res.json(updatedTipoMedic);
        } else {
            res.status(404).send('Tipo de medicamento no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Eliminar un tipo de medicamento
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await TipoMedic.destroy({
            where: { CodTipoMed: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Tipo de medicamento no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
