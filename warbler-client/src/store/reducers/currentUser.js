//reducers/currentUser file.
import { SET_CURRENT_USER, EDIT_PROFILE } from "../actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
    case EDIT_PROFILE:
      return { ...state, user: action.userData };
    default:
      return { ...state };
  }
}
