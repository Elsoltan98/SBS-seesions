import React from "react";
import CustomCard from "../CustomCard";
import { data } from "./../../_mockup";
import "./style.css";
const Clients = () => {
  return (
    <div className="clients-container">
      {data.map((item) => (
        <CustomCard
          key={item.id}
          name={item.name}
          jobTitle={item.job}
          age={item.age}
          image={item.img}
        />
      ))}
    </div>
  );
};

export default Clients;
