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

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    let { classes, currentUser } = this.props;
    return (
      <div>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Typography className={classes.nav_Brand} component={Link} to="/">
              Warbler Logo Here
            </Typography>
            {currentUser.isAuthenticated ? (
              <div className="nav-buttons">
                <Button
                  className={classes.nav_btn}
                  component={Link}
                  to={"/new_message"}
                >
                  New Message
                </Button>
                <Button onClick={this.logout} className={classes.nav_btn}>
                  Log Out
                </Button>
              </div>
            ) : (
              <div className="nav-buttons">
                <Button
                  className={classes.nav_btn}
                  component={Link}
                  to="/signup"
                >
                  SignUp
                </Button>{" "}
                <Button
                  className={classes.nav_btn}
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
