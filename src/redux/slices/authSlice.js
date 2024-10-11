const initialState = {
  userId: null,
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

    case 'USER_LOGIN':
      console.log('Reducer has logged in the user');
      return {
        ...state,
        loggedIn: true,
      };

    default:
      console.log('DEFAULT');
      return state;
  }
};

export default userReducer;
