import React from "react";
import Accordion from "./components/Accordion/index";
import BackgroundChanger from "./components/BGchanger/index";
import StarRating from "./components/StarRating/index";
import ImageSwiper from "./components/ImageSwiper/index";

const App = () => {

  return (
    <>
    <Accordion />
    <BackgroundChanger />
    <StarRating />
    <ImageSwiper url={"https://picsum.photos/v2/list"} limit={'10'}/>
    </>
  );
};

export default App;
