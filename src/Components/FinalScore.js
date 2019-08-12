import React from 'react';
import Finish from '../img/finish.gif'

const FinalScore = ({numberOfTries}) => {
  return(
    <div  className="question-container show final-score">
      <h1>You did it!</h1>
      <img src={Finish} />
      <h2>{`You did it in ${numberOfTries} ${numberOfTries > 1 ? 'tries' : 'try'}`}</h2>
    </div>
  );
}

export default FinalScore;
