import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-1/3 -bottom-24 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full cursor-pointer shadow-md hover:bg-gray-800 z-10"
      onClick={onClick}
    >
      →
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-1/3 -bottom-24 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full cursor-pointer shadow-md hover:bg-gray-800 z-10"
      onClick={onClick}
    >
      ←
    </div>
  );
};

const TestimonialCard = ({ title, content, author, rating }) => (
  <div className="px-2">
    <div className="border border-gray-200 rounded-lg px-6 py-4 shadow-md">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 h-24">{content}</p>
      <div className="flex justify-between">
        <p className="font-semibold text-gray-800 mb-2">{author}</p>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={i + 1 <= rating ? "text-yellow-400" : "text-gray-200"}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const testimonials = [
    {
      title: "A Game Changer for My Skin!",
      content:
        "I've struggled with dry skin for years, and the Hydration Boost Cream has been a lifesaver. My skin feels soft and moisturized all day without feeling greasy.",
      author: "Sarah T.",
      rating: 4,
    },
    {
      title: "Love This Product!",
      content:
        "This cream has transformed my skincare routine. I wake up every morning with glowing skin. Highly recommend!",
      author: "Emily R.",
      rating: 5,
    },
    {
      title: "Amazing Results!",
      content:
        "Within a week, I noticed a huge difference in my skin texture. It's now smoother and feels hydrated throughout the day.",
      author: "John D.",
      rating: 3,
    },
    {
      title: "Best Purchase Ever!",
      content:
        "I was skeptical at first, but this cream has exceeded my expectations. My skin has never felt so hydrated and healthy.",
      author: "Michael B.",
      rating: 5,
    },
    {
      title: "Highly Effective!",
      content:
        "I've tried many products, but this one stands out. It keeps my skin moisturized all day and has a pleasant scent.",
      author: "Jessica L.",
      rating: 3,
    },
    {
      title: "Worth Every Penny!",
      content:
        "This cream is a bit pricey, but it's worth it. My skin feels amazing, and I've received so many compliments.",
      author: "David K.",
      rating: 5,
    },
    {
      title: "Fantastic Product!",
      content:
        "I love how this cream feels on my skin. It's lightweight, non-greasy, and provides long-lasting hydration.",
      author: "Laura M.",
      rating: 4,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-12 pb-32">
      <div className="px-4 md:px-16 lg:px-32">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Our Customers Are Saying
        </h2>
        <p className="text-gray-600 max-w-2xl text-center mx-auto mb-8">
          Our customers love the difference our natural skincare products have
          made in their routines. See what they have to say!
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
