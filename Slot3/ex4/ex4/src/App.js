// src/App.js

import React from 'react';

function App() {
  // Arrow function sử dụng rest parameters
  const averageAge = (...ages) => {
    if (ages.length === 0) return 0;
    const total = ages.reduce((sum, age) => sum + age, 0);
    return (total / ages.length).toFixed(2); // Làm tròn 2 chữ số
  };

  // Gọi hàm với danh sách tuổi
  const avg = averageAge(50, 40, 19, 22, 16);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Average Age Calculator</h1>
      <p>Average Age: {avg}</p>
    </div>
  );
}

export default App;
