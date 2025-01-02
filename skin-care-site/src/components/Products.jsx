import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductOne from "../assets/product-1.jpg";
import ProductTwo from "../assets/product-2.jpg";
import ProductThree from "../assets/product-3.jpg";
import ProductFour from "../assets/product-4.jpg";
import ProductFive from "../assets/product-5.jpg";
import ProductSix from "../assets/product-6.jpg";

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -right-8 md:-right-12 lg:-right-20 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full cursor-pointer shadow-md hover:bg-gray-800 z-10"
      onClick={onClick}
    >
      →
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -left-8 md:-left-12 lg:-left-20 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full cursor-pointer shadow-md hover:bg-gray-800 z-10"
      onClick={onClick}
    >
      ←
    </div>
  );
};

const Products = () => {
  const products = [
    {
      name: "Glow Radiance Serum",
      price: "$39.99",
      image: ProductOne,
    },
    {
      name: "Hydration Boost Cream",
      price: "$99.00",
      image: ProductTwo,
    },
    {
      name: "Revitalizing Night Repair Oil",
      price: "$44.99",
      image: ProductThree,
    },
    {
      name: "Purifying Green Tea Cleanser",
      price: "$24.99",
      image: ProductFour,
    },
    {
      name: "Brightening Vitamin C Mask",
      price: "$49.99",
      image: ProductFive,
    },
    {
      name: "Anti-Aging Retinol Cream",
      price: "$79.99",
      image: ProductSix,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-16 pb-16 bg-off-white-background">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h3>
      <p className="text-gray-600 max-w-xl text-center mx-auto mb-6">
        Discover our range of natural skincare products, designed to hydrate, brighten, and protect your skin using the power of nature.
      </p>
      <div className="px-4 md:px-16 lg:px-32">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-2">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <div className="h-64 pb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-4 h-full w-full object-cover"
                  />
                </div>
                <h4 className="text-md font-bold text-gray-800">
                  {product.name}
                </h4>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <button className="bg-green-background text-white px-6 py-2">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
