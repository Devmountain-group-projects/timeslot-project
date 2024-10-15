import {Sequelize} from "sequelize";
// environment setup for db. Sets the db name and other configs
import config from "../config.json" with {type: "json"};

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
import {Permission} from "./permission.js";
import {Role} from "./role.js";
import {RolePermission} from "./rolePermission.js";
import {User} from "./user.js";
import {UserBusiness} from "./userBusiness.js";
import {Appointment} from "./appointment.js";
import {Availability} from "./availability.js";
import {Business} from "./business.js";
import {Conversation} from "./conversation.js";
import {ConversationUser} from "./conversationUser.js";
import {ConversationMessage} from "./conversationMessage.js";
import {Service} from "./service.js";
import {Review} from "./review.js";
import {Image} from "./image.js";
import {ImageUser} from "./imageUser.js";
import {ImageBusiness} from "./imageBusiness.js";

// Associating models for use in the db
const permission = Permission(sequelize, Sequelize.DataTypes);
const role = Role(sequelize, Sequelize.DataTypes);
const rolePermission = RolePermission(sequelize, Sequelize.DataTypes);
const user = User(sequelize, Sequelize.DataTypes);
const business = Business(sequelize, Sequelize.DataTypes);
const userBusiness = UserBusiness(sequelize, Sequelize.DataTypes);
const appointment = Appointment(sequelize, Sequelize.DataTypes);
const availability = Availability(sequelize, Sequelize.DataTypes);
const conversation = Conversation(sequelize, Sequelize.DataTypes);
const conversationUser = ConversationUser(sequelize, Sequelize.DataTypes);
const conversationMessage = ConversationMessage(sequelize, Sequelize.DataTypes);
const service = Service(sequelize, Sequelize.DataTypes);
const review = Review(sequelize, Sequelize.DataTypes);
const image = Image(sequelize, Sequelize.DataTypes);
const imageUser = ImageUser(sequelize, Sequelize.DataTypes);
const imageBusiness = ImageBusiness(sequelize, Sequelize.DataTypes);


// Storing the models in the db object
db[permission.name] = permission;
db[role.name] = role;
db[rolePermission.name] = rolePermission;
db[user.name] = user;
db[business.name] = business;
db[userBusiness.name] = userBusiness;
db[appointment.name] = appointment;
db[availability.name] = availability;
db[conversation.name] = conversation;
db[conversationUser.name] = conversationUser;
db[conversationMessage.name] = conversationMessage;
db[service.name] = service;
db[review.name] = review;
db[image.name] = image;
db[imageUser.name] = imageUser;
db[imageBusiness.name] = imageBusiness;


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


