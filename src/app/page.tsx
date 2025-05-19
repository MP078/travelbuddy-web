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
    <div className="min-h-screen bg-brand-beige">
      <Header />
      <Hero />
      <section id="destinations" className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Destinations in Nepal
        </h2>
        <PopularDestinations />
        <ExpandedDestinations />
      </section>
      <HowItWorks />
      <FindTravelBuddies />
      <MeetFellowTravellers />
      <Footer />
    </div>
  );
}
