import React from "react";
import {
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up('md')]: {
      width: "95%"
    }
  },
  [theme.breakpoints.up("md")]: {
    flex: 1
  }
}))

const FormTextField = ({
  input
}) => {
  const classes = useStyles();
  const {
    ariaLabel,
    label,
    type,
    name,
    required,
    formErrorMessage,
    endAdornment,
    ...textFieldProps
  } = input;
  return (
    <FormControl
      className={classes.root}
      error={formErrorMessage ? !!formErrorMessage.confirmPassword : undefined}
    >
      <TextField
        aria-label={ariaLabel}
        label={label}
        type={type}
        inputProps={type === "password" ? { minLength: 6 } : {}}
        name={name}
        InputProps={{
          endAdornment
        }}
        required={required}
        {...textFieldProps}
      />
      {
        formErrorMessage &&
        <FormHelperText>
          {formErrorMessage.confirmPassword}
        </FormHelperText>
      }
    </FormControl>
  )
}

export default FormTextField;