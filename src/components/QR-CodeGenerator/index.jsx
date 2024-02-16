import React, { useState } from "react";
import QRcode from "./QRCode";

const QRgenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setqrCode] = useState("");

  function handleSubmit() {
    setqrCode(input);
    setInput('');
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className="text-6xl font-bold my-3">QR Code Generator</h1>
      <div className="flex items-center gap-2">
        <input
          placeholder="Enter Text and URl..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="qr-code"
          className="border-2 border-black rounded-md px-2 py-1 w-72"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleSubmit}
          className="border-2 border-blue-500 rounded-md px-2 py-1 bg-blue-500 text-white hover:bg-blue-800 active:bg-black disabled:bg-slate-400 disabled:border-none"
        >
          Generate
        </button>
      </div>
      <div className="my-4">
        <QRcode value={qrCode} size={400} bgColor="white" />
      </div>
      <p className="text-xl">Your URl or Text: {qrCode}</p>
    </div>
  );
};

export default QRgenerator;
