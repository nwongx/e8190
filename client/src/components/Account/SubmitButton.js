import React from "react";
import {
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  createButtonContainer: {
    alignSelf: "center",
  },
  createButton: {
    background: "#3A8DFF",
    borderRadius: 3,
    width: 160,
    height: 56,
    alignSelf: "center"
  },
  createButtonLabel: {
    color: "#FFFFFF",
  }
}))

const SubmitButton = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.createButtonContainer}
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

export default SubmitButton;