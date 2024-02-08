import React, { useState } from "react";
import data from "./AccordionData";

const TextBox = ({ enableMulti }) => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelect(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    const cpyMultiple = [...multiple];
    const getIndexOfSelect = cpyMultiple.indexOf(getCurrentId); // it return -1 becoz value is not found
    if (getIndexOfSelect === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(getIndexOfSelect, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <>
      {data.map((items) => {
        return (
          <div
            key={items.id}
            className="bg-orange-900 text-white p-8 w-full max-w-lg m-5 cursor-pointer"
            onClick={
              enableMulti
                ? () => handleMultiSelection(items.id)
                : () => handleSingleSelect(items.id)
            }
          >
            <div className="flex items-center justify-between">
              <p>{items.question}</p>
              <span className="text-2xl">+</span>
            </div>
            {enableMulti
              ? multiple.indexOf(items.id) !== -1 && (
                  <div>
                    <p className="text-sm">{items.answer}</p>
                  </div>
                )
              : selected === items.id && (
                  <div>
                    <p className="text-sm">{items.answer}</p>
                  </div>
                )}
          </div>
        );
      })}
    </>
  );
};

export default TextBox;

// const [select, setSelect] = useState(null);
//   const [multi, setMulti] = useState([]);

//   function handleSingleSelection(getSelectID) {
//     setSelect(getSelectID === select ? null : getSelectID);
//   }

//   function handleMultiSelection(getSelectID) {
//     let cpyMultiple = [...multi];
//     const findeIndexOfCurrentId = cpyMultiple.indexOf(getSelectID);
//     if (findeIndexOfCurrentId === -1) {
//       cpyMultiple.push(getSelectID);
//     } else {
//       cpyMultiple.splice(findeIndexOfCurrentId, 1);
//     }
//     setMulti(cpyMultiple);
//   }

//   console.log(select, multi);

// {enableMulti
//     ? multi.indexOf(items.id) !== -1 && (
//         <div>
//           <p className="text-sm">{items.answer}</p>
//         </div>
//       )
//     : select === items.id && (
//         <div>
//           <p className="text-sm">{items.answer}</p>
//         </div>
//       )}

// onClick={
//     enableMulti
//       ? () => handleMultiSelection(items.id)
//       : () => handleSingleSelection(items.id)
//   }
