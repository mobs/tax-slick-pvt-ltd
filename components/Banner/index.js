import React from 'react';
import Image from 'next/image';
import Form from '../Form';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const Banner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Main Heading + Form */}
          <div className="space-y-10">
          <motion.div 
                variants={fadeInUp}
                className="text-center mb-6"
              >
                <span className="bg-[#4059AC]/10 text-[#4059AC] px-4 py-2 rounded-full text-sm font-medium">
                  Direct Professional Support
                </span>
              </motion.div>
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
          <div className="space-y-12">
          <div className="space-y-6">
              <motion.div 
              variants={fadeInUp}
              className="flex gap-6 w-full mb-8"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex-1 relative bg-gradient-to-br from-purple-600 to-indigo-700 p-4 rounded-xl text-white overflow-hidden"
              >
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8" />
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-1"
                >
                  <FaAward className="text-2xl text-amber-300" />
                </motion.div>
                <h4 className="text-lg font-bold">Expert CAs</h4>
                <p className="text-sm text-white/80">Direct Consultation</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="flex-1 relative bg-gradient-to-br from-emerald-600 to-teal-700 p-4 rounded-xl text-white overflow-hidden"
              >
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8" />
                <motion.div 
                  animate={{ 
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-1"
                >
                  <BsShieldCheck className="text-2xl text-cyan-300" />
                </motion.div>
                <h4 className="text-lg font-bold">Legal Experts</h4>
                <p className="text-sm text-white/80">Professional Guidance</p>
              </motion.div>
            </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg shadow-lg border border-green-200"
              >
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-green-800">No Sales Executives</span> - 
                  Connect directly with qualified professionals for your registration process
                </p>
              </motion.div>
            </div>

            <div className="relative h-[280px] lg:h-[400px] aspect-square transition-transform hover:scale-[1.02] duration-500 mx-auto">
              <Image
                src="/banner-right.png"
                alt="Business Illustration"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
            
            {/* <p className="text-lg text-slate-600 leading-relaxed mx-auto max-w-xl">
              Taxslick provides complete support for smooth and efficient private limited company registration.
            </p> */}
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
