import React, { useState } from "react";
import QRCode from "react-qr-code";
const QrCodeGenerator = () => {
  const [userInput, setUserInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const handleClick = () => {
    setQrCode(userInput);
    setUserInput("");
  };
  return (
    <div>
      <label htmlFor="codeVale">To Generate Your QR Code Enter Text</label>
      <div className="flex gap-2  my-10">
        <input
          type="text"
          id="codeVale"
          placeholder="enter your value here..."
          name="codeVale"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="text-blue-700 focus:outline-none p-2 rounded-lg"
          required
        />

        <button onClick={handleClick} className="p-2 bg-red-300 rounded-lg">
          generate now
        </button>
      </div>
      {qrCode.length > 0 ? (
        <QRCode value={qrCode} className="size-80 bg-white" />
      ) : null}
    </div>
  );
};

export default QrCodeGenerator;
