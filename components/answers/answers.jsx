import React from "react";
import styles from "./answers.module.css";
import axios from "axios";
import Answer from "../answer/answer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Answers = () => {
  const [answers, setAnswers] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  const fetchAnswers = async () => {
    const response = await axios.get(
      `http://localhost:3001/question/${id}/answers`
    );
    setAnswers(response.data.answers);
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  return (
    <div className={styles.main}>
      <div></div>
      {answers &&
        answers.map((answer) => {
          return (
            <Answer
              id={answer._id}
              author={answer.author}
              answer={answer.answer}
              numberOfLikes={answer.likeCount}
            />
          );
        })}
    </div>
  );
};

export default Answers;
