"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#destinations", label: "Destinations" },
  { href: "#find-buddies", label: "Find Buddies" },
];

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
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-dark-gray hover:text-brand-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0">
              {/* Visually hidden title for accessibility */}
              <SheetTitle asChild>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <div className="text-2xl font-bold flex items-center">
                    <MapPin className="text-brand-orange" />
                    <span className="text-brand-dark-gray ml-1">Travel</span>
                    <span className="text-brand-orange">Buddy</span>
                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close menu"
                      className="ml-2"
                    >
                      <X className="h-8 w-8" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2 px-4 py-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-brand-dark-gray hover:text-brand-orange transition-colors text-lg py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col space-y-2 px-4 mt-auto pb-6">
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full">Register</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
