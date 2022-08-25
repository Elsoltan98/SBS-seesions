import React from "react";

const Navbar = ({ name, handleClick }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Navbar;
