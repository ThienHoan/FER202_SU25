// src/App.js

import React, { useState } from 'react';

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Lọc nhân viên dựa trên tên (không phân biệt hoa thường)
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Employees</h1>
      <input
        type="text"
        placeholder="Enter name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
      />

      <ul style={{ marginTop: "20px" }}>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp, index) => (
            <li key={emp.id || index}>
              {emp.name} - {emp.department}
            </li>
          ))
        ) : (
          <li>No employees found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
