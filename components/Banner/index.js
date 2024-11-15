import React from 'react';
import Image from 'next/image';
import Form from '../Form';

const Banner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Main Heading + Form */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-800">
                Incorporate your 
                <span className="text-[#4059AC]"> dream company </span>
                in just a few steps
              </h1>
              <div className="w-20 h-1.5 bg-[#4059AC]/20 rounded-full" />
            </div>
            
            <div className="max-w-md">
              <Form />
            </div>
          </div>

          {/* Right Column: Subheading + Image */}
          <div className="space-y-12 text-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#4059AC] leading-snug">
                Trusted Company Registration Services 
                <span className="text-slate-700 block">by Taxslick</span>
              </h2>
            </div>

            <div className="relative h-[280px] lg:h-[400px] transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/banner.png"
                alt="Business Illustration"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mx-auto max-w-xl">
              Taxslick provides complete support for smooth and efficient private limited company registration.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-green-200/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl animate-pulse" />
    </div>
  );
};

export default Banner;
