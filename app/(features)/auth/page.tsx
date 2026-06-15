import React from "react";
import SideBar from "./components/SideBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const Auth = () => {
  return (
    <div className="flex">
      <SideBar />
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
