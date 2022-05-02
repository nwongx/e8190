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
  imgContainer: {
    width: 135,
    aspectRatio: "1",
  }

}));

const SenderSingleImgBubble = ({ time, url }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {time && <Typography className={classes.date}>{time}</Typography>}
      <Box className={classes.imgContainer}>
        <SenderImgBubble url={url} />
      </Box>
    </Box>
  );
};

export default SenderSingleImgBubble;
