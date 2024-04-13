"use client";

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldImage } from "next-cloudinary";

export function TabsDemo({ src }: { src: string }) {
  return (
    <Tabs defaultValue="" className="w-full py-4 px-5">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray scale</TabsTrigger>
        <TabsTrigger value="oil">Oil Paint</TabsTrigger>
        <TabsTrigger value="cartoonify">cartoonify</TabsTrigger>
        <TabsTrigger value="improve">improve</TabsTrigger>
      </TabsList>
      {/* original */}
      <TabsContent value="original">
        <div className="flex gap-7 justify-center py-4">
          {/* view image */}
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      </TabsContent>
      {/* Blur */}
      <TabsContent value="blur">
        {" "}
        <div className="flex gap-7 justify-center py-4">
          {/* view image */}
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            blur={400}
          />
        </div>
      </TabsContent>
      {/* gray */}
      <TabsContent value="gray">
        {" "}
        <div className="flex gap-7 justify-center py-4">
          {/* view image */}
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            grayscale={true}
          />
        </div>
      </TabsContent>
      {/* oil */}
      <TabsContent value="oil">
        {" "}
        <div className="flex gap-7 justify-center py-4">
          {/* view image */}
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            oilPaint={true}
          />
        </div>
      </TabsContent>
      {/* cartoonify */}
      <TabsContent value="cartoonify">
        {" "}
        <div className="flex gap-7 justify-center py-4">
          {/* view image */}
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            cartoonify={true}
          />
        </div>
      </TabsContent>
      {/* improve */}
      <TabsContent value="improve">
        {" "}
        <div className="flex gap-7 justify-center py-4">
          {/* view image */}
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src={src}
            sizes="100vw"
            alt="Description of my image"
            improve={true}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}
