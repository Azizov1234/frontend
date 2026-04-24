import React from 'react';
import { Link } from 'react-router-dom'; // Linkni import qilamiz

const Footer = () => {
  return (
    <footer className="w-full bg-white font-poppins pt-20">
      
      {/* Newsletter Section */}
      <div className="w-[85%] mx-auto bg-[#444CFC] relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-20 min-h-[300px]">
        <div className="z-10 md:w-1/2">
          <span className="text-white uppercase tracking-[0.2em] text-xs font-medium opacity-90">
            Newsletter
          </span>
          <h2 className="text-white text-[32px] md:text-[40px] font-bold mt-4 leading-tight">
            Subscribe our News Letter <br /> to get Latest Updates.
          </h2>
        </div>

        <div className="z-10 md:w-[400px] w-full mt-8 md:mt-0">
          <input 
            type="email" 
            placeholder="Paresh@Pixeto.com" 
            className="w-full h-[64px] px-6 outline-none bg-white text-black text-base placeholder:text-gray-400 shadow-lg"
          />
        </div>
        
        {/* Dekoratsiyalar */}
        <div className="absolute right-0 top-0 h-full flex items-center">
            <img src="/images/Shapes (2).svg" alt="decoration" className="h-full object-contain pointer-events-none" />
        </div>
        <div className="absolute top-0 left-0">
            <img src="/images/Shapes.svg" alt="" className="w-12 opacity-50" />
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-[85%] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-[#232536]">
        
        <div className="flex flex-col gap-6">
          <h2 className="text-[36px] font-bold leading-tight">Let's make something special</h2>
          <div>
            <p className="text-xl font-bold mb-2">Let's talk! 🤙</p>
            <p className="text-[#232536] opacity-80 font-medium">020 7993 2905</p>
            <p className="text-[#232536] opacity-80 font-medium border-b border-gray-200 pb-2 inline-block">hi@finsweet.com</p>
          </div>
          <p className="text-[#232536] opacity-70 text-sm leading-relaxed">
            DLF Cybercity, Bhubaneswar, <br /> India, 123456
          </p>
        </div>

        {/* Home, Service va h.k. */}
        <div className="flex flex-col gap-5 lg:pl-10">
          <Link to="/" className="font-bold hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/service" className="font-bold hover:text-blue-600 transition-colors">Service</Link>
          <Link to="/company" className="font-bold hover:text-blue-600 transition-colors">Company</Link>
          <Link to="/career" className="font-bold hover:text-blue-600 transition-colors">Career</Link>
          <Link to="/blog" className="font-bold hover:text-blue-600 transition-colors">News</Link>
        </div>

        {/* Service List */}
        <div className="flex flex-col gap-4 text-[#232536] opacity-80">
          <p className="font-bold text-black opacity-100 mb-2">Service</p>
          <button className="hover:text-blue-600 text-left">Technical support</button>
          <button className="hover:text-blue-600 text-left">Testing</button>
          <button className="hover:text-blue-600 text-left">Development</button>
          <button className="hover:text-blue-600 text-left">AWS/Azure</button>
          <button className="hover:text-blue-600 text-left">Consulting</button>
          <button className="hover:text-blue-600 text-left">Information Technology</button>
        </div>

        {/* Resources - MUHIM QISM */}
        <div className="flex flex-col gap-4 text-[#232536] opacity-80 relative">
          <p className="font-bold text-black opacity-100 mb-2">Resources</p>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/testimonials" className="hover:text-blue-600">Testimonial</Link>
          
          {/* MANA SHU YERDA PRIVACY POLICYga YO'L KO'RSATAMIZ */}
          <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
          
          <Link to="/terms" className="hover:text-blue-600">Terms of use</Link>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          
          <Link to="/contact" className="mt-8 flex items-center gap-3 font-bold text-black group cursor-pointer">
            <div className="w-8 h-4 flex">
                <div className="w-1/2 h-full bg-[#FFE6D2]"></div>
                <div className="w-1/2 h-full bg-[#444CFC]"></div>
            </div>
            <span>Contact Us <span className="group-hover:translate-x-2 transition-transform inline-block">→</span></span>
          </Link>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="bg-[#FFE6D2] py-6">
        <div className="w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-medium text-[#232536]">
          <div className="flex items-center gap-8">
              <span className="text-xl font-bold italic">{"{Finsweet"}</span>
              <span>©2021 Finsweet</span>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0 text-lg">
               <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-facebook"></i></a>

              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-twitter"></i></a>

              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-instagram"></i></a>

              <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;