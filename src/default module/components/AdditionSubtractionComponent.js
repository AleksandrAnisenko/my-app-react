import Button from "@material-ui/core/Button";

const AdditionSubtractionComponent = ({
  count,
  incrementClick,
  decrementClick,
}) => {
  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <Button onClick={incrementClick}>+ 1</Button>
        <Button onClick={decrementClick}>- 1</Button>
      </div>
    </div>
  );
};

export default AdditionSubtractionComponent;
