import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import SenderImgBubble from './SenderImgBubble';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
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

const SenderMultiImgBubble = ({ time, urls }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.imgsContainer}>
        {
          urls && urls.map((url) => (
            <Box key={url} className={classes.imgContainer}>
              <SenderImgBubble
                url={url}
              />
            </Box>
          ))
        }
      </Box>
    </Box >
  );
};

export default SenderMultiImgBubble;
