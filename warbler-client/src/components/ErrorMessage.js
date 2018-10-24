import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const ErrorMessage = ({ msg }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Paper>
          <Typography gutterBottom variant={"caption"} align={"center"}>
            {msg}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ErrorMessage;
