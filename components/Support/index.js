import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";

const Support = () => {
    return (
        <section id="support" className="py-12 md:py-20 px-4 md:px-12 bg-gradient-to-br from-[#A3B1E0]/20 to-white">
            <div className="container mx-auto px-2 md:px-4">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4059AC] mb-4">
                        Why Choose TaxSlick for Your Company Registration?
                    </h2>
                    <div className="w-24 h-1 bg-[#4059AC] mx-auto rounded-full"></div>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    {/* Left side - Features */}
                    <div className="space-y-6 md:space-y-8">
                        {/* Feature 1 */}
                        <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#A3B1E0] flex items-center justify-center flex-shrink-0">
                                <IoDocumentTextOutline className="text-2xl md:text-3xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#4059AC] mb-2">End-to-End Support</h3>
                                <p className="text-slate-600">From document preparation to government filings, we handle every step.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                                <MdOutlineSpeed className="text-2xl md:text-3xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#4059AC] mb-2">Quick Processing</h3>
                                <p className="text-slate-600">Get registered within days with our efficient process.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#98FB98] flex items-center justify-center flex-shrink-0">
                                <TbPigMoney className="text-2xl md:text-3xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#4059AC] mb-2">Transparent Pricing</h3>
                                <p className="text-slate-600">No surprises—clear and affordable pricing from start to finish.</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FF9999] flex items-center justify-center flex-shrink-0">
                                <FaUserTie className="text-2xl md:text-3xl text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#4059AC] mb-2">Corporate Professionals</h3>
                                <p className="text-slate-600">Your entire process will be handled by CS/CA/Advocates only.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative">
                        {/* Placeholder: Need an illustration showing business registration or professional team working */}
                        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <img src="/why.webp" alt="Support" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12 md:mt-16">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 md:mb-6 px-2">
                        Get Started on Your Private Limited Registration Today!
                    </h3>
                    <button className="bg-[#4059AC] text-white px-8 py-4 rounded-full font-medium 
                        hover:bg-[#A3B1E0] transition-all duration-300 hover:shadow-lg 
                        hover:-translate-y-1 active:translate-y-0">
                        Sign Up Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Support

