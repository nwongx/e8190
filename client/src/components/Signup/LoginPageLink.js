import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    accountQuestionLabel: {
      color: '#B0B0B0',
      textAlign: 'center',
      marginBottom: 8
    },
    loginLinkButton: {
      borderRadius: 5,
      width: 140,
      height: 54,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)'
    },
    loginLinkButtonLabel: {
      color: theme.palette.primary.main
    }
  }
})

const LoginPageLink = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems='center'
    >
      <Typography
        className={classes.accountQuestionLabel}
      >
        Already have an account?
      </Typography>
      <Link
        href="/login"
        to="/login"
        style={{ textDecoration: 'none' }}
      >
        <Button
          className={classes.loginLinkButton}
          classes={{
            label: classes.loginLinkButtonLabel
          }}
          variant='contained'
        >
          Login
        </Button>
      </Link>
    </Grid>
  )
}

export default LoginPageLink;