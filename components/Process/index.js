import React from 'react';
import { 
    MdOutlineFingerprint, 
    MdBadge, 
    MdDriveFileRenameOutline,
    MdDescription,
    MdUploadFile,
    MdVerified 
} from 'react-icons/md';

const Process = () => {
    const processSteps = [
        {
            icon: <MdOutlineFingerprint className="text-3xl" />,
            title: "Digital Signature Certificate",
            duration: "1-2 Days",
            description: "Each director must obtain a DSC for digital authentication of documents.",
            color: "bg-emerald-50 text-emerald-600 border-emerald-200"
        },
        {
            icon: <MdBadge className="text-3xl" />,
            title: "Director Identification Number",
            duration: "1 Day",
            description: "Apply for the DIN, a unique number for each director.",
            color: "bg-amber-50 text-amber-600 border-amber-200"
        },
        {
            icon: <MdDriveFileRenameOutline className="text-3xl" />,
            title: "Name Reservation (RUN)",
            duration: "2-3 Days",
            description: "Propose up to two names for the company, and the ROC reviews and approves one.",
            color: "bg-sky-50 text-sky-600 border-sky-200"
        },
        {
            icon: <MdDescription className="text-3xl" />,
            title: "MOA and AOA Drafting",
            duration: "1-2 Days",
            description: "The Memorandum and Articles of Association are drafted, specifying company objectives and regulations.",
            color: "bg-purple-50 text-purple-600 border-purple-200"
        },
        {
            icon: <MdUploadFile className="text-3xl" />,
            title: "Company Incorporation Filing",
            duration: "2-4 Days",
            description: "Submit registration application with all required documents to ROC for final approval.",
            color: "bg-rose-50 text-rose-600 border-rose-200"
        },
        {
            icon: <MdVerified className="text-3xl" />,
            title: "Certificate of Incorporation",
            duration: "2 Days",
            description: "ROC issues the Certificate of Incorporation with unique Company Identification Number.",
            color: "bg-teal-50 text-teal-600 border-teal-200"
        }
    ];

    return (
        <section id="registration process" className="py-8 px-4 md:py-12 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-2 md:mb-3">
                        Registration Journey
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                        Your path to company registration in 7-10 business days
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-purple-200 to-teal-200 -translate-x-1/2" />
                    
                    <div className="space-y-3 md:space-y-4">
                        {processSteps.map((step, index) => (
                            <div key={index} className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:ml-auto' : 'lg:pl-16'}`}>
                                <div className={`relative p-3 md:p-4 rounded-xl border ${step.color} transition-all duration-300 
                                    hover:shadow-lg hover:-translate-y-1`}>
                                    
                                    {/* Timeline Dot */}
                                    <div className={`hidden lg:block absolute top-1/2 ${
                                        index % 2 === 0 ? '-left-[calc(2rem+0.5px)]' : '-right-[calc(2rem+0.5px)]'
                                    } w-3 h-3 rounded-full ${step.color.replace('bg-', '')} 
                                        border-3 border-white -translate-y-1/2`} />
                                    
                                    <div className="flex items-start gap-2 md:gap-3">
                                        <div className={`p-2 md:p-2.5 rounded-lg ${step.color}`}>
                                            {step.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-1">
                                                <h3 className="font-semibold text-slate-800 text-sm break-words">
                                                    {step.title}
                                                </h3>
                                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${step.color} whitespace-nowrap`}>
                                                    {step.duration}
                                                </span>
                                            </div>
                                            <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6 md:mt-8 text-center">
                    <p className="text-xs text-slate-500 italic">
                        Note: Processing times may vary depending on ROC workload and document verification requirements
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Process;
