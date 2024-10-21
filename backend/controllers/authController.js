import bcryptjs from "bcryptjs";
import * as crypto from "node:crypto";
import dotenv from "dotenv";
dotenv.config();

// User check Route
export const userCheck = async (req, res) => {
  const db = req.app.get("db");
  const id = req.session.userId;
  console.log("Session: ", req.session);
  if (req.session.userId) {
    const user = await db.user.findOne({
      where: { user_id: id },
      include: {
        model: db.business,
        as: "business",
      },
    });
    res.send({
      message: "User logged in",
      success: true,
      user,
    });
  } else {
    res.send({
      message: "No user logged in",
      success: false,
    });
  }
};

// Login Route
export const login = async (req, res) => {
  const db = req.app.get("db");

  const { email, password } = req.body;

  const user = await db.user.findOne({ where: { email: email } });
  const business = await db.business.findOne({ where: { email: email } });

  if (!user || !bcryptjs.compareSync(password, user.password_hash)) {
    return res.send({
      message: "Bad login",
      success: false,
    });
  } else {
    req.session.userId = user.user_id;
    req.session.name = user.name;

    return res.send({
      message: "Hit login",
      userId: user.id,
      success: true,
      userinfo: user,
    });
  }
};

// Register Route
export const register = async (req, res) => {
  const db = req.app.get("db");
  console.log("Req.body: ", req.body);
  console.log("Req: ", req.body.userData);

  const { name, email, phoneNumber, password } = req.body.userData;
  const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

  // Are they Registering a Business or a User
  if (!req.body.registerData) {
    // user

    if (await db.user.findOne({ where: { email: email } })) {
      console.log("Email aready exists");
      return res.send({
        message: "Email already exists",
        success: false,
      });
    } else {
      console.log("Creating a new User");

      const newUser = await db.user.create({
        name,
        email,
        phone: phoneNumber,
        role_id: 1,
        password_hash: hashedPassword,
        profile_picture: "Default",
      });

      console.log(newUser);
      req.session.userId = newUser.user_id;
      req.session.name = newUser.name;

      return res.send({
        message: "New User created",
        success: true,
        newUserInfo: newUser,
      });
    }
  } else {
    // business
    const {
      businessName,
      address_line1,
      address_line2,
      city,
      state,
      zipCode,
      contactInfo,
    } = req.body.registerData;
    const {
      website,
      serviceName,
      serviceDescription,
      serviceDuration,
      servicePrice,
      availability,
    } = req.body.detailsData;
    console.log("businessName: ", businessName);
    console.log("registerData", req.body.registerData);
    console.log("detailsData", req.body.detailsData);
    console.log(
      await db.business.findOne({ where: { business_name: businessName } })
    );

    // Does this Email already exist
    if (
      !(await db.business.findOne({
        where: { business_name: businessName },
      })) === null &&
      (await db.user.findOne({ where: { email: email } })) === null
    ) {
      console.log("Business Already exists");
      return res.send({
        message: "Failed to create New Business",
        success: false,
      });
    } else {
      console.log("Creating a new User and Business");

      const newUser = await db.user.create({
        name,
        email,
        phone: phoneNumber,
        role_id: 3,
        password_hash: hashedPassword,
        profile_picture: "Default",
      });
      console.log("New User: ", newUser);

      const newBusiness = await db.business.create({
        business_name: businessName,
        description: serviceName,
        address_line1,
        address_line2,
        city,
        state,
        zip_code: zipCode,
        email,
        phone: contactInfo,
        website,
      });
      console.log("New Business: ", newBusiness);

      req.session.userId = newUser.user_id;
      req.session.name = newUser.name;
      req.session.businessId = newBusiness.business_id;

      console.log("Connecting Business and User");

      const user = await db.user.findOne({ where: { email: email } });
      const business = await db.business.findOne({
        where: { business_name: businessName },
      });
      console.log("user", user);
      console.log("user_id", user.user_id);
      console.log("business", business);
      console.log("businessName", businessName);
      console.log("business_id", business.business_id);

      const connectBusiness = await db.user_business.create({
        user_id: user.user_id,
        business_id: business.business_id,
      });
      console.log("DB connection: ", connectBusiness);

      const newService = await db.service.create({
        business_id: business.business_id,
        name: serviceName,
        description: serviceDescription,
        duration: serviceDuration,
        price: servicePrice,
      });
      console.log("New Service: ", newService);

      console.log("Availability", availability.monday);
      for (const day in availability) {
        if (
          !(availability[day].start === "") &&
          !(availability[day].end === "")
        ) {
          const newAvailability = await db.availability.create({
            business_id: business.business_id,
            day_of_week: day,
            start_time: availability[day].start,
            end_time: availability[day].end,
          });
          console.log("Added ", day);
        }
      }

      return res.send({
        message: "New Business created",
        success: true,
      });
    }
  }
  console.log("This Test shouldn't show up");
};

// Register Logout
export const logout = async (req, res) => {
  if (!req.session.userId) {
    res.status(401).json({ error: "Unauthorized" });
    console.log("Logout Failed");
    console.log("req.session.userId: ", req.session.userId);
  } else {
    req.session.destroy();
    res.send({
      message: "User Logged out",
      success: true,
    });
  }
};
