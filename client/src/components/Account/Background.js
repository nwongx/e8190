import React from "react";
import {
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "linear-gradient(181deg, rgb(59, 141, 255, 0.8), rgb(134, 185, 255, 0.8)), url(./bg-img.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%"
    }
  },
  bgInnerGrid: {
    position: "relative"
  },
  introText: {
    color: theme.palette.common.white,
    textAlign: "center"
  }
}));

const svgStyle = {
  position: "absolute",
  margin: "0 auto",
  top: -107,
  left: 0,
  right: 0,
}

const Background = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      item
      md={5}
    >
      <Grid
        className={classes.bgInnerGrid}
        item
      >
        <img
          style={svgStyle}
          src="./bubble.svg"
          alt="bubble icon"
        />
        <Typography
          className={classes.introText}
          variant="h5"
        >
          Converse with anyone<br />with any language
        </Typography>
      </Grid>
    </Grid>
  )
}


export default Background;