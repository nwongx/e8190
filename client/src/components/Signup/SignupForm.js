import React, { useState } from "react";
import {
  Grid,
} from "@material-ui/core";
import AccountTextField from "../Account/AccountTextField";
import SubmitButton from "../Account/SubmitButton";


const SignupForm = ({ register }) => {
  const [formErrorMessage, setFormErrorMessage] = useState({});

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
    <form
      onSubmit={handleRegister}>
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
        <SubmitButton>
          Create
        </SubmitButton>
      </Grid>
    </form>
  )
}

export default SignupForm;