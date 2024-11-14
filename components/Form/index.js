import React from 'react'

const Form = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-10 shadow-[0_0_50px_-12px_rgba(64,89,172,0.25)] border border-[#4059AC]/10 hover:shadow-[0_0_60px_-12px_rgba(64,89,172,0.35)] transition-all duration-500">
        <form className="space-y-8">
          <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
            <span className="flex items-center text-[#4059AC]">
              <span className="w-6 h-6 rounded-full bg-[#4059AC] text-white flex items-center justify-center mr-2">1</span>
              Basic Info
            </span>
            <span className="h-0.5 w-16 bg-gray-200"></span>
            <span className="flex items-center opacity-50">
              <span className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mr-2">2</span>
              Get Callback
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900">
            Get Started Today
            <span className="block text-sm font-normal text-gray-500 mt-1">Takes only 2 minutes to fill</span>
          </h3>
          
          <div className="space-y-6">
            {['Full Name', 'Email Address', 'Phone Number'].map((label, index) => (
              <div key={index} className="relative">
                <input
                  id={label.toLowerCase().replace(' ', '')}
                  type={index === 1 ? 'email' : index === 2 ? 'tel' : 'text'}
                  className="peer w-full px-4 pt-8 pb-3 rounded-lg border border-gray-200 placeholder-transparent focus:border-[#4059AC] focus:ring-2 focus:ring-[#4059AC]/20 transition-all duration-200"
                  placeholder={label}
                />
                <label
                  htmlFor={label.toLowerCase().replace(' ', '')}
                  className="absolute left-4 top-2 text-xs font-medium text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#4059AC]"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-lg bg-[#4059AC] text-white font-semibold hover:bg-[#4059AC]/90 transition-all duration-200 shadow-lg hover:shadow-[#4059AC]/25 hover:-translate-y-0.5 active:translate-y-0 group"
          >
            Register Now
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>

          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-500">Client Rating</div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="absolute -right-4 -top-4 bg-green-50 px-3 py-1 rounded-full text-sm font-medium text-green-700 border border-green-100 shadow-sm">
        ✨ 24/7 Support
      </div>
    </div>
  )
}

export default Form