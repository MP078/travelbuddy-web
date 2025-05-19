import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularDestinations = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Pokhara",
          image: "/images/landing/destinations/pokhara.png",
          description: "Paradise with Mountain Views",
          travelers: 245,
        },
        {
          name: "Kathmandu",
          image: "/images/landing/destinations/ktm.png",
          description: "Cultural Heart of Nepal",
          travelers: 312,
        },
        {
          name: "Chitwan",
          image: "/images/landing/destinations/chitwan.png",
          description: "Wildlife Safari Adventure",
          travelers: 178,
        },
      ].map((destination, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            height={1000}
            width={1000}
            src={destination.image}
            alt={destination.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
            <p className="text-brand-gray mb-4">{destination.description}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-brand-gray">
                {destination.travelers} Travelers
              </span>
            </div>
            <Link href="/login">
              <Button className="w-full">View More</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularDestinations;
