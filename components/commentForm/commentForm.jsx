import React from "react";
import styles from "./comment.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const AnsweredContext = React.createContext();

const CommentForm = () => {
  const [answer, setAnswer] = useState();
  const [commentAction, setCommentAction] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  function SubmitAnswer() {
    const token = localStorage.getItem("user_jwt");
    const author = localStorage.getItem("username");
    const comment = {
      author: author,
      answer: answer,
    };
    axios
      .post(`http://localhost:3001/question/${id}/answer`, comment, {
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
      .catch((err) => {
        console.log(err);
        alert(`Wrong credentials, status message: ${err}`);
      });
    window.location.reload();
  }

  function valueAssign(event) {
    setAnswer(event.target.value);
  }

  function onClickHandler() {
    if (!isLoggedIn) {
      router.push("/login");
    } else setCommentAction(true);
  }

  useEffect(() => {
    const token = localStorage.getItem("user_jwt");
    function checkUser() {
      if (token) {
        setIsLoggedIn(true);
      }
    }
    checkUser();
  }, []);

  return (
    <div className={styles.main}>
      {commentAction && (
        <div className={styles.answerArea}>
          <h4>Your Answer</h4>
          <textarea
            onChange={valueAssign}
            className={styles.textarea}
          ></textarea>
          <button onClick={SubmitAnswer}>Submit Answer</button>
        </div>
      )}
      {!commentAction && (
        <button onClick={onClickHandler}>Answer Question</button>
      )}
    </div>
  );
};

export default CommentForm;
