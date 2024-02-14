import React, { useState } from "react";
import InputSection from "./InputSection";

const ToDo = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center bg-blue-400 w-full max-w-5xl">
          <h1 className="text-6xl my-5 font-bold">To Do Lists</h1>
          <InputSection />
        </div>
      </div>
    </>
  );
};

export default ToDo;
