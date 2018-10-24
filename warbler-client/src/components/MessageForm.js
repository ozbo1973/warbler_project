import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";
import ErrorMessage from "./ErrorMessage";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
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
  render() {
    let { error, classes } = this.props;
    return (
      <div className={classes.form_root}>
        <Paper className={classes.paper} elevation={1}>
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

            <Button type={"submit"} className={classes.btn} size={"medium"}>
              Add Warble
            </Button>
          </form>
        </Paper>
      </div>
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
