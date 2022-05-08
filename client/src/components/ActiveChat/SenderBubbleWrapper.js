import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import React from "react";
import {
  useBubbleType
} from "../../hooks";

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

const SenderBubbleWrapper = ({ message, time, bubbleFactory }) => {
  const bubbleType = useBubbleType(message);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      {bubbleFactory(bubbleType)(message)}
    </Box>
  )


};

export default SenderBubbleWrapper;