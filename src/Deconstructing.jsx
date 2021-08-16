import React, { useState } from 'react';
import "./styles.css";

const employee = {
  id : "ABC",
  name : "A",
  salary : "10",
  address : {
   street : "10, jalan 21",
   country : "Malaysia",
  }
};
export default function App() {
  const { name, id ,salary, address } = employee;
  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{id}</h2>
      <h2>{salary}</h2>
      <h2>{address.street} {}</h2>
    </div>
  );
}