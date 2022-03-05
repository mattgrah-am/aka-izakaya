const express = require("express");
const Menu = require("../../models/menu");

const router = express.Router();

router.get("/", (req, res) => {
  Menu.getAll().then((response) => {
    res.json(response);
  });
});

router.get("/:id([0-9]+)", (req, res) => {
  Menu.getById(req.params.id).then((response) => {
    res.json(response);
  });
});

router.get("/:category", (req, res) => {
  Menu.getByCategory(req.params.category).then((response) => {
    res.json(response);
  });
});

router.post("/", (req, res) => {
  Menu.create(req.body).then((response) => {
    res.status(201).json(response);
  });
});

router.put("/:id", (req, res) => {
  const { id, name, price, type, description, category } = req.body;
  Menu.update(id, name, price, type, description, category).then(() => {
    res.json({ message: "Item updated" });
  });
});

router.delete("/:id", (req, res) => {
  Menu.delete(req.params.id).then((response) => {
    if (response) {
      res.json({ status: true, message: "Item deleted" });
    }
  });
});

module.exports = router;
