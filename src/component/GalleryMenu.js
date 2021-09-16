import React from "react";

const GalleryMenu = ({ filterItem, catItems }) => {
  return (
    <>
      <div className="menu">
        {catItems.map(currCat => {
          return (
            <button className="btn-food" onClick={() => filterItem(currCat)}>
              {currCat}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default GalleryMenu;
