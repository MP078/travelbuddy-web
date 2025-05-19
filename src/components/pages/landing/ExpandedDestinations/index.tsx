"use client";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const ExpandedDestinations = () => {
  const destinations = [
    {
      name: "Everest Base Camp",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600",
      type: "Trekking",
      rating: 4.9,
    },
    {
      name: "Annapurna Circuit",
      image:
        "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&w=600",
      type: "Trekking",
      rating: 4.8,
    },
    {
      name: "Lumbini",
      image:
        "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=600",
      type: "Cultural",
      rating: 4.7,
    },
    {
      name: "Nagarkot",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600",
      type: "Scenic",
      rating: 4.6,
    },
    {
      name: "Chitwan National Park",
      image:
        "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600",
      type: "Wildlife",
      rating: 4.8,
    },
    {
      name: "Pokhara",
      image:
        "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600",
      type: "Adventure",
      rating: 4.9,
    },
    {
      name: "Mustang Valley",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600",
      type: "Cultural",
      rating: 4.7,
    },
    {
      name: "Langtang Valley",
      image:
        "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&w=600",
      type: "Trekking",
      rating: 4.8,
    },
  ];
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);
  const destinationsPerPage = 4;
  const handlePrevDestinations = () => {
    setCurrentDestinationIndex((prev) =>
      prev === 0
        ? destinations.length - destinationsPerPage
        : prev - destinationsPerPage
    );
  };

  const handleNextDestinations = () => {
    setCurrentDestinationIndex((prev) =>
      prev + destinationsPerPage >= destinations.length
        ? 0
        : prev + destinationsPerPage
    );
  };
  const visibleDestinations = destinations.slice(
    currentDestinationIndex,
    currentDestinationIndex + destinationsPerPage
  );
  return (
    <div className="container mx-auto mt-16">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold">Explore More Destinations</h3>
        <div className="flex gap-2">
          <button
            onClick={handlePrevDestinations}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNextDestinations}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {visibleDestinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium">
                {destination.type}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-medium">{destination.name}</h4>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm ml-1">{destination.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/login">
          <Button variant="outline" className="px-6">
            View All Destinations
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExpandedDestinations;
