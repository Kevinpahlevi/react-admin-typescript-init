import { Button, Card } from "@material-ui/core";
import React, { Component } from "react";
import auth from "../Provider/authProvider";
export default class Login extends Component {
  login() {
    console.log("login");

    auth.login({ username: "test", password: "testpass" });
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "400px",
            height: "500px",
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            LOGIN
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.login()}
            style={{ margin: "20px" }}
          >
            LOGIN
          </Button>
        </Card>
      </div>
    );
  }
}
