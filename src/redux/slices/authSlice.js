const initialState = {
  userId: null,
  role: null,
  loggedIn: false,
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGOUT':
      console.log('Reducer has logged out the user');
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
      console.log('DEFAULT');
      return state;
  }
};

export default authReducer;
