import React from 'react'

const ForWho = () => {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-white to-[#A3B1E0]/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4059AC] text-center mb-16">
          Who Needs GST Registration?
        </h2>

        {/* Description with Image */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-2/5">
            <img 
              src="/who1.webp"
              alt="GST Registration Overview"
              className="w-full rounded-2xl shadow-[0_20px_50px_rgba(64,89,172,0.15)] object-cover h-[350px] hover:shadow-[0_25px_60px_rgba(64,89,172,0.2)] transition-all duration-300"
            />
          </div>
          <div className="md:w-3/5 space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Whether you're a new entrepreneur, e-commerce seller, or service provider, 
              GST registration is <span className="text-emerald-600 font-semibold">crucial for your business success</span>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our <span className="text-emerald-600 font-semibold">comprehensive registration service</span> ensures you meet all legal requirements 
              while maximizing the benefits for your business. We guide you through every step, 
              making the process smooth and hassle-free.
            </p>
          </div>
        </div>

        {/* Benefits Section - Compact Design */}
        <div className="relative mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {/* Benefit 1 */}
              <div className="group relative">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img 
                        src="/who2.webp"
                        alt="Business Growth"
                        className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#4059AC]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                    </div>
                    <span className="absolute -right-2 -bottom-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg">
                      01
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#4059AC] mb-3 group-hover:translate-y-[-2px] transition-transform">
                      Expanding Business Reach
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Unlock new markets and opportunities by becoming GST compliant. Take your business to new heights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="group relative">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img 
                        src="/who3.webp"
                        alt="Building Credibility"
                        className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#4059AC]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                    </div>
                    <span className="absolute -right-2 -bottom-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg">
                      02
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#4059AC] mb-3 group-hover:translate-y-[-2px] transition-transform">
                      Building Credibility
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Enhance trust and reliability with your customers through GST registration and compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="group relative">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img 
                        src="/who4.webp"
                        alt="Legal Compliance"
                        className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#4059AC]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                    </div>
                    <span className="absolute -right-2 -bottom-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg">
                      03
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#4059AC] mb-3 group-hover:translate-y-[-2px] transition-transform">
                      Avoiding Legal Penalties
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Stay compliant with tax regulations and avoid unnecessary legal complications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-600/20 to-transparent hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWho
