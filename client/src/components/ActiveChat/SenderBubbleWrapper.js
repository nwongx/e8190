import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import {
  IMG_TEXT_TYPE,
  IMG_TYPE,
  MULTI_IMG_TYPE,
  TEXT_TYPE,
  useBubbleType
} from "../../hook";
import {
  SenderTextBubble,
  SenderMultiImgBubble,
  SenderImgTextBubble,
} from './index';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
}))

const SenderBubbleWrapper = ({ message, time }) => {
  const bubbleType = useBubbleType(message);
  const classes = useStyles();

  const memoizedSenderbubbleFactory = useCallback(() => {
    switch (bubbleType) {
      case TEXT_TYPE:
        return <SenderTextBubble text={message.text} />;
      case IMG_TYPE:
        return <SenderImgTextBubble url={message.attachments[0]} />
      case IMG_TEXT_TYPE:
        return <SenderImgTextBubble
          url={message.attachments[0]}
          text={message.text}
        />
      case MULTI_IMG_TYPE:
        return <SenderMultiImgBubble urls={message.attachments} />
      default:
        return <></>;
    }
  }, [bubbleType, message])

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      {memoizedSenderbubbleFactory()}
    </Box>
  )


};

export default SenderBubbleWrapper;