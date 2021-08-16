import React, { useState } from "react";
import "./styles.css";

const employees = ["A","B","C"];

export default function App() {
  return (   
    <div className="App">
    {employees.map((employee) => {
      return <h1> {employee} </h1>

    })}
 
    </div>
  );
}
 