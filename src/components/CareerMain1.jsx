import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Navigatsiya uchun hook

const positions = [
  { title: "Full Stack Developer", location: "Bengaluru · Full Time", salary: "$10K - $18K · No equity" },
  { title: "Testing Engineer", location: "Remote · Full Time", salary: "$08K - $10K · No equity" },
  { title: "Hr Manager", location: "Mumbai · Full Time", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
  { title: "Product Designer", location: "Mumbai · Full Time", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
  { title: "Wordpress Developer", location: "Mumbai · Full Time", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
  { title: "Jr. QA Tester", location: "California, USA · Full Time", salary: "$14K - $23K · No equity" },
  { title: "Sr. UX Designer", location: "California, USA · Full Time", salary: "$14K - $23K · No equity" },
  { title: "Social Media Manager", location: "Kolkata, India · Full Time", salary: "$5K - $8K · Fresher" },
  { title: "Golang Developer", location: "Mumbai · Full Time", salary: "$08K - $10K · 4 to 5 Yrs Exp" },
];

const OpenPositions = () => {
  const navigate = useNavigate(); // 2. Hookni chaqiramiz

  return (
    <section className="w-full py-24 bg-[#ECF8F9] font-poppins">
      <div className="w-[85%] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((item, index) => (
            <div 
              key={index} 
              onClick={() => navigate('/job-details')}
              className="bg-white p-10 flex flex-col items-start shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <h3 className="text-[20px] font-bold text-[#232536] mb-4 group-hover:text-[#444CFC] transition-colors">
                {item.title}
              </h3>
              
              <div className="flex flex-col gap-1 mb-8">
                <p className="text-gray-500 text-sm font-medium">{item.location}</p>
                <p className="text-gray-500 text-sm font-medium">{item.salary}</p>
              </div>

              <div className="text-[#444CFC] font-bold flex items-center gap-3 group-hover:gap-5 transition-all">
                Apply Now <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OpenPositions;