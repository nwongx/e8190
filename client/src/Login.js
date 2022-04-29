import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AccountFormBgContainer from "./components/Account/AccountFormBgContainer";
import AccountFormContainer from './components/Account/AccountFormContainer';
import AccountFormFunctionContainer from './components/Account/AccountFormFunctionContainer';
import LoginForm from './components/Login/LoginForm';


const Login = ({ user, login }) => {
  const history = useHistory();



  useEffect(() => {
    if (user && user.id) history.push('/home');
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
