import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGES } from "../actionTypes";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const fetchMessages = () => {
  return dispatch => {
    return apiCall("get", "/api/warbles")
      .then(res => {
        dispatch(loadMessages(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const postNewMessage = (text, history) => (dispatch, getState) => {
  let { currentUser } = getState();
  let id = currentUser.user.id;
  return apiCall("post", `api/users/${id}/warbles`, { text })
    .then(res => history.push("/"))
    .catch(err => dispatch(addError(err.message)));
};
