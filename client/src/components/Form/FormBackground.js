import React from "react";
import {
  Typography,
  Box,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(181deg, rgb(59, 141, 255, 0.8), rgb(134, 185, 255, 0.8)), url(./bg-img.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%"
  },
  contentContainer: {
    position: "relative"
  },
  introText: {
    color: theme.palette.common.white,
    textAlign: "center",
    fontWeight: 400,
  }
}));

const svgStyle = {
  position: "absolute",
  margin: "0 auto",
  top: -107,
  left: 0,
  right: 0,
}

const FormBackground = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className={classes.contentContainer}
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
      </Box>
    </Grid>
  )
}


export default FormBackground;