const express = require('express');
const router = express.Router();
const Especialidad = require('../models/Especialidad');

// Obtener todas las especialidades
router.get('/', async (req, res) => {
    try {
        const especialidades = await Especialidad.findAll();
        res.json(especialidades);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Crear una nueva especialidad
router.post('/', async (req, res) => {
    try {
        const nuevaEspecialidad = await Especialidad.create(req.body);
        res.status(201).json(nuevaEspecialidad);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obtener una especialidad por ID
router.get('/:id', async (req, res) => {
    try {
        const especialidad = await Especialidad.findByPk(req.params.id);
        if (especialidad) {
            res.json(especialidad);
        } else {
            res.status(404).send('Especialidad no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Actualizar una especialidad
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Especialidad.update(req.body, {
            where: { CodEspec: req.params.id }
        });
        if (updated) {
            const updatedEspecialidad = await Especialidad.findByPk(req.params.id);
            res.json(updatedEspecialidad);
        } else {
            res.status(404).send('Especialidad no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Eliminar una especialidad
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Especialidad.destroy({
            where: { CodEspec: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Especialidad no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
