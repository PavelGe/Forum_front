import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./questionForm.module.css";
import DescriptionInput from "./inputs/descriptionInput";
import TitleInput from "./inputs/titleInput";
import Router from "next/router";

export const QuestionForm = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  function onClickHandler() {
    if (!title || !description) {
      alert("Title or Description cannot be empty!");
    }

    const token = localStorage.getItem("user_jwt");
    const author = localStorage.getItem("username");
    console.log("token", token);
    const question = {
      author: author,
      title: title,
      description: description,
      commentCount: 0,
    };
    axios
      .post("http://localhost:3001/question", question, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          Router.push("/");
        }
      })
      .catch((err) => {
        alert(`status message: ${err}`);
      });
  }

  return (
    <div className={styles.main}>
      <h2>New Question</h2>
      <TitleInput onChange={setTitle} value={title} />
      <DescriptionInput onChange={setDescription} value={description} />
      <button className={styles.button} onClick={onClickHandler}>
        Submit
      </button>
    </div>
  );
};

export default QuestionForm;
