import React, { useState } from "react";
import "./../style.css";
import { data } from "../_mockup";

const CustomForm = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState();
  const [password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <label>First Name: </label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>E-mail: </label>
        <input
          type="email"
          placeholder="example@io.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password: </label>
        <input
          type="password"
          placeholder="Confirm password"
          value={CPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {show && (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                <th>Gender</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{firstName}</th>
                <th>{lastName}</th>
                <th>{email}</th>
                <th>{gender}</th>
                <th>{password}</th>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CustomForm;
