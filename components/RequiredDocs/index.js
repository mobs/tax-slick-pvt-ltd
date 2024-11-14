import React from 'react'
import { FaIdCard, FaBuilding, FaCamera, FaPiggyBank, FaCoins, FaUsers } from 'react-icons/fa'
import { IoMdArrowForward } from 'react-icons/io'

const RequiredDocs = () => {
    const documents = [
        {
            icon: <FaIdCard />,
            title: "Identity Documents",
            description: "Valid PAN Card and Aadhaar Card copies for each company Director",
            subtext: "Must be clearly scanned and self-attested",
            color: "bg-amber-50",
            step: "1"
        },
        {
            icon: <FaBuilding />,
            title: "Office Address Proof",
            description: "Recent Utility Bill, Rent Agreement, or Property Documents",
            subtext: "Not older than 2 months",
            color: "bg-emerald-50",
            step: "2"
        },
        {
            icon: <FaCamera />,
            title: "Photographs",
            description: "Passport-sized photographs of all Directors",
            subtext: "White background, taken within last 6 months",
            color: "bg-sky-50",
            step: "3"
        },
        {
            icon: <FaPiggyBank />,
            title: "Bank Details",
            description: "Current account statement or cancelled cheque",
            subtext: "Account should be active and operational",
            color: "bg-violet-50",
            step: "4"
        },
        {
            icon: <FaCoins />,
            title: "Share Capital Proof",
            description: "Documentation of share distribution among stakeholders",
            subtext: "Including details of authorized & paid-up capital",
            color: "bg-rose-50",
            step: "5"
        },
        {
            icon: <FaUsers />,
            title: "Contact Details",
            description: "Directors & Shareholders contact information",
            subtext: "Active mobile numbers & email IDs required",
            color: "bg-orange-50",
            step: "6"
        }
    ]

    return (
        <div id="documents" className="py-20 px-4 md:px-8 lg:px-16 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#4059AC] font-medium mb-2 block">Documentation Guide</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Essential Documents Required
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Prepare these documents in advance to ensure a quick and smooth registration process. 
                        All documents should be self-attested and clearly scanned.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {documents.map((doc, index) => (
                        <div 
                            key={index} 
                            className={`${doc.color} rounded-xl p-6 transition-all duration-300 
                                hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden`}
                        >
                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#4059AC]/10 
                                flex items-center justify-center text-[#4059AC] font-semibold">
                                {doc.step}
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="text-[#4059AC] text-2xl group-hover:scale-110 
                                    transition-transform duration-300 mt-1">
                                    {doc.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                                        {doc.title}
                                    </h3>
                                    <p className="text-slate-700 text-sm mb-2">
                                        {doc.description}
                                    </p>
                                    <p className="text-slate-500 text-xs italic">
                                        {doc.subtext}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center gap-6">
                    <button 
                        onClick={() => setOpenModal(true)} 
                        className="bg-[#4059AC] text-white font-medium rounded-full px-8 py-3 flex 
                            items-center gap-3 transition-all duration-300 hover:bg-[#A3B1E0] 
                            hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group"
                    >
                        <span className="z-20 relative">Start Your Registration</span>
                        <IoMdArrowForward className="text-xl z-20 transition-transform 
                            group-hover:translate-x-1" />
                    </button>

                    <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-sm border 
                        border-slate-200 text-sm text-slate-600">
                        💡 <span className="font-medium">Pro Tip:</span> Keep digital copies of all documents 
                        ready in PDF format for faster processing
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequiredDocs
