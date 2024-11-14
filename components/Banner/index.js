import React from 'react';
import Image from 'next/image';
import Form from '../Form';

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-[#F8FAF5] to-[#FDFDF9] py-20 px-8 md:px-16 lg:px-24">
      Banner
    </div>
    // <div className="bg-gradient-to-br from-[#F8FAF5] to-[#FDFDF9] py-16 px-8 md:px-16 lg:px-24">
    //   <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
    //     {/* Left Section - Content & Form */}
    //     <div className="flex-1 w-full max-w-xl">
    //       <div className="space-y-6 mb-10">
    //         <h1 className="text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight">
    //           Incorporate your dream company in just a few steps
    //           <span className="text-[#64748B] block mt-2">
    //             Trusted Company Registration Services by Taxslick
    //           </span>
    //         </h1>
    //         <p className="text-lg text-[#64748B]">
    //           Taxslick provides complete support for smooth and efficient private limited company registration.
    //         </p>
    //       </div>
          
    //       <Form />
    //     </div>

    //     {/* Right Section - Just Image */}
    //     <div className="flex-1">
    //       <div className="relative h-[600px] w-full">
    //         <Image
    //           src="/tax-illustration.svg"
    //           alt="Tax Registration Services"
    //           fill
    //           className="object-contain"
    //           priority
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
