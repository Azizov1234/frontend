import React, { useState } from 'react';

const JobDetails = () => {
  // Tablarni boshqarish uchun state
  const [activeTab, setActiveTab] = useState('Details');

  // Tab kontentlari
  const content = {
    Details: [
      "Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).",
      "Design & Create highly engaging industry-related content in both photo, gif & video format.",
      "Publish Posts on various social media channels.",
      "Promote content on social networks and monitor engagement (e.g. comments and shares).",
      "Research industry-related topics.",
      "Editing audio and sound design on projects.",
      "Engage in opportunities to develop original content and concepts for web and mobile.",
      "Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.",
      "Manage the day-to-day handling of all social media channels bunday LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and Youtube, adapting content to suit different channels."
    ],
    Requirements: [
      "Minimum 3 years of experience in Full Stack Development.",
      "Strong knowledge of Node.js, NestJS and React.js.",
      "Experience with PostgreSQL and Prisma ORM."
    ],
    Responsibilities: [
      "Collaborate with cross-functional teams to define and ship new features.",
      "Build reusable code and libraries for future use.",
      "Optimize applications for maximum speed and scalability."
    ]
  };

  return (
    <div className="w-full bg-white font-poppins pb-24">
      <div className="w-[85%] mx-auto py-16 flex flex-col lg:flex-row border border-gray-100 mt-10">
        
        <div className="lg:w-[60%] p-8 md:p-12 border-r border-gray-100 flex flex-col items-start">
          <span className="uppercase tracking-[0.3em] text-[13px] font-semibold text-[#232536] opacity-70">
            Career at Ether
          </span>
          <h1 className="text-[42px] md:text-[48px] font-bold text-[#232536] mt-4 mb-6 leading-tight">
            Full Stack Developer
          </h1>
          <p className="text-gray-500 text-lg max-w-[500px] mb-10 leading-relaxed">
            Through True Rich Attended does no end it his mother since real had half every him case in packages.
          </p>
          
          <button className="bg-[#444CFC] text-white px-10 py-4 font-bold flex items-center gap-3 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-4 h-4 bg-orange-400 opacity-40"></div>
            Apply Now <span>→</span>
          </button>
        </div>

        <div className="lg:w-[40%] bg-[#FFE6D2] p-10 md:p-14 relative flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-4">
            <img src="/images/Shapes.svg" alt="" className="w-8 h-8" />
          </div>
          
          <h3 className="text-2xl font-bold text-[#232536] mb-8">Job Description</h3>
          
          <ul className="flex flex-col gap-5 text-[#232536] font-medium opacity-90 text-lg">
            <li>Remote, India, 4 to 5 Years Of Experience</li>
            <li>Department: Product Engineering</li>
            <li>Full Time 5 Position Available.</li>
          </ul>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-20">
        <div className="flex justify-center gap-10 md:gap-20 border-b border-gray-200 bg-[#F9F9FF] py-6">
          {['Details', 'Requirements', 'Responsibilities'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-bold transition-all relative pb-2 ${
                activeTab === tab ? 'text-[#444CFC]' : 'text-[#232536] opacity-60'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-[26px] left-0 w-full h-[4px] bg-[#444CFC]"></div>
              )}
            </button>
          ))}
        </div>

        <div className="bg-[#F9F9FF] p-10 md:p-20">
          <ul className="flex flex-col gap-8 max-w-[900px] mx-auto">
            {content[activeTab].map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-[#232536] opacity-80 text-lg leading-relaxed">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-black shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
            
    </div>
    
  );
};

export default JobDetails;