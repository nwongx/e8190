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
  imgsContainer: {
    display: "grid",
    gridTemplateColumns: "115px 115px",
    columnGap: 5,
    rowGap: 5,
  },
  imgContainer: {
    aspectRatio: "16/12"
  }
}));

const OtherUserMultiImgBubble = ({ time, urls, otherUser }) => {
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
        <Box className={classes.imgsContainer}>
          {
            urls && urls.map((url) => (
              <Box key={url} className={classes.imgContainer}>
                <OtherUserImgBubble
                  url={url}
                />
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box >
  );
};

export default OtherUserMultiImgBubble;
