

const benefits = [
  { 
    title: "Covid-19 insurance", 
    desc: "Through True Rich Attended does no end it his mother since real had halfdoes no end it", 
    icon: "" 
  },
  { 
    title: "Flexible working time", 
    desc: "Through True Rich Attended does no end it his mother since real had halfdoes no end it", 
    icon: "⏰" 
  },
  { 
    title: "Work from home", 
    desc: "Through True Rich Attended does no end it his mother since real had halfdoes no end it", 
    icon: "🏠" 
  },
  { 
    title: "Annual retreats", 
    desc: "Through True Rich Attended does no end it his mother since real had halfdoes no end it", 
    icon: "⛱️" 
  },
  { 
    title: "Learning stipend", 
    desc: "Through True Rich Attended does no end it his mother since real had halfdoes no end it", 
    icon: "📚" 
  },
  { 
    title: "Gym membership", 
    desc: "Through True Rich Attended does no end it his mother since real had halfdoes no end it", 
    icon: "💪" 
  },
];

const WorkCulture = () => {
  return (
    <section className="w-full py-24 bg-white font-poppins">
      <div className="w-[85%] mx-auto">
        
        <div className="mb-16">
          <span className=" text-sm font-semibold text-[#232536] opacity-70">
            OUR WORK & CULTURE
          </span>
          <h2 className="text-[48px] font-bold text-[#232536] leading-tight mt-4 max-w-[600px]">
            Come and join a team of highly skilled professionals.
          </h2>
          <p className="text-gray-500 mt-6 max-w-[550px] text-lg">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#F9F9FF] p-10 hover:bg-[#FFE6D2] transition-colors duration-300 cursor-default group"
            >
              <div className="w-12 h-12 bg-[#FFE6D2] group-hover:bg-white rounded-full flex items-center justify-center text-2xl mb-6 transition-colors">
                {benefit.icon}
              </div>
              
              <h4 className="text-[24px] font-bold text-[#232536] mb-4">
                {benefit.title}
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkCulture;
