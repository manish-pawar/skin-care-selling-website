import ProductOne from "../assets/why-to-use-page-image-1.png";

const WhyChooseSkincareProductsSection = () => {
  return (
    <div className="pt-16 pb-4 px-4 md:px-16 lg:px-32 bg-white">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Why Choose Our Skincare Products?
      </h3>

      <p className="text-gray-600 max-w-xl text-center mx-auto mb-6">
        Discover skincare products crafted with pure, natural ingredients.
        Elevate your beauty routine with solutions designed to nourish, protect,
        and renew your skin.
      </p>
      <div className="flex flex-col lg:flex-row justify-between pt-20 gap-16">
        <div className="flex-1">
          <div className="text-start pb-16">
            <h4 className="text-lg font-bold text-gray-800">
              100% Natural Ingredients
            </h4>
            <p className="text-gray-600 pt-2 text-sm">
              Our products are made with 100% natural ingredients – no harsh
              chemicals, synthetic fragrances, or artificial preservatives. We
              provide only the best that nature has to offer for your skin.
            </p>
          </div>
          <div className="text-start">
            <h4 className="text-lg font-bold text-gray-800">
              Eco-Friendly & Cruelty-Free
            </h4>
            <p className="text-gray-600 pt-2 text-sm">
              Beautify without harm. We use eco-friendly packaging, and none of
              our products are tested on animals. Your skincare routine can now
              align with your values of protecting both the planet and its
              creatures.
            </p>
          </div>
        </div>
        <div className="bg-green-background h-64 md:h-72 flex-1 rounded-t-full flex justify-center shadow-2xl">
          <img
            src={ProductOne}
            alt="Eco-Friendly"
            className="mx-auto mb-4 min-h-64 md:min-h-72 max-w-64 md:max-w-72 -mt-10"
          />
        </div>
        <div className="flex-1">
          <div className="text-start pb-16">
            <h4 className="text-lg font-bold text-gray-800">
              Dermatologist Approved
            </h4>
            <p className="text-gray-600 pt-2 text-sm">
              Formulated by dermatologists to be safe, effective, and suitable
              for all skin types. Whether you have sensitive, dry, or oily skin,
              our products are designed to nourish without irritation.
            </p>
          </div>
          <div className="text-start">
            <h4 className="text-lg font-bold text-gray-800">Proven Results</h4>
            <p className="text-gray-600 pt-2 text-sm">
              Our natural formulas are clinically tested to deliver visible
              results. With regular use, enjoy improved hydration, reduced
              redness, and a radiant glow that comes from deeply nourished skin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSkincareProductsSection;
