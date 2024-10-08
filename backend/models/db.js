import { Sequelize } from "sequelize";
// environment setup for db. Sets the db name and other configs
import config from "../config.json" with { type: "json" };

const env = "development";
const dbConfig = config[env];

// Initializing an empty object to store db models
const db = {};


// Create a new Sequelize instance, passing in the database name, username, and password
const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.email,
    dbConfig.password_hash,
    dbConfig,
);

// Importing models
import { User } from "./user.js";
import { Appointment } from "./appointment.js";
import { Availability } from "./availability.js";
import { Business } from "./business.js";
import { Notification } from "./notification.js";
import { Payment } from "./payment.js";
import { Review } from "./review.js";
import { Service } from "./service.js";

// Associating models for use in the db
const user = User(sequelize, Sequelize.DataTypes);
const appointment = Appointment(sequelize, Sequelize.DataTypes);
const availability = Availability(sequelize, Sequelize.DataTypes);
const business = Business(sequelize, Sequelize.DataTypes);
const notification = Notification(sequelize, Sequelize.DataTypes);
const payment = Payment(sequelize, Sequelize.DataTypes);
const review = Review(sequelize, Sequelize.DataTypes);
const service = Service(sequelize, Sequelize.DataTypes);

// Storing the models in the db object
db[user.name] = user;
db[appointment.name] = appointment;
db[availability.name] = availability;
db[business.name] = business;
db[notification.name] = notification;
db[payment.name] = payment;
db[review.name] = review;
db[service.name] = service;

// Setting up relationships between models
Object.keys(db).forEach((modelName) => {
    // check if the model has an associate method
    if (db[modelName].associate) {
        //   // if the model has an associate method, call it
        db[modelName].associate(db);
    }
});

// Exporting the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
