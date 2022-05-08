import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { useUserBorderStyles, useUserBubbleStyles, useUserTextStyles } from '../../hooks';

const useStyles = makeStyles(() => ({
  text: {
    fontSize: 14,
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
}));

const TextBubble = ({ text, hasImg, isOtherUser }) => {
  const classes = useStyles();
  const bubbleStyles = useUserBubbleStyles(isOtherUser);
  const borderStyles = useUserBorderStyles(isOtherUser, hasImg);
  const textStyles = useUserTextStyles(isOtherUser);

  return (
    <Box className={`${bubbleStyles} ${borderStyles}`}>
      <Typography className={`${classes.text} ${textStyles}`}>{text}</Typography>
    </Box>
  );
};

export default TextBubble;
