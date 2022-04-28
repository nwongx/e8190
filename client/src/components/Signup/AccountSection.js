import React from 'react';
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginPageLink from "./LoginPageLink";
import SignupForm from "./SignupForm";
import AccountDivider from './AccountDivider';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      widht: "100%",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      margin: 0, // work around of mui grid spacing
      [theme.breakpoints.up("md")]: {
        padding: 42,
        justifyContent: "flex-start"
      }
    },
    singupFormContainer: {
      [theme.breakpoints.up("md")]: {
        flex: 1,
        justifyContent: "center"
      }
    }
  }
});

const AccountSection = ({ register }) => {
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
      <LoginPageLink />
      <AccountDivider />
      <Grid
        className={classes.singupFormContainer}
        container
        item
        direction="column"
      >
        <SignupForm register={register} />
      </Grid>
    </Grid>
  )
}

export default AccountSection;