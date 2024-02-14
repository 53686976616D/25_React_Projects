import React from "react";
import MenuItem from "./Menu-item";

const MenuList = ({ list }) => {

  return (
    <ul className="w-fit h-full p-5 bg-blue-500">
      {list && list.length ? list.map((listItem, index) => (
        <MenuItem item={listItem} key={index} />
      )) : null}
    </ul>
  );
};

export default MenuList;
