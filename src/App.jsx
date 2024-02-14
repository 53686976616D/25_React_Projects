import React from "react";
import Accordion from "./components/Accordion/index";
import BackgroundChanger from "./components/BGchanger/index";
import StarRating from "./components/StarRating/index";
import ImageSwiper from "./components/ImageSwiper/index";
import LoadMoreData from "./components/Load-more-data/index";
import TreesView from "./components/SideBar";
import Menu from "./components/SideBar/SideMenu";
import ToDo from "./components/Simple-To-DoList";

const App = () => {

  return (
    <>
    <Accordion />
    <BackgroundChanger />
    <StarRating />
    <ImageSwiper url={"https://picsum.photos/v2/list"} limit={'10'}/>
    <LoadMoreData url={"https://dummyjson.com/products"} />
    <TreesView Menu={Menu}/>
    <ToDo />
    </>
  );
};

export default App;
