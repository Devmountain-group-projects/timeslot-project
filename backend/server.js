// Imports
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import session from "express-session";
import ViteExpress from "vite-express";
import { google } from "googleapis";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

dotenv.config();

// Express Setup
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(fileUpload());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(
    session({
        secret: "keyboard warrior",
        resave: false,
        saveUninitialized: true,
    }),
);

// Database and seed data
import db from "./models/db.js";
import { createPermissions } from "./seeds/permissionSeed.js";
import { createRoles } from "./seeds/roleSeed.js";
import { createUsers } from "./seeds/userSeed.js";
import { createBusiness } from "./seeds/businessSeed.js";

db.sequelize.sync({ force: true }).then(async function () {
    console.log("Database successfully created");
    try {
        await createPermissions(db).then(() =>
            console.log("Permissions successfully created"),
        );
        await createRoles(db).then(() => console.log("Roles successfully created"));
        await createBusiness(db).then(() =>
            console.log("Businesses successfully created"),
        );
        await createUsers(db).then(() => console.log("Users successfully created"));
    } catch (err) {
        console.error("Error during seeding:", err);
    }

    app.set("db", db);

    ViteExpress.config({ printViteDevServerHost: true });
    ViteExpress.listen(app, 5539, () =>
        console.log("Server running on http://localhost:5539"),
    );
});

// google auth
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI,
);
if (process.env.REFRESH_TOKEN) {
    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN,
    });
} else {
    console.warn("No refresh token found. Please obtain a refresh token.");
}

// Routes
import appointment from "./routes/appointmentRoutes.js";
import auth from "./routes/authRoutes.js";
import business from "./routes/businessRoutes.js";
import client from "./routes/clientRoutes.js";
import googleRoutes from "./routes/googleRoutes.js";

// Apply middleware in server.js or equivalent
app.use(googleRoutes);
app.use("/api/appointments", appointment);
app.use("/api/auth", auth);
app.use("/api/business", business);
app.use("/api/client", client);
