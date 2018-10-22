import React, { Component } from "react";
import ErrorMessage from "./ErrorMessage";
import { toProperCase } from "../services/miscFX";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import AuthFormCss from "../styles/AuthFormCss";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      profileImageURL: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    const authType = this.props.signup ? "signup" : "signin";
    this.props.onAuth(authType, this.state).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    let {
      buttonText,
      heading,
      classes,
      signup,
      error,
      removeError,
      history
    } = this.props;
    let whichKeys = signup ? Object.keys(this.state) : ["email", "password"];
    let inputs = whichKeys.map(ctrl => {
      let type = "text";
      if (ctrl === "password") {
        type = "password";
      }
      return (
        <FormControl key={ctrl} className={classes.controls}>
          <InputLabel htmlFor={ctrl}>{toProperCase(ctrl)}:</InputLabel>
          <Input
            id={ctrl}
            name={ctrl}
            value={this.state[ctrl]}
            onChange={this.handleChange}
            type={type}
          />
        </FormControl>
      );
    });
    history.listen(() => removeError());
    return (
      <div className={classes.form_root}>
        <Paper className={classes.paper} elevation={1}>
          <form className={classes.form} onSubmit={this.handleOnSubmit}>
            <Typography className={classes.heading} gutterBottom variant={"h3"}>
              {heading}
            </Typography>
            {error.message && <ErrorMessage msg={error.message} />}

            {inputs}

            <Button type={"submit"} className={classes.btn} size={"medium"}>
              {buttonText}
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(AuthFormCss)(AuthForm);
