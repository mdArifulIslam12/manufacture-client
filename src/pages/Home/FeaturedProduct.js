import React from "react";
import "./FeaturedProduct.css";

const FeaturedProduct = ({ feature }) => {
  const { name, img } = feature;
  return (
    <div className="collection_item">
      <div className="collection_img p-4">
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="collection_title text-center p-4 pb-0 text-xl font-medium">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default FeaturedProduct;
