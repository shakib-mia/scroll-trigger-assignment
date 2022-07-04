import React from "react";

const Title = ({ part1, part2, part3 }) => {
  return (
    <div>
      <h6>{part1}</h6>
      <h1>{part2}</h1>
      <h6>{part3}</h6>
    </div>
  );
};

export default Title;
