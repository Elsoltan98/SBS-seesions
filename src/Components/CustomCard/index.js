import React from "react";
import "./style.css";
const CustomCard = ({ name, age, image, jobTitle }) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} width={200} />
      <h4>Name: {name}</h4>
      <p>Job Title: {jobTitle}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default CustomCard;
