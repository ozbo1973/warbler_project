import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/default-profile-image.jpg";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UserAsideCss from "../styles/UserAsideCss";

const UserAside = ({ classes, profileImageURL, username }) => {
  let img = profileImageURL || Image;
  console.log(img);
  return (
    <Card className={classes.useraside_card}>
      <CardMedia className={classes.useraside_img} image={img} />
      <CardContent>
        <Typography
          className={classes.useraside_title}
          gutterBottom
          component="h4"
        >
          {username}
        </Typography>
      </CardContent>
      <CardActions className={classes.useraside_cardaction}>
        <Button
          className={`${classes.useraside_btn} ${classes.useraside_btn_other}`}
          component={Link}
          to="/users/profile"
          size="small"
        >
          Edit
        </Button>
        <Button
          className={`${classes.useraside_btn} ${classes.useraside_btn_other}`}
          component={Link}
          to="/users/profile/delete"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(UserAsideCss)(UserAside);
