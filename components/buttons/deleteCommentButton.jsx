import React from "react";
import styles from "./button.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const DeleteCommentButton = ({ commentID }) => {
  const token = localStorage.getItem("user_jwt");

  const router = useRouter();
  const { id } = router.query;

  function deleteComment() {
    const idObj = {
      id: commentID,
    };
    axios
      .post(`http://localhost:3001/answer/${id}`, idObj, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  }

  return (
    <div className={styles.deleteWrapper}>
      <div onClick={deleteComment} className={styles.delete}>
        X
      </div>
    </div>
  );
};

export default DeleteCommentButton;
