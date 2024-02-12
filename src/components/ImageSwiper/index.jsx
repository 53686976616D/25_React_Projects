import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import "./style.css";

const ImageSwiper = ({ url, limit, page = 4 }) => {
  const [image, setImage] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  // console.log(image);

  if (loading) {
    return <div>Loading Data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }

  const length = image.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  if (!Array.isArray(image) || url.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <div className="slider">
        <FaArrowCircleLeft onClick={prevSlide} className="prevArrow" />
        {image && image.length
          ? image.map((item, index) => (
              <img
                src={item.download_url}
                alt={item.download_url}
                className={currentImg === index ? "image" : "image hide-image"}
              />
            ))
          : null}
        <FaArrowCircleRight onClick={nextSlide} className="nextArrow" />
        <span className="circle-indicators">
          {image && image.length
            ? image.map((_, index) => (
                <button
                  className={
                    currentImg === index
                      ? "circle-indicator"
                      : "circle-indicator circle-indicator-hide"
                  }
                  key={index}
                  onClick={() => setCurrentImg(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSwiper;
