import React from 'react';

const PopUpContent = ({answerCorrect, img}) => {

  if (answerCorrect) {
    return(
      <div>
        <h1>Could you BE anymore right?</h1>
        <img src={img} alt=""/>
      </div>
    );
  } else {
    return(
      <div>
        <h1>You are absolutly wrong!</h1>
        <img src={img} alt=""/>
      </div>
    );
  }
}

export default PopUpContent;
