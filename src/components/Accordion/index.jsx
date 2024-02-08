import React,{ useState } from "react";
import TextBox from "./TextBox";

const Accordion = () => {
  const [enableMulti, setEnableMulti] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <button
          type="button"
          className={
            enableMulti
              ? "text-white bg-blue-900 p-3 mt-2 border-2"
              : "bg-blue-500 text-white p-3 mt-2 border-2 hover:bg-blue-600"
          }
          onClick={() => setEnableMulti(!enableMulti)}
        >
          Enable Multi Selection
        </button>
        <TextBox enableMulti={enableMulti} />
      </div>
    </>
  );
};

export default Accordion;
