"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchLocation && searchDate) {
      router.push("/login");
    }
  };

  return (
    <div id="top" className="relative h-[600px]">
      <Image
        height={1000}
        width={2000}
        src={"/images/hero.png"}
        alt="Nepal Landscape"
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8">
          Find Your Perfect Travel Companion in Nepal
        </h1>
        <form
          onSubmit={handleSearch}
          className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2"
                style={
                  {
                    "--tw-ring-color": "var(--color-brand-orange)",
                  } as React.CSSProperties
                }
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                required
              />
            </div>
            <div className="flex-1 relative">
              <input
                type="date"
                className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2"
                style={
                  {
                    "--tw-ring-color": "var(--color-brand-orange)",
                  } as React.CSSProperties
                }
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                required
              />
            </div>
            <Button size="lg" type="submit">
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
