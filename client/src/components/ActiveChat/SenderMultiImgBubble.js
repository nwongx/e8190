import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { SenderImg } from './index';

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

const SenderMultiImgBubble = ({ urls }) => {
  const classes = useStyles();
  return (
    <Box className={classes.imgsContainer}>
      {
        urls && urls.map((url) => (
          <Box key={url} className={classes.imgContainer}>
            <SenderImg url={url} />
          </Box>
        ))
      }
    </Box>
  );
};

export default SenderMultiImgBubble;
