import Button from "@material-ui/core/Button";

const WordGeneratorComponent = ({ word, generateClick }) => {
  return (
    <div className="App">
      <div>{word}</div>
      <div>
        <Button onClick={generateClick}>Generate new word</Button>
      </div>
    </div>
  );
};

export default WordGeneratorComponent;
