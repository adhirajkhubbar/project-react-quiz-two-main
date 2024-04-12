import React, { Component } from "react";
import '../../../src/App.css'

export default class Home extends Component {

  onPlayClick = () => {
    this.props.playClick()
  }

  render() {
    return (
        <>
        <div className="start-parent">
            <div className="start-main">
            <div className="start-heading">
                Quiz App
            </div>
            <button onClick={this.onPlayClick}>Play</button>
            </div>
        </div>
        </>
    );
  }
}