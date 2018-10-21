import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";

const Main = props => {
  let { errors, currentUser } = props;
  return (
    <div>
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props} />} />
        <Route
          exact
          path="/signin"
          render={props => (
            <AuthForm buttonText="Log In" heading="Welcome Back" {...props} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <AuthForm
              buttonText="Sign Me Up"
              heading="Join Today"
              signup
              {...props}
            />
          )}
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

export default withRouter(connect(mapStateToProps)(Main));
