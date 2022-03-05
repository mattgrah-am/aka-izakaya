const express = require('express');
const Users = require('../../models/user');
const bcrypt = require('bcrypt');

const router = express.Router();

// Routes
// 1. Create Session (login)
router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    Users.getByEmail(email).then((emailResponse) => {
        // Check the password (and/or email)
        // if it is correct

        if (
            email === emailResponse.email &&
            password === emailResponse.password
        ) {
            req.session.email = email;
            res.status(200).json({ email: email });
        } else {
            res.status(400).json({
                message: 'Incorrect email or password',
            });
        }
    });
});

// 2. Get Session
router.get('/', (req, res) => {
    // If Logged in Check
    if (req.session.email) {
        res.json({
            email: req.session.email,
        });
    } else {
        // 401 - Unauthorised
        res.status(401).json({
            message: 'Not logged in.',
        });
    }
});

// 3. Delete Sessions (logout)
router.delete('/', (req, res) => {
    req.session.destroy();
    res.json({
        message: 'Logged out.',
    });
});

module.exports = router;
