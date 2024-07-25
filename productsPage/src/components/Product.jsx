import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Product = ({ products }) => {
  const noOfStar = 5;
  const localStoragekey = `starRatting-${products.id}`;
  const initialstar = parseInt(localStorage.getItem(localStoragekey)) || 0;
  const [rating, setRating] = useState(initialstar);
  const [hover, setHover] = useState(0);
  const handleClick = (currentIndex) => {
    setRating(currentIndex);
    localStorage.setItem(localStoragekey, currentIndex);
  };
  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };
  const handleMouseLeave = (currentIndex) => {
    setHover(rating);
  };

  return (
    <div className=" w-60 bg-white rounded-xl p-3 overflow-auto">
      <img
        className=" object-cover h-52 w-full"
        src={products.images[0]}
        alt="product image"
      />
      <h1 className="my-1 ">{products.title}</h1>
      <p> Price: {products.price}$</p>

      <div className="flex mt-2">
        {[...Array(noOfStar)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`${
                index <= (rating || hover) ? "text-yellow-400" : "text-black"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Product;
