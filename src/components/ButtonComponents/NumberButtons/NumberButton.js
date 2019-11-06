import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="button-container">
        <button>{props.number}</button>
      </div>
    </>
  );
};

export default NumberButton;