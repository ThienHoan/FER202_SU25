// src/App.js

import React from 'react';

function App() {
  // Bước 1: Khai báo object employee
  const employee = { name: "John Doe", age: 30, department: "IT" };

  // Bước 2: Dùng object destructuring
  const { name, age, department } = employee;

  // Bước 3: Trả về JSX với thông tin đã destructure
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default App;
