import React from "react";
import Navbar from "@/components/navbar/navbar";
import axios from "axios";
import { useState } from "react";
import SignUpForm from "@/components/login&signUp/signUpForm";

const Login = () => {
  return (
    <div>
      <Navbar />
      <SignUpForm />
    </div>
  );
};

export default Login;
