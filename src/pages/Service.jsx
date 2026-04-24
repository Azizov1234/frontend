import React from 'react';
import Navbar from '../components/Navbar';
import Maintance from "../components/Maintance";
import ServiceDetails from '../components/ServiceDeatils';
import Footer from '../components/Footer';

const Service = () => {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">

      <section className="w-full bg-[#FFE6D2] py-24">
        <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="flex flex-col items-start gap-6">
            <span className="uppercase tracking-widest text-sm font-semibold text-[#232536]">
              Our Services
            </span>
            <h1 className="text-[56px] font-bold text-[#232536] leading-tight">
              We Build Software Solutionthat Solve Clients Business Challenges
            </h1>
            <p className="text-[#232536] opacity-70 text-lg max-w-[500px]">
              Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
            </p>

            <button className="bg-[#444CFC] text-white px-10 py-5 flex items-center gap-3 font-bold mt-4 relative group">
              <img src="/images/Shapes.svg" alt="" className="absolute top-0 left-0 w-5 h-5"/>
              Request A Quote <span>→</span>
            </button>
          </div>

          <div className="flex flex-col gap-6 items-start lg:pl-20">
            <h3 className="text-3xl font-bold text-[#232536] hover:text-blue-600 cursor-pointer">Technical support</h3>
            <h3 className="text-3xl font-bold text-[#232536] flex items-center gap-4 group cursor-pointer hover:text-blue-600">
              Development <span className="transition-transform group-hover:translate-x-2">→</span>
            </h3>
            <h3 className="text-3xl font-bold text-[#232536] hover:text-blue-600 cursor-pointer">AWS/Azure</h3>
            <h3 className="text-3xl font-bold text-[#232536] hover:text-blue-600 cursor-pointer">Consulting</h3>
            <h3 className="text-3xl font-bold text-[#232536] hover:text-blue-600 cursor-pointer text-left">Information Technology</h3>
          </div>

        </div>
      </section>
      <Maintance />
      <ServiceDetails />
      <Footer />
    </div>
  );
};

export default Service;