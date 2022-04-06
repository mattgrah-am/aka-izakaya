const db = require("../database/db");

const Menu = {
  getAll: () => {
    const query = "SELECT * FROM menu";
    return db.query(query).then((response) => {
      return response.rows;
    });
  },
  getByCategory: (category) => {
    const query = `SELECT * FROM menu WHERE category = $1`;
    return db.query(query, [category]).then((response) => {
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
  create: ({ name, price, type, description, category }) => {
    const query = `INSERT INTO menu (name, price,type,description, category) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    return db
      .query(query, [name, price, type, description, category])
      .then((response) => {
        return response.rows ? response.rows[0] : {};
      });
  },
  update: (id, name, price, type, description, category) => {
    const query = `UPDATE menu SET name = $1, price = $2, type = $3, description = $4, category = $5 WHERE id = $6 RETURNING *`;
    return db
      .query(query, [name, price, type, description, category, id])
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
