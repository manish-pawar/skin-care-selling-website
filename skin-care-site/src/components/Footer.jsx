const Footer = () => {
  return (
    <footer className="bg-regular-text-color py-8 text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-off-white-background font-bold text-lg">
              © 2024 Lahens | All rights reserved
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-off-white-background hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="text-off-white-background hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="text-off-white-background hover:text-gray-400">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
