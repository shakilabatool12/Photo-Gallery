"use client";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import { AddTags } from "../gallery/action";
import { FaRegStar } from "react-icons/fa";
import React from "react";

import { FaStar } from "react-icons/fa";

const View = ({ src, tag, fun }: { src: string; tag: string[]; fun: any }) => {
  const [fav, setfav] = useState(tag.includes("favorite"));
  return (
    <div className="relative">
      <CldImage
        className="rounded-md"
        width="360"
        height="200"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      {/* favorite icon */}
      <div
        className="absolute top-1 right-7"
        onClick={() => {
          fun(src);
          setfav(!fav);
          AddTags(src, fav);
        }}>
        {fav ? (
          <FaStar className="mt-1 w-8 h-8 mr-5 cursor-pointer  text-blue-600" />
        ) : (
          <FaRegStar className="mt-1 w-7 h-7 cursor-pointer text-white hover:text-blue-600 duration-300" />
        )}
      </div>
    </div>
  );
};
export default View;
