import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {
  MessageImg,
  TextBubble
} from './index';

const useStyles = makeStyles(() => ({
  contentContainer: {
    width: 135,
  },
  imgContainer: {
    aspectRatio: "1",
  },
  imgWithTextContainer: {
    aspectRatio: "16/14",
  }
}));

const ImgTextBubble = ({ url, text, isOtherUser }) => {
  const classes = useStyles();
  return (
    <Box className={classes.contentContainer}>
      <Box className={
        text ?
          classes.imgWithTextContainer :
          classes.imgContainer}
      >
        <MessageImg
          url={url}
          hasText={text}
          isOtherUser={isOtherUser}
        />
      </Box>
      {
        text && <TextBubble
          text={text}
          hasImg
          isOtherUser={isOtherUser}
        />
      }
    </Box>

  );
};

export default ImgTextBubble;