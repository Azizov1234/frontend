import React from 'react';

const servicesData = [
    {
        id: '01',
        title: 'Technical Support',
        desc: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.',
        image: '/images/Feature 1 Image.svg',
        imageLeft: false 
    },
    {
        id: '02',
        title: 'Development',
        desc: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.',
        image: '/images/Image (2).svg',
        imageLeft: true 
    },
    {
        id: '03',
        title: 'AWS/Azure',
        desc: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.',
        image: '/images/Image (3).svg',
        imageLeft: false 
    },
    {
        id: '04',
        title: 'Consulting',
        desc: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.',
        image: '/images/Image (4).svg',
        imageLeft: true 
    },
    {
        id: '05',
        title: 'Information Technology',
        desc: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.',
        image: '/images/Image (5).svg',
        imageLeft: false 
    }
];

const ServiceDetails = () => {
    return (
        <section className="w-full py-24 bg-white font-poppins">
            <div className="w-[85%] mx-auto mb-20">
                <span className="uppercase tracking-[0.2em] text-sm font-semibold text-gray-500">Our Services</span>
                <h2 className="text-[48px] font-bold text-[#232536] mt-4 max-w-[700px] leading-[58px]">
                    We Build Software Solution that Solve Clients Business Challenges
                </h2>
            </div>

            <div className="w-[85%] mx-auto flex flex-col gap-32">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center gap-16 md:gap-24 ${service.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Rasm qismi */}
                        <div className="w-full md:w-1/2 h-[350px] md:h-[450px] relative">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover shadow-lg"
                            />
                            <div className="absolute top-0 left-0 w-8 h-8 bg-[#FFE6D2] opacity-70"></div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col items-start gap-5">
                            <span className="text-[18px] font-bold text-[#232536] opacity-60">
                                {service.id}
                            </span>
                            <h3 className="text-[36px] font-bold text-[#232536] leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-[500px]">
                                {service.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceDetails;