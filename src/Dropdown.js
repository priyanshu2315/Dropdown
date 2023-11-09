import React, { useState } from "react";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("isopen");
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // You can implement the logic to handle option selection here
    console.log(`Selected: ${option}`);
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Open Dropdown
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li key={item} onClick={() => handleOptionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
