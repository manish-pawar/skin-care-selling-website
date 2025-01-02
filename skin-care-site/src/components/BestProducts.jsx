import BestProductOne from "../assets/best-product-one.jpg";
import BestProductTwo from "../assets/best-product-two.jpg";

const BestProducts = () => {
  const products = [
    {
      name: 'Hydration Boost Cream',
      details: 'Deeply hydrates and locks in moisture, enhances skin elasticity, lightweight and non-greasy formula.',
      features: ['Deep hydration', 'Enhances elasticity', 'Lightweight formula'],
      price: '$99.00',
      image: BestProductOne,
      imagePosition: 'left',
    },
    {
      name: 'Radiance Revive Serum',
      details: 'Brightens and evens skin tone, boosts collagen production, vitamin C-rich formula for healthy skin.',
      features: ['Brightens skin', 'Boosts collagen', 'Vitamin C formula'],
      price: '$139.00',
      image: BestProductTwo,
      imagePosition: 'right',
    },
  ];

  return (
    <div className="py-12 px-4 md:px-16 lg:px-32 bg-white">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Discover the Best in Natural Skincare
      </h3>

      <p className="text-gray-600 max-w-xl text-center mx-auto mb-6">
        Explore our top products made with premium natural ingredients. These
        formulas are designed to hydrate, nourish, and bring out your skin's
        natural glow.
      </p>
      <div className="pt-8">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              product.imagePosition === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 h-64 md:h-80 lg:h-96 object-cover"
            />
            <div className="md:w-1/2 md:px-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                {product.name}
              </h4>
              <p className="text-gray-600 mb-4">{product.details}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p className="text-lg font-bold text-gray-800 mb-4">
                Price: {product.price}
              </p>
              <button className="bg-green-background text-white px-6 py-2">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
