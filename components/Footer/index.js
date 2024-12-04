'use client'
import { companyName } from "@/utils/constants";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { FaRegCopyright, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdVerified } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { useState } from "react";
import ModalComponent from "../Modal";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white w-full border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info with Professional Support USP */}
        <div className="flex flex-col gap-4">
          <img src="/logo.png" alt="Logo" className="h-12 max-w-[180px]" />
          
          {/* Professional Support Highlight */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <MdVerified className="text-green-600 text-xl" />
              <span className="font-medium text-green-800">Direct Professional Support</span>
            </div>
            <p className="text-sm text-green-700">
              No sales executives - Connect directly with qualified CAs and Legal experts for your registration process
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a href="tel:+919266159995" className="flex items-center gap-2 text-slate-600 hover:text-[#4059AC] transition-colors">
              <FaPhoneAlt size={14} />
              <span>+91 92661 59995</span>
            </a>
            <a href="mailto:sales@taxslick.com" className="flex items-center gap-2 text-slate-600 hover:text-[#4059AC] transition-colors">
              <MdEmail size={16} />
              <span>sales@taxslick.com</span>
            </a>
            <div className="flex items-center gap-2 text-slate-600">
              <HiOutlineOfficeBuilding size={16} />
              <p className="text-sm">DLF Towers, DSM-725, Shivaji Marg, Moti Nagar, New Delhi-110015</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg text-slate-800">Our Services</h3>
          <div className="grid gap-4">
            {[
              { title: 'GST Registration', desc: 'Expert CA assistance', url: 'https://gst-registration.taxslick.com' },
              { title: 'LLP Registration', desc: 'End-to-end setup', url: 'https://llp-registration.taxslick.com' },
              { title: 'GST Return Filing', desc: 'Timely filing with full accuracy', url: 'https://gst-return.taxslick.com' },
              { title: 'Trademark Registration', desc: 'Expert Assistance', url: 'https://trademark-registration.taxslick.com' }
            ].map((service, index) => (
              <div key={index} className="group">
                <Link href={service.url} target="_blank"
                  className="flex flex-col text-slate-600 hover:text-[#4059AC] transition-colors">
                  <span className="font-medium">{service.title}</span>
                  <span className="text-sm text-slate-500 group-hover:text-[#4059AC]/70">{service.desc}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-[#4059AC] p-8 rounded-xl text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-3 py-1.5 rounded-full mb-4">
              <MdVerified className="text-emerald-400" />
              <span className="text-emerald-100 text-sm">Trusted by 5000+ Businesses</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
            <p className="text-white/80 text-sm mb-6">
              Join the TaxSlick community and get expert support with 100% compliance!
            </p>
            
            <button className="bg-[#A3B1E0] w-full text-white font-medium rounded-full px-6 py-3 
              flex items-center justify-center gap-2 transition-all duration-300 
              hover:bg-white hover:text-[#4059AC] hover:shadow-lg 
              hover:-translate-y-0.5 active:translate-y-0 group" onClick={() => setModalOpen(true)}>
              <span>Connect With Us</span>
              <IoMdArrowForward className="text-xl transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span>Support: Mon-Sat: 10AM - 7PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <span>Quick Processing</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                <span>Direct Access to CAs & Legal Experts</span>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <Link href="/terms" className="hover:text-[#4059AC] transition-colors">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="hover:text-[#4059AC] transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-[#4059AC] transition-colors">Disclaimer</Link>
            </div>
            <div className="flex flex-col gap-1 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <FaRegCopyright />
                <span>{year} {companyName}. All rights reserved.</span>
              </div>
              <span className="text-slate-500">CIN: U74999DL2018PTC333541</span>
            </div>
          </div>
        </div>
      </div>
      {
        modalOpen && <ModalComponent setOpenModal={setModalOpen} openModal={modalOpen} />
      }
    </footer>
  );
};

export default Footer;
