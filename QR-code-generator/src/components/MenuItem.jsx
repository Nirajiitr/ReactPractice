import React, { useState } from "react";
import MenuList from "./MenuList";
import { BsNodeMinus, BsNodePlus } from "react-icons/bs";

const MenuItem = ({ lists }) => {
  const [displayCurrentLabel, setdisplayCurrentLabel] = useState({});
  const handleToggleChild = (currentId) => {
    setdisplayCurrentLabel({
      ...displayCurrentLabel,
      [currentId]: !displayCurrentLabel[currentId],
    });
  };

  return (
    <li className="mb-2">
      <div className="flex gap-1 items-center">
        <p
          onClick={() => handleToggleChild(lists.id)}
          className="text-xl cursor-pointer"
        >
          {lists.label}
        </p>
        {lists.children && (
          <span onClick={() => handleToggleChild(lists.id)}>
            {displayCurrentLabel[lists.id] ? (
              <BsNodeMinus className=" size-7 cursor-pointer" />
            ) : (
              <BsNodePlus className=" size-7 cursor-pointer" />
            )}
          </span>
        )}
      </div>

      {lists.children && displayCurrentLabel[lists.id] && (
        <div className="ml-12">
          <MenuList menu={lists.children} />
        </div>
      )}
    </li>
  );
};

export default MenuItem;
