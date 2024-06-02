import { useState } from "react";
import { TasksList } from "./components/TasksList";

import { data } from "./components/data";

function App() {
  const [items, setItems] = useState(data);

  const handleChange = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    console.log(updatedItems);
  };

  return (
    <div className="App">
      <h2>Todo Matic</h2>
      <p>What to be done?</p>
      <div>
        <input type="text" name="" id="" />
        <button>Add</button>
      </div>
      <div>
        {items.length} tasks remining
        <TasksList items={items} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
