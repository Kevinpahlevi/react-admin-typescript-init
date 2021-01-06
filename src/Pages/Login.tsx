/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, makeStyles, Divider } from "@material-ui/core";
import React from "react";
import auth from "../Provider/authProvider";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
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
    margin: "0px 20px",
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
    marginBottom: "20px",
    color: "blue",
    cursor: "pointer",
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
  const [mode, setMode] = React.useState("login");
  const [errorForget, setErrorForget] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailReset, setEmailReset] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const login = async () => {
    console.log("login");
    await auth.login({ username: "test", password: "testpass" });
  };
  const forget = () => {
    setErrorForget(false);
    setSuccess(false);
    if (emailReset === "error") {
      setErrorForget(true);
      setEmailReset("");
    } else {
      setSuccess(true);
      setEmailReset("");
    }
  };
  const backLogin = () => {
    setErrorForget(false);
    setSuccess(false);
    setEmailReset("");
    setMode("login");
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
        {mode === "login" ? (
          <div className="login">
            <div className={classes.text}>Log in to your account</div>

            <div className={classes.buttonGroup}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={classes.input}
              />
              <FormControl className={classes.input} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
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
            </div>
            <div className={classes.buttonGroup}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => login()}
                className={classes.button}
              >
                LOGIN
              </Button>
              <Divider />
              <div className={classes.text}>OR</div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button2}
                startIcon={
                  <img
                    src="https://img.icons8.com/clouds/2x/google-logo.png"
                    alt="google"
                    className={classes.google}
                  />
                }
              >
                CONTINUE WITH GOOGLE
              </Button>
              <div className={classes.text2} onClick={() => setMode("forget")}>
                Forget password ? Reset your password here.
              </div>
            </div>
          </div>
        ) : (
          <div className="forget">
            <div className={classes.text}>Recovery Account </div>

            <div className={classes.buttonGroup}>
              {errorForget && (
                <Alert severity="error" className={classes.error}>
                  Username/Email invalid !
                </Alert>
              )}
              {success && (
                <Alert severity="success" className={classes.success}>
                  Reset password link sent to your email
                </Alert>
              )}

              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={emailReset}
                onChange={(e) => setEmailReset(e.target.value)}
                className={classes.input}
              />
            </div>
            <div className={classes.buttonGroup}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => forget()}
                className={classes.button}
              >
                Forget password
              </Button>
              <Divider className={classes.divider} />
              <div className={classes.text2} onClick={backLogin}>
                Back to Login
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
