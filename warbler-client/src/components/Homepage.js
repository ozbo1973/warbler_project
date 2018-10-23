import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomepageCss from "../styles/HomepageCss";

const Homepage = ({ classes, currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={1}>
              <Grid
                className={classes.hero}
                justify={"center"}
                alignItems={"center"}
                container
                direction={"column"}
              >
                <Grid className={classes.hero_item} item>
                  <Typography
                    className={classes.hero_text}
                    gutterBottom
                    variant={"h1"}
                  >
                    Warbler
                  </Typography>
                  <Typography
                    className={classes.hero_text}
                    gutterBottom
                    variant={"h3"}
                  >
                    Whats on your mind?
                  </Typography>
                  <Button component={Link} to="/signup" className={classes.btn}>
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <div>Messages</div>;
  }
};

export default withStyles(HomepageCss)(Homepage);
