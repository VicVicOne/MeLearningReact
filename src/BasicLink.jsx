import React from "react";
import { useState } from "react";
import Title from "./Title";

const BasicLink = ({ listObjects, title, handleFunction }) => {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event, item, index) => {
    console.log("Item clicked: ", item);
    console.log("Event: ", event);
    setSelectedIndex(index);
    window.open("https://example.com", "_blank");
    handleFunction(item);
  };

  return (
    <>
      <Title testProp="">{title}</Title>
      {!listObjects || (listObjects.length === 0 && <div>No items found</div>)}
      {listObjects.map((item, index) => (
        <div key={index}>
          <span
            className={`App-link${selectedIndex === index ? "-selected" : ""}`}
            onClick={(event) => handleClick(event, item, index)}
          >
            {item}
          </span>
        </div>
      ))}
    </>
  );
};

export default BasicLink;
