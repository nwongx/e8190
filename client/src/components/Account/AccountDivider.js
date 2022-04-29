import React from "react";
import {
  Grid,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    dividerContainer: {
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
      className={classes.dividerContainer}
      item
    >
      <Divider variant="middle" light />
    </Grid>
  )
}

export default AccountDivider;