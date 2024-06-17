const express = require('express');
const router = express.Router();
const Laboratorio = require('../models/Laboratorio');

// Obtener todos los laboratorios
router.get('/', async (req, res) => {
    try {
        const laboratorios = await Laboratorio.findAll();
        res.json(laboratorios);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Crear un nuevo laboratorio
router.post('/', async (req, res) => {
    try {
        const nuevoLaboratorio = await Laboratorio.create(req.body);
        res.status(201).json(nuevoLaboratorio);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obtener un laboratorio por ID
router.get('/:id', async (req, res) => {
    try {
        const laboratorio = await Laboratorio.findByPk(req.params.id);
        if (laboratorio) {
            res.json(laboratorio);
        } else {
            res.status(404).send('Laboratorio no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Actualizar un laboratorio
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Laboratorio.update(req.body, {
            where: { CodLab: req.params.id }
        });
        if (updated) {
            const updatedLaboratorio = await Laboratorio.findByPk(req.params.id);
            res.json(updatedLaboratorio);
        } else {
            res.status(404).send('Laboratorio no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Eliminar un laboratorio
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Laboratorio.destroy({
            where: { CodLab: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Laboratorio no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
