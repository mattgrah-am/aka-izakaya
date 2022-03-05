if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const pg = require('pg');

const PORT = process.env.PORT || 3333;
const app = express();

const db = require('./database/db');

const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
// Controller imports
const menuController = require('./controllers/menu/index');
const sessionsController = require('./controllers/session/index');
const usersController = require('./controllers/user/index');
const logger = require('./middleware/logger');

// handlers
app.use(
    expressSession({
        store: new pgSession({
            pool: db, // Connects to our postgres db
            createTableIfMissing: true, // Creates a session table in your database (go look at it!)
        }),
        secret: process.env.SESSION_SECRET, // Needs a secret key to keep session data secure
        resave: false,
        saveUninitialized: false,
    })
);

// Other pre-request middleware
app.use(logger);
app.use(express.json());
app.use(express.static('client'));

app.get('/', (req, res) => {
    res.send('Welcome to Aka Izakaya');
});

// Controllers
app.use('/api/menu', menuController);
app.use('/api/session', sessionsController);
app.use('/api/user', usersController);

app.listen(PORT, () => {
    console.log(
        `Access app via http://localhost:${PORT}/ - Server listening on port: ${PORT}`
    );
});
