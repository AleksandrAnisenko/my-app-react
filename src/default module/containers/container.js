import React, { Component } from "react";
import SimpleTabs from "../components/Tabs";
let randomWords = require("random-words");

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCount: 1,
      multiCount: 1,
      word: "New word",
    };
  }

  addition = () => {
    this.setState((state) => ({
      addCount: this.state.addCount + 1,
    }));
  };

  subtraction = () => {
    this.setState((state) => ({
      addCount: this.state.addCount - 1,
    }));
  };

  multiplication = () => {
    this.setState((state) => ({
      multiCount: state.multiCount * 4,
    }));
  };

  division = () => {
    this.setState((state) => ({
      multiCount: state.multiCount / 4,
    }));
  };

  funcGeneration = () => {
    let newWord = randomWords({ exactly: 1, maxLength: 7 });
    if (newWord[0].length !== 6) {
      do {
        newWord = randomWords({ exactly: 1, maxLength: 7 });
      } while (newWord[0].length !== 6);
    }
    this.setState({ word: newWord });
  };

  render() {
    return (
      <div>
        <SimpleTabs
          {...this.state}
          funcIncrease={this.addition}
          funcDecrease={this.subtraction}
          multiFunc={this.multiplication}
          divfunc={this.division}
          funcGeneration={this.funcGeneration}
        />
      </div>
    );
  }
}

export default Container;
