import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavbarCss from "../styles/NavbarCss";
import logoImg from "../images/warbler-logo.png";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    let { classes, currentUser } = this.props;
    return (
      <div>
        <AppBar className={classes.nav_root} position="static">
          <Toolbar>
            <Typography
              align="center"
              className={classes.nav_Brand}
              component={Link}
              to="/"
            >
              <img className={classes.logo} src={logoImg} />
            </Typography>
            {currentUser.isAuthenticated ? (
              <div className={classes.nav_buttons}>
                <Button
                  className={`${classes.nav_btn} ${classes.bg_inherit}`}
                  component={Link}
                  to={"/new_message"}
                >
                  New Message
                </Button>
                <Button
                  onClick={this.logout}
                  className={`${classes.nav_btn} ${classes.bg_inherit}`}
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <div className={classes.nav_buttons}>
                <Button
                  className={`${classes.nav_btn} ${classes.bg_inherit}`}
                  component={Link}
                  to="/signup"
                >
                  SignUp
                </Button>{" "}
                <Button
                  className={`${classes.nav_btn} ${classes.bg_inherit}`}
                  component={Link}
                  to="/signin"
                >
                  LogIn
                </Button>
              </div>
            )}
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

export default connect(
  mapStateToProps,
  { logout }
)(withStyles(NavbarCss)(Navbar));
