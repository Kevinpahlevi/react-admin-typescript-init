/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, makeStyles, Divider } from "@material-ui/core";
import React from "react";
import auth from "../Provider/authProvider";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const loginStyles: any = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "400px",
    minHeight: "530px",
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "20px",
    textAlign: "center",
  },
  buttonGroup: {
    margin: "5px 20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    marginBottom: "20px",
  },
  button2: {
    marginBottom: "20px",
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    "&:hover, & .Mui-focusVisible": {
      backgroundColor: "#efefef",
      color: "black",
    },
  },
  text: {
    textAlign: "center",
    margin: "20px 0px",
    fontWeight: "bold",
  },
  text2: {
    textAlign: "center",
    fontSize: "13px",
    fontWeight: "bold",
    margin: "20px 0px",
    color: "blue",
    cursor: "pointer",
    textDecoration: "none",
  },
  input: {
    marginBottom: "20px",
  },
  logo: {
    width: "100px",
    height: "100px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
  },
  google: {
    width: "25px",
  },
  divider: {
    marginBottom: "20px",
  },
  error: {
    marginBottom: "10px",
  },
  success: {
    marginBottom: "10px",
  },
}));

export default function Login() {
  const classes = loginStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirm, setConfirm] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = async () => {
    console.log("login");
    await auth.login({ username: "test", password: "testpass" });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.title}>DRESS</div>
        <div>
          <img
            src="https://www.centre.io/images/usdc/usdc-icon-86074d9d49.png"
            alt="logo"
            className={classes.logo}
          />{" "}
        </div>

        <div className="login">
          <div className={classes.text}>Reset Password</div>

          <div className={classes.buttonGroup}>
            <FormControl className={classes.input} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={110}
              />
            </FormControl>
            <FormControl className={classes.input} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={confirm}
                error={password !== confirm}
                onChange={(e) => setConfirm(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={170}
              />
            </FormControl>
          </div>
          <div className={classes.buttonGroup}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => login()}
              className={classes.button}
            >
              RESET PASSWORD
            </Button>
            <Divider />
            <Link to="/login" className={classes.text2}>
              Back to Login Page
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
