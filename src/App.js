import React from "react";
import Dropdown from "./Dropdown";
import "./styles.css";
function App() {
  const items = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="App">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
