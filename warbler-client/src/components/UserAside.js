import React from "react";
import Image from "../images/default-profile-image.jpg";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const UserAsideCss = {
  useraside_card: {
    maxWidth: "300px"
  },
  useraside_img: {
    height: "140px"
  }
};

const UserAside = ({ classes, profileImageURL, username }) => {
  let img = profileImageURL || Image;
  console.log(img);
  return (
    <Card className={classes.useraside_card}>
      <CardMedia className={classes.useraside_img} image={img} />
      <CardContent>
        <Typography gutterBottom component="h4">
          {username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(UserAsideCss)(UserAside);
