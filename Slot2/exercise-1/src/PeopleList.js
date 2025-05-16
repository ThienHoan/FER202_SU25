// PeopleList.js
import React from "react";

const people = [
  { name: "Alice", age: 30, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 35, occupation: "Teacher" },
];

const PeopleList = () => {
  const person = people[0]; // ✅ Chỉ lấy người đầu tiên (Alice)

  return (
    <div>
      <h2>Person Details</h2>
      <p>
        <strong>Name:</strong> {person.name}
      </p>
      <p>
        <strong>Age:</strong> {person.age}
      </p>
      <p>
        <strong>Occupation:</strong> {person.occupation}
      </p>
    </div>
  );
};

export default PeopleList;
