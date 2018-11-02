//actions users
import { EDIT_PROFILE } from "../actionTypes";
import { addError } from "./errors";
import { apiCall } from "../../services/api";

export const editProfile = userData => {
  return {
    type: EDIT_PROFILE,
    userData
  };
};

export const updateProfile = userData => {
  return dispatch => {
    return apiCall("put", `/api/users/${userData.id}/profile`, userData)
      .then(res => {
        dispatch(editProfile(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};
