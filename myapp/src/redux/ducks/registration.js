const ADD_USER = "addUser";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

const initialState = {
  usersDatabase: [],
};

const registrationActions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersDatabase: [...state.usersDatabase, action.payload],
      };
    default:
      return state;
  }
};

export default registrationActions;
