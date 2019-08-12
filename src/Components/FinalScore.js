import React from 'react';
import Finish from '../img/finish.gif'

const FinalScore = ({numberOfTries}) => {
  return(
    <div  className="question-container show final-score">
      <h1>It's done</h1>
      <img src={Finish} />
      <p>{`It only took you ${numberOfTries} ${numberOfTries > 1 ? 'tries' : 'try'}`}</p>
      <p>We are so proud of you. Share your results on</p>
    </div>
  );
}

export default FinalScore;
