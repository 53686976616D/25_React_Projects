import React from "react";
import { FaStar } from "react-icons/fa";
import Star from "./Star";

const StarRating = () => {
  return (
    <div className="w-full h-screen">
        <Star noOfStars={10}/>
    </div>
  );
};

export default StarRating;
