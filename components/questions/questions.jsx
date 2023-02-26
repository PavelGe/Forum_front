import React from "react";
import styles from "./questions.module.css";
import axios from "axios";
import Question from "../question/question";
import { useState, useEffect } from "react";
import AnsweredBtn from "../buttons/answeredBtn";
import NotAnsweredBtn from "../buttons/notAnsweredBtn";
import ShowAllBtn from "../buttons/showAllBtn";

const Questions = () => {
  const [questions, setQuestions] = useState();
  const [showAnswered, setShowAnswered] = useState(false);
  const [showUnanswered, setShowUnanswered] = useState(false);

  const fetchQuestions = async () => {
    const response = await axios.get("http://localhost:3001/questions");
    setQuestions(response.data.questions);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleShowAnswered = () => {
    setShowAnswered(true);
    setShowUnanswered(false);
  };

  const handleShowUnanswered = () => {
    setShowUnanswered(true);
    setShowAnswered(false);
  };

  const handleShowAll = () => {
    setShowAnswered(false);
    setShowUnanswered(false);
  };

  const filteredQuestions = questions?.filter(
    (question) =>
      (showAnswered && question.commentCount > 0) ||
      (showUnanswered && question.commentCount === 0) ||
      (!showAnswered && !showUnanswered)
  );

  return (
    <div>
      <div className={styles.buttons}>
        <AnsweredBtn onClick={handleShowAnswered} />
        <NotAnsweredBtn onClick={handleShowUnanswered} />
        <ShowAllBtn onClick={handleShowAll} />
      </div>
      <div className={styles.main}>
        {questions && (
          <div className={styles.wrapper}>
            {filteredQuestions.map((question) => {
              return (
                <Question
                  id={question._id}
                  author={question.author}
                  title={question.title}
                  description={question.description}
                  commentCount={question.commentCount}
                  postDate={question.postDate}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Questions;
