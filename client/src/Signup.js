import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Divider,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import LoginPageLink from './components/Signup/LoginPageLink';
import SignupForm from './components/Signup/SignupForm';

const useStyles = makeStyles((theme) => {
  return {
    pageContainer: {
      height: '100vh',
      width: '100%',
      margin: 0 // work around of mui grid spacing
    },
  }
});

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid
      className={classes.pageContainer}
      container
      direction='column'
      justifyContent='center'
      spacing={4}
    >
      <LoginPageLink />
      <Grid item>
        <Divider variant='middle' light/>
      </Grid>
      <SignupForm register={register}/>
    </Grid>
  )
};

export default Signup;
