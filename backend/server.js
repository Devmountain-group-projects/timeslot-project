// Imports
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';
import ViteExpress from 'vite-express';
import {google} from "googleapis";
import dotenv from "dotenv";
dotenv.config();

// Express Setup
const app = express();


// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(
    bodyParser.urlencoded({
        extended: true
    }),
);
app.use(
    session({
        secret: 'keyboard warrior',
        resave: false,
        saveUninitialized: true
    })
);

// Database and seed data
import db from './models/db.js';
import {createUsers} from './seeds/userSeed.js';
import {createAppointments} from './seeds/appointmentSeed.js';
import {createAvailability} from './seeds/availabilitySeed.js';
import {createBusiness} from './seeds/businessSeed.js';
import {createNotification} from './seeds/notificationSeed.js';
// import { createPayment } from './seeds/paymentSeed.js';
// import { createReview } from './seeds/reviewSeed.js';
import {createService} from './seeds/serviceSeed.js';

db.sequelize.sync({force: true}).then(async function () {
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
        // await createPayment(db).then(() =>
        //     console.log("Payments successfully created"),
        // );
        // await createReview(db).then(() =>
        //     console.log("Reviews successfully created"),
        // );
        await createService(db).then(() =>
            console.log("Services successfully created"),
        );
    } catch (err) {
        console.error("Error during seeding:", err);
    }

    app.set("db", db);

    ViteExpress.config({printViteDevServerHost: true});
    ViteExpress.listen(app, 5539, () =>
        console.log("Server running on http://localhost:5539"),
    );
});

// google auth
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);
if (process.env.REFRESH_TOKEN) {
    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });
} else {
    console.warn('No refresh token found. Please obtain a refresh token.');
}

console.log('OAuth2 Client initialized with:', {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    refreshToken: process.env.REFRESH_TOKEN
});

app.get('/auth/google', (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/calendar.readonly'],
    });
    res.redirect(url);
});

app.get('/auth/google/redirect', (req, res) => {
    const {tokens} = oauth2Client.getToken(req.query.code);
    oauth2Client.setCredentials(tokens);
    res.redirect('/');
});

app.get('/auth/google/calendar', (req, res) => {
    const calendar = google.calendar({version: 'v3', auth: oauth2Client});
    calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length) {
            console.log('Upcoming 10 events:');
            events.map((event, i) => {
                const start = event.start.dateTime || event.start.date;
                console.log(`${start} - ${event.summary}`);
            });
        } else {
            console.log('No upcoming events found.');
        }
    });
    res.json(calendar)
});



// Routes
// import appointment from './routes/appointmentRoutes.js';
import auth from './routes/authRoutes.js';
// import business from './routes/businessRoutes.js';
// import contact from './routes/contactRoutes.js';


app.use("/api/auth", auth)