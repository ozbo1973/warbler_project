import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LandingCss from "../styles/LandingCss";

const Landing = ({ classes }) => {
  return (
    <Grid className={classes.landing_root} container justify={"center"}>
      <Grid className={classes.hero_item} item>
        <Typography className={classes.hero_text} gutterBottom variant={"h1"}>
          Warbler
        </Typography>
        <Typography className={classes.hero_text} gutterBottom variant={"h3"}>
          Whats on your mind?
        </Typography>
        <Button component={Link} to="/signup" className={classes.btn}>
          Sign up
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(LandingCss)(Landing);
