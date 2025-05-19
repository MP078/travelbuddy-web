import { Twitter, Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark-gray text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">About TravelBuddy</h3>
          <p className="text-gray-300 mb-4">
            Connecting travelers and creating unforgettable adventures together
            in Nepal.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Safety
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: hello@travelbuddy.com</li>
            <li>Phone: +977 1234567890</li>
            <li>Address: Thamel, Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700">
        <p className="text-center text-gray-300 text-sm">
          © 2025 TravelBuddy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
