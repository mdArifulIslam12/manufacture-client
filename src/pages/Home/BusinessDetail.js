import React from "react";

const BusinessDetail = ({ business }) => {
  return (
    <div className="flex justify-center mt-16">
      <div className="text-center">
        <img src={business.img} alt="" />
        <h1 className="text-4xl font-bold">{business.value}+</h1>
        <h2 className="text-secondary">{business.name}</h2>
      </div>
    </div>
  );
};

export default BusinessDetail;
