"use client";
import { LocationEdit, Search } from "lucide-react";
import React, { useContext, useRef, useState } from "react";
import img1 from "../assets/freepik__the-style-is-candid-image-photography-with-natural__60502.jpeg";
import { AppContext } from "../contexts/AppContext";
const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const [values, setValues] = useState({
    title: "",
    location: "",
  });
  const onSearch = () => {
    setSearchFilter({
      title: values.title,
      location: values.location,
    });
    setIsSearched(true);
    console.log(values);
  };
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="text-white py-16 text-center mx-2 rounded-xl bg-gradient-to-r from-purple-800 to-purple-950">
        <h2 className="text-2xl md:text-3xl lg:4xl font-medium mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Your next big career move starts right here - explore the best job
          oppotunities and take the first step toward your future1
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl sm:mx-auto">
          <div className="flex items-center ">
            <Search className="h-4 sm:h-5" />
            <input
              type="text"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              placeholder="search for jobs"
              onChange={(e) => {
                setValues({ ...values, title: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center">
            <LocationEdit className="h-4 sm:h-5" />
            <input
              type="text"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              placeholder="Location"
              onChange={(e) => {
                setValues({ ...values, location: e.target.value });
              }}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 px-6 py-2 rounded text-white m-1"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mt-5 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 kg-gap-16 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <img className="w-20" src={img1} alt="" />
          <img className="w-20" src={img1} alt="" />
          <img className="w-20" src={img1} alt="" />
          <img className="w-20" src={img1} alt="" />
          <img className="w-20" src={img1} alt="" />
          <img className="w-20" src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
