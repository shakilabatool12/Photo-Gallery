"use client";
// import {  } from "@clds/icon";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { Interface } from "readline";

interface UploadImage {
  event: "success";
  info: { public_id: string };
}

export default function Home() {
  //use state to change the image
  const [imageId, setImageId] = useState("ug7knhd1mk4hnm5mzqi6");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* upload button */}
      <CldUploadButton
        uploadPreset="dpre5ums"
        onUpload={(result) => {
          let res = result as UploadImage;
          setImageId(res.info.public_id);
        }}
      />
      {/* view image */}
      <CldImage
        width="360"
        height="200"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
