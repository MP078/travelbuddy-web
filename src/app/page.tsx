"use client";

import ExpandedDestinations from "@/components/pages/landing/ExpandedDestinations";
import FindTravelBuddies from "@/components/pages/landing/FindTravelBuddies";
import Footer from "@/components/pages/landing/Footer";
import Header from "@/components/pages/landing/Header";
import Hero from "@/components/pages/landing/Hero";
import HowItWorks from "@/components/pages/landing/HowItWorks";
import MeetFellowTravellers from "@/components/pages/landing/MeetFellowTravellers";
import PopularDestinations from "@/components/pages/landing/PopularDestinations";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-beige scroll-smooth snap-y snap-mandatory overflow-y-auto h-screen">
      <div className="snap-start sticky top-0 z-50 bg-white border-b border-gray-200">
        <Header />
      </div>
      <div className="snap-start">
        <Hero />
      </div>
      <section id="destinations" className="py-16 px-4 snap-start">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Destinations in Nepal
        </h2>
        <PopularDestinations />
        <ExpandedDestinations />
      </section>
      <div className="snap-start">
        <HowItWorks />
      </div>
      <div className="snap-start">
        <FindTravelBuddies />
      </div>
      <div className="snap-start">
        <MeetFellowTravellers />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}
