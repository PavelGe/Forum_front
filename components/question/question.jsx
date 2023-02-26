import React from "react";
import styles from "./question.module.css";
import Router from "next/router";

const QuestionID = ({
  author,
  title,
  description,
  id,
  commentCount,
  postDate,
}) => {
  function onClickHandler() {
    Router.push(`/question/${id}`);
  }

  return (
    <div className={styles.main}>
      <div className={styles.commentCounter}>{commentCount} answers</div>
      <div className={styles.question}>
        <h1 onClick={onClickHandler} className={styles.title}>
          {title}
        </h1>
        <p>{description}</p>
      </div>
      <div className={styles.author}>
        <span>Author: {author}</span>
        <span>{postDate}</span>
      </div>
    </div>
  );
};

export default QuestionID;
