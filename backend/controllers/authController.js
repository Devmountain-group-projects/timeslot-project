
import dotenv from "dotenv";
dotenv.config();

// Test Route
export const test = (req, res) => {
    res.send({
        message: "Auth controller works",
        success: true,
    });
};

// Login Route
export const login = (req,res) => {
    res.send({
        message: "Hit login",
        success: true
    })
}
