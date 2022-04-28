import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginPageLink from "./components/Signup/LoginPageLink";
import SignupForm from "./components/Signup/SignupForm";

const useStyles = makeStyles((theme) => {
  return {
    pageContainer: {
      minHeight: 768,
      height: "100vh",
      width: "100%",
    },
    formContainer: {
      widht: "100%",
      height: "100%",
      flexDirection: "column",
      justifyContent: "center",
      margin: 0, // work around of mui grid spacing
      [theme.breakpoints.up("md")]: {
        padding: 42,
        justifyContent: "flex-start"
      }
    },
    bgContainer: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(181deg, rgb(59, 141, 255, 0.8), rgb(134, 185, 255, 0.8)), url(./bg-img.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%"
      }
    },
    bgInnerGrid: {
      position: "relative"
    },
    introText: {
      color: "white",
      marginTop: 40
    },
    dividerContainer: {
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    singupFormContainer: {
      [theme.breakpoints.up("md")]: {
        flex: 1,
        justifyContent: "center"
      }
    }
  }
});

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (

    <Grid
      className={classes.pageContainer}
      container
      direction="row"
    >
      <Grid
        className={classes.bgContainer}
        container
        item
        md={5}
      >

        <Grid
          className={classes.bgInnerGrid}
          item
        >
          <img
            style={{
              position: "absolute",
              margin: "0 auto",
              top: -107,
              left: 0,
              right: 0,
            }}
            src="./bubble.svg"
            alt="bubble.svg"
          />
          <Typography
            className={classes.introText}
            align="center"
            variant="h5"
          >
            Converse with anyone<br />with any language
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.formContainer}
        container
        item
        spacing={4}
        sm={12}
        md={7}
      >
        <LoginPageLink />
        <Grid
          className={classes.dividerContainer}
          item
        >
          <Divider variant="middle" light />
        </Grid>
        <Grid
          className={classes.singupFormContainer}
          container
          item
          direction="column"
        >
          <SignupForm register={register} />
        </Grid>
      </Grid>
    </Grid>

  )
};

export default Signup;
