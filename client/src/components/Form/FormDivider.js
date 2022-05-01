import React from "react";
import {
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    }
  }
});

const FormDivider = () => {
  const classes = useStyles();
  return (
    <Divider
      className={classes.root}
      light
    />
  )
}

export default FormDivider;