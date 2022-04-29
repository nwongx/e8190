import React from "react";
import {
  Grid,
  Box,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        flex: 1,
        justifyContent: "center"
      }
    },
    header: {
      marginBottom: 12
    },
    boxContainer: {
      padding: "0 40px"
    },
    [theme.breakpoints.up("md")]: {
      flex: 1
    }
  }
});

const AccountFormContainer = ({
  greetLabel,
  children
}) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      item
    >
      <Grid item>
        <Box className={classes.boxContainer}>
          <Typography
            className={classes.header}
            variant="h5"
          >
            {greetLabel}
          </Typography>
          {children}
        </Box>
      </Grid>
    </Grid>
  )
}

export default AccountFormContainer;