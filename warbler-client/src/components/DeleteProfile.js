import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeProfile } from "../store/actions/users";

const DeleteProfile = ({ removeProfile, currentUser, history }) => {
  let userID = currentUser.user.id;
  return (
    <div>
      <h1>Delete Profile Confirm</h1>
      <h4>Are you sure you wish to Delete your Profile?</h4>
      <button
        onClick={() => {
          removeProfile(userID);
          history.push("/");
        }}
      >
        Delete
      </button>
      <Link to="/">Cancel</Link>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}
export default connect(
  mapStateToProps,
  { removeProfile }
)(DeleteProfile);
