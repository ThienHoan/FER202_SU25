import React from "react";

const people = [
  { name: "Alice", age: 30, occupation: "Engineer" },
  { name: "Bob", age: 25, occupation: "Designer" },
  { name: "Charlie", age: 35, occupation: "Teacher" },
];

const ListNameFull = () => {
  return (
    <div>
      <h2>People Details</h2>
      {people.map((person, index) => (
        <div
          key={index}
          style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}
        >
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
      ))}
    </div>
  );
};

export default ListNameFull;
