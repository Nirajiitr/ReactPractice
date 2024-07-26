import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ menu = [] }) => {
  return (
    <ul className="list-none p-0">
      {menu && menu.length
        ? menu.map((lists) => {
            return <MenuItem lists={lists} key={lists.id} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
