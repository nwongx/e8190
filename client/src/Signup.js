import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  AccountFormFunctionContainer,
  AccountFormBgContainer,
  SignupForm,
  AccountFormContainer
} from "./components/Account";

const Signup = ({ user, register }) => {
  const history = useHistory();

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <AccountFormBgContainer>
      <AccountFormFunctionContainer
        href="/login"
        question="Already have an account?"
        buttonLabel="Login"
      >
        <AccountFormContainer
          greetLabel="Create an Account."
        >
          <SignupForm register={register} />
        </AccountFormContainer>
      </AccountFormFunctionContainer>
    </AccountFormBgContainer>
  )
};

export default Signup;
