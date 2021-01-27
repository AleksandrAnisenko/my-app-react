import React, { Component } from "react";
import AdditionSubtractionComponent from "../components/AdditionSubtractionComponent.js";

class AdditionSubtractionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: sessionStorage.getItem("count") || 1,
    };
  }

  incrementCount = () => {
    console.log(this.state.count);
    this.setState({ count: +this.state.count + 1 });
    sessionStorage.setItem("count", this.state.count + 1);
  };

  decrementCount = () => {
    this.setState({ count: +this.state.count - 1 });
    sessionStorage.setItem("count", this.state.count - 1);
  };

  render() {
    const { count } = this.state;

    return (
      <AdditionSubtractionComponent
        incrementClick={this.incrementCount}
        decrementClick={this.decrementCount}
        count={count}
      />
    );
  }
}

export default AdditionSubtractionContainer;
