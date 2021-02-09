import React from "react";

import Button from "@material-ui/core/Button";

const MultiplicationDivision = ({ multiCount, multiFunc, divfunc }) => {
  return (
    <div>
      <h3>{multiCount}</h3>
      <Button onClick={multiFunc}>* 4</Button>
      <Button onClick={divfunc}>/ 4</Button>
    </div>
  );
};

export default MultiplicationDivision;
