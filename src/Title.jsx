import React from "react";

const Title = ({ children, testProp = "A" }) => {
  return (
    <p>
      {children} {testProp}
    </p>
  );
};

export default Title;
