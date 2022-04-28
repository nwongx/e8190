import React from "react";
import {
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%"
  },
  textFieldLabel: {
    color: "#B0B0B0",
    "&.Mui-focused": {
      color: "#B0B0B0"
    }
  },
  textFieldUnderline: {
    "&:before": {
      borderBottom: `1px solid #D5DFEE`
    },
  },
  [theme.breakpoints.up("md")]: {
    flex: 1
  }

}))

const AccountTextField = ({
  ariaLabel,
  label,
  type,
  name,
  required,
  formErrorMessage,
  ...textFieldProps
}) => {
  const classes = useStyles();

  return (
    <FormControl
      className={classes.formControl}
      error={formErrorMessage ? !!formErrorMessage.confirmPassword : undefined}
    >
      <TextField
        aria-label={ariaLabel}
        label={label}
        type={type}
        inputProps={type === "password" ? { minLength: 6 } : {}}
        name={name}
        InputLabelProps={{
          className: classes.textFieldLabel,
          required: false
        }}
        InputProps={{
          classes: {
            underline: classes.textFieldUnderline
          }
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

export default AccountTextField;