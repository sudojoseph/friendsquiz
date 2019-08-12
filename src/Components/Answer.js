import React from 'react';

const Answer = ({answer, order, correctAnswer,checkAnswer}) => {
  return(
    <li onClick={() => checkAnswer(order, correctAnswer)}>{answer}</li>
  );
}

export default Answer;
