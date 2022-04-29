import React from 'react';
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./Background";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: 768,
      height: "100vh",
      width: "100%",
    },
  }
});

const AccountFormBgContainer = ({ children }) => {
  const classes = useStyles();
  
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
    >
      <Background />
      {children}
    </Grid>
  )
}

export default AccountFormBgContainer;