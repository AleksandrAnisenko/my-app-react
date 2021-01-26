import React, { Component } from "react";
import WordGeneratorComponent from "../components/WordGeneratorComponent.js";

let randomWords = require("random-words");

class WordGeneratorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "New Word",
    };
  }

  generateWord = () => {
    let newWord = randomWords({ exactly: 1, Length: 6 });
    this.setState({ word: newWord });
  };

  render() {
    const { word } = this.state;

    return (
      <WordGeneratorComponent generateClick={this.generateWord} word={word} />
    );
  }
}

export default WordGeneratorContainer;
