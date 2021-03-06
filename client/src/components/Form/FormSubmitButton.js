import React from "react";
import {
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: "center",
  },
  createButton: {
    background: theme.palette.primary.main,
    borderRadius: 3,
    fontSize: "1rem",
    width: 160,
    height: 56,
    alignSelf: "center"
  },
  createButtonLabel: {
    color: theme.palette.common.white,
  }
}))

const FormSubmitButton = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      item
    >
      <Button
        className={classes.createButton}
        classes={{
          label: classes.createButtonLabel
        }}
        type="submit"
        variant="contained"
      >
        {children}
      </Button>
    </Grid>
  )
}

export default FormSubmitButton;