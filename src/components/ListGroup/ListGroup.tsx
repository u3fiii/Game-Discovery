import React, { useState } from "react";

const ListGroup = () => {
  let items = ["Tokyo", "New York", "London", "Paris", "Berlin"];

  const [selectedItems, setSelectedItems] = useState(-1);

  return (
    <div>
      <ul className="list-group">
        <h1>List</h1>
        {items.length === 0 && <p>No items to display</p>}
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedItems === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={() => {
                setSelectedItems(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
