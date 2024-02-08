import React from "react";

const Buttons = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-2 m-2 p-1 bg-blue-500 text-white hover:bg-blue-800"
    >
      {children}
    </button>
  );
};

export default Buttons;
