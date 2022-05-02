import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import MessageImg from './MessageImg';

const useStyles = makeStyles(() => ({
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

const MultiImgBubble = ({ urls, isOtherUser }) => {
  const classes = useStyles();
  return (

    <Box className={classes.imgsContainer}>
      {
        urls && urls.map((url) => (
          <Box key={url} className={classes.imgContainer}>
            <MessageImg
              url={url}
              isOtherUser={isOtherUser}
            />
          </Box>
        ))
      }
    </Box>
  );
};

export default MultiImgBubble;
