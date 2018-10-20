import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavbarCss from "../styles/NavbarCss";

class Navbar extends Component {
  render() {
    let { classes, currentUser } = this.props;
    return (
      <div>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Typography
              className={classes.nav_Brand}
              onClick={() => this.props.history.push("/")}
            >
              Warbler Logo Here
            </Typography>
            <div className="nav-buttons">
              <Button
                onClick={() => this.props.history.push("/signup")}
                color="inherit"
              >
                SignUp
              </Button>{" "}
              <Button
                onClick={() => this.props.history.push("/signin")}
                color="inherit"
              >
                LogIn
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default withRouter(
  withStyles(NavbarCss, connect(mapStateToProps))(Navbar)
);
