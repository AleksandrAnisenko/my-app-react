import React, { Component } from "react";
import WordGeneratorComponent from "../components/WordGeneratorComponent.js";

let randomWords = require("random-words");
function checkWordLength() {
  let newWord = randomWords(1);
  if (newWord[0].length === 6) {
    return newWord[0];
  } else {
    return checkWordLength();
  }
}

class WordGeneratorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: sessionStorage.getItem("generatedWord") || "New Word",
    };
  }

  generateWord = () => {
    this.setState({ word: checkWordLength() });
    sessionStorage.setItem("generatedWord", this.state.word);
  };

  render() {
    const { word } = this.state;

    return (
      <WordGeneratorComponent generateClick={this.generateWord} word={word} />
    );
  }
}

export default WordGeneratorContainer;
