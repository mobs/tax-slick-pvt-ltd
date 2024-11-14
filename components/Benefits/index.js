import React from 'react';
import { FaShieldAlt, FaHandshake, FaChartLine, FaPiggyBank } from 'react-icons/fa';

const Benefits = () => {
    const benefits = [
        {
            title: "Limited Liability Protection",
            description: "Protects personal assets from business liabilities",
            icon: <FaShieldAlt className="text-4xl text-[#4059AC] group-hover:text-white transition-colors duration-300" />,
            bgColor: "bg-yellow-50",
            hoverColor: "hover:bg-[#4059AC]"
        },
        {
            title: "Enhanced Credibility",
            description: "Builds trust with clients, investors, and partners",
            icon: <FaHandshake className="text-4xl text-[#4059AC] group-hover:text-white transition-colors duration-300" />,
            bgColor: "bg-green-50",
            hoverColor: "hover:bg-[#4059AC]"
        },
        {
            title: "Access to Funding",
            description: "Attracts investors and venture capital for growth",
            icon: <FaChartLine className="text-4xl text-[#4059AC] group-hover:text-white transition-colors duration-300" />,
            bgColor: "bg-yellow-50",
            hoverColor: "hover:bg-[#4059AC]"
        },
        {
            title: "Tax Benefits",
            description: "Access to special tax rates and exemptions",
            icon: <FaPiggyBank className="text-4xl text-[#4059AC] group-hover:text-white transition-colors duration-300" />,
            bgColor: "bg-green-50",
            hoverColor: "hover:bg-[#4059AC]"
        }
    ];

    return (
        <section id="benefits" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50/50">
            <div className="max-w-7xl mx-auto">
                {/* Title Section with Left-aligned Illustration */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Benefits of Registering as a
                            <span className="text-[#4059AC]"> Private Limited Company</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#A3B1E0] mb-6"></div>
                        <p className="text-slate-600 max-w-xl">
                            Transform your business journey with these key advantages of registering as a Private Limited Company.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-end">
                        <img 
                            src="/benefits.png" 
                            alt="Benefits Illustration" 
                            className="max-w-sm w-full object-contain"
                        />
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`${benefit.bgColor} ${benefit.hoverColor} p-8 rounded-2xl transition-all duration-300
                                hover:shadow-xl hover:-translate-y-2 group cursor-pointer`}
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                {benefit.icon}
                                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-white transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-600 group-hover:text-white/90 transition-colors duration-300">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
