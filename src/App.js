import React from 'react';
import logo from './logo.svg';
import Documentation from "./Documentation";
import Counter from './Counter';
import Employee from './Employee';
import useEffect from './useEffect';
import './App.css';


function App() {
  const headerText = "Hello World";

  const employeeinfo = [
    {
      firstname: "Jack",
      lastname: "A1",
    },
    {
      firstname: "Jack2",
      lastname: "A2", 
    },
    {
      firstname: "Jack3",
      lastname: "A3", 
    },
    {
      firstname: "Jack4",
      lastname: "A4",  
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React {headerText}
        </p>
        <useEffect/>
        <Documentation/>
        <Counter />
        

        {/* <Employee firstname="A" lastname="1" />
        <Employee firstname="B" lastname="2" />
        <Employee firstname="C" lastname="3" />
        <Employee firstname="D" lastname="4" /> */}

        {employeeinfo.map((employee) => {
          // if use spreading this const not need
          const { firstname , lastname } = employee; 
          return (
            <Employee  firstname={firstname} lastname={lastname} />

            // OR we can just do spreading
            // return <Employee key={employee.employeeid} {...employee} />;
          );

        })}



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
