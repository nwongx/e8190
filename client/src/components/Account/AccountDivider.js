import React from "react";
import {
  Grid,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
  }
});

const AccountDivider = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      item
    >
      <Divider variant="middle" light />
    </Grid>
  )
}

export default AccountDivider;