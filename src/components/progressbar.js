
//Reference link https://www.npmjs.com/package/react-step-progress-bar

import React from "react";
import './progressbar.css'
import { ProgressBar, Step } from "react-step-progress-bar";


class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar percent={this.props.step * 50}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              id={(this.props.step>=0?"active":"inactive")}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              id={(this.props.step>=1?"active":"inactive")}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
              id={(this.props.step>=2?"active":"inactive")}             
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default StepProgressBar;
