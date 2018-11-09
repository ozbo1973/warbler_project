import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Avatar,
  Divider
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import default_profileImg from "../images/default-profile-image.jpg";
import MessageItemCss from "../styles/MessageItemCss";

const MessageItem = ({
  username,
  text,
  profileImageURL,
  createDate,
  deleteMessage,
  isCorrectUser,
  classes
}) => {
  let img = profileImageURL || default_profileImg;
  return (
    <div>
      <ListItem>
        <Avatar src={img} />
        <ListItemText
          primary={
            <Grid container spacing={16}>
              <Grid item>
                <Link className={classes.msgItem_username} to="/view_profile">
                  @{username}
                </Link>
              </Grid>
              <Grid item>
                (
                <Moment className={classes.msgItem_time} format="Do MMM YYYY">
                  {createDate}
                </Moment>
                )
              </Grid>
            </Grid>
          }
          secondary={<span className={classes.msgItem_text}>{text}</span>}
        />
        {isCorrectUser && (
          <ListItemSecondaryAction>
            <Button
              className={`${classes.btns} ${classes.msgItem_btns}`}
              onClick={deleteMessage}
            >
              <DeleteIcon className={classes.deleteIcon} />
            </Button>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <li>
        <Divider inset />
      </li>
    </div>
  );
};

export default withStyles(MessageItemCss)(MessageItem);
