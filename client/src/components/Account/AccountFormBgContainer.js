import React from "react";
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./Background";

const MIN_WINDOW_HEIGHT = 600;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: MIN_WINDOW_HEIGHT,
      height: "100vh",
      width: "100%",
      flexDirection: "row"
    },
  }
});

const AccountFormBgContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
    >
      <Background />
      {children}
    </Grid>
  )
}

export default AccountFormBgContainer;