import React from 'react';
import Incorrect from '../img/incorrect.gif';
import Correct from '../img/correct.gif';

const PopUpContent = ({answerCorrect}) => {
  if (answerCorrect) {
    return(
      <div>
        <h1>Could you BE anymore right?</h1>
        <img src={Correct} />
      </div>
    );
  } else {
    return(
      <div>
        <h1>Not Correct</h1>
        <img src={Incorrect} />
      </div>
    );
  }
}

export default PopUpContent;
