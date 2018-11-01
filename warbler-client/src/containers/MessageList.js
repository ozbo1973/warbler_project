import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, deleteMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { messages, deleteMessage, currentUser } = this.props;
    let messageList = messages.map(m => (
      <MessageItem
        key={m._id}
        text={m.text}
        username={m.user.username}
        profileImageURL={m.user.profileImageURL}
        createDate={m.createdAt}
        deleteMessage={deleteMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={m.user._id === currentUser}
      />
    ));

    return (
      <Paper elevation={1}>
        <List>{messageList}</List>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id
  };
}
export default connect(
  mapStateToProps,
  { fetchMessages, deleteMessage }
)(MessageList);
