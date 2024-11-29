import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-200 text-gray-900 py-6">
    <div className="container mx-auto text-center">
      {/* Logo or App Name */}
      <h1 className="text-2xl font-bold text-blue mb-3">FoodApp</h1>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="/terms" className="hover:text-white transition">Terms of Service</a>
        <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
        <a href="/contact" className="hover:text-white transition">Contact Us</a>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" className="text-gray-800 hover:text-white transition">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com" className="text-gray-800 hover:text-white transition">
          <FaInstagram size={20} />
        </a>
        <a href="https://twitter.com" className="text-gray-800 hover:text-white transition">
          <FaTwitter size={20} />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-sm text-gray-700">
        © 2024 FoodApp. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
