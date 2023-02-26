import React from "react";
import styles from "./question.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import Answers from "@/components/answers/answers";
import CommentForm from "@/components/commentForm/commentForm";
import DeleteQuestionBtn from "@/components/buttons/deleteQuestion";

export default function QuestionId({ question: questionData }) {
  const [question, setQuestion] = useState(questionData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkUser() {
    const user = localStorage.getItem("user_jwt");
    if (user) {
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div>
      <Navbar />

      <div className={styles.main}>
        <div className={styles.questionWrapper}>
          <div className={styles.questionMain}>
            <h1>{question[0].title}</h1>
            <p>{question[0].description}</p>
          </div>
          <div className={styles.author}>
            <p>Posted By: {question[0].author}</p>
          </div>
          {isLoggedIn && (
            <div className={styles.delete}>
              <DeleteQuestionBtn />
            </div>
          )}
        </div>
        <div>
          <CommentForm />
        </div>
        <div className={styles.answers}>
          <Answers />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(
    `http://localhost:3001/question/${query.id}`
  );
  return {
    props: {
      question: data.question,
    },
  };
}
