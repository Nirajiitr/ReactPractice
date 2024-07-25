import React, { useState } from "react";
import { products } from "./data";

const Products = () => {
  const [selected, setSelected] = useState(null);
  const [mutiSelect, setMultiSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [rendomColor, setRendomColor] = useState("#000");
  const handleBGchange = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * hex.length)];
    }
    setRendomColor(color);
  };
  const handleMultiSelect = (id) => {
    let copySelectedItem = [...selectedItem];
    const findId = copySelectedItem.indexOf(id);
    if (findId === -1) {
      copySelectedItem.push(id);
    } else {
      copySelectedItem.splice(findId, 1);
    }
    setSelectedItem(copySelectedItem);
  };
  const handleSingleSelect = (id) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <div
      style={{ backgroundColor: rendomColor }}
      className={`flex text-white  items-center gap-2 flex-col `}
    >
      <div className="flex justify-between w-full items-center px-10">
        <button
          onClick={() => setMultiSelect(!mutiSelect)}
          className="mt-10 p-3 rounded-full bg-[#ffd100] font-bold"
        >
          Enable Multi Selection
        </button>
        <button
          onClick={handleBGchange}
          className="mt-10 p-3 rounded-full bg-[#ff00f7] font-bold"
        >
          rendom background color generator
        </button>
      </div>

      {products && products.length > 0 ? (
        products.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="m-5 rounded-lg cursor-pointer bg-slate-800 text-white w-96  p-5 flex justify-between "
                onClick={() =>
                  mutiSelect
                    ? handleMultiSelect(item.id)
                    : handleSingleSelect(item.id)
                }
              >
                <h1>{item.title}</h1>
                <span>
                  {" "}
                  {selected == item.id || selectedItem.indexOf(item.id) !== -1
                    ? "△"
                    : "▽"}
                </span>
              </div>
              {mutiSelect
                ? selectedItem.indexOf(item.id) !== -1 && (
                    <div className="bg-gray-500 w-80 rounded-3xl p-5 mt-0">
                     <p>{item.description}</p> 
                     
                    </div>
                  )
                : selected == item.id && (
                    <div className="bg-gray-500 w-80 rounded-3xl p-5 m-5">
                     <p>{item.description}</p> 
                    </div>
                  )}
            </>
          );
        })
      ) : (
        <div>no data present</div>
      )}
    </div>
  );
};
export default Products;
