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

  // Tạo bản sao mảng và sắp xếp
  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) {
      return deptCompare; // khác phòng -> dùng kết quả so sánh phòng ban
    }
    return a.name.localeCompare(b.name); // cùng phòng -> so sánh tên
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sorted Employees</h1>
      <ul>
        {sortedEmployees.map((employee, index) => (
          <li key={employee.id || index}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
