import React from "react";
import Star from "./Star";

const StarRating = () => {
  return (
    <div className="w-full h-screen bg-blue-200">
        <Star noOfStars={10}/>
    </div>
  );
};

export default StarRating;
