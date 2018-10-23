import React from "react";
import MessageList from "../containers/MessageList";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const MessageTimeline = props => {
  return (
    <Grid container spacing={16}>
      <Grid item>
        <Paper>
          <MessageList />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MessageTimeline;
