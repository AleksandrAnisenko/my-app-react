import Button from "@material-ui/core/Button";

const MultiplicationDivisionComponent = ({
  count,
  incrementClick,
  decrementClick,
}) => {
  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <Button onClick={incrementClick}>* 4</Button>
        <Button onClick={decrementClick}>/ 4</Button>
      </div>
    </div>
  );
};

export default MultiplicationDivisionComponent;
