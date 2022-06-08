import React from 'react';

const Banner = () => {
    return (
        <div className="hero"  style={{backgroundImage:' url(https://livedemo00.template-help.com/prestashop_57939/modules/homeslider/images/slide3.jpg)',backgroundSize:'cover', height:'500px'}}>
            <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content flex justify-start">
          <div className="text-white">
            <h1 className="mb-5 text-4xl font-bold text-white uppercase">Gaming psc <br /> have the processing power </h1>
            <p className="mb-5 lg:mr-96">Dedicated graphics you need to enjoy today's games at their best. Whether you're just starting out or have been gaming for years, there's a gaming PC to suit your level and budget.</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;