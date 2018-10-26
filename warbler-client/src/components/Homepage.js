import React from "react";
import Landing from "./Landing";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ classes, currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return <Landing />;
  } else {
    return (
      <MessageTimeline
        username={currentUser.user.username}
        profileImageURL={currentUser.user.profileImageURL}
      />
    );
  }
};

export default Homepage;
