if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const path = require("path");

// App requirements
const express = require("express");
const app = express();
const db = require("./database/db");
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);
const PORT = process.env.PORT || 3333;

// Controller imports
const menuController = require("./controllers/menu/index");
const sessionsController = require("./controllers/session/index");
const usersController = require("./controllers/user/index");
const contactController = require("./controllers/contact");
const errorHandler = require("./middleware/error_handler");
const logger = require("./middleware/logger");

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
app.use(express.static(path.join(__dirname, "client")));
app.use(express.json());

// Controllers
app.use("/api/menu", menuController);
app.use("/api/session", sessionsController);
app.use("/api/user", usersController);
app.use("/api/contact", contactController);

// Post-request middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Access app via http://localhost:${PORT}/ - Server listening on port: ${PORT}`
  );
});
