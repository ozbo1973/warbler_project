import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Typography className={classes.nav_Brand} component={Link} to="/">
              Warbler Logo Here
            </Typography>
            <div className="nav-buttons">
              <Button className={classes.nav_btn} component={Link} to="/signup">
                SignUp
              </Button>{" "}
              <Button className={classes.nav_btn} component={Link} to="/signin">
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

export default withStyles(NavbarCss, connect(mapStateToProps))(Navbar);
