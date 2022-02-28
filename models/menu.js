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
    create: ({ name, price, type, category }) => {
        const query = `INSERT INTO menu (name, price,type, category) VALUES ($1, $2, $3, $4) RETURNING *`;
        return db
            .query(query, [name, price, type, category])
            .then((response) => {
                return response.rows ? response.rows[0] : {};
            });
    },
    update: (id, name, price, type, category) => {
        const query = `UPDATE menu SET name = $1, price = $2, type = $3, category = $4 WHERE id = $5 RETURNING *`;
        return db
            .query(query, [name, price, type, category, id])
            .then((response) => {
                return response.rows ? response.rows[0] : {};
            });
    },
    delete: (id) => {
        const query = `DELETE FROM menu WHERE id = $1`;
        return db.query(query, [id]).then(() => {
            return true;
        });
    },
};

module.exports = Menu;
