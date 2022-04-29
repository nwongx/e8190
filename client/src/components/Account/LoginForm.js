import React from "react";
import {
  Button,
  Grid,
} from "@material-ui/core";
import {
  AccountTextField,
  SubmitButton
} from "./index";

const LoginForm = ({ login }) => {

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  return (
    <form
      onSubmit={handleLogin}>
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
            ariaLabel="password"
            label="Password"
            type="password"
            name="password"
            endAdornment={<Button color="primary">Forgot?</Button>}
            required
          />
        </Grid>
        <SubmitButton>
          Login
        </SubmitButton>
      </Grid>
    </form>
  )
}

export default LoginForm;