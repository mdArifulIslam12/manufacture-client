import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div>
        <div
          className="hero "
          style={{
            backgroundImage:
              " url(https://ledthanhdat.vn/html/kobolg/assets/images/slide13.jpg)",
            backgroundSize: "cover",
            height: "600px",
          }}
        >
          <div className="hero-overlay rounded-lg background-color"></div>
          <div className="hero-content text-neutral-content flex justify-start">
            <div className="">
              <h1 className="mb-5 text-4xl font-bold  text-secondary uppercase">
                Gaming psc <br /> have the processing power{" "}
              </h1>
              <p className="mb-5 lg:mr-96 max-w-3xl hero-detalis-item font-medium">
                Dedicated graphics you need to enjoy today's games at their
                best. Whether you're just starting out or have been gaming for
                years, there's a gaming PC to suit your level and budget.
              </p>
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="hero "
          style={{
            backgroundImage:
              " url(https://livedemo00.template-help.com/prestashop_57939/modules/homeslider/images/slide3.jpg)",
            backgroundSize: "cover",
            height: "600px",
          }}
        >
          <div className="hero-overlay rounded-lg background-color"></div>
          <div className="hero-content text-neutral-content flex justify-start">
            <div className="">
              <h1 className="mb-5 text-4xl font-bold text-secondary uppercase">
                Gaming psc <br /> have the processing power{" "}
              </h1>
              <p className="mb-5 lg:mr-96 max-w-3xl hero-detalis-item font-medium">
                Dedicated graphics you need to enjoy today's games at their
                best. Whether you're just starting out or have been gaming for
                years, there's a gaming PC to suit your level and budget.
              </p>
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
     
    </Slider>
  );
};

export default Banner;
