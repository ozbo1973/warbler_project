//actions/auth
import { apiCall } from "../../services/api.js";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    dispatch(setCurrentUser({}));
  };
};

export function authUser(type, userData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("jwtToken", token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch(err => {
          return dispatch(addError(err.message));
          reject();
        });
    });
  };
}
