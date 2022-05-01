import { Button } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  FormBodyWrapper,
  FormBackground,
  FormHeader,
  FormLayout
} from "./components/Form";
import { useFormData } from "./hooks";
import { isEmptyObject } from "./utils";

// no dependency, declare outside the component
const loginInputs = [
  {
    ariaLabel: "username",
    label: "Username",
    name: "username",
    type: "text",
    required: true,
  },
  {
    ariaLabel: "password",
    label: "Password",
    name: "password",
    type: "password",
    endAdornment: (
      <Button
        color="primary"
        size="small"
      >
        Forgot?
      </Button>
    ),
    required: true,
  }
];

const Login = ({ user, login }) => {
  const history = useHistory();
  const memoizedLoginOnSubmit = useCallback( async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  }, [login])

  const formData = useFormData(
    loginInputs,
    memoizedLoginOnSubmit
  );

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    !isEmptyObject(formData) &&
    <FormLayout
      background={<FormBackground />}
      formUpperSection={<FormHeader
        href="/register"
        question="Don’t have an account?"
        buttonLabel="Create account"
      />}
      formBottomSection={<FormBodyWrapper
        header="Welcome back!"
        formData={formData}
        buttonLabel="Login"
      />}
    />
  )
};

export default Login;
