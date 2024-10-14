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
    req.session.userId = newUser.user_id;
    req.session.name = newUser.name;

    return res.send({
      message: "New User created",
      success: true,
      newUserInfo: newUser
    })
  }

  
}
