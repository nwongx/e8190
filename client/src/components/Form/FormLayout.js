import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { FormDivider } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100vh",
    minHeight: 600
  },
  leftSection: {
    display: "none",
    flex: 2,
    maxWidth: 425,
    [theme.breakpoints.up("md")]: {
      display: "block",
    }
  },
  rightSection: {
    padding: 10,
    display: "flex",
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    [theme.breakpoints.up("sm")]: {
      padding: 40, 
    }
  }
}))

const FormLayout = ({
  background,
  formUpperSection,
  formBottomSection,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.leftSection}>
        {background}
      </Box>
      <Box className={classes.rightSection}>
        {formUpperSection}
        <FormDivider />
        {formBottomSection}
      </Box>
    </Box>
  )
}

export default FormLayout;