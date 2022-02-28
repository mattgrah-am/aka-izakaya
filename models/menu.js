const db = require('../database/db');

const Menu = {
    getAll: () => {
        const query = 'SELECT * FROM menu';
        return db.query(query).then((response) => {
            return response.rows;
        });
    },
    getByType: (type) => {
        const query = `SELECT * FROM menu WHERE type = $1`;
        return db.query(query, [type]).then((response) => {
            return response.rows;
        });
    },
    getById: (id) => {
        const query = `SELECT * FROM menu WHERE id = $1`;
        return db.query(query, [id]).then((response) => {
            return response.rows ? response.rows[0] : {};
        });
    },
};

module.exports = Menu;
