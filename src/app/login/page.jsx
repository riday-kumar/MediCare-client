import { SignIn } from "@clerk/nextjs";
import React from "react";

const login = () => {
  return (
    <div>
      <p>login page</p>
      <SignIn></SignIn>
    </div>
  );
};

export default login;
