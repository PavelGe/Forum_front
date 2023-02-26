import React from "react";
import styles from "./button.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const DeleteQuestionBtn = () => {
  const router = useRouter();
  const { id } = router.query;

  function deleteQuestion() {
    const token = localStorage.getItem("user_jwt");
    axios
      .delete(`http://localhost:3001/question/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/");
  }

  return (
    <div onClick={deleteQuestion} className={styles.deleteQuestion}>
      <div>Delete</div>
    </div>
  );
};

export default DeleteQuestionBtn;
