import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  AccountFormBgContainer,
  AccountFormContainer,
  AccountFormFunctionContainer,
  LoginForm,
} from "./components/Account";

const Login = ({ user, login }) => {
  const history = useHistory();

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <AccountFormBgContainer>
      <AccountFormFunctionContainer
        href="/register"
        question="Need to register?"
        buttonLabel="Create account"
      >
        <AccountFormContainer
          greetLabel="Welcome back!"
        >
          <LoginForm login={login} />
        </AccountFormContainer>
      </AccountFormFunctionContainer>
    </AccountFormBgContainer>
  )
};

export default Login;
