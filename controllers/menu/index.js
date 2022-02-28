const express = require('express');
const Menu = require('../../models/menu');

const router = express.Router();

router.get('/', (req, res) => {
    Menu.getAll().then((response) => {
        res.json(response);
    });
});

router.get('/:id([0-9]+)', (req, res) => {
    Menu.getById(req.params.id).then((response) => {
        res.json(response);
    });
});

router.get('/:type', (req, res) => {
    Menu.getByType(req.params.type).then((response) => {
        res.json(response);
    });
});

module.exports = router;
