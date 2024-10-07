// Imports
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';
import ViteExpress from 'vite-express';

// Express Setup
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
    bodyParser.urlencoded({
        extended: true
    }),
)
app.use(
    session({
        secret: 'keyboard warrior',
        resave: false,
        saveUninitialized: true
    })
)

// Database and seed data
import db from './config/db.js';

db.sequelize.sync({ force: true }).then(async function () {
    console.log("Database successfully created");
// Sample db data
    // try {
    //     // create temp data for testing, remove after testing is done
    //     await createUser(db).then(() =>
    //         console.log("Permissions successfully created"),
    //     );
    //
    // } catch (err) {
    //     console.error("Error during seeding:", err);
    // }

    app.set("db", db);

    ViteExpress.config({ printViteDevServerHost: true });
    ViteExpress.listen(app, 5539, () =>
        console.log("Server running on http://localhost:5539"),
    );
});

// Routes
// import appointment from './routes/appointmentRoutes.js';
// import auth from './routes/authRoutes.js';
// import business from './routes/businessRoutes.js';
// import contact from './routes/contactRoutes.js';