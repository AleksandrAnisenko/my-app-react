import React from "react";

import Button from "@material-ui/core/Button";

const WordGenerator = ({ generatedWord, funcGeneration }) => {
  return (
    <div>
      <h3>{generatedWord}</h3>
      <Button onClick={funcGeneration}>Generate word</Button>
    </div>
  );
};

export default WordGenerator;
