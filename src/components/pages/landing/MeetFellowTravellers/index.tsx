import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MeetFellowTravellers = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet Fellow Travelers
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Chen",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
            destination: "Planning trip to Everest Base Camp",
            interests: "Hiking, Photography, Culture",
          },
          {
            name: "Mike Johnson",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200",
            destination: "Exploring Kathmandu Valley",
            interests: "Architecture, Food, History",
          },
          {
            name: "Emma Wilson",
            image:
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200",
            destination: "Visiting Pokhara",
            interests: "Adventure Sports, Nature, Yoga",
          },
        ].map((traveler, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Image
                height={1000}
                width={1000}
                src={traveler.image}
                alt={traveler.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{traveler.name}</h3>
                <p className="text-brand-gray text-sm">
                  {traveler.destination}
                </p>
              </div>
            </div>
            <p className="text-brand-gray mb-4">{traveler.interests}</p>
            <Link href="/login">
              <Button className="w-full">Connect</Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetFellowTravellers;
