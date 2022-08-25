import React, { useState } from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CustomForm from "./Components/CustomForm";
import avatar from "./assets/person.jpg";

function App() {
  const obj = {
    a: "Abdo",
    b: "Mohamed",
    c: {
      age: 32,
      gender: "Male",
    },
  };

  const {
    a,
    b,
    c: { age, gender },
  } = obj;
  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
      <p>{age}</p>
      <p>{gender}</p>
    </div>
  );
}

const App2 = () => {
  return <Navbar name="Abdelhameed" />;
};

export { App, App2 };

// StateMangement => Redux - ContextApi - Redux-toolkit

// App -> Child -> Child -> Chlid
