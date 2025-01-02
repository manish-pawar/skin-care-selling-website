
import './App.css'
import Banner from './components/Banner';
import BestProducts from './components/BestProducts';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Reviews from './components/Reviews';
import WhyChooseSkincareProductsSection from './components/WhyChooseSkincareProductsSection';


const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Banner />
      <WhyChooseSkincareProductsSection />
      <BestProducts />
      <Products />
      <Reviews />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;

