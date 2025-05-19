import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold flex items-center">
            <MapPin className="text-brand-orange" />
            <span className="text-brand-dark-gray">Travel</span>
            <span className="text-brand-orange">Buddy</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#top"
              className="text-brand-dark-gray hover:text-brand-orange transition-colors"
            >
              Home
            </a>
            <a
              href="#destinations"
              className="text-brand-dark-gray hover:text-brand-orange transition-colors"
            >
              Destinations
            </a>
            <a
              href="#find-buddies"
              className="text-brand-dark-gray hover:text-brand-orange transition-colors"
            >
              Find Buddies
            </a>
          </nav>
        </div>
        <div className="flex space-x-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
