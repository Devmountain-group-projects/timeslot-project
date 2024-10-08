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
import db from './models/db.js';
import { createUsers } from './seeds/userSeed.js';
import { createAppointments } from './seeds/appointmentSeed.js';
import { createAvailability } from './seeds/availabilitySeed.js';
import { createBusiness } from './seeds/businessSeed.js';
import { createNotification } from './seeds/notificationSeed.js';
import { createPayment } from './seeds/paymentSeed.js';
import { createReview } from './seeds/reviewSeed.js';
import { createService } from './seeds/serviceSeed.js';

db.sequelize.sync({ force: true }).then(async function () {
    console.log("Database successfully created");
    try {
        await createUsers(db).then(() =>
            console.log("Permissions successfully created"),
        );
        await createAppointments(db).then(() =>
            console.log("Appointments successfully created"),
        );
        await createAvailability(db).then(() =>
            console.log("Businesses successfully created"),
        );
        await createBusiness(db).then(() =>
            console.log("Contacts successfully created"),
        );
        await createNotification(db).then(() =>
            console.log("Notifications successfully created"),
        );
        await createPayment(db).then(() =>
            console.log("Payments successfully created"),
        );
        await createReview(db).then(() =>
            console.log("Reviews successfully created"),
        );
        await createService(db).then(() =>
            console.log("Services successfully created"),
        );
    } catch (err) {
        console.error("Error during seeding:", err);
    }

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