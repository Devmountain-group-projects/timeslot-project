import bcryptjs from "bcryptjs";
import * as crypto from "node:crypto";
import dotenv from "dotenv";
dotenv.config();

// User check Route
export const userCheck = async (req, res) => {
  const db = req.app.get("db");
  const id = req.session.userId
  console.log("Session: ", req.session)
  if(req.session.userId) {
    const user = await db.user.findOne({ where: { user_id: id } });
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
export const register = async (req,res) => {
  const db = req.app.get("db")
  console.log("Req.body: ", req.body)
  console.log("Req: ", req.body.userData)

  const { name, email, phoneNumber, password } = req.body.userData
  const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))


  if (!req.body.registerData) {


    if (await db.user.findOne({ where: { email: email}})) {
      console.log("Email aready exists")
      return res.send({
        message: "Email already exists",
        success: false
      })
    } else {
      console.log("Creating a new User")

      const newUser = await db.user.create({
        name,
        email,
        phone: phoneNumber,
        role_id: 1,
        password_hash: hashedPassword,
        profile_picture: "Default"
      })

      console.log(newUser)
      req.session.userId = newUser.user_id;
      req.session.name = newUser.name;

      return res.send({
        message: "New User created",
        success: true,
        newUserInfo: newUser
      })
    }
  } else {
    const { businessName, address_line1, address_line2, city, zipCode, contactInfo } = req.body.registerData
    const { website, serviceName, serviceDescription, serviceDuration, servicePrice, availability } = req.body.detailsData
    console.log("businessName: ", businessName)
    console.log("registerData", req.body.registerData)
    console.log("detailsData", req.body.detailsData)
    console.log(await db.business.findOne( { where: { business_name: businessName } } ))

    if ((!await db.business.findOne( { where: { business_name: businessName } } )) === null && await db.user.findOne({ where: { email: email}}) === null) {
      console.log("Business Already exists")
      return res.send({
        message: "Failed to create New Business",
        success: false,
      })
    } else {

      console.log("Creating a new User")

      const newUser = await db.user.create({
        name,
        email,
        phone: phoneNumber,
        role_id: 3,
        password_hash: hashedPassword,
        profile_picture: "Default"
      })

      console.log("Create Business")
      const newBusiness = db.business.create({
        business_name: businessName,
        description: serviceDescription,
        address_line1,
        address_line2,
        city,
        state: "Utah",
        zip_code: zipCode,
        email,
        phone: contactInfo,
        website,
      })
      return res.send({
        message: "New Business created",
        success: true,
        newBusiness,
        newUser,
      })
    }
    
  }
  

  console.log("This Test shouldn't show up")

  
}

// Register Logout
export const logout = async (req, res) => {
  if (!req.session.userId) {
      res.status(401).json({ error: "Unauthorized" });
      console.log("Logout Failed");
      console.log("req.session.userId: ", req.session.userId);
    } else {
      req.session.destroy()
      res.send({
        message: "User Logged out",
        success: true,
      })
    }
}