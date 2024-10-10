import axios from "axios";

export async function login(email, password) {
  const res = await axios.post("/api/auth/login", {
    email: email,
    password: password,
  });

  if (res.data.success) {
    console.log("Login Successful");
  }
  return res;
}

