import React, { useState } from "react";
import { data } from "./data";
import { Button } from "react-bootstrap";
import "./styles.css";
export default function Question() {
  const [questionNo, setQuestionNumber] = useState(0);
  const [selectedAns, setAnswer] = useState("");
  const nextClickHandler = () => {
    setQuestionNumber(questionNo + 1);
    setAnswer("");
  };
  const previousClickHandler = () => {
    setQuestionNumber(questionNo - 1);
    setAnswer("");
  };
  const submitClickHandler = () => {
    alert("Answer Submitted Successfully");
  };
  const changeAnswer = e => {
    setAnswer(e.target.value);
  };
  const showAnswerClickHandler = () => {
    alert("Answer is : " + data[questionNo].answer);
  };
  const length = data.length;
  return (
    <div>
      <div className="question-container">
        {questionNo + 1}. {data[questionNo].question}{" "}
      </div>
      <div className="option-container">
        {data[questionNo].options.map((ans, key) => {
          return (
            <div>
              <input
                type="radio"
                name="radio"
                value={ans.id}
                checked={ans.id === selectedAns}
                onChange={changeAnswer}
              />
              {ans.option}
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <Button
          className={questionNo !== 0 ? "style-button" : "disable-button"}
          disabled={questionNo === 0}
          onClick={() => previousClickHandler()}
        >
          {" "}
          Previous{" "}
        </Button>

        <Button className="style-button" onClick={() => submitClickHandler()}>
          {" "}
          Submit Answer{" "}
        </Button>
        <Button
          className={
            questionNo !== length - 1 ? "style-button" : "disable-button"
          }
          disabled={questionNo === length - 1}
          onClick={() => nextClickHandler()}
        >
          {" "}
          Next{" "}
        </Button>

        <Button
          className="show-answer"
          onClick={() => showAnswerClickHandler()}
        >
          {" "}
          Show Answer{" "}
        </Button>
      </div>
    </div>
  );
}
