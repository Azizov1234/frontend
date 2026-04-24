import React from 'react';
import { Link } from 'react-router-dom';

const FooterContactUs = () => {
  return (
    <footer className="w-full font-poppins">
      
      {/* 1. MAP QISMI */}
      <div className="w-full h-[400px] bg-gray-200 relative">
        {/* Bu yerga Google Maps iframe yoki shunchaki rasm qo'yishing mumkin */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000!2d85.8!3d20.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzAwLjAiTiA4NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          className="w-full h-full border-none grayscale opacity-80"
          allowFullScreen="" 
          loading="lazy"
          title="office-location"
        ></iframe>
      </div>

      {/* 2. ASOSIY FOOTER MA'LUMOTLARI */}
      <div className="bg-white py-24">
        <div className="w-[85%] mx-auto flex flex-col lg:flex-row justify-between gap-16">
          
          {/* Chap taraf: Aloqa ma'lumotlari */}
          <div className="lg:w-1/3">
            <div className="w-8 h-8 bg-[#FFE6D2] mb-8 relative">
               <div className="absolute top-0 right-0 w-4 h-4 bg-[#444CFC]"></div>
            </div>
            <h2 className="text-[48px] font-bold text-[#232536] leading-tight mb-10">
              Let's make something special
            </h2>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#232536]">Let's talk! 🤙</h3>
              <div className="text-lg text-[#232536] opacity-80">
                <p className="font-bold">020 7993 2905</p>
                <p>hi@finsweet.com</p>
              </div>
              <p className="text-gray-500 max-w-[250px]">
                DLF Cybercity, Bhubaneswar, India, & 52050
              </p>
            </div>
          </div>

          {/* O'ng taraf: Linklar Gridi */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12">
            
            {/* Menu 1 */}
            <ul className="flex flex-col gap-4 font-bold text-[#232536]">
              <li><Link to="/" className="hover:text-[#444CFC]">Home</Link></li>
              <li><Link to="/service" className="hover:text-[#444CFC]">Service</Link></li>
              <li><Link to="/company" className="hover:text-[#444CFC]">Company</Link></li>
              <li><Link to="/career" className="hover:text-[#444CFC]">Career</Link></li>
              <li><Link to="/blog" className="hover:text-[#444CFC]">News</Link></li>
            </ul>

            {/* Menu 2 */}
            <div className="flex flex-col gap-6">
              <p className="font-bold text-[#232536] opacity-50 uppercase tracking-widest text-xs">Service</p>
              <ul className="flex flex-col gap-4 text-[#232536] font-medium opacity-80">
                <li>Technical support</li>
                <li>Testing</li>
                <li>Development</li>
                <li>AWS/Azure</li>
                <li>Consulting</li>
                <li>Information Technology</li>
              </ul>
            </div>

            {/* Menu 3 */}
            <div className="flex flex-col gap-6">
              <p className="font-bold text-[#232536] opacity-50 uppercase tracking-widest text-xs">Resourses</p>
              <ul className="flex flex-col gap-4 text-[#232536] font-medium opacity-80">
                <li>About Us</li>
                <li>Testimonial</li>
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Blog</li>
              </ul>
              
              {/* Contact Us tugmasi (Dizayndagi chiziqcha bilan) */}
              <div className="mt-8 flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-2 bg-[#444CFC] group-hover:w-16 transition-all"></div>
                 <Link to="/contact" className="font-bold text-[#232536]">Contact Us →</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. ENG PASTI (Copyright) */}
      <div className="bg-[#FFE6D2] py-8">
        <div className="w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[#232536]">
          <div className="text-2xl font-bold italic">
            {'{'}Finsweet
          </div>
          <p className="font-medium">©2021 Finsweet</p>
          <div className="flex gap-6">
             {/* Ikonkalar uchun font-awesome yoki rasmlar ishlatish mumkin */}
             <a href="#" className="hover:opacity-60 transition-opacity">Facebook</a>
             <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
             <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
             <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default FooterContactUs;