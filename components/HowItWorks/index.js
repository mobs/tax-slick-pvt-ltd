'use client'
import React,{ useState } from 'react';
import { MdOutlineDescription, MdVerifiedUser } from 'react-icons/md';
import { FaFileContract } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import ModalComponent from '../Modal';

const HowItWorks = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const steps = [
        {
            icon: <MdOutlineDescription className="text-3xl text-[#4059AC]" />,
            title: "Submit Your Details",
            description: "Fill out our quick online form with basic business information.",
            bgColor: "bg-[#E8FFF3]",
            borderColor: "border-[#4CAF50]",
            image: "/how1.webp"
        },
        {
            icon: <MdVerifiedUser className="text-3xl text-[#4059AC]" />,
            title: "Document Verification",
            description: "Our Professionals will verify your documents and guide you through any required updates.",
            bgColor: "bg-[#FFF8E8]",
            borderColor: "border-[#FFA000]",
            image: "/how2.webp"
        },
        {
            icon: <FaFileContract className="text-3xl text-[#4059AC]" />,
            title: "Government fees and MCA filing",
            description: "We handle the Incorporation filings and provide you with a Certificate of Incorporation upon successful registration.",
            bgColor: "bg-[#EFF6FF]",
            borderColor: "border-[#4059AC]",
            image: "/how3.webp"
        }
    ];

    return (
        <section id="how it works" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
                        How It Works
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                        Simple steps to register your company with our expert guidance
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className={`${step.bgColor} rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg 
                                transition-all duration-300 hover:-translate-y-1 group`}
                        >
                            <div className="h-48 md:h-72 overflow-hidden object-cover">
                                <img 
                                    src={step.image} 
                                    alt={step.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            
                            <div className={`p-4 md:p-6 border-l-4 ${step.borderColor}`}>
                                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                                    {step.icon}
                                    <h3 className="text-lg md:text-xl font-semibold text-slate-800">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-sm md:text-base text-slate-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-[#4059AC] text-white text-sm md:text-base font-medium rounded-full 
                        px-6 md:px-8 py-3 md:py-4 inline-flex items-center gap-2 md:gap-3 transition-all 
                        duration-300 hover:bg-[#A3B1E0] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0" 
                        onClick={() => setModalOpen(true)} >
                        <span>Start My Company Registration Today!</span>
                        <IoMdArrowForward className="text-lg md:text-xl" />
                    </button>
                </div>
            </div>
            {
                modalOpen && <ModalComponent openModal={modalOpen} setOpenModal={setModalOpen} />
            }
        </section>
    );
};

export default HowItWorks;
