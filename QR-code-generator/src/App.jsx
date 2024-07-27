import React, { useEffect, useState } from "react";
import MenuList from "./components/MenuList";
import { sideMenu } from "./components/data";
import { RxCrossCircled } from "react-icons/rx";
import { BsList } from "react-icons/bs";
import QrCodeGenerator from "./components/QrCodeGenerator";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const App = () => {
  const theme = "light";
  const SideKey = "sidebar";
  const [sideBar, setSideBar] = useState(
    JSON.parse(localStorage.getItem(SideKey) || true)
  );
  const [light, setLight] = useState(
    JSON.parse(localStorage.getItem(theme) || false)
  );
  const handleClick = () => {
    setLight((prev) => !prev);
  };
  useEffect(() => {
    localStorage.setItem(theme, JSON.stringify(light));
    localStorage.setItem(SideKey, JSON.stringify(sideBar));
  }, [light, theme, sideBar, SideKey]);
  return (
    <div
      className={`h-screen w-screen relative flex ${
        light ? "bg-white text-black" : "bg-black text-white"
      } `}
    >
      {light ? (
        <MdDarkMode
          onClick={handleClick}
          className={`size-20 ${
            light ? "text-black" : "text-white"
          } absolute top-1 left-1 cursor-pointer`}
        />
      ) : (
        <CiLight
          onClick={handleClick}
          className={`size-20 ${
            light ? "text-black" : "text-white"
          } absolute top-1 left-1 cursor-pointer`}
        />
      )}

      <div className=" w-full flex justify-center items-center ">
        <QrCodeGenerator />
      </div>
      <div className="h-full">
        <div
          className={`p-3 h-full justify-between relative w-80 bg-gray-500 ${
            sideBar ? "flex" : "hidden"
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
