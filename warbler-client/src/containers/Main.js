import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeError } from "../store/actions/errors";
import { authUser } from "../store/actions/auth";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import MessageForm from "../components/MessageForm";
import EditProfileForm from "../components/EditProfileForm";
import DeleteProfile from "../components/DeleteProfile";
import withAuth from "../hocs/withAuth";

const Main = props => {
  let { authUser, errors, currentUser } = props;
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/signin"
          render={props => (
            <AuthForm
              removeError={removeError}
              buttonText="Log In"
              heading="Welcome Back"
              onAuth={authUser}
              error={errors}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <AuthForm
              removeError={removeError}
              buttonText="Sign Me Up"
              heading="Join Today"
              signup
              onAuth={authUser}
              error={errors}
              {...props}
            />
          )}
        />
        <Route exact path="/new_message" component={withAuth(MessageForm)} />
        <Route
          exact
          path="/users/profile"
          component={withAuth(EditProfileForm)}
        />
        <Route
          exact
          path="/users/profile/delete"
          component={withAuth(DeleteProfile)}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
