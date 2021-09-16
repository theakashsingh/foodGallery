import React, { useState } from "react";
import GalleryMenu from "./GalleryMenu";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";
import Menu from "./Menu";

const allCatValues = [...new Set(Menu.map(curr => curr.category)), "all"];
const Gallery = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);

  const filterItem = categoryItem => {
    if (categoryItem == "all") {
      setItems(Menu);
      return;
    }
    const updatedItem = Menu.filter(curr => {
      return curr.category === categoryItem;
    });
    setItems(updatedItem);
  };

  return (
    <div className="main-container">
      <h1 className="main-heading">Order Your Favourite Dish</h1>
      <hr />

      <GalleryMenu filterItem={filterItem} catItems={catItems} />
      <GalleryCard items={items} />
    </div>
  );
};

export default Gallery;
