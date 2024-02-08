import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";

const BackgroundChanger = () => {
  const [generateColor, setGenerateColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState('Hex');

  function handleRandomColor() {
    if (typeOfColor === "RGB") {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      setGenerateColor(`rgb(${r}, ${g}, ${b})`);
    } else if(typeOfColor === "Hex") {
      let letters = "1234567890ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      setGenerateColor(color);
    }
  }

  useEffect(() => {
    handleRandomColor()
  }, [typeOfColor]);


  return (
    <div className="w-full h-screen" style={{ background: generateColor }}>
      <div className="flex gap-5 content-center justify-center">
        <Buttons onClick={() => setTypeOfColor('Hex')}>Create HEX Color</Buttons>
        <Buttons onClick={() => setTypeOfColor('RGB')}>
          Create RGB Color
        </Buttons>
        <Buttons onClick={handleRandomColor}>Generate Random Color</Buttons>
      </div>
      <div className="flex content-center justify-center mt-14">
        <h1 className="text-white text-5xl">{`${typeOfColor} : ${generateColor}`}</h1>
      </div>
    </div>
  );
};

export default BackgroundChanger;
