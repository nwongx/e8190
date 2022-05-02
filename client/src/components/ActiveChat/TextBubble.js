import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  textColor: {
    color: "#91A3C0"
  },
  otherUserTextColor: {
    color: '#FFFFFF',
  },
  bubble: {
    background: '#F4F6FA',
  },
  otherUserBubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
  },
  textBorderRadius: {
    borderRadius: '10px 10px 0 10px',
  },
  otherUsertextBorderRadius: {
    borderRadius: '0 10px 10px 10px',
  },
  imgBorderRadius: {
    borderRadius: '0 0 0 10px',
  },
  otherUserImgBorderRadius: {
    borderRadius: '0 0 10px 10px',
  }
}));

const TextBubble = ({ text, hasImg, isOtherUser }) => {
  const classes = useStyles();
  const rootStyle = isOtherUser ?
    `${classes.otherUserBubble} ${hasImg ? classes.otherUserImgBorderRadius : classes.otherUsertextBorderRadius}` :
    `${classes.bubble} ${hasImg ? classes.imgBorderRadius : classes.textBorderRadius}`;
  const textStyle = `${classes.text} ${isOtherUser ? classes.otherUserTextColor : classes.textColor}`

  return (
    <Box className={rootStyle}>
      <Typography className={textStyle}>{text}</Typography>
    </Box>
  );
};

export default TextBubble;
