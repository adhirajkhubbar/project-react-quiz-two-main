import React from "react";
import quizQuestions from "../../resources/quizQuestion.json";
import "../../App.css";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
    };
  }

  handleNextClick = () => {
    const { currentQuestionIndex } = this.state;
    if (currentQuestionIndex < quizQuestions.length - 1) {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }));
    }
  };

  handlePreviousClick = () => {
    const { currentQuestionIndex } = this.state;
    if (currentQuestionIndex > 0) {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex - 1,
      }));
    }
  };

  handleQuitClick = () => {
    const confirmed = window.confirm("Are you sure you want to quit?");
    if (confirmed) {
      alert("You are now quitting the quiz.");
    }
  };

  render() {
    const { currentQuestionIndex } = this.state;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
      <div className="quiz-parent">
        <div className="quiz-main">
          <div className="quiz-question">
            <div className="quiz-question-1">Question {currentQuestionIndex + 1}</div>
            <div className="quiz-question-2">1 of {quizQuestions.length}</div>
            <div className="quiz-question-3">{currentQuestion.question}</div>
          </div>
          <div className="quiz-options">
            <button className="quiz-options-1">{currentQuestion.optionA}</button>
            <button className="quiz-options-2">{currentQuestion.optionB}</button>
            <button className="quiz-options-3">{currentQuestion.optionC}</button>
            <button className="quiz-options-4">{currentQuestion.optionD}</button>
          </div>
          <div className="quiz-navigate">
            <button className="quiz-navigate-1" onClick={this.handlePreviousClick}>Previous</button>
            <button className="quiz-navigate-2" onClick={this.handleNextClick}>Next</button>
            <button className="quiz-navigate-3" onClick={this.handleQuitClick}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
