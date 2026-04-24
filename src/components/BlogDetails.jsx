import React from 'react';
import Footer from './Footer';

const BlogDetails = () => {
  return (
    <section className="w-full py-20 bg-white font-poppins">
      <div className="w-full">
        
        {/* 1. HEADER QISMI (O'rtada bo'lishi uchun mx-auto qo'shildi) */}
        <div className="max-w-[840px] mx-auto px-6 mb-16">
          <div className="w-6 h-6 bg-[#FFE6D2] mb-6"></div>
          <h1 className="text-[48px] md:text-[56px] font-bold text-[#232536] leading-tight mb-8">
            Breaking the code How did we build our Figma plugin
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.
          </p>
          
          <div className="flex items-center gap-4">
            <img src="/images/Image (8).svg" alt="Andrew" className="w-12 h-12 rounded-full object-cover" />
            <div className="text-sm text-[#232536]">
              <p className="font-bold">Andrew Jonson</p>
              <p className="opacity-60">Posted on 27th January 2021</p>
            </div>
          </div>
        </div>

        {/* 2. ASOSIY RASM (Bu butun kenglikda, lekin konteyner ichida) */}
        <div className="max-w-[1280px] mx-auto px-6 mb-20 relative">
          <img src="/images/Image (9).svg" alt="Office" className="w-full h-[500px] object-cover" />
          {/* Rasm tagidagi chiziqcha */}
          <div className="absolute -bottom-0 right-6 w-[35%] h-5 flex">
             <div className="w-1/2 bg-[#FFD3AF]"></div>
             <div className="w-1/2 bg-[#444CFC]"></div>
          </div>
        </div>

        {/* 3. MATNLI KONTENT (Xuddi rasmdagidek o'rtada va cheklangan kenglikda) */}
        <div className="max-w-[840px] mx-auto px-6 flex flex-col gap-12">
          
          <div>
            <h2 className="text-[36px] font-bold text-[#232536] mb-6 leading-tight">
              Transform Your Idea Into Reality with Ether a Leading Digital Agency
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[36px] font-bold text-[#232536] mb-6 leading-tight">
              Transform Your Idea Into Reality with Ether a Leading Digital Agency
            </h2>
            <ul className="text-gray-500 text-lg space-y-4 list-none">
                <li>Step 1: Download the plugin from Figma community, search Ghost UXWriter</li>
                <li>Step 2: Open the plugin on your artboard</li>
                <li>Step 3: Search for your copy or look through the different categories of the copies</li>
                <li>Step 4: Select the type of error you are looking for. You will get three different copies for each error</li>
                <li>Step 5: Tap on the cards to insert text in your frames</li>
             </ul>
             <p className="text-gray-500 text-lg pt-4 italic">And you are all geared up to make your UX copies more fun and exciting 😎</p>
          </div>

          <div>
            <h2 className="text-[36px] font-bold text-[#232536] mb-6 leading-tight">
              Transform Your Idea Into Reality with Ether a Leading Digital Agency
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community.
            </p>
          </div>

        </div>

      </div>
      <Footer/>
    </section>
  );
};

export default BlogDetails;