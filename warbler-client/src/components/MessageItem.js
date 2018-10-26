import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import default_profileImg from "../images/default-profile-image.jpg";

const MessageItem = ({ username, text, profileImageURL, createDate }) => {
  let img = profileImageURL || default_profileImg;
  return (
    <div>
      <ListItem>
        <Avatar src={img} />
        <ListItemText
          primary={
            <span>
              <Link to="/view_profile">@{username}</Link>
              <Moment format="Do MMM YYYY">{createDate}</Moment>
            </span>
          }
          secondary={<span>{text}</span>}
        />
        <ListItemSecondaryAction>
          <Button>Delete</Button>
        </ListItemSecondaryAction>
      </ListItem>
      <li>
        <Divider inset />
      </li>
    </div>
  );
};

export default MessageItem;
