const express = require('express');
const Users = require('../../models/user');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', (req, res, next) => {
    const user = req.body;
    // Note that the asynchronous version is preferred but we use Sync here for ease
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
    Users.create(user)
        .then((user) => {
            if (!user) {
                return res.status(500).json({
                    message: 'Something went wrong creating the user. Please try again.',
                });
            }
            req.session.userId = user.id;
            req.session.email = user.email;
            return res.json(user);
        })
        .catch((error) => {
            // When in an asynchronous code block, we have to call the next function
            // to handle the error
            next(error);
        });
});

module.exports = router;
