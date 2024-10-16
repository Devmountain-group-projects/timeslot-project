import axios from "axios";

export async function login(email, password) {
  const res = await axios.post("/api/auth/login", {
    email: email,
    password: password,
  });

  if (res.data.success) {
    console.log("Login Successful");
  } else {
    console.log("Login Failed")
  }
  return res;
}

export async function register(name, email, phone, password) {
  const res = await axios.post("/api/auth/register", { userData: {
    name,
    email,
    phoneNumber: phone,
    password,
  }})

  if (res.data.success) {
    console.log("Register Successful");
  } else {
    console.log("Register failed")
  }
  return res;
  
}

export async function businessRegister({ userData, registerData, detailsData }) {
  const res = await axios.post("/api/auth/register", {userData, registerData, detailsData})
  if (res.data.success) {
    console.log("Register Successful");
  } else {
    console.log("Register failed")
  }
  return res;
}

export async function userCheck() {
  const res = await axios.get("api/auth/userCheck")
  console.log("AuthContext: ", res)
  return res.data
}

export async function businessCheck() {
  
}

export async function userLogout() {
  const res = await axios.post("api/auth/logout")
  console.log("AuthContext: ", res)
  return res.data
}
