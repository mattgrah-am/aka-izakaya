const db = require('../database/db');

const Contact = {
    getAll: () => {
        const query = 'SELECT * FROM contact';
        return db.query(query).then((response) => {
            return response.rows;
        });
    },
    getById: (id) => {
        const query = 'SELECT * FROM contact WHERE id = $1';
        return db.query(query, [id]).then((response) => {
            return response.rows[0];
        });
    },
    create: ({ name, email, enquiry }) => {
        const query = `INSERT INTO contact (name, email, enquiry) VALUES ($1, $2, $3) RETURNING *`;
        return db.query(query, [name, email, enquiry]).then((response) => {
            return response.rows ? response.rows[0] : {};
        });
    },
    delete: (id) => {
        const query = 'DELETE FROM contact WHERE id = $1';
        return db.query(query, [id]).then(() => {
            return true;
        });
    },
};

module.exports = Contact;
