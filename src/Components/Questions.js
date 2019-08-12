import React, { Component } from 'react';
import Question from './Question';
import StatusBar from './StatusBar';
import QuestionData from './questionData';
import PopUp from './PopUp';
import FinalScore from './FinalScore';

class Questions extends Component  {

  state = {
    questionData: QuestionData,
    totalScore: 0,
    questionShow: 0,
    popUpShow: false,
    answCorrect: false,
    statusBar: 0,
    numberOfTries: 1,
    numberOfQuestions: QuestionData.length
  }

  checkAnswer = (index, answer) => {
    if (index === answer) {
      this.setState(prevState => ({
        totalScore: prevState.totalScore += 1,
        answCorrect: true
      }));
    } else {
      this.setState({answCorrect: false});

    }
    this.setState({popUpShow: true});
  }

  handleNextQuestion = () => {
    if (this.state.answCorrect) {
      this.setState({
        questionShow: this.state.questionShow + 1,
        popUpShow: false
      });
    } else {
      this.setState(prevState => ({
        totalScore: 0,
        questionShow: 0,
        answCorrect: false,
        popUpShow: false,
        statusBar: 0,
        numberOfTries: prevState.numberOfTries += 1
      }));
    }
  }

  handleStatusBar = () => {
    this.setState({statusBar: (100/this.state.questionData.length) * this.state.totalScore})
  }

  render() {

    const {questionData,
      questionShow,
      popUpShow,
      answCorrect,
      statusBar,
      numberOfQuestions,
      numberOfTries} = this.state;

    if (numberOfQuestions !== questionShow) {
      return(
        <div>
          <StatusBar status={statusBar}/>
        {questionData.map((data,index) =>
          <Question key={index}
          question={data.question}
          questionNumber={index}
          ansArr={data.answers}
          correctAnswer={data.correctAnswer}
          checkAnswer={this.checkAnswer}
          questionShow={questionShow}
          />)}
          <PopUp show={popUpShow}
          handleNextQuestion={this.handleNextQuestion}
          answerCorrect={answCorrect}
          setStatusBar={this.handleStatusBar}/>
        </div>
      );
    } else {
      return(
        <FinalScore numberOfTries={numberOfTries}/>
      )
    }

  }
}

export default Questions;
