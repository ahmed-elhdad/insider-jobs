import { Apple, Play } from "lucide-react";
import React from "react";
const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md">
            Download Mobile App For Better Experience
          </h1>
          <div className="flex gap-4">
            <a href="#" className="inline-block">
              <Apple className="h-12" />
            </a>
            <a href="#" className="inline-block">
              <Play className="h-12" />
            </a>
          </div>
        </div>
      </div>
      <img
        src={
          "../assets/freepik__the-style-is-candid-image-photography-with-natural__60502.jpeg"
        }
        className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden"
        alt=""
      />
    </div>
  );
};

export default AppDownload;
