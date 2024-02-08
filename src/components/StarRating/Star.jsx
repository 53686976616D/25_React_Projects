import React, { useState } from "react";
import './StarStyle.css'
import { FaStar } from "react-icons/fa";

const Star = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getIndexNumber) {
    setRating(getIndexNumber);
  }

  function handleMouseEnter(getIndexNumber) {
    setHover(getIndexNumber);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex justify-center items-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={"40px"}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default Star;
