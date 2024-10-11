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
  const res = await axios.post("/api/auth/register", {
    name,
    email,
    phone,
    password,
  })

  if (res.data.success) {
    console.log("Register Successful");
  } else {
    console.log("Register failed")
  }
  return res;
  
}
