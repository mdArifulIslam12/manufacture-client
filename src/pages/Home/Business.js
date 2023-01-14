import React, { useEffect, useState } from "react";
import BusinessDetail from "./BusinessDetail";


const Business = () => {
    const [businesses ,setBusinesses]=useState([])
    useEffect(()=>{
        fetch('https://manufacturer-server.onrender.com/business')
        .then(res=>res.json())
        .then(data=> setBusinesses(data))
    },[])
  return (
    <div>
      <div className="text-center mt-24">
        <h2 className="text-4xl font-bold uppercase text-secondary">Millons Business Trust Us</h2>
        <p className="text-xl font-normal">Try to understand users Expectation</p>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1">
        {businesses.map(business => <BusinessDetail key={business._id} business={business}></BusinessDetail>)}
        </div>
        <div className=" w-100 bg-base-100 mt-16 rounded-xl px-4 py-8 shadow-xl lg:flex lg:justify-between">
        <div className="w-50">
            <h2 className="text-secondary text-2xl lg:font-bold">Have any question about us or get a products request?</h2>
            <p className="text-xl lg:font-medium">Don't hesitate to contact us</p>
        </div>
        <div className="mt-5 lg:mt-0">
        <button className="btn btn-outline btn-primary mr-6">Request For Quote</button>
        <button className="btn  btn-primary">Contact Us</button>
        </div>
    </div>
    </div>
  );
};

export default Business;
