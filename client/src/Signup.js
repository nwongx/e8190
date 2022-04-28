import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./components/Signup/Background";
import AccountSection from "./components/Signup/AccountSection";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: 768,
      height: "100vh",
      width: "100%",
    },
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
      className={classes.root}
      container
      direction="row"
    >
      <Background />
      <AccountSection register={register} />
    </Grid>
  )
};

export default Signup;
