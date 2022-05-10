import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import React from "react";
import {
  IMG_TEXT_TYPE,
  IMG_TYPE,
  MULTI_IMG_TEXT_TYPE,
  MULTI_IMG_TYPE,
  TEXT_TYPE,
  useBubbleType
} from "../../hooks";
import MessageImg from "./MessageImg";

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
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
  },
  imgTextBubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 0 10px 10px',
  },
  text: {
    fontSize: 14,
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  imgContainer: {
    width: 135,
    aspectRatio: '1',
  },
  multiImgGrid: {
    display: 'grid',
    gridTemplateColumns: '115px 115px',
    columnGap: 5,
    rowGap: 5
  },
  multiImgContainer: {
    aspectRatio: '16/12',
  },
  multiImgWithTextVSpace: {
    marginTop: 12,
  },
  imgWithTextContainer: {
    width: 135,
  },
  imgWithTextInnerContainer: {
    aspectRatio: '16/14'
  }
}))

const OtherUserBubble = ({ otherUser, message, time }) => {
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
        {
        (bubbleType === TEXT_TYPE || bubbleType === MULTI_IMG_TEXT_TYPE) &&
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{message.text}</Typography>
        </Box>
      }
      {
        bubbleType === IMG_TYPE &&
        <Box className={classes.imgContainer}>
          <MessageImg
            url={message.attachments[0]}
            isOtherUser
          />
        </Box>
      }
      {
        bubbleType === IMG_TEXT_TYPE &&
        <Box className={classes.imgWithTextContainer}>
          <Box className={classes.imgWithTextInnerContainer}>
            <MessageImg
              url={message.attachments[0]}
              hasText
              isOtherUser
            />
            <Box className={classes.imgTextBubble}>
              <Typography className={classes.text}>
                {message.text}
              </Typography>
            </Box>
          </Box>
        </Box>
      }
      {
        (bubbleType === MULTI_IMG_TYPE || bubbleType === MULTI_IMG_TEXT_TYPE) &&
        <Box className={
          `${classes.multiImgGrid} 
          ${bubbleType === MULTI_IMG_TEXT_TYPE && classes.multiImgWithTextVSpace}`
        }>
          {
            message.attachments.map(url => (
              <Box key={url} className={classes.multiImgContainer}>
                <MessageImg url={url} isOtherUser/>
              </Box>
            ))
          }
        </Box>
      }
      </Box>
    </Box>
  )
};

export default OtherUserBubble;