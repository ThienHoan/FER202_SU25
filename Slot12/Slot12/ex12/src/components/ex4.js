import React, { useState } from "react";

function Exercise4() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState("name");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Thêm item mới
  const handleAdd = () => {
    if (input.trim() === "") return;
    setItems([
      ...items,
      {
        name: input,
        created: new Date().getTime(),
      },
    ]);
    setInput("");
  };

  // Xóa item
  const handleRemove = (idx) => {
    setItems(items.filter((_, i) => i !== idx));
    if (editingIndex === idx) setEditingIndex(null);
  };

  // Bật edit
  const handleEdit = (idx) => {
    setEditingIndex(idx);
    setEditValue(items[idx].name);
  };

  // Lưu edit
  const handleSave = (idx) => {
    if (editValue.trim() === "") return;
    const newItems = items.map((item, i) =>
      i === idx ? { ...item, name: editValue } : item
    );
    setItems(newItems);
    setEditingIndex(null);
  };

  // Hủy edit
  const handleCancel = () => {
    setEditingIndex(null);
  };

  // Sắp xếp
  const sortedItems = [...items].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name, "vi");
    return a.created - b.created;
  });

  return (
    <div style={{ maxWidth: 420, margin: "32px auto", fontFamily: "sans-serif" }}>
      <div style={{ fontSize: 18, marginBottom: 5 }}>Enter Item:</div>
      <input
        type="text"
        placeholder="Enter item name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          padding: "8px 10px",
          marginBottom: 10,
          fontSize: 16,
          borderRadius: 4,
          border: "1px solid #bbb",
          outline: "none"
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          style={{
            background: "#1976d2",
            color: "#fff",
            fontWeight: 600,
            border: "none",
            padding: "7px 18px",
            borderRadius: 8,
            marginBottom: 8,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 1px 3px #0001",
          }}
          onClick={handleAdd}
        >
          Add Item
        </button>
        <select
          value={sortType}
          onChange={e => setSortType(e.target.value)}
          style={{
            fontSize: 16,
            borderRadius: 8,
            padding: "7px 12px",
            marginLeft: 8,
            marginBottom: 8,
            border: "1px solid #bbb",
            background: "#f3f6fa"
          }}
        >
          <option value="name">Sort by Name</option>
          <option value="created">Sort by Created Time</option>
        </select>
      </div>
      <div style={{
        background: "#f4f4f4",
        borderRadius: 12,
        padding: 14,
        marginTop: 18,
        minHeight: 80,
        boxShadow: "0 1px 3px #0001"
      }}>
        {sortedItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: 9,
              display: "flex",
              alignItems: "center",
              background: editingIndex === idx ? "#f0f0f0" : "transparent",
              borderRadius: 8,
              padding: editingIndex === idx ? "8px" : "0px",
              boxShadow: editingIndex === idx ? "0 1px 3px #0002" : "none"
            }}
          >
            {editingIndex === idx ? (
              <>
                <input
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  style={{
                    flex: 1,
                    marginRight: 8,
                    padding: "7px 10px",
                    fontSize: 16,
                    borderRadius: 6,
                    border: "1px solid #bbb",
                  }}
                />
                <button
                  onClick={() => handleSave(idx)}
                  style={{
                    background: "#26c281",
                    color: "#fff",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: 5,
                    padding: "6px 14px",
                    fontSize: 15,
                    marginRight: 3,
                  }}
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  style={{
                    background: "#757575",
                    color: "#fff",
                    border: "none",
                    borderRadius: 5,
                    padding: "6px 14px",
                    fontSize: 15,
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span style={{ flex: 1, fontSize: 16 }}>{item.name}</span>
                <button
                  onClick={() => handleEdit(idx)}
                  style={{
                    background: "#ffd600",
                    color: "#333",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: 5,
                    padding: "6px 14px",
                    fontSize: 15,
                    marginRight: 5,
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(idx)}
                  style={{
                    background: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: 5,
                    padding: "6px 14px",
                    fontSize: 15,
                  }}
                >
                  Remove
                </button>
              </>
            )}
          </div>
        ))}
        {sortedItems.length === 0 && (
          <div style={{ color: "#888", textAlign: "center", padding: "8px 0" }}>
            (No items)
          </div>
        )}
      </div>
    </div>
  );
}

export default Exercise4;
