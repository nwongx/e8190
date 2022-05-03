import React from "react";
import {
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormTextField,
  FormSubmitButton
} from "./index";


const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexDirection: "column",
      padding: "0 40px",
      [theme.breakpoints.up("md")]: {
        flex: 1,
        justifyContent: "center"
      }
    },
    header: {
      marginBottom: 12
    },
  }
});

const FormBodyWrapper = ({
  header,
  formData,
  buttonLabel,
}) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      item
    >
      <Typography
        className={classes.header}
        variant="h5"
      >
        {header}
      </Typography>
      <form
        onSubmit={formData.onSubmit}>
        <Grid
          container
          direction="column"
          spacing={5}
        >
          {
            formData.inputs.map(input => (
              <Grid key={input.ariaLabel} item>
                <FormTextField input={input} />
              </Grid>
            ))
          }
          <FormSubmitButton>
            {buttonLabel}
          </FormSubmitButton>
        </Grid>
      </form>
    </Grid>
  )
}

export default FormBodyWrapper;