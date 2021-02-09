import React from "react";
import Button from "@material-ui/core/Button";

const AdditionSubtraction = ({ addCount, funcIncrease, funcDecrease }) => {
  return (
    <div>
      <h3>{addCount}</h3>
      <Button onClick={funcIncrease}>+ 1</Button>
      <Button onClick={funcDecrease}>- 1</Button>
    </div>
  );
};

export default AdditionSubtraction;
