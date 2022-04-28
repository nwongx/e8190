import React, { useState } from "react";
import {
  FormControl,
  Grid,
  TextField,
  Typography,
  FormHelperText,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 600,
    marginBottom: 12
  },
  boxContainer: {
    margin: "0 40px"
  },
  formControl: {
    width: '100%'
  },
  textFieldLabel: {
    color: '#B0B0B0',
    "&.Mui-focused": {
      color: '#B0B0B0'
    }
  },
  textFieldUnderline: {
    '&:before': {
      borderBottom: `1px solid #D5DFEE`
    },
  },
  createButtonContainer: {
    alignSelf: "center",
  },
  createButton: {
    background: "#3A8DFF",
    borderRadius: 3,
    width: 160,
    height: 56,
    alignSelf: 'center'
  },
  createButtonLabel: {
    color: '#FFFFFF',
  },

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
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
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
              <FormControl className={classes.formControl}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  InputLabelProps={{
                    className: classes.textFieldLabel,
                    required: false
                  }}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline
                    }
                  }}
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                  InputLabelProps={{
                    className: classes.textFieldLabel,
                    required: false
                  }}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline
                    }
                  }}
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                className={classes.formControl}
                error={!!formErrorMessage.confirmPassword}
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  InputLabelProps={{
                    className: classes.textFieldLabel,
                    required: false
                  }}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline
                    }
                  }}
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                className={classes.formControl}
                error={!!formErrorMessage.confirmPassword}
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  InputLabelProps={{
                    className: classes.textFieldLabel,
                    required: false
                  }}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline
                    }
                  }}
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
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