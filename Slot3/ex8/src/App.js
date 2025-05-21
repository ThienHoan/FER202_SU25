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

  // Nhóm nhân viên theo phòng ban
  const groupedByDepartment = employees.reduce((grouped, emp) => {
    const dept = emp.department;
    if (!grouped[dept]) {
      grouped[dept] = [];
    }
    grouped[dept].push(emp);
    return grouped;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employees Grouped by Department</h1>

      {Object.entries(groupedByDepartment).map(([department, empList]) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {empList.map((emp, index) => (
              <li key={emp.id || index}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
