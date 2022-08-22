import React, { useState } from "react";
import "./../style.css";
const CustomForm = () => {
  const [firstName, setFirstName] = useState("");

  console.log(firstName);

  // Todo App

  return (
    <div className="container">
      <form className="form-container">
        <label>First Name: </label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name: </label>
        <input type="text" placeholder="Enter Last Name" />
        <label>E-mail: </label>
        <input type="email" placeholder="example@io.com" />
        <label>Gender: </label>
        <select>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label>Password: </label>
        <input type="password" placeholder="Enter password" />
        <label>Confirm Password: </label>
        <input type="password" placeholder="Confirm password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CustomForm;
