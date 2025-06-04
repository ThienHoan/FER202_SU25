// src/App.js

import React from 'react';

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Lọc nhân viên phòng IT
  const itEmployees = employees.filter(emp => emp.department === "IT");

  const employeeList = [];
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    employeeList.push(
      <li key={employee.id}>{employee.name}</li>
    );
  }

  
  return (
    <div style={{ padding: "20px" }}>
      <h1>IT Department Employees</h1>
      <ul>{employeeList}</ul>
    </div>
  );
}

export default App;
