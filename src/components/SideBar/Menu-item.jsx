import React, { useState } from "react";
import MenuList from "./Menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [displayItem, setDisplayItem] = useState({});

  function handleClick(label) {
    setDisplayItem({ ...displayItem, [label]: !displayItem[label] });
  }
  // console.log(displayItem);

  return (
    <li>
      <div className="flex items-center">
        <p className="text-3xl text-white font-bold">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span className="mx-2 text-white font-bold" onClick={() => handleClick(item.label)}>
            {displayItem[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayItem[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
