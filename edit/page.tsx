import React from "react";
import { TabsDemo } from "./tabs";

const Page = ({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) => {
  console.log(publicId);
  return (
    <>
      <div className="py-4 px-5">
        <h1 className="text-3xl font-semibold tracking-tight">Edit Picture</h1>
      </div>
      <TabsDemo src={publicId} />
    </>
  );
};
export default Page;
