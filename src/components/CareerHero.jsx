import React from 'react';

const CareerHero = () => {
  return (
    <section className="w-full py-20 bg-white font-poppins text-center">
      <div className="w-[85%] mx-auto">
        
        <div className="max-w-[800px] mx-auto mb-12 relative">
          <span className=" tracking-[0.3em] text-sm font-semibold text-[#232536] opacity-70">
            CAREER AT FINSWEET
          </span>
          <h1 className="text-[48px] lg:text-[56px] font-bold text-[#232536] leading-tight mt-4 mb-8">
            We hired people who are Always Passionate about what they do
          </h1>
          <p className="text-gray-500 text-lg max-w-[600px] mx-auto">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.
          </p>
          
          <div className="absolute -top-10 -right-10">
            <img src="/images/shapes-header.svg" alt="" className="w-12 h-12" />
          </div>
        </div>

        <div className="my-16">
          <img src="/images/Image (7).svg" alt="" />
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <p className="text-[#232536] font-bold text-lg">See Our open positions</p>
          <span className="text-2xl animate-bounce">👇</span>
        </div>

      </div>
    </section>
  );
};

export default CareerHero;