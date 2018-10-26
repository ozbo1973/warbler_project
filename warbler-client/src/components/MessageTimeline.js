import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MessageTimelineCss from "../styles/MessageTimelineCss";

const MessageTimeline = ({ classes, username, profileImageURL }) => {
  return (
    <Grid
      className={`${classes.messageTimeline_root} ${
        classes.messageTimeline_bg
      }`}
      container
      spacing={24}
      justify="center"
    >
      <Grid item>
        <UserAside username={username} profileImageURL={profileImageURL} />
      </Grid>
      <Grid className={classes.messageTimeline_messageList} item>
        <MessageList />
      </Grid>
    </Grid>
  );
};

export default withStyles(MessageTimelineCss)(MessageTimeline);
