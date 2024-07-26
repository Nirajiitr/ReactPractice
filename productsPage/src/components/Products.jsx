import React, { useEffect, useState } from "react";
import Product from "./Product";
import { BiLoader } from "react-icons/bi";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Products = () => {
  const [products, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  const URL = `https://dummyjson.com/products?limit=20&skip=${
    count === 0 ? 0 : count * 20
  }`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await fetch(URL);
        const result = await data.json();
        setProduct(result.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [URL]);
  const topProductImage = products.slice(1, 6);
  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? topProductImage.length - 1 : currentSlide - 1
    );
  };
  const handleNext = () => {
    setCurrentSlide(
      currentSlide === topProductImage.length - 1 ? 0 : currentSlide + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % topProductImage.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [topProductImage.length]);
  if (loading) {
    return (
      <div className="text-white bg-gray-700 w-screen gap-1 flex justify-center items-center h-screen">
        <BiLoader size="20px" />
        <p className="text-xl ">Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-x-hidden overflow-auto bg-slate-300">
      <div className=" relative flex justify-center items-center w-screen h-96 shadow-xl text-white mb-10">
        <BsArrowLeftCircleFill
          onClick={handlePrev}
          className=" cursor-pointer size-8 absolute drop-shadow-custom left-4"
        />
        {products && products.length
          ? topProductImage.map((item, index) => {
              return (
                <img
                  key={index}
                  className={`rounded-md  w-[40vw] h-full  ${
                    currentSlide === index ? "block" : "hidden"
                  }`}
                  src={item.images[0]}
                  alt={item.title}
                />
              );
            })
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="cursor-pointer size-8 absolute drop-shadow-custom right-4 "
        />
        <span className=" absolute flex gap-2 bottom-1">
          {products && products.length
            ? topProductImage.map((_, index) => (
                <button
                  className={`w-5 h-5  rounded-full  border-none focus:outline-none ${
                    currentSlide === index ? "bg-white" : "bg-gray-500"
                  }`}
                  key={index}
                ></button>
              ))
            : null}
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-7 p-2">
        {products && products.length
          ? products.map((item) => <Product products={item} key={item.id} />)
          : null}
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          disabled={count === 9 && true}
          onClick={() => setCount(count + 1)}
          className={` text-white rounded-lg p-2 m-5 ${
            count === 9 ? "bg-gray-500 " : "bg-slate-900"
          } `}
        >
          {count !== 9 ? "Loading next products" : "no more products available"}
        </button>
      </div>
    </div>
  );
};

export default Products;
