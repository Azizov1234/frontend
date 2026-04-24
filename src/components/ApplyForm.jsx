import React from 'react';

const ApplyForm = () => {
  return (
    <section className="w-full py-20 bg-white font-poppins">
      <div className="w-[85%] mx-auto max-w-[1000px]">
        <h2 className="text-[48px] font-bold text-[#232536] mb-12">Apply Now</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-full bg-[#F9F9FF] p-6 outline-none text-[#232536] placeholder:text-gray-400 focus:ring-1 focus:ring-[#444CFC] transition-all"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-full bg-[#F9F9FF] p-6 outline-none text-[#232536] placeholder:text-gray-400 focus:ring-1 focus:ring-[#444CFC] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="email" 
              placeholder="Email Id" 
              className="w-full bg-[#F9F9FF] p-6 outline-none text-[#232536] placeholder:text-gray-400 focus:ring-1 focus:ring-[#444CFC] transition-all"
            />
            <input 
              type="tel" 
              placeholder="Mobile No" 
              className="w-full bg-[#F9F9FF] p-6 outline-none text-[#232536] placeholder:text-gray-400 focus:ring-1 focus:ring-[#444CFC] transition-all"
            />
          </div>

          <textarea 
            placeholder="Why do you thing you are good fit for Ether?" 
            rows="6"
            className="w-full bg-[#F9F9FF] p-6 outline-none text-[#232536] placeholder:text-gray-400 focus:ring-1 focus:ring-[#444CFC] transition-all resize-none"
          ></textarea>

          <div className="flex items-start gap-4 py-4">
            <input 
              type="checkbox" 
              id="privacy"
              className="mt-1 w-5 h-5 accent-[#444CFC] cursor-pointer" 
            />
            <label htmlFor="privacy" className="text-gray-500 text-sm leading-relaxed cursor-pointer select-none">
              I agree to accept the privacy policy. We will add your contact details provided in this form to our system for contacting you regarding your request.
            </label>
          </div>

          <button 
            type="submit"
            className="bg-[#444CFC] text-white px-10 py-5 font-bold flex items-center gap-3 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-4 h-4 bg-orange-400/50"></div>
            Submit Application <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ApplyForm;