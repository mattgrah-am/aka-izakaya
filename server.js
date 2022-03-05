if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// App requirements
const express = require('express');
const app = express();
const db = require('./database/db');
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
const PORT = process.env.PORT || 3333;

// Controller imports
const menuController = require('./controllers/menu/index');
const sessionsController = require('./controllers/session/index');
const usersController = require('./controllers/user/index');
const contactController = require('./controllers/contact');
const logger = require('./middleware/logger');

// Handlers
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
app.use('/api/contact', contactController);

app.listen(PORT, () => {
    console.log(`Access app via http://localhost:${PORT}/ - Server listening on port: ${PORT}`);
});
