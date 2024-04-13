import cloudinary from "cloudinary";
// import View from "../gallery/view";
import React from "react";
import FavoriteList from "./favoritelist";

export interface MyImage {
  public_id: string;
  tags: string[];
}
const Page = async () => {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    // .max_results(5)
    .with_field("tags")

    .execute()) as { resources: MyImage[] };

  return (
    <>
      <div className=" py-4 px-5 flex item-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">Favorite</h2>
      </div>
      <FavoriteList resources={res.resources} />
    </>
  );
};
export default Page;
