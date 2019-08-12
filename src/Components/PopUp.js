import React from 'react';
import PopUpContent from './PopUpContent';

const PopUp = ({show, handleNextQuestion, answerCorrect, setStatusBar, lastQuestion}) => {

  console.log(lastQuestion);

  return (
    <div className={`pop-up-overlay ${!show ? 'hide' : 'show'}`}>
      <div className="pop-up">
        <i className="fal fa-times close"></i>
        <PopUpContent answerCorrect={answerCorrect} />
        {answerCorrect ? <button onClick={() => {handleNextQuestion();setStatusBar()}}>{!lastQuestion ? 'Next Question' : 'Finish Quiz'}</button> : <button onClick={() => {handleNextQuestion();setStatusBar()}}>Retry</button>}
      </div>
    </div>
  )
}

export default PopUp;
