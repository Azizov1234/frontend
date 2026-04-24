import React from 'react';

const ContactUs = () => {
  return (
    <section className="w-full py-20 bg-white font-poppins">
      <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* CHAP TARAFI: Forma qismi */}
        <div className="lg:w-2/3">
          <div className="flex flex-col items-start mb-12">
            <div className="w-6 h-6 bg-[#FFE6D2] mb-6"></div>
            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#232536] opacity-70 mb-4">
              Contact Us
            </span>
            <h1 className="text-[48px] md:text-[56px] font-bold text-[#232536] leading-tight mb-6">
              Have a Question ? <br /> Let’s Get in Touch with us 👋
            </h1>
            <p className="text-gray-500 text-lg">
              Fill up the Form and our team will get back to you within 24 hrs
            </p>
          </div>

          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Name</label>
              <input 
                type="text" 
                placeholder="Paresh Srichandan" 
                className="border-b border-gray-200 py-4 outline-none focus:border-[#444CFC] transition-colors text-[#232536] font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">E-mail</label>
              <input 
                type="email" 
                placeholder="Paresh@pixeto.com" 
                className="border-b border-gray-200 py-4 outline-none focus:border-[#444CFC] transition-colors text-[#232536] font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Subject</label>
              <input 
                type="text" 
                placeholder="For web design work Enquire" 
                className="border-b border-gray-200 py-4 outline-none focus:border-[#444CFC] transition-colors text-[#232536] font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Message</label>
              <textarea 
                placeholder="Type your Messege" 
                rows="4"
                className="border-b border-gray-200 py-4 outline-none focus:border-[#444CFC] transition-colors text-[#232536] font-medium resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="bg-[#444CFC] text-white px-10 py-5 font-bold flex items-center gap-3 self-start relative group mt-4 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-4 h-4 bg-orange-400/50"></div>
              Send Messege <span>→</span>
            </button>
          </form>
        </div>

        {/* O'NG TARAFI: Ma'lumotlar bloki */}
        <div className="lg:w-1/3 bg-[#444CFC] p-12 md:p-16 text-white relative">
          {/* Burchakdagi dekoratsiya */}
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <img src="/images/Shapes (3).svg" alt="" className="w-12 h-12" />
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <p className="text-gray-300 text-sm mb-4">Location</p>
              <h4 className="text-xl font-bold leading-relaxed">
                DLF Cybercity, Bhubaneswar, <br /> India, & 52050
              </h4>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-gray-300 text-sm mb-4">Working Hour</p>
              <h4 className="text-xl font-bold">
                Monday To Friday <br /> 
                9:00 AM to 8:00 PM
              </h4>
              <p className="text-sm mt-2 opacity-70">Our Support Team is available 24Hrs</p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-gray-300 text-sm mb-4">Contact Us</p>
              <h4 className="text-xl font-bold mb-2">020 7993 2905</h4>
              <h4 className="text-xl font-bold">Hello@ether.com</h4>
            </div>

            <div className="flex gap-6 mt-4">
               <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;