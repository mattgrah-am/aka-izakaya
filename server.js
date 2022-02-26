const express = require("express");
const pg = require("pg");

const PORT = process.env.PORT || 3333;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Aka Izakaya");
});

app.listen(PORT, () => {
  console.log(
    `Access app via http://localhost:${PORT}/ - Server listening on port: ${PORT}`
  );
});
