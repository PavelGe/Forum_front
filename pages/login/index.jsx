import React from "react";
import Navbar from "@/components/navbar/navbar";
import LoginForm from "@/components/login&signUp/loginForm";

const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginForm text={"Login"} />
    </div>
  );
};

export default Login;
