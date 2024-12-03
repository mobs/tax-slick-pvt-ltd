import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    // Clean the number first
    const cleanNumber = phone.replace(/\D/g, '').slice(-10);
    return phoneRegex.test(cleanNumber);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Special handling for phone number
    if (id === 'phonenumber') {
      // Remove all non-digit characters and take last 10 digits
      const cleanNumber = value.replace(/\D/g, '').slice(-10);
      setFormData(prev => ({
        ...prev,
        [id]: cleanNumber
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = 'Phone number is required';
    } else if (!validatePhone(formData.phonenumber)) {
      newErrors.phonenumber = 'Invalid phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Reset form after successful submission
      setFormData({ fullname: '', email: '', phonenumber: '' });
      router.push('/thank-you');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-10 shadow-[0_0_50px_-12px_rgba(64,89,172,0.25)] border border-[#4059AC]/10 hover:shadow-[0_0_60px_-12px_rgba(64,89,172,0.35)] transition-all duration-500">
        <form className="space-y-8" onSubmit={handleSubmit}>
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
            {[
              { label: 'Full Name', type: 'text', id: 'fullname' },
              { label: 'Email Address', type: 'email', id: 'email' },
              { label: 'Phone Number', type: 'tel', id: 'phonenumber' }
            ].map((field) => (
              <div key={field.id} className="relative">
                <input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className={`peer w-full px-4 pt-8 pb-3 rounded-lg border ${
                    errors[field.id] ? 'border-red-500' : 'border-gray-200'
                  } placeholder-transparent focus:border-[#4059AC] focus:ring-2 focus:ring-[#4059AC]/20 transition-all duration-200`}
                  placeholder={field.label}
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-4 top-2 text-xs font-medium text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#4059AC]"
                >
                  {field.label}
                </label>
                {errors[field.id] && (
                  <p className="mt-1 text-xs text-red-500">{errors[field.id]}</p>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg ${
              isSubmitting 
                ? 'bg-[#4059AC]/70 cursor-not-allowed'
                : 'bg-[#4059AC] hover:bg-[#4059AC]/90 hover:-translate-y-0.5 active:translate-y-0'
            } text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-[#4059AC]/25 group`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              <>
                Connect With Us
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </>
            )}
          </button>

          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-500">Applications Filled</div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.7/5</div>
                <div className="text-sm text-gray-500">Client Rating</div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="absolute -right-4 -top-4 bg-green-50 px-3 py-1 rounded-full text-sm font-medium text-green-700 border border-green-100 shadow-sm">
        ✨ Customer Support
      </div>
    </div>
  )
}

export default Form