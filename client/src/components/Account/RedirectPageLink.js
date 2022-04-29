import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        justifyContent: "flex-end"
      }
    },
    accountQuestionLabel: {
      color: theme.palette.secondary.main,
      textAlign: "center",
      marginBottom: 8,
      marginRight: 0,
      [theme.breakpoints.up("md")]: {
        marginBottom: 0,
        marginRight: 30,
      }
    },
    loginLinkButton: {
      borderRadius: 5,
      padding: "0 33px",
      minWidth: 140,
      height: 54,
      backgroundColor: theme.palette.common.white,
      boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)"
    },
    loginLinkButtonLabel: {
      color: theme.palette.primary.main
    }
  }
})

const linkStyle = {
  textDecoration: "none"
};

const RedirectPageLink = ({ href, question, buttonLabel }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
    >
      <Typography
        className={classes.accountQuestionLabel}
        variant="body2"
      >
        {question}
      </Typography>
      <Link
        href={href}
        to={href}
        style={linkStyle}
      >
        <Button
          className={classes.loginLinkButton}
          classes={{
            label: classes.loginLinkButtonLabel
          }}
          variant="contained"
        >
          {buttonLabel}
        </Button>
      </Link>
    </Grid>
  )
}

export default RedirectPageLink;