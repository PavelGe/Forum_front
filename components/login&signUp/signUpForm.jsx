import React from "react";
import { useState } from "react";
import UsernameInput from "./inputs/usernameInput";
import PasswordInput from "./inputs/passwordInput";
import axios from "axios";
import styles from "./form.module.css";
import { useRouter } from "next/router";

export const SignUpForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const Router = useRouter();

  function SignUpFn() {
    const user = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:3001/register", user)
      .then(function (response) {
        if (response.status == 200) {
          Router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.main}>
      <h2>Sign Up</h2>
      <UsernameInput onChange={setUsername} value={username} />
      <PasswordInput onChange={setPassword} value={password} />
      <button onClick={SignUpFn}>Submit</button>
    </div>
  );
};

export default SignUpForm;
