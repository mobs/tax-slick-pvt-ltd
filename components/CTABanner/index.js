import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { MdVerified } from 'react-icons/md'

const CTABanner = () => {
  return (
    <div className="relative bg-[#4059AC] py-20 overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-10">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-8">
            <MdVerified className="text-emerald-400 text-xl" />
            <span className="text-emerald-100 text-sm font-medium">
              Trusted by 5000+ Businesses
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the TaxSlick Community and Get{' '}
            <span className="text-emerald-300">Professional Guidance</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Register Your Private Limited Company with{' '}
            <span className="text-emerald-300 font-medium">100% Compliance</span>!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#A3B1E0] text-white font-medium rounded-full px-10 py-4 
              inline-flex items-center gap-3 transition-all duration-300 
              hover:bg-white hover:text-[#4059AC] hover:shadow-lg 
              hover:-translate-y-0.5 active:translate-y-0 hover:scale-105 group">
              <span className="text-lg">Sign Up Now</span>
              <IoMdArrowForward className="text-xl transition-transform group-hover:translate-x-1" />
            </button>

            {/* Added success metric */}
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-sm">Quick Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTABanner
