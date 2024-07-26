import React, { useState } from "react";
import MenuList from "./components/MenuList";
import { sideMenu } from "./components/data";
import { RxCrossCircled } from "react-icons/rx";
import { BsList } from "react-icons/bs";
import QrCodeGenerator from "./components/QrCodeGenerator";
const App = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="h-screen w-screen flex bg-black text-white">
      <div className=" w-full flex justify-center items-center ">
        <QrCodeGenerator />
      </div>
      <div className="h-full">
        <div
          className={`p-3 h-full justify-between relative w-80 bg-slate-700 ${
            sideBar ? "hidden" : "flex"
          }`}
        >
          <MenuList menu={sideMenu} />
        </div>
        <div>
          {sideBar ? (
            <BsList
              onClick={() => setSideBar((prev) => !prev)}
              className="size-11 top-1 absolute right-1 cursor-pointer"
            />
          ) : (
            <RxCrossCircled
              onClick={() => setSideBar((prev) => !prev)}
              className="size-11 top-1 right-1 absolute cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
