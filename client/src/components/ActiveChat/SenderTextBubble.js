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
  bubble: {
    background: '#F4F6FA',
  },
  textBorderRadius: {
    borderRadius: '10px 10px 0 10px',
  },
  imgBorderRadius: {
    borderRadius: '0 0 0 10px',
  }
}));

const SenderTextBubble = ({ text, hasImg }) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.bubble} ${hasImg ? classes.imgBorderRadius : classes.textBorderRadius}`}>
      <Typography className={classes.text}>{text}</Typography>
    </Box>
  );
};

export default SenderTextBubble;
