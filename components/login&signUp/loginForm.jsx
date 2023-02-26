import React from "react";
import { useState } from "react";
import UsernameInput from "./inputs/usernameInput";
import PasswordInput from "./inputs/passwordInput";
import axios from "axios";
import styles from "./form.module.css";
import { useRouter } from "next/router";

export const LoginForm = ({ text }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const Router = useRouter();

  function LoginFn() {
    const user = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:3001/login", user)
      .then((data) => {
        localStorage.setItem("user_jwt", data.data.jwt_token);

        if (data.status == 200) {
          localStorage.setItem("username", user.username);
          Router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(`Wrong credentials, status message: ${err}`);
      });
  }

  return (
    <div className={styles.main}>
      <h2>{text}</h2>
      <UsernameInput onChange={setUsername} value={username} />
      <PasswordInput onChange={setPassword} value={password} />
      <button onClick={LoginFn}>Submit</button>
    </div>
  );
};

export default LoginForm;
