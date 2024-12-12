import React from "react";
import Review from "./Review";

const UserReview = () => {
  return (
    <div className=" grid lg:grid-cols-4 container mx-auto justify-between gap-4">
        <Review/>
        <Review/>
        <Review/>
        <Review/>
    </div>
  );
};

export default UserReview;
