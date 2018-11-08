import React, { Component } from "react";
import { connect } from "react-redux";
import { toProperCase } from "../services/miscFX";
import ErrorMessage from "./ErrorMessage";
import { updateProfile } from "../store/actions/users";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MainFormCss from "../styles/MainFormCss";

class EditProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props.currentUser };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.updateProfile(this.state).then(() => {
      this.props.history.push("/");
    });
  };

  handleOnCancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    let { classes } = this.props;
    let fields = Object.keys(this.state).filter(k => k !== "id" && k !== "iat");
    let formFields = fields.map(ctrl => (
      <FormControl key={ctrl} className={classes.controls}>
        <InputLabel htmlFor={ctrl}>{toProperCase(ctrl)}:</InputLabel>
        <Input
          id={ctrl}
          name={ctrl}
          value={this.state[ctrl]}
          onChange={this.handleChange}
          type="text"
        />
      </FormControl>
    ));
    return (
      <Grid className={classes.form_root} container direction="column">
        <Paper className={classes.form_paper} elevation={1}>
          <form className={classes.form} onSubmit={this.handleOnSubmit}>
            <Typography className={classes.heading} gutterBottom variant={"h3"}>
              Edit Profile Form
            </Typography>
            {this.props.errors.message && (
              <ErrorMessage msg={this.props.errors.message} />
            )}

            {formFields}
            <Grid container justify="center">
              <Grid item>
                <Button
                  onClick={this.handleOnCancel}
                  type="button"
                  className={`${classes.btn} ${classes.form_btn_spacing}`}
                  size={"medium"}
                >
                  Cancel
                </Button>
                <Button
                  type={"submit"}
                  className={`${classes.btn} ${classes.form_btn_spacing}`}
                  size={"medium"}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser.user,
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { updateProfile }
)(withStyles(MainFormCss)(EditProfileForm));
