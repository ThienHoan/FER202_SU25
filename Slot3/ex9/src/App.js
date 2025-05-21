import React from 'react';

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Kiểm tra nếu có nhân viên là thiếu niên (10 <= age <= 20)
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Teenager Check</h1>
      <p>Any teenager in employees? → <strong>{isTeenager.toString()}</strong></p>
    </div>
  );
}

export default App;