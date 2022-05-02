import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import React, { useCallback } from "react";
import {
  IMG_TEXT_TYPE,
  IMG_TYPE,
  MULTI_IMG_TYPE,
  TEXT_TYPE,
  useBubbleType
} from "../../hook";
import {
  MultiImgBubble,
  ImgTextBubble,
} from './index';
import TextBubble from "./TextBubble";

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

const OtherUserBubbleWrapper = ({ otherUser, message, time }) => {
  const bubbleType = useBubbleType(message);
  const classes = useStyles();

  const memoizedOtherUserbubbleFactory = useCallback(() => {
    switch (bubbleType) {
      case TEXT_TYPE:
        return <TextBubble text={message.text} isOtherUser/>;
      case IMG_TYPE:
        return <ImgTextBubble url={message.attachments[0]} isOtherUser/>
      case IMG_TEXT_TYPE:
        return <ImgTextBubble
          url={message.attachments[0]}
          text={message.text}
          isOtherUser
        />
      case MULTI_IMG_TYPE:
        return <MultiImgBubble urls={message.attachments} isOtherUser/>
      default:
        return <></>;
    }
  }, [bubbleType, message])

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
        {memoizedOtherUserbubbleFactory()}
      </Box>
    </Box>
  )


};

export default OtherUserBubbleWrapper;