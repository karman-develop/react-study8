import React from "react";

export const TasksList = ({ items, handleChange }) => {
  const checkChange = (item) => {
    const updatedItem = { ...item, check: (item.check = !item.check) };
    console.log(updatedItem);
    handleChange(updatedItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {items.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={item.check}
              onChange={() => checkChange(item)}
            />
            {item.title}
            <button>Edit</button>
            <button>Delete</button>
          </label>
        ))}
      </form>
    </div>
  );
};
