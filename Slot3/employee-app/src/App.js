// src/App.js

import React from 'react';

function App() {
  const employee = { name: "John Doe", age: 30, department: "IT" };

  const { name, age, department } = employee;

  return (
    <span>
      <h1 style={{color: "red"}}>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </span>
      
    
  );
}

export default App;
