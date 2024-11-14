import React from 'react';
import { 
    MdPersonOutline, 
    MdFingerprint, 
    MdDriveFileRenameOutline,
    MdArticle,
    MdVerified,
    MdCreditCard,
    MdSecurity,
    MdAccountBalance,
    MdSupport 
} from 'react-icons/md';

const WhatYouGet = () => {
    const benefits = [
        {
            icon: <MdPersonOutline />,
            title: "DIN for 2 Directors",
            description: "Director Identification Numbers for two company directors"
        },
        {
            icon: <MdFingerprint />,
            title: "Digital Signature Tokens",
            description: "Secure digital signatures for official documentation"
        },
        {
            icon: <MdDriveFileRenameOutline />,
            title: "Reserved Company Name",
            description: "Exclusive rights to your company name"
        },
        {
            icon: <MdArticle />,
            title: "E-MOA + E-AOA",
            description: "Electronic Memorandum and Articles of Association"
        },
        {
            icon: <MdVerified />,
            title: "Incorporation Certificate",
            description: "Official company incorporation document"
        },
        {
            icon: <MdCreditCard />,
            title: "Company PAN Card",
            description: "Permanent Account Number for your company"
        },
        {
            icon: <MdSecurity />,
            title: "PF + ESIC",
            description: "Provident Fund and Employee Insurance coverage"
        },
        {
            icon: <MdAccountBalance />,
            title: "Company TAN/TDS",
            description: "Tax Deduction Account Number"
        },
        {
            icon: <MdSupport />,
            title: "Bank Account Opening Support",
            description: "Assistance with business account setup"
        }
    ];

    return (
        <div id="whatyouget" className="py-20 px-8 bg-gradient-to-b from-yellow-50/50 to-green-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-slate-800 mb-6">
                            What will you get?
                        </h2>
                        <p className="text-slate-600 max-w-xl">
                            Everything you need to start your business journey, all in one place.
                        </p>
                    </div>
                    <div className="flex-1">
                        <div className="w-full aspect-square overflow-hidden">
                            <img 
                                src="/whatyouget3.png" 
                                alt="Business Setup Illustration" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md 
                                transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                        >
                            <div className="text-3xl text-[#4059AC] mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600 text-sm">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatYouGet;
