import React from 'react';
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  RedirectPageLink,
  AccountDivider
} from "./index";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      widht: "100%",
      height: "100%",
      flexWrap: "nowrap",
      flexDirection: "column",
      justifyContent: "center",
      margin: 0, // work around of mui grid spacing
      [theme.breakpoints.up("md")]: {
        padding: 42,
        justifyContent: "flex-start"
      }
    },

  }
});

const AccountFormFunctionContainer = ({
  href,
  question,
  buttonLabel,
  children
}) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      item
      spacing={4}
      sm={12}
      md={7}
    >
      <RedirectPageLink
        href={href}
        question={question}
        buttonLabel={buttonLabel}
      />
      <AccountDivider />
      {children}
    </Grid>
  )
}

export default AccountFormFunctionContainer;