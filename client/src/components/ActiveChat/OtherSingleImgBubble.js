import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import OtherUserImgBubble from './OtherUserImgBubble';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
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
  imgContainer: {
    width: 135,
    aspectRatio: "1",
  }
}));

const OtherUserSingleImgBubble = ({ time, otherUser, url }) => {
  const classes = useStyles();
  if (!otherUser) return <></>
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
        <Box className={classes.imgContainer}>
          <OtherUserImgBubble url={url} />
        </Box>
      </Box>
    </Box>
  );
};


export default OtherUserSingleImgBubble;
