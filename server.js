const express = require('express');
const pg = require('pg');

const PORT = process.env.PORT || 3333;
const app = express();
const db = require('./database/db');

// Controller imports
const menuController = require('./controllers/menu/index');

// Other pre-request middleware
app.use(express.json());
app.use(express.static('client'));

app.get('/', (req, res) => {
    res.send('Welcome to Aka Izakaya');
});

// Controllers
app.use('/api/menu', menuController);

app.listen(PORT, () => {
    console.log(`Access app via http://localhost:${PORT}/ - Server listening on port: ${PORT}`);
});
