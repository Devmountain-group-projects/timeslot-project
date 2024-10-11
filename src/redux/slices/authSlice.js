const inittalState = {
  userId: null,
  role: null,
  loggedIn: false,
};

const authReducer = (state = inittalState, action) => {
  switch (action.type) {
    case "USER_LOGOUT":
      console.log("Reducer has logged out a user");
      return {
        ...state,
        loggedIn: false,
      };

    case "USER_LOGIN":
      console.log("Reducer has logged in a user");
      return {
        ...state,
        loggedIn: true,
        role: "user"
      };

    case "BUSINESS_LOGIN":
        console.log("Reducer has logged in a Business");
        return {
            ...state,
            loggedIn: true,
            role: "business"
        }

    default:
      console.log("DEFAULT");
      return state;
  }
};

export default authReducer;
