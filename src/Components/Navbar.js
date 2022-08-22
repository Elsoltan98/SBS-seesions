import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};

export default Navbar;
