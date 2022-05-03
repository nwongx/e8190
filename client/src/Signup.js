import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormBodyWrapper,
  FormBackground,
  FormHeader,
  FormLayout
} from "./components/Form";
import { useFormData } from "./hooks";
import { isEmptyObject } from "./utils";

const Signup = ({ user, register }) => {
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const history = useHistory();
  // declare inside component as value depends on formErrorMessage
  const memoSignupInputs = useMemo(() => [
    {
      ariaLabel: "username",
      label: "Username",
      name: "username",
      type: "text",
      required: true,
    },
    {
      ariaLabel: "E-mail address",
      label: "E-mail address",
      type: "email",
      name: "email",
      required: true
    },
    {
      ariaLabel: "password",
      label: "Password",
      name: "password",
      type: "password",
      formErrorMessage,
      required: true,
    },
    {
      ariaLabel: "confirm password",
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      formErrorMessage,
      required: true,
    }
  ], [formErrorMessage]);

  const memoizedSignupOnSubmit = useCallback(async (event) => {
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
  }, [setFormErrorMessage, register])

  const formData = useFormData(
    memoSignupInputs,
    memoizedSignupOnSubmit
  )

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    !isEmptyObject(formData) &&
    <FormLayout
      background={<FormBackground />}
      formUpperSection={<FormHeader
        href="/login"
        question="Already have an account?"
        buttonLabel="Login"
      />}
      formBottomSection={<FormBodyWrapper
        header="Create an Account."
        formData={formData}
        buttonLabel="Create"
      />}
    />
  )
};

export default Signup;
