import React from 'react';
import Answer from './Answer';

const Question = ({question, ansArr, correctAnswer, checkAnswer, questionNumber, questionShow, numberOfQuestions}) => {

  const show = questionShow === questionNumber ? 'show' : '';
  const classes = `question-container ${show}`;

  return(
    <div className={classes}>
      <h1>{question}</h1>
      <ul>
        {ansArr.map((answer, index) =>
          <Answer text answer={answer} key={index} order={index} correctAnswer={correctAnswer} checkAnswer={checkAnswer}/>)}
      </ul>
    </div>
  );
}

export default Question;
