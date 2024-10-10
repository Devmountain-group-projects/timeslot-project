import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        user: action.payload,
        isAthenticated: true,
      };
    default:
      throw new Error("Unkownown Action");
  }
}

function AuthProvider({ children }) {
  const [{ user }, dispatch] = useReducer(reducer, initialState, undefined);

  async function login(email, password) {
    const res = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });

    if (res.data.success) {
      console.log("Login Successful");
      // dispatchEvent({ type: "user/login", payload: res.data });
    }
    return res;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAthenticated,

        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    // throw new Error("Auth was used outside of AuthProvider ");

  return context;
}

export async function login(email, password) {
  const res = await axios.post("/api/auth/login", {
    email: email,
    password: password,
  });

  if (res.data.success) {
    console.log("Login Successful");
    // dispatchEvent({ type: "user/login", payload: res.data });
  }
  return res;
}

export { AuthProvider, useAuth };

// export default login
