import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img width={160} src="../../public/vite.svg " alt="" />
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @GreatStack.dev | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <Facebook
          className="border border-blue-100 rounded-full h-auto w-auto"
          width={38}
        />
        <Twitter
          className="border border-blue-100 rounded-full h-auto w-auto"
          width={38}
        />
        <Instagram
          className="border border-blue-100 rounded-full h-auto w-auto"
          width={38}
        />
      </div>
    </div>
  );
};

export default Footer;
