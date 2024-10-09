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
      userId: user.user_id,
      success: true,
    });
  }
};
