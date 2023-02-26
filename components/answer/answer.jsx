import React from "react";
import styles from "./answer.module.css";
import DeleteCommentButton from "../buttons/deleteCommentButton";
import { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

const Answer = ({ id, author, answer, numberOfLikes }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [likeCount, setLikeCount] = useState(numberOfLikes);

  useEffect(() => {
    const token = localStorage.getItem("user_jwt");
    function checkUser() {
      if (token) {
        setIsLoggedIn(true);
      }
    }
    checkUser();
  }, []);

  function handleLike() {
    const token = localStorage.getItem("user_jwt");

    if (!token) {
      Router.push("/login");
    } else {
      const answerID = {
        id: id,
      };

      axios
        .post("http://localhost:3001/like/answer", answerID, {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then((data) => {
          if (data.status == 201) {
            setLikeCount(likeCount + 1);
          }
        });
    }
  }

  function handleDislike() {
    const token = localStorage.getItem("user_jwt");
    if (!token) {
      Router.push("/login");
    } else {
      const answerID = {
        id: id,
      };

      axios
        .post("http://localhost:3001/dislike/answer", answerID, {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        .then((data) => {
          if (data.status !== 202) {
            setLikeCount(likeCount - 1);
          }
        });
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.likeWrapper}>
        <div onClick={handleLike} className={styles.arrowUp}></div>
        <div className={styles.likeCount}>{likeCount}</div>
        <div onClick={handleDislike} className={styles.arrowDown}></div>
      </div>
      <p>{answer}</p>
      <div className={styles.author}>{author}</div>
      {isLoggedIn && <DeleteCommentButton commentID={id} />}
    </div>
  );
};

export default Answer;
