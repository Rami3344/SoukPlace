"use client";

import { useState } from "react";
import Navbar from "../../../../components/Navbar";

export default function AddItem() {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [city, setCity] = useState();
  const [description, setDescription] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [mainImage, setMainImage] = useState();
  const [firstImage, setFirstImage] = useState();
  const [secondImage, setSecondImage] = useState();
  const [thirdImage, setThirdImage] = useState();
  const [fourthImage, setFourthImage] = useState();

  const handleSubmit = async () => {
    const res = await fetch("/api/addItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        price,
        city,
        description,
        shortDescription,
        mainImage,
        firstImage,
        secondImage,
        thirdImage,
        fourthImage,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      console.log(data.message);
    } else {
      console.log(data.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-primary shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Item</h2>
        {/* Title */}
        <div>
          <label className="block text-white text-small">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Wireless Bluetooth Headphones"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Category + Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-small">Category</label>
            <select
              className="w-full p-2 border rounded-lg bg-secBackground text-white"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All Categories">All Categories</option>
              <option value="Food">Food</option>
              <option value="Electronics">Electronics</option>
              <option value="Automotive">Automotive</option>
              <option value="Tools">Tools</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-small">Price ($)</label>
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="59.99"
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block text-white text-small">City</label>
          <input
            type="text"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Beja"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-white text-small">
            Short Description
          </label>
          <input
            type="text"
            name="shortdescription"
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder="High-quality wireless headphones with noise cancellation."
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="block text-white text-small">
            Full Description
          </label>
          <textarea
            name="description"
            placeholder="Write details about the product..."
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-small">Main Image</label>
            <input
              type="file"
              name="mainimage"
              onChange={(e) => setMainImage(e.target.value)}
              placeholder="https://example.com/main.jpg"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-white text-small">First Image</label>
            <input
              type="file"
              name="firstimage"
              onChange={(e) => setFirstImage(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-white text-small">Second Image</label>
            <input
              type="file"
              name="secondimage"
              onChange={(e) => setSecondImage(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-white text-small">Third Image</label>
            <input
              type="file"
              name="thirdimage"
              onChange={(e) => setThirdImage(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-white text-small">Fourth Image</label>
            <input
              type="file"
              name="fourthimage"
              onChange={(e) => setFourthImage(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full py-3 bg-secBackground text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
