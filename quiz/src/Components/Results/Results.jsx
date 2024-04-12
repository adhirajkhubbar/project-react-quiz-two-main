import React from "react";
import "../../App.css";

class Results extends React.Component {
  render() {
    return (
      <div className="results-parent">
        <div className="results-head">Results</div>
        <div className="results-main">
          <div className="results-response">You need to improve!</div>
          <div className="results-score">Your score is 20%</div>
          <div className="results-details">
            <div className="results-details-1">
              <div className="results-details-1a">Total Number of Questions</div>
              <div className="results-details-1b">15</div>
            </div>
            <div className="results-details-2">
              <div className="results-details-2a">Number of Attempted Questions</div>
              <div className="results-details-2b">9</div>
            </div>
            <div className="results-details-3">
              <div className="results-details-3a">Number of Correct Answers</div>
              <div className="results-details-3b">3</div>
            </div>
            <div className="results-details-4">
              <div className="results-details-4a">Number of Wrong Answers</div>
              <div className="results-details-4b">6</div>
            </div>
          </div>
          <div className="results-buttons">
            <button className="results-button-again" onClick={this.props.onPlayAgainBtn}>Play Again</button>
            <button className="results-button-exit" onClick={this.props.onBackToHomeBtn}>Exit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
