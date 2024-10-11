import bcryptjs from "bcryptjs";
import * as crypto from "node:crypto";
import dotenv from "dotenv";
dotenv.config();

// Test Route
export const test = (req, res) => {
  res.send({
    message: "Auth controller works",
    success: true,
    session: req.session
  });
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
    req.session.userID = user.user_id;

    return res.send({
      message: "Hit login",
      userId: user,
      success: true,
    });
  }
};

// Register Route
export const register = async (req,res) => {
  const db = req.app.get("db")

  const { name, email, phone, password } = req.body
  const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))

  console.log(req.body)

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
      phone,
      password_hash: hashedPassword,
      profile_picture: "Default"
    })

    console.log(newUser)

    return res.send({
      message: "Temp endpoint",
      success: true,
      newUserInfo: newUser
    })
  }

  
}
