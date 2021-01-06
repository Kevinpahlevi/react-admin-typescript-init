// in src/customRoutes.js
import React from "react";
import { Route } from "react-router-dom";
import resetPage from "../Pages/ResetPassword";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  <Route exact path="/reset-password" component={resetPage} noLayout />,
];
