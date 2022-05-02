import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import React from "react";
import {
  useBubbleType
} from "../../hook";


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
}))

const OtherUserBubbleWrapper = ({ otherUser, message, time, bubbleFactory }) => {
  const bubbleType = useBubbleType(message);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        {bubbleFactory(bubbleType)(message)}
      </Box>
    </Box>
  )


};

export default OtherUserBubbleWrapper;