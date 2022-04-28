import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AccountTextField from "./AccountTextField";

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 600,
    marginBottom: 12
  },
  boxContainer: {
    padding: "0 40px"
  },
  formControl: {
    width: "100%"
  },
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
  },
  [theme.breakpoints.up("md")]: {
    flex: 1
  }

}))

const SignupForm = ({ register }) => {

  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = useStyles();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  return (
    <Grid item>
      <Box className={classes.boxContainer}>
        <form
          onSubmit={handleRegister}>
          <Typography
            className={classes.header}
            variant="h5"
          >
            Create an Account.
          </Typography>
          <Grid
            container
            direction="column"
            spacing={5}
          >
            <Grid item>
              <AccountTextField
                ariaLabel="username"
                label="Username"
                name="username"
                type="text"
                required
              />
            </Grid>
            <Grid item>
              <AccountTextField
                ariaLabel="E-mail address"
                label="E-mail address"
                type="email"
                name="email"
                required
              />
            </Grid>
            <Grid item>
              <AccountTextField
                ariaLabel="password"
                label="Password"
                type="password"
                name="password"
                formErrorMessage={formErrorMessage}
                required
              />
            </Grid>
            <Grid item>
              <AccountTextField
                ariaLabel="confirm password"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                formErrorMessage={formErrorMessage}
                required
              />
            </Grid>
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
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  )
}

export default SignupForm;