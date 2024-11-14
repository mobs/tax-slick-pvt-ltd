'use client'
import React, { useState } from 'react'
import { IoIosArrowDown, IoMdHelpCircle } from "react-icons/io"
import { 
    FaBuilding,
    FaUsers,
    FaFileAlt,
    FaClock,
    FaRupeeSign,
    FaUserTie,
    FaExchangeAlt,
    FaCheckCircle,
    FaClipboardCheck,
    FaHandshake
} from "react-icons/fa"

const faqData = [
    {
        question: "What is a Private Limited Company?",
        answer: "A Private Limited Company (Pvt Ltd) is a type of business structure where the liability of shareholders is limited to their shareholding. It's a popular structure for businesses in India due to its legal benefits and credibility with clients and investors.",
        icon: <FaBuilding className="text-[#4059AC] text-2xl" />
    },
    {
        question: "Who can register a Private Limited Company in India?",
        answer: "Any individual, including NRIs and foreign nationals, can register a private limited company in India. However, a minimum of two directors and two shareholders are required, and at least one director must be an Indian resident.",
        icon: <FaUsers className="text-[#4059AC] text-2xl" />
    },
    {
        question: "What documents are needed for Private Limited Company registration?",
        answer: "You'll need:\n• PAN Card of each director and shareholder\n• Address proof of each director and shareholder (e.g., Aadhaar, Passport, Driver's License)\n• Passport-size photos\n• Proof of business address (rental agreement, utility bill, etc.)\n• Memorandum of Association (MOA) and Articles of Association (AOA) (which TaxSlick can help prepare)",
        icon: <FaFileAlt className="text-[#4059AC] text-2xl" />
    },
    {
        question: "How long does it take to register a Private Limited Company?",
        answer: "The process typically takes between 7-10 business days, provided all required documents are in order and approved without delays from the Registrar of Companies (ROC).",
        icon: <FaClock className="text-[#4059AC] text-2xl" />
    },
    {
        question: "What is the minimum capital requirement to register a Private Limited Company?",
        answer: "There is no minimum capital requirement to register a private limited company in India. You can start with as little as INR 1,000 as your authorized capital.",
        icon: <FaRupeeSign className="text-[#4059AC] text-2xl" />
    },
    {
        question: "How many directors can a Private Limited Company have?",
        answer: "A private limited company must have a minimum of two directors, with a maximum limit of fifteen directors.",
        icon: <FaUserTie className="text-[#4059AC] text-2xl" />
    },
    {
        question: "Can I convert my existing business to a Private Limited Company?",
        answer: "Yes, you can convert sole proprietorships, LLPs, or partnership firms into a private limited company. TaxSlick can guide you through the conversion process.",
        icon: <FaExchangeAlt className="text-[#4059AC] text-2xl" />
    },
    {
        question: "What are the benefits of registering as a Private Limited Company?",
        answer: "Key benefits include:\n• Limited liability protection for shareholders\n• Improved credibility and access to funding\n• Greater business continuity\n• Tax benefits and deductions",
        icon: <FaCheckCircle className="text-[#4059AC] text-2xl" />
    },
    {
        question: "What post-registration compliance is required for a Private Limited Company?",
        answer: "Private limited companies must adhere to annual compliance requirements, including annual filings with the ROC, maintenance of financial records, holding board meetings, and filing income tax returns.",
        icon: <FaClipboardCheck className="text-[#4059AC] text-2xl" />
    },
    {
        question: "Will TaxSlick provide ongoing support after registration?",
        answer: "Yes! TaxSlick offers continued support for annual compliance, GST filings, and other financial services to keep your company legally compliant.",
        icon: <FaHandshake className="text-[#4059AC] text-2xl" />
    }
]

const FAQItem = ({ question, answer, isOpen, onClick, icon, index }) => (
    <div className="border-b border-[#A3B1E0]/20 hover:bg-emerald-50/30 transition-all duration-300">
        <button
            className="w-full flex items-center py-6 px-6 gap-4"
            onClick={onClick}
        >
            {icon}
            <div className="flex-grow flex justify-between items-center">
                <h3 className="text-left text-lg font-medium text-gray-800">
                    {question}
                </h3>
                <IoIosArrowDown 
                    className={`flex-shrink-0 ml-4 text-emerald-600 text-xl transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`} 
                />
            </div>
        </button>
        <div 
            className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 py-4' : 'max-h-0'
            }`}
        >
            <p className="px-20 text-gray-600 leading-relaxed">{answer}</p>
        </div>
    </div>
)

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1)

    return (
        <section className="py-20 md:px-8 px-2 bg-gradient-to-b from-[#F5F7FF] to-[#f0fdf4]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#4059AC] mb-4 flex items-center justify-center gap-3">
                        <IoMdHelpCircle className="text-[#15803d]" />
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600">
                        Everything you need to know about <span className="text-[#15803d] font-medium">Private Limited Company Registration</span>
                    </p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                            icon={faq.icon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
