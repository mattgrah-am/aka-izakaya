const express = require('express');
const isLoggedIn = require('../../middleware/is_logged_in');
const Contact = require('../../models/contact');

const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
    Contact.getAll().then((response) => {
        res.json(response);
    });
});

router.get('/:id([0-9]+)', isLoggedIn, (req, res) => {
    Contact.getById(req.params.id).then((response) => {
        res.json(response);
    });
});

router.post('/', (req, res) => {
    Contact.create(req.body).then((response) => {
        res.status(201).json(response);
    });
});

router.patch('/', (req, res) => {
    Contact.markAsRead().then((response) => {
        res.json(response);
    });
});

router.delete('/:id([0-9]+)', isLoggedIn, (req, res) => {
    Contact.delete(req.params.id).then((response) => {
        if (response) {
            res.json({ status: true, message: 'Enquiry deleted!' });
        }
    });
});

module.exports = router;
