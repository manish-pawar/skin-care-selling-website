import React from "react";
import BannerImage from "../assets/banner-img-1.jpg";

const Banner = () => {
  return (
    <div className="bg-off-white-background px-6 md:px-32 pt-16 pb-12 text-start items-center justify-between min-h-screen flex flex-col-reverse md:flex-row">
      {/* Left Section */}
      <div className="text-center md:text-start mt-8 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Radiant Skin Starts Here
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto md:mx-0 mb-6">
          Discover skincare products crafted with pure, natural ingredients.
          Elevate your beauty routine with solutions designed to nourish,
          protect, and renew your skin.
        </p>
        <button className="bg-green-background text-white px-6 py-2 hover:bg-gray-700">
          Shop Now
        </button>

        {/* Statistics Section */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
          <div>
            <p className="text-2xl font-bold text-gray-800">10M+</p>
            <p className="text-gray-600">Satisfied Customers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">80K+</p>
            <p className="text-gray-600">Positive Feedback</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">5K+</p>
            <p className="text-gray-600">Organic Products</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="h-64 md:h-[75vh] w-full md:w-[40vw] mt-4 md:mt-0 shadow-xl">
        <img
          src={BannerImage}
          alt="banner image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
