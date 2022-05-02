import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {
  SenderImg,
  SenderTextBubble
} from "./index";

const useStyles = makeStyles(() => ({
  root: {
    width: 135,
  },
  imgContainer: {
    aspectRatio: "1",
  },
  imgWithTextContainer: {
    aspectRatio: "16/14",
  }
}));

const SenderImgTextBubble = ({ url, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={
        text ?
          classes.imgWithTextContainer :
          classes.imgContainer}
      >
        <SenderImg url={url} hasText={text} />
      </Box>
      {
        text && <SenderTextBubble
          text={text}
          hasImg
        />
      }
    </Box>
  );
};

export default SenderImgTextBubble;
