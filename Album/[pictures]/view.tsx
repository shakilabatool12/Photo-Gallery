"use client";
import { MdOutlineEditNote } from "react-icons/md";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import { AddTags } from "./action";
import { FaRegStar } from "react-icons/fa";
import React from "react";

// import AlbumDialog from "./albumDialog";

import { FaStar } from "react-icons/fa";
import Link from "next/link";
 

const View = ({ src, tag }: { src: string; tag: string[] }) => {
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
      <div
        className="absolute top-1 right-7"
        onClick={() => {
          setfav(!fav);
          AddTags(src, fav);
        }}>
        {fav ? (
          <FaStar className="mt-1 w-6 h-8 mr-6 cursor-pointer  text-blue-600" />
        ) : (
          <FaRegStar className="mt-1 w-6 h-7 mr-6  cursor-pointer text-white hover:text-blue-600 duration-300" />
        )}
      </div>
     
        {/* edit picture */}
        
        <div className=" absolute top-1 left-5">
        <Link href={`/edit?publicId=${src}`}>
          <MdOutlineEditNote className="mt-1 w-8 h-8 cursor-pointer text-white hover:text-blue-600 duration-300" />
          </Link>
        </div>
        


      </div>
  )
};
export default View;
