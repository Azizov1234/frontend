import React from 'react';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <section className="w-full font-poppins bg-white">
      {/* 1. HEADER QISMI */}
      <div className="w-[85%] max-w-[840px] mx-auto py-20 text-center md:text-left">
        <div className="w-6 h-6 bg-[#FFE6D2] mb-6 inline-block md:block"></div>
        <h1 className="text-[48px] md:text-[56px] font-bold text-[#232536] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400">Last Updated on 27th January 2021</p>
      </div>

      {/* 2. KONTENT QISMI (Och ko'kish fonda) */}
      <div className="bg-[#F9F9FF] py-24">
        <div className="w-[85%] max-w-[840px] mx-auto flex flex-col gap-12">
          
          {/* Birinchi blok */}
          <div>
            <h2 className="text-[36px] font-bold text-[#232536] mb-8 leading-tight">
              Transform Your Idea Into Reality with Ether a Leading Digital Agency
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community.
              </p>
              <p>
                Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community.
              </p>
            </div>
          </div>

          {/* Ikkinchi blok: We disclose your information */}
          <div>
            <h2 className="text-[36px] font-bold text-[#232536] mb-8 leading-tight">
              We disclose your information in the following manner:
            </h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
              <p>
                Business partners, suppliers and sub-contractors (“Affiliates”): Affiliates may use this information to help provide, understand, and improve our services and Affiliate’s own services for the performance of any contract we enter into.
              </p>
              <p>
                Financial Institutions and Auditors: In order to complete third party financial, technical and legal audits of our operations to help us operate our business, we may need to share your information with financial institutions and auditors.
              </p>
              <p>
                Advertisers and Advertising Networks: To provide you with select and serve relevant advertisements to you and others, we may share your data with advertiser sand advertising networks. We do not disclose your Personal Information or Sensitive Personal Information to our advertisers, but we may provide them with aggregate information about our users.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Sahifa oxiridagi dekorativ rangli chiziq (Dizaynda bor) */}
      <div className="w-full h-4 flex">
        <div className="w-[10%] bg-[#444CFC]"></div>
        <div className="w-[15%] bg-[#FFD3AF]"></div>
        <div className="w-[5%] bg-[#FFD3AF] opacity-50"></div>
      </div>
      <Footer/>
    </section>
  );
};

export default PrivacyPolicy;