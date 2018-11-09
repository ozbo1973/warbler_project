import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";
import ErrorMessage from "./ErrorMessage";

import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Input,
  FormControl,
  InputLabel
} from "@material-ui/core";
import MainFormCss from "../styles/MainFormCss";

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { warble: "" };
  }
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.postNewMessage(this.state.warble, this.props.history);
    this.setState({ warble: "" });
  };
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnCancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    let { error, classes } = this.props;
    return (
      <Grid container direction="column" className={classes.form_root}>
        <Paper className={classes.form_paper} elevation={1}>
          <form className={classes.form} onSubmit={this.handleOnSubmit}>
            <Typography className={classes.heading} gutterBottom variant={"h3"}>
              Create New Warble
            </Typography>
            {error.message && <ErrorMessage msg={error.message} />}

            <FormControl className={classes.controls}>
              <InputLabel htmlFor={"warble"}>Your Warble:</InputLabel>
              <Input
                id={"warble"}
                name={"warble"}
                value={this.state.warble}
                onChange={this.handleOnChange}
                type={"text"}
              />
            </FormControl>

            <Grid justify="center" container spacing={16}>
              <Grid item>
                <Button type={"submit"} className={classes.btn} size={"medium"}>
                  Add Warble
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={this.handleOnCancel}
                  type={"button"}
                  className={classes.btn}
                  size="medium"
                >
                  Cancel
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
  return { error: state.errors };
}

export default connect(
  mapStateToProps,
  { postNewMessage }
)(withStyles(MainFormCss)(MessageForm));
