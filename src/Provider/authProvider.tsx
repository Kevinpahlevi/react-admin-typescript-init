/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
// import client from "../utils/mococlient";

import { AuthProvider } from "react-admin";

const auth: AuthProvider = {
  login: async (params: any) => {
    try {
      console.log(params);
      //   const login = await client.auth.login("local", params);
      //   console.log(login);
      //   const role = await client.user.get();
      localStorage.setItem("token", "aaaaaaa");
      //   return login
      window.location.replace("/");
      return Promise.resolve({ redirectTo: "/" });
    } catch (error) {
      console.log("error");

      return error;
    }
  },
  // logout: async (params: any) => Promise.resolve(),
  // checkAuth: async (params: any) =>  Promise.resolve(),
  checkError: async (error: any) => Promise.resolve(),
  // getPermissions: async (params: any) => Promise.resolve(),
  checkAuth: () => {
    // console.log("check");
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const data = localStorage.getItem("token");
    return data ? Promise.resolve(data) : Promise.reject();
  },
  logout: async () => {
    console.log("logout");
    // const logout = await client.user.logout();
    localStorage.removeItem("token");
    return Promise.resolve();
  },
} as AuthProvider;

export default auth;
