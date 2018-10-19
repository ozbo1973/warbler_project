//reducers/currentUser file.
import { SET_CURRENT_USER } from "../actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {}
};

function rootReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
