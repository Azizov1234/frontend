import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MeetOurTeam from '../components/MeetOurTeam';

export default function Company() {
  return (
    <div className="w-full bg-white font-poppins">

      <section className="w-full py-20 lg:py-32">
        <div className="w-[85%] mx-auto">
          <div className="max-w-[750px] relative">
            <div className="w-6 h-6 bg-[#FFE6D2] mb-8"></div>

            <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#232536] opacity-70">
              Company
            </span>

            <h1 className="text-[48px] lg:text-[56px] font-bold text-[#232536] leading-tight mt-4 mb-8">
              Award-winning Company seen and used by millions around the world.
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed max-w-[600px]">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.
            </p>

            <img
              src="/images/shapes-header.svg"
              alt=""
              className="absolute -top-10 -right-20 hidden xl:block"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <img src="/images/Image 1.svg" alt="" />
            <img src="/images/Image 2.svg" alt="" />
            <img src="/images/Image 3.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-white">
        <div className="w-[85%] mx-auto flex flex-col lg:flex-row items-center gap-20">

          <div className="lg:w-1/2 flex flex-col items-start">
            <div className="w-6 h-6 bg-[#5D5FEF] mb-6"></div>
            <span className="text-[#232536] font-bold text-xl mb-4">Our Story ✨</span>
            <h2 className="text-[48px] font-bold text-[#232536] leading-tight mb-8">
              From Startups to Titans of Industry
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do on a china mean its so ye when in explained. Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up.
            </p>
          </div>

          <div className="lg:w-1/2 bg-[#FFE6D2] p-12 md:p-20 grid grid-cols-2 gap-y-16 gap-x-10">
            <div>
              <h3 className="text-[42px] font-bold text-[#232536]">1560+</h3>
              <div className="w-10 h-1.5 bg-gradient-to-r from-orange-400 to-blue-600 my-3"></div>
              <p className="text-[#232536] font-bold opacity-80">Project Delivered</p>
            </div>
            <div>
              <h3 className="text-[42px] font-bold text-[#232536]">100+</h3>
              <div className="w-10 h-1.5 bg-gradient-to-r from-orange-400 to-blue-600 my-3"></div>
              <p className="text-[#232536] font-bold opacity-80">Professional</p>
            </div>
            <div>
              <h3 className="text-[42px] font-bold text-[#232536]">950+</h3>
              <div className="w-10 h-1.5 bg-gradient-to-r from-orange-400 to-blue-600 my-3"></div>
              <p className="text-[#232536] font-bold opacity-80">Happy Client</p>
            </div>
            <div>
              <h3 className="text-[42px] font-bold text-[#232536]">10 yrs</h3>
              <div className="w-10 h-1.5 bg-gradient-to-r from-orange-400 to-blue-600 my-3"></div>
              <p className="text-[#232536] font-bold opacity-80">Experience</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-[#F9F9FF]">
        <div className="w-[85%] mx-auto flex flex-wrap items-center justify-between gap-10 hover: transition-all duration-500">
          <img src="/images/Logo (1).svg" alt="logo" className=" w-[187px] h-[105px]" />
          <img src="/images/Logo (2).svg" alt="logo" className=" w-[187px] h-[105px]" />
          <img src="/images/Logo (3).svg" alt="logo" className=" w-[187px] h-[105px]" />
          <img src="/images/Logo (4).svg" alt="logo" className=" w-[187px] h-[105px]" />
          <img src="/images/Logo (5).svg" alt="logo" className=" w-[187px] h-[105px]" />
        </div>
      </section>
      <section className="w-[100%] bg-[#ECF8F9]  mt-[100px] h-[660px]  flex items-center justify-around gap-6">
        <div className="w-[624px] h-[364px] border-2 flex flex-col  items-start justify-center gap-6">
          <h3 className="text-black">OUR EXPERTISE</h3>

          <h1 className="text-black font-bold text-[48px] leading-[58px] fond-">
            We want to get local
            identification in every
            corner of the world in this
            era of global citizenship
          </h1>

          <p className="text-gray-500 ">
            Through True Rich Attended does no end it
            his mother since real had half every him
            case in packages enquire we up ecstatic
            unsatiable saw his giving Remain
            expense you position concluded.
          </p>
        </div>
        <div className="w-[512px] h-[468px] border-2 flex flex-col items-center justify-center gap-9">

          <div className=" w-[366px] h-[76px] flex   justify-start gap-4">
            <img src="/images/Group 1749.svg" alt="" className="w-[47px] h-[47px]" />
            <div className="w-[303px] h-[76px] flex flex-col  gap-4">
              <h6 className="text-black font-bold">On Time Delivery</h6>
              <p className="text-gray-500 text-[14px]">
                Through True Rich Attended
                does no end it his mother
                since real had half every him.
              </p>
            </div>
          </div>
          <div className=" w-[366px] h-[76px] flex   justify-start gap-4">
            <img src="/images/Group 1755.svg" alt="" className="w-[47px] h-[47px]" />
            <div className="w-[303px]  border-2 h-[76px] flex flex-col  gap-4">
              <h6 className="text-black font-bold">On Time Delivery</h6>
              <p className="text-gray-500 text-[14px]">
                Through True Rich Attended
                does no end it his mother
                since real had half every him.
              </p>
            </div>
          </div>
          <div className=" w-[366px] h-[76px] flex   justify-start gap-4">
            <img src="/images/Group 1855.svg" alt="" className="w-[47px] h-[47px]" />
            <div className="w-[303px] h-[76px] flex flex-col   gap-4">
              <h6 className="text-black font-bold">On Time Delivery</h6>
              <p className="text-gray-500 text-[14px]">
                Through True Rich Attended
                does no end it his mother
                since real had half every him.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-white font-poppins">
        <div className="w-[85%] mx-auto">

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

            <div className="flex flex-col items-start gap-3">
              <span className="uppercase tracking-[0.2em] text-sm font-semibold text-[#232536] opacity-70">
                Our Vision
              </span>
              <h2 className="text-[36px] md:text-[48px] font-bold text-[#232536] leading-tight max-w-[650px]">
                We want to get local identification in every corner of the world in this era of global citizenship.
              </h2>
            </div>

            <div className="flex flex-col items-start lg:pt-16">
              <p className="text-gray-500 text-lg leading-relaxed max-w-[550px]">
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
              </p>
            </div>
          </div>

          <div className="w-full h-[400px] md:h-[600px] overflow-hidden">
            <img
              src="/images/Image (6).svg"
              alt="Team working in office"
            />
          </div>

        </div>
      </section>
      <MeetOurTeam/>
      <Footer />
    </div>
  );
}