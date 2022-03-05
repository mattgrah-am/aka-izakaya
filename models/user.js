const db = require('../database/db');

const Users = {
    getById: (id) => {
        const query = 'SELECT * FROM users WHERE id = $1';
        return db.query(query, [id]).then((response) => {
            return response.rows && response.rows.length > 0 ? response.rows[0] : null;
        });
    },
    getByEmail: (email) => {
        const query = 'SELECT * FROM users WHERE email = $1';
        return db.query(query, [email]).then((response) => {
            return response.rows[0];
        });
    },
    create: ({ email, password, admin = false }) => {
        const query = 'INSERT INTO users (email, password, admin) VALUES($1, $2, $3) RETURNING *';
        return db.query(query, [email, password, admin]).then((response) => {
            return response.rows && response.rows.length > 0 ? response.rows[0] : null;
        });
    },
};

module.exports = Users;
