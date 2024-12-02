'use client'
import React, { useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';
import ModalComponent from '../Modal';

const SmallCTABanner = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="sticky top-20 left-0 right-0 z-40 bg-gradient-to-r from-[#4059AC] to-[#A3B1E0] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:h-14 gap-2 sm:gap-6 py-2 sm:py-0">
          {/* Text content with verified icon */}
          <div className="flex items-center gap-2">
            <MdVerified className="text-emerald-400 text-xl" />
            <p className="text-white text-sm sm:text-base font-medium whitespace-normal sm:whitespace-nowrap text-center">
              Book a <p className='text-emerald-300 inline'>FREE</p> 5 min call with Legal Experts/Lawyers
            </p>
          </div>

          <button 
            className="inline-flex items-center gap-1 
              bg-white/95 text-[#4059AC] px-6 py-1.5 
              rounded-full text-sm font-semibold whitespace-nowrap
              relative z-50 hover:bg-white transition-colors" 
            onClick={() => setModalOpen(true)}
            type="button"
          >
            Book Now
            <IoMdArrowForward className="text-sm" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      {
        modalOpen && <ModalComponent setOpenModal={setModalOpen} openModal={modalOpen} />
      }
    </div>
  );
};

export default SmallCTABanner;
