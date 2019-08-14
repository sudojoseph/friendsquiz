import React from 'react';
import Finish from '../img/finish.gif'

const FinalScore = ({numberOfTries}) => {
  const url = window.location.href;
  return(
    <div  className="question-container show final-score">
      <h1>You did it. All the questions, front and back</h1>
      <img src={Finish} alt=""/>
      <p>{`It only took you ${numberOfTries} ${numberOfTries > 1 ? 'tries' : 'try'}`}</p>
      <p>We are so proud of you. <span><a target="_blank" href={`https://www.facebook.com/share.php?u=google.com&quote=It only took me ${numberOfTries} ${numberOfTries > 1 ? 'tries' : 'try'} to finish the ULTIMATE FRIENDS QUIZ on ${url}. Try it yourself and see how far you get!`}>Share</a></span> your results on FaceBook</p>
    </div>
  );
}

export default FinalScore;
