import React from "react";
import Banner from "./Banner";
import Business from "./Business";
import FeaturedProducts from "./FeaturedProducts";
import FromBlogs from "./FromBlogs";
import Parts from "./Parts";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="lg:mx-6  ">
        <Parts></Parts>
        <Business></Business>
        <FeaturedProducts></FeaturedProducts>
        <Review></Review>
        <FromBlogs></FromBlogs>
      </div>
    </div>
  );
};

export default Home;
