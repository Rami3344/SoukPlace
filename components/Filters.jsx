"use client";
import { useState } from "react";

export default function Content() {
  const [category, setCategory] = useState("All Categories");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  return (
    <div>
      <h2 className="text-medium text-primary ml-40 mt-10">{category}</h2>
      <div className="flex justify-between ml-40 mt-15">
        <div className="flex">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border-white border-2 bg-secBackground p-2 rounded-2xl text-small"
          >
            <option value="All Categories">All Categories</option>
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="Automotive">Automotive</option>
            <option value="Tools">Tools</option>
            <option value="Others">Others</option>
          </select>
          <div className="mt-2 ml-10 text-primary text-small">
            <span className="mr-4">Price: From</span>
            <input
              type="range"
              min="10"
              max="100000"
              className="mr-4"
              onChange={(e) => setMinPrice(e.target.value)}
            ></input>
            <span>{minPrice}TND </span>
            <span className="mr-4">To</span>
            <input
              type="range"
              min="10"
              max="100000"
              className="mr-4"
              onChange={(e) => setMaxPrice(e.target.value)}
            ></input>
            <span>{maxPrice}TND </span>
          </div>
        </div>
        <div className="mr-40">
          <select className="border-white border-2 bg-secBackground p-2 rounded-2xl text-small">
            <option value="nosort">Sort By</option>
            <option value="lowhigh">Price: Low to High</option>
            <option value="highlow">Price: High to Low</option>
            <option value="AZ">Alphabetical: A to Z</option>
            <option value="ZA">Alphabetical: Z to A</option>
          </select>
        </div>
      </div>
    </div>
  );
}
