"use client";
import { Button } from "@/components/ui/button";
import { Globe, Camera, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const FindTravelBuddies = () => {
  return (
    <section id="find-buddies" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Find Your Perfect Travel Buddy
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Match with like-minded travelers
              </h3>
              <p className="text-gray-600 mb-6">
                Our smart matching algorithm connects you with travelers who
                share your interests, travel style, and destination preferences.
                Find the perfect companion for your next adventure!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium">Destination Matching</h4>
                    <p className="text-sm text-gray-500">
                      Find travelers heading to the same places
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium">Interest Alignment</h4>
                    <p className="text-sm text-gray-500">
                      Connect based on shared travel interests
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <Compass className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-medium">Travel Style Compatibility</h4>
                    <p className="text-sm text-gray-500">
                      Match with travelers who travel like you do
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/register">
                  <Button size="lg">Find Your Match</Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                height={1000}
                width={1000}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300"
                alt="Traveler"
                className="rounded-lg h-40 object-cover"
              />
              <Image
                height={1000}
                width={1000}
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300"
                alt="Traveler"
                className="rounded-lg h-40 object-cover mt-8"
              />
              <Image
                height={1000}
                width={1000}
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300"
                alt="Traveler"
                className="rounded-lg h-40 object-cover"
              />
              <Image
                height={1000}
                width={1000}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300"
                alt="Traveler"
                className="rounded-lg h-40 object-cover mt-8"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
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
                  className="text-brand-orange"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Group Travel</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Join existing travel groups or create your own. Perfect for solo
              travelers looking for company.
            </p>
            <Link href="/register">
              <Button variant="outline" className="w-full">
                Join a Group
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
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
                  className="text-brand-orange"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Local Guides</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Connect with experienced local guides who can show you the hidden
              gems of Nepal.
            </p>
            <Link href="/register">
              <Button variant="outline" className="w-full">
                Find Guides
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
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
                  className="text-brand-orange"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                  <path d="M8 7h6"></path>
                  <path d="M8 11h8"></path>
                  <path d="M8 15h6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Travel Stories</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Read authentic travel experiences and tips from fellow travelers
              who&rsquo;ve been there.
            </p>
            <Link href="/register">
              <Button variant="outline" className="w-full">
                Read Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindTravelBuddies;
