import React, { Component } from "react";
import MultiplicationDivisionComponent from "../components/MultiplicationDivisionComponent.js";

class MultiplicationDivisionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 4,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count * 4 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count / 4 });
  };

  render() {
    const { count } = this.state;

    return (
      <MultiplicationDivisionComponent
        incrementClick={this.incrementCount}
        decrementClick={this.decrementCount}
        count={count}
      />
    );
  }
}

export default MultiplicationDivisionContainer;
