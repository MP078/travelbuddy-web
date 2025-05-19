import { User, Users, MapPin } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white px-4">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: User,
            title: "Create Profile",
            description: "Sign up and fill out your travel preferences",
          },
          {
            icon: Users,
            title: "Find Buddies",
            description: "Connect with travelers sharing your interests",
          },
          {
            icon: MapPin,
            title: "Plan Together",
            description: "Collaborate on itineraries and travel plans",
          },
        ].map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mb-6">
              <step.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-brand-gray">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
