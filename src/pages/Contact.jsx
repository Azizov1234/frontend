import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from "../components/ContactUs";

// 1. FOOTER COMPONENTI
const FooterContactUs = () => {
  return (
    <footer className="w-full font-poppins">
      
      {/* MAP QISMI - Haqiqiy Google Maps Embed kodi bilan */}
      <div className="w-full h-[450px] relative overflow-hidden grayscale contrast-125">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4522233282245!2d78.38466631534444!3d17.438063988048633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sDLF%20Cyber%20City!5e0!3m2!1sen!2sin!4v1625471234567!5m2!1sen!2sin"
          className="w-full h-full border-0 opacity-80"
          allowFullScreen="" 
          loading="lazy"
          title="office-location"
        ></iframe>
      </div>

      {/* ASOSIY FOOTER MA'LUMOTLARI */}
      <div className="bg-white py-24">
        <div className="w-[85%] mx-auto flex flex-col lg:flex-row justify-between gap-16">
          
          <div className="lg:w-1/3">
            {/* Logo o'rnidagi dekorativ kvadrat */}
            <div className="w-8 h-8 bg-[#FFE6D2] mb-8 relative">
               <div className="absolute top-0 right-0 w-4 h-4 bg-[#444CFC]"></div>
            </div>
            <h2 className="text-[48px] font-bold text-[#232536] leading-tight mb-10">
              Let's make something special
            </h2>
            <div className="space-y-6 text-[#232536]">
              <h3 className="text-2xl font-bold">Let's talk! 🤙</h3>
              <div className="text-lg opacity-80">
                <p className="font-bold">020 7993 2905</p>
                <p>hi@finsweet.com</p>
              </div>
              <p className="text-gray-500 max-w-[250px]">
                DLF Cybercity, Bhubaneswar, India, & 52050
              </p>
            </div>
          </div>

          {/* LINKLAR GRIDI */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12 text-[#232536]">
            <ul className="flex flex-col gap-4 font-bold">
              <li><Link to="/" className="hover:text-[#444CFC] transition-all">Home</Link></li>
              <li><Link to="/service" className="hover:text-[#444CFC] transition-all">Service</Link></li>
              <li><Link to="/company" className="hover:text-[#444CFC] transition-all">Company</Link></li>
              <li><Link to="/career" className="hover:text-[#444CFC] transition-all">Career</Link></li>
              <li><Link to="/blog" className="hover:text-[#444CFC] transition-all">News</Link></li>
            </ul>

            <div className="flex flex-col gap-6">
              <p className="font-bold opacity-50 uppercase tracking-widest text-xs">Service</p>
              <ul className="flex flex-col gap-4 font-medium opacity-80">
                <li className="cursor-pointer hover:text-[#444CFC]">Technical support</li>
                <li className="cursor-pointer hover:text-[#444CFC]">Testing</li>
                <li className="cursor-pointer hover:text-[#444CFC]">Development</li>
                <li className="cursor-pointer hover:text-[#444CFC]">AWS/Azure</li>
                <li className="cursor-pointer hover:text-[#444CFC]">Consulting</li>
                <li className="cursor-pointer hover:text-[#444CFC]">Information Technology</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-bold opacity-50 uppercase tracking-widest text-xs">Resourses</p>
              <ul className="flex flex-col gap-4 font-medium opacity-80">
                <li><Link to="/company" className="hover:text-[#444CFC]">About Us</Link></li>
                <li className="cursor-pointer hover:text-[#444CFC]">Testimonial</li>
                <li><Link to="/privacy-policy" className="hover:text-[#444CFC]">Privacy Policy</Link></li>
                <li className="cursor-pointer hover:text-[#444CFC]">Terms of use</li>
                <li><Link to="/blog" className="hover:text-[#444CFC]">Blog</Link></li>
              </ul>
              
              {/* Contact Us ko'rsatkichi */}
              <div className="mt-8 flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-2 bg-[#444CFC] group-hover:w-16 transition-all duration-300"></div>
                 <Link to="/contact" className="font-bold hover:text-[#444CFC]">Contact Us →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="bg-[#FFE6D2] py-8 border-t border-black/5">
        <div className="w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[#232536]">
          <div className="text-2xl font-bold italic select-none">
            {'{'}Finsweet
          </div>
          <p className="font-medium opacity-70">©2021 Finsweet</p>
          <div className="flex gap-6 text-lg">
              <a href="#" className="hover:text-[#444CFC] transition-transform hover:-translate-y-1">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-[#444CFC] transition-transform hover:-translate-y-1">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-[#444CFC] transition-transform hover:-translate-y-1">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-[#444CFC] transition-transform hover:-translate-y-1">
                <i className="fab fa-linkedin"></i>
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 2. EXPORT QILINUVCHI ASOSIY PAGE
export default function Contact() {
  return (
    <main className="w-full bg-white">
      {/* Contact Formasi (Navbar tagida turishi uchun margin) */}
      <div className="pt-10 mb-20">
        <ContactUs />
      </div>

      {/* Footer (Map bilan birga) */}
      <FooterContactUs />
    </main>
  );
}