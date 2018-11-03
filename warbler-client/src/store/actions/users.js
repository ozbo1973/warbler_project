//actions users
import { EDIT_PROFILE, DELETE_PROFILE } from "../actionTypes";
import { addError } from "./errors";
import { apiCall } from "../../services/api";

export const editProfile = userData => {
  return {
    type: EDIT_PROFILE,
    userData
  };
};

export const deleteProfile = id => {
  return {
    type: DELETE_PROFILE,
    id
  };
};

export const removeProfile = id => {
  return dispatch => {
    return apiCall("delete", `/api/users/${id}/profile`)
      .then(res => {
        dispatch(deleteProfile(id));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
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
